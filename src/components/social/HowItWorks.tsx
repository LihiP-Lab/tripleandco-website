"use client";

import { useEffect, useRef, useState } from "react";
import { Check, FileText } from "lucide-react";
import { socialAgent, type SocialAgentId } from "@/lib/social-packages";
import { Avatar, LIHI_PORTRAIT, usePrefersReducedMotion } from "./studio";

type Artifact = "brief" | "calendar" | "production" | "stamp" | "approve" | "report";

const STEPS: { who: string; title: string; body: string; day: number; agents: SocialAgentId[]; artifact: Artifact }[] = [
  {
    who: "You",
    title: "Share your priorities",
    body: "Offers, launches, buyers, and what the business needs this quarter.",
    day: 1,
    agents: [],
    artifact: "brief",
  },
  {
    who: "Lihi",
    title: "Shapes the direction",
    body: "Positioning, founder voice, and the monthly calendar, with buyer research from Nova and campaign angles from Rex.",
    day: 3,
    agents: ["nova", "rex"],
    artifact: "calendar",
  },
  {
    who: "8 agents",
    title: "Create the batch",
    body: "Camille writes, Vega designs, Lumen edits the videos, and Sage adapts each piece for every account.",
    day: 10,
    agents: ["camille", "vega", "lumen", "sage"],
    artifact: "production",
  },
  {
    who: "Lihi",
    title: "Reviews every piece",
    body: "The whole batch, before it reaches you.",
    day: 17,
    agents: [],
    artifact: "stamp",
  },
  {
    who: "You",
    title: "Approve",
    body: "With one consolidated revision round per monthly batch.",
    day: 20,
    agents: [],
    artifact: "approve",
  },
  {
    who: "Zara + Atlas",
    title: "Publish and report",
    body: "Zara schedules and publishes. Atlas tracks every link and builds the monthly results report, and Lihi sets next month's direction.",
    day: 30,
    agents: ["zara", "atlas"],
    artifact: "report",
  },
];

function ArtifactView({ type, on }: { type: Artifact; on: boolean }) {
  const base = "mt-4 rounded-xl border border-purple-15 bg-purple-05 p-3.5";
  switch (type) {
    case "brief":
      return (
        <div className={`${base} flex items-center gap-3`}>
          <FileText className="h-5 w-5 text-purple-6 shrink-0" />
          <span className="flex-1 space-y-1.5">
            <span className="block h-1.5 w-3/4 rounded-full bg-purple-15" />
            <span className="block h-1.5 w-1/2 rounded-full bg-purple-15" />
          </span>
          {on && (
            <span className="chip-pop inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[11px] font-bold text-green-800">
              <Check className="h-3.5 w-3.5" /> Brief received
            </span>
          )}
        </div>
      );
    case "calendar":
      return (
        <div className={base}>
          <span className="grid grid-cols-10 gap-1">
            {Array.from({ length: 20 }, (_, i) => (
              <span
                key={i}
                className={`aspect-square rounded-[3px] transition-colors duration-300 ${on ? (i % 7 === 3 ? "bg-brand" : "bg-purple-6") : "bg-purple-15"}`}
                style={{ transitionDelay: on ? `${i * 45}ms` : "0ms" }}
              />
            ))}
          </span>
          <span className="mt-2 block text-[11px] font-semibold text-purple-7">20 pieces planned across 4 weeks</span>
        </div>
      );
    case "production":
      return (
        <div className={`${base} space-y-2.5`}>
          {(["camille", "vega", "lumen", "sage"] as SocialAgentId[]).map((id, i) => {
            const a = socialAgent(id);
            return (
              <span key={id} className="flex items-center gap-2.5">
                <Avatar src={a.image} size={24} />
                <span className="w-16 text-[11px] font-bold text-purple-8">{a.name}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-purple-15">
                  <span
                    className="block h-full rounded-full gradient-bar transition-[width] duration-[1400ms] ease-out"
                    style={{ width: on ? "100%" : "0%", transitionDelay: on ? `${i * 200}ms` : "0ms" }}
                  />
                </span>
              </span>
            );
          })}
        </div>
      );
    case "stamp":
      return (
        <div className={`${base} flex items-center gap-3 min-h-[72px]`}>
          <Avatar src={LIHI_PORTRAIT} kind="person" size={40} />
          <span className="flex-1 space-y-1.5">
            <span className="block h-1.5 w-2/3 rounded-full bg-purple-15" />
            <span className="block h-1.5 w-1/2 rounded-full bg-purple-15" />
          </span>
          {on && (
            <span className="stamp-pop rounded-md border-2 border-brand-dark px-2.5 py-1 text-xs font-black uppercase tracking-widest text-brand-dark">
              Reviewed by Lihi
            </span>
          )}
        </div>
      );
    case "approve":
      return (
        <div className={`${base} flex items-center justify-between gap-3`}>
          <span className="text-[11px] font-semibold text-purple-7">1 revision round · batch of 20</span>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition-colors duration-500 ${
              on ? "border border-green-200 bg-green-50 text-green-800" : "border border-purple-15 bg-white text-purple-6"
            }`}
          >
            <Check className="h-3.5 w-3.5" /> {on ? "Approved" : "Approve batch"}
          </span>
        </div>
      );
    case "report":
      return (
        <div className={base}>
          <span className="flex h-12 items-end gap-1.5">
            {[38, 52, 46, 64, 58, 76, 70, 88].map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-t-[3px] transition-all duration-700 ease-out ${i > 5 ? "bg-brand" : "bg-purple-6"}`}
                style={{ height: on ? `${h}%` : "8%", transitionDelay: on ? `${i * 70}ms` : "0ms" }}
              />
            ))}
          </span>
          <span className="mt-2 block text-[11px] font-semibold text-purple-7">Published · tracked · reported in HubSpot</span>
        </div>
      );
  }
}

export function HowItWorks() {
  const reduced = usePrefersReducedMotion();
  const [reached, setReached] = useState(-1);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = Number((entry.target as HTMLElement).dataset.step);
          setReached((r) => Math.max(r, i));
        });
      },
      { rootMargin: "0px 0px -35% 0px", threshold: 0.4 },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const shown = reduced ? STEPS.length - 1 : reached;
  const current = STEPS[Math.max(0, shown)];
  const progress = ((shown + 1) / STEPS.length) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
      <div className="lg:sticky lg:top-28">
        <p className="eyebrow mb-4">How it works</p>
        <h2 id="how-title" className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9 mb-5">
          One month, <span className="gradient-text">six clear steps.</span>
        </h2>
        <p className="text-lg text-purple-7 leading-relaxed mb-8">
          Scroll through a month of work and see who does what, from your brief to the results report.
        </p>
        <div aria-hidden="true" className="hidden lg:block rounded-2xl border border-purple-15 bg-white p-5 shadow-[var(--shadow-base)]">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest">
            <span className="text-purple-6">Month tracker</span>
            <span className="text-brand-dark tabular-nums">Day {shown < 0 ? 0 : current.day} of 30</span>
          </div>
          <span className="mt-3 block h-2 overflow-hidden rounded-full bg-purple-15">
            <span
              className="block h-full rounded-full gradient-bar transition-[width] duration-700 ease-out"
              style={{ width: `${Math.max(0, progress)}%` }}
            />
          </span>
          <p key={shown} className="studio-enter mt-4 text-lg font-extrabold text-purple-9">
            {shown < 0 ? "Your month starts here" : `${shown + 1}. ${current.title}`}
          </p>
          <p className="text-sm text-purple-7">{shown < 0 ? "Scroll to run it" : current.who}</p>
        </div>
      </div>

      <div>
        <div
          aria-hidden="true"
          className="lg:hidden sticky top-[84px] z-20 mb-5 rounded-xl border border-purple-15 bg-white px-4 py-3 shadow-[var(--shadow-base)]"
        >
          <div className="flex items-center justify-between gap-3">
            <span key={shown} className="studio-enter truncate text-sm font-extrabold text-purple-8">
              {shown < 0 ? "Your month starts here" : `${shown + 1}. ${current.title}`}
            </span>
            <span className="shrink-0 text-[11px] font-bold uppercase tracking-widest text-brand-dark tabular-nums">
              Day {shown < 0 ? 0 : current.day} / 30
            </span>
          </div>
          <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-purple-15">
            <span
              className="block h-full rounded-full gradient-bar transition-[width] duration-700 ease-out"
              style={{ width: `${Math.max(0, progress)}%` }}
            />
          </span>
        </div>
        <ol className="relative">
        <span aria-hidden="true" className="absolute left-[19px] top-2 bottom-2 w-0.5 rounded-full bg-purple-15">
          <span
            className="block w-full rounded-full gradient-bar transition-[height] duration-700 ease-out"
            style={{ height: `${Math.max(0, ((shown + 0.5) / STEPS.length) * 100)}%` }}
          />
        </span>
        {STEPS.map((s, i) => {
          const on = i <= shown;
          return (
            <li
              key={s.title}
              data-step={i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative grid grid-cols-[40px_1fr] gap-4 pb-6 last:pb-0"
            >
              <span
                aria-hidden="true"
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-black transition-colors duration-500 ${
                  on ? "bg-brand-dark text-white" : "border border-purple-15 bg-white text-purple-6"
                }`}
              >
                {on ? <Check className="h-4 w-4" /> : `0${i + 1}`}
              </span>
              <div className="rounded-2xl border border-purple-15 bg-white p-5 shadow-[var(--shadow-base)]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      s.who === "Lihi" ? "bg-brand-dark text-white" : "bg-purple-05 text-purple-8 border border-purple-15"
                    }`}
                  >
                    {s.who}
                  </span>
                  {s.agents.length > 0 && (
                    <span aria-hidden="true" className="flex -space-x-1.5">
                      {s.agents.map((id) => (
                        <Avatar key={id} src={socialAgent(id).image} size={26} />
                      ))}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-extrabold text-purple-9 mb-1">
                  <span className="sr-only">Step {i + 1}: {s.who}, </span>
                  {s.title}
                </h3>
                <p className="text-[15px] text-purple-7 leading-relaxed">{s.body}</p>
                <div aria-hidden="true">
                  <ArtifactView type={s.artifact} on={on} />
                </div>
              </div>
            </li>
          );
        })}
        </ol>
      </div>
    </div>
  );
}
