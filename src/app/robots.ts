import type { MetadataRoute } from "next";

// Private surfaces that should stay out of every crawler (search + AI).
const disallow = ["/api/", "/proposals/", "/demo-intelligence"];

// AI answer engines we explicitly welcome so Triple & Co. is eligible to be
// cited in ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow,
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
        disallow,
      },
    ],
    sitemap: "https://www.tripleandco.com/sitemap.xml",
    host: "https://www.tripleandco.com",
  };
}
