"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { Check, FileText, GalleryHorizontal, Image as ImageIcon, RotateCcw, Video, X } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Avatar, LIHI_PORTRAIT, MotionToggle, usePrefersReducedMotion } from "@/components/social/studio";
import {
  SAMPLE_ACCOUNTS,
  SAMPLE_COMPANY,
  SAMPLE_PACKAGE_NOTES,
  SAMPLE_WEEK_THEMES,
  SOCIAL_AGENTS,
  SOCIAL_PACKAGES,
  sampleChannelsFor,
  samplePiecesFor,
  samplePublications,
  socialAgent,
  type AdditionalChannel,
  type PackageId,
  type SampleFormat,
  type SamplePiece,
  type SampleWeekNumber,
  type SocialAgentId,
} from "@/lib/social-packages";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const DAY_NAMES = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const WEEKS: SampleWeekNumber[] = [1, 2, 3, 4];
const TIMES = ["08:30", "12:00", "09:15", "17:00", "13:30"];

const FORMAT_LABEL: Record<SampleFormat, string> = {
  video: "Short video",
  carousel: "Carousel",
  image: "Image",
  post: "Text post",
};
const FORMAT_ICON: Record<SampleFormat, typeof Video> = {
  video: Video,
  carousel: GalleryHorizontal,
  image: ImageIcon,
  post: FileText,
};
const CHANNEL_SHORT: Record<AdditionalChannel, string> = {
  Instagram: "IG",
  Facebook: "FB",
  X: "X",
  TikTok: "TT",
};
/** Which agent makes each format. Matches the agent jobs in social-packages. */
const MAKER: Record<SampleFormat, SocialAgentId> = {
  post: "camille",
  carousel: "vega",
  image: "vega",
  video: "lumen",
};

// --------------------------------------------------------------- timeline
// One step is STEP_MS. The month fills piece by piece, a preview opens for
// Lihi's review, then her checks sweep across every piece.

const STEP_MS = 110;
const DRAFT_STEPS = 6;

function timeline(n: number) {
  const appear = (i: number) => 2 + i * 2;
  const fillEnd = appear(n - 1) + DRAFT_STEPS;
  const reviewOpen = fillEnd + 2;
  const reviewDone = reviewOpen + 10;
  const sweep = (i: number) => reviewDone + 6 + i;
  const end = sweep(n - 1) + 4;
  return { appear, fillEnd, reviewOpen, reviewDone, sweep, end };
}

// ------------------------------------------------------------ next month
// The sample always shows the next calendar month, so its dates never age.

function subscribeNever() {
  return () => {};
}
function nextMonthKey() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}
function monthFromKey(key: string | null) {
  if (!key) return null;
  const [y, m] = key.split("-").map(Number);
  const first = new Date(y, m, 1);
  const start = new Date(first);
  start.setDate(1 + ((8 - first.getDay()) % 7));
  return {
    name: first.toLocaleString("en-US", { month: "long" }),
    year: first.getFullYear(),
    dateOf: (week: SampleWeekNumber, day: number) => {
      const d = new Date(start);
      d.setDate(start.getDate() + (week - 1) * 7 + day);
      return d.getDate();
    },
  };
}

// ---------------------------------------------------------------- pieces

function accountOf(piece: SamplePiece) {
  return piece.voice === "founder" ? "Founder LinkedIn" : "Company LinkedIn";
}

function ReviewedCheck({ size = "sm" }: { size?: "sm" | "lg" }) {
  return (
    <span
      className={`chip-pop inline-flex shrink-0 items-center justify-center rounded-full border border-green-200 bg-green-50 text-green-800 ${
        size === "sm" ? "h-[18px] w-[18px]" : "h-6 w-6"
      }`}
    >
      <Check className={size === "sm" ? "h-3 w-3" : "h-4 w-4"} strokeWidth={3} aria-hidden="true" />
    </span>
  );
}

type PieceState = "hidden" | "drafting" | "drafted" | "reviewed";

function PieceChip({
  piece,
  index,
  pkg,
  state,
  date,
  onOpen,
}: {
  piece: SamplePiece;
  index: number;
  pkg: PackageId;
  state: PieceState;
  date: number | null;
  onOpen: (piece: SamplePiece, el: HTMLButtonElement) => void;
}) {
  const founder = piece.voice === "founder";
  const channels = sampleChannelsFor(piece, pkg);
  const maker = socialAgent(MAKER[piece.format]);
  const time = TIMES[index % TIMES.length];
  return (
    <li
      className={`transition-[opacity,transform] duration-300 ease-out ${
        state === "hidden" ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"
      }`}
    >
      <button
        type="button"
        onClick={(e) => onOpen(piece, e.currentTarget)}
        className={`group relative block w-full rounded-lg border py-2 pl-3 pr-2 text-left transition-colors focus-visible:outline-offset-2 ${
          founder ? "border-purple-15 bg-pink-05 hover:border-brand" : "border-purple-15 bg-purple-05 hover:border-purple-5"
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute left-1 top-2 bottom-2 w-[3px] rounded-full ${founder ? "bg-brand" : "bg-purple-5"}`}
        />
        <span aria-hidden="true" className="flex items-center gap-1.5 text-[10px] font-semibold text-purple-7">
          <span className="font-mono">{time}</span>
          <span className={`font-bold uppercase tracking-wider ${founder ? "text-brand-dark" : "text-purple-8"}`}>
            {founder ? "Founder" : "Company"}
          </span>
          <span className="ml-auto flex h-[18px] items-center">
            {state === "drafting" && <Avatar src={maker.image} size={18} />}
            {state === "reviewed" && <ReviewedCheck />}
          </span>
        </span>
        <span className="mt-1 block text-[12.5px] font-semibold leading-snug text-purple-9 line-clamp-2">
          {piece.title}
        </span>
        <span aria-hidden="true" className="mt-1.5 flex flex-wrap items-center gap-1 text-[10px] text-purple-7">
          <span>{FORMAT_LABEL[piece.format].toLowerCase()}</span>
          {channels.map((c) => (
            <span key={c} className="rounded border border-purple-15 bg-white px-1 font-semibold">
              {CHANNEL_SHORT[c]}
            </span>
          ))}
        </span>
        <span className="sr-only">
          {". "}
          {FORMAT_LABEL[piece.format]}, {founder ? "founder" : "company"} voice, {DAY_NAMES[piece.day]}
          {date ? ` ${date}` : ""} at {time}, planned for {[accountOf(piece), ...channels].join(", ")}. Open preview.
        </span>
      </button>
    </li>
  );
}

function PiecePreview({
  piece,
  pkg,
  reviewed,
  dialog,
  titleId,
  closeRef,
  onClose,
  className,
}: {
  piece: SamplePiece;
  pkg: PackageId;
  reviewed: boolean;
  dialog: boolean;
  titleId?: string;
  closeRef?: React.Ref<HTMLButtonElement>;
  onClose?: () => void;
  className: string;
}) {
  const founder = piece.voice === "founder";
  const channels = sampleChannelsFor(piece, pkg);
  const Icon = FORMAT_ICON[piece.format];
  const maker = socialAgent(MAKER[piece.format]);
  return (
    <div
      role={dialog ? "dialog" : undefined}
      aria-modal={dialog ? false : undefined}
      aria-labelledby={dialog ? titleId : undefined}
      aria-hidden={dialog ? undefined : true}
      onKeyDown={(e) => {
        if (e.key === "Escape" && onClose) onClose();
      }}
      className={`studio-enter rounded-2xl border border-purple-15 bg-white p-4 shadow-[0_24px_60px_-20px_rgba(42,20,58,0.35)] ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-black ${
            founder ? "bg-pink-05 text-brand-dark" : "bg-purple-05 text-purple-9"
          }`}
        >
          {founder ? "F" : "SW"}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-bold text-purple-9 leading-tight">
            {founder ? `${SAMPLE_COMPANY} founder` : SAMPLE_COMPANY}
          </p>
          <p className="text-[11px] text-purple-7">
            {accountOf(piece)}
            {channels.length > 0 && ` + ${channels.join(", ")}`}
          </p>
        </div>
        {dialog && (
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="ml-auto inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-purple-7 hover:bg-purple-05 hover:text-purple-9"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Close preview</span>
          </button>
        )}
      </div>
      <p id={titleId} className="mt-3 text-[15px] font-bold leading-snug text-purple-9">
        {piece.title}
      </p>
      <div
        aria-hidden="true"
        className={`mt-3 flex aspect-[16/9] items-center justify-center rounded-xl border border-purple-15 ${
          founder ? "bg-pink-05" : "bg-purple-05"
        }`}
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-purple-8">
          <Icon className="h-4 w-4 text-brand-dark" />
          {FORMAT_LABEL[piece.format]}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px] text-purple-7">
        <Avatar src={maker.image} size={22} />
        <span>
          Made by {maker.name}, {maker.job.toLowerCase()}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2.5 border-t border-purple-15 pt-3">
        <Avatar src={LIHI_PORTRAIT} kind="person" size={28} />
        {reviewed ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-green-800">
            <ReviewedCheck /> Reviewed by Lihi
          </span>
        ) : (
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-purple-8">
            <span className="live-dot h-2 w-2 rounded-full bg-brand" />
            Lihi reviewing
          </span>
        )}
        {reviewed && <span className="ml-auto text-[11px] font-semibold text-brand-dark">Next: your approval</span>}
      </div>
    </div>
  );
}

// ------------------------------------------------------------- component

/** Accessible tabs: one package at a time, arrow keys move between tabs. */
export function SampleMonth() {
  const [active, setActive] = useState<PackageId>("growth");
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userWeek, setUserWeek] = useState<SampleWeekNumber | null>(null);
  const [open, setOpen] = useState<SamplePiece | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const baseId = useId();
  const reduced = usePrefersReducedMotion();
  const { ref: viewRef, inView } = useInView({ threshold: 0.25, once: true });
  const month = monthFromKey(useSyncExternalStore(subscribeNever, nextMonthKey, () => null));

  const pkg = SOCIAL_PACKAGES.find((p) => p.id === active)!;
  const pieces = [...samplePiecesFor(active)].sort((a, b) => a.week - b.week || a.day - b.day);
  const pubs = samplePublications(active);
  const total = Object.values(pubs).reduce((a, b) => a + b, 0);

  const t = timeline(pieces.length);
  const done = reduced || step >= t.end;
  const playing = inView && !paused && !done;
  const s = done ? t.end : step;
  const featured = pieces.findIndex((p) => p.voice === "founder" && p.format === "post");
  const reviewedCount = done ? pieces.length : pieces.filter((_, i) => s >= t.sweep(i)).length;
  const drafted = pieces.filter((_, i) => s >= t.appear(i)).length;

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setStep((v) => v + 1);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [playing]);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  function stateOf(i: number): PieceState {
    if (done || s >= t.sweep(i)) return "reviewed";
    if (s < t.appear(i)) return "hidden";
    if (s < t.appear(i) + DRAFT_STEPS) return "drafting";
    return "drafted";
  }

  function choose(id: PackageId) {
    setActive(id);
    setStep(0);
    setPaused(false);
    setOpen(null);
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const i = SOCIAL_PACKAGES.findIndex((p) => p.id === active);
    let next = i;
    if (e.key === "ArrowRight") next = (i + 1) % SOCIAL_PACKAGES.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + SOCIAL_PACKAGES.length) % SOCIAL_PACKAGES.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = SOCIAL_PACKAGES.length - 1;
    else return;
    e.preventDefault();
    choose(SOCIAL_PACKAGES[next].id);
    tabRefs.current[next]?.focus();
  }

  function openPiece(piece: SamplePiece, el: HTMLButtonElement) {
    openerRef.current = el;
    setStep(t.end);
    setOpen(piece);
  }

  function closePiece() {
    setOpen(null);
    openerRef.current?.focus();
  }

  const shownWeek: SampleWeekNumber = userWeek ?? 1;

  const autoPreview = !done && featured >= 0 && s >= t.reviewOpen && s < t.sweep(0) + 4;
  const lit = new Set<SocialAgentId>();
  if (s >= 1 || done) ["nova", "rex"].forEach((id) => lit.add(id as SocialAgentId));
  pieces.forEach((p, i) => {
    if (done || s >= t.appear(i)) lit.add(MAKER[p.format]);
  });
  if (done || s >= t.fillEnd) lit.add("sage");
  if (done || s >= t.sweep(0)) lit.add("zara");
  if (done) lit.add("atlas");

  const monthLabel = month ? `${month.name} ${month.year}` : "next month";

  function cell(week: SampleWeekNumber, day: number, mobile: boolean) {
    const dayPieces = pieces.map((p, i) => ({ p, i })).filter(({ p }) => p.week === week && p.day === day);
    if (mobile && dayPieces.length === 0) return null;
    return (
      <div
        key={`${week}-${day}`}
        className={`min-w-0 rounded-xl border border-purple-15 bg-white p-1.5 ${mobile ? "" : "min-h-[112px]"}`}
      >
        <p className="flex items-baseline gap-1.5 px-1 pb-1.5 text-[11px] font-bold text-purple-7">
          <span className={mobile ? "uppercase tracking-widest" : "sr-only"}>{mobile ? DAY_NAMES[day] : DAYS[day]}</span>
          {month && <span className="font-mono text-purple-8">{month.dateOf(week, day)}</span>}
        </p>
        {dayPieces.length > 0 && (
          <ul className="space-y-1.5">
            {dayPieces.map(({ p, i }) => (
              <PieceChip
                key={p.title}
                piece={p}
                index={i}
                pkg={active}
                state={stateOf(i)}
                date={month ? month.dateOf(week, day) : null}
                onOpen={openPiece}
              />
            ))}
          </ul>
        )}
      </div>
    );
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
              onClick={() => choose(p.id)}
              className={`flex-1 sm:flex-none min-h-[44px] whitespace-nowrap rounded-[10px] px-2.5 sm:px-5 text-sm font-semibold transition-colors ${
                selected ? "bg-brand-dark text-white" : "text-purple-7 hover:text-purple-9"
              }`}
            >
              {p.name.replace("Social ", "")}
              <span className="ml-1 sm:ml-1.5 font-mono text-xs">{p.originalPieces}</span>
            </button>
          );
        })}
      </div>

      <div
        ref={viewRef}
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        tabIndex={0}
        className="relative overflow-hidden rounded-2xl bg-white border border-purple-15 shadow-[var(--shadow-base)] p-4 sm:p-8 focus-visible:outline-offset-4"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[5px] gradient-bar" />
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <p className="font-mono text-xs text-brand-dark mb-1">
              {SAMPLE_COMPANY.toLowerCase()} · {monthLabel.toLowerCase()} · {pkg.name.toLowerCase()}
            </p>
            <h3 className="text-2xl font-black tracking-tight text-purple-9">
              Your {month ? month.name : "next"} batch
            </h3>
            <p className="text-sm text-purple-7 mt-1">
              {pkg.originalPieces} original pieces across {pkg.managedAccounts} accounts, planned around one monthly
              narrative.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 sm:items-end">
            {done ? (
              <ul aria-label="Batch status" className="flex flex-wrap gap-2 text-xs font-semibold">
                <li className="inline-flex items-center gap-1.5 rounded-full bg-purple-9 px-3 py-1.5 text-white">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  Reviewed by Lihi
                </li>
                <li className="rounded-full bg-pink-05 px-3 py-1.5 text-brand-dark">Awaiting your approval</li>
                <li className="rounded-full border border-purple-15 px-3 py-1.5 text-purple-7">1 revision round</li>
              </ul>
            ) : (
              <p aria-hidden="true" className="inline-flex items-center gap-2 rounded-full border border-purple-15 bg-white px-3 py-1.5 text-xs font-semibold text-purple-8">
                <span className={`${paused ? "" : "live-dot "}h-2 w-2 rounded-full bg-brand`} />
                {s < t.fillEnd ? "Agents drafting" : "Lihi reviewing"}
                <span className="font-mono tabular-nums text-purple-7">
                  {s < t.fillEnd ? drafted : reviewedCount} / {pieces.length}
                </span>
              </p>
            )}
            {!reduced &&
              (done ? (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(null);
                    setPaused(false);
                    setStep(0);
                  }}
                  className="inline-flex h-8 items-center gap-1.5 rounded-full border border-purple-15 bg-white px-3 text-xs font-semibold text-purple-7 transition-colors hover:text-purple-9"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  Replay the month
                </button>
              ) : (
                <MotionToggle paused={paused} onToggle={() => setPaused((p) => !p)} label="the sample month" />
              ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-purple-15 pb-4 mb-4">
          <div aria-hidden="true" className="flex items-center">
            <Avatar src={LIHI_PORTRAIT} kind="person" size={30} />
            {SOCIAL_AGENTS.map((a) => (
              <Avatar
                key={a.id}
                src={a.image}
                size={26}
                className={`-ml-1.5 transition-opacity duration-500 ${lit.has(a.id) ? "opacity-100" : "opacity-30"}`}
              />
            ))}
          </div>
          <p className="text-xs text-purple-7">
            <span className="font-semibold text-purple-9">Lihi + 8 agents</span> made this month.
          </p>
          <div aria-hidden="true" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-purple-7 lg:ml-auto">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-brand" />
              Founder voice
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-purple-5" />
              Company voice
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ReviewedCheck />
              Reviewed by Lihi
            </span>
          </div>
        </div>

        {/* Desktop: the whole month */}
        <div className="relative hidden lg:block">
          <div className="grid grid-cols-[112px_repeat(5,minmax(0,1fr))] gap-2">
            <span />
            {DAYS.map((d) => (
              <p key={d} className="px-2 text-[11px] font-bold uppercase tracking-widest text-purple-7">
                {d}
              </p>
            ))}
            {WEEKS.map((week) => (
              <div key={week} className="contents">
                <div className="pt-2 pr-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-dark">Week {week}</p>
                  <p className="mt-1 text-xs font-semibold leading-snug text-purple-8">{SAMPLE_WEEK_THEMES[week]}</p>
                </div>
                {DAYS.map((_, d) => cell(week, d, false))}
              </div>
            ))}
          </div>
          {autoPreview && (
            <PiecePreview
              piece={pieces[featured]}
              pkg={active}
              reviewed={s >= t.reviewDone}
              dialog={false}
              className="pointer-events-none absolute right-4 top-10 z-10 w-[340px]"
            />
          )}
        </div>

        {/* Phones and tablets: one week at a time */}
        <div className="lg:hidden">
          <div role="group" aria-label="Choose a week" className="grid grid-cols-4 gap-1.5 mb-3">
            {WEEKS.map((week) => (
              <button
                key={week}
                type="button"
                aria-pressed={shownWeek === week}
                onClick={() => setUserWeek(week)}
                className={`min-h-[44px] rounded-[10px] border text-sm font-semibold transition-colors ${
                  shownWeek === week
                    ? "border-purple-9 bg-purple-9 text-white"
                    : "border-purple-15 bg-white text-purple-7 hover:text-purple-9"
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
          <p className="mb-3 text-sm font-extrabold text-purple-9">
            {SAMPLE_WEEK_THEMES[shownWeek]}
            <span className="ml-2 text-xs font-normal text-purple-7">
              {pieces.filter((p) => p.week === shownWeek).length} pieces
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{DAYS.map((_, d) => cell(shownWeek, d, true))}</div>
        </div>

        {open && (
          <>
            <div aria-hidden="true" className="fixed inset-0 z-[55] bg-purple-9/20 lg:hidden" onClick={closePiece} />
            <PiecePreview
              piece={open}
              pkg={active}
              reviewed
              dialog
              titleId={`${baseId}-preview-title`}
              closeRef={closeRef}
              onClose={closePiece}
              className="fixed inset-x-4 bottom-24 z-[60] mx-auto max-w-[380px] lg:absolute lg:inset-x-auto lg:bottom-auto lg:right-8 lg:top-36 lg:w-[340px]"
            />
          </>
        )}

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
