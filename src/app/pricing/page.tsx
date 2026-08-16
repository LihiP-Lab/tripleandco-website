import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "Engagement Models & Pricing",
  description:
    "Transparent pricing for AI-powered marketing leadership: CMO, CRO, and Head of Growth at $5,000 to $15,000 per month, all 8 AI agents included.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Engagement Models & Pricing | Triple & Co.",
    description:
      "CMO, CRO, and Head of Growth engagements at $5,000 to $15,000 per month, all 8 AI agents included. Entry point: a free 30-minute Revenue Diagnostic.",
    url: "https://www.tripleandco.com/pricing",
    siteName: "Triple & Co.",
    type: "website",
  },
};

// One source of truth: this array drives the visible cards, the comparison
// table, and the JSON-LD below, so schema cannot drift from visible copy.
interface Engagement {
  id: string;
  name: string;
  serviceType: string;
  href: string;
  priceLabel: string;
  billing: string;
  minPrice: number | null;
  maxPrice: number | null;
  perMonth: boolean;
  bestFor: string;
  blurb: string;
  includes: string[];
}

const engagements: Engagement[] = [
  {
    id: "revenue-diagnostic",
    name: "Revenue Diagnostic",
    serviceType: "B2B revenue and funnel diagnostic",
    href: "/revenue-diagnostic",
    priceLabel: "Free",
    billing: "One 30-minute call",
    minPrice: 0,
    maxPrice: 0,
    perMonth: false,
    bestFor: "Every engagement starts here",
    blurb:
      "30 minutes with Lihi Pinto. We review your funnel math together and you leave with three concrete moves to add pipeline this quarter, whether we work together or not. No pitch.",
    includes: [
      "Funnel and pipeline metrics review",
      "The three highest-leverage gaps, named",
      "A concrete action plan you keep",
    ],
  },
  {
    id: "cmo-as-a-service",
    name: "CMO as a Service",
    serviceType: "Fractional CMO and AI-powered marketing execution",
    href: "/cmo-as-a-service",
    priceLabel: "$5,000 to $15,000",
    billing: "Per month",
    minPrice: 5000,
    maxPrice: 15000,
    perMonth: true,
    bestFor: "Replacing agency retainers with one accountable partner",
    blurb:
      "Full marketing leadership and execution in one subscription. Lihi owns your strategy; 8 supervised AI agents execute it daily across content, campaigns, SEO, outreach, and analytics.",
    includes: [
      "Marketing strategy and positioning owned by Lihi Pinto",
      "All 8 AI agents executing daily, supervised end to end",
      "One subscription replacing 3 to 4 agency retainers",
    ],
  },
  {
    id: "cro-as-a-service",
    name: "CRO as a Service",
    serviceType: "Fractional Chief Revenue Officer leadership",
    href: "/cro-as-a-service",
    priceLabel: "$5,000 to $15,000",
    billing: "Per month",
    minPrice: 5000,
    maxPrice: 15000,
    perMonth: true,
    bestFor: "One owner for the entire revenue number",
    blurb:
      "CRO here means Chief Revenue Officer, not conversion rate optimization. One accountable leader owns your full funnel from first touch to expansion, across marketing, sales, and customer success.",
    includes: [
      "Revenue ownership across marketing and sales pipeline",
      "All 8 AI agents executing daily, supervised end to end",
      "Pipeline, cycle time, and CAC payback as the scoreboard",
    ],
  },
  {
    id: "head-of-growth",
    name: "Head of Growth",
    serviceType: "Fractional Head of Growth leadership",
    href: "/head-of-growth",
    priceLabel: "$5,000 to $15,000",
    billing: "Per month",
    minPrice: 5000,
    maxPrice: 15000,
    perMonth: true,
    bestFor: "Earlier-stage teams building the growth engine",
    blurb:
      "One senior leader owns acquisition, activation, and retention as a measurable system instead of a headcount gamble, with the same supervised AI team doing the daily work.",
    includes: [
      "Acquisition, activation, and retention owned as one system",
      "All 8 AI agents executing daily, supervised end to end",
      "Growth experiments shipped and measured weekly",
    ],
  },
];

const agentTeam = {
  name: "AI Marketing Agent Team",
  href: "/agents",
  priceLabel: "Included",
  billing: "In every monthly rate",
  bestFor: "Execution capacity inside every engagement",
  blurb:
    "All 8 agents (Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen) work inside every CMO, CRO, and Head of Growth engagement at no additional cost. Need one specialist rather than a leadership engagement? Individual agents start at $2,500 per month.",
  singleAgentMin: 2500,
  singleAgentMax: 6500,
};

const rangeFactors = [
  {
    title: "Scope of ownership",
    description:
      "Owning one funnel stage costs less than owning the full pipeline from first touch to expansion. The mandate sets the floor.",
  },
  {
    title: "Execution volume",
    description:
      "How many channels the agent team runs daily: content, campaigns, SEO, outreach, and analytics can run together or in a narrower slice.",
  },
  {
    title: "Markets and motion",
    description:
      "A single product in one market sits lower in the range than multi-market, multi-segment go-to-market with separate messaging tracks.",
  },
];

const faqs = [
  {
    q: "How much does CMO as a Service cost at Triple & Co.?",
    a: "CMO as a Service runs $5,000 to $15,000 per month. That single subscription covers marketing strategy owned by Lihi Pinto plus daily execution by all 8 AI agents, replacing the 3 to 4 separate agency retainers most B2B companies stack up.",
  },
  {
    q: "What does the Revenue Diagnostic cost?",
    a: "Nothing. The Revenue Diagnostic is a free 30-minute call with Lihi Pinto. We review your funnel math together and you leave with three concrete moves to add pipeline this quarter, whether we work together afterwards or not.",
  },
  {
    q: "Is the AI agent team billed separately?",
    a: "No. All 8 agents are included in every CMO as a Service, CRO as a Service, and Head of Growth monthly rate. If you want a single specialist without a leadership engagement, individual agents start at $2,500 per month.",
  },
  {
    q: "What determines where an engagement lands in the $5,000 to $15,000 range?",
    a: "Three things: the scope of ownership (one funnel stage versus the full pipeline), the execution volume the agent team runs daily, and how many markets and segments your go-to-market covers. We recommend the exact structure on the diagnostic call.",
  },
  {
    q: "How does this compare to hiring a full-time CMO?",
    a: "A full-time CMO in Israeli tech averages around 42,000 NIS per month in salary, and the real first-year cost typically passes 700,000 NIS once employer costs, recruiting, and ramp time are counted. A $5,000 to $15,000 monthly engagement delivers senior leadership plus an execution team without that commitment.",
  },
];

// JSON-LD, generated from the arrays above.
const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    ...engagements.map((e) => ({
      "@type": "Service",
      "@id": `https://www.tripleandco.com/pricing#${e.id}`,
      name: e.name,
      serviceType: e.serviceType,
      provider: { "@id": "https://www.tripleandco.com/#organization" },
      areaServed: ["US", "Europe", "Israel", "Worldwide"],
      audience: {
        "@type": "Audience",
        audienceType: "B2B technology companies",
      },
      url: `https://www.tripleandco.com${e.href}`,
      description: e.blurb,
      offers: {
        "@type": "Offer",
        url: "https://www.tripleandco.com/pricing",
        priceCurrency: "USD",
        ...(e.minPrice === 0 && e.maxPrice === 0
          ? { price: "0", description: "Free 30-minute diagnostic call." }
          : {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                priceCurrency: "USD",
                minPrice: e.minPrice,
                maxPrice: e.maxPrice,
                unitCode: "MON",
                unitText: "month",
              },
            }),
      },
    })),
    {
      "@type": "Service",
      "@id": "https://www.tripleandco.com/pricing#ai-agent-team",
      name: agentTeam.name,
      serviceType: "AI marketing agent team, supervised",
      provider: { "@id": "https://www.tripleandco.com/#organization" },
      areaServed: ["US", "Europe", "Israel", "Worldwide"],
      url: `https://www.tripleandco.com${agentTeam.href}`,
      description: agentTeam.blurb,
      offers: [
        {
          "@type": "Offer",
          url: "https://www.tripleandco.com/pricing",
          price: "0",
          priceCurrency: "USD",
          description:
            "Included at no additional cost in every CMO as a Service, CRO as a Service, and Head of Growth monthly engagement.",
        },
        {
          "@type": "Offer",
          name: "Single agent retainer",
          url: "https://www.tripleandco.com/agents",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceCurrency: "USD",
            minPrice: agentTeam.singleAgentMin,
            maxPrice: agentTeam.singleAgentMax,
            unitCode: "MON",
            unitText: "month",
          },
        },
      ],
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
          />
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 mb-6">
              <span className="text-brand text-xs font-bold tracking-widest uppercase">
                Transparent &middot; One subscription &middot; Agents included
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
              Engagement Models &amp;{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-purple-8 text-lg lg:text-xl leading-relaxed mb-4">
              Triple &amp; Co. engagements run $5,000 to $15,000 per month for
              CMO as a Service, CRO as a Service, or Head of Growth. The
              8-agent AI team is included in every monthly rate. Every
              engagement starts with a free 30-minute Revenue Diagnostic.
            </p>
            <p className="text-purple-7 text-[15.5px] leading-relaxed">
              We publish our pricing because our buyers are founders and CEOs
              who compare options on numbers, not adjectives. Here is exactly
              what each model costs and what it includes.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement cards */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The four engagement models</p>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-12">
              What does each engagement{" "}
              <span className="gradient-text">cost?</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagements.map((e, i) => (
              <ScrollReveal key={e.id} delay={0.05 + i * 0.04}>
                <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-base)] overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
                  <h3 className="text-xl lg:text-2xl font-black tracking-tight text-purple-9 mb-1">
                    {e.name}
                  </h3>
                  <p className="text-purple-6 text-sm font-semibold mb-4">
                    {e.bestFor}
                  </p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl lg:text-[34px] font-black tracking-tight text-brand">
                      {e.priceLabel}
                    </span>
                    <span className="text-purple-6 text-sm font-semibold">
                      {e.billing.toLowerCase()}
                    </span>
                  </div>
                  <p className="text-purple-7 text-[15.5px] leading-relaxed mb-6">
                    {e.blurb}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {e.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-purple-7 text-[15px]"
                      >
                        <span className="text-brand font-black mt-0.5">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href={e.href}
                      className="text-brand font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                    >
                      {e.id === "revenue-diagnostic"
                        ? "Book Your Diagnostic"
                        : `Explore ${e.name}`}{" "}
                      <span>&#8594;</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* AI agent team band */}
          <ScrollReveal>
            <div className="relative bg-dark text-white rounded-3xl p-10 lg:p-14 overflow-hidden mt-6">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 85% 40%, rgba(254, 52, 101, .2) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
                <div>
                  <p className="eyebrow eyebrow-light mb-3">
                    {agentTeam.priceLabel} &middot; {agentTeam.billing}
                  </p>
                  <h3 className="text-2xl lg:text-[28px] font-black tracking-tight mb-3">
                    The AI agent team is included.
                  </h3>
                  <p className="text-purple-3 text-[15.5px] leading-relaxed">
                    {agentTeam.blurb}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <Link
                    href="/agents"
                    className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                  >
                    Meet the 8 Agents <span>&#8594;</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1000px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">At a glance</p>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-10">
              Every model, one <span className="gradient-text">table</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="overflow-x-auto rounded-2xl border border-purple-15">
              <table className="w-full text-left text-[15px]">
                <thead>
                  <tr className="bg-purple-05 text-purple-9">
                    <th className="px-6 py-4 font-black">Engagement</th>
                    <th className="px-6 py-4 font-black">Price</th>
                    <th className="px-6 py-4 font-black">Billing</th>
                    <th className="px-6 py-4 font-black">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {engagements.map((e) => (
                    <tr key={e.id} className="border-t border-purple-15">
                      <td className="px-6 py-4 font-bold text-purple-9">
                        <Link href={e.href} className="hover:text-brand transition-colors">
                          {e.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 font-bold text-brand whitespace-nowrap">
                        {e.priceLabel}
                      </td>
                      <td className="px-6 py-4 text-purple-7">{e.billing}</td>
                      <td className="px-6 py-4 text-purple-7">{e.bestFor}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-purple-15">
                    <td className="px-6 py-4 font-bold text-purple-9">
                      <Link href={agentTeam.href} className="hover:text-brand transition-colors">
                        {agentTeam.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 font-bold text-brand whitespace-nowrap">
                      {agentTeam.priceLabel}
                    </td>
                    <td className="px-6 py-4 text-purple-7">{agentTeam.billing}</td>
                    <td className="px-6 py-4 text-purple-7">{agentTeam.bestFor}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-purple-6 text-sm text-center mt-4">
              Individual agents are also available standalone from $2,500 per
              month. Details on the{" "}
              <Link href="/agents" className="text-brand font-semibold hover:underline">
                Marketing Agents page
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What moves the range */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The honest part</p>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-4">
              What moves you within the{" "}
              <span className="gradient-text">range?</span>
            </h2>
            <p className="text-purple-7 text-center max-w-[700px] mx-auto mb-12 text-[15.5px]">
              $5,000 to $15,000 is a wide range. Three factors set where an
              engagement lands, and we name the number on the diagnostic call,
              not after it.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rangeFactors.map((f, i) => (
              <ScrollReveal key={f.title} delay={0.05 + i * 0.04}>
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
                  <span className="text-brand font-black text-sm tracking-widest">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-black tracking-tight text-purple-9 mt-2 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-purple-7 text-[15px] leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[800px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Pricing FAQ</p>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-10">
              Pricing, <span className="gradient-text">answered</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <div className="relative bg-dark text-white rounded-3xl p-10 lg:p-14 overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 85% 40%, rgba(254, 52, 101, .2) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
                <div>
                  <p className="eyebrow eyebrow-light mb-3">
                    Free &middot; 30 minutes &middot; No pitch
                  </p>
                  <h2 className="text-2xl lg:text-[28px] font-black tracking-tight mb-3">
                    Get your exact number on a free diagnostic.
                  </h2>
                  <p className="text-purple-3 text-[15.5px]">
                    We review your funnel, recommend the right engagement
                    model, and name the exact monthly price for your scope.
                    You keep the action plan either way.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <Link
                    href="/revenue-diagnostic#book"
                    className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                  >
                    Book Your Revenue Diagnostic <span>&#8594;</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
