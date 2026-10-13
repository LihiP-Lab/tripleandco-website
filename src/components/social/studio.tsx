"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduced(cb: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

/** A tick counter that only runs while on screen, unpaused, and motion is allowed. */
export function useStudioTicker(ms: number) {
  const { ref, inView } = useInView({ threshold: 0.15, once: false });
  const reduced = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduced || paused || !inView) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setTick((t) => t + 1);
    }, ms);
    return () => window.clearInterval(id);
  }, [ms, reduced, paused, inView]);

  return { ref, tick, paused, setPaused, reduced, running: !reduced && !paused && inView };
}

export function MotionToggle({
  paused,
  onToggle,
  label,
}: {
  paused: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex h-8 items-center gap-1.5 rounded-full border border-purple-15 bg-white px-3 text-xs font-semibold text-purple-7 transition-colors hover:text-purple-9"
    >
      {paused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
      {paused ? "Play" : "Pause"}
      <span className="sr-only"> {label}</span>
    </button>
  );
}

/** Head-and-shoulders crop of a full-length agent render, or Lihi's portrait. */
export function Avatar({
  src,
  alt = "",
  size = 40,
  kind = "agent",
  className = "",
}: {
  src: string;
  alt?: string;
  size?: number;
  kind?: "agent" | "person";
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full border border-purple-15 bg-purple-05 ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size * 2}px`}
        className={
          kind === "agent"
            ? "object-cover object-[50%_30%] scale-[1.4] origin-[50%_38%]"
            : "object-cover object-[50%_18%]"
        }
      />
    </span>
  );
}

export const LIHI_PORTRAIT = "/images/lihi-portrait.jpg";
