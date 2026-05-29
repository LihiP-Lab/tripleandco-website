"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { agents } from "@/lib/agents-data";

/* ── Data ─────────────────────────────────────────────────── */

const stats = [
  { value: "3×", label: "Revenue growth delivered" },
  { value: "10+", label: "B2B companies transformed" },
  { value: "4-phase", label: "AI revenue framework" },
];

const buildCards = [
  {
    icon: "◈",
    title: "Unified Data Intelligence",
    body: "Connect marketing, sales, and product data into one operating view your team actually uses.",
  },
  {
    icon: "⚡",
    title: "Automated Revenue Workflows",
    body: "Replace manual execution with AI agents that qualify, nurture, and convert — around the clock.",
  },
  {
    icon: "🎯",
    title: "Full-Funnel AI Strategy",
    body: "From awareness to closed revenue — AI-augmented at every stage, with human strategy at the center.",
  },
  {
    icon: "📈",
    title: "Scalable Systems, Not Projects",
    body: "Built to learn and compound over time — not a one-time engagement that fades after handoff.",
  },
];

const proofBullets = [
  "Deep SaaS operator experience — not theory",
  "Proven revenue execution across multiple ventures",
  "Hands-on implementation of live AI systems",
  "Full-funnel ownership from awareness to revenue",
];

const phases = [
  {
    num: "01",
    title: "AI-Powered Content & Visibility",
    body: "Deploy specialized agents to build a content engine that drives organic visibility and positions your brand as an authority — without adding headcount.",
    pills: ["SEO Agents", "Content Automation", "Brand Voice AI"],
  },
  {
    num: "02",
    title: "Demand Generation & Lead Intelligence",
    body: "Layer AI-driven campaigns and intent data on top of your content foundation to generate qualified pipeline — not just traffic.",
    pills: ["Lead Scoring", "Campaign Agents", "Intent Data"],
  },
  {
    num: "03",
    title: "Sales Enablement & Conversion",
    body: "Arm your sales team with AI-generated intelligence, automated outreach sequences, and CRM workflows that turn interest into revenue.",
    pills: ["Sales Intelligence", "Outreach Agents", "CRM Automation"],
  },
  {
    num: "04",
    title: "Revenue Operations & Scale",
    body: "Unify every channel, agent, and data source into a single revenue engine that learns, compounds, and scales predictably.",
    pills: ["Revenue Engine", "Automation", "Scale Systems"],
  },
];

const faqs = [
  {
    q: "What does a typical engagement look like?",
    a: "We start with a 30-minute diagnostic call. If there's a fit, we map your revenue funnel, identify the highest-impact growth levers, and build a phased AI execution plan. Most clients start with Phase 1 and expand from there.",
  },
  {
    q: "How long does it take to see results?",
    a: "Content and visibility improvements show within 4–6 weeks. Pipeline impact typically appears by month 2–3. By month 4, the AI system is generating compounding returns with decreasing effort.",
  },
  {
    q: "Is this consulting or done-for-you?",
    a: "Both. Lihi provides senior CMO/CRO leadership and strategy. The eight AI agents handle execution — content, campaigns, social, analytics, and more. You get strategic guidance and a full execution team in one engagement.",
  },
  {
    q: "Do we need a technical team to work with you?",
    a: "No. The AI agents and systems are managed entirely by Lihi and the Triple & Co. operating system. Your team stays focused on what they do best while we handle the marketing infrastructure.",
  },
  {
    q: "How is this different from hiring a fractional CMO?",
    a: "A fractional CMO gives you part-time leadership. Lihi gives you part-time leadership plus eight specialist AI agents that execute at full-time speed. Strategy and execution, unified.",
  },
  {
    q: "What kinds of companies do you work with?",
    a: "B2B SaaS companies from seed to Series C. Typically $1M–$30M ARR, looking to build a scalable marketing and revenue engine without hiring a full department.",
  },
  {
    q: "How many clients do you take at a time?",
    a: "2–3 active clients per quarter. This ensures every company gets senior attention and the AI system is properly calibrated to their business.",
  },
];

/* ── FAQ Item ─────────────────────────────────────────────── */

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
    setOpen((prev) => !prev);
  };

  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] mb-3 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
        <button
          onClick={handleToggle}
          aria-expanded={open}
          className="flex justify-between items-center w-full px-7 py-6 text-left font-semibold text-[17px] text-purple-9 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-2xl"
        >
          <span>{q}</span>
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-extrabold shrink-0 transition-all duration-300 ${
              open
                ? "bg-brand text-white rotate-45"
                : "bg-pink-05 text-brand rotate-0"
            }`}
          >
            +
          </span>
        </button>
        <div
          ref={contentRef}
          style={{
            maxHeight: open ? `${height}px` : "0",
            opacity: open ? 1 : 0,
            transition:
              "max-height 0.4s cubic-bezier(.16,1,.3,1), opacity 0.3s ease",
          }}
          className="overflow-hidden"
        >
          <div className="px-7 pb-7 text-purple-7 leading-[1.7]">{a}</div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ── Page ──────────────────────────────────────────────────── */

export default function BuilderProfilePage() {
  return (
    <>
      {/* 02 · Breadcrumb */}
      <section className="pt-20 lg:pt-28 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Marketing Agents", href: "/agents" },
              { label: "Lihi Pinto" },
            ]}
          />
        </div>
      </section>

      {/* 03 · Hero — split (text | portrait) */}
      <section className="pb-16 lg:pb-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left column */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="eyebrow mb-4">Builder Profile · Triple &amp; Co.</p>
                <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-3">
                  Lihi Pinto
                </h1>
                <p className="text-xl lg:text-2xl font-bold text-purple-7 mb-6">
                  AI-Driven Revenue &amp; Marketing Architect
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="text-lg text-purple-7 leading-relaxed mb-8">
                  I build AI-powered revenue systems for B2B companies that want
                  to grow faster without growing their headcount. Strategy,
                  execution, and eight supervised AI agents — unified under one
                  operating system.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-4 mb-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-[10px] bg-dark text-white px-6 py-3.5 text-[15px] font-semibold transition-all hover:bg-purple-8 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                  >
                    Book a Strategy Call <span>&#8594;</span>
                  </Link>
                  <a
                    href="#bpl-framework"
                    className="inline-flex items-center gap-2 rounded-[10px] border-2 border-dark text-purple-9 px-6 py-3.5 text-[15px] font-semibold transition-all hover:bg-purple-05 hover:-translate-y-0.5"
                  >
                    See how I work <span>&#8595;</span>
                  </a>
                </div>
              </ScrollReveal>

              {/* Stats */}
              <ScrollReveal delay={0.3}>
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((s) => (
                    <div
                      key={s.value}
                      className="bg-white rounded-2xl p-5 shadow-[var(--shadow-base)]"
                    >
                      <p className="font-mono text-2xl lg:text-3xl font-extrabold text-purple-9 mb-1">
                        {s.value}
                      </p>
                      <p className="text-xs text-purple-6 leading-snug">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right column — portrait */}
            <ScrollReveal className="lg:col-span-5" direction="right">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-base)] max-w-[400px] mx-auto lg:max-w-none">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto — Builder of Triple & Co.'s AI marketing agents"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 400px, 42vw"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 04 · What I Build — 4-card grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">What I Build</p>
            <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-center text-purple-9 mb-4">
              AI systems that generate revenue — not experiments.
            </h2>
            <p className="text-center text-purple-6 max-w-2xl mx-auto mb-14">
              Most companies are running AI pilots. I build the infrastructure
              that makes AI your competitive advantage.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={0.08 + i * 0.1}>
                <div className="relative bg-white rounded-2xl border border-purple-15 p-7 shadow-[var(--shadow-base)] h-full transition-all hover:shadow-[var(--shadow-hover)] hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 h-1 gradient-bar rounded-t-2xl" />
                  <div className="w-10 h-10 rounded-full bg-purple-05 flex items-center justify-center text-lg mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-purple-9 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-purple-6 leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 · Why Lihi — proof bullets */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <p className="eyebrow mb-3">Why Lihi</p>
            <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-2">
              Most AI consultants explain what&apos;s possible.
            </h2>
            <p className="text-xl lg:text-2xl font-bold text-purple-9 mb-12">
              Lihi builds what actually works.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left max-w-2xl mx-auto">
            {proofBullets.map((bullet, i) => (
              <ScrollReveal key={bullet} delay={0.1 + i * 0.08}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="text-purple-7 font-medium">{bullet}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 · The Framework — 4 phases */}
      <section
        id="bpl-framework"
        className="py-20 lg:py-28 bg-white scroll-mt-20"
      >
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The Framework</p>
            <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-center text-purple-9 mb-4">
              Four phases. One revenue engine.
            </h2>
            <p className="text-center text-purple-6 max-w-2xl mx-auto mb-14">
              A structured path from fragmented tools to a unified AI system
              that compounds over time.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.num} delay={0.1 + i * 0.1}>
                <div className="relative bg-white rounded-2xl border border-purple-15 p-8 shadow-[var(--shadow-base)] h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 gradient-bar rounded-t-2xl" />
                  <div className="flex items-start gap-5 mb-4">
                    <span className="font-mono text-3xl font-extrabold text-purple-3">
                      {phase.num}
                    </span>
                    <h3 className="text-lg font-extrabold text-purple-9 pt-1">
                      {phase.title}
                    </h3>
                  </div>
                  <p className="text-sm text-purple-6 leading-relaxed mb-5">
                    {phase.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {phase.pills.map((pill) => (
                      <span
                        key={pill}
                        className="inline-flex items-center rounded-full bg-purple-05 border border-purple-15 px-3 py-1 text-xs font-medium text-purple-6"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 · Mid-page CTA band */}
      <section className="relative bg-dark text-white py-20 lg:py-24 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(254, 52, 101, .25) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[800px] px-8">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] mb-4">
              Ready to build your AI revenue engine?
            </h2>
            <p className="text-purple-4 mb-8">
              Let&apos;s map out what&apos;s possible for your business in a
              30-minute strategy call.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-white text-purple-9 px-8 py-[16px] text-[15px] font-semibold transition-all hover:bg-purple-05 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a Strategy Call <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* The 8 Agents — grid with links */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The Team</p>
            <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-center text-purple-9 mb-4">
              8 AI agents. Built &amp; supervised by Lihi.
            </h2>
            <p className="text-center text-purple-6 max-w-2xl mx-auto mb-14">
              Each agent is a specialist — trained for one marketing function,
              supervised end-to-end, and connected to your revenue goals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {agents.map((agent, i) => (
              <ScrollReveal key={agent.id} delay={0.06 + i * 0.06}>
                <Link
                  href={`/agents#${agent.id}`}
                  className="group block bg-white rounded-2xl border border-purple-15 p-6 shadow-[var(--shadow-base)] text-center transition-all hover:shadow-[var(--shadow-hover)] hover:-translate-y-1"
                >
                  <div className="w-20 h-20 rounded-full bg-purple-05 overflow-hidden mx-auto mb-4">
                    <Image
                      src={agent.image}
                      alt={`${agent.name}, AI marketing agent`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-extrabold text-purple-9 mb-1 group-hover:text-brand transition-colors">
                    {agent.name}
                  </h3>
                  <p className="text-xs text-purple-6">{agent.role}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 · Signature Outcome — before → after */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <p className="eyebrow mb-3">Signature Outcome</p>
            <p className="text-xl font-bold text-purple-7 mb-3">
              From fragmented marketing and sales efforts&hellip;
            </p>
            <p className="text-4xl lg:text-5xl font-black text-brand mb-3">
              &darr;
            </p>
            <h2 className="text-2xl lg:text-3xl font-black tracking-tight leading-[1.2] text-purple-9 mb-8">
              A unified, AI-driven revenue engine that runs faster, learns
              continuously, and scales predictably.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap justify-center gap-4">
              {["Runs Faster", "Learns Continuously", "Scales Predictably"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full bg-purple-05 border border-purple-15 px-5 py-2 text-sm font-medium text-purple-7"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 09 · FAQ — 7 expandable rows */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-4">Common Questions</p>
            <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-center mb-12 text-purple-9">
              Everything you want to know before reaching out.
            </h2>
          </ScrollReveal>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </section>

      {/* 10 · Final CTA — Work With Lihi */}
      <section className="relative bg-dark text-white py-24 lg:py-36 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(254, 52, 101, .25) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-12 -right-12 w-[300px] h-[300px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(137, 109, 156, .35) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[900px] px-8">
          <ScrollReveal direction="scale">
            <p className="eyebrow eyebrow-light mb-4">Work With Lihi</p>
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-black tracking-tight leading-[1.1] mb-4">
              Stop experimenting with AI.{" "}
              <span className="gradient-text">Start building with it.</span>
            </h2>
            <p className="text-purple-4 mb-10 italic">
              Limited availability. Currently accepting 2–3 new clients per
              quarter.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-white text-purple-9 px-9 py-[18px] text-base font-semibold transition-all hover:bg-purple-05 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a Strategy Call with Lihi <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
