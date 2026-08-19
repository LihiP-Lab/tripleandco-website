// Generates public/llms-full.txt from the prerendered HTML in .next/server/app.
//
// llms-full.txt is the full-content companion to llms.txt: the readable text of
// every indexable page in one plain-text file, so AI answer engines (Perplexity,
// ChatGPT browsing, etc.) can ingest the whole site in a single fetch.
//
// Run after `next build` (wired into the `build` script). The generated file is
// committed so the deployed site always serves it even if a host copies public/
// before the build step runs.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const BASE_URL = "https://www.tripleandco.com";
const APP_DIR = join(process.cwd(), ".next", "server", "app");
const OUT_FILE = join(process.cwd(), "public", "llms-full.txt");

// Indexable routes, in reading order. Excludes legal boilerplate and
// noindex/utility routes (/demo-intelligence, /builder-profile, api).
const ROUTES = [
  "/",
  "/about",
  "/about-he",
  "/services",
  "/cmo-as-a-service",
  "/cmo-as-a-service-israel",
  "/cro-as-a-service",
  "/head-of-growth",
  "/pricing",
  "/results",
  "/fractional-cmo-b2b",
  "/fractional-cmo-vs-agency-vs-hire",
  "/ai-marketing-team-vs-agency",
  "/geo",
  "/llm-seo",
  "/ai-visibility-audit",
  "/b2b-saas-marketing",
  "/fintech-marketing",
  "/cybersecurity-marketing",
  "/ai-deeptech-marketing",
  "/b2b-marketing-israel",
  "/b2b-marketing-tel-aviv",
  "/b2b-marketing-usa",
  "/cmo-as-a-service-he",
  "/ai-marketing-agents-he",
  "/b2b-marketing-israel-he",
  "/ai-content-engine",
  "/ai-social-engine",
  "/ai-market-research",
  "/ai-analytics-attribution",
  "/ai-video-production",
  "/agents",
  "/ai-marketing-agents",
  "/insights",
  "/insights/revenue",
  "/insights/strategy",
  "/insights/podcasts",
  "/insights/outsourced-cmo-israel-cost",
  "/insights/what-is-cmo-as-a-service",
  "/insights/native-ai-cmo-marketing-for-b2b-in-the-ai-era",
  "/revenue-diagnostic",
  "/contact",
];

function htmlPath(route) {
  return join(APP_DIR, route === "/" ? "index.html" : `${route.slice(1)}.html`);
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)));
}

function extractText(html) {
  // Keep only the server-rendered <main> content; drop nav/footer chrome.
  const main = html.match(/<main[\s>][\s\S]*?<\/main>/i)?.[0] ?? html;
  const text = main
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    // Preserve heading structure as markdown for readability.
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n\n# $1\n\n")
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n\n## $1\n\n")
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n\n### $1\n\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/(p|div|section|ul|ol|blockquote|tr)>/gi, "\n")
    .replace(/<br[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, " ");
  return decodeEntities(text)
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function meta(html, name) {
  const m =
    html.match(new RegExp(`<meta name="${name}" content="([^"]*)"`)) ??
    html.match(new RegExp(`<meta content="([^"]*)" name="${name}"`));
  return m ? decodeEntities(m[1]) : "";
}

const sections = [];
let missing = 0;

for (const route of ROUTES) {
  const file = htmlPath(route);
  if (!existsSync(file)) {
    console.warn(`llms-full: missing prerendered HTML for ${route}, skipping`);
    missing++;
    continue;
  }
  const html = readFileSync(file, "utf8");
  const title = decodeEntities(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? route);
  const description = meta(html, "description");
  sections.push(
    [
      "---",
      `url: ${BASE_URL}${route}`,
      `title: ${title}`,
      description && `description: ${description}`,
      "---",
      "",
      extractText(html),
    ]
      .filter(Boolean)
      .join("\n"),
  );
}

const header = [
  "# Triple & Co. full site content (llms-full.txt)",
  "",
  "> AI-powered CMO & CRO as a Service for B2B tech companies, led by Lihi Pinto,",
  "> with a supervised team of eight specialist AI marketing agents.",
  `> Structured page map: ${BASE_URL}/llms.txt`,
  "",
].join("\n");

writeFileSync(OUT_FILE, `${header}\n${sections.join("\n\n")}\n`);
console.log(`llms-full: wrote ${OUT_FILE} (${sections.length} pages, ${missing} skipped)`);
if (missing > 0 && missing >= ROUTES.length / 2) process.exit(1);
