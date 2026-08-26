"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Three silent loops of the real instrument, captured from the working page.
 * They only fetch and play once they are actually on screen, so the band costs
 * nothing to anyone who never scrolls this far. Reduced motion gets the poster
 * frame and a play control instead of anything that moves on its own.
 */

const LOOPS = [
  {
    id: "score-01-answering",
    poster: "/video/score-01-answering.jpg",
    n: "01",
    title: "The score banks as you answer",
    body: "Points land the moment you pick, and the seven-spoke shape starts drawing itself beside the questions.",
  },
  {
    id: "score-02-handoff",
    poster: "/video/score-02-handoff.jpg",
    n: "02",
    title: "Each room hands off to the next host",
    body: "Strategy banks its points, then Nova arrives for data. Seven rooms, and you always know which one you are in.",
  },
  {
    id: "score-03-result",
    poster: "/video/score-03-result.jpg",
    n: "03",
    title: "The result arrives in order",
    body: "The dial fills, the tier lands, the gaps line up, and the three things to fix first come in last.",
  },
];

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Loop({
  loop,
  reduced,
}: {
  loop: (typeof LOOPS)[number];
  reduced: boolean;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [manual, setManual] = useState(false);

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
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const playOnce = () => {
    setManual(true);
    ref.current?.play().catch(() => {});
  };

  return (
    <figure className="m-0">
      <div className="relative overflow-hidden rounded-2xl border border-purple-15 bg-dark shadow-[var(--shadow-base)]">
        <video
          ref={ref}
          className="block h-auto w-full"
          poster={loop.poster}
          width={960}
          height={540}
          muted
          playsInline
          loop
          preload="none"
          controls={reduced && manual}
          aria-label={loop.title}
        >
          <source src={`/video/${loop.id}.webm`} type="video/webm" />
          <source src={`/video/${loop.id}.mp4`} type="video/mp4" />
        </video>
        {reduced && !manual && (
          <button
            type="button"
            onClick={playOnce}
            className="absolute inset-0 flex items-center justify-center bg-brand-dark/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand/50"
          >
            <span className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-purple-9">
              Play the loop &rarr;
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4">
        <p className="text-sm font-extrabold text-purple-9 mb-1.5">
          <span className="text-brand-dark font-black mr-2">{loop.n}</span>
          {loop.title}
        </p>
        <p className="text-[13px] text-purple-7 leading-relaxed">{loop.body}</p>
      </figcaption>
    </figure>
  );
}

export function ScoreLoops() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  return (
    <div className="grid gap-8 md:grid-cols-3 md:gap-6">
      {LOOPS.map((l) => (
        <Loop key={l.id} loop={l} reduced={reduced} />
      ))}
    </div>
  );
}
