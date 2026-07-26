import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Strategy Insights",
  description:
    "The Joint Work Process: more than a collaboration, more than coaching. Triple becomes another hand in your business, guiding you toward relentless growth.",
  alternates: { canonical: "/insights/strategy" },
  openGraph: {
    title: "Strategy Insights | Triple & Co.",
    description:
      "The Joint Work Process: Triple becomes another hand in your business, guiding you toward relentless growth.",
    url: "https://www.tripleandco.com/insights/strategy",
    siteName: "Triple & Co.",
    type: "website",
  },
};

const workstreams = [
  {
    title: "Marketing",
    subtitle: "Brand and Lead Generation",
    description:
      "From positioning and brand strategy to inbound and demand generation, we build the marketing engine that feeds your pipeline.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a1.125 1.125 0 01-1.535-.403l-.244-.418A9.02 9.02 0 017.5 12a9.02 9.02 0 011.226-4.533l.244-.418a1.125 1.125 0 011.535-.403l.657.38c.524.3.71.96.463 1.511a12.02 12.02 0 00-.985 2.783m0 0c.687.06 1.385.09 2.09.09h.75a4.5 4.5 0 010 9h-.75c-.705 0-1.403.03-2.09.09" />
      </svg>
    ),
  },
  {
    title: "Sales",
    subtitle: "The Best-Performing Method for Your Start-Up",
    description:
      "We identify and implement the sales methodology that works for your product, market, and buyer, then build the team and playbooks to scale it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Customer Success",
    subtitle: "Build a Revenue Machine: Onboarding to Expansions",
    description:
      "From first onboarding to renewal to expansion, we design the customer success foundations that protect and grow recurring revenue.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "M&A Opportunities",
    subtitle: "Identifying and Executing M&A",
    description:
      "Spot acquisition targets, evaluate strategic fit, and execute transactions that accelerate your growth trajectory.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-1.06l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Product Road Map",
    subtitle: "Align Product with Revenue",
    description:
      "Ensure your product roadmap is driven by market demand and revenue goals, not just feature requests.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "Funding Strategy",
    subtitle: "Strategy and Execution",
    description:
      "Lihi\u2019s investment banking background helps you map capital needs, prepare materials, and connect with the right investors and partners.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Pricing",
    subtitle: "Optimize Your Pricing Model",
    description:
      "Get your pricing right with competitive analysis, value-based pricing frameworks, and packaging strategies that maximize revenue per customer.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
];

export default function StrategyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: "Strategy" },
            ]}
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand mb-4">
              Strategy
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-4">
              The Joint Work{" "}
              <span className="gradient-text">Process</span>
            </h1>
            <p className="text-lg text-purple-7 leading-relaxed">
              More than a collaboration, more than coaching. Triple becomes
              another hand in your business, strategically guiding you toward
              success and relentless growth, one step at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <div className="rounded-2xl bg-purple-05 border border-purple-15 p-8 lg:p-10">
              <p className="text-purple-7 leading-relaxed mb-4">
                Triple will help you make crucial decisions at a healthy pace. Our
                creative methods set you up to understand how to manage high-speed
                growth and decision-making optimized for success.
              </p>
              <p className="text-purple-7 leading-relaxed">
                At each new phase of growth, it&apos;s essential to look at what&apos;s
                immediately in front of us as well as what possibilities are on the
                horizon. The SaaS world is highly competitive, and even with a
                ground-breaking idea, there&apos;s competition all around.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Workstreams */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Projects we cover together</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-12 text-center">
              Seven Pillars of Growth
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workstreams.map((ws, i) => (
              <ScrollReveal key={ws.title} delay={0.05 + i * 0.06}>
                <div className="relative bg-white rounded-2xl p-7 shadow-[var(--shadow-base)] border border-purple-15 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)] card-gradient-top h-full">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
                    {ws.icon}
                  </div>
                  <h3 className="text-lg font-extrabold text-purple-9 tracking-tight mb-1">
                    {ws.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand mb-3">
                    {ws.subtitle}
                  </p>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {ws.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Ready to <span className="gradient-text">Triple</span> Your
              Start-Up?
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              Let&apos;s discuss your goals and map out the strategy that will
              unlock your next stage of growth.
            </p>
            <Link
              href="/revenue-diagnostic#book"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a Diagnostic Call <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
