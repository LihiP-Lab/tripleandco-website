import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "LLM SEO for B2B by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "LLM SEO",
    title: "Get Cited by ChatGPT and Perplexity",
    subtitle: "A practical B2B checklist for making large language models quote your brand in their answers.",
  });
}
