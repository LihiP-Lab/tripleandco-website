import type { Temp } from "@/lib/demo-intelligence-data";

const TEMP_STYLE: Record<Temp, { bg: string; color: string; border: string }> = {
  hot: { bg: "rgba(254,52,101,0.14)", color: "#FE85A3", border: "rgba(254,52,101,0.4)" },
  warm: { bg: "rgba(184,167,196,0.14)", color: "#C9BCD6", border: "rgba(184,167,196,0.35)" },
  risk: { bg: "rgba(214,69,69,0.15)", color: "#F08A8A", border: "rgba(214,69,69,0.4)" },
};

export function TempPill({ temp, label }: { temp: Temp; label: string }) {
  const s = TEMP_STYLE[temp];
  return (
    <span
      className="mono-label inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}`, fontSize: 10 }}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: s.color }}
      />
      {label}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-6">
      <p className="mono-label" style={{ color: "#3DE1FF" }}>
        {eyebrow}
      </p>
      <h2
        className="mt-2 text-2xl font-black tracking-tight lg:text-[28px]"
        style={{ color: "var(--c-text)" }}
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-2 max-w-3xl text-[15px] leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass-card relative rounded-2xl p-6 ${className}`}>
      <span className="card-spotlight" aria-hidden="true" />
      {children}
    </div>
  );
}

/** Bilingual verbatim quote block (Hebrew RTL + English gloss). */
export function Quote({ he, en }: { he: string; en: string }) {
  return (
    <blockquote
      className="rounded-r-xl py-3 pl-4 pr-3"
      style={{
        borderLeft: "3px solid",
        borderImage: "linear-gradient(180deg,#FE3465,#896D9C) 1",
        background: "rgba(255,255,255,0.03)",
      }}
    >
      <span dir="rtl" className="block text-right text-[15px] font-semibold" style={{ color: "var(--c-text)" }}>
        {he}
      </span>
      <span className="mt-2 block text-[13px] leading-relaxed" style={{ color: "var(--c-text-dim)" }}>
        {en}
      </span>
    </blockquote>
  );
}
