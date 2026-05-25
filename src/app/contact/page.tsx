import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a diagnostic call with Lihi Pinto. 30 minutes. Zero pressure. Senior CMO and CRO leadership for B2B tech companies.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-20 pb-20 lg:pt-28 lg:pb-28 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-4">Get in touch</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                Book a{" "}
                <span className="gradient-text">diagnostic call</span>
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                30-minute diagnostic. Zero pressure. Lihi will tell you within
                the first 10 minutes whether Triple is the right fit.
              </p>
              <p className="text-purple-7 leading-relaxed">
                Whether you&apos;re looking for CMO or CRO leadership, AI
                marketing agents, or a complete revenue transformation —
                let&apos;s talk.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-[10px] bg-pink-05 flex items-center justify-center shrink-0 text-brand">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-purple-9">Location</h3>
                    <p className="text-sm text-purple-7 mt-1">
                      Herzliya, Israel
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-[10px] bg-pink-05 flex items-center justify-center shrink-0 text-brand">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-purple-9">Serving</h3>
                    <p className="text-sm text-purple-7 mt-1">
                      B2B companies in Israel and globally
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-[10px] bg-pink-05 flex items-center justify-center shrink-0 text-brand">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-purple-9">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/lihipinto/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand hover:text-brand-dark transition-colors mt-1 inline-block"
                    >
                      linkedin.com/in/lihipinto
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
