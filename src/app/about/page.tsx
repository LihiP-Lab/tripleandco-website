import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Lihi Pinto",
  description:
    "With over 15 years of experience in investment banking and high-tech entrepreneurship, Lihi Pinto has raised over $70 million in funding and built SaaS machines that tripled revenue.",
  alternates: { canonical: "/about" },
};

const credentials = [
  "15+ years in B2B SaaS and investment banking",
  "Raised over $70M in funding",
  "Tripled revenue at a SaaS company, repeatedly",
  "Bilingual: Hebrew and English. Israeli and global.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">About</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
                Hey! I&apos;m <span className="gradient-text">Lihi</span>.
              </h1>
              <p className="text-lg text-purple-7 leading-relaxed mb-4">
                I have over 15 years of experience in investment banking and
                high-tech entrepreneurship. I&apos;ve raised over $70 million in
                funding and built a SaaS machine in which I tripled my
                company&apos;s revenue again and again.
              </p>
              <p className="text-lg text-purple-7 leading-relaxed">
                Now, I&apos;m on a mission to help other start-ups do the same.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-[360px] rounded-3xl overflow-hidden shadow-[var(--shadow-base)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 gradient-bar z-10" />
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
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[880px] px-8">
          <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-8">
            Entrepreneurs face a variety of challenges as they attempt to grow
            their start-ups.
          </h2>
          <div className="flex items-baseline gap-4 mb-8">
            <span className="text-6xl font-black gradient-text">5%</span>
            <span className="text-xl text-purple-7">
              of start-ups succeed
            </span>
          </div>
          <p className="text-lg text-purple-7 leading-relaxed mb-6">
            Let Triple &amp; Co. become your unfair advantage.
          </p>
          <p className="text-purple-7 leading-relaxed mb-6">
            Together, we will help you maximize your momentum and speed up your
            efforts to create a brilliant &apos;money machine&apos; with the
            potential to triple your revenue.
          </p>
          <p className="text-purple-7 leading-relaxed mb-8">
            I&apos;ve lived in the trenches of start-up culture. What I
            wouldn&apos;t give to have present-day me at start-up Lihi&apos;s
            side all those years ago! To teach her how to build systems and scale
            from the ground up.
          </p>

          <ul className="mb-8">
            {credentials.map((cred) => (
              <li
                key={cred}
                className="py-3 border-b border-purple-15 last:border-b-0 flex items-center gap-3 text-purple-7"
              >
                <span className="w-2 h-2 rounded-full gradient-bar shrink-0" />
                {cred}
              </li>
            ))}
          </ul>

          <blockquote className="text-lg italic text-purple-9 py-5 px-6 bg-purple-05 border-l-4 border-brand rounded-xl shadow-[var(--shadow-base)] leading-snug">
            &ldquo;Building the marketing team I wish I had as an early-stage
            founder.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-purple-05">
        <div className="mx-auto max-w-[880px] px-8 text-center">
          <h2 className="text-3xl lg:text-[40px] font-black tracking-tight leading-[1.1] text-purple-9 mb-4">
            Ready to work together?
          </h2>
          <p className="text-purple-7 mb-10">
            Discover how AI transforms your revenue operation — with Lihi Pinto.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
          >
            Book a Diagnostic Call <span>&#8594;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
