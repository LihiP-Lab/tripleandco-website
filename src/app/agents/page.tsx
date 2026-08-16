import type { Metadata } from "next";
import Link from "next/link";
import { UserRound, Users, Stethoscope, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { AgentFilterBar } from "@/components/AgentFilterBar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AgentConstellation } from "@/components/console/AgentConstellation";
import { MagneticButton } from "@/components/console/MagneticButton";
import { TelemetryTicker } from "@/components/console/TelemetryTicker";
import { StickyDiagnosticBar } from "@/components/console/StickyDiagnosticBar";

export const metadata: Metadata = {
  title: "Meet the 8 AI Marketing Agents for B2B",
  description:
    "8 purpose-built AI marketing specialists, brand voice, content, social, video, analytics & performance. Supervised by Lihi Pinto. Real deliverables.",
  alternates: { canonical: "/agents" },
  openGraph: {
    title: "Meet Your AI Marketing Team, Triple & Co.",
    description:
      "Triple & Co.'s 8 AI marketing agents handle the work, brand voice to video direction, while Lihi Pinto supervises strategy. Built for B2B companies ready to scale.",
    url: "https://www.tripleandco.com/agents",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "AI Marketing Agents for B2B, Triple & Co.",
    description:
      "8 purpose-built AI marketing specialists, brand voice, content, social, video, analytics and more. Supervised by Lihi Pinto. Real deliverables, weekly cadence.",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Brief",
    description:
      "A 30-minute kickoff. You share the goal, the context, the assets you already have.",
  },
  {
    number: "02",
    title: "Run",
    description:
      "Your agent runs on Claude. Lihi supervises strategy and quality end to end, you're never handed raw AI output.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Finished, on-brand work lands in your inbox on a weekly cadence. Everything is yours to keep.",
  },
];

const doors = [
  {
    icon: UserRound,
    title: "Hire one specialist",
    description:
      "Pick a single agent for one focused function, brand voice, analytics, video.",
    href: "#roster",
    cta: "Browse the roster",
    featured: false,
  },
  {
    icon: Stethoscope,
    title: "Start with a diagnostic",
    description:
      "Fixed-scope, fixed-price. The low-risk way to see the team in action.",
    href: "/revenue-diagnostic#book",
    cta: "Book a diagnostic",
    featured: true,
  },
  {
    icon: Users,
    title: "Deploy the full team",
    description:
      "All 8 agents on a monthly retainer, supervised end-to-end by Lihi.",
    href: "/contact?offer=team",
    cta: "Talk through a team",
    featured: false,
  },
];

export default function AgentsPage() {
  return (
    <div className="console">
      {/* ===== Hero ===== */}
      <section className="console-canvas pt-16 pb-14 lg:pt-24 lg:pb-20">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Marketing Agents" }]}
          />

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Copy */}
            <div className="animate-fade-in">
              <div
                className="mono-label mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                style={{
                  border: "1px solid var(--c-border)",
                  color: "var(--c-text-dim)",
                }}
              >
                <span className="signal-dot" aria-hidden="true" /> Deployment
                console · 8 specialist agents
              </div>

              <h1
                className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]"
                style={{ color: "var(--c-text)" }}
              >
                Deploy your AI marketing team in{" "}
                <span className="gradient-text">days, not quarters.</span>
              </h1>

              <p
                className="mt-6 max-w-xl text-lg leading-relaxed"
                style={{ color: "#B5B5C2" }}
              >
                Eight purpose-built Claude specialists for every marketing
                function, each one supervised by a fractional CMO who helped raise
                $70M and 3&times;&apos;d SaaS revenue. Hire one, deploy a team,
                or start with a fixed-scope diagnostic.
              </p>

              {/* Dual CTA */}
              <div className="mt-8 flex flex-wrap gap-4">
                <MagneticButton
                  href="#roster"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
                >
                  Deploy a team &rarr;
                </MagneticButton>
                <Link
                  href="/revenue-diagnostic#book"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-all"
                  style={{
                    border: "1px solid var(--c-border-strong)",
                    color: "var(--c-text)",
                  }}
                >
                  Start with a diagnostic &rarr;
                </Link>
              </div>

              {/* Trust strip */}
              <div
                className="mono-label mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
                style={{ color: "var(--c-text-dim)", fontSize: 10 }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck
                    className="h-3.5 w-3.5"
                    style={{ color: "#3DE1FF" }}
                  />
                  Every output human-reviewed
                </span>
                <span>$70M+ raised</span>
                <span>15+ yrs B2B SaaS</span>
                <span>Zero onboarding</span>
              </div>
            </div>

            {/* Constellation */}
            <div className="animate-fade-in-delay-1">
              <AgentConstellation />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Telemetry rail ===== */}
      <TelemetryTicker />

      {/* ===== Three doors ===== */}
      <section className="console-canvas py-16 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="mono-label text-center" style={{ color: "#3DE1FF" }}>
              Three ways in
            </p>
            <h2
              className="mt-3 text-center text-3xl font-black tracking-tight lg:text-[38px]"
              style={{ color: "var(--c-text)" }}
            >
              Take command your way
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {doors.map((door, i) => {
              const Icon = door.icon;
              return (
                <ScrollReveal key={door.title} delay={0.1 + i * 0.1}>
                  <Link
                    href={door.href}
                    className="glass-card group relative flex h-full flex-col rounded-2xl p-7"
                    style={
                      door.featured
                        ? { borderColor: "rgba(254,52,101,0.4)" }
                        : undefined
                    }
                  >
                    <span className="card-spotlight" aria-hidden="true" />
                    {door.featured && (
                      <span
                        className="mono-label absolute right-5 top-5 rounded px-1.5 py-0.5 text-white"
                        style={{ background: "var(--c-brand)", fontSize: 9 }}
                      >
                        Recommended
                      </span>
                    )}
                    <div
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        background: door.featured
                          ? "rgba(254,52,101,0.12)"
                          : "rgba(61,225,255,0.08)",
                        border: door.featured
                          ? "1px solid rgba(254,52,101,0.3)"
                          : "1px solid rgba(61,225,255,0.2)",
                        color: door.featured ? "#FE3465" : "#3DE1FF",
                      }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <h3
                      className="text-lg font-bold"
                      style={{ color: "var(--c-text)" }}
                    >
                      {door.title}
                    </h3>
                    <p
                      className="mt-2 flex-1 text-sm leading-relaxed"
                      style={{ color: "var(--c-text-dim)" }}
                    >
                      {door.description}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform group-hover:translate-x-1"
                      style={{ color: door.featured ? "#FE3465" : "#3DE1FF" }}
                    >
                      {door.cta} &rarr;
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Field manual / guide band ===== */}
      <section className="console-canvas pb-4">
        <div className="mx-auto max-w-[1200px] px-8">
          <div
            className="flex flex-col items-center justify-between gap-4 rounded-2xl px-7 py-5 sm:flex-row"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--c-border)",
            }}
          >
            <p className="text-sm" style={{ color: "var(--c-text-dim)" }}>
              <span
                className="mono-label mr-2"
                style={{ color: "#3DE1FF" }}
              >
                Field manual
              </span>
              New to AI marketing agents? Read the complete guide to what they
              are and how to deploy them.
            </p>
            <Link
              href="/ai-marketing-agents"
              className="shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all"
              style={{
                border: "1px solid var(--c-border-strong)",
                color: "var(--c-text)",
              }}
            >
              Read the guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Roster ===== */}
      <section id="roster" className="console-canvas py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="mono-label" style={{ color: "#3DE1FF" }}>
              The roster
            </p>
            <h2
              className="mt-3 text-3xl font-black tracking-tight lg:text-[38px]"
              style={{ color: "var(--c-text)" }}
            >
              Your eight operatives
            </h2>
            <p
              className="mt-3 max-w-2xl text-[15px]"
              style={{ color: "var(--c-text-dim)" }}
            >
              Each agent runs a vertical. Lihi holds the brief, reviews every
              output, and connects the whole operation. Filter by function.
            </p>
          </ScrollReveal>

          <div className="mt-9">
            <AgentFilterBar />
          </div>
        </div>
      </section>

      {/* ===== How deployment works ===== */}
      <section className="console-canvas py-16 lg:py-20">
        <div className="mx-auto max-w-[1000px] px-8">
          <ScrollReveal>
            <p className="mono-label text-center" style={{ color: "#3DE1FF" }}>
              How deployment works
            </p>
            <h2
              className="mt-3 text-center text-3xl font-black tracking-tight lg:text-[38px]"
              style={{ color: "var(--c-text)" }}
            >
              Brief &rarr; Run &rarr; Deliver
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={0.1 + i * 0.12}>
                <div className="glass-card relative h-full rounded-2xl p-7">
                  <span className="card-spotlight" aria-hidden="true" />
                  <div
                    className="mono-label mb-4"
                    style={{ color: "var(--c-brand)", fontSize: 13 }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="mb-2 text-xl font-bold"
                    style={{ color: "var(--c-text)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--c-text-dim)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p
              className="mt-8 text-center text-sm"
              style={{ color: "var(--c-text-dim)" }}
            >
              This loop is the heart of{" "}
              <Link
                href="/orchestrator-method"
                className="font-semibold hover:underline"
                style={{ color: "var(--c-brand)" }}
              >
                the Orchestrator Method
              </Link>
              , the full operating model behind the team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Proof band ===== */}
      <section className="console-canvas py-12">
        <div className="mx-auto max-w-[1000px] px-8">
          <ScrollReveal>
            <div
              className="rounded-2xl px-8 py-10 text-center"
              style={{
                background:
                  "linear-gradient(180deg, rgba(254,52,101,0.06), rgba(61,225,255,0.03))",
                border: "1px solid var(--c-border)",
              }}
            >
              <p
                className="mx-auto max-w-2xl text-xl font-semibold leading-snug lg:text-2xl"
                style={{ color: "var(--c-text)" }}
              >
                &ldquo;You don&apos;t hire freelancers here. You take command of
                a team that&apos;s already running, with a fractional CMO on
                every output.&rdquo;
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {[
                  ["8", "AI specialists"],
                  ["$70M+", "raised"],
                  ["15+ yrs", "B2B SaaS"],
                  ["100%", "human-reviewed"],
                ].map(([n, l]) => (
                  <div key={l} className="text-center">
                    <div
                      className="text-2xl font-black"
                      style={{ color: "var(--c-text)" }}
                    >
                      {n}
                    </div>
                    <div
                      className="mono-label"
                      style={{ color: "var(--c-text-dim)", fontSize: 9 }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== Final console CTA ===== */}
      <section className="console-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-[820px] px-8 text-center">
          <ScrollReveal>
            <p className="mono-label" style={{ color: "#3DE1FF" }}>
              Ready when you are
            </p>
            <h2
              className="mx-auto mt-3 max-w-2xl text-3xl font-black leading-[1.1] tracking-tight lg:text-[44px]"
              style={{ color: "var(--c-text)" }}
            >
              Take command of your{" "}
              <span className="gradient-text">marketing engine.</span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-[15px]"
              style={{ color: "var(--c-text-dim)" }}
            >
              One diagnostic call. We map your growth engine and the specific
              agents that will move the needle.
            </p>
            <div className="mt-9 flex justify-center">
              <MagneticButton
                href="/revenue-diagnostic#book"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Book a diagnostic with Lihi &rarr;
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <StickyDiagnosticBar />
    </div>
  );
}
