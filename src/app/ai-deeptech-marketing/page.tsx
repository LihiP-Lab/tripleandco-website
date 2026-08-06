import type { Metadata } from "next";
import { SolutionLanding, type LandingContent } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "AI and DeepTech Marketing for B2B",
  description:
    "AI and deep tech marketing that turns hard technology into a clear business case. Positioning and demand led by an AI-native CMO and 8 supervised agents.",
  alternates: { canonical: "/ai-deeptech-marketing" },
  openGraph: {
    title: "AI and DeepTech Marketing for B2B | Triple & Co.",
    description:
      "Turn complex AI and deep tech into a buyable story. Positioning and demand generation led by Lihi Pinto with a supervised AI team.",
    url: "https://www.tripleandco.com/ai-deeptech-marketing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI and DeepTech Marketing",
  serviceType: "B2B AI and deep tech marketing and demand generation",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B AI and deep technology companies",
  },
  description:
    "Marketing for B2B AI and deep tech: turning complex technology into clear positioning, demand, and pipeline, led by an AI-native CMO and a supervised team of AI agents.",
  url: "https://www.tripleandco.com/ai-deeptech-marketing",
};

const content: LandingContent = {
  breadcrumbLabel: "AI and DeepTech Marketing",
  canonical: "/ai-deeptech-marketing",

  heroEyebrow: "Marketing for AI and DeepTech",
  h1Lead: "AI and DeepTech Marketing That Makes Hard Technology",
  h1Highlight: "Buyable",
  heroLede:
    "The hardest part of marketing deep technology is not the technology. It is translating it into a business outcome a buyer will pay for, without dumbing it down.",
  heroBody:
    "Triple & Co. gives you a senior marketing leader who is genuinely AI-native, plus 8 supervised AI agents that turn complex capabilities into clear positioning, credible content, and a demand engine. We market AI companies using AI, and a human owns the story so it stays accurate.",
  heroStats:
    "AI-native operating model \u00b7 $70M+ raised at companies Lihi led \u00b7 15+ years in B2B tech",
  heroImageAlt: "Lihi Pinto, AI and deep tech marketing leader",

  problemEyebrow: "The problem",
  problemH2Lead: "Great Technology Dies in the Gap Between the Lab and the",
  problemH2Highlight: "Buyer",
  problemParas: [
    "Deep tech and AI companies are usually founded by brilliant technical teams who can explain how the system works in exhausting detail. What they struggle to explain is why a buyer should care, in the buyer's language, tied to a number the buyer owns.",
    "So the marketing becomes a research paper: accurate, dense, and impossible to act on. Or it swings the other way into vague AI hype that sophisticated buyers immediately distrust. Either way, the pipeline never reflects how good the technology actually is.",
    "Generic marketers cannot fix this because they do not understand the technology. Technical founders cannot fix it alone because they are too close to it. The result is a category-defining product with commodity-grade marketing.",
  ],
  problemCallout:
    "Deep tech does not need simpler technology or louder hype. It needs a translator who respects the technology and knows how buyers actually decide.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "An AI-Native Team That Markets AI",
  modelH2Highlight: "With AI",
  modelIntro:
    "Triple & Co. runs on our Woman in the Loop (WIL) model: senior human judgment directing a supervised AI execution layer. For AI and deep tech companies, we are not just talking about the technology, we are running on it.",
  pillars: [
    {
      title: "Lihi Pinto Owns the Translation",
      description:
        "15+ years in B2B tech, $70M+ raised. Lihi owns the work of turning a hard technical capability into positioning and a business case a buyer will act on, without stripping out the substance that makes it defensible.",
    },
    {
      title: "A Digital COO Keeps It Rigorous",
      description:
        "Briefs, QA, and technical review run inside one system, so the story stays accurate as it scales. Sophisticated buyers detect exaggeration instantly, so accuracy is a growth lever, not a constraint.",
    },
    {
      title: "8 Specialized AI Agents Execute Daily",
      description:
        "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen produce content, campaigns, research, and creative. We use an AI-native workflow ourselves, so we understand your buyer because we are one.",
    },
  ],

  comparisonHeading: "How DeepTech Teams Usually Buy This",
  comparisonColHeaders: ["Generic agency", "Technical founder DIY", "Triple & Co. (WIL)"],
  comparisonRows: [
    {
      label: "Understands the technology",
      left: "No",
      middle: "Deeply",
      right: "Yes, and translates it",
    },
    {
      label: "Speaks the buyer's language",
      left: "Generically",
      middle: "Rarely",
      right: "Fluently",
    },
    {
      label: "Ships consistently",
      left: "Against a brief",
      middle: "When there is time",
      right: "Daily",
    },
    {
      label: "Time to first output",
      left: "Weeks",
      middle: "Whenever the roadmap allows",
      right: "Days",
    },
    {
      label: "Annual cost",
      left: "Retainers that stack up",
      middle: "Founder time you cannot spare",
      right: "One executive-level retainer",
    },
  ],
  comparisonNote:
    "You get a partner who respects the technology and knows how to sell it, plus the output of a full team, without pulling engineers off the roadmap.",

  signalsEyebrow: "Built for deep tech",
  signalsH2Lead: "Rigor, Translation, and Demand,",
  signalsH2Highlight: "In One Team",
  signalsIntro:
    "Deep tech marketing works when technical rigor and commercial clarity are held together. Our AI-native model is built to do exactly that at speed.",
  signals: [
    {
      title: "From Capability to Business Case",
      description:
        "We translate what your technology does into the outcome a buyer owns and will pay for, so the value is obvious without losing the substance behind it.",
    },
    {
      title: "Content That Survives Expert Scrutiny",
      description:
        "Because a senior human reviews every asset, your content holds up when a technical evaluator reads it closely, which builds the trust deep tech sales depend on.",
    },
    {
      title: "GEO for the AI-Era Buyer",
      description:
        "Your buyers increasingly ask AI engines who to shortlist. We make your brand citable in ChatGPT, Perplexity, and AI Overviews, so you show up where deep tech evaluation now starts.",
    },
  ],
  signalsFootnote: "As covered in TechCrunch \u00b7 Calcalist \u00b7 Globes",

  faqEyebrow: "FAQ",
  faqH2Lead: "AI and DeepTech Marketing Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "Can you actually understand our technology?",
      a: "Our whole model is AI-native, so we are not intimidated by technical depth, and Lihi has 15+ years marketing complex B2B products. We invest the diagnostic time to understand how your system works, then translate it into positioning and a business case without stripping out the substance. Sophisticated buyers can tell the difference, and so can we.",
    },
    {
      q: "How do you avoid generic AI hype?",
      a: "By pairing AI-speed execution with senior human judgment. Every claim is reviewed for accuracy before it ships, so we lead with what your technology actually does and the outcome it produces, not vague buzzwords that sophisticated buyers immediately distrust. In deep tech, credibility is the conversion lever.",
    },
    {
      q: "Do you market AI companies using AI?",
      a: "Yes. Our Woman in the Loop model runs a supervised team of AI agents for content, campaigns, research, and creative, directed by a senior human. We understand your AI-era buyer partly because our own operating model is AI-native, which also means we produce more, faster, than a traditional team.",
    },
    {
      q: "Why does GEO matter for deep tech specifically?",
      a: "Technical buyers increasingly start their research by asking AI engines like ChatGPT, Perplexity, and Gemini who the serious players are in a category. Generative Engine Optimization makes your brand and content citable in those answers, so you get shortlisted at the exact moment evaluation begins. See our GEO page for how this works.",
    },
  ],
  faqCloser: {
    before: "Want to get cited by AI engines when buyers research your category? See our",
    linkHref: "/geo",
    linkLabel: "GEO for B2B",
    after: "page.",
  },

  ctaH2Lead: "Make Your Technology",
  ctaH2Highlight: "Buyable",
  ctaBody:
    "One senior operator who respects the technology. One AI-native team. Marketing as advanced as your product.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function AIDeepTechMarketingPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
