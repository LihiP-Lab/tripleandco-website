import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "LLM SEO: How to Get Cited by ChatGPT, Perplexity, and AI Search",
  description:
    "LLM SEO is optimizing your content so large language models cite your brand in their answers. A practical B2B checklist for getting cited by ChatGPT, Perplexity, Gemini, and Google AI Overviews.",
  alternates: { canonical: "/llm-seo" },
  openGraph: {
    title: "LLM SEO: How to Get Cited by AI Search | Triple & Co.",
    description:
      "A practical guide and checklist for making large language models understand, trust, and cite your B2B brand in ChatGPT, Perplexity, Gemini, and AI Overviews.",
    url: "https://www.tripleandco.com/llm-seo",
  },
};

const faqs = [
  {
    q: "What is LLM SEO?",
    a: "LLM SEO is the practice of optimizing your content so large language models like ChatGPT, Claude, Gemini, and Perplexity understand, trust, and cite your brand when they answer a user's question. It is closely related to Generative Engine Optimization (GEO). Where classic SEO optimizes for ranked links on a search results page, LLM SEO optimizes for being the source a model quotes inside a generated answer, often before the user clicks any link at all.",
  },
  {
    q: "Is LLM SEO the same as GEO?",
    a: "They overlap heavily. GEO (Generative Engine Optimization) is the broader discipline of being cited across AI answer engines, including Google AI Overviews and Perplexity, which blend search and generation. LLM SEO is the same idea framed around large language models specifically. In practice we treat them as one workstream: make your content quotable, make your entity legible, and make your credibility explicit so any AI system selects and attributes you.",
  },
  {
    q: "How do large language models decide which sources to cite?",
    a: "Answer engines favor content that is clearly structured, directly answers the question, states unambiguous facts and definitions, and comes from a source the model can identify as credible. Retrieval-augmented systems like Perplexity and AI Overviews pull from fresh, crawlable pages with strong topical authority and schema. Models reward clarity over cleverness: a crisp definition, a comparison table, or a cited statistic is far more likely to be lifted than a long, meandering paragraph.",
  },
  {
    q: "How long does LLM SEO take to work?",
    a: "Retrieval-based engines like Perplexity and Google AI Overviews can reflect new or updated content within days to weeks once it is crawled. Influencing a model's baseline training knowledge is slower and less direct, which is why the reliable lever is being consistently citable across the fresh, crawlable web. Staying cited is ongoing: engines re-crawl, models update, and competitors publish, so citation footprint is something you compound, not a one-time fix.",
  },
  {
    q: "Can I do LLM SEO myself?",
    a: "The checklist on this page is a real starting point you can act on today. The harder part is doing it consistently across everything you publish, keeping entities and schema clean, and measuring whether engines actually cite you over time. That is how Triple & Co. runs marketing by default: our supervised AI agents produce quotable, structured content and Atlas tracks citations, while Lihi owns the strategy. Start with our free AI Visibility Audit to see where you stand.",
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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "LLM SEO: How to Get Cited by ChatGPT, Perplexity, and AI Search",
  description:
    "A practical B2B guide and checklist for making large language models understand, trust, and cite your brand.",
  author: {
    "@type": "Person",
    name: "Lihi Pinto",
    url: "https://www.tripleandco.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "Triple & Co.",
    url: "https://www.tripleandco.com",
  },
  mainEntityOfPage: "https://www.tripleandco.com/llm-seo",
  url: "https://www.tripleandco.com/llm-seo",
};

const engines = [
  "ChatGPT",
  "Perplexity",
  "Google AI Overviews",
  "Gemini",
  "Claude",
  "Copilot",
];

const checklist = [
  {
    title: "Answer the question in the first two sentences",
    description:
      "Lead every page with a direct, self-contained answer before any preamble. Models lift the sentence that resolves the query, so put the definition or verdict up top and elaborate underneath.",
  },
  {
    title: "Write quotable definitions and comparisons",
    description:
      "Crisp definitions, comparison tables, and clearly labeled lists are the formats engines extract most. A GEO-vs-SEO table or a one-line category definition is far more citable than a clever narrative.",
  },
  {
    title: "Back claims with specific, cited evidence",
    description:
      "Concrete numbers, named sources, and dates read as trustworthy to a model deciding what to attribute. Vague superlatives do not get cited; a specific, sourced statistic does.",
  },
  {
    title: "Make your entity unambiguous",
    description:
      "Use consistent naming, an About page, Organization and Person schema, and an llms.txt brief so a model can identify exactly who you are, what you do, and why you are credible.",
  },
  {
    title: "Add structured data (schema markup)",
    description:
      "FAQPage, Article, Organization, and Service schema give engines machine-readable structure. It is one of the clearest ways to tell an AI system what a page means, not just what it says.",
  },
  {
    title: "Let the AI crawlers in",
    description:
      "Explicitly allow GPTBot, PerplexityBot, Google-Extended, ClaudeBot, and CCBot in robots.txt. If you block the crawlers, you opt out of the answer entirely, no matter how good the content is.",
  },
  {
    title: "Build topical authority, not one-off posts",
    description:
      "Cover a topic in depth with a pillar page and supporting cluster articles that link to each other. Depth and internal linking signal the authority models look for when choosing a source.",
  },
  {
    title: "Measure citations and defend them",
    description:
      "Track whether target engines actually mention and cite you for the questions buyers ask, benchmark competitors, and update as models change. What gets measured gets grown.",
  },
];

export default function LlmSeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "LLM SEO" }]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">
                LLM SEO for B2B, a practical guide
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                How to Get Your Brand{" "}
                <span className="gradient-text">Cited by AI Search</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                Your buyers ask ChatGPT and Perplexity to shortlist vendors
                before they open a browser. LLM SEO is how you become the source
                those answers quote, instead of the competitor they name.
              </p>
              <p className="text-base text-purple-6 leading-relaxed mb-8">
                This is a practical guide: what LLM SEO is, how language models
                choose sources, and an eight-point checklist you can act on
                today. It is also exactly how Triple &amp; Co. runs marketing,
                so your citation footprint compounds instead of decaying.
              </p>
              <div className="flex flex-wrap items-center gap-5 mb-8">
                <Link
                  href="/ai-visibility-audit"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                >
                  Get a free AI Visibility Audit <span>&#8594;</span>
                </Link>
                <Link
                  href="/geo"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Read the GEO service page &#8594;
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
                  alt="Lihi Pinto, AI-native CMO, on LLM SEO for B2B"
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

      {/* Definition band (quotable) */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow mb-3">The definition</p>
            <div className="rounded-2xl bg-purple-05 p-8 lg:p-10 border border-purple-15">
              <p className="text-xl lg:text-2xl text-purple-9 font-semibold leading-snug">
                LLM SEO is the practice of optimizing your content so large
                language models understand, trust, and cite your brand in their
                answers. Where classic SEO earns a ranked link, LLM SEO earns a
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

      {/* How models choose sources */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              How Language Models Decide{" "}
              <span className="gradient-text">Who to Cite.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-purple-7 leading-relaxed mb-6">
              Answer engines do not rank ten blue links. They synthesize one
              answer and attribute the few sources that shaped it. Retrieval
              systems like Perplexity and Google AI Overviews fetch fresh,
              crawlable pages at query time, then quote the ones that most
              clearly and credibly resolve the question.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-purple-7 leading-relaxed mb-6">
              That changes what wins. Clarity beats cleverness. A model lifts a
              crisp definition, a labeled comparison, or a cited statistic long
              before it lifts a paragraph of atmosphere. It attributes sources
              whose identity and authority it can verify, and it ignores pages
              it cannot crawl at all.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl bg-white p-6 lg:p-8 border border-purple-15">
              <p className="text-purple-9 font-semibold leading-relaxed">
                To be cited, be the clearest, most credible, most crawlable
                answer to the exact question your buyer is asking.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1000px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The checklist</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              8 Ways to Get Cited by{" "}
              <span className="gradient-text">AI Search.</span>
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
              Work through these in order. The first three change your content,
              the middle three change your technical footprint, and the last two
              make it compound.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklist.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.05 + i * 0.05}>
                <div className="relative bg-white rounded-2xl p-6 lg:p-7 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                  <p className="text-sm font-black text-brand mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg font-extrabold text-purple-9 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet CTA */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <p className="eyebrow mb-3">Start free</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              See If AI Already{" "}
              <span className="gradient-text">Cites You.</span>
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              Run our free AI Visibility Audit to see whether ChatGPT and other
              engines mention you, what they get wrong, and where a competitor is
              cited instead. It is the first step of the checklist, done for you.
            </p>
            <Link
              href="/ai-visibility-audit"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Get my free AI Visibility Audit <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              LLM SEO, <span className="gradient-text">Explained</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-8">
              Want us to run this as a service? See{" "}
              <Link
                href="/geo"
                className="text-brand font-semibold hover:underline"
              >
                Generative Engine Optimization for B2B
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
