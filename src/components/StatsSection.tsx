const stats = [
  { number: "14", label: "Pieces shipped today" },
  { number: "3h 12m", label: "Average cycle time" },
  { number: "94%", label: "Options approved on first pass" },
];

export function StatsSection() {
  return (
    <section className="bg-purple-05 py-16">
      <div className="mx-auto max-w-[1200px] px-8">
        <p className="eyebrow text-center mb-8">
          Live numbers from the command center
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-8 px-4 rounded-2xl bg-white shadow-[var(--shadow-base)]"
            >
              <div className="font-black text-[56px] leading-none tracking-tighter gradient-text mb-3">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-purple-7">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm italic text-purple-5">
          Refreshed weekly. The supervised team in numbers.
        </p>
      </div>
    </section>
  );
}
