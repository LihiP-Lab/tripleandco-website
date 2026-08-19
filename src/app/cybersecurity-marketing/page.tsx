import type { Metadata } from "next";
import { SolutionLanding, type LandingContent } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "Cybersecurity Marketing for B2B, AI-Powered",
  description:
    "Cybersecurity marketing that speaks to CISOs and practitioners. Positioning and demand for B2B security, led by an AI-native CMO and 8 supervised agents.",
  alternates: { canonical: "/cybersecurity-marketing" },
  openGraph: {
    title: "Cybersecurity Marketing for B2B, AI-Powered | Triple & Co.",
    description:
      "Technical, credible positioning and demand generation for B2B cybersecurity, led by Lihi Pinto with a supervised AI team.",
    url: "https://www.tripleandco.com/cybersecurity-marketing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cybersecurity Marketing",
  serviceType: "B2B cybersecurity marketing and demand generation",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B cybersecurity companies",
  },
  description:
    "Technically credible marketing for B2B cybersecurity: positioning for CISOs and practitioners, demand generation, and pipeline, led by an AI-native CMO and a supervised team of AI agents.",
  url: "https://www.tripleandco.com/cybersecurity-marketing",
};

const content: LandingContent = {
  breadcrumbLabel: "Cybersecurity Marketing",
  canonical: "/cybersecurity-marketing",

  heroEyebrow: "Marketing for B2B Cybersecurity",
  h1Lead: "Cybersecurity Marketing That Practitioners Actually",
  h1Highlight: "Respect",
  heroLede:
    "Security buyers can smell fluff instantly. CISOs and practitioners trust vendors who understand the threat, not vendors who shout the loudest at RSA.",
  heroBody:
    "Triple & Co. gives you a senior cybersecurity marketing leader plus 8 supervised AI agents that produce technically credible positioning, content practitioners share, and a demand engine that reaches both the CISO and the analyst. Strategy and execution in one engagement, all reviewed by a human.",
  heroStats:
    "15+ years in B2B tech \u00b7 $70M+ raised \u00b7 Built in Israel, the cybersecurity capital",
  heroImageAlt: "Lihi Pinto, cybersecurity marketing leader",

  problemEyebrow: "The problem",
  problemH2Lead: "Security Buyers Tune Out Marketing That Sounds Like",
  problemH2Highlight: "Marketing",
  problemParas: [
    "Cybersecurity has two audiences who both have to say yes: the practitioner who will use the product and the CISO who will sign for it. Practitioners want technical depth and proof. CISOs want risk reduction, compliance, and board-defensible outcomes. Generic marketing serves neither.",
    "Most security companies default to fear-based buzzwords and a wall of acronyms, or they oversimplify to the point that a practitioner stops trusting them. Both fail. The credible technical story usually lives in the founder's or the sales engineer's head, never on the site.",
    "Add a crowded, noisy category where everyone claims to stop the same threats, and undifferentiated marketing gets ignored no matter how good the product is.",
  ],
  problemCallout:
    "Cybersecurity marketing does not need more noise. It needs technical credibility, produced fast, that earns respect from practitioners and confidence from the CISO.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Technical Depth Plus Executive Clarity,",
  modelH2Highlight: "Shipped Daily",
  modelIntro:
    "Triple & Co. runs on our Woman in the Loop (WIL) model: senior human judgment directing a supervised AI execution layer, so technical accuracy and message clarity both hold up.",
  pillars: [
    {
      title: "Lihi Pinto Owns Positioning",
      description:
        "15+ years scaling B2B tech, $70M+ raised. Lihi owns how you differentiate in a noisy category and how you speak to both the CISO and the practitioner, so the strategy is set by someone who has done it in security-adjacent B2B.",
    },
    {
      title: "A Digital COO Keeps It Accurate",
      description:
        "Briefs, QA, and technical review run inside one system, so content is both fast and correct. Nothing that misrepresents how the product works ever reaches a practitioner.",
    },
    {
      title: "8 Specialized AI Agents Execute Daily",
      description:
        "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen produce content, campaigns, research, and creative, with Nova tracking the threat landscape and competitors so your content stays current with the category.",
    },
  ],

  comparisonHeading: "How Security Teams Usually Buy This",
  comparisonColHeaders: ["Generic agency", "In-house team", "Triple & Co. (WIL)"],
  comparisonRows: [
    {
      label: "Speaks to practitioners",
      left: "Rarely",
      middle: "If you hire well",
      right: "By design",
    },
    {
      label: "Technical accuracy",
      left: "Needs heavy editing",
      middle: "Depends on the writer",
      right: "Reviewed before it ships",
    },
    {
      label: "Reaches CISO and analyst",
      left: "One message for all",
      middle: "Sometimes",
      right: "Built for both audiences",
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
    "You get positioning that earns practitioner respect and executive confidence, plus the output of a full team, without building one.",

  signalsEyebrow: "Built for security",
  signalsH2Lead: "Credibility With Both Buyers,",
  signalsH2Highlight: "In One Team",
  signalsIntro:
    "Cybersecurity marketing works when the technical story and the business case are told together. Our model is built to reach the analyst and the CISO with one coherent narrative.",
  signals: [
    {
      title: "Technical Content Practitioners Share",
      description:
        "Deep, accurate content on threats, detection, and defense that a practitioner is willing to forward, because it respects their expertise instead of talking down to them.",
    },
    {
      title: "A Business Case the CISO Can Defend",
      description:
        "Risk reduction, compliance, and outcome framing the CISO can take to the board, so the champion has what they need to get budget approved.",
    },
    {
      title: "Differentiation in a Noisy Category",
      description:
        "We sharpen how you stand apart when every competitor claims to stop the same threats, so buyers understand why you specifically, not just why security.",
    },
  ],
  signalsFootnote: "As covered in TechCrunch \u00b7 Calcalist \u00b7 Globes",

  faqEyebrow: "FAQ",
  faqH2Lead: "Cybersecurity Marketing Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "Can you produce technically credible security content?",
      a: "Yes. Our Woman in the Loop model pairs AI agents that draft at speed with senior human review that ensures technical accuracy. We work closely with your product and sales engineering to get the details right, so content earns practitioner respect instead of getting picked apart. Nothing that misrepresents how the product works ships.",
    },
    {
      q: "How do you market to both the CISO and the practitioner?",
      a: "Security requires two coherent stories: the technical depth practitioners trust, and the risk and outcome framing a CISO can defend to the board. We build both from one positioning foundation, so the message stays consistent whether it reaches an analyst reading a technical deep dive or an executive scanning a one-pager.",
    },
    {
      q: "Why does being based in Israel matter for cybersecurity marketing?",
      a: "Israel is one of the densest cybersecurity ecosystems in the world, which means the category, the talent, and the buyer are part of our default context. We understand how security companies are built and sold from a small home market into the US and Europe, and we bring that global-from-day-one playbook to every engagement.",
    },
    {
      q: "How fast can you start producing?",
      a: "The first two weeks are diagnostic: positioning, competitive landscape, and funnel review. By week three you have a plan and the agent team is shipping the first sprint of content and campaigns. Most security clients see live, technically reviewed output inside the first month.",
    },
  ],
  faqCloser: {
    before: "Want one leader who owns the full revenue number across the funnel? See our",
    linkHref: "/cro-as-a-service",
    linkLabel: "CRO as a Service",
    after: "model.",
  },

  ctaH2Lead: "Earn Respect From Practitioners and Confidence From",
  ctaH2Highlight: "the Board",
  ctaBody:
    "One senior operator. One supervised AI team. Cybersecurity marketing that both of your buyers trust.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function CybersecurityMarketingPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
