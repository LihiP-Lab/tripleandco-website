import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";
import { BookCallLink } from "@/components/social/BookCallLink";
import { AgentTeam } from "@/components/social/AgentTeam";
import { HowItWorks } from "@/components/social/HowItWorks";
import { SampleMonth } from "@/components/social/SampleMonth";
import { SamplePieces } from "@/components/social/SamplePieces";
import { SocialBooking } from "@/components/social/SocialBooking";
import { StudioBoard } from "@/components/social/StudioBoard";
import { Avatar, LIHI_PORTRAIT } from "@/components/social/studio";
import { ORG_ID, SITE_URL, lihiRef } from "@/lib/seo";
import {
  ADVOCACY_ADDON,
  COMMON_INCLUSIONS,
  PUBLISHING_ITEMS,
  REPORT_ITEMS,
  SAMPLE_COMPANY,
  SOCIAL_AGENTS,
  SOCIAL_PACKAGES,
  SOCIAL_ROUTE,
  additionalChannelsLabel,
  type SocialPackage,
} from "@/lib/social-packages";

const PAGE_URL = `${SITE_URL}${SOCIAL_ROUTE}`;

export const metadata: Metadata = {
  title: "Managed B2B Social Media, Not Another Tool",
  description:
    "Lihi Pinto plus 8 AI agents as your managed B2B social team: LinkedIn-first content, employee advocacy, and a monthly HubSpot results report. Book a call.",
  alternates: { canonical: SOCIAL_ROUTE },
  openGraph: {
    title: "Managed Social Media, Led by Lihi Pinto | Triple & Co.",
    description:
      "Not another social media tool. Your B2B social team, led by Lihi Pinto and run by Triple & Co.",
    url: PAGE_URL,
    siteName: "Triple & Co.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Social Media, Led by Lihi Pinto | Triple & Co.",
    description:
      "Not another social media tool. Your B2B social team, led by Lihi Pinto and run by Triple & Co.",
  },
};

// ---------------------------------------------------------------- copy

const PAINS = [
  "Your online presence does not reflect the quality of the business behind it.",
  "Your founder has real expertise and opinions. Publishing still happens in bursts.",
  "Every post waits on the founder for the idea, the draft, and the follow-up.",
  "Product updates and customer stories rarely turn into content worth reading.",
  "You have a social media tool, or could buy one. What you are missing is the people to fill it.",
];

const BUILT_FOR = [
  "SaaS",
  "AI",
  "Cybersecurity",
  "Agritech",
  "Foodtech",
  "Defense",
  "Consultancies",
  "Specialist tech services",
];

const LIHI_CREDENTIALS = [
  { figure: "$70M+", label: "raised at Syte.ai, where Lihi was founder and CRO" },
  { figure: "0 to $14M", label: "ARR built as the company's first salesperson" },
  { figure: "46 people", label: "marketing and sales organisation she led" },
];

const VIDEO_APPROACHES = [
  {
    option: "Option A",
    title: "Without client filming",
    body: "Brand-led videos made from your approved assets, product footage, screenshots, simple motion graphics, and suitable licensed material.",
    examples: ["Product walkthroughs and feature updates", "Customer-story and proof-point videos", "Framework and explainer motion pieces"],
  },
  {
    option: "Option B",
    title: "With client filming",
    body: "Founder-led videos from recordings you make on a phone or webcam. We provide the scripts, recording guidance, editing, captions, and publishing.",
    examples: ["Founder perspective and opinion pieces", "Answers to the questions buyers keep asking", "Behind-the-scenes and team moments"],
  },
];

const LIHI_OWNS = [
  {
    title: "Positioning and founder voice",
    body: "She leads discovery at the start, so content sounds like your founder and reflects how you actually sell.",
  },
  {
    title: "Monthly content direction",
    body: "Each calendar follows your commercial priorities, the questions your buyers ask, and the calls to action that matter now.",
  },
  {
    title: "Creative contribution",
    body: "She contributes ideas, angles, and copy to the work itself, not only to the brief.",
  },
  {
    title: "Production orchestration",
    body: "She directs the eight Triple & Co. agents across research, writing, design, video, publishing, and reporting.",
  },
  {
    title: "Personal batch review",
    body: "She reviews every monthly batch before it reaches you.",
  },
];

const YOU_BRING = [
  "Your expertise and point of view",
  "Approved facts, assets, and customer stories",
  "Business updates and priorities",
  "Timely approval of each monthly batch",
  "Access to HubSpot (or your CRM) for the results report",
];

const COMPARISON: { topic: string; tool: string; team: string }[] = [
  { topic: "Ideas and monthly direction", tool: "Your team", team: "Lihi, tied to your commercial priorities" },
  { topic: "Writing, design, and video", tool: "Your team", team: "8 Triple & Co. agents, directed and reviewed by Lihi" },
  { topic: "Quality review", tool: "Your team, when there is time", team: "Lihi, every monthly batch" },
  { topic: "Scheduling and publishing", tool: "Your team, inside the tool", team: "We do it, once you approve" },
  {
    topic: "Employee advocacy",
    tool: "Your people share from a content board",
    team: "We write posts for 2 to 5 team members, in their own voice",
  },
  {
    topic: "Pipeline reporting",
    tool: "Dashboards your team sets up and reads",
    team: "A monthly results report from your HubSpot, with Lihi's read on it",
  },
  {
    topic: "What you need to start",
    tool: "A license, a setup project, and people to run it",
    team: "Your expertise, approvals, and HubSpot access",
  },
];

const COUNTING = [
  { term: "Platform", def: "A network, such as LinkedIn or Instagram." },
  {
    term: "Account",
    def: "A profile we manage. LinkedIn counts twice: your founder profile and your company page.",
  },
  {
    term: "Original piece",
    def: "One new post, carousel, or short video. Your monthly allowance is one shared pool across your accounts.",
  },
  {
    term: "Publication",
    def: "One piece published on one account. Resizing, captions, and platform formatting never use up another piece.",
  },
];

const FAQS = [
  {
    q: "How is this different from a social media management platform?",
    a: "A platform gives your team software to plan, publish, and measure. Your team still comes up with the ideas, writes, designs, and posts. We are the team: Lihi leads the direction, eight Triple & Co. agents create and publish, and you approve. If you already have an in-house social team that needs better tooling, a platform may be the better fit, and we will say so on the call.",
  },
  {
    q: "What do the 8 agents do?",
    a: "They are the production team behind your social media. Nova researches, Rex plans campaigns, Camille writes, Vega designs, Lumen edits video, Sage adapts each piece for every account, Zara runs the calendar and publishing, and Atlas tracks links and builds the monthly report. All eight are included in every package, and Lihi directs their work.",
  },
  {
    q: "Is the content written by AI?",
    a: "The agents do the production work, and Lihi stays in charge of it. She sets the direction, contributes ideas and copy, and reviews every piece before it reaches you. You approve before anything is published. Founder videos always use your own face and voice.",
  },
  {
    q: "Do we need to know which package we want before we book?",
    a: "No. The call is where we work out the right content volume and channels together. Choose \"Not sure yet\" when you book, or pick the package you are leaning toward.",
  },
  {
    q: "Does Lihi really review everything?",
    a: "Yes. Lihi shapes the direction and personally reviews every client's monthly content batch before it reaches you. That is included in all three packages, not reserved for the largest one.",
  },
  {
    q: "What do you need from us?",
    a: "Your expertise and point of view, approved facts and assets, business updates, and timely approval of each batch. We take the coordination and production off your plate, but the best content still starts with what you know.",
  },
  {
    q: "Do we have to film ourselves?",
    a: "No. Every package can use brand-led videos built from your approved assets, product footage, screenshots, simple motion graphics, and suitable licensed material. If your founder prefers to appear on camera, you record and we provide scripts, recording guidance, editing, captions, and publishing. Videos run about 30 to 60 seconds, and we do not travel to film.",
  },
  {
    q: "How do approvals and revisions work?",
    a: "We deliver each month as one batch, already reviewed by Lihi. You approve it with one consolidated round of revisions, and we schedule and publish what you approve.",
  },
  {
    q: "Which channels can we add on Social Growth?",
    a: "Social Growth covers your founder LinkedIn profile, your company LinkedIn page, and any two of Instagram, Facebook, X, and TikTok. Only pieces that suit a channel are published there, so publication counts depend on the channels you choose.",
  },
  {
    q: "Who owns our social accounts?",
    a: "You do. We publish through standard scheduling access to your accounts, and you keep ownership of every account.",
  },
  {
    q: "Can our team members post too?",
    a: "Yes, with the employee advocacy add-on. We write posts for 2 to 5 of your team members in their own voice, for their personal LinkedIn profiles. Lihi reviews them with the monthly batch, and each person approves their own posts. It works with any package, and the volume per person is agreed on the call.",
  },
  {
    q: "How do we see results?",
    a: "Every month you get a results report. Every link we publish carries tracking tags, and the report shows the visits, form fills, contacts, and deals from social that reached your HubSpot, alongside reach and engagement by account. Not on HubSpot? We agree the setup on the call.",
  },
  {
    q: "Can you handle technical or specialised topics?",
    a: "That is the work we are built for: B2B service and technology companies with complex offers, in sectors such as SaaS, AI, agritech, foodtech, defence, cybersecurity, consultancies, and specialist technology services. Lihi leads discovery so we understand your offer and your buyers, and you approve facts before anything is published.",
  },
  {
    q: "Will social media generate leads for us?",
    a: "We build every month around your commercial priorities: the questions buyers ask, the calls to action that fit, and a monthly report on what reached your HubSpot. We do not promise a set number of leads, sales, or revenue from organic posts.",
  },
  {
    q: "What is not included?",
    a: "Daily comment and DM management, paid advertising, on-site filming, bespoke animation, and new landing pages sit outside the core social packages.",
  },
  {
    q: "How much does it cost?",
    a: "We discuss pricing on the call, once we understand the volume and channels that fit your business.",
  },
];

// ---------------------------------------------------------------- schema

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Managed Social Media",
  serviceType: "Managed B2B social media",
  url: PAGE_URL,
  provider: { "@id": ORG_ID },
  brand: lihiRef,
  areaServed: "Worldwide",
  audience: { "@type": "BusinessAudience", audienceType: "B2B service and technology companies" },
  description:
    "A managed B2B social media team, not another tool. Lihi Pinto and eight Triple & Co. AI agents create and publish the work, LinkedIn first, with a monthly results report from HubSpot.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Managed social media packages",
    itemListElement: SOCIAL_PACKAGES.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.name,
        description: `${p.descriptor} ${p.originalPieces} original pieces a month across ${p.managedAccounts} managed accounts.`,
      },
    })).concat({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: `${ADVOCACY_ADDON.name} add-on`,
        description: `LinkedIn posts written for ${ADVOCACY_ADDON.minMembers} to ${ADVOCACY_ADDON.maxMembers} team members in their own voice. Available with any package.`,
      },
    }),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Managed Social Media", item: PAGE_URL },
  ],
};

// ---------------------------------------------------------------- styles

const primaryBtn =
  "inline-flex items-center justify-center gap-2 min-h-[48px] rounded-[10px] bg-brand-dark px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] motion-reduce:hover:translate-y-0";
const cardCls = "relative overflow-hidden rounded-2xl bg-white border border-purple-15 shadow-[var(--shadow-base)]";
const TopBar = () => <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[5px] gradient-bar" />;
const Arrow = () => <span aria-hidden="true">&#8594;</span>;

// ---------------------------------------------------------------- pieces

function PieceGrid({ pkg }: { pkg: SocialPackage }) {
  return (
    <div aria-hidden="true" className="grid grid-cols-10 gap-1 w-full max-w-[220px]">
      {Array.from({ length: pkg.originalPieces }, (_, i) =>
        i < pkg.writtenVisualPieces ? (
          <span key={i} className="aspect-square rounded-[3px] bg-purple-15" />
        ) : (
          <span key={i} className="aspect-square rounded-[3px] bg-brand" />
        ),
      )}
    </div>
  );
}

function AccountRow({ label, value, included }: { label: string; value: string; included: boolean }) {
  return (
    <li className="flex items-start justify-between gap-3 py-2.5 border-t border-purple-15 text-sm">
      <span className="text-purple-7">{label}</span>
      <span className={`inline-flex items-center gap-1.5 text-right font-semibold ${included ? "text-purple-9" : "text-purple-6"}`}>
        {included ? (
          <Check className="h-4 w-4 text-brand-dark shrink-0" aria-hidden="true" />
        ) : (
          <Minus className="h-4 w-4 shrink-0" aria-hidden="true" />
        )}
        {value}
      </span>
    </li>
  );
}

function TeamStack({ size = 24 }: { size?: number }) {
  return (
    <span aria-hidden="true" className="flex shrink-0 -space-x-2">
      <Avatar src={LIHI_PORTRAIT} kind="person" size={size + 4} className="relative z-10" />
      {SOCIAL_AGENTS.slice(0, 4).map((a) => (
        <Avatar key={a.id} src={a.image} size={size} />
      ))}
    </span>
  );
}

function PackageCard({ pkg }: { pkg: SocialPackage }) {
  return (
    <article className={`${cardCls} flex flex-col p-6 sm:p-7`} aria-labelledby={`pkg-${pkg.id}`}>
      <TopBar />
      <h3 id={`pkg-${pkg.id}`} className="text-xl font-black tracking-tight text-purple-9">
        {pkg.name}
      </h3>
      <p className="text-sm text-purple-7 mt-1 min-h-[2.5rem]">{pkg.descriptor}</p>

      <p className="mt-5 text-purple-9">
        <span className="text-6xl font-black tracking-tighter leading-none">{pkg.originalPieces}</span>
        <span className="block text-sm font-semibold mt-1">original pieces a month</span>
      </p>
      <div className="mt-4 mb-1">
        <PieceGrid pkg={pkg} />
      </div>
      <p className="text-sm text-purple-7 mb-5">
        <span className="font-semibold text-purple-9">{pkg.writtenVisualPieces}</span> written or visual
        {" · "}
        <span className="font-semibold text-purple-9">{pkg.shortVideos}</span> short videos
      </p>

      <p className="text-sm font-bold text-purple-9">
        {pkg.managedAccounts} managed accounts on {pkg.platforms} {pkg.platforms === 1 ? "platform" : "platforms"}
      </p>
      <ul className="mt-2 mb-6">
        <AccountRow label="Founder LinkedIn profile" value="Included" included />
        <AccountRow label="Company LinkedIn page" value="Included" included />
        <AccountRow
          label="Instagram, Facebook, X, TikTok"
          value={additionalChannelsLabel(pkg)}
          included={pkg.additionalChannels > 0}
        />
      </ul>

      <div className="flex items-center gap-3 rounded-[10px] bg-pink-05 px-3 py-2.5 mb-6">
        <TeamStack />
        <p className="text-sm font-semibold text-purple-9 leading-snug">Lihi + all 8 agents, with Lihi&apos;s batch review</p>
      </div>

      <BookCallLink location={`package-${pkg.id}`} packageId={pkg.id} className={`${primaryBtn} mt-auto w-full`}>
        Book a Call with Lihi <Arrow />
        <span className="sr-only"> about {pkg.name}</span>
      </BookCallLink>
    </article>
  );
}

// ---------------------------------------------------------------- page

export default function SocialMediaManagementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="tech-grid relative overflow-hidden bg-white pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-purple-5/15 blur-[120px]"
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          <div>
            <p className="eyebrow mb-5">Managed B2B social media · LinkedIn first · Led by Lihi Pinto</p>
            <h1 className="text-[40px] sm:text-5xl lg:text-[58px] font-black tracking-tight leading-[1.02] text-purple-9 mb-6">
              Social media with creative ownership and <span className="gradient-text">commercial purpose.</span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-7 leading-relaxed mb-8 max-w-[580px]">
              <strong className="font-semibold text-purple-9">Led by Lihi Pinto. Created and published by Triple &amp; Co.</strong>{" "}
              Not another social media tool: a B2B social team built around what your business needs to communicate,
              who it needs to reach, and how it can contribute to revenue. Every month you see what reached your
              HubSpot.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <BookCallLink location="hero" className={primaryBtn}>
                Book a Call with Lihi <Arrow />
              </BookCallLink>
              <a
                href="#packages"
                className="inline-flex items-center justify-center min-h-[48px] rounded-[10px] border border-purple-15 bg-white px-7 py-3.5 text-[15px] font-semibold text-purple-9 transition-colors hover:bg-purple-05"
              >
                Explore the Packages
              </a>
            </div>
            <div className="flex items-center gap-3">
              <TeamStack size={30} />
              <p className="text-sm text-purple-7 leading-snug">
                <span className="font-bold text-purple-9">Lihi + 8 AI agents</span> on every package. A 30-minute
                call, no preparation needed.
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <StudioBoard />
          </div>
        </div>
      </section>

      {/* Situation */}
      <section className="bg-purple-05 py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow mb-4">Sound familiar?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9 mb-5">
              Your business is sharper than <span className="gradient-text">your feed.</span>
            </h2>
            <p className="text-lg text-purple-7 leading-relaxed">
              We work with B2B service and technology companies that have a clear offer, real traction, and expertise
              worth sharing, but not the internal capacity to own social every week.
            </p>
            <p className="eyebrow mt-8 mb-3">Built for</p>
            <ul aria-label="Sectors we work with" className="flex flex-wrap gap-2">
              {BUILT_FOR.map((sector) => (
                <li key={sector} className="rounded-full border border-purple-15 bg-white px-3.5 py-1.5 text-sm text-purple-8">
                  {sector}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal>
            <ol className="divide-y divide-purple-15 border-y border-purple-15">
              {PAINS.map((pain, i) => (
                <li key={pain} className="flex gap-5 py-5">
                  <span className="text-sm font-black text-brand-dark tabular-nums pt-0.5">0{i + 1}</span>
                  <p className="text-[17px] text-purple-8 leading-relaxed">{pain}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[17px] font-semibold text-purple-9 leading-relaxed">
              We take ownership of the month: direction, creation, review, and publishing. You bring the expertise and
              the approvals.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="tech-grid bg-white py-20 lg:py-28" aria-labelledby="team-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[760px] mb-10">
              <p className="eyebrow mb-4">Your team</p>
              <h2 id="team-title" className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9 mb-5">
                Lihi + 8 agents. <span className="gradient-text">One social team.</span>
              </h2>
              <p className="text-lg text-purple-7 leading-relaxed">
                Every package includes all eight Triple &amp; Co. AI agents as your production team, working
                alongside Lihi. They research, write, design, edit, adapt, publish, and measure. Lihi sets the
                direction, contributes to the work, and reviews every piece before it reaches you.
              </p>
            </div>
          </ScrollReveal>
          <AgentTeam />
        </div>
      </section>

      {/* Lihi's role */}
      <section className="bg-purple-05 py-20 lg:py-28" aria-labelledby="lihi-role">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[720px] mb-12">
              <p className="eyebrow mb-4">Who is in charge</p>
              <h2 id="lihi-role" className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9 mb-5">
                Lihi leads your social. <span className="gradient-text">Personally.</span>
              </h2>
              <p className="text-lg text-purple-7 leading-relaxed">
                Lihi Pinto founded Triple &amp; Co. She is accountable for the direction and quality of your social
                presence, and the Triple &amp; Co. team produces and publishes the work. Here is what she owns, in
                every package.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
            <ScrollReveal>
              <div className={`${cardCls} p-6 sm:p-8 h-full`}>
                <TopBar />
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-2">What Lihi owns</h3>
                <ol>
                  {LIHI_OWNS.map((item, i) => (
                    <li key={item.title} className="grid grid-cols-[2.25rem_1fr] gap-3 py-4 border-b border-purple-15 last:border-b-0">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-05 text-sm font-black text-brand-dark">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-extrabold text-purple-9">{item.title}</p>
                        <p className="text-[15px] text-purple-7 leading-relaxed mt-0.5">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className={`${cardCls} p-6 sm:p-8 h-full`}>
                <TopBar />
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-4">What you bring</h3>
                <ul className="space-y-3 mb-6">
                  {YOU_BRING.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] text-purple-8">
                      <Check className="h-5 w-5 text-brand-dark shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] text-purple-7 leading-relaxed border-t border-purple-15 pt-5">
                  You stay the source of truth on facts and priorities. We take the ideas, drafts, design, scheduling,
                  and follow-through off your plate.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ul aria-label="Lihi's track record" className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-purple-15 pt-8">
            {LIHI_CREDENTIALS.map((c) => (
              <li key={c.figure}>
                <p className="text-3xl sm:text-4xl font-black tracking-tight text-purple-9">{c.figure}</p>
                <p className="text-[15px] text-purple-7 mt-1">{c.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tool vs team */}
      <section className="tech-grid bg-white py-20 lg:py-28" aria-labelledby="compare-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[760px] mb-12">
              <p className="eyebrow mb-4">Software or a team?</p>
              <h2 id="compare-title" className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9 mb-5">
                A tool needs a team. <span className="gradient-text">We are the team.</span>
              </h2>
              <p className="text-lg text-purple-7 leading-relaxed">
                Social media platforms are good at publishing, inboxes, and dashboards. They still need people to come
                up with the ideas, write, design, and post every week. Here is who does the work in each model.
              </p>
            </div>
          </ScrollReveal>
          <div className="rounded-2xl border border-purple-15 bg-white overflow-hidden shadow-[var(--shadow-base)]">
            <div aria-hidden="true" className="hidden md:grid grid-cols-[1fr_1fr_1.2fr] gap-6 bg-purple-05 px-6 py-4 text-xs font-bold uppercase tracking-widest">
              <span className="text-purple-6">Who does it</span>
              <span className="text-purple-6">With social media software</span>
              <span className="text-brand-dark">With Triple &amp; Co.</span>
            </div>
            <ul>
              {COMPARISON.map((row) => (
                <li
                  key={row.topic}
                  className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.2fr] gap-2 md:gap-6 px-6 py-5 border-t border-purple-15 first:border-t-0 md:first:border-t"
                >
                  <p className="font-extrabold text-purple-9">{row.topic}</p>
                  <p className="text-[15px] text-purple-6">
                    <span className="md:sr-only font-semibold">With software: </span>
                    {row.tool}
                  </p>
                  <p className="flex gap-2 text-[15px] font-semibold text-purple-9">
                    <Check className="h-5 w-5 text-brand-dark shrink-0" aria-hidden="true" />
                    <span>
                      <span className="md:sr-only text-brand-dark">With Triple &amp; Co.: </span>
                      {row.team}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-[15px] text-purple-7 max-w-[760px]">
            Already have an in-house social team that needs better tooling? A platform may be the better fit, and
            we will tell you so on the call.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-purple-05 py-20 lg:py-28 scroll-mt-20" aria-labelledby="packages-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[760px] mb-12">
              <p className="eyebrow mb-4">Three packages</p>
              <h2 id="packages-title" className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9 mb-5">
                Three levels of volume. <span className="gradient-text">One standard of ownership.</span>
              </h2>
              <p className="text-lg text-purple-7 leading-relaxed">
                The packages differ by content volume and channel coverage. Lihi&apos;s positioning work, commercial
                direction, creative contribution, and batch review come with every one.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {SOCIAL_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-purple-6">
            <p className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="h-3 w-3 rounded-[3px] bg-purple-15" /> Written or visual piece
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="h-3 w-3 rounded-[3px] bg-brand" /> Short video
              </span>
            </p>
            <p>Proposed package levels. We confirm the right scope with you on the call.</p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            <ScrollReveal>
              <article className={`${cardCls} p-6 sm:p-8 h-full`} aria-labelledby="addon-title">
                <TopBar />
                <p className="text-sm font-bold text-brand-dark mb-1">Add-on · Works with any package</p>
                <h3 id="addon-title" className="text-2xl font-black tracking-tight text-purple-9 mb-3">
                  {ADVOCACY_ADDON.name} for {ADVOCACY_ADDON.minMembers} to {ADVOCACY_ADDON.maxMembers} team members
                </h3>
                <p className="text-[15px] text-purple-7 leading-relaxed mb-5">
                  Your people reach buyers your company page never will. We make it easy for them to show up.
                </p>
                <ul className="space-y-3 mb-5">
                  {ADVOCACY_ADDON.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] text-purple-8 leading-relaxed">
                      <Check className="h-5 w-5 text-brand-dark shrink-0 mt-0.5" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-purple-6">Volume per person is agreed on the call.</p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <article className={`${cardCls} p-6 sm:p-8 h-full`} aria-labelledby="report-title">
                <TopBar />
                <p className="text-sm font-bold text-brand-dark mb-1">Included · Every package</p>
                <h3 id="report-title" className="text-2xl font-black tracking-tight text-purple-9 mb-3">
                  A monthly results report
                </h3>
                <p className="text-[15px] text-purple-7 leading-relaxed mb-5">
                  Social should show up in your pipeline, not only in likes. Every month you see what it contributed.
                </p>
                <dl className="space-y-4">
                  {REPORT_ITEMS.map((item) => (
                    <div key={item.title}>
                      <dt className="font-extrabold text-purple-9">{item.title}</dt>
                      <dd className="text-[15px] text-purple-7 leading-relaxed mt-0.5">{item.body}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-sm text-purple-6 mt-5">Not on HubSpot? We agree the setup on the call.</p>
              </article>
            </ScrollReveal>
          </div>

          {/* Publishing, handled */}
          <div className="mt-14">
            <ScrollReveal>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-purple-9 mb-3">
                Everything a publishing platform does, handled for you
              </h3>
              <p className="text-purple-7 leading-relaxed mb-6 max-w-[720px]">
                Campaigns, calendar, approvals, assets, and governance are part of the service. Your team never has to
                learn or run a publishing tool.
              </p>
            </ScrollReveal>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PUBLISHING_ITEMS.map((item) => (
                <li key={item.title} className={`${cardCls} p-6`}>
                  <TopBar />
                  <p className="flex items-center gap-2 font-extrabold text-purple-9 mb-1.5">
                    <Check className="h-5 w-5 text-brand-dark shrink-0" aria-hidden="true" />
                    {item.title}
                  </p>
                  <p className="text-[15px] text-purple-7 leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Included in every package */}
          <ScrollReveal>
            <div className="mt-14 rounded-2xl border border-purple-15 bg-white p-6 sm:p-10">
              <h3 className="text-2xl font-black tracking-tight text-purple-9 mb-6">Included in every package</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                {COMMON_INCLUSIONS.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-purple-8 leading-relaxed">
                    <Check className="h-5 w-5 text-brand-dark shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Counting */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 items-start">
            <ScrollReveal>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-purple-9 mb-3">How we count</h3>
              <p className="text-purple-7 leading-relaxed mb-6">
                Your allowance is one monthly pool of original pieces, shared across your managed accounts. It is not
                a number of new pieces per account.
              </p>
              <dl className="space-y-4">
                {COUNTING.map((c) => (
                  <div key={c.term} className="grid grid-cols-[8rem_1fr] gap-4">
                    <dt className="font-extrabold text-purple-9">{c.term}</dt>
                    <dd className="text-[15px] text-purple-7 leading-relaxed">{c.def}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <figure className={`${cardCls} p-6 sm:p-8`}>
                <TopBar />
                <figcaption className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-5">Example</figcaption>
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-brand text-white font-black text-2xl">
                    1
                  </div>
                  <p className="font-extrabold text-purple-9 leading-snug">
                    original short video
                    <span className="block text-sm font-normal text-purple-7">counts as 1 piece from your pool</span>
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-2 mb-5">
                  {["Founder LinkedIn", "Company LinkedIn", "Instagram", "TikTok"].map((acct) => (
                    <li key={acct} className="rounded-[10px] border border-purple-15 bg-purple-05 px-3 py-2.5 text-sm font-semibold text-purple-8">
                      {acct}
                    </li>
                  ))}
                </ul>
                <p className="text-[15px] text-purple-9 font-semibold">= 1 original piece, 4 publications</p>
                <p className="text-sm text-purple-7 leading-relaxed mt-3">
                  Founder and company LinkedIn have distinct voices, so they are not copies of each other. Not every
                  piece suits every channel, so we only publish where it fits.
                </p>
              </figure>
            </ScrollReveal>
          </div>

          {/* Video approaches */}
          <div className="mt-14">
            <ScrollReveal>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-purple-9 mb-3">
                Two ways to make video, in any package
              </h3>
              <p className="text-purple-7 leading-relaxed mb-6 max-w-[720px]">
                Your short-video allowance works either way, or as a mix. Videos run about 30 to 60 seconds.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {VIDEO_APPROACHES.map((v) => (
                <div key={v.option} className={`${cardCls} p-6 sm:p-7`}>
                  <TopBar />
                  <p className="text-sm font-bold text-brand-dark mb-1">{v.option}</p>
                  <h4 className="text-lg font-extrabold text-purple-9 mb-2">{v.title}</h4>
                  <p className="text-[15px] text-purple-7 leading-relaxed mb-4">{v.body}</p>
                  <ul className="space-y-2">
                    {v.examples.map((e) => (
                      <li key={e} className="flex gap-2.5 text-[15px] text-purple-8">
                        <Check className="h-5 w-5 text-brand-dark shrink-0" aria-hidden="true" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-purple-6 mt-4">
              We do not travel to film.
            </p>
          </div>
        </div>
      </section>

      {/* Sample month */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="sample-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[760px] mb-10">
              <p className="eyebrow mb-4">A sample month</p>
              <h2 id="sample-title" className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9 mb-5">
                What a month <span className="gradient-text">could look like.</span>
              </h2>
              <p className="inline-flex items-start gap-2 rounded-[10px] border border-purple-15 bg-white px-4 py-3 text-sm text-purple-8">
                <span className="font-bold text-brand-dark shrink-0">Illustrative example.</span>
                <span>
                  {SAMPLE_COMPANY}{" "}is a fictional B2B AI operations company, not a Triple &amp; Co. client. Real
                  calendars follow your priorities and channels.
                </span>
              </p>
            </div>
          </ScrollReveal>
          <SampleMonth />

          <div className="mt-16">
            <ScrollReveal>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <div className="max-w-[720px]">
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-purple-9 mb-3">
                    Five pieces from the same month, finished.
                  </h3>
                  <p className="text-purple-7 leading-relaxed">
                    Illustrative previews for {SAMPLE_COMPANY}. The voice, the formats, and the adaptation are what you
                    would receive; the company and its numbers are invented.
                  </p>
                </div>
                <p aria-hidden="true" className="text-sm font-semibold text-purple-7">
                  Scroll for more <Arrow />
                </p>
              </div>
            </ScrollReveal>
            <SamplePieces />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-purple-05 py-20 lg:py-28" aria-labelledby="how-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <HowItWorks />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="faq-title">
        <div className="mx-auto max-w-[860px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="eyebrow mb-4">Questions</p>
              <h2 id="faq-title" className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.08] text-purple-9">
                Before you book
              </h2>
            </div>
          </ScrollReveal>
          <PillarFAQ faqs={FAQS} />
        </div>
      </section>

      {/* Closing + booking */}
      <section id="book" className="tech-grid relative overflow-hidden bg-purple-05 py-20 lg:py-28 scroll-mt-16" aria-labelledby="book-title">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
        />
        <div className="relative z-10 mx-auto max-w-[960px] px-6 sm:px-8">
          <div className="text-center mb-10">
            <p className="eyebrow mb-4">Book a call with Lihi</p>
            <h2 id="book-title" className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight leading-[1.05] text-purple-9 mb-4">
              Let&apos;s find the right package <span className="gradient-text">for your business.</span>
            </h2>
            <p className="text-lg text-purple-7 max-w-[620px] mx-auto leading-relaxed">
              Let&apos;s find the right content volume, channels, and add-ons for your business. You do not need to
              know your package in advance.
            </p>
          </div>
          <div className={`${cardCls} p-5 sm:p-8`}>
            <TopBar />
            <SocialBooking />
          </div>
        </div>
      </section>
    </>
  );
}
