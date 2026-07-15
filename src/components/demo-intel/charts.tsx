import type { Call } from "@/lib/demo-intelligence-data";

const TEMP_COLOR: Record<string, string> = {
  hot: "#FE3465",
  warm: "#FE85A3",
  risk: "#D64545",
};

const GOOD = "#2E9E6B";
const WATCH = "#C98A00";
const BAD = "#D64545";

function talkColor(v: number): string {
  if (v <= 55) return GOOD;
  if (v < 65) return WATCH;
  return BAD;
}

/** Circular score gauge, 0–100, colored by call temperature. */
export function ScoreRing({
  score,
  temp,
  size = 128,
}: {
  score: number;
  temp: Call["temp"];
  size?: number;
}) {
  const stroke = 9;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, score)) / 100;
  const color = TEMP_COLOR[temp];

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`Call score ${score} out of 100`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          style={{ transition: "stroke-dashoffset 1s cubic-bezier(.16,1,.3,1)" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-3xl font-black leading-none"
          style={{ color: "var(--c-text)" }}
        >
          {score}
        </span>
        <span
          className="mono-label mt-1"
          style={{ color: "var(--c-text-dim)", fontSize: 9 }}
        >
          / 100
        </span>
      </div>
    </div>
  );
}

/** Horizontal ranked score bars. */
export function ScoreBarChart({
  data,
}: {
  data: { account: string; score: number; temp: Call["temp"] }[];
}) {
  const sorted = [...data].sort((a, b) => b.score - a.score);
  return (
    <div className="flex flex-col gap-4">
      {sorted.map((d) => (
        <div key={d.account} className="flex items-center gap-3">
          <span
            className="w-20 shrink-0 text-sm font-semibold"
            style={{ color: "var(--c-text)" }}
          >
            {d.account}
          </span>
          <div
            className="relative h-7 flex-1 overflow-hidden rounded-md"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <div
              className="h-full rounded-md"
              style={{
                width: `${d.score}%`,
                background: TEMP_COLOR[d.temp],
                transition: "width 1s cubic-bezier(.16,1,.3,1)",
              }}
            />
            <span
              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-black"
              style={{ color: "var(--c-text)" }}
            >
              {d.score}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Stacked DT-vs-prospect talk share with benchmark markers. */
export function TalkRatioChart({
  data,
  greatBenchmark,
  maxAcceptable,
}: {
  data: { account: string; dtTalkShare: number }[];
  greatBenchmark: number;
  maxAcceptable: number;
}) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((d) => (
        <div key={d.account} className="flex items-center gap-3">
          <span
            className="w-20 shrink-0 text-sm font-semibold"
            style={{ color: "var(--c-text)" }}
          >
            {d.account}
          </span>
          <div
            className="relative h-7 flex-1 overflow-hidden rounded-md"
            style={{ background: "#DCD3E1" }}
          >
            {/* DT share */}
            <div
              className="flex h-full items-center rounded-l-md pl-2"
              style={{
                width: `${d.dtTalkShare}%`,
                background: talkColor(d.dtTalkShare),
                transition: "width 1s cubic-bezier(.16,1,.3,1)",
              }}
            >
              <span className="text-xs font-black text-white">
                {d.dtTalkShare}%
              </span>
            </div>
            {/* Benchmark markers */}
            <span
              className="absolute top-0 h-full border-l-2 border-dashed"
              style={{ left: `${greatBenchmark}%`, borderColor: GOOD }}
              aria-hidden="true"
            />
            <span
              className="absolute top-0 h-full border-l-2 border-dashed"
              style={{ left: `${maxAcceptable}%`, borderColor: "#1B161F" }}
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
        {[
          ["Good ≤55%", GOOD],
          ["Watch 56–64%", WATCH],
          ["Too high ≥65%", BAD],
        ].map(([label, color]) => (
          <span
            key={label}
            className="inline-flex items-center gap-1.5 text-xs"
            style={{ color: "var(--c-text-dim)" }}
          >
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ background: color }}
            />
            {label}
          </span>
        ))}
        <span
          className="inline-flex items-center gap-1.5 text-xs"
          style={{ color: "var(--c-text-dim)" }}
        >
          <span
            className="inline-block h-0 w-4 border-t-2 border-dashed"
            style={{ borderColor: GOOD }}
          />
          Great-call {greatBenchmark}%
        </span>
        <span
          className="inline-flex items-center gap-1.5 text-xs"
          style={{ color: "var(--c-text-dim)" }}
        >
          <span
            className="inline-block h-0 w-4 border-t-2 border-dashed"
            style={{ borderColor: "#8A8A9A" }}
          />
          Max acceptable {maxAcceptable}%
        </span>
      </div>
    </div>
  );
}

/** Compact horizontal rubric bar used in call scorecards. */
export function RubricBar({
  label,
  value,
  max,
}: {
  label: string;
  value: number;
  max: number;
}) {
  const pct = (value / max) * 100;
  const color = pct >= 65 ? GOOD : pct >= 45 ? WATCH : BAD;
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs font-semibold" style={{ color: "var(--c-text-dim)" }}>
          {label}
        </span>
        <span className="text-xs font-black" style={{ color: "var(--c-text)" }}>
          {value}
          <span style={{ color: "var(--c-text-dim)" }}>/{max}</span>
        </span>
      </div>
      <div
        className="h-1.5 overflow-hidden rounded-full"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}
