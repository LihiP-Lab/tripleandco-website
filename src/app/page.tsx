import Link from "next/link";
import { NewsTicker } from "@/components/NewsTicker";
import { AgentCard } from "@/components/AgentCard";
import { ProcessStep } from "@/components/ProcessStep";

const agents = [
  {
    name: "Camille",
    role: "Brand Voice Generator",
    model: "Claude Sonnet",
    description:
      "Extracts your brand voice from existing content and applies it consistently across every channel — so your company sounds like itself, not like everyone else.",
    color: "from-purple-500/20 to-purple-900/20",
    image: "/images/agents/camille.png",
  },
  {
    name: "Vega",
    role: "Art Director",
    model: "Claude Opus",
    description:
      "Owns visual direction across brand, marketing, web, and decks. Studies the brand book, the brief, and performance signals before opening a tool.",
    color: "from-pink-500/20 to-pink-900/20",
    image: "/images/agents/vega.png",
  },
  {
    name: "Rex",
    role: "Growth Campaign Strategist",
    model: "Claude Sonnet",
    description:
      "Audits your growth engine, finds the campaigns that will actually move pipeline, and maps the 90 days that get you to your next revenue milestone.",
    color: "from-orange-500/20 to-orange-900/20",
    image: "/images/agents/rex.png",
  },
  {
    name: "Zara",
    role: "Social Media Commander",
    model: "Claude Haiku",
    description:
      "Turns your social channels from background noise into a revenue-driving asset — founder voice, content cadence, and measurement all in one.",
    color: "from-cyan-500/20 to-cyan-900/20",
    image: "/images/agents/zara.png",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Analysis",
    description:
      "We analyze your start-up to identify the immediate actions required to increase revenue. This provides the foundation to build your UTP and turn your business into a scalable growth machine.",
  },
  {
    number: "02",
    title: "Getting Started",
    description:
      "Based on your start-up's current stage, we develop an execution plan to accelerate your growth and Triple your revenue.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Triple & Co. becomes an extension of your start-up from start to finish, providing key insights, helping you build your teams, and navigating new hurdles at each growth phase.",
  },
  {
    number: "04",
    title: "Results",
    description:
      "With the unique development of your UTP, your start-up will begin to see real, tangible results. Momentum and growth are our passions and expertise.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(254,52,101,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 text-center">
          <div className="animate-fade-in">
            <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand mb-8">
              AI-Powered Revenue Transformation
            </span>
          </div>
          <h1 className="animate-fade-in-delay-1 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Turn your B2B growth
            <br />
            <span className="gradient-text">into a machine</span>
          </h1>
          <p className="animate-fade-in-delay-2 mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto">
            Israel&apos;s leading CMO & CRO-as-a-Service for B2B companies
            ready to grow with AI. On-demand executive leadership that puts AI
            at the center of your revenue growth.
          </p>
          <div className="animate-fade-in-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:scale-105 animate-pulse-glow"
            >
              I&apos;m ready to TRIPLE
            </Link>
            <Link
              href="/agents"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-surface-light hover:border-muted"
            >
              Meet the AI Agents
            </Link>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <NewsTicker />

      {/* AI Agents Preview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
              AI Marketing Agents
            </h2>
            <p className="text-3xl sm:text-4xl font-bold">
              Specialists that do the work
            </p>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Pre-configured Claude agents, each built for a specific marketing
              function — run with human oversight, delivered on a weekly cadence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.name} {...agent} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              Browse all 8 agents
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
                What we do
              </h2>
              <p className="text-3xl sm:text-4xl font-bold leading-tight">
                We use AI to transform Marketing, Sales and Customer Success
                into{" "}
                <span className="gradient-text">revenue machines</span>
              </p>
              <p className="mt-6 text-muted leading-relaxed">
                With over 15 years of experience scaling B2B companies from
                Series A to global expansion, Lihi Pinto brings CMO and CRO
                leadership that combines strategic vision with practical AI
                implementation.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                She identifies your highest-impact growth levers, builds
                AI-assisted pipelines, and creates predictable revenue engines —
                so you go from product-market fit to category leadership.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Building a growth engine",
                "Lead generation machine",
                "Sales methodology & team building",
                "Talent sourcing & training",
                "Customer Success foundations",
                "Funding strategies",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border bg-background p-5 hover:border-brand/30 transition-colors"
                >
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who / What / How */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                question: "Who do we serve?",
                answer:
                  "B2B companies in Israel and globally that are serious about using AI to outgrow their competition. Leaders who know that standing still is falling behind.",
              },
              {
                question: "What do we do?",
                answer:
                  "Design and implement AI-powered marketing and sales systems that generate leads, shorten sales cycles, and grow revenue — without the cost of a full executive team.",
              },
              {
                question: "How is this done?",
                answer:
                  "We build your AI Revenue Blueprint — a custom strategy and execution plan that maps AI tools to every stage of your marketing and sales funnel.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-border bg-surface p-8 hover:border-brand/30 transition-all group"
              >
                <h3 className="text-lg font-bold mb-4 group-hover:text-brand transition-colors">
                  {item.question}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
              The Process
            </h2>
            <p className="text-3xl sm:text-4xl font-bold">
              Here&apos;s how it works
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Every start-up is unique
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            That&apos;s why we design a custom AI Revenue Blueprint for each
            client — combining the right AI tools, the right messaging, and the
            right processes to match where you are and where you want to go.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:scale-105 animate-pulse-glow"
          >
            I&apos;m ready to TRIPLE
          </Link>
        </div>
      </section>
    </>
  );
}
