"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import {
  SAMPLE_ACCOUNTS,
  SAMPLE_COMPANY,
  SAMPLE_PACKAGE_NOTES,
  SAMPLE_PUBLICATIONS,
  SOCIAL_PACKAGES,
  samplePublicationTotal,
  type PackageId,
} from "@/lib/social-packages";

const MAX_PUBLICATIONS = Math.max(
  ...SOCIAL_PACKAGES.flatMap((p) => Object.values(SAMPLE_PUBLICATIONS[p.id])),
);

/** Accessible tabs: one package at a time, arrow keys move between tabs. */
export function SampleMonth() {
  const [active, setActive] = useState<PackageId>("growth");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const pkg = SOCIAL_PACKAGES.find((p) => p.id === active)!;
  const counts = SAMPLE_PUBLICATIONS[active];
  const activeAccounts = SAMPLE_ACCOUNTS.filter((a) => counts[a] > 0);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const i = SOCIAL_PACKAGES.findIndex((p) => p.id === active);
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % SOCIAL_PACKAGES.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + SOCIAL_PACKAGES.length) % SOCIAL_PACKAGES.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = SOCIAL_PACKAGES.length - 1;
    else return;
    e.preventDefault();
    setActive(SOCIAL_PACKAGES[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white border border-purple-15 shadow-[var(--shadow-base)]">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[5px] gradient-bar" />
      <div className="p-5 sm:p-8">
        <div
          role="tablist"
          aria-label="Sample month by package"
          className="flex gap-1 rounded-xl bg-purple-05 p-1 mb-6"
          onKeyDown={onKeyDown}
        >
          {SOCIAL_PACKAGES.map((p, i) => {
            const selected = p.id === active;
            return (
              <button
                key={p.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                id={`${baseId}-tab-${p.id}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(p.id)}
                className={`flex-1 min-h-[44px] rounded-[10px] px-2 text-sm font-semibold transition-colors ${
                  selected ? "bg-white text-purple-9 shadow-[var(--shadow-base)]" : "text-purple-6 hover:text-purple-9"
                }`}
              >
                {p.name.replace("Social ", "")}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
          tabIndex={0}
          className="focus-visible:outline-offset-4"
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-purple-6">
                {SAMPLE_COMPANY} on {pkg.name}
              </p>
              <p className="text-purple-9">
                <span className="text-4xl font-black tracking-tight">{samplePublicationTotal(active)}</span>{" "}
                <span className="font-semibold">publications</span>
              </p>
            </div>
            <p className="text-sm text-purple-7 sm:text-right">
              from <strong className="text-purple-9">{pkg.originalPieces} original pieces</strong>
              <br />
              across {pkg.managedAccounts} accounts
            </p>
          </div>

          <ul className="space-y-2.5 mb-5">
            {SAMPLE_ACCOUNTS.map((account) => {
              const n = counts[account];
              return (
                <li key={account} className="grid grid-cols-[8.5rem_1fr_2rem] items-center gap-3 text-sm">
                  <span className={n ? "font-semibold text-purple-8" : "text-purple-6"}>{account}</span>
                  <span className="h-2.5 rounded-full bg-purple-05 overflow-hidden" aria-hidden="true">
                    <span
                      className="block h-full rounded-full gradient-bar transition-[width] duration-500 motion-reduce:transition-none"
                      style={{ width: `${(n / MAX_PUBLICATIONS) * 100}%` }}
                    />
                  </span>
                  <span className={`text-right tabular-nums ${n ? "font-bold text-purple-9" : "text-purple-6"}`}>
                    {n || <span aria-label="not included">0</span>}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-purple-7 leading-relaxed">
            {SAMPLE_PACKAGE_NOTES[active]}{" "}
            <span className="sr-only">Active accounts: {activeAccounts.join(", ")}.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
