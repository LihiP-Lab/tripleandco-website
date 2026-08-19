import type { Metadata } from "next";
import { SolutionLanding, type LandingContent } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "CMO as a Service in Israel for B2B Tech",
  description:
    "CMO as a Service in Israel for B2B tech companies scaling globally. Senior leadership from Lihi Pinto plus 8 supervised AI agents, strategy to pipeline.",
  alternates: {
    canonical: "/cmo-as-a-service-israel",
  },
  openGraph: {
    title: "CMO as a Service in Israel for B2B Tech | Triple & Co.",
    description:
      "Senior CMO leadership for Israeli B2B tech companies scaling into the US and Europe, plus a supervised team of 8 AI agents.",
    url: "https://www.tripleandco.com/cmo-as-a-service-israel",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "CMO as a Service in Israel",
  serviceType: "CMO as a Service for B2B technology companies",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "Israel" },
    { "@type": "Country", name: "United States" },
    "Europe",
    "Worldwide",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Israeli B2B technology companies scaling globally",
  },
  description:
    "CMO as a Service in Israel for B2B tech: senior marketing leadership from Lihi Pinto, a full execution layer, and 8 supervised AI agents, built to turn complex technology into global pipeline and revenue.",
  url: "https://www.tripleandco.com/cmo-as-a-service-israel",
};

const content: LandingContent = {
  breadcrumbLabel: "CMO as a Service in Israel",
  canonical: "/cmo-as-a-service-israel",

  heroEyebrow: "CMO as a Service · Israel",
  h1Lead: "CMO as a Service in Israel, for B2B Tech Ready to Scale",
  h1Highlight: "Globally",
  heroLede:
    "You do not need another marketing consultant. You need someone who sits beside the CEO, makes the marketing calls that matter, and makes sure the work actually ships.",
  heroBody:
    "Triple & Co. gives Israeli B2B technology companies senior CMO leadership from Lihi Pinto, a full execution layer, and 8 supervised AI agents working inside one marketing operating system. Strategy does not end in a presentation. It turns into positioning, campaigns, content, pipeline, and sales alignment, measured in revenue.",
  heroStats:
    "$70M+ raised at Syte.ai · Revenue tripled, twice · Top 1% fastest-growing SaaS",
  heroImageAlt: "Lihi Pinto, CMO as a Service for B2B tech companies in Israel",

  problemEyebrow: "The Israeli B2B tech challenge",
  problemH2Lead: "Built in Israel. Built for",
  problemH2Highlight: "Global Growth.",
  problemParas: [
    "Israeli technology companies share a specific growth challenge. The technology is often exceptional, and the founders understand the problem better than almost anyone in their market. But global buyers do not buy technology because it is technically superior. They buy when they understand the business problem, why solving it matters now, and why you are different from the established alternatives they already trust.",
    "That is hardest in complex B2B categories, SaaS, AI, cybersecurity, Deep Tech, cloud, and enterprise software, where the product is sophisticated, the buying committee spans multiple stakeholders, and the sales cycle runs months rather than weeks.",
    "Meanwhile the founders are still carrying the marketing function into every sales and investor conversation. Activity exists, but qualified pipeline does not follow, and positioning built by engineers rarely survives first contact with a US or European buying committee.",
  ],
  problemCallout:
    "Triple turns technological complexity into a commercial story global buyers can understand, trust, and act on. That is the job of CMO as a Service.",

  modelEyebrow: "What CMO as a Service includes",
  modelH2Lead: "Leadership, Execution, and",
  modelH2Highlight: "8 Supervised AI Agents",
  modelIntro:
    "One growth partner, three layers, on our Woman in the Loop model: senior judgment sets the strategy, a full execution layer ships it, and a supervised AI team scales it. You are never handed raw AI output.",
  pillars: [
    {
      title: "Lihi Pinto Owns the Strategy",
      description:
        "15+ years in B2B tech, $70M+ raised at companies where she led marketing, revenue tripled twice. Lihi sits beside the CEO, owns positioning, messaging, and pipeline strategy, and is accountable for the number.",
    },
    {
      title: "A Full Execution Layer Ships It",
      description:
        "Strategy does not end in a slide deck. It becomes positioning, campaigns, content, sales enablement, and reporting, aligned with sales so marketing and revenue operate as one system.",
    },
    {
      title: "8 Specialist AI Agents Scale It",
      description:
        "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen each own one job: brand voice, creative, growth, social, research, analytics, repurposing, and video. Every deliverable passes Lihi's review before it ships. Supervised end to end.",
    },
  ],

  comparisonHeading: "Fractional CMO, Agency, or CMO as a Service?",
  comparisonColHeaders: ["Fractional CMO", "Marketing agency", "Triple & Co."],
  comparisonRows: [
    {
      label: "Owns strategy at CEO level",
      left: "Yes",
      middle: "Rarely",
      right: "Yes",
    },
    {
      label: "Executes daily",
      left: "No, advises",
      middle: "Per channel",
      right: "Yes, full layer",
    },
    {
      label: "Capacity",
      left: "One person, part time",
      middle: "A shared account team",
      right: "Lihi plus 8 AI agents",
    },
    {
      label: "Accountable for pipeline",
      left: "Sometimes",
      middle: "Activity metrics",
      right: "Yes, revenue first",
    },
    {
      label: "Fits an Israeli budget",
      left: "Often",
      middle: "Adds up per retainer",
      right: "One engagement, $5K to $15K/mo",
    },
  ],
  comparisonNote:
    "Call it a fractional CMO, an outsourced CMO, or CMO services in Israel. The question underneath is the same: who owns the number, and who actually does the work. With Triple, one partner does both.",

  signalsEyebrow: "Who this is for",
  signalsH2Lead: "Built for Israeli B2B Tech",
  signalsH2Highlight: "Scaling Globally",
  signalsIntro:
    "Triple works across B2B technology: SaaS, AI, cybersecurity, Deep Tech, cloud, enterprise software, and other complex categories. The common denominator is not the business model. It is the challenge: a complex product that needs to become a clear commercial story, and marketing that needs to contribute directly to revenue.",
  signals: [
    {
      title: "Your Growth Market Is Abroad",
      description:
        "You build in Israel and sell into the US or Europe. Your buyers need education, credibility, and a story that survives a multi-stakeholder committee, written in native English for the market you sell into.",
    },
    {
      title: "Founders Still Carry Marketing",
      description:
        "The positioning lives in the CEO's head. Marketing activity exists, but it is not producing enough qualified pipeline, and no senior owner is accountable for changing that.",
    },
    {
      title: "You Need Leadership, Not Headcount",
      description:
        "You need CMO-level ownership now, without building a large in-house marketing department. Hire one agent, hire the team, or start with a fixed-scope diagnostic.",
    },
  ],
  signalsFootnote:
    "B2B SaaS · AI · Cybersecurity · Deep Tech · Cloud · Enterprise Software",

  faqEyebrow: "FAQ",
  faqH2Lead: "CMO as a Service in Israel,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "What does CMO as a Service include?",
      a: "Senior CMO leadership from Lihi Pinto, a full execution layer, and 8 supervised AI agents in one operating system. In practice that means positioning and messaging, go-to-market strategy, campaigns, content, sales alignment, and reporting, run and reviewed by one accountable partner instead of a patchwork of agencies and freelancers. When you are ready to unify marketing and sales under one revenue owner, the same model extends to CRO as a Service.",
    },
    {
      q: "How is this different from hiring a fractional CMO in Israel?",
      a: "A fractional CMO gives you senior advice for a few days a month, and execution stays with your team or your agencies. CMO as a Service combines that leadership with the execution layer and an AI team that scales it, so strategy and delivery sit with one accountable partner. If you specifically want a named executive inside your leadership team, our Fractional CMO engagement runs on the same supervised model, and we will recommend the right structure on your diagnostic call.",
    },
    {
      q: "How much does CMO as a Service cost in Israel?",
      a: "Engagements run $5,000 to $15,000 per month depending on scope, with all 8 AI agents included. That typically replaces the combined cost of several agency retainers and freelancers, and sits well below a full-time senior marketing hire in the Israeli market. Our pricing page lists the engagement models, and our outsourced CMO cost guide breaks down shekel ranges by model.",
    },
    {
      q: "Do you only work with Israeli companies?",
      a: "No. Triple is built in Israel and works with B2B tech companies in Israel, the US, and Europe. The model is async by design: the AI layer works around the clock and Lihi overlaps US and European business hours. Most of our Israeli clients hire us precisely because their buyers are abroad.",
    },
    {
      q: "What does supervised AI mean in practice?",
      a: "Each agent owns one job and works from a brief, on a Brief, Run, Deliver loop. Every output passes Lihi's review before it reaches you or your market. You are never handed raw AI output, and the accountable name on the work is human.",
    },
  ],
  faqCloser: {
    before: "New to the model? Read the full",
    linkHref: "/cmo-as-a-service",
    linkLabel: "CMO as a Service guide",
    after: "for how the operating system works end to end.",
  },

  ctaH2Lead: "Turn Israeli Technology Into",
  ctaH2Highlight: "Global Revenue",
  ctaBody:
    "One senior operator beside the CEO. One execution layer. 8 supervised AI agents. Book a diagnostic call with Lihi and leave with a clear read on your positioning, pipeline, and next 90 days.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function CmoAsAServiceIsraelPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
