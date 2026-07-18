"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { ScrollReveal } from "./ScrollReveal";

const agents = [
  {
    name: "Camille",
    role: "Brand Voice Generator",
    shortRole: "Writes the brand voice. Not an LLM\u2019s.",
    image: "/images/agents/camille.png",
  },
  {
    name: "Rex",
    role: "Growth Campaign Strategist",
    shortRole: "Briefs the strategy. Plans campaigns the team can execute.",
    image: "/images/agents/rex.png",
  },
  {
    name: "Zara",
    role: "Social Media Commander",
    shortRole: "Ships the social channels.",
    image: "/images/agents/zara.png",
  },
  {
    name: "Nova",
    role: "Content Research Analyst",
    shortRole: "Reads the room. Research, trends, competitive intel.",
    image: "/images/agents/nova.png",
  },
  {
    name: "Atlas",
    role: "Performance Analytics Agent",
    shortRole: "Reads the numbers. Tells us what\u2019s working.",
    image: "/images/agents/atlas.png",
  },
  {
    name: "Sage",
    role: "Content Repurposing Engine",
    shortRole: "Repurposes everything. One piece becomes ten.",
    image: "/images/agents/sage.png",
  },
  {
    name: "Vega",
    role: "Art Director",
    shortRole: "Directs how it looks. Art direction.",
    image: "/images/agents/vega.png",
  },
  {
    name: "Lumen",
    role: "Video Director",
    shortRole: "Turns it into video.",
    image: "/images/agents/lumen.png",
  },
];

export function AgentCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 220;
    el.scrollBy({
      left: direction === "left" ? -cardWidth * 2 : cardWidth * 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-8">
        <ScrollReveal>
          <p className="eyebrow text-center mb-3">Your AI team</p>
          <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
            Meet the <span className="gradient-text">Agents</span> Behind the
            Execution
          </h2>
          <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
            Eight AI specialists, each trained for a specific marketing
            function, supervised by Lihi, zero unsupervised output.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-[var(--shadow-base)] border border-purple-15 flex items-center justify-center transition-all hover:shadow-[var(--shadow-hover)] hover:border-brand/30 ${
              canScrollLeft
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll agents left"
          >
            <svg className="h-5 w-5 text-purple-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 -mx-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {agents.map((agent, i) => (
              <ScrollReveal key={agent.name} delay={0.05 + i * 0.06}>
                <Link
                  href={`/agents#${agent.name.toLowerCase()}`}
                  className="group relative flex-shrink-0 w-[200px] rounded-2xl p-5 text-center snap-start transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-extrabold text-base text-purple-9 mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-brand mb-2">
                    {agent.role}
                  </p>
                  <p className="text-xs text-purple-6 leading-relaxed">
                    {agent.shortRole}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    View full profile
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-[var(--shadow-base)] border border-purple-15 flex items-center justify-center transition-all hover:shadow-[var(--shadow-hover)] hover:border-brand/30 ${
              canScrollRight
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll agents right"
          >
            <svg className="h-5 w-5 text-purple-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-8">
            <Link
              href="/agents"
              className="text-brand font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              Meet all agents in detail <span>&#8594;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
