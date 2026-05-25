"use client";

import { useSyncExternalStore, useRef, useCallback } from "react";

export function useCountUp(
  target: number,
  inView: boolean,
  duration = 1800
) {
  const valueRef = useRef(0);
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

  return useSyncExternalStore(subscribe, getSnapshot, () => 0);
}
