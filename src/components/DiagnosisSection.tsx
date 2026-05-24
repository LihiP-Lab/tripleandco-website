const painPoints = [
  "Messaging that needs to be sharper",
  "Pipeline that needs to be stronger",
  "Content that needs to work harder",
  "Sales process that needs structure",
  "A team that needs senior direction",
  "AI changing the rules faster than most companies can adapt",
];

export function DiagnosisSection() {
  return (
    <section className="bg-purple-05 py-20 lg:py-30">
      <div className="mx-auto max-w-[880px] px-8 text-center">
        <p className="eyebrow mb-4">The state of B2B growth</p>
        <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-8">
          The{" "}
          <span className="gradient-text">old marketing model</span> is
          breaking.
        </h2>
        <div className="space-y-4 text-lg lg:text-xl leading-relaxed text-purple-7">
          <p>
            B2B tech companies need growth. But the model most agencies still
            operate on was built for a different era.
          </p>
          <p>
            Strategy in one place. Content in another. Performance somewhere
            else. Sales completely disconnected. AI added as a tool, not as an
            operating system.
          </p>
          <p>
            Traditional agencies create assets, manage channels, and run
            campaigns. They rarely connect everything into one revenue engine.
          </p>
        </div>
        <ul className="mt-9 text-left max-w-[640px] mx-auto">
          {painPoints.map((point) => (
            <li
              key={point}
              className="py-3.5 border-b border-purple-15 last:border-b-0 flex items-center gap-3.5 text-[17px] text-purple-7"
            >
              <span className="text-brand font-black text-[22px] leading-none shrink-0">
                &times;
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
