import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";

export const metadata: Metadata = {
  title: "The Orchestrator Method: How a Supervised AI Marketing Team Runs",
  description:
    "Triple & Co.'s operating model for AI-powered B2B marketing: one senior orchestrator, a digital COO, 8 specialist AI agents, a Brief, Run, Deliver supervision loop, and a weekly cadence that ships. What runs, who reviews it, and what ships in weeks 1 to 4.",
  alternates: { canonical: "/orchestrator-method" },
  openGraph: {
    title: "The Orchestrator Method | Triple & Co.",
    description:
      "One orchestrator. Eight specialist AI agents. Zero unsupervised output. The operating model behind Triple & Co.'s CMO and CRO as a Service.",
    url: "https://www.tripleandco.com/orchestrator-method",
  },
};

const principles = [
  {
    title: "Tools without operating models fail.",
    line: "Buying AI software is the easy part. Most pilots die because nobody redesigned how the work runs around them. The method is the operating model: defined roles, a supervision loop, and a cadence, so the leverage actually reaches revenue.",
  },
  {
    title: "Specialist agents beat generalist copilots.",
    line: "Eight narrow agents, each owning one job with its own context and standards, outperform one chatbot trying to do everything. A specialist can be briefed, measured, and corrected. A generalist can only be prompted.",
  },
  {
    title: "Human in the loop is not a compromise. It is the architecture.",
    line: "The orchestrator makes the calls only a human can make: strategy, taste, judgment, accountability. The agents give her leverage, not autonomy. That is why every deliverable passes a human before it ships.",
  },
];

const layers = [
  {
    n: "01",
    title: "The Orchestrator",
    line: "Lihi Pinto. Sets the strategy, writes the briefs, reviews every deliverable, and owns the revenue outcome. 15+ years in B2B SaaS, $70M+ raised at companies where she led marketing.",
  },
  {
    n: "02",
    title: "The Digital COO",
    line: "The operating layer between strategy and execution. Routes every brief to the right agent, enforces the brand system, runs the QA gates, and keeps the weekly cadence on schedule.",
  },
  {
    n: "03",
    title: "The 8 Specialists",
    line: "Eight AI agents, each owning one function: brand voice, strategy, social, research, analytics, repurposing, art direction, and video. Same strategy, same data, same brand system.",
  },
];

const agents = [
  { name: "Camille", role: "Writes the brand voice. Not an LLM's.", image: "/images/agents/camille.png" },
  { name: "Rex", role: "Briefs the strategy. Plans campaigns the team can execute.", image: "/images/agents/rex.png" },
  { name: "Zara", role: "Ships the social channels.", image: "/images/agents/zara.png" },
  { name: "Nova", role: "Reads the room. Research, trends, competitive intel.", image: "/images/agents/nova.png" },
  { name: "Atlas", role: "Reads the numbers. Tells us what's working.", image: "/images/agents/atlas.png" },
  { name: "Sage", role: "Repurposes everything. One piece becomes ten.", image: "/images/agents/sage.png" },
  { name: "Vega", role: "Directs how it looks. Art direction.", image: "/images/agents/vega.png" },
  { name: "Lumen", role: "Turns it into video.", image: "/images/agents/lumen.png" },
];

const loop = [
  {
    n: "01",
    title: "Brief",
    line: "The orchestrator turns strategy into a specific brief: audience, goal, channel, voice, and the metric that defines success. No agent starts work without one.",
  },
  {
    n: "02",
    title: "Run",
    line: "The agent executes inside the brand system, drawing on the same strategy and the same data as the rest of the team. Specialists run in parallel, the digital COO keeps them coordinated.",
  },
  {
    n: "03",
    title: "Deliver",
    line: "Lihi reviews every deliverable: corrects it, or approves it. Only then does it ship. Zero unsupervised output. You're never handed raw AI output.",
  },
];

const cadence = [
  {
    day: "Monday",
    title: "Priorities",
    line: "Pipeline and performance data set the week's briefs. What moved last week decides what runs this week.",
  },
  {
    day: "Daily",
    title: "Run and review",
    line: "Agents execute their briefs. Lihi reviews in daily windows, and approved work ships the same day it clears review.",
  },
  {
    day: "Midweek",
    title: "The numbers",
    line: "Atlas reads performance mid-flight. Briefs get corrected while the week can still change, not in next month's retro.",
  },
  {
    day: "Friday",
    title: "Ship and report",
    line: "The week's work is live. You get a plain report: what shipped, what moved, and what changes next week.",
  },
];

const weeks = [
  {
    n: "Week 1",
    title: "Diagnose and wire in",
    line: "Revenue diagnostic on your funnel math, access to channels and data, Camille extracts your brand voice from your existing content, and Atlas starts connecting the numbers.",
  },
  {
    n: "Week 2",
    title: "Strategy and system",
    line: "Rex maps the 90 days to your next revenue milestone. Nova grounds the content strategy in what your buyers actually search. Voice and brand system locked.",
  },
  {
    n: "Week 3",
    title: "First work ships",
    line: "First campaigns and content go live: social cadence from Zara, visual direction from Vega, and Sage multiplying the assets you already have.",
  },
  {
    n: "Week 4",
    title: "The loop closes",
    line: "The Atlas dashboard is live, the first performance read is in, and the weekly cadence is running: data corrects the briefs, and the method compounds from here.",
  },
];

const faqs = [
  {
    q: "What is the Orchestrator Method?",
    a: "The Orchestrator Method is Triple & Co.'s operating model for AI-powered B2B marketing. One senior human orchestrator (Lihi Pinto) sets strategy and reviews every output, a digital COO routes and quality-gates the work, and 8 specialist AI agents execute across brand voice, strategy, social, research, analytics, repurposing, design, and video. The work runs in a Brief, Run, Deliver loop on a weekly cadence, and nothing ships without human review.",
  },
  {
    q: "Who is the orchestrator?",
    a: "Lihi Pinto, founder of Triple & Co. and an AI-native CMO with 15+ years in B2B SaaS, $70M+ raised at companies where she led marketing, and revenue tripled repeatedly. The orchestrator role is the point of the method: a senior marketer whose judgment directs the agents and whose review gates everything that ships.",
  },
  {
    q: "How is this different from our team just using AI tools?",
    a: "Tools without operating models fail, and that is the failure mode of most in-house AI pilots. The method supplies what tools do not: specialist agents with defined roles instead of one generalist chatbot, a supervision loop where a senior marketer reviews every deliverable, and a weekly cadence tied to pipeline data. You are not buying software. You are plugging into an operating model that already runs.",
  },
  {
    q: "Is the output really supervised?",
    a: "Yes, structurally. The Deliver step of the loop is a human review by Lihi: she corrects or approves every deliverable before it ships. Zero unsupervised output is not a promise layered on top of the system. It is how the system is built.",
  },
  {
    q: "What ships in the first month?",
    a: "Week 1: revenue diagnostic, channel and data access, brand voice extracted from your existing content. Week 2: the 90-day growth map and a content strategy grounded in real buyer demand. Week 3: first campaigns and content live across channels. Week 4: the performance dashboard is live and the weekly cadence is running, with data correcting the briefs.",
  },
  {
    q: "Where can I read more about the method?",
    a: "Lihi documents the Orchestrator Method in public on LinkedIn: what the agents shipped, what broke, and what changed, from inside live engagements. Follow the series on her profile, or see the method priced as CMO as a Service and CRO as a Service on the pricing page.",
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

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.tripleandco.com/orchestrator-method",
  url: "https://www.tripleandco.com/orchestrator-method",
  name: "The Orchestrator Method",
  mainEntity: {
    "@type": "DefinedTerm",
    name: "The Orchestrator Method",
    description:
      "Triple & Co.'s operating model for AI-powered B2B marketing: one senior human orchestrator sets strategy and reviews every output, a digital COO routes the work, and 8 specialist AI agents execute in a Brief, Run, Deliver loop on a weekly cadence. Zero unsupervised output.",
    termCode: "orchestrator-method",
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Triple & Co. methodologies",
      publisher: { "@id": "https://www.tripleandco.com/#organization" },
    },
  },
  publisher: { "@id": "https://www.tripleandco.com/#organization" },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "The first four weeks of the Orchestrator Method",
  description:
    "What ships in weeks 1 to 4 of a Triple & Co. engagement run on the Orchestrator Method.",
  totalTime: "P28D",
  step: weeks.map((w, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: `${w.n}: ${w.title}`,
    text: w.line,
    url: `https://www.tripleandco.com/orchestrator-method#week-${i + 1}`,
  })),
};

export default function OrchestratorMethodPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "The Orchestrator Method" },
            ]}
          />
          <p className="eyebrow mb-4">The Triple &amp; Co. methodology</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
            The <span className="gradient-text">Orchestrator</span> Method
          </h1>
          <p className="text-lg text-purple-7 leading-relaxed mb-4">
            Most AI marketing fails the same way: tools without an operating
            model. The Orchestrator Method is the operating model.
          </p>
          <p className="text-base text-purple-6 leading-relaxed mb-8">
            One senior human orchestrator sets strategy and reviews every
            output. A digital COO routes the work. Eight specialist AI agents
            execute across content, campaigns, social, research, analytics,
            repurposing, design, and video, in a Brief &rarr; Run &rarr;
            Deliver loop on a weekly cadence. Zero unsupervised output.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/revenue-diagnostic"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              See it applied to your funnel <span>&#8594;</span>
            </Link>
            <a
              href="https://www.linkedin.com/in/lihipinto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand hover:underline"
            >
              Follow the series on LinkedIn &#8594;
            </a>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Why a method</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              Three Beliefs the Method Is{" "}
              <span className="gradient-text">Built On.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} delay={0.1 + i * 0.1}>
                <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                  <h3 className="text-lg font-extrabold text-purple-9 mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {p.line}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Three layers */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The structure</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              One Orchestrator. One COO.{" "}
              <span className="gradient-text">Eight Specialists.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {layers.map((l, i) => (
              <ScrollReveal key={l.n} delay={0.1 + i * 0.1}>
                <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                  <p className="text-sm font-black text-brand mb-3">{l.n}</p>
                  <h3 className="text-xl font-extrabold text-purple-9 mb-3">
                    {l.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {l.line}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Agent grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {agents.map((a, i) => (
              <ScrollReveal key={a.name} delay={0.05 * i}>
                <Link
                  href="/agents"
                  className="block text-center group rounded-2xl bg-white border border-purple-15 p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                >
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-purple-05 overflow-hidden p-1.5">
                    <Image
                      src={a.image}
                      alt={`${a.name}, AI marketing agent`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="font-extrabold text-purple-9 text-sm mb-1">
                    {a.name}
                  </p>
                  <p className="text-xs text-purple-6 leading-snug">
                    {a.role}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-8">
              <Link
                href="/agents"
                className="text-brand font-semibold hover:underline"
              >
                Meet the full cast, with deliverables and pricing &#8594;
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Supervision loop */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The supervision loop</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Brief &rarr; Run &rarr;{" "}
              <span className="gradient-text">Deliver.</span>
            </h2>
            <p className="text-base text-purple-7 text-center max-w-[640px] mx-auto mb-12">
              Every piece of work moves through the same three steps, and the
              third step is a human. That is the whole trick.
            </p>
          </ScrollReveal>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
            {loop.map((s, i) => (
              <li key={s.n}>
                <ScrollReveal delay={0.1 + i * 0.12}>
                  <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                    <p className="text-sm font-black text-brand mb-3">{s.n}</p>
                    <h3 className="text-xl font-extrabold text-purple-9 mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-purple-7 leading-relaxed">
                      {s.line}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Weekly cadence */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The operating week</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              A Cadence That <span className="gradient-text">Ships.</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-5">
            {cadence.map((c, i) => (
              <ScrollReveal key={c.day} delay={0.08 * i}>
                <div className="flex items-start gap-5 rounded-2xl bg-white border border-purple-15 p-6 shadow-[var(--shadow-base)]">
                  <span className="shrink-0 w-24 text-xs font-bold text-brand uppercase tracking-wider mt-1">
                    {c.day}
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-purple-9 mb-1">
                      {c.title}
                    </h3>
                    <p className="text-sm text-purple-7 leading-relaxed">
                      {c.line}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Weeks 1-4 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The first month</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              What Ships in Weeks{" "}
              <span className="gradient-text">1 to 4.</span>
            </h2>
          </ScrollReveal>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none p-0 m-0">
            {weeks.map((w, i) => (
              <li key={w.n} id={`week-${i + 1}`}>
                <ScrollReveal delay={0.08 * i}>
                  <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                    <p className="text-sm font-black text-brand mb-3">{w.n}</p>
                    <h3 className="text-xl font-extrabold text-purple-9 mb-3">
                      {w.title}
                    </h3>
                    <p className="text-sm text-purple-7 leading-relaxed">
                      {w.line}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
          <ScrollReveal delay={0.2}>
            <p className="text-sm text-purple-7 text-center mt-10">
              The method priced:{" "}
              <Link
                href="/pricing"
                className="text-brand font-semibold hover:underline"
              >
                engagement models and pricing
              </Link>{" "}
              &middot; the technical layer, tested free:{" "}
              <Link
                href="/ai-visibility-checker"
                className="text-brand font-semibold hover:underline"
              >
                the AI Visibility Checker
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <p className="eyebrow mb-3">See it on your funnel</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              The Method Is Public. The Application Is{" "}
              <span className="gradient-text">Yours.</span>
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              Book a free 30-minute Revenue Diagnostic with Lihi. You leave
              with your funnel math reviewed and three concrete moves to add
              pipeline this quarter, whether or not we ever work together.
            </p>
            <Link
              href="/revenue-diagnostic"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a Revenue Diagnostic <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">FAQ</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              The Method, <span className="gradient-text">Explained.</span>
            </h2>
          </ScrollReveal>
          <PillarFAQ faqs={faqs} />
        </div>
      </section>
    </>
  );
}
