"use client";

import { useState } from "react";
import {
  ChevronRight,
  TriangleAlert,
  Lightbulb,
  Quote as QuoteIcon,
} from "lucide-react";
import {
  kpis,
  pipeline,
  keyFindings,
  calls,
  objections,
  bestParityResponse,
  parityResponsesToRetire,
  pricingNotes,
  productGaps,
  competitors,
  claims,
  competitiveFootnote,
  winningPatterns,
  losingPatterns,
  coaching,
  teamActions,
  experiments,
  methodNotes,
  meta,
  type Call,
} from "@/lib/demo-intelligence-data";
import {
  ScoreBarChart,
  TalkRatioChart,
  ScoreRing,
  RubricBar,
} from "./charts";
import { Card, Quote, SectionHeading, TempPill } from "./ui";

const KPI_TONE: Record<string, string> = {
  flag: "#F08A8A",
  ok: "#4FD1A1",
  neutral: "var(--c-text-dim)",
};

// ============================ OVERVIEW ============================

export function OverviewPanel() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <SectionHeading
          eyebrow="Signal summary"
          title="The demo funnel at a glance"
          intro={`${meta.callsAnalyzed} of ${meta.callsTotal} demos analyzed: conversation mechanics, objection patterns and coaching priorities from full call transcripts.`}
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {kpis.map((k) => (
            <Card key={k.label} className="!p-5">
              <div className="text-3xl font-black tracking-tight" style={{ color: "var(--c-text)" }}>
                {k.value}
              </div>
              <div className="mt-1.5 text-[13px] font-semibold" style={{ color: "var(--c-text)" }}>
                {k.label}
              </div>
              <div className="mt-1.5 text-xs" style={{ color: KPI_TONE[k.tone] }}>
                {k.note}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Benchmarks" title="Scores & talk ratio" />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="mono-label mb-5" style={{ color: "var(--c-text-dim)" }}>
              Call scores: avg 58.8 / 100
            </h3>
            <ScoreBarChart
              data={calls.map((c) => ({ account: c.account, score: c.score, temp: c.temp }))}
            />
          </Card>
          <Card>
            <h3 className="mono-label mb-5" style={{ color: "var(--c-text-dim)" }}>
              Dark Titan talk share
            </h3>
            <TalkRatioChart
              data={calls.map((c) => ({ account: c.account, dtTalkShare: c.dtTalkShare }))}
              greatBenchmark={meta.greatCallBenchmark}
              maxAcceptable={meta.maxAcceptableTalkShare}
            />
          </Card>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Pipeline read" title="Where each deal stands" />
        <div className="flex flex-col gap-3">
          {pipeline.map((p) => (
            <Card key={p.account} className="!p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                <div className="flex items-center gap-3 lg:w-52 lg:shrink-0">
                  <span className="text-lg font-black" style={{ color: "var(--c-text)" }}>
                    {p.account}
                  </span>
                  <span className="text-sm font-bold" style={{ color: "var(--c-text-dim)" }}>
                    {p.score}
                  </span>
                  <TempPill temp={p.temp} label={p.tempLabel} />
                </div>
                <p className="flex-1 text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                  {p.why}
                </p>
                <p
                  className="flex-1 rounded-lg p-3 text-sm leading-relaxed"
                  style={{ color: "var(--c-text)", background: "rgba(61,225,255,0.06)", border: "1px solid rgba(61,225,255,0.15)" }}
                >
                  <span className="mono-label mr-1.5" style={{ color: "#3DE1FF", fontSize: 9 }}>
                    Next
                  </span>
                  {p.nextAction}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Priorities" title="The five findings that matter most" />
        <div className="flex flex-col gap-3">
          {keyFindings.map((f, i) => (
            <Card key={f.title} className="!p-5">
              <div className="flex gap-4">
                <span
                  className="mono-label flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-black text-white"
                  style={{ background: "var(--c-brand)" }}
                >
                  {i + 1}
                </span>
                <div>
                  <b className="text-[15px]" style={{ color: "var(--c-text)" }}>
                    {f.title}
                  </b>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                    {f.body}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================ CALLS ============================

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mono-label mb-2 mt-5 first:mt-0" style={{ color: "#3DE1FF", fontSize: 10 }}>
      {children}
    </h4>
  );
}

function CallRow({ call }: { call: Call }) {
  const [open, setOpen] = useState(false);
  return (
    <Card className="!p-0">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        <ScoreRing score={call.score} temp={call.temp} size={72} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="text-lg font-black" style={{ color: "var(--c-text)" }}>
              {call.account}
            </span>
            <TempPill temp={call.temp} label={call.tempLabel} />
          </div>
          <p className="mt-1 truncate text-sm" style={{ color: "var(--c-text-dim)" }}>
            {call.attendees}
          </p>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-xs" style={{ color: "var(--c-text-dim)" }}>
            <span>{call.duration}</span>
            <span>
              DT talk{" "}
              <b style={{ color: call.dtTalkShare <= 55 ? "#4FD1A1" : call.dtTalkShare < 65 ? "#E0B75C" : "#F08A8A" }}>
                ~{call.dtTalkShare}%
              </b>
            </span>
            <span>
              Disc. Qs <b style={{ color: "var(--c-text)" }}>{call.discoveryQuestions}</b>
            </span>
            <span>
              Next:{" "}
              <b style={{ color: call.hasDatedNextStep ? "#4FD1A1" : "#F08A8A" }}>{call.nextStep}</b>
            </span>
          </div>
        </div>
        <ChevronRight
          className="h-5 w-5 shrink-0 transition-transform"
          style={{ color: "var(--c-text-dim)", transform: open ? "rotate(90deg)" : "none" }}
        />
      </button>

      {open && (
        <div className="border-t px-5 pb-6 pt-4" style={{ borderColor: "var(--c-border)" }}>
          <H4>Summary</H4>
          <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
            {call.summary}
          </p>

          <H4>Moment of the call</H4>
          <Quote he={call.momentOfCall.he} en={call.momentOfCall.en} />

          <H4>Scorecard</H4>
          <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {call.scorecard.map((s) => (
              <RubricBar key={s.label} label={s.label} value={s.value} max={s.max} />
            ))}
          </div>

          <H4>Objections &amp; risks</H4>
          <ul className="flex flex-col gap-1.5">
            {call.risks.map((r) => (
              <li key={r} className="flex gap-2 text-sm" style={{ color: "var(--c-text-dim)" }}>
                <TriangleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "#E0B75C" }} />
                {r}
              </li>
            ))}
          </ul>

          {call.intelligence && (
            <>
              <H4>Intelligence</H4>
              <ul className="flex flex-col gap-1.5">
                {call.intelligence.map((r) => (
                  <li key={r} className="flex gap-2 text-sm" style={{ color: "var(--c-text-dim)" }}>
                    <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: "#3DE1FF" }} />
                    {r}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </Card>
  );
}

export function CallsPanel() {
  return (
    <div>
      <SectionHeading
        eyebrow="Call log"
        title="All calls"
        intro="Click any call to expand the full scorecard, verbatim moment, risks and intelligence."
      />
      <div className="flex flex-col gap-3">
        {calls.map((c) => (
          <CallRow key={c.id} call={c} />
        ))}
      </div>
    </div>
  );
}

// ============================ OBJECTIONS ============================

const HEAT_BG: Record<number, string> = {
  5: "rgba(254,52,101,0.85)",
  4: "rgba(254,52,101,0.6)",
  3: "rgba(254,52,101,0.38)",
  2: "rgba(254,52,101,0.22)",
  1: "rgba(254,52,101,0.12)",
};

const CELL_TONE: Record<string, string> = {
  good: "#4FD1A1",
  flag: "#F08A8A",
  neutral: "var(--c-text-dim)",
};

export function ObjectionsPanel() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <SectionHeading eyebrow="Pattern map" title="Objection heatmap" />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                {["Objection", "Freq", ...meta.accounts, "Handled?"].map((h) => (
                  <th
                    key={h}
                    className="mono-label whitespace-nowrap px-3 py-3"
                    style={{ color: "var(--c-text-dim)", fontSize: 9, borderBottom: "1px solid var(--c-border)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {objections.map((o) => (
                <tr key={o.objection}>
                  <td className="px-3 py-3 align-top" style={{ color: "var(--c-text)", borderBottom: "1px solid var(--c-border)", minWidth: 220 }}>
                    <b>{o.objection}</b>
                  </td>
                  <td className="px-3 py-3 text-center align-middle" style={{ borderBottom: "1px solid var(--c-border)" }}>
                    <span
                      className="inline-block rounded-md px-2 py-1 text-xs font-black text-white"
                      style={{ background: HEAT_BG[o.heat] }}
                    >
                      {o.frequency}
                    </span>
                  </td>
                  {o.cells.map((c) => (
                    <td
                      key={c.account}
                      className="px-3 py-3 align-top text-xs"
                      style={{ color: CELL_TONE[c.tone], borderBottom: "1px solid var(--c-border)", minWidth: 96 }}
                    >
                      {c.note}
                    </td>
                  ))}
                  <td className="px-3 py-3 text-center align-middle font-black" style={{ color: "var(--c-text)", borderBottom: "1px solid var(--c-border)" }}>
                    {o.handled}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Play to build" title="The one answer to build this week: DIY / parity" />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="mb-3 flex items-center gap-2 text-[15px] font-bold" style={{ color: "#4FD1A1" }}>
              <QuoteIcon className="h-4 w-4" /> Best response heard (mPrest, Kobi)
            </h3>
            <Quote he={bestParityResponse.he} en={bestParityResponse.en} />
            <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
              Also good: Saar&apos;s Exaware framing: &quot;דמיין Base44 לארגונים שצריכים לתמוך ב-codebase ענקיים&quot; + guardrails, cost governance, fleet consistency.
            </p>
          </Card>
          <Card>
            <h3 className="mb-3 text-[15px] font-bold" style={{ color: "#F08A8A" }}>
              Responses to retire
            </h3>
            <ul className="flex flex-col gap-2">
              {parityResponsesToRetire.map((r) => (
                <li key={r} className="text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                  {r}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Deep dive" title="Pricing objection: what the transcript data says" />
        <Card>
          <ul className="flex flex-col gap-2.5">
            {pricingNotes.map((n) => (
              <li key={n} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--c-brand)" }} />
                {n}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <SectionHeading eyebrow="Roadmap intel" title="Product gaps surfaced by prospects" />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                {["Request", "Calls", "Detail"].map((h) => (
                  <th key={h} className="mono-label px-3 py-3" style={{ color: "var(--c-text-dim)", fontSize: 9, borderBottom: "1px solid var(--c-border)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {productGaps.map((g) => (
                <tr key={g.request}>
                  <td className="px-3 py-3 align-top font-semibold" style={{ color: "var(--c-text)", borderBottom: "1px solid var(--c-border)", minWidth: 180 }}>
                    {g.request}
                  </td>
                  <td className="px-3 py-3 align-top text-xs" style={{ color: "#3DE1FF", borderBottom: "1px solid var(--c-border)", minWidth: 130 }}>
                    {g.calls}
                  </td>
                  <td className="px-3 py-3 align-top" style={{ color: "var(--c-text-dim)", borderBottom: "1px solid var(--c-border)" }}>
                    {g.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ============================ COMPETITIVE ============================

export function CompetitivePanel() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <SectionHeading eyebrow="Landscape" title="Competitor & alternative mentions" />
        <div className="flex flex-col gap-3">
          {competitors.map((c) => (
            <Card key={c.name} className="!p-5">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start">
                <div className="flex items-center gap-3 lg:w-64 lg:shrink-0">
                  <span className="text-[15px] font-bold" style={{ color: "var(--c-text)" }}>
                    {c.name}
                  </span>
                  <span
                    className="mono-label rounded-full px-2 py-0.5"
                    style={{ border: "1px solid var(--c-border)", color: "var(--c-text-dim)", fontSize: 9 }}
                  >
                    {c.mentions}× calls
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                  {c.context}
                </p>
                <p className="flex-1 text-sm leading-relaxed" style={{ color: "var(--c-text)" }}>
                  {c.assessment}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Consistency audit"
          title="What different prospects were told"
          intro={competitiveFootnote}
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                {["Claim", ...meta.accounts, "Verdict"].map((h) => (
                  <th key={h} className="mono-label whitespace-nowrap px-3 py-3" style={{ color: "var(--c-text-dim)", fontSize: 9, borderBottom: "1px solid var(--c-border)" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {claims.map((c) => (
                <tr key={c.claim}>
                  <td className="px-3 py-3 align-top font-semibold" style={{ color: "var(--c-text)", borderBottom: "1px solid var(--c-border)", minWidth: 160 }}>
                    {c.claim}
                  </td>
                  {c.values.map((v) => (
                    <td key={v.account} className="px-3 py-3 align-top text-xs" style={{ color: CELL_TONE[v.tone], borderBottom: "1px solid var(--c-border)", minWidth: 90 }}>
                      {v.value}
                    </td>
                  ))}
                  <td className="whitespace-nowrap px-3 py-3 align-top text-xs font-bold" style={{ color: CELL_TONE[c.verdictTone], borderBottom: "1px solid var(--c-border)" }}>
                    {c.verdict}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// ============================ COACHING ============================

export function CoachingPanel() {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <SectionHeading eyebrow="Pattern analysis" title="What the top calls did that the bottom call didn't" />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Card>
            <h3 className="mb-4 text-[15px] font-bold" style={{ color: "#4FD1A1" }}>
              Winning patterns (Xwinsys 63, Exaware 62, mPrest 61)
            </h3>
            <ul className="flex flex-col gap-2.5">
              {winningPatterns.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#4FD1A1" }} />
                  {p}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="mb-4 text-[15px] font-bold" style={{ color: "#F08A8A" }}>
              Losing patterns (Verbit 49 + recurring)
            </h3>
            <ul className="flex flex-col gap-2.5">
              {losingPatterns.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#F08A8A" }} />
                  {p}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Per-rep" title="Individual coaching" />
        <div className="flex flex-col gap-3">
          {coaching.map((c) => (
            <Card key={c.rep} className="!p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-[15px] font-black" style={{ color: "var(--c-text)" }}>
                  {c.rep}
                </span>
                <span className="mono-label" style={{ color: "var(--c-text-dim)", fontSize: 9 }}>
                  {c.role}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p className="mono-label mb-1.5" style={{ color: "#4FD1A1", fontSize: 9 }}>
                    Keep doing
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                    {c.keep}
                  </p>
                </div>
                <div>
                  <p className="mono-label mb-1.5" style={{ color: "#E0B75C", fontSize: 9 }}>
                    Change
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                    {c.change}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Action plan" title="Top 5 team actions, ranked by impact" />
        <div className="flex flex-col gap-3">
          {teamActions.map((a, i) => (
            <Card key={a.title} className="!p-5">
              <div className="flex gap-4">
                <span
                  className="mono-label flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-black text-white"
                  style={{ background: "var(--c-brand)" }}
                >
                  {i + 1}
                </span>
                <div>
                  <b className="text-[15px]" style={{ color: "var(--c-text)" }}>
                    {a.title}
                  </b>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                    {a.body}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading eyebrow="Next batch" title="Experiments for the next batch of demos" />
        <Card>
          <ul className="flex flex-col gap-3">
            {experiments.map((e) => (
              <li key={e} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#3DE1FF" }} />
                {e}
              </li>
            ))}
          </ul>
        </Card>
        <p className="mt-6 text-xs leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
          <b style={{ color: "var(--c-text)" }}>Method notes:</b> {methodNotes}
        </p>
      </section>
    </div>
  );
}
