"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The hero loop: one continuous run of the real instrument, recorded from the
 * working page. Opens the assessment, answers, crosses a room handoff, lands
 * on the result. The middle stretch is time-compressed so the whole run reads
 * in about sixteen seconds.
 *
 * Two takes, because one does not survive both shapes: a landscape recording
 * squeezed into a phone column is unreadable, so small screens get a recording
 * of the phone surface itself. Only the visible one ever loads: a display:none
 * element never intersects, so its observer never fires and `preload="none"`
 * keeps the file on the server.
 */

const BEATS = [
  {
    n: "01",
    title: "The score banks as you answer",
    body: "Points land the moment you pick, and the seven-spoke shape draws itself beside the questions.",
  },
  {
    n: "02",
    title: "Each room hands off to the next host",
    body: "Strategy banks its points, then the next agent arrives. Seven rooms, and you always know which one you are in.",
  },
  {
    n: "03",
    title: "The result arrives in order",
    body: "The dial fills, the tier lands, the gaps line up, and the three things to fix first come in last.",
  },
];

const LABEL =
  "A recording of the AI Revenue Readiness Score assessment running from the first question to the result.";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Take({
  id,
  width,
  height,
  reduced,
  manual,
  onPlay,
}: {
  id: string;
  width: number;
  height: number;
  reduced: boolean;
  manual: boolean;
  onPlay: () => void;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const play = () => {
    onPlay();
    ref.current?.play().catch(() => {});
  };

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-purple-15 bg-dark shadow-[var(--shadow-base)]">
      <video
        ref={ref}
        className="block h-auto w-full"
        poster={`/video/${id}.jpg`}
        width={width}
        height={height}
        muted
        playsInline
        loop
        preload="none"
        controls={reduced && manual}
        aria-label={LABEL}
      >
        <source src={`/video/${id}.webm`} type="video/webm" />
        <source src={`/video/${id}.mp4`} type="video/mp4" />
      </video>
      {reduced && !manual && (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 flex items-center justify-center bg-brand-dark/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/50"
        >
          <span className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-purple-9">
            Play the run &rarr;
          </span>
        </button>
      )}
    </div>
  );
}

export function ScoreHeroLoop() {
  const [reduced, setReduced] = useState(false);
  const [manual, setManual] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  const onPlay = () => setManual(true);

  return (
    <div className="mt-10 lg:mt-12">
      {/* phones: a recording of the phone surface, near life size */}
      <div className="mx-auto max-w-[300px] md:hidden">
        <Take
          id="score-hero-phone"
          width={624}
          height={1350}
          reduced={reduced}
          manual={manual}
          onPlay={onPlay}
        />
      </div>

      {/* tablet and up: the desktop surface, wide enough to read */}
      <div className="mx-auto hidden max-w-[1000px] md:block">
        <Take
          id="score-hero"
          width={1152}
          height={648}
          reduced={reduced}
          manual={manual}
          onPlay={onPlay}
        />
      </div>

      <p className="mx-auto mt-4 max-w-[620px] text-center text-sm text-purple-7">
        Not a mockup. This is the assessment below, running exactly as it will
        for you.
      </p>

      <ol className="mx-auto mt-8 grid max-w-[1000px] list-none gap-5 p-0 md:mt-10 md:grid-cols-3 md:gap-6">
        {BEATS.map((b) => (
          <li key={b.n}>
            <p className="text-sm font-extrabold text-purple-9 mb-1.5">
              <span className="text-brand-dark font-black mr-2">{b.n}</span>
              {b.title}
            </p>
            <p className="text-[13px] text-purple-7 leading-relaxed">{b.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
