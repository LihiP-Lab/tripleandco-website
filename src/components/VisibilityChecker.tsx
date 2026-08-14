"use client";

import { useState } from "react";
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
};

const STATUS_STYLES: Record<Check["status"], { chip: string; label: string }> = {
  pass: { chip: "bg-green-100 text-green-800", label: "Pass" },
  warn: { chip: "bg-amber-100 text-amber-800", label: "Partial" },
  fail: { chip: "bg-red-100 text-red-700", label: "Fail" },
};

function scoreColor(score: number): string {
  if (score >= 85) return "text-green-700";
  if (score >= 60) return "text-amber-600";
  return "text-brand";
}

export function VisibilityChecker() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<Report | null>(null);

  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function runCheck(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    setReport(null);
    setEmailState("idle");
    try {
      const res = await fetch("/api/visibility-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain }),
      });
      const data = await res.json();
      if (!res.ok) {
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
            {loading ? "Checking…" : "Run the Check →"}
          </button>
        </div>
        <p className="text-xs text-purple-6 mt-3">
          Free &middot; No signup &middot; About 10 seconds &middot; We fetch
          your public pages the same way AI crawlers do
        </p>
        {error && (
          <p className="mt-4 text-sm font-semibold text-brand" role="alert">
            {error}
          </p>
        )}
      </form>

      {loading && (
        <div
          className="mt-8 rounded-2xl border border-purple-15 bg-white p-8 text-center"
          aria-live="polite"
        >
          <p className="text-purple-7 text-sm">
            Fetching llms.txt, robots.txt, homepage schema, and Bing signals for{" "}
            <span className="font-bold text-purple-9">{domain}</span>
            &hellip;
          </p>
        </div>
      )}

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
              This checker reads your plumbing. The full audit reads the
              answers.
            </h3>
            <p className="text-sm text-purple-2 leading-relaxed mb-5">
              The free AI Visibility Audit shows what ChatGPT, Perplexity, and
              Google AI Overviews actually say about your brand, where a
              competitor is cited instead, and the fixes to close the gap.
              Run by Lihi and the agent team, in your inbox within two business
              days.
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
                    {emailState === "sending"
                      ? "Sending…"
                      : "Request It →"}
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
