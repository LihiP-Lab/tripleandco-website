import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";
import { ScoreHeroDemo } from "./ScoreHeroDemo";

/**
 * Homepage section: a live run of the AI Revenue Readiness Score demo,
 * bridging the agent workforce story into the diagnostic product.
 */
export function ScoreDemoSection() {
  return (
    <section
      className="relative bg-white py-20 lg:py-30"
      aria-labelledby="score-demo-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
        <ScrollReveal>
          <div className="text-center max-w-[760px] mx-auto mb-12">
            <p className="eyebrow mb-4">AI Revenue Readiness Score</p>
            <h2
              id="score-demo-heading"
              className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-5"
            >
              What&apos;s your company&apos;s{" "}
              <span className="gradient-text">score today?</span>
            </h2>
            <p className="text-lg text-purple-6">
              20 answers, 100 points, and the exact shape of where your
              revenue operation is leaking. Here is a full run, live.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <ScoreHeroDemo />
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <Link
              href="/ai-revenue-readiness-score"
              className="inline-flex items-center rounded-[10px] bg-brand-dark px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/50"
            >
              Get My Score Now &rarr;
            </Link>
            <p className="text-sm text-purple-6">
              Free &middot; 3 minutes &middot; no email needed
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
