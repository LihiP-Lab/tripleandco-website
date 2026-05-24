"use client";

import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function HeroContent() {
  return (
    <div>
      <ScrollReveal delay={0.1}>
        <p className="eyebrow-light eyebrow mb-6">
          AI-powered CMO + CRO leadership
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tighter leading-[1.05] text-white mb-7">
          B2B growth needs a{" "}
          <span className="gradient-text">new</span> kind of marketing
          partner.
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <p className="text-lg lg:text-[19px] leading-relaxed text-purple-3 max-w-[560px] mb-9 font-normal">
          Senior CMO and CRO leadership. Full-service execution. A supervised
          team of specialist AI agents. One partner, built for B2B revenue in
          the AI era.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.4}>
        <div className="flex items-center gap-5 flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
          >
            Book a Diagnostic Call with Lihi <span>&#8594;</span>
          </Link>
          <Link
            href="/agents"
            className="text-pink-3 font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            Our Services <span>&#8594;</span>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
