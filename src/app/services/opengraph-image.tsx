import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Triple & Co. services for B2B marketing and revenue growth";

export default function OgImage() {
  return ogCard({
    eyebrow: "Services",
    title: "Nine Services. One Revenue Engine.",
    subtitle: "Senior CMO and CRO leadership, full-service execution, AI-powered delivery.",
  });
}
