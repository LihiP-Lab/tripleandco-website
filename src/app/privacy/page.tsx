import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Triple & Co. collects, uses, and protects personal information. Our privacy practices for visitors, clients, and prospects.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "June 14, 2026";
const COMPANY = "Triple & Co.";
const CONTACT_EMAIL = "lihi@tripleandco.com";

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl lg:text-[28px] font-black tracking-tight text-purple-9 mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-[17px] leading-relaxed text-purple-7">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-purple-9 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 80% 30%, rgba(254,52,101,.16) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[860px] px-8">
          <p className="eyebrow text-brand mb-3">Legal</p>
          <h1 className="text-4xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-white mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-purple-3 text-sm font-semibold tracking-wide">
            Last updated: {EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      {/* ── BODY ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[860px] px-8">
          <p className="text-[17px] leading-relaxed text-purple-7 mb-12">
            This Privacy Policy explains how {COMPANY} (&ldquo;{COMPANY}
            ,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            collects, uses, discloses, and safeguards your information when you
            visit our website, contact us, or use our services. We are committed
            to protecting your privacy and handling your personal information in
            accordance with the Israeli Protection of Privacy Law, 5741-1981 and,
            where applicable, the EU General Data Protection Regulation (GDPR).
            By using our website or services, you agree to the practices
            described in this policy.
          </p>

          <Section title="1. Information We Collect">
            <p>
              We collect information that you provide directly to us, as well as
              information collected automatically when you interact with our
              website. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-purple-9">
                  Information you provide:
                </strong>{" "}
                name, email address, phone number, company name, job title, and
                any other details you share through contact forms, email, calls,
                or while engaging our services.
              </li>
              <li>
                <strong className="text-purple-9">Usage data:</strong> IP
                address, browser type, device information, pages visited,
                referring URLs, and the dates and times of your visits.
              </li>
              <li>
                <strong className="text-purple-9">
                  Cookies and similar technologies:
                </strong>{" "}
                data collected through cookies and analytics tools to understand
                how visitors use our site and to improve it.
              </li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and improve our services.</li>
              <li>
                Respond to your inquiries and communicate with you about
                proposals, projects, and support.
              </li>
              <li>
                Send administrative information, updates, and, where you have
                consented, marketing communications.
              </li>
              <li>
                Analyze website usage to maintain security and improve user
                experience.
              </li>
              <li>
                Comply with legal obligations and enforce our agreements.
              </li>
            </ul>
          </Section>

          <Section title="3. Legal Basis for Processing">
            <p>
              Where applicable law requires it, we process your personal
              information on the basis of your consent, the performance of a
              contract with you, our legitimate business interests, and our
              compliance with legal obligations.
            </p>
          </Section>

          <Section title="4. Sharing Your Information">
            <p>
              We do not sell your personal information. We may share it with
              trusted third parties only as needed to operate our business,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Service providers and subcontractors who perform functions on
                our behalf (such as hosting, analytics, email, and payment
                processing).
              </li>
              <li>
                Professional advisors, such as accountants and legal counsel.
              </li>
              <li>
                Authorities or other parties when required by law, to protect our
                rights, or in connection with a business transfer.
              </li>
            </ul>
            <p>
              We require third parties to handle your information in a manner
              consistent with this policy and applicable law.
            </p>
          </Section>

          <Section title="5. Cookies and Analytics">
            <p>
              Our website uses cookies and similar technologies to function
              properly, remember your preferences, and measure traffic. You can
              control cookies through your browser settings. Disabling certain
              cookies may affect how the website works for you.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal information only for as long as necessary to
              fulfil the purposes described in this policy, to comply with our
              legal obligations, resolve disputes, and enforce our agreements.
              When information is no longer needed, we securely delete or
              anonymize it.
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We implement reasonable technical and organizational measures to
              protect your personal information against loss, misuse, and
              unauthorized access. However, no method of transmission or storage
              is completely secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>
              Subject to applicable law, you may have the right to access,
              correct, update, or delete your personal information, to object to
              or restrict certain processing, and to withdraw consent where
              processing is based on consent. To exercise these rights, contact
              us using the details below. You may also have the right to lodge a
              complaint with a relevant supervisory authority.
            </p>
          </Section>

          <Section title="9. International Transfers">
            <p>
              We operate from Israel and may process information in other
              countries. Where we transfer personal information across borders,
              we take steps to ensure it remains protected in accordance with
              this policy and applicable law.
            </p>
          </Section>

          <Section title="10. Third-Party Links">
            <p>
              Our website may contain links to third-party websites and
              services. We are not responsible for the privacy practices of those
              third parties, and we encourage you to review their privacy
              policies.
            </p>
          </Section>

          <Section title="11. Children's Privacy">
            <p>
              Our website and services are intended for businesses and
              individuals over the age of 18. We do not knowingly collect
              personal information from children.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we
              will revise the &ldquo;Last updated&rdquo; date at the top of this
              page. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your information, please contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-brand font-semibold hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <div className="mt-12 pt-8 border-t border-purple-15 text-[15px] text-purple-6">
            See also our{" "}
            <Link
              href="/terms"
              className="text-brand font-semibold hover:underline"
            >
              Terms &amp; Conditions
            </Link>
            .
          </div>
        </div>
      </section>
    </>
  );
}
