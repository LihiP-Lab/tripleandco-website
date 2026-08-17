import type { MetadataRoute } from "next";

// Private surfaces that should stay out of every crawler (search + AI).
const disallow = ["/api/", "/demo-intelligence"];

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
      // One block per agent rather than one stacked group. Grouping is valid
      // robots.txt and real crawlers honour it, but it puts up to 14 lines
      // between an agent name and its Allow directive, and readiness scanners
      // that match on proximity read the agents at the top of the stack (GPTBot
      // and OAI-SearchBot, the two that feed ChatGPT) as unhandled. Splitting
      // costs nothing and removes the ambiguity.
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow,
      })),
    ],
    sitemap: "https://www.tripleandco.com/sitemap.xml",
    host: "https://www.tripleandco.com",
  };
}
