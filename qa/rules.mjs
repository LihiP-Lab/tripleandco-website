#!/usr/bin/env node
// Source-level house rules for the Triple & Co. site.
// Deterministic only. Anything needing judgment belongs to the Claude reporter step.
//
// Exit code 1 if any ERROR-level rule fails. WARN never fails the build.
// Writes qa/results/rules.json for the reporter to read.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL("..", import.meta.url)));

// Paths exempted from copy rules. Keep this list short and justified.
// Each entry needs a reason, so nobody silences a rule by accident.
const CONFIG = JSON.parse(readFileSync(join(ROOT, "qa", "rules.config.json"), "utf8"));
const isExempt = (file, rule) =>
  (CONFIG.exempt[rule] ?? []).some((p) => file === p || file.startsWith(p.replace(/\*$/, "")));

const findings = [];
const add = (level, rule, file, line, message) =>
  findings.push({ level, rule, file, line, message });

const tracked = execSync("git ls-files", { cwd: ROOT, encoding: "utf8" })
  .split("\n")
  .filter(Boolean)
  // git ls-files still reports a file deleted in the working tree but not yet
  // staged, which is exactly the state right after `git apply`.
  .filter((f) => existsSync(join(ROOT, f)));

// ---------------------------------------------------------------- rule 1
// No em dashes or en dashes in user-facing copy. House rule, confirmed 2026-08-05.
// Comment-only lines are skipped: they never ship to a reader.
const DASHES = /[–—]/;
const COMMENT_LINE = /^\s*(\/\/|\/\*|\*|#)/;
const COPY_EXT = new Set([".tsx", ".ts", ".jsx", ".js", ".mdx", ".md", ".json"]);

for (const file of tracked) {
  if (!COPY_EXT.has(extname(file))) continue;
  if (file.startsWith("qa/") || file === "REVIEW.md") continue;
  if (isExempt(file, "no-em-dash")) continue;
  const lines = readFileSync(join(ROOT, file), "utf8").split("\n");
  lines.forEach((text, i) => {
    if (!DASHES.test(text)) return;
    const level = COMMENT_LINE.test(text) ? "warn" : "error";
    add(level, "no-em-dash", file, i + 1, `Dash in ${level === "warn" ? "comment" : "copy"}: ${text.trim().slice(0, 120)}`);
  });
}

// ---------------------------------------------------------------- rule 2
// Banned vocabulary from the Triple voice guide. Word-boundary matched,
// checked only inside quoted strings and JSX text so identifiers don't trip it.
const BANNED = [
  "game-changer", "game changer", "revolutionary", "disruptor",
  "unleash", "supercharge", "synergy", "best-in-class", "world-class",
  "harness the power", "seamlessly", "thought leader", "at the end of the day",
];
for (const file of tracked) {
  if (!COPY_EXT.has(extname(file))) continue;
  if (file.startsWith("qa/") || file === "REVIEW.md") continue;
  if (isExempt(file, "banned-vocabulary")) continue;
  const lines = readFileSync(join(ROOT, file), "utf8").split("\n");
  lines.forEach((text, i) => {
    if (COMMENT_LINE.test(text)) return;
    for (const term of BANNED) {
      if (new RegExp(`\\b${term.replace(/[-\s]/g, "[-\\s]")}\\b`, "i").test(text)) {
        add("warn", "banned-vocabulary", file, i + 1, `"${term}" is on the banned list: ${text.trim().slice(0, 100)}`);
      }
    }
  });
}

// ---------------------------------------------------------------- rule 3
// The eight canonical agent images exist, and every referenced agent image resolves.
const AGENTS = ["camille", "vega", "rex", "zara", "nova", "atlas", "sage", "lumen"];
for (const id of AGENTS) {
  if (!existsSync(join(ROOT, "public", "images", "agents", `${id}.png`))) {
    add("error", "agent-image-missing", `public/images/agents/${id}.png`, 0, `Canonical agent image for ${id} is missing`);
  }
}
const IMG_REF = /["'`](\/images\/[^"'`)\s]+)["'`]/g;
for (const file of tracked) {
  if (!COPY_EXT.has(extname(file))) continue;
  if (file.startsWith("qa/") || file.startsWith(".claude/") || file === "REVIEW.md") continue;
  const src = readFileSync(join(ROOT, file), "utf8");
  for (const [, ref] of src.matchAll(IMG_REF)) {
    if (ref.includes("${")) continue; // runtime-interpolated path, checked live by the browser sweep
    if (!existsSync(join(ROOT, "public", ref))) {
      add("error", "image-ref-broken", file, 0, `References ${ref}, which is not in public/`);
    }
  }
}

// ---------------------------------------------------------------- rule 4
// No junk files committed. These accumulate when editing over a mounted folder.
const JUNK = [/\.fuse_hidden/, /\.DS_Store$/, /\.orig$/, /\.rej$/, /Thumbs\.db$/, /~$/];
for (const file of tracked) {
  if (JUNK.some((p) => p.test(file))) {
    add("error", "junk-file", file, 0, "Junk file committed to the repository");
  }
}

// ---------------------------------------------------------------- rule 5
// Every route has metadata, either on the page or on a sibling layout.
const { routes } = await import("./routes.mjs");
for (const route of routes) {
  const dir = route === "/" ? "src/app" : `src/app${route}`;
  const hasMeta = ["page.tsx", "layout.tsx"].some((f) => {
    const p = join(ROOT, dir, f);
    if (!existsSync(p)) return false;
    const src = readFileSync(p, "utf8");
    return /export\s+(const|async\s+function)\s+(metadata|generateMetadata)/.test(src);
  });
  if (!hasMeta) {
    add("error", "route-metadata-missing", `${dir}/page.tsx`, 0, `Route ${route} exports no metadata on its page or layout`);
  }
}

// ---------------------------------------------------------------- report
mkdirSync(join(ROOT, "qa", "results"), { recursive: true });
writeFileSync(join(ROOT, "qa", "results", "rules.json"), JSON.stringify(findings, null, 2));

const errors = findings.filter((f) => f.level === "error");
const warns = findings.filter((f) => f.level === "warn");

const fmt = (f) => `  ${f.file}${f.line ? `:${f.line}` : ""}  [${f.rule}] ${f.message}`;
if (errors.length) {
  console.log(`\nERRORS (${errors.length})`);
  errors.forEach((f) => console.log(fmt(f)));
}
if (warns.length) {
  console.log(`\nWARNINGS (${warns.length})`);
  warns.forEach((f) => console.log(fmt(f)));
}
if (!findings.length) console.log("House rules: clean.");

console.log(`\n${errors.length} error(s), ${warns.length} warning(s) across ${tracked.length} tracked files.`);
process.exit(errors.length ? 1 : 0);
