import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { InsightArticleCard } from "@/components/InsightArticleCard";
import { InsightToolHook } from "@/components/InsightToolHook";
import {
  articlesByCategory,
  CATEGORY_AGENTS,
  type InsightCategory,
} from "@/lib/insights";

export const metadata: Metadata = {
  title: "Leadership & AI Strategy Insights",
  description:
    "Two tracks for founders and CEOs: when fractional leadership beats a full-time hire, and how to architect an AI-native marketing function that scales.",
  alternates: { canonical: "/insights/strategy" },
  openGraph: {
    title: "Leadership & AI Strategy Insights | Triple & Co.",
    description:
      "When fractional leadership beats a full-time hire, and how to architect an AI-native marketing function that scales.",
    url: "https://www.tripleandco.com/insights/strategy",
    siteName: "Triple & Co.",
    type: "website",
  },
};

const tracks: Array<{
  id: string;
  category: InsightCategory;
  tagline: string;
  heading: string;
  description: string;
  bullets: string[];
}> = [
  {
    id: "fractional-leadership",
    category: "Fractional Leadership",
    tagline: "Hire for Leverage, Not Headcount",
    heading: "Fractional Leadership",
    description:
      "A decision framework for founders and CEOs: when a Fractional CMO or Fractional CRO outperforms a full-time hire, how to structure the engagement, and the signals that tell you it is time to bring one in.",
    bullets: [
      "Fractional CMO vs. full-time hire vs. agency: the real trade-offs",
      "How to structure and scope a fractional engagement",
      "The signals that say it is time to bring in senior leadership",
      "What senior oversight looks like when AI does the execution",
    ],
  },
  {
    id: "native-ai",
    category: "Native AI Marketing",
    tagline: "Agents, Not Just Tools",
    heading: "Native AI Marketing",
    description:
      "How to architect a marketing function for B2B in the AI era: supervised AI agents, human-in-the-loop oversight, and the operating model that lets a lean team execute like an enterprise.",
    bullets: [
      "Why AI tools alone do not move pipeline quality",
      "Supervised AI: agents with human-in-the-loop review",
      "The operating model behind an AI-native marketing function",
      "GEO and LLM SEO: being found by AI, not just by Google",
    ],
  },
];

export default function StrategyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: "Leadership & AI Strategy" },
            ]}
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-pink-05 px-3 py-1 text-xs font-bold text-brand-dark mb-4">
              Content Tracks
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-4">
              Leadership &amp; <span className="gradient-text">AI Strategy</span>
            </h1>
            <p className="text-lg text-purple-7 leading-relaxed">
              Two tracks, one question: how should a scaling B2B company staff
              and architect its growth function in the AI era? Decision
              frameworks for fractional leadership, and operating models for
              AI-native marketing.
            </p>
          </div>

          {/* Jump links */}
          <div className="flex flex-wrap gap-2 mt-8">
            {tracks.map((track) => (
              <a
                key={track.id}
                href={`#${track.id}`}
                className="rounded-full border border-purple-15 bg-white px-4 py-2 text-sm font-semibold text-purple-6 hover:border-brand/40 hover:text-purple-9 transition-all"
              >
                {track.heading}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks */}
      {tracks.map((track, ti) => {
        const agent = CATEGORY_AGENTS[track.category];
        const articles = articlesByCategory(track.category);
        return (
          <section
            key={track.id}
            id={track.id}
            className={`py-16 lg:py-20 scroll-mt-24 ${
              ti % 2 === 0 ? "bg-white" : "bg-purple-05"
            }`}
          >
            <div className="mx-auto max-w-[1200px] px-8">
              <ScrollReveal>
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
                  <div className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">
                      {track.tagline}
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-9 mb-3">
                      {track.heading}
                    </h2>
                    <p className="text-purple-6 leading-relaxed">
                      {track.description}
                    </p>
                  </div>
                  {/* Track host */}
                  <div
                    className={`inline-flex items-center gap-4 rounded-2xl border border-purple-15 px-5 py-3 pr-8 shrink-0 ${
                      ti % 2 === 0 ? "bg-purple-05" : "bg-white"
                    }`}
                  >
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
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <div
                  className={`rounded-2xl border border-purple-15 p-6 lg:p-7 mb-8 ${
                    ti % 2 === 0 ? "bg-purple-05" : "bg-white"
                  }`}
                >
                  <h3 className="text-sm font-bold text-purple-9 mb-4 uppercase tracking-wide">
                    In this track
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {track.bullets.map((item) => (
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

              {articles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article, i) => (
                    <ScrollReveal key={article.slug} delay={0.05 + i * 0.06}>
                      <InsightArticleCard article={article} />
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                <ScrollReveal delay={0.1}>
                  <p className="text-sm text-purple-6">
                    The first playbooks in this track are in production with{" "}
                    {agent.name}. Meanwhile, the{" "}
                    <Link
                      href="/insights"
                      className="font-semibold text-brand hover:text-brand-dark transition-colors"
                    >
                      full library
                    </Link>{" "}
                    covers the adjacent decisions.
                  </p>
                </ScrollReveal>
              )}
            </div>
          </section>
        );
      })}

      {/* Tool hook */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <InsightToolHook id="visibility" />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Map Your Own Growth Architecture
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              Book a free diagnostic call with Lihi and get a straight answer
              on leadership, structure, and the AI-native operating model that
              fits your stage.
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
