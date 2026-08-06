import type { Metadata } from "next";
import { SolutionLanding, type LandingContent } from "@/components/SolutionLanding";

export const metadata: Metadata = {
  title: "B2B Marketing Agency in Tel Aviv, AI-Powered",
  description:
    "B2B marketing for Tel Aviv tech companies, built to sell globally. Senior strategy from Lihi Pinto plus 8 supervised AI agents, tuned to US and European buyers.",
  alternates: { canonical: "/b2b-marketing-tel-aviv" },
  openGraph: {
    title: "B2B Marketing Agency in Tel Aviv, AI-Powered | Triple & Co.",
    description:
      "Tel Aviv B2B and SaaS marketing built for the global buyer, led by Lihi Pinto with a supervised AI team.",
    url: "https://www.tripleandco.com/b2b-marketing-tel-aviv",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "B2B Marketing in Tel Aviv",
  serviceType: "B2B and SaaS marketing agency",
  provider: { "@id": "https://www.tripleandco.com/#organization" },
  areaServed: [
    { "@type": "City", name: "Tel Aviv" },
    { "@type": "Country", name: "Israel" },
    { "@type": "Country", name: "United States" },
    "Europe",
    "Worldwide",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Tel Aviv B2B and SaaS companies",
  },
  description:
    "AI-powered B2B marketing for Tel Aviv technology companies selling into the US and Europe: positioning, demand, and pipeline led by an AI-native CMO and a supervised team of AI agents.",
  url: "https://www.tripleandco.com/b2b-marketing-tel-aviv",
};

const content: LandingContent = {
  breadcrumbLabel: "B2B Marketing in Tel Aviv",
  canonical: "/b2b-marketing-tel-aviv",

  heroEyebrow: "B2B Marketing in Tel Aviv",
  h1Lead: "Tel Aviv B2B Marketing, Built for the",
  h1Highlight: "Global Buyer",
  heroLede:
    "Tel Aviv is one of the most concentrated B2B tech hubs in the world. The competition for talent, funding, and attention is fierce, and generic marketing does not cut through it.",
  heroBody:
    "Triple & Co. is an AI-powered B2B marketing partner working with Tel Aviv technology companies that sell globally. You get senior go-to-market leadership from Lihi Pinto plus 8 supervised AI agents executing daily in native English, tuned to how US and European buyers decide.",
  heroStats:
    "Rooted in the Tel Aviv tech scene \u00b7 $70M+ raised \u00b7 Native English and Hebrew",
  heroImageAlt: "Lihi Pinto, B2B marketing leader in Tel Aviv",

  problemEyebrow: "The problem",
  problemH2Lead: "In Tel Aviv's Talent Market, In-House Marketing Is Hard to",
  problemH2Highlight: "Build and Keep",
  problemParas: [
    "Tel Aviv has extraordinary technical talent, but senior go-to-market marketers are scarce and expensive, and the ones you find are quickly poached. Building an in-house marketing team here means competing for rare talent, paying top salaries, and rebuilding every time someone leaves.",
    "The alternatives are imperfect. Local agencies may not deeply understand the US or European buyer. A distant overseas team is slow and hard to manage. Freelancers give you fragments, not a strategy. Meanwhile the company needs pipeline now, not after a six-month hiring search.",
    "So the founder or a lone marketer tries to do it all, and the go-to-market story never gets the senior ownership it needs to compete for a global buyer.",
  ],
  problemCallout:
    "Tel Aviv companies do not need to win a hiring war for one marketer. They need senior ownership plus a full execution layer, available immediately.",

  modelEyebrow: "The Triple & Co. model",
  modelH2Lead: "Senior Leadership Plus a Full Team,",
  modelH2Highlight: "Without the Hiring War",
  modelIntro:
    "Triple & Co. runs on our Woman in the Loop (WIL) model: senior human judgment directing a supervised AI execution layer, so you get a CMO and a department without competing for scarce Tel Aviv talent.",
  pillars: [
    {
      title: "Lihi Pinto Owns Go-To-Market",
      description:
        "15+ years scaling B2B SaaS, $70M+ raised, fluent in English and Hebrew. You get senior go-to-market ownership immediately, without the search, the salary war, or the risk of losing your one marketing hire to the next well-funded startup.",
    },
    {
      title: "A Digital COO Runs the Operation",
      description:
        "Briefs, QA, sequencing, and handoffs run automatically inside one system, so the work ships consistently and never depends on a single person staying in the seat.",
    },
    {
      title: "8 Specialized AI Agents Execute Daily",
      description:
        "Camille, Vega, Rex, Zara, Nova, Atlas, Sage, and Lumen produce content, campaigns, research, and creative in native English, reviewed by Lihi before anything ships.",
    },
  ],

  comparisonHeading: "How Tel Aviv Companies Usually Buy This",
  comparisonColHeaders: ["Hire in-house", "Local agency", "Triple & Co. (WIL)"],
  comparisonRows: [
    {
      label: "Senior go-to-market owner",
      left: "If you win the hire",
      middle: "Advisory only",
      right: "Included",
    },
    {
      label: "Full execution layer",
      left: "More hiring",
      middle: "Varies",
      right: "Included",
    },
    {
      label: "Understands the global buyer",
      left: "Depends on the hire",
      middle: "Sometimes",
      right: "By default",
    },
    {
      label: "Retention risk",
      left: "High, talent is poached",
      middle: "Medium",
      right: "None, the system stays",
    },
    {
      label: "Time to first output",
      left: "Months to hire",
      middle: "Weeks",
      right: "Days",
    },
  ],
  comparisonNote:
    "You get senior ownership and a full team immediately, without competing for scarce Tel Aviv talent or carrying the retention risk.",

  signalsEyebrow: "Rooted locally, selling globally",
  signalsH2Lead: "The Tel Aviv Edge,",
  signalsH2Highlight: "Aimed at the World",
  signalsIntro:
    "Tel Aviv teaches companies to build fast and sell globally from a small home market. We bring that intensity to marketing, aimed squarely at the US and European buyer.",
  signals: [
    {
      title: "Fluent in Your Market",
      description:
        "Native English and Hebrew, with deep experience selling into US enterprise, European mid-market, and global developer audiences, so your message lands with the buyer you actually need.",
    },
    {
      title: "Always-On Execution",
      description:
        "Our AI execution layer works around the clock and Lihi overlaps with US and European hours, so output never stalls and responses stay fast across timezones.",
    },
    {
      title: "A Track Record You Can Verify",
      description:
        "Our founder's companies and work have been covered in TechCrunch, Calcalist, and Globes. The playbooks Lihi built while helping raise $70M+ are the same ones we run for clients.",
    },
  ],
  signalsFootnote: "As covered in TechCrunch \u00b7 Calcalist \u00b7 Globes",

  faqEyebrow: "FAQ",
  faqH2Lead: "Tel Aviv B2B Marketing Questions,",
  faqH2Highlight: "Answered",
  faqs: [
    {
      q: "Do you work on-site in Tel Aviv or remotely?",
      a: "We work primarily async and remote, which is how modern B2B marketing runs, but we are rooted in the Tel Aviv tech scene and available to meet locally when it helps. Our operating model overlaps US and European business hours, so you get fast responses and consistent output whether your team is in Tel Aviv and your buyers are abroad.",
    },
    {
      q: "Why not just hire a marketing leader in Tel Aviv?",
      a: "You can, if you win the hire. Senior go-to-market marketers are scarce and expensive in Tel Aviv, and the best ones are quickly poached by well-funded startups. Triple & Co. gives you senior ownership plus a full execution layer immediately, with no search, no salary war, and no risk of your one hire leaving and taking the strategy with them.",
    },
    {
      q: "Can you market our Tel Aviv company to US and European buyers?",
      a: "Yes, that is our specialty. We produce native English content and go-to-market playbooks tuned to how American and European buyers evaluate and buy, so your Tel Aviv company shows up credibly in the markets where your revenue actually is.",
    },
    {
      q: "How quickly can you start?",
      a: "The first two weeks are diagnostic: positioning, funnel, and pipeline review. By week three you have a plan and the agent team is shipping the first sprint. Most clients see live output inside the first month, far faster than a Tel Aviv hiring search would allow.",
    },
  ],
  faqCloser: {
    before: "Selling from Israel into global markets? See our broader",
    linkHref: "/b2b-marketing-israel",
    linkLabel: "B2B marketing in Israel",
    after: "overview.",
  },

  ctaH2Lead: "Compete for the Global Buyer, From",
  ctaH2Highlight: "Tel Aviv",
  ctaBody:
    "One senior operator. One supervised AI team. Senior marketing ownership without the Tel Aviv hiring war.",
  ctaNote:
    "No pitch. You will leave with 3 specific growth gaps, whether we work together or not.",
};

export default function B2BMarketingTelAvivPage() {
  return <SolutionLanding content={content} serviceSchema={serviceSchema} />;
}
