import type { Metadata } from "next";
import { SolutionLanding, type LandingContent } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "B2B Marketing Agency in Israel, AI-Powered",
  description:
    "B2B marketing in Israel built to sell globally. Senior strategy from Lihi Pinto plus 8 supervised AI agents, for Israeli B2B and SaaS companies going global.",
  alternates: {
    canonical: "/b2b-marketing-israel",
    languages: {
      en: "/b2b-marketing-israel",
      "he-IL": "/b2b-marketing-israel-he",
      "x-default": "/b2b-marketing-israel",
    },
  },
  openGraph: {
    title: "B2B Marketing Agency in Israel, AI-Powered | Triple & Co.",
    description:
      "Israeli B2B and SaaS marketing built for the US and European buyer, led by Lihi Pinto with a supervised AI team.",
    url: "https://www.tripleandco.com/b2b-marketing-israel",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "B2B Marketing in Israel",
  serviceType: "B2B and SaaS marketing agency",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "Israel" },
    { "@type": "Country", name: "United States" },
    "Europe",
    "Worldwide",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Israeli B2B and SaaS companies",
  },
  description:
    "AI-powered B2B marketing for Israeli technology companies selling into the US and Europe: positioning, demand, and pipeline led by an AI-native CMO and a supervised team of AI agents.",
  url: "https://www.tripleandco.com/b2b-marketing-israel",
};

const content: LandingContent = {
  breadcrumbLabel: "B2B Marketing in Israel",
  canonical: "/b2b-marketing-israel",

  heroEyebrow: "B2B Marketing in Israel",
  h1Lead: "Israeli B2B Marketing, Built to Sell",
  h1Highlight: "Globally",
  heroLede:
    "Israel builds world-class B2B products. The bottleneck is rarely the technology. It is telling the story in a way that lands with a US or European buyer.",
  heroBody:
    "Triple & Co. is an AI-powered B2B marketing partner based in Israel, built for companies selling into global markets. You get senior go-to-market leadership from Lihi Pinto plus 8 supervised AI agents executing daily, in fluent English, tuned to how American and European buyers actually decide.",
  heroStats:
    "Built in Israel, the Start-Up Nation \u00b7 $70M+ raised \u00b7 Native English and Hebrew",
  heroImageAlt: "Lihi Pinto, B2B marketing leader based in Israel",

  problemEyebrow: "The problem",
  problemH2Lead: "Great Israeli Products, Held Back by Marketing Built for the",
  problemH2Highlight: "Wrong Buyer",
  problemParas: [
    "Israeli B2B companies are engineering-first and global by necessity, since the home market is small. But the marketing is often an afterthought: built by technical founders, translated a bit awkwardly, and aimed at a buyer thousands of kilometers away whose expectations are different.",
    "The usual fixes each fall short. A local agency may not understand the US buyer or write in truly native English. An expensive US agency does not understand the Israeli company or its budget. Hiring a marketing team abroad is slow, costly, and hard to manage across timezones.",
    "So the founder becomes the marketer, carrying the positioning into every investor and sales conversation, while world-class technology waits for a story that matches it.",
  ],
  problemCallout:
    "Israeli B2B companies do not need a translator or a distant agency. They need a partner who understands both the company and the global buyer, and who ships.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Israeli Roots.",
  modelH2Highlight: "Global Go-To-Market.",
  modelIntro:
    "Triple & Co. runs on our Woman in the Loop (WIL) model: senior human judgment directing a supervised AI execution layer, built from day one to sell from Israel into the US and Europe.",
  pillars: [
    {
      title: "Lihi Pinto Owns Go-To-Market",
      description:
        "15+ years scaling B2B SaaS, $70M+ raised at companies she led, fluent in English and Hebrew. Lihi owns positioning, messaging, and pipeline strategy for the global buyer, so the story is built for the market you sell into, not the one you sit in.",
    },
    {
      title: "A Digital COO Runs It Async",
      description:
        "Our operating model works across timezones by default, overlapping US and European hours. Briefs, QA, and handoffs run automatically, so distance never slows the work down.",
    },
    {
      title: "8 Specialized AI Agents Execute Daily",
      description:
        "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen produce content, campaigns, research, and creative in native English, reviewed by Lihi before anything ships.",
    },
  ],

  comparisonHeading: "How Israeli B2B Companies Usually Buy This",
  comparisonColHeaders: ["Local agency", "US agency", "Triple & Co. (WIL)"],
  comparisonRows: [
    {
      label: "Understands your company",
      left: "Yes",
      middle: "Rarely",
      right: "Yes",
    },
    {
      label: "Understands the US and EU buyer",
      left: "Sometimes",
      middle: "Yes",
      right: "Yes",
    },
    {
      label: "Native English content",
      left: "Varies",
      middle: "Yes",
      right: "Yes",
    },
    {
      label: "Fits an Israeli budget",
      left: "Often",
      middle: "Rarely",
      right: "Yes",
    },
    {
      label: "Time to first output",
      left: "Weeks",
      middle: "Weeks",
      right: "Days",
    },
  ],
  comparisonNote:
    "You get a partner who understands the Israeli company and the global buyer, with the output of a full team and a budget that makes sense.",

  signalsEyebrow: "Start-Up Nation DNA",
  signalsH2Lead: "Global From Day One,",
  signalsH2Highlight: "By Default",
  signalsIntro:
    "Israel is the densest startup ecosystem on earth and the proving ground where B2B companies learn to sell globally from a small home market. That is our default setting.",
  signals: [
    {
      title: "Fluent in Your Market",
      description:
        "Native English and Hebrew, with deep experience selling into US enterprise, European mid-market, and global developer audiences, so the message reads like it was written for the buyer, because it was.",
    },
    {
      title: "Async by Design",
      description:
        "Our AI execution layer works around the clock and Lihi overlaps with US and European hours. Most clients say we respond faster than their in-house teams did.",
    },
    {
      title: "A Track Record You Can Verify",
      description:
        "Our founder's companies and work have been covered in TechCrunch, Calcalist, and Globes. The playbooks Lihi built while helping raise $70M+ are the same ones we run for clients.",
    },
  ],
  signalsFootnote: "As covered in TechCrunch \u00b7 Calcalist \u00b7 Globes",

  faqEyebrow: "FAQ",
  faqH2Lead: "Israeli B2B Marketing Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "Do you work with Israeli companies selling into the US and Europe?",
      a: "Yes, that is our core focus. Most of our clients are Israeli B2B and SaaS companies whose buyers are in the US and Europe. Our entire operating model is built for it: native English content, async work across timezones, and go-to-market playbooks tuned to how American and European buyers evaluate and buy.",
    },
    {
      q: "Can you produce native-level English marketing?",
      a: "Yes. Lihi is fluent in English and Hebrew, and all client-facing content is produced and reviewed to native-English standard. The goal is content that reads as if it were written by someone inside your target market, because awkward translation is one of the fastest ways an Israeli company loses credibility with a global buyer.",
    },
    {
      q: "How do you handle working across timezones?",
      a: "Async by design. Our supervised AI agent layer works around the clock, and Lihi overlaps with both US and European business hours. Briefs, reviews, and handoffs run through one system, so you get consistent output and fast responses regardless of where your buyers are.",
    },
    {
      q: "Is this a fit for early-stage Israeli startups?",
      a: "Yes. For early-stage companies we focus on nailing global positioning and building the first repeatable demand motion, so you can raise and sell into your target market with a story that matches the product. Book a Revenue Diagnostic and we will scope it to your stage and runway.",
    },
  ],
  faqCloser: {
    before: "Curious what an outsourced marketing leader costs in Israel? Read our guide on the",
    linkHref: "/insights/outsourced-cmo-israel-cost",
    linkLabel: "cost of an outsourced CMO in Israel",
    after: "for a breakdown.",
  },

  ctaH2Lead: "Sell Your Israeli Product to the",
  ctaH2Highlight: "World",
  ctaBody:
    "One senior operator who knows the Israeli company and the global buyer. One supervised AI team. Marketing built to sell abroad.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function B2BMarketingIsraelPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
