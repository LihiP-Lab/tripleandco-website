import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "AI Marketing Agents for B2B",
  description:
    "What AI marketing agents are, how they work, and how Triple & Co. deploys 8 specialist agents, supervised by Lihi Pinto, to drive B2B revenue.",
  alternates: { canonical: "/ai-marketing-agents" },
  openGraph: {
    title: "AI Marketing Agents for B2B | Triple & Co.",
    description:
      "8 purpose-built AI marketing specialists, each scoped to a single function, supervised by Lihi Pinto. Built for B2B companies ready to scale.",
  },
};

const agents = [
  {
    name: "Camille",
    role: "Brand Voice Generator",
    description:
      "Camille extracts your brand voice from your existing content and applies it consistently across every channel. So your company sounds like itself, not like every other B2B SaaS on LinkedIn. She handles voice extraction, asset rewrites, and delivers a tone guide your whole team can use.",
    model: "Claude Sonnet",
    price: "$5,000/mo retainer",
    id: "camille",
  },
  {
    name: "Vega",
    role: "Art Director",
    description:
      "Vega owns visual direction across brand, marketing, web, and decks. She runs on Opus because design judgment compounds. A wrong type choice or a sloppy hierarchy isn\u2019t a bug you patch later, it\u2019s brand erosion you pay for in every campaign after. She always ships two to four directions with a recommendation, never one solution without a pick.",
    model: "Claude Opus",
    price: "$6,000/mo retainer",
    id: "vega",
  },
  {
    name: "Rex",
    role: "Growth Campaign Strategist",
    description:
      "Rex audits your growth engine, finds the campaigns that will actually move pipeline, and maps the 90 days that get you to your next revenue milestone. He delivers a 12-month campaign audit, a sequenced 90-day roadmap, and an ICP analysis with message-market fit assessment.",
    model: "Claude Sonnet",
    price: "$4,500/mo retainer",
    id: "rex",
  },
  {
    name: "Zara",
    role: "Social Media Commander",
    description:
      "Zara turns your social channels from background noise into a revenue-driving asset. Founder voice, content cadence, and measurement, all in one. She audits your current channels, builds a 30-day content calendar ready to publish, and establishes an executive voice framework.",
    model: "Claude Haiku",
    price: "$3,000/mo retainer",
    id: "zara",
  },
  {
    name: "Nova",
    role: "Content Research Analyst",
    description:
      "Nova maps the content landscape in your category, surfaces the topics your buyers actually search, and hands you a content strategy grounded in real demand, not guesses. She delivers a competitive gap analysis, a keyword map built on buyer intent, and ten content plays sized by demand.",
    model: "Claude Sonnet",
    price: "$4,000/mo retainer",
    id: "nova",
  },
  {
    name: "Atlas",
    role: "Performance Analytics Agent",
    description:
      "Atlas unifies your marketing and sales data, tells you where budget is actually working, and builds the dashboards your leadership needs to move faster. He delivers full-funnel attribution, a leadership-ready performance dashboard, and a budget reallocation plan with ROI projections.",
    model: "Claude Opus",
    price: "$6,500/mo retainer",
    id: "atlas",
  },
  {
    name: "Sage",
    role: "Content Repurposing Engine",
    description:
      "Sage takes the content you\u2019ve already produced and multiplies its reach. One webinar becomes a dozen LinkedIn posts, three blog articles, an email sequence, and a lead magnet. She scores your content library by leverage potential and maps every asset to its best distribution channel.",
    model: "Claude Haiku",
    price: "$2,500/mo retainer",
    id: "sage",
  },
  {
    name: "Lumen",
    role: "Video Director",
    description:
      "Lumen owns video end to end. Concept, script, shot list, edit direction, and post. He runs on Opus because the first three seconds of a video decide whether anyone watches the next thirty, and that call can\u2019t be patched in post. He thinks in story before tools. Hook, setup, payoff.",
    model: "Claude Opus",
    price: "$5,800/mo retainer",
    id: "lumen",
  },
];

const comparisonRows = [
  { label: "Time to first output", traditional: "30–90 days", agent: "1 week" },
  { label: "Monthly cost", traditional: "$8,000–$20,000", agent: "$2,500–$6,500" },
  { label: "Consistency", traditional: "Variable", agent: "Consistent by design" },
  { label: "Supervision needed", traditional: "Self-directed", agent: "Human-in-the-loop" },
  { label: "Ramp time", traditional: "60–90 days", agent: "None" },
  { label: "Brand knowledge", traditional: "Built over months", agent: "Configured from day one" },
];

const faqs = [
  {
    q: "What\u2019s the difference between an AI marketing agent and a tool like HubSpot?",
    a: "HubSpot is infrastructure. It manages your CRM, email, and reporting. An AI marketing agent produces the work that goes into those channels. Think of agents as the team that creates and executes, and HubSpot as the system that tracks and distributes it.",
  },
  {
    q: "Do I need to know how to use AI or Claude to work with the agents?",
    a: "No. You brief Lihi, she configures and runs the agents, and you receive finished work. The AI is the engine. You interact with the operator, not the model.",
  },
  {
    q: "How does Lihi Pinto\u2019s oversight work day to day?",
    a: "Every deliverable passes Lihi before it reaches you. She reviews outputs for brand alignment, strategic accuracy, and quality. If something isn\u2019t right, she iterates before it ships. You\u2019re not reviewing AI drafts. You\u2019re receiving finished work.",
  },
  {
    q: "Can I hire one agent or do I need the full team?",
    a: "You can hire one. Most engagements start with a single agent diagnostic, typically Camille for brand voice, Rex for growth strategy, or Nova for content research, and expand from there as trust is established.",
  },
  {
    q: "What does a typical first month look like?",
    a: "Week one: kickoff call, brief, and agent configuration. Weeks two and three: the agent runs the diagnostic and produces the deliverable. Week four: review, iteration, and decision on whether to continue as a retainer. The diagnostic is designed to produce something immediately useful, not a roadmap for future work.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "A traditional agency manages channels and produces assets. Triple & Co. runs an operating system. Senior CMO and CRO leadership, full-service execution, and specialist agents all connected into one revenue engine. Lihi owns the outcome, not just the deliverables.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

function ModelBadge({ model }: { model: string }) {
  const colors: Record<string, string> = {
    "Claude Opus": "bg-purple-100 text-purple-800",
    "Claude Sonnet": "bg-blue-100 text-blue-800",
    "Claude Haiku": "bg-green-100 text-green-800",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${colors[model] ?? "bg-gray-100 text-gray-800"}`}
    >
      {model}
    </span>
  );
}

export default function AIMarketingAgentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Marketing Agents", href: "/agents" },
              { label: "AI Marketing Agents" },
            ]}
          />

          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6 mt-6">
              AI Marketing Agents for B2B:{" "}
              <span className="gradient-text">
                What They Are and How to Deploy Them
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-purple-7 leading-relaxed mb-4">
              Most B2B companies are using AI wrong. They hand a general-purpose
              chatbot to a marketer and call it a strategy. The output is
              generic, the brand sounds like everyone else, and the ROI is
              impossible to measure.
            </p>
            <p className="text-lg text-purple-7 leading-relaxed">
              AI marketing agents are different. An agent isn&rsquo;t a tool you
              prompt manually. It&rsquo;s a specialist, scoped to a single
              function, configured to your brand, and built to deliver finished
              work on a predictable cadence. At Triple &amp; Co., we&rsquo;ve
              built a team of eight of them. Here&rsquo;s what they are, how
              they work, and what they actually produce.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What is an AI marketing agent? */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              What Is an AI Marketing Agent?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-purple-7 leading-relaxed mb-4">
              An AI marketing agent is a purpose-built system that handles one
              specific marketing function end to end, from intake to finished
              deliverable. Unlike a general AI assistant that responds to
              whatever you ask, an agent has a defined scope, a specific model
              chosen for that type of judgment, and a structured workflow that
              produces consistent output.
            </p>
            <p className="text-lg text-purple-7 leading-relaxed mb-4">
              The distinction matters. When you ask ChatGPT to
              &ldquo;write a LinkedIn post,&rdquo; you get whatever it decides to
              produce. When you deploy an AI marketing agent for social, it knows
              your brand voice, your audience, your content pillars, your
              cadence, and your past performance, and it ships a 30-day
              calendar, not a one-off post.
            </p>
            <p className="text-lg text-purple-7 leading-relaxed">
              Agents are also supervised. At Triple &amp; Co., every piece of
              work passes a human,{" "}
              <Link href="/about" className="text-brand font-semibold hover:underline">
                Lihi Pinto
              </Link>
              , before it ships. That&rsquo;s the operating model: AI handles
              the execution, a senior operator handles the judgment calls.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 bg-purple-05 rounded-2xl p-7 border border-purple-15">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 bg-white mx-auto sm:mx-0">
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto, founder of Triple & Co."
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl font-extrabold text-purple-9 mb-1">
                  Lihi is the human in the loop.
                </p>
                <p className="text-purple-7 leading-relaxed">
                  Every agent runs under Lihi Pinto&rsquo;s supervision. She
                  scopes the work, reviews every output for brand alignment and
                  strategic accuracy, and signs off before anything reaches you.
                  The AI executes. Lihi owns the judgment.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why B2B companies are moving to agent-based teams */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              Why B2B Companies Are Moving to Agent-Based Marketing Teams
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-purple-7 leading-relaxed mb-4">
              The traditional B2B marketing model has a structural problem.
              Strategy lives in one silo. Content in another. Sales is
              disconnected. Analytics shows what happened but not what to do
              next. And every time you hire to fix one gap, you create a
              coordination overhead that slows everything down.
            </p>
            <p className="text-lg text-purple-7 leading-relaxed mb-8">
              AI marketing agents solve this differently. Instead of adding
              headcount, you deploy specialists. Each one handles a defined
              function, each one runs on the model best suited to that type
              of work, all of them connected into one operating system.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse rounded-2xl overflow-hidden shadow-[var(--shadow-base)]">
                <thead>
                  <tr className="bg-brand text-white">
                    <th className="px-6 py-4 font-bold text-sm" />
                    <th className="px-6 py-4 font-bold text-sm">
                      Traditional hire
                    </th>
                    <th className="px-6 py-4 font-bold text-sm">
                      AI marketing agent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-white" : "bg-purple-05"}
                    >
                      <td className="px-6 py-4 font-semibold text-purple-9 text-sm">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-purple-7 text-sm">
                        {row.traditional}
                      </td>
                      <td className="px-6 py-4 text-brand font-semibold text-sm">
                        {row.agent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg text-purple-7 leading-relaxed mt-8">
              For a B2B company at Series A or B that needs senior marketing
              output without building a full department, the math is
              straightforward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The Triple & Co. Agent Team */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-3">
              The Triple &amp; Co. Agent Team
            </h2>
            <p className="text-lg text-purple-7 leading-relaxed mb-10">
              8 Specialists, One Revenue System. Each agent is built for one
              function. Each one runs on the Claude model best suited to that
              type of judgment. Each one ships finished work, not drafts, not
              suggestions, not raw AI output.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {agents.map((agent, i) => (
              <ScrollReveal key={agent.id} delay={0.05 + i * 0.06}>
                <div className="relative bg-purple-05 rounded-2xl p-7 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-white">
                      <Image
                        src={`/images/agents/${agent.id}.png`}
                        alt={`${agent.name}, AI marketing agent`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <div>
                          <Link
                            href={`/agents#${agent.id}`}
                            className="text-xl font-extrabold text-purple-9 hover:text-brand transition-colors"
                          >
                            {agent.name}
                          </Link>
                          <p className="text-sm text-purple-6">{agent.role}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <ModelBadge model={agent.model} />
                          <span className="text-sm font-semibold text-purple-7">
                            {agent.price}
                          </span>
                        </div>
                      </div>
                      <p className="text-purple-7 leading-relaxed">
                        {agent.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-10">
              How It Works: Brief, Run, Deliver
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Brief",
                body: "A 30-minute kickoff call. You share the goal, the context, and the assets you already have. Lihi determines which agent is the right fit and scopes the engagement.",
              },
              {
                num: "2",
                title: "Run",
                body: "The agent runs on Claude. Lihi supervises strategy and quality end to end, reviewing outputs, making judgment calls, and ensuring everything aligns with your brand before it ships. You are never handed raw AI output.",
              },
              {
                num: "3",
                title: "Deliver",
                body: "Finished, on-brand work arrives on a weekly cadence. Every deliverable is yours to keep, whether you continue the engagement or not.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={0.1 + i * 0.12}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-xl font-black mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-extrabold text-purple-9 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-center text-purple-7 leading-relaxed mt-10 max-w-2xl mx-auto">
              The first engagement is always a fixed-scope diagnostic: two to
              three weeks, fixed price, with a defined deliverable. If you
              continue, the diagnostic fee is credited toward your first
              retainer month.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              Who This Is For
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-purple-7 leading-relaxed mb-6">
              AI marketing agents work best for B2B companies that are past
              product-market fit and need marketing output that compounds, not
              another tool to manage.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              {[
                {
                  title: "Series A–C B2B SaaS companies",
                  body: "that need senior marketing execution without the cost of a full department",
                },
                {
                  title: "Founders and CEOs",
                  body: "who understand the value of AI but don\u2019t want to spend time prompting it",
                },
                {
                  title: "Companies scaling into new markets",
                  body: "where Israeli companies go global, or global companies enter Israel",
                },
                {
                  title: "Teams with a marketing manager but no senior leadership",
                  body: "where the agents provide the specialist depth and Lihi provides the strategic direction",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-purple-05 rounded-xl p-5"
                >
                  <span className="text-brand text-xl font-black mt-0.5">
                    &#10003;
                  </span>
                  <p className="text-purple-7 leading-relaxed">
                    <span className="font-bold text-purple-9">
                      {item.title}
                    </span>{" "}
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg text-purple-7 leading-relaxed mt-6">
              It is not the right fit for companies that want to hand off
              strategy entirely, or that aren&rsquo;t ready to invest in
              consistent execution. The model works because Lihi is in the loop.
              It&rsquo;s not a self-running system.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-10 text-center">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <PillarFAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Ready to Put AI Agents to Work?
            </h2>
            <p className="text-purple-7 leading-relaxed mb-3 max-w-2xl mx-auto">
              Start with a diagnostic. Book a 30-minute call with Lihi, identify
              the biggest gap in your marketing operation, and get a fixed-scope
              deliverable in two weeks, credited toward your first retainer if
              you continue.
            </p>
            <p className="text-sm text-purple-5 mb-10">
              30 minutes. Zero pressure. Lihi will tell you within the first 10
              minutes whether this is the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-brand px-10 py-4 text-white font-bold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-lg"
            >
              Book a Diagnostic Call with Lihi &rarr;
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-purple-7">
              <Link
                href="/cmo-as-a-service"
                className="text-brand font-semibold hover:underline"
              >
                Pair agents with fractional CMO leadership &rarr;
              </Link>
              <Link
                href="/agents"
                className="text-brand font-semibold hover:underline"
              >
                Browse all 8 agents &rarr;
              </Link>
              <Link
                href="/about"
                className="text-brand font-semibold hover:underline"
              >
                About Lihi Pinto &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
