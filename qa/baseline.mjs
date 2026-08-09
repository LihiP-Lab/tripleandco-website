// Regenerate a11y-baseline.json from the last a11y run.
//
// Usage:
//   npx playwright test tests/a11y.spec.ts --project=desktop --project=dark
//   npm run a11y:baseline
//
// The baseline becomes exactly the serious/critical violation ids currently
// present per route, across every project that ran (union). Anything NOT in
// the baseline fails the gate, so run the tests first and only regenerate
// after fixing something — never to silence a new failure.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const A11Y_DIR = join(process.cwd(), "results", "a11y");
const BASELINE_PATH = join(process.cwd(), "a11y-baseline.json");

const accepted = {};
for (const file of readdirSync(A11Y_DIR).filter((f) => f.endsWith(".json"))) {
  const data = JSON.parse(readFileSync(join(A11Y_DIR, file), "utf8"));
  const ids = data.violations
    .filter((v) => v.impact === "critical" || v.impact === "serious")
    .map((v) => v.id);
  if (ids.length === 0) continue;
  const set = new Set([...(accepted[data.route] ?? []), ...ids]);
  accepted[data.route] = [...set].sort();
}

const ordered = Object.fromEntries(
  Object.keys(accepted)
    .sort()
    .map((r) => [r, accepted[r]])
);

writeFileSync(
  BASELINE_PATH,
  JSON.stringify(
    {
      _comment:
        "Accessibility debt accepted at the date below. These do not fail the gate; anything NEW does. Shrink this file over time, do not grow it. Regenerate with `npm run a11y:baseline` after an a11y run.",
      generated: new Date().toISOString().slice(0, 10),
      accepted: ordered,
    },
    null,
    2
  ) + "\n"
);

const routes = Object.keys(ordered).length;
const entries = Object.values(ordered).flat().length;
console.log(`baseline written: ${routes} routes, ${entries} accepted entries`);
