import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Supervised AI Marketing Playbook",
  description:
    "How one orchestrator and 8 AI agents run a B2B revenue engine: mindset shifts, workflows, human oversight, and a practical 90-day roadmap.",
  alternates: { canonical: "/playbook" },
  openGraph: {
    title: "The 9-Person Marketing Team Where 8 Aren't People | Triple & Co.",
    description:
      "The Supervised AI Marketing Playbook: buyers already moved to AI. Most marketing teams didn't. Here is the operating model that closes the gap.",
    url: "https://www.tripleandco.com/playbook",
  },
};

const gapStats = [
  {
    stat: "94%",
    line: "of B2B buyers now use AI somewhere in their buying process. Up from 89% a year earlier.",
    source: "Forrester Buyers' Journey Survey, 2026",
  },
  {
    stat: "29%",
    line: "of buyers start their research in ChatGPT more often than in Google. Nearly 8 in 10 say AI search changed how they research.",
    source: "G2 Buyer Behavior Report, 2025",
  },
  {
    stat: "2 in 3",
    line: "B2B buyers use generative AI as much as or more than search when researching vendors. In tech, it's 80%.",
    source: "Responsive, Inside the Buyer's Mind, 2025",
  },
  {
    stat: "11%",
    line: "of B2B marketing orgs have AI agents actually in production beyond single-task automation. The other 89% are still piloting.",
    source: "Industry AI-in-Marketing survey, 2024, n=405",
  },
  {
    stat: "47%",
    line: "of CMOs name governance, hallucination risk, and brand safety as the top barrier to deploying AI agents.",
    source: "Salesforce State of Marketing, 9th ed.",
  },
  {
    stat: "87%",
    line: "of consumers assume brand content is at least partly AI-generated, and reward proof over polish.",
    source: "Cashew Research, 2026, n=2,149",
  },
];

const cast = [
  { name: "Camille", role: "Brand voice. Yours, not an LLM's.", image: "/images/agents/camille.png" },
  { name: "Rex", role: "Campaign strategy and briefs.", image: "/images/agents/rex.png" },
  { name: "Zara", role: "Social channels that ship.", image: "/images/agents/zara.png" },
  { name: "Nova", role: "Research, trends, competitive intel.", image: "/images/agents/nova.png" },
  { name: "Atlas", role: "The numbers. What's actually working.", image: "/images/agents/atlas.png" },
  { name: "Sage", role: "Repurposing. One piece becomes ten.", image: "/images/agents/sage.png" },
  { name: "Vega", role: "Art direction and visual system.", image: "/images/agents/vega.png" },
  { name: "Lumen", role: "Video, from script to cut.", image: "/images/agents/lumen.png" },
];

type Chapter = {
  n: string;
  agent: string;
  image: string;
  agentRole: string;
  title: string;
  shift: string;
  body: string[];
  data: { stat: string; line: string; source: string };
  redPen: string;
};

const chapters: Chapter[] = [
  {
    n: "01",
    agent: "Nova",
    image: "/images/agents/nova.png",
    agentRole: "Content Research Analyst",
    title: "Your Buyers Already Switched. Quietly.",
    shift: "From \u201CAI is coming\u201D to \u201CAI is how you're already being evaluated.\u201D",
    body: [
      "Your next customer's first impression of you probably wasn't your website. It was a ChatGPT answer you never saw, comparing you to two competitors you didn't pick.",
      "AI referral traffic doesn't spread evenly. It concentrates 4\u20139x on decision pages: pricing, tools, comparisons. The exact pages where deals are made. ChatGPT alone sends 84% of it, and it tripled in a year.",
      "The move: treat AI answers as a channel. Audit what the models say about you, structure your site so they can read it (llms.txt, JSON-LD, clean headings), and publish content that answers the questions buyers actually ask machines.",
    ],
    data: {
      stat: "84.2%",
      line: "of AI referral traffic comes from ChatGPT, growing 3.26x year over year, and it lands on decision pages.",
      source: "Previsible State of AI Discovery, 2025 \u2014 1.96M LLM sessions",
    },
    redPen:
      "Nova brings me ten trends a week. My job is to kill eight of them. Research without a veto is just anxiety with charts.",
  },
  {
    n: "02",
    agent: "Camille",
    image: "/images/agents/camille.png",
    agentRole: "Brand Voice Generator",
    title: "Everyone Sounds Like the Same Robot Now.",
    shift: "From \u201Cgenerate more content\u201D to \u201Csound like yourself, at scale.\u201D",
    body: [
      "Here's the uncomfortable part: your audience already assumes you use AI. 87% of consumers believe brand content is at least partly AI-generated. Pretending otherwise is a losing game.",
      "What they punish isn't AI. It's slop \u2014 the generic, safe, could-be-anyone voice that says \u201Cnobody here read this before publishing.\u201D Trust has moved from polish to proof.",
      "The move: extract your voice before you scale it. Codify the sentence structure, the phrases you'd never use, the opinions you actually hold \u2014 and make every AI-assisted draft pass through that filter. The voice guide is the asset. The volume is just leverage.",
    ],
    data: {
      stat: "87%",
      line: "of consumers assume brand content is at least partly AI-made. Only 13% are confident they can tell. Authenticity is now table stakes; proof is the differentiator.",
      source: "Cashew Research, 2026",
    },
    redPen:
      "Camille drafts in our voice. I still read every line out loud. If I wouldn't say it on a call with a client, it doesn't ship.",
  },
  {
    n: "03",
    agent: "Zara",
    image: "/images/agents/zara.png",
    agentRole: "Social Media Commander",
    title: "Your Company Page Is Not the Engine. You Are.",
    shift: "From company-centric posting to people-led distribution.",
    body: [
      "Organic reach for LinkedIn company pages sits around 2\u20136% of followers. Personal profiles drive up to 8x more engagement. Your buyers follow people, not logos \u2014 they always have.",
      "B2B buying journeys run 3\u20136 months, mostly invisible. If you only show up for launches, you're absent for the entire evaluation. Consistency beats brilliance here: reliably present beats occasionally impressive.",
      "The move: build the founder's voice as infrastructure, not as a hobby. A monthly extraction session, pre-approved formats, and an always-on cadence that survives busy weeks \u2014 because the agent doesn't get busy.",
    ],
    data: {
      stat: "8x",
      line: "more engagement on personal profiles than company pages \u2014 while company-page organic reach sits at 2\u20136% of followers.",
      source: "LinkedIn benchmarks, via SAGE B2B Social Playbook",
    },
    redPen:
      "Zara can schedule a month of posts in an afternoon. She cannot have an opinion about this week's funding news. That part is mine.",
  },
  {
    n: "04",
    agent: "Sage",
    image: "/images/agents/sage.png",
    agentRole: "Content Repurposing Engine",
    title: "You Don't Have a Content Problem. You Have a Leverage Problem.",
    shift: "From creating more to extracting more from what already works.",
    body: [
      "Your best content already exists. It's in your sales calls, your customer conversations, and the one LinkedIn post that actually landed last month. Most teams let it die in one format, on one channel, once.",
      "One strong idea should become a carousel, three short variations, a newsletter section, and a 60-second video script \u2014 same thinking, five entry points. That's how always-on presence happens without always-on effort.",
      "The move: run a repurposing pass on your top performer every single week. Vega keeps the visuals in system, Lumen turns the script into video, and the idea compounds instead of expiring.",
    ],
    data: {
      stat: "63%",
      line: "average productivity lift on content operations tasks handled by AI agents.",
      source: "State of AI industry report, 2024",
    },
    redPen:
      "Sage will happily turn one post into ten. The question I ask first: did the original deserve to exist ten times? Multiply signal, not noise.",
  },
  {
    n: "05",
    agent: "Atlas",
    image: "/images/agents/atlas.png",
    agentRole: "Performance Analytics Agent",
    title: "Impressions Are Applause. Pipeline Is Revenue.",
    shift: "From vanity metrics to sales signals.",
    body: [
      "Engagement isn't a score, it's a signal: which topics resonate, which accounts are paying attention, and who's warming up before they ever fill in a form.",
      "Report in three layers: activity (are we consistent?), audience (are the right people engaging?), impact (is it touching pipeline, inbound, or hiring?). When social answers business questions, it stops being a cost center.",
      "The move: read the numbers mid-flight, not in next month's retro. Briefs get corrected while the week can still change. That's the difference between a dashboard and a feedback loop.",
    ],
    data: {
      stat: "21%",
      line: "average reduction in enterprise B2B sales cycle length where agentic AI coordinates cross-channel account engagement.",
      source: "B2B Marketing Automation Wave, Q4 2024",
    },
    redPen:
      "Atlas tells me what moved. He doesn't get to decide what matters. Metrics are witnesses, not judges.",
  },
];

const neverOwn = [
  "The strategy and the point of view",
  "The founder's authentic voice",
  "The judgment call on what ships",
  "The human moments that build trust",
  "Accountability for the outcome",
];

const shouldOwn = [
  "Turning raw thinking into structured drafts",
  "Repurposing one asset into many formats",
  "Voice consistency at scale",
  "Research, trends, and gap detection",
  "The production grind, on schedule, every week",
];

const audit = [
  {
    area: "AI Visibility",
    items: [
      "You know what ChatGPT says when asked about your category",
      "Your site is machine-readable: llms.txt, JSON-LD, clean structure",
      "Decision pages (pricing, comparisons) answer real buyer questions",
    ],
  },
  {
    area: "Voice & Trust",
    items: [
      "Your brand voice is codified, not tribal knowledge",
      "Every AI-assisted draft passes a human review before shipping",
      "You're transparent about how you use AI",
    ],
  },
  {
    area: "Distribution",
    items: [
      "Founder posts at least weekly, with a real point of view",
      "Content runs always-on, not in campaign bursts",
      "Top content gets repurposed across formats every week",
    ],
  },
  {
    area: "Proof",
    items: [
      "Social and content are measured against pipeline, not likes",
      "Engagement signals reach sales as warm-account intel",
      "Performance data corrects next week's briefs",
    ],
  },
];

const roadmap = [
  {
    phase: "Days 1\u201330",
    title: "Build the foundation",
    items: [
      "Audit what AI models currently say about you",
      "Extract and codify the brand voice",
      "Define the supervision loop: who briefs, who reviews, who has the veto",
      "Ship the founder's first structured post",
    ],
  },
  {
    phase: "Days 31\u201360",
    title: "Build the rhythm",
    items: [
      "Run the weekly cadence: brief \u2192 run \u2192 review \u2192 ship",
      "Stand up the repurposing pass on every top performer",
      "Make the site machine-readable for AI search",
      "Start reading engagement as sales signal",
    ],
  },
  {
    phase: "Days 61\u201390",
    title: "Build the engine",
    items: [
      "Double down on what the data says is working",
      "Wire signals to sales; measure against pipeline",
      "Expand to a second channel and format",
      "Review the quarter, set the next one \u2014 with receipts",
    ],
  },
];

const madeBy = [
  { who: "Nova", did: "pulled the research and the sources" },
  { who: "Camille", did: "kept it sounding like us" },
  { who: "Vega", did: "held the visual system to the brand" },
  { who: "Sage", did: "is already turning it into ten other things" },
  { who: "Lihi", did: "held the red pen. Every page passed a human." },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.tripleandco.com/playbook",
  url: "https://www.tripleandco.com/playbook",
  name: "The Supervised AI Marketing Playbook",
  description:
    "How one orchestrator and 8 AI agents run a full B2B revenue engine: mindset shifts, workflows, what AI must never own, and a 90-day roadmap.",
  publisher: { "@id": "https://www.tripleandco.com/#organization" },
};

export default function PlaybookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "The Playbook" }]}
          />
          <p className="eyebrow mb-4">The Supervised AI Marketing Playbook</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
            The 9-Person Marketing Team Where{" "}
            <span className="gradient-text">8 Aren&apos;t People.</span>
          </h1>
          <p className="text-lg text-purple-7 leading-relaxed mb-4">
            Your buyers already research with AI. Most marketing teams still
            don&apos;t ship with it. This playbook is the operating model that
            closes the gap: one human orchestrator, eight specialist AI agents,
            and zero unsupervised output.
          </p>
          <p className="text-base text-purple-6 leading-relaxed mb-8">
            Five chapters, each fronted by the agent who owns that job. Every
            claim has a source. Every page was approved by a human named Lihi.
            Yes, we named the agents. No, we&apos;re not sorry.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/revenue-diagnostic"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-7 py-4 text-[19px] font-bold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              See it applied to your funnel <span>&#8594;</span>
            </Link>
            <Link
              href="/orchestrator-method"
              className="text-sm font-semibold text-brand-dark hover:underline"
            >
              The method behind it &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* The gap */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Chapter 0 &middot; The gap</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Buyers Moved. Marketing{" "}
              <span className="gradient-text">Didn&apos;t.</span>
            </h2>
            <p className="text-base text-purple-7 text-center max-w-[640px] mx-auto mb-12">
              The whole playbook in six numbers. The distance between the first
              three and the last three is where deals are being won and lost
              right now.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gapStats.map((s, i) => (
              <ScrollReveal key={s.stat + s.source} delay={0.05 * i}>
                <div className="relative bg-white rounded-2xl p-7 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                  <p className="text-4xl font-black gradient-text mb-3">
                    {s.stat}
                  </p>
                  <p className="text-sm text-purple-7 leading-relaxed mb-3">
                    {s.line}
                  </p>
                  <p className="text-xs text-purple-5">{s.source}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The cast */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Meet your authors</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Eight Agents. One{" "}
              <span className="gradient-text">Red Pen.</span>
            </h2>
            <p className="text-base text-purple-7 text-center max-w-[640px] mx-auto mb-12">
              Each chapter is presented by the agent who runs that part of the
              engine &mdash; and closed by the human who decides what ships.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {cast.map((a, i) => (
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
                  <p className="text-xs text-purple-6 leading-snug">{a.role}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-5 rounded-2xl bg-white border border-purple-15 p-6 shadow-[var(--shadow-base)] max-w-[560px] mx-auto">
              <div className="w-16 h-16 shrink-0 rounded-full bg-purple-05 overflow-hidden">
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto, orchestrator"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-extrabold text-purple-9 text-sm mb-1">
                  Lihi Pinto &middot; The Orchestrator
                </p>
                <p className="text-xs text-purple-6 leading-snug">
                  15+ years in B2B tech. $70M+ raised at companies where she
                  led marketing. Owns the strategy, the taste, and the veto.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Chapters */}
      {chapters.map((c, idx) => (
        <section
          key={c.n}
          className={`py-16 lg:py-24 ${idx % 2 === 0 ? "bg-white" : "bg-purple-05"}`}
        >
          <div className="mx-auto max-w-[880px] px-8">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 shrink-0 rounded-full bg-purple-05 overflow-hidden p-1 border border-purple-15">
                  <Image
                    src={c.image}
                    alt={`${c.agent}, ${c.agentRole}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="eyebrow">
                  Chapter {c.n} &middot; presented by {c.agent},{" "}
                  {c.agentRole}
                </p>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-3">
                {c.title}
              </h2>
              <p className="text-base font-semibold text-brand mb-6">
                The shift: {c.shift}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 mb-8">
                {c.body.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-base text-purple-7 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative bg-white rounded-2xl p-7 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden border border-purple-15">
                  <p className="text-xs font-bold uppercase tracking-wider text-purple-5 mb-2">
                    The receipt
                  </p>
                  <p className="text-3xl font-black gradient-text mb-2">
                    {c.data.stat}
                  </p>
                  <p className="text-sm text-purple-7 leading-relaxed mb-2">
                    {c.data.line}
                  </p>
                  <p className="text-xs text-purple-5">{c.data.source}</p>
                </div>
                <div className="rounded-2xl bg-white p-7 border border-purple-15 shadow-[var(--shadow-base)]">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand mb-2">
                    Lihi&apos;s red pen
                  </p>
                  <p className="text-sm text-purple-7 leading-relaxed italic">
                    &ldquo;{c.redPen}&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* The red pen rules */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">The rules of the loop</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              What AI Must{" "}
              <span className="gradient-text">Never Own.</span>
            </h2>
            <p className="text-base text-purple-7 text-center max-w-[640px] mx-auto mb-12">
              This is the answer to the 47% of CMOs stuck on governance and
              brand safety. Supervision isn&apos;t a compromise &mdash; it&apos;s
              the architecture.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl bg-white border border-purple-15 p-8 shadow-[var(--shadow-base)] h-full">
                <h3 className="text-lg font-extrabold text-purple-9 mb-4">
                  The human owns
                </h3>
                <ul className="space-y-3">
                  {neverOwn.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-brand font-black mt-0.5">&#10007;</span>
                      <span className="text-sm text-purple-7 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl bg-white border border-purple-15 p-8 shadow-[var(--shadow-base)] h-full">
                <h3 className="text-lg font-extrabold text-purple-9 mb-4">
                  The agents own
                </h3>
                <ul className="space-y-3">
                  {shouldOwn.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-brand font-black mt-0.5">&#10003;</span>
                      <span className="text-sm text-purple-7 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Audit */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Appendix A</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              The Supervised AI{" "}
              <span className="gradient-text">Readiness Audit.</span>
            </h2>
            <p className="text-base text-purple-7 text-center max-w-[640px] mx-auto mb-12">
              Be honest. Every unchecked box is exactly where to start
              building.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {audit.map((a, i) => (
              <ScrollReveal key={a.area} delay={0.08 * i}>
                <div className="rounded-2xl bg-white border border-purple-15 p-8 shadow-[var(--shadow-base)] h-full">
                  <h3 className="text-base font-extrabold text-purple-9 mb-4">
                    {a.area}
                  </h3>
                  <ul className="space-y-3">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="shrink-0 mt-1 w-4 h-4 rounded border border-purple-3" />
                        <span className="text-sm text-purple-7 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Appendix B</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              The 90-Day{" "}
              <span className="gradient-text">Quick Start.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmap.map((r, i) => (
              <ScrollReveal key={r.phase} delay={0.1 + i * 0.1}>
                <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden h-full border border-purple-15">
                  <p className="text-sm font-black text-brand mb-2">
                    {r.phase}
                  </p>
                  <h3 className="text-lg font-extrabold text-purple-9 mb-4">
                    {r.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="text-brand mt-0.5">&#8594;</span>
                        <span className="text-sm text-purple-7 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How this was made */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Full disclosure</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              How This Playbook{" "}
              <span className="gradient-text">Was Made.</span>
            </h2>
            <p className="text-base text-purple-7 text-center max-w-[640px] mx-auto mb-10">
              This playbook was produced by the exact system it describes.
              That&apos;s not a gimmick &mdash; it&apos;s the proof.
            </p>
          </ScrollReveal>
          <div className="space-y-4">
            {madeBy.map((m, i) => (
              <ScrollReveal key={m.who} delay={0.06 * i}>
                <div className="flex items-center gap-4 rounded-2xl bg-white border border-purple-15 px-6 py-4 shadow-[var(--shadow-base)]">
                  <span className="shrink-0 w-20 text-sm font-extrabold text-purple-9">
                    {m.who}
                  </span>
                  <span className="text-sm text-purple-7">{m.did}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[720px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Want This Engine Running on{" "}
              <span className="gradient-text">Your Funnel?</span>
            </h2>
            <p className="text-base text-purple-7 leading-relaxed mb-8">
              The playbook is the model. The revenue diagnostic is where it
              meets your numbers: 30 minutes, your funnel math, and a straight
              answer on where the gap is.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/revenue-diagnostic"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Book the revenue diagnostic <span>&#8594;</span>
              </Link>
              <Link
                href="/agents"
                className="text-sm font-semibold text-brand hover:underline"
              >
                Meet the agents &#8594;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
