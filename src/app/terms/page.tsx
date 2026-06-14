import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing use of the Triple & Co. website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "June 14, 2026";
const COMPANY = "Triple & Co.";
const CONTACT_EMAIL = "lihi@tripleandco.com";
const JURISDICTION = "Tel Aviv-Jaffa, Israel";

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

export default function TermsPage() {
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
            Terms &amp; <span className="gradient-text">Conditions</span>
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
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access
            to and use of the {COMPANY} website and the services we provide
            (collectively, the &ldquo;Services&rdquo;). By accessing our website
            or engaging our Services, you agree to be bound by these Terms. If
            you do not agree, please do not use our website or Services.
          </p>

          <Section title="1. Use of the Website">
            <p>
              You may use our website for lawful purposes only. You agree not to
              use the site in any way that could damage, disable, or impair it,
              interfere with another party&apos;s use, or attempt to gain
              unauthorized access to any part of the site or its systems.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              {COMPANY} provides professional marketing and related advisory
              services. The specific scope, deliverables, fees, and timelines for
              any engagement will be set out in a separate written proposal,
              statement of work, or service agreement (&ldquo;Service
              Agreement&rdquo;). In the event of a conflict between these Terms
              and a signed Service Agreement, the Service Agreement will prevail.
            </p>
          </Section>

          <Section title="3. Fees and Payment">
            <p>
              Fees for Services are as stated in the applicable Service
              Agreement. Unless otherwise agreed in writing, invoices are payable
              within the period specified on the invoice. Late payments may incur
              interest or result in suspension of Services. All fees are exclusive
              of applicable taxes (including VAT) unless stated otherwise.
            </p>
          </Section>

          <Section title="4. Client Responsibilities">
            <p>
              To deliver the Services effectively, we rely on your timely
              cooperation. You agree to provide accurate information, necessary
              materials and approvals, and reasonable access to relevant people
              and systems. Delays in providing these may affect timelines and
              deliverables.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              All content on this website, including text, graphics, logos, and
              design, is owned by or licensed to {COMPANY} and is protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, or create derivative works from this content without our
              prior written permission.
            </p>
            <p>
              Ownership of deliverables produced during a client engagement is
              governed by the applicable Service Agreement. Unless otherwise
              agreed, {COMPANY} retains ownership of its pre-existing materials,
              methodologies, and know-how.
            </p>
          </Section>

          <Section title="6. Confidentiality">
            <p>
              Each party agrees to keep confidential any non-public information
              disclosed by the other party in connection with the Services and to
              use it only for the purpose of the engagement, except where
              disclosure is required by law.
            </p>
          </Section>

          <Section title="7. Third-Party Tools and Links">
            <p>
              Our Services may involve third-party tools, platforms, or AI
              systems, and our website may link to third-party sites. We are not
              responsible for the availability, content, or practices of those
              third parties, and your use of them may be subject to their own
              terms.
            </p>
          </Section>

          <Section title="8. Disclaimers">
            <p>
              Our website and Services are provided on an &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; basis. While we work to deliver
              high-quality results, we do not warrant any specific business
              outcome, revenue, or performance figure. To the fullest extent
              permitted by law, we disclaim all warranties not expressly stated in
              a Service Agreement.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, {COMPANY} will
              not be liable for any indirect, incidental, special, or
              consequential damages, or for loss of profits, revenue, or data,
              arising from your use of the website or Services. Our total
              liability for any claim relating to the Services will not exceed the
              amount paid by you for the Services giving rise to the claim.
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to indemnify and hold harmless {COMPANY} and its
              representatives from any claims, damages, or expenses arising out of
              your breach of these Terms or your misuse of the website or
              Services.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              We may suspend or terminate your access to the website at any time
              if you breach these Terms. Termination of a client engagement is
              governed by the applicable Service Agreement.
            </p>
          </Section>

          <Section title="12. Governing Law and Jurisdiction">
            <p>
              These Terms are governed by the laws of the State of Israel, without
              regard to its conflict-of-law principles. Any dispute arising out of
              or relating to these Terms or the Services will be subject to the
              exclusive jurisdiction of the competent courts located in{" "}
              {JURISDICTION}.
            </p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the &ldquo;Last updated&rdquo; date at the top of this page.
              Your continued use of the website or Services after changes take
              effect constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="14. Contact Us">
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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
              href="/privacy"
              className="text-brand font-semibold hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </section>
    </>
  );
}
