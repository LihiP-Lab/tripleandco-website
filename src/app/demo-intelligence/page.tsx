import type { Metadata } from "next";
import { DemoIntelligenceDashboard } from "@/components/demo-intel/DemoIntelligenceDashboard";

export const metadata: Metadata = {
  title: "Demo Call Intelligence, Dark Titan",
  description:
    "Internal Gong-style analysis of Dark Titan (Develeap) demo calls: scores, talk ratios, objection patterns, competitive signals and coaching priorities.",
  robots: { index: false, follow: false },
};

export default function DemoIntelligencePage() {
  return <DemoIntelligenceDashboard />;
}
