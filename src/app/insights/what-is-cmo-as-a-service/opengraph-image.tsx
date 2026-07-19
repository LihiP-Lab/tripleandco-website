import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "What Is CMO as a Service guide by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Insights",
    title: "What Is CMO as a Service?",
    subtitle: "Not a fractional hire. A full marketing function: strategy, AI execution, and senior oversight.",
  });
}
