---
name: testing-tripleandco
description: Test the tripleandco.com Next.js marketing site end-to-end (new landing/service/comparison/GEO pages). Use when verifying UI, copy, schema, or routing changes.
---

# Testing tripleandco.com

Next.js 16 (App Router) marketing site. Most work is new content pages built on a shared design system, plus SEO/GEO concerns (schema, sitemap, no em dashes). This skill covers how to verify those changes quickly and prove them with a recording.

## Guardrails to always verify (project rules)
- **No rendered em dashes** (U+2014) anywhere. This is a hard site-wide rule.
- **No public pricing** on pages (per-agent pricing in `src/lib/agents-data.ts` is kept, but must not surface as public price ranges on new pages).
- **No testimonials / Review / AggregateRating schema** until the user supplies real ones.
- Keep the existing visual system; use the 8 named agents (Camille, Rex, Zara, Nova, Atlas, Sage, Vega, Lumen) and Lihi Pinto imagery for the "Woman in the Loop" story.

## Local setup / dev server
```bash
cd ~/repos/tripleandco-website
nohup npm run dev > /tmp/devserver.log 2>&1 &
sleep 7 && curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```

## Fast preflight (run before any UI test)
```bash
npx tsc --noEmit
npx eslint <changed files>
```

## Automated per-route checks
For each new/changed route, verify HTTP 200, zero rendered em dashes, and expected JSON-LD:
```bash
for r in <route1> <route2>; do
  echo "/$r -> $(curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/$r), \
emdash=$(curl -s http://localhost:3000/$r | grep -c $'\u2014'), \
schemas=$(curl -s http://localhost:3000/$r | grep -o 'FAQPage\|\"Service\"\|\"Article\"\|BreadcrumbList' | sort -u | tr '\n' ' ')"
done
```
- Service pages -> `Service` + `FAQPage` + `BreadcrumbList`.
- Guide/article pages -> `Article` + `FAQPage` + `BreadcrumbList`.
- Also confirm the new route is in `src/app/sitemap.ts` (both the routes array and the priority-0.9 condition) and linked from `src/components/Footer.tsx`.

## Testing multiple stacked/independent PRs together
When several feature branches each add pages and all branch from `initial-base`, they usually touch the same shared files (`sitemap.ts`, `Footer.tsx`, `services/page.tsx`). To render them all at once for one continuous recording, make a **throwaway local integration branch** (do not push it):
```bash
git checkout -B test/local-integration origin/initial-base
git merge --no-edit <branchA> <branchB> <branchC>   # octopus merge often works cleanly
```
If it merges cleanly, the dev server (running) hot-reloads and all pages are reachable. Delete the branch after (`git checkout <branch> && git branch -D test/local-integration`).

## Keep slices isolated
Build each slice on its own branch from `initial-base` so PRs stay independent. A common trap: creating the next slice's files while still checked out on the previous slice's branch. Check `git status` / `git branch --show-current` before committing, and move stray untracked page dirs / shared-file edits onto the correct branch. Untracked files carry across `git checkout`, so you can create the new branch from `initial-base` and re-apply the shared-file edits (sitemap/footer) there.

## Common review nits when adding a service card
`src/app/services/page.tsx` has multiple places that must stay in sync when you add/remove a service:
- metadata description count ("Nine services...")
- hero badge count ("9 services")
- the `jumpLinks` array (quick-jump nav) order and entries
The homepage `src/components/ServicesSection.tsx` ("Nine ways to triple your revenue") is a **separate** list; only update it if the new service should appear there too.

## Verifying og:image / share cards (Next.js gotcha)
The site uses file-based OG images: a shared card factory `ogCard` in `src/lib/og.tsx` and per-route `opengraph-image.tsx` files. Key trap: **Next.js does NOT attach a parent `opengraph-image` to a route that declares its own `openGraph` metadata object.** So a page that sets `export const metadata = { openGraph: {...} }` will ship with NO `og:image` unless it has its own `opengraph-image.tsx` (or `images` in that openGraph block). The root card alone is not enough for those pages.

To find pages missing it, build then scan the prerendered HTML (authoritative, avoids dev/stale-server false negatives):
```bash
rm -rf .next && npm run build
find .next/server/app -name "*.html" | while read h; do \
  [ "$(grep -oc 'property=\"og:image\"' "$h")" = "0" ] && echo "MISSING: ${h#.next/server/app/}"; done
```
Fix pattern: add a one-file `opengraph-image.tsx` per missing route reusing `ogCard({ eyebrow, title, subtitle })`. Verify a couple render on-brand by opening `/<route>/opengraph-image` in the browser (should be a 1200x630 PNG with the brand gradient, logo, Lihi + agent bots). Confirm cards differ per route so it is not one static image. If you only trust a running server, restart `next start` fresh (kill stale processes on :3000) since stale servers can report false og:image negatives.

## UI recording flow
1. Maximize the browser: `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`
2. Navigate via the address bar (`ctrl+l`) and via real footer/FAQ links to prove internal linking.
3. Annotate: one `test_start` per page, `assertion` (passed/failed) after verifying the distinguishing content (comparison table highlighted column, FAQ accordion aria-expanded false->true, checklist card count, agent carousel).
4. The stripped DOM returned with each screenshot is reliable for reading `aria-expanded`, table columns, and link hrefs.

## Known pending / cleanup
- A real HubSpot test lead may exist from audit-form testing (`Devin Test`, devin-test+aiaudit@tripleandco.com) — ask the user to delete it; you cannot.

## Devin Secrets Needed
- `RESEND_API_KEY` (optional; notification email only).
- `DEMO_ACCESS_CODE` (only for the gated demo dashboard, not needed for content-page testing).
- HubSpot contact submission requires a non-empty last name; the audit/contact form must split a single "Full Name" field into first/last or HubSpot returns a 502.
