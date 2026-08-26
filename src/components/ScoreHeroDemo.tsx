"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AREAS, DIMENSIONS, POINTS } from "@/lib/readiness";

/**
 * The hero demo: one continuous run of the instrument played like a film,
 * full width under the headline. Three chapters — answer, hand off, result —
 * crossfade inside a single framed console, with a chaptered player bar so
 * the visitor always knows where they are in the run. Everything is rendered
 * live from the real data model; reduced motion gets the settled result.
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

/** Master timeline over every step of the run; wraps, pauses off screen. */
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
/* The script                                                          */
/* ------------------------------------------------------------------ */

// One continuous run. Steps:
// chapter 1 — answer:   0 question up · 1 hover option · 2 pick, points bank
// chapter 2 — hand off: 3 strategy banks · 4 Nova arrives · 5 Nova speaks
// chapter 3 — result:   6 dial fills · 7 tier lands · 8 gaps draw · 9 actions
const STEP_DURATIONS = [
  1600, 1100, 1900, // answer
  1500, 1600, 2600, // hand off
  1800, 1100, 1900, 4400, // result
];
const CHAPTERS = [
  { label: "Answer", from: 0, to: 2 },
  { label: "Hand off", from: 3, to: 5 },
  { label: "Your result", from: 6, to: 9 },
];
const chapterDuration = (c: (typeof CHAPTERS)[number]) =>
  STEP_DURATIONS.slice(c.from, c.to + 1).reduce((s, d) => s + d, 0);

const AREA = AREAS[0];
const FROM = DIMENSIONS[0]; // Strategy · Rex
const TO = DIMENSIONS[1]; // Data · Nova

const SCORE = 62;
const BARS = [12, 7, 10, 9, 6, 8, 10];
const ACTIONS = [
  { id: "A2", dim: "AI architecture", title: "Write the operating model down" },
  { id: "D2", dim: "Data", title: "Make the CRM the single source of truth" },
  { id: "P2", dim: "Pipeline", title: "Stand up a real outbound motion" },
];

/* ------------------------------------------------------------------ */
/* Chapter scenes                                                      */
/* ------------------------------------------------------------------ */

function ChapterAnswer({ step }: { step: number }) {
  const banked = step >= 2;
  const eased = useEased(banked ? 15 : 12, 520);

  return (
    <div className="grid items-start gap-8 md:grid-cols-[1fr_260px]">
      <div>
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-purple-4">
          Area 1 of 20 &middot; {AREA.title} &middot; {FROM.host.name} hosting
        </p>
        <p className="mb-4 text-lg font-extrabold leading-snug text-white sm:text-xl">
          {AREA.question}
        </p>
        <div className="flex flex-col gap-2.5">
          {AREA.options.slice(1, 4).map((opt, idx) => {
            const i = idx + 1;
            const hovered = step === 1 && i === 2;
            const selected = step >= 2 && i === 2;
            return (
              <div
                key={opt}
                className={`flex items-start gap-3 rounded-xl border px-4 py-3 transition-all duration-300 ${
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
                  className={`flex-1 text-[13px] leading-relaxed ${
                    hovered || selected ? "text-white" : "text-purple-2"
                  }`}
                >
                  {opt}
                </span>
                <span className="mt-0.5 shrink-0 text-[11px] font-bold tabular-nums text-purple-4">
                  +{POINTS[i]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hidden md:block">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-purple-4">
          Running score
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black leading-none tabular-nums text-white">
            {Math.round(eased)}
          </span>
          <span className="text-xs font-bold text-purple-3">/ 100</span>
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full transition-[width] duration-500 ease-out"
            style={{ width: `${eased}%`, background: GRAD }}
          />
        </div>
        <ol className="mt-3 flex list-none gap-1 p-0">
          {DIMENSIONS.map((d, i) => (
            <li key={d.id} className="flex-1">
              <div
                className="h-1 rounded-full"
                style={{
                  background: i === 0 ? GRAD : "rgba(255,255,255,0.14)",
                }}
              />
            </li>
          ))}
        </ol>
        <p
          className={`mt-4 text-[12px] font-bold text-pink-3 transition-all duration-500 ${
            banked ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
          }`}
        >
          +{POINTS[2]} banked
        </p>
      </div>
    </div>
  );
}

function ChapterHandoff({ step }: { step: number }) {
  const arrived = step >= 4;
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 text-center">
      <p
        className={`text-[11px] font-bold uppercase tracking-[0.14em] text-purple-4 transition-opacity duration-400 ${
          step >= 3 ? "opacity-100" : "opacity-0"
        }`}
      >
        {FROM.label} banked{" "}
        <span className="tabular-nums text-pink-3">12/15</span>
      </p>
      <div
        className={`transition-all duration-500 ${
          arrived ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {TO.host.image && (
          <Image
            src={TO.host.image}
            alt={`${TO.host.name}, ${TO.host.role}`}
            width={400}
            height={700}
            className="mx-auto w-24 h-auto drop-shadow-lg"
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
        <p className="mt-1 text-2xl font-extrabold text-white">{TO.label}</p>
        <p className="mt-0.5 text-[13px] font-bold text-pink-3">
          {TO.host.name} &middot; {TO.host.role}
        </p>
      </div>
      <p
        className={`mx-auto max-w-[420px] text-[13px] leading-relaxed text-purple-2 transition-opacity duration-500 ${
          step >= 5 ? "opacity-100" : "opacity-0"
        }`}
      >
        {TO.host.line}
      </p>
    </div>
  );
}

function ChapterResult({ step }: { step: number }) {
  const filled = useEased(step >= 6 ? SCORE : 0, 900);
  const dialR = 52;
  const circ = 2 * Math.PI * dialR;

  return (
    <div>
      <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr] sm:gap-10">
        <div className="flex flex-col items-center">
          <div className="relative h-[136px] w-[136px]">
            <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
              <defs>
                <linearGradient id="shd-dial" x1="0" y1="0" x2="1" y2="1">
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
                stroke="url(#shd-dial)"
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
              step >= 7 ? "scale-100 opacity-100" : "scale-75 opacity-0"
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
                        step >= 8 ? `${(BARS[i] / d.maxPoints) * 100}%` : "0%",
                      transitionDelay: `${i * 90}ms`,
                      background: GRAD,
                    }}
                  />
                </span>
                <span
                  className={`w-9 shrink-0 text-right text-[11px] font-bold tabular-nums text-purple-3 transition-opacity duration-300 ${
                    step >= 8 ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  {BARS[i]}/{d.maxPoints}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <p
          className={`mb-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-pink-3 transition-opacity duration-400 ${
            step >= 9 ? "opacity-100" : "opacity-0"
          }`}
        >
          Three things to fix first
        </p>
        <div className="grid gap-2.5 sm:grid-cols-3">
          {ACTIONS.map((a, i) => (
            <div
              key={a.id}
              className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-3.5 transition-all duration-500 ${
                step >= 9
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
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* The player                                                          */
/* ------------------------------------------------------------------ */

function chapterOf(step: number): number {
  return CHAPTERS.findIndex((c) => step >= c.from && step <= c.to);
}

export function ScoreHeroDemo() {
  const reduced = usePrefersReducedMotion();
  const { ref, visible } = useOnScreen<HTMLDivElement>(0.25);
  const step = useTimeline(STEP_DURATIONS, visible, reduced);
  const chapter = chapterOf(step);

  const scenes = [
    <ChapterAnswer key="answer" step={step} />,
    <ChapterHandoff key="handoff" step={step} />,
    <ChapterResult key="result" step={step} />,
  ];

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[40px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 25% 15%, rgba(254,52,101,0.16), transparent 60%), radial-gradient(ellipse at 80% 95%, rgba(137,109,156,0.18), transparent 60%)",
        }}
      />
      <div className="relative overflow-hidden rounded-2xl border border-purple-15 bg-dark shadow-[var(--shadow-base)]">
        {/* Browser chrome */}
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
            Full demo &middot; live
          </span>
        </div>

        {/* Stage: chapters share one grid cell and crossfade */}
        <div
          className="relative p-6 sm:p-8"
          style={{
            backgroundImage:
              "radial-gradient(circle at 82% -10%, rgba(254,52,101,0.22), transparent 55%), radial-gradient(circle at 0% 110%, rgba(137,109,156,0.2), transparent 55%)",
          }}
        >
          <div className="grid items-center">
            {scenes.map((scene, i) => (
              <div
                key={i}
                aria-hidden={i !== chapter}
                className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                  i === chapter ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {scene}
              </div>
            ))}
          </div>
        </div>

        {/* Chaptered player bar */}
        <div className="flex items-center gap-3 border-t border-white/10 bg-white/[0.03] px-4 py-3 sm:px-6">
          {CHAPTERS.map((c, i) => {
            const done = reduced || i < chapter;
            const active = !reduced && i === chapter;
            return (
              <div key={c.label} className="flex-1">
                <p
                  className={`mb-1.5 text-[9px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                    done || active ? "text-white" : "text-purple-4"
                  }`}
                >
                  <span className="mr-1.5 text-pink-3">0{i + 1}</span>
                  {c.label}
                </p>
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: done || active ? "100%" : "0%",
                      background: GRAD,
                      transition: active
                        ? `width ${chapterDuration(c)}ms linear`
                        : "none",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
