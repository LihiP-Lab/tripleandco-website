import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "AI Revenue Readiness Score by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Free Revenue Assessment",
    title: "Score Your Revenue Operation in 3 Minutes.",
    subtitle:
      "20 areas, 7 dimensions, 0 to 100. Your score, the shape of your gaps, and the three things to fix first.",
  });
}
