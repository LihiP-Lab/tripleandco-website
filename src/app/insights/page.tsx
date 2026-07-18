import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { InsightsNewsletter } from "@/components/InsightsNewsletter";

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

// ---------------------------------------------------------------------------
// CONTENT DATA
// ---------------------------------------------------------------------------
const topicCategories = [
  { label: "All", href: "/insights" },
  { label: "CMO & CRO as a Service", href: "/insights/revenue" },
  { label: "Fractional Leadership", href: "/insights/strategy" },
  { label: "Native AI Marketing", href: "/insights/strategy" },
  { label: "Podcasts", href: "/insights/podcasts" },
];

const silos = [
  {
    tagline: "The New Execution Model",
    label: "CMO & CRO as a Service",
    description:
      "Why elite B2B companies are replacing legacy agency retainers with CMO as a Service and CRO as a Service, and the AI-native execution layer that makes it work at scale.",
    href: "/insights/revenue",
    accent: "brand",
    agent: {
      img: "/images/agents/rex.png",
      name: "Rex",
      role: "Growth Campaign Strategist",
    },
  },
  {
    tagline: "Hire for Leverage, Not Headcount",
    label: "Fractional Leadership",
    description:
      "A decision framework for founders and CEOs: when a Fractional CMO or Fractional CRO outperforms a full-time hire, how to structure the engagement, and the signals that tell you it is time to bring one in.",
    href: "/insights/strategy",
    accent: "purple",
    agent: {
      img: "/images/agents/nova.png",
      name: "Nova",
      role: "Content Research Analyst",
    },
  },
  {
    tagline: "Agents, Not Just Tools",
    label: "Native AI Marketing",
    description:
      "How to architect a marketing function for B2B in the AI era: supervised AI agents, human-in-the-loop oversight, and the operating model that lets a lean team execute like an enterprise.",
    href: "/insights/strategy",
    accent: "brand",
    agent: {
      img: "/images/agents/camille.png",
      name: "Camille",
      role: "Brand Voice Generator",
    },
  },
];

const articles = [
  {
    date: "Jun 2026",
    title:
      "Outsourced CMO in Israel: What It Really Costs in 2026 (and What You Get)",
    excerpt:
      "Full-time hire, outsourced marketing manager, or CMO as a Service? Real Israeli market numbers in shekels, what each tier actually delivers, and how to choose for your stage.",
    category: "CMO & CRO as a Service",
    href: "/insights/outsourced-cmo-israel-cost",
    featured: true,
    pillar: true,
    readTime: "12 min read",
    image: "/images/insights/featured.png",
  },
  {
    date: "Jun 2026",
    title: "What Is CMO as a Service? The Complete Guide for B2B Founders",
    excerpt:
      "Not a fractional hire. Not an agency retainer. CMO as a Service is a full marketing function: strategy, AI execution, and senior oversight in one engagement. Here is everything you need to know.",
    category: "CMO & CRO as a Service",
    href: "/insights/what-is-cmo-as-a-service",
    featured: false,
    pillar: true,
    readTime: "10 min read",
    image: "/images/insights/revenue.png",
  },
  {
    date: "Jun 2026",
    title: "Why Your B2B Company Needs a Native AI CMO, Not Just AI Tools",
    excerpt:
      "Every B2B marketing team is using AI. Pipeline quality has not improved proportionally. The problem is not the tools. It is the architecture, and here is what native AI marketing actually looks like.",
    category: "Native AI Marketing",
    href: "/insights/native-ai-cmo-marketing-for-b2b-in-the-ai-era",
    featured: false,
    pillar: true,
    readTime: "9 min read",
    image: "/images/insights/native-ai.png",
  },
  {
    date: "8 Jul 2025",
    title: "How to Write Strategic, Precise, and High-Impact Marketing Prompts",
    excerpt:
      "AI is only as good as the prompts you give it. Learn how to craft marketing prompts that produce content your team can actually use.",
    category: "Native AI Marketing",
    featured: false,
    pillar: false,
    readTime: "6 min read",
    image: "/images/insights/native-ai.png",
  },
  {
    date: "30 May 2025",
    title: "The Future Is Here and It Is Not What We Feared",
    excerpt:
      "AI is not replacing marketers. It is giving the best ones superpowers. Here is what the future of marketing actually looks like.",
    category: "Native AI Marketing",
    featured: false,
    pillar: false,
    readTime: "5 min read",
    image: "/images/insights/revenue.png",
  },
  {
    date: "24 Mar 2024",
    title: "How a Fractional CMO Can Transform Your Startup",
    excerpt:
      "Fractional CMOs bring executive-level marketing leadership without the overhead. Here is what to expect and how to get the most out of the engagement.",
    category: "Fractional Leadership",
    featured: false,
    pillar: false,
    readTime: "7 min read",
    image: "/images/insights/fractional.png",
  },
];

const featured = articles.find((a) => a.featured);
const rest = articles.filter((a) => !a.featured);

function AuthorRow({
  date,
  readTime,
  light = false,
}: {
  date: string;
  readTime?: string;
  light?: boolean;
}) {
  return (
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
        <p
          className={`text-[13px] font-semibold ${
            light ? "text-white" : "text-purple-9"
          }`}
        >
          Lihi Pinto
        </p>
        <p
          className={`text-[13px] ${light ? "text-purple-4" : "text-purple-5"}`}
        >
          {date}
          {readTime ? ` · ${readTime}` : ""}
        </p>
      </div>
    </div>
  );
}

export default function InsightsPage() {
  return (
    <>
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
              <li aria-hidden className="text-purple-6">
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
              Marketing for B2B in the AI era is not a channel problem. It is an
              architecture problem. Triple &amp; Co. publishes battle-tested
              scaling playbooks drawn from live engagements as a Fractional CMO,
              a native AI CRO as a Service team, and an embedded growth partner
              for venture-backed companies worldwide. No theory. No filler.
              Only what we have shipped, measured, and repeated.
            </p>
          </div>

          {/* Topic filter nav */}
          <div className="flex flex-wrap gap-2 mt-8">
            {topicCategories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  cat.label === "All"
                    ? "bg-brand text-white"
                    : "border border-purple-7 text-purple-2 hover:border-brand hover:text-white"
                }`}
              >
                {cat.label}
              </Link>
            ))}
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
                    <AuthorRow
                      date={featured.date}
                      readTime={featured.readTime}
                      light
                    />
                    {featured.href && (
                      <Link
                        href={featured.href}
                        className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] mt-1"
                      >
                        Read the Full Story <span aria-hidden>&#8594;</span>
                      </Link>
                    )}
                  </div>

                  {/* Featured visual panel */}
                  <div className="relative hidden lg:block overflow-hidden min-h-[404px]">
                    <Image
                      src={featured.image}
                      alt=""
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
          ARTICLES GRID
      ================================================================ */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand mb-2">
              Latest Insights
            </p>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-9 mb-8">
              All Insights
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => {
              const cardClass =
                "relative bg-white rounded-[20px] shadow-[0_4px_20px_rgba(137,109,156,0.12)] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)] h-full flex flex-col group";
              const cardInner = (
                <>
                  {/* Gradient top bar */}
                  <div className="h-[5px] gradient-bar shrink-0" aria-hidden />
                  {/* Image header */}
                  <div className="relative h-[220px] shrink-0 overflow-hidden">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 405px, 100vw"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 100%)",
                      }}
                    />
                    <span className="absolute top-4 left-4 rounded-full border border-purple-5 px-3 py-1.5 text-[11px] font-semibold uppercase text-purple-5 bg-purple-9/40 backdrop-blur-sm">
                      {article.category}
                    </span>
                    {article.pillar && (
                      <span className="absolute top-4 right-4 rounded-full bg-brand px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                        Pillar
                      </span>
                    )}
                  </div>
                  {/* Body */}
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="text-[20px] font-bold text-purple-9 tracking-tight leading-[1.3] group-hover:text-brand transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-purple-5 leading-[1.5]">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="border-t border-purple-15 pt-4">
                      <AuthorRow
                        date={article.date}
                        readTime={article.readTime}
                      />
                    </div>
                  </div>
                </>
              );
              return (
                <ScrollReveal key={article.title} delay={0.05 + i * 0.04}>
                  {article.href ? (
                    <Link
                      href={article.href}
                      className={`${cardClass} cursor-pointer`}
                    >
                      {cardInner}
                    </Link>
                  ) : (
                    <article className={cardClass}>{cardInner}</article>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          THREE CONTENT SILOS
      ================================================================ */}
      <section className="py-12 lg:py-16 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-purple-9 mb-2">
              Browse by Topic
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
            {silos.map((silo, i) => (
              <ScrollReveal key={silo.label} delay={0.05 + i * 0.07}>
                <Link
                  href={silo.href}
                  className="group relative flex flex-col gap-4 rounded-2xl border border-purple-15 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)] hover:border-brand/30 card-gradient-top h-full"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">
                      {silo.tagline}
                    </p>
                    <h3 className="text-lg font-extrabold text-purple-9 leading-snug">
                      {silo.label}
                    </h3>
                  </div>
                  <p className="text-sm text-purple-7 leading-relaxed flex-1 pr-16">
                    {silo.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand group-hover:gap-2 transition-all">
                    Explore <span>&#8594;</span>
                  </span>
                  {/* Topic-owner agent */}
                  <div
                    className="absolute bottom-2 right-3 h-[120px] w-[72px] pointer-events-none transition-transform group-hover:-translate-y-1"
                    aria-hidden={false}
                  >
                    <Image
                      src={silo.agent.img}
                      alt={`${silo.agent.name}, ${silo.agent.role}`}
                      title={`${silo.agent.name} · ${silo.agent.role}`}
                      fill
                      className="object-contain object-bottom"
                      sizes="72px"
                    />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
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
                Browse Episodes <span>&#8594;</span>
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
                    Full story <span>&#8594;</span>
                  </Link>
                  <Link
                    href="/contact"
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
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a Diagnostic Call <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
