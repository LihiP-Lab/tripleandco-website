---
name: site-qa-report
description: >-
  Triage the tripleandco.com QA artifacts and write qa-report.md. Invoked as /site-qa-report
  by the QA GitHub Actions workflow after the route sweep, accessibility sweep, and house-rule
  checks have run. Reads the JSON artifacts, separates real regressions from noise, and writes
  a short prioritized report.
allowed-tools: Read, Glob, Grep, Bash(ls:*), Bash(cat:*), Bash(git diff:*), Bash(git log:*), Write
---

# Site QA report

You are the judgment layer of the QA pipeline. The deterministic checks already ran and
measured everything. Your job is to decide **what actually matters** and say so briefly.

## Inputs

Artifacts are under `qa-artifacts/` (they may be missing if a job failed early, which is
itself worth reporting):

| Path | What it holds |
|---|---|
| `qa-artifacts/qa-rules/rules.json` | House-rule findings: em dashes, banned vocabulary, junk files, missing metadata exports |
| `qa-artifacts/qa-browser/aggregate.json` | Cross-route SEO: duplicate titles and descriptions, canonical errors, og:url problems, sitemap gaps |
| `qa-artifacts/qa-browser/meta/*.json` | Per-route head tags, links, images, third-party request failures |
| `qa-artifacts/qa-browser/a11y/*.json` | Per-route axe results. `baselined: true` means pre-existing debt, `newViolations` is what regressed |
| `qa-artifacts/qa-browser/playwright.json` | Raw test results with failure messages |

Also read the diff for this change (`git diff origin/initial-base...HEAD` on a PR, or
`git log -1 -p` on a push) so you can connect a finding to the change that caused it.

## How to triage

Rank by **impact on organic traffic and conversion**, not by how loud the tool was.

1. **Regression caused by this change**. The check passed before and fails now, and the
   diff explains why. Always the top of the report.
2. **Real problem, pre-existing**. Worth fixing, not caused by this change. Say so
   explicitly so nobody wastes time bisecting.
3. **Noise**. Do not list it. Third-party failures (Calendly, HubSpot embeds), baselined
   a11y debt, and warnings on `noindex` pages are noise unless something changed.

Specific judgment calls:

- A duplicate title or description across routes is a real SEO problem. Say which routes.
- A missing `og:url` or `og:image` degrades link previews. Real, but rarely urgent.
- `color-contrast` findings on brand pink are a known tension between the brand palette and
  WCAG AA. Report the count, do not relitigate it every run.
- Banned vocabulary and em dashes are house rules from the Triple voice guide. Flag them with
  the line and a suggested replacement. Numeric ranges take a hyphen, asides take parentheses,
  metadata separators take a middle dot.
- If an entire job failed to produce artifacts, that is the headline finding.

## Output

Write `qa-report.md` in the repository root. Nothing else. Keep it under 40 lines.

```markdown
## QA report · <short sha or "production sweep">

**<one sentence verdict: what shipped, what broke, what to do first>**

### Regressions
- `<route or file>`: <what broke, and the line in the diff that caused it>

### Pre-existing
- <finding> (not caused by this change)

### Clean
<one line naming what was checked and passed, so a green run still says something>
```

If nothing is wrong, say so in two lines. Do not pad. Do not restate the checklist.

## Style

No em dashes anywhere in the report. Short sentences. Name the file and line. Never say
"consider reviewing" when you mean "this is broken."
