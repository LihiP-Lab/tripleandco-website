import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";
import { BookCallLink } from "@/components/social/BookCallLink";
import { AgentTeam } from "@/components/social/AgentTeam";
import { SampleMonth } from "@/components/social/SampleMonth";
import { SocialBooking } from "@/components/social/SocialBooking";
import { StudioBoard } from "@/components/social/StudioBoard";
import { Avatar, LIHI_PORTRAIT } from "@/components/social/studio";
import { ORG_ID, SITE_URL, lihiRef } from "@/lib/seo";
import {
  ADVOCACY_ADDON,
  REPORT_ITEMS,
  SAMPLE_COMPANY,
  SOCIAL_AGENTS,
  SOCIAL_PACKAGES,
  SOCIAL_ROUTE,
} from "@/lib/social-packages";

const ROUTE = "/social-media-for-founders";
const PAGE_URL = `${SITE_URL}${ROUTE}`;
const CAMPAIGN = "social-media-for-founders";

export const metadata: Metadata = {
  title: "Social Media for Founders, Without a Team",
  description:
    "Lihi Pinto and 8 AI agents plan, create, and publish your social media every month, LinkedIn first. A consistent, converting presence for one monthly package.",
  alternates: { canonical: ROUTE },
  openGraph: {
    title: "Social Media for Founders, Without a Team | Triple & Co.",
    description:
      "Show up on social every week without hiring a team. Lihi Pinto and 8 AI agents do the work, you approve.",
    url: PAGE_URL,
    siteName: "Triple & Co.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media for Founders, Without a Team | Triple & Co.",
    description:
      "Show up on social every week without hiring a team. Lihi Pinto and 8 AI agents do the work, you approve.",
  },
};

// ---------------------------------------------------------------- copy

const MIN_PIECES = Math.min(...SOCIAL_PACKAGES.map((p) => p.originalPieces));
const MAX_PIECES = Math.max(...SOCIAL_PACKAGES.map((p) => p.originalPieces));

const NUMBERS = [
  { figure: "8", label: "AI agents in every package" },
  { figure: "1", label: "senior reviewer on every piece: Lihi" },
  { figure: `${MIN_PIECES} to ${MAX_PIECES}`, label: "original pieces a month, planned before the month starts" },
  { figure: "0", label: "hires, tools, or freelancers to manage" },
];

const FIVE_HIRES = ["Strategist", "Copywriter", "Designer", "Video editor", "Analyst"];

const CONVERTING = [
  {
    title: "A reason to act in every post",
    body: "Each piece ends on a call to action tied to what you sell this month: a call, a demo, a download, or a reply.",
  },
  {
    title: "Tracked links on every post",
    body: "Every link carries tracking tags, so you see which posts and accounts sent visitors to your site.",
  },
  {
    title: "Built on your buyers' questions",
    body: "Nova researches what your buyers ask and Rex turns it into monthly campaigns, so posts speak to people who can buy.",
  },
];

const APPROVAL_STEPS = [
  { who: "Lihi", text: "Reviews every piece in the monthly batch before you see it." },
  { who: "You", text: "Approve the whole month in one sitting, with one round of changes." },
  { who: "Zara", text: "Schedules and publishes what you approved. Nothing goes live without you." },
];

const ONE_TO_MANY = ["Founder LinkedIn", "Company LinkedIn", "Instagram", "TikTok"];

const INCLUDED = [
  { title: "Your voice, learned", body: "Camille writes in your voice after Lihi leads a positioning and founder-voice discovery." },
  { title: "Branded design", body: "Vega designs every carousel and image in your brand, from your approved assets." },
  { title: "Short videos", body: "Lumen edits 30 to 60 second videos, from your recordings or from brand assets, no filming needed." },
  { title: "LinkedIn first", body: "Your founder profile and company page are in every package. Add Instagram, Facebook, X, or TikTok as you grow." },
  { title: "You own your accounts", body: "We publish through standard scheduling access. Every account stays yours." },
  { title: "Pause on request", body: "If something changes in your market or your business, tell us and we pause what is scheduled." },
];

const FAQS = [
  {
    q: "Can a small business afford this?",
    a: `It is built for founders who cannot justify a full social team. Instead of five hires (strategist, copywriter, designer, video editor, and analyst), you get one monthly package with Lihi and all eight agents. You can start with Social Essentials: ${MIN_PIECES} original pieces a month on your founder and company LinkedIn. We discuss pricing on the call, once we know the volume and channels that fit.`,
  },
  {
    q: "How much of my time does it take?",
    a: "A discovery session with Lihi at the start, then about one sitting a month to approve the batch. In between, send us your business updates, launches, and customer stories. We take the planning, writing, design, video, publishing, and reporting off your plate.",
  },
  {
    q: "Why not do it myself with AI tools?",
    a: "AI tools draft. You still decide what to say, edit it into your voice, design it, post it on time, and check what worked, every week. Here, eight agents do the production, Lihi directs and reviews it, and you only approve. Consistency is the hard part, and that is what you hand over.",
  },
  {
    q: "Will it sound like me?",
    a: "Yes. Lihi leads a founder-voice discovery at the start, Camille writes in that voice, and Lihi reviews every piece. You approve everything before it is published, and your feedback shapes the next month.",
  },
  {
    q: "Will social media bring me customers?",
    a: "We build every month to convert: posts tied to what you sell, a call to action in each piece, tracked links, and a monthly report on the visits, form fills, contacts, and deals that reached your HubSpot. We do not promise a set number of leads, sales, or revenue from organic posts.",
  },
  {
    q: "How is this different from hiring a freelancer?",
    a: "A freelancer usually covers one skill, such as writing or design, and you still manage the plan, the calendar, and the results. Here research, writing, design, video, publishing, and reporting come together, with Lihi accountable for all of it.",
  },
  {
    q: "Is the content written by AI?",
    a: "The agents do the production work, and Lihi stays in charge of it. She sets the direction, contributes ideas and copy, and reviews every piece before it reaches you. You approve before anything is published. Founder videos always use your own face and voice.",
  },
  {
    q: "Do I have to film myself?",
    a: "No. Videos can be built from your approved assets, product footage, screenshots, and simple motion graphics. If you prefer to appear on camera, you record on your phone and we provide the script, editing, captions, and publishing.",
  },
  {
    q: "Can my team post too?",
    a: `Yes, with the employee advocacy add-on. We write posts for ${ADVOCACY_ADDON.minMembers} to ${ADVOCACY_ADDON.maxMembers} team members in their own voice, for their personal LinkedIn profiles. Lihi reviews them with the monthly batch, and each person approves their own posts.`,
  },
  {
    q: "Who owns my social accounts?",
    a: "You do. We publish through standard scheduling access to your accounts, and you keep ownership of every account.",
  },
];

// ---------------------------------------------------------------- schema

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Social Media for Founders",
  serviceType: "Managed social media for founders and business owners",
  url: PAGE_URL,
  provider: { "@id": ORG_ID },
  brand: lihiRef,
  areaServed: "Worldwide",
  audience: { "@type": "BusinessAudience", audienceType: "Founders and business owners" },
  description:
    "Managed social media for founders and business owners on a limited budget. Lihi Pinto and eight Triple & Co. AI agents plan, create, publish, and report every month, LinkedIn first, with every piece approved by the founder.",
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
    { "@type": "ListItem", position: 2, name: "Social Media for Founders", item: PAGE_URL },
  ],
};

// ---------------------------------------------------------------- styles

const primaryBtn =
  "inline-flex items-center justify-center gap-2 min-h-[48px] rounded-[10px] bg-brand-dark px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] motion-reduce:hover:translate-y-0";
const secondaryBtn =
  "inline-flex items-center justify-center min-h-[48px] rounded-[10px] border border-purple-15 bg-white px-7 py-3.5 text-[15px] font-semibold text-purple-9 transition-colors hover:bg-purple-05";
const cardCls = "relative overflow-hidden rounded-2xl bg-white border border-purple-15 shadow-[var(--shadow-base)]";
const h2Cls = "text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9 mb-5";
const TopBar = () => <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[5px] gradient-bar" />;
const Arrow = () => <span aria-hidden="true">&#8594;</span>;

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

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] text-purple-8 leading-relaxed">
          <Check className="h-5 w-5 text-brand-dark shrink-0 mt-0.5" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------- page

export default function SocialMediaForFoundersPage() {
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
            <p className="eyebrow mb-5">For founders and business owners · Led by Lihi Pinto</p>
            <h1 className="text-[40px] sm:text-5xl lg:text-[58px] font-black tracking-tight leading-[1.02] text-purple-9 mb-6">
              Show up on social every week. <span className="gradient-text">Without hiring a team.</span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-7 leading-relaxed mb-8 max-w-[580px]">
              <strong className="font-semibold text-purple-9">Lihi Pinto and 8 AI agents</strong> plan, create, and
              publish your social media, LinkedIn first. Human expertise, agent speed, and one monthly package instead
              of five hires. You approve, we publish.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <BookCallLink location="founders-hero" className={primaryBtn}>
                Book a Call with Lihi <Arrow />
              </BookCallLink>
              <a href="#calendar" className={secondaryBtn}>
                See a Sample Month
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

      {/* Content calendar */}
      <section id="calendar" className="bg-purple-05 py-20 lg:py-28 scroll-mt-20" aria-labelledby="calendar-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[760px] mb-10">
              <p className="eyebrow mb-4">Content calendar</p>
              <h2 id="calendar-title" className={h2Cls}>
                Your whole month, planned <span className="gradient-text">before it starts.</span>
              </h2>
              <p className="text-lg text-purple-7 leading-relaxed mb-5">
                Consistency is where founders fall behind. A busy week turns into a quiet month, and buyers forget you.
                We plan {MIN_PIECES} to {MAX_PIECES} pieces across your founder profile and company page, then publish
                them on schedule, whatever your week looks like.
              </p>
              <p className="inline-flex items-start gap-2 rounded-[10px] border border-purple-15 bg-white px-4 py-3 text-sm text-purple-8">
                <span className="font-bold text-brand-dark shrink-0">Illustrative example.</span>
                <span>
                  {SAMPLE_COMPANY} is a fictional B2B company, not a Triple &amp; Co. client. Your calendar follows your
                  priorities and channels.
                </span>
              </p>
            </div>
          </ScrollReveal>
          <SampleMonth />
        </div>
      </section>

      {/* Numbers */}
      <section className="tech-grid bg-white py-20 lg:py-24" aria-labelledby="numbers-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[760px] mb-10">
              <p className="eyebrow mb-4">Why founders choose Triple &amp; Co.</p>
              <h2 id="numbers-title" className={h2Cls}>
                A full social team, <span className="gradient-text">at a fraction of the cost.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {NUMBERS.map((n) => (
              <li key={n.label} className={`${cardCls} p-6`}>
                <TopBar />
                <p className="text-5xl font-black tracking-tighter text-purple-9 leading-none">{n.figure}</p>
                <p className="mt-3 text-[15px] text-purple-7 leading-snug">{n.label}</p>
              </li>
            ))}
          </ul>
          <ScrollReveal>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-purple-15 bg-purple-05 p-6 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-widest text-purple-6 mb-3">A social team</p>
                <p className="text-2xl font-black text-purple-9 mb-4">5 hires</p>
                <ul className="flex flex-wrap gap-2" aria-label="Roles in a typical social team">
                  {FIVE_HIRES.map((role) => (
                    <li key={role} className="rounded-full border border-purple-15 bg-white px-3.5 py-1.5 text-sm text-purple-8">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${cardCls} p-6 sm:p-8`}>
                <TopBar />
                <p className="text-sm font-bold uppercase tracking-widest text-brand-dark mb-3">Triple &amp; Co.</p>
                <p className="text-2xl font-black text-purple-9 mb-4">Lihi + 8 agents, one monthly package</p>
                <div className="flex items-center gap-3">
                  <TeamStack size={28} />
                  <p className="text-sm text-purple-7">Human expertise. Agent speed.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Converting */}
      <section className="bg-purple-05 py-20 lg:py-28" aria-labelledby="convert-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[760px] mb-10">
              <p className="eyebrow mb-4">Built to convert</p>
              <h2 id="convert-title" className={h2Cls}>
                Posts that bring buyers, <span className="gradient-text">not only likes.</span>
              </h2>
              <p className="text-lg text-purple-7 leading-relaxed">
                Every month starts from what you need to sell. The content follows.
              </p>
            </div>
          </ScrollReveal>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CONVERTING.map((item) => (
              <li key={item.title} className={`${cardCls} p-6 sm:p-7`}>
                <TopBar />
                <p className="flex items-center gap-2 font-extrabold text-purple-9 mb-2">
                  <Check className="h-5 w-5 text-brand-dark shrink-0" aria-hidden="true" />
                  {item.title}
                </p>
                <p className="text-[15px] text-purple-7 leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approvals */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="approve-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">Approvals</p>
            <h2 id="approve-title" className={h2Cls}>
              Approve your month <span className="gradient-text">in one sitting.</span>
            </h2>
            <p className="text-lg text-purple-7 leading-relaxed">
              No daily check-ins, no drafts waiting in your inbox. Lihi reviews every piece first, so what reaches you
              is ready. You approve the month, and we publish it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ol className={`${cardCls} divide-y divide-purple-15`}>
              {APPROVAL_STEPS.map((step, i) => (
                <li key={step.who} className="flex gap-5 p-6">
                  <span className="text-sm font-black text-brand-dark tabular-nums pt-0.5">0{i + 1}</span>
                  <p className="text-[17px] text-purple-8 leading-relaxed">
                    <span className="font-extrabold text-purple-9">{step.who}.</span> {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      {/* One piece, every channel */}
      <section className="bg-purple-05 py-20 lg:py-28" aria-labelledby="repurpose-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">Repurposing</p>
            <h2 id="repurpose-title" className={h2Cls}>
              One idea. <span className="gradient-text">Every channel.</span>
            </h2>
            <p className="text-lg text-purple-7 leading-relaxed">
              Sage adapts each piece for every account you add, so your budget buys more reach. Resizing, captions, and
              formatting never use up another piece.
            </p>
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
                  <span className="block text-sm font-normal text-purple-7">counts as 1 piece from your package</span>
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-2 mb-5">
                {ONE_TO_MANY.map((acct) => (
                  <li key={acct} className="rounded-[10px] border border-purple-15 bg-purple-05 px-3 py-2.5 text-sm font-semibold text-purple-8">
                    {acct}
                  </li>
                ))}
              </ul>
              <p className="text-[15px] text-purple-9 font-semibold">= 1 original piece, 4 publications</p>
            </figure>
          </ScrollReveal>
        </div>
      </section>

      {/* Team members */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="advocacy-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">Add-on · Employee advocacy</p>
            <h2 id="advocacy-title" className={h2Cls}>
              Your team can <span className="gradient-text">show up too.</span>
            </h2>
            <p className="text-lg text-purple-7 leading-relaxed">
              Your people reach buyers your company page never will. We write for {ADVOCACY_ADDON.minMembers} to{" "}
              {ADVOCACY_ADDON.maxMembers} of them, so the whole company shows up, not only you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className={`${cardCls} p-6 sm:p-8`}>
              <TopBar />
              <CheckList items={ADVOCACY_ADDON.points} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reporting */}
      <section className="bg-purple-05 py-20 lg:py-28" aria-labelledby="report-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <p className="eyebrow mb-4">Monthly report</p>
            <h2 id="report-title" className={h2Cls}>
              Know what social <span className="gradient-text">brought in.</span>
            </h2>
            <p className="text-lg text-purple-7 leading-relaxed">
              Atlas tracks every link and builds your monthly report from HubSpot. Lihi reads it with you and sets the
              direction for next month. Not on HubSpot? We agree the setup on the call.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <dl className={`${cardCls} p-6 sm:p-8 space-y-4`}>
              <TopBar />
              {REPORT_ITEMS.map((item) => (
                <div key={item.title}>
                  <dt className="font-extrabold text-purple-9">{item.title}</dt>
                  <dd className="text-[15px] text-purple-7 leading-relaxed mt-0.5">{item.body}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      {/* Team + everything included */}
      <section className="tech-grid bg-white py-20 lg:py-28" aria-labelledby="team-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[760px] mb-10">
              <p className="eyebrow mb-4">Your team</p>
              <h2 id="team-title" className={h2Cls}>
                Eight specialists. <span className="gradient-text">One monthly package.</span>
              </h2>
              <p className="text-lg text-purple-7 leading-relaxed">
                Every package includes all eight Triple &amp; Co. AI agents as your production team. Lihi architects the
                strategy, directs the agents, and reviews every piece before it reaches you.
              </p>
            </div>
          </ScrollReveal>
          <AgentTeam />
          <ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INCLUDED.map((item) => (
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
          <p className="mt-8 text-[15px] text-purple-7">
            Want the full package details and five finished sample pieces?{" "}
            <Link href={SOCIAL_ROUTE} className="font-semibold text-brand-dark underline underline-offset-4">
              See the managed social media packages <Arrow />
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-purple-05 py-20 lg:py-28" aria-labelledby="faq-title">
        <div className="mx-auto max-w-[860px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="eyebrow mb-4">Questions</p>
              <h2 id="faq-title" className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.08] text-purple-9">
                What founders ask us
              </h2>
            </div>
          </ScrollReveal>
          <PillarFAQ faqs={FAQS} />
        </div>
      </section>

      {/* Closing + booking */}
      <section id="book" className="tech-grid relative overflow-hidden bg-white py-20 lg:py-28 scroll-mt-16" aria-labelledby="book-title">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
        />
        <div className="relative z-10 mx-auto max-w-[960px] px-6 sm:px-8">
          <div className="text-center mb-10">
            <p className="eyebrow mb-4">Book a call with Lihi</p>
            <h2 id="book-title" className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight leading-[1.05] text-purple-9 mb-4">
              If you don&apos;t show up next week, <span className="gradient-text">someone else will.</span>
            </h2>
            <p className="text-lg text-purple-7 max-w-[620px] mx-auto leading-relaxed">
              In 30 minutes we find the content volume and channels that fit your business and your budget. You do not
              need to know your package in advance.
            </p>
          </div>
          <div className={`${cardCls} p-5 sm:p-8`}>
            <TopBar />
            <SocialBooking campaign={CAMPAIGN} />
          </div>
        </div>
      </section>
    </>
  );
}
