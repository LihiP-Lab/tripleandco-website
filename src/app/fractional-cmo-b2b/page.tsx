import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AgentCarousel } from "@/components/AgentCarousel";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "Fractional CMO for B2B Tech, AI-Powered",
  description:
    "Get a fractional CMO who ships, not just advises. Senior B2B tech strategy from Lihi Pinto, plus 8 supervised AI agents executing daily. Book a call.",
  alternates: { canonical: "/fractional-cmo-b2b" },
  openGraph: {
    title: "Fractional CMO for B2B Tech, AI-Powered | Triple & Co.",
    description:
      "Senior fractional CMO strategy plus a built-in AI execution team. One partner, one price, output in days.",
    url: "https://www.tripleandco.com/fractional-cmo-b2b",
  },
};

const faqs = [
  {
    q: "What is the difference between a traditional Fractional CMO and an AI-powered marketing partner?",
    a: "A traditional fractional CMO gives you part-time strategic leadership, typically 1 to 2 days a week of planning, advising, and oversight. Execution is left to your existing team or contractors you hire separately. An AI-powered partner like Triple & Co. bundles both layers. You get the same senior fractional CMO leadership, plus a supervised team of 8 AI agents that executes the strategy daily: content, campaigns, SEO, ops, and reporting. One engagement covers what previously required an executive plus a department.",
  },
  {
    q: "Do you work with B2B companies outside of Israel?",
    a: "Yes. Most of our clients sell into the US and Europe, and our entire operating model is built for it. We work async across timezones, communicate in fluent English, and bring the Start-Up Nation playbook of scaling globally from a small home market. Location has never been a constraint for our clients; if anything, it's an advantage.",
  },
  {
    q: "How much does a fractional CMO cost compared to hiring a full-time CMO?",
    a: "A full-time B2B tech CMO typically costs $250K to $400K+ per year in salary, equity, and benefits, before you add the marketing team underneath them. A traditional fractional CMO runs $5K to $15K per month for strategy only. Triple & Co. prices at the level of a standalone fractional executive, but the engagement includes the execution layer, so you're replacing both the CMO line item and most of the team budget. Book a Revenue Diagnostic for a quote scoped to your stage.",
  },
  {
    q: "What does a fractional CMO for SaaS actually do in the first 90 days?",
    a: "At Triple & Co., the first two weeks are diagnostic: positioning audit, funnel analysis, and pipeline math. By week three you have a prioritized growth plan, and the agent team is already executing the first sprint: messaging, content engine, campaign infrastructure, and reporting. By day 90 you should see a working demand engine with weekly shipped output and board-ready metrics, not a slide deck waiting for headcount.",
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

const comparisonRows = [
  {
    label: "Senior strategy",
    traditional: "Included",
    inhouse: "Maybe",
    triple: "Included",
  },
  {
    label: "Daily execution",
    traditional: "Not included",
    inhouse: "Included",
    triple: "Included",
  },
  {
    label: "Time to first output",
    traditional: "Weeks",
    inhouse: "Months",
    triple: "Days",
  },
  {
    label: "Annual cost",
    traditional: "$60K+, plus the team you still hire",
    inhouse: "$400K+",
    triple: "One executive-level retainer",
  },
];

const wilPillars = [
  {
    title: "Lihi Pinto, Your Fractional CMO",
    description:
      "15+ years scaling B2B tech companies. $70M+ raised at companies she led. Lihi owns your strategy: positioning, pipeline architecture, pricing, board-level reporting. Every decision that requires judgment, taste, and accountability stays human.",
  },
  {
    title: "A Digital COO That Runs the Operation",
    description:
      "Workflows, briefs, QA, and handoffs between agents are orchestrated automatically, so nothing waits on a status meeting. Your strategy turns into sequenced, supervised work the moment it's set.",
  },
  {
    title: "8 Specialized AI Agents That Execute",
    description:
      "Content, campaigns, SEO, analytics, outreach, design, marketing ops, and reporting. Each agent is trained on your positioning and reviewed before anything ships. Meet Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen.",
  },
];

const globalSignals = [
  {
    title: "Async by Design",
    description:
      "Our AI execution layer works around the clock, and Lihi overlaps with both US and European business hours. Most clients say we respond faster than their in-house teams did.",
  },
  {
    title: "Fluent in Your Market",
    description:
      "Native-level English and Hebrew, with deep experience selling into US enterprise, European mid-market, and global developer audiences.",
  },
  {
    title: "A Track Record You Can Verify",
    description:
      "Our work and our founder's companies have been covered in TechCrunch, Calcalist, and Globes. The playbooks Lihi built while helping raise $70M+ are the same ones we run for clients.",
  },
];

export default function FractionalCMOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Fractional CMO" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Fractional CMO for B2B Tech</p>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                The Fractional CMO Who Comes With a Built-In{" "}
                <span className="gradient-text">Execution Team</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                You don&apos;t need another strategy deck. You need someone who
                builds the plan, then ships it.
              </p>
              <p className="text-base text-purple-6 leading-relaxed mb-8">
                Triple &amp; Co. gives you a senior fractional CMO with 15+ years
                scaling B2B tech companies, backed by 8 supervised AI agents that
                execute the work daily. Strategy and execution. One partner. One
                price. No hiring freelancers. No managing juniors. No waiting
                quarters for traction.
              </p>
              <div className="flex flex-wrap items-center gap-5 mb-8">
                <Link
                  href="/revenue-diagnostic"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                >
                  Book a 30-Minute Revenue Diagnostic <span>&#8594;</span>
                </Link>
                <Link
                  href="/agents"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  See how the agent team works &#8594;
                </Link>
              </div>
              <p className="text-xs text-purple-6 font-medium uppercase tracking-wider">
                15+ years in B2B tech &middot; $70M+ raised at companies Lihi led
                &middot; Built in Israel, the Start-Up Nation
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[var(--shadow-base)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto, fractional CMO for B2B tech"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Structural Pivot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow mb-3">The problem</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              A Fractional CMO Without a Team Is Just an{" "}
              <span className="gradient-text">Expensive Advisor</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-purple-7 leading-relaxed mb-6">
              Here&apos;s the dirty secret of the fractional CMO industry:
              you&apos;re paying executive rates for a strategy document.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-purple-7 leading-relaxed mb-6">
              The typical engagement goes like this. A seasoned marketer joins
              your leadership calls, audits your funnel, and hands you a sharp
              90-day plan. Then reality hits. Who writes the content? Who builds
              the campaigns? Who runs the ops, the CRM, the reporting?
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-purple-7 leading-relaxed mb-6">
              You do. Or rather, you start hiring. A freelance writer here. A
              paid media contractor there. A junior marketer to hold it together.
              Suddenly your &quot;fractional&quot; hire spawned five more
              vendors, a fragmented stack, and a part-time job for you: managing
              them all.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="rounded-2xl bg-purple-05 p-6 lg:p-8 border border-purple-15">
              <p className="text-purple-9 font-semibold leading-relaxed">
                The strategy was never the bottleneck. Execution was. And the
                traditional fractional CMO model leaves that part entirely on
                your plate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Solution: Woman in the Loop */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The Triple &amp; Co. model</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Senior Strategy Plus Full-Scale Execution.{" "}
              <span className="gradient-text">For the Cost of One Executive.</span>
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
              Triple &amp; Co. runs on a model we call Woman in the Loop (WIL):
              senior human judgment directing a supervised AI execution layer.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {wilPillars.map((pillar, i) => (
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

          {/* Comparison table */}
          <ScrollReveal>
            <h3 className="text-2xl font-extrabold text-purple-9 mb-6 text-center">
              The Math Founders Care About
            </h3>
            <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] overflow-hidden card-gradient-top">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-purple-15">
                      <th className="px-6 py-4 font-bold text-purple-9"></th>
                      <th className="px-6 py-4 font-bold text-purple-6">
                        Traditional fractional CMO
                      </th>
                      <th className="px-6 py-4 font-bold text-purple-6">
                        In-house team
                      </th>
                      <th className="px-6 py-4 font-bold text-brand">
                        Triple &amp; Co. (WIL)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.label} className="border-b border-purple-15 last:border-0">
                        <td className="px-6 py-4 font-semibold text-purple-9">
                          {row.label}
                        </td>
                        <td className="px-6 py-4 text-purple-7">{row.traditional}</td>
                        <td className="px-6 py-4 text-purple-7">{row.inhouse}</td>
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
              You get the judgment of a CMO who has done it before, and the
              output of a full marketing department, without building one.
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

      {/* Trust & Global Authority */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Global by default</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Built in the Start-Up Nation.{" "}
              <span className="gradient-text">Operating Everywhere.</span>
            </h2>
            <p className="text-purple-7 text-center max-w-3xl mx-auto mb-12">
              Triple &amp; Co. is headquartered in Israel, the densest startup
              ecosystem on earth and the proving ground where B2B tech companies
              learn to sell globally from day one. That DNA is our default
              setting: every playbook we run assumes a global market, a remote
              team, and a US or European buyer.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {globalSignals.map((signal, i) => (
              <ScrollReveal key={signal.title} delay={0.1 + i * 0.12}>
                <div className="rounded-xl border border-purple-15 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-base)] h-full">
                  <h3 className="text-base font-bold text-purple-9 mb-2">
                    {signal.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-xs text-purple-6 font-medium uppercase tracking-wider text-center">
              As covered in TechCrunch &middot; Calcalist &middot; Globes
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              Fractional CMO Questions, <span className="gradient-text">Answered</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-8">
              Consolidating agency retainers instead of hiring an executive?
              See our{" "}
              <Link href="/cmo-as-a-service" className="text-brand font-semibold hover:underline">
                CMO as a Service
              </Link>{" "}
              model.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Stop Hiring Strategy and Execution{" "}
              <span className="gradient-text">Separately</span>
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              One senior operator. One supervised AI team. One number on your
              P&amp;L.
            </p>
            <Link
              href="/revenue-diagnostic"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a 30-Minute Revenue Diagnostic <span>&#8594;</span>
            </Link>
            <p className="text-sm text-purple-6 mt-6">
              No pitch. You&apos;ll leave with 3 specific growth gaps, whether we
              work together or not.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
