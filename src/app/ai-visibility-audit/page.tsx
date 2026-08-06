import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";
import { AuditForm } from "@/components/AuditForm";

export const metadata: Metadata = {
  title: "Free AI Visibility Audit for B2B SaaS",
  description:
    "See what ChatGPT, Perplexity, Gemini, and Google AI Overviews say about your brand. Free AI Visibility Audit for B2B SaaS, run by an AI-native CMO.",
  alternates: { canonical: "/ai-visibility-audit" },
  openGraph: {
    title: "Free AI Visibility Audit for B2B SaaS | Triple & Co.",
    description:
      "Does AI mention your brand or a competitor? Get a free audit of how ChatGPT, Perplexity, and AI Overviews see you.",
    url: "https://www.tripleandco.com/ai-visibility-audit",
  },
};

const faqs = [
  {
    q: "What is an AI Visibility Audit?",
    a: "An AI Visibility Audit checks whether AI answer engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews mention and cite your brand when buyers ask category and vendor questions. It shows what these engines say about you, what they get wrong, where a competitor is cited instead, and the specific gaps in your content, structure, and authority that keep you out of the answer.",
  },
  {
    q: "How much does the audit cost?",
    a: "It is free. There is no cost and no obligation. We run it because it is the clearest way to show B2B SaaS teams where they stand in AI search, and because it reflects how we think about marketing in the AI era.",
  },
  {
    q: "What do I get and how long does it take?",
    a: "You get a written read on how AI engines currently see your brand: which questions surface you, which surface a competitor, what the engines get right or wrong, and the highest-leverage fixes to become more citable. We send it to your inbox within two business days of your request.",
  },
  {
    q: "What happens after the audit?",
    a: "Nothing you do not ask for. The audit is yours to act on however you like. If you want help closing the gaps, our GEO and CMO as a Service engagements build citable, structured content into how your marketing runs. If not, you still walk away with a clear picture of your AI search visibility.",
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
  name: "AI Visibility Audit",
  serviceType: "AI search visibility audit",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B SaaS companies",
  },
  description:
    "A free audit of how AI answer engines such as ChatGPT, Perplexity, Gemini, and Google AI Overviews mention and cite a B2B SaaS brand.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://www.tripleandco.com/ai-visibility-audit",
};

const covers = [
  {
    title: "What AI says about you",
    line: "The actual answers ChatGPT, Perplexity, and Gemini give when buyers ask about your category and your brand.",
  },
  {
    title: "Where a competitor wins",
    line: "The buyer questions where an engine cites a rival instead of you, and why the model trusts them more.",
  },
  {
    title: "What the engines get wrong",
    line: "Outdated, missing, or incorrect claims about your product that are quietly shaping buyer perception.",
  },
  {
    title: "Your highest-leverage fixes",
    line: "The specific content, structure, and authority gaps to close first to become more citable, fast.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell us your domain",
    line: "Share your website and, optionally, a competitor to benchmark against. Takes under a minute.",
  },
  {
    n: "02",
    title: "The agents run the checks",
    line: "Nova probes the engines with real buyer questions, Atlas scores the citations, and Lihi reviews the findings.",
  },
  {
    n: "03",
    title: "You get a clear read",
    line: "A written audit in your inbox within two business days. Yours to act on, no strings attached.",
  },
];

export default function AIVisibilityAuditPage() {
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

      {/* Hero + form */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "AI Visibility Audit" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Free AI Visibility Audit</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                Does AI Recommend You, or Your{" "}
                <span className="gradient-text">Competitor?</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                Your buyers are asking ChatGPT, Perplexity, and Google AI
                Overviews who to shortlist. You cannot see those answers. We can.
              </p>
              <p className="text-base text-purple-6 leading-relaxed mb-8">
                Our free AI Visibility Audit shows exactly how AI engines
                describe your brand today, where a competitor gets cited instead,
                and the fastest way to get into the answer. Run by an AI-native
                CMO and a supervised agent team.
              </p>
              <p className="text-xs text-purple-6 font-medium uppercase tracking-wider mb-10">
                100% free &middot; No pitch deck &middot; Delivered in two
                business days
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {covers.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-xl border border-purple-15 bg-white p-5"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bar shrink-0 mt-2" />
                      <div>
                        <h3 className="text-sm font-bold text-purple-9 mb-1">
                          {c.title}
                        </h3>
                        <p className="text-[13px] text-purple-7 leading-relaxed">
                          {c.line}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">How it works</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              Three Steps to Know Where{" "}
              <span className="gradient-text">You Stand.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={0.1 + i * 0.12}>
                <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                  <p className="text-sm font-black text-brand mb-3">{s.n}</p>
                  <h3 className="text-xl font-extrabold text-purple-9 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {s.line}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-10">
              Want the strategy behind it? See{" "}
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

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              The Audit, <span className="gradient-text">Explained</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
        </div>
      </section>
    </>
  );
}
