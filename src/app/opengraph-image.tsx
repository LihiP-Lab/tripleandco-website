import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Triple & Co. AI-Powered CMO & CRO as a Service for B2B";

export default function OgImage() {
  return ogCard({
    eyebrow: "CMO & CRO as a Service",
    title: "AI-Powered Marketing Leadership for B2B",
    subtitle: "Led by Lihi Pinto. Powered by a supervised team of 8 AI marketing specialists.",
  });
}
