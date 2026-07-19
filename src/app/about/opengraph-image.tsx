import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "About Lihi Pinto, Israel's First Native AI CMO and CRO";

export default function OgImage() {
  return ogCard({
    eyebrow: "About",
    title: "Lihi Pinto. Israel's First Native AI CMO & CRO.",
  });
}
