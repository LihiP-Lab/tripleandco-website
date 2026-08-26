import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { InsightsNewsletter } from "@/components/InsightsNewsletter";
import { InsightsHub } from "@/components/InsightsHub";
import { InsightToolStrip } from "@/components/InsightToolHook";
import {
  ARTICLES,
  articleHref,
  CATEGORY_AGENTS,
  FEATURED_ARTICLE,
  TRACKS,
} from "@/lib/insights";

// ---------------------------------------------------------------------------
// SEO METADATA
// Title: 43 chars | Meta: 148 chars
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "AI B2B Growth Hub | CMO & CRO as a Service",
  description:
    "Battle-tested B2B playbooks from AI-Native fractional CMO and CRO leaders. Revenue architecture for the AI era, without the agency overhead.",
  alternates: { canonical: "https://www.tripleandco.com/insights" },
  openGraph: {
    title: "AI B2B Growth Hub | CMO & CRO as a Service",
    description:
      "Battle-tested B2B playbooks from AI-Native fractional CMO and CRO leaders. Revenue architecture for the AI era, without the agency overhead.",
    url: "https://www.tripleandco.com/insights",
    siteName: "Triple & Co.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI B2B Growth Hub | CMO & CRO as a Service",
    description:
      "Battle-tested B2B playbooks from AI-Native fractional CMO and CRO leaders. Revenue architecture for the AI era.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.tripleandco.com/insights#blog",
  name: "Triple & Co. Insights",
  description:
    "Battle-tested B2B playbooks from AI-native fractional CMO and CRO leaders. Revenue architecture for the AI era.",
  url: "https://www.tripleandco.com/insights",
  publisher: {
    "@type": "Organization",
    name: "Triple & Co.",
    url: "https://www.tripleandco.com",
  },
  blogPost: ARTICLES.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    url: `https://www.tripleandco.com${articleHref(a)}`,
    datePublished: a.dateISO,
    author: { "@type": "Person", name: "Lihi Pinto" },
  })),
};

export default function InsightsPage() {
  const featured = FEATURED_ARTICLE;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {/* ================================================================
          HERO (dark, per Insights System)
      ================================================================ */}
      <section className="relative bg-purple-9 pt-16 pb-32 lg:pt-24 lg:pb-40 overflow-hidden">
        {/* Radial brand glow */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 85% 20%, rgba(254,52,101,0.14) 0%, transparent 65%), radial-gradient(ellipse 50% 60% at 5% 95%, rgba(137,109,156,0.18) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-8">
          {/* Breadcrumb (light variant) */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-purple-4 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-purple-4">
                /
              </li>
              <li className="text-purple-2 font-medium">Insights</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand mb-4">
              AI B2B Growth Resource Hub
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-white mb-5">
              Revenue Playbooks for B2B Leaders Who Build in the{" "}
              <span className="gradient-text">AI Era</span>
            </h1>
            <p className="text-lg text-purple-3 leading-relaxed max-w-2xl">
              Marketing for B2B in the AI era is not a channel problem. It is
              an architecture problem. Everything here is drawn from live
              Fractional CMO and CRO engagements. No theory. No filler. Only
              what we have shipped, measured, and repeated.
            </p>
          </div>

          {/* Quick paths */}
          <div className="flex flex-wrap gap-2 mt-8">
            <a
              href="#all-insights"
              className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-dark"
            >
              Browse the Library
            </a>
            <a
              href="#tracks"
              className="rounded-full border border-purple-7 px-4 py-2 text-sm font-semibold text-purple-2 transition-all hover:border-brand hover:text-white"
            >
              Explore the Tracks
            </a>
            <Link
              href="/insights/podcasts"
              className="rounded-full border border-purple-7 px-4 py-2 text-sm font-semibold text-purple-2 transition-all hover:border-brand hover:text-white"
            >
              Podcast
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          FEATURED ARTICLE (overlapping dark card)
      ================================================================ */}
      {featured && (
        <section className="bg-purple-05 pb-12 lg:pb-16">
          <div className="mx-auto max-w-[1200px] px-8 -mt-20 lg:-mt-24 relative">
            <ScrollReveal>
              <div className="relative rounded-2xl bg-purple-85 overflow-hidden shadow-[0_20px_48px_rgba(27,22,31,0.35)]">
                {/* Gradient top bar */}
                <div className="h-1 gradient-bar" aria-hidden />
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Copy */}
                  <div className="p-8 lg:p-12 flex flex-col items-start gap-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                        Featured
                      </span>
                      {featured.pillar && (
                        <span className="inline-flex items-center rounded-full border border-purple-6 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-purple-3">
                          Pillar Article
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl lg:text-[32px] font-extrabold text-white tracking-tight leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-purple-3 leading-relaxed">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-15 shrink-0">
                        <Image
                          src="/images/lihi.png"
                          alt="Lihi Pinto"
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                      <div className="leading-tight">
                        <p className="text-[13px] font-semibold text-white">
                          Lihi Pinto
                        </p>
                        <p className="text-[13px] text-purple-4">
                          {featured.date} &middot; {featured.readTime}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={articleHref(featured)}
                      className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] mt-1"
                    >
                      Read the Full Story <span aria-hidden>&#8594;</span>
                    </Link>
                  </div>

                  {/* Featured visual panel */}
                  <div className="relative hidden lg:block overflow-hidden min-h-[404px]">
                    <Image
                      src="/images/insights/featured.png"
                      alt={featured.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 568px, 100vw"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)",
                      }}
                    />
                    {/* Label */}
                    <div className="absolute bottom-8 left-8">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-purple-3 mb-1">
                        Featured Insight
                      </p>
                      <p className="text-sm text-white font-semibold">
                        {featured.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ================================================================
          ARTICLES GRID (client, real filtering)
      ================================================================ */}
      <InsightsHub />

      {/* ================================================================
          THREE CONTENT TRACKS (agent-hosted)
      ================================================================ */}
      <section className="py-12 lg:py-16 bg-purple-05" id="tracks">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-purple-9 mb-2">
              Browse by Track
            </h2>
            <p className="text-purple-6 mb-2 text-base">
              Three content tracks. Each one built around a decision a scaling
              B2B company actually has to make.
            </p>
            <Link
              href="/agents"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark transition-colors mb-8"
            >
              Each track is run by one of our marketing agents{" "}
              <span aria-hidden>&#8594;</span>
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRACKS.map((track, i) => {
              const agent = CATEGORY_AGENTS[track.category];
              return (
                <ScrollReveal key={track.category} delay={0.05 + i * 0.07}>
                  <Link
                    href={track.href}
                    className="group relative flex flex-col gap-4 rounded-2xl border border-purple-15 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)] hover:border-brand/30 card-gradient-top h-full"
                  >
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">
                        {track.tagline}
                      </p>
                      <h3 className="text-lg font-extrabold text-purple-9 leading-snug">
                        {track.category}
                      </h3>
                    </div>
                    <p className="text-sm text-purple-7 leading-relaxed flex-1 pr-16">
                      {track.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand group-hover:gap-2 transition-all">
                      Explore <span aria-hidden>&#8594;</span>
                    </span>
                    {/* Track-owner agent */}
                    <div className="absolute bottom-2 right-3 h-[120px] w-[72px] pointer-events-none transition-transform group-hover:-translate-y-1">
                      <Image
                        src={agent.img}
                        alt={`${agent.name}, ${agent.role}`}
                        title={`${agent.name} · ${agent.role}`}
                        fill
                        className="object-contain object-bottom"
                        sizes="72px"
                      />
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          DO IT, DON'T JUST READ IT (product hooks)
      ================================================================ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand mb-2">
              Do it, don&apos;t just read it
            </p>
            <h2 className="text-2xl font-extrabold text-purple-9 mb-2">
              Turn the Playbooks Into Numbers
            </h2>
            <p className="text-purple-6 mb-8 text-base max-w-2xl">
              Every playbook in this hub maps to a live instrument. Run one and
              see where your own operation stands before you read another word.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <InsightToolStrip />
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          NEWSLETTER (Stay Sharp)
      ================================================================ */}
      <section className="relative bg-purple-9 py-14 lg:py-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 90% 50%, rgba(254,52,101,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center xl:pr-48">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand mb-3">
              Stay Sharp
            </p>
            <h2 className="text-2xl lg:text-[32px] font-extrabold text-white tracking-tight leading-tight mb-3">
              Get the insights that move the number.
            </h2>
            <p className="text-purple-3 text-base">
              Weekly intelligence on B2B marketing and AI, directly to your
              inbox. Amplified by Sage, our Content Repurposing Engine.
            </p>
          </div>
          <div className="lg:justify-self-end w-full lg:w-auto">
            <InsightsNewsletter />
          </div>
        </div>
        {/* Sage, Content Repurposing Engine */}
        <div className="absolute bottom-0 right-8 h-[180px] w-[104px] hidden xl:block pointer-events-none">
          <Image
            src="/images/agents/sage.png"
            alt="Sage, Content Repurposing Engine agent with megaphone"
            fill
            className="object-contain object-bottom"
            sizes="104px"
          />
        </div>
      </section>

      {/* ================================================================
          PODCASTS PROMO
      ================================================================ */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl border border-purple-15 bg-purple-05 p-8 lg:p-12 text-center card-gradient-top overflow-hidden">
              <p className="eyebrow mb-3">Listen &amp; learn</p>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-9 tracking-tight mb-4">
                Triple &amp; Co. Podcast
              </h2>
              <p className="text-purple-7 mb-8 max-w-xl mx-auto">
                Short, sharp episodes on real-world B2B marketing challenges
                solved with AI. No fluff. No theory. Just battle-tested
                strategies from the front lines of fractional CMO and CRO
                engagements worldwide. Produced with Lumen, our Video &amp;
                Motion Director.
              </p>
              <Link
                href="/insights/podcasts"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Browse Episodes <span aria-hidden>&#8594;</span>
              </Link>
              {/* Lumen, Video & Motion Director */}
              <div className="absolute bottom-0 right-6 h-[160px] w-[132px] hidden lg:block pointer-events-none">
                <Image
                  src="/images/agents/lumen.png"
                  alt="Lumen, Video and Motion Director agent with clapperboard"
                  fill
                  className="object-contain object-bottom"
                  sizes="132px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          AUTHORITY FOOTER, ABOUT THE ARCHITECT
      ================================================================ */}
      <section className="py-12 lg:py-16 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl border border-purple-15 bg-white p-8 lg:p-12 flex flex-col md:flex-row gap-8 items-start card-gradient-top">
              {/* Photo */}
              <div className="shrink-0">
                <div className="relative w-24 h-24 md:w-[100px] md:h-[100px] rounded-2xl overflow-hidden border border-purple-15">
                  <Image
                    src="/images/lihi.png"
                    alt="Lihi Pinto, Founder of Triple & Co."
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
              </div>

              {/* Copy */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="eyebrow mb-2">About the Architect</p>
                  <h2 className="text-xl md:text-2xl font-extrabold text-purple-9 leading-snug tracking-tight">
                    Lihi Pinto, Founder of Triple &amp; Co.
                  </h2>
                </div>

                <p className="text-purple-7 text-base leading-relaxed max-w-2xl">
                  Lihi Pinto is a B2B revenue architect with over 15 years of
                  experience and a track record of helping companies raise more
                  than $70M in venture capital. She built her methodology inside
                  the Israeli Start-Up Nation ecosystem, an environment where
                  speed, capital efficiency, and aggressive growth are not
                  aspirations but survival requirements.
                </p>
                <p className="text-purple-7 text-base leading-relaxed max-w-2xl">
                  Everything published in this hub reflects live execution:
                  Fractional CMO and Fractional CRO engagements, native AI CRO
                  and CMO builds, and go-to-market architecture across North
                  America, Europe, and the Middle East. Triple &amp; Co. blends
                  the relentless growth instinct of the Israeli tech ecosystem
                  with a timezone-agnostic, AI-native operating model to build
                  predictable revenue engines for B2B companies anywhere in the
                  world.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "15+ Years B2B",
                    "$70M+ Capital Raised",
                    "Global AI Execution",
                    "Israeli Tech Ecosystem",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border border-purple-15 bg-purple-05 text-purple-6"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 pt-1">
                  <Link
                    href="/about"
                    className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
                  >
                    Full story <span aria-hidden>&#8594;</span>
                  </Link>
                  <Link
                    href="/revenue-diagnostic#book"
                    className="text-sm font-semibold text-purple-6 hover:text-purple-9 transition-colors"
                  >
                    Work with Lihi
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================
          CTA
      ================================================================ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Ready to Turn Playbooks into Pipeline?
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              Book a free diagnostic call with Lihi and get a concrete revenue
              architecture plan built for your stage, your market, and the AI
              era.
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
