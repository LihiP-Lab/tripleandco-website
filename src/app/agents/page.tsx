import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Marketing Agents",
  description:
    "Eight specialist AI agents, each trained for a specific marketing function. Supervised by Lihi Pinto. Zero unsupervised output.",
};

const agents = [
  {
    name: "Camille",
    role: "Brand Voice Generator",
    description:
      "Writes the brand voice. Not an LLM's. Camille extracts your brand voice from your existing content and applies it consistently across every channel — so your company sounds like itself, not like everyone else.",
    image: "/images/agents/camille.png",
  },
  {
    name: "Rex",
    role: "Growth Campaign Strategist",
    description:
      "Briefs the strategy. Plans campaigns the team can execute. Rex audits your growth engine, finds the campaigns that will actually move pipeline, and maps the 90 days that get you to your next revenue milestone.",
    image: "/images/agents/rex.png",
  },
  {
    name: "Zara",
    role: "Social Media Commander",
    description:
      "Ships the social channels. Zara turns your social channels from background noise into a revenue-driving asset — founder voice, content cadence, and measurement all in one.",
    image: "/images/agents/zara.png",
  },
  {
    name: "Nova",
    role: "Content Research Analyst",
    description:
      "Reads the room. Research, trends, competitive intel. Nova maps the content landscape in your category, surfaces the topics your buyers actually search, and hands you a content strategy grounded in real demand.",
    image: "/images/agents/nova.png",
  },
  {
    name: "Atlas",
    role: "Performance Analytics Agent",
    description:
      "Reads the numbers. Tells us what's working. Atlas unifies your marketing and sales data, tells you where budget is actually working, and builds the dashboards your leadership needs to move faster.",
    image: "/images/agents/atlas.png",
  },
  {
    name: "Sage",
    role: "Content Repurposing Engine",
    description:
      "Repurposes everything. One piece becomes ten. Sage takes the content you've already produced and multiplies its reach — turning webinars, podcasts, and posts into dozens of high-performing derivatives.",
    image: "/images/agents/sage.png",
  },
  {
    name: "Vega",
    role: "Art Director",
    description:
      "Directs how it looks. Art direction. Vega owns visual direction across brand, marketing, web, and decks. She studies the brand book, the brief, and the performance signals before opening a tool.",
    image: "/images/agents/vega.png",
  },
  {
    name: "Lumen",
    role: "Video Director",
    description:
      "Turns it into video. Lumen owns video end to end. Concept, script, shot list, edit direction, and post. He thinks in story before tools. Hook, setup, payoff. Tension, then release.",
    image: "/images/agents/lumen.png",
  },
];

export default function AgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8 text-center">
          <p className="eyebrow mb-4">AI Marketing Agents</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
            Eight specialists.{" "}
            <span className="gradient-text">One operator.</span>
          </h1>
          <p className="text-lg text-purple-7 max-w-2xl mx-auto">
            Each agent is trained for a specific marketing function. Every piece
            of work passes through Lihi before it ships. Zero unsupervised
            output.
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] p-8 overflow-hidden border border-purple-15 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
              >
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-16 h-16 rounded-full bg-purple-05 overflow-hidden shrink-0">
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-purple-9">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-purple-6">{agent.role}</p>
                  </div>
                </div>
                <p className="text-[15px] text-purple-7 leading-relaxed">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
            Ready to put AI agents to work?
          </h2>
          <p className="text-purple-7 mb-10">
            Book a diagnostic call to see how the supervised AI team can
            accelerate your B2B growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
          >
            Book a Diagnostic Call with Lihi <span>&#8594;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
