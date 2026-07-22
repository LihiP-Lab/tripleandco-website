// ---------------------------------------------------------------------------
// DEMO CALL INTELLIGENCE, data model
// Structured analysis of Dark Titan (Develeap) demo calls.
// Source: full Hebrew call transcripts; all quotes verbatim.
// Talk-time figures are estimates from transcript word/turn counts.
// Internal, contains client names and commercial terms.
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
    title: "The same objection killed momentum in all 5 calls, and it's still unanswered.",
    body: '"Why not just Copilot / Claude Code / our own skills?" appeared in every single demo. Only once (mPrest) was it handled well. The team needs one rehearsed, quotable answer.',
  },
  {
    title: "Discovery is nearly absent.",
    body: "Average 4.4 rep questions per call vs 11–14 benchmark. In Verbit, the first real discovery question came at minute 40, after the pricing rejection. Demos are running blind.",
  },
  {
    title: "The pricing story changes every call.",
    body: '$500/seat design partner, BYO tokens, but seat semantics ("1 dev" vs "2–3 devs"), POC pricing, token-reselling discounts, and the future consumption model were described differently (or improvised) in each conversation. Verbit rejected it outright.',
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
      'Solo 30-min slot; Kobi delivered a ~12-minute pitch (40% of the call) with zero discovery. Guy engaged hard in the second half, static-vs-runtime mapping, data residency, cost-per-feature (exposed a dashboard gap), then demoed Sisense\'s own internal "System Observatory," revealing both internal-build competition and an integration opportunity. Pain self-declared: 15-year legacy codebase context. Next step soft: WhatsApp coordination toward a meeting with team lead + principal, at the mercy of miluim, vacations and slow security/legal.',
    momentOfCall: {
      he: '"חוץ מה-view הנהדר שיש לכם... במה זה שונה בהרבה מ-skill שיש לנו היום שכתוב ב-Claude?"',
      en: '"Besides the great view, how is this much different from a Claude skill we already have today?", answered with "let\'s look at the system"; never actually answered.',
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
      "Differentiation vs internal Claude skill, dodged.",
      "Cost-per-feature not visible in dashboard, product gap exposed live.",
      'Can\'t use SaaS ("כל הקוד שלי פתוח"), needs on-prem + security/legal cycle.',
    ],
    intelligence: [
      "Sisense built an internal graph system (architecture/security/cost per API call, MD files, OpenCost), potential grounding-data integration for DT agents.",
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
      en: "Ron had to referee: the answers weren't addressing the question being asked, a listening failure.",
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
      'Copilot support promised "second week of July", roadmap risk.',
      "Hardware/traffic-generator test integration, unproven, now POC scope.",
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
      "Chaotic open (two stale meeting links, ~4.5 min lost). Verbit already runs an internal AI-methodology/skills program, and nobody asked about it before pitching. Hila systematically found the enforcement loophole (governance binds only inside DT), challenged the Jira duplication \"tax,\" and rejected the price: $500/seat excluding tokens is \"not in our league.\" Defense/air-gap proof points were pitched to a SaaS transcription company. Product age (3–4 months) confirmed her maturity concern. Honest engineering answers earned respect; the commercial story did not.",
    momentOfCall: {
      he: '"החמש מאות דולר פר Seat שהוא לא כולל את ה-Tokenים... לא בליגה שלנו ואני גם לא רואה את הערך של הכלי בערך חמש מאות דולר לחודש."',
      en: '"$500 per seat not including tokens... not in our league, and I don\'t currently see the tool\'s value at $500/month."',
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
      "Added value vs Cursor/Claude Code + their own skills, answered with wrong-ICP evidence (defense).",
      "Enforcement loophole conceded honestly.",
      "Jira duplication tax, unresolved.",
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
      'Best-run deal of the five despite Kobi\'s connection dropping twice. Semiconductor WPF shop with minimal CI, manual testing, GitHub migration pending, and Shahaf advocating in-room. Kobi cleanly resolved the "how is this different from Jenkins" category confusion, was honest about the WPF desktop-automation unknown ("רשמתי את זה"), and prescribed a tailored adoption path: pipelines → test automation → dev flows. Two hard gates surfaced: Japanese-parent regulation approves OpenAI only (DT\'s Codex support "weeks away", contradicting the Exaware claim), and WPF automation feasibility.',
    momentOfCall: {
      he: 'מעיין: "מה צריך לפתור כדי שנוכל להתחיל?" · קובי: "Dark Titan צריך לתמוך ב-Open AI."',
      en: 'Maayan: "What must be solved so we can start?" Kobi: "Dark Titan needs to support OpenAI.", the best question asked by a DT rep in all five calls; it turned the deal into a checklist.',
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
      "OpenAI-only regulation, deal gate; support timeline must be confirmed in writing.",
      "WPF desktop UI automation, feasibility unknown, action item taken.",
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
      'Best ICP fit in the dataset: Iron Dome C2 software, classified air-gapped networks, millions already invested in on-prem GPUs, active Copilot/Claude pilots, IT blocking agents. Kobi\'s socratic counter to the Copilot-parity objection ("do you know which plugins your developers use?") was the strongest objection handling of all five calls, and the live end-to-end ticket demo, including an honestly-shown blocked state, built real credibility. But the flagship security question (agent deleting/exfiltrating a repo) was promised "a good answer" and never answered after a power-cut interruption, and over-disclosure peaked: fundraising dependence, Rafael talks, unverified 20–30% token-reselling claim.',
    momentOfCall: {
      he: '"איך אני אדע שהאג\'נט הזה לא מחר ימחוק לי את ה-repository או ייקח את כל המידע וישלח אותו למייל להודו?"',
      en: '"How do I know the agent won\'t delete my repository tomorrow, or take all the data and email it to India?", promised "a good answer"; the answer was never delivered.',
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
      "Copilot parity, best-handled instance of the recurring objection.",
      "Agent security governance, dropped; needs a rehearsed 60-second answer + follow-up habit.",
      "References/maturity, honest (2 weeks since launch, Akamai + 1 starting).",
      'Cost-burn trauma: "רגל אחת על הגז ורגל אחת על הברקס."',
    ],
  },
];

// ---------------------------------------------------------------------------
// OBJECTIONS
// ---------------------------------------------------------------------------

export const objections: ObjectionRow[] = [
  {
    objection: 'DIY / incumbent parity, "why not Copilot / Claude Code / our own skills?"',
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
      { account: "Sisense", note: "N/A", tone: "neutral" },
      { account: "Exaware", note: "Cybus/Phillips ✓", tone: "good" },
      { account: "Verbit", note: "Confirmed it", tone: "flag" },
      { account: "Xwinsys", note: "N/A", tone: "neutral" },
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
      { account: "Verbit", note: "N/A", tone: "neutral" },
      { account: "Xwinsys", note: "Anecdote only", tone: "neutral" },
      { account: "mPrest", note: "N/A", tone: "neutral" },
    ],
    handled: "0 / 3",
  },
  {
    objection: "Agent security / governance boundaries",
    frequency: "2/5",
    heat: 2,
    cells: [
      { account: "Sisense", note: "N/A", tone: "neutral" },
      { account: "Exaware", note: "N/A", tone: "neutral" },
      { account: "Verbit", note: "Loophole conceded", tone: "neutral" },
      { account: "Xwinsys", note: "N/A", tone: "neutral" },
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
  '"בוא נראה את המערכת" (Sisense), deferring the question to the demo means it never gets answered.',
  '"זה מה שמוכר את Dark Titan בתעשיות ביטחוניות" (Verbit), defense evidence for a SaaS buyer.',
  '"יכול להיות שעוד חודשיים Claude Code יציעו Enterprise Version" (Exaware), never predict your own commoditization mid-pitch.',
];

export const pricingNotes: string[] = [
  "Stated price: $500/seat/month, BYO tokens, design-partner phase, no commitment. Consistent number, inconsistent everything else.",
  'Seat semantics drifted: "per seat" → "יכולים לעבוד עליו שניים-שלושה מפתחים" (Verbit, Exaware), this destroys the per-seat value metric in the buyer\'s head.',
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
    detail: 'Promised "2nd week of July" / "next week", must ship or stop promising.',
  },
  {
    request: "Desktop (WPF) UI test automation",
    calls: "Xwinsys",
    detail: "Playwright covers web only; feasibility check owed.",
  },
  {
    request: "Enterprise update delivery",
    calls: "Exaware",
    detail: '"Shared Google Drive, pull the binary", needs signed releases / artifact registry story.',
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
    context: "Sisense, Verbit, as the developers' preferred IDE",
    assessment: "DT repositioned as orchestration above the IDE, landed OK.",
  },
  {
    name: "Unnamed vendors (bake-off)",
    mentions: 1,
    context: 'Exaware: "בשיח עם עוד כמה חברות... סביב שלושה מצגות נעשה חושבים"',
    assessment: "No competitive discovery was done, nobody asked WHO else they're seeing.",
  },
  {
    name: "Internal platform build",
    mentions: 1,
    context: "Sisense's \"System Observatory\" (graph, cost per API call, OpenCost)",
    assessment: 'Kobi pivoted to synergy ("מה שאתה מראה זה זהב"), right instinct; now make it a real integration play.',
  },
];

export const claims: ClaimRow[] = [
  {
    claim: "Codex/OpenAI support",
    values: [
      { account: "Sisense", value: "Listed as supported", tone: "neutral" },
      { account: "Exaware", value: "כבר נתמכים", tone: "neutral" },
      { account: "Verbit", value: "N/A", tone: "neutral" },
      { account: "Xwinsys", value: "בתהליכי פיתוח סופיים", tone: "flag" },
      { account: "mPrest", value: "N/A", tone: "neutral" },
    ],
    verdict: "Contradiction",
    verdictTone: "flag",
  },
  {
    claim: "Copilot support",
    values: [
      { account: "Sisense", value: "N/A", tone: "neutral" },
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
      { account: "Exaware", value: "N/A", tone: "neutral" },
      { account: "Verbit", value: "N/A", tone: "neutral" },
      { account: "Xwinsys", value: "קצת יותר מ-$30", tone: "neutral" },
      { account: "mPrest", value: "N/A", tone: "neutral" },
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
    verdict: "Consistent, keep",
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
      { account: "Sisense", value: "N/A", tone: "neutral" },
      { account: "Exaware", value: "Disclosed", tone: "neutral" },
      { account: "Verbit", value: "Disclosed", tone: "neutral" },
      { account: "Xwinsys", value: "N/A", tone: "neutral" },
      { account: "mPrest", value: "Disclosed as dependency", tone: "flag" },
    ],
    verdict: "Stop",
    verdictTone: "flag",
  },
];

export const competitiveFootnote =
  "Israeli tech is a small market, these five buyers plausibly talk to each other and to the same 2 unnamed vendors Exaware is evaluating.";

// ---------------------------------------------------------------------------
// COACHING
// ---------------------------------------------------------------------------

export const winningPatterns: string[] = [
  "Live factory demo, showing a real ticket run end-to-end (incl. a blocked state, mPrest) was the single most credibility-building move.",
  'Objection → POC scope, "לא טריוויאלי, ניקח את זה לתוך ה-POC" (Exaware hardware testing) converts risk into a next step.',
  "Socratic governance counter to the DIY objection (mPrest).",
  "Prescriptive adoption path matched to maturity: pipelines → testing → flows (Xwinsys).",
  'Naming the blocker out loud, "מה צריך לפתור כדי שנוכל להתחיל?" (Maayan, Xwinsys).',
  'Transformation stories for maturity fears, Phillips/Redis "start with one team" (Maayan, Exaware).',
];

export const losingPatterns: string[] = [
  "Pitch before discovery, every call opened with the deck; Verbit got the first discovery question at minute 40.",
  "Wrong-ICP evidence, defense/air-gap proof to a SaaS buyer.",
  '"Price aside", deflecting a value objection instead of reframing it in the buyer\'s economics.',
  'Self-undercutting predictions, "Claude Code might ship this in two months."',
  "Over-disclosure, fundraising, client internals, product age, staffing costs.",
  "AV chaos, 4/5 calls lost minutes to links, screen shares, or disconnects.",
];

export const coaching: CoachingRow[] = [
  {
    rep: "Kobi",
    role: "CTO",
    keep: "Deep technical credibility; honest \"I don't know, I'll check\" answers (WPF); live demos; socratic governance counter (mPrest); clean category reframes (Jenkins).",
    change:
      'Compress the opening pitch: 12 min at Sisense in a 30-min slot. Ask 5 discovery questions before sharing a screen. Answer the differentiation question directly the moment it\'s asked, never "let\'s look at the system."',
  },
  {
    rep: "Saar",
    role: "CEO, DT",
    keep: "Vision narrative (Dark Factories, rails metaphor); POC scoping; transparency that builds trust; support answer (mPrest).",
    change:
      'Disclosure discipline: no fundraising, no client internals, no "NOC replacement" phrasing, no reselling claims before they\'re real. Stop negotiating against yourself ("שם את המחיר בצד" ×3). Answer the question asked, Ron had to referee two crossed threads. Park interrupted questions and RETURN to them (mPrest security).',
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
    body: "Occurred 5/5 calls, handled well once. Structure: (a) socratic governance questions, (b) 3 crisp differentiators, flows-as-code enforcement, fleet-level audit + cost gates, air-gap/on-prem, (c) quantified cost-of-DIY (what Verbit spends maintaining skills). Print it on a card.",
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
    body: "One source of truth for: supported providers + real dates, Akamai numbers ($27 or $30, pick), reference disclosure policy, forbidden disclosures (fundraising, client internals, product age, NOC phrasing). Review before every demo.",
  },
  {
    title: "Next-step protocol: never end without a dated, attendee-named follow-up.",
    body: 'Achieved once in five calls. "I\'ll be in touch" = no next step. Book it on-screen before goodbye.',
  },
];

export const experiments: string[] = [
  "Flip the structure: 5-min discovery → 10-min live factory run (the highest-credibility asset) → deck only as backup. Measure prospect-question count in the first 15 minutes.",
  "Segment the proof points: defense/air-gap evidence for defense buyers (mPrest, Rafael-types); legacy-graph/token-savings evidence for SaaS & scale-ups (Sisense, Verbit). Never cross streams.",
  "Bring a security pre-pack (egress control, permissions, audit trail, sandboxing one-pager) to every enterprise call, it was needed in 3 of 5.",
  "Cost-model worksheet: replace the Akamai anecdote with a 3-line estimate for THEIR usage (devs × tickets × avg tokens × savings %). Answers the question every call asked.",
];

export const methodNotes =
  "Scores use a 100-pt rubric (Discovery 20, Demo relevance 20, Objection handling 20, Engagement 15, Next-step 15, Positioning accuracy 10). Talk ratios and question counts are estimates from transcript word/turn counts; transcript speaker labels contain some attribution errors (noted where material). Talk-ratio benchmarks follow established revenue-intelligence industry standards: top-performing sellers hold ~46% talk share; ≤55% is the acceptable ceiling. 5 of 13 demos analyzed, patterns should be re-validated as the remaining 8 transcripts arrive.";

// ===========================================================================
// ACCOUNT INTELLIGENCE — AKAMAI (post-POC review & expansion)
// A different call type than the five demos above: an existing customer after
// 5 paid POCs. Built on Customer Success best practices and industry
// standards — deal health, expansion opportunity, account risk and next steps
// rather than rep talk-ratio scoring. Source: full call transcript; all quotes verbatim.
// ===========================================================================

export type DealTemp = "expansion" | "healthy" | "watch";
export type Severity = "critical" | "high" | "medium" | "low";
export type StakeholderSide = "akamai" | "darktitan";
export type Disposition =
  | "champion"
  | "economic"
  | "technical"
  | "people"
  | "delivery"
  | "mentioned";

export interface AccountKpi {
  value: string;
  label: string;
  note: string;
  tone: "flag" | "ok" | "neutral";
}

export interface PocOutcome {
  name: string;
  sponsor: string;
  before: string;
  after: string;
  status: "live" | "expanding" | "early";
  statusLabel: string;
  detail: string;
}

export interface AccountSignal {
  title: string;
  body: string;
}

export interface AccountRisk {
  title: string;
  severity: Severity;
  owner: string;
  body: string;
}

export interface CommercialItem {
  topic: string;
  detail: string;
  tone: "ok" | "flag" | "neutral";
}

export interface Stakeholder {
  name: string;
  role: string;
  side: StakeholderSide;
  disposition: Disposition;
  note: string;
}

export interface ActionItem {
  action: string;
  owner: string;
  timing: string;
  priority: Severity;
}

export interface AccountQuote {
  speaker: string;
  role: string;
  text: string;
  tone: "signal" | "risk" | "commercial";
}

export const account = {
  name: "Akamai",
  callType: "Post-POC review & expansion planning",
  date: "Jul 2026",
  durationMinutes: 78,
  relationship: "10+ year relationship · high trust · design-partner phase",
  stage: "5 POCs delivered → expansion + investment conversation",
  dtTeam: "Omri Spector (Founder/CEO) · Carmit Shemesh Haas (POC delivery lead)",
  akamaiTeam:
    "Sean M. Lyons (SVP/GM, ~960-person BU) · Aryeh “Aria” Sivan (Architecture) · Clint Cherco (Chief of Staff / People & Org)",
} as const;

export const accountKpis: AccountKpi[] = [
  { value: "5 / 5", label: "POCs delivered", note: "Several already in production", tone: "ok" },
  { value: "Expansion", label: "Deal temperature", note: "Org-wide adoption on the table", tone: "ok" },
  { value: "~960", label: "Employees in target BU", note: "Restructuring around AI for ’27–’29", tone: "neutral" },
  { value: "$0", label: "Paid to date", note: "POC self-funded by DT’s founder — unpaid", tone: "flag" },
  { value: "$35M", label: "Round DT is raising", note: "Akamai invited to invest + Foundations $1–4M", tone: "ok" },
  { value: "7", label: "Open account risks", note: "1 critical (payment), 2 high", tone: "flag" },
];

export const pocOutcomes: PocOutcome[] = [
  {
    name: "VulMAN — CVE remediation agent",
    sponsor: "Akamai security / VulMAN team",
    before: "Weeks to patch a CVE",
    after: "Minutes (target was < 6h)",
    status: "live",
    statusLabel: "In production",
    detail:
      "Agentic flow inside the existing Jenkins pipeline: scans dependencies, proposes a fix, opens a PR for a human in the loop. Real PRs already approved and merged by Akamai devs; the team has since added dashboards for deeper insight.",
  },
  {
    name: "WSA Dimension Builder",
    sponsor: "CSI group",
    before: "~1 month + several expensive engineers per dimension",
    after: "Automated; 2 dimensions already replicated",
    status: "expanding",
    statusLabel: "Live · scaling",
    detail:
      "Lives inside Webex where Akamai devs already work; collects data across repos/Confluence, asks clarifying questions, and drafts the code change behind human-in-the-loop gates. A brand-new dimension is being built with it this week — the real proof point.",
  },
  {
    name: "AI Bot Intelligence — marketing dashboard",
    sponsor: "Adarsh’s team · Emily Leones (contact)",
    before: "Dev team stood between marketing and live data",
    after: "Self-serve, Wix-like dashboard builder",
    status: "live",
    statusLabel: "Working",
    detail:
      "An agent pulls from Databricks daily and surfaces AI insights; marketing self-selects panels/views without engineering. Positioned as marketing’s tool to beat Cloudflare. In active discussion on which insights to publish.",
  },
  {
    name: "Network Health Analyst (+ DDDS)",
    sponsor: "Jim’s team (NOC)",
    before: "Needed a specialist to interpret ClickHouse data",
    after: "Natural-language anomaly insights for non-technical users",
    status: "early",
    statusLabel: "Working · DDDS early",
    detail:
      "Detects and visualizes network anomalies and runs the queries behind the scenes so the NOC can act without a data interpreter. A concurrent DDDS POC reuses the same core (swap data sources/outputs) — an early reusability proof.",
  },
  {
    name: "Incident Management on the Data Management Platform",
    sponsor: "Richard (product) · Patrick (AI lifecycle)",
    before: "Evaluate/buy a standard incident tool (e.g. PagerDuty)",
    after: "Tailored graph-DB app on a reusable DMP core",
    status: "expanding",
    statusLabel: "Live · 3 apps next",
    detail:
      "DT built a Data Management Platform; incident management is the first thin app on it — a graph DB surfaces connections to resolve incidents faster by learning from prior ones. Three more apps (carby, knowledge library, digital twins) are being built this week by Richard’s own team using the DT flow.",
  },
];

export const accountSignals: AccountSignal[] = [
  {
    title: "Org-wide, multi-year ambition from the economic buyer",
    body: "Sean wants to restructure a ~960-person business unit around this capability for ’27–’28–’29, using the offsite to decide greenfield-vs-brownfield and where to deploy a dark factory vs Claude licenses. This is a platform bet, not a tool trial.",
  },
  {
    title: "Investment interest — two paths",
    body: "Sean asked how much DT is raising ($35M) and proactively offered to sponsor DT into “Akamai Foundations” ($1–4M startup investments). He requested the investor package by email (cc Aria + Clint). Strategic-investor optionality on top of the commercial deal.",
  },
  {
    title: "Reusability is already proven inside the account",
    body: "One core served both Jim’s Network Analyst and the DDDS POC, and Richard’s DMP now underpins four apps. Proven internal reuse is the single biggest expansion multiplier — land-and-expand is de-risked.",
  },
  {
    title: "The buyer is building your pricing model for you",
    body: "Sean volunteered monetization ideas (skills-based tiers, per-connector pricing, mandatory onboarding/training/assessment services) and a fully-loaded-engineer ROI pitch for his CFO. A champion actively packaging the internal business case.",
  },
  {
    title: "Deep, durable trust",
    body: "“We implicitly trust you… based on the relationship you’ve invested in us over a decade.” Carmit was singled out for praise. Relationship capital is high — leverage it, don’t coast on it.",
  },
  {
    title: "Retain the embedded expertise",
    body: "DT engineers currently hold Akamai machines, permissions and hard-won context that evaporates when the POC ends in ~3.5 weeks. Omri floated keeping some embedded — a natural bridge into a paid expansion.",
  },
];

export const accountRisks: AccountRisk[] = [
  {
    title: "POC is unpaid — DT’s founder is personally financing it",
    severity: "critical",
    owner: "Clint → Akamai finance/ops",
    body: "“We did not receive a single cent. All this POC is running off of my bank account.” Israeli tax is due on invoice regardless of collection, so this is real cash pressure. Aria hadn’t heard of it; Clint is chasing a possible “E-Team” intermediary blocker. Cash + relationship risk — resolve before any expansion paperwork.",
  },
  {
    title: "InfoSec / guardrail scrutiny",
    severity: "high",
    owner: "DT + Akamai InfoSec (Dekel)",
    body: "Connectivity for the global DDoS system was pulled because a competitor (Cloudflare) API was in play, and InfoSec is “freaking out” about Cast AI / Kimchi. DT clarified its system wasn’t the cause (endpoint config), but the perception risk is internal to Akamai. Need clear articulation of what is connected/utilized and a security pre-pack.",
  },
  {
    title: "Credibility gap — “where it does NOT work” was missing",
    severity: "high",
    owner: "DT (Omri / Carmit)",
    body: "Sean’s sharpest feedback: the POC story had no lessons-learned or limitations — no honest “here’s when a couple of engineers with Claude licenses is the better call.” He wants a non-sugar-coated assessment; delivering it builds the internal credibility the expansion depends on.",
  },
  {
    title: "Vendor-scale / support risk",
    severity: "high",
    owner: "DT (Omri)",
    body: "“You’re a small company.” Before a 1,000-person org relies on DT for ’27–’29 it needs proof DT can resource support, training and guardrails while serving other customers. Ties directly to the raise and to the risk/reward of a design partnership.",
  },
  {
    title: "Commercial-model mismatch: tickets/seats vs tokens",
    severity: "medium",
    owner: "Aria + Omri (offline)",
    body: "DT prices per-seat + usage in tickets + FDE services; Akamai finance thinks in tokens and wants ticket→$ mapping and DT modeled as a budgetable spend (per-project budget with auto-stop — which DT already enforces). Unaddressed, this becomes procurement friction. Taken offline between Aria and Omri.",
  },
  {
    title: "Organizational readiness / change management",
    severity: "medium",
    owner: "Clint + Maya (L&D)",
    body: "By Akamai’s own admission the BU isn’t set up to leverage AI at the scale they want. There’s a cultural conversion curve for skeptics and R&R/structure change ahead — the offsite’s afternoon is dedicated to it. Adoption success, not just tech, drives renewal/expansion.",
  },
  {
    title: "Architecture fragmentation across the 5 POCs",
    severity: "low",
    owner: "DT delivery",
    body: "The POCs ran independently with no shared architecture or code, and brownfield context (libraries, infra, Confluence/SharePoint) isn’t ingested out of the box. Risk of duplication at scale; the fix is FDE integration engineers and a shared-core objective going forward.",
  },
];

export const commercialModel: CommercialItem[] = [
  {
    topic: "Current model",
    detail:
      "Per-seat license (base price) + usage tiers measured in tickets (a ticket = a unit of business value) + FDE implementation services (connect to CI, security, knowledge base, Jira). The POCs used only the minimal install.",
    tone: "neutral",
  },
  {
    topic: "Pricing upside (from Sean)",
    detail:
      "Add a skills-based opt-in/out tier; price connectors (all-in bundle vs per-connector, ticketing included); make onboarding/training/assessment services a first-class line — “you can’t powerfully use your tool without the expertise.”",
    tone: "ok",
  },
  {
    topic: "Token-economy framing (from Aria)",
    detail:
      "Finance benchmarks everything in tokens vs Claude Code. Wants each ticket expressed in $ and DT treated as a budget consumer: assign a project budget, DT stops when exhausted, resumes when topped up. Omri: DT already does budget-stop/resume today.",
    tone: "flag",
  },
  {
    topic: "ROI narrative (Omri)",
    detail:
      "Savings are capped by current spend; the bigger prize is earnings — time-to-market and new product launches. “The big money is launching new products.” Sean agreed, then pressed on how it gets funded.",
    tone: "ok",
  },
];

export const stakeholders: Stakeholder[] = [
  {
    name: "Omri Spector",
    role: "Founder & CEO",
    side: "darktitan",
    disposition: "champion",
    note: "Leads the strategic narrative and the raise; owns the investor package and lessons-learned doc.",
  },
  {
    name: "Carmit Shemesh Haas",
    role: "POC delivery lead",
    side: "darktitan",
    disposition: "delivery",
    note: "Ran all five POCs centrally; singled out for praise by Sean. Drafting the cross-team feedback form.",
  },
  {
    name: "Sean M. Lyons",
    role: "SVP / GM, ~960-person BU",
    side: "akamai",
    disposition: "economic",
    note: "Champion + economic sponsor. Driving org-wide adoption, pricing ideas and the Foundations investment path.",
  },
  {
    name: "Aryeh “Aria” Sivan",
    role: "Architecture / technical leader",
    side: "akamai",
    disposition: "technical",
    note: "Decade-long relationship; scrutinizes architecture sharing, product influence and the token/financial model.",
  },
  {
    name: "Clint Cherco",
    role: "Chief of Staff / People & Org",
    side: "akamai",
    disposition: "people",
    note: "Owns the offsite agenda and L&D; escalating the unpaid-invoice issue to finance/ops.",
  },
  {
    name: "Richard · Patrick",
    role: "Product owner · AI lifecycle",
    side: "akamai",
    disposition: "mentioned",
    note: "Sponsors of the DMP/incident-management work; Richard’s team is building the next apps on the DT flow.",
  },
  {
    name: "Adarsh · Emily Leones · Jim",
    role: "POC sponsors / contacts",
    side: "akamai",
    disposition: "mentioned",
    note: "Own the marketing-dashboard and network-analyst POCs — expansion entry points across other teams.",
  },
  {
    name: "Dekel · Maya",
    role: "InfoSec · L&D",
    side: "akamai",
    disposition: "mentioned",
    note: "Dekel involved in security/payment threads; Maya to lead translating adoption into org & L&D change.",
  },
];

export const accountActions: ActionItem[] = [
  {
    action: "Resolve the outstanding POC invoice (chase E-Team intermediary)",
    owner: "Clint (Akamai) → finance/ops",
    timing: "Immediate",
    priority: "critical",
  },
  {
    action: "Send investor package (cc Aria, Sean, Clint) → route to Akamai Foundations",
    owner: "Omri (DT)",
    timing: "This week",
    priority: "high",
  },
  {
    action: "Produce integrative lessons-learned + limitations doc (incl. where NOT to use DT)",
    owner: "DT (Omri / Carmit)",
    timing: "Before the offsite",
    priority: "high",
  },
  {
    action: "Finalize cross-team feedback form and run a 90–120 min pre-meeting forum",
    owner: "Carmit (DT) + Clint",
    timing: "Next week",
    priority: "high",
  },
  {
    action: "Wrap up remaining ~2 weeks of POC; prep each team to demo what worked & didn’t",
    owner: "Omri + Carmit (DT)",
    timing: "Next 2 weeks",
    priority: "medium",
  },
  {
    action: "Offsite: AM knowledge-share + PM org/L&D evolution (bring Maya in)",
    owner: "Clint (Akamai)",
    timing: "Wed the 12th",
    priority: "medium",
  },
  {
    action: "Deep-dive the token/budget commercial model offline",
    owner: "Aria + Omri",
    timing: "Offline follow-up",
    priority: "medium",
  },
  {
    action: "Explore retaining embedded DT engineers past POC end (~3.5 wks)",
    owner: "Sean (Akamai) to check internally",
    timing: "Before POC ends",
    priority: "medium",
  },
];

export const accountQuotes: AccountQuote[] = [
  {
    speaker: "Sean M. Lyons",
    role: "Akamai SVP/GM",
    text: "In the presentation I didn't hear what it wasn't good at. I didn't hear the lessons learned… it can be more effective to use a different approach versus using a dark factory. I think that's super important because it lends credibility within the organization.",
    tone: "risk",
  },
  {
    speaker: "Omri Spector",
    role: "DT Founder/CEO",
    text: "We did not receive a single cent. All this POC is running off of my bank account.",
    tone: "risk",
  },
  {
    speaker: "Sean M. Lyons",
    role: "Akamai SVP/GM",
    text: "We have 960 people that work in our business unit… we are not organizationally set up to leverage AI in a way that will be as productive and as powerful and as impactful in '27, '28, and '29.",
    tone: "signal",
  },
  {
    speaker: "Sean M. Lyons",
    role: "Akamai SVP/GM",
    text: "I'd like to get your investor package… we have something called Akamai Foundations… typically somewhere between a million to $4 million in regards to investments.",
    tone: "signal",
  },
  {
    speaker: "Omri Spector",
    role: "DT Founder/CEO",
    text: "The big money is launching new products… How does it speed my time to market? How does it allow me to bring more to the market to overtake my competitor?",
    tone: "commercial",
  },
  {
    speaker: "Aryeh Sivan",
    role: "Akamai Architecture",
    text: "Everybody today is talking about tokens, and you're going here in a very different aspect… for me it's easier to understand, compare tokens and tokens.",
    tone: "commercial",
  },
  {
    speaker: "Sean M. Lyons",
    role: "Akamai SVP/GM",
    text: "We implicitly trust you… based on the relationship you've invested in us over a decade.",
    tone: "signal",
  },
];

export const accountSummary =
  "This is not a discovery call — it's a post-POC review with a decade-long enterprise customer that ran five paid POCs, most now in production. The mood is expansion: Akamai is contemplating org-wide adoption across a ~960-person BU for ’27–’29, has invited DT into its funding round and its Foundations program, and is co-authoring the commercial model. Three things gate the expansion and belong to Customer Success: (1) the POC is still completely unpaid, (2) Akamai wants an honest limitations / “where it doesn’t work” story before it will scale internally, and (3) InfoSec, vendor-scale and change-management concerns must be answered. Land the payment, deliver the candid lessons-learned, and convert the embedded-engineer momentum into a paid expansion.";
