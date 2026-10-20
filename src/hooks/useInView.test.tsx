import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { act, render } from "@testing-library/react";
import { useInView } from "./useInView";

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

interface MockObserver {
  callback: IntersectionObserverCallback;
  observe: ReturnType<typeof vi.fn>;
  unobserve: ReturnType<typeof vi.fn>;
  disconnect: ReturnType<typeof vi.fn>;
  options?: IntersectionObserverInit;
}

let observers: MockObserver[] = [];

function installMockIntersectionObserver() {
  observers = [];
  class IO {
    callback: IntersectionObserverCallback;
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    options?: IntersectionObserverInit;
    constructor(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) {
      this.callback = cb;
      this.options = opts;
      observers.push(this);
    }
    takeRecords() {
      return [];
    }
    root = null;
    rootMargin = "";
    thresholds = [];
  }
  vi.stubGlobal("IntersectionObserver", IO as unknown as typeof IntersectionObserver);
}

function fireIntersect(observer: MockObserver, isIntersecting: boolean) {
  act(() => {
    observer.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      observer as unknown as IntersectionObserver
    );
  });
}

function TestComponent(props: Parameters<typeof useInView>[0]) {
  const { ref, inView } = useInView(props);
  return (
    <div ref={ref} data-testid="target" data-in-view={inView ? "yes" : "no"} />
  );
}

function inViewOf(el: HTMLElement) {
  return el.getAttribute("data-in-view");
}

describe("useInView", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("reports in-view immediately under prefers-reduced-motion", () => {
    mockMatchMedia(true);
    installMockIntersectionObserver();
    const { getByTestId } = render(<TestComponent />);
    expect(inViewOf(getByTestId("target"))).toBe("yes");
    // No observer should be created when motion is reduced.
    expect(observers).toHaveLength(0);
  });

  describe("with a real IntersectionObserver", () => {
    beforeEach(() => {
      mockMatchMedia(false);
      installMockIntersectionObserver();
    });

    it("starts out of view and observes the ref element", () => {
      const { getByTestId } = render(<TestComponent />);
      expect(inViewOf(getByTestId("target"))).toBe("no");
      expect(observers).toHaveLength(1);
      expect(observers[0].observe).toHaveBeenCalledOnce();
    });

    it("passes threshold and rootMargin through to the observer", () => {
      render(<TestComponent threshold={0.5} rootMargin="100px" />);
      expect(observers[0].options).toMatchObject({
        threshold: 0.5,
        rootMargin: "100px",
      });
    });

    it("flips to in-view when the element intersects", () => {
      const { getByTestId } = render(<TestComponent />);
      fireIntersect(observers[0], true);
      expect(inViewOf(getByTestId("target"))).toBe("yes");
    });

    it("unobserves after first intersection when once=true (default)", () => {
      render(<TestComponent />);
      fireIntersect(observers[0], true);
      expect(observers[0].unobserve).toHaveBeenCalledOnce();
    });

    it("toggles back to out-of-view when once=false", () => {
      const { getByTestId } = render(<TestComponent once={false} />);
      fireIntersect(observers[0], true);
      expect(inViewOf(getByTestId("target"))).toBe("yes");
      fireIntersect(observers[0], false);
      expect(inViewOf(getByTestId("target"))).toBe("no");
      expect(observers[0].unobserve).not.toHaveBeenCalled();
    });

    it("disconnects the observer on unmount", () => {
      const { unmount } = render(<TestComponent />);
      const observer = observers[0];
      unmount();
      expect(observer.disconnect).toHaveBeenCalled();
    });
  });
});
