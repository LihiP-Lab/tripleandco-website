import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Triple & Co. insights on AI, marketing, and revenue";

export default function OgImage() {
  return ogCard({
    eyebrow: "Insights",
    title: "Insights on AI, Marketing, and Revenue",
  });
}
