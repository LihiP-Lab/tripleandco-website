import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "Results: $70M+ Raised, Pipeline 2.5x, SQLs 4x",
  description:
    "Verified outcomes: pipeline 2.5x in 2 quarters, SQLs up 4x in 2 months, CAC down 18% in 3 months. $70M+ raised at companies where Lihi Pinto led marketing.",
  alternates: { canonical: "/results" },
  openGraph: {
    title: "Results | Triple & Co.",
    description:
      "Pipeline 2.5x in 2 quarters. SQLs up 4x in 2 months. CAC down 18% in 3 months. $70M+ raised at companies where Lihi Pinto led marketing.",
    url: "https://www.tripleandco.com/results",
    siteName: "Triple & Co.",
    type: "website",
  },
};

// One source of truth: these arrays drive the visible cards and the JSON-LD
// below, so schema cannot drift from visible copy.
const trackRecord = [
  {
    metric: "$70M+",
    label: "raised at companies where Lihi led marketing",
    detail:
      "Across funding rounds at B2B tech companies, seed through growth, where Lihi Pinto owned marketing and the credibility narrative investors bought into.",
  },
  {
    metric: "3x",
    label: "revenue tripled, repeatedly",
    detail:
      "Revenue tripled repeatedly at the companies where Lihi led marketing, from early traction through scale, with pipeline as the scoreboard.",
  },
  {
    metric: "15+",
    label: "years in B2B SaaS marketing leadership",
    detail:
      "Including co-founding and leading marketing at a venture-backed SaaS company. The same playbooks now run for Triple & Co. clients, executed by 8 supervised AI agents.",
  },
];

const clientOutcomes = [
  {
    category: "B2B SaaS client",
    metric: "Pipeline 2.5x",
    timeframe: "in 2 quarters",
    detail:
      "Qualified pipeline grew 2.5x in two quarters after repositioning the offer and putting the full agent team on daily content, outreach, and campaign execution.",
  },
  {
    category: "B2B SaaS client",
    metric: "SQLs up 4x",
    timeframe: "in 2 months",
    detail:
      "Sales-qualified leads quadrupled in two months by rebuilding the funnel stages and running always-on demand programs the agent team executes daily.",
  },
  {
    category: "B2B SaaS client",
    metric: "CAC down 18%",
    timeframe: "in 3 months",
    detail:
      "Customer acquisition cost dropped 18% in three months by cutting underperforming spend and shifting budget to the channels the analytics agent proved out.",
  },
];

const faqs = [
  {
    q: "What results has Triple & Co. delivered?",
    a: "Recent client outcomes include pipeline growing 2.5x in 2 quarters, SQLs up 4x in 2 months, and CAC down 18% in 3 months, all at B2B SaaS companies. Before founding Triple & Co., companies where Lihi Pinto led marketing raised $70M+ and tripled revenue repeatedly.",
  },
  {
    q: "Why doesn't Triple & Co. name its clients?",
    a: "Client confidentiality. Triple & Co. works inside its clients' go-to-market as an embedded leadership function, and most engagements cover competitive positioning that clients prefer to keep private. The numbers are real and anonymized by category instead.",
  },
  {
    q: "How are these results measured?",
    a: "Each engagement runs on an agreed scoreboard: pipeline, SQLs, CAC, and funnel conversion, tracked in the client's own CRM and analytics. The outcomes published here are taken from those client-owned systems, not from vanity metrics.",
  },
  {
    q: "How fast should we expect results?",
    a: "The agent team starts shipping in the first weeks, so leading indicators (content velocity, outreach volume, funnel instrumentation) move almost immediately. Pipeline and CAC outcomes like the ones above typically show within 2 to 6 months, depending on sales cycle length.",
  },
  {
    q: "Who did the work behind these numbers?",
    a: "Lihi Pinto owned the strategy and every decision; the 8 supervised AI agents did the daily execution across content, campaigns, SEO, outreach, and analytics. Every output passed human review before shipping. That combination is the engagement model, priced at $5,000 to $15,000 per month.",
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

export default function ResultsPage() {
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
            items={[{ label: "Home", href: "/" }, { label: "Results" }]}
          />
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 mb-6">
              <span className="text-brand text-xs font-bold tracking-widest uppercase">
                Real numbers &middot; Anonymized by category
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
              The numbers, <span className="gradient-text">not the names</span>
            </h1>
            <p className="text-purple-8 text-lg lg:text-xl leading-relaxed mb-4">
              Client confidentiality means we don&apos;t publish logos. We
              publish outcomes instead: pipeline 2.5x in 2 quarters, SQLs up 4x
              in 2 months, CAC down 18% in 3 months, all at B2B SaaS companies.
            </p>
            <p className="text-purple-7 text-[15.5px] leading-relaxed">
              Every number below is taken from the client&apos;s own CRM and
              analytics, and Lihi will walk you through how each was achieved
              on a call.
            </p>
          </div>
        </div>
      </section>

      {/* Client outcomes */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Client outcomes</p>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-12">
              What engagements <span className="gradient-text">deliver</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientOutcomes.map((o, i) => (
              <ScrollReveal key={o.metric} delay={0.05 + i * 0.04}>
                <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 shadow-[var(--shadow-base)] overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
                  <p className="text-purple-6 text-sm font-semibold mb-3">
                    {o.category}
                  </p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl lg:text-[34px] font-black tracking-tight text-brand">
                      {o.metric}
                    </span>
                  </div>
                  <p className="text-purple-9 font-bold mb-4">{o.timeframe}</p>
                  <p className="text-purple-7 text-[15px] leading-relaxed">
                    {o.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="py-16 lg:py-20 bg-purple-9">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The track record behind it</p>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-white text-center mb-12">
              Before Triple &amp; Co.,{" "}
              <span className="gradient-text">the same playbooks</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trackRecord.map((t, i) => (
              <ScrollReveal key={t.metric} delay={0.05 + i * 0.04}>
                <div className="h-full rounded-3xl bg-white/10 border border-white/15 p-8 lg:p-10">
                  <span className="text-3xl lg:text-[34px] font-black tracking-tight text-pink-3">
                    {t.metric}
                  </span>
                  <p className="text-white font-bold mt-1 mb-4">{t.label}</p>
                  <p className="text-purple-2 text-[15px] leading-relaxed">
                    {t.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[840px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Questions about results</p>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-purple-9 text-center mb-12">
              Asked before <span className="gradient-text">every engagement</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-purple-9">
        <div className="mx-auto max-w-[840px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-white mb-4">
              Want numbers like these{" "}
              <span className="gradient-text">on your funnel?</span>
            </h2>
            <p className="text-purple-2 text-lg leading-relaxed mb-8">
              Start with the free 30-minute Revenue Diagnostic. Lihi reviews
              your funnel math with you and you leave with three concrete moves
              to add pipeline this quarter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/revenue-diagnostic"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Book the free Revenue Diagnostic
              </Link>
              <Link
                href="/pricing"
                className="text-pink-3 font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
              >
                See engagement models &amp; pricing <span>&#8594;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
