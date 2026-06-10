"use client";

import { ScrollReveal } from "./ScrollReveal";

const pillars = [
  {
    num: "01",
    label: "LEADERSHIP",
    heading: "Senior CMO & CRO judgment",
    body: "Lihi Pinto embeds with your leadership team, owns the revenue plan, and reports at board level. Strategy is set by an operator, not a dashboard.",
  },
  {
    num: "02",
    label: "EXECUTION",
    heading: "Full-service delivery",
    body: "Positioning, content, social, HubSpot, pipeline, events. The work ships every week, connected into one revenue engine instead of isolated campaigns.",
  },
  {
    num: "03",
    label: "AI SCALE",
    heading: "Eight supervised AI agents",
    body: "Pre-configured Claude specialists handle research, copy, social, analytics, design, and video. Every output passes a human before it reaches you.",
  },
];

export function ThreeLayersSection() {
  return (
    <section
      className="relative bg-white py-20 lg:py-30"
      aria-labelledby="three-layers-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">What Triple &amp; Co. is</p>
            <h2
              id="three-layers-heading"
              className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4"
            >
              One partner. Three layers of{" "}
              <span className="gradient-text">growth</span>.
            </h2>
            <p className="text-lg leading-relaxed text-purple-6 max-w-[680px] mx-auto">
              Most B2B companies stitch together a fractional exec, an agency,
              and a stack of freelancers. Triple replaces the patchwork with one
              accountable system.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.num} delay={0.1 + i * 0.1}>
              <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] px-8 py-9 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] h-full">
                <div className="absolute top-0 left-0 right-0 h-[5px] gradient-bar rounded-t-2xl" />
                <p className="text-[12px] font-black tracking-[.1em] text-brand mb-4 uppercase">
                  {pillar.num} &middot; {pillar.label}
                </p>
                <h3 className="text-[20px] font-black tracking-tight text-purple-9 mb-3">
                  {pillar.heading}
                </h3>
                <p className="text-[15px] leading-relaxed text-purple-6">
                  {pillar.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
