import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "B2B Marketing Agency in Israel by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "B2B Marketing in Israel",
    title: "B2B Marketing in Israel, Built to Sell Globally",
    subtitle: "Senior strategy from Lihi Pinto plus 8 supervised AI agents.",
  });
}
