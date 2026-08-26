import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";
import { ReadinessScore } from "@/components/ReadinessScore";
import { ScoreHeroLoop } from "@/components/ScoreHeroLoop";
import { ScoreShowcase } from "@/components/ScoreShowcase";
import { DIMENSIONS, TIERS, decodeAnswers, scoreOf, tierFor } from "@/lib/readiness";

const URL = "https://www.tripleandco.com/ai-revenue-readiness-score";

const baseMetadata: Metadata = {
  title: "AI Revenue Readiness Score: Free Assessment",
  description:
    "Score your revenue operation 0 to 100 across 20 areas: strategy, data, content, pipeline, AI architecture, brand supervision, and revenue accountability. Free.",
  alternates: { canonical: "/ai-revenue-readiness-score" },
  openGraph: {
    title: "AI Revenue Readiness Score | Triple & Co.",
    description:
      "20 questions, 7 dimensions, about 3 minutes. Get your score out of 100, the shape of your gaps, and the three things to fix first.",
    url: URL,
  },
};

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const raw = typeof params.r === "string" ? params.r : "";
  const answers = raw ? decodeAnswers(raw) : null;
  if (!answers) return baseMetadata;

  const score = scoreOf(answers);
  const tier = tierFor(score);
  const d = typeof params.d === "string" ? params.d.slice(0, 253) : "";
  const dQuery = d ? `&d=${encodeURIComponent(d)}` : "";
  const image = `/api/og/readiness?r=${encodeURIComponent(raw)}${dQuery}`;

  return {
    ...baseMetadata,
    title: `AI Revenue Readiness Score: ${score}/100, ${tier.name}`,
    openGraph: {
      ...baseMetadata.openGraph,
      title: `AI Revenue Readiness Score: ${score}/100 · ${tier.name}`,
      description: tier.line,
      url: `${URL}?r=${encodeURIComponent(raw)}${dQuery}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `AI Revenue Readiness Score: ${score} out of 100, ${tier.name}`,
        },
      ],
    },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

const faqs = [
  {
    q: "What is AI revenue readiness?",
    a: "AI revenue readiness is how prepared a B2B company's revenue operation is to grow with an AI-native marketing team rather than a traditional one. It has seven parts: strategy (a written ICP, differentiated positioning, a bottom-up revenue model), data (funnel instrumentation, CRM discipline, reporting cadence), content (content tied to pipeline, a documented founder voice, AI search visibility), pipeline (channel mix, outbound motion, sales and marketing alignment), AI architecture (specialist agents, a written operating model, reusable context), brand supervision (voice control and a named review gate), and revenue accountability (marketing's number, senior ownership, cost efficiency). Readiness is not about how many AI tools you own. It is about whether the operating model around them turns AI capacity into pipeline.",
  },
  {
    q: "How is the score calculated?",
    a: "Twenty areas, grouped into seven dimensions. Each area offers four maturity statements worth 0, 1, 3, or 5 points, so the maximum is 100 and the raw total is your score. The gap between 1 and 3 is deliberate: it separates doing something from managing it. No dimension is weighted above another in this version, so the score is simply the sum of your 20 answers.",
  },
  {
    q: "What do the four tiers mean?",
    a: TIERS.map((t) => `${t.name} (${t.min} to ${t.max}): ${t.line}`).join(" "),
  },
  {
    q: "Which part is measured rather than self-reported?",
    a: "One area, AI search visibility, is measured live. Enter your domain and Nova, our content research agent, fetches your site the way AI crawlers do and scores four technical signals: llms.txt, robots.txt access for 10 AI crawlers, JSON-LD structured data, and Bing indexability. That 0 to 100 result maps onto the same tier boundaries used for the total score. If you skip the domain or the check cannot complete, you self-assess that area instead and your result is labelled self-reported.",
  },
  {
    q: "Is it free, and what happens to my answers?",
    a: "It is free with no signup. Your score, the seven dimension scores, and the three recommended actions all appear on screen without an email. The optional full report, which includes every area with your answer on it, is what we send by email if you ask for it. Your answers are encoded in the share link so you can send the result to a colleague, and nothing else is stored against your name unless you request the report or book a diagnostic.",
  },
  {
    q: "How is this different from the AI Visibility Checker?",
    a: "The AI Visibility Checker measures one thing from the outside: whether AI engines can read your website. The Readiness Score measures your whole revenue operation from the inside, and embeds the checker as one of its 20 areas. Use the checker when you want a technical fix list for your site. Use the Readiness Score when you want to know where your revenue operation leaks before you spend another quarter of budget.",
  },
  {
    q: "What do I get at the end?",
    a: "A score out of 100 and your tier, a bar per dimension so you can see the shape of the problem, and three recommended actions drawn from your three lowest-scoring areas. Each action names the claim, the lever behind it, and a first step you can start this week. From there you can email yourself the full breakdown, share the result with your team, or book a 30-minute Revenue Diagnostic with Lihi.",
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
  name: "AI Revenue Readiness Score",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: URL,
  description:
    "A free self-assessment that scores a B2B company's revenue operation from 0 to 100 across 20 areas in seven dimensions: strategy, data, content, pipeline, AI architecture, brand supervision, and revenue accountability. Returns a tier, a per-dimension breakdown, and three recommended actions.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@id": "https://www.tripleandco.com/#organization" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Revenue Readiness assessment",
  serviceType: "Marketing and revenue operations assessment",
  url: URL,
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["IL", "US", "GB", "EU"],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "B2B technology companies",
  },
};

const HOW = [
  {
    n: "01",
    title: "Seven rooms, one host each",
    body: "Rex opens on strategy. Nova audits your data. Camille takes content. Sage covers pipeline. All eight agents take the AI architecture questions, because that section is about them. Lihi takes supervision herself. Atlas closes on the number.",
  },
  {
    n: "02",
    title: "Your score builds as you answer",
    body: "Points bank in real time and a seven-spoke shape draws itself beside the questions, so you watch where your operation leaks instead of waiting for a verdict at the end.",
  },
  {
    n: "03",
    title: "One area is measured, not asked",
    body: "Hand Nova your domain and she scores your AI search visibility live against llms.txt, crawler access, structured data, and Bing indexability. That result is labelled Measured so you can tell it apart from what you told us.",
  },
  {
    n: "04",
    title: "Three fixes, not a report you file",
    body: "Your three lowest-scoring areas come back as actions written the way we brief our own work: the claim, the lever behind it, and a first step you can start this week.",
  },
];

export default function ReadinessPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero: a question, and the instrument answering it. */}
      <section className="pt-14 pb-8 lg:pt-18 lg:pb-10 bg-purple-05">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "AI Revenue Readiness Score" },
            ]}
          />
          <div className="mt-2 mx-auto max-w-[760px] text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.03] text-purple-9 mb-4">
              What&apos;s Your Company&apos;s{" "}
              <span className="gradient-text">Score Today?</span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-7 leading-relaxed mb-8 mx-auto max-w-[560px]">
              Watch it build live. 20 answers, 100 points, and the exact shape
              of where your revenue operation is leaking.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              <a
                href="#assessment"
                className="inline-flex items-center rounded-[10px] bg-brand-dark px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/50"
              >
                Start My Score &rarr;
              </a>
              <p className="text-sm text-purple-7">
                Free · 3 minutes · no email needed
              </p>
            </div>
          </div>

          <ScoreHeroLoop />
        </div>
      </section>

      {/* The console */}
      <section
        id="assessment"
        className="scroll-mt-24 pb-16 lg:pb-20 bg-purple-05"
      >
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <Suspense
            fallback={
              <div className="rounded-[28px] bg-dark h-[420px] animate-pulse" />
            }
          >
            <ReadinessScore />
          </Suspense>
        </div>
      </section>

      {/* What the score is made of */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The seven dimensions</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              What the Score Is{" "}
              <span className="gradient-text">Made Of.</span>
            </h2>
            <p className="text-base text-purple-7 leading-relaxed text-center mb-12 max-w-[680px] mx-auto">
              Every dimension maps to a stage of the Woman in the Loop Revenue
              OS, so the score is not a quiz result. It is the diagnostic that
              tells you which stage to work on next.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIMENSIONS.map((d, i) => (
              <ScrollReveal key={d.id} delay={0.06 * i}>
                <div className="relative bg-white rounded-2xl p-7 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                  <div className="flex items-center gap-3 mb-3">
                    {d.host.image && (
                      <Image
                        src={d.host.image}
                        alt=""
                        width={200}
                        height={350}
                        className={`w-12 h-auto shrink-0 ${
                          d.host.id === "lihi"
                            ? "rounded-lg object-cover aspect-square"
                            : ""
                        }`}
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-extrabold text-purple-9 leading-tight">
                        {d.label}
                      </h3>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-brand-dark">
                        {d.host.name}
                      </p>
                    </div>
                    <span className="ml-auto text-xs font-bold text-purple-6 tabular-nums">
                      {d.maxPoints} pts
                    </span>
                  </div>
                  <p className="text-sm text-purple-7 leading-relaxed mb-3">
                    {d.blurb}
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-purple-5">
                    OS stage: {d.osStage}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* How it runs, folded into the same band so the page reads
              instrument → what it measures → how, without a third act. */}
          <div className="mt-14 lg:mt-16">
            <ScrollReveal>
              <p className="eyebrow text-center mb-8">How it runs</p>
            </ScrollReveal>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {HOW.map((s, i) => (
                <ScrollReveal key={s.n} delay={0.06 * i}>
                  <div className="h-full rounded-2xl bg-purple-05 border border-purple-15 p-5">
                    <p className="text-sm font-extrabold text-purple-9 mb-1.5">
                      <span className="text-brand-dark font-black mr-2">
                        {s.n}
                      </span>
                      {s.title}
                    </p>
                    <p className="text-[13px] text-purple-7 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof: the instrument running, replayed live from the real component. */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">See it run</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Twenty Seconds of the{" "}
              <span className="gradient-text">Real Thing.</span>
            </h2>
            <p className="text-base text-purple-7 leading-relaxed text-center mb-12 max-w-[660px] mx-auto">
              Not a mockup, not even a recording. These are the real
              components from the assessment above, replaying a sample run
              live on this page.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <ScoreShowcase />
          </ScrollReveal>
          <div className="mt-12 text-center">
            <a
              href="#assessment"
              className="inline-flex items-center rounded-[10px] bg-brand-dark px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/50"
            >
              Start My Score &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Score vs checker vs diagnostic */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-6 sm:px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Next step</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6 text-center">
              The Score Finds the Leak. The Diagnostic{" "}
              <span className="gradient-text">Fixes the Order.</span>
            </h2>
            <p className="text-base text-purple-7 leading-relaxed text-center mb-10 max-w-[660px] mx-auto">
              Three recommended actions tell you where your operation is
              weakest. They do not tell you which one your business can absorb
              first, or what it costs to run. That is a 30-minute conversation
              with Lihi: bring the score, leave with the order of operations.
            </p>
            <div className="text-center">
              <Link
                href="/revenue-diagnostic"
                className="inline-block rounded-[10px] bg-brand-dark px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Book a 30-Minute Revenue Diagnostic &rarr;
              </Link>
            </div>
            <p className="text-sm text-purple-7 text-center mt-8">
              Want the technical layer on its own? Run the{" "}
              <Link
                href="/ai-visibility-checker"
                className="text-brand-dark font-semibold hover:underline"
              >
                free AI Visibility Checker
              </Link>{" "}
              &middot; meet{" "}
              <Link
                href="/agents"
                className="text-brand-dark font-semibold hover:underline"
              >
                the agents who host this assessment
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-6 sm:px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              The Readiness Score,{" "}
              <span className="gradient-text">Explained.</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
        </div>
      </section>
    </>
  );
}
