import type { Metadata } from "next";
import {
  SolutionLanding,
  type LandingContent,
} from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "AI Marketing Analytics & Attribution, Supervised",
  description:
    "AI marketing analytics for B2B: full-funnel attribution, leadership-ready dashboards, and budget reallocation with ROI projections, run by a supervised AI agent. Included in engagements from $5,000/month.",
  alternates: { canonical: "/ai-analytics-attribution" },
  openGraph: {
    title: "AI Marketing Analytics & Attribution | Triple & Co.",
    description:
      "Full-funnel attribution and board-ready reporting run continuously by a supervised AI agent, reviewed by a senior marketer.",
    url: "https://www.tripleandco.com/ai-analytics-attribution",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Marketing Analytics & Attribution",
  serviceType: "AI-powered B2B marketing analytics, supervised",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B technology companies",
  },
  description:
    "Supervised AI marketing analytics for B2B: Atlas unifies marketing and sales data, runs full-funnel attribution, builds leadership-ready dashboards, and delivers budget reallocation plans with ROI projections.",
  url: "https://www.tripleandco.com/ai-analytics-attribution",
};

const content: LandingContent = {
  breadcrumbLabel: "AI Analytics & Attribution",
  canonical: "/ai-analytics-attribution",

  heroEyebrow: "AI analytics and attribution, supervised",
  h1Lead: "Know Where Every Marketing Dollar",
  h1Highlight: "Actually Works",
  heroLede:
    "Most B2B teams have dashboards. Almost none have answers: which channel drives pipeline, what CAC really is, and where the next dollar should go.",
  heroBody:
    "Triple & Co. runs analytics as a function: Atlas unifies your marketing and sales data, builds full-funnel attribution, and delivers the dashboard your leadership actually reads, plus a budget reallocation plan with ROI projections. Lihi Pinto reads the same numbers and acts on them inside the same engagement.",
  heroStats:
    "Full-funnel attribution \u00b7 Board-ready reporting \u00b7 Included in engagements from $5,000/month",
  heroImageAlt: "Lihi Pinto, supervising AI marketing analytics",

  problemEyebrow: "The problem",
  problemH2Lead: "Data Everywhere.",
  problemH2Highlight: "Answers Nowhere.",
  problemParas: [
    "The typical B2B stack has the data: HubSpot or Salesforce, GA4, LinkedIn Ads, product analytics. What it does not have is one coherent view. Marketing reports MQLs, sales reports pipeline, and finance reports spend, and the three never reconcile. Board meetings run on screenshots and vibes.",
    "Attribution is where it breaks worst. Long B2B cycles with six touchpoints across four channels defeat last-click logic entirely, so the channels that start deals get starved while the channels that close them get credit. Budget follows the wrong signal for quarters at a time.",
    "Hiring your way out is expensive: a marketing ops analyst is a full salary, an analytics consultancy is a project that ends, and both still need someone senior to decide what the numbers mean.",
  ],
  problemCallout:
    "The question is never 'do we have the data'. It is 'who owns the answer, and what changes because of it'.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Atlas Runs the Numbers.",
  modelH2Highlight: "Lihi Moves the Budget.",
  modelIntro:
    "The analytics engine pairs a specialist agent with a senior operator who is accountable for the same pipeline number the dashboard reports.",
  pillars: [
    {
      title: "Atlas Unifies the Data",
      description:
        "Atlas connects your marketing and sales data into one view, tells you where budget is actually working, and builds the dashboards your leadership needs: full-funnel attribution, a performance dashboard, and a budget reallocation plan with ROI projections.",
    },
    {
      title: "Attribution Built for B2B Cycles",
      description:
        "Multi-touch, full-funnel attribution built for long cycles and multiple stakeholders, so the channels that open deals and the channels that close them both get honest credit.",
    },
    {
      title: "The Analyst and the Decision-Maker Are One Team",
      description:
        "Lihi Pinto reads the same dashboard, owns the pipeline number, and reallocates spend inside the same engagement, so insight becomes action in the same week instead of the next planning cycle.",
    },
  ],

  comparisonHeading: "How B2B Teams Usually Buy Analytics",
  comparisonColHeaders: [
    "Ops hire",
    "Analytics consultancy",
    "Triple & Co. engine",
  ],
  comparisonRows: [
    {
      label: "Full-funnel attribution",
      left: "If they have time",
      middle: "One-time build",
      right: "Built and maintained",
    },
    {
      label: "Leadership reporting",
      left: "Depends on the hire",
      middle: "Handed off at project end",
      right: "Board-ready, continuous",
    },
    {
      label: "From insight to action",
      left: "Escalated up",
      middle: "Not their job",
      right: "Same team owns the number",
    },
    {
      label: "Cost",
      left: "Full salary plus tools",
      middle: "Five-figure project",
      right: "Included in one engagement",
    },
    {
      label: "Maintenance",
      left: "Single point of failure",
      middle: "Decays after handoff",
      right: "Runs continuously",
    },
  ],
  comparisonNote:
    "You get the analytics function and the executive who acts on it, in one engagement instead of a hire plus a consultancy.",

  signalsEyebrow: "Built for B2B",
  signalsH2Lead: "Numbers Your Board",
  signalsH2Highlight: "Actually Trusts",
  signalsIntro:
    "The engine is built for how B2B revenue actually gets measured: pipeline, CAC payback, and funnel conversion, reported the way investors expect.",
  signals: [
    {
      title: "One Source of Truth",
      description:
        "Marketing, sales, and spend reconcile in one view, so the Monday pipeline number and the board deck number are the same number.",
    },
    {
      title: "CAC and Payback, Honestly Computed",
      description:
        "Fully loaded CAC by channel and segment, with payback periods, so pricing and budget conversations run on real unit economics.",
    },
    {
      title: "Reallocation, Not Just Reporting",
      description:
        "Every quarter ends with a concrete budget reallocation plan and projected ROI, because a dashboard that does not move money is furniture.",
    },
  ],

  faqEyebrow: "FAQ",
  faqH2Lead: "AI Analytics Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "What does AI marketing analytics include at Triple & Co.?",
      a: "Atlas, our analytics agent, unifies your marketing and sales data, builds full-funnel multi-touch attribution, delivers a leadership-ready performance dashboard, and produces budget reallocation plans with ROI projections. Lihi Pinto reviews the outputs and acts on them as part of the same engagement.",
    },
    {
      q: "Does this replace our existing analytics tools?",
      a: "No. It runs on top of what you have: your CRM, GA4, ad platforms, and product analytics. The value is unification and interpretation, one coherent view and someone accountable for what it says, not another tool in the stack.",
    },
    {
      q: "How much does AI analytics and attribution cost?",
      a: "It is included in every Triple & Co. leadership engagement, which run $5,000 to $15,000 per month for CMO as a Service, CRO as a Service, or Head of Growth. A single specialist agent without a leadership engagement starts at $2,500 per month.",
    },
    {
      q: "How fast until we have a working dashboard?",
      a: "The funnel math review happens in the diagnostic phase, in the first two weeks. A unified dashboard with attribution typically ships within the first month, depending on data access, and improves as the engagement runs.",
    },
  ],
  faqCloser: {
    before: "Want one leader accountable for the whole revenue number? See",
    linkHref: "/cro-as-a-service",
    linkLabel: "CRO as a Service",
    after: ".",
  },

  ctaH2Lead: "Stop Reporting.",
  ctaH2Highlight: "Start Reallocating.",
  ctaBody:
    "One supervised analytics engine: attribution, board-ready dashboards, and budget moves, owned by the same team that owns your pipeline.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function AIAnalyticsAttributionPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
