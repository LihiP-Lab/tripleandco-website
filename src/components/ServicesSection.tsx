"use client";

import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

type Service = {
  id: string;
  name: string;
  valueProp: string;
  outcomes: string[];
  bestFor: string;
  cta: string;
  challenges: string[];
  featured?: boolean;
  icon: React.ReactNode;
};

const CHALLENGES: { id: string; label: string }[] = [
  { id: "all", label: "All services" },
  { id: "owner", label: "No senior owner" },
  { id: "pipeline", label: "Weak pipeline" },
  { id: "brand", label: "Brand & story" },
  { id: "launch", label: "Launching / GTM" },
  { id: "crm", label: "Messy CRM" },
  { id: "team", label: "Scaling team" },
];

const services: Service[] = [
  {
    id: "cmo",
    name: "CMO as a Service",
    valueProp: "Senior marketing leadership that owns the number, not just the plan.",
    outcomes: [
      "A fractional CMO embedded in your team",
      "Strategy plus weekly execution",
      "One owner accountable for revenue",
    ],
    bestFor: "No senior marketing owner",
    cta: "Deploy a CMO",
    challenges: ["owner", "launch"],
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0116 0" />
      </svg>
    ),
  },
  {
    id: "cro",
    name: "Full CRO Service",
    valueProp: "One owner across marketing, sales & CS — so revenue stops leaking between teams.",
    outcomes: [
      "Aligned funnel, end to end",
      "Closed handoff gaps",
      "Forecastable revenue",
    ],
    bestFor: "Handoff gaps between teams",
    cta: "Fix revenue leaks",
    challenges: ["pipeline", "owner"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M3 12l3-3 4 4 8-8" />
        <path d="M14 5h6v6" />
      </svg>
    ),
  },
  {
    id: "brand",
    name: "Brand Strategy & Storytelling",
    valueProp: "Positioning and voice that make you the obvious choice.",
    outcomes: [
      "Sharp positioning & messaging",
      "A scalable visual language",
      "A story your team can repeat",
    ],
    bestFor: "Blending into competitors",
    cta: "Sharpen your brand",
    challenges: ["brand"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
  {
    id: "gtm",
    name: "Growth Strategy & GTM",
    valueProp: "From thesis to a 90-day plan your team can actually run.",
    outcomes: [
      "A clear growth thesis",
      "A 90-day execution plan",
      "Owned channels & motions",
    ],
    bestFor: "Launching or a new motion",
    cta: "Get your GTM plan",
    challenges: ["launch", "pipeline"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 4v6" />
      </svg>
    ),
  },
  {
    id: "social",
    name: "Social Management",
    valueProp: "Founder-led content and a full calendar — without hiring in-house.",
    outcomes: [
      "A consistent content calendar",
      "Founder-led thought leadership",
      "Engaged, on-brand presence",
    ],
    bestFor: "Inconsistent posting",
    cta: "Build your presence",
    challenges: ["brand"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    id: "hubspot",
    name: "HubSpot & Automation",
    valueProp: "A CRM that runs like a revenue engine, not a contact graveyard.",
    outcomes: [
      "Clean, automated workflows",
      "Reporting you can trust",
      "Less manual busywork",
    ],
    bestFor: "Messy or unused HubSpot",
    cta: "Tune your CRM",
    challenges: ["crm"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 10h20M6 14h4M14 14h4" />
      </svg>
    ),
  },
  {
    id: "pipeline",
    name: "Pipeline Management",
    valueProp: "Turn demand into qualified, forecastable opportunities.",
    outcomes: [
      "Demand gen that converts",
      "Qualified, scored opportunities",
      "A predictable pipeline",
    ],
    bestFor: "Thin or unpredictable pipeline",
    cta: "Grow pipeline",
    challenges: ["pipeline"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 6-6" />
      </svg>
    ),
  },
  {
    id: "events",
    name: "Events & Tradeshows",
    valueProp: "From booth to booked pipeline — events that pay back.",
    outcomes: [
      "A pre / during / post event plan",
      "Captured, qualified leads",
      "Measurable event ROI",
    ],
    bestFor: "Low event ROI",
    cta: "Make events convert",
    challenges: ["pipeline"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 2l-4 5-4-5M8 11h8M8 15h8" />
      </svg>
    ),
  },
  {
    id: "team",
    name: "In-House Team Building",
    valueProp: "Source, train, and keep marketers who deliver.",
    outcomes: [
      "The right roles & hires",
      "Onboarding & training",
      "A team that compounds",
    ],
    bestFor: "Scaling headcount",
    cta: "Build your team",
    challenges: ["team"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

function ServiceCard({ service, featured }: { service: Service; featured: boolean }) {
  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <Link
      href={`/services#${service.id}`}
      onMouseMove={handleMove}
      className={`service-card group relative flex h-full flex-col rounded-2xl px-6 py-7 shadow-[var(--shadow-base)] overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:border-brand/40 hover:shadow-[var(--shadow-hover)] ${
        featured ? "bg-pink-05/40 border-brand/30 ring-1 ring-brand/15" : "bg-white border-purple-15"
      }`}
    >
      <span className="service-spotlight" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-1 gradient-bar opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-[10px] bg-pink-05 flex items-center justify-center text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
          {service.icon}
        </div>
        {featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand">
            Most hired
          </span>
        )}
      </div>

      <div className="relative mt-4 font-extrabold text-[17px] text-purple-9 tracking-tight">
        {service.name}
      </div>
      <div className="relative mt-1.5 text-sm text-purple-6 leading-relaxed">
        {service.valueProp}
      </div>

      {/* Outcome reveal on hover/focus */}
      <div className="relative grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100">
        <ul className="overflow-hidden mt-3 space-y-1.5">
          {service.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2 text-[13px] text-purple-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 w-3.5 h-3.5 shrink-0 text-brand">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {o}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-auto pt-5 flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full border border-purple-15 bg-white px-2.5 py-1 text-[11px] font-semibold text-purple-6">
          Best for: {service.bestFor}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand transition-all group-hover:gap-2.5">
          {service.cta} <span aria-hidden="true">&#8594;</span>
        </span>
      </div>
    </Link>
  );
}

export function ServicesSection() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? services
      : services.filter((s) => s.challenges.includes(active));

  return (
    <section className="services-bg relative bg-white py-20 lg:py-30" aria-labelledby="services-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="relative mx-auto max-w-[1200px] px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-10">
            <p className="eyebrow mb-4">Our Services</p>
            <h2 id="services-heading" className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              What Triple &amp; Co. delivers for{" "}
              <span className="gradient-text">your company</span>.
            </h2>
            <p className="text-lg text-purple-6">
              Nine services your company can hire. Senior CMO and CRO leadership,
              full-service B2B marketing execution, and AI-powered delivery. Hire
              one. Hire several. Or hire the full stack.
            </p>
          </div>
        </ScrollReveal>

        {/* Choose your growth challenge */}
        <ScrollReveal>
          <div className="mb-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-purple-6/80">
            Choose your growth challenge
          </div>
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {CHALLENGES.map((c) => {
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c.id)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-all ${
                    isActive
                      ? "bg-brand text-white shadow-[var(--shadow-hover)]"
                      : "border border-purple-15 bg-white text-purple-6 hover:border-brand/40 hover:text-purple-9"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
          <div className="mb-10 text-center text-sm text-purple-6">
            {visible.length} {visible.length === 1 ? "service" : "services"}
            {active !== "all" && " match your challenge"}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visible.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.05}>
              <ServiceCard service={service} featured={active === "all" && !!service.featured} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              See every service in detail <span>&#8594;</span>
            </Link>
            <div className="mt-4">
              <Link
                href="/contact"
                className="text-brand font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                Not sure which? Book a Diagnostic Call with Lihi <span>&#8594;</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
