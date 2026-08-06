#!/usr/bin/env node
// Cross-route checks that no single-page test can make: title and description
// uniqueness, canonical correctness, sitemap coverage.
// Reads what routes.spec.ts wrote into qa/results/meta/.
//
// Exit code 1 on any error. Writes qa/results/aggregate.json for the reporter.

import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { EXCLUDE_FROM_SEO } from "./routes.mjs";

const QA = join(fileURLToPath(new URL(".", import.meta.url)));
const META = join(QA, "results", "meta");
const BASE = process.env.BASE_URL || "http://127.0.0.1:3000";
const PROD = "https://www.tripleandco.com";

const findings = [];
const add = (level, rule, route, message) => findings.push({ level, rule, route, message });

if (!existsSync(META)) {
  console.error("No route metadata found. Did the Playwright sweep run?");
  process.exit(1);
}

// Only the desktop project, so every route is counted once.
const pages = readdirSync(META)
  .filter((f) => f.startsWith("desktop__"))
  .map((f) => JSON.parse(readFileSync(join(META, f), "utf8")))
  .filter((p) => !EXCLUDE_FROM_SEO.has(p.route))
  // A page that declares noindex is deliberately out of the index. Holding it to
  // sitemap and canonical rules produces noise, not findings.
  .filter((p) => !/noindex/i.test(p.robots ?? ""));

// ---- uniqueness ----
for (const field of ["title", "description"]) {
  const byValue = new Map();
  for (const p of pages) {
    if (!p[field]) continue;
    const key = p[field].trim().toLowerCase();
    byValue.set(key, [...(byValue.get(key) ?? []), p.route]);
  }
  for (const [value, routes] of byValue) {
    if (routes.length > 1) {
      add("error", `duplicate-${field}`, routes.join(", "),
        `${routes.length} routes share the same ${field}: "${value.slice(0, 80)}"`);
    }
  }
}

// ---- canonical points at itself, on the www host ----
for (const p of pages) {
  if (!p.canonical) continue;
  let canonical;
  try {
    canonical = new URL(p.canonical);
  } catch {
    add("error", "canonical-invalid", p.route, `canonical is not a valid URL: ${p.canonical}`);
    continue;
  }
  if (canonical.host !== new URL(PROD).host) {
    add("error", "canonical-host", p.route, `canonical points at ${canonical.host}, expected ${new URL(PROD).host}`);
  }
  const expected = p.route === "/" ? "/" : p.route;
  if (canonical.pathname.replace(/\/$/, "") !== expected.replace(/\/$/, "")) {
    add("error", "canonical-path", p.route, `canonical path is ${canonical.pathname}, expected ${expected}`);
  }
}

// ---- og:url and og:image present ----
for (const p of pages) {
  if (!p.ogUrl) add("warn", "og-url-missing", p.route, "no og:url");
  else if (new URL(p.ogUrl).pathname.replace(/\/$/, "") !== (p.route.replace(/\/$/, "") || ""))
    add("warn", "og-url-mismatch", p.route, `og:url points at ${new URL(p.ogUrl).pathname}, not ${p.route}. Shared links will preview the wrong page.`);
  if (!p.ogImage) add("warn", "og-image-missing", p.route, "no og:image");
  if (p.twitterCard && p.twitterCard !== "summary_large_image") {
    add("warn", "twitter-card", p.route, `twitter:card is "${p.twitterCard}", expected summary_large_image`);
  }
}

// ---- sitemap coverage ----
try {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (!res.ok) {
    add("error", "sitemap-missing", "/sitemap.xml", `sitemap returned ${res.status}`);
  } else {
    const xml = await res.text();
    const listed = new Set(
      [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
        try { return new URL(m[1]).pathname.replace(/\/$/, "") || "/"; } catch { return m[1]; }
      })
    );
    for (const p of pages) {
      const path = p.route.replace(/\/$/, "") || "/";
      if (!listed.has(path)) {
        add("error", "sitemap-gap", p.route, "indexable route is missing from sitemap.xml");
      }
    }
  }
} catch (err) {
  add("error", "sitemap-unreachable", "/sitemap.xml", String(err));
}

// ---- report ----
writeFileSync(join(QA, "results", "aggregate.json"), JSON.stringify(findings, null, 2));

const errors = findings.filter((f) => f.level === "error");
const warns = findings.filter((f) => f.level === "warn");
for (const f of findings) {
  console.log(`  [${f.level}] ${f.rule}  ${f.route}: ${f.message}`);
}
console.log(`\nChecked ${pages.length} indexable routes. ${errors.length} error(s), ${warns.length} warning(s).`);
process.exit(errors.length ? 1 : 0);
