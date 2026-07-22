"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ─── Agent cast ───────────────────────────────────────────────────────────────
const agents = [
  {
    id: "camille",
    name: "Camille",
    role: "Brand Voice",
    emoji: "✍️",
    color: "#FE3465",
    desc: "Writes copy that sounds exactly like Lihi, every brief, every post.",
  },
  {
    id: "rex",
    name: "Rex",
    role: "Growth Strategist",
    emoji: "🚀",
    color: "#FE5D84",
    desc: "Launches campaigns. Finds the angle. Hits Q targets.",
  },
  {
    id: "zara",
    name: "Zara",
    role: "Social Commander",
    emoji: "📱",
    color: "#CD2A51",
    desc: "Owns every channel. Posts, engages, grows daily.",
  },
  {
    id: "nova",
    name: "Nova",
    role: "Research Analyst",
    emoji: "🔍",
    color: "#896D9C",
    desc: "Competitive intel, market data, insights, in minutes.",
  },
  {
    id: "atlas",
    name: "Atlas",
    role: "Analytics Agent",
    emoji: "📊",
    color: "#6E577D",
    desc: "Tracks every metric. Surfaces what matters. Predicts what's next.",
  },
  {
    id: "sage",
    name: "Sage",
    role: "Content Engine",
    emoji: "📣",
    color: "#A18AB0",
    desc: "One piece of content. Eight channels. Zero extra effort.",
  },
  {
    id: "vega",
    name: "Vega",
    role: "Art Director",
    emoji: "🎨",
    color: "#52415E",
    desc: "Holds the visual system. Keeps every asset on-brand.",
  },
  {
    id: "lumen",
    name: "Lumen",
    role: "Video Director",
    emoji: "🎬",
    color: "#372C3E",
    desc: "Scripts, storyboards, and edits video content at speed.",
  },
];

// ─── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(lines: string[], speed = 45) {
  const [displayed, setDisplayed] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setLineIdx((i) => (i + 1) % lines.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timer);
  }, [charIdx, deleting, lineIdx, lines, speed]);

  return displayed;
}

// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, active: boolean) {
  // Initial value = target so SSR HTML shows real numbers (SEO-safe);
  // the 0 -> target animation only runs client-side once in view.
  const [val, setVal] = useState(target);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

// ─── Intersection observer hook ───────────────────────────────────────────────
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Live ops feed ────────────────────────────────────────────────────────────
type OpsStatus = "running" | "done" | "approved" | "review";

const opsFeed: {
  id: string;
  name: string;
  task: string;
  status: OpsStatus;
  supervisor?: boolean;
}[] = [
  { id: "camille", name: "Camille", task: "Drafting homepage copy, v2", status: "running" },
  { id: "nova", name: "Nova", task: "Scanning 4 competitor launches", status: "running" },
  { id: "lihi", name: "Lihi", task: "Approved Camille's draft", status: "approved", supervisor: true },
  { id: "rex", name: "Rex", task: "Building the Q3 campaign plan", status: "running" },
  { id: "atlas", name: "Atlas", task: "CAC dashboard refreshed", status: "done" },
  { id: "lihi", name: "Lihi", task: "Reviewing Rex's media plan", status: "review", supervisor: true },
  { id: "zara", name: "Zara", task: "Scheduling 12 LinkedIn posts", status: "running" },
  { id: "sage", name: "Sage", task: "Webinar turned into 6 assets", status: "done" },
  { id: "vega", name: "Vega", task: "Rendering carousel visuals", status: "running" },
  { id: "lihi", name: "Lihi", task: "Signed off on Zara's calendar", status: "approved", supervisor: true },
  { id: "lumen", name: "Lumen", task: "Cutting a 30s product video", status: "running" },
  { id: "lihi", name: "Lihi", task: "Reviewing Vega's visuals", status: "review", supervisor: true },
];

function useOpsFeed(intervalMs = 2600) {
  // `count` = how many feed events have happened; visible = last 4, newest first.
  const [count, setCount] = useState(4);
  useEffect(() => {
    const t = setInterval(() => setCount((c) => c + 1), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  return count;
}

function StatusIndicator({ status }: { status: OpsStatus }) {
  if (status === "running") {
    return (
      <span className="flex items-end gap-[3px] shrink-0" aria-label="working">
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className="w-1 h-1 rounded-full bg-brand"
            style={{ animation: `typing-bounce 1.2s ${d * 0.15}s ease-in-out infinite` }}
          />
        ))}
      </span>
    );
  }
  if (status === "approved") {
    return (
      <span className="text-[9px] font-bold tracking-wider uppercase text-brand shrink-0">
        &#10003; approved
      </span>
    );
  }
  if (status === "review") {
    return (
      <span className="text-[9px] font-bold tracking-wider uppercase text-purple-3 shrink-0">
        in review
      </span>
    );
  }
  return (
    <span className="text-[9px] font-bold tracking-wider uppercase text-purple-5 shrink-0">
      &#10003; done
    </span>
  );
}

// ─── Videos ───────────────────────────────────────────────────────────────────
const videos = [
  {
    id: "MRlDdVdAbkk",
    title: "How I Built a Revenue Machine",
  },
  {
    id: "ACnkGqyOlSo",
    title: "Calcalist Berlin",
  },
  {
    id: "LLyyYhw4Lec",
    title: "Shoptalk Vegas",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: 70, suffix: "M+", label: "raised at companies Lihi led", prefix: "$" },
  { value: 15, suffix: "+", label: "years in B2B SaaS", prefix: "" },
  { value: 3, suffix: "×", label: "revenue growth, repeatedly", prefix: "" },
  { value: 8, suffix: "", label: "AI agents in your corner", prefix: "" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const typewritten = useTypewriter([
    "First Native AI CMO in Israel.",
    "First Native AI CRO in Israel.",
    "Human in the Loop.",
    "8 agents. One supervisor.",
    "Brief. Run. Deliver.",
  ]);

  const statsSection = useInView(0.3);
  const agentsSection = useInView(0.1);
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const feedCount = useOpsFeed();

  const stat0 = useCounter(stats[0].value, 1600, statsSection.inView);
  const stat1 = useCounter(stats[1].value, 1200, statsSection.inView);
  const stat2 = useCounter(stats[2].value, 800, statsSection.inView);
  const stat3 = useCounter(stats[3].value, 1000, statsSection.inView);
  const statValues = [stat0, stat1, stat2, stat3];

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-purple-9 overflow-hidden">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 70% at 80% 50%, rgba(254,52,101,.18) 0%, transparent 70%)",
          }}
        />
        {/* Slow-moving grid lines */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(254,52,101,1) 1px, transparent 1px), linear-gradient(90deg, rgba(254,52,101,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-8 w-full py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 animate-fade-in">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 bg-pink-05/10 border border-brand/30 rounded-full px-4 py-1.5 mb-8">
                <span
                  className="w-2 h-2 rounded-full bg-brand"
                  style={{ animation: "ai-dot-pulse 1.5s ease-in-out infinite" }}
                />
                <span className="text-xs font-bold tracking-widest uppercase text-brand">
                  Israel&apos;s First
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tight leading-[1.0] text-white mb-6">
                Hey, I&apos;m{" "}
                <span className="gradient-text">Lihi</span>.
              </h1>

              {/* Typewriter line */}
              <div className="h-10 flex items-center mb-8">
                <span className="text-xl sm:text-2xl font-bold text-purple-3">
                  {typewritten}
                  <span
                    className="inline-block w-0.5 h-6 bg-brand ml-1 align-middle"
                    style={{ animation: "ai-cursor-blink 1s step-end infinite" }}
                  />
                </span>
              </div>

              <p className="text-lg text-purple-3 leading-relaxed mb-6 max-w-xl">
                15 years in B2B SaaS and investment banking. $70M+ raised.
                Revenue tripled, repeatedly. Now running the world&apos;s first
                fully supervised AI marketing operation, built on 8 specialist
                agents with Lihi as the human in the loop.
              </p>
              <p className="text-lg text-purple-3 leading-relaxed mb-10 max-w-xl">
                Not AI output handed to you raw. Not a prompt library.
                A supervised, end-to-end revenue machine. Run by a CMO who has
                done it before.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/revenue-diagnostic#book"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5"
                  style={{ boxShadow: "0 0 0 0 rgba(254,52,101,0)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(254,52,101,.35)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 0 0 rgba(254,52,101,0)")
                  }
                >
                  Book a Diagnostic <span>&#8594;</span>
                </Link>
                <Link
                  href="/agents"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-purple-7 px-6 py-3.5 text-[15px] font-semibold text-purple-3 transition-all hover:border-brand hover:text-brand hover:-translate-y-0.5"
                >
                  Meet the agents
                </Link>
              </div>
            </div>

            {/* Photo + live ops console */}
            <div className="lg:col-span-5 flex flex-col items-center relative">
              <div
                className="relative aspect-[4/5] w-full max-w-[340px] rounded-3xl overflow-hidden"
                style={{
                  animation: "ai-panel-breathe 5s ease-in-out infinite",
                  boxShadow: "0 0 60px rgba(254,52,101,.22)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto, Israel's first native AI CMO/CRO"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Supervisor tag */}
                <div className="absolute top-4 right-4 bg-purple-9/80 backdrop-blur-md rounded-xl px-3 py-2 border border-purple-7/40">
                  <p className="text-[9px] font-bold tracking-widest uppercase text-brand mb-0.5">
                    Human in the loop
                  </p>
                  <p className="text-xs font-bold text-white leading-snug">
                    Lihi Pinto &middot; Supervisor
                  </p>
                </div>
              </div>

              {/* Live ops console */}
              <div
                className="relative z-20 mt-6 w-full max-w-[340px] lg:absolute lg:mt-0 lg:w-[320px] lg:-left-20 lg:-bottom-8 bg-purple-9/90 backdrop-blur-md border border-purple-7/50 rounded-2xl overflow-hidden"
                style={{ boxShadow: "0 24px 60px rgba(27,22,31,.55)" }}
              >
                {/* Console header */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-purple-7/40 bg-purple-85/60">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-brand shrink-0"
                      style={{ animation: "ai-dot-pulse 1.5s ease-in-out infinite" }}
                    />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand">
                      Triple Ops
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-purple-5">
                    8 specialist agents
                  </span>
                </div>

                {/* Feed */}
                <div className="px-2 py-2 h-[196px] overflow-hidden flex flex-col gap-1">
                  {Array.from({ length: 4 }, (_, i) => {
                    const absIdx = feedCount - 1 - i;
                    const item = opsFeed[absIdx % opsFeed.length];
                    return (
                      <div
                        key={absIdx}
                        className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl ${
                          i === 0 ? "bg-purple-85/80 border border-brand/25" : ""
                        }`}
                        style={i === 0 ? { animation: "feed-slide-in 0.45s ease-out both" } : undefined}
                      >
                        <span
                          className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border"
                          style={{
                            borderColor: item.supervisor ? "#FE3465" : "rgba(137,109,156,.45)",
                          }}
                        >
                          <Image
                            src={item.supervisor ? "/images/lihi.png" : `/images/agents/${item.id}.png`}
                            alt={item.name}
                            fill
                            className="object-cover object-top"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[11px] font-bold text-white leading-tight">
                            {item.name}
                            {item.supervisor && (
                              <span className="ml-1.5 text-[8px] font-bold tracking-wider uppercase text-brand align-middle">
                                Supervisor
                              </span>
                            )}
                          </span>
                          <span className="block text-[11px] text-purple-3 leading-tight truncate">
                            {item.task}
                          </span>
                        </span>
                        <StatusIndicator status={item.status} />
                      </div>
                    );
                  })}
                </div>

                {/* Console footer: full team strip */}
                <div className="flex items-center justify-between px-4 py-2.5 border-t border-purple-7/40 bg-purple-85/60">
                  <div className="flex -space-x-1.5">
                    {agents.map((a) => (
                      <span
                        key={a.id}
                        className="relative w-6 h-6 rounded-full overflow-hidden border-2 bg-purple-8"
                        style={{ borderColor: "#1B161F" }}
                      >
                        <Image
                          src={`/images/agents/${a.id}.png`}
                          alt={a.name}
                          fill
                          className="object-cover object-top"
                        />
                      </span>
                    ))}
                  </div>
                  <span className="text-[9px] font-bold tracking-wider uppercase text-purple-5">
                    Supervised by Lihi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] font-bold tracking-widest uppercase text-purple-3">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-brand to-transparent" />
        </div>
      </section>

      {/* ── STATS TICKER ──────────────────────────────────────────────────── */}
      <div ref={statsSection.ref} className="bg-purple-85 py-16">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-black gradient-text leading-none mb-2">
                  {s.prefix}
                  {statValues[i]}
                  {s.suffix}
                </div>
                <div className="text-sm text-purple-3 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── POSITION STATEMENT ────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1000px] px-8">
          <p className="eyebrow mb-4 text-brand">The first of its kind</p>
          <h2 className="text-4xl lg:text-[52px] font-black tracking-tight leading-[1.05] text-purple-9 mb-8">
            Israel&apos;s first{" "}
            <span className="gradient-text">native AI CMO/CRO</span>.
            <br />Not a consultant who uses AI.
            <br />An operator built around it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div>
              <p className="text-lg text-purple-7 leading-relaxed mb-6">
                Most agencies added AI to existing workflows. Lihi built the
                workflow around AI from day one. Eight specialist agents,
                each running a vertical, all supervised by a CMO who has
                helped raise $70M+ and tripled SaaS revenue in the real world.
              </p>
              <p className="text-purple-7 leading-relaxed">
                The result: a marketing operation that runs at machine speed,
                with human judgment on every output that goes out the door.
                You never receive raw AI text. Every deliverable is reviewed,
                refined, and signed off.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Supervised end to end, by Lihi",
                "8 pre-configured Claude specialists",
                "Brief given by you. Delivered by agents. Reviewed by Lihi.",
                "15+ years in SaaS, not marketing theory",
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 py-3 border-b border-purple-15 last:border-b-0"
                >
                  <span className="w-2 h-2 rounded-full bg-brand shrink-0 mt-2" />
                  <span className="text-purple-7 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="mt-12 text-xl italic text-purple-9 py-6 px-8 bg-purple-05 border-l-4 border-brand rounded-2xl leading-snug">
            &ldquo;Building the marketing team I wish I had as an early-stage
            founder.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── AGENTS IN MOTION ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-purple-9 relative overflow-hidden">
        {/* Glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(254,52,101,.12) 0%, transparent 70%)",
          }}
        />
        <div ref={agentsSection.ref} className="relative z-10 mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-16">
            <p className="eyebrow text-brand mb-3">The team behind the work</p>
            <h2 className="text-4xl lg:text-[52px] font-black tracking-tight leading-[1.05] text-white">
              8 agents. One{" "}
              <span className="gradient-text">supervisor</span>.
              <br />Infinite output.
            </h2>
            <p className="text-purple-3 text-lg mt-4 max-w-xl mx-auto">
              Each agent owns a vertical. Lihi holds the brief, reviews every
              output, and connects the whole operation.
            </p>
          </div>

          {/* Agent grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
            {agents.map((agent, i) => (
              <Link
                key={agent.id}
                href={`/agents#${agent.id}`}
                aria-label={`${agent.name}, ${agent.role}. View full profile on the agents page.`}
                className="relative block bg-purple-85 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                style={{
                  opacity: agentsSection.inView ? 1 : 0,
                  transform: agentsSection.inView
                    ? "translateY(0)"
                    : "translateY(32px)",
                  transition: `opacity 0.5s ${i * 0.07}s ease-out, transform 0.5s ${i * 0.07}s ease-out`,
                  boxShadow:
                    activeAgent === agent.id
                      ? `0 0 32px ${agent.color}44`
                      : "none",
                }}
                onMouseEnter={() => setActiveAgent(agent.id)}
                onMouseLeave={() => setActiveAgent(null)}
              >
                {/* Gradient top bar */}
                <div className="h-1 w-full gradient-bar" />

                <div className="p-5">
                  {/* Agent image */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-purple-8">
                    <Image
                      src={`/images/agents/${agent.id}.png`}
                      alt={`${agent.name} - ${agent.role}`}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Live dot when hovered */}
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                      style={{
                        backgroundColor:
                          activeAgent === agent.id ? "#FE3465" : "#52415E",
                        animation:
                          activeAgent === agent.id
                            ? "ai-dot-pulse 1.2s ease-in-out infinite"
                            : "none",
                      }}
                    />
                    <span className="text-[10px] font-bold tracking-widest uppercase text-purple-5">
                      {agent.role}
                    </span>
                  </div>

                  <p className="text-sm font-black text-white mb-1">
                    {agent.name}
                  </p>
                  <p
                    className="text-xs text-purple-4 leading-relaxed transition-all duration-300 overflow-hidden"
                    style={{
                      maxHeight: activeAgent === agent.id ? "60px" : "0px",
                      opacity: activeAgent === agent.id ? 1 : 0,
                    }}
                  >
                    {agent.desc}
                  </p>
                  <p
                    className="text-[11px] font-bold text-brand mt-1.5 transition-all duration-300 overflow-hidden"
                    style={{
                      maxHeight: activeAgent === agent.id ? "20px" : "0px",
                      opacity: activeAgent === agent.id ? 1 : 0,
                    }}
                  >
                    View full profile &#8594;
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* How they work together */}
          <div className="bg-purple-85 rounded-3xl p-8 lg:p-12 border border-purple-7/30">
            <h3 className="text-2xl font-black text-white mb-8 text-center">
              How it works together
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  label: "Brief",
                  color: "#FE3465",
                  desc: "You give Lihi the goal. One sentence or a full deck. Either works.",
                },
                {
                  step: "02",
                  label: "Run",
                  color: "#896D9C",
                  desc: "The right agents activate. Rex plans. Camille writes. Atlas tracks. All in parallel.",
                },
                {
                  step: "03",
                  label: "Deliver",
                  color: "#B8A7C4",
                  desc: "Lihi reviews every output before it reaches you. Human judgment, always on.",
                },
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div
                    className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl font-black"
                    style={{
                      background: `${phase.color}22`,
                      color: phase.color,
                      border: `1px solid ${phase.color}44`,
                    }}
                  >
                    {phase.step}
                  </div>
                  <h4 className="text-xl font-black text-white mb-2">{phase.label}</h4>
                  <p className="text-sm text-purple-3 leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
            {/* Connector line */}
            <div className="hidden md:flex items-center justify-center gap-0 mt-8">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand to-purple-5" />
              <div
                className="w-3 h-3 rounded-full bg-brand mx-4"
                style={{ animation: "ai-dot-pulse 1.5s ease-in-out infinite" }}
              />
              <div className="flex-1 h-px bg-gradient-to-r from-purple-5 to-transparent" />
            </div>
            <p className="text-center text-xs font-bold tracking-widest uppercase text-purple-5 mt-4">
              Always supervised. Never raw AI output.
            </p>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5"
            >
              See all 8 agents <span>&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE VIDEOS ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="text-center mb-14">
            <p className="eyebrow text-brand mb-3">Watch Lihi in action</p>
            <h2 className="text-4xl lg:text-[48px] font-black tracking-tight leading-[1.05] text-purple-9">
              See how the{" "}
              <span className="gradient-text">machine runs</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div
                key={v.id}
                className="relative bg-white rounded-2xl overflow-hidden card-gradient-top"
                style={{ boxShadow: "var(--shadow-base)" }}
              >
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-bold text-purple-8 leading-snug">
                    {v.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-purple-9 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(254,52,101,.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[700px] px-8 text-center">
          <p className="eyebrow text-brand mb-4">Ready?</p>
          <h2 className="text-4xl lg:text-[52px] font-black tracking-tight leading-[1.05] text-white mb-4">
            Start with a{" "}
            <span className="gradient-text">diagnostic call</span>.
          </h2>
          <p className="text-purple-3 text-lg mb-10 max-w-lg mx-auto">
            One session. Lihi audits your current revenue operation and maps
            the exact agents that would move the needle.
          </p>
          <Link
            href="/revenue-diagnostic#book"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5"
            style={{ boxShadow: "0 0 40px rgba(254,52,101,.3)" }}
          >
            Book your diagnostic call <span>&#8594;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
