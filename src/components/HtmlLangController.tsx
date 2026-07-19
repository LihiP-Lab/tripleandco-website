"use client";

import { useEffect } from "react";

export function HtmlLangController({
  lang,
  dir,
}: {
  lang: string;
  dir: "ltr" | "rtl";
}) {
  useEffect(() => {
    const root = document.documentElement;
    const prevLang = root.lang;
    const prevDir = root.dir;
    root.lang = lang;
    root.dir = dir;
    return () => {
      root.lang = prevLang;
      root.dir = prevDir;
    };
  }, [lang, dir]);

  return null;
}
