import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Free revenue diagnostic with Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Free Diagnostic",
    title: "Find the Gaps in Your Revenue Funnel",
    subtitle: "A free 30-minute revenue diagnostic with Lihi Pinto. Zero cost, zero pressure.",
  });
}
