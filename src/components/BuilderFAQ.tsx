"use client";

import { useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    q: "What does a typical engagement look like?",
    a: "We start with a 30-minute diagnostic call. If there\u2019s a fit, we map your revenue funnel, identify the highest-impact growth levers, and build a phased AI execution plan. Most clients start with Phase 1 and expand from there.",
  },
  {
    q: "How long does it take to see results?",
    a: "Content and visibility improvements show within 4\u20136 weeks. Pipeline impact typically appears by month 2\u20133. By month 4, the AI system is generating compounding returns with decreasing effort.",
  },
  {
    q: "Is this consulting or done-for-you?",
    a: "Both. Lihi provides senior CMO/CRO leadership and strategy. The eight AI agents handle execution: content, campaigns, social, analytics, and more. You get strategic guidance and a full execution team in one engagement.",
  },
  {
    q: "Do we need a technical team to work with you?",
    a: "No. The AI agents and systems are managed entirely by Lihi and the Triple & Co. operating system. Your team stays focused on what they do best while we handle the marketing infrastructure.",
  },
  {
    q: "How is this different from hiring a fractional CMO?",
    a: "A fractional CMO gives you part-time leadership. Lihi gives you part-time leadership plus eight specialist AI agents that execute at full-time speed. Strategy and execution, unified.",
  },
  {
    q: "What kinds of companies do you work with?",
    a: "B2B SaaS companies from seed to Series C. Typically $1M\u2013$30M ARR, looking to build a scalable marketing and revenue engine without hiring a full department.",
  },
  {
    q: "How many clients do you take at a time?",
    a: "2\u20133 active clients per quarter. This ensures every company gets senior attention and the AI system is properly calibrated to their business.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
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

export function BuilderFAQ() {
  return (
    <>
      {faqs.map((faq, i) => (
        <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
      ))}
    </>
  );
}
