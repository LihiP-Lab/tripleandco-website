import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Nine services your company can hire. Senior CMO and CRO leadership, full-service B2B marketing execution, and AI-powered delivery. Benefit-led, outcome-scoped.",
  alternates: { canonical: "/services" },
};

type Service = {
  id: string;
  name: string;
  tag: string;
  description: string;
  who: string;
  problem: string;
  outcome: string;
  deliverables: string[];
  link: string | null;
  linkLabel?: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    id: "cmo",
    name: "CMO as a Service",
    tag: "Senior marketing leadership, embedded in your team.",
    description:
      "Lihi embeds within your leadership circle, joins your meetings, aligns with your goals, and drives strategy from day one. Everything a full-time CMO delivers, on your terms and at a fraction of the cost.",
    who: "B2B companies between seed and Series B that need executive marketing judgment but can't justify a $300K+ hire.",
    problem:
      "Marketing is running on tactics without strategy. Nobody owns the number, and the board asks questions nobody can answer.",
    outcome:
      "A clear marketing strategy, a team that ships against it, and board-level reporting that holds up to scrutiny.",
    deliverables: [
      "Marketing strategy & OKR alignment",
      "Go-to-market planning & execution",
      "Team leadership & hiring",
      "Board-level marketing reporting",
    ],
    link: "/cmo-as-a-service",
    linkLabel: "Learn more",
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
      "One strategic leader who owns the entire funnel, from first touch to closed-won to expansion. We build the processes, playbooks, and dashboards your team needs to hit revenue targets consistently.",
    who: "Companies where marketing, sales, and CS each report good numbers while revenue misses the plan.",
    problem:
      "Three teams, three sets of metrics, zero shared accountability. Deals leak between handoffs.",
    outcome:
      "One revenue engine with shared targets, clean handoffs, and a forecast your CEO can take to the board.",
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
      "Your brand is more than a logo. We define your positioning, craft your narrative, and build a visual identity system that resonates with buyers and scales across every channel.",
    who: "Companies whose product outgrew their story: strong tech, forgettable messaging.",
    problem:
      "Every deck, page, and post sounds different. Buyers can't repeat what you do, so they don't.",
    outcome:
      "One narrative, one voice, one visual system. Your whole team can tell the same story, and buyers remember it.",
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
      "We turn your growth thesis into a concrete, executable plan: ICP definition, market analysis, channel strategy, and budget allocation. No slide decks that sit on a shelf. A living plan your team executes against.",
    who: "Founders entering a new market, launching a new product, or resetting after a flat year.",
    problem:
      "Plenty of ideas, no sequence. Budget spreads thin across channels that were never validated.",
    outcome:
      "A 90-day roadmap with clear milestones, owners, and budget, plus the data to double down or kill each channel fast.",
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
      "Social presence built around founder authority and company expertise. Full content calendar, founder-led posts, community engagement, and measurement tied to pipeline, not vanity metrics.",
    who: "B2B founders and exec teams who know LinkedIn drives deals but can't sustain the cadence.",
    problem:
      "Posting is sporadic, generic, and disconnected from revenue. Competitors own the conversation.",
    outcome:
      "A consistent founder voice, a calendar that ships every week, and channels that produce conversations with buyers.",
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
      "We set up, configure, and optimize HubSpot (or your preferred platform) so it captures every signal, automates routine follow-ups, and gives your team real-time visibility into pipeline health.",
    who: "Teams paying for a CRM that works against them: messy data, manual follow-ups, reports nobody trusts.",
    problem:
      "Leads fall through the cracks. Reporting takes days and still doesn't answer the question.",
    outcome:
      "Clean data, smart workflows, and dashboards that show pipeline health in real time.",
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
      "End-to-end pipeline visibility and optimization. We build the processes that turn inbound interest into qualified opportunities: stage criteria, lead scoring, and reporting your sales team actually uses.",
    who: "Companies generating leads that stall: traffic and MQLs up, qualified opportunities flat.",
    problem:
      "No shared definition of \"qualified\". Sales chases everything and trusts nothing marketing sends.",
    outcome:
      "A pipeline where every stage has criteria, every lead has a score, and sales focuses on deals that close.",
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
      "Events are expensive. Make them count. End-to-end event strategy: selecting the right shows, designing booth experiences, preparing your team with talk tracks, and measuring the pipeline generated.",
    who: "Companies spending five or six figures per show without knowing what came back.",
    problem:
      "Booths get booked, badges get scanned, and follow-up dies in someone's inbox.",
    outcome:
      "Every event has a target, a talk track, a follow-up sequence, and a pipeline number attached to it.",
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
      "We help you define roles, source candidates, run interviews, and onboard new hires with the systems and playbooks they need to be productive from week one. Career paths included, so your best people stay.",
    who: "Companies ready to bring marketing in-house but burned by bad hires before.",
    problem:
      "Wrong roles, vague job specs, and new hires left to figure it out alone for six months.",
    outcome:
      "The right people in the right roles, productive in weeks, with playbooks that outlast any one hire.",
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

const jumpLinks = [
  { id: "cmo", label: "CMO as a Service" },
  { id: "cro", label: "Full CRO" },
  { id: "brand", label: "Brand & Story" },
  { id: "gtm", label: "Growth & GTM" },
  { id: "social", label: "Social" },
  { id: "hubspot", label: "HubSpot" },
  { id: "pipeline", label: "Pipeline" },
  { id: "events", label: "Events" },
  { id: "team", label: "Team Building" },
];

function ServiceBlock({ service }: { service: Service }) {
  return (
    <div
      id={service.id}
      className="relative bg-white rounded-2xl p-8 lg:p-11 shadow-[var(--shadow-base)] border border-purple-15 card-gradient-top overflow-hidden scroll-mt-32"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="w-11 h-11 rounded-xl bg-pink-05 flex items-center justify-center text-brand flex-shrink-0">
          {service.icon}
        </div>
        <h2 className="text-2xl lg:text-[26px] font-extrabold text-purple-9 tracking-tight">
          {service.name}
        </h2>
      </div>
      <p className="text-sm font-semibold text-brand mb-5">{service.tag}</p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
        <div>
          <p className="text-purple-7 leading-relaxed text-[15.5px] mb-6">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-7">
            <div className="bg-purple-05 border border-purple-15 rounded-xl p-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[.1em] text-brand mb-1.5">
                Who it&apos;s for
              </p>
              <p className="text-[13.5px] text-purple-7">{service.who}</p>
            </div>
            <div className="bg-purple-05 border border-purple-15 rounded-xl p-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[.1em] text-brand mb-1.5">
                The problem
              </p>
              <p className="text-[13.5px] text-purple-7">{service.problem}</p>
            </div>
            <div className="bg-purple-05 border border-purple-15 rounded-xl p-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[.1em] text-brand mb-1.5">
                The outcome
              </p>
              <p className="text-[13.5px] text-purple-7">{service.outcome}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a Consultation <span>&#8594;</span>
            </Link>
            {service.link ? (
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 rounded-[10px] bg-pink-05 px-5 py-2.5 text-sm font-semibold text-brand transition-all hover:-translate-y-0.5"
              >
                {service.linkLabel ?? "Learn more"} <span>&#8594;</span>
              </Link>
            ) : null}
          </div>
        </div>

        <div className="bg-purple-05 rounded-xl p-6 border border-purple-15">
          <h3 className="text-[11px] font-extrabold uppercase tracking-[.14em] text-brand mb-3.5">
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
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-dark text-white pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 75% 40%, rgba(254, 52, 101, .18) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[1200px] px-8 text-center">
          <div className="flex items-center justify-center gap-2.5 mb-6 flex-wrap">
            <span className="inline-flex items-center rounded-full bg-brand/15 px-3.5 py-1.5 text-xs font-bold text-pink-3">
              9 services
            </span>
            <span className="inline-flex items-center rounded-full bg-brand/15 px-3.5 py-1.5 text-xs font-bold text-pink-3">
              Full-stack B2B
            </span>
            <span className="inline-flex items-center rounded-full bg-brand/15 px-3.5 py-1.5 text-xs font-bold text-pink-3">
              AI-powered delivery
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] mb-6 max-w-[820px] mx-auto">
            Everything your growth engine{" "}
            <span className="gradient-text">needs</span>. Nothing it
            doesn&apos;t.
          </h1>
          <p className="text-lg text-purple-3 max-w-2xl mx-auto">
            Each service is scoped to a real business problem and a measurable
            outcome. Hire one. Hire several. Or hire the full stack.
          </p>
        </div>
      </section>

      {/* Jump nav */}
      <div className="sticky top-[72px] z-40 bg-white border-b border-purple-15">
        <div className="mx-auto max-w-[1200px] px-8 flex gap-1.5 overflow-x-auto py-3">
          {jumpLinks.map((j) => (
            <a
              key={j.id}
              href={`#${j.id}`}
              className="text-[13px] font-semibold text-purple-6 px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors hover:bg-pink-05 hover:text-brand"
            >
              {j.label}
            </a>
          ))}
        </div>
      </div>

      {/* Service blocks */}
      <section className="py-16 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8 space-y-8">
          {services.slice(0, 4).map((service, i) => (
            <ScrollReveal key={service.id} delay={0.05 + i * 0.04}>
              <ServiceBlock service={service} />
            </ScrollReveal>
          ))}

          {/* Mid-page lead band */}
          <ScrollReveal>
            <div className="relative bg-dark text-white rounded-3xl p-10 lg:p-14 overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 80% at 85% 40%, rgba(254, 52, 101, .2) 0%, transparent 70%)",
                }}
              />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
                <div>
                  <p className="eyebrow eyebrow-light mb-3">
                    Not sure which service fits?
                  </p>
                  <h2 className="text-2xl lg:text-[28px] font-black tracking-tight mb-3">
                    Start with a free diagnostic.
                  </h2>
                  <p className="text-purple-3 text-[15.5px]">
                    30 minutes with Lihi. We map your current gaps and
                    recommend the right combination for your stage and goals.
                    Most companies start with one service and expand.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
                  >
                    Book a Consultation <span>&#8594;</span>
                  </Link>
                  <Link
                    href="/agents"
                    className="text-pink-3 font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all self-center"
                  >
                    Explore AI Solutions <span>&#8594;</span>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {services.slice(4).map((service, i) => (
            <ScrollReveal key={service.id} delay={0.05 + i * 0.04}>
              <ServiceBlock service={service} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-dark text-white py-20 lg:py-28 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 50% 30%, rgba(254, 52, 101, .2) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[760px] px-8 text-center">
          <ScrollReveal>
            <p className="eyebrow eyebrow-light mb-4">Next step</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] mb-4">
              Map your gaps in{" "}
              <span className="gradient-text">30 minutes</span>.
            </h2>
            <p className="text-purple-3 mb-10 max-w-xl mx-auto">
              Book a consultation with Lihi. We&apos;ll look at your funnel,
              name the highest-impact moves, and recommend where to start.
              Most companies begin with one service and expand as they grow.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
            >
              Book a Consultation <span>&#8594;</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
