import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "AI Marketing Team vs Agency by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Comparison",
    title: "AI Marketing Team vs Traditional Agency",
    subtitle: "Compare speed, cost, quality control, and accountability for B2B SaaS.",
  });
}
