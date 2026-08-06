// WCAG 2.1 AA sweep with axe-core, one test per route.
//
// Only serious and critical violations can fail a run, and only if they are NOT
// in a11y-baseline.json. The baseline captures the debt that already existed
// when this suite was added, so the gate flags regressions instead of sitting
// permanently red and being ignored. Shrink the baseline over time.
//
// Regenerate after fixing something:  npm run a11y:baseline

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { routes, slug } from "../routes.mjs";

const A11Y_DIR = join(process.cwd(), "results", "a11y");
const BASELINE_PATH = join(process.cwd(), "a11y-baseline.json");
mkdirSync(A11Y_DIR, { recursive: true });

const baseline: Record<string, string[]> = existsSync(BASELINE_PATH)
  ? JSON.parse(readFileSync(BASELINE_PATH, "utf8")).accepted
  : {};

for (const route of routes) {
  test(`a11y ${route}`, async ({ page }, testInfo) => {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle", { timeout: 5_000 }).catch(() => {});

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    const accepted = new Set(baseline[route] ?? []);
    const blocking = results.violations.filter(
      (v) => (v.impact === "critical" || v.impact === "serious") && !accepted.has(v.id)
    );

    writeFileSync(
      join(A11Y_DIR, `${testInfo.project.name}__${slug(route)}.json`),
      JSON.stringify(
        {
          route,
          project: testInfo.project.name,
          newViolations: blocking.map((v) => v.id),
          violations: results.violations.map((v) => ({
            id: v.id,
            impact: v.impact,
            baselined: accepted.has(v.id),
            help: v.help,
            helpUrl: v.helpUrl,
            count: v.nodes.length,
            nodes: v.nodes.slice(0, 5).map((n) => ({ target: n.target, html: n.html.slice(0, 200) })),
          })),
        },
        null,
        2
      )
    );

    const summary = blocking
      .map((v) => `${v.id} (${v.impact}, ${v.nodes.length}x): ${v.help}`)
      .join(" | ");
    expect(blocking, `${route} has NEW serious or critical a11y violations: ${summary}`).toHaveLength(0);
  });
}
