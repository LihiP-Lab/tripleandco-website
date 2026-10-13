"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Check } from "lucide-react";
import {
  SAMPLE_ACCOUNTS,
  SAMPLE_COMPANY,
  SAMPLE_PACKAGE_NOTES,
  SAMPLE_WEEK_THEMES,
  SOCIAL_PACKAGES,
  sampleChannelsFor,
  samplePiecesFor,
  samplePublications,
  type AdditionalChannel,
  type PackageId,
  type SampleFormat,
  type SamplePiece,
  type SampleWeekNumber,
} from "@/lib/social-packages";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const WEEKS: SampleWeekNumber[] = [1, 2, 3, 4];

const FORMAT_LABEL: Record<SampleFormat, string> = {
  video: "Short video",
  carousel: "Carousel",
  image: "Image",
  post: "Text post",
};
const FORMAT_SWATCH: Record<SampleFormat, string> = {
  video: "bg-brand",
  carousel: "bg-purple-5",
  image: "bg-purple-3",
  post: "bg-purple-15",
};
const CHANNEL_SHORT: Record<AdditionalChannel, string> = {
  Instagram: "IG",
  Facebook: "FB",
  X: "X",
  TikTok: "TT",
};

function VoiceBadge({ founder }: { founder: boolean }) {
  return (
    <span
      className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-black ${
        founder ? "bg-purple-9 text-white" : "bg-purple-15 text-purple-9"
      }`}
    >
      {founder ? "F" : "C"}
    </span>
  );
}

function PieceCard({ piece, pkg }: { piece: SamplePiece; pkg: PackageId }) {
  const founder = piece.voice === "founder";
  const channels = sampleChannelsFor(piece, pkg);
  const account = founder ? "Founder LinkedIn" : "Company LinkedIn";
  return (
    <li className="relative rounded-lg border border-purple-15 bg-white py-2.5 pl-3.5 pr-2.5">
      <span aria-hidden="true" className={`absolute left-1 top-2 bottom-2 w-[3px] rounded-full ${FORMAT_SWATCH[piece.format]}`} />
      <p className="text-[13px] font-semibold leading-snug text-purple-9">{piece.title}</p>
      <p className="sr-only">
        {FORMAT_LABEL[piece.format]}, {founder ? "founder" : "company"} voice, published on{" "}
        {[account, ...channels].join(", ")}.
      </p>
      <div aria-hidden="true" className="mt-2 flex flex-wrap items-center gap-1">
        <VoiceBadge founder={founder} />
        <span className="rounded bg-pink-05 px-1.5 py-0.5 text-[10px] font-bold text-brand-dark">
          {founder ? "Founder LI" : "Company LI"}
        </span>
        {channels.map((c) => (
          <span key={c} className="rounded border border-purple-15 px-1.5 py-0.5 text-[10px] font-semibold text-purple-7">
            {CHANNEL_SHORT[c]}
          </span>
        ))}
        <span className="ml-auto text-[10px] text-purple-7">{FORMAT_LABEL[piece.format].toLowerCase()}</span>
      </div>
    </li>
  );
}

/** Accessible tabs: one package at a time, arrow keys move between tabs. */
export function SampleMonth() {
  const [active, setActive] = useState<PackageId>("growth");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const pkg = SOCIAL_PACKAGES.find((p) => p.id === active)!;
  const pieces = samplePiecesFor(active);
  const pubs = samplePublications(active);
  const total = Object.values(pubs).reduce((a, b) => a + b, 0);

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
    <div>
      <div
        role="tablist"
        aria-label="Sample month by package"
        className="inline-flex w-full sm:w-auto gap-1 rounded-xl bg-white border border-purple-15 p-1 mb-5"
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
              className={`flex-1 sm:flex-none min-h-[44px] rounded-[10px] px-5 text-sm font-semibold transition-colors ${
                selected ? "bg-brand-dark text-white" : "text-purple-7 hover:text-purple-9"
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
        className="relative overflow-hidden rounded-2xl bg-white border border-purple-15 shadow-[var(--shadow-base)] p-5 sm:p-8 focus-visible:outline-offset-4"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[5px] gradient-bar" />
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <p className="font-mono text-xs text-brand-dark mb-1">
              {SAMPLE_COMPANY.toLowerCase()} · october 2026 · {pkg.name.toLowerCase()}
            </p>
            <h3 className="text-2xl font-black tracking-tight text-purple-9">Your October batch</h3>
            <p className="text-sm text-purple-7 mt-1">
              {pkg.originalPieces} original pieces across {pkg.managedAccounts} accounts, planned around one monthly
              narrative.
            </p>
          </div>
          <ul aria-label="Batch status" className="flex flex-wrap gap-2 text-xs font-semibold">
            <li className="inline-flex items-center gap-1.5 rounded-full bg-purple-9 px-3 py-1.5 text-white">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              Reviewed by Lihi
            </li>
            <li className="rounded-full bg-pink-05 px-3 py-1.5 text-brand-dark">Awaiting your approval</li>
            <li className="rounded-full border border-purple-15 px-3 py-1.5 text-purple-7">1 revision round</li>
          </ul>
        </div>

        <div aria-hidden="true" className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-purple-15 pb-4 mb-5 text-xs text-purple-7">
          {(Object.keys(FORMAT_LABEL) as SampleFormat[]).map((f) => (
            <span key={f} className="inline-flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-sm ${FORMAT_SWATCH[f]}`} />
              {FORMAT_LABEL[f]}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5">
            <VoiceBadge founder />
            Founder voice
          </span>
          <span className="inline-flex items-center gap-1.5">
            <VoiceBadge founder={false} />
            Company voice
          </span>
        </div>

        <div className="space-y-6">
          {WEEKS.map((week) => {
            const weekPieces = pieces.filter((p) => p.week === week);
            return (
              <section key={week} aria-labelledby={`${baseId}-week-${week}`}>
                <div className="flex items-baseline gap-3 mb-2.5">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-dark shrink-0">Week {week}</span>
                  <h4 id={`${baseId}-week-${week}`} className="font-extrabold text-purple-9">
                    {SAMPLE_WEEK_THEMES[week]}
                  </h4>
                  <span className="ml-auto text-xs text-purple-7 shrink-0">{weekPieces.length} pieces</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                  {DAYS.map((day, d) => {
                    const dayPieces = weekPieces.filter((p) => p.day === d);
                    return (
                      <div
                        key={day}
                        className={`rounded-xl bg-purple-05 p-2 ${dayPieces.length ? "" : "hidden lg:block"}`}
                      >
                        <p className="px-1 pb-1.5 text-[11px] font-bold uppercase tracking-widest text-purple-7">{day}</p>
                        {dayPieces.length > 0 && (
                          <ul className="space-y-1.5">
                            {dayPieces.map((p) => (
                              <PieceCard key={p.title} piece={p} pkg={active} />
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-7 border-t border-purple-15 pt-5 flex flex-wrap items-end justify-between gap-5">
          <dl className="flex flex-wrap gap-x-6 gap-y-3">
            {SAMPLE_ACCOUNTS.map((a) => (
              <div key={a} className="flex flex-col-reverse">
                <dt className="text-xs text-purple-7">{a}</dt>
                <dd className={`text-xl font-black tabular-nums ${pubs[a] ? "text-purple-9" : "text-purple-6"}`}>{pubs[a]}</dd>
              </div>
            ))}
          </dl>
          <p className="text-purple-7">
            <span className="text-4xl font-black tracking-tight text-purple-9 tabular-nums">{total}</span>{" "}
            publications across {pkg.managedAccounts} accounts
          </p>
        </div>
        <p className="mt-4 text-sm text-purple-7 leading-relaxed">{SAMPLE_PACKAGE_NOTES[active]}</p>
      </div>
    </div>
  );
}
