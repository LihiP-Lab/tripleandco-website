"use client";

import { useCallback, useRef, useSyncExternalStore } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView({
  threshold = 0.15,
  rootMargin = "0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(false);
  const listenersRef = useRef(new Set<() => void>());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const subscribe = useCallback(
    (cb: () => void) => {
      listenersRef.current.add(cb);

      if (typeof window === "undefined") {
        return () => { listenersRef.current.delete(cb); };
      }

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced && !inViewRef.current) {
        inViewRef.current = true;
        cb();
        return () => { listenersRef.current.delete(cb); };
      }

      const el = ref.current;
      if (el && !observerRef.current) {
        observerRef.current = new IntersectionObserver(
          ([entry]) => {
            const prev = inViewRef.current;
            if (entry.isIntersecting && !prev) {
              inViewRef.current = true;
              listenersRef.current.forEach((l) => l());
              if (once && observerRef.current) {
                observerRef.current.unobserve(el);
              }
            } else if (!entry.isIntersecting && !once && prev) {
              inViewRef.current = false;
              listenersRef.current.forEach((l) => l());
            }
          },
          { threshold, rootMargin }
        );
        observerRef.current.observe(el);
      }

      return () => {
        listenersRef.current.delete(cb);
        if (listenersRef.current.size === 0 && observerRef.current) {
          observerRef.current.disconnect();
          observerRef.current = null;
        }
      };
    },
    [threshold, rootMargin, once]
  );

  const getSnapshot = useCallback(() => inViewRef.current, []);

  const inView = useSyncExternalStore(subscribe, getSnapshot, () => false);

  return { ref, inView };
}
