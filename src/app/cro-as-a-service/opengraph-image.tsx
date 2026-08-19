import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "CRO as a Service for B2B Tech by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "CRO as a Service",
    title: "CRO as a Service for B2B Tech",
    subtitle: "One leader owns the entire revenue number across marketing, sales, and customer success.",
  });
}
