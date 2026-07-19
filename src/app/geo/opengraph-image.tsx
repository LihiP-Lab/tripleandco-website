import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Generative Engine Optimization for B2B by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Generative Engine Optimization",
    title: "Get Cited by AI Search Engines",
    subtitle: "GEO makes your brand quotable in ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  });
}
