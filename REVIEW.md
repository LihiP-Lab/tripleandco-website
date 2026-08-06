# Review rules for tripleandco.com

Read by Claude Code Review on every pull request, additive on top of its default
correctness checks. Deterministic versions of some of these run in `qa/rules.mjs`;
what is here is what needs judgment.

## Copy

The house voice rules come from the Triple & Co. voice guide. The ones that matter in review:

- **No em dashes or en dashes. Anywhere.** Confirmed as the house rule on 2026-08-05.
  Two clauses become two sentences. An aside takes parentheses. A list or definition takes
  a colon. A metadata separator takes a middle dot (`·`). A numeric range takes a hyphen
  or the word "to".
- **Banned vocabulary**: game-changer, revolutionary, disruptor, unleash, supercharge,
  synergy, best-in-class, world-class, harness the power of, unlock, seamlessly, thought
  leader, at the end of the day, "10x your X". Also any claim with no number or example
  behind it.
- **Numbers over adjectives.** "Cut cycle time 38%" beats "dramatically faster."
- **Name the lever.** A claimed outcome needs its mechanism in the same breath.
- **Short paragraphs, short sentences.** No passive voice. No "bottom line" closers.
- **Speak to the reader, not about the company.**
- CTAs use an action verb plus an arrow: `Book a Strategy Call →`.
- Brand content is first person plural. Lihi's personal content is first person singular.

## SEO

The site's organic ranking is load-bearing. Flag anything that touches it:

- Every indexable route needs a unique `<title>` (65 chars or fewer), a unique meta
  description (70 to 165 chars), a self-referencing canonical on `www.tripleandco.com`,
  and exactly one `<h1>`.
- A new route must be added to `src/app/sitemap.ts`, or explicitly marked `noindex`.
- Changing or removing a URL needs a 301 in `next.config.ts`. Silent 404s on indexed pages
  are the most expensive mistake possible here.
- JSON-LD must stay valid. FAQ and Organization schema on the homepage are verified in
  Google Rich Results, so do not restructure them casually.
- `og:url` must point at the page itself, not the homepage.

## Agents

The eight agents are canon: Camille, Vega, Rex, Zara, Nova, Atlas, Sage, Lumen. Names,
roles, and pronouns must match the agent skill. Images live at `/images/agents/<id>.png`
and always carry alt text.

## Accessibility

New interactive elements need a keyboard path and an accessible name. Do not add
`aria-hidden` to anything focusable. Do not nest interactive controls. New
`serious` or `critical` axe violations fail the QA workflow, and the baseline in
`qa/a11y-baseline.json` should shrink over time, never grow.

## Skip

Do not comment on:

- Tailwind class ordering or formatting preferences
- The generated `AGENTS.md` Next.js rules block
- `src/lib/demo-intelligence-data.ts` copy, which is a verbatim client transcript behind a
  gate and is exempt from the house copy rules
- Pre-existing issues unrelated to the diff, unless the diff makes them worse
