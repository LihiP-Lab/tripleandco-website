import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Managed social media led by Lihi Pinto, Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Managed Social Media",
    title: "Not Another Social Media Tool. Your B2B Social Team.",
    subtitle: "Led by Lihi Pinto. Created, published, and reported by Triple & Co.",
  });
}
