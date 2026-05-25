import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Services | Triple & Co.",
  description:
    "Nine services your company can hire. Senior CMO and CRO leadership, full-service B2B marketing execution, and AI-powered delivery.",
};

const services = [
  {
    id: "cmo",
    name: "CMO as a Service",
    tag: "Senior marketing leadership, embedded in your team.",
    description:
      "Get executive-level marketing leadership without the full-time commitment. Lihi Pinto embeds within your leadership circle, joining your meetings, aligning with your goals and driving strategy from day one. From positioning and demand generation to team building and board reporting \u2014 everything a full-time CMO delivers, on your terms.",
    deliverables: [
      "Marketing strategy & OKR alignment",
      "Go-to-market planning & execution",
      "Team leadership & hiring",
      "Board-level marketing reporting",
    ],
    link: "/cmo-as-a-service",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0116 0" />
      </svg>
    ),
  },
  {
    id: "cro",
    name: "Full CRO Service",
    tag: "Revenue ownership across marketing, sales, and customer success.",
    description:
      "A unified revenue engine that aligns marketing, sales and customer success under one strategic leader. We own the entire funnel \u2014 from first touch to closed-won to expansion \u2014 and build the processes, playbooks and dashboards your team needs to hit revenue targets consistently.",
    deliverables: [
      "Full-funnel revenue strategy",
      "Sales & marketing alignment",
      "Pipeline forecasting & dashboards",
      "Customer success foundations",
    ],
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 12l3-3 4 4 8-8" />
        <path d="M14 5h6v6" />
      </svg>
    ),
  },
  {
    id: "brand",
    name: "Brand Strategy & Storytelling",
    tag: "Voice, positioning, and visual language that scales.",
    description:
      "Your brand is more than a logo. We define your positioning, craft your narrative and build a visual identity system that resonates with buyers and scales across every channel. From messaging frameworks to brand guidelines \u2014 everything your team needs to speak with one voice.",
    deliverables: [
      "Brand positioning & messaging framework",
      "Visual identity guidelines",
      "Narrative & storytelling playbook",
      "Competitive differentiation strategy",
    ],
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
  {
    id: "gtm",
    name: "Growth Strategy & GTM",
    tag: "From thesis to a 90-day execution plan.",
    description:
      "We turn your growth thesis into a concrete, executable plan. Starting with ICP definition and market analysis, we build a 90-day go-to-market roadmap with clear milestones, channel strategy and budget allocation. No slide decks that sit on a shelf \u2014 a living plan your team executes against.",
    deliverables: [
      "ICP & market segmentation",
      "90-day GTM roadmap",
      "Channel strategy & budget allocation",
      "Competitive positioning analysis",
    ],
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 4v6" />
      </svg>
    ),
  },
  {
    id: "social",
    name: "Social Management",
    tag: "Founder-led content. A full marketing calendar.",
    description:
      "Social presence built around founder authority and company expertise. We create a full content calendar, produce founder-led posts, manage community engagement and measure what actually drives pipeline \u2014 not vanity metrics. Your channels become a revenue-driving asset.",
    deliverables: [
      "Content calendar & cadence planning",
      "Founder-led content creation",
      "Community management & engagement",
      "Performance tracking & optimization",
    ],
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    id: "hubspot",
    name: "HubSpot & Automation",
    tag: "A CRM that runs like a revenue engine.",
    description:
      "Your CRM should work for you, not against you. We set up, configure and optimize HubSpot (or your preferred platform) so it captures every signal, automates routine follow-ups and gives your team real-time visibility into pipeline health. Clean data, smart workflows, actionable reports.",
    deliverables: [
      "CRM setup & configuration",
      "Marketing automation workflows",
      "Lead scoring & routing",
      "Revenue dashboards & reporting",
    ],
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 10h20M6 14h4M14 14h4" />
      </svg>
    ),
  },
  {
    id: "pipeline",
    name: "Pipeline Management",
    tag: "Demand generation to qualified opportunity.",
    description:
      "End-to-end pipeline visibility and optimization. We build the processes that turn inbound interest into qualified opportunities, define stage criteria, implement lead scoring and create the reporting your sales team needs to focus on deals that close.",
    deliverables: [
      "Pipeline stage definition & criteria",
      "Lead scoring & qualification framework",
      "Conversion rate optimization",
      "Forecasting & pipeline reporting",
    ],
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 6-6" />
      </svg>
    ),
  },
  {
    id: "events",
    name: "Events & Tradeshows",
    tag: "From booth to closed pipeline.",
    description:
      "Events are expensive \u2014 make them count. We handle end-to-end event strategy: selecting the right shows, designing booth experiences, preparing your team with talk tracks and follow-up sequences, and measuring the pipeline generated. From booth to closed deal.",
    deliverables: [
      "Event selection & ROI planning",
      "Booth design & experience strategy",
      "Talk tracks & demo preparation",
      "Post-event follow-up sequences",
    ],
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M16 2l-4 5-4-5M8 11h8M8 15h8" />
      </svg>
    ),
  },
  {
    id: "team",
    name: "In-House Team Building",
    tag: "Sourcing, training, and keeping the right marketers.",
    description:
      "Building a marketing team is hard. We help you define roles, source candidates, run the interview process and onboard new hires with the systems and playbooks they need to be productive from week one. We also design career paths and retention strategies so your best people stay.",
    deliverables: [
      "Role definition & job descriptions",
      "Candidate sourcing & interview design",
      "Onboarding playbooks & training",
      "Team structure & career pathing",
    ],
    link: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services" },
            ]}
          />

          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                9 services
              </span>
              <span className="text-purple-3">&middot;</span>
              <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                Full-stack B2B
              </span>
              <span className="text-purple-3">&middot;</span>
              <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                AI-powered delivery
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
              Everything Your Growth{" "}
              <span className="gradient-text">Engine Needs</span>
            </h1>
            <p className="text-lg text-purple-7 max-w-2xl mx-auto">
              Senior CMO and CRO leadership, full-service B2B marketing
              execution, and AI-powered delivery. Hire one. Hire several. Or
              hire the full stack.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.id} delay={0.05 + i * 0.04}>
                <div
                  id={service.id}
                  className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-base)] border border-purple-15 card-gradient-top overflow-hidden transition-all hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-pink-05 flex items-center justify-center text-brand flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h2 className="text-xl lg:text-2xl font-extrabold text-purple-9 tracking-tight">
                            {service.name}
                          </h2>
                          <p className="text-sm text-brand font-semibold">
                            {service.tag}
                          </p>
                        </div>
                      </div>

                      <p className="text-purple-7 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {service.link ? (
                          <Link
                            href={service.link}
                            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                          >
                            Learn more <span>&#8594;</span>
                          </Link>
                        ) : null}
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 rounded-[10px] border border-purple-15 bg-purple-05 px-5 py-2.5 text-sm font-semibold text-purple-9 transition-all hover:border-brand/30 hover:-translate-y-0.5"
                        >
                          Book a call <span>&#8594;</span>
                        </Link>
                      </div>
                    </div>

                    <div className="bg-purple-05 rounded-xl p-6 border border-purple-15">
                      <h3 className="text-xs font-bold uppercase tracking-[.14em] text-brand mb-4">
                        What you get
                      </h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-purple-7"
                          >
                            <span className="w-1.5 h-1.5 rounded-full gradient-bar shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Not Sure Which Service Fits?
            </h2>
            <p className="text-purple-7 mb-4 max-w-xl mx-auto">
              Book a free diagnostic call with Lihi. We&apos;ll map your
              current gaps and recommend the right combination of services for
              your stage and goals.
            </p>
            <p className="text-sm text-purple-6 mb-10">
              Most companies start with one service and expand as they grow.
            </p>
            <Link
              href="/contact"
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
