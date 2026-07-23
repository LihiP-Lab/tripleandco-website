"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

/* ── Data ─────────────────────────────────────────────── */

type Service = {
  id: string;
  name: string;
  desc: string;
  tag: string;
  challenges: string[];
  includes: string[];
  metric: { big: string; small: string };
  cta: string;
  icon: React.ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "w-[22px] h-[22px]",
};

const featuredCro: Service = {
  id: "cro",
  name: "CRO as a Service",
  desc: "One owner for the entire revenue number. Marketing, sales, and customer success under a single strategy.",
  tag: "Flagship",
  challenges: ["pipeline", "leader"],
  includes: [
    "Revenue architecture across the full funnel",
    "Weekly pipeline and forecast ownership",
    "Marketing, SDR, and CS alignment",
  ],
  metric: { big: "$70M+", small: "raised at companies Lihi led marketing" },
  cta: "See the model",
  icon: (
    <svg {...iconProps}>
      <path d="M3 12l3-3 4 4 8-8" />
      <path d="M14 5h6v6" />
    </svg>
  ),
};

const featuredCmo: Service = {
  id: "cmo",
  name: "CMO as a Service",
  desc: "A senior CMO in your leadership room, without the hire.",
  tag: "Founders w/o a VP Mktg",
  challenges: ["leader", "team"],
  includes: ["Embedded leadership, 2-3 days a week", "Strategy, budget, and team ownership"],
  metric: { big: "Top 1%", small: "fastest-growing SaaS, led from this seat" },
  cta: "Meet your CMO",
  icon: (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0116 0" />
    </svg>
  ),
};

const services: Service[] = [
  {
    id: "brand",
    name: "Brand Strategy & Storytelling",
    desc: "A story your buyers repeat in rooms you're not in.",
    tag: "Repositioning",
    challenges: ["brand"],
    includes: ["Positioning, voice, and visual language", "Messaging that scales with the company"],
    metric: { big: "1 story", small: "every team, deck, and page tells the same one" },
    cta: "Build the story",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
  {
    id: "gtm",
    name: "Growth Strategy & GTM",
    desc: "From thesis to a 90-day plan your team can run Monday.",
    tag: "New markets",
    challenges: ["pipeline", "leader"],
    includes: ["ICP, channels, and positioning thesis", "90-day execution plan with owners"],
    metric: { big: "90 days", small: "from kickoff to a running GTM motion" },
    cta: "Get the plan",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 4v6" />
      </svg>
    ),
  },
  {
    id: "social",
    name: "Social Management",
    desc: "Founder-led content, shipped weekly. You approve, we run.",
    tag: "Busy founders",
    challenges: ["brand"],
    includes: ["Full marketing calendar, written and designed", "Founder voice, never raw AI output"],
    metric: { big: "3x/week", small: "founder posts without writing a word" },
    cta: "See a sample month",
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    id: "hubspot",
    name: "HubSpot & Automation",
    desc: "A CRM that tells you where revenue is leaking.",
    tag: "Messy CRM",
    challenges: ["crm", "pipeline"],
    includes: ["Pipeline, lifecycle, and attribution rebuild", "Automation that sales actually uses"],
    metric: { big: "1 source", small: "of truth for the whole revenue team" },
    cta: "Audit my HubSpot",
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 10h20M6 14h4M14 14h4" />
      </svg>
    ),
  },
  {
    id: "pipeline",
    name: "Pipeline Management",
    desc: "Demand gen that ends in qualified meetings, not MQLs.",
    tag: "Pipeline gaps",
    challenges: ["pipeline", "crm"],
    includes: ["Demand programs tied to revenue targets", "Qualification and handoff that sticks"],
    metric: { big: "SQLs", small: "measured in meetings booked, not form fills" },
    cta: "Fill the pipeline",
    icon: (
      <svg {...iconProps}>
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 6-6" />
      </svg>
    ),
  },
  {
    id: "events",
    name: "Events & Tradeshows",
    desc: "Every booth dollar traced to closed pipeline.",
    tag: "Event-heavy GTM",
    challenges: ["pipeline"],
    includes: ["Pre-event outbound and meeting booking", "Post-event follow-up to closed-won"],
    metric: { big: "Booth → $", small: "full attribution from badge scan to deal" },
    cta: "Plan the next event",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 2l-4 5-4-5M8 11h8M8 15h8" />
      </svg>
    ),
  },
  {
    id: "team",
    name: "In-House Team Building",
    desc: "We hire and train your team, then hand over the keys.",
    tag: "Graduating from agencies",
    challenges: ["team"],
    includes: ["Role design, sourcing, and interviews", "Onboarding, playbooks, and handover"],
    metric: { big: "Yours", small: "the team stays when we leave. That's the point" },
    cta: "Build my team",
    icon: (
      <svg {...iconProps}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

const filters = [
  { id: "all", label: "Show all" },
  { id: "pipeline", label: "No pipeline" },
  { id: "brand", label: "Weak brand" },
  { id: "leader", label: "No marketing leader" },
  { id: "crm", label: "Messy CRM" },
  { id: "team", label: "Scaling the team" },
];

/* ── Component ────────────────────────────────────────── */

export function ServicesSection() {
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [interacted, setInteracted] = useState<string[]>([]);
  const [stickyDismissed, setStickyDismissed] = useState(false);
  const [operatorInView, setOperatorInView] = useState(false);

  // Suppress the sticky CTA while the "Meet Lihi" operator section is on screen
  useEffect(() => {
    const target = document.querySelector('section[aria-labelledby="operator-heading"]');
    if (!target) return;
    const io = new IntersectionObserver(
      ([entry]) => setOperatorInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const isDimmed = (s: Service) => filter !== "all" && !s.challenges.includes(filter);
  const showSticky = interacted.length >= 2 && !stickyDismissed && !operatorInView;

  const toggle = (id: string) => {
    setOpenId((cur) => (cur === id ? null : id));
    setInteracted((cur) => (cur.includes(id) ? cur : [...cur, id]));
  };

  const proofLayer = (s: Service, dark = false) => (
    <div
      className={`overflow-hidden transition-all duration-400 ${
        openId === s.id ? "max-h-[360px] mt-5 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className={`border-t pt-5 ${dark ? "border-purple-8" : "border-purple-15"}`}>
        <p className={`text-[11px] font-bold uppercase tracking-[0.14em] mb-2.5 ${dark ? "text-purple-4" : "text-purple-5"}`}>
          What&apos;s included
        </p>
        <ul className="mb-4 space-y-1.5">
          {s.includes.map((item) => (
            <li key={item} className={`text-sm leading-relaxed pl-5 relative ${dark ? "text-purple-3" : "text-purple-7"}`}>
              <span className="absolute left-0 text-brand font-bold">&#8594;</span>
              {item}
            </li>
          ))}
        </ul>
        <div className={`flex items-baseline gap-2.5 rounded-xl px-4 py-3 ${dark ? "bg-white/5" : "bg-purple-05"}`}>
          <span className="text-[21px] font-black tracking-tight gradient-text">{s.metric.big}</span>
          <span className={`text-[13px] ${dark ? "text-purple-3" : "text-purple-7"}`}>{s.metric.small}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative bg-purple-05 py-20 lg:py-30" aria-labelledby="services-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-[640px] mb-12">
            <p className="eyebrow mb-4">Our Services</p>
            <h2
              id="services-heading"
              className="text-3xl lg:text-[48px] font-black tracking-tight leading-[1.08] text-purple-9 mb-4"
            >
              Nine ways to <span className="gradient-text">triple</span> your revenue.
            </h2>
            <p className="text-lg text-purple-6 leading-relaxed">
              Senior marketing leadership and execution, supervised end to end. Pick a
              service, or tell us what&apos;s slowing your growth and we&apos;ll point you to the
              right one.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured tier */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-9">
          {/* Dark flagship card */}
          <ScrollReveal className="lg:col-span-2">
            <div
              role="button"
              tabIndex={0}
              aria-expanded={openId === featuredCro.id}
              onClick={() => toggle(featuredCro.id)}
              onKeyDown={(e) => e.key === "Enter" && toggle(featuredCro.id)}
              className="group relative h-full cursor-pointer overflow-hidden rounded-[20px] bg-purple-9 p-9 lg:p-11 shadow-[var(--shadow-base)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[5px] gradient-bar transition-all duration-300 group-hover:h-2" />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 80% at 82% 30%, rgba(254,52,101,.20) 0%, transparent 70%)",
                }}
              />
              <div className="relative">
                <span className="mb-4 inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white gradient-bar">
                  {featuredCro.tag}
                </span>
                <h3 className="mb-2.5 text-[26px] lg:text-[32px] font-black tracking-tight text-white">
                  {featuredCro.name}
                </h3>
                <p className="max-w-[420px] text-base leading-relaxed text-purple-3">{featuredCro.desc}</p>
                {proofLayer(featuredCro, true)}
                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href={`/services#${featuredCro.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                  >
                    {featuredCro.cta} <span>&#8594;</span>
                  </Link>
                  <span className="hidden text-xs font-medium text-purple-5 sm:block">
                    {openId === featuredCro.id ? "Click to close" : "Click card for details"}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CMO featured card */}
          <ScrollReveal delay={0.08}>
            <div
              role="button"
              tabIndex={0}
              aria-expanded={openId === featuredCmo.id}
              onClick={() => toggle(featuredCmo.id)}
              onKeyDown={(e) => e.key === "Enter" && toggle(featuredCmo.id)}
              className={`group relative h-full cursor-pointer overflow-hidden rounded-[20px] bg-white border border-purple-15 p-8 shadow-[var(--shadow-base)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] ${
                isDimmed(featuredCmo) ? "opacity-40 saturate-50" : ""
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-[5px] gradient-bar transition-all duration-300 group-hover:h-2" />
              <div className="mb-5 flex items-start justify-between gap-3">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-pink-05 text-brand transition-all duration-300 group-hover:bg-[linear-gradient(135deg,#FE3465_0%,#896D9C_100%)] group-hover:text-white">
                  {featuredCmo.icon}
                </div>
                <span className="whitespace-nowrap rounded-full bg-pink-05 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand">
                  {featuredCmo.tag}
                </span>
              </div>
              <h3 className="mb-2 text-[22px] font-black tracking-tight text-purple-9">{featuredCmo.name}</h3>
              <p className="text-[15px] leading-relaxed text-purple-7">{featuredCmo.desc}</p>
              {proofLayer(featuredCmo)}
              <div className="mt-5 flex items-center justify-between opacity-100 transition-all duration-300 lg:translate-y-1.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                <Link
                  href={`/services#${featuredCmo.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="rounded-[10px] bg-pink-05 px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-pink-1"
                >
                  {featuredCmo.cta} &#8594;
                </Link>
                <span className="hidden text-xs font-medium text-purple-3 sm:block">Click for details</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Challenge filter pills */}
        <ScrollReveal>
          <div className="mb-8 flex flex-wrap items-center gap-2.5" role="group" aria-label="Filter services by growth challenge">
            <span className="mr-1 text-[13px] font-semibold text-purple-7">
              What&apos;s slowing your growth?
            </span>
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-all ${
                  filter === f.id
                    ? "border-purple-9 bg-purple-9 text-white"
                    : "border-purple-15 bg-white text-purple-8 hover:border-brand hover:text-brand"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Execution tier */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ScrollReveal key={s.id} delay={(i % 3) * 0.07}>
              <div
                role="button"
                tabIndex={0}
                aria-expanded={openId === s.id}
                onClick={() => toggle(s.id)}
                onKeyDown={(e) => e.key === "Enter" && toggle(s.id)}
                className={`group relative h-full cursor-pointer overflow-hidden rounded-[20px] bg-white border border-purple-15 p-8 pb-7 shadow-[var(--shadow-base)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] ${
                  isDimmed(s) ? "opacity-40 saturate-50 hover:translate-y-0 hover:shadow-[var(--shadow-base)]" : ""
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[5px] gradient-bar transition-all duration-300 group-hover:h-2" />
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-pink-05 text-brand transition-all duration-300 group-hover:bg-[linear-gradient(135deg,#FE3465_0%,#896D9C_100%)] group-hover:text-white">
                    {s.icon}
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-pink-05 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-brand">
                    {s.tag}
                  </span>
                </div>
                <h3 className="mb-2 text-[21px] font-black tracking-tight text-purple-9">{s.name}</h3>
                <p className="min-h-[48px] text-[15px] leading-relaxed text-purple-7">{s.desc}</p>
                {proofLayer(s)}
                <div className="mt-4 flex items-center justify-between opacity-100 transition-all duration-300 lg:translate-y-1.5 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  <Link
                    href={`/services#${s.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-[10px] bg-pink-05 px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-pink-1"
                  >
                    {s.cta} &#8594;
                  </Link>
                  <span className="hidden text-xs font-medium text-purple-3 sm:block">Click for details</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing banner */}
        <ScrollReveal delay={0.1}>
          <div className="relative mt-9 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[20px] bg-purple-9 px-9 py-9 sm:flex-row sm:items-center lg:px-11">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 100% at 85% 50%, rgba(254,52,101,.18) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <p className="text-xl font-extrabold tracking-tight text-white">Not sure where to start?</p>
              <p className="mt-1 text-sm text-purple-3">
                That&apos;s literally what the diagnostic call is for.{" "}
                <Link href="/services" className="font-semibold text-pink-3 hover:underline">
                  Or see every service in detail &#8594;
                </Link>
              </p>
            </div>
            <Link
              href="/revenue-diagnostic#book"
              className="relative inline-flex shrink-0 items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a Diagnostic Call <span>&#8594;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Sticky micro-CTA after 2+ card interactions */}
      <div
        aria-hidden={!showSticky}
        className={`fixed bottom-6 left-1/2 z-50 flex max-w-[92vw] -translate-x-1/2 items-center gap-4 rounded-[14px] bg-purple-9 py-3.5 pl-5 pr-4 shadow-[0_16px_48px_rgba(27,22,31,.35)] transition-all duration-500 ${
          showSticky ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
        }`}
      >
        <p className="text-sm font-semibold text-white">
          Comparing services? A 30-min diagnostic call sorts it faster.
        </p>
        <Link
          href="/revenue-diagnostic#book"
          className="shrink-0 rounded-[10px] bg-brand px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Book a call &#8594;
        </Link>
        <button
          onClick={() => setStickyDismissed(true)}
          aria-label="Dismiss"
          className="p-1 text-lg leading-none text-purple-5 hover:text-white"
        >
          &times;
        </button>
      </div>
    </section>
  );
}
