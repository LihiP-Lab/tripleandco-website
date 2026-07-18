import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tripleandco.com";

  const routes = [
    "/",
    "/about",
    "/about-he",
    "/services",
    "/cmo-as-a-service",
    "/cro-as-a-service",
    "/head-of-growth",
    "/fractional-cmo-b2b",
    "/geo",
    "/ai-visibility-audit",
    "/b2b-saas-marketing",
    "/fintech-marketing",
    "/cybersecurity-marketing",
    "/ai-deeptech-marketing",
    "/b2b-marketing-israel",
    "/b2b-marketing-tel-aviv",
    "/b2b-marketing-usa",
    "/agents",
    "/ai-marketing-agents",
    "/builder-profile",
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
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/cmo-as-a-service" ||
            route === "/cro-as-a-service" ||
            route === "/head-of-growth" ||
            route === "/fractional-cmo-b2b" ||
            route === "/geo" ||
            route === "/ai-visibility-audit" ||
            route === "/b2b-saas-marketing" ||
            route === "/fintech-marketing" ||
            route === "/cybersecurity-marketing" ||
            route === "/ai-deeptech-marketing" ||
            route === "/b2b-marketing-israel" ||
            route === "/b2b-marketing-tel-aviv" ||
            route === "/b2b-marketing-usa" ||
            route === "/ai-marketing-agents"
          ? 0.9
          : 0.8,
  }));
}
