import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Podcasts",
  description:
    "Battle-tested B2B marketing strategies with AI. Short, sharp episodes by Lihi Pinto for CMOs, founders, and marketers serious about growth.",
  alternates: { canonical: "/insights/podcasts" },
  openGraph: {
    title: "Podcasts | Triple & Co.",
    description:
      "Battle-tested B2B marketing strategies with AI. Short, sharp episodes by Lihi Pinto for CMOs and founders.",
    url: "https://www.tripleandco.com/insights/podcasts",
    siteName: "Triple & Co.",
    type: "website",
  },
};

const episodes = [
  {
    number: 1,
    title:
      "How AI is Reshaping B2B SaaS Marketing and How to Use It Like a Pro: Starting TODAY!",
    description:
      "The AI revolution isn\u2019t coming. It\u2019s here. Learn which AI tools are actually moving the needle for B2B SaaS marketing teams and how to adopt them without the hype.",
  },
  {
    number: 2,
    title:
      "How to Make AI Models Like ChatGPT Work Like a Senior B2B SaaS Marketer",
    description:
      "Most marketers use ChatGPT like a search engine. In this episode, Lihi shows how to prompt AI to think like a senior marketer, with strategy, context, and precision.",
  },
  {
    number: 3,
    title:
      "Create High-Impact Marketing Content with ChatGPT in 30 Minutes",
    description:
      "From blank page to polished blog post, email sequence, or social campaign. A step-by-step walkthrough of creating production-ready marketing content with AI.",
  },
  {
    number: 4,
    title:
      "Personalize Every Message with ChatGPT at Scale and in Minutes",
    description:
      "Personalization at scale used to require an entire team. Now one marketer with the right prompts can create hyper-personalized outreach for every segment.",
  },
  {
    number: 5,
    title: "How to Build a Marketing or Sales Deck in Minutes",
    description:
      "Stop spending days on decks. Lihi walks through her process for using AI to create compelling, on-brand presentations that actually close deals.",
  },
];

export default function PodcastsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: "Podcasts" },
            ]}
          />

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2H3v2a9 9 0 004 7.47V22h2v-2.54A8.96 8.96 0 0012 20a8.96 8.96 0 003-.54V22h2v-2.53A9 9 0 0021 12v-2h-2z" />
                </svg>
              </div>
              <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                Podcast
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-4">
              Triple &amp; Co.{" "}
              <span className="gradient-text">Podcast</span>
            </h1>
            <p className="text-lg text-purple-7 leading-relaxed">
              Real-world B2B marketing challenges, solved with AI. Every episode
              is short, sharp, and straight to the point. No fluff. No theory.
              Just battle-tested strategies for CMOs, founders, and marketers
              serious about growth.
            </p>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[900px] px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-purple-9 mb-10">
              Episodes
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {episodes.map((ep, i) => (
              <ScrollReveal key={ep.number} delay={0.05 + i * 0.06}>
                <article className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-[var(--shadow-base)] border border-purple-15 overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)] card-gradient-top">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-black text-brand">
                        {ep.number}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-extrabold text-purple-9 tracking-tight leading-snug mb-2">
                        {ep.title}
                      </h3>
                      <p className="text-sm text-purple-7 leading-relaxed">
                        {ep.description}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Ready to Turn AI Into Your Unfair Advantage?
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              Book a diagnostic call with Lihi to see how AI-powered marketing
              can accelerate your B2B growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/revenue-diagnostic#book"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Book a Diagnostic Call <span>&#8594;</span>
              </Link>
              <Link
                href="/insights"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-purple-15 bg-white px-8 py-4 text-base font-semibold text-purple-9 transition-all hover:border-brand/30 hover:-translate-y-0.5"
              >
                Read Articles <span>&#8594;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
