import Link from "next/link";
import { HeroOrbit } from "@/components/HeroOrbit";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { PillarsSection } from "@/components/PillarsSection";
import { StatsSection } from "@/components/StatsSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { OperatorSection } from "@/components/OperatorSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      {/* BLOCK 1: HERO */}
      <section className="relative bg-dark text-white py-24 lg:py-[96px] lg:pb-[120px] overflow-hidden">
        {/* Background glows */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 80% 50%, rgba(254, 52, 101, .22) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 40% 50% at 20% 100%, rgba(137, 109, 156, .25) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1200px] px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div>
            <p className="eyebrow-light eyebrow mb-6">
              AI-powered CMO + CRO leadership
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black tracking-tighter leading-[1.05] text-white mb-7">
              B2B growth needs a{" "}
              <span className="gradient-text">new</span> kind of
              marketing partner.
            </h1>
            <p className="text-lg lg:text-[19px] leading-relaxed text-purple-3 max-w-[560px] mb-9 font-normal">
              Senior CMO and CRO leadership. Full-service execution. A
              supervised team of specialist AI agents. One partner, built for B2B
              revenue in the AI era.
            </p>
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
          </div>

          <HeroOrbit />
        </div>
      </section>

      {/* BLOCK 2: DIAGNOSIS */}
      <DiagnosisSection />

      {/* BLOCK 3: TRIPLE IS DIFFERENT + 3 PILLARS */}
      <PillarsSection />

      {/* BLOCK 4: LIVE OPS STATS */}
      <StatsSection />

      {/* BLOCK 5: ARCHITECTURE (WIL) */}
      <ArchitectureSection />

      {/* BLOCK 6: MEET LIHI */}
      <OperatorSection />

      {/* BLOCK 7: SERVICES */}
      <ServicesSection />

      {/* BLOCK 8: FAQ */}
      <FAQ />

      {/* BLOCK 9: FINAL CTA */}
      <FinalCTA />
    </>
  );
}
