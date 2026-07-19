import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Fintech Marketing for B2B by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Fintech Marketing",
    title: "Fintech Marketing That Earns Trust and Pipeline",
    subtitle: "Compliance-aware positioning and demand for B2B fintech, led by an AI-native CMO.",
  });
}
