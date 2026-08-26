"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import { InsightArticleCard } from "./InsightArticleCard";
import { ARTICLES, type InsightCategory } from "@/lib/insights";

const FILTERS: Array<"All" | InsightCategory> = [
  "All",
  "CMO & CRO as a Service",
  "Fractional Leadership",
  "Native AI Marketing",
];

export function InsightsHub() {
  const [active, setActive] = useState<"All" | InsightCategory>("All");

  const visible =
    active === "All"
      ? ARTICLES.filter((a) => !a.featured)
      : ARTICLES.filter((a) => a.category === active);

  return (
    <section className="py-12 lg:py-20 bg-white" id="all-insights">
      <div className="mx-auto max-w-[1200px] px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand mb-2">
                The Library
              </p>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-9">
                All Insights
              </h2>
            </div>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter articles by topic"
            >
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  aria-pressed={active === filter}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all cursor-pointer ${
                    active === filter
                      ? "bg-brand text-white"
                      : "border border-purple-15 text-purple-6 hover:border-brand/40 hover:text-purple-9"
                  }`}
                >
                  {filter}
                </button>
              ))}
              <Link
                href="/insights/podcasts"
                className="rounded-full border border-purple-15 px-4 py-2 text-sm font-semibold text-purple-6 hover:border-brand/40 hover:text-purple-9 transition-all"
              >
                Podcasts &#8599;
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((article, i) => (
            <ScrollReveal key={article.slug} delay={0.05 + i * 0.04}>
              <InsightArticleCard article={article} />
            </ScrollReveal>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-purple-6 text-sm py-8">
            Nothing published in this track yet. It is coming.
          </p>
        )}
      </div>
    </section>
  );
}
