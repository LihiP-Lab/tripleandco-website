import type { Metadata } from "next";
import {
  SolutionLanding,
  type LandingContent,
} from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "Fractional CMO vs Agency vs Full-Time Hire: How to Choose",
  description:
    "Fractional CMO vs marketing agency vs full-time hire for B2B SaaS. Compare cost, ownership, speed, and risk, and see which marketing leadership model fits your stage.",
  alternates: { canonical: "/fractional-cmo-vs-agency-vs-hire" },
  openGraph: {
    title:
      "Fractional CMO vs Agency vs Full-Time Hire | Triple & Co.",
    description:
      "A side-by-side comparison of the three ways to get senior B2B marketing leadership, with a clear rule for when each one fits.",
    url: "https://www.tripleandco.com/fractional-cmo-vs-agency-vs-hire",
  },
};

const content: LandingContent = {
  breadcrumbLabel: "Fractional CMO vs Agency vs Hire",
  canonical: "/fractional-cmo-vs-agency-vs-hire",

  heroEyebrow: "Compare your options",
  h1Lead: "Fractional CMO vs Agency vs Full-Time Hire:",
  h1Highlight: "Which One Fits Your Stage?",
  heroLede:
    "Three ways to get senior B2B marketing leadership: hire a full-time CMO, retain an agency, or bring in a fractional CMO. They differ most on who owns the outcome and how fast you see work.",
  heroBody:
    "A full-time hire gives you ownership but costs $300K+ and takes months to find. An agency gives you hands but rents you strategy by the project. A fractional CMO gives you senior ownership plus execution, without the salary or the search. Here is the honest breakdown.",
  heroStats:
    "15+ years in B2B SaaS \u00b7 $70M+ raised at companies Lihi led \u00b7 One accountable owner",
  heroImageAlt:
    "Lihi Pinto, fractional CMO for B2B SaaS companies",

  problemEyebrow: "The real question",
  problemH2Lead: "It Is Not About Cost. It Is About Who Owns the",
  problemH2Highlight: "Number.",
  problemParas: [
    "Most founders frame this as a budget decision: what can we afford this quarter. That is the wrong frame. The real question is who is accountable for the marketing outcome when the board asks, and whether that person also has the capacity to ship the work.",
    "A full-time CMO owns the number but is expensive, slow to hire, and a large bet at seed to Series B. A big agency ships volume but owns nothing: strategy resets every renewal and the senior name on the pitch rarely touches your account. A freelancer is affordable but is one pair of hands, not a leader.",
    "A fractional CMO closes that gap: a senior operator who owns the strategy and the number, with a supervised execution layer doing the work underneath. You get accountability and output without the full-time cost or the multi-month search.",
  ],
  problemCallout:
    "Pick the model by the problem you actually have: missing ownership, missing execution, or both.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Senior Ownership Plus Execution,",
  modelH2Highlight: "In One Engagement.",
  modelIntro:
    "Triple & Co. runs on our Woman in the Loop (WIL) model: Lihi Pinto owns the strategy and the number, and a supervised team of 8 AI agents executes the work daily. It is the ownership of a hire with the output of an agency, minus the downsides of each.",
  pillars: [
    {
      title: "The Ownership of a Hire",
      description:
        "Lihi owns positioning, the plan, the metrics, and the board narrative. One accountable executive, not a rotating account manager and not a strategy that resets every renewal.",
    },
    {
      title: "The Output of an Agency",
      description:
        "Camille, Rex, Nova, Zara, Atlas, Vega, Sage, and Lumen cover content, campaigns, research, social, analytics, and video, shipping every week. Capacity that scales without new headcount.",
    },
    {
      title: "Without the Downsides of Either",
      description:
        "No $300K salary, no multi-month executive search, no junior team learning on your budget. Senior judgment on every deliverable, because nothing ships without Lihi's review.",
    },
  ],

  comparisonHeading: "Fractional CMO vs Agency vs Full-Time Hire",
  comparisonColHeaders: [
    "Marketing agency",
    "Full-time CMO hire",
    "Fractional CMO (Triple & Co.)",
  ],
  comparisonRows: [
    {
      label: "Who owns the number",
      left: "Nobody, work is scoped per project",
      middle: "One executive owns it",
      right: "One senior operator owns it",
    },
    {
      label: "Seniority on your account",
      left: "Pitch is senior, work is junior",
      middle: "Senior, full-time",
      right: "Senior, hands on the strategy",
    },
    {
      label: "Time to start",
      left: "Weeks",
      middle: "3 to 6 months to hire",
      right: "Days",
    },
    {
      label: "Cost",
      left: "Retainer, often for hours",
      middle: "$300K+ fully loaded",
      right: "A fraction of a full-time hire",
    },
    {
      label: "Execution capacity",
      left: "High, but rented",
      middle: "Limited to one person",
      right: "A supervised AI team, daily",
    },
    {
      label: "Strategy continuity",
      left: "Resets each renewal",
      middle: "Owned in-house",
      right: "Owned, and it compounds",
    },
  ],
  comparisonNote:
    "Choose the model that closes your actual gap, not the one with the smallest invoice.",

  signalsEyebrow: "How to choose",
  signalsH2Lead: "A Simple Rule for",
  signalsH2Highlight: "Each Option.",
  signalsIntro:
    "There is a right answer for each situation. Here is the honest version, including when we are not the fit.",
  signals: [
    {
      title: "Choose a full-time hire when",
      description:
        "You are at scale, marketing is core to the moat, and you can justify a $300K+ executive who builds and manages a large in-house team for years. If you can fill the seat well, do it.",
    },
    {
      title: "Choose an agency when",
      description:
        "You already have an internal owner of the strategy and simply need extra hands for a defined channel or campaign. Agencies are great execution partners under someone who owns direction.",
    },
    {
      title: "Choose a fractional CMO when",
      description:
        "You need senior ownership and execution now, cannot yet justify a full-time exec, and want the strategy and the work under one accountable person. This is where Triple & Co. fits.",
    },
  ],

  faqEyebrow: "FAQ",
  faqH2Lead: "Fractional CMO vs Agency vs Hire,",
  faqH2Highlight: "Answered.",
  faqs: [
    {
      q: "Is a fractional CMO cheaper than a full-time CMO?",
      a: "Yes. A full-time CMO in B2B SaaS is typically a $300K+ fully loaded commitment once you add salary, equity, benefits, and ramp time. A fractional CMO gives you senior ownership for a fraction of that, because you pay for the leadership and the execution you need, not a full-time seat. The bigger saving is speed: you skip a three to six month executive search and start in days.",
    },
    {
      q: "How is a fractional CMO different from a marketing agency?",
      a: "An agency is an execution vendor: you tell it what to do, it does the work, and strategy usually resets each renewal. A fractional CMO is an owner: they set the strategy, own the number, and are accountable to your board. At Triple & Co. you get both in one engagement, because Lihi owns the strategy and a supervised AI team does the execution an agency would normally handle.",
    },
    {
      q: "When is a full-time CMO the right call instead?",
      a: "When you are at a scale where marketing is central to the moat, you need a leader building and managing a large in-house team full-time for years, and you can confidently fill the seat with a strong operator. If that is you, hire. A fractional model is the better fit when you need senior ownership and execution before a full-time hire is justified or findable.",
    },
    {
      q: "Can a fractional CMO really own the outcome part-time?",
      a: "Ownership is about accountability and judgment, not hours logged. Lihi owns the strategy, the metrics, and the board narrative, and reviews every deliverable. The volume of execution that would normally require a full team is handled by 8 supervised AI agents running daily, so the output is full-time even though the leadership is fractional.",
    },
  ],
  faqCloser: {
    before: "Want the version that owns the full revenue funnel, not just marketing? See",
    linkHref: "/cro-as-a-service",
    linkLabel: "CRO as a Service",
    after: "instead.",
  },

  ctaH2Lead: "Not Sure Which Model",
  ctaH2Highlight: "You Need?",
  ctaBody:
    "Book a 30-minute diagnostic. We will tell you honestly whether a fractional CMO, an agency, or a full-time hire is the right next move, even if it is not us.",
  ctaNote: "No pitch deck. A straight recommendation based on your stage.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fractional CMO as a Service",
  serviceType: "Fractional Chief Marketing Officer",
  provider: {
    "@type": "Organization",
    name: "Triple & Co.",
    url: "https://www.tripleandco.com",
  },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B SaaS companies",
  },
  description:
    "Senior fractional CMO leadership for B2B SaaS: one accountable owner of marketing strategy and the number, with execution delivered by a supervised AI team. An alternative to a full-time CMO hire or a marketing agency.",
  url: "https://www.tripleandco.com/fractional-cmo-vs-agency-vs-hire",
};

export default function FractionalCmoVsAgencyVsHirePage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
