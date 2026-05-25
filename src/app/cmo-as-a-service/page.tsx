import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AgentCarousel } from "@/components/AgentCarousel";

export const metadata: Metadata = {
  title: "CMO as a Service | Fractional CMO for B2B SaaS",
  description:
    "On-demand executive marketing leadership for high-growth B2B SaaS startups. Led by Lihi Pinto — embedded, hands-on, revenue-focused.",
};

const whyCards = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Embedded Leadership",
    description:
      "We join your leadership circle from day one — your meetings, your goals, your Slack. Faster onboarding, stronger buy-in, and a seamless link between strategy and execution.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Proven Execution",
    description:
      "Lihi has raised over $70M and built SaaS machines that tripled revenue repeatedly. She leads every engagement personally — from idea to measurable impact.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Full-Stack Support",
    description:
      "From GTM planning and demand gen to sales methodology, pipeline management and customer success — we build the teams, processes and assets you need to scale.",
  },
];

const strategicServices = [
  {
    title: "Go-to-Market & Positioning",
    description: "Define your ICP, sharpen messaging and craft a differentiated story that wins attention.",
    icon: "🎯",
  },
  {
    title: "Content & Demand Gen",
    description: "Create compelling thought leadership and campaigns across channels to drive qualified leads.",
    icon: "📝",
  },
  {
    title: "Brand & Inbound Marketing",
    description: "Develop a consistent brand identity, website and assets that convert.",
    icon: "🏷️",
  },
  {
    title: "Account-Based Marketing",
    description: "Implement Triple\u2019s LEC method — Locate, Engage, Convert — to focus on your highest-value accounts.",
    icon: "🎪",
  },
  {
    title: "Competitive & Funnel Analysis",
    description: "Identify your market position and optimise every step from awareness to conversion.",
    icon: "📊",
  },
];

const revenueServices = [
  {
    title: "Sales Strategy & Methodology",
    description: "Build a repeatable sales engine with clear stages, qualification criteria and playbooks.",
    icon: "🤝",
  },
  {
    title: "Pipeline Management",
    description: "Create visibility across your funnel and ensure every qualified lead gets the right follow-up.",
    icon: "📈",
  },
  {
    title: "Customer Success Foundations",
    description: "Design onboarding, expansion and retention plays that protect and grow recurring revenue.",
    icon: "⭐",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Analysis",
    description:
      "We audit your current marketing, sales and product efforts to determine immediate actions that increase revenue.",
  },
  {
    number: "2",
    title: "Strategy",
    description:
      "Together we build your Unique Triple Process — a roadmap covering marketing, sales, customer success, funding and product — aligned around measurable OKRs.",
  },
  {
    number: "3",
    title: "Execution",
    description:
      "Unlike consultancies that deliver a slide deck and leave, we execute alongside your team — hiring talent, launching campaigns and refining your funnel.",
  },
  {
    number: "4",
    title: "Results",
    description:
      "We monitor key metrics, iterate and ensure you see tangible growth. Your money machine doesn\u2019t just start — it runs smoothly and scales.",
  },
];

export default function CMOPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "CMO as a Service" },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                  Fractional CMO
                </span>
                <span className="text-purple-3">&middot;</span>
                <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                  B2B SaaS
                </span>
                <span className="text-purple-3">&middot;</span>
                <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                  Revenue-focused
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                CMO&#8209;as&#8209;a&#8209;Service{" "}
                <span className="gradient-text">by Lihi Pinto</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                High-growth startups need senior marketing leadership. Our on-demand
                service embeds a seasoned CMO into your leadership team — without
                the long-term commitment or overhead.
              </p>
              <p className="text-base text-purple-6 leading-relaxed mb-8">
                We don&apos;t just advise; we build and execute the strategies that
                fuel sustainable revenue growth.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Schedule a Discovery Call <span>&#8594;</span>
              </Link>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[var(--shadow-base)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto — Fractional CMO"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is CMO-as-a-Service */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <ScrollReveal>
            <p className="eyebrow mb-3">What is it?</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
              What Is CMO&#8209;as&#8209;a&#8209;Service?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-purple-7 leading-relaxed mb-6">
              CMO-as-a-Service, sometimes called fractional CMO or outsourced CMO,
              gives your company access to executive-level marketing leadership when
              you need it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-purple-7 leading-relaxed mb-6">
              Unlike a consultant who drafts a plan and leaves, a fractional CMO
              becomes part of your team — working shoulder-to-shoulder to craft your
              positioning, generate demand and optimize every stage of your funnel.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl bg-purple-05 p-6 lg:p-8 border border-purple-15">
              <p className="text-purple-7 leading-relaxed">
                Our approach extends this model further by integrating{" "}
                <strong className="text-purple-9">sales and revenue leadership</strong>{" "}
                through our CRO-as-a-Service, giving you one unified growth engine.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Triple & Co. */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Why us</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Why Triple &amp; Co. with Lihi Pinto?
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-12">
              Not every fractional CMO is created equal. Here&apos;s what sets us apart.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={0.1 + i * 0.12}>
                <div className="relative bg-white rounded-2xl p-8 shadow-[var(--shadow-base)] card-gradient-top overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)]">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-purple-9 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Carousel */}
      <AgentCarousel />

      {/* Our Offering — Strategic Marketing Leadership */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">Our offering</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              Fractional CMO for B2B SaaS Startups
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-16">
              Three pillars of support designed to align marketing, sales and
              customer success around shared growth targets.
            </p>
          </ScrollReveal>

          {/* Strategic marketing */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 gradient-bar rounded-full" />
                <h3 className="text-2xl font-extrabold text-purple-9">
                  Strategic Marketing Leadership
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {strategicServices.map((svc, i) => (
                  <ScrollReveal key={svc.title} delay={0.05 + i * 0.08}>
                    <div className="rounded-xl border border-purple-15 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-base)]">
                      <span className="text-2xl mb-3 block">{svc.icon}</span>
                      <h4 className="text-base font-bold text-purple-9 mb-2">
                        {svc.title}
                      </h4>
                      <p className="text-sm text-purple-7 leading-relaxed">
                        {svc.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Revenue & sales alignment */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 gradient-bar rounded-full" />
                <h3 className="text-2xl font-extrabold text-purple-9">
                  Revenue &amp; Sales Alignment
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {revenueServices.map((svc, i) => (
                  <ScrollReveal key={svc.title} delay={0.05 + i * 0.08}>
                    <div className="rounded-xl border border-purple-15 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-base)]">
                      <span className="text-2xl mb-3 block">{svc.icon}</span>
                      <h4 className="text-base font-bold text-purple-9 mb-2">
                        {svc.title}
                      </h4>
                      <p className="text-sm text-purple-7 leading-relaxed">
                        {svc.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Funding & growth strategy */}
          <ScrollReveal>
            <div className="rounded-2xl bg-purple-05 border border-purple-15 p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 gradient-bar rounded-full" />
                <h3 className="text-2xl font-extrabold text-purple-9">
                  Funding &amp; Growth Strategy
                </h3>
              </div>
              <p className="text-purple-7 leading-relaxed max-w-3xl">
                Lihi&apos;s background in investment banking means she can help you
                identify funding strategies and opportunities. She&apos;ll work with
                you to map the capital you need, prepare materials for investors
                and connect you with the right partners.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Triple Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-8">
          <ScrollReveal>
            <p className="eyebrow text-center mb-3">How we work</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4 text-center">
              The Triple &amp; Co. Process
            </h2>
            <p className="text-purple-7 text-center max-w-2xl mx-auto mb-14">
              A structured, repeatable framework tailored to your startup&apos;s stage.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={0.1 + i * 0.1}>
                <div className="relative bg-white rounded-2xl p-7 shadow-[var(--shadow-base)] text-center transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)]">
                  <div className="w-11 h-11 rounded-full bg-brand text-white flex items-center justify-center text-lg font-black mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-extrabold text-purple-9 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed">
                    {step.description}
                  </p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 gradient-bar" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-12 bg-purple-05">
        <div className="mx-auto max-w-[1000px] px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">15+</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">$70M+</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">Capital Raised</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">3x</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">Revenue Tripled</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-black gradient-text">100%</p>
                <p className="text-xs text-purple-6 mt-1 font-medium uppercase tracking-wider">Hands-on</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Ready to <span className="gradient-text">Triple</span> Your Growth?
            </h2>
            <p className="text-purple-7 mb-4 max-w-xl mx-auto">
              Stop guessing and start growing. Schedule a free discovery call with
              Lihi Pinto to discuss your goals and see how our CMO-as-a-Service can
              unlock your next stage of growth.
            </p>
            <p className="text-sm text-purple-6 mb-10">
              No commitment. No pitch deck. Just an honest conversation about your
              growth potential.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              I&apos;m Ready to Triple <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
