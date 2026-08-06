// Enumerates every static route in src/app by walking for page.tsx files.
// Route groups (folders in parentheses) are stripped. Dynamic segments are skipped,
// since we have no way to know a valid param value from the filesystem alone.
import { readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const APP_DIR = join(fileURLToPath(new URL("..", import.meta.url)), "src", "app");

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, out);
    } else if (entry === "page.tsx" || entry === "page.jsx") {
      out.push(full);
    }
  }
  return out;
}

export function getRoutes() {
  return walk(APP_DIR)
    .map((file) => {
      const segments = relative(APP_DIR, file).split(sep).slice(0, -1);
      if (segments.some((s) => s.startsWith("[") || s.startsWith("@"))) return null;
      const path = segments.filter((s) => !s.startsWith("(")).join("/");
      return "/" + path;
    })
    .filter(Boolean)
    .map((r) => (r === "/" ? "/" : r.replace(/\/$/, "")))
    .sort();
}

export const routes = getRoutes();

// Routes deliberately excluded from the public sweep: gated or non-indexable pages.
export const EXCLUDE_FROM_SEO = new Set([
  "/demo-intelligence",
  "/demo-intelligence/access",
  "/privacy",
  "/terms",
  "/about-he",
]);

export function slug(route) {
  return route === "/" ? "home" : route.slice(1).replace(/\//g, "_");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(routes.join("\n"));
  console.error(`\n${routes.length} routes`);
}
