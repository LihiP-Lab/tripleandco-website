---
name: testing-tripleandco
description: How to run and test the Triple & Co. Next.js site locally, including the AI Visibility Checker.
---

# Testing tripleandco-website

- Start locally with `npm run dev` (Next.js + Turbopack, port 3000, ready in <1s). Deps: `npm install --no-audit --no-fund`.
- Redirect dev output to a file (e.g. `npm run dev > /tmp/dev.log 2>&1 &`): the `/api/visibility-check` route logs JSON events (`visibility_check` / `visibility_check_failed`) to stdout that tests should assert on.
- AI Visibility Checker lives at `/ai-visibility-checker` (component `src/components/VisibilityChecker.tsx`). It supports shared links: `?domain=example.com` auto-runs the check on load; a successful check rewrites the URL via `history.replaceState`. Watch for regressions where replaceState retriggers the auto-run effect and double-runs the check (fixed once by setting `autoRan.current = true` before replaceState).
- `/api/visibility-check` fetches external sites (homepage, llms.txt, robots.txt, sitemap.xml), so the box needs outbound internet. Good test domains: stripe.com (~96), vercel.com (~92); use a garbage domain like nonexistent-domain-zz123456.com for the error path.
- Theme: navbar toggle button (aria-label "Switch to dark/light mode") sets `data-theme` on <html>. Per AGENTS.md, any color utility used on light surfaces must have a `[data-theme="dark"]` remap in globals.css; check touched pages in both themes.
- The check has an artificial ~8-10s narration delay before results reveal; wait ~11s after submitting before asserting.
- For production-build testing use `npm run build && npm run start`; kill any stale `next-server` holding port 3000 first (`pkill -f next-server`). A leftover dev server causes webpack-hmr console-error noise in QA tests.
- Dynamic OG scorecards live at `/api/og/visibility?domain=X` (1200x630 PNG; example.com scores ~48/red, stripe.com ~96/green; invalid/missing domain returns the generic card). `/ai-visibility-checker?domain=X` emits personalized og:title/og:image.
- When typing OG/API URLs in Chrome's address bar, press Delete after typing to defeat URL-bar autocomplete re-navigating to previously visited URLs.
- QA suites live in `qa/` (`npx playwright test tests/routes.spec.ts` / `tests/a11y.spec.ts` with `TEST_PRODUCTION=false` against localhost:3000). The a11y suite gates on NEW violations vs `qa/a11y-baseline.json`.
