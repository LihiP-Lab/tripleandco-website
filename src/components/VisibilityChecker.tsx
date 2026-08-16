"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type BotResult = {
  bot: string;
  label: string;
  engine: string;
  allowed: boolean;
};

type Check = {
  id: string;
  title: string;
  status: "pass" | "warn" | "fail";
  points: number;
  maxPoints: number;
  detail: string;
  fix?: string;
  bots?: BotResult[];
  schemaTypes?: string[];
};

type Report = {
  domain: string;
  checkedUrl: string;
  score: number;
  grade: string;
  checks: Check[];
  note?: string;
};

const STATUS_STYLES: Record<Check["status"], { chip: string; label: string }> = {
  pass: { chip: "bg-green-100 text-green-800", label: "Pass" },
  warn: { chip: "bg-amber-100 text-amber-800", label: "Partial" },
  fail: { chip: "bg-red-100 text-red-700", label: "Fail" },
};

const STAGES = [
  "Fetching llms.txt and llms-full.txt",
  "Reading robots.txt for 10 AI crawlers",
  "Parsing homepage JSON-LD schema",
  "Checking Bing indexability signals",
];

function scoreColor(score: number): string {
  if (score >= 85) return "text-green-700";
  if (score >= 60) return "text-amber-600";
  return "text-brand";
}

function novaQuip(report: Report): string {
  const d = report.domain;
  if (report.score >= 85)
    return `Clean plumbing. All four signals check out, so every engine I tested can read ${d}. Whether they actually cite you is the next question, and that part Lihi and I run by hand in the full audit.`;
  if (report.score >= 60)
    return `The engines can read ${d}, but you are leaving points on the table. Start with the checks below that did not pass. Most of these fixes take a developer under a day.`;
  if (report.score >= 35)
    return `Parts of ${d} are invisible to the engines I fetch for. Each gap below has a specific fix, and they are cheap compared to what a missed citation costs.`;
  return `${d} is close to invisible to AI engines right now. Every gap below has a specific fix, and the four of them together are usually under a day of work. Worth doing this week.`;
}

export function VisibilityChecker() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [blocked, setBlocked] = useState<{
    provider: string;
    httpStatus: number;
  } | null>(null);
  const [report, setReport] = useState<Report | null>(null);
  const [stage, setStage] = useState(0);
  const stageTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  useEffect(() => {
    if (loading) {
      setStage(0);
      stageTimer.current = setInterval(() => {
        setStage((s) => Math.min(s + 1, STAGES.length - 1));
      }, 1800);
    } else if (stageTimer.current) {
      clearInterval(stageTimer.current);
      stageTimer.current = null;
    }
    return () => {
      if (stageTimer.current) clearInterval(stageTimer.current);
    };
  }, [loading]);

  async function runCheck(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    setBlocked(null);
    setReport(null);
    setEmailState("idle");
    const startedAt = Date.now();
    try {
      const res = await fetch("/api/visibility-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
      });
      const data = await res.json();
      // Let Nova's narration finish its first stages before the reveal.
      const elapsed = Date.now() - startedAt;
      if (elapsed < 4000) {
        await new Promise((r) => setTimeout(r, 4000 - elapsed));
      }
      if (!res.ok) {
        if (data?.kind === "bot_blocked") {
          setBlocked({
            provider: String(data.provider || "Bot protection"),
            httpStatus: Number(data.httpStatus || 403),
          });
        }
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "The check failed. Try again in a minute."
        );
      }
      setReport(data as Report);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "The check failed. Try again in a minute."
      );
    } finally {
      setLoading(false);
    }
  }

  async function sendReport(e: React.FormEvent) {
    e.preventDefault();
    if (!report || emailState === "sending") return;
    setEmailState("sending");
    const failing = report.checks
      .filter((c) => c.status !== "pass")
      .map((c) => `${c.title}: ${c.points}/${c.maxPoints}`)
      .join("; ");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Visibility",
          lastName: "Checker",
          email,
          company: report.domain,
          message: [
            "AI Visibility Checker result (self-serve tool)",
            `Domain: ${report.domain}`,
            `Score: ${report.score}/100 (${report.grade})`,
            failing ? `Gaps: ${failing}` : "All checks passed.",
            "Requested: full AI Visibility Audit",
          ].join("\n"),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setEmailState("sent");
    } catch {
      setEmailState("error");
    }
  }

  return (
    <div>
      <style>{`
        @keyframes nova-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes nova-dots {
          0%, 20% { content: ""; }
          40% { content: "."; }
          60% { content: ".."; }
          80%, 100% { content: "..."; }
        }
        .nova-float { animation: nova-float 4s ease-in-out infinite; }
        .nova-dots::after {
          display: inline-block;
          width: 1.2em;
          text-align: left;
          content: "...";
          animation: nova-dots 1.4s steps(1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .nova-float { animation: none; }
          .nova-dots::after { animation: none; }
        }
      `}</style>

      {/* Nova + speech bubble */}
      <div className="flex items-end gap-4 sm:gap-6 mb-6">
        <div className="shrink-0 w-24 sm:w-32">
          <div className="nova-float">
            <Image
              src="/images/agents/nova.png"
              alt="Nova, Triple & Co.'s content research agent, holding her magnifying glass"
              width={800}
              height={1400}
              className="w-full h-auto drop-shadow-lg"
              priority
            />
          </div>
          <p className="text-[10px] text-purple-6 font-bold uppercase tracking-wider text-center mt-2 leading-tight">
            Nova
            <span className="block font-medium normal-case tracking-normal">
              Research Agent
            </span>
          </p>
        </div>

        <div
          className="relative flex-1 rounded-2xl bg-white shadow-[var(--shadow-base)] border border-purple-15 p-5 sm:p-6 mb-8"
          aria-live="polite"
        >
          {/* bubble tail */}
          <span
            aria-hidden="true"
            className="absolute left-[-9px] bottom-6 h-4 w-4 rotate-45 bg-white border-l border-b border-purple-15"
          />

          {!loading && !report && !error && (
            <p className="text-sm sm:text-[15px] text-purple-9 leading-relaxed">
              Hi, I&apos;m Nova. I run research and audits here. Hand me your
              domain and I&apos;ll fetch it exactly the way AI crawlers do,
              then score the four signals that decide whether ChatGPT, Claude,
              and Perplexity can read you. Takes me about 10 seconds, and Lihi
              checks my work.
            </p>
          )}

          {loading && (
            <ol className="space-y-1.5 list-none p-0 m-0">
              {STAGES.map((s, i) => (
                <li
                  key={s}
                  className={`text-sm leading-relaxed flex items-center gap-2 ${
                    i < stage
                      ? "text-purple-6"
                      : i === stage
                        ? "text-purple-9 font-semibold"
                        : "text-purple-4"
                  }`}
                >
                  <span className="w-4 shrink-0 text-brand font-bold">
                    {i < stage ? "✓" : i === stage ? "●" : ""}
                  </span>
                  <span className={i === stage ? "nova-dots" : ""}>{s}</span>
                </li>
              ))}
            </ol>
          )}

          {!loading && error && blocked && (
            <p className="text-sm sm:text-[15px] text-purple-9 leading-relaxed">
              {blocked.provider} blocked me before I could read{" "}
              {domain.replace(/^https?:\/\//, "").replace(/[/?#].*$/, "") ||
                "that site"}{" "}
              (status {blocked.httpStatus}). Here is the thing: protection
              that blocks me usually blocks AI crawlers too, so it may be
              quietly costing you citations. Worth checking your bot settings
              for GPTBot, ClaudeBot, and PerplexityBot. The full audit reads
              what the engines actually see:{" "}
              <Link
                href="/ai-visibility-audit"
                className="text-brand font-semibold hover:underline"
              >
                request it here
              </Link>
              .
            </p>
          )}

          {!loading && error && !blocked && (
            <p className="text-sm sm:text-[15px] text-purple-9 leading-relaxed">
              Hmm. {error} If the site is live and this keeps happening, the
              full audit covers it by hand:{" "}
              <Link
                href="/ai-visibility-audit"
                className="text-brand font-semibold hover:underline"
              >
                request it here
              </Link>
              .
            </p>
          )}

          {!loading && !error && report && (
            <p className="text-sm sm:text-[15px] text-purple-9 leading-relaxed">
              {report.note ? `Heads up: ${report.note} ` : ""}
              {novaQuip(report)}
            </p>
          )}
        </div>
      </div>

      {/* Input */}
      <form
        onSubmit={runCheck}
        className="rounded-2xl bg-white shadow-[var(--shadow-base)] border border-purple-15 p-6 sm:p-8"
      >
        <label
          htmlFor="checker-domain"
          className="block text-sm font-bold text-purple-9 mb-2"
        >
          Your website
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="checker-domain"
            type="text"
            inputMode="url"
            autoComplete="url"
            required
            placeholder="yourcompany.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="flex-1 rounded-lg border border-purple-15 bg-white px-4 py-3 text-purple-9 placeholder:text-purple-4 focus:outline-none focus:ring-2 focus:ring-brand/40"
          />
          <button
            type="submit"
            disabled={loading}
            className="whitespace-nowrap rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Nova is checking…" : "Let Nova Run the Check →"}
          </button>
        </div>
        <p className="text-xs text-purple-6 mt-3">
          Free &middot; No signup &middot; About 10 seconds &middot; Nova
          fetches your public pages the same way AI crawlers do
        </p>
      </form>

      {/* Report */}
      {report && (
        <div className="mt-8" aria-live="polite">
          <div className="rounded-2xl bg-white shadow-[var(--shadow-base)] border border-purple-15 overflow-hidden">
            {/* Score header */}
            <div className="p-6 sm:p-8 border-b border-purple-15 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="shrink-0">
                <p
                  className={`text-6xl font-black tracking-tight ${scoreColor(report.score)}`}
                >
                  {report.score}
                  <span className="text-2xl text-purple-4 font-bold">/100</span>
                </p>
              </div>
              <div>
                <p className="eyebrow mb-1">AI visibility score</p>
                <h3 className="text-2xl font-extrabold text-purple-9 mb-1">
                  {report.domain}: {report.grade}
                </h3>
                <p className="text-sm text-purple-7">
                  Four technical signals, checked live just now. This is the
                  plumbing of AI visibility, not what the engines actually say
                  about you.
                </p>
              </div>
            </div>

            {/* Checks */}
            <ul className="divide-y divide-purple-15 list-none p-0 m-0">
              {report.checks.map((c) => (
                <li key={c.id} className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="text-base font-extrabold text-purple-9">
                      {c.title}
                    </h4>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-sm font-bold text-purple-7">
                        {c.points}/{c.maxPoints}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${STATUS_STYLES[c.status].chip}`}
                      >
                        {STATUS_STYLES[c.status].label}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {c.detail}
                  </p>
                  {c.bots && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {c.bots.map((b) => (
                        <span
                          key={b.bot}
                          title={`${b.label} (${b.engine})`}
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                            b.allowed
                              ? "border-green-200 bg-green-50 text-green-800"
                              : "border-red-200 bg-red-50 text-red-700 line-through"
                          }`}
                        >
                          {b.bot}
                        </span>
                      ))}
                    </div>
                  )}
                  {c.fix && (
                    <p className="text-sm text-purple-9 mt-3">
                      <span className="font-bold text-brand">Fix: </span>
                      {c.fix}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl bg-purple-9 text-white p-6 sm:p-8">
            <h3 className="text-xl font-extrabold mb-2">
              Nova read your plumbing. The full audit reads the answers.
            </h3>
            <p className="text-sm text-purple-2 leading-relaxed mb-5">
              The free AI Visibility Audit shows what ChatGPT, Perplexity, and
              Google AI Overviews actually say about your brand, where a
              competitor is cited instead, and the fixes to close the gap.
              Nova probes the engines, Atlas scores the citations, and Lihi
              reviews every finding. In your inbox within two business days.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="/ai-visibility-audit"
                className="inline-block text-center rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Get the Full Audit &rarr;
              </Link>
              {emailState === "sent" ? (
                <p className="text-sm font-semibold text-green-300">
                  Done. Watch your inbox for the full audit.
                </p>
              ) : (
                <form
                  onSubmit={sendReport}
                  className="flex flex-1 flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    required
                    placeholder="Or drop your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Work email for the full audit"
                    className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-purple-3 focus:outline-none focus:ring-2 focus:ring-brand/60"
                  />
                  <button
                    type="submit"
                    disabled={emailState === "sending"}
                    className="rounded-lg border border-white/25 px-5 py-3 text-sm font-bold hover:bg-white/10 transition-colors disabled:opacity-60"
                  >
                    {emailState === "sending" ? "Sending…" : "Request It →"}
                  </button>
                </form>
              )}
            </div>
            {emailState === "error" && (
              <p className="text-sm text-red-300 mt-3">
                That did not go through. Use the button instead, or email
                lihi@tripleandco.com.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
