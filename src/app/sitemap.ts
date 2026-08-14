import type { MetadataRoute } from "next";

// Real per-route last-modified dates. Deliberately static: calling new Date()
// here re-stamps all 34 URLs with the build time on every deploy, so a one-line
// footer change re-dates the privacy policy and every article identically.
// Crawlers learn to discount that. Bump a route's date when its content
// meaningfully changes.
const LAST_MODIFIED: Record<string, string> = {
  "/": "2026-08-06",
  "/about": "2026-08-06",
  "/about-he": "2026-08-06",
  "/services": "2026-08-06",
  "/pricing": "2026-08-14",
  "/results": "2026-08-14",
  "/cmo-as-a-service": "2026-08-06",
  "/cro-as-a-service": "2026-08-06",
  "/head-of-growth": "2026-08-06",
  "/fractional-cmo-b2b": "2026-08-06",
  "/fractional-cmo-vs-agency-vs-hire": "2026-08-06",
  "/ai-marketing-team-vs-agency": "2026-08-06",
  "/geo": "2026-08-06",
  "/llm-seo": "2026-08-06",
  "/ai-visibility-audit": "2026-08-06",
  "/ai-visibility-checker": "2026-08-14",
  "/b2b-saas-marketing": "2026-08-06",
  "/fintech-marketing": "2026-08-06",
  "/cybersecurity-marketing": "2026-08-06",
  "/ai-deeptech-marketing": "2026-08-06",
  "/b2b-marketing-israel": "2026-08-06",
  "/b2b-marketing-tel-aviv": "2026-08-06",
  "/b2b-marketing-usa": "2026-08-06",
  "/ai-content-engine": "2026-08-14",
  "/ai-social-engine": "2026-08-14",
  "/ai-market-research": "2026-08-14",
  "/ai-analytics-attribution": "2026-08-14",
  "/ai-video-production": "2026-08-14",
  "/agents": "2026-07-23",
  "/ai-marketing-agents": "2026-06-10",
  "/builder-profile": "2026-07-23",
  "/insights": "2026-07-23",
  "/insights/revenue": "2026-07-23",
  "/insights/strategy": "2026-07-23",
  "/insights/podcasts": "2026-07-23",
  "/insights/outsourced-cmo-israel-cost": "2026-07-23",
  "/insights/what-is-cmo-as-a-service": "2026-07-23",
  "/insights/native-ai-cmo-marketing-for-b2b-in-the-ai-era": "2026-07-23",
  "/revenue-diagnostic": "2026-07-23",
  "/contact": "2026-08-06",
  "/privacy": "2026-06-14",
  "/terms": "2026-06-14",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tripleandco.com";

  const routes = [
    "/",
    "/about",
    "/about-he",
    "/services",
    "/pricing",
    "/results",
    "/cmo-as-a-service",
    "/cro-as-a-service",
    "/head-of-growth",
    "/fractional-cmo-b2b",
    "/fractional-cmo-vs-agency-vs-hire",
    "/ai-marketing-team-vs-agency",
    "/geo",
    "/llm-seo",
    "/ai-visibility-audit",
    "/ai-visibility-checker",
    "/b2b-saas-marketing",
    "/fintech-marketing",
    "/cybersecurity-marketing",
    "/ai-deeptech-marketing",
    "/b2b-marketing-israel",
    "/b2b-marketing-tel-aviv",
    "/b2b-marketing-usa",
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
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(LAST_MODIFIED[route] ?? "2026-08-06"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/pricing" ||
            route === "/results" ||
            route === "/cmo-as-a-service" ||
            route === "/cro-as-a-service" ||
            route === "/head-of-growth" ||
            route === "/fractional-cmo-b2b" ||
            route === "/fractional-cmo-vs-agency-vs-hire" ||
            route === "/ai-marketing-team-vs-agency" ||
            route === "/geo" ||
            route === "/llm-seo" ||
            route === "/ai-visibility-audit" ||
            route === "/ai-visibility-checker" ||
            route === "/b2b-saas-marketing" ||
            route === "/fintech-marketing" ||
            route === "/cybersecurity-marketing" ||
            route === "/ai-deeptech-marketing" ||
            route === "/b2b-marketing-israel" ||
            route === "/b2b-marketing-tel-aviv" ||
            route === "/b2b-marketing-usa" ||
            route === "/ai-marketing-agents" ||
            route === "/ai-content-engine" ||
            route === "/ai-social-engine" ||
            route === "/ai-market-research" ||
            route === "/ai-analytics-attribution" ||
            route === "/ai-video-production"
          ? 0.9
          : 0.8,
  }));
}
