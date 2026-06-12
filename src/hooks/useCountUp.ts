"use client";

import { useSyncExternalStore, useRef, useCallback } from "react";

/**
 * Count-up animation that is SEO-safe: the server-rendered HTML (and any
 * client without JS) shows the real target value. The 0 -> target animation
 * only runs client-side, once the element scrolls into view, and is skipped
 * entirely under prefers-reduced-motion.
 */
export function useCountUp(
  target: number,
  inView: boolean,
  duration = 1800
) {
  const valueRef = useRef(target);
  const startedRef = useRef(false);
  const listenersRef = useRef(new Set<() => void>());

  const subscribe = useCallback((cb: () => void) => {
    listenersRef.current.add(cb);

    if (inView && !startedRef.current) {
      startedRef.current = true;

      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        valueRef.current = target;
        cb();
        return () => { listenersRef.current.delete(cb); };
      }

      let start: number | null = null;

      const step = (ts: number) => {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        valueRef.current = Math.round(eased * target);
        listenersRef.current.forEach((l) => l());
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    }

    return () => { listenersRef.current.delete(cb); };
  }, [inView, target, duration]);

  const getSnapshot = useCallback(() => valueRef.current, []);

  // Server snapshot returns the target so crawlers index real numbers, not 0.
  return useSyncExternalStore(subscribe, getSnapshot, () => target);
}
