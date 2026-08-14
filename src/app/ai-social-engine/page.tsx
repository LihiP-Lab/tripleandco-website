import type { Metadata } from "next";
import {
  SolutionLanding,
  type LandingContent,
} from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "AI Social Media Engine as a Service, Supervised",
  description:
    "An AI social engine for B2B: founder voice, 30-day content calendars, and daily execution run by a supervised AI agent with human review. Included in engagements from $5,000/month.",
  alternates: { canonical: "/ai-social-engine" },
  openGraph: {
    title: "AI Social Media Engine as a Service | Triple & Co.",
    description:
      "Executive voice, content cadence, and measurement run daily by a supervised AI agent, reviewed by a human before anything posts.",
    url: "https://www.tripleandco.com/ai-social-engine",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Social Media Engine",
  serviceType: "AI-powered B2B social media marketing, supervised",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B technology companies",
  },
  description:
    "A supervised AI social engine for B2B: Zara runs channel audits, founder-voice frameworks, and 30-day content calendars, with Camille enforcing brand voice and human review on every post.",
  url: "https://www.tripleandco.com/ai-social-engine",
};

const content: LandingContent = {
  breadcrumbLabel: "AI Social Engine",
  canonical: "/ai-social-engine",

  heroEyebrow: "AI social engine, supervised",
  h1Lead: "Social That Drives Pipeline,",
  h1Highlight: "Not Just Impressions",
  heroLede:
    "In B2B, the founder's LinkedIn outperforms the company page ten to one. Almost nobody has the time to run it like the revenue channel it is.",
  heroBody:
    "Triple & Co. runs social as an engine: Zara audits your channels, builds an executive voice framework, and ships a 30-day calendar ready to publish, while Camille keeps every post in your voice. Lihi Pinto reviews everything before it goes live, so cadence never costs you credibility.",
  heroStats:
    "Founder-led strategy \u00b7 100% human-reviewed \u00b7 Included in engagements from $5,000/month",
  heroImageAlt: "Lihi Pinto, supervising the AI social engine",

  problemEyebrow: "The problem",
  problemH2Lead: "Everyone Knows Social Matters. Almost Nobody",
  problemH2Highlight: "Sustains It",
  problemParas: [
    "B2B buying starts on social now: buyers follow founders, form shortlists from their feeds, and check LinkedIn before they check your website. The companies winning attention are the ones whose executives show up consistently with a real point of view.",
    "But consistency is exactly what breaks. The founder posts for two weeks, then a product launch eats the calendar. A social agency produces safe, brandless content because they do not know the founder's actual opinions. The company page publishes press releases nobody reads.",
    "The result is the most common B2B social pattern: bursts of activity followed by silence, a voice that changes with whoever wrote the post, and no connection between social effort and pipeline.",
  ],
  problemCallout:
    "Social compounds only with cadence and a consistent voice. That is a systems problem, not a motivation problem.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Your Voice. Zara's Cadence.",
  modelH2Highlight: "Human Review.",
  modelIntro:
    "The social engine pairs a channel specialist with the brand-voice layer, supervised end to end by Lihi Pinto.",
  pillars: [
    {
      title: "Zara Owns the Channel",
      description:
        "Zara turns your social channels from background noise into a revenue-driving asset: she audits your current channels, builds a 30-day content calendar ready to publish, and establishes an executive voice framework for founder-led content.",
    },
    {
      title: "Camille Keeps It In Your Voice",
      description:
        "Every post runs through the brand-voice layer, so a month of content sounds like one person with a point of view, not a rotating cast of ghostwriters. Your extracted voice is the source of truth.",
    },
    {
      title: "Lihi Reviews Before Anything Posts",
      description:
        "Opinions, claims, and tone are checked by a senior marketer who knows your positioning, so founder-led content builds authority without creating risk. Nothing publishes unreviewed.",
    },
  ],

  comparisonHeading: "How B2B Teams Usually Buy Social",
  comparisonColHeaders: [
    "Founder DIY",
    "Social agency",
    "Triple & Co. engine",
  ],
  comparisonRows: [
    {
      label: "Cadence",
      left: "Bursts, then silence",
      middle: "Consistent but generic",
      right: "Consistent and opinionated",
    },
    {
      label: "Voice",
      left: "Authentic when it happens",
      middle: "Brandless by design",
      right: "Extracted founder voice, enforced",
    },
    {
      label: "Strategy",
      left: "Post and hope",
      middle: "Engagement metrics",
      right: "Mapped to pipeline and positioning",
    },
    {
      label: "Founder time",
      left: "Hours per week",
      middle: "Approval bottleneck",
      right: "Minutes to review, not write",
    },
    {
      label: "Cost model",
      left: "Free but never happens",
      middle: "Separate retainer",
      right: "Included in one engagement",
    },
  ],
  comparisonNote:
    "You get founder-led social that actually sustains, without the founder spending their week writing posts.",

  signalsEyebrow: "Built for B2B",
  signalsH2Lead: "Founder-Led, Measured,",
  signalsH2Highlight: "Sustained",
  signalsIntro:
    "The engine is built for how B2B social actually works: executive voices outperform logos, consistency beats virality, and the feed is a pipeline channel.",
  signals: [
    {
      title: "Executive Voice as the Asset",
      description:
        "The framework centers on the founder and leadership team, because that is where B2B attention actually flows. Company channels amplify; they do not lead.",
    },
    {
      title: "A Calendar That Survives Busy Months",
      description:
        "Thirty days of ready-to-publish content at a time means launches, travel, and quarter-end do not silence the channel. Cadence is the moat.",
    },
    {
      title: "Measured Against Pipeline",
      description:
        "Social is reported alongside the rest of the funnel, so you see what the channel contributes to conversations and pipeline, not just impressions.",
    },
  ],

  faqEyebrow: "FAQ",
  faqH2Lead: "AI Social Engine Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "What is an AI social media engine?",
      a: "A system that runs B2B social continuously: channel audit, executive voice framework, a 30-day publish-ready calendar, and measurement, executed by a specialized AI agent (Zara) in your extracted brand voice, with human review on every post before it publishes.",
    },
    {
      q: "Will it sound like the founder actually wrote it?",
      a: "Yes, because it starts from the founder's actual voice and opinions. Camille extracts the voice from existing content and conversations, Zara drafts within it, and Lihi Pinto reviews every post. The founder reviews in minutes instead of writing for hours.",
    },
    {
      q: "How much does the AI social engine cost?",
      a: "It is included in every Triple & Co. leadership engagement, which run $5,000 to $15,000 per month for CMO as a Service, CRO as a Service, or Head of Growth. A single specialist agent without a leadership engagement starts at $2,500 per month.",
    },
    {
      q: "Which platforms does it cover?",
      a: "For most B2B tech companies the center of gravity is LinkedIn, founder profile first, company page second, and the engine is built around that. Other channels (X, YouTube, newsletters) are added where your buyers actually are, not by default.",
    },
  ],
  faqCloser: {
    before: "Want video in the mix too? See the",
    linkHref: "/ai-video-production",
    linkLabel: "AI video production",
    after: "engine.",
  },

  ctaH2Lead: "Your Buyers Are In the Feed.",
  ctaH2Highlight: "Show Up Every Day.",
  ctaBody:
    "One supervised social engine: founder voice, 30-day cadence, and pipeline measurement, with a human accountable for every post.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function AISocialEnginePage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
