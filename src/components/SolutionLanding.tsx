import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AgentCarousel } from "@/components/AgentCarousel";
import { PillarFAQ } from "@/components/PillarFAQ";

export interface LandingFAQ {
  q: string;
  a: string;
}

export interface LandingPillar {
  title: string;
  description: string;
}

export interface LandingComparisonRow {
  label: string;
  left: string;
  middle: string;
  right: string;
}

export interface LandingRelatedLink {
  href: string;
  label: string;
  description: string;
}

export interface LandingContent {
  breadcrumbLabel: string;
  canonical: string;

  heroEyebrow: string;
  h1Lead: string;
  h1Highlight: string;
  heroLede: string;
  heroBody: string;
  heroStats: string;
  heroImageAlt: string;

  /** Optional two-sentence answer block rendered directly below the hero.
   *  Written to be extractable by AI answer engines; marked speakable in the
   *  page's FAQPage schema via #page-definition. */
  definition?: string;

  problemEyebrow: string;
  problemH2Lead: string;
  problemH2Highlight: string;
  problemParas: string[];
  problemCallout: string;

  modelEyebrow: string;
  modelH2Lead: string;
  modelH2Highlight: string;
  modelIntro: string;
  pillars: LandingPillar[];

  comparisonHeading: string;
  comparisonColHeaders: [string, string, string];
  comparisonRows: LandingComparisonRow[];
  comparisonNote: string;

  signalsEyebrow: string;
  signalsH2Lead: string;
  signalsH2Highlight: string;
  signalsIntro: string;
  signals: LandingPillar[];
  signalsFootnote?: string;

  faqEyebrow: string;
  faqH2Lead: string;
  faqH2Highlight: string;
  faqs: LandingFAQ[];
  faqCloser?: {
    before: string;
    linkHref: string;
    linkLabel: string;
    after: string;
  };

  ctaH2Lead: string;
  ctaH2Highlight: string;
  ctaBody: string;
  ctaNote: string;

  /** Optional internal-link hub rendered between the FAQ and the final CTA.
   *  Use on hub pages to point at the supporting subtopic pages. */
  relatedEyebrow?: string;
  relatedH2Lead?: string;
  relatedH2Highlight?: string;
  relatedLinks?: LandingRelatedLink[];
}

export function SolutionLanding({
  content,
  serviceSchema,
}: {
  content: LandingContent;
  serviceSchema: Record<string, unknown>;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    // FAQPage is a WebPage subtype, so `speakable` is valid here. The selector
    // marks the definition block an answer engine should read verbatim.
    ...(content.definition
      ? {
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["#page-definition"],
          },
        }
      : {}),
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

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
              { label: content.breadcrumbLabel },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">{content.heroEyebrow}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                {content.h1Lead}{" "}
                <span className="gradient-text">{content.h1Highlight}</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                {content.heroLede}
              </p>
              <p className="text-base text-purple-6 leading-relaxed mb-8">
                {content.heroBody}
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
                {content.heroStats}
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[var(--shadow-base)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt={content.heroImageAlt}
                  fill
                  sizes="(max-width: 1024px) 340px, 340px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition (GEO answer block) */}
      {content.definition && (
        <section className="py-10 lg:py-14 bg-white">
          <div className="mx-auto max-w-[880px] px-8">
            <div className="rounded-2xl bg-purple-05 border border-purple-15 p-6 lg:p-8 border-l-4 border-l-brand">
              <p
                id="page-definition"
                className="text-purple-9 text-lg leading-relaxed font-medium"
              >
                {content.definition}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Problem */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow mb-3">{content.problemEyebrow}</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              {content.problemH2Lead}{" "}
              <span className="gradient-text">{content.problemH2Highlight}</span>
            </h2>
          </ScrollReveal>
          {content.problemParas.map((para, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.05}>
              <p className="text-purple-7 leading-relaxed mb-6">{para}</p>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={0.25}>
            <div className="rounded-2xl bg-purple-05 p-6 lg:p-8 border border-purple-15">
              <p className="text-purple-9 font-semibold leading-relaxed">
                {content.problemCallout}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Model + comparison */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">{content.modelEyebrow}</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              {content.modelH2Lead}{" "}
              <span className="gradient-text">{content.modelH2Highlight}</span>
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
              {content.modelIntro}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {content.pillars.map((pillar, i) => (
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

          <ScrollReveal>
            <h3 className="text-2xl font-extrabold text-purple-9 mb-6 text-center">
              {content.comparisonHeading}
            </h3>
            <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] overflow-hidden card-gradient-top">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-purple-15">
                      <th className="px-6 py-4 font-bold text-purple-9"></th>
                      <th className="px-6 py-4 font-bold text-purple-6">
                        {content.comparisonColHeaders[0]}
                      </th>
                      <th className="px-6 py-4 font-bold text-purple-6">
                        {content.comparisonColHeaders[1]}
                      </th>
                      <th className="px-6 py-4 font-bold text-brand">
                        {content.comparisonColHeaders[2]}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.comparisonRows.map((row) => (
                      <tr
                        key={row.label}
                        className="border-b border-purple-15 last:border-0"
                      >
                        <td className="px-6 py-4 font-semibold text-purple-9">
                          {row.label}
                        </td>
                        <td className="px-6 py-4 text-purple-7">{row.left}</td>
                        <td className="px-6 py-4 text-purple-7">{row.middle}</td>
                        <td className="px-6 py-4 font-semibold text-purple-9 bg-pink-05/40">
                          {row.right}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mt-8 mb-8">
              {content.comparisonNote}
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

      {/* Agents */}
      <AgentCarousel />

      {/* Signals */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">{content.signalsEyebrow}</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              {content.signalsH2Lead}{" "}
              <span className="gradient-text">{content.signalsH2Highlight}</span>
            </h2>
            <p className="text-purple-7 text-center max-w-3xl mx-auto mb-12">
              {content.signalsIntro}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {content.signals.map((signal, i) => (
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

          {content.signalsFootnote && (
            <ScrollReveal>
              <p className="text-xs text-purple-6 font-medium uppercase tracking-wider text-center">
                {content.signalsFootnote}
              </p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">{content.faqEyebrow}</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              {content.faqH2Lead}{" "}
              <span className="gradient-text">{content.faqH2Highlight}</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={content.faqs} />
          {content.faqCloser && (
            <ScrollReveal delay={0.2}>
              <p className="text-sm text-purple-7 text-center mt-8">
                {content.faqCloser.before}{" "}
                <Link
                  href={content.faqCloser.linkHref}
                  className="text-brand font-semibold hover:underline"
                >
                  {content.faqCloser.linkLabel}
                </Link>{" "}
                {content.faqCloser.after}
              </p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Related pages (internal-link hub) */}
      {content.relatedLinks && content.relatedLinks.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-[1200px] px-8">
            <ScrollReveal>
              {content.relatedEyebrow && (
                <p className="eyebrow text-center mb-3">
                  {content.relatedEyebrow}
                </p>
              )}
              <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
                {content.relatedH2Lead}{" "}
                <span className="gradient-text">
                  {content.relatedH2Highlight}
                </span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.relatedLinks.map((link, i) => (
                <ScrollReveal key={link.href} delay={0.05 + i * 0.05}>
                  <Link
                    href={link.href}
                    className="block h-full rounded-xl border border-purple-15 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-base)]"
                  >
                    <h3 className="text-base font-bold text-purple-9 mb-2">
                      {link.label} <span className="text-brand">&#8594;</span>
                    </h3>
                    <p className="text-sm text-purple-7 leading-relaxed">
                      {link.description}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              {content.ctaH2Lead}{" "}
              <span className="gradient-text">{content.ctaH2Highlight}</span>
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              {content.ctaBody}
            </p>
            <Link
              href="/revenue-diagnostic"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a 30-Minute Revenue Diagnostic <span>&#8594;</span>
            </Link>
            <p className="text-sm text-purple-6 mt-6">{content.ctaNote}</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
