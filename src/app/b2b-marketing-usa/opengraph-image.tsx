import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "B2B Marketing for the US Market by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "B2B Marketing for the US",
    title: "B2B Marketing for the US Market",
    subtitle: "Senior go-to-market strategy from Lihi Pinto plus 8 supervised AI agents.",
  });
}
