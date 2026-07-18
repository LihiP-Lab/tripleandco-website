export interface AgentDeliverable {
  icon: string;
  title: string;
  description: string;
}

export interface AgentDiagnostic {
  name: string;
  duration: string;
  price: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  model: "Claude Sonnet" | "Claude Opus" | "Claude Haiku";
  shortRole: string;
  description: string;
  image: string;
  deliverables: [AgentDeliverable, AgentDeliverable, AgentDeliverable];
  diagnostic: AgentDiagnostic;
  categories: string[];
  hourlyRate: string;
  monthlyRetainer: string;
}

export const CATEGORIES = [
  "All",
  "Writing",
  "Design",
  "Strategy",
  "Social",
  "Research",
  "Analytics",
  "Content",
  "Video",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const agents: Agent[] = [
  {
    id: "camille",
    name: "Camille",
    role: "Brand Voice Generator",
    model: "Claude Sonnet",
    shortRole: "Writes the brand voice. Not an LLM\u2019s.",
    description:
      "Camille extracts your brand voice from your existing content and applies it consistently across every channel, so your company sounds like itself, not like everyone else.",
    image: "/images/agents/camille.png",
    deliverables: [
      {
        icon: "\uD83C\uDFAF",
        title: "Voice Extraction",
        description: "Brand personality codified",
      },
      {
        icon: "\u270D\uFE0F",
        title: "Asset Rewrite",
        description: "3 hero assets in your voice",
      },
      {
        icon: "\uD83D\uDCCB",
        title: "Voice Guide",
        description: "Tone, pillars & do/don\u2019t",
      },
    ],
    diagnostic: {
      name: "Brand Voice Diagnostic",
      duration: "2 weeks",
      price: "$2,000",
    },
    categories: ["Writing", "Content"],
    hourlyRate: "$65",
    monthlyRetainer: "$5,000",
  },
  {
    id: "vega",
    name: "Vega",
    role: "Art Director",
    model: "Claude Opus",
    shortRole: "Directs how it looks. Art direction.",
    description:
      "Vega owns visual direction across brand, marketing, web, and decks. She runs on Opus because direction compounds. A wrong type choice or a sloppy hierarchy isn\u2019t a bug you patch later, it\u2019s brand erosion you pay for every campaign after. Always ships two to four directions with a recommendation, never one solution and never three solutions without a pick. Curates as much as she creates: the right reference, the right photographer, the right illustration partner is often more on-brand than another in-house mockup. Built for taste calls, system extensions, and the kind of judgment that keeps a brand looking like itself across every surface.",
    image: "/images/agents/vega.png",
    deliverables: [
      {
        icon: "\uD83C\uDFA8",
        title: "Direction Set",
        description: "2\u20134 directions with a recommendation",
      },
      {
        icon: "\uD83D\uDCD0",
        title: "System Extensions",
        description: "New patterns that fit the brand",
      },
      {
        icon: "\uD83D\uDDBC\uFE0F",
        title: "Curated References",
        description: "Photographers, illustrators, partners",
      },
    ],
    diagnostic: {
      name: "Visual Direction Diagnostic",
      duration: "2 weeks",
      price: "$2,500",
    },
    categories: ["Design"],
    hourlyRate: "$85",
    monthlyRetainer: "$6,000",
  },
  {
    id: "rex",
    name: "Rex",
    role: "Growth Campaign Strategist",
    model: "Claude Sonnet",
    shortRole: "Briefs the strategy. Plans campaigns the team can execute.",
    description:
      "Rex audits your growth engine, finds the campaigns that will actually move pipeline, and maps the 90 days that get you to your next revenue milestone.",
    image: "/images/agents/rex.png",
    deliverables: [
      {
        icon: "\uD83D\uDCCA",
        title: "Campaign Audit",
        description: "12-month performance review",
      },
      {
        icon: "\uD83D\uDDFA\uFE0F",
        title: "90-Day Roadmap",
        description: "Sequenced plan + pipeline impact",
      },
      {
        icon: "\uD83C\uDFAF",
        title: "ICP Analysis",
        description: "Message-market fit assessment",
      },
    ],
    diagnostic: {
      name: "Growth Engine Diagnostic",
      duration: "3 weeks",
      price: "$2,500",
    },
    categories: ["Strategy"],
    hourlyRate: "$60",
    monthlyRetainer: "$4,500",
  },
  {
    id: "zara",
    name: "Zara",
    role: "Social Media Commander",
    model: "Claude Haiku",
    shortRole: "Ships the social channels.",
    description:
      "Zara turns your social channels from background noise into a revenue-driving asset: founder voice, content cadence, and measurement all in one.",
    image: "/images/agents/zara.png",
    deliverables: [
      {
        icon: "\uD83D\uDCF1",
        title: "Channel Audit",
        description: "Performance + competitor benchmark",
      },
      {
        icon: "\uD83D\uDCC5",
        title: "Content Calendar",
        description: "30-day plan, ready to publish",
      },
      {
        icon: "\uD83D\uDDE3\uFE0F",
        title: "Founder Voice",
        description: "Executive voice framework built",
      },
    ],
    diagnostic: {
      name: "Social Presence Diagnostic",
      duration: "2 weeks",
      price: "$1,500",
    },
    categories: ["Social", "Content"],
    hourlyRate: "$40",
    monthlyRetainer: "$3,000",
  },
  {
    id: "nova",
    name: "Nova",
    role: "Content Research Analyst",
    model: "Claude Sonnet",
    shortRole: "Reads the room. Research, trends, competitive intel.",
    description:
      "Nova maps the content landscape in your category, surfaces the topics your buyers actually search, and hands you a content strategy grounded in real demand, not guesses.",
    image: "/images/agents/nova.png",
    deliverables: [
      {
        icon: "\uD83D\uDDFA\uFE0F",
        title: "Content Landscape",
        description: "Competitive gap analysis",
      },
      {
        icon: "\uD83D\uDD0D",
        title: "Keyword Map",
        description: "SEO & buyer intent research",
      },
      {
        icon: "\uD83D\uDCA1",
        title: "10 Opportunities",
        description: "Content plays sized by demand",
      },
    ],
    diagnostic: {
      name: "Content Intelligence Diagnostic",
      duration: "2 weeks",
      price: "$1,800",
    },
    categories: ["Research", "Content"],
    hourlyRate: "$55",
    monthlyRetainer: "$4,000",
  },
  {
    id: "atlas",
    name: "Atlas",
    role: "Performance Analytics Agent",
    model: "Claude Opus",
    shortRole: "Reads the numbers. Tells us what\u2019s working.",
    description:
      "Atlas unifies your marketing and sales data, tells you where budget is actually working, and builds the dashboards your leadership needs to move faster.",
    image: "/images/agents/atlas.png",
    deliverables: [
      {
        icon: "\uD83D\uDCCA",
        title: "Attribution Audit",
        description: "Full-funnel visibility",
      },
      {
        icon: "\uD83D\uDCC8",
        title: "Unified Dashboard",
        description: "Leadership-ready performance view",
      },
      {
        icon: "\uD83D\uDCB0",
        title: "Budget Analysis",
        description: "Reallocation plan with ROI",
      },
    ],
    diagnostic: {
      name: "Marketing Performance Diagnostic",
      duration: "3 weeks",
      price: "$3,500",
    },
    categories: ["Analytics"],
    hourlyRate: "$90",
    monthlyRetainer: "$6,500",
  },
  {
    id: "sage",
    name: "Sage",
    role: "Content Repurposing Engine",
    model: "Claude Haiku",
    shortRole: "Repurposes everything. One piece becomes ten.",
    description:
      "Sage takes the content you\u2019ve already produced and multiplies its reach, turning webinars, podcasts, and posts into dozens of high-performing derivatives.",
    image: "/images/agents/sage.png",
    deliverables: [
      {
        icon: "\uD83D\uDCDA",
        title: "Content Audit",
        description: "Library scored by leverage potential",
      },
      {
        icon: "\u267B\uFE0F",
        title: "Repurposing Plan",
        description: "10 assets \u2192 50+ derivatives",
      },
      {
        icon: "\uD83D\uDDFA\uFE0F",
        title: "Distribution Map",
        description: "Every asset mapped to best channel",
      },
    ],
    diagnostic: {
      name: "Content Leverage Diagnostic",
      duration: "2 weeks",
      price: "$1,200",
    },
    categories: ["Content"],
    hourlyRate: "$35",
    monthlyRetainer: "$2,500",
  },
  {
    id: "lumen",
    name: "Lumen",
    role: "Video Director",
    model: "Claude Opus",
    shortRole: "Turns it into video.",
    description:
      "Lumen owns video end to end. Concept, script, shot list, edit direction, and post. He runs on Opus because video judgment compounds. The first three seconds decide whether anyone watches the next thirty, and that call cannot be patched in post. He thinks in story before tools. Hook, setup, payoff. Tension, then release. He writes scripts that read like a person talking, builds shot lists a junior editor can execute, and directs the cut so pace serves the story. Built for founder-led video, demo films, social shorts, and the production calls that decide whether a campaign breaks through or scrolls past.",
    image: "/images/agents/lumen.png",
    deliverables: [
      {
        icon: "\uD83C\uDFAC",
        title: "Video Concepts",
        description: "2-3 directions with a recommendation",
      },
      {
        icon: "\uD83D\uDCDD",
        title: "Script + Shot List",
        description: "Production-ready in your voice",
      },
      {
        icon: "\u2702\uFE0F",
        title: "Edit Direction",
        description: "Cut notes, pacing, captions, music",
      },
    ],
    diagnostic: {
      name: "Video Engine Diagnostic",
      duration: "3 weeks",
      price: "$2,500",
    },
    categories: ["Video"],
    hourlyRate: "$80",
    monthlyRetainer: "$5,800",
  },
];
