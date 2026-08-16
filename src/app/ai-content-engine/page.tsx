import type { Metadata } from "next";
import {
  SolutionLanding,
  type LandingContent,
} from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "AI Content Engine as a Service, Supervised",
  description:
    "An AI content engine for B2B: brand voice, research-backed strategy, and repurposing run by supervised AI agents with human review on every output.",
  alternates: { canonical: "/ai-content-engine" },
  openGraph: {
    title: "AI Content Engine as a Service | Triple & Co.",
    description:
      "Brand voice, content strategy, and repurposing run daily by supervised AI agents, reviewed by a human before anything ships.",
    url: "https://www.tripleandco.com/ai-content-engine",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Content Engine",
  serviceType: "AI-powered B2B content marketing, supervised",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B technology companies",
  },
  description:
    "A supervised AI content engine for B2B: Camille owns brand voice, Nova grounds strategy in real search demand, and Sage multiplies every asset across channels. Every output passes human review before it ships.",
  url: "https://www.tripleandco.com/ai-content-engine",
};

const content: LandingContent = {
  breadcrumbLabel: "AI Content Engine",
  canonical: "/ai-content-engine",

  heroEyebrow: "AI content engine, supervised",
  h1Lead: "A Content Engine That Sounds Like You,",
  h1Highlight: "Not Like AI",
  heroLede:
    "Most AI content fails the same way: it is fast, cheap, and reads like everyone else's. The problem is not the model. It is the missing system around it.",
  heroBody:
    "Triple & Co. runs content as an engine: Camille extracts and enforces your brand voice, Nova grounds every topic in real buyer demand, and Sage multiplies each asset into a dozen channel-ready pieces. Lihi Pinto reviews every output before it ships, so volume never costs you credibility.",
  heroStats:
    "3 specialist agents \u00b7 100% human-reviewed \u00b7 Included in engagements from $5,000/month",
  heroImageAlt: "Lihi Pinto, supervising the AI content engine",

  problemEyebrow: "The problem",
  problemH2Lead: "AI Made Content Cheap. It Also Made Most of It",
  problemH2Highlight: "Worthless",
  problemParas: [
    "Every B2B company now has access to the same models, so publishing volume is no longer an advantage. Feeds are full of generic AI posts, and LinkedIn literally added a button for readers to flag them. What buyers and AI answer engines reward now is the opposite: a distinct voice, real expertise, and topics grounded in what buyers actually ask.",
    "Doing that manually does not scale. A freelance writer learns your voice slowly and leaves with it. An agency produces to a brief and bills per asset. In-house teams spend their week repurposing yesterday's webinar instead of creating what is next.",
    "The teams winning content right now are not the ones writing more. They are the ones who built an engine: voice codified, demand researched, production systematized, and a human editor accountable for everything that ships.",
  ],
  problemCallout:
    "The advantage is not access to AI. It is the supervised system around it, and someone accountable for what it produces.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Three Agents. One Voice.",
  modelH2Highlight: "One Accountable Editor.",
  modelIntro:
    "The content engine is three specialist agents working as one system, supervised end to end by Lihi Pinto.",
  pillars: [
    {
      title: "Camille Owns Brand Voice",
      description:
        "Camille extracts your voice from your existing content and applies it consistently across every channel, so your company sounds like itself, not like every other B2B SaaS on LinkedIn. She delivers voice extraction, asset rewrites, and a tone guide your whole team can use.",
    },
    {
      title: "Nova Grounds Strategy in Demand",
      description:
        "Nova maps the content landscape in your category, surfaces the topics your buyers actually search, and hands you a content strategy grounded in real demand, not guesses: competitive gap analysis, an intent-based keyword map, and ten content plays sized by demand.",
    },
    {
      title: "Sage Multiplies Every Asset",
      description:
        "Sage takes the content you have already produced and multiplies its reach: one webinar becomes a dozen LinkedIn posts, three articles, an email sequence, and a lead magnet. She scores your library by leverage and maps every asset to its best channel.",
    },
  ],

  comparisonHeading: "How B2B Teams Usually Buy Content",
  comparisonColHeaders: [
    "Freelancers",
    "Content agency",
    "Triple & Co. engine",
  ],
  comparisonRows: [
    {
      label: "Brand voice",
      left: "Lives in one person's head",
      middle: "Approximated per brief",
      right: "Codified and enforced by Camille",
    },
    {
      label: "Topic selection",
      left: "Whatever was assigned",
      middle: "Editorial calendar",
      right: "Mapped to real buyer demand by Nova",
    },
    {
      label: "Repurposing",
      left: "Rarely happens",
      middle: "Billed per asset",
      right: "Systematic, every asset multiplied",
    },
    {
      label: "Quality control",
      left: "You are the editor",
      middle: "Account manager review",
      right: "Human review on every output",
    },
    {
      label: "Cost model",
      left: "Per piece, adds up",
      middle: "Retainer per channel",
      right: "Included in one engagement",
    },
  ],
  comparisonNote:
    "You get the output of a content team and the consistency of a single editor, inside one engagement instead of a vendor stack.",

  signalsEyebrow: "Built for B2B",
  signalsH2Lead: "Volume Without the",
  signalsH2Highlight: "AI Slop",
  signalsIntro:
    "The engine is built for the way B2B content works now: buyers research through AI engines, founders build audiences, and generic content gets filtered out.",
  signals: [
    {
      title: "A Voice AI Filters Cannot Flag",
      description:
        "Because Camille writes in your extracted voice and a human reviews every piece, output reads like your team on its best day, not like a model's median answer.",
    },
    {
      title: "Content AI Engines Cite",
      description:
        "Nova targets the questions buyers ask ChatGPT and Perplexity, and everything ships with the structure and schema AI engines need to cite you as the answer.",
    },
    {
      title: "Compounding, Not One-Off",
      description:
        "Sage makes every flagship asset work across channels for months, so the library compounds instead of resetting every quarter.",
    },
  ],

  faqEyebrow: "FAQ",
  faqH2Lead: "AI Content Engine Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "What is an AI content engine?",
      a: "An AI content engine is a system, not a tool: codified brand voice, demand-grounded topic selection, systematic repurposing, and human review, run continuously by specialized AI agents. At Triple & Co. that means Camille (brand voice), Nova (research and strategy), and Sage (repurposing), supervised by Lihi Pinto, with every output human-reviewed before it ships.",
    },
    {
      q: "Will the content sound like AI wrote it?",
      a: "No, and that is the point of the system. Camille writes in a voice extracted from your own best content, and nothing publishes without human review. The engine exists precisely because generic AI content stopped working: buyers and platforms now filter it out.",
    },
    {
      q: "How much does the AI content engine cost?",
      a: "The full engine is included in every Triple & Co. leadership engagement, which run $5,000 to $15,000 per month for CMO as a Service, CRO as a Service, or Head of Growth. If you only want a single specialist, individual agents start at $2,500 per month.",
    },
    {
      q: "What do we get in the first month?",
      a: "Typically: your brand voice extracted and documented by Camille, a demand-mapped content strategy from Nova with ten prioritized plays, your existing library scored for repurposing leverage by Sage, and the first sprint of content live. The diagnostic and setup happen in the first two weeks.",
    },
  ],
  faqCloser: {
    before: "Want the full marketing function, not just content? See",
    linkHref: "/cmo-as-a-service",
    linkLabel: "CMO as a Service",
    after: ".",
  },

  ctaH2Lead: "Stop Feeding the Feed.",
  ctaH2Highlight: "Start Compounding.",
  ctaBody:
    "One supervised content engine: voice, strategy, and repurposing running daily, with a human accountable for every word.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function AIContentEnginePage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
