import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "The Orchestrator Method by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "The Triple & Co. methodology",
    title: "The Orchestrator Method",
    subtitle:
      "One orchestrator. Eight specialist AI agents. Zero unsupervised output.",
  });
}
