import { HeroOrbit } from "@/components/HeroOrbit";
import { ThreeLayersSection } from "@/components/ThreeLayersSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { LiveCommandCenter } from "@/components/LiveCommandCenter";
import { OperatorSection } from "@/components/OperatorSection";
import { WhyDifferentSection } from "@/components/WhyDifferentSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { HeroContent } from "@/components/HeroContent";
import type { Metadata } from "next";

// Homepage owns the "/" canonical directly (the root layout no longer sets a
// site-wide canonical, so pages without their own no longer inherit "/").
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://www.tripleandco.com/#organization",
  name: "Triple & Co.",
  url: "https://www.tripleandco.com",
  logo: "https://www.tripleandco.com/images/logos/logo-dark.png",
  image: "https://www.tripleandco.com/images/logos/logo-dark.png",
  description:
    "AI-powered CMO & CRO as a Service for B2B tech companies. Fractional executive marketing leadership combined with 8 supervised AI marketing specialists.",
  areaServed: [
    { "@type": "Country", name: "Israel" },
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "Europe" },
  ],
  priceRange: "$$$",
  founder: { "@id": "https://www.tripleandco.com/#lihi-pinto" },
  sameAs: [
    "https://www.linkedin.com/company/triple-and-co/",
    "https://www.youtube.com/@Tripleandco",
    "https://clutch.co/profile/triple-co",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://www.tripleandco.com/contact",
  },
  knowsAbout: [
    "B2B Marketing",
    "AI Marketing Agents",
    "Fractional CMO",
    "CMO as a Service",
    "CRO as a Service",
    "Revenue Growth",
    "Content Strategy",
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.tripleandco.com/#lihi-pinto",
  name: "Lihi Pinto",
  url: "https://www.tripleandco.com/about",
  image: "https://www.tripleandco.com/images/lihi-portrait.jpg",
  jobTitle: "Founder, CMO & CRO as a Service",
  worksFor: { "@id": "https://www.tripleandco.com/#organization" },
  description:
    "Founder of Triple & Co. and Israel's first native AI CMO/CRO. 15+ years in B2B SaaS and investment banking, $70M+ raised, revenue tripled repeatedly. Runs a supervised team of 8 specialist AI marketing agents with human review on every output.",
  knowsAbout: [
    "B2B SaaS Marketing",
    "Go-to-Market Strategy",
    "Revenue Operations",
    "AI Marketing Agents",
    "Brand Strategy",
    "HubSpot",
  ],
  sameAs: [
    "https://www.linkedin.com/in/lihipinto/",
    "https://x.com/lihipinto",
  ],
  subjectOf: [
    {
      "@type": "NewsArticle",
      url: "https://techcrunch.com/2019/09/09/syte-snaps-up-21-5m-for-its-smartphone-based-visual-search-engine-for-e-commerce/",
      publisher: { "@type": "Organization", name: "TechCrunch" },
    },
    {
      "@type": "NewsArticle",
      url: "https://www.calcalistech.com/ctech/articles/0,7340,L-3897041,00.html",
      publisher: { "@type": "Organization", name: "Calcalist" },
    },
    {
      "@type": "NewsArticle",
      url: "https://www.geektime.co.il/syte-and-microsoft/",
      publisher: { "@type": "Organization", name: "Geektime" },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.tripleandco.com/#website",
  name: "Triple & Co.",
  url: "https://www.tripleandco.com",
  description: "AI-powered CMO & CRO as a Service for B2B tech companies.",
  publisher: { "@id": "https://www.tripleandco.com/#organization" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
      <LiveCommandCenter />
      <OperatorSection />
      <WhyDifferentSection />
      <ServicesSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
