import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative bg-dark text-white py-24 lg:py-36 text-center overflow-hidden">
      {/* Glow effects */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(254, 52, 101, .25) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute -bottom-12 -right-12 w-[300px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(137, 109, 156, .35) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-8">
        <div className="flex flex-col gap-1 mb-12">
          <span className="font-black text-4xl md:text-5xl lg:text-[64px] tracking-tighter leading-tight text-white">
            Led by Lihi.
          </span>
          <span className="font-black text-4xl md:text-5xl lg:text-[64px] tracking-tighter leading-tight gradient-text">
            Powered by AI.
          </span>
          <span className="font-black text-4xl md:text-5xl lg:text-[64px] tracking-tighter leading-tight text-white">
            Built for revenue.
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-[10px] bg-white text-purple-9 px-9 py-[18px] text-base font-semibold transition-all hover:bg-purple-05 hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
        >
          Book a Diagnostic Call with Lihi <span>&#8594;</span>
        </Link>
        <p className="text-sm text-purple-4 mt-6 italic">
          30-minute diagnostic. Zero pressure. Lihi will tell you within the
          first 10 minutes whether Triple is the right fit.
        </p>
      </div>
    </section>
  );
}
