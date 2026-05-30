import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tripleandco.com";

  const routes = [
    "/",
    "/about",
    "/services",
    "/cmo-as-a-service",
    "/agents",
    "/ai-marketing-agents",
    "/builder-profile",
    "/insights",
    "/insights/revenue",
    "/insights/strategy",
    "/insights/podcasts",
    "/revenue-diagnostic",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/cmo-as-a-service" || route === "/ai-marketing-agents"
          ? 0.9
          : 0.8,
  }));
}
