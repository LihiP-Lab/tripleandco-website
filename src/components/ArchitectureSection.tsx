"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const agents = [
  {
    name: "Camille",
    role: "Brand Voice Generator",
    desc: "Writes the brand voice. Not an LLM's. Camille extracts your brand voice from your existing content and applies it consistently across every channel, so your company sounds like itself, not like everyone else.",
    shortRole: "Writes the brand voice. Not an LLM's.",
    image: "/images/agents/camille.png",
  },
  {
    name: "Rex",
    role: "Growth Campaign Strategist",
    desc: "Briefs the strategy. Plans campaigns the team can execute. Rex audits your growth engine, finds the campaigns that will actually move pipeline, and maps the 90 days that get you to your next revenue milestone.",
    shortRole: "Briefs the strategy. Plans campaigns the team can execute.",
    image: "/images/agents/rex.png",
  },
  {
    name: "Zara",
    role: "Social Media Commander",
    desc: "Ships the social channels. Zara turns your social channels from background noise into a revenue-driving asset: founder voice, content cadence, and measurement all in one.",
    shortRole: "Ships the social channels.",
    image: "/images/agents/zara.png",
  },
  {
    name: "Nova",
    role: "Content Research Analyst",
    desc: "Reads the room. Research, trends, competitive intel. Nova maps the content landscape in your category, surfaces the topics your buyers actually search, and hands you a content strategy grounded in real demand.",
    shortRole: "Reads the room. Research, trends, competitive intel.",
    image: "/images/agents/nova.png",
  },
  {
    name: "Atlas",
    role: "Performance Analytics Agent",
    desc: "Reads the numbers. Tells us what's working. Atlas unifies your marketing and sales data, tells you where budget is actually working, and builds the dashboards your leadership needs to move faster.",
    shortRole: "Reads the numbers. Tells us what's working.",
    image: "/images/agents/atlas.png",
  },
  {
    name: "Sage",
    role: "Content Repurposing Engine",
    desc: "Repurposes everything. One piece becomes ten. Sage takes the content you've already produced and multiplies its reach, turning webinars, podcasts, and posts into dozens of high-performing derivatives.",
    shortRole: "Repurposes everything. One piece becomes ten.",
    image: "/images/agents/sage.png",
  },
  {
    name: "Vega",
    role: "Art Director",
    desc: "Directs how it looks. Art direction. Vega owns visual direction across brand, marketing, web, and decks. She studies the brand book, the brief, and the performance signals before opening a tool.",
    shortRole: "Directs how it looks. Art direction.",
    image: "/images/agents/vega.png",
  },
  {
    name: "Lumen",
    role: "Video Director",
    desc: "Turns it into video. Lumen owns video end to end. Concept, script, shot list, edit direction, and post. He thinks in story before tools. Hook, setup, payoff. Tension, then release.",
    shortRole: "Turns it into video.",
    image: "/images/agents/lumen.png",
  },
];

export function ArchitectureSection() {

  return (
    <section className="relative bg-white py-20 lg:py-30" aria-labelledby="architecture-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">The architecture</p>
            <h2 id="architecture-heading" className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-3">
              How a supervised AI marketing team works.
            </h2>
            <p className="text-lg text-purple-6">
              Meet the team behind the speed.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-[960px] mx-auto mb-8">
          <ScrollReveal>
            <div className="flex justify-center mb-3">
              <div className="relative bg-dark text-white rounded-2xl shadow-[var(--shadow-base)] px-8 py-6 text-center min-w-[280px] lg:min-w-[320px] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
                <div className="font-extrabold text-lg text-white">
                  Lihi Pinto · The operator
                </div>
                <div className="text-sm text-purple-3 mt-1">
                  Every decision that matters. Strategy. Brand. Judgment.
                </div>
              </div>
            </div>
            <div className="text-center text-purple-6 text-[22px] leading-none my-2">
              &#8597;
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-3">
              <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] px-7 py-5 text-center min-w-[220px] max-w-[320px] mx-auto md:mx-0 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--shadow-hover)]">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
                <div className="font-extrabold text-[17px] text-purple-9">
                  Digital COO
                </div>
                <div className="text-sm text-purple-6 mt-1">
                  Orchestrates the team. Enforces brand standards.
                </div>
              </div>
              <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] px-7 py-5 text-center min-w-[220px] max-w-[320px] mx-auto md:mx-0 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--shadow-hover)]">
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
                <div className="font-extrabold text-[17px] text-purple-9">
                  Chief Agent
                </div>
                <div className="text-sm text-purple-6 mt-1">
                  Claude at C-suite level. Brings only the calls that need a
                  human.
                </div>
              </div>
            </div>
            <div className="text-center text-purple-6 text-[22px] leading-none my-2">
              &#8597;
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-5 max-w-[960px] mx-auto">
          {agents.map((agent, i) => (
            <ScrollReveal key={agent.name} delay={0.15 + i * 0.06} className="h-full">
              <Link
                href={`/agents#${agent.name.toLowerCase()}`}
                className="relative flex h-full w-full flex-col bg-white rounded-2xl shadow-[var(--shadow-base)] px-5 py-6 text-center overflow-hidden border border-purple-15 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[var(--shadow-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                aria-label={`View ${agent.name}'s full profile`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-purple-05 overflow-hidden p-2">
                  <Image
                    src={agent.image}
                    alt={`${agent.name}, AI marketing agent`}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-extrabold text-lg text-purple-9 mb-1.5">
                  {agent.name}
                </div>
                <div className="text-sm text-purple-6 leading-snug">
                  {agent.shortRole}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6}>
          <p className="text-center text-lg text-purple-7 italic mt-6">
            <strong className="text-brand not-italic font-bold">
              Zero unsupervised output.
            </strong>{" "}
            Every piece passes a human before it ships.
          </p>
          <div className="text-center mt-8">
            <Link
              href="/agents"
              className="text-brand font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              Meet the cast in detail <span>&#8594;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}
