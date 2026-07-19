import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Fractional CMO vs Agency vs Hire by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Comparison",
    title: "Fractional CMO vs Agency vs Full-Time Hire",
    subtitle: "Compare cost, ownership, speed, and risk, and see which fits your stage.",
  });
}
