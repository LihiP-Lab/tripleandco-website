import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { InsightArticleCard } from "@/components/InsightArticleCard";
import { InsightToolHook } from "@/components/InsightToolHook";
import { articlesByCategory, CATEGORY_AGENTS } from "@/lib/insights";

export const metadata: Metadata = {
  title: "CMO & CRO as a Service Insights",
  description:
    "The new execution model: why B2B companies are replacing agency retainers with CMO and CRO as a Service, and the AI-native layer that makes it scale.",
  alternates: { canonical: "/insights/revenue" },
  openGraph: {
    title: "CMO & CRO as a Service Insights | Triple & Co.",
    description:
      "Why B2B companies are replacing agency retainers with CMO and CRO as a Service, and the AI-native execution layer that makes it work at scale.",
    url: "https://www.tripleandco.com/insights/revenue",
    siteName: "Triple & Co.",
    type: "website",
  },
};

const coverage = [
  {
    heading: "The Model",
    items: [
      "CMO as a Service vs. Fractional CMO vs. agency",
      "What a full marketing function actually includes",
      "Pricing tiers and what each one delivers",
      "How senior oversight and AI execution combine",
    ],
  },
  {
    heading: "The Economics",
    items: [
      "Real market costs, in real numbers",
      "The hidden costs of the traditional retainer",
      "Cost per outcome, not cost per hour",
      "When a full-time hire is actually the right call",
    ],
  },
  {
    heading: "The Execution Layer",
    items: [
      "Eight specialist agents under human supervision",
      "The Orchestrator Method: Brief, Run, Deliver",
      "Woman in the Loop quality control",
      "From strategy doc to shipped pipeline",
    ],
  },
];

export default function RevenuePage() {
  const agent = CATEGORY_AGENTS["CMO & CRO as a Service"];
  const articles = articlesByCategory("CMO & CRO as a Service");
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-12 lg:pt-28 lg:pb-16 bg-purple-05 overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: "CMO & CRO as a Service" },
            ]}
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-pink-05 px-3 py-1 text-xs font-bold text-brand-dark mb-4">
              Content Track
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-4">
              CMO &amp; CRO <span className="gradient-text">as a Service</span>
            </h1>
            <p className="text-lg text-purple-7 leading-relaxed">
              The new execution model. Why elite B2B companies are replacing
              legacy agency retainers and lone fractional hires with a full
              marketing and revenue function: senior strategy, AI-native
              execution, and human oversight in one engagement.
            </p>
          </div>

          {/* Track host */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-purple-15 bg-white px-5 py-3 pr-8">
            <div className="relative h-[72px] w-[44px] shrink-0">
              <Image
                src={agent.img}
                alt={`${agent.name}, ${agent.role}`}
                fill
                className="object-contain object-bottom"
                sizes="44px"
              />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-0.5">
                Track host
              </p>
              <p className="text-sm font-extrabold text-purple-9">
                {agent.name} &middot;{" "}
                <span className="font-semibold text-purple-6">
                  {agent.role}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles in this track */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand mb-2">
              In this track
            </p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-9 mb-8">
              The Playbooks
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={0.05 + i * 0.06}>
                <InsightArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What the track covers */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-9 mb-2">
              What This Track Covers
            </h2>
            <p className="text-purple-6 mb-10 max-w-2xl">
              Every piece answers one question: how does a scaling B2B company
              get a complete marketing and revenue function without building a
              department?
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coverage.map((group, i) => (
              <ScrollReveal key={group.heading} delay={0.05 + i * 0.06}>
                <div className="rounded-2xl bg-white border border-purple-15 p-6 card-gradient-top h-full">
                  <h3 className="text-sm font-bold text-purple-9 mb-4 uppercase tracking-wide">
                    {group.heading}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-purple-7"
                      >
                        <span className="w-1.5 h-1.5 rounded-full gradient-bar shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tool hook */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <InsightToolHook id="score" />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              See the Model on Your Own Numbers
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              Book a free diagnostic call with Lihi and find out what CMO or
              CRO as a Service would look like for your stage and market.
            </p>
            <Link
              href="/revenue-diagnostic#book"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a Diagnostic Call <span aria-hidden>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
