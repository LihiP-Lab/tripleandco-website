import type { Metadata } from "next";
import Image from "next/image";
import { Check, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PillarFAQ } from "@/components/PillarFAQ";
import { BookCallLink } from "@/components/social/BookCallLink";
import { SampleMonth } from "@/components/social/SampleMonth";
import { SocialBooking } from "@/components/social/SocialBooking";
import { ORG_ID, SITE_URL, lihiRef } from "@/lib/seo";
import {
  COMMON_INCLUSIONS,
  SAMPLE_COMPANY,
  SAMPLE_WEEKS,
  SOCIAL_PACKAGES,
  SOCIAL_ROUTE,
  additionalChannelsLabel,
  type SocialPackage,
} from "@/lib/social-packages";

const PAGE_URL = `${SITE_URL}${SOCIAL_ROUTE}`;

export const metadata: Metadata = {
  title: "Managed Social Media for B2B, Led by Lihi Pinto",
  description:
    "Managed social media for B2B companies. Lihi Pinto leads the direction and reviews every monthly batch. Triple & Co. creates and publishes. Book a call.",
  alternates: { canonical: SOCIAL_ROUTE },
  openGraph: {
    title: "Managed Social Media, Led by Lihi Pinto | Triple & Co.",
    description:
      "Social media with creative ownership and commercial purpose. Led by Lihi Pinto. Created and executed by Triple & Co.",
    url: PAGE_URL,
    siteName: "Triple & Co.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Social Media, Led by Lihi Pinto | Triple & Co.",
    description:
      "Social media with creative ownership and commercial purpose. Led by Lihi Pinto. Created and executed by Triple & Co.",
  },
};

// ---------------------------------------------------------------- copy

const PAINS = [
  "Your online presence does not reflect the quality of the business behind it.",
  "Your founder has real expertise and opinions. Publishing still happens in bursts.",
  "Every post waits on the founder for the idea, the draft, and the follow-up.",
  "Product updates and customer stories rarely turn into content worth reading.",
  "Your lean team needs a partner who takes the work all the way to published.",
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
    body: "She runs the Triple & Co. production team across writing, design, video, and publishing.",
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

const STEPS = [
  { who: "You", title: "Share your priorities", body: "Offers, launches, buyers, and what the business needs this quarter." },
  { who: "Lihi", title: "Shapes the direction", body: "Positioning, founder voice, and the monthly calendar." },
  { who: "Triple & Co.", title: "Creates the batch", body: "Copy, design, and video, adapted for each account." },
  { who: "Lihi", title: "Reviews every piece", body: "The whole batch, before it reaches you." },
  { who: "You", title: "Approve", body: "With one consolidated revision round per monthly batch." },
  { who: "Triple & Co.", title: "Publishes and learns", body: "Scheduling, publishing, a monthly report, and direction for next month." },
];

const FAQS = [
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
    q: "Can you handle technical or specialised topics?",
    a: "That is the work we are built for: B2B service and technology companies with complex offers, in sectors such as SaaS, AI, agritech, foodtech, defence, cybersecurity, consultancies, and specialist technology services. Lihi leads discovery so we understand your offer and your buyers, and you approve facts before anything is published.",
  },
  {
    q: "Will social media generate leads for us?",
    a: "We build every month around your commercial priorities: the questions buyers ask, the calls to action that fit, and the signals we can measure. We do not promise a set number of leads, sales, or revenue from organic posts.",
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
    "Social media with creative ownership and commercial purpose. Led by Lihi Pinto. Created and executed by Triple & Co.",
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
    })),
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

      <p className="flex items-center gap-2 rounded-[10px] bg-pink-05 px-3 py-2.5 text-sm font-semibold text-purple-9 mb-6">
        <Check className="h-4 w-4 text-brand-dark shrink-0" aria-hidden="true" />
        Lihi&apos;s direction and batch review
      </p>

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
      <section className="relative overflow-hidden bg-purple-9 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/20 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[420px] w-[420px] rounded-full bg-purple-5/25 blur-[120px]"
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-pink-3">Managed social media · Led by Lihi Pinto</p>
            <h1 className="text-[40px] sm:text-5xl lg:text-[60px] font-black tracking-tight leading-[1.02] text-white mb-6">
              Social media with <span className="gradient-text">creative ownership</span> and{" "}
              <span className="gradient-text">commercial purpose.</span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-2 leading-relaxed mb-8 max-w-[580px]">
              Led by Lihi Pinto. Created and executed by Triple &amp; Co. Built around what your business needs to
              communicate, who it needs to reach, and how it can contribute to revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <BookCallLink location="hero" className={primaryBtn}>
                Book a Call with Lihi <Arrow />
              </BookCallLink>
              <a
                href="#packages"
                className="inline-flex items-center justify-center min-h-[48px] rounded-[10px] border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/60"
              >
                Explore the Packages
              </a>
            </div>
            <p className="text-sm text-purple-3">Let&apos;s find the right content volume and channels for your business.</p>
          </div>

          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
              <Image
                src="/images/lihi-portrait.jpg"
                alt="Lihi Pinto, founder of Triple & Co."
                width={896}
                height={1088}
                priority
                sizes="(min-width: 1024px) 380px, 90vw"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="relative -mt-16 mx-4 sm:mx-6 rounded-2xl bg-purple-85/95 border border-white/10 p-5 backdrop-blur-md shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-pink-3 mb-3">Every monthly batch</p>
              <ol className="space-y-2 text-sm">
                {[
                  ["Directed by", "Lihi Pinto"],
                  ["Created by", "Triple & Co."],
                  ["Reviewed by", "Lihi Pinto"],
                  ["Approved by", "You"],
                ].map(([verb, who]) => (
                  <li key={verb} className="flex items-center justify-between gap-4">
                    <span className="text-purple-3">{verb}</span>
                    <span className="font-bold text-white">{who}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Situation */}
      <section className="bg-white py-20 lg:py-28">
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
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-white py-20 lg:py-28 scroll-mt-20" aria-labelledby="packages-title">
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

          {/* Included in every package */}
          <ScrollReveal>
            <div className="mt-14 rounded-2xl bg-purple-05 p-6 sm:p-10">
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
              <div className={`${cardCls} p-6 sm:p-7`}>
                <TopBar />
                <p className="text-sm font-bold text-brand-dark mb-1">Option A</p>
                <h4 className="text-lg font-extrabold text-purple-9 mb-2">Without client filming</h4>
                <p className="text-[15px] text-purple-7 leading-relaxed">
                  Brand-led videos made from your approved assets, product footage, screenshots, simple motion
                  graphics, and suitable licensed material.
                </p>
              </div>
              <div className={`${cardCls} p-6 sm:p-7`}>
                <TopBar />
                <p className="text-sm font-bold text-brand-dark mb-1">Option B</p>
                <h4 className="text-lg font-extrabold text-purple-9 mb-2">With client filming</h4>
                <p className="text-[15px] text-purple-7 leading-relaxed">
                  Founder-led videos from recordings you make. We provide the scripts, recording guidance, editing,
                  captions, and publishing.
                </p>
              </div>
            </div>
            <p className="text-sm text-purple-6 mt-4">
              We do not travel to film, and neither approach needs an AI avatar or a synthetic version of anyone.
            </p>
          </div>
        </div>
      </section>

      {/* Sample month */}
      <section className="bg-purple-05 py-20 lg:py-28" aria-labelledby="sample-title">
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
                  {SAMPLE_COMPANY} is a fictional B2B AI operations company, not a Triple &amp; Co. client. Real
                  calendars follow your priorities and channels.
                </span>
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-6 items-start">
            <SampleMonth />
            <ol className="space-y-3">
              {SAMPLE_WEEKS.map((w) => (
                <li key={w.week} className={`${cardCls} p-5 sm:p-6`}>
                  <TopBar />
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-dark shrink-0">Week {w.week}</span>
                    <h3 className="font-extrabold text-purple-9">{w.theme}</h3>
                  </div>
                  <p className="text-sm text-purple-7 mb-3">{w.summary}</p>
                  <div className="rounded-[10px] bg-purple-05 px-4 py-3">
                    <p className="text-xs text-purple-6 mb-0.5">
                      {w.example.account} · {w.example.format}
                    </p>
                    <p className="text-[15px] font-semibold text-purple-9">&ldquo;{w.example.title}&rdquo;</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="how-title">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <ScrollReveal>
            <div className="max-w-[720px] mb-12">
              <p className="eyebrow mb-4">How it works</p>
              <h2 id="how-title" className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.08] text-purple-9">
                One month, <span className="gradient-text">six clear steps.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className={`${cardCls} p-6`}>
                <TopBar />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-brand tabular-nums" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      s.who === "Lihi" ? "bg-brand-dark text-white" : "bg-purple-05 text-purple-8 border border-purple-15"
                    }`}
                  >
                    {s.who}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-purple-9 mb-1.5">
                  <span className="sr-only">Step {i + 1}: {s.who}, </span>
                  {s.title}
                </h3>
                <p className="text-[15px] text-purple-7 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-purple-05 py-20 lg:py-28" aria-labelledby="faq-title">
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
      <section id="book" className="relative overflow-hidden bg-purple-9 py-20 lg:py-28 scroll-mt-16" aria-labelledby="book-title">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]"
        />
        <div className="relative z-10 mx-auto max-w-[960px] px-6 sm:px-8">
          <div className="text-center mb-10">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-pink-3">Book a call with Lihi</p>
            <h2 id="book-title" className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight leading-[1.05] text-white mb-4">
              Let&apos;s find the right package <span className="gradient-text">for your business.</span>
            </h2>
            <p className="text-lg text-purple-2 max-w-[620px] mx-auto leading-relaxed">
              Let&apos;s find the right content volume and channels for your business. You do not need to know your
              package in advance.
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
