"use client";

import Image from "next/image";

const agents = [
  { name: "Camille", src: "/images/agents/camille.png", orbit: 1 },
  { name: "Vega", src: "/images/agents/vega.png", orbit: 2 },
  { name: "Rex", src: "/images/agents/rex.png", orbit: 3 },
  { name: "Zara", src: "/images/agents/zara.png", orbit: 4 },
  { name: "Nova", src: "/images/agents/nova.png", orbit: 5 },
  { name: "Atlas", src: "/images/agents/atlas.png", orbit: 6 },
  { name: "Sage", src: "/images/agents/sage.png", orbit: 7 },
  { name: "Lumen", src: "/images/agents/lumen.png", orbit: 8 },
];

const orbitStyles: Record<
  number,
  { radius: string; duration: string; delay: string; radiusMobile: string }
> = {
  1: { radius: "235px", duration: "27s", delay: "0s", radiusMobile: "158px" },
  2: { radius: "265px", duration: "30s", delay: "-3s", radiusMobile: "178px" },
  3: { radius: "245px", duration: "26s", delay: "-7s", radiusMobile: "165px" },
  4: {
    radius: "280px",
    duration: "33s",
    delay: "-10s",
    radiusMobile: "188px",
  },
  5: {
    radius: "228px",
    duration: "29s",
    delay: "-14s",
    radiusMobile: "154px",
  },
  6: {
    radius: "270px",
    duration: "25s",
    delay: "-17s",
    radiusMobile: "182px",
  },
  7: {
    radius: "250px",
    duration: "31s",
    delay: "-21s",
    radiusMobile: "170px",
  },
  8: {
    radius: "285px",
    duration: "28s",
    delay: "-24s",
    radiusMobile: "192px",
  },
};

function AIPanel({
  className,
  delay,
  children,
}: {
  className: string;
  delay: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`absolute hidden lg:block w-[220px] z-[3] rounded-xl border border-brand/20 font-mono text-[11px] leading-relaxed text-purple-2 overflow-hidden ${className}`}
      style={{
        background: "rgba(14, 11, 16, 0.92)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.55)",
        animation: `ai-panel-breathe 7s ease-in-out infinite`,
        animationDelay: delay,
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 gradient-bar" />
      {children}
    </div>
  );
}

function AIDot() {
  return (
    <span
      className="w-[7px] h-[7px] rounded-full bg-brand shrink-0"
      style={{
        boxShadow: "0 0 10px rgba(254, 52, 101, 0.7)",
        animation: "ai-dot-pulse 1.8s ease-in-out infinite",
      }}
    />
  );
}

function AICursor() {
  return (
    <span
      className="inline-block bg-brand w-[7px] h-3 align-[-2px] ml-0.5"
      style={{ animation: "ai-cursor-blink 1s steps(2) infinite" }}
    />
  );
}

export function HeroOrbit() {
  return (
    <div className="relative w-full max-w-[560px] aspect-square justify-self-end mx-auto">
      {/* Glow behind Lihi */}
      <div
        className="absolute top-1/2 left-1/2 w-4/5 h-[90%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(254, 52, 101, .18) 0%, transparent 65%)",
          filter: "blur(20px)",
        }}
      />

      {/* Lihi center photo */}
      <div className="absolute top-1/2 left-1/2 w-[56%] h-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[20px] overflow-hidden z-[2] shadow-[0_16px_56px_rgba(0,0,0,.5)]">
        <Image
          src="/images/lihi.png"
          alt="Lihi Pinto, founder of Triple & Co."
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Orbiting agents */}
      {agents.map((agent) => {
        const style = orbitStyles[agent.orbit];
        return (
          <div
            key={agent.name}
            className="absolute top-1/2 left-1/2 w-[92px] h-[92px] -mt-[46px] -ml-[46px] z-[1] md:w-[92px] md:h-[92px] max-md:w-[62px] max-md:h-[62px] max-md:-mt-[31px] max-md:-ml-[31px]"
            style={
              {
                "--radius": style.radius,
                filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, .45))",
                animation: `orbit-spin ${style.duration} linear infinite`,
                animationDelay: style.delay,
              } as React.CSSProperties
            }
          >
            <Image
              src={agent.src}
              alt={agent.name}
              width={92}
              height={92}
              className="w-full h-full object-contain"
            />
          </div>
        );
      })}

      {/* AI Panels */}
      <AIPanel className="top-[2%] -right-[10%]" delay="0s">
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-brand/[.14] text-[10px] tracking-wide text-pink-3 font-semibold">
          <AIDot />
          <span>camille.json</span>
        </div>
        <div className="px-3.5 py-3 space-y-0.5">
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="text-pink-3">&quot;task&quot;</span>:{" "}
            <span className="text-[#9be3b3]">&quot;brand_voice&quot;</span>,
          </div>
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="text-pink-3">&quot;tone&quot;</span>:{" "}
            <span className="text-[#9be3b3]">&quot;direct&quot;</span>,
          </div>
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="text-pink-3">&quot;pillars&quot;</span>:{" "}
            <span className="text-[#ffd57a]">8</span>,
          </div>
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="text-pink-3">&quot;confidence&quot;</span>:{" "}
            <span className="text-[#ffd57a]">0.96</span>
            <AICursor />
          </div>
        </div>
      </AIPanel>

      <AIPanel className="bottom-[8%] -right-[14%]" delay="-2.5s">
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-brand/[.14] text-[10px] tracking-wide text-pink-3 font-semibold">
          <AIDot />
          <span>atlas ~ pipeline</span>
        </div>
        <div className="px-3.5 py-3 space-y-0.5">
          <div>
            <span className="text-brand mr-1">$</span>atlas analyze
          </div>
          <div className="text-purple-5">&#8594; Q1 pipeline: $2.4M</div>
          <div className="text-purple-5">&#8594; MQL&#8594;SQL: 31%</div>
          <div className="text-purple-5">&#8594; Cycle: 47 days</div>
          <div>
            &#10003; Report ready
            <AICursor />
          </div>
        </div>
      </AIPanel>

      <AIPanel className="top-[52%] -left-[16%]" delay="-4.5s">
        <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-brand/[.14] text-[10px] tracking-wide text-pink-3 font-semibold">
          <AIDot />
          <span>rex.md · growth sprint</span>
        </div>
        <div className="px-3.5 py-3 space-y-0.5">
          <div className="text-purple-5"># Q1 Plan</div>
          <div>[x] Audit Q4 campaigns</div>
          <div>[x] Map ICP &#8594; channels</div>
          <div>[ ] Brief Camille</div>
          <div>
            [ ] Weekly sync
            <AICursor />
          </div>
        </div>
      </AIPanel>
    </div>
  );
}
