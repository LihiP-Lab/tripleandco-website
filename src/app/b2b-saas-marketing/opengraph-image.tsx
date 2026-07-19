import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "B2B SaaS Marketing by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "B2B SaaS Marketing",
    title: "B2B SaaS Marketing That Ships",
    subtitle: "Positioning, demand, and pipeline run by an AI-native CMO plus 8 supervised agents.",
  });
}
