"use client";

import { useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface FAQItem {
  q: string;
  a: string;
}

function PillarFAQItem({ q, a, index }: FAQItem & { index: number }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
    setOpen((prev) => !prev);
  };

  return (
    <ScrollReveal delay={index * 0.08}>
      <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] mb-3 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bar" />
        <button
          onClick={handleToggle}
          aria-expanded={open}
          className="flex justify-between items-center w-full px-7 py-6 text-left font-semibold text-[17px] text-purple-9 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-2xl"
        >
          <span>{q}</span>
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-extrabold shrink-0 transition-all duration-300 ${
              open
                ? "bg-brand text-white rotate-45"
                : "bg-pink-05 text-brand rotate-0"
            }`}
          >
            +
          </span>
        </button>
        <div
          ref={contentRef}
          style={{
            maxHeight: open ? `${height}px` : "0",
            opacity: open ? 1 : 0,
            transition:
              "max-height 0.4s cubic-bezier(.16,1,.3,1), opacity 0.3s ease",
          }}
          className="overflow-hidden"
        >
          <div className="px-7 pb-7 text-purple-7 leading-[1.7]">{a}</div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function PillarFAQ({ faqs }: { faqs: FAQItem[] }) {
  return (
    <>
      {faqs.map((faq, i) => (
        <PillarFAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
      ))}
    </>
  );
}
