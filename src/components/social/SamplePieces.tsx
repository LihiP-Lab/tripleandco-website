import type { ReactNode } from "react";

const SOCIAL_ACTIONS = ["Like", "Comment", "Repost", "Send"];

function Avatar({ initials, dark = false }: { initials: string; dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-black ${
        dark ? "bg-purple-9 text-white" : "bg-purple-15 text-purple-9"
      }`}
    >
      {initials}
    </span>
  );
}

function PostHeader({ initials, name, meta, dark }: { initials: string; name: string; meta: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 px-4 pt-4">
      <Avatar initials={initials} dark={dark} />
      <div className="leading-tight">
        <p className="text-sm font-bold text-purple-9">{name}</p>
        <p className="text-xs text-purple-7">{meta}</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div aria-hidden="true" className="mt-auto grid grid-cols-4 border-t border-purple-15 text-center text-xs font-semibold text-purple-7">
      {SOCIAL_ACTIONS.map((a) => (
        <span key={a} className="py-2.5">
          {a}
        </span>
      ))}
    </div>
  );
}

function Piece({ label, children, note }: { label: string; children: ReactNode; note?: string }) {
  return (
    <figure className="snap-start shrink-0 w-[290px] sm:w-[310px] flex flex-col">
      <figcaption className="font-mono text-xs text-brand-dark mb-2.5">{label}</figcaption>
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-purple-15 bg-white shadow-[var(--shadow-base)]">
        {children}
      </div>
      {note && <p className="mt-2.5 text-xs text-purple-7 leading-relaxed">{note}</p>}
    </figure>
  );
}

/** Five illustrative, finished pieces for the fictional SignalWorks sample month. */
export function SamplePieces() {
  return (
    <div
      role="region"
      aria-label="Five sample pieces, scroll sideways for more"
      tabIndex={0}
      className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 focus-visible:outline-offset-4"
    >
      <Piece label="piece 01 · founder linkedin · text post">
        <PostHeader initials="ML" name="Maya Lev" meta="CEO at SignalWorks · 1d" dark />
        <div className="px-4 py-3 text-[13px] leading-relaxed text-purple-8 space-y-2.5">
          <p className="font-bold text-purple-9">Most ops teams measure the wrong thing.</p>
          <p>Not because they lack data. Because the metric that is easiest to pull is rarely the one that moves the business.</p>
          <p>
            Time to detect gets reported every week. Time to a decision almost never does. The gap between the two is
            where incidents become outages.
          </p>
          <p>
            If you only track one number this quarter, track the second one. It is harder to measure and it is the one
            your CFO will ask about.
          </p>
          <p className="text-brand-dark font-semibold">#operations #b2bsaas #aiops</p>
        </div>
        <Actions />
      </Piece>

      <Piece label="piece 02 · company linkedin · carousel">
        <PostHeader initials="SW" name="SignalWorks" meta="2,140 followers · 2d" />
        <p className="px-4 py-3 text-[13px] leading-relaxed text-purple-8">
          Your dashboards look fine. Here are five ways your operations data is quietly lying to you.
        </p>
        <div className="mx-4 mb-4 flex aspect-square flex-col rounded-xl bg-purple-9 p-5">
          <div className="flex items-center justify-between text-xs text-purple-2">
            <span className="font-semibold">SignalWorks</span>
            <span className="font-mono">1 / 6</span>
          </div>
          <p className="mt-auto text-2xl font-black leading-tight tracking-tight text-white">
            5 signals your operations data is lying to you
          </p>
          <p className="mt-2 text-sm text-purple-2">And the one check that catches each of them</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-pink-3">
            Swipe <span aria-hidden="true">&#8594;</span>
          </p>
        </div>
        <Actions />
      </Piece>

      <Piece label="piece 05 · instagram · adapted image">
        <div className="flex items-center gap-2.5 px-4 py-3">
          <Avatar initials="SW" />
          <p className="text-sm font-bold text-purple-9">signalworks.ai</p>
        </div>
        <div className="flex aspect-square flex-col justify-center bg-pink-05 px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">One number</p>
          <p className="mt-2 text-5xl font-black leading-[0.95] tracking-tight gradient-text">Every month.</p>
          <p className="mt-4 text-sm text-purple-8">That is how often most ops teams rebuild the same report by hand.</p>
        </div>
        <p className="px-4 py-3 text-[13px] leading-relaxed text-purple-8">
          <span className="font-bold text-purple-9">signalworks.ai</span> Rebuilding the same report every month is not
          reporting. It is a backlog with a chart on top. Link in bio for the checklist.
        </p>
      </Piece>

      <Piece
        label="piece 12 · short video · founder-led · 0:45"
        note="Recorded by the founder on a phone. Scripted, edited, captioned, and published by Triple & Co. One cut for LinkedIn, one 9:16 cut for Instagram and TikTok."
      >
        <div className="flex flex-1 flex-col bg-purple-9 p-5 min-h-[420px]">
          <span className="self-start rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-purple-2">
            Founder · SignalWorks
          </span>
          <div aria-hidden="true" className="my-auto mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30">
            <span className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
          </div>
          <p className="text-xl font-black leading-tight text-white">
            The evaluation mistake I see on <span className="text-pink-3">almost every call</span>
          </p>
          <div aria-hidden="true" className="mt-4 h-1 rounded-full bg-white/15">
            <div className="h-full w-[27%] rounded-full bg-brand" />
          </div>
          <div aria-hidden="true" className="mt-1.5 flex justify-between font-mono text-[11px] text-purple-2">
            <span>0:12</span>
            <span>0:45</span>
          </div>
        </div>
      </Piece>

      <Piece label="piece 16 · company linkedin · customer story">
        <PostHeader initials="SW" name="SignalWorks" meta="2,140 followers · 5d" />
        <p className="px-4 py-3 text-[13px] leading-relaxed text-purple-8">
          A 40-person ops team was triaging incidents from three tools and a spreadsheet. Here is what changed in 60
          days.
        </p>
        <div className="mx-4 mb-4 rounded-xl bg-purple-05 p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Customer story</p>
          <p className="mt-2 text-lg font-black leading-snug text-purple-9">
            From three tools and a spreadsheet to one triage view
          </p>
          <ul className="mt-3 space-y-1.5 text-[13px] text-purple-8">
            <li>Before: alerts checked in three places</li>
            <li>After: one queue, one owner per incident</li>
          </ul>
        </div>
        <Actions />
      </Piece>
    </div>
  );
}
