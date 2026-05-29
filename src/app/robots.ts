import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/proposals/"],
      },
    ],
    sitemap: "https://www.tripleandco.com/sitemap.xml",
  };
}
