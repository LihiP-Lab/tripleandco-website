import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AgentFilterBar } from "@/components/AgentFilterBar";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "AI Marketing Agents",
  description:
    "Eight specialist AI agents, each trained for a specific marketing function. Supervised by Lihi Pinto. Zero unsupervised output.",
};

const processSteps = [
  {
    number: "1",
    title: "Brief",
    description:
      "A 30-minute kickoff. You share the goal, the context, the assets you already have.",
  },
  {
    number: "2",
    title: "Run",
    description:
      "Your agent runs on Claude. Lihi supervises strategy and quality end to end \u2014 you\u2019re never handed raw AI output.",
  },
  {
    number: "3",
    title: "Deliver",
    description:
      "Finished, on-brand work lands in your inbox on a weekly cadence. Everything is yours to keep.",
  },
];

export default function AgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Marketing Agents" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                8 AI specialists
              </span>
              <span className="text-purple-3">&middot;</span>
              <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                Zero onboarding
              </span>
              <span className="text-purple-3">&middot;</span>
              <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                Real deliverables
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
              Your AI Marketing Team,{" "}
              <span className="gradient-text">Ready to Deploy</span>
            </h1>
            <p className="text-lg text-purple-7 max-w-2xl mx-auto">
              Purpose-built Claude specialists for every marketing function.
              Hire one, hire a team &mdash; or start with a fixed-scope
              diagnostic.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Grid with Filters */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <AgentFilterBar />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1000px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">How it works</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={0.1 + i * 0.12}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center text-lg font-black mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-extrabold text-purple-9 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
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
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
