// Single source of truth for the managed social media service page
// (/social-media-management). Package labels, totals, and account limits are
// read from here by the comparison, the sample month, the booking selector,
// and the analytics payloads, so they can never drift apart.
//
// These are the working package proposals under review, not launched SKUs.
// Do not add prices here: pricing is discussed on the call.

import { agents } from "./agents-data";

export const SOCIAL_ROUTE = "/social-media-management";

export type PackageId = "essentials" | "growth" | "complete";
export type PackageInterest = PackageId | "not-sure";

export type AdditionalChannel = "Instagram" | "Facebook" | "X" | "TikTok";

export const ADDITIONAL_CHANNELS: AdditionalChannel[] = [
  "Instagram",
  "Facebook",
  "X",
  "TikTok",
];

export interface SocialPackage {
  id: PackageId;
  name: string;
  descriptor: string;
  originalPieces: number;
  writtenVisualPieces: number;
  shortVideos: number;
  managedAccounts: number;
  platforms: number;
  /** How many of the four additional company channels are included. */
  additionalChannels: 0 | 2 | 4;
}

export const SOCIAL_PACKAGES: SocialPackage[] = [
  {
    id: "essentials",
    name: "Social Essentials",
    descriptor: "A consistent founder and company presence on LinkedIn.",
    originalPieces: 12,
    writtenVisualPieces: 8,
    shortVideos: 4,
    managedAccounts: 2,
    platforms: 1,
    additionalChannels: 0,
  },
  {
    id: "growth",
    name: "Social Growth",
    descriptor: "More content and a presence on two additional channels.",
    originalPieces: 20,
    writtenVisualPieces: 14,
    shortVideos: 6,
    managedAccounts: 4,
    platforms: 3,
    additionalChannels: 2,
  },
  {
    id: "complete",
    name: "Social Complete",
    descriptor: "The highest content volume and coverage across all five platforms.",
    originalPieces: 30,
    writtenVisualPieces: 22,
    shortVideos: 8,
    managedAccounts: 6,
    platforms: 5,
    additionalChannels: 4,
  },
];

export function getPackage(id: PackageId): SocialPackage {
  const pkg = SOCIAL_PACKAGES.find((p) => p.id === id);
  if (!pkg) throw new Error(`Unknown social package: ${id}`);
  return pkg;
}

export function additionalChannelsLabel(pkg: SocialPackage): string {
  if (pkg.additionalChannels === 0) return "Not included";
  if (pkg.additionalChannels === ADDITIONAL_CHANNELS.length) return "All 4";
  return `Choose ${pkg.additionalChannels} of 4`;
}

export const PACKAGE_INTEREST_OPTIONS: { id: PackageInterest; label: string }[] = [
  ...SOCIAL_PACKAGES.map((p) => ({ id: p.id as PackageInterest, label: p.name })),
  { id: "not-sure", label: "Not sure yet" },
];

export function isPackageInterest(value: unknown): value is PackageInterest {
  return PACKAGE_INTEREST_OPTIONS.some((o) => o.id === value);
}

/** Included in every package. Strategy and review are never tier-gated. */
export const COMMON_INCLUSIONS: string[] = [
  "All 8 Triple & Co. AI agents as your production team, working alongside Lihi",
  "Initial positioning and founder-voice discovery led by Lihi",
  "A monthly content calendar tied to your business priorities",
  "Copywriting, branded design, and your short-video allowance",
  "Adaptation for each of your managed accounts",
  "Lihi's creative direction, orchestration, and contribution",
  "Lihi's personal review of every monthly batch",
  "Your approval, with one consolidated revision round per batch",
  "Scheduling and publishing of approved content",
  "LinkedIn first: your founder profile and company page in every package",
  "A monthly results report from your HubSpot, with direction for the next calendar",
];

export const ADVOCACY_ADDON = {
  name: "Employee advocacy",
  minMembers: 2,
  maxMembers: 5,
  points: [
    "Posts written for each team member, in their own voice, for their personal LinkedIn profile",
    "Drawn from your monthly calendar, so your people amplify the same priorities as the company",
    "Reviewed by Lihi with the monthly batch, then approved by each team member",
    "We publish with their approval, or hand over ready-to-post drafts. No sharing tool to log in to.",
  ],
} as const;

export const PUBLISHING_ITEMS: { title: string; body: string }[] = [
  {
    title: "Campaign-based publishing",
    body: "Every post is tied to a campaign or business priority, so the report shows what each campaign contributed.",
  },
  {
    title: "One calendar across every account",
    body: "You see the whole month across founder, company, team members, and channels before anything goes live.",
  },
  {
    title: "Approvals that fit your team",
    body: "Comment on any piece in the batch. Add approvers such as legal or product if you need them.",
  },
  {
    title: "Your brand asset library",
    body: "We keep your approved logos, visuals, product shots, and footage in one place, so every piece stays on brand.",
  },
  {
    title: "Compliance checks",
    body: "Every piece is checked against your banned words, claims rules, and approval rules before it is scheduled.",
  },
  {
    title: "Pause on request",
    body: "If something happens in your market or your business, tell us and we pause scheduled posts.",
  },
];

export const REPORT_ITEMS: { title: string; body: string }[] = [
  {
    title: "Tracked links on every post",
    body: "Each link carries tracking tags, so visits from social show up by account, post, and campaign.",
  },
  {
    title: "What reached your HubSpot",
    body: "The visits, form fills, contacts, and deals that came through those links.",
  },
  {
    title: "Reach and engagement",
    body: "By account and by piece, so we can see what is working and what is not.",
  },
  {
    title: "Next month's direction",
    body: "Lihi's read on the numbers and what changes in the next calendar.",
  },
];

// ---------------------------------------------------------------------------
// Illustrative sample month. SignalWorks is a fictional B2B AI operations
// company. Always label it as an example, never as a client or a result.
// ---------------------------------------------------------------------------

export const SAMPLE_COMPANY = "SignalWorks";

export type SampleFormat = "video" | "carousel" | "image" | "post";
export type SampleVoice = "founder" | "company";
export type SampleWeekNumber = 1 | 2 | 3 | 4;

export interface SamplePiece {
  week: SampleWeekNumber;
  /** 0 = Monday ... 4 = Friday */
  day: number;
  voice: SampleVoice;
  format: SampleFormat;
  /** Smallest package that includes this piece. */
  tier: PackageId;
  title: string;
  /** Additional channels the piece is adapted for on Social Growth and Social Complete. */
  growth: AdditionalChannel[];
  complete: AdditionalChannel[];
}

export const SAMPLE_WEEK_THEMES: Record<SampleWeekNumber, string> = {
  1: "Problem and perspective",
  2: "Evaluation and workflow",
  3: "Evidence and measurement",
  4: "Readiness and conversation",
};

export const SAMPLE_PIECES: SamplePiece[] = [
  { week: 1, day: 0, voice: "founder", format: "video", tier: "essentials", title: "Why most ops teams measure the wrong thing", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "TikTok"] },
  { week: 1, day: 1, voice: "company", format: "carousel", tier: "essentials", title: "5 signals your operations data is lying to you", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "X"] },
  { week: 1, day: 1, voice: "founder", format: "post", tier: "complete", title: "The question I ask every ops leader in the first five minutes", growth: [], complete: ["Instagram", "Facebook", "X"] },
  { week: 1, day: 2, voice: "company", format: "post", tier: "essentials", title: "The hidden cost of a 48-hour reporting lag", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "X"] },
  { week: 1, day: 3, voice: "founder", format: "post", tier: "growth", title: "I used to think more dashboards meant more control", growth: [], complete: ["Instagram", "Facebook", "X"] },
  { week: 1, day: 3, voice: "company", format: "image", tier: "growth", title: "One number: how often most ops teams rebuild the same report by hand", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "X"] },
  { week: 1, day: 4, voice: "company", format: "post", tier: "complete", title: "What we got wrong in our first year", growth: [], complete: ["X"] },
  { week: 2, day: 0, voice: "founder", format: "post", tier: "essentials", title: "How to evaluate an AI ops platform without a 90-day pilot", growth: [], complete: ["X"] },
  { week: 2, day: 0, voice: "company", format: "post", tier: "complete", title: "Changelog: alert routing now supports on-call rotations", growth: [], complete: ["X"] },
  { week: 2, day: 1, voice: "company", format: "video", tier: "essentials", title: "Walkthrough: from raw signal to a decision in one screen", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "TikTok"] },
  { week: 2, day: 2, voice: "company", format: "post", tier: "essentials", title: "Three questions to ask any vendor about data lineage", growth: [], complete: ["X"] },
  { week: 2, day: 2, voice: "founder", format: "post", tier: "complete", title: "Build versus buy, answered with a spreadsheet", growth: [], complete: ["X"] },
  { week: 2, day: 3, voice: "company", format: "carousel", tier: "growth", title: "The SignalWorks workflow in 6 steps", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "X"] },
  { week: 2, day: 4, voice: "founder", format: "video", tier: "growth", title: "The evaluation mistake I see on almost every call", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "TikTok"] },
  { week: 2, day: 4, voice: "company", format: "image", tier: "complete", title: "Integration map: where SignalWorks sits in your stack", growth: [], complete: ["Instagram", "Facebook", "X"] },
  { week: 3, day: 0, voice: "company", format: "post", tier: "essentials", title: "Customer story: how a 40-person ops team cut incident triage time", growth: [], complete: ["X"] },
  { week: 3, day: 1, voice: "founder", format: "post", tier: "essentials", title: "The metric that finally convinced our CFO", growth: [], complete: ["X"] },
  { week: 3, day: 1, voice: "company", format: "video", tier: "growth", title: "Customer voice: 60 seconds with an ops lead", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "TikTok"] },
  { week: 3, day: 2, voice: "company", format: "video", tier: "essentials", title: "Product update: anomaly detection on every pipeline", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "TikTok"] },
  { week: 3, day: 3, voice: "company", format: "image", tier: "growth", title: "Before and after: one team's weekly reporting hours", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "X"] },
  { week: 3, day: 3, voice: "founder", format: "video", tier: "complete", title: "Reading an incident report the way an investor reads a P&L", growth: [], complete: ["Instagram", "Facebook", "TikTok"] },
  { week: 3, day: 4, voice: "founder", format: "post", tier: "growth", title: "What our customers measure that most teams do not", growth: [], complete: ["X"] },
  { week: 3, day: 4, voice: "company", format: "carousel", tier: "complete", title: "The four numbers in every SignalWorks monthly review", growth: [], complete: ["Instagram", "Facebook", "X"] },
  { week: 4, day: 0, voice: "founder", format: "video", tier: "essentials", title: "Are you ready for AI in operations? Four honest checks", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "TikTok"] },
  { week: 4, day: 1, voice: "company", format: "post", tier: "essentials", title: "The five questions to bring to a first call with us", growth: [], complete: ["X"] },
  { week: 4, day: 2, voice: "company", format: "image", tier: "essentials", title: "Readiness checklist for ops leaders", growth: ["Instagram", "Facebook"], complete: ["Instagram", "Facebook", "X"] },
  { week: 4, day: 2, voice: "founder", format: "post", tier: "complete", title: "An open invitation: show me your messiest pipeline", growth: [], complete: ["X"] },
  { week: 4, day: 3, voice: "company", format: "post", tier: "complete", title: "Meet the team behind the product", growth: ["Instagram", "Facebook"], complete: ["X"] },
  { week: 4, day: 4, voice: "founder", format: "post", tier: "growth", title: "What I would do in my first 30 days as an ops leader today", growth: [], complete: ["X"] },
  { week: 4, day: 4, voice: "company", format: "video", tier: "complete", title: "Behind the scenes: how a feature ships at SignalWorks", growth: [], complete: ["Instagram", "Facebook", "TikTok"] },
];

const TIER_RANK: Record<PackageId, number> = { essentials: 0, growth: 1, complete: 2 };

export function samplePiecesFor(id: PackageId): SamplePiece[] {
  return SAMPLE_PIECES.filter((p) => TIER_RANK[p.tier] <= TIER_RANK[id]);
}

export function sampleChannelsFor(piece: SamplePiece, id: PackageId): AdditionalChannel[] {
  return id === "essentials" ? [] : piece[id];
}

export type SampleAccount = "Founder LinkedIn" | "Company LinkedIn" | AdditionalChannel;

export const SAMPLE_ACCOUNTS: SampleAccount[] = [
  "Founder LinkedIn",
  "Company LinkedIn",
  ...ADDITIONAL_CHANNELS,
];

export function samplePublications(id: PackageId): Record<SampleAccount, number> {
  const counts = Object.fromEntries(SAMPLE_ACCOUNTS.map((a) => [a, 0])) as Record<SampleAccount, number>;
  for (const piece of samplePiecesFor(id)) {
    counts[piece.voice === "founder" ? "Founder LinkedIn" : "Company LinkedIn"] += 1;
    for (const channel of sampleChannelsFor(piece, id)) counts[channel] += 1;
  }
  return counts;
}

export const SAMPLE_PACKAGE_NOTES: Record<PackageId, string> = {
  essentials: "Essentials publishes on LinkedIn only: two accounts, one platform.",
  growth:
    "This example selects Instagram and Facebook as the two additional channels. Choosing TikTok instead changes the count, because only suitable video pieces go there.",
  complete:
    "Complete covers all six accounts. X takes more publications because short text pieces adapt well there; TikTok takes only the video pieces that suit it.",
};

// ---------------------------------------------------------------- agent team

export type SocialAgentId = "nova" | "rex" | "camille" | "vega" | "lumen" | "sage" | "zara" | "atlas";

export interface SocialAgent {
  id: SocialAgentId;
  name: string;
  image: string;
  /** What the agent owns inside the social service. */
  job: string;
  body: string;
  /** Short status lines cycled in the live team view. */
  tasks: string[];
}

const SOCIAL_AGENT_JOBS: Omit<SocialAgent, "name" | "image">[] = [
  {
    id: "nova",
    job: "Research",
    body: "Finds the questions your buyers ask, what competitors publish, and the topics worth owning this month.",
    tasks: ["Mapping buyer questions", "Scanning competitor posts", "Shortlisting 12 angles"],
  },
  {
    id: "rex",
    job: "Campaigns",
    body: "Turns your commercial priorities into campaigns, angles, and calls to action for the calendar.",
    tasks: ["Planning the launch campaign", "Matching CTAs to offers", "Sequencing week 2"],
  },
  {
    id: "camille",
    job: "Copy in your voice",
    body: "Drafts founder and company posts in two distinct voices, from your positioning and approved facts.",
    tasks: ["Drafting a founder post", "Writing carousel copy", "Tightening the hooks"],
  },
  {
    id: "vega",
    job: "Design",
    body: "Designs carousels, images, and branded visuals to your brand system.",
    tasks: ["Laying out a carousel", "Building an image set", "Checking brand colours"],
  },
  {
    id: "lumen",
    job: "Video",
    body: "Scripts, edits, and captions short videos from your assets or your founder's own recordings.",
    tasks: ["Rendering a 45s video", "Adding captions", "Cutting a founder clip"],
  },
  {
    id: "sage",
    job: "Adaptation",
    body: "Adapts every original piece for each managed account and format, so one idea works wherever it fits.",
    tasks: ["Resizing for Instagram", "Adapting copy for X", "Writing alt text"],
  },
  {
    id: "zara",
    job: "Calendar and publishing",
    body: "Runs the monthly calendar, the approvals queue, and scheduling across your accounts.",
    tasks: ["Scheduling Tuesday 09:00", "Queuing your approvals", "Publishing to LinkedIn"],
  },
  {
    id: "atlas",
    job: "Tracking and reporting",
    body: "Tags every link, follows what reaches your HubSpot, and builds the monthly results report.",
    tasks: ["Tagging links", "Syncing HubSpot", "Building the monthly report"],
  },
];

export const SOCIAL_AGENTS: SocialAgent[] = SOCIAL_AGENT_JOBS.map((job) => {
  const agent = agents.find((a) => a.id === job.id);
  if (!agent) throw new Error(`Unknown agent: ${job.id}`);
  return { ...job, name: agent.name, image: agent.image };
});

export const socialAgent = (id: SocialAgentId): SocialAgent =>
  SOCIAL_AGENTS.find((a) => a.id === id) as SocialAgent;
