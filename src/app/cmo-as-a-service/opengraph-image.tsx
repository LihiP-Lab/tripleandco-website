import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "CMO as a Service for B2B SaaS by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "CMO as a Service",
    title: "CMO as a Service for B2B SaaS",
    subtitle: "One subscription replaces your agency retainers. Strategy, execution, and a full revenue operating system.",
  });
}
