"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    name: "CMO as a Service",
    tag: "Senior marketing leadership, embedded in your team.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0116 0" />
      </svg>
    ),
  },
  {
    name: "Full CRO Service",
    tag: "Revenue ownership across marketing, sales, and customer success.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M3 12l3-3 4 4 8-8" />
        <path d="M14 5h6v6" />
      </svg>
    ),
  },
  {
    name: "Brand Strategy & Storytelling",
    tag: "Voice, positioning, and visual language that scales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
  {
    name: "Growth Strategy & GTM",
    tag: "From thesis to a 90-day execution plan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 4v6" />
      </svg>
    ),
  },
  {
    name: "Social Management",
    tag: "Founder-led content. A full marketing calendar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    name: "HubSpot & Automation",
    tag: "A CRM that runs like a revenue engine.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 10h20M6 14h4M14 14h4" />
      </svg>
    ),
  },
  {
    name: "Pipeline Management",
    tag: "Demand generation to qualified opportunity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 6-6" />
      </svg>
    ),
  },
  {
    name: "Events & Tradeshows",
    tag: "From booth to closed pipeline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 2l-4 5-4-5M8 11h8M8 15h8" />
      </svg>
    ),
  },
  {
    name: "In-House Team Building",
    tag: "Sourcing, training, and keeping the right marketers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[22px] h-[22px]">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section className="relative bg-white py-20 lg:py-30" aria-labelledby="services-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 0.06}>
              <div className="relative bg-white rounded-2xl px-6 py-7 shadow-[var(--shadow-base)] overflow-hidden border border-purple-15 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[var(--shadow-hover)]">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
                <div className="w-10 h-10 rounded-[10px] bg-pink-05 flex items-center justify-center text-brand mb-4">
                  {service.icon}
                </div>
                <div className="font-extrabold text-[17px] text-purple-9 mb-1.5 tracking-tight">
                  {service.name}
                </div>
                <div className="text-sm text-purple-6 leading-relaxed">
                  {service.tag}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              See every service in detail <span>&#8594;</span>
            </Link>
            <div className="mt-4">
              <Link
                href="/contact"
                className="text-brand font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                Book a Diagnostic Call with Lihi <span>&#8594;</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
