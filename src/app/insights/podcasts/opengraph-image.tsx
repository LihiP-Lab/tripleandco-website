import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Podcasts by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Insights",
    title: "Podcasts",
    subtitle:
      "Battle-tested B2B marketing strategies with AI. Short, sharp episodes by Lihi Pinto for CMOs and founders.",
  });
}
