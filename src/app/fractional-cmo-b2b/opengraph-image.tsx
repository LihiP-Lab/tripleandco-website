import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Fractional CMO for B2B SaaS, AI-powered, by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Fractional CMO",
    title: "Fractional CMO for B2B SaaS, AI-Powered",
  });
}
