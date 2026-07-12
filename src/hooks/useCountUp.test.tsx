import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useCountUp } from "./useCountUp";

function mockMatchMedia(prefersReduced: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: prefersReduced && query.includes("prefers-reduced-motion"),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
      onchange: null,
    }))
  );
}

/**
 * Controllable requestAnimationFrame: frames only advance when `flushFrame`
 * is called, giving deterministic control over the count-up animation.
 */
function installControllableRaf() {
  let queue: FrameRequestCallback[] = [];
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
    queue.push(cb);
    return queue.length;
  });
  vi.stubGlobal("cancelAnimationFrame", vi.fn());
  return function flushFrame(ts: number) {
    const current = queue;
    queue = [];
    act(() => {
      current.forEach((cb) => cb(ts));
    });
  };
}

describe("useCountUp", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("returns the target immediately when not in view", () => {
    mockMatchMedia(false);
    const raf = vi.fn();
    vi.stubGlobal("requestAnimationFrame", raf);
    const { result } = renderHook(() => useCountUp(500, false));
    expect(result.current).toBe(500);
    expect(raf).not.toHaveBeenCalled();
  });

  it("snaps straight to the target under prefers-reduced-motion", () => {
    mockMatchMedia(true);
    const raf = vi.fn();
    vi.stubGlobal("requestAnimationFrame", raf);
    const { result } = renderHook(() => useCountUp(1200, true));
    expect(result.current).toBe(1200);
    expect(raf).not.toHaveBeenCalled();
  });

  describe("with an animated frame loop", () => {
    let flushFrame: (ts: number) => void;

    beforeEach(() => {
      mockMatchMedia(false);
      flushFrame = installControllableRaf();
    });

    it("animates from ~0 up to the target and stops at the end", () => {
      const target = 1000;
      const duration = 1000;
      const { result } = renderHook(() => useCountUp(target, true, duration));

      // First frame sets the animation start reference (progress 0).
      flushFrame(0);
      expect(result.current).toBe(0);

      // Halfway through: eased value must be between 0 and target.
      flushFrame(duration / 2);
      expect(result.current).toBeGreaterThan(0);
      expect(result.current).toBeLessThan(target);

      // At/after the full duration it must land exactly on the target.
      flushFrame(duration);
      expect(result.current).toBe(target);
    });

    it("never overshoots the target even past the duration", () => {
      const target = 42;
      const { result } = renderHook(() => useCountUp(target, true, 800));
      flushFrame(0);
      flushFrame(5000);
      expect(result.current).toBe(target);
    });
  });
});
