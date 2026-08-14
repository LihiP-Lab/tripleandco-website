import Image from "next/image";
import Link from "next/link";

const linkCls = "text-sm hover:text-brand transition-colors";
const headCls =
  "text-white text-xs uppercase tracking-[.14em] font-bold mb-4";

const services = [
  { href: "/cmo-as-a-service", label: "CMO as a Service" },
  { href: "/cro-as-a-service", label: "CRO as a Service" },
  { href: "/agents", label: "Marketing Agents" },
  { href: "/revenue-diagnostic", label: "Revenue Diagnostic" },
  { href: "/pricing", label: "Engagement Models & Pricing" },
  { href: "/results", label: "Results" },
  { href: "/services", label: "All Services" },
];

const resources = [
  { href: "/insights", label: "Insights" },
  { href: "/ai-marketing-agents", label: "AI Agents Guide" },
  { href: "/geo", label: "GEO for B2B" },
  { href: "/llm-seo", label: "LLM SEO Guide" },
  { href: "/ai-visibility-audit", label: "Free AI Visibility Audit" },
  { href: "/head-of-growth", label: "Head of Growth" },
  { href: "/fractional-cmo-b2b", label: "Fractional CMO" },
  {
    href: "/fractional-cmo-vs-agency-vs-hire",
    label: "Fractional CMO vs Agency vs Hire",
  },
  { href: "/ai-marketing-team-vs-agency", label: "AI Marketing Team vs Agency" },
];

const industries = [
  { href: "/b2b-saas-marketing", label: "B2B SaaS Marketing" },
  { href: "/fintech-marketing", label: "Fintech Marketing" },
  { href: "/cybersecurity-marketing", label: "Cybersecurity Marketing" },
  { href: "/ai-deeptech-marketing", label: "AI & DeepTech Marketing" },
  { href: "/b2b-marketing-israel", label: "B2B Marketing in Israel" },
  { href: "/b2b-marketing-tel-aviv", label: "B2B Marketing in Tel Aviv" },
  { href: "/b2b-marketing-usa", label: "B2B Marketing for the US" },
];

export function Footer() {
  return (
    <footer
      className="relative bg-purple-95 text-purple-3 pt-20 pb-20 lg:pb-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/images/logos/logo-bright.png"
                alt="Triple & Co."
                width={120}
                height={33}
              />
            </Link>
            <p className="text-sm text-purple-4 italic leading-relaxed">
              Led by Lihi.
              <br />
              Powered by AI.
              <br />
              Built for revenue.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className={headCls}>Services</h4>
            <ul className="space-y-2.5">
              {services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={headCls}>Resources</h4>
            <ul className="space-y-2.5">
              {resources.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries & Markets */}
          <div>
            <h4 className={headCls}>Industries &amp; Markets</h4>
            <ul className="space-y-2.5">
              {industries.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={headCls}>Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className={linkCls}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/about-he" className={linkCls}>
                  אודות ליהיא פינטו
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkCls}>
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/triple-and-co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  Triple &amp; Co. on LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lihipinto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  Lihi Pinto on LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:lihi@tripleandco.com" className={linkCls}>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-7 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-purple-4">
          <div>
            &copy; {new Date().getFullYear()} Triple &amp; Co. All rights
            reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-brand transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
