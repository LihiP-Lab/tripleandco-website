// Route sweep: one test per route.
// Checks the things that break silently and cost traffic: status codes, console
// errors, images that do not load, internal links that 404, and the SEO head tags.
// Per-route metadata is written to qa/results/meta/ so aggregate.mjs can check
// cross-route uniqueness afterwards.

import { test, expect } from "@playwright/test";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { routes, slug, EXCLUDE_FROM_SEO } from "../routes.mjs";

const META_DIR = join(process.cwd(), "results", "meta");
mkdirSync(META_DIR, { recursive: true });

// Console noise we accept. Keep this list short and justified.
const IGNORED_CONSOLE = [
  /Download the React DevTools/i,
  /\[Fast Refresh\]/i,
  /vercel.*analytics.*debug/i,
  // Covered with a URL by the response handler below, so the bare message is noise.
  /^Failed to load resource/i,
];

// Subresources that only exist on Vercel. They 404 against a local `next start`
// and against nothing in production, so a failure here is never actionable.
const IGNORED_RESOURCES = [/\/_vercel\//, /vitals\.vercel-insights\.com/, /va\.vercel-scripts\.com/];

// Link checks are cached per worker so a nav link shared by 36 pages is fetched once.
const linkCache = new Map<string, number>();

for (const route of routes) {
  test(`route ${route}`, async ({ page, request, baseURL }, testInfo) => {
    const consoleErrors: string[] = [];
    const failedRequests: string[] = [];
    // Third-party embeds (Calendly, HubSpot, fonts) fail for reasons we do not
    // control. Recorded for the report, never a reason to fail the gate.
    const thirdPartyFailures: string[] = [];
    const origin = new URL(baseURL ?? "http://127.0.0.1:3000").origin;
    const record = (entry: string, url: string) =>
      (url.startsWith(origin) ? failedRequests : thirdPartyFailures).push(entry);

    page.on("console", (msg) => {
      if (msg.type() !== "error") return;
      const text = msg.text();
      if (IGNORED_CONSOLE.some((p) => p.test(text))) return;
      consoleErrors.push(text);
    });
    page.on("requestfailed", (req) => {
      if (IGNORED_RESOURCES.some((p) => p.test(req.url()))) return;
      record(`${req.failure()?.errorText ?? "failed"} ${req.url()}`, req.url());
    });
    page.on("response", (res) => {
      if (res.status() < 400) return;
      if (res.url() === new URL(route, baseURL ?? undefined).toString()) return; // the page itself, asserted below
      if (IGNORED_RESOURCES.some((p) => p.test(res.url()))) return;
      record(`${res.status()} ${res.url()}`, res.url());
    });

    const response = await page.goto(route, { waitUntil: "domcontentloaded" });

    // ---- status ----
    expect(response, `no response for ${route}`).toBeTruthy();
    expect(response!.status(), `${route} returned ${response!.status()}`).toBeLessThan(400);

    await page.waitForLoadState("networkidle", { timeout: 5_000 }).catch(() => {});

    // ---- head tags ----
    const meta = await page.evaluate(() => {
      const attr = (sel: string, name: string) =>
        document.querySelector(sel)?.getAttribute(name)?.trim() ?? null;
      const jsonLd = [...document.querySelectorAll('script[type="application/ld+json"]')].map(
        (el) => el.textContent ?? ""
      );
      return {
        title: document.title?.trim() ?? null,
        description: attr('meta[name="description"]', "content"),
        canonical: attr('link[rel="canonical"]', "href"),
        ogTitle: attr('meta[property="og:title"]', "content"),
        ogImage: attr('meta[property="og:image"]', "content"),
        ogUrl: attr('meta[property="og:url"]', "content"),
        twitterCard: attr('meta[name="twitter:card"]', "content"),
        robots: attr('meta[name="robots"]', "content"),
        h1: [...document.querySelectorAll("h1")].map((h) => h.textContent?.trim() ?? ""),
        jsonLd,
        links: [...document.querySelectorAll("a[href]")]
          .map((a) => (a as HTMLAnchorElement).getAttribute("href") ?? "")
          .filter((h) => h.startsWith("/") && !h.startsWith("//")),
        images: [...document.querySelectorAll("img")].map((img) => ({
          src: (img as HTMLImageElement).currentSrc || (img as HTMLImageElement).src,
          alt: img.getAttribute("alt"),
          loaded: (img as HTMLImageElement).naturalWidth > 0,
        })),
      };
    });

    writeFileSync(
      join(META_DIR, `${testInfo.project.name}__${slug(route)}.json`),
      JSON.stringify({ route, project: testInfo.project.name, ...meta, thirdPartyFailures }, null, 2)
    );

    const seoRelevant = !EXCLUDE_FROM_SEO.has(route);

    if (seoRelevant) {
      expect(meta.title, `${route} has no <title>`).toBeTruthy();
      expect(meta.title!.length, `${route} title is ${meta.title!.length} chars, over 65`).toBeLessThanOrEqual(65);
      expect(meta.description, `${route} has no meta description`).toBeTruthy();
      expect(meta.description!.length, `${route} description is ${meta.description!.length} chars, outside 70-165`).toBeGreaterThanOrEqual(70);
      expect(meta.description!.length, `${route} description is ${meta.description!.length} chars, outside 70-165`).toBeLessThanOrEqual(165);
      expect(meta.canonical, `${route} has no canonical link`).toBeTruthy();
      expect(meta.h1.length, `${route} has ${meta.h1.length} <h1> elements, expected exactly 1`).toBe(1);
    }

    // ---- JSON-LD parses ----
    for (const block of meta.jsonLd) {
      expect(() => JSON.parse(block), `${route} has invalid JSON-LD`).not.toThrow();
    }

    // ---- images ----
    // naturalWidth is not a reliable signal here: theme-swapped and lazy images
    // are legitimately never painted. Fetch the source instead.
    const brokenImages: string[] = [];
    if (testInfo.project.name === "desktop") {
      for (const src of [...new Set(meta.images.map((i) => i.src).filter(Boolean))]) {
        if (src.startsWith("data:")) continue;
        if (!linkCache.has(src)) {
          let status = 0;
          try {
            status = (await request.get(src, { timeout: 10_000 })).status();
          } catch {
            status = 0;
          }
          linkCache.set(src, status);
        }
        const status = linkCache.get(src)!;
        if (status === 0 || status >= 400) brokenImages.push(`${src} -> ${status || "unreachable"}`);
      }
    }
    expect(brokenImages, `${route} has images that do not resolve: ${brokenImages.join(", ")}`).toHaveLength(0);
    const missingAlt = meta.images.filter((i) => i.alt === null);
    expect(missingAlt, `${route} has ${missingAlt.length} <img> without an alt attribute: ${missingAlt.map((i) => i.src).join(", ")}`).toHaveLength(0);

    // ---- internal links resolve ----
    // Desktop only. The link graph is the same on mobile, so checking twice
    // doubles the runtime and finds nothing new.
    const broken: string[] = [];
    if (testInfo.project.name === "desktop")
    for (const href of [...new Set(meta.links)]) {
      const url = new URL(href, baseURL).toString();
      if (!linkCache.has(url)) {
        let status = 0;
        try {
          const res = await request.get(url, { maxRedirects: 5, timeout: 10_000 });
          status = res.status();
        } catch {
          status = 0;
        }
        linkCache.set(url, status);
      }
      const status = linkCache.get(url)!;
      if (status === 0 || status >= 400) broken.push(`${href} -> ${status || "unreachable"}`);
    }
    expect(broken, `${route} links to broken URLs: ${broken.join(", ")}`).toHaveLength(0);

    // ---- runtime errors ----
    expect(consoleErrors, `${route} logged console errors: ${consoleErrors.join(" | ")}`).toHaveLength(0);
    expect(failedRequests, `${route} had failed network requests: ${failedRequests.join(" | ")}`).toHaveLength(0);
  });
}
