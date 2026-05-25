import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Revenue Insights | Triple & Co.",
  description:
    "Every startup has its own scaling formula. Explore how Triple & Co. builds marketing, sales, and customer success engines that triple revenue.",
};

const pillars = [
  {
    title: "Marketing",
    intro:
      "Triple provides B2B SaaS companies with the know-how to create a well-oiled marketing machine. We develop your unique lead generation process from strategy to content creation to building a team of knowledgeable experts.",
    cta: "Bring in qualified leads to feed your sales and fuel your growth.",
    groups: [
      {
        heading: "Marketing Strategy",
        items: [
          "Hiring",
          "Go-to-market (GTM) strategy",
          "Lead gen foundations for pipeline generation",
          "Buyer persona analysis \u2014 finding your ICP",
          "Funnel analysis",
          "A/B Testing",
          "Content strategy and creation",
          "Competitive analysis",
        ],
      },
      {
        heading: "Branding",
        items: ["Messaging", "Logo creation", "Website creation"],
      },
      {
        heading: "Inbound",
        items: [
          "Content creation",
          "Ebooks",
          "Case studies",
          "White papers",
          "Webinars",
        ],
      },
      {
        heading: "ABM \u2014 Triple\u2019s LEC Method",
        items: [
          "Locate \u2014 zero in on the accounts you need to grow",
          "Engage \u2014 nail their needs with hyper-personalized content",
          "Convert \u2014 invite them to be a part of your larger vision",
        ],
      },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a1.125 1.125 0 01-1.535-.403l-.244-.418A9.02 9.02 0 017.5 12a9.02 9.02 0 011.226-4.533l.244-.418a1.125 1.125 0 011.535-.403l.657.38c.524.3.71.96.463 1.511a12.02 12.02 0 00-.985 2.783m0 0c.687.06 1.385.09 2.09.09h.75a4.5 4.5 0 010 9h-.75c-.705 0-1.403.03-2.09.09" />
      </svg>
    ),
  },
  {
    title: "Sales",
    intro:
      "Building a powerhouse sales team and scaling it over and over is undoubtedly one of the most challenging tasks founders face. Triple provides a specific sales strategy that suits you, your product, and most importantly \u2014 your customer.",
    cta: "We analyze the customer journey and design a funnel that brings the right clients to your door.",
    groups: [
      {
        heading: "Outbound & Business Development",
        items: [
          "Sales organization structure",
          "Align strategy and budget goals",
          "Identify your best-performing sales method",
        ],
      },
      {
        heading: "Partnership Strategies",
        items: [
          "Establish a referral strategy",
          "Initiate a reseller strategy",
        ],
      },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Customer Success",
    intro:
      "Customer Success is THE most crucial aspect of a sustainable and scaling SaaS business. The reason is simple \u2014 Customer Success is handling the most valuable asset we have: our customers.",
    cta: "Once we value the importance of the success of our customers and become totally obsessed over it \u2014 we know we\u2019re poised for growth.",
    groups: [
      {
        heading: "SaaS Metrics & Tools",
        items: [
          "Collect and measure",
          "Analyze data",
          "Predict the best action for success",
        ],
      },
      {
        heading: "End-to-End Assessment",
        items: [
          "Current performance and metrics review",
          "Onboarding process to full renewal cycle",
          "Focus on the most important CS KPI \u2014 Expansions",
        ],
      },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function RevenuePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: "Revenue" },
            ]}
          />

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand mb-4">
              Revenue
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-4">
              Every Start-Up Is{" "}
              <span className="gradient-text">Unique</span>.
            </h1>
            <p className="text-lg text-purple-7 leading-relaxed">
              Every start-up has its own scaling formula. Together, we will
              discover yours. Powered by over 15 years of experience and a
              relentless passion for growth, Lihi Pinto will become an extension
              of your start-up.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1100px] px-8">
          <div className="space-y-16">
            {pillars.map((pillar, pi) => (
              <ScrollReveal key={pillar.title} delay={0.05 + pi * 0.08}>
                <div className="relative rounded-2xl bg-white p-8 lg:p-10 shadow-[var(--shadow-base)] border border-purple-15 card-gradient-top overflow-hidden">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center text-brand flex-shrink-0">
                      {pillar.icon}
                    </div>
                    <h2 className="text-2xl font-extrabold text-purple-9 tracking-tight">
                      {pillar.title}
                    </h2>
                  </div>

                  <p className="text-purple-7 leading-relaxed mb-2 max-w-3xl">
                    {pillar.intro}
                  </p>
                  <p className="text-sm text-brand font-semibold mb-8">
                    {pillar.cta}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {pillar.groups.map((group) => (
                      <div
                        key={group.heading}
                        className="rounded-xl bg-purple-05 border border-purple-15 p-5"
                      >
                        <h3 className="text-sm font-bold text-purple-9 mb-3 uppercase tracking-wide">
                          {group.heading}
                        </h3>
                        <ul className="space-y-2">
                          {group.items.map((item) => (
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
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Joint Work Process */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <p className="eyebrow mb-3">The joint work process</p>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Triple Becomes an Extension of Your Start-Up
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              We are there with you throughout the entire process, constantly
              assessing, re-evaluating, and enhancing for maximum growth.
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
