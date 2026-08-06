import type { Metadata } from "next";
import { SolutionLanding, type LandingContent } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "B2B SaaS Marketing, AI-Powered",
  description:
    "B2B SaaS marketing that ships: positioning, demand, and pipeline run by an AI-native CMO plus 8 supervised agents. Strategy and execution in one engagement.",
  alternates: { canonical: "/b2b-saas-marketing" },
  openGraph: {
    title: "B2B SaaS Marketing, AI-Powered | Triple & Co.",
    description:
      "Positioning, demand generation, and pipeline for B2B SaaS, led by Lihi Pinto and executed daily by a supervised AI team.",
    url: "https://www.tripleandco.com/b2b-saas-marketing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "B2B SaaS Marketing",
  serviceType: "B2B SaaS marketing and demand generation",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B SaaS companies",
  },
  description:
    "Full-funnel B2B SaaS marketing: positioning, demand generation, content, and pipeline, led by an AI-native CMO and executed by a supervised team of AI agents.",
  url: "https://www.tripleandco.com/b2b-saas-marketing",
};

const content: LandingContent = {
  breadcrumbLabel: "B2B SaaS Marketing",
  canonical: "/b2b-saas-marketing",

  heroEyebrow: "Marketing for B2B SaaS",
  h1Lead: "B2B SaaS Marketing That Ships Pipeline, Not",
  h1Highlight: "Just Decks",
  heroLede:
    "Your product moves fast. Your marketing should move faster. Most SaaS teams get strategy from one vendor and execution from five more.",
  heroBody:
    "Triple & Co. gives you a senior B2B SaaS marketing leader plus 8 supervised AI agents that run positioning, demand, content, and reporting every day. One engagement covers the CMO and the team that would sit under one, so you go from plan to shipped work in days, not quarters.",
  heroStats:
    "15+ years in B2B SaaS \u00b7 $70M+ raised at companies Lihi led \u00b7 One partner, not five vendors",
  heroImageAlt: "Lihi Pinto, B2B SaaS marketing leader",

  problemEyebrow: "The problem",
  problemH2Lead: "SaaS Growth Stalls in the Gap Between Strategy and",
  problemH2Highlight: "Shipped Work",
  problemParas: [
    "Most B2B SaaS companies do not have a strategy problem. They have an execution problem. The positioning is roughly right, the ICP is known, and the roadmap is full. What is missing is a team that turns all of that into consistent, high-quality output every week.",
    "So founders stitch it together: a fractional advisor for strategy, a freelance writer for content, an agency for ads, a contractor for SEO, and themselves as the general contractor holding it together. The result is a fragmented stack, inconsistent messaging, and growth that depends on how much time the founder can spare this week.",
    "Meanwhile the market moves. Competitors ship faster, buyers ask AI engines who to shortlist, and the window to own a category narrows every month.",
  ],
  problemCallout:
    "You do not need more tools or more vendors. You need one owner of the number and a team that executes against it daily.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "One Marketing Leader.",
  modelH2Highlight: "One Supervised AI Team.",
  modelIntro:
    "Triple & Co. runs on our Woman in the Loop (WIL) model: senior human judgment directing a supervised AI execution layer built for SaaS speed.",
  pillars: [
    {
      title: "Lihi Pinto Owns Your Growth",
      description:
        "15+ years scaling B2B SaaS, $70M+ raised at companies she led. Positioning, pricing narrative, pipeline architecture, and board reporting sit with one accountable executive who has done it before.",
    },
    {
      title: "A Digital COO Runs the Operation",
      description:
        "Briefs, QA, sequencing, and handoffs between agents run automatically inside one system, so your strategy becomes shipped work the moment it is set, without waiting on a status meeting.",
    },
    {
      title: "8 Specialized AI Agents Execute Daily",
      description:
        "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen cover brand voice, content, campaigns, social, research, analytics, repurposing, and video. Every output is reviewed by Lihi before it ships.",
    },
  ],

  comparisonHeading: "How SaaS Teams Usually Buy This",
  comparisonColHeaders: ["In-house team", "Agency plus freelancers", "Triple & Co. (WIL)"],
  comparisonRows: [
    {
      label: "Senior strategy",
      left: "One hire, if you can afford it",
      middle: "Advisory only",
      right: "Included",
    },
    {
      label: "Daily execution",
      left: "Depends on headcount",
      middle: "Split across vendors",
      right: "Included",
    },
    {
      label: "Message consistency",
      left: "Varies by person",
      middle: "Fragmented",
      right: "One source of truth",
    },
    {
      label: "Time to first output",
      left: "Months to hire",
      middle: "Weeks to onboard",
      right: "Days",
    },
    {
      label: "Annual cost",
      left: "$400K+ fully loaded",
      middle: "Retainers that stack up",
      right: "One executive-level retainer",
    },
  ],
  comparisonNote:
    "You get the judgment of a CMO who has scaled SaaS before, and the output of a full marketing department, without building one.",

  signalsEyebrow: "Built for SaaS",
  signalsH2Lead: "Speed, Positioning, and Pipeline Math,",
  signalsH2Highlight: "In One Team",
  signalsIntro:
    "SaaS marketing rewards clarity and cadence. Our operating model is built to deliver both from week one, whether you sell to developers, operators, or the enterprise.",
  signals: [
    {
      title: "Positioning That Sells the Category",
      description:
        "We sharpen how you show up against alternatives, so buyers understand why you exist before they compare features. Clear positioning is the highest-leverage lever in SaaS.",
    },
    {
      title: "A Demand Engine, Not One-Off Campaigns",
      description:
        "Content, SEO, GEO, and campaigns run as one connected system feeding pipeline, so growth compounds instead of resetting every quarter.",
    },
    {
      title: "Board-Ready Pipeline Reporting",
      description:
        "Atlas runs the dashboards and funnel math your board and investors expect, so you always know what is working and where the next dollar should go.",
    },
  ],
  signalsFootnote: "As covered in TechCrunch \u00b7 Calcalist \u00b7 Globes",

  faqEyebrow: "FAQ",
  faqH2Lead: "B2B SaaS Marketing Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "What does B2B SaaS marketing with Triple & Co. actually include?",
      a: "One engagement covers both leadership and execution. Lihi Pinto owns strategy: positioning, messaging, pricing narrative, demand strategy, and pipeline reporting. The supervised AI agent team executes the daily work: content, SEO and GEO, campaigns, social, creative, and analytics. You get a CMO and the department underneath one, for the price of a single senior executive.",
    },
    {
      q: "How is this different from hiring a marketing agency?",
      a: "Agencies execute against a brief you or someone else has to write, and they rarely own your revenue number. Triple & Co. owns the strategy and the execution together, so there is no gap between the plan and the work. Messaging stays consistent because it all runs through one system supervised by one accountable leader, instead of being split across a writer, an ads shop, and an SEO contractor.",
    },
    {
      q: "How fast will we see output?",
      a: "The first two weeks are diagnostic: positioning audit, funnel analysis, and pipeline math. By week three you have a prioritized plan and the agent team is already shipping the first sprint. Most SaaS clients see live content, campaigns, and reporting inside the first month, not a deck waiting on headcount.",
    },
    {
      q: "Do you work with early-stage and growth-stage SaaS?",
      a: "Yes. For early-stage SaaS we focus on nailing positioning and building the first repeatable demand motion. For growth-stage SaaS we focus on scaling pipeline, tightening funnel conversion, and giving the board a clean view of what marketing is driving. Book a Revenue Diagnostic and we will scope it to your stage.",
    },
  ],
  faqCloser: {
    before: "Want a single leader who owns the entire revenue number? See our",
    linkHref: "/cro-as-a-service",
    linkLabel: "CRO as a Service",
    after: "model.",
  },

  ctaH2Lead: "Stop Managing Vendors.",
  ctaH2Highlight: "Start Shipping Pipeline.",
  ctaBody:
    "One senior operator. One supervised AI team. One growth number for your B2B SaaS company.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function B2BSaaSMarketingPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
