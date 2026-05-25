import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Insights | Triple & Co.",
  description:
    "Nuggets of wisdom from Lihi Pinto on tripling revenue, B2B SaaS marketing, AI-powered growth, and building startup revenue engines.",
};

const categories = [
  { label: "All", href: "/insights" },
  { label: "Revenue", href: "/insights/revenue" },
  { label: "Strategy", href: "/insights/strategy" },
  { label: "Podcasts", href: "/insights/podcasts" },
];

const articles = [
  {
    date: "10 Jul 2025",
    title:
      "CRO and CMO as a Service: The Growth Boost Your Startup Has Been Waiting For",
    excerpt:
      "When your startup starts gaining traction \u2014 that\u2019s exactly when the real challenges begin. It\u2019s hard to acquire new customers consistently, and marketing feels like throwing darts in the dark.",
    category: "Revenue",
    featured: true,
  },
  {
    date: "8 Jul 2025",
    title:
      "How to Write Strategic, Precise, and High-Impact Marketing Prompts",
    excerpt:
      "AI is only as good as the prompts you give it. Learn how to craft marketing prompts that produce content your team can actually use.",
    category: "Strategy",
    featured: false,
  },
  {
    date: "7 Jun 2025",
    title: "Accelerate SaaS Growth with CRO & CMO as a Service",
    excerpt:
      "Discover how combining fractional CMO and CRO leadership creates a unified growth engine for B2B SaaS startups.",
    category: "Revenue",
    featured: false,
  },
  {
    date: "30 May 2025",
    title: "The Future Is Here \u2014 and It\u2019s Not What We Feared",
    excerpt:
      "AI isn\u2019t replacing marketers. It\u2019s giving the best ones superpowers. Here\u2019s what the future of marketing actually looks like.",
    category: "Strategy",
    featured: false,
  },
  {
    date: "1 Apr 2025",
    title:
      "Maximizing Your Startup\u2019s Growth in Q4 2024 with CRO as a Service",
    excerpt:
      "Q4 is make-or-break for many startups. Learn how CRO-as-a-Service accelerates pipeline and closes the year strong.",
    category: "Revenue",
    featured: false,
  },
  {
    date: "30 Aug 2024",
    title:
      "Unlocking Growth: CRO as a Service for SaaS B2B Startups",
    excerpt:
      "Why more B2B SaaS companies are turning to fractional CRO leadership to align marketing, sales, and customer success.",
    category: "Revenue",
    featured: false,
  },
  {
    date: "24 Mar 2024",
    title: "How a Fractional CMO Can Transform Your Startup",
    excerpt:
      "Fractional CMOs bring executive-level marketing leadership without the overhead. Here\u2019s what to expect and how to get the most out of the engagement.",
    category: "Strategy",
    featured: false,
  },
  {
    date: "21 Mar 2024",
    title:
      "Unlocking Growth Potential: Understanding CMO Services and the Rise of CMO as a Service",
    excerpt:
      "The CMO-as-a-Service model is growing fast. Understand what it is, why it works, and how it differs from traditional consulting.",
    category: "Strategy",
    featured: false,
  },
  {
    date: "24 Jun 2023",
    title: "Exploring the Rise of CMO-as-a-Service",
    excerpt:
      "Why the fractional CMO model is becoming the default for high-growth B2B SaaS startups that need senior marketing leadership.",
    category: "Strategy",
    featured: false,
  },
  {
    date: "1 Jun 2023",
    title:
      "5 Key Insights from Vitafoods Europe 2023: Unleashing the Power of Branding and Marketing for Nutraceutical and Food Tech Companies",
    excerpt:
      "Lessons on branding, positioning, and go-to-market from one of Europe\u2019s largest B2B food-tech events.",
    category: "Strategy",
    featured: false,
  },
];

const featured = articles.find((a) => a.featured);
const rest = articles.filter((a) => !a.featured);

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights" },
            ]}
          />

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-4">
              Insights
            </h1>
            <p className="text-lg text-purple-7 leading-relaxed">
              Nuggets of wisdom from Lihi Pinto on tripling revenue, B2B SaaS
              marketing, and building startup growth engines. Hopefully they&apos;ll
              be useful to your journey too.
            </p>
          </div>

          {/* Category nav */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  cat.label === "All"
                    ? "bg-brand text-white"
                    : "bg-white text-purple-7 border border-purple-15 hover:border-brand/30 hover:text-brand"
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-8">
            <ScrollReveal>
              <div className="relative rounded-2xl bg-purple-05 border border-purple-15 p-8 lg:p-12 overflow-hidden card-gradient-top">
                <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand mb-4">
                  Featured
                </span>
                <p className="text-sm text-purple-6 mb-2">{featured.date}</p>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-9 tracking-tight leading-tight mb-4 max-w-3xl">
                  {featured.title}
                </h2>
                <p className="text-purple-7 leading-relaxed mb-6 max-w-2xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-white border border-purple-15 px-3 py-1 text-xs font-semibold text-purple-6">
                    {featured.category}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Articles grid */}
      <section className="py-12 lg:py-20 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-purple-9 mb-8">
              All Articles
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <ScrollReveal key={article.title} delay={0.05 + i * 0.04}>
                <article className="relative bg-white rounded-2xl p-6 shadow-[var(--shadow-base)] border border-purple-15 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)] card-gradient-top h-full flex flex-col">
                  <p className="text-xs text-purple-5 mb-2">{article.date}</p>
                  <h3 className="text-base font-extrabold text-purple-9 tracking-tight leading-snug mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-purple-7 leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <span className="rounded-full bg-purple-05 border border-purple-15 px-3 py-1 text-[11px] font-semibold text-purple-6 self-start">
                    {article.category}
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts promo */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <ScrollReveal>
            <div className="rounded-2xl bg-purple-9 p-8 lg:p-12 text-center">
              <p className="eyebrow-light mb-3">Listen &amp; learn</p>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-4">
                Triple &amp; Co. Podcast
              </h2>
              <p className="text-purple-3 mb-8 max-w-xl mx-auto">
                Short, sharp episodes on real-world B2B marketing challenges
                solved with AI. No fluff. No theory. Just battle-tested
                strategies.
              </p>
              <Link
                href="/insights/podcasts"
                className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              >
                Browse Episodes <span>&#8594;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
              Ready to Jump-Start Your Growth?
            </h2>
            <p className="text-purple-7 mb-10 max-w-xl mx-auto">
              Book a free diagnostic call with Lihi and turn these insights into
              a concrete plan for your startup.
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
