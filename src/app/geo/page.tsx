import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "GEO: Generative Engine Optimization for B2B",
  description:
    "Generative Engine Optimization (GEO) makes your brand citable in ChatGPT, Perplexity, Gemini, and Google AI Overviews. B2B SaaS GEO from an AI-native CMO.",
  alternates: { canonical: "/geo" },
  openGraph: {
    title: "GEO: Generative Engine Optimization for B2B | Triple & Co.",
    description:
      "Get cited by ChatGPT, Perplexity, Gemini, and AI Overviews. GEO strategy and execution for B2B SaaS, run by an AI-native CMO and a supervised agent team.",
    url: "https://www.tripleandco.com/geo",
  },
};

const faqs = [
  {
    q: "What is Generative Engine Optimization (GEO)?",
    a: "Generative Engine Optimization (GEO) is the practice of making your brand and content easy for AI answer engines to understand, trust, and cite. Where SEO optimizes for ranked links on a results page, GEO optimizes to be the source an AI quotes inside ChatGPT, Perplexity, Google AI Overviews, and Gemini. It combines clear structured answers, authoritative content, schema markup, and crawler access so language models select and attribute your brand.",
  },
  {
    q: "How is GEO different from SEO?",
    a: "SEO earns you a ranked link that a human clicks. GEO earns you a citation inside a generated answer, often before any link is clicked. SEO optimizes pages for a crawler and an index; GEO optimizes claims, definitions, and evidence for a language model that synthesizes an answer. They share a foundation, clean, authoritative, well-structured content, but GEO adds quotable formatting, entity clarity, and explicit AI-crawler access. Most B2B buyers now start in an AI assistant, so both matter.",
  },
  {
    q: "Why does GEO matter for B2B SaaS?",
    a: "B2B buyers increasingly ask an AI assistant to shortlist vendors, compare categories, and summarize options before they ever visit a website. If AI engines do not know who you are or cite a competitor instead, you are cut from the consideration set before the funnel starts. GEO puts your positioning, proof, and category language in the exact form these engines lift, so your brand shows up in the answer, not just on page two.",
  },
  {
    q: "How do you measure GEO results?",
    a: "We track whether target AI engines mention and cite your brand for the buyer questions that matter in your category, monitor changes over time, and benchmark against competitors. We also watch referral traffic and assisted pipeline from AI sources. The starting point is our free AI Visibility Audit, which shows what ChatGPT and other engines say about your brand today.",
  },
  {
    q: "Is GEO a one-time project or ongoing?",
    a: "The audit and initial fixes are a project; staying cited is ongoing. AI engines re-crawl, models update, and competitors publish. Because GEO is built into how Triple & Co. runs marketing, our agents keep producing quotable, structured, authoritative content and Lihi keeps the strategy current, so your citation footprint compounds instead of decaying.",
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
  name: "Generative Engine Optimization (GEO)",
  serviceType: "Generative Engine Optimization",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B SaaS companies",
  },
  description:
    "GEO strategy and execution for B2B SaaS: make your brand citable in ChatGPT, Perplexity, Gemini, and Google AI Overviews through structured, authoritative, AI-readable content.",
  url: "https://www.tripleandco.com/geo",
};

const comparisonRows = [
  {
    label: "The unit of value",
    seo: "A ranked link",
    geo: "A cited answer",
  },
  {
    label: "You optimize for",
    seo: "A crawler and an index",
    geo: "A language model synthesizing an answer",
  },
  {
    label: "Where you win",
    seo: "The results page",
    geo: "Inside ChatGPT, Perplexity, AI Overviews",
  },
  {
    label: "Content format",
    seo: "Keyword-relevant pages",
    geo: "Quotable definitions, tables, cited stats",
  },
  {
    label: "Success signal",
    seo: "Position and clicks",
    geo: "Brand mentions and citations in answers",
  },
];

const pillars = [
  {
    title: "Make Your Answers Quotable",
    description:
      "Nova and Camille turn your positioning into the format engines lift: crisp definitions, question-led sections, comparison tables, and claims backed by cited evidence. Lihi sets the category language so the model learns your framing, not a competitor's.",
  },
  {
    title: "Make Your Entity Legible",
    description:
      "Structured data, an llms.txt brief, and explicit AI-crawler access make it unambiguous who you are, what you do, and why you are credible. Clear entities and E-E-A-T signals are what let a model trust and attribute you.",
  },
  {
    title: "Measure and Compound Citations",
    description:
      "Atlas tracks whether ChatGPT, Perplexity, Gemini, and AI Overviews mention and cite you for the questions buyers actually ask, benchmarks competitors, and watches it over time. What gets measured gets defended and grown.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to get your B2B brand cited by AI answer engines",
  description:
    "The three moves that make a brand quotable, legible, and measurable to ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  totalTime: "P90D",
  step: pillars.map((pillar, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: pillar.title,
    text: pillar.description,
    url: `https://www.tripleandco.com/geo#move-${i + 1}`,
  })),
};

const engines = [
  "ChatGPT",
  "Perplexity",
  "Google AI Overviews",
  "Gemini",
  "Claude",
  "Copilot",
];

export default function GEOPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "GEO" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">
                Generative Engine Optimization for B2B
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                Get Cited by AI, Not Just{" "}
                <span className="gradient-text">Ranked by Google</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                Your buyers now ask ChatGPT, Perplexity, and Google AI Overviews
                to shortlist vendors before they ever open a browser tab. If the
                answer names a competitor, you already lost the deal.
              </p>
              <p className="text-base text-purple-6 leading-relaxed mb-8">
                Generative Engine Optimization (GEO) makes your brand the source
                AI engines quote. As an AI-native CMO, Triple &amp; Co. builds
                GEO into how your marketing runs: quotable, structured,
                authoritative content that language models trust and attribute.
              </p>
              <div className="flex flex-wrap items-center gap-5 mb-8">
                <Link
                  href="/ai-visibility-audit"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                >
                  Get a free AI Visibility Audit <span>&#8594;</span>
                </Link>
                <Link
                  href="/revenue-diagnostic"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Book a Revenue Diagnostic &#8594;
                </Link>
              </div>
              <p className="text-xs text-purple-6 font-medium uppercase tracking-wider">
                AI-native CMO &middot; 8 supervised agents &middot; Built to be
                cited, not just crawled
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[var(--shadow-base)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto, AI-native CMO leading GEO for B2B SaaS"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Definition band (quotable) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow mb-3">The definition</p>
            <div className="rounded-2xl bg-purple-05 p-8 lg:p-10 border border-purple-15">
              <p className="text-xl lg:text-2xl text-purple-9 font-semibold leading-snug">
                Generative Engine Optimization (GEO) is the practice of making
                your brand and content easy for AI answer engines to understand,
                trust, and cite. Where SEO earns a ranked link, GEO earns a
                citation inside the answer itself.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {engines.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-purple-15 bg-purple-05 px-4 py-1.5 text-sm font-semibold text-purple-7"
                >
                  {e}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GEO vs SEO */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1000px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">GEO vs SEO</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Same Foundation.{" "}
              <span className="gradient-text">Different Finish Line.</span>
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
              GEO does not replace SEO. It extends it to the place your buyers
              now start: a generated answer.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] overflow-hidden card-gradient-top">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-purple-15">
                      <th className="px-6 py-4 font-bold text-purple-9"></th>
                      <th className="px-6 py-4 font-bold text-purple-6">SEO</th>
                      <th className="px-6 py-4 font-bold text-brand">GEO</th>
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
                        <td className="px-6 py-4 text-purple-7">{row.seo}</td>
                        <td className="px-6 py-4 font-semibold text-purple-9 bg-pink-05/40">
                          {row.geo}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How we do it */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">How Triple &amp; Co. runs GEO</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Three Moves That Get You{" "}
              <span className="gradient-text">Into the Answer.</span>
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
              GEO is not a plugin. It is how an AI-native marketing team writes,
              structures, and measures everything it ships.
            </p>
          </ScrollReveal>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
            {pillars.map((pillar, i) => (
              <li key={pillar.title} id={`move-${i + 1}`}>
              <ScrollReveal delay={0.1 + i * 0.12}>
                <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)] h-full border border-purple-15">
                  <p className="text-sm font-black text-brand mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="text-xl font-extrabold text-purple-9 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Lead magnet CTA */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <p className="eyebrow mb-3">Start free</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              What Does AI Say About{" "}
              <span className="gradient-text">Your Brand Today?</span>
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              Run our free AI Visibility Audit to see whether ChatGPT and other
              engines mention you, what they get wrong, and where a competitor
              is cited instead.
            </p>
            <Link
              href="/ai-visibility-audit"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Get my free AI Visibility Audit <span>&#8594;</span>
            </Link>
            <p className="text-sm text-purple-7 mt-6">
              Prefer an instant read? Run the free 10-second{" "}
              <Link
                href="/ai-visibility-checker"
                className="text-brand font-semibold hover:underline"
              >
                AI Visibility Checker
              </Link>{" "}
              and score your site on llms.txt, crawler access, structured
              data, and Bing indexability.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              GEO for B2B, <span className="gradient-text">Explained</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-8">
              Want the practical, do-it-yourself version? Read our{" "}
              <Link
                href="/llm-seo"
                className="text-brand font-semibold hover:underline"
              >
                LLM SEO guide and checklist
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
