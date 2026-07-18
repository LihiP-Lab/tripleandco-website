import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-purple-95 text-purple-3 pt-20 pb-20 lg:pb-8" role="contentinfo" aria-label="Site footer">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
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

          {/* Company */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[.14em] font-bold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-brand transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/about-he"
                  className="text-sm hover:text-brand transition-colors"
                >
                  אודות ליהיא פינטו
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-brand transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/cmo-as-a-service"
                  className="text-sm hover:text-brand transition-colors"
                >
                  CMO as a Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cro-as-a-service"
                  className="text-sm hover:text-brand transition-colors"
                >
                  CRO as a Service
                </Link>
              </li>
              <li>
                <Link
                  href="/fractional-cmo-b2b"
                  className="text-sm hover:text-brand transition-colors"
                >
                  Fractional CMO
                </Link>
              </li>
              <li>
                <Link
                  href="/geo"
                  className="text-sm hover:text-brand transition-colors"
                >
                  GEO for B2B
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-visibility-audit"
                  className="text-sm hover:text-brand transition-colors"
                >
                  Free AI Visibility Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/agents"
                  className="text-sm hover:text-brand transition-colors"
                >
                  Marketing Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-sm hover:text-brand transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-brand transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[.14em] font-bold mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.linkedin.com/in/lihipinto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-brand transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:lihi@tripleandco.com"
                  className="text-sm hover:text-brand transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-7 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-purple-5">
          <div>
            &copy; {new Date().getFullYear()} Triple &amp; Co. All rights
            reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-brand transition-colors"
            >
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
