import type { Metadata } from "next";
import {
  SolutionLanding,
  type LandingContent,
} from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "AI Marketing Team vs Traditional Agency: What B2B Should Know",
  description:
    "AI marketing team vs traditional agency for B2B SaaS. Compare speed, cost, quality control, and accountability, and see why a supervised AI team beats both an agency and a pure AI tool.",
  alternates: { canonical: "/ai-marketing-team-vs-agency" },
  openGraph: {
    title: "AI Marketing Team vs Traditional Agency | Triple & Co.",
    description:
      "How a supervised AI marketing team compares to a traditional agency and to unsupervised AI tools, on speed, cost, and quality.",
    url: "https://www.tripleandco.com/ai-marketing-team-vs-agency",
  },
};

const content: LandingContent = {
  breadcrumbLabel: "AI Marketing Team vs Agency",
  canonical: "/ai-marketing-team-vs-agency",

  heroEyebrow: "Compare your options",
  h1Lead: "AI Marketing Team vs Traditional Agency:",
  h1Highlight: "Which Actually Ships?",
  heroLede:
    "B2B teams now have three ways to get marketing done: retain a traditional agency, buy AI tools and run them yourself, or hire a supervised AI marketing team. They differ on speed, cost, and who is accountable for quality.",
  heroBody:
    "An agency is expensive and slow but human-led. Raw AI tools are fast and cheap but unsupervised, so quality and brand safety are on you. A supervised AI team is the third path: agent speed and cost with a senior human owning judgment and sign-off. Here is the comparison.",
  heroStats:
    "8 specialist AI agents \u00b7 100% human-reviewed \u00b7 Supervised by Lihi Pinto",
  heroImageAlt:
    "Lihi Pinto, who supervises the Triple & Co. AI marketing team",

  problemEyebrow: "The real trade-off",
  problemH2Lead: "Speed and Cost Are Easy. The Hard Part Is",
  problemH2Highlight: "Judgment.",
  problemParas: [
    "AI made execution nearly free and instant. Anyone can generate a hundred posts before lunch. That is exactly why volume is no longer the constraint, and why the market is filling with fast, generic, off-brand content that erodes trust instead of building it.",
    "A traditional agency solves for judgment with senior humans, but slowly and expensively, and often the senior name that pitched you never touches the work. Raw AI tools solve for speed and cost, but hand you the judgment problem: you become the editor, the strategist, and the brand police.",
    "The model that wins is neither. It is a supervised AI team: agents produce the volume at machine speed and cost, and a senior operator owns strategy and reviews every output before it ships. Speed and cost of AI, judgment and accountability of a human leader.",
  ],
  problemCallout:
    "The question is no longer human or AI. It is whether the AI is supervised by someone accountable.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "A Supervised AI Team,",
  modelH2Highlight: "Not a Tool and Not an Agency.",
  modelIntro:
    "Triple & Co. runs on our Woman in the Loop (WIL) model: 8 specialist AI agents do the execution, and Lihi Pinto owns the strategy and reviews everything. You get the economics of AI with the accountability of a senior human.",
  pillars: [
    {
      title: "Agent Speed and Cost",
      description:
        "Camille, Rex, Nova, Zara, Atlas, Vega, Sage, and Lumen run content, campaigns, research, social, analytics, and video around the clock. Output scales without new headcount or agency retainers.",
    },
    {
      title: "Human Judgment on Every Output",
      description:
        "Lihi owns positioning, strategy, and the number, and nothing leaves the command center without her review. The brand voice, the claims, and the strategy stay accountable to one senior operator.",
    },
    {
      title: "One System, Not a Stack",
      description:
        "A digital COO sequences briefs, QA, and handoffs so the agents work as one team against one plan, instead of you stitching together a pile of disconnected AI tools yourself.",
    },
  ],

  comparisonHeading: "AI Marketing Team vs Agency vs Raw AI Tools",
  comparisonColHeaders: [
    "Traditional agency",
    "Raw AI tools (DIY)",
    "Supervised AI team (Triple & Co.)",
  ],
  comparisonRows: [
    {
      label: "Speed to output",
      left: "Slow, tied to human hours",
      middle: "Instant",
      right: "Instant, then reviewed",
    },
    {
      label: "Cost",
      left: "High retainers",
      middle: "Low, plus your time",
      right: "A fraction of an agency",
    },
    {
      label: "Quality control",
      left: "Human, but variable",
      middle: "On you to edit",
      right: "Senior human sign-off",
    },
    {
      label: "Strategy ownership",
      left: "Rented per project",
      middle: "Yours to figure out",
      right: "Owned by Lihi",
    },
    {
      label: "Brand and claim safety",
      left: "Usually careful",
      middle: "Your risk entirely",
      right: "Reviewed before shipping",
    },
    {
      label: "Scales without headcount",
      left: "No, needs more people",
      middle: "Yes, but unsupervised",
      right: "Yes, and supervised",
    },
  ],
  comparisonNote:
    "The winning setup is not the cheapest or the fastest. It is fast and cheap with an accountable owner.",

  signalsEyebrow: "How to choose",
  signalsH2Lead: "A Simple Rule for",
  signalsH2Highlight: "Each Option.",
  signalsIntro:
    "Each model has a right use case. Here is the honest version, including when a supervised team is overkill.",
  signals: [
    {
      title: "Use raw AI tools when",
      description:
        "You have a senior marketer in-house with time to strategize, brief, edit, and own brand safety. If you already have the judgment layer, tools alone can be enough.",
    },
    {
      title: "Use a traditional agency when",
      description:
        "You need a specific human craft or channel expertise, budget is not the constraint, and speed and scale are less important than a particular hands-on specialist relationship.",
    },
    {
      title: "Use a supervised AI team when",
      description:
        "You want agency-grade output and senior ownership at AI speed and cost, without becoming the editor yourself. This is where Triple & Co. fits.",
    },
  ],

  faqEyebrow: "FAQ",
  faqH2Lead: "AI Marketing Team vs Agency,",
  faqH2Highlight: "Answered.",
  faqs: [
    {
      q: "Is an AI marketing team better than a traditional agency?",
      a: "For most B2B SaaS teams, a supervised AI marketing team delivers comparable or better output faster and at a fraction of an agency retainer, because agents handle the volume and a senior human owns judgment. A traditional agency can still be the right call when you need a specific human craft or channel specialist and budget is not the constraint. The key difference is that a supervised AI team pairs AI speed with accountable human sign-off.",
    },
    {
      q: "How is this different from just using ChatGPT or AI tools ourselves?",
      a: "Raw AI tools give you speed and low cost but hand you the hard part: strategy, briefing, editing, and brand safety. You become the bottleneck and the quality control. Triple & Co. runs 8 specialist agents as one coordinated team under Lihi Pinto, who owns the strategy and reviews every output, so you get the economics of AI without personally becoming the editor and strategist.",
    },
    {
      q: "Is AI-generated marketing safe for a B2B brand?",
      a: "Unsupervised AI is a real brand risk: generic copy, wrong claims, and off-strategy content that erodes trust. Supervised AI is different. In our Woman in the Loop model, nothing ships without human review, so the speed of AI never comes at the cost of brand voice, accuracy, or strategy. Supervision is the whole point.",
    },
    {
      q: "Do I still get a human to talk to?",
      a: "Yes. Lihi Pinto owns your strategy and is accountable for the outcome, the same as a senior marketing leader would be. The AI agents expand execution capacity behind her, they do not replace the human relationship or the human judgment.",
    },
  ],
  faqCloser: {
    before: "Want to meet the agents doing the work? See",
    linkHref: "/agents",
    linkLabel: "the AI marketing agents",
    after: "and how Lihi supervises them.",
  },

  ctaH2Lead: "Get Agency Output",
  ctaH2Highlight: "at AI Speed.",
  ctaBody:
    "Book a 30-minute diagnostic. See how a supervised AI team would run your marketing, with a senior human owning every call.",
  ctaNote: "Nothing ships without human review. That is the whole model.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Supervised AI Marketing Team",
  serviceType: "AI-powered marketing execution with human supervision",
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
    "A supervised AI marketing team for B2B SaaS: 8 specialist AI agents execute content, campaigns, and analytics at machine speed, with a senior human owning strategy and reviewing every output. An alternative to a traditional agency or unsupervised AI tools.",
  url: "https://www.tripleandco.com/ai-marketing-team-vs-agency",
};

export default function AiMarketingTeamVsAgencyPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
