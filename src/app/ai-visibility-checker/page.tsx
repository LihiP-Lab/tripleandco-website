import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";
import { VisibilityChecker } from "@/components/VisibilityChecker";

export const metadata: Metadata = {
  title: "Free AI Visibility Checker: Test Your Site",
  description:
    "Enter your domain and get an instant 0 to 100 AI visibility score: llms.txt, AI crawler access, structured data, and Bing indexability. Free, no signup.",
  alternates: { canonical: "/ai-visibility-checker" },
  openGraph: {
    title: "Free AI Visibility Checker | Triple & Co.",
    description:
      "Instant 0 to 100 score on the four technical signals AI answer engines check before they can cite you. Free, no signup, about 10 seconds.",
    url: "https://www.tripleandco.com/ai-visibility-checker",
  },
};

const checksExplained = [
  {
    title: "llms.txt",
    weight: "20 points",
    line: "A plain-text map of your site written for AI engines. It tells ChatGPT, Claude, and Perplexity what you do and which pages matter, in one fetch instead of a full crawl.",
  },
  {
    title: "AI crawler access",
    weight: "30 points",
    line: "We parse your robots.txt against 10 AI crawlers, from GPTBot to PerplexityBot. Every blocked crawler is an answer engine that cannot read your site, so it cites a competitor instead.",
  },
  {
    title: "Structured data",
    weight: "25 points",
    line: "JSON-LD on your homepage: an Organization node, a WebSite node, and content types like FAQPage or Service. Schema is how engines resolve who you are without guessing.",
  },
  {
    title: "Bing indexability",
    weight: "25 points",
    line: "Bingbot access, noindex directives, sitemap, title, and meta description. Bing's index feeds ChatGPT search and Microsoft Copilot, so a Bing problem is an AI visibility problem.",
  },
];

const faqs = [
  {
    q: "What does the AI Visibility Checker test?",
    a: "It fetches your public site live and scores four technical signals: whether you publish an llms.txt file, whether your robots.txt allows 10 major AI crawlers including GPTBot, ClaudeBot, and PerplexityBot, whether your homepage carries JSON-LD structured data such as Organization and WebSite nodes, and whether Bing can index you (crawler access, noindex directives, sitemap, title, and meta description). You get a 0 to 100 score with a pass or fail on each check and the specific fix for every gap.",
  },
  {
    q: "Is it really free? What do you do with my domain?",
    a: "Yes. No signup, no email required, no credit card. We fetch a handful of public files from your site (the homepage, llms.txt, robots.txt, and sitemap.xml), score them, and show you the result. We keep a simple log of the domain checked and its score so we can improve the checker; your email is never collected unless you choose to request the full audit.",
  },
  {
    q: "I scored well. Does that mean AI recommends me?",
    a: "Not by itself. This checker tests whether AI engines can read and parse your site, the technical floor of AI visibility. Whether they actually cite you depends mostly on off-site authority: third-party listings, reviews, press, and content worth quoting. That is what the full AI Visibility Audit measures, by asking the engines real buyer questions and reading their answers.",
  },
  {
    q: "How is this different from the full AI Visibility Audit?",
    a: "The checker is instant and technical: it reads your site's plumbing in about 10 seconds. The full audit is run by Lihi and the agent team over two business days: it probes ChatGPT, Perplexity, and Google AI Overviews with real buyer questions, records what they say about you and your competitors, and prioritizes the fixes. The checker tells you if engines can read you. The audit tells you what they say.",
  },
  {
    q: "What is a good score?",
    a: "85 or above means the technical layer is in order and your effort should go to off-site authority and citable content. 60 to 84 means engines can read you but you are leaving signals on the table. Below 60, one or more engines likely cannot read or resolve your site at all, and those fixes usually take under a day of developer time.",
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

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "AI Visibility Checker",
  applicationCategory: "SEOApplication",
  operatingSystem: "Web",
  url: "https://www.tripleandco.com/ai-visibility-checker",
  description:
    "A free tool that scores a website's AI visibility from 0 to 100 by checking llms.txt presence, robots.txt access for 10 AI crawlers, JSON-LD structured data, and Bing indexability.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@id": "https://www.tripleandco.com/#organization" },
};

export default function AIVisibilityCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      {/* Hero + tool */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "AI Visibility Checker" },
            ]}
          />
          <p className="eyebrow mb-4">Free Instant Checker</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
            Can AI Engines Actually{" "}
            <span className="gradient-text">Read Your Site?</span>
          </h1>
          <p className="text-lg text-purple-7 leading-relaxed mb-8">
            Enter your domain and let Nova, our content research agent, fetch
            your site the way AI crawlers do. In about 10 seconds she scores
            the four technical signals that decide whether ChatGPT, Claude,
            and Perplexity can read you at all: llms.txt, crawler access,
            structured data, and Bing indexability.
          </p>
          <Suspense>
            <VisibilityChecker />
          </Suspense>
        </div>
      </section>

      {/* What we check */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The four signals</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              What the Score Is{" "}
              <span className="gradient-text">Made Of.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {checksExplained.map((c, i) => (
              <ScrollReveal key={c.title} delay={0.1 + i * 0.08}>
                <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-extrabold text-purple-9">
                      {c.title}
                    </h3>
                    <span className="text-xs font-bold text-brand uppercase tracking-wider">
                      {c.weight}
                    </span>
                  </div>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {c.line}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-10">
              The strategy behind these signals:{" "}
              <Link
                href="/geo"
                className="text-brand font-semibold hover:underline"
              >
                Generative Engine Optimization for B2B
              </Link>{" "}
              &middot;{" "}
              <Link
                href="/llm-seo"
                className="text-brand font-semibold hover:underline"
              >
                the LLM SEO guide
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Checker vs audit */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Next step</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6 text-center">
              The Checker Reads Your Site. The Audit Reads{" "}
              <span className="gradient-text">the Answers.</span>
            </h2>
            <p className="text-base text-purple-7 leading-relaxed text-center mb-10 max-w-[640px] mx-auto">
              A clean technical score gets you readable, not recommended. The
              free AI Visibility Audit asks the engines real buyer questions
              and shows what they say about you, where a competitor is cited
              instead, and which gaps to close first. Run by Lihi and the
              agent team, delivered in two business days.
            </p>
            <div className="text-center">
              <Link
                href="/ai-visibility-audit"
                className="inline-block rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Get the Full Audit &rarr;
              </Link>
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
              The Checker, <span className="gradient-text">Explained.</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
        </div>
      </section>
    </>
  );
}
