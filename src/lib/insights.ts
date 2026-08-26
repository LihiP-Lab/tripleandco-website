// ---------------------------------------------------------------------------
// INSIGHTS CONTENT ENGINE
// Single source of truth for the Insights hub, track pages, and article
// cross-promotion. Article bodies live in their own route files; every
// listing surface reads from this registry so cards, filters, categories,
// and structured data never drift.
// ---------------------------------------------------------------------------

export type InsightCategory =
  | "CMO & CRO as a Service"
  | "Fractional Leadership"
  | "Native AI Marketing";

export type ToolHookId = "score" | "visibility" | "diagnostic";

export type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  date: string;
  dateISO: string;
  readTime: string;
  pillar: boolean;
  featured: boolean;
  hook: ToolHookId;
};

export type CategoryAgent = {
  img: string;
  name: string;
  role: string;
};

export const CATEGORY_AGENTS: Record<InsightCategory, CategoryAgent> = {
  "CMO & CRO as a Service": {
    img: "/images/agents/rex.png",
    name: "Rex",
    role: "Growth Campaign Strategist",
  },
  "Fractional Leadership": {
    img: "/images/agents/nova.png",
    name: "Nova",
    role: "Content Research Analyst",
  },
  "Native AI Marketing": {
    img: "/images/agents/camille.png",
    name: "Camille",
    role: "Brand Voice Generator",
  },
};

export const CATEGORY_HREFS: Record<InsightCategory, string> = {
  "CMO & CRO as a Service": "/insights/revenue",
  "Fractional Leadership": "/insights/strategy#fractional-leadership",
  "Native AI Marketing": "/insights/strategy#native-ai",
};

export const ARTICLES: InsightArticle[] = [
  {
    slug: "outsourced-cmo-israel-cost",
    title:
      "Outsourced CMO in Israel: What It Really Costs in 2026 (and What You Get)",
    excerpt:
      "Full-time hire, outsourced marketing manager, or CMO as a Service? Real Israeli market numbers in shekels, what each tier actually delivers, and how to choose for your stage.",
    category: "CMO & CRO as a Service",
    date: "June 2026",
    dateISO: "2026-06-01",
    readTime: "12 min read",
    pillar: true,
    featured: true,
    hook: "diagnostic",
  },
  {
    slug: "what-is-cmo-as-a-service",
    title: "What Is CMO as a Service? The Complete Guide for B2B Founders",
    excerpt:
      "Not a fractional hire. Not an agency retainer. CMO as a Service is a full marketing function: strategy, AI execution, and senior oversight in one engagement. Here is everything you need to know.",
    category: "CMO & CRO as a Service",
    date: "June 2026",
    dateISO: "2026-06-01",
    readTime: "10 min read",
    pillar: true,
    featured: false,
    hook: "score",
  },
  {
    slug: "native-ai-cmo-marketing-for-b2b-in-the-ai-era",
    title: "Why Your B2B Company Needs a Native AI CMO, Not Just AI Tools",
    excerpt:
      "Every B2B marketing team is using AI. Pipeline quality has not improved proportionally. The problem is not the tools. It is the architecture, and here is what native AI marketing actually looks like.",
    category: "Native AI Marketing",
    date: "June 2026",
    dateISO: "2026-06-01",
    readTime: "9 min read",
    pillar: true,
    featured: false,
    hook: "visibility",
  },
];

export function articleHref(article: InsightArticle): string {
  return `/insights/${article.slug}`;
}

export function articlesByCategory(
  category: InsightCategory
): InsightArticle[] {
  return ARTICLES.filter((a) => a.category === category);
}

export const FEATURED_ARTICLE = ARTICLES.find((a) => a.featured);

// ---------------------------------------------------------------------------
// TRACKS: the three editorial tracks, each hosted by an agent
// ---------------------------------------------------------------------------
export type InsightTrack = {
  category: InsightCategory;
  tagline: string;
  description: string;
  href: string;
};

export const TRACKS: InsightTrack[] = [
  {
    category: "CMO & CRO as a Service",
    tagline: "The New Execution Model",
    description:
      "Why elite B2B companies are replacing legacy agency retainers with CMO as a Service and CRO as a Service, and the AI-native execution layer that makes it work at scale.",
    href: "/insights/revenue",
  },
  {
    category: "Fractional Leadership",
    tagline: "Hire for Leverage, Not Headcount",
    description:
      "A decision framework for founders and CEOs: when a Fractional CMO or Fractional CRO outperforms a full-time hire, how to structure the engagement, and the signals that tell you it is time to bring one in.",
    href: "/insights/strategy#fractional-leadership",
  },
  {
    category: "Native AI Marketing",
    tagline: "Agents, Not Just Tools",
    description:
      "How to architect a marketing function for B2B in the AI era: supervised AI agents, human-in-the-loop oversight, and the operating model that lets a lean team execute like an enterprise.",
    href: "/insights/strategy#native-ai",
  },
];

// ---------------------------------------------------------------------------
// TOOL HOOKS: "do it, don't just read it" bridges from content to product
// ---------------------------------------------------------------------------
export type ToolHook = {
  id: ToolHookId;
  eyebrow: string;
  title: string;
  blurb: string;
  cta: string;
  href: string;
  meta: string;
};

export const TOOL_HOOKS: Record<ToolHookId, ToolHook> = {
  score: {
    id: "score",
    eyebrow: "AI Revenue Readiness Score",
    title: "How ready is your revenue operation?",
    blurb:
      "20 questions, 7 dimensions, a 0 to 100 score, and the exact gaps holding your pipeline back.",
    cta: "Get My Score",
    href: "/ai-revenue-readiness-score",
    meta: "Free · 3 minutes · no email needed",
  },
  visibility: {
    id: "visibility",
    eyebrow: "AI Visibility Checker",
    title: "Can AI models actually see your site?",
    blurb:
      "A live audit of your robots.txt, structured data, and llms.txt, scored 0 to 100 for AI-era discoverability.",
    cta: "Check My Visibility",
    href: "/ai-visibility-checker",
    meta: "Free · instant · runs on your live site",
  },
  diagnostic: {
    id: "diagnostic",
    eyebrow: "Revenue Diagnostic",
    title: "Get a concrete plan for your stage",
    blurb:
      "A free 45-minute call with Lihi: your funnel, your gaps, and the highest-leverage fix, mapped live.",
    cta: "Book a Diagnostic Call",
    href: "/revenue-diagnostic#book",
    meta: "Free · 45 minutes · with a senior operator",
  },
};
