import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Marketing Agents",
  description:
    "Pre-configured Claude agents, each built for a specific marketing function — run with human oversight, delivered on a weekly cadence.",
};

const agents = [
  {
    name: "Camille",
    role: "Brand Voice Generator",
    model: "Claude Sonnet",
    description:
      "Camille extracts your brand voice from your existing content and applies it consistently across every channel — so your company sounds like itself, not like everyone else.",
    gradient: "from-purple-500/20 to-purple-900/10",
    image: "/images/agents/camille.png",
  },
  {
    name: "Vega",
    role: "Art Director",
    model: "Claude Opus",
    description:
      "Vega owns visual direction across brand, marketing, web, and decks. She runs on Opus because direction compounds — a wrong type choice or a sloppy hierarchy isn't a bug you patch later, it's brand erosion you pay for every campaign after. She reads first, then directs: studies the brand book, the brief, and the performance signals before opening a tool. Always ships two to four directions with a recommendation, never one solution and never three solutions without a pick.",
    gradient: "from-pink-500/20 to-pink-900/10",
    image: "/images/agents/vega.png",
  },
  {
    name: "Rex",
    role: "Growth Campaign Strategist",
    model: "Claude Sonnet",
    description:
      "Rex audits your growth engine, finds the campaigns that will actually move pipeline, and maps the 90 days that get you to your next revenue milestone.",
    gradient: "from-orange-500/20 to-orange-900/10",
    image: "/images/agents/rex.png",
  },
  {
    name: "Zara",
    role: "Social Media Commander",
    model: "Claude Haiku",
    description:
      "Zara turns your social channels from background noise into a revenue-driving asset — founder voice, content cadence, and measurement all in one.",
    gradient: "from-cyan-500/20 to-cyan-900/10",
    image: "/images/agents/zara.png",
  },
  {
    name: "Nova",
    role: "Content Research Analyst",
    model: "Claude Sonnet",
    description:
      "Nova maps the content landscape in your category, surfaces the topics your buyers actually search, and hands you a content strategy grounded in real demand — not guesses.",
    gradient: "from-blue-500/20 to-blue-900/10",
    image: "/images/agents/nova.png",
  },
  {
    name: "Atlas",
    role: "Performance Analytics Agent",
    model: "Claude Opus",
    description:
      "Atlas unifies your marketing and sales data, tells you where budget is actually working, and builds the dashboards your leadership needs to move faster.",
    gradient: "from-emerald-500/20 to-emerald-900/10",
    image: "/images/agents/atlas.png",
  },
  {
    name: "Sage",
    role: "Content Repurposing Engine",
    model: "Claude Haiku",
    description:
      "Sage takes the content you've already produced and multiplies its reach — turning webinars, podcasts, and posts into dozens of high-performing derivatives.",
    gradient: "from-amber-500/20 to-amber-900/10",
    image: "/images/agents/sage.png",
  },
  {
    name: "Lumen",
    role: "Video Director",
    model: "Claude Opus",
    description:
      "Lumen owns video end to end. Concept, script, shot list, edit direction, and post. He runs on Opus because video judgment compounds. The first three seconds decide whether anyone watches the next thirty, and that call cannot be patched in post. He thinks in story before tools. Hook, setup, payoff. Tension, then release.",
    gradient: "from-red-500/20 to-red-900/10",
    image: "/images/agents/lumen.png",
  },
];

export default function AgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
            AI Marketing Agents
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Specialists that{" "}
            <span className="gradient-text">do the work</span>
          </h1>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
            Pre-configured Claude agents, each built for a specific marketing
            function — run with human oversight, delivered on a weekly cadence.
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className={`group rounded-2xl border border-border bg-gradient-to-br ${agent.gradient} p-8 hover:border-brand/30 transition-all`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <Image
                        src={agent.image}
                        alt={agent.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{agent.name}</h3>
                      <p className="text-sm text-muted">{agent.role}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                    {agent.model}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to put AI agents to work?
          </h2>
          <p className="mt-6 text-muted">
            Contact us to learn how our AI marketing agents can transform your
            B2B revenue engine.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:scale-105 animate-pulse-glow"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
