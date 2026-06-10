import { HeroOrbit } from "@/components/HeroOrbit";
import { ThreeLayersSection } from "@/components/ThreeLayersSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { OperatorSection } from "@/components/OperatorSection";
import { WhyDifferentSection } from "@/components/WhyDifferentSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroContent } from "@/components/HeroContent";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Triple & Co.",
  url: "https://www.tripleandco.com",
  logo: "https://www.tripleandco.com/images/logos/logo-dark.png",
  description:
    "AI-powered CMO & CRO as a Service for B2B tech companies. Fractional executive marketing leadership combined with 8 supervised AI marketing specialists.",
  founder: {
    "@type": "Person",
    name: "Lihi Pinto",
    url: "https://www.tripleandco.com/builder-profile",
    jobTitle: "Founder & CMO",
  },
  sameAs: ["https://www.linkedin.com/company/tripleandco/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://www.tripleandco.com/contact",
  },
  knowsAbout: [
    "B2B Marketing",
    "AI Marketing Agents",
    "Fractional CMO",
    "Revenue Growth",
    "Content Strategy",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Triple & Co.",
  url: "https://www.tripleandco.com",
  description: "AI-powered CMO & CRO as a Service for B2B tech companies.",
  publisher: {
    "@type": "Organization",
    name: "Triple & Co.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is this different from a traditional marketing agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional agencies create assets, manage channels, and run campaigns. They rarely connect everything into one revenue engine. Triple & Co. runs senior CMO and CRO leadership, full-service execution, and a supervised team of specialist AI agents from inside one operating system. Lihi owns the outcome.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from a fractional CMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fractional CMO gives you part-time leadership. Triple gives you part-time leadership plus a full execution team. Lihi runs the strategy. The eight agents handle the work. You get senior judgment without paying for a full marketing department.",
      },
    },
    {
      "@type": "Question",
      name: 'What does "supervised AI team" actually mean day to day?',
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every piece of work passes a human before it ships. Lihi sits at the top. The eight specialist agents handle brand, strategy, social, research, analytics, repurposing, art direction, and video. Nothing leaves the command center without review.",
      },
    },
    {
      "@type": "Question",
      name: "Do the agents replace humans on my team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The agents replace the agency roster, the freelancer stack, and the contractor sprawl you would otherwise have to manage. Your in-house people get a senior CMO and CRO partner plus an execution layer they can lean on. If you want, we can also help you build your in-house team. That is one of the services.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with companies outside Israel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. About half the work is global. Lihi is bilingual in Hebrew and English. The agents do not care about timezones. The Israeli context is a strength, not a limit.",
      },
    },
    {
      "@type": "Question",
      name: "What does the first month look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We start with Analysis. We map your revenue funnel, your current marketing, and the highest-impact growth levers. You get an AI Revenue Blueprint that names the moves to make and the order to make them. Then Strategy. Then Execution. The team starts shipping in week one.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

      <ThreeLayersSection />
      <ArchitectureSection />
      <OperatorSection />
      <WhyDifferentSection />
      <ServicesSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
