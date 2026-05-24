"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";
import { ScrollReveal } from "./ScrollReveal";

function AnimatedStat({
  target,
  suffix,
  prefix,
  label,
  delay,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const value = useCountUp(target, inView);

  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        className="text-center py-8 px-4 rounded-2xl bg-white shadow-[var(--shadow-base)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-hover)]"
      >
        <div className="font-black text-[56px] leading-none tracking-tighter gradient-text mb-3">
          {prefix}
          {value}
          {suffix}
        </div>
        <div className="text-sm font-medium text-purple-7">{label}</div>
      </div>
    </ScrollReveal>
  );
}

function CycleTimeStat({ delay }: { delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const hours = useCountUp(3, inView);
  const minutes = useCountUp(12, inView);

  return (
    <ScrollReveal delay={delay}>
      <div
        ref={ref}
        className="text-center py-8 px-4 rounded-2xl bg-white shadow-[var(--shadow-base)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--shadow-hover)]"
      >
        <div className="font-black text-[56px] leading-none tracking-tighter gradient-text mb-3">
          {hours}h {minutes}m
        </div>
        <div className="text-sm font-medium text-purple-7">
          Average cycle time
        </div>
      </div>
    </ScrollReveal>
  );
}

export function StatsSection() {
  return (
    <section className="bg-purple-05 py-16" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-[1200px] px-8">
        <ScrollReveal>
          <p className="eyebrow text-center mb-8" id="stats-heading">
            Live numbers from the command center
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          <AnimatedStat
            target={14}
            label="Pieces shipped today"
            delay={0}
          />
          <CycleTimeStat delay={0.12} />
          <AnimatedStat
            target={94}
            suffix="%"
            label="Options approved on first pass"
            delay={0.24}
          />
        </div>
        <ScrollReveal delay={0.3}>
          <p className="text-center mt-8 text-sm italic text-purple-5">
            Refreshed weekly. The supervised team in numbers.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
