import type { Metadata } from "next";
import { SolutionLanding, type LandingContent } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "Fintech Marketing for B2B, AI-Powered",
  description:
    "Fintech marketing that earns trust and pipeline. Compliance-aware positioning and demand for B2B fintech, led by an AI-native CMO and 8 supervised agents.",
  alternates: { canonical: "/fintech-marketing" },
  openGraph: {
    title: "Fintech Marketing for B2B, AI-Powered | Triple & Co.",
    description:
      "Trust-first positioning and demand generation for B2B fintech and financial infrastructure, led by Lihi Pinto with a supervised AI team.",
    url: "https://www.tripleandco.com/fintech-marketing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fintech Marketing",
  serviceType: "B2B fintech marketing and demand generation",
  provider: {
    "@type": "Organization",
    name: "Triple & Co.",
    url: "https://www.tripleandco.com",
  },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B fintech and financial technology companies",
  },
  description:
    "Trust-first marketing for B2B fintech: compliance-aware positioning, demand generation, and pipeline, led by an AI-native CMO and a supervised team of AI agents.",
  url: "https://www.tripleandco.com/fintech-marketing",
};

const content: LandingContent = {
  breadcrumbLabel: "Fintech Marketing",
  canonical: "/fintech-marketing",

  heroEyebrow: "Marketing for B2B Fintech",
  h1Lead: "Fintech Marketing That Earns Trust and",
  h1Highlight: "Books Pipeline",
  heroLede:
    "In fintech, buyers do not just evaluate features. They evaluate whether they can trust you with money, data, and compliance. Your marketing has to prove that on every page.",
  heroBody:
    "Triple & Co. gives you a senior fintech marketing leader plus 8 supervised AI agents that build trust-first positioning, compliant content, and a demand engine that turns credibility into pipeline. Strategy and execution in one engagement, with a human accountable for every claim that ships.",
  heroStats:
    "15+ years in B2B SaaS and investment banking \u00b7 $70M+ raised \u00b7 Trust-first by design",
  heroImageAlt: "Lihi Pinto, fintech marketing leader",

  problemEyebrow: "The problem",
  problemH2Lead: "In Fintech, Weak Marketing Reads as",
  problemH2Highlight: "Weak Credibility",
  problemParas: [
    "Fintech buyers are risk managers first. A CFO, a head of payments, or a compliance officer will not shortlist a vendor whose website raises more questions than it answers. Vague claims, missing proof, and generic messaging do not just lower conversion, they signal risk.",
    "Yet most fintech teams market like generic SaaS: feature lists, buzzwords, and campaigns disconnected from how a regulated buyer actually decides. The founder ends up personally carrying the trust story into every sales call because the marketing never built it.",
    "Add the compliance layer, where every claim has to be accurate and defensible, and most freelancers and agencies either move too slowly or ship copy that legal has to rewrite.",
  ],
  problemCallout:
    "Fintech does not need louder marketing. It needs credible marketing, produced fast, and owned by someone accountable for every word.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Senior Judgment on Every Claim.",
  modelH2Highlight: "Execution at Fintech Speed.",
  modelIntro:
    "Triple & Co. runs on our Woman in the Loop (WIL) model: senior human judgment directing a supervised AI execution layer, so nothing ships without review, which matters most in regulated categories.",
  pillars: [
    {
      title: "Lihi Pinto Owns the Trust Story",
      description:
        "15+ years across B2B SaaS and investment banking, $70M+ raised. Lihi owns positioning, the credibility narrative, and messaging, so the way you present risk, security, and proof is set by someone who has sat on both sides of the table.",
    },
    {
      title: "A Digital COO Keeps Everything Reviewed",
      description:
        "Briefs, QA, and approvals run inside one system, so every asset passes human review before it ships. In fintech, that supervision layer is not optional, it is the point.",
    },
    {
      title: "8 Specialized AI Agents Execute Daily",
      description:
        "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen produce content, campaigns, research, and creative at speed, with Nova pulling the market and competitive intelligence a regulated buyer expects you to know.",
    },
  ],

  comparisonHeading: "How Fintech Teams Usually Buy This",
  comparisonColHeaders: ["Generic agency", "In-house team", "Triple & Co. (WIL)"],
  comparisonRows: [
    {
      label: "Understands regulated buyers",
      left: "Rarely",
      middle: "Sometimes",
      right: "By default",
    },
    {
      label: "Every claim reviewed",
      left: "Not built in",
      middle: "Depends on process",
      right: "Always, before it ships",
    },
    {
      label: "Trust-first positioning",
      left: "Generic templates",
      middle: "If you have the seniority",
      right: "Owned by a senior operator",
    },
    {
      label: "Time to first output",
      left: "Weeks",
      middle: "Months to hire",
      right: "Days",
    },
    {
      label: "Annual cost",
      left: "Retainers that stack up",
      middle: "$400K+ fully loaded",
      right: "One executive-level retainer",
    },
  ],
  comparisonNote:
    "You get the credibility of a senior operator who understands finance, and the output of a full team, with review baked into every asset.",

  signalsEyebrow: "Built for fintech",
  signalsH2Lead: "Credibility, Compliance-Awareness, and Demand,",
  signalsH2Highlight: "In One Team",
  signalsIntro:
    "Fintech marketing works when trust and pipeline are built together. Our model is designed for regulated categories where accuracy is as important as speed.",
  signals: [
    {
      title: "Trust-First Positioning",
      description:
        "We lead with the proof, security posture, and outcomes that regulated buyers screen for, so credibility is established before the feature comparison begins.",
    },
    {
      title: "Content Legal Does Not Have to Rewrite",
      description:
        "Because a senior human reviews every asset, claims are accurate and defensible, so your content ships faster and survives compliance review.",
    },
    {
      title: "A Demand Engine for Long Sales Cycles",
      description:
        "Fintech deals take time. We build nurture, content, and pipeline reporting that keep you present across a long, multi-stakeholder buying process.",
    },
  ],
  signalsFootnote: "As covered in TechCrunch \u00b7 Calcalist \u00b7 Globes",

  faqEyebrow: "FAQ",
  faqH2Lead: "Fintech Marketing Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "Do you understand marketing for regulated financial products?",
      a: "Yes. Lihi Pinto's background spans B2B SaaS and investment banking, so the trust story, the risk narrative, and the way regulated buyers evaluate vendors are core to how we position fintech companies. We lead with proof and credibility rather than hype, and every claim is reviewed by a human before it ships.",
    },
    {
      q: "How do you handle compliance and accuracy in content?",
      a: "Our Woman in the Loop model means no output ships without senior human review. AI agents produce drafts at speed, but a human owns accuracy, so claims are defensible and your content is far less likely to get bounced back by legal or compliance. If you have an internal review process, we plug into it.",
    },
    {
      q: "What kinds of fintech companies do you work with?",
      a: "We work with B2B fintech and financial infrastructure companies: payments, banking-as-a-service, treasury, risk, compliance tech, and adjacent categories selling to finance and operations leaders. The common thread is a buyer who evaluates trust and risk, not just features.",
    },
    {
      q: "Can you support long, multi-stakeholder sales cycles?",
      a: "Yes. Fintech deals often involve finance, security, legal, and operations. We build the content, nurture, and sales enablement that keep you credible and top of mind across a long cycle, and we report on pipeline so you can see how marketing is influencing deals over time.",
    },
  ],
  faqCloser: {
    before: "Want one leader who owns the full revenue number across the funnel? See our",
    linkHref: "/cro-as-a-service",
    linkLabel: "CRO as a Service",
    after: "model.",
  },

  ctaH2Lead: "Turn Credibility Into",
  ctaH2Highlight: "Pipeline",
  ctaBody:
    "One senior operator who understands finance. One supervised AI team. Marketing your buyers can trust.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function FintechMarketingPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
