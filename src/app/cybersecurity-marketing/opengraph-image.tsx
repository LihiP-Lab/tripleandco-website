import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Cybersecurity Marketing for B2B by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Cybersecurity Marketing",
    title: "Marketing That Speaks to CISOs",
    subtitle: "Technical positioning and demand for B2B security, led by an AI-native CMO.",
  });
}
