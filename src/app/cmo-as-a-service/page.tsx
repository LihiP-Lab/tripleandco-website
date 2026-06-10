import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AgentCarousel } from "@/components/AgentCarousel";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "CMO as a Service for B2B SaaS",
  description:
    "CMO as a Service for B2B SaaS. One subscription replaces your agency retainers: senior strategy, 8 AI agents, and a full revenue operating system.",
  alternates: { canonical: "/cmo-as-a-service" },
  openGraph: {
    title: "CMO as a Service for B2B SaaS | Triple & Co.",
    description:
      "One subscription replaces your agency stack: senior CMO leadership plus an integrated AI revenue operating system.",
    url: "https://www.tripleandco.com/cmo-as-a-service",
  },
};

const faqs = [
  {
    q: "What is CMO as a Service?",
    a: "CMO as a Service is a subscription model that gives your company full marketing leadership and execution without hiring an executive or managing agencies. At Triple & Co., that means a senior CMO (Lihi Pinto, 15+ years in B2B SaaS) owning your strategy, plus an integrated AI operating system, 8 supervised agents and a digital COO, executing it daily across content, campaigns, SEO, outreach, and analytics.",
  },
  {
    q: "How is CMO as a Service different from hiring a marketing agency?",
    a: "An agency sells you a channel: SEO, paid, or content, each with its own retainer, account manager, and reporting. You remain responsible for strategy and for coordinating between them. CMO as a Service inverts that. Strategy ownership comes first, and execution across all channels runs inside one connected system with shared data and messaging. You replace 3 to 4 retainers and the founder-as-project-manager role with a single accountable partner.",
  },
  {
    q: "How is this different from your Fractional CMO offering?",
    a: "Same engine, different entry point. Fractional CMO engagements suit founders who want a named marketing executive in their leadership team. CMO as a Service suits companies consolidating agency spend into one integrated system. Both run on the Woman in the Loop model: Lihi's strategy, supervised AI execution. We'll recommend the right structure on your diagnostic call.",
  },
  {
    q: "Do you work with B2B SaaS companies outside of Israel?",
    a: "Yes, that's most of our client base. We're built for US and European markets: async operations across timezones, fluent English, and Start-Up Nation experience scaling companies globally from day one. The AI layer works around the clock, which usually means faster turnaround than a local agency.",
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
    label: "Strategy ownership",
    agencies: "Nobody (you, by default)",
    triple: "One accountable CMO",
  },
  {
    label: "Channel coordination",
    agencies: "Manual, founder-led",
    triple: "Built into the system",
  },
  {
    label: "Shared data and messaging",
    agencies: "Siloed per vendor",
    triple: "One source of truth",
  },
  {
    label: "Output cadence",
    agencies: "Monthly deliverables",
    triple: "Daily shipped work",
  },
  {
    label: "Cost",
    agencies: "$25K to $50K+/month combined",
    triple: "One executive-level subscription",
  },
];

const systemPillars = [
  {
    title: "Lihi Pinto Owns Your Revenue Strategy",
    description:
      "15+ years scaling B2B SaaS, $70M+ raised on her go-to-market playbooks. Positioning, ICP, pricing, funnel architecture, and board reporting sit with one accountable executive, not scattered across account managers.",
  },
  {
    title: "A Digital COO Replaces the Handoffs",
    description:
      "Briefs, QA, sequencing, and cross-channel coordination run automatically inside one system. Your messaging is defined once and enforced everywhere. No telephone game between vendors.",
  },
  {
    title: "8 Specialized AI Agents Replace the Retainers",
    description:
      "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen cover content, campaigns, SEO, outreach, design, analytics, marketing ops, and reporting. Each works from the same strategy, the same data, and the same brand system, and nothing ships without supervision.",
  },
];

const globalSignals = [
  {
    title: "Always-On by Architecture",
    description:
      "The agent layer executes around the clock, and Lihi overlaps with US and European business hours. Your system doesn't wait for an agency's Monday standup.",
  },
  {
    title: "Fluent in Your Market",
    description:
      "Native-level English and Hebrew, with playbooks proven on US enterprise buyers, European mid-market, and global product-led motions.",
  },
  {
    title: "A Verifiable Track Record",
    description:
      "Coverage in TechCrunch, Calcalist, and Globes. The same playbooks behind $70M+ in funding rounds now run inside every client's operating system.",
  },
];

export default function CMOPage() {
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
              { label: "CMO as a Service" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">CMO as a Service for B2B &amp; SaaS</p>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                CMO as a Service: One Subscription Replaces Your{" "}
                <span className="gradient-text">Agency Stack</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                Count your retainers. Content agency. Paid media agency. SEO
                shop. A designer on Upwork. None of them talk to each other, and
                all of them invoice you.
              </p>
              <p className="text-base text-purple-6 leading-relaxed mb-8">
                Triple &amp; Co. replaces the whole stack with one integrated
                revenue operating system: senior CMO leadership from Lihi Pinto,
                a digital COO orchestrating the work, and 8 supervised AI agents
                executing across every channel. Connected strategy. Daily
                output. One invoice.
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
                  Meet the 8 agents inside the system &#8594;
                </Link>
                <Link
                  href="/about-he"
                  className="text-sm font-semibold text-purple-5 hover:text-brand hover:underline"
                >
                  CMO ו CRO as a Service עם ליהיא פינטו &#8594;
                </Link>
              </div>
              <p className="text-xs text-purple-6 font-medium uppercase tracking-wider">
                15+ years in B2B SaaS &middot; $70M+ raised with our playbooks
                &middot; One system, zero agency handoffs
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[var(--shadow-base)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto, CMO as a Service for B2B SaaS"
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
              You Don&apos;t Have a Marketing Problem. You Have a{" "}
              <span className="gradient-text">Coordination Problem.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-purple-7 leading-relaxed mb-6">
              Agencies are built to sell you their channel, not your growth.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-purple-7 leading-relaxed mb-6">
              The SEO agency reports rankings. The paid media agency reports
              ROAS. The content shop reports posts published. Everyone hits
              their numbers, and your pipeline still misses.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-purple-7 leading-relaxed mb-6">
              Why? Because nobody owns the connection between them. Your
              positioning lives in one agency&apos;s deck, your keywords in
              another&apos;s spreadsheet, your customer data in a CRM nobody
              briefs. Every handoff loses context. Every retainer adds a
              meeting. And the strategic thinking that should tie it together?
              That was never in anyone&apos;s scope. So you become the
              integration layer. The founder, personally relaying messaging
              between vendors at $40K+ a month in combined retainers.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="rounded-2xl bg-purple-05 p-6 lg:p-8 border border-purple-15">
              <p className="text-purple-9 font-semibold leading-relaxed">
                The retainer model sells you activity. What you need is a system
                that owns revenue.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Solution: AI Revenue Operating System */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The Triple &amp; Co. model</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Not Another Vendor. The Operating System That{" "}
              <span className="gradient-text">Replaces Them.</span>
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
              Triple &amp; Co.&apos;s CMO as a Service runs on our Woman in the
              Loop (WIL) model: one senior human directing one integrated AI
              execution layer, end to end.
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
                        3 to 4 agency retainers
                      </th>
                      <th className="px-6 py-4 font-bold text-brand">
                        CMO as a Service (WIL)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.label} className="border-b border-purple-15 last:border-0">
                        <td className="px-6 py-4 font-semibold text-purple-9">
                          {row.label}
                        </td>
                        <td className="px-6 py-4 text-purple-7">{row.agencies}</td>
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
              Fire the coordination overhead. Keep the output.
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
              <span className="gradient-text">Running Revenue Systems Worldwide.</span>
            </h2>
            <p className="text-purple-7 text-center max-w-3xl mx-auto mb-12">
              Triple &amp; Co. operates from Israel, the ecosystem that produces
              more B2B SaaS companies per capita than anywhere on earth. Here,
              every company sells globally from day one, so global is our
              default, not our stretch goal.
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

      {/* Stats band */}
      <section className="py-12 bg-purple-05">
        <div className="mx-auto max-w-[1000px] px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">15+</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">$70M+</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">Capital Raised</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">8</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">AI Agents, Supervised</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">1</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">Invoice, Not Five</p>
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
              CMO as a Service, <span className="gradient-text">Explained</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-8">
              Looking for a named executive on your leadership team instead?
              See our{" "}
              <Link href="/fractional-cmo-b2b" className="text-brand font-semibold hover:underline">
                Fractional CMO for B2B SaaS
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
              <span className="gradient-text">Install the System.</span>
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              One CMO. One operating system. One line on your P&amp;L instead of
              five.
            </p>
            <Link
              href="/revenue-diagnostic"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a 30-Minute Revenue Diagnostic <span>&#8594;</span>
            </Link>
            <p className="text-sm text-purple-6 mt-6">
              Bring your current agency invoices. We&apos;ll show you exactly
              what the system replaces.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
