"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  PhoneCall,
  ShieldAlert,
  Swords,
  GraduationCap,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { meta } from "@/lib/demo-intelligence-data";
import {
  OverviewPanel,
  CallsPanel,
  ObjectionsPanel,
  CompetitivePanel,
  CoachingPanel,
  AccountPanel,
} from "./panels";

type TabId =
  | "overview"
  | "calls"
  | "objections"
  | "competitive"
  | "coaching"
  | "akamai";

const TABS: { id: TabId; label: string; icon: LucideIcon }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "calls", label: "Calls", icon: PhoneCall },
  { id: "objections", label: "Objections", icon: ShieldAlert },
  { id: "competitive", label: "Competitive", icon: Swords },
  { id: "coaching", label: "Coaching", icon: GraduationCap },
  { id: "akamai", label: "Akamai (Post-POC)", icon: Building2 },
];

const PANELS: Record<TabId, React.ComponentType> = {
  overview: OverviewPanel,
  calls: CallsPanel,
  objections: ObjectionsPanel,
  competitive: CompetitivePanel,
  coaching: CoachingPanel,
  akamai: AccountPanel,
};

export function DemoIntelligenceDashboard() {
  const [tab, setTab] = useState<TabId>("overview");
  const Panel = PANELS[tab];

  return (
    <div className="console console-canvas min-h-screen">
      <div className="mx-auto flex max-w-[1320px] flex-col lg:flex-row">
        {/* ===== Sidebar ===== */}
        <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0 lg:overflow-y-auto">
          <div
            className="flex h-full flex-col px-6 py-7"
            style={{ borderRight: "1px solid var(--c-border)" }}
          >
            {/* Brand */}
            <div className="mb-8">
              <div className="mono-label flex items-center gap-2" style={{ color: "var(--c-text)" }}>
                <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: "var(--c-brand)" }} />
                TRIPLE &amp; CO.
              </div>
              <p className="mt-1 text-xs" style={{ color: "var(--c-text-dim)" }}>
                Demo Call Intelligence
              </p>
            </div>

            {/* Nav */}
            <nav className="flex gap-1.5 overflow-x-auto lg:flex-col lg:overflow-visible">
              {TABS.map((t) => {
                const Icon = t.icon;
                const active = t.id === tab;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    aria-current={active ? "page" : undefined}
                    className="flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all"
                    style={{
                      background: active ? "rgba(254,52,101,0.12)" : "transparent",
                      color: active ? "#FE85A3" : "var(--c-text-dim)",
                      border: active ? "1px solid rgba(254,52,101,0.3)" : "1px solid transparent",
                    }}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                    {t.label}
                  </button>
                );
              })}
            </nav>

            {/* Meta footer */}
            <div
              className="mt-auto hidden gap-1 pt-8 lg:flex lg:flex-col"
              style={{ color: "var(--c-text-dim)" }}
            >
              <div className="mono-label" style={{ fontSize: 9 }}>
                Coverage
              </div>
              <div className="text-sm font-bold" style={{ color: "var(--c-text)" }}>
                {meta.callsAnalyzed} / {meta.callsTotal} demos
              </div>
              <div className="mt-3 text-[11px] leading-relaxed">
                {meta.client}
                <br />
                Generated {meta.generated}
              </div>
              <div
                className="mt-3 rounded-lg px-2.5 py-1.5 text-[10px] leading-snug"
                style={{ background: "rgba(214,69,69,0.1)", color: "#F08A8A", border: "1px solid rgba(214,69,69,0.25)" }}
              >
                Internal: client names &amp; commercial terms. Do not distribute.
              </div>
            </div>
          </div>
        </aside>

        {/* ===== Main ===== */}
        <main className="min-w-0 flex-1">
          {/* Header band */}
          <header className="px-6 pb-8 pt-8 lg:px-10 lg:pt-10" style={{ borderBottom: "1px solid var(--c-border)" }}>
            <div
              className="mono-label mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
              style={{ border: "1px solid var(--c-border)", color: "var(--c-text-dim)" }}
            >
              <span className="signal-dot" aria-hidden="true" /> Revenue intelligence · Dark Titan × Develeap
            </div>
            <h1
              className="max-w-3xl text-3xl font-black leading-[1.08] tracking-tight lg:text-[42px]"
              style={{ color: "var(--c-text)" }}
            >
              Demo Call Intelligence:{" "}
              <span className="gradient-text">
                {meta.callsAnalyzed} of {meta.callsTotal} calls
              </span>{" "}
              analyzed
            </h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
              Gong-style breakdown of the Sisense, Exaware, Verbit, Xwinsys and mPrest demos:
              conversation mechanics, objection patterns, competitive signals and coaching
              priorities. Built from full call transcripts (Hebrew); all quotes verbatim.
              Talk-time figures are estimates from transcript word counts.
            </p>
          </header>

          {/* Active panel */}
          <div className="px-6 py-8 lg:px-10 lg:py-10">
            <Panel />
          </div>
        </main>
      </div>
    </div>
  );
}
