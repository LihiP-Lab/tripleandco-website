---
name: testing-tripleandco
description: Test the Triple & Co. marketing site (Next.js 16 App Router) end to end. Use when verifying new/changed pages, copy, or the lead-capture forms (contact + AI Visibility Audit).
---

# Testing the Triple & Co. website

Next.js 16 (App Router, Turbopack), React 19, Tailwind v4. Marketing site with
static pages plus a HubSpot-backed lead form.

## Running locally
```bash
cd ~/repos/tripleandco-website
nohup npm run dev > /tmp/devserver.log 2>&1 &
sleep 7 && curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```
- Dev server: http://localhost:3000. Tail `/tmp/devserver.log` to see API results
  (e.g. `POST /api/contact 200`) and HubSpot error bodies.
- No login/auth is needed for any public page or for the lead forms.

## Pre-flight checks (fast, always run)
```bash
npx tsc --noEmit
npx eslint <changed files>            # full `npm run lint` has some pre-existing baseline errors
# rendered em-dash check (site rule: no em dashes in copy):
for r in <routes>; do echo "/$r:"; curl -s http://localhost:3000/$r | grep -c $'\u2014'; done
```
Expect `0` em dashes on every page. Watch for hidden forms: literal `—`, escaped
`\u2014` in `.ts` data files, and the `&mdash;` HTML entity. Shared components
(e.g. `src/components/AgentCarousel.tsx`) can reintroduce an em dash onto a page
that is otherwise clean.

## Lead forms → HubSpot (IMPORTANT)
Both `ContactForm` and `AuditForm` POST JSON to `/api/contact`
(`src/app/api/contact/route.ts`), which forwards to a HubSpot form submission.
- **HubSpot requires `firstname` AND `lastname` to be non-empty.** A form that
  sends an empty `lastName` gets a 502 with
  `Error in 'fields.lastname'. Required field 'lastname' is missing`. Any new
  lead form must supply a non-empty last name (e.g. collect a single "Full Name"
  and split it, guaranteeing lastName is non-empty).
- The API also needs `email` (400 if missing) and optionally sends a Resend
  notification when `RESEND_API_KEY` is set (not required locally).
- **Submitting the form for real creates a real HubSpot lead.** Use clearly
  labeled test data (e.g. name "Devin Test", email `devin-test+...@tripleandco.com`)
  and tell the user to delete it afterward.
- Success UI: the form is replaced by a "Request received." / success card only
  when the POST returns ok, so a visible success card proves the whole pipeline.
  Always confirm with `POST /api/contact 200` in the dev log.

## UI test tips
- Reach pages via the real nav/CTAs (proves links, not just direct URLs):
  Navbar has GEO; the GEO hero CTA links to `/ai-visibility-audit`; the footer
  lists CRO as a Service, GEO for B2B, Free AI Visibility Audit.
- After a system/VM restart, the dev server AND Chrome are reset — restart the
  server and re-navigate; any active screen recording is lost, so restart it.

## Devin Secrets Needed
- None required for page/copy/lead-form testing (HubSpot submit works without
  local secrets; the endpoint/portal/form IDs are hardcoded in the API route).
- `RESEND_API_KEY` (optional): only enables the email notification side-effect.
- `DEMO_ACCESS_CODE`: only for the gated demo dashboard, not for these pages.
