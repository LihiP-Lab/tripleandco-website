import { HeroOrbit } from "@/components/HeroOrbit";
import { DiagnosisSection } from "@/components/DiagnosisSection";
import { PillarsSection } from "@/components/PillarsSection";
import { StatsSection } from "@/components/StatsSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { OperatorSection } from "@/components/OperatorSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroContent } from "@/components/HeroContent";

export default function Home() {
  return (
    <>
      {/* BLOCK 1: HERO */}
      <section className="relative bg-dark text-white py-24 lg:py-[96px] lg:pb-[120px] overflow-hidden">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
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
          <HeroContent />
          <HeroOrbit />
        </div>
      </section>

      <DiagnosisSection />
      <PillarsSection />
      <StatsSection />
      <ArchitectureSection />
      <OperatorSection />
      <ServicesSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
