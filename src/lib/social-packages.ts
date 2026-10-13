// Single source of truth for the managed social media service page
// (/social-media-management). Package labels, totals, and account limits are
// read from here by the comparison, the sample month, the booking selector,
// and the analytics payloads, so they can never drift apart.
//
// These are the working package proposals under review, not launched SKUs.
// Do not add prices here: pricing is discussed on the call.

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

export type SampleAccount =
  | "Founder LinkedIn"
  | "Company LinkedIn"
  | AdditionalChannel;

export const SAMPLE_ACCOUNTS: SampleAccount[] = [
  "Founder LinkedIn",
  "Company LinkedIn",
  ...ADDITIONAL_CHANNELS,
];

export const SAMPLE_PUBLICATIONS: Record<PackageId, Record<SampleAccount, number>> = {
  essentials: {
    "Founder LinkedIn": 4,
    "Company LinkedIn": 8,
    Instagram: 0,
    Facebook: 0,
    X: 0,
    TikTok: 0,
  },
  growth: {
    "Founder LinkedIn": 8,
    "Company LinkedIn": 12,
    Instagram: 12,
    Facebook: 12,
    X: 0,
    TikTok: 0,
  },
  complete: {
    "Founder LinkedIn": 12,
    "Company LinkedIn": 18,
    Instagram: 18,
    Facebook: 18,
    X: 22,
    TikTok: 8,
  },
};

export function samplePublicationTotal(id: PackageId): number {
  return Object.values(SAMPLE_PUBLICATIONS[id]).reduce((a, b) => a + b, 0);
}

export const SAMPLE_PACKAGE_NOTES: Record<PackageId, string> = {
  essentials:
    "Two LinkedIn accounts with distinct voices. The founder speaks in first person; the company page carries product, proof, and invitations.",
  growth:
    "This example selects Instagram and Facebook. Choosing TikTok instead would change the count, because only suitable video pieces go there.",
  complete:
    "All five platforms. X takes more frequent, shorter adaptations, and TikTok receives only the pieces that work as video.",
};

export interface SampleWeek {
  week: number;
  theme: string;
  summary: string;
  example: { account: SampleAccount; format: string; title: string };
}

export const SAMPLE_WEEKS: SampleWeek[] = [
  {
    week: 1,
    theme: "Problem and perspective",
    summary: "Name the operational problem buyers feel, in the founder's own point of view.",
    example: {
      account: "Founder LinkedIn",
      format: "Founder post",
      title: "Why most AI operations pilots stall after the demo",
    },
  },
  {
    week: 2,
    theme: "Evaluation and workflow",
    summary: "Help buyers judge options and picture the workflow change.",
    example: {
      account: "Company LinkedIn",
      format: "Carousel",
      title: "Five questions to ask before you automate an operations workflow",
    },
  },
  {
    week: 3,
    theme: "Evidence and measurement",
    summary: "Show how the product is measured, using approved facts and footage.",
    example: {
      account: "Company LinkedIn",
      format: "Short video, about 45 seconds",
      title: "How to measure an AI workflow before and after rollout",
    },
  },
  {
    week: 4,
    theme: "Readiness and conversation",
    summary: "Invite the right buyers into a conversation with a relevant call to action.",
    example: {
      account: "Founder LinkedIn",
      format: "Founder post with call to action",
      title: "A four-point readiness check, and an open invitation to compare notes",
    },
  },
];
