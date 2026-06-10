"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { agents } from "@/lib/agents-data";

// Fixed constellation positions (percent of container) for the 8 agents,
// arranged around a central supervisor (Lihi).
const POSITIONS: Record<string, { x: number; y: number }> = {
  camille: { x: 17, y: 18 },
  vega: { x: 50, y: 7 },
  rex: { x: 83, y: 18 },
  nova: { x: 92, y: 50 },
  atlas: { x: 82, y: 83 },
  lumen: { x: 50, y: 93 },
  sage: { x: 18, y: 83 },
  zara: { x: 8, y: 50 },
};

const CENTER = { x: 50, y: 50 };

const FEED: { id: string; text: string }[] = [
  { id: "rex", text: "running campaign brief" },
  { id: "camille", text: "drafting landing page copy" },
  { id: "vega", text: "reviewing 3 art directions" },
  { id: "atlas", text: "auditing Q2 attribution" },
  { id: "nova", text: "mapping buyer-intent keywords" },
  { id: "zara", text: "scheduling 30-day calendar" },
  { id: "sage", text: "repurposing webinar → 12 assets" },
  { id: "lumen", text: "storyboarding demo film" },
];

function Typewriter() {
  const [line, setLine] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const full = FEED[line].text;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      const show = setTimeout(() => setText(full), 0);
      const next = setTimeout(
        () => setLine((l) => (l + 1) % FEED.length),
        2600
      );
      return () => {
        clearTimeout(show);
        clearTimeout(next);
      };
    }

    let i = 0;
    const clear = setTimeout(() => setText(""), 0);
    const typer = setInterval(() => {
      i++;
      setText(full.slice(0, i));
      if (i >= full.length) clearInterval(typer);
    }, 38);
    const next = setTimeout(
      () => setLine((l) => (l + 1) % FEED.length),
      full.length * 38 + 1900
    );
    return () => {
      clearTimeout(clear);
      clearInterval(typer);
      clearTimeout(next);
    };
  }, [line]);

  return (
    <span className="boot-caret">
      <span style={{ color: "var(--c-brand)" }}>{FEED[line].id}</span>
      <span style={{ color: "var(--c-text-dim)" }}>{" \u203A "}</span>
      <span style={{ color: "var(--c-text)" }}>{text}</span>
    </span>
  );
}

export function AgentConstellation() {
  return (
    <div className="w-full">
      <div className="relative mx-auto aspect-square w-full max-w-[440px]">
        {/* link layer */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {agents.map((a, i) => {
            const p = POSITIONS[a.id];
            if (!p) return null;
            return (
              <line
                key={a.id}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={p.x}
                y2={p.y}
                stroke="url(#linkGrad)"
                strokeWidth={0.3}
                strokeDasharray="1.6 1.6"
                style={{
                  animation: `constellation-dash 18s linear infinite`,
                  animationDelay: `${i * -1.4}s`,
                }}
              />
            );
          })}
          <defs>
            <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(254,52,101,0.55)" />
              <stop offset="100%" stopColor="rgba(61,225,255,0.35)" />
            </linearGradient>
          </defs>
        </svg>

        {/* center supervisor */}
        <Node
          image="/images/lihi.png"
          alt="Lihi Pinto, supervisor"
          label="Lihi · Supervisor"
          x={CENTER.x}
          y={CENTER.y}
          size={84}
          center
        />

        {/* agent nodes */}
        {agents.map((a, i) => {
          const p = POSITIONS[a.id];
          if (!p) return null;
          return (
            <Node
              key={a.id}
              image={a.image}
              alt={a.name}
              label={a.name}
              x={p.x}
              y={p.y}
              size={56}
              delay={i * 0.12}
            />
          );
        })}
      </div>

      {/* telemetry terminal */}
      <div
        className="mx-auto mt-6 flex max-w-[440px] items-center gap-3 rounded-xl px-4 py-3"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid var(--c-border)",
          fontFamily: "var(--font-mono), ui-monospace, monospace",
          fontSize: 13,
        }}
      >
        <span className="signal-dot shrink-0" aria-hidden="true" />
        <span className="truncate">
          <Typewriter />
        </span>
      </div>
    </div>
  );
}

function Node({
  image,
  alt,
  label,
  x,
  y,
  size,
  center = false,
  delay = 0,
}: {
  image: string;
  alt: string;
  label: string;
  x: number;
  y: number;
  size: number;
  center?: boolean;
  delay?: number;
}) {
  return (
    <div
      className="group absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        animation: "ai-panel-breathe 6s ease-in-out infinite",
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="relative rounded-full"
        style={{
          width: size,
          height: size,
          padding: 2,
          background: center
            ? "linear-gradient(135deg, #FE3465, #3DE1FF)"
            : "rgba(255,255,255,0.12)",
          boxShadow: center
            ? "0 0 34px rgba(254,52,101,0.5)"
            : "0 0 18px rgba(0,0,0,0.5)",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image src={image} alt={alt} fill className="object-cover object-top" />
        </div>
        <span
          className="signal-dot absolute"
          style={{ right: 2, bottom: 2 }}
          aria-hidden="true"
        />
      </div>
      <span
        className="mono-label pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{ color: "var(--c-text)", fontSize: 10 }}
      >
        {label}
      </span>
    </div>
  );
}
