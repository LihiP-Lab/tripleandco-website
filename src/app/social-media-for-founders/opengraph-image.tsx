import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Social media for founders, run by Lihi Pinto and 8 AI agents, Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Social Media for Founders",
    title: "Show Up Every Week. Without Hiring a Team.",
    subtitle: "Lihi Pinto + 8 AI agents plan, create, and publish your social media.",
  });
}
