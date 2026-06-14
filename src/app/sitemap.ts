import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tripleandco.com";

  const routes = [
    "/",
    "/about",
    "/services",
    "/cmo-as-a-service",
    "/fractional-cmo-b2b",
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
            route === "/fractional-cmo-b2b" ||
            route === "/ai-marketing-agents"
          ? 0.9
          : 0.8,
  }));
}
