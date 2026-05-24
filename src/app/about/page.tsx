import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Lihi Pinto",
  description:
    "With over 15 years of experience in investment banking and high-tech entrepreneurship, Lihi Pinto has raised over $70 million in funding and built SaaS machines that tripled revenue.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
                About
              </h2>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Hey! I&apos;m <span className="gradient-text">Lihi</span>.
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed">
                I have over 15 years of experience in investment banking and
                high-tech entrepreneurship. I&apos;ve raised over $70 million in
                funding and built a SaaS machine in which I tripled my
                company&apos;s revenue again and again.
              </p>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Now, I&apos;m on a mission to help other start-ups do the same.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-brand/20">
                <Image
                  src="/images/lihi.png"
                  alt="Lihi Pinto"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Entrepreneurs face a variety of challenges as they attempt to grow
            their start-ups.
          </h2>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-6xl font-bold gradient-text">5%</span>
            <span className="text-xl text-muted">of start-ups succeed</span>
          </div>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Let Triple & Co. become your unfair advantage.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            Together, we will help you maximize your momentum and speed up your
            efforts to create a brilliant &apos;money machine&apos; with the
            potential to triple your revenue.
          </p>
          <p className="text-muted leading-relaxed mb-8">
            I&apos;ve lived in the trenches of start-up culture. What I
            wouldn&apos;t give to have present-day me at start-up Lihi&apos;s
            side all those years ago! To teach her how to build systems and scale
            from the ground up.
          </p>
          <div className="rounded-2xl border border-brand/30 bg-brand/10 p-8">
            <h3 className="text-xl font-bold text-brand mb-2">
              Today I can jump-start your growth process.
            </h3>
            <p className="text-muted">
              With practical AI implementation and proven B2B growth strategies,
              I help companies move faster and scale smarter.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to work together?
          </h2>
          <p className="mt-6 text-muted">
            Discover how AI transforms your revenue operation — with Lihi Pinto.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:scale-105 animate-pulse-glow"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
