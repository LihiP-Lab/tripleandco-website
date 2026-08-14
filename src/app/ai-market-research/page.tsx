import type { Metadata } from "next";
import {
  SolutionLanding,
  type LandingContent,
} from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "AI Market Research & Competitive Intel, Supervised",
  description:
    "AI market research for B2B: competitive gap analysis, intent-based keyword maps, and demand-sized content plays run by a supervised AI agent. Included in engagements from $5,000/month.",
  alternates: { canonical: "/ai-market-research" },
  openGraph: {
    title: "AI Market Research & Competitive Intel | Triple & Co.",
    description:
      "Competitive intelligence and buyer-demand research run continuously by a supervised AI agent, reviewed by a senior marketer.",
    url: "https://www.tripleandco.com/ai-market-research",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Market Research & Competitive Intelligence",
  serviceType: "AI-powered B2B market research, supervised",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B technology companies",
  },
  description:
    "Supervised AI market research for B2B: Nova runs competitive gap analysis, maps buyer intent, and sizes content plays by real demand, continuously instead of once a year. Human-reviewed before decisions ship.",
  url: "https://www.tripleandco.com/ai-market-research",
};

const content: LandingContent = {
  breadcrumbLabel: "AI Market Research",
  canonical: "/ai-market-research",

  heroEyebrow: "AI research and competitive intel, supervised",
  h1Lead: "Know What Buyers Ask Before Your",
  h1Highlight: "Competitors Do",
  heroLede:
    "Most B2B strategy is built on a research deck that was outdated the month it was delivered. Your market moves weekly. Your intel should too.",
  heroBody:
    "Triple & Co. runs research as a continuous function: Nova maps your competitive landscape, surfaces the questions buyers actually ask (in Google and in ChatGPT), and sizes every opportunity by real demand. Lihi Pinto turns the findings into positioning and pipeline decisions, so intel becomes action instead of a slide.",
  heroStats:
    "Continuous, not annual \u00b7 Intent-based, not keyword lists \u00b7 Included in engagements from $5,000/month",
  heroImageAlt: "Lihi Pinto, supervising AI market research",

  problemEyebrow: "The problem",
  problemH2Lead: "Strategy Built on Stale Research Is Just",
  problemH2Highlight: "Confident Guessing",
  problemParas: [
    "The traditional options are bad in different ways. A research firm delivers a beautiful report twice a year, priced like a car, describing a market that has already moved. Doing it in-house means a founder with twelve browser tabs the night before a board meeting. Most teams simply skip it and build content, campaigns, and positioning on instinct.",
    "Meanwhile the actual signal is public and constantly refreshing: what buyers search, what they ask AI engines, what competitors publish, where category gaps are opening. Nobody has time to watch it manually. AI agents do not have that problem.",
    "The risk of guessing has also gone up. Buyers now shortlist through ChatGPT and Perplexity before they ever land on your site. If you do not know which questions they ask and who is currently the cited answer, you are invisible in the part of the funnel you cannot see.",
  ],
  problemCallout:
    "Research is not a deliverable. It is a function that should run every week, feeding every decision.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Nova Watches the Market.",
  modelH2Highlight: "Lihi Calls the Play.",
  modelIntro:
    "The research engine pairs a specialist agent with senior judgment, so findings turn into decisions instead of decks.",
  pillars: [
    {
      title: "Nova Maps the Landscape",
      description:
        "Nova maps the content landscape in your category, surfaces the topics your buyers actually search, and delivers a competitive gap analysis, an intent-based keyword map, and ten content plays sized by real demand, not guesses.",
    },
    {
      title: "AI-Engine Visibility Included",
      description:
        "The research covers the new front door: which buyer questions ChatGPT, Perplexity, and Gemini answer in your category, who gets cited today, and what it takes to become the cited answer.",
    },
    {
      title: "Findings Become Decisions",
      description:
        "Lihi Pinto reviews every finding and translates it into positioning moves, content plays, and campaign priorities inside the same engagement, so nothing dies in a slide deck.",
    },
  ],

  comparisonHeading: "How B2B Teams Usually Buy Research",
  comparisonColHeaders: [
    "Research firm",
    "DIY in-house",
    "Triple & Co. engine",
  ],
  comparisonRows: [
    {
      label: "Freshness",
      left: "Twice a year",
      middle: "Whenever someone has time",
      right: "Continuous",
    },
    {
      label: "Competitive intel",
      left: "Snapshot",
      middle: "Anecdotal",
      right: "Systematic gap analysis",
    },
    {
      label: "Buyer intent",
      left: "Survey-based",
      middle: "Guessed",
      right: "Mapped from real search and AI queries",
    },
    {
      label: "From insight to action",
      left: "Your job",
      middle: "Rarely happens",
      right: "Same engagement, same week",
    },
    {
      label: "Cost model",
      left: "Five figures per report",
      middle: "Founder hours",
      right: "Included in one engagement",
    },
  ],
  comparisonNote:
    "You get a research function that never sleeps, and a senior operator who turns what it finds into pipeline.",

  signalsEyebrow: "Built for B2B",
  signalsH2Lead: "Intel That Feeds",
  signalsH2Highlight: "Every Decision",
  signalsIntro:
    "Research is the upstream of everything else we run: positioning, content, campaigns, and GEO all start from what Nova finds.",
  signals: [
    {
      title: "Positioning Grounded in Gaps",
      description:
        "Competitive gap analysis shows where the category is crowded and where it is open, so your positioning claims territory competitors have not defended.",
    },
    {
      title: "Content Sized by Demand",
      description:
        "Every content play comes with demand evidence attached, so the team writes what buyers are already asking for instead of what feels interesting internally.",
    },
    {
      title: "GEO Starts With the Questions",
      description:
        "Knowing which questions AI engines answer in your category, and who they cite, is the first step of generative engine optimization. The research engine feeds it directly.",
    },
  ],

  faqEyebrow: "FAQ",
  faqH2Lead: "AI Market Research Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "What does AI market research include at Triple & Co.?",
      a: "Nova, our research agent, delivers a competitive gap analysis, an intent-based keyword map, and ten content plays sized by real demand, refreshed continuously rather than once a year. It also covers AI-engine visibility: which buyer questions ChatGPT and Perplexity answer in your category and who gets cited. Lihi Pinto reviews and translates findings into decisions.",
    },
    {
      q: "How is this different from a keyword research report?",
      a: "Keyword lists tell you what people type. This maps what buyers are trying to decide: the questions behind the queries, the gaps competitors have left open, and the demand size of each play. It also covers AI answer engines, which classic keyword tools do not see.",
    },
    {
      q: "How much does AI market research cost?",
      a: "It is included in every Triple & Co. leadership engagement, which run $5,000 to $15,000 per month for CMO as a Service, CRO as a Service, or Head of Growth. A single specialist agent without a leadership engagement starts at $2,500 per month.",
    },
    {
      q: "How fast do we see the first findings?",
      a: "The first competitive gap analysis and intent map are part of the diagnostic phase, delivered within the first two weeks of an engagement. From there the research function runs continuously and feeds each sprint's priorities.",
    },
  ],
  faqCloser: {
    before: "Want to see how AI engines describe your brand today? Start with the free",
    linkHref: "/ai-visibility-audit",
    linkLabel: "AI Visibility Audit",
    after: ".",
  },

  ctaH2Lead: "Stop Guessing.",
  ctaH2Highlight: "Start Knowing.",
  ctaBody:
    "One supervised research engine: competitive intel, buyer intent, and AI-engine visibility, feeding every marketing decision you make.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function AIMarketResearchPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
