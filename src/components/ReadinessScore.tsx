"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  AREAS,
  DIMENSIONS,
  DIMENSION_BY_ID,
  POINTS,
  checkerScoreToPoints,
  decodeAnswers,
  dimensionScore,
  encodeAnswers,
  pointsToOptionIndex,
  scoreOf,
  tierFor,
  topThreeActions,
  type Answers,
  type DimensionId,
  type Host,
} from "@/lib/readiness";

const CAST = [
  "camille",
  "vega",
  "rex",
  "zara",
  "nova",
  "atlas",
  "sage",
  "lumen",
] as const;

const C3_TIMEOUT_MS = 8000;

/* ------------------------------------------------------------------ */
/* Small animation helper: lerp a vector toward its target with rAF.    */
/* Used by the radar so its spokes grow instead of snapping.           */
/* ------------------------------------------------------------------ */

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Quick out, settled, no bounce. Mirrors the brand motion curve. */
function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Ease a vector toward its target with requestAnimationFrame, so the radar
 * spokes grow instead of snapping. `target` must be referentially stable
 * (memoize it at the call site) or the animation restarts on every render.
 * Reduced motion collapses the duration to zero rather than skipping the loop,
 * so state is only ever set from inside the frame callback.
 */
function useEasedVector(target: number[], duration = 380): number[] {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const latestRef = useRef(target);

  useEffect(() => {
    const dur = prefersReducedMotion() ? 0 : duration;
    const from = fromRef.current;
    const started = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = dur === 0 ? 1 : Math.min(1, (now - started) / dur);
      const e = easeOut(t);
      const next = target.map((v, i) => (from[i] ?? 0) + (v - (from[i] ?? 0)) * e);
      latestRef.current = next;
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      fromRef.current = latestRef.current;
    };
  }, [target, duration]);

  return value;
}

/** Scalar form of the above, for the running total and the score dial. */
function useEasedNumber(target: number, duration = 380): number {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const latestRef = useRef(target);

  useEffect(() => {
    const dur = prefersReducedMotion() ? 0 : duration;
    const from = fromRef.current;
    const started = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = dur === 0 ? 1 : Math.min(1, (now - started) / dur);
      const next = from + (target - from) * easeOut(t);
      latestRef.current = next;
      setValue(next);
      if (t < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      fromRef.current = latestRef.current;
    };
  }, [target, duration]);

  return value;
}

/* ------------------------------------------------------------------ */
/* Radar                                                               */
/* ------------------------------------------------------------------ */

function Radar({ values }: { values: number[] }) {
  const eased = useEasedVector(values);
  // The viewBox is deliberately wider than the plot radius: the axis labels sit
  // at 1.26x and were clipping at the SUPERVISION and CONTENT spokes.
  const size = 300;
  const c = size / 2;
  const r = size / 2 - 62;
  const n = DIMENSIONS.length;

  const point = (i: number, v: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [c + Math.cos(angle) * r * v, c + Math.sin(angle) * r * v] as const;
  };

  const poly = eased
    .map((v, i) => point(i, Math.max(0.04, v)).join(","))
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full h-auto max-w-[300px] mx-auto"
      role="img"
      aria-label="Readiness shape across the seven dimensions. The same values are listed in the dimension breakdown."
    >
      <defs>
        <linearGradient id="rr-radar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FE3465" />
          <stop offset="100%" stopColor="#896D9C" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75, 1].map((ring) => (
        <polygon
          key={ring}
          points={DIMENSIONS.map((_, i) => point(i, ring).join(",")).join(" ")}
          fill="none"
          stroke="rgba(231,226,235,0.14)"
          strokeWidth={1}
        />
      ))}

      {DIMENSIONS.map((d, i) => {
        const [x, y] = point(i, 1);
        const [lx, ly] = point(i, 1.26);
        return (
          <g key={d.id}>
            <line
              x1={c}
              y1={c}
              x2={x}
              y2={y}
              stroke="rgba(231,226,235,0.14)"
              strokeWidth={1}
            />
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#A18AB0"
              fontSize={10}
              fontWeight={700}
              letterSpacing={0.6}
            >
              {d.short.toUpperCase()}
            </text>
          </g>
        );
      })}

      <polygon
        points={poly}
        fill="url(#rr-radar)"
        fillOpacity={0.32}
        stroke="url(#rr-radar)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      {eased.map((v, i) => {
        const [x, y] = point(i, Math.max(0.04, v));
        return <circle key={i} cx={x} cy={y} r={3} fill="#FE3465" />;
      })}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Score dial                                                          */
/* ------------------------------------------------------------------ */

function ScoreDial({ score, color }: { score: number; color: string }) {
  const eased = useEasedNumber(score, 900);
  const size = 200;
  const stroke = 14;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const shown = Math.round(eased);

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full -rotate-90">
        <defs>
          <linearGradient id="rr-dial" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FE3465" />
            <stop offset="100%" stopColor="#896D9C" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(231,226,235,0.12)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#rr-dial)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={circ - circ * (eased / 100)}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-[56px] font-black leading-none tabular-nums"
          style={{ color }}
        >
          {shown}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-purple-3 mt-1">
          out of 100
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Host (agent, Lihi, or the full cast)                                */
/* ------------------------------------------------------------------ */

/**
 * Small host portrait. Sized so the agent's LCD face stays legible: below
 * roughly 50px the expression disappears, which `triple-agents` rules out.
 * The full-cast host has no single render, so it gets a three-agent stack.
 */
function HostThumb({ host }: { host: Host }) {
  if (host.image === null) {
    return (
      <span className="flex shrink-0 -space-x-3">
        {(["rex", "nova", "atlas"] as const).map((a) => (
          <Image
            key={a}
            src={`/images/agents/${a}.png`}
            alt=""
            width={400}
            height={700}
            className="w-11 h-auto drop-shadow"
          />
        ))}
      </span>
    );
  }
  return (
    <Image
      src={host.image}
      alt=""
      width={400}
      height={700}
      className={`w-12 h-auto shrink-0 ${
        host.id === "lihi" ? "rounded-lg object-cover aspect-square" : ""
      }`}
    />
  );
}

function HostPortrait({ dimension }: { dimension: DimensionId }) {
  const host = DIMENSION_BY_ID[dimension].host;

  if (host.image === null) {
    return (
      <div className="flex -space-x-3">
        {CAST.map((a, i) => (
          <span
            key={a}
            className="rr-pop block"
            style={{ animationDelay: `${i * 45}ms`, zIndex: CAST.length - i }}
          >
            <Image
              src={`/images/agents/${a}.png`}
              alt=""
              width={400}
              height={700}
              className="w-7 sm:w-9 h-auto drop-shadow"
            />
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="rr-float w-14 sm:w-16 shrink-0">
      <Image
        key={host.id}
        src={host.image}
        alt={`${host.name}, ${host.role}`}
        width={800}
        height={1400}
        className={`w-full h-auto drop-shadow-lg rr-fade ${
          host.id === "lihi" ? "rounded-2xl object-cover aspect-[3/4]" : ""
        }`}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

export function ReadinessScore() {
  const searchParams = useSearchParams();

  // A shared result link (?r=<20 digits>&d=<domain>) opens straight on the
  // result. Read it in the state initializers rather than an effect, so the
  // first paint is already correct and there is no result-flash.
  const shared = useMemo(() => {
    const code = searchParams.get("r");
    const decoded = code ? decodeAnswers(code) : null;
    if (!decoded) return null;
    return { answers: decoded, domain: searchParams.get("d") ?? "" };
  }, [searchParams]);

  const [phase, setPhase] = useState<"quiz" | "result">(
    shared ? "result" : "quiz"
  );
  const [answers, setAnswers] = useState<Answers>(shared ? shared.answers : {});
  const [cursor, setCursor] = useState(0);

  // A shared link is someone else's result: the domain in `d` was never
  // verified in this session, so it must not render as "Measured live".
  const [isShared, setIsShared] = useState(Boolean(shared));
  const [domain, setDomain] = useState(shared ? shared.domain : "");
  const [c3State, setC3State] = useState<
    "idle" | "scanning" | "measured" | "self" | "error"
  >("idle");
  const [c3Checker, setC3Checker] = useState<number | null>(null);
  const [c3Error, setC3Error] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const [copied, setCopied] = useState(false);

  const consoleRef = useRef<HTMLDivElement | null>(null);

  const area = AREAS[cursor];
  const dimension = area ? area.dimension : "strategy";
  const host = DIMENSION_BY_ID[dimension].host;

  const answeredCount = Object.keys(answers).length;
  const runningScore = scoreOf(answers);
  const easedRunning = useEasedNumber(runningScore, 420);
  const finalScore = runningScore;
  const tier = tierFor(finalScore);

  const radarValues = useMemo(
    () => DIMENSIONS.map((d) => dimensionScore(answers, d.id).pct),
    [answers]
  );

  /* --- answering --------------------------------------------------- */

  const commit = useCallback(
    (areaId: string, optionIndex: number) => {
      setAnswers((prev) => ({ ...prev, [areaId]: optionIndex }));
      setCursor((c) => {
        const next = c + 1;
        if (next >= AREAS.length) {
          setPhase("result");
          return c;
        }
        return next;
      });
    },
    []
  );

  const goBack = useCallback(() => {
    setCursor((c) => Math.max(0, c - 1));
  }, []);

  // Keyboard: 1 to 4 answers, Backspace steps back. Fast to run, and it
  // makes the assessment feel like a tool rather than a form.
  useEffect(() => {
    if (phase !== "quiz" || !area) return;
    if (area.id === "C3" && c3State !== "self") return;
    function onKey(e: KeyboardEvent) {
      const t = e.target as HTMLElement | null;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      if (e.key >= "1" && e.key <= "4") {
        e.preventDefault();
        commit(area!.id, Number(e.key) - 1);
      } else if (e.key === "Backspace") {
        e.preventDefault();
        goBack();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, area, c3State, commit, goBack]);

  useEffect(() => {
    if (phase === "result" && consoleRef.current) {
      consoleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [phase]);

  // Completion beacon: the assessment is fully client-side, so this is the
  // only server-side signal that someone finished it. Shared links are
  // someone else's result and are not logged.
  const loggedRef = useRef(false);
  useEffect(() => {
    if (phase !== "result" || isShared || loggedRef.current) return;
    loggedRef.current = true;
    const payload = JSON.stringify({
      code: encodeAnswers(answers),
      domain,
      measured: c3State === "measured",
    });
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/readiness-log",
        new Blob([payload], { type: "application/json" })
      );
    } else {
      fetch("/api/readiness-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  }, [phase, isShared, answers, domain, c3State]);

  /* --- C3 live check ----------------------------------------------- */

  async function runC3(e: React.FormEvent) {
    e.preventDefault();
    if (c3State === "scanning") return;
    setC3State("scanning");
    setC3Error(null);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), C3_TIMEOUT_MS);
    const startedAt = Date.now();
    try {
      const res = await fetch("/api/visibility-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
        signal: controller.signal,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(String(data?.error ?? "check failed"));
      // Let the scan animation land before the reveal.
      const elapsed = Date.now() - startedAt;
      if (elapsed < 2200) await new Promise((r) => setTimeout(r, 2200 - elapsed));
      const checker = Number(data.score) || 0;
      setC3Checker(checker);
      setC3State("measured");
      commit("C3", pointsToOptionIndex(checkerScoreToPoints(checker)));
    } catch {
      setC3Error(
        "I could not reach that domain in time. Score it yourself below and I will note it as self-reported."
      );
      setC3State("self");
    } finally {
      clearTimeout(timer);
    }
  }

  /* --- results actions --------------------------------------------- */

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const code = encodeAnswers(answers);
    const d = c3State === "measured" && domain ? `&d=${encodeURIComponent(domain)}` : "";
    return `${window.location.origin}${window.location.pathname}?r=${code}${d}`;
  }, [answers, c3State, domain]);

  function shareOnLinkedIn() {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function copyLink() {
    navigator.clipboard.writeText(shareUrl).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      () => {}
    );
  }

  const actions = useMemo(() => topThreeActions(answers), [answers]);

  async function sendReport(e: React.FormEvent) {
    e.preventDefault();
    if (emailState === "sending") return;
    setEmailState("sending");
    try {
      const res = await fetch("/api/readiness-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          code: encodeAnswers(answers),
          domain,
          measured: c3State === "measured",
          checkerScore: c3Checker,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setEmailState("sent");
    } catch {
      setEmailState("error");
    }
  }

  function restart() {
    setIsShared(false);
    loggedRef.current = false;
    setAnswers({});
    setCursor(0);
    setPhase("quiz");
    setC3State("idle");
    setC3Checker(null);
    setDomain("");
    setEmailState("idle");
    window.history.replaceState(null, "", window.location.pathname);
  }

  /* ------------------------------------------------------------------ */

  return (
    <div ref={consoleRef} className="scroll-mt-24">
      <style>{`
        @keyframes rr-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes rr-fade  { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes rr-pop   { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
        @keyframes rr-sweep { 0% { transform: translateY(-8%); } 100% { transform: translateY(108%); } }
        @keyframes rr-pulse { 0%,100% { opacity: .35; } 50% { opacity: 1; } }
        @keyframes rr-bank  { 0% { transform: scale(1); } 35% { transform: scale(1.16); } 100% { transform: scale(1); } }
        @keyframes rr-glow  { 0% { box-shadow: 0 0 0 0 rgba(254,52,101,.55); } 100% { box-shadow: 0 0 24px 6px rgba(254,52,101,0); } }
        .rr-float { animation: rr-float 5s ease-in-out infinite; }
        .rr-fade  { animation: rr-fade var(--rr-dur, 240ms) cubic-bezier(0.22,0.61,0.36,1) both; }
        .rr-pop   { animation: rr-pop 260ms cubic-bezier(0.22,0.61,0.36,1) both; }
        .rr-sweep { animation: rr-sweep 1.5s cubic-bezier(0.45,0,0.55,1) infinite; }
        .rr-pulse { animation: rr-pulse 1.4s ease-in-out infinite; }
        .rr-bank  { animation: rr-bank 420ms cubic-bezier(0.22,0.61,0.36,1); }
        .rr-glow  { animation: rr-glow 700ms ease-out; }
        .rr-opt:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(254,52,101,.45); }
        @media (prefers-reduced-motion: reduce) {
          .rr-float, .rr-fade, .rr-pop, .rr-sweep, .rr-pulse, .rr-bank, .rr-glow { animation: none !important; }
        }
      `}</style>

      {/* ============ THE CONSOLE ============ */}
      <div
        className="relative overflow-hidden rounded-[28px] bg-dark text-white shadow-[0_30px_70px_rgba(27,22,31,.22)]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 82% -10%, rgba(254,52,101,0.30), transparent 55%), radial-gradient(circle at 0% 110%, rgba(137,109,156,0.30), transparent 55%)",
        }}
      >
        {/* ===== THE INSTRUMENT: score, momentum, shape ===== */}
        <div className="border-b border-white/10 px-5 sm:px-8 py-6 sm:py-7">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <div className="flex items-center justify-between gap-4 mb-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-pink-3">
                  {phase === "result"
                    ? "Your AI readiness score"
                    : "Your AI readiness score · live"}
                </p>
                <p className="text-[11px] font-semibold text-purple-3 tabular-nums">
                  {phase === "result"
                    ? `${AREAS.length} of ${AREAS.length} answered`
                    : `${answeredCount} of ${AREAS.length} answered`}
                </p>
              </div>
              <div className="flex items-baseline gap-3 mb-4">
                <span
                  key={runningScore}
                  className={`text-6xl sm:text-7xl lg:text-8xl font-black leading-none tabular-nums ${
                    runningScore > 0 ? "rr-bank" : ""
                  }`}
                >
                  {Math.round(easedRunning)}
                </span>
                <span className="text-xl font-bold text-purple-3">/ 100</span>
                {answeredCount >= AREAS.length && (
                  <span className="ml-1 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {tier.name}
                  </span>
                )}
              </div>
              <div
                key={`m-${runningScore}`}
                className={`h-3 w-full overflow-hidden rounded-full bg-white/10 ${
                  runningScore > 0 ? "rr-glow" : ""
                }`}
              >
                <div
                  className="h-full rounded-full transition-[width] duration-500 ease-out"
                  style={{
                    width: `${easedRunning}%`,
                    background: "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)",
                  }}
                />
              </div>
            </div>

            {/* the shape, drawing itself as answers land */}
            <div className="hidden sm:block sm:w-[190px] lg:w-[220px]">
              <Radar values={radarValues} />
              <p className="mt-1 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-purple-4">
                Your shape so far
              </p>
            </div>
          </div>

          {/* dimension pips */}
          <ol className="mt-4 flex list-none flex-wrap gap-1.5 p-0">
            {DIMENSIONS.map((d) => {
              const s = dimensionScore(answers, d.id);
              const areasInD = AREAS.filter((a) => a.dimension === d.id);
              const done = areasInD.every((a) => answers[a.id] != null);
              const active = phase === "quiz" && d.id === dimension;
              return (
                <li key={d.id} className="flex-1 min-w-[38px]">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active ? "ring-1 ring-pink-3/70" : ""
                    }`}
                    style={{
                      background: done
                        ? "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)"
                        : "rgba(255,255,255,0.14)",
                    }}
                    title={`${d.label}: ${s.points}/${s.max}`}
                  />
                  <span className="mt-1.5 block truncate text-[9px] font-bold uppercase tracking-wider text-purple-4">
                    {d.short}
                  </span>
                  <span className="block text-[10px] font-bold tabular-nums text-purple-3">
                    {s.points}
                    <span className="font-medium text-purple-4">/{s.max}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ---------- INTRO ---------- */}
        {/* ---------- QUIZ ---------- */}
        {phase === "quiz" && area && (
          <div>
            <div className="px-5 sm:px-8 py-7 sm:py-9">
              {/* host row */}
              <div className="mb-6 flex items-start gap-4">
                <HostPortrait dimension={dimension} />
                <div className="flex-1 pt-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-pink-3">
                    {DIMENSION_BY_ID[dimension].label}
                  </p>
                  <p className="text-sm font-bold text-white">
                    {host.name}
                    <span className="ml-2 font-medium text-purple-4">
                      {host.role}
                    </span>
                  </p>
                  <p
                    key={dimension}
                    className="rr-fade mt-2 text-[13px] leading-relaxed text-purple-2"
                  >
                    {host.line}
                  </p>
                </div>
              </div>

              {/* C3 live check */}
              {area.id === "C3" && c3State !== "self" ? (
                <div key="c3" className="rr-fade">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-purple-4 mb-2">
                    Area 9 of 20 · Measured, not asked
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold leading-snug mb-2">
                    {area.question}
                  </h3>
                  <p className="text-sm text-purple-2 leading-relaxed mb-5">
                    This is the one area we measure instead of asking. Give
                    Nova your domain and she fetches it the way AI crawlers do,
                    then scores what comes back. Skip it and you can self-assess
                    instead.
                  </p>

                  <form onSubmit={runC3} className="flex flex-col sm:flex-row gap-3">
                    <label htmlFor="rr-domain" className="sr-only">
                      Your domain
                    </label>
                    <input
                      id="rr-domain"
                      type="text"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      placeholder="yourcompany.com"
                      autoComplete="url"
                      disabled={c3State === "scanning"}
                      className="flex-1 rounded-[10px] border border-white/30 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-purple-4 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/50 disabled:opacity-60"
                    />
                    <button
                      type="submit"
                      disabled={c3State === "scanning" || domain.trim().length < 3}
                      className="rounded-[10px] bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark disabled:opacity-50 disabled:hover:bg-brand focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/50"
                    >
                      {c3State === "scanning" ? "Scanning" : "Scan My Site →"}
                    </button>
                  </form>

                  {c3State === "scanning" && (
                    <div className="mt-5 overflow-hidden rounded-[14px] border border-white/10 bg-white/5">
                      <div className="relative h-24 overflow-hidden">
                        <div
                          className="rr-sweep absolute inset-x-0 h-10"
                          style={{
                            background:
                              "linear-gradient(180deg, transparent, rgba(254,52,101,.35), transparent)",
                          }}
                        />
                        <div className="relative flex h-full items-center gap-3 px-5">
                          <span className="rr-pulse text-brand text-lg">&#9679;</span>
                          <p className="font-mono text-[12px] leading-relaxed text-purple-2">
                            nova.scan {domain || "your-domain"}
                            <br />
                            <span className="text-purple-4">
                              llms.txt &middot; robots.txt for 10 AI crawlers
                              &middot; JSON-LD &middot; Bing indexability
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {c3Error && (
                    <p className="mt-4 text-sm text-pink-3">{c3Error}</p>
                  )}

                  <button
                    type="button"
                    onClick={() => setC3State("self")}
                    className="mt-4 text-sm font-semibold text-pink-3 underline underline-offset-4 hover:text-white"
                  >
                    Skip the scan and self-assess
                  </button>
                </div>
              ) : (
                <div key={area.id} className="rr-fade">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-purple-4 mb-2">
                    Area {cursor + 1} of {AREAS.length} &middot; {area.title}
                    {area.id === "C3" && c3State === "self" && " · self-reported"}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-extrabold leading-snug mb-5">
                    {area.question}
                  </h3>

                  <div className="flex flex-col gap-2.5">
                    {area.options.map((opt, i) => {
                      const selected = answers[area.id] === i;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => commit(area.id, i)}
                          className={`rr-opt group flex w-full items-start gap-3 rounded-[14px] border px-4 py-3.5 text-left transition-all duration-200 ${
                            selected
                              ? "border-brand bg-white/10"
                              : "border-white/20 bg-white/[0.03] hover:border-pink-3 hover:bg-white/[0.07] hover:-translate-y-0.5"
                          }`}
                        >
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/25 text-[11px] font-bold text-purple-3 group-hover:border-pink-3 group-hover:text-white">
                            {i + 1}
                          </span>
                          <span className="flex-1 text-[14px] leading-relaxed text-purple-2 group-hover:text-white">
                            {opt}
                          </span>
                          <span className="mt-0.5 shrink-0 text-[11px] font-bold tabular-nums text-purple-4">
                            +{POINTS[i]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={cursor === 0}
                  className="text-sm font-semibold text-purple-3 transition-colors hover:text-white disabled:opacity-40 disabled:hover:text-purple-3"
                >
                  &larr; Back
                </button>
                {!(area.id === "C3" && c3State !== "self") && (
                  <p className="text-xs text-purple-4">Press 1 to 4 to answer</p>
                )}
              </div>
            </div>

          </div>
        )}

        {/* ---------- RESULT ---------- */}
        {phase === "result" && (
          <div className="px-5 sm:px-8 py-8 sm:py-10">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
              <div className="flex flex-col items-center">
                <ScoreDial score={finalScore} color="#FFFFFF" />
                <p className="mt-4 text-center text-2xl font-black tracking-tight">
                  <span className="gradient-text">{tier.name}</span>
                </p>
              </div>

              <div className="flex-1">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-pink-3 mb-3">
                  Your AI Revenue Readiness Score
                </p>
                <p className="text-[15px] leading-relaxed text-purple-2 mb-6">
                  {tier.line}
                </p>

                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-purple-4">
                  Where the gaps are
                </p>
                <ul className="list-none space-y-2.5 p-0">
                  {DIMENSIONS.map((d) => {
                    const s = dimensionScore(answers, d.id);
                    return (
                      <li key={d.id} className="flex items-center gap-3">
                        <span className="w-[104px] shrink-0 text-[12px] font-semibold text-purple-2">
                          {d.label}
                        </span>
                        <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                          <span
                            className="block h-full rounded-full transition-[width] duration-700 ease-out"
                            style={{
                              width: `${Math.round(s.pct * 100)}%`,
                              background:
                                "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)",
                            }}
                          />
                        </span>
                        <span className="w-11 shrink-0 text-right text-[12px] font-bold tabular-nums text-purple-3">
                          {s.points}/{s.max}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-4 text-[12px] text-purple-4">
                  AI search visibility:{" "}
                  {isShared ? (
                    <span className="font-semibold text-purple-3">
                      From a shared link, not verified in this session
                    </span>
                  ) : c3State === "measured" ? (
                    <span className="font-semibold text-pink-3">
                      Measured live{c3Checker != null ? ` · checker score ${c3Checker}/100` : ""}
                    </span>
                  ) : (
                    <span className="font-semibold text-purple-3">Self-reported</span>
                  )}
                </p>
              </div>
            </div>

            {/* three actions */}
            <div className="mt-10">
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-pink-3">
                Three things to fix first
              </p>
              <p className="mb-5 text-[13px] text-purple-4">
                Your three lowest-scoring areas, ordered by what moves revenue
                soonest.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {actions.map((a) => {
                  const h = DIMENSION_BY_ID[a.dimension].host;
                  return (
                    <div
                      key={a.id}
                      className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-[4px]"
                        style={{
                          background:
                            "linear-gradient(90deg,#FE3465 0%,#896D9C 100%)",
                        }}
                      />
                      <div className="mb-3 flex items-center gap-2.5">
                        <HostThumb host={h} />
                        <span className="flex-1 text-[10px] font-bold uppercase tracking-wider text-purple-4">
                          {a.id} &middot; {DIMENSION_BY_ID[a.dimension].label}
                          <span className="mt-0.5 block normal-case tracking-normal text-purple-3">
                            Flagged by{" "}
                            {h.id === "cast" ? "the whole team" : h.name}
                          </span>
                        </span>
                      </div>
                      <h4 className="mb-2 text-[15px] font-extrabold leading-snug text-white">
                        {a.action.title}
                      </h4>
                      <p className="mb-3 text-[13px] leading-relaxed text-purple-2">
                        {a.action.claim}
                      </p>
                      <p className="mb-3 text-[13px] leading-relaxed text-purple-3">
                        <span className="font-bold text-pink-3">The lever: </span>
                        {a.action.lever}
                      </p>
                      <p className="text-[13px] leading-relaxed text-purple-3">
                        <span className="font-bold text-pink-3">First step: </span>
                        {a.action.step}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-6">
                <h4 className="mb-2 text-[17px] font-extrabold">
                  Walk your score through with Lihi.
                </h4>
                <p className="mb-5 text-[13px] leading-relaxed text-purple-2">
                  Thirty minutes, no deck. Bring this score and we will work
                  out which of the three fixes actually moves your number first,
                  and what it takes to run it.
                </p>
                <Link
                  href="/revenue-diagnostic"
                  className="inline-flex items-center rounded-[10px] bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5"
                >
                  Book a 30-Minute Revenue Diagnostic &rarr;
                </Link>
              </div>

              <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-6">
                <h4 className="mb-2 text-[17px] font-extrabold">
                  Get the full breakdown by email.
                </h4>
                <p className="mb-5 text-[13px] leading-relaxed text-purple-2">
                  All 20 areas with your answer on each, the seven dimension
                  scores, and the action plan. In your inbox in two minutes.
                </p>
                {emailState === "sent" ? (
                  <p className="text-sm font-semibold text-pink-3">
                    On its way. Check your inbox in a couple of minutes.
                  </p>
                ) : (
                  <form onSubmit={sendReport} className="flex flex-col sm:flex-row gap-3">
                    <label htmlFor="rr-email" className="sr-only">
                      Work email
                    </label>
                    <input
                      id="rr-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      autoComplete="email"
                      className="flex-1 rounded-[10px] border border-white/30 bg-white/5 px-4 py-3 text-[15px] text-white placeholder:text-purple-4 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/50"
                    />
                    <button
                      type="submit"
                      disabled={emailState === "sending"}
                      className="rounded-[10px] border border-white/30 bg-white/10 px-5 py-3 text-[15px] font-semibold text-white transition-all hover:bg-white/20 disabled:opacity-50"
                    >
                      {emailState === "sending" ? "Sending" : "Email It To Me →"}
                    </button>
                  </form>
                )}
                {emailState === "error" && (
                  <p className="mt-3 text-sm text-pink-3">
                    That did not send. Try again, or book the diagnostic instead.
                  </p>
                )}
              </div>
            </div>

            {/* share, hosted by Zara */}
            <div className="mt-6 flex flex-col items-start gap-4 rounded-[18px] border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center">
              <Image
                src="/images/agents/zara.png"
                alt="Zara, Triple &amp; Co.'s social media agent"
                width={400}
                height={700}
                className="rr-float w-12 h-auto shrink-0 drop-shadow"
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-white">
                  Zara here. Want to put this in front of your team?
                </p>
                <p className="text-[13px] text-purple-3">
                  The link carries your answers, so anyone who opens it lands on
                  this exact result.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <button
                  type="button"
                  onClick={shareOnLinkedIn}
                  className="rounded-[10px] bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark"
                >
                  Share on LinkedIn →
                </button>
                <button
                  type="button"
                  onClick={copyLink}
                  className="rounded-[10px] border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  {copied ? "Link copied" : "Copy Link"}
                </button>
                <button
                  type="button"
                  onClick={restart}
                  className="rounded-[10px] px-4 py-2.5 text-sm font-semibold text-purple-3 transition-colors hover:text-white"
                >
                  Start over
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
