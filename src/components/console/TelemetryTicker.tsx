"use client";

const ITEMS = [
  "SYSTEM ONLINE",
  "8 AGENTS READY",
  "SUPERVISED BY LIHI PINTO",
  "$70M+ RAISED",
  "15+ YRS B2B SAAS",
  "EVERY OUTPUT HUMAN-REVIEWED",
  "ZERO ONBOARDING",
  "REAL DELIVERABLES, WEEKLY",
];

export function TelemetryTicker() {
  // Duplicated track for a seamless loop.
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="telemetry-rail overflow-hidden py-2.5">
      <div className="animate-ticker flex w-max items-center gap-8 whitespace-nowrap">
        {track.map((item, i) => (
          <span
            key={i}
            className="mono-label flex items-center gap-3"
            style={{ color: "var(--c-text-dim)" }}
          >
            <span className="signal-dot" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
