---
name: testing-tripleandco
description: End-to-end testing of the Triple & Co. Next.js website. Use when verifying UX/UI features, page rendering, dark mode, modals, animations, proposals, and mobile responsiveness.
---

# Testing Triple & Co. Website

## Quick Start

```bash
cd /home/ubuntu/repos/tripleandco-website
npm run dev
# Dev server runs on http://localhost:3000
```

## Key Test Areas

### 1. Homepage
- Hero section with orbiting agent animations
- Section order: Hero → Diagnosis → Architecture (agents) → Operator → WhyDifferent → Services → FAQ → CTA
- Agent cards link to `/agents#agent-name` with smooth scroll
- Dark mode toggle in navbar switches logo (bright for dark, dark for light)
- Favicon shows Triple&Co monogram (pink/purple squares)

### 2. Proposal Pages (`/proposals/[client-name]`)
- Proposals are static HTML files in `/public/proposals/[client-name]/index.html`
- Clean URLs work via rewrite rule in `next.config.ts` (e.g., `/proposals/once-hr`)
- Agent images use absolute paths: `/images/agents/[name].png` (lowercase)
- Accept form POSTs to `/api/proposals/sign` (not mailto:)
- Form validation: button disabled until name + role + checkbox are filled
- Success state: button shows "Signed ✓", success message "Welcome to Triple & Co." appears
- API returns `{"success": true, "signature": {...}}`
- Email notification requires `RESEND_API_KEY` env var (skipped gracefully without it)

### 3. Revenue Diagnostic (`/revenue-diagnostic`)
- HubSpot form integration (portal ID: 148346424)
- Form submission sends data to HubSpot CRM
- CTA buttons throughout site link here

### 4. Builder Profile (`/builder-profile`)
- 10 sections: breadcrumb, hero (Lihi photo + stats), "What I Build" cards, "Why Lihi" bullets, 4-phase framework, mid-page CTA, 8 agent cards, signature outcome, FAQ accordion, final CTA
- Hero shows Lihi's headshot (`/images/lihi.png`), 3 stat cards (3×, 10+, 4-phase)
- Agent cards link to `/agents#agent-name` (8 agents: camille, vega, rex, zara, nova, atlas, sage, lumen)
- FAQ uses client component `BuilderFAQ.tsx` — page itself is a Server Component (for SEO metadata)
- Page exports `Metadata` with title "Builder Profile — Lihi Pinto" and description
- At mobile (375px): cards stack single-column, agent grid becomes 2-column, navbar collapses to hamburger

### 5. Dark Mode
- Toggle in navbar header
- Logo switches between `/images/logo-dark.png` and `/images/logo-bright.png`
- All sections should remain readable in both modes

### 6. SEO Metadata Pattern
- All pages should be Server Components to export `Metadata` (title, description, OG tags)
- If a page needs interactive elements (useState, useRef), extract them to client components in `/src/components/`
- Check metadata via: `curl -s http://localhost:3000/[page] | grep -E '<title>|<meta name="description"'`
- Common issue: adding `"use client"` to a page prevents metadata export — always extract client logic instead

### 7. SEO Infrastructure (sitemap, robots, canonical)
- **sitemap.xml**: Auto-generated via `src/app/sitemap.ts`. Verify at `/sitemap.xml`
  - Check: valid XML, 12 routes, all URLs use `https://www.tripleandco.com`
  - `curl -s http://localhost:3000/sitemap.xml | grep -c '<url>'` should return 12
- **robots.txt**: Auto-generated via `src/app/robots.ts`. Verify at `/robots.txt`
  - Expected: Allow `/`, Disallow `/api/` and `/proposals/`, Sitemap reference
- **Canonical tags**: Each page has `alternates: { canonical: "/path" }` in metadata
  - Verify: `curl -s http://localhost:3000/[page] | grep -o 'rel="canonical" href="[^"]*"'`
  - All should use `https://www.tripleandco.com/[path]` (www prefix required)
  - `metadataBase` is set in `src/app/layout.tsx` — this resolves relative canonical paths
- **OpenGraph URL**: `og:url` should be `https://www.tripleandco.com` (not bare domain)
- **Redirects**: WordPress legacy URLs in `next.config.ts` (`redirects()` function)
  - Next.js uses 308 (not 301) for `permanent: true` redirects
  - Trailing-slash variants use a 2-hop chain: Next.js strips slash first, then custom redirect fires
  - Test with: `curl -s -o /dev/null -w "%{http_code} %{redirect_url}" http://localhost:3000/[old-url]`

## Common Issues & Workarounds

### Vercel Preview Login
- Vercel preview URLs might require authentication
- Workaround: test on local dev server (`npm run dev` on localhost:3000) instead
- Local testing is equivalent for most features

### Branch Sync
- Vercel production may deploy from a different branch than `initial-base`
- A GitHub Action (`.github/workflows/sync-vercel-branch.yml`) auto-syncs branches
- If production seems stale, manually sync: `git push origin initial-base:devin/1779626867-initial-website`

### Static HTML in /public
- Next.js does NOT auto-resolve `index.html` for subdirectories in `/public/`
- Clean URLs require explicit rewrite rules in `next.config.ts`
- If a new proposal returns 404, check that the rewrite pattern covers it

### Scroll-Triggered Animations
- Some sections use IntersectionObserver for fade-in animations
- Elements might appear "empty" until scrolled into view
- Scroll past the section and back to trigger animations if needed

## Test Checklist Template

For any new feature, verify:
1. Page loads without errors (no 404, no console errors)
2. All images render (no broken icons)
3. Interactive elements work (forms, buttons, links)
4. Dark mode appearance is correct
5. Mobile viewport is usable (resize to 375px width)

## Devin Secrets Needed

- `RESEND_API_KEY` — for email notification testing (optional, form works without it)
- HubSpot portal access — for verifying CRM submissions (optional)
