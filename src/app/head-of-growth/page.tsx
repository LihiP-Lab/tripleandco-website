import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AgentCarousel } from "@/components/AgentCarousel";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "Head of Growth as a Service for B2B SaaS",
  description:
    "Fractional Head of Growth for B2B SaaS. One leader owns acquisition, activation, and retention as a measurable system, backed by a supervised AI team.",
  alternates: { canonical: "/head-of-growth" },
  openGraph: {
    title: "Head of Growth as a Service (Fractional CGO) | Triple & Co.",
    description:
      "A senior growth leader owns your acquisition, activation, and retention loops, executed daily by a supervised AI team. Growth as a system, not a headcount gamble.",
    url: "https://www.tripleandco.com/head-of-growth",
  },
};

const faqs = [
  {
    q: "What is a fractional Head of Growth?",
    a: "A fractional Head of Growth is a senior growth leader who owns your acquisition, activation, and retention system part-time, without a full-time executive salary. At Triple & Co., Lihi Pinto sets the growth strategy, the experiment roadmap, and the metrics that matter, while a supervised team of 8 AI agents runs the campaigns, builds the landing pages and dashboards, and ships tests every week. You get senior growth ownership plus daily execution in one engagement.",
  },
  {
    q: "How is a Head of Growth different from a CMO?",
    a: "A CMO owns marketing broadly: brand, positioning, demand, and pipeline. A Head of Growth (or CGO) owns the growth engine specifically: the loops and experiments that move acquisition, activation, conversion, and retention as one measurable system. In practice the roles overlap, so on your diagnostic call we recommend the right entry point. If your problem is that growth is stalling and nobody owns the experiment velocity, a Head of Growth is usually the fit.",
  },
  {
    q: "When should a B2B SaaS company hire a Head of Growth?",
    a: "Usually once you have product-market fit and early traction but growth is plateauing, when the founder is still running acquisition personally, or when marketing ships activity but no one owns the funnel math end to end. A fractional Head of Growth gives you senior ownership of the growth system and the experiment cadence to unlock the next stage, without the $300K+ cost and long search of a full-time hire.",
  },
  {
    q: "What does a Head of Growth engagement deliver in the first 90 days?",
    a: "The first two weeks are diagnostic: funnel audit, activation and retention analysis, channel economics, and a ranked list of growth bets. By week three you have a prioritized experiment roadmap with clear metrics, and the agent team is already shipping the tests, landing pages, and dashboards behind it. By day 90 you should have a working experiment cadence, instrumented funnel metrics, and a handful of validated wins, not a growth deck waiting on headcount.",
  },
  {
    q: "Do you work with B2B SaaS companies outside of Israel?",
    a: "Yes, most of our client base sells into the US and Europe. Our operating model is async by design: fluent English, coverage across US and European business hours, and the Start-Up Nation playbook of scaling globally from day one. The AI execution layer runs around the clock, so experiment turnaround is usually faster than a local hire.",
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
  name: "Head of Growth as a Service",
  serviceType: "Fractional Head of Growth / Chief Growth Officer",
  provider: {
    "@type": "Organization",
    name: "Triple & Co.",
    url: "https://www.tripleandco.com",
  },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B SaaS companies",
  },
  description:
    "Fractional Head of Growth leadership for B2B SaaS: one leader owns acquisition, activation, and retention as a measurable experiment system, executed by a supervised AI team.",
  url: "https://www.tripleandco.com/head-of-growth",
};

const comparisonRows = [
  {
    label: "Who owns growth",
    siloed: "The founder, on top of everything else",
    triple: "One accountable growth leader",
  },
  {
    label: "How growth happens",
    siloed: "Random acts of marketing",
    triple: "A ranked experiment roadmap",
  },
  {
    label: "Experiment velocity",
    siloed: "A test when someone has time",
    triple: "Tests shipped every week",
  },
  {
    label: "The funnel",
    siloed: "Acquisition only, retention ignored",
    triple: "Acquisition to activation to retention",
  },
  {
    label: "Reporting",
    siloed: "Channel vanity metrics",
    triple: "One instrumented growth dashboard",
  },
];

const systemPillars = [
  {
    title: "Lihi Pinto Owns Your Growth System",
    description:
      "15+ years scaling B2B SaaS, $70M+ raised at companies she led. The growth strategy, the experiment roadmap, and the metrics that matter sit with one accountable leader who owns the outcome, not a rotating cast of freelancers optimizing single channels.",
  },
  {
    title: "A Digital COO Runs the Experiment Loop",
    description:
      "Hypotheses, briefs, QA, and sequencing run automatically inside one system. Every experiment is scoped, shipped, measured, and either scaled or killed, so growth compounds through learning velocity instead of stalling between one-off projects.",
  },
  {
    title: "8 Specialized AI Agents Execute Daily",
    description:
      "Rex, Camille, Nova, Zara, Atlas, Vega, Sage, and Lumen cover campaigns, content, research, landing pages, and analytics. Atlas builds the funnel dashboards every experiment depends on, and nothing ships without human review.",
  },
];

const loopStages = [
  {
    stage: "Acquisition",
    line: "Channel economics and message-market fit, so new pipeline is built on ICP fit and not vanity clicks.",
  },
  {
    stage: "Activation",
    line: "Onboarding and first-value moments instrumented, so signups become engaged, expanding accounts.",
  },
  {
    stage: "Retention",
    line: "Retention and expansion loops wired into the plan, so growth compounds instead of leaking out the bottom.",
  },
];

export default function HeadOfGrowthPage() {
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
              { label: "Head of Growth" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">
                Head of Growth as a Service for B2B &amp; SaaS
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                A Fractional Head of Growth Who Owns the Whole{" "}
                <span className="gradient-text">Growth System</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                You have product-market fit. You have traffic. And growth has
                quietly flattened, while the founder is still the one running
                acquisition on nights and weekends.
              </p>
              <p className="text-base text-purple-6 leading-relaxed mb-8">
                That is not a channel problem. It is an ownership problem. Head
                of Growth as a Service puts one accountable leader over
                acquisition, activation, and retention, backed by a supervised
                AI team that ships experiments, landing pages, and dashboards
                every week. Growth as a system, not a headcount gamble.
              </p>
              <div className="flex flex-wrap items-center gap-5 mb-8">
                <Link
                  href="/revenue-diagnostic"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                >
                  Book a 30-Minute Growth Diagnostic <span>&#8594;</span>
                </Link>
                <Link
                  href="/cro-as-a-service"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Need the full revenue funnel? See CRO as a Service &#8594;
                </Link>
              </div>
              <p className="text-xs text-purple-6 font-medium uppercase tracking-wider">
                15+ years in B2B SaaS &middot; $70M+ raised at companies Lihi led
                &middot; Experiments shipped weekly
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[var(--shadow-base)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto, fractional Head of Growth for B2B SaaS"
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
              Growth Does Not Stall From a Lack of Effort. It Stalls From a Lack
              of <span className="gradient-text">an Owner.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-purple-7 leading-relaxed mb-6">
              Everyone is busy. That is exactly why growth keeps flattening.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-purple-7 leading-relaxed mb-6">
              An agency runs ads against last quarter&apos;s brief. A freelancer
              redesigns a page. The founder tries three ideas from a podcast.
              Each move is reasonable on its own, and none of them add up,
              because no single person owns the funnel math or decides which bet
              matters next.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-purple-7 leading-relaxed mb-6">
              So growth becomes a pile of disconnected tactics, measured in
              clicks nobody can tie to revenue. Retention leaks quietly at the
              bottom while everyone crowds the top of the funnel. The result is
              motion without compounding.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="rounded-2xl bg-purple-05 p-6 lg:p-8 border border-purple-15">
              <p className="text-purple-9 font-semibold leading-relaxed">
                You do not need more tactics. You need one person who owns the
                growth system and the velocity to test it.
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
              One Owner Over Growth.{" "}
              <span className="gradient-text">
                One Supervised AI Team Running the Experiments.
              </span>
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
              Triple &amp; Co.&apos;s Head of Growth as a Service runs on our
              Woman in the Loop (WIL) model: one senior human owning the growth
              system, one integrated AI execution layer shipping the work behind
              it.
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

          {/* Growth loop band */}
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
              {loopStages.map((s) => (
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
              Scattered Tactics vs. One Growth Owner
            </h3>
            <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] overflow-hidden card-gradient-top">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-purple-15">
                      <th className="px-6 py-4 font-bold text-purple-9"></th>
                      <th className="px-6 py-4 font-bold text-purple-6">
                        Agencies, freelancers, founder time
                      </th>
                      <th className="px-6 py-4 font-bold text-brand">
                        Head of Growth as a Service (WIL)
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
              Stop running random acts of marketing. Run a system.
            </p>
            <div className="text-center">
              <Link
                href="/revenue-diagnostic"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Book a 30-Minute Growth Diagnostic <span>&#8594;</span>
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
                <p className="text-3xl lg:text-4xl font-black gradient-text">
                  15+
                </p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">
                  $70M+
                </p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">
                  Capital Raised
                </p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">3</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">
                  Stages, One Loop
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
              Head of Growth as a Service,{" "}
              <span className="gradient-text">Explained</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-8">
              Need one leader over marketing, sales, and customer success? See
              our{" "}
              <Link
                href="/cro-as-a-service"
                className="text-brand font-semibold hover:underline"
              >
                CRO as a Service
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
              <span className="gradient-text">Own the Growth Loop.</span>
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              One leader accountable for acquisition, activation, and retention.
              One team shipping experiments every week.
            </p>
            <Link
              href="/revenue-diagnostic"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a 30-Minute Growth Diagnostic <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
