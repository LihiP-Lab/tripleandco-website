/**
 * AI Revenue Readiness Score, shared data model.
 *
 * 20 areas across 7 dimensions, each scored 0 / 1 / 3 / 5, so the raw total
 * IS the 0-100 score. No weighting in v1. Spec: growth/readiness-score-spec.md
 * in the Triple & Co. project.
 *
 * Used by the page, the interactive component, and the OG score card route.
 * Keep it framework-free so the edge/node OG route can import it cheaply.
 */

export const POINTS = [0, 1, 3, 5] as const;
export const MAX_SCORE = 100;

export type DimensionId =
  | "strategy"
  | "data"
  | "content"
  | "pipeline"
  | "architecture"
  | "supervision"
  | "revenue";

export type Host = {
  /** Agent id, or "lihi" for the human-in-the-loop dimension, or "cast". */
  id: string;
  name: string;
  role: string;
  /** Public image path, or null for the full-cast lineup. */
  image: string | null;
  /** What this host says when the dimension opens. First person, in voice. */
  line: string;
};

export type Dimension = {
  id: DimensionId;
  label: string;
  /** Short label for the radar and the dimension bars. */
  short: string;
  osStage: string;
  /** Lower number wins a tie when two areas score the same. */
  priority: number;
  maxPoints: number;
  host: Host;
  blurb: string;
};

export type Area = {
  id: string;
  dimension: DimensionId;
  title: string;
  question: string;
  /** Four maturity statements, ascending. Index maps through POINTS. */
  options: [string, string, string, string];
  action: {
    title: string;
    claim: string;
    lever: string;
    step: string;
  };
};

/* ------------------------------------------------------------------ */
/* Dimensions                                                          */
/* ------------------------------------------------------------------ */

/**
 * Host casting follows the pairing rule in `triple-agents`: match the topic to
 * the agent's ROLE, not to who looks good in the frame.
 *
 * Brand supervision has no agent on purpose. It is the Woman in the Loop layer,
 * so the host is Lihi. AI architecture has no single host either: the question
 * is whether you run specialist agents, so the whole cast shows up.
 *
 * Zara hosts the share step on the results screen (social ops is her job).
 */
export const DIMENSIONS: Dimension[] = [
  {
    id: "strategy",
    label: "Strategy",
    short: "Strategy",
    osStage: "Diagnose / Position",
    priority: 3,
    maxPoints: 15,
    blurb:
      "Who you sell to, why they pick you, and whether there is math under the number.",
    host: {
      id: "rex",
      name: "Rex",
      role: "Growth Campaign Strategist",
      image: "/images/agents/rex.png",
      line: "I brief the strategy here. Three questions on who you sell to, why they pick you, and whether there is real math under your target. Answer how things actually are, not how the deck says they are.",
    },
  },
  {
    id: "data",
    label: "Data",
    short: "Data",
    osStage: "Diagnose",
    priority: 4,
    maxPoints: 15,
    blurb:
      "Whether you can see the funnel, trust the CRM, and act on numbers weekly.",
    host: {
      id: "nova",
      name: "Nova",
      role: "Content Research Analyst",
      image: "/images/agents/nova.png",
      line: "My job is auditing what is really there. Three questions on your funnel, your CRM, and how often numbers actually change a decision. This is where most scores drop.",
    },
  },
  {
    id: "content",
    label: "Content",
    short: "Content",
    osStage: "Generate",
    priority: 7,
    maxPoints: 15,
    blurb:
      "Whether content is tied to pipeline, sounds like a human, and can be found by AI engines.",
    host: {
      id: "camille",
      name: "Camille",
      role: "Brand Voice Generator",
      image: "/images/agents/camille.png",
      line: "I write the brand, so this section is mine. Two questions from me, then Nova runs a live check on whether AI engines can see you at all.",
    },
  },
  {
    id: "pipeline",
    label: "Pipeline",
    short: "Pipeline",
    osStage: "Generate / Convert",
    priority: 2,
    maxPoints: 15,
    blurb:
      "Where pipeline comes from, how you reach cold buyers, and whether sales and marketing agree.",
    host: {
      id: "sage",
      name: "Sage",
      role: "Content Repurposing Engine",
      image: "/images/agents/sage.png",
      line: "I push things out across channels, so I get the reach questions. Where your pipeline comes from, how you reach buyers who have never heard of you, and whether sales and marketing are running the same play.",
    },
  },
  {
    id: "architecture",
    label: "AI architecture",
    short: "AI arch.",
    osStage: "Compound",
    priority: 5,
    maxPoints: 15,
    blurb:
      "Your AI stack, the rules around it, and what context it actually has.",
    host: {
      id: "cast",
      name: "The whole team",
      role: "Eight supervised agents",
      image: null,
      line: "All eight of us take this one, because it is about us. Do you have specialist agents with one job each, or a browser full of chat tabs? Lihi supervises either way.",
    },
  },
  {
    id: "supervision",
    label: "Brand supervision",
    short: "Supervision",
    osStage: "Every stage. The WIL layer",
    priority: 6,
    maxPoints: 10,
    blurb:
      "Whether AI output sounds like you, and who is accountable for what ships.",
    host: {
      id: "lihi",
      name: "Lihi Pinto",
      role: "Founder. The human in the loop",
      image: "/images/lihi.png",
      line: "This section is mine, not theirs. Human in the loop is not a compromise, it is the architecture. Two questions: does AI output sound like you, and who signs off before a buyer sees it.",
    },
  },
  {
    id: "revenue",
    label: "Revenue accountability",
    short: "Revenue",
    osStage: "Convert / Retain",
    priority: 1,
    maxPoints: 15,
    blurb:
      "What marketing is measured on, who owns the strategy, and what growth costs.",
    host: {
      id: "atlas",
      name: "Atlas",
      role: "Performance Analytics Agent",
      image: "/images/agents/atlas.png",
      line: "I read the numbers, so I close this out. Revenue is the only honest scoreboard. Three questions on what marketing is measured on, who owns it, and what growth actually costs you.",
    },
  },
];

export const DIMENSION_BY_ID: Record<DimensionId, Dimension> = Object.fromEntries(
  DIMENSIONS.map((d) => [d.id, d])
) as Record<DimensionId, Dimension>;

/* ------------------------------------------------------------------ */
/* Areas                                                               */
/* ------------------------------------------------------------------ */

export const AREAS: Area[] = [
  {
    id: "S1",
    dimension: "strategy",
    title: "ICP clarity",
    question: "Who is your ideal customer?",
    options: [
      "Anyone who pays.",
      "A rough target market description exists.",
      "A written ICP with firmographics and pains. Sales and marketing use the same one.",
      "A tiered ICP with named accounts, reviewed quarterly against closed-won data.",
    ],
    action: {
      title: "Rebuild your ICP from closed-won data, not from memory.",
      claim:
        "Vague targeting is the most expensive decision in your marketing, because every asset downstream inherits it.",
      lever:
        "Your last 20 closed-won deals already contain the pattern. Firmographics, trigger event, buying committee, and the pain in the buyer's own words.",
      step: "Export the last 20 closed-won accounts, tag each with employee count, industry, trigger, and champion title, then keep only the profiles that repeat three or more times.",
    },
  },
  {
    id: "S2",
    dimension: "strategy",
    title: "Positioning",
    question: "How differentiated is your story?",
    options: [
      "The positioning lives in the founder's head.",
      "A deck slide exists. The website says something else.",
      "Written positioning. Site, sales, and outbound tell one story.",
      "Positioning tested with real buyers, differentiated against named competitors, refreshed on a cadence.",
    ],
    action: {
      title: "Put one story on the site, the deck, and outbound, in that order.",
      claim:
        "When positioning lives in the founder's head, the market hears three different companies.",
      lever:
        "One written positioning statement (who it is for, what it replaces, why you win) that every surface inherits.",
      step: "Write the one-paragraph version this week, then read your homepage hero and your last outbound email against it. Fix whichever one contradicts it.",
    },
  },
  {
    id: "S3",
    dimension: "strategy",
    title: "Revenue model",
    question: "Is there a bottom-up path to the number?",
    options: [
      "Targets are aspirational. No model behind them.",
      "An annual target exists, but no bottom-up math.",
      "A bottom-up model: pipeline needed, conversion rates, ACV, cycle length.",
      "The model is reviewed monthly and marketing carries a sourced-pipeline number inside it.",
    ],
    action: {
      title: "Build the bottom-up model before you set next quarter's target.",
      claim:
        "A target with no math behind it is a wish, and marketing cannot be held to a wish.",
      lever:
        "Work backward from revenue. ACV, win rate, opportunity-to-close, meeting-to-opportunity, and the pipeline coverage number that falls out of them.",
      step: "Build the five-row sheet. Revenue needed, ACV, deals needed, win rate, pipeline required. Then compare the last row with what you actually created last quarter.",
    },
  },
  {
    id: "D1",
    dimension: "data",
    title: "Funnel instrumentation",
    question: "Can you see your funnel?",
    options: [
      "We cannot tell where leads come from.",
      "Analytics is installed. Nobody looks at it.",
      "Every stage is tracked in the CRM with sources attributed.",
      "A full-funnel dashboard with cost per stage, board-ready.",
    ],
    action: {
      title: "Instrument the funnel before you spend another dollar on demand.",
      claim:
        "If you cannot attribute a stage, you cannot defend the budget that feeds it.",
      lever:
        "Source and stage on every record, captured at creation rather than backfilled before a board meeting.",
      step: "Pick the five stages that matter, define each in one sentence, and make source a required field on lead creation.",
    },
  },
  {
    id: "D2",
    dimension: "data",
    title: "CRM discipline",
    question: "What state is your CRM in?",
    options: [
      "No CRM, or a graveyard.",
      "Sales uses it. Marketing data lives somewhere else.",
      "One CRM, defined stages, marketing and sales share it.",
      "Enforced hygiene: required fields, documented stage definitions, monthly audits.",
    ],
    action: {
      title: "Make one CRM the system of record, then enforce it.",
      claim:
        "Two sources of truth means zero sources of truth, and every forecast conversation turns into a debate about the data.",
      lever:
        "Required fields, written stage definitions, and a monthly hygiene audit with a named owner.",
      step: "Write the stage definitions on one page, get sales and marketing to sign off, then run the first audit against records created in the last 30 days.",
    },
  },
  {
    id: "D3",
    dimension: "data",
    title: "Reporting cadence",
    question: "How often do numbers drive decisions?",
    options: [
      "Reporting happens right before board meetings.",
      "Monthly channel metrics: traffic, followers, likes.",
      "Monthly revenue-tied reporting: pipeline created, CAC, velocity.",
      "Weekly cadence, with budget shifts and decisions documented from the data.",
    ],
    action: {
      title: "Move reporting from board prep to a weekly operating rhythm.",
      claim:
        "Numbers you look at quarterly are history. Numbers you look at weekly are decisions.",
      lever:
        "A standing 30-minute review of pipeline created, CAC, and velocity, with the resulting budget change written in the same doc.",
      step: "Book the recurring slot, build the one-page view, and write down the first decision it drives.",
    },
  },
  {
    id: "C1",
    dimension: "content",
    title: "Content-to-pipeline connection",
    question: "What is content for?",
    options: [
      "We publish when inspiration strikes.",
      "Consistent publishing. No idea what it drives.",
      "Content mapped to funnel stages and ICP pains.",
      "Content measured on pipeline influenced, not impressions.",
    ],
    action: {
      title: "Map every live content asset to a funnel stage and an ICP pain.",
      claim:
        "Publishing consistently is not a strategy. Until you pull influenced pipeline per asset, you cannot tell which pieces are working and which are habit.",
      lever:
        "A single sheet with asset, stage, pain, and pipeline influenced. The blanks tell you what to kill and what to build.",
      step: "List your last 20 published pieces, tag each with stage and pain, then pull influenced pipeline for each. Kill the bottom half.",
    },
  },
  {
    id: "C2",
    dimension: "content",
    title: "Founder and expert voice",
    question: "Does your expertise show?",
    options: [
      "Generic content anyone could have written.",
      "An occasional founder post when there is time.",
      "A defined voice, extracted and documented, consistent across channels.",
      "Founder authority compounds: clear POV, a recurring series, inbound cites you.",
    ],
    action: {
      title: "Extract the founder voice once, then apply it everywhere.",
      claim:
        "Generic content is invisible to buyers and to AI engines. Your expertise is the one thing a competitor cannot copy.",
      lever:
        "A documented voice guide (beliefs, phrases, banned words, worked examples) that every draft is written against, human or AI.",
      step: "Record 30 minutes of the founder answering the five questions buyers actually ask, transcribe it, and pull the POV and the phrases straight out of the transcript.",
    },
  },
  {
    id: "C3",
    dimension: "content",
    title: "AI search visibility",
    question: "Can AI engines see you?",
    // Fallback ladder, used when no domain is given or the live check fails.
    options: [
      "We have never checked.",
      "We have searched for ourselves in ChatGPT once.",
      "We track how AI engines describe us and have fixed our entity data.",
      "We are cited by name in AI answers for our category, and we monitor it on a cadence.",
    ],
    action: {
      title: "Fix the entity layer before you write another blog post.",
      claim:
        "Buyers now ask AI engines for a shortlist. If the engine cannot resolve who you are, you are not on the list, no matter how much you publish.",
      lever:
        "Consistent entity data. One company description everywhere, structured schema on the site, and third-party sources that describe you the same way.",
      step: "Run your domain through the AI Visibility Checker, then fix the lowest-scoring dimension it returns before adding new content.",
    },
  },
  {
    id: "P1",
    dimension: "pipeline",
    title: "Demand mix",
    question: "Where does pipeline come from?",
    options: [
      "One channel, usually the founder's network.",
      "Sporadic experiments. Nothing repeatable yet.",
      "Two to three channels with known CAC. At least one repeatable.",
      "A diversified mix. Budget moves monthly based on cost per opportunity.",
    ],
    action: {
      title: "Get a second repeatable channel before the first one saturates.",
      claim:
        "Single-channel pipeline is a single point of failure, and founder-network pipeline stops scaling exactly when you need it most.",
      lever:
        "Known cost per opportunity by channel, so budget moves monthly toward the cheapest source rather than the loudest one.",
      step: "Calculate cost per opportunity for every channel you ran last quarter. Fund the cheapest one further, cut the most expensive.",
    },
  },
  {
    id: "P2",
    dimension: "pipeline",
    title: "Outbound motion",
    question: "How do you reach buyers who do not know you?",
    options: [
      "No outbound.",
      "Generic blasts to purchased lists.",
      "Researched, personalized cadences to ICP tiers.",
      "Outbound plus intent signals plus marketing air cover, measured on meetings booked.",
    ],
    action: {
      title: "Replace list blasts with researched cadences to tiered accounts.",
      claim:
        "Generic outbound teaches your ICP to ignore your domain, and the deliverability damage outlasts the campaign.",
      lever:
        "Tier 1 accounts get research-led personalization, tier 2 gets segment-level relevance, and both are measured on meetings booked rather than emails sent.",
      step: "Pick 50 tier 1 accounts, write one researched opener per account, and run it for four weeks against your current template as the control.",
    },
  },
  {
    id: "P3",
    dimension: "pipeline",
    title: "Sales and marketing alignment",
    question: "One revenue team, or two departments?",
    options: [
      "They blame each other.",
      "A handoff exists, but definitions differ. What counts as a lead?",
      "Shared definitions, an SLA on follow-up, one pipeline review.",
      "One revenue team, one number, shared accountability for pipeline.",
    ],
    action: {
      title: "Agree on what counts as a lead, in writing, this week.",
      claim:
        "Most handoff friction is a definitions problem wearing a personality problem's clothes.",
      lever:
        "One shared definition, one follow-up SLA in hours, and one pipeline review that both teams sit in.",
      step: "Get both leads in a room, define the qualified lead in a single sentence, set the SLA, then put the joint review on the calendar.",
    },
  },
  {
    id: "A1",
    dimension: "architecture",
    title: "Tooling maturity",
    question: "What does your AI stack look like?",
    options: [
      "ChatGPT tabs and improvisation.",
      "Individual tools. No shared prompts or standards.",
      "A defined stack with documented prompts and workflows per job.",
      "Specialist agents, each owning one job, integrated with your systems.",
    ],
    action: {
      title:
        "Give each recurring job a named specialist agent instead of a shared chat tab.",
      claim:
        "Specialist agents beat generalist copilots. A narrow agent with one job and full context produces work you can ship. A general chatbot produces drafts you rewrite.",
      lever:
        "One agent per job, each carrying your brand, ICP, and product context, each with a named human reviewer.",
      step: "List the five marketing jobs you repeat every week, build the context pack for the highest-volume one, and stand that agent up first.",
    },
  },
  {
    id: "A2",
    dimension: "architecture",
    title: "Operating model",
    question: "How does AI fit how the team works?",
    options: [
      "AI is banned, feared, or ignored.",
      "Encouraged but unmanaged. Quality varies wildly.",
      "Clear rules for where AI drafts and where humans decide.",
      "Brief, Run, Deliver loops. Capacity measurably up without added headcount.",
    ],
    action: {
      title: "Write down where AI drafts and where humans decide.",
      claim:
        "Tools without operating models fail. Unmanaged AI use produces wildly variable quality with nobody accountable for it.",
      lever:
        "Brief, Run, Deliver. A written brief in, an agent run, a named human on the deliver gate.",
      step: "Take your highest-volume deliverable, write its brief template, and name the person who signs off before it reaches a buyer.",
    },
  },
  {
    id: "A3",
    dimension: "architecture",
    title: "Context and data feeding AI",
    question: "What does your AI actually know?",
    options: [
      "Generic knowledge only.",
      "Ad-hoc pasting of context into chats.",
      "Brand, ICP, and product context packaged once and reused everywhere.",
      "Live data from the CRM, calls, and analytics feeds the AI layer safely.",
    ],
    action: {
      title: "Package your context once instead of pasting it into every chat.",
      claim:
        "The gap between AI output that ships and AI output you rewrite is almost always context, not model.",
      lever:
        "A reusable context pack (positioning, ICP, product, voice rules, proof points) that every agent loads by default.",
      step: "Write the five-page context pack this week, then run your next three AI tasks with it loaded and compare the drafts against your last three without it.",
    },
  },
  {
    id: "B1",
    dimension: "supervision",
    title: "Voice control",
    question: "Does AI output sound like you?",
    options: [
      "AI output ships unreviewed and sounds like everyone else's.",
      "Spot checks when someone notices.",
      "A documented voice guide applied to all AI output.",
      "An extracted voice enforced systematically. AI-assisted is indistinguishable from founder-written.",
    ],
    action: {
      title: "Enforce the voice guide systematically, not by spot check.",
      claim:
        "You are never handed raw AI output. The moment unreviewed AI copy reaches a buyer, it sounds exactly like your competitor's unreviewed AI copy.",
      lever:
        "An extracted voice guide with banned vocabulary and worked examples, applied to every draft before review rather than during it.",
      step: "Pull your last 10 published pieces and score each against the voice guide. The failures that repeat become the banned list.",
    },
  },
  {
    id: "B2",
    dimension: "supervision",
    title: "The review gate",
    question: "Who is accountable for what ships?",
    options: [
      "Nobody owns what ships.",
      "The founder bottleneck reviews everything, slowly.",
      "A named senior owner reviews every external deliverable.",
      "Supervised end to end: named accountable human, review SLA, zero raw AI output reaching buyers.",
    ],
    action: {
      title: "Name one accountable human per deliverable type.",
      claim:
        "Human in the loop is not a compromise, it is the architecture. With no named owner, either nothing ships or the wrong thing ships.",
      lever:
        "A review SLA per deliverable type, fast enough that people stop routing around the gate.",
      step: "List your deliverable types, name the reviewer for each, set the SLA in hours, then measure how often it is actually met.",
    },
  },
  {
    id: "R1",
    dimension: "revenue",
    title: "Marketing's number",
    question: "What is marketing measured on?",
    options: [
      "Activity: posts, events, newsletters sent.",
      "MQL targets disconnected from revenue.",
      "Marketing owns a sourced-pipeline target.",
      "Marketing owns pipeline and revenue influence, with CAC payback tracked.",
    ],
    action: {
      title: "Give marketing a sourced-pipeline target, not an MQL target.",
      claim:
        "Revenue is the only honest scoreboard. MQL targets get hit while pipeline stays flat, and everyone in the room knows it.",
      lever:
        "Marketing owns a quarterly sourced-pipeline number inside the same revenue model sales is working from.",
      step: "Take the pipeline coverage number from your revenue model, split it by source, and assign marketing's share for next quarter.",
    },
  },
  {
    id: "R2",
    dimension: "revenue",
    title: "Senior ownership",
    question: "Who owns marketing strategy?",
    options: [
      "The founder, between everything else.",
      "A junior marketer executes without strategy.",
      "A senior marketing leader, in-house or fractional, owns the strategy.",
      "A CMO-level owner accountable to the board for the number.",
    ],
    action: {
      title:
        "Put a senior owner on marketing strategy before you hire another executor.",
      claim:
        "A junior marketer with no strategy produces activity. A founder doing it between everything else produces stops and starts.",
      lever:
        "A CMO-level owner accountable for the number, in-house or fractional, with execution capacity underneath them.",
      step: "Write the job to be done for the next two quarters, then decide honestly whether the founder has 15 hours a week for it.",
    },
  },
  {
    id: "R3",
    dimension: "revenue",
    title: "Cost efficiency",
    question: "Do you know what growth costs?",
    options: [
      "No idea what marketing costs all-in.",
      "The budget is known. The return is not.",
      "CAC and payback tracked by channel.",
      "Fragmented spend consolidated, cost per pipeline dollar trending down.",
    ],
    action: {
      title: "Calculate all-in CAC and payback by channel this quarter.",
      claim:
        "Fragmented agency and freelancer spend hides the real cost of growth until the board asks for it.",
      lever:
        "One view of total marketing cost (people, tools, agencies, media) divided by opportunities and by closed-won, per channel.",
      step: "Add up every marketing line item for last quarter, retainers and tools included, then divide by opportunities created. That number is your baseline.",
    },
  },
];

export const AREA_IDS = AREAS.map((a) => a.id);

export function areasFor(dimension: DimensionId): Area[] {
  return AREAS.filter((a) => a.dimension === dimension);
}

/* ------------------------------------------------------------------ */
/* Tiers                                                               */
/* ------------------------------------------------------------------ */

export type Tier = {
  name: string;
  min: number;
  max: number;
  line: string;
  /** Hex used on the OG card and the score dial. Never on small text. */
  color: string;
};

export const TIERS: Tier[] = [
  {
    name: "Spectator",
    min: 0,
    max: 39,
    line: "You have people working hard with no system behind them. Every area here is fixable, and the three below are where the compounding starts.",
    color: "#FE3465",
  },
  {
    name: "Experimenter",
    min: 40,
    max: 59,
    line: "The pieces exist. They are not connected yet, so results depend on who happens to be paying attention that week.",
    color: "#E0A100",
  },
  {
    name: "Operator",
    min: 60,
    max: 79,
    line: "You run a real revenue operation. The gap now is the difference between doing something well and managing it.",
    color: "#1F9D6B",
  },
  {
    name: "Compounder",
    min: 80,
    max: 100,
    line: "Your revenue operation compounds. The remaining gaps are narrow, and worth naming before they widen.",
    color: "#1F9D6B",
  },
];

export function tierFor(score: number): Tier {
  return TIERS.find((t) => score >= t.min && score <= t.max) ?? TIERS[0];
}

/** The checker returns 0 to 100. Map it to C3 points at the same boundaries. */
export function checkerScoreToPoints(checkerScore: number): 0 | 1 | 3 | 5 {
  if (checkerScore >= 80) return 5;
  if (checkerScore >= 60) return 3;
  if (checkerScore >= 40) return 1;
  return 0;
}

/** Inverse, for rendering a measured C3 back onto the option ladder. */
export function pointsToOptionIndex(points: number): number {
  const i = POINTS.indexOf(points as (typeof POINTS)[number]);
  return i === -1 ? 0 : i;
}

/* ------------------------------------------------------------------ */
/* Scoring                                                             */
/* ------------------------------------------------------------------ */

/** answers[areaId] = option index 0..3 */
export type Answers = Record<string, number>;

export function scoreOf(answers: Answers): number {
  return AREAS.reduce((sum, a) => {
    const idx = answers[a.id];
    return sum + (idx == null ? 0 : POINTS[idx] ?? 0);
  }, 0);
}

export function dimensionScore(
  answers: Answers,
  dimension: DimensionId
): { points: number; max: number; pct: number } {
  const areas = areasFor(dimension);
  const points = areas.reduce((sum, a) => {
    const idx = answers[a.id];
    return sum + (idx == null ? 0 : POINTS[idx] ?? 0);
  }, 0);
  const max = areas.length * 5;
  return { points, max, pct: max === 0 ? 0 : points / max };
}

/**
 * The three recommended actions: the three lowest-scoring areas.
 * Ties break on the fixed dimension priority from the spec
 * (Revenue accountability > Pipeline > Strategy > Data > AI architecture >
 * Brand supervision > Content), then on the area's own order.
 */
export function topThreeActions(answers: Answers): Area[] {
  return [...AREAS]
    .map((area, order) => ({ area, order }))
    .sort((a, b) => {
      const pa = POINTS[answers[a.area.id] ?? 0] ?? 0;
      const pb = POINTS[answers[b.area.id] ?? 0] ?? 0;
      if (pa !== pb) return pa - pb;
      const da = DIMENSION_BY_ID[a.area.dimension].priority;
      const db = DIMENSION_BY_ID[b.area.dimension].priority;
      if (da !== db) return da - db;
      return a.order - b.order;
    })
    .slice(0, 3)
    .map((x) => x.area);
}

/* ------------------------------------------------------------------ */
/* URL encoding for share links                                        */
/* ------------------------------------------------------------------ */

/** 20 characters, one per area in AREAS order, each "0".."3". */
export function encodeAnswers(answers: Answers): string {
  return AREAS.map((a) => {
    const idx = answers[a.id];
    return idx == null ? "0" : String(Math.min(3, Math.max(0, idx)));
  }).join("");
}

export function decodeAnswers(code: string): Answers | null {
  if (!code || code.length !== AREAS.length || !/^[0-3]+$/.test(code)) return null;
  const out: Answers = {};
  AREAS.forEach((a, i) => {
    out[a.id] = Number(code[i]);
  });
  return out;
}
