import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Contact Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Contact",
    title: "Let's Talk About Your Revenue Growth",
  });
}
