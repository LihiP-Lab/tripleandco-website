// ---------------------------------------------------------------------------
// DEMO CALL INTELLIGENCE — data model
// Gong-style analysis of Dark Titan (Develeap) demo calls.
// Source: full Hebrew call transcripts; all quotes verbatim.
// Talk-time figures are estimates from transcript word/turn counts.
// Internal — contains client names and commercial terms.
// ---------------------------------------------------------------------------

export type Temp = "hot" | "warm" | "risk";

export interface ScorecardLine {
  label: string;
  value: number;
  max: number;
}

export interface BilingualQuote {
  he: string;
  en: string;
}

export interface Call {
  id: string;
  rank: number;
  account: string;
  attendees: string;
  duration: string;
  durationMinutes: number;
  score: number;
  /** Dark Titan team talk share, %. */
  dtTalkShare: number;
  discoveryQuestions: number;
  prospectQuestions: number;
  nextStep: string;
  hasDatedNextStep: boolean;
  temp: Temp;
  tempLabel: string;
  summary: string;
  momentOfCall: BilingualQuote;
  scorecard: ScorecardLine[];
  risks: string[];
  intelligence?: string[];
}

export interface Kpi {
  value: string;
  label: string;
  note: string;
  tone: "flag" | "ok" | "neutral";
}

export interface PipelineRow {
  account: string;
  score: number;
  temp: Temp;
  tempLabel: string;
  why: string;
  nextAction: string;
}

export interface KeyFinding {
  title: string;
  body: string;
}

export type HeatCell = "good" | "flag" | "neutral";

export interface ObjectionRow {
  objection: string;
  frequency: string;
  /** How intense the frequency is, 1 (rare) .. 5 (every call). */
  heat: 1 | 2 | 3 | 4 | 5;
  cells: { account: string; note: string; tone: HeatCell }[];
  handled: string;
}

export interface ProductGapRow {
  request: string;
  calls: string;
  detail: string;
}

export interface CompetitorRow {
  name: string;
  mentions: number;
  context: string;
  assessment: string;
}

export interface ClaimRow {
  claim: string;
  values: { account: string; value: string; tone: HeatCell }[];
  verdict: string;
  verdictTone: HeatCell;
}

export interface CoachingRow {
  rep: string;
  role: string;
  keep: string;
  change: string;
}

export interface TeamAction {
  title: string;
  body: string;
}

// ---------------------------------------------------------------------------
// META
// ---------------------------------------------------------------------------

export const meta = {
  client: "Dark Titan (Develeap)",
  callsAnalyzed: 5,
  callsTotal: 13,
  generated: "15 Jul 2026",
  accounts: ["Sisense", "Exaware", "Verbit", "Xwinsys", "mPrest"],
  greatCallBenchmark: 46,
  maxAcceptableTalkShare: 55,
} as const;

// ---------------------------------------------------------------------------
// OVERVIEW
// ---------------------------------------------------------------------------

export const kpis: Kpi[] = [
  { value: "58.8", label: "Avg call score /100", note: "Range 49–63", tone: "neutral" },
  { value: "~62%", label: "Avg DT talk share", note: "Benchmark ≤55% · Great ≤46%", tone: "flag" },
  { value: "4.4", label: "Avg rep discovery Qs / call", note: "Benchmark 11–14", tone: "flag" },
  { value: "~17", label: "Avg prospect Qs / call", note: "Very high engagement", tone: "ok" },
  { value: "1/5", label: "Calls with dated, owned next step", note: "Target: 5/5", tone: "flag" },
  { value: "4/5", label: "Calls with AV / logistics failures", note: "Links, screen-share, disconnects", tone: "flag" },
];

export const pipeline: PipelineRow[] = [
  {
    account: "Xwinsys",
    score: 63,
    temp: "hot",
    tempLabel: "Warm-Hot",
    why: "In-room advocate (Shahaf), clear POC (GitHub migration + CI), real pain. Gated on OpenAI support + WPF feasibility + Japanese-parent approval.",
    nextAction: "Confirm Codex/OpenAI ship date in writing, run the WPF feasibility test, send pricing within 48h as promised.",
  },
  {
    account: "Exaware",
    score: 62,
    temp: "warm",
    tempLabel: "Warm",
    why: "3 engaged stakeholders, prospect-named follow-up (Tuesday), but active bake-off vs 2 vendors and muddled pricing story.",
    nextAction: "Tuesday follow-up with a clean 1-page pricing model + POC scope incl. hardware-in-loop testing.",
  },
  {
    account: "mPrest",
    score: 61,
    temp: "warm",
    tempLabel: "Warm",
    why: "Best ICP fit (defense, air-gap, own GPUs). Gatekeeper contact only; agent-security question left unanswered.",
    nextAction: "Send defense one-pager + written security-governance answer; push for CTO meeting.",
  },
  {
    account: "Sisense",
    score: 59,
    temp: "warm",
    tempLabel: "Warm",
    why: "Engaged champion-candidate (Guy), legacy-context pain matches the graph story. Undated follow-up at mercy of miluim/vacations + slow security.",
    nextAction: "WhatsApp Sunday as agreed → book dated meeting with team lead + principal; bring security pre-pack.",
  },
  {
    account: "Verbit",
    score: 49,
    temp: "risk",
    tempLabel: "At-risk",
    why: 'Explicit price/value rejection ("לא בליגה שלנו"), maturity concern, no champion, weakest next step.',
    nextAction: "Re-engage on THEIR pain (cost of maintaining internal skills program) with SaaS-relevant proof; drop defense evidence.",
  },
];

export const keyFindings: KeyFinding[] = [
  {
    title: "The same objection killed momentum in all 5 calls — and it's still unanswered.",
    body: '"Why not just Copilot / Claude Code / our own skills?" appeared in every single demo. Only once (mPrest) was it handled well. The team needs one rehearsed, quotable answer.',
  },
  {
    title: "Discovery is nearly absent.",
    body: "Average 4.4 rep questions per call vs 11–14 benchmark. In Verbit, the first real discovery question came at minute 40 — after the pricing rejection. Demos are running blind.",
  },
  {
    title: "The pricing story changes every call.",
    body: '$500/seat design partner, BYO tokens — but seat semantics ("1 dev" vs "2–3 devs"), POC pricing, token-reselling discounts, and the future consumption model were described differently (or improvised) in each conversation. Verbit rejected it outright.',
  },
  {
    title: "Over-disclosure is a pattern, not an incident.",
    body: 'Fundraising dependence (3 calls), client names + internals (Akamai, Cybus, Kicklock, Phillips, Redis, Rafael), "replacing the Indian NOC" phrasing, product age (3–4 months), POC staffing costs. Each one hands the buyer leverage or doubt.',
  },
  {
    title: "Capability claims drift between calls.",
    body: 'Codex: "already supported" (Exaware) vs "final development" (Xwinsys). Copilot: "2nd week of July" / "next week" / "not yet". Akamai cost: $27 vs $30+. Prospects compare notes; inconsistency reads as unreliability.',
  },
];

// ---------------------------------------------------------------------------
// CALLS
// ---------------------------------------------------------------------------

export const calls: Call[] = [
  {
    id: "sisense",
    rank: 1,
    account: "Sisense",
    attendees: "Guy Feller (Cloud Platform Mgr) · solo",
    duration: "36m",
    durationMinutes: 36,
    score: 59,
    dtTalkShare: 60,
    discoveryQuestions: 5,
    prospectQuestions: 18,
    nextStep: "Undated follow-up",
    hasDatedNextStep: false,
    temp: "warm",
    tempLabel: "Warm",
    summary:
      'Solo 30-min slot; Kobi delivered a ~12-minute pitch (40% of the call) with zero discovery. Guy engaged hard in the second half — static-vs-runtime mapping, data residency, cost-per-feature (exposed a dashboard gap) — then demoed Sisense\'s own internal "System Observatory," revealing both internal-build competition and an integration opportunity. Pain self-declared: 15-year legacy codebase context. Next step soft: WhatsApp coordination toward a meeting with team lead + principal, at the mercy of miluim, vacations and slow security/legal.',
    momentOfCall: {
      he: '"חוץ מה-view הנהדר שיש לכם... במה זה שונה בהרבה מ-skill שיש לנו היום שכתוב ב-Claude?"',
      en: '"Besides the great view — how is this much different from a Claude skill we already have today?" — answered with "let\'s look at the system"; never actually answered.',
    },
    scorecard: [
      { label: "Discovery", value: 6, max: 20 },
      { label: "Demo relevance", value: 11, max: 20 },
      { label: "Objections", value: 13, max: 20 },
      { label: "Engagement", value: 12, max: 15 },
      { label: "Next step", value: 9, max: 15 },
      { label: "Positioning", value: 8, max: 10 },
    ],
    risks: [
      "Differentiation vs internal Claude skill — dodged.",
      "Cost-per-feature not visible in dashboard — product gap exposed live.",
      'Can\'t use SaaS ("כל הקוד שלי פתוח") — needs on-prem + security/legal cycle.',
    ],
    intelligence: [
      "Sisense built an internal graph system (architecture/security/cost per API call, MD files, OpenCost) — potential grounding-data integration for DT agents.",
      "Stack: GitLab CI + Jenkins, CodeRabbit, Cursor/Claude, multi-repo, ~1,000 AWS deployments.",
    ],
  },
  {
    id: "exaware",
    rank: 2,
    account: "Exaware",
    attendees: "Ron Auster, David Zelig, Yossi Fridman",
    duration: "64m",
    durationMinutes: 64,
    score: 62,
    dtTalkShare: 65,
    discoveryQuestions: 6,
    prospectQuestions: 25,
    nextStep: "Prospect named Tuesday",
    hasDatedNextStep: false,
    temp: "warm",
    tempLabel: "Warm",
    summary:
      'Three stakeholders, on-prem embedded-networking shop (Copilot, no cloud, Jira for bugs, hardware-in-the-loop testing). Strong engagement (~25 questions). Maturity objection ("קופצים מעל הפופיק") handled well via Cybus/Phillips analogies; hardware-testing unknown honestly converted into POC scope. Weaknesses: pricing left muddled ("אנחנו לגמרי לא יודעים"), Saar predicted Claude Code might ship the same thing in two months (self-undercut), Google-Drive binary delivery for on-prem updates. Active bake-off vs 2 other vendors.',
    momentOfCall: {
      he: '"אני חושב שאנחנו מדברים בשני מישורים שונים... השאלה של יוסי מכוונת לדבר אחד ואני מרגיש שהתשובות מדברות לדבר קצת שני."',
      en: "Ron had to referee: the answers weren't addressing the question being asked — a listening failure.",
    },
    scorecard: [
      { label: "Discovery", value: 9, max: 20 },
      { label: "Demo relevance", value: 12, max: 20 },
      { label: "Objections", value: 12, max: 20 },
      { label: "Engagement", value: 13, max: 15 },
      { label: "Next step", value: 10, max: 15 },
      { label: "Positioning", value: 6, max: 10 },
    ],
    risks: [
      'Copilot support promised "second week of July" — roadmap risk.',
      "Hardware/traffic-generator test integration — unproven, now POC scope.",
      '$500/seat semantics unclear; consumption model "we don\'t know yet."',
      'Sensitive: "replacing the Indian NOC (10 people)" phrasing; fundraising disclosed.',
    ],
  },
  {
    id: "verbit",
    rank: 3,
    account: "Verbit",
    attendees: "Hila Geva, Daniel",
    duration: "55m",
    durationMinutes: 55,
    score: 49,
    dtTalkShare: 70,
    discoveryQuestions: 2,
    prospectQuestions: 16,
    nextStep: 'None (prospect: "1–2 weeks")',
    hasDatedNextStep: false,
    temp: "risk",
    tempLabel: "At-risk",
    summary:
      "Chaotic open (two stale meeting links, ~4.5 min lost). Verbit already runs an internal AI-methodology/skills program — and nobody asked about it before pitching. Hila systematically found the enforcement loophole (governance binds only inside DT), challenged the Jira duplication \"tax,\" and rejected the price: $500/seat excluding tokens is \"not in our league.\" Defense/air-gap proof points were pitched to a SaaS transcription company. Product age (3–4 months) confirmed her maturity concern. Honest engineering answers earned respect; the commercial story did not.",
    momentOfCall: {
      he: '"החמש מאות דולר פר Seat שהוא לא כולל את ה-Tokenים... לא בליגה שלנו ואני גם לא רואה את הערך של הכלי בערך חמש מאות דולר לחודש."',
      en: '"$500 per seat not including tokens... not in our league — and I don\'t currently see the tool\'s value at $500/month."',
    },
    scorecard: [
      { label: "Discovery", value: 5, max: 20 },
      { label: "Demo relevance", value: 10, max: 20 },
      { label: "Objections", value: 10, max: 20 },
      { label: "Engagement", value: 11, max: 15 },
      { label: "Next step", value: 6, max: 15 },
      { label: "Positioning", value: 7, max: 10 },
    ],
    risks: [
      "Added value vs Cursor/Claude Code + their own skills — answered with wrong-ICP evidence (defense).",
      "Enforcement loophole conceded honestly.",
      "Jira duplication tax — unresolved.",
      '"Price aside" ×3 instead of value reframe.',
    ],
  },
  {
    id: "xwinsys",
    rank: 4,
    account: "Xwinsys",
    attendees: "Shai (eng lead) + Shahaf Segev (advocate)",
    duration: "45m",
    durationMinutes: 45,
    score: 63,
    dtTalkShare: 60,
    discoveryQuestions: 4,
    prospectQuestions: 15,
    nextStep: "Multiple owned items, 48h pricing",
    hasDatedNextStep: true,
    temp: "hot",
    tempLabel: "Warm-Hot",
    summary:
      'Best-run deal of the five despite Kobi\'s connection dropping twice. Semiconductor WPF shop with minimal CI, manual testing, GitHub migration pending — and Shahaf advocating in-room. Kobi cleanly resolved the "how is this different from Jenkins" category confusion, was honest about the WPF desktop-automation unknown ("רשמתי את זה"), and prescribed a tailored adoption path: pipelines → test automation → dev flows. Two hard gates surfaced: Japanese-parent regulation approves OpenAI only (DT\'s Codex support "weeks away" — contradicting the Exaware claim), and WPF automation feasibility.',
    momentOfCall: {
      he: 'מעיין: "מה צריך לפתור כדי שנוכל להתחיל?" · קובי: "Dark Titan צריך לתמוך ב-Open AI."',
      en: 'Maayan: "What must be solved so we can start?" Kobi: "Dark Titan needs to support OpenAI." — the best question asked by a DT rep in all five calls; it turned the deal into a checklist.',
    },
    scorecard: [
      { label: "Discovery", value: 11, max: 20 },
      { label: "Demo relevance", value: 12, max: 20 },
      { label: "Objections", value: 12, max: 20 },
      { label: "Engagement", value: 11, max: 15 },
      { label: "Next step", value: 11, max: 15 },
      { label: "Positioning", value: 6, max: 10 },
    ],
    risks: [
      "OpenAI-only regulation — deal gate; support timeline must be confirmed in writing.",
      "WPF desktop UI automation — feasibility unknown, action item taken.",
      "Cost question answered with the Akamai anecdote ($30) rather than an estimate for their usage.",
    ],
  },
  {
    id: "mprest",
    rank: 5,
    account: "mPrest",
    attendees: "Chen (eng manager; CTO = decision maker)",
    duration: "42m",
    durationMinutes: 42,
    score: 61,
    dtTalkShare: 55,
    discoveryQuestions: 5,
    prospectQuestions: 17,
    nextStep: "Materials + CTO escalation",
    hasDatedNextStep: false,
    temp: "warm",
    tempLabel: "Warm",
    summary:
      'Best ICP fit in the dataset: Iron Dome C2 software, classified air-gapped networks, millions already invested in on-prem GPUs, active Copilot/Claude pilots, IT blocking agents. Kobi\'s socratic counter to the Copilot-parity objection ("do you know which plugins your developers use?") was the strongest objection handling of all five calls, and the live end-to-end ticket demo — including an honestly-shown blocked state — built real credibility. But the flagship security question (agent deleting/exfiltrating a repo) was promised "a good answer" and never answered after a power-cut interruption, and over-disclosure peaked: fundraising dependence, Rafael talks, unverified 20–30% token-reselling claim.',
    momentOfCall: {
      he: '"איך אני אדע שהאג\'נט הזה לא מחר ימחוק לי את ה-repository או ייקח את כל המידע וישלח אותו למייל להודו?"',
      en: '"How do I know the agent won\'t delete my repository tomorrow, or take all the data and email it to India?" — promised "a good answer"; the answer was never delivered.',
    },
    scorecard: [
      { label: "Discovery", value: 10, max: 20 },
      { label: "Demo relevance", value: 14, max: 20 },
      { label: "Objections", value: 11, max: 20 },
      { label: "Engagement", value: 11, max: 15 },
      { label: "Next step", value: 9, max: 15 },
      { label: "Positioning", value: 6, max: 10 },
    ],
    risks: [
      "Copilot parity — best-handled instance of the recurring objection.",
      "Agent security governance — dropped; needs a rehearsed 60-second answer + follow-up habit.",
      "References/maturity — honest (2 weeks since launch, Akamai + 1 starting).",
      'Cost-burn trauma: "רגל אחת על הגז ורגל אחת על הברקס."',
    ],
  },
];

// ---------------------------------------------------------------------------
// OBJECTIONS
// ---------------------------------------------------------------------------

export const objections: ObjectionRow[] = [
  {
    objection: 'DIY / incumbent parity — "why not Copilot / Claude Code / our own skills?"',
    frequency: "5/5",
    heat: 5,
    cells: [
      { account: "Sisense", note: "Dodged", tone: "neutral" },
      { account: "Exaware", note: "Partial", tone: "neutral" },
      { account: "Verbit", note: "Wrong ICP proof", tone: "flag" },
      { account: "Xwinsys", note: "Reframed (vs Jenkins)", tone: "neutral" },
      { account: "mPrest", note: "Socratic ✓", tone: "good" },
    ],
    handled: "1.5 / 5",
  },
  {
    objection: "Pricing / value at $500 per seat",
    frequency: "4/5",
    heat: 4,
    cells: [
      { account: "Sisense", note: "Not discussed", tone: "neutral" },
      { account: "Exaware", note: "Muddled", tone: "neutral" },
      { account: "Verbit", note: "Rejected", tone: "flag" },
      { account: "Xwinsys", note: "Deferred 48h", tone: "neutral" },
      { account: "mPrest", note: "Fundraising-framed", tone: "neutral" },
    ],
    handled: "0.5 / 4",
  },
  {
    objection: "Integration with existing systems (Jira, CI, CodeRabbit, HW test rigs, WPF)",
    frequency: "5/5",
    heat: 5,
    cells: [
      { account: "Sisense", note: "OK", tone: "neutral" },
      { account: "Exaware", note: "→ POC scope ✓", tone: "good" },
      { account: "Verbit", note: "Partial", tone: "neutral" },
      { account: "Xwinsys", note: "Honest + action ✓", tone: "good" },
      { account: "mPrest", note: "OK", tone: "neutral" },
    ],
    handled: "3 / 5",
  },
  {
    objection: "Maturity (product or org readiness)",
    frequency: "3/5",
    heat: 3,
    cells: [
      { account: "Sisense", note: "—", tone: "neutral" },
      { account: "Exaware", note: "Cybus/Phillips ✓", tone: "good" },
      { account: "Verbit", note: "Confirmed it", tone: "flag" },
      { account: "Xwinsys", note: "—", tone: "neutral" },
      { account: "mPrest", note: "Honest", tone: "neutral" },
    ],
    handled: "1.5 / 3",
  },
  {
    objection: "Cost attribution in dollars per feature",
    frequency: "3/5",
    heat: 3,
    cells: [
      { account: "Sisense", note: "Gap exposed", tone: "flag" },
      { account: "Exaware", note: "Tokens-not-$$", tone: "neutral" },
      { account: "Verbit", note: "—", tone: "neutral" },
      { account: "Xwinsys", note: "Anecdote only", tone: "neutral" },
      { account: "mPrest", note: "—", tone: "neutral" },
    ],
    handled: "0 / 3",
  },
  {
    objection: "Agent security / governance boundaries",
    frequency: "2/5",
    heat: 2,
    cells: [
      { account: "Sisense", note: "—", tone: "neutral" },
      { account: "Exaware", note: "—", tone: "neutral" },
      { account: "Verbit", note: "Loophole conceded", tone: "neutral" },
      { account: "Xwinsys", note: "—", tone: "neutral" },
      { account: "mPrest", note: "Dropped", tone: "flag" },
    ],
    handled: "0.5 / 2",
  },
];

export const bestParityResponse: BilingualQuote = {
  he: '"האם אתה יודע להגיד לי איך כל אחד מהמפתחים עובד עם AI? באיזה MCPs הוא משתמש? באיזה פלאגינים? מאיפה הם הביאו אותם?"',
  en: 'Turn the objection into governance questions the buyer can\'t answer about his own org. Chen conceded: "אני לא התעניינתי."',
};

export const parityResponsesToRetire: string[] = [
  '"בוא נראה את המערכת" (Sisense) — deferring the question to the demo means it never gets answered.',
  '"זה מה שמוכר את Dark Titan בתעשיות ביטחוניות" (Verbit) — defense evidence for a SaaS buyer.',
  '"יכול להיות שעוד חודשיים Claude Code יציעו Enterprise Version" (Exaware) — never predict your own commoditization mid-pitch.',
];

export const pricingNotes: string[] = [
  "Stated price: $500/seat/month, BYO tokens, design-partner phase, no commitment. Consistent number, inconsistent everything else.",
  'Seat semantics drifted: "per seat" → "יכולים לעבוד עליו שניים-שלושה מפתחים" (Verbit, Exaware) — this destroys the per-seat value metric in the buyer\'s head.',
  "Future model described three ways: consumption-based / platform fee + consumption / Develeap token-reselling at 20–30% below direct (mPrest only).",
  "Verbit's rejection was about value evidence, not budget: she saw no quantified benefit for a SaaS org. Nobody showed her one.",
  "Note vs official model: the $500 design-partner price is a different architecture than the published Pro $49 / Team $129 / Enterprise ~$249-blended tiers. If deliberate, document it and brief the team; if improvised, align now.",
];

export const productGaps: ProductGapRow[] = [
  {
    request: "Cost per feature in dollars, in the dashboard",
    calls: "Sisense, Exaware, Xwinsys",
    detail: 'Today: tokens only, correlation via traces. Guy: "לא רשום לי שם ב-Dashboard על מה עבדתי."',
  },
  {
    request: "Codex / OpenAI support",
    calls: "Xwinsys (hard gate), mPrest",
    detail: "Regulatory requirement for Xwinsys (Japanese parent approves OpenAI only).",
  },
  {
    request: "Copilot support",
    calls: "Exaware, Verbit, mPrest, Xwinsys",
    detail: 'Promised "2nd week of July" / "next week" — must ship or stop promising.',
  },
  {
    request: "Desktop (WPF) UI test automation",
    calls: "Xwinsys",
    detail: "Playwright covers web only; feasibility check owed.",
  },
  {
    request: "Enterprise update delivery",
    calls: "Exaware",
    detail: '"Shared Google Drive, pull the binary" — needs signed releases / artifact registry story.',
  },
  {
    request: "Automatic model-tier routing (cheap models for simple tasks)",
    calls: "mPrest",
    detail: "Per-stage override exists; buyer wanted automatic selection.",
  },
  {
    request: "Deeper two-way Jira sync (statuses, epics/initiative breakdown)",
    calls: "Sisense, Exaware, Verbit",
    detail: "Hila: duplication “tax”; Ron: bug-flow ingestion; Guy: initiative→epic breakdown ownership.",
  },
  {
    request: "Agent security-governance story (egress, permissions, audit)",
    calls: "mPrest, Verbit",
    detail: 'The unanswered "delete my repo / email to India" question.',
  },
];

// ---------------------------------------------------------------------------
// COMPETITIVE
// ---------------------------------------------------------------------------

export const competitors: CompetitorRow[] = [
  {
    name: "GitHub Copilot",
    mentions: 4,
    context: 'Incumbent at Exaware, Xwinsys, mPrest (subsidized, "free-ish"); token-cost spikes noted',
    assessment:
      "Governance/enforcement gap argument works. Risk: DT's Copilot support is itself a promise, and Saar predicted convergence out loud.",
  },
  {
    name: "Claude Code / internal skills (DIY)",
    mentions: 5,
    context: 'Sisense has a Claude skill; Verbit builds org-wide skills; Yossi\'s "30 hours myself"',
    assessment:
      'The #1 competitive threat is the buyer\'s own team. Needs the rehearsed answer + a quantified "cost of DIY governance" slide.',
  },
  {
    name: "Cursor",
    mentions: 2,
    context: "Sisense, Verbit — as the developers' preferred IDE",
    assessment: "DT repositioned as orchestration above the IDE — landed OK.",
  },
  {
    name: "Unnamed vendors (bake-off)",
    mentions: 1,
    context: 'Exaware: "בשיח עם עוד כמה חברות... סביב שלושה מצגות נעשה חושבים"',
    assessment: "No competitive discovery was done — nobody asked WHO else they're seeing.",
  },
  {
    name: "Internal platform build",
    mentions: 1,
    context: "Sisense's \"System Observatory\" (graph, cost per API call, OpenCost)",
    assessment: 'Kobi pivoted to synergy ("מה שאתה מראה זה זהב") — right instinct; now make it a real integration play.',
  },
];

export const claims: ClaimRow[] = [
  {
    claim: "Codex/OpenAI support",
    values: [
      { account: "Sisense", value: "Listed as supported", tone: "neutral" },
      { account: "Exaware", value: "כבר נתמכים", tone: "neutral" },
      { account: "Verbit", value: "—", tone: "neutral" },
      { account: "Xwinsys", value: "בתהליכי פיתוח סופיים", tone: "flag" },
      { account: "mPrest", value: "—", tone: "neutral" },
    ],
    verdict: "Contradiction",
    verdictTone: "flag",
  },
  {
    claim: "Copilot support",
    values: [
      { account: "Sisense", value: "—", tone: "neutral" },
      { account: "Exaware", value: "שבוע שני של יולי", tone: "neutral" },
      { account: "Verbit", value: "שבוע הבא", tone: "neutral" },
      { account: "Xwinsys", value: "עוד לא", tone: "neutral" },
      { account: "mPrest", value: "שבוע הבא", tone: "neutral" },
    ],
    verdict: "Ship it or stop dating it",
    verdictTone: "flag",
  },
  {
    claim: "Akamai project cost",
    values: [
      { account: "Sisense", value: "$27", tone: "neutral" },
      { account: "Exaware", value: "—", tone: "neutral" },
      { account: "Verbit", value: "—", tone: "neutral" },
      { account: "Xwinsys", value: "קצת יותר מ-$30", tone: "neutral" },
      { account: "mPrest", value: "—", tone: "neutral" },
    ],
    verdict: "Pick one number",
    verdictTone: "flag",
  },
  {
    claim: "Token savings 22% (30–40% aggressive)",
    values: [
      { account: "Sisense", value: "✓", tone: "good" },
      { account: "Exaware", value: "✓", tone: "good" },
      { account: "Verbit", value: "✓", tone: "good" },
      { account: "Xwinsys", value: "✓", tone: "good" },
      { account: "mPrest", value: "✓", tone: "good" },
    ],
    verdict: "Consistent — keep",
    verdictTone: "good",
  },
  {
    claim: "$500/seat design partner",
    values: [
      { account: "Sisense", value: "Not discussed", tone: "neutral" },
      { account: "Exaware", value: "✓", tone: "good" },
      { account: "Verbit", value: "✓", tone: "good" },
      { account: "Xwinsys", value: "Deferred", tone: "neutral" },
      { account: "mPrest", value: "✓", tone: "good" },
    ],
    verdict: "Number consistent; semantics drift",
    verdictTone: "good",
  },
  {
    claim: "Akamai disclosure",
    values: [
      { account: "Sisense", value: "Named + internals", tone: "neutral" },
      { account: "Exaware", value: "Named + NOC phrasing", tone: "neutral" },
      { account: "Verbit", value: "Named", tone: "neutral" },
      { account: "Xwinsys", value: "Anonymized", tone: "good" },
      { account: "mPrest", value: "Named", tone: "neutral" },
    ],
    verdict: "One policy needed",
    verdictTone: "flag",
  },
  {
    claim: "Fundraising plans",
    values: [
      { account: "Sisense", value: "—", tone: "neutral" },
      { account: "Exaware", value: "Disclosed", tone: "neutral" },
      { account: "Verbit", value: "Disclosed", tone: "neutral" },
      { account: "Xwinsys", value: "—", tone: "neutral" },
      { account: "mPrest", value: "Disclosed as dependency", tone: "flag" },
    ],
    verdict: "Stop",
    verdictTone: "flag",
  },
];

export const competitiveFootnote =
  "Israeli tech is a small market — these five buyers plausibly talk to each other and to the same 2 unnamed vendors Exaware is evaluating.";

// ---------------------------------------------------------------------------
// COACHING
// ---------------------------------------------------------------------------

export const winningPatterns: string[] = [
  "Live factory demo — showing a real ticket run end-to-end (incl. a blocked state, mPrest) was the single most credibility-building move.",
  'Objection → POC scope — "לא טריוויאלי, ניקח את זה לתוך ה-POC" (Exaware hardware testing) converts risk into a next step.',
  "Socratic governance counter to the DIY objection (mPrest).",
  "Prescriptive adoption path matched to maturity: pipelines → testing → flows (Xwinsys).",
  'Naming the blocker out loud — "מה צריך לפתור כדי שנוכל להתחיל?" (Maayan, Xwinsys).',
  'Transformation stories for maturity fears — Phillips/Redis "start with one team" (Maayan, Exaware).',
];

export const losingPatterns: string[] = [
  "Pitch before discovery — every call opened with the deck; Verbit got the first discovery question at minute 40.",
  "Wrong-ICP evidence — defense/air-gap proof to a SaaS buyer.",
  '"Price aside" — deflecting a value objection instead of reframing it in the buyer\'s economics.',
  'Self-undercutting predictions — "Claude Code might ship this in two months."',
  "Over-disclosure — fundraising, client internals, product age, staffing costs.",
  "AV chaos — 4/5 calls lost minutes to links, screen shares, or disconnects.",
];

export const coaching: CoachingRow[] = [
  {
    rep: "Kobi",
    role: "CTO",
    keep: "Deep technical credibility; honest \"I don't know, I'll check\" answers (WPF); live demos; socratic governance counter (mPrest); clean category reframes (Jenkins).",
    change:
      'Compress the opening pitch: 12 min at Sisense in a 30-min slot. Ask 5 discovery questions before sharing a screen. Answer the differentiation question directly the moment it\'s asked — never "let\'s look at the system."',
  },
  {
    rep: "Saar",
    role: "CEO, DT",
    keep: "Vision narrative (Dark Factories, rails metaphor); POC scoping; transparency that builds trust; support answer (mPrest).",
    change:
      'Disclosure discipline: no fundraising, no client internals, no "NOC replacement" phrasing, no reselling claims before they\'re real. Stop negotiating against yourself ("שם את המחיר בצד" ×3). Answer the question asked — Ron had to referee two crossed threads. Park interrupted questions and RETURN to them (mPrest security).',
  },
  {
    rep: "Maayan",
    role: "Sales",
    keep: 'Meeting orchestration and follow-up ownership; transformation stories (Phillips/Redis); the best deal question of the dataset ("מה צריך לפתור כדי שנוכל להתחיל?").',
    change:
      "Own next steps in-call: get a date + attendee list before goodbye (achieved ~1/5). Pre-call AV checklist (links, screen share, backup connection). Avoid leaving mid-call when the deal owner (Verbit) is still engaged.",
  },
];

export const teamActions: TeamAction[] = [
  {
    title: 'Write and rehearse the "Why not DIY / Copilot" answer.',
    body: "Occurred 5/5 calls, handled well once. Structure: (a) socratic governance questions, (b) 3 crisp differentiators — flows-as-code enforcement, fleet-level audit + cost gates, air-gap/on-prem — (c) quantified cost-of-DIY (what Verbit spends maintaining skills). Print it on a card.",
  },
  {
    title: "Freeze one pricing narrative.",
    body: "One page: what a seat is (pick ONE semantics), what $500 includes, BYO tokens, POC terms, GA direction. Everyone says the same words. Reconcile with the official tier model before the next call.",
  },
  {
    title: "Mandate a 5-minute discovery block before any screen share.",
    body: "Minimum: stack + AI tools today, the pain that booked this meeting, who decides, what happens after a good POC. Target 10+ rep questions/call (current avg: 4.4).",
  },
  {
    title: "Create the claims register.",
    body: "One source of truth for: supported providers + real dates, Akamai numbers ($27 or $30 — pick), reference disclosure policy, forbidden disclosures (fundraising, client internals, product age, NOC phrasing). Review before every demo.",
  },
  {
    title: "Next-step protocol: never end without a dated, attendee-named follow-up.",
    body: 'Achieved once in five calls. "I\'ll be in touch" = no next step. Book it on-screen before goodbye.',
  },
];

export const experiments: string[] = [
  "Flip the structure: 5-min discovery → 10-min live factory run (the highest-credibility asset) → deck only as backup. Measure prospect-question count in the first 15 minutes.",
  "Segment the proof points: defense/air-gap evidence for defense buyers (mPrest, Rafael-types); legacy-graph/token-savings evidence for SaaS & scale-ups (Sisense, Verbit). Never cross streams.",
  "Bring a security pre-pack (egress control, permissions, audit trail, sandboxing one-pager) to every enterprise call — it was needed in 3 of 5.",
  "Cost-model worksheet: replace the Akamai anecdote with a 3-line estimate for THEIR usage (devs × tickets × avg tokens × savings %). Answers the question every call asked.",
];

export const methodNotes =
  "Scores use a 100-pt rubric (Discovery 20, Demo relevance 20, Objection handling 20, Engagement 15, Next-step 15, Positioning accuracy 10). Talk ratios and question counts are estimates from transcript word/turn counts; transcript speaker labels contain some attribution errors (noted where material). Talk-ratio benchmarks follow Gong revenue-intelligence norms: top-performing sellers hold ~46% talk share; ≤55% is the acceptable ceiling. 5 of 13 demos analyzed — patterns should be re-validated as the remaining 8 transcripts arrive.";
