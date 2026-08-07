<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Dark mode contract

The site has a light palette and a dark theme layer (`src/app/globals.css`,
"DARK THEME LAYER"). Components are written ONCE, in ordinary utilities
(`text-purple-9`, `bg-white`, `border-purple-15`, ...); the layer remaps them
by role under `[data-theme="dark"]`. Rules:

1. Build new UI with utilities already covered by the dark layer. Do not
   invent new color utilities or hardcode hex values in components.
2. Light surfaces are `bg-white` (cards) and `bg-purple-05` (tinted bands).
   Dark-on-light text is `text-purple-9/8/7/6/5`. Light-on-dark text (heroes,
   `bg-dark`, `bg-purple-9`, the `/agents` console) is `text-white` /
   `text-purple-2` / `text-pink-3` — never `text-purple-9..5` there.
3. If you add a color utility on a light surface that the layer does not
   cover, add its `[data-theme="dark"]` remap in the same commit, using a
   value from the `--dk-*` table — never a new hardcoded hex. A utility with
   no remap renders near-invisible for the ~half of visitors whose OS
   prefers dark.
4. Check any page you touch in BOTH themes (navbar toggle) before committing.
