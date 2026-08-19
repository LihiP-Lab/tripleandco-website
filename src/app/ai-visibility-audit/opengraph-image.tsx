import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Free AI Visibility Audit for B2B Tech by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Free AI Visibility Audit",
    title: "See What AI Says About Your Brand",
    subtitle: "A free audit of how ChatGPT, Perplexity, Gemini, and Google AI Overviews describe you.",
  });
}
