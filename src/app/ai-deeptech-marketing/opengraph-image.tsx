import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "AI and DeepTech Marketing for B2B by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "AI and DeepTech Marketing",
    title: "Turn Hard Technology Into a Clear Business Case",
    subtitle: "Positioning and demand for AI and deep tech, led by an AI-native CMO plus 8 agents.",
  });
}
