import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Meet Triple & Co.'s 8 AI marketing agents";

export default function OgImage() {
  return ogCard({
    eyebrow: "AI Marketing Agents",
    title: "Meet Your AI Marketing Team",
    subtitle: "8 purpose-built specialists, supervised by Lihi Pinto. Real deliverables, weekly cadence.",
  });
}
