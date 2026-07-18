import type { Metadata } from "next";
import { Suspense } from "react";
import { ShieldCheck } from "lucide-react";
import { AccessGate } from "@/components/demo-intel/AccessGate";

export const metadata: Metadata = {
  title: "Access, Demo Call Intelligence",
  description: "Enter your access code to view the Dark Titan demo call intelligence dashboard.",
  robots: { index: false, follow: false },
};

export default function DemoAccessPage() {
  return (
    <div className="console console-canvas flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center gap-2">
          <span className="signal-dot" aria-hidden="true" />
          <span className="mono-label" style={{ color: "#3DE1FF" }}>
            Triple &amp; Co. · Private
          </span>
        </div>

        <div className="glass-card relative rounded-2xl p-8">
          <span className="card-spotlight" aria-hidden="true" />
          <div
            className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
            style={{ background: "rgba(61,225,255,0.12)", border: "1px solid rgba(61,225,255,0.3)" }}
          >
            <ShieldCheck className="h-5 w-5" style={{ color: "#3DE1FF" }} aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-black tracking-tight" style={{ color: "var(--c-text)" }}>
            Demo Call Intelligence
          </h1>
          <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
            This dashboard is private to Dark Titan. Enter the access code shared with your
            team to continue.
          </p>

          <div className="mt-6">
            <Suspense fallback={null}>
              <AccessGate />
            </Suspense>
          </div>
        </div>

        <p className="mt-5 text-center text-[12px]" style={{ color: "var(--c-text-dim)" }}>
          Need access? Contact{" "}
          <a href="mailto:lihi@tripleandco.com" style={{ color: "#3DE1FF" }}>
            lihi@tripleandco.com
          </a>
        </p>
      </div>
    </div>
  );
}
