import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Free AI Visibility Checker by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Free AI Visibility Checker",
    title: "Can AI Engines Read Your Site?",
    subtitle:
      "Instant 0 to 100 score: llms.txt, AI crawler access, structured data, and Bing indexability.",
  });
}
