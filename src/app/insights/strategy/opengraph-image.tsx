import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Strategy Insights by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Insights",
    title: "Strategy Insights",
    subtitle:
      "The Joint Work Process: Triple becomes another hand in your business, guiding you toward relentless growth.",
  });
}
