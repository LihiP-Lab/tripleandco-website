---
name: testing-tripleandco
description: End-to-end testing of the Triple & Co. Next.js website. Use when verifying UX/UI features, page rendering, dark mode, modals, animations, and mobile responsiveness.
---

# Testing Triple & Co. Website

## Prerequisites

- Node.js and npm installed
- Dev server running at `localhost:3000` (`npm run dev` from repo root)
- Chrome browser available for GUI testing
- wmctrl installed for window maximization (`sudo apt-get install -y wmctrl`)

## Devin Secrets Needed

None — no authentication or API keys required for local testing.

## Setup

1. `cd /home/ubuntu/repos/tripleandco-website`
2. `npm install` (if not already done)
3. `npm run dev` (start dev server in background shell)
4. Verify with `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000` — expect `200`
5. Maximize browser: `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`

## Key Components to Test

| Feature | Component File | Trigger |
|---------|---------------|---------|
| Scroll animations | `ScrollReveal.tsx` | IntersectionObserver on scroll |
| Stats counter | `StatsSection.tsx` + `useCountUp` hook | Scroll into viewport |
| FAQ accordion | `FAQ.tsx` | Click question button, height transition 0.4s |
| Agent modals | `AgentModal.tsx` + `ArchitectureSection.tsx` | Click agent card → `<dialog>.showModal()` |
| Dark mode | `ThemeToggle.tsx` + `ThemeProvider.tsx` | Click moon/sun icon, persists to localStorage |
| Active nav | `Navbar.tsx` | `usePathname()` comparison, gradient underline |
| Back-to-top | `BackToTop.tsx` | Appears at `scrollY > 600`, smooth scroll to top |
| Mobile CTA | `MobileCTA.tsx` | Appears at `scrollY > 500`, `lg:hidden` |
| Page transitions | `PageTransition.tsx` | Fade on route change |
| Accessibility | `layout.tsx` | Skip-to-content link, ARIA labels, focus-visible |

## Test Procedure

### 1. Homepage Light Theme
- Navigate to `localhost:3000`
- Verify: light purple background, dark hero, glass navbar, orbital animation, nav links + CTA

### 2. Scroll Animations
- Scroll down past hero to Diagnosis section
- Verify: content fades in (opacity transition via ScrollReveal)

### 3. Stats Counter
- Scroll to stats band section
- Verify: numbers show final values (14, 3h 12m, 94%)

### 4. Homepage → Agents Page Navigation
- Scroll to Architecture section, click any agent card (e.g., Camille)
- Verify: URL changes to `/agents#camille`, page navigates to agents page with Camille's card scrolled into view
- Agent cards on homepage link to `/agents#<agent-name>` (lowercase name matches agent id)
- All 8 agents: camille, vega, rex, zara, nova, atlas, sage, lumen

### 5. FAQ Accordion
- Scroll to FAQ section
- Click a question
- Verify: answer expands with height animation, `aria-expanded="true"`
- Click again to collapse

### 6. Dark Mode Toggle
- Click moon icon in navbar
- Verify: dark background, light text, icon changes to sun, label "Switch to light mode"
- Click again to revert

### 7. Active Nav Indicator
- Click "About" in navbar
- Verify: "About" link styled pink with gradient underline

### 8. Back-to-Top Button
- Scroll down past 600px on any page
- Verify: pink floating button appears bottom-right
- Click it → smooth scroll to top, button disappears

### 9. All Pages Render
- Visit /about → "Hey! I'm Lihi" with photo and bio
- Visit /agents → 8 agent cards with images, names, roles, descriptions
- Visit /contact → form with Name, Email, Company, Message fields + location info

### 11. Agents Page — Category Filters
- Navigate to `/agents`, verify "All" filter is active (pink pill), counter shows "8 agents"
- Click "Design" → only Vega shown, counter "1 agent" (singular)
- Click "Content" → 4 agents shown (Camille, Zara, Nova, Sage), counter "4 agents"
- Filter counts: All=8, Writing=1, Design=1, Strategy=1, Social=1, Research=1, Analytics=1, Content=4, Video=1
- Active pill gets pink/brand background, inactive pills revert

### 12. Agents Page — Breadcrumbs
- On `/agents`, verify breadcrumbs show "Home > Marketing Agents" with chevron separator
- "Home" is a clickable link (href="/"), "Marketing Agents" is plain text (current page)
- Click "Home" → navigates to homepage

### 13. Agents Page — Card Details
- Pick any agent (e.g., Vega) and verify complete card content:
  - Round avatar image, name, role, Claude model badge (Sonnet/Opus/Haiku)
  - "What you get" section with 3 deliverables (icon + title + description)
  - "Start here" diagnostic CTA with name, duration, and price
  - Category tags at bottom
  - Pricing: hourly rate + monthly retainer
  - "Book a call →" link (href="/contact?agent=<id>")

### 14. Agents Page — How It Works Section
- Scroll past all agent cards to bottom
- Verify 3 numbered pink circles: 1=Brief, 2=Run, 3=Deliver
- Each step has a description paragraph

### 15. Agents Page — Dark Mode
- On `/agents`, click dark mode toggle
- Verify: dark background, cards get dark backgrounds, text readable, filter pills visible
- Toggle icon changes from moon to sun (aria-label: "Switch to light mode")

### 16. Agents Page — Builder Profile Link
- On `/agents` with "All" filter active, scroll through all 8 agent cards
- Verify each card has a "View Builder Profile →" rounded pill button at the bottom
- The link should point to `https://tripleandco.com/builder-profile/` with `target="_blank"` and `rel="noopener noreferrer"`
- Right-click the link to confirm "Open link in new tab" appears in context menu
- Apply a category filter (e.g., "Design") and verify the link persists on filtered cards
- Quick verification: `curl -s http://localhost:3000/agents | grep -o 'href="https://tripleandco.com/builder-profile/"' | wc -l` should return 8
- Component: `AgentFilterBar.tsx` — the link is inside the `AgentDetailCard` component at the bottom of each card

### 10. Mobile Sticky CTA
- Open DevTools (F12), toggle device toolbar (Ctrl+Shift+M), set width ~400px
- Navigate to homepage, scroll down 500px
- Verify: sticky "Book a Diagnostic Call →" bar at bottom
- Close DevTools when done (F12)

### 17. Revenue Diagnostic — Anchor Scroll to Booking Form
- Navigate to `/revenue-diagnostic`
- Click the pink "Book your diagnostic ↓" button in the hero section
- Verify: URL updates to `/revenue-diagnostic#book`, page smooth-scrolls to the booking form section
- Verify visible: heading "Ready to fix your pipeline?", "Let's get started" form heading, all 5 fields (First name, Last name, Email, Company, Message), pink "Book a Diagnostic Call" button, Lihi Pinto card
- **Key pitfall:** `PageTransition.tsx` wraps all page content and listens for `popstate` events. Hash changes (like `#book`) fire `popstate`. If the handler doesn't filter by pathname, it will hide the entire page. Always test anchor links after any changes to `PageTransition.tsx`.
- **Key pitfall:** `ScrollReveal` components start at `opacity: 0` and rely on `IntersectionObserver`. If a section is scrolled to directly (via anchor or `scrollIntoView`), the observer might not fire. Avoid wrapping critical always-visible content (like forms) in `ScrollReveal`.

### 18. Revenue Diagnostic — HubSpot Form Submission
- On `/revenue-diagnostic#book`, fill out all form fields and click "Book a Diagnostic Call"
- Verify: success message "Thank you!" appears
- Verify: POST request sent to HubSpot EU endpoint (`api-eu1.hsforms.com`)
- HubSpot Portal ID: `148346424`, Form ID: `7bc36ac2-4cef-4498-b86a-76e68ba33187`

### 19. Favicon Branding
- Check browser tab icon on homepage and subpages (e.g., `/revenue-diagnostic`)
- Expected: Triple&Co monogram (pink/purple squares from `public/images/logos/monogram-dark.png`)
- Source files: `src/app/favicon.ico` (multi-size ICO) and `public/favicon.png`
- Chrome caches favicons aggressively — use incognito or clear cache if favicon appears stale
- The Chrome new tab page shortcuts also display favicons, useful for visual comparison

## Tips

- The dev server might show transient module-not-found errors during hot reload — these are usually resolved by a page refresh
- Dark mode state persists in localStorage (`theme` key) — clear it if testing fresh state
- Homepage agent cards link to `/agents#<name>` — the anchor ID matches `agent.id` in `agents-data.ts`
- The site uses `useSyncExternalStore` for theme to avoid hydration mismatches
- No CI is configured — testing is local-only
- For mobile CTA testing, use Chrome DevTools responsive mode rather than resizing the browser window
- Card hover effects (scale + shadow) are CSS-only — hover over cards to verify
- Gradient dividers between sections are subtle pink→transparent lines
- **PageTransition + anchor links:** The `PageTransition` component in `layout.tsx` wraps all `<main>` content with a fade animation. Its `popstate` listener can interfere with hash-based navigation. When testing anchor links (`#book`, `#camille`, etc.), always verify the page content remains visible after the URL hash changes.
- **Vercel preview auth:** Vercel preview deployments may require authentication. For testing PR changes, prefer using the local dev server (`npm run dev`) on the PR branch instead of the Vercel preview URL.
- **Branch for deployment:** Vercel production deploys from the `initial-base` branch. After merging PRs, verify the deployment branch is correct if pages show stale content.
