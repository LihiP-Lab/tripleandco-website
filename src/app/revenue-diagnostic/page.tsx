import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyInline } from "@/components/CalendlyInline";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Revenue Diagnostic",
  description:
    "Book a free 30-minute Revenue Diagnostic with Lihi Pinto. Review your funnel math and leave with three concrete moves to add pipeline this quarter.",
  alternates: { canonical: "/revenue-diagnostic" },
  openGraph: {
    title: "Book a Free Revenue Diagnostic | Triple & Co.",
    description:
      "30 minutes with Lihi Pinto. Review your funnel and leave with three concrete moves to add pipeline this quarter. No pitch.",
    url: "https://www.tripleandco.com/revenue-diagnostic",
    siteName: "Triple & Co.",
    type: "website",
  },
};

const diagnosticSteps = [
  {
    number: "01",
    title: "Funnel review",
    description: "We review your current pipeline metrics, CAC, and conversion rates together.",
  },
  {
    number: "02",
    title: "Gap analysis",
    description: "I identify the three highest-leverage gaps between where you are and where revenue should be.",
  },
  {
    number: "03",
    title: "Action plan",
    description: "You leave with three concrete moves to add pipeline this quarter, whether we work together or not.",
  },
];

const agents = [
  { name: "Camille", role: "Content", image: "/images/agents/camille.png" },
  { name: "Rex", role: "Growth", image: "/images/agents/rex.png" },
  { name: "Zara", role: "Social", image: "/images/agents/zara.png" },
  { name: "Nova", role: "Research", image: "/images/agents/nova.png" },
  { name: "Atlas", role: "Analytics", image: "/images/agents/atlas.png" },
  { name: "Sage", role: "PR & Comms", image: "/images/agents/sage.png" },
  { name: "Vega", role: "Creative", image: "/images/agents/vega.png" },
  { name: "Lumen", role: "Video", image: "/images/agents/lumen.png" },
];

const diagnosticSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Revenue Diagnostic",
  serviceType: "B2B revenue and funnel diagnostic",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B technology companies",
  },
  description:
    "A free 30-minute Revenue Diagnostic with Lihi Pinto. Review your funnel math together and leave with three concrete moves to add pipeline this quarter.",
  url: "https://www.tripleandco.com/revenue-diagnostic",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free 30-minute Revenue Diagnostic call.",
  },
};

const diagnosticBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.tripleandco.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Revenue Diagnostic",
      item: "https://www.tripleandco.com/revenue-diagnostic",
    },
  ],
};

export default function RevenueDiagnosticPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diagnosticSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(diagnosticBreadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-purple-9 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-9 via-purple-85 to-purple-8 opacity-80" />
        <div className="mx-auto max-w-[1200px] px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 mb-6">
                <span className="text-brand text-xs font-bold tracking-widest uppercase">
                  Free &middot; 30 minutes &middot; No pitch
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-white mb-6">
                Your{" "}
                <span className="text-brand">Revenue Diagnostic</span>
              </h1>
              <p className="text-lg text-purple-3 leading-relaxed mb-4">
                30 minutes with the operator who already built the pipeline you want.
                Bring your funnel, leave with three concrete moves to add revenue this quarter.
              </p>
              <p className="text-purple-4 leading-relaxed mb-8">
                No pitch. No &quot;let me send you a proposal.&quot; Just the moves.
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Book your diagnostic
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-[300px] h-[380px] rounded-2xl overflow-hidden border-2 border-brand/30 shadow-2xl">
                  <Image
                    src="/images/lihi.png"
                    alt="Lihi Pinto, Fractional CMO"
                    width={300}
                    height={380}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-purple-9">30 minutes</p>
                    <p className="text-[11px] text-purple-6">with Lihi Pinto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">How it works</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9">
                Three steps to{" "}
                <span className="gradient-text">pipeline clarity</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diagnosticSteps.map((step) => (
              <ScrollReveal key={step.number}>
                <div className="rounded-2xl bg-white shadow-[var(--shadow-base)] border border-purple-15 p-8 text-center h-full">
                  <div className="text-5xl font-black text-brand/15 mb-4">{step.number}</div>
                  <h3 className="text-lg font-extrabold text-purple-9 mb-3">{step.title}</h3>
                  <p className="text-sm text-purple-6 leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the AI team */}
      <section className="py-20 lg:py-28 bg-purple-9">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <div className="text-center mb-6">
              <p className="text-brand text-xs font-bold tracking-widest uppercase mb-4">
                Your AI-Powered Marketing Team
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-white mb-4">
                One CMO. <span className="text-brand">Eight AI agents.</span>
              </h2>
              <p className="text-lg text-purple-4 max-w-2xl mx-auto leading-relaxed">
                When you work with Triple&Co, you don&apos;t just get Lihi. You get an AI-powered marketing team
                covering every discipline, executing at a pace no human team can match.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <ScrollReveal key={agent.name}>
                <div className="rounded-2xl bg-purple-85/50 border border-purple-7/30 p-4 text-center group hover:border-brand/30 transition-colors">
                  <div className="h-28 flex items-center justify-center mb-3">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      width={100}
                      height={100}
                      className="h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="text-sm font-bold text-white">{agent.name}</p>
                  <p className="text-xs text-purple-4 mt-0.5">{agent.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / What you get */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="eyebrow mb-4">Why founders book this call</p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9">
                What you&apos;ll walk away with
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: "Funnel gap analysis",
                description: "A clear picture of where pipeline is leaking and why your CAC keeps climbing.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: "Three highest-leverage moves",
                description: "Specific, actionable steps to add pipeline this quarter, not generic advice.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Honest fit assessment",
                description: "Within the first 10 minutes, Lihi will tell you whether Triple&Co is the right fit.",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Zero cost, zero pressure",
                description: "This isn't a sales call in disguise. No pitch, no follow-up sequence. Just value.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="flex items-start gap-4 rounded-2xl bg-white shadow-[var(--shadow-base)] border border-purple-15 p-6">
                  <div className="h-12 w-12 rounded-[12px] bg-pink-05 flex items-center justify-center shrink-0 text-brand">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-purple-9 mb-1">{item.title}</h3>
                    <p className="text-sm text-purple-6 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="py-20 lg:py-28 bg-purple-05 scroll-mt-20">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-4">Book your diagnostic</p>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9 mb-6">
                  Ready to fix{" "}
                  <span className="gradient-text">your pipeline?</span>
                </h2>
                <p className="text-lg text-purple-7 leading-relaxed mb-4">
                  30 minutes. Three pipeline moves. No pitch.
                </p>
                <p className="text-purple-6 leading-relaxed mb-8">
                  Pick a time on the calendar and you&apos;re booked on the spot. No forms to wait on, no back-and-forth.
                </p>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-purple-15">
                  <div className="h-14 w-14 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/images/lihi.png"
                      alt="Lihi Pinto"
                      width={56}
                      height={56}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-purple-9">Lihi Pinto</p>
                    <p className="text-sm text-purple-6">Founder and CEO, Triple&amp;Co</p>
                  </div>
                </div>
              </div>
              <CalendlyInline />
          </div>

          {/* Secondary fallback: contact form for those who'd rather we reach out */}
          <div className="mt-16 pt-12 border-t border-purple-15 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="font-bold text-purple-9">Prefer we reach out? Leave your details.</p>
              <p className="text-sm text-purple-6 mt-1">
                Lihi will get back to you within 24 hours to find a time.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
