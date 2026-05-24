const pillars = [
  {
    num: "01",
    need: "What you need · Senior strategy",
    title: "CMO and CRO leadership from Lihi Pinto.",
    desc: "15+ years scaling B2B SaaS. $70M+ raised. Tripled revenue, repeatedly. The judgment of an experienced operator embedded in your team.",
  },
  {
    num: "02",
    need: "What you need · Execution power",
    title: "Full-service B2B marketing.",
    desc: "Content, campaigns, HubSpot, social, pipeline, events, sales enablement. One partner running the work, not a stack of disconnected vendors.",
  },
  {
    num: "03",
    need: "What you need · AI advantage",
    title: "A supervised team of specialist AI agents.",
    desc: "Eight agents trained to support research, strategy, content, social, analytics, art direction, video, and workflows. Implemented into your own brand and assets.",
  },
];

export function PillarsSection() {
  return (
    <section className="bg-white py-20 lg:py-30">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="text-center max-w-[880px] mx-auto mb-16">
          <p className="eyebrow mb-4">The new model</p>
          <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-6">
            Triple &amp; Co. is{" "}
            <span className="gradient-text">different</span>.
          </h2>
          <p className="text-lg lg:text-[19px] leading-relaxed text-purple-7">
            Led by Lihi Pinto, Triple &amp; Co. gives you senior CMO and CRO
            leadership, full-service B2B marketing execution, and access to a
            supervised team of specialist AI agents trained to support every part
            of your growth system: strategy, positioning, content, social,
            campaigns, HubSpot, pipeline, analytics, events, and sales
            enablement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="relative bg-white rounded-[20px] p-9 pb-8 shadow-[var(--shadow-base)] border border-purple-15 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="absolute top-0 left-0 right-0 h-[5px] gradient-bar rounded-t-[20px]" />
              <div className="font-black text-5xl leading-none tracking-tighter gradient-text mb-4">
                {p.num}
              </div>
              <div className="text-xs uppercase tracking-[.14em] text-purple-5 font-bold mb-1.5">
                {p.need}
              </div>
              <div className="font-extrabold text-[22px] text-purple-9 mb-4 tracking-tight leading-snug">
                {p.title}
              </div>
              <div className="text-[15px] text-purple-7 leading-relaxed">
                {p.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
