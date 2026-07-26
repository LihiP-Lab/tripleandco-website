import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Revenue Insights by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Insights",
    title: "Revenue Insights",
    subtitle:
      "How Triple & Co. builds marketing, sales, and customer success engines that triple B2B revenue.",
  });
}
