"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

/* ── Data ─────────────────────────────────────────────── */

const proofChips = [
  "$70M+ raised",
  "Top 1% fastest-growing SaaS",
  "Tripled revenue. Twice.",
];

const agents = [
  { name: "Camille", role: "Brand voice" },
  { name: "Rex", role: "Growth campaigns" },
  { name: "Zara", role: "Social ops" },
  { name: "Nova", role: "Research" },
  { name: "Atlas", role: "Analytics" },
  { name: "Sage", role: "Repurposing" },
  { name: "Vega", role: "Art direction" },
  { name: "Lumen", role: "Video" },
];

const credCards = [
  {
    id: "raised",
    claim: "$70M+ raised.",
    line: "Marketing led from seed through growth rounds.",
    context:
      "Led marketing through the rounds that raised it, with coverage in TechCrunch, Calcalist, and Globes.",
  },
  {
    id: "tripled",
    claim: "Tripled revenue at a SaaS company.",
    line: "Then did it again.",
    context:
      "The same playbook Triple & Co. runs today: positioning, pipeline, and a CRM that tells the truth.",
  },
  {
    id: "years",
    claim: "15 years across B2B SaaS and investment banking.",
    line: "Numbers first, always.",
    context:
      "Every marketing decision tied to pipeline and revenue, not vanity metrics.",
  },
];

const workSteps = [
  { step: "Brief", text: "You and Lihi set the goal, the message, and the bar." },
  { step: "Run", text: "Her agent team executes the volume: research, content, ops." },
  { step: "Deliver", text: "Lihi reviews everything. You're never handed raw AI output." },
];

const pressLogos = [
  {
    name: "Geektime",
    href: "https://www.geektime.co.il/syte-and-microsoft/",
    headline: "Syte and Microsoft partnership coverage",
  },
  {
    name: "Calcalist",
    href: "https://www.calcalistech.com/ctech/articles/0,7340,L-3897041,00.html",
    headline: "Calcalist Tech coverage",
  },
  {
    name: "Globes",
    href: "https://www.globes.co.il/news/home.aspx?fid=9672",
    headline: "Globes business coverage",
  },
  {
    name: "TechCrunch",
    href: "https://techcrunch.com/2019/09/09/syte-snaps-up-21-5m-for-its-smartphone-based-visual-search-engine-for-e-commerce/",
    headline: "Syte snaps up $21.5M for its visual search engine",
  },
  {
    name: "HubSpot",
    href: "https://blog.hubspot.com/marketing",
    headline: "HubSpot marketing blog contributor",
  },
];

/* ── Component ────────────────────────────────────────── */

export function OperatorSection() {
  const [chipIndex, setChipIndex] = useState(0);
  const [openCard, setOpenCard] = useState<string | null>(null);
  const [howOpen, setHowOpen] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setChipIndex((i) => (i + 1) % proofChips.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-purple-05 py-20 lg:py-30" aria-labelledby="operator-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Portrait column ── */}
          <ScrollReveal className="lg:col-span-5" direction="left">
            <div className="relative mx-auto max-w-[400px] lg:max-w-none lg:-mt-6">
              {/* Breathing glow */}
              <div
                aria-hidden
                className="absolute -inset-8 rounded-[40px] motion-reduce:animate-none"
                style={{
                  background:
                    "radial-gradient(ellipse 65% 60% at 50% 45%, rgba(254,52,101,.10) 0%, transparent 70%)",
                  animation: "ai-panel-breathe 8s ease-in-out infinite",
                }}
              />

              {/* Portrait card */}
              <div className="relative aspect-square overflow-hidden rounded-[20px] shadow-[var(--shadow-base)] lg:aspect-[4/5]">
                <div className="absolute top-0 left-0 right-0 z-10 h-[5px] gradient-bar" />
                <Image
                  src="/images/lihi-portrait.jpg"
                  alt="Lihi Pinto, founder of Triple & Co., fractional CMO and CRO"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 400px, 42vw"
                  priority={false}
                />
                {/* Keyline mat */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-2 z-10 rounded-[14px] border border-white/35"
                />
                {/* Tint bridge, lower third */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(254,52,101,.08), rgba(137,109,156,.04) 60%, transparent)",
                  }}
                />
              </div>

              {/* Floating rotating proof chip */}
              <div className="absolute -right-3 bottom-20 z-20 lg:-right-5">
                <div className="rounded-xl bg-white px-4 py-2.5 shadow-[var(--shadow-hover)] border border-purple-15">
                  <span
                    key={chipIndex}
                    className="block text-[15px] font-black tracking-tight gradient-text"
                    style={{ animation: "fade-in .5s ease both" }}
                  >
                    {proofChips[chipIndex]}
                  </span>
                </div>
              </div>

              {/* Agent system strip */}
              <Link
                href="/agents"
                className="group relative mt-4 flex items-center justify-between gap-3 rounded-2xl bg-purple-9 px-5 py-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-pink-3">
                    Lihi&apos;s AI operating system
                  </p>
                  <p className="mt-0.5 text-[12px] text-purple-3">Supervised end to end &#8594;</p>
                </div>
                <div className="flex -space-x-1.5">
                  {agents.map((a) => (
                    <span
                      key={a.name}
                      title={`${a.name} · ${a.role}`}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-purple-7 bg-purple-8 text-[10px] font-bold text-pink-3 transition-transform hover:z-10 hover:scale-110 hover:bg-brand hover:text-white"
                    >
                      {a.name[0]}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          </ScrollReveal>

          {/* ── Content column ── */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="eyebrow mb-4">Led by Lihi</p>
              <h2
                id="operator-heading"
                className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9"
              >
                You&apos;re not buying a tool.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <h2
                aria-hidden
                className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-5"
              >
                You&apos;re meeting your <span className="gradient-text">operator</span>.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="mb-8 max-w-[520px] text-lg leading-relaxed text-purple-6">
                Lihi Pinto runs your growth like it&apos;s her own company. Her AI agent
                team multiplies her. You get both.
              </p>
            </ScrollReveal>

            {/* Credibility cards */}
            <ScrollReveal delay={0.1}>
              <div className="mb-6 space-y-3">
                {credCards.map((c) => (
                  <div
                    key={c.id}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openCard === c.id}
                    onClick={() => setOpenCard(openCard === c.id ? null : c.id)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setOpenCard(openCard === c.id ? null : c.id)
                    }
                    className="group cursor-pointer rounded-2xl border border-purple-15 bg-white px-5 py-4 shadow-[var(--shadow-base)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[15px] text-purple-7">
                        <span className="font-extrabold text-purple-9">{c.claim}</span>{" "}
                        {c.line}
                      </p>
                      <span
                        className={`shrink-0 text-brand transition-transform duration-300 ${
                          openCard === c.id ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openCard === c.id ? "mt-3 max-h-32 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-purple-6">
                        {c.context}{" "}
                        <Link
                          href="/contact"
                          onClick={(e) => e.stopPropagation()}
                          className="font-semibold text-brand hover:underline"
                        >
                          Ask me how &#8594;
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* How Lihi works with you */}
            <ScrollReveal delay={0.15}>
              <div className="mb-6 rounded-2xl border border-purple-15 bg-white shadow-[var(--shadow-base)]">
                <button
                  onClick={() => setHowOpen(!howOpen)}
                  aria-expanded={howOpen}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-[15px] font-extrabold text-purple-9">
                    How Lihi works with you
                  </span>
                  <span
                    className={`text-brand transition-transform duration-300 ${
                      howOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    howOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-purple-15 px-5 py-4">
                    <ol className="space-y-2.5">
                      {workSteps.map((s, i) => (
                        <li key={s.step} className="flex items-baseline gap-3 text-sm text-purple-7">
                          <span className="shrink-0 font-black tracking-tight gradient-text">
                            {i + 1} · {s.step}
                          </span>
                          {s.text}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Founder quote */}
            <ScrollReveal delay={0.2}>
              <blockquote className="mb-7 rounded-xl border-l-4 border-brand bg-white px-6 py-5 text-lg italic leading-snug text-purple-9 shadow-[var(--shadow-base)] lg:text-[19px]">
                &ldquo;I&apos;m building the marketing team I wish I had as a founder.
                The agents do the volume. I do the judgment.&rdquo;
              </blockquote>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/revenue-diagnostic#book"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                >
                  Book a call with Lihi <span>&#8594;</span>
                </Link>
                <a
                  href="https://www.linkedin.com/in/lihipinto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand transition-all hover:gap-2.5"
                >
                  Connect with Lihi <span>&#8594;</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/triple-and-co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand transition-all hover:gap-2.5"
                >
                  Follow Triple &amp; Co. <span>&#8594;</span>
                </a>
                <Link
                  href="/about-he"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-purple-5 transition-all hover:gap-2.5 hover:text-brand"
                >
                  &#1500;&#1497;&#1492;&#1497;&#1488; &#1508;&#1497;&#1504;&#1496;&#1493; <span>&#8594;</span>
                </Link>
              </div>
              <p className="mt-3 text-[13px] text-purple-5">
                Every engagement is led by Lihi personally. The agents scale her
                output, not her attention.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Press row, full width */}
        <ScrollReveal delay={0.1}>
          <div className="mt-14 border-t border-purple-15 pt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[.14em] text-purple-5">
              Lihi&apos;s work has been covered in:
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {pressLogos.map(({ name, href, headline }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={headline}
                  className="font-bold tracking-tight text-purple-6 transition-all hover:text-brand"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
