"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A looping, self-playing demo of the score instrument for the hero:
 * a simulated run banks points dimension by dimension, the meter fills,
 * the mini radar draws the shape, the tier lands, then it resets.
 * Pure show. The real instrument below starts at zero.
 */

const DIMS = [
  { short: "Strategy", max: 15, demo: 12 },
  { short: "Data", max: 15, demo: 7 },
  { short: "Content", max: 15, demo: 10 },
  { short: "Pipeline", max: 15, demo: 9 },
  { short: "AI arch.", max: 15, demo: 6 },
  { short: "Superv.", max: 10, demo: 8 },
  { short: "Revenue", max: 15, demo: 10 },
];
const DEMO_TOTAL = DIMS.reduce((s, d) => s + d.demo, 0); // 62
const STEP_MS = 850;
const HOLD_MS = 2600;

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

function MiniRadar({ fractions }: { fractions: number[] }) {
  const C = 74;
  const R = 58;
  const n = fractions.length;
  const pt = (i: number, f: number) => {
    const ang = (Math.PI * 2 * i) / n - Math.PI / 2;
    return `${C + Math.cos(ang) * R * f},${C + Math.sin(ang) * R * f}`;
  };
  const rings = [0.33, 0.66, 1];
  return (
    <svg viewBox="0 0 148 148" className="w-full h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="sd-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FE3465" />
          <stop offset="100%" stopColor="#896D9C" />
        </linearGradient>
      </defs>
      {rings.map((r) => (
        <polygon
          key={r}
          points={fractions.map((_, i) => pt(i, r)).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
      ))}
      {fractions.map((_, i) => (
        <line
          key={i}
          x1={C}
          y1={C}
          x2={pt(i, 1).split(",")[0]}
          y2={pt(i, 1).split(",")[1]}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
      ))}
      <polygon
        points={fractions.map((f, i) => pt(i, Math.max(f, 0.02))).join(" ")}
        fill="url(#sd-grad)"
        fillOpacity="0.35"
        stroke="url(#sd-grad)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {fractions.map((f, i) =>
        f > 0.03 ? (
          <circle
            key={`d${i}`}
            cx={pt(i, f).split(",")[0]}
            cy={pt(i, f).split(",")[1]}
            r="3"
            fill="#FE3465"
          />
        ) : null
      )}
    </svg>
  );
}

export function ScoreDemo() {
  const reduced = usePrefersReducedMotion();
  // step 0 = at rest, steps 1..7 = dimensions landed, 8 = hold with tier
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const ms = step >= DIMS.length + 1 ? HOLD_MS : step === 0 ? 700 : STEP_MS;
    const id = setTimeout(() => {
      setStep((s) => (s >= DIMS.length + 1 ? 0 : s + 1));
    }, ms);
    return () => clearTimeout(id);
  }, [step, reduced]);

  const landed = reduced ? DIMS.length : Math.min(step, DIMS.length);
  const score = DIMS.slice(0, landed).reduce((s, d) => s + d.demo, 0);
  const eased = useEased(score, 520);
  const showTier = reduced || step >= DIMS.length;
  const fractions = DIMS.map((d, i) => (i < landed ? d.demo / d.max : 0));
  const easedR0 = useEased(fractions[0]);
  const easedR1 = useEased(fractions[1]);
  const easedR2 = useEased(fractions[2]);
  const easedR3 = useEased(fractions[3]);
  const easedR4 = useEased(fractions[4]);
  const easedR5 = useEased(fractions[5]);
  const easedR6 = useEased(fractions[6]);
  const easedFractions = [easedR0, easedR1, easedR2, easedR3, easedR4, easedR5, easedR6];

  return (
    <div
      className="relative overflow-hidden rounded-[20px] bg-dark text-white shadow-[0_18px_48px_rgba(27,22,31,.18)] px-5 py-5"
      style={{
        backgroundImage:
          "radial-gradient(circle at 85% -20%, rgba(254,52,101,0.28), transparent 55%)",
      }}
      aria-label={`Demo of the live score: a sample run reaches ${DEMO_TOTAL} of 100, tier Operator.`}
    >
      <div className="flex items-center justify-between gap-3 mb-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-pink-3">
          How it works
        </p>
        <p className="text-[10px] font-semibold text-purple-3 uppercase tracking-wider">
          Demo run
        </p>
      </div>

      <div className="grid grid-cols-[1fr_120px] items-center gap-4">
        <div>
          <div className="flex items-baseline gap-1.5 mb-2.5">
            <span className="text-5xl font-black leading-none tabular-nums">
              {Math.round(eased)}
            </span>
            <span className="text-sm font-bold text-purple-3">/ 100</span>
            <span
              className={`ml-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white transition-opacity duration-300 ${
                showTier ? "opacity-100" : "opacity-0"
              }`}
            >
              Operator
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 mb-3">
            <div
              className="h-full rounded-full"
              style={{
                width: `${eased}%`,
                background: "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)",
              }}
            />
          </div>
          <ol className="flex list-none gap-1 p-0">
            {DIMS.map((d, i) => (
              <li key={d.short} className="flex-1">
                <div
                  className="h-1 rounded-full transition-colors duration-300"
                  style={{
                    background:
                      i < landed
                        ? "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)"
                        : "rgba(255,255,255,0.14)",
                  }}
                />
              </li>
            ))}
          </ol>
        </div>
        <MiniRadar fractions={easedFractions} />
      </div>

      <p className="mt-3 text-[11px] text-purple-4">
        A demo run. Yours starts at zero and builds as you answer.
      </p>
    </div>
  );
}
