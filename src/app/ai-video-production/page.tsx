import type { Metadata } from "next";
import {
  SolutionLanding,
  type LandingContent,
} from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "AI Video Production as a Service, Supervised",
  description:
    "AI video production for B2B: concept, script, edit direction, and post run by a supervised AI agent with art direction and human review.",
  alternates: { canonical: "/ai-video-production" },
  openGraph: {
    title: "AI Video Production as a Service | Triple & Co.",
    description:
      "Story-first B2B video: concept, script, shot list, and edit direction run by supervised AI agents, human-reviewed before anything ships.",
    url: "https://www.tripleandco.com/ai-video-production",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Video Production",
  serviceType: "AI-powered B2B video production, supervised",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: ["US", "Europe", "Israel", "Worldwide"],
  audience: {
    "@type": "Audience",
    audienceType: "B2B technology companies",
  },
  description:
    "Supervised AI video production for B2B: Lumen owns concept, script, shot list, edit direction, and post, with Vega on art direction and human review before anything ships.",
  url: "https://www.tripleandco.com/ai-video-production",
};

const content: LandingContent = {
  breadcrumbLabel: "AI Video Production",
  canonical: "/ai-video-production",

  heroEyebrow: "AI video production, supervised",
  h1Lead: "B2B Video That Earns the",
  h1Highlight: "Next Thirty Seconds",
  heroLede:
    "The first three seconds of a video decide whether anyone watches the next thirty. Most B2B video loses that decision before the logo fades in.",
  heroBody:
    "Triple & Co. runs video as an engine: Lumen owns concept, script, shot list, edit direction, and post, thinking in story before tools: hook, setup, payoff. Vega sets the visual direction so everything ships on brand, and Lihi Pinto reviews every cut before it goes out.",
  heroStats:
    "Story-first, not tool-first \u00b7 100% human-reviewed \u00b7 Included in engagements from $5,000/month",
  heroImageAlt: "Lihi Pinto, supervising AI video production",

  problemEyebrow: "The problem",
  problemH2Lead: "Video Is the Highest-Leverage Format Nobody",
  problemH2Highlight: "Can Afford to Sustain",
  problemParas: [
    "Everyone agrees video wins the feed: it carries founder authority, survives algorithm changes, and gets shared in buying committees. The economics are the problem. A production agency charges five figures per video and takes six weeks. An in-house videographer covers shooting but not concept, script, or strategy.",
    "So B2B teams produce video the worst possible way: occasionally. One launch video a quarter, edited three times by committee, published to a channel with no cadence. The format that rewards consistency gets treated as an event.",
    "AI tooling changed the cost of production, but tools alone produce what most AI video looks like: generic avatars reading generic scripts. What is missing is what was always missing: story judgment, brand consistency, and someone accountable for the result.",
  ],
  problemCallout:
    "The bottleneck was never the camera. It is concept, script, and edit judgment, and those can now run weekly instead of quarterly.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Lumen Tells the Story.",
  modelH2Highlight: "Vega Makes It Yours.",
  modelIntro:
    "The video engine pairs a story-first video agent with an art-direction layer, supervised end to end by Lihi Pinto.",
  pillars: [
    {
      title: "Lumen Owns Video End to End",
      description:
        "Concept, script, shot list, edit direction, and post. Lumen thinks in story before tools: hook, setup, payoff, because the first three seconds decide whether anyone watches the next thirty, and that call cannot be patched in post.",
    },
    {
      title: "Vega Sets the Visual Direction",
      description:
        "Art direction across brand, marketing, and video, always shipping two to four directions with a recommendation. Your video looks like your brand, not like the template everyone else rendered this week.",
    },
    {
      title: "Real Voice, Human Review",
      description:
        "Founder-led videos use the founder's real recorded voice and reviewed scripts, so authority stays authentic. Lihi Pinto reviews every cut before it ships.",
    },
  ],

  comparisonHeading: "How B2B Teams Usually Buy Video",
  comparisonColHeaders: [
    "Production agency",
    "DIY with AI tools",
    "Triple & Co. engine",
  ],
  comparisonRows: [
    {
      label: "Cost per video",
      left: "Five figures",
      middle: "Cheap but generic",
      right: "Included in one engagement",
    },
    {
      label: "Turnaround",
      left: "Weeks per video",
      middle: "Fast, quality varies",
      right: "Days, consistent quality",
    },
    {
      label: "Story and script",
      left: "Strong, expensive",
      middle: "Usually skipped",
      right: "Lumen's core job",
    },
    {
      label: "Brand consistency",
      left: "Per-project",
      middle: "Whatever the template does",
      right: "Vega's art direction on every cut",
    },
    {
      label: "Cadence",
      left: "Quarterly at best",
      middle: "Bursts, then silence",
      right: "Weekly, sustained",
    },
  ],
  comparisonNote:
    "You get agency-grade story judgment at AI production speed, with a human accountable for every frame that ships.",

  signalsEyebrow: "Built for B2B",
  signalsH2Lead: "Built for the Formats",
  signalsH2Highlight: "That Move Pipeline",
  signalsIntro:
    "The engine is built for the video B2B actually needs: founder-led social video, product stories, and campaign creative, at a cadence the feed rewards.",
  signals: [
    {
      title: "Founder-Led Video at Cadence",
      description:
        "Weekly founder videos with real voice, reviewed scripts, and consistent visual identity, the highest-authority format in B2B, finally sustainable.",
    },
    {
      title: "Product Stories, Not Feature Tours",
      description:
        "Hook, setup, payoff applied to product video, so demos earn attention instead of assuming it. Story structure is the differentiator, not the render engine.",
    },
    {
      title: "One System With the Rest of Marketing",
      description:
        "Video runs inside the same engine as content, social, and analytics, so every video has a distribution plan and a measured result, not just a file.",
    },
  ],

  faqEyebrow: "FAQ",
  faqH2Lead: "AI Video Production Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "What does AI video production include at Triple & Co.?",
      a: "Lumen, our video agent, owns the full pipeline: concept, script, shot list, edit direction, and post. Vega provides art direction so everything ships on brand, and Lihi Pinto reviews every video before release. It covers founder-led social video, product stories, and campaign creative.",
    },
    {
      q: "Will it look like generic AI video?",
      a: "No. Generic AI video is what you get from tools without judgment. Here the story is written first (hook, setup, payoff), the visual direction is set by an art-direction agent that always proposes multiple directions with a recommendation, founder videos use real recorded voice, and nothing ships without human review.",
    },
    {
      q: "How much does AI video production cost?",
      a: "It is included in every Triple & Co. leadership engagement, which run $5,000 to $15,000 per month for CMO as a Service, CRO as a Service, or Head of Growth. A single specialist agent without a leadership engagement starts at $2,500 per month. Compare that to five figures per video at a production agency.",
    },
    {
      q: "What cadence can we expect?",
      a: "Weekly is the working default for founder-led social video, with larger product or campaign pieces layered in. The engine exists precisely to make video a cadence, not an event.",
    },
  ],
  faqCloser: {
    before: "Video works best inside the full engine. See the",
    linkHref: "/ai-social-engine",
    linkLabel: "AI social engine",
    after: "it feeds.",
  },

  ctaH2Lead: "The Feed Rewards Video.",
  ctaH2Highlight: "Ship It Weekly.",
  ctaBody:
    "One supervised video engine: story, art direction, and post, at a cadence agencies cannot match and tools alone cannot sustain.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function AIVideoProductionPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
