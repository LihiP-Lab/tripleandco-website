import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AgentCarousel } from "@/components/AgentCarousel";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "CRO as a Service for B2B Tech",
  description:
    "CRO as a Service for B2B tech. One leader owns the entire revenue number across marketing, sales, and customer success, backed by 8 supervised AI agents.",
  alternates: { canonical: "/cro-as-a-service" },
  openGraph: {
    title: "CRO as a Service for B2B Tech | Triple & Co.",
    description:
      "One accountable leader owns your full revenue funnel, from first touch to expansion, executed daily by a supervised AI team.",
    url: "https://www.tripleandco.com/cro-as-a-service",
  },
};

const faqs = [
  {
    q: "What is CRO as a Service?",
    a: "CRO as a Service is a subscription model that puts one accountable Chief Revenue Officer in charge of your entire funnel, from demand generation through sales to customer success and expansion, without hiring a full-time executive. At Triple & Co., Lihi Pinto owns the revenue number and the go-to-market strategy, while a supervised team of 8 AI agents and a digital COO execute the pipeline, forecasting, and reporting daily. You get revenue ownership plus execution in one engagement.",
  },
  {
    q: "How is a CRO different from a CMO?",
    a: "A CMO owns marketing: positioning, demand, brand, and pipeline creation. A CRO owns the whole revenue engine: marketing, sales, and customer success under one strategy and one number. If your marketing, sales, and CS teams each hit their own metrics while total revenue still misses plan, that is a coordination gap a CRO closes. Triple & Co. offers both entry points and will recommend the right one on your diagnostic call.",
  },
  {
    q: "When should a B2B tech company bring in a CRO?",
    a: "Usually between Series A and Series C, when there is real pipeline but revenue is leaking between teams: marketing passes leads sales does not trust, deals stall in handoff, and churn quietly erases new bookings. A fractional CRO gives you senior revenue leadership and the systems to fix those leaks, without the $350K+ cost and long search of a full-time hire.",
  },
  {
    q: "What does CRO as a Service actually deliver in the first 90 days?",
    a: "The first two weeks are diagnostic: full-funnel audit, pipeline math, handoff analysis, and churn review. By week three you have a prioritized revenue plan with shared targets across marketing, sales, and CS, and the agent team is already building the dashboards and demand programs behind it. By day 90 you should have clean stage criteria, a forecast your board can trust, and weekly shipped work, not a strategy deck waiting on headcount.",
  },
  {
    q: "Do you work with B2B tech companies outside of Israel?",
    a: "Yes, most of our client base sells into the US and Europe. Our operating model is async by design: fluent English, coverage across US and European business hours, and the Start-Up Nation playbook of scaling globally from day one. The AI execution layer runs around the clock, so turnaround is usually faster than a local hire.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CRO as a Service",
  serviceType: "Fractional Chief Revenue Officer",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B technology companies",
  },
  description:
    "Subscription CRO leadership for B2B tech: one accountable leader owns the full revenue funnel across marketing, sales, and customer success, executed by a supervised AI team.",
  url: "https://www.tripleandco.com/cro-as-a-service",
  offers: {
    "@type": "Offer",
    url: "https://www.tripleandco.com/pricing",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "USD",
      minPrice: 5000,
      maxPrice: 15000,
      unitCode: "MON",
      unitText: "month",
    },
  },
};

const comparisonRows = [
  {
    label: "Who owns the revenue number",
    siloed: "Split across three teams",
    triple: "One accountable CRO",
  },
  {
    label: "Marketing to sales handoff",
    siloed: "Leads pass, trust does not",
    triple: "Shared definition of qualified",
  },
  {
    label: "Forecasting",
    siloed: "Three spreadsheets, one guess",
    triple: "One board-ready forecast",
  },
  {
    label: "Customer success",
    siloed: "An afterthought post-sale",
    triple: "Built into the revenue plan",
  },
  {
    label: "Output cadence",
    siloed: "Monthly reviews",
    triple: "Daily shipped work",
  },
];

const systemPillars = [
  {
    title: "Lihi Pinto Owns Your Revenue Number",
    description:
      "15+ years scaling B2B tech, $70M+ raised at companies she led. Positioning, pipeline architecture, pricing, forecasting, and board reporting sit with one accountable executive who owns the outcome, not three teams optimizing three metrics.",
  },
  {
    title: "A Digital COO Connects the Funnel",
    description:
      "Briefs, QA, sequencing, and cross-team coordination run automatically inside one system. Marketing, sales, and customer success work from the same data and the same messaging, so deals stop leaking in the handoffs between them.",
  },
  {
    title: "8 Specialized AI Agents Execute Daily",
    description:
      "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen cover demand, content, campaigns, analytics, and reporting. Atlas runs the forecasts and funnel dashboards the whole number depends on, and nothing ships without human review.",
  },
];

const funnelStages = [
  {
    stage: "Demand",
    line: "Pipeline built on ICP fit and message-market fit, not vanity MQLs.",
  },
  {
    stage: "Conversion",
    line: "Clean stage criteria and lead scoring sales actually trusts and works.",
  },
  {
    stage: "Expansion",
    line: "Customer success wired into the revenue plan, so net retention compounds.",
  },
];

export default function CROPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "CRO as a Service" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">CRO as a Service for B2B Tech</p>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                CRO as a Service: One Leader Owns Your Whole{" "}
                <span className="gradient-text">Revenue Number</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                Marketing hits its MQL target. Sales hits its activity target.
                Customer success hits its ticket target. And revenue still
                misses the plan.
              </p>
              <p className="text-base text-purple-6 leading-relaxed mb-8">
                That is not a team problem. It is an ownership problem. CRO as a
                Service puts one accountable leader over the entire funnel, from
                first touch to closed-won to expansion, backed by a supervised
                AI team that builds the forecasts, dashboards, and demand
                programs your revenue depends on. One number. One owner.
              </p>
              <div className="flex flex-wrap items-center gap-5 mb-8">
                <Link
                  href="/revenue-diagnostic"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                >
                  Book a 30-Minute Revenue Diagnostic <span>&#8594;</span>
                </Link>
                <Link
                  href="/cmo-as-a-service"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Only need marketing leadership? See CMO as a Service &#8594;
                </Link>
              </div>
              <p className="text-xs text-purple-6 font-medium uppercase tracking-wider">
                15+ years in B2B tech &middot; $70M+ raised at companies Lihi led
                &middot; One revenue owner, not three
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[var(--shadow-base)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto, CRO as a Service for B2B tech"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow mb-3">The problem</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              Revenue Does Not Leak From Teams. It Leaks From the{" "}
              <span className="gradient-text">Gaps Between Them.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-purple-7 leading-relaxed mb-6">
              Every team is doing its job. That is exactly why the number keeps
              missing.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-purple-7 leading-relaxed mb-6">
              Marketing is measured on leads, so it optimizes for volume. Sales
              is measured on activity, so it chases everything and trusts
              nothing. Customer success is measured on tickets, so expansion
              never gets built. Three teams, three scoreboards, and no single
              person who owns the connection between a marketing dollar and a
              renewal.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-purple-7 leading-relaxed mb-6">
              So the founder becomes the CRO by default: relaying context
              between teams, reconciling three forecasts into one board slide,
              and discovering the leaks only after the quarter closes. That is
              not a strategy. It is a full-time job nobody was hired for.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="rounded-2xl bg-purple-05 p-6 lg:p-8 border border-purple-15">
              <p className="text-purple-9 font-semibold leading-relaxed">
                You do not need more activity in each team. You need one person
                accountable for the number they add up to.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The solution */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The Triple &amp; Co. model</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              One Owner Over the Funnel.{" "}
              <span className="gradient-text">One Supervised AI Team Underneath.</span>
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
              Triple &amp; Co.&apos;s CRO as a Service runs on our Woman in the
              Loop (WIL) model: one senior human owning the revenue number, one
              integrated AI execution layer building the work behind it.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {systemPillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={0.1 + i * 0.12}>
                <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)] h-full">
                  <h3 className="text-xl font-extrabold text-purple-9 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Funnel band */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              {funnelStages.map((s) => (
                <div
                  key={s.stage}
                  className="rounded-xl border border-purple-15 bg-white p-6"
                >
                  <p className="text-[11px] font-extrabold uppercase tracking-[.14em] text-brand mb-2">
                    {s.stage}
                  </p>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {s.line}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Comparison table */}
          <ScrollReveal>
            <h3 className="text-2xl font-extrabold text-purple-9 mb-6 text-center">
              Siloed Teams vs. One Revenue Owner
            </h3>
            <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] overflow-hidden card-gradient-top">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-purple-15">
                      <th className="px-6 py-4 font-bold text-purple-9"></th>
                      <th className="px-6 py-4 font-bold text-purple-6">
                        Marketing, sales, CS in silos
                      </th>
                      <th className="px-6 py-4 font-bold text-brand">
                        CRO as a Service (WIL)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-purple-15 last:border-0"
                      >
                        <td className="px-6 py-4 font-semibold text-purple-9">
                          {row.label}
                        </td>
                        <td className="px-6 py-4 text-purple-7">{row.siloed}</td>
                        <td className="px-6 py-4 font-semibold text-purple-9 bg-pink-05/40">
                          {row.triple}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mt-8 mb-8">
              Stop reconciling three scoreboards. Own one.
            </p>
            <div className="text-center">
              <Link
                href="/revenue-diagnostic"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Book a 30-Minute Revenue Diagnostic <span>&#8594;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Agent Carousel */}
      <AgentCarousel />

      {/* Stats band */}
      <section className="py-12 bg-purple-05">
        <div className="mx-auto max-w-[1000px] px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">15+</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">$70M+</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">
                  Capital Raised
                </p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">3</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">
                  Teams, One Number
                </p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">8</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">
                  AI Agents, Supervised
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              CRO as a Service, <span className="gradient-text">Explained</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-8">
              Only need senior marketing leadership? See our{" "}
              <Link
                href="/cmo-as-a-service"
                className="text-brand font-semibold hover:underline"
              >
                CMO as a Service
              </Link>{" "}
              engagement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              <span className="gradient-text">Own the Number.</span>
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              One leader accountable for revenue across marketing, sales, and
              customer success. One team executing it every week.
            </p>
            <Link
              href="/revenue-diagnostic"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a 30-Minute Revenue Diagnostic <span>&#8594;</span>
            </Link>
            <p className="text-sm text-purple-6 mt-6">
              Bring your funnel numbers. We&apos;ll show you exactly where
              revenue is leaking.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
