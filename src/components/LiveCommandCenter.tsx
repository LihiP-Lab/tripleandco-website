"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { ScrollReveal } from "./ScrollReveal";

/* Rotating pool of agent activity. Named agents, real deliverables. */
const ACTIVITY: { agent: string; action: string }[] = [
  { agent: "Rex", action: "mapped a 90-day growth roadmap" },
  { agent: "Camille", action: "drafted landing page copy in brand voice" },
  { agent: "Nova", action: "surfaced 10 buyer-intent keywords" },
  { agent: "Atlas", action: "refreshed the pipeline attribution report" },
  { agent: "Zara", action: "queued a 30-day social calendar" },
  { agent: "Vega", action: "shipped 3 art directions with a pick" },
  { agent: "Sage", action: "turned one webinar into 12 assets" },
  { agent: "Lumen", action: "storyboarded a founder demo film" },
  { agent: "Rex", action: "sized the next campaign by pipeline impact" },
  { agent: "Camille", action: "rewrote 3 hero assets in your voice" },
  { agent: "Atlas", action: "flagged where budget is actually working" },
  { agent: "Nova", action: "benchmarked two competitor content plays" },
];

interface FeedEntry {
  key: number;
  agent: string;
  action: string;
  age: number;
  reviewed: boolean;
}

function ageLabel(age: number): string {
  if (age <= 2) return "live";
  if (age < 60) return `${age}s ago`;
  return `${Math.floor(age / 60)}m ago`;
}

function ActivityFeed() {
  const seed: FeedEntry[] = ACTIVITY.slice(0, 5).map((a, i) => ({
    key: i,
    agent: a.agent,
    action: a.action,
    age: i * 7 + 2,
    reviewed: i > 0,
  }));
  const [entries, setEntries] = useState<FeedEntry[]>(seed);
  const cursor = useRef(5);
  const keyRef = useRef(5);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const tick = setInterval(() => {
      setEntries((prev) => prev.map((e) => ({ ...e, age: e.age + 1, reviewed: e.age + 1 > 2 })));
    }, 1000);

    const spawn = setInterval(() => {
      const next = ACTIVITY[cursor.current % ACTIVITY.length];
      cursor.current += 1;
      keyRef.current += 1;
      setEntries((prev) =>
        [{ key: keyRef.current, agent: next.agent, action: next.action, age: 0, reviewed: false }, ...prev].slice(0, 6),
      );
    }, 3200);

    return () => {
      clearInterval(tick);
      clearInterval(spawn);
    };
  }, []);

  return (
    <div
      className="rounded-2xl p-5 lg:p-6"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="mono-label flex items-center gap-2.5" style={{ color: "var(--color-pink-3)" }}>
          <span className="signal-dot" aria-hidden="true" />
          command-center &#8250; live feed
        </span>
        <span className="mono-label" style={{ color: "rgba(244,244,248,0.45)" }}>
          8 agents online
        </span>
      </div>

      <ul className="space-y-2.5">
        {entries.map((e) => (
          <li
            key={e.key}
            className="flex items-start gap-3 rounded-xl px-3.5 py-3"
            style={{ background: "rgba(255,255,255,0.04)", animation: "fade-in .5s ease both" }}
          >
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-black"
              style={{ background: "linear-gradient(135deg, #FE3465, #896D9C)", color: "#fff" }}
            >
              {e.agent[0]}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] leading-snug text-white">
                <span className="font-bold" style={{ color: "var(--color-pink-3)" }}>
                  {e.agent}
                </span>{" "}
                <span className="text-purple-3">{e.action}</span>
              </p>
              <p className="mt-1 flex items-center gap-2 text-[11px]" style={{ color: "rgba(244,244,248,0.45)" }}>
                <span>{ageLabel(e.age)}</span>
                <span aria-hidden="true">&middot;</span>
                <span style={{ color: e.reviewed ? "#3DE1FF" : "rgba(244,244,248,0.4)" }}>
                  {e.reviewed ? "reviewed by Lihi" : "queued for review"}
                </span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LiveStat({ target, suffix, prefix, label }: { target: number; suffix?: string; prefix?: string; label: string }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const value = useCountUp(target, inView);
  return (
    <div
      ref={ref}
      className="rounded-2xl px-5 py-6 text-center"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.10)" }}
    >
      <div className="gradient-text mb-1.5 text-[40px] font-black leading-none tracking-tighter">
        {prefix}
        {value}
        {suffix}
      </div>
      <div className="text-[13px] font-medium text-purple-3">{label}</div>
    </div>
  );
}

export function LiveCommandCenter() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white lg:py-28" aria-labelledby="command-center-heading">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 60% at 15% 40%, rgba(254,52,101,.16) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-8">
        <ScrollReveal>
          <p className="eyebrow-light eyebrow mb-4">The command center</p>
          <h2
            id="command-center-heading"
            className="max-w-[720px] text-3xl font-black leading-[1.1] tracking-tight lg:text-[44px]"
          >
            Always on. Always <span className="gradient-text">supervised</span>.
          </h2>
          <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-purple-3">
            The eight agents work while you sleep. Lihi reviews everything before it ships. This is
            what momentum looks like when one operator owns the outcome.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
          <ScrollReveal delay={0.1}>
            <ActivityFeed />
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="grid grid-cols-2 gap-4">
              <LiveStat target={47} label="Deliverables shipped this week" />
              <LiveStat target={94} suffix="%" label="Approved on first pass" />
              <LiveStat target={8} label="Specialist agents on the team" />
              <LiveStat target={100} suffix="%" label="Human-reviewed before it ships" />
            </div>

            <div
              className="mt-4 flex items-center gap-3.5 rounded-2xl px-5 py-4"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full" style={{ padding: 2, background: "linear-gradient(135deg, #FE3465, #3DE1FF)" }}>
                <span className="relative block h-full w-full overflow-hidden rounded-full">
                  <Image src="/images/lihi.png" alt="Lihi Pinto, supervising the agent team" fill className="object-cover object-top" sizes="44px" />
                </span>
              </span>
              <div>
                <p className="text-[13px] font-bold text-white">Supervised by Lihi Pinto</p>
                <p className="text-[12px] text-purple-3">Nothing leaves the command center without her review.</p>
              </div>
            </div>

            <Link
              href="/agents"
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-semibold text-pink-3 transition-all hover:gap-2.5"
            >
              Meet the team behind the feed <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
