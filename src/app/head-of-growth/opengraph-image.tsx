import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Head of Growth as a Service for B2B SaaS by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Head of Growth as a Service",
    title: "Fractional Head of Growth for B2B SaaS",
    subtitle: "One growth leader owns acquisition, activation, and retention as a measurable system.",
  });
}
