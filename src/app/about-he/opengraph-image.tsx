import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Lihi Pinto, CMO and CRO as a Service for B2B SaaS, Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "About Lihi Pinto",
    title: "CMO & CRO as a Service for B2B SaaS",
    subtitle: "15 years of B2B growth leadership. AI-native execution, supervised by Lihi Pinto.",
  });
}
