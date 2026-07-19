import { ogCard, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Outsourced CMO in Israel cost guide by Triple & Co.";

export default function OgImage() {
  return ogCard({
    eyebrow: "Insights",
    title: "Outsourced CMO in Israel: What It Costs",
    subtitle: "Full-time, outsourced, fractional, or CMO as a Service: what each model costs in 2026.",
  });
}
