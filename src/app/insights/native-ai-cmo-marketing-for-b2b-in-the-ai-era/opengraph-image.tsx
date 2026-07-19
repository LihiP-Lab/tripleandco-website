import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Native AI CMO article by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Insights",
    title: "Native AI CMO: Marketing in the AI Era",
    subtitle: "Every B2B team uses AI tools, yet pipeline quality has not improved. Here is why.",
  });
}
