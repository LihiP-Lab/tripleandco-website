import type { Metadata } from "next";
import { SolutionLanding, type LandingContent } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "B2B Marketing for the US Market, AI-Powered",
  description:
    "B2B marketing for companies selling into the US. Senior go-to-market strategy from Lihi Pinto plus 8 supervised AI agents, tuned to the American buyer.",
  alternates: { canonical: "/b2b-marketing-usa" },
  openGraph: {
    title: "B2B Marketing for the US Market, AI-Powered | Triple & Co.",
    description:
      "Win the American buyer with senior go-to-market leadership and a supervised AI execution team, at a fraction of a US in-house team.",
    url: "https://www.tripleandco.com/b2b-marketing-usa",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "B2B Marketing for the US Market",
  serviceType: "B2B tech marketing agency",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "United States" },
    "Worldwide",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "B2B tech companies selling into the United States",
  },
  description:
    "AI-powered B2B marketing for companies selling into the US market: positioning, demand, and pipeline tuned to the American buyer, led by an AI-native CMO and a supervised team of AI agents.",
  url: "https://www.tripleandco.com/b2b-marketing-usa",
};

const content: LandingContent = {
  breadcrumbLabel: "B2B Marketing for the US Market",
  canonical: "/b2b-marketing-usa",

  heroEyebrow: "B2B Marketing for the US Market",
  h1Lead: "Win the US Market Without Building a US",
  h1Highlight: "Marketing Team",
  heroLede:
    "The US is the biggest B2B market in the world and the most competitive. American buyers expect a polished, confident, category-aware story, and they notice immediately when a vendor does not have one.",
  heroBody:
    "Triple & Co. gives you senior go-to-market leadership from Lihi Pinto plus 8 supervised AI agents that produce US-tuned positioning, content, and demand every day. You get the marketing sophistication the American buyer expects, at a fraction of the cost of a US in-house team.",
  heroStats:
    "Playbooks tuned to the US buyer \u00b7 $70M+ raised \u00b7 One partner, not a US department",
  heroImageAlt: "Lihi Pinto, B2B marketing leader for the US market",

  problemEyebrow: "The problem",
  problemH2Lead: "The US Market Rewards Confident Marketing and Punishes",
  problemH2Highlight: "Anything Less",
  problemParas: [
    "American B2B buyers are sophisticated and spoiled for choice. They expect clear positioning, strong proof, and a confident point of view. A vendor whose marketing feels tentative, generic, or off-key gets filtered out before a conversation ever happens.",
    "Building the team to meet that bar in the US is expensive. A US CMO plus a marketing department runs well over half a million dollars a year fully loaded, and it takes months to assemble. For companies entering or expanding in the US, that is a heavy bet placed before you have proven the motion.",
    "The workarounds rarely clear the bar. Offshore teams miss the cultural nuance, freelancers deliver fragments, and a single junior hire cannot own a go-to-market strategy for the world's most competitive market.",
  ],
  problemCallout:
    "Winning the US does not require a full US team on payroll. It requires senior ownership and a full execution layer tuned to the American buyer.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "US-Grade Marketing,",
  modelH2Highlight: "Without US Overhead",
  modelIntro:
    "Triple & Co. runs on our Woman in the Loop (WIL) model: senior human judgment directing a supervised AI execution layer, delivering the sophistication the US buyer expects at a fraction of the cost.",
  pillars: [
    {
      title: "Lihi Pinto Owns Go-To-Market",
      description:
        "15+ years scaling B2B tech with go-to-market playbooks tuned to the American buyer, $70M+ raised. Lihi owns positioning, messaging, and pipeline strategy, so your US story is confident, clear, and built to compete.",
    },
    {
      title: "A Digital COO Runs the Operation",
      description:
        "Briefs, QA, and handoffs run automatically inside one system, so US-ready work ships consistently without the overhead of managing a full American marketing department.",
    },
    {
      title: "8 Specialized AI Agents Execute Daily",
      description:
        "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen produce native English content, campaigns, research, and creative tuned to US market expectations, reviewed by Lihi before anything ships.",
    },
  ],

  comparisonHeading: "How Teams Usually Enter the US Market",
  comparisonColHeaders: ["US in-house team", "Offshore team", "Triple & Co. (WIL)"],
  comparisonRows: [
    {
      label: "US buyer fluency",
      left: "Yes",
      middle: "Often misses nuance",
      right: "Yes, tuned to the US buyer",
    },
    {
      label: "Senior ownership",
      left: "Expensive to hire",
      middle: "Rare",
      right: "Included",
    },
    {
      label: "Full execution layer",
      left: "Full department",
      middle: "Fragmented",
      right: "Included",
    },
    {
      label: "Time to first output",
      left: "Months to hire",
      middle: "Weeks",
      right: "Days",
    },
    {
      label: "Annual cost",
      left: "$500K+ fully loaded",
      middle: "Cheap but inconsistent",
      right: "One executive-level retainer",
    },
  ],
  comparisonNote:
    "You get the sophistication the American buyer expects and the output of a full team, without carrying a full US department on payroll.",

  signalsEyebrow: "Built for the US buyer",
  signalsH2Lead: "The American Standard,",
  signalsH2Highlight: "Delivered Efficiently",
  signalsIntro:
    "Winning the US market is about meeting a high bar consistently. Our model is built to deliver US-grade marketing at speed and at a cost that makes market entry a smart bet.",
  signals: [
    {
      title: "Positioning Tuned to the US Buyer",
      description:
        "We build a confident, category-aware story that meets American buyer expectations, so you are taken seriously from the first impression rather than filtered out.",
    },
    {
      title: "A Demand Engine, Not One-Off Campaigns",
      description:
        "Content, SEO, GEO, and campaigns run as one connected system feeding US pipeline, so growth compounds instead of resetting every quarter.",
    },
    {
      title: "Efficient Market Entry",
      description:
        "You prove the US motion with senior ownership and a full execution layer before committing to a full American team, so the bet is smart and reversible.",
    },
  ],
  signalsFootnote: "As covered in TechCrunch \u00b7 Calcalist \u00b7 Globes",

  faqEyebrow: "FAQ",
  faqH2Lead: "US B2B Marketing Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "Can you market to US buyers even though you are not a US agency?",
      a: "Yes. Our go-to-market playbooks are tuned specifically to the American buyer, and all content is produced and reviewed to native English standard. Many of our clients sell primarily into the US, and our operating model overlaps US business hours, so you get US-grade marketing without the cost of a US in-house team.",
    },
    {
      q: "How does the cost compare to building a US marketing team?",
      a: "A US CMO plus a marketing department typically runs well over $500K a year fully loaded, and takes months to assemble. Triple & Co. prices at the level of a single senior executive, with the execution layer included, so you replace both the leadership line and most of the team budget while entering the market faster.",
    },
    {
      q: "We are expanding into the US. Can you help us enter the market?",
      a: "Yes. For US market entry we focus on nailing positioning for the American buyer, building the first repeatable demand motion, and giving you clean pipeline reporting, so you can prove the motion before making a large, permanent investment in a US team. It is designed to make market entry a smart, reversible bet.",
    },
    {
      q: "Do you help us get found by US buyers using AI search?",
      a: "Yes. American buyers increasingly ask AI engines like ChatGPT, Perplexity, and Gemini who to shortlist. Our Generative Engine Optimization work makes your brand and content citable in those answers, so you show up at the moment US buyers begin their research. See our GEO page for details.",
    },
  ],
  faqCloser: {
    before: "Want to get cited by AI engines when US buyers research your category? See our",
    linkHref: "/geo",
    linkLabel: "GEO for B2B",
    after: "page.",
  },

  ctaH2Lead: "Win the US Market on Your",
  ctaH2Highlight: "Terms",
  ctaBody:
    "One senior operator who knows the American buyer. One supervised AI team. US-grade marketing without US overhead.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function B2BMarketingUSAPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
