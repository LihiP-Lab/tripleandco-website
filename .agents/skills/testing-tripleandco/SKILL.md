---
name: testing-tripleandco
description: Test the Triple & Co. Next.js marketing site end-to-end. Use when verifying UI, copy, dashboards, or SEO/GEO changes on tripleandco-website.
---

# Testing the Triple & Co. website

Next.js 16 (App Router) + React 19 + Tailwind v4 marketing site for tripleandco.com.

## Local setup

```bash
cd ~/repos/tripleandco-website
npm install
npm run dev        # serves http://localhost:3000
```

Verify: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/` returns 200.

Checks before claiming done:
```bash
npx tsc --noEmit   # typecheck
npm run lint        # note: a handful of PRE-EXISTING lint errors may already be present on base
```
Confirm lint errors match the base branch (they aren't from your change) with a diff check before reporting them.

## Key routes worth testing

- `/` homepage (hero, ThreeLayers, Architecture agent grid, LiveCommandCenter, Operator, WhyDifferent differentiators, Services)
- `/agents` full agent roster with descriptions + pricing (`$X/mo · $Y/hr`)
- `/cmo-as-a-service` agent carousel intro
- `/insights/revenue`, `/insights/strategy`, `/insights/podcasts`
- `/about`, `/about-he` (Hebrew, RTL)

No login/secrets needed for public copy pages. `DEMO_ACCESS_CODE` gates the demo intelligence dashboard only.

## Copy / punctuation testing (e.g. em-dash removal)

Copy changes are static, so verify via rendered DOM + an automated grep backstop; a short recorded browser pass is good proof.

Em dashes hide in three forms — check ALL of them, a plain literal search misses two:
```bash
grep -rn $'\u2014' src public   # literal —  (exclude src/lib/demo-access.ts, a documented comment)
grep -rn '\\u2014' src public    # escaped in .ts/.tsx data files
grep -rn '&mdash;' src public    # HTML entity in JSX/HTML
```
Data files (`src/lib/agents-data.ts`, insight `page.tsx` arrays) often use `\u2014`
escapes that don't render until you view the page — always confirm on the rendered
page, not just source. Preserve en dashes (`–`) in numeric ranges like "2–4".

Guardrails for this site: no em dashes in copy; keep pricing in `agents-data.ts`
(it should render on `/agents`); no testimonials/Review schema until provided; keep
the design structure; use the named agents (Camille/Rex/Zara/Nova/Atlas/Sage/Vega/Lumen).

## Recording tips

- Maximize first: `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`
- The computer tool returns an annotated DOM alongside the screenshot — use it to
  read exact rendered text (fast, reliable for punctuation assertions), but still
  click/scroll via the computer tool. `zoom` into a text block for a legible frame.

## Repo conventions

- `AGENTS.md` requires consulting Next.js 16 docs under `node_modules/next/dist/docs/`
  before writing framework code (APIs differ from older Next.js).

## Devin Secrets Needed

- `DEMO_ACCESS_CODE` — only if testing the gated demo intelligence dashboard. Not
  needed for public marketing/copy pages.
