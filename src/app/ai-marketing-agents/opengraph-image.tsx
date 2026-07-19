import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "AI Marketing Agents for B2B, the complete guide by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Guide",
    title: "AI Marketing Agents for B2B: The Complete Guide",
  });
}
