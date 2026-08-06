# QA suite

Deterministic checks for tripleandco.com. Runs in `.github/workflows/qa.yml` on every push
to `initial-base`, on every pull request, and on a schedule at 06:00 UTC on Mondays against
production. A failure emails lihi@tripleandco.com.

Dependencies live in `qa/package.json`, deliberately separate from the app's, so nothing
here can affect a Vercel build.

## Run it locally

```bash
# from the repo root
npm ci && npm run build && npx next start -p 3000 &

cd qa
npm install
npx playwright install chromium

npx playwright test tests/routes.spec.ts   # 36 routes, desktop and mobile
node aggregate.mjs                          # cross-route SEO checks
npx playwright test tests/a11y.spec.ts --project=desktop
node rules.mjs                              # source-level house rules, no server needed

npx playwright show-report results/html-report
```

Against production instead of a local build:

```bash
BASE_URL=https://www.tripleandco.com npx playwright test tests/routes.spec.ts
```

## What each piece checks

| File | Checks |
|---|---|
| `routes.mjs` | Enumerates routes by walking `src/app` for `page.tsx`. Nothing is hardcoded, so a new page is covered the moment it exists. |
| `tests/routes.spec.ts` | Per route: HTTP status, console errors, failed same-origin requests, every internal link resolves, every image resolves and has alt text, title and description length, canonical, single `<h1>`, JSON-LD parses. |
| `aggregate.mjs` | Across routes: duplicate titles and descriptions, canonical host and path, `og:url` correctness, sitemap coverage. Skips anything marked `noindex`. |
| `tests/a11y.spec.ts` | axe-core WCAG 2.1 AA. Fails only on **new** serious or critical violations. |
| `rules.mjs` | Source-level house rules: em and en dashes in shipped copy, banned vocabulary, broken image references, junk files, routes with no metadata export. |

## The two baselines

Both exist so the gate flags regressions instead of sitting permanently red.

**`a11y-baseline.json`** records the accessibility debt that existed on 2026-08-06: 40
serious or critical violations across 36 routes, mostly `color-contrast` where brand pink
meets white text. New violations fail. Baselined ones are reported and ignored.

Regenerate after fixing something:

```bash
npx playwright test tests/a11y.spec.ts --project=desktop
node -e "
const fs=require('fs'),g=require('glob');
const acc={};
for(const f of fs.readdirSync('results/a11y').filter(f=>f.startsWith('desktop__'))){
  const d=JSON.parse(fs.readFileSync('results/a11y/'+f,'utf8'));
  const ids=d.violations.filter(v=>['serious','critical'].includes(v.impact)).map(v=>v.id);
  if(ids.length) acc[d.route]=[...new Set(ids)].sort();
}
fs.writeFileSync('a11y-baseline.json',JSON.stringify({_comment:'Accessibility debt. Shrink this, do not grow it.',accepted:acc},null,2)+'\n');
"
```

**`rules.config.json`** exempts specific paths from specific copy rules. Every entry needs a
reason in `_reasons`. Keep the list short: an exemption is debt, not a fix.

## Adding a check

Put it wherever it costs least:

- Something checkable from source alone goes in `rules.mjs`. Runs in seconds, no browser.
- Something about one rendered page goes in `tests/routes.spec.ts`.
- Something comparing pages goes in `aggregate.mjs`.
- Something needing judgment does not go here at all. It goes in `REVIEW.md` for Claude Code
  Review, or in `.claude/skills/site-qa-report/SKILL.md` for the reporting step.

That last line is the design. Rules measure, the agent judges. A check that produces false
positives trains everyone to ignore the gate, which is worse than not having it.

## Environment variables

| Variable | Purpose |
|---|---|
| `BASE_URL` | What to test. Defaults to `http://127.0.0.1:3000`. |
| `PW_CHROMIUM_PATH` | Escape hatch for sandboxes that ship their own Chromium and cannot run `playwright install`. CI leaves it unset. |
