"use client";

import { ScrollReveal } from "./ScrollReveal";

const painPoints = [
  "Messaging that needs to be sharper",
  "Pipeline that needs to be stronger",
  "Content that needs to work harder",
  "Sales process that needs structure",
  "A team that needs senior direction",
  "AI changing the rules faster than most companies can adapt",
];

export function DiagnosisSection() {
  return (
    <section className="relative bg-purple-05 py-20 lg:py-30" aria-labelledby="diagnosis-heading">
      {/* Gradient divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-[880px] px-8 text-center">
        <ScrollReveal>
          <p className="eyebrow mb-4">The state of B2B growth</p>
          <h2 id="diagnosis-heading" className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-8">
            The{" "}
            <span className="gradient-text">old marketing model</span> is
            breaking.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg lg:text-xl leading-relaxed text-purple-7 max-w-[720px] mx-auto">
            Strategy in one silo. Content in another. Sales disconnected. AI bolted on as a tool, not an operating system. The result? Fragmented execution that never compounds.
          </p>
        </ScrollReveal>
        <ul className="mt-9 text-left max-w-[640px] mx-auto">
          {painPoints.map((point, i) => (
            <ScrollReveal key={point} delay={0.15 + i * 0.06}>
              <li className="py-3.5 border-b border-purple-15 last:border-b-0 flex items-center gap-3.5 text-[17px] text-purple-7">
                <span className="text-brand font-black text-[22px] leading-none shrink-0">
                  &times;
                </span>
                {point}
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
