"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AREAS, DIMENSIONS, POINTS } from "@/lib/readiness";

/**
 * The "See it run" showcase: three staged replays of the real instrument,
 * rendered live from the same data model the assessment uses. Each scene is
 * a scripted loop that only advances while it is on screen; reduced motion
 * gets the settled final frame of each scene instead of anything that moves.
 */

/* ------------------------------------------------------------------ */
/* Shared machinery                                                    */
/* ------------------------------------------------------------------ */

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const cb = () => setReduced(mq.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);
  return reduced;
}

/** True while at least `threshold` of the element is in the viewport. */
function useOnScreen<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible(e.isIntersecting)),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/**
 * A scripted timeline: advances `step` through `durations` while the scene
 * is running, then wraps. Paused off screen and frozen at the final step
 * under reduced motion.
 */
function useTimeline(durations: number[], running: boolean, reduced: boolean) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduced || !running) return;
    const id = setTimeout(
      () => setStep((s) => (s + 1) % durations.length),
      durations[step]
    );
    return () => clearTimeout(id);
  }, [step, running, reduced, durations]);
  return reduced ? durations.length - 1 : step;
}

/** rAF-eased scalar, same easing family as the real instrument. */
function useEased(target: number, duration = 500): number {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const raf = useRef(0);
  useEffect(() => {
    const from = fromRef.current;
    if (from === target) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const e = 1 - Math.pow(1 - t, 3);
      const v = from + (target - from) * e;
      setValue(v);
      fromRef.current = v;
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);
  return value;
}

const GRAD = "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)";

/* ------------------------------------------------------------------ */
/* Card frame: minimal browser chrome around a dark console            */
/* ------------------------------------------------------------------ */

function Frame({
  label,
  chip,
  children,
}: {
  label: string;
  /** Floating stat chip in the top-right corner of the viewport. */
  chip?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-purple-15 bg-dark shadow-[var(--shadow-base)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </span>
        <span className="ml-2 truncate rounded-md bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-purple-3">
          tripleandco.com/ai-revenue-readiness-score
        </span>
        <span className="ml-auto hidden rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-pink-3 sm:block">
          {label}
        </span>
      </div>
      <div
        className="relative p-5 sm:p-6"
        style={{
          backgroundImage:
            "radial-gradient(circle at 82% -10%, rgba(254,52,101,0.24), transparent 55%), radial-gradient(circle at 0% 110%, rgba(137,109,156,0.22), transparent 55%)",
        }}
      >
        {children}
        {chip}
      </div>
    </div>
  );
}

function Chip({
  show,
  children,
  className = "",
}: {
  show: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`pointer-events-none absolute rounded-full border border-white/15 bg-dark/90 px-3 py-1.5 text-[11px] font-bold text-white shadow-[0_8px_24px_rgba(27,22,31,.45)] backdrop-blur transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      } ${className}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Scene 1: the score banks as you answer                              */
/* ------------------------------------------------------------------ */

const S1_AREA = AREAS[0];
// steps: 0 idle · 1 hover option 3 · 2 selected, points bank · 3 hold
const S1_DURATIONS = [1400, 1100, 1600, 2200];

function SceneAnswering({ running }: { running: boolean }) {
  const reduced = usePrefersReducedMotion();
  const step = useTimeline(S1_DURATIONS, running, reduced);
  const banked = step >= 2;
  const eased = useEased(banked ? 15 : 12, 520);

  return (
    <Frame
      label="Live replay"
      chip={
        <Chip show={banked} className="right-4 top-3 sm:right-5">
          +{POINTS[2]} banked
        </Chip>
      }
    >
      <div className="mb-4 flex items-baseline gap-2">
        <span className="text-4xl font-black leading-none tabular-nums text-white">
          {Math.round(eased)}
        </span>
        <span className="text-xs font-bold text-purple-3">/ 100</span>
      </div>
      <div className="mb-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full transition-[width] duration-500 ease-out"
          style={{ width: `${eased}%`, background: GRAD }}
        />
      </div>

      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-purple-4">
        Area 1 of 20 &middot; {S1_AREA.title}
      </p>
      <p className="mb-3 text-[15px] font-extrabold leading-snug text-white">
        {S1_AREA.question}
      </p>
      <div className="flex flex-col gap-2">
        {S1_AREA.options.slice(1, 4).map((opt, idx) => {
          const i = idx + 1;
          const hovered = step === 1 && i === 2;
          const selected = step >= 2 && i === 2;
          return (
            <div
              key={opt}
              className={`flex items-start gap-2.5 rounded-xl border px-3 py-2.5 transition-all duration-300 ${
                selected
                  ? "border-brand bg-white/10"
                  : hovered
                    ? "-translate-y-0.5 border-pink-3 bg-white/[0.07]"
                    : "border-white/15 bg-white/[0.03]"
              }`}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold ${
                  hovered || selected
                    ? "border-pink-3 text-white"
                    : "border-white/25 text-purple-3"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`flex-1 text-[12px] leading-relaxed ${
                  hovered || selected ? "text-white" : "text-purple-2"
                }`}
              >
                {opt}
              </span>
              <span className="mt-0.5 shrink-0 text-[10px] font-bold tabular-nums text-purple-4">
                +{POINTS[i]}
              </span>
            </div>
          );
        })}
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* Scene 2: each room hands off to the next host                       */
/* ------------------------------------------------------------------ */

const S2_FROM = DIMENSIONS[0]; // Strategy · Rex
const S2_TO = DIMENSIONS[1]; // Data · Nova
// steps: 0 strategy banks · 1 handoff card · 2 Nova speaks · 3 hold
const S2_DURATIONS = [1600, 1400, 2400, 1800];

function SceneHandoff({ running }: { running: boolean }) {
  const reduced = usePrefersReducedMotion();
  const step = useTimeline(S2_DURATIONS, running, reduced);
  const arrived = step >= 1;

  return (
    <Frame
      label="Live replay"
      chip={
        <Chip show={step >= 0} className="right-4 top-3 sm:right-5">
          {S2_FROM.label} banked{" "}
          <span className="tabular-nums text-pink-3">12/15</span>
        </Chip>
      }
    >
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-4 text-center">
        <div
          className={`transition-all duration-500 ${
            arrived ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {S2_TO.host.image && (
            <Image
              src={S2_TO.host.image}
              alt={`${S2_TO.host.name}, ${S2_TO.host.role}`}
              width={400}
              height={700}
              className="mx-auto w-20 h-auto drop-shadow-lg"
            />
          )}
        </div>
        <div
          className={`transition-all duration-500 delay-150 ${
            arrived ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-purple-4">
            Room 2 of {DIMENSIONS.length}
          </p>
          <p className="mt-1 text-xl font-extrabold text-white">
            {S2_TO.label}
          </p>
          <p className="mt-0.5 text-[13px] font-bold text-pink-3">
            {S2_TO.host.name} &middot; {S2_TO.host.role}
          </p>
        </div>
        <p
          className={`mx-auto max-w-[340px] text-[12px] leading-relaxed text-purple-2 transition-opacity duration-500 ${
            step >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          {S2_TO.host.line}
        </p>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* Scene 3: the result arrives in order (the hero card)                */
/* ------------------------------------------------------------------ */

const S3_SCORE = 62;
const S3_BARS = [12, 7, 10, 9, 6, 8, 10];
const S3_ACTIONS = [
  { id: "A2", dim: "AI architecture", title: "Write the operating model down" },
  { id: "D2", dim: "Data", title: "Make the CRM the single source of truth" },
  { id: "P2", dim: "Pipeline", title: "Stand up a real outbound motion" },
];
// steps: 0 reset · 1 dial fills · 2 tier lands · 3 bars stagger in ·
// 4 actions · 5 hold
const S3_DURATIONS = [500, 1700, 1100, 1700, 2600, 2400];

function SceneResult({ running }: { running: boolean }) {
  const reduced = usePrefersReducedMotion();
  const step = useTimeline(S3_DURATIONS, running, reduced);
  const filled = useEased(step >= 1 ? S3_SCORE : 0, 900);
  const dialR = 52;
  const circ = 2 * Math.PI * dialR;

  return (
    <Frame
      label="Live replay"
      chip={
        <Chip show={step >= 2} className="right-4 top-3 sm:right-5">
          Measured live &middot;{" "}
          <span className="text-pink-3">AI visibility 71/100</span>
        </Chip>
      }
    >
      <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
        <div className="flex flex-col items-center">
          <div className="relative h-[128px] w-[128px]">
            <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
              <defs>
                <linearGradient id="ss-dial" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FE3465" />
                  <stop offset="100%" stopColor="#896D9C" />
                </linearGradient>
              </defs>
              <circle
                cx="64"
                cy="64"
                r={dialR}
                fill="none"
                stroke="rgba(231,226,235,0.12)"
                strokeWidth="10"
              />
              <circle
                cx="64"
                cy="64"
                r={dialR}
                fill="none"
                stroke="url(#ss-dial)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={circ - circ * (filled / 100)}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-black leading-none tabular-nums text-white">
                {Math.round(filled)}
              </span>
              <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-purple-3">
                out of 100
              </span>
            </div>
          </div>
          <span
            className={`mt-3 rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-400 ${
              step >= 2 ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            Operator
          </span>
        </div>

        <div>
          <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-purple-4">
            Where the gaps are
          </p>
          <ul className="list-none space-y-2 p-0">
            {DIMENSIONS.map((d, i) => (
              <li key={d.id} className="flex items-center gap-2.5">
                <span className="w-[84px] shrink-0 text-[11px] font-semibold text-purple-2">
                  {d.short}
                </span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span
                    className="block h-full rounded-full transition-[width] duration-700 ease-out"
                    style={{
                      width:
                        step >= 3
                          ? `${(S3_BARS[i] / d.maxPoints) * 100}%`
                          : "0%",
                      transitionDelay: `${i * 90}ms`,
                      background: GRAD,
                    }}
                  />
                </span>
                <span
                  className={`w-9 shrink-0 text-right text-[11px] font-bold tabular-nums text-purple-3 transition-opacity duration-300 ${
                    step >= 3 ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {S3_BARS[i]}/{d.maxPoints}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <p
          className={`mb-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-pink-3 transition-opacity duration-400 ${
            step >= 4 ? "opacity-100" : "opacity-0"
          }`}
        >
          Three things to fix first
        </p>
        <div className="grid gap-2.5 sm:grid-cols-3">
          {S3_ACTIONS.map((a, i) => (
            <div
              key={a.id}
              className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition-all duration-500 ${
                step >= 4
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 130}ms` }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: GRAD }}
              />
              <p className="text-[9px] font-bold uppercase tracking-wider text-purple-4">
                {a.id} &middot; {a.dim}
              </p>
              <p className="mt-1 text-[12px] font-extrabold leading-snug text-white">
                {a.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* The bento                                                           */
/* ------------------------------------------------------------------ */

const CAPTIONS = [
  {
    n: "01",
    title: "The score banks as you answer",
    body: "Points land the moment you pick: the running total ticks up, the bar fills, and the banked points float in.",
  },
  {
    n: "02",
    title: "Each room hands off to the next host",
    body: "Strategy banks its points, then Nova arrives for data. Seven rooms, and you always know which one you are in.",
  },
  {
    n: "03",
    title: "The result arrives in order",
    body: "The dial fills, the tier lands, the gaps line up, and the three things to fix first come in last.",
  },
];

function Caption({ n, title, body }: (typeof CAPTIONS)[number]) {
  return (
    <figcaption className="mt-4">
      <p className="mb-1.5 text-sm font-extrabold text-purple-9">
        <span className="mr-2 font-black text-brand-dark">{n}</span>
        {title}
      </p>
      <p className="text-[13px] leading-relaxed text-purple-7">{body}</p>
    </figcaption>
  );
}

export function ScoreShowcase() {
  const { ref, visible } = useOnScreen<HTMLDivElement>(0.2);

  return (
    <div ref={ref}>
      {/* The money shot first: the result arriving, full width. */}
      <figure className="relative m-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 rounded-[32px] opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(254,52,101,0.14), transparent 60%), radial-gradient(ellipse at 80% 90%, rgba(137,109,156,0.16), transparent 60%)",
          }}
        />
        <div className="relative">
          <SceneResult running={visible} />
        </div>
        <Caption {...CAPTIONS[2]} />
      </figure>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-6">
        <figure className="m-0">
          <SceneAnswering running={visible} />
          <Caption {...CAPTIONS[0]} />
        </figure>
        <figure className="m-0">
          <SceneHandoff running={visible} />
          <Caption {...CAPTIONS[1]} />
        </figure>
      </div>
    </div>
  );
}
