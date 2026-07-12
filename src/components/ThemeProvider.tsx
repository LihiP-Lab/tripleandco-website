"use client";

import {
  createContext,
  useCallback,
  useContext,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

let currentTheme: Theme = "light";
const listeners = new Set<() => void>();

function getSnapshot(): Theme {
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function setThemeValue(next: Theme) {
  currentTheme = next;
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (error) {
      console.warn("Unable to persist theme preference:", error);
    }
  }
  listeners.forEach((cb) => cb());
}

if (typeof window !== "undefined") {
  let stored: Theme | null = null;
  try {
    const value = localStorage.getItem("theme");
    stored = value === "light" || value === "dark" ? value : null;
  } catch (error) {
    console.warn("Unable to read theme preference:", error);
  }
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  currentTheme = stored ?? preferred;
  document.documentElement.setAttribute("data-theme", currentTheme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    setThemeValue(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
