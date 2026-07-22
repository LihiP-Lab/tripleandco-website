"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { ScrollReveal } from "./ScrollReveal";

const differentiators = [
  {
    num: "01",
    title: "Senior leadership",
    desc: "CMO and CRO judgment from Lihi Pinto: 15+ years scaling B2B SaaS, $70M+ raised, revenue tripled repeatedly.",
  },
  {
    num: "02",
    title: "Full-service execution",
    desc: "Content, campaigns, HubSpot, social, pipeline, events, sales enablement. One partner running the work.",
  },
  {
    num: "03",
    title: "AI-native delivery",
    desc: "Eight supervised AI agents trained on your brand. Not a bolt-on tool, an operating system for growth.",
  },
];

function AnimatedNumber({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix?: string;
  label: string;
}) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const value = useCountUp(target, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-black text-4xl lg:text-5xl tracking-tighter gradient-text mb-1">
        {value}
        {suffix}
      </div>
      <div className="text-sm text-purple-6">{label}</div>
    </div>
  );
}

export function WhyDifferentSection() {
  return (
    <section
      className="relative bg-purple-05 py-20 lg:py-30"
      aria-labelledby="why-different-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-14">
            <p className="eyebrow mb-4">Why Triple &amp; Co.</p>
            <h2
              id="why-different-heading"
              className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-5"
            >
              One partner. Three layers of{" "}
              <span className="gradient-text">unfair advantage</span>.
            </h2>
            <p className="text-lg text-purple-6">
              Senior leadership, full-service execution, and AI-native delivery,
              integrated into one revenue engine.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {differentiators.map((d, i) => (
            <ScrollReveal key={d.num} delay={i * 0.12}>
              <div className="relative bg-white rounded-[20px] p-8 shadow-[var(--shadow-base)] border border-purple-15 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[var(--shadow-hover)] h-full">
                <div className="absolute top-0 left-0 right-0 h-[5px] gradient-bar rounded-t-[20px]" />
                <div className="font-black text-4xl leading-none tracking-tighter gradient-text mb-3">
                  {d.num}
                </div>
                <div className="font-extrabold text-xl text-purple-9 mb-3 tracking-tight leading-snug">
                  {d.title}
                </div>
                <div className="text-[15px] text-purple-7 leading-relaxed">
                  {d.desc}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Inline stats */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 py-8 px-6 bg-white rounded-2xl shadow-[var(--shadow-base)] max-w-[720px] mx-auto">
            <AnimatedNumber target={8} label="Specialist AI agents" />
            <div className="hidden md:block w-px h-12 bg-purple-15" />
            <AnimatedNumber
              target={100}
              suffix="%"
              label="Human-reviewed before it ships"
            />
            <div className="hidden md:block w-px h-12 bg-purple-15" />
            <AnimatedNumber target={15} suffix="+" label="Years scaling B2B SaaS" />
          </div>
          <p className="text-center mt-5 text-sm italic text-purple-5">
            The supervised team in numbers.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
