"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const credentials = [
  "15+ years in B2B SaaS and investment banking",
  "Raised over $70M in funding",
  "Tripled revenue at a SaaS company, repeatedly",
];

const pressLogos = [
  "The Jerusalem Post",
  "Geektime",
  "Calcalist",
  "Globes",
  "TechCrunch",
  "NoCamels",
];

export function OperatorSection() {
  return (
    <section className="relative bg-purple-05 py-20 lg:py-30" aria-labelledby="operator-heading">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <ScrollReveal className="lg:col-span-5" direction="left">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[var(--shadow-base)] max-w-[360px] mx-auto lg:max-w-none">
              <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
              <Image
                src="/images/lihi.png"
                alt="Lihi Pinto, fractional CMO and CRO, founder of Triple & Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 360px, 42vw"
              />
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <ScrollReveal>
              <p className="eyebrow mb-4">Led by Lihi</p>
              <h2 id="operator-heading" className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
                You are not buying a tool. You are getting an{" "}
                <span className="gradient-text">operator</span>.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ul className="mb-8 space-y-2">
                <li className="text-lg font-medium text-purple-5 line-through decoration-brand decoration-2">
                  Buying a tool.
                </li>
                <li className="text-lg font-medium text-purple-5 line-through decoration-brand decoration-2">
                  Hiring a vendor.
                </li>
                <li className="text-lg font-bold text-purple-9">
                  Getting Lihi Pinto and her AI-powered growth system working on
                  your business.
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ul className="mb-8">
                {credentials.map((cred) => (
                  <li
                    key={cred}
                    className="py-3 border-b border-purple-15 last:border-b-0 flex items-center gap-3 text-purple-7"
                  >
                    <span className="w-2 h-2 rounded-full gradient-bar shrink-0" />
                    {cred}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <blockquote className="text-lg lg:text-[19px] italic text-purple-9 py-5 px-6 bg-white border-l-4 border-brand rounded-xl shadow-[var(--shadow-base)] leading-snug mb-6">
                &ldquo;Building the marketing team I wish I had as an early-stage
                founder.&rdquo;
              </blockquote>

              <div className="flex flex-wrap gap-6 items-center">
                <a
                  href="https://www.linkedin.com/in/lihipinto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  Connect on LinkedIn <span>&#8594;</span>
                </a>
                <Link
                  href="/about-he"
                  className="text-purple-5 font-semibold text-[15px] inline-flex items-center gap-1.5 hover:text-brand hover:gap-2.5 transition-all"
                >
                  ליהיא פינטו <span>&#8594;</span>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[.14em] text-purple-5 font-semibold mb-4">
                  Lihi&apos;s work has been covered in:
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  {pressLogos.map((name) => (
                    <span
                      key={name}
                      className="font-bold text-purple-5 tracking-tight opacity-80"
                      style={{ filter: "grayscale(1)" }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
