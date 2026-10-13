"use client";

import { CalendarClock, Check } from "lucide-react";
import { SAMPLE_COMPANY, socialAgent, type SocialAgentId } from "@/lib/social-packages";
import { Avatar, LIHI_PORTRAIT, MotionToggle, useStudioTicker } from "./studio";

type Kind = "post" | "video" | "carousel" | "image";

interface Job {
  agent: SocialAgentId;
  kind: Kind;
  verb: string;
  title: string;
  account: string;
  slot: string;
}

/* One lane per agent; each lane cycles through its own jobs. */
const LANES: Job[][] = [
  [
    { agent: "camille", kind: "post", verb: "Drafting", title: "The question I ask every ops leader first", account: "Founder LinkedIn", slot: "Tue 09:00" },
    { agent: "camille", kind: "post", verb: "Drafting", title: "The metric that finally convinced our CFO", account: "Founder LinkedIn", slot: "Thu 08:30" },
  ],
  [
    { agent: "lumen", kind: "video", verb: "Rendering", title: "Walkthrough: raw signal to decision", account: "Company LinkedIn", slot: "Wed 12:00" },
    { agent: "lumen", kind: "video", verb: "Editing", title: "The evaluation mistake I see on every call", account: "Founder LinkedIn", slot: "Fri 10:00" },
  ],
  [
    { agent: "vega", kind: "carousel", verb: "Designing", title: "5 signals your operations data is lying", account: "Company LinkedIn", slot: "Tue 14:00" },
    { agent: "vega", kind: "image", verb: "Designing", title: "Integration map for your stack", account: "Company LinkedIn", slot: "Mon 11:00" },
  ],
  [
    { agent: "sage", kind: "image", verb: "Adapting", title: "Carousel adapted for Instagram", account: "Instagram", slot: "Wed 17:00" },
    { agent: "sage", kind: "carousel", verb: "Adapting", title: "Workflow in 6 steps, for Facebook", account: "Facebook", slot: "Thu 16:00" },
  ],
];

const CYCLE = 12;
const PRODUCE = 7;
const OFFSETS = [0, 3, 6, 9];
const MONTH_TOTAL = 20;

type Phase = "producing" | "review" | "approved" | "scheduled";

function laneState(lane: number, tick: number) {
  const local = tick + OFFSETS[lane];
  const round = Math.floor(local / CYCLE);
  const p = local % CYCLE;
  const phase: Phase = p < PRODUCE ? "producing" : p < 9 ? "review" : p < 11 ? "approved" : "scheduled";
  const progress = p < PRODUCE ? Math.round(((p + 1) / PRODUCE) * 100) : 100;
  const jobs = LANES[lane];
  return { job: jobs[round % jobs.length], round, phase, progress };
}

function approvedSoFar(tick: number) {
  let done = 0;
  OFFSETS.forEach((off) => {
    const local = tick + off;
    if (local >= 9) done += Math.floor((local - 9) / CYCLE) + 1;
  });
  return 6 + (done % (MONTH_TOTAL - 6));
}

function Visual({ kind, progress, running }: { kind: Kind; progress: number; running: boolean }) {
  if (kind === "video") {
    const frames = 5;
    const rendered = Math.ceil((progress / 100) * frames);
    return (
      <span className="relative flex h-9 w-[72px] gap-0.5 overflow-hidden rounded-md">
        {Array.from({ length: frames }, (_, i) => (
          <span
            key={i}
            className={`h-full flex-1 transition-colors duration-500 ${i < rendered ? "bg-purple-9" : "bg-purple-15"}`}
          />
        ))}
        <span
          className="absolute inset-y-0 w-0.5 bg-brand transition-[left] duration-1000 ease-linear"
          style={{ left: `${progress}%` }}
        />
        {progress >= 100 && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white" />
          </span>
        )}
        {running && progress < 100 && <span className="shimmer absolute inset-0" />}
      </span>
    );
  }
  if (kind === "post") {
    const widths = [100, 86, 58];
    return (
      <span className="flex h-9 w-[72px] flex-col justify-center gap-1.5 rounded-md border border-purple-15 bg-white px-2">
        {widths.map((w, i) => {
          const fill = Math.min(1, Math.max(0, (progress - i * 33) / 33));
          return (
            <span key={i} className="h-1 rounded-full bg-purple-15">
              <span
                className="block h-full rounded-full bg-purple-6 transition-[width] duration-700 ease-out"
                style={{ width: `${fill * w}%` }}
              />
            </span>
          );
        })}
      </span>
    );
  }
  const tiles = 6;
  const built = Math.ceil((progress / 100) * tiles);
  return (
    <span className={`grid h-9 w-[72px] gap-0.5 ${kind === "carousel" ? "grid-cols-3" : "grid-cols-3 grid-rows-2"}`}>
      {Array.from({ length: tiles }, (_, i) => (
        <span
          key={i}
          className={`rounded-[3px] transition-all duration-500 ${
            i < built ? (i % 3 === 1 ? "bg-pink-1 scale-100" : "bg-brand scale-100") : "bg-purple-15 scale-90"
          }`}
        />
      ))}
    </span>
  );
}

function Status({ phase, verb, progress, slot }: { phase: Phase; verb: string; progress: number; slot: string }) {
  if (phase === "producing") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-15 bg-purple-05 px-2.5 py-1 text-[11px] font-semibold text-purple-8 tabular-nums">
        <span className="live-dot h-1.5 w-1.5 rounded-full bg-brand" />
        {verb} {progress}%
      </span>
    );
  }
  if (phase === "review") {
    return (
      <span className="chip-pop inline-flex items-center gap-1.5 rounded-full bg-pink-05 py-0.5 pl-0.5 pr-2.5 text-[11px] font-bold text-brand-dark">
        <Avatar src={LIHI_PORTRAIT} kind="person" size={20} />
        Lihi reviewing
      </span>
    );
  }
  if (phase === "approved") {
    return (
      <span className="chip-pop inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[11px] font-bold text-green-800">
        <Check className="h-3.5 w-3.5" aria-hidden="true" />
        Approved by Lihi
      </span>
    );
  }
  return (
    <span className="chip-pop inline-flex items-center gap-1 rounded-full border border-purple-15 bg-white px-2.5 py-1 text-[11px] font-semibold text-purple-7">
      <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
      Scheduled {slot}
    </span>
  );
}

export function StudioBoard() {
  const { ref, tick, paused, setPaused, reduced, running } = useStudioTicker(1100);
  const lanes = LANES.map((_, i) => laneState(i, tick));
  const approved = approvedSoFar(tick);
  const inProduction = lanes.filter((l) => l.phase === "producing").length;
  const withLihi = lanes.filter((l) => l.phase === "review").length;

  return (
    <figure ref={ref} className="relative rounded-2xl border border-purple-15 bg-white shadow-[var(--shadow-base)]">
      <figcaption className="sr-only">
        Illustration of the production studio for {SAMPLE_COMPANY}, a fictional company: agents draft, design, and
        render each piece, Lihi reviews it, and approved pieces are scheduled.
      </figcaption>

      <div className="flex items-center gap-3 border-b border-purple-15 px-4 py-3">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" />
          <span className="h-2.5 w-2.5 rounded-full bg-purple-15" />
          <span className="h-2.5 w-2.5 rounded-full bg-purple-15" />
        </span>
        <span aria-hidden="true" className="mono-label text-purple-6 truncate">
          Studio · {SAMPLE_COMPANY}
        </span>
        <span className="ml-auto flex items-center gap-2">
          {!reduced && (
            <span aria-hidden="true" className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-dark">
              <span className={`h-1.5 w-1.5 rounded-full bg-brand ${running ? "live-dot" : ""}`} />
              {running ? "Live" : "Paused"}
            </span>
          )}
          {!reduced && <MotionToggle paused={paused} onToggle={() => setPaused((p) => !p)} label="the production studio animation" />}
        </span>
      </div>

      <div aria-hidden="true">
        <dl className="grid grid-cols-3 border-b border-purple-15 text-center">
          {[
            ["In production", inProduction],
            ["With Lihi", withLihi],
            ["Approved", `${approved}/${MONTH_TOTAL}`],
          ].map(([label, value]) => (
            <div key={label} className="px-2 py-3 border-l border-purple-15 first:border-l-0">
              <dt className="text-[10px] font-bold uppercase tracking-widest text-purple-6">{label}</dt>
              <dd className="mt-0.5 text-lg font-black text-purple-9 tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>

        <ol className="divide-y divide-purple-15">
          {lanes.map(({ job, round, phase, progress }, i) => {
            const agent = socialAgent(job.agent);
            return (
              <li key={`${i}-${round}`} className="studio-enter px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <Avatar src={agent.image} size={36} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold text-purple-6">
                      <span className="font-bold text-purple-9">{agent.name}</span> · {job.account}
                    </p>
                    <p className="truncate text-[13px] font-semibold text-purple-9">{job.title}</p>
                  </div>
                  <Visual kind={job.kind} progress={progress} running={running} />
                </div>
                <div className="mt-2.5 flex items-center gap-3">
                  <span className="h-1 flex-1 overflow-hidden rounded-full bg-purple-15">
                    <span
                      className="block h-full rounded-full gradient-bar transition-[width] duration-1000 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </span>
                  <span key={phase} className="shrink-0">
                    <Status phase={phase} verb={job.verb} progress={progress} slot={job.slot} />
                  </span>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="flex items-center gap-3 rounded-b-2xl border-t border-purple-15 bg-purple-05 px-4 py-3.5">
          <Avatar src={LIHI_PORTRAIT} kind="person" size={40} />
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold text-purple-9">Lihi Pinto</p>
            <p className="text-[11px] text-purple-7">Reviews every piece before it reaches you</p>
          </div>
          <div className="w-24">
            <span className="block h-1.5 overflow-hidden rounded-full bg-purple-15">
              <span
                className="block h-full rounded-full bg-brand transition-[width] duration-700"
                style={{ width: `${(approved / MONTH_TOTAL) * 100}%` }}
              />
            </span>
            <p className="mt-1 text-right text-[10px] font-semibold text-purple-6 tabular-nums">Month batch</p>
          </div>
        </div>
      </div>
    </figure>
  );
}
