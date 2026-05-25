"use client";

import { useRef, useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    q: "How is this different from a traditional marketing agency?",
    a: "Traditional agencies create assets, manage channels, and run campaigns. They rarely connect everything into one revenue engine. Triple & Co. runs senior CMO and CRO leadership, full-service execution, and a supervised team of specialist AI agents from inside one operating system. Lihi owns the outcome.",
  },
  {
    q: "How is this different from a fractional CMO?",
    a: "A fractional CMO gives you part-time leadership. Triple gives you part-time leadership plus a full execution team. Lihi runs the strategy. The eight agents handle the work. You get senior judgment without paying for a full marketing department.",
  },
  {
    q: 'What does "supervised AI team" actually mean day to day?',
    a: "Every piece of work passes a human before it ships. Lihi sits at the top. The eight specialist agents handle brand, strategy, social, research, analytics, repurposing, art direction, and video. Nothing leaves the command center without review.",
  },
  {
    q: "Do the agents replace humans on my team?",
    a: "No. The agents replace the agency roster, the freelancer stack, and the contractor sprawl you would otherwise have to manage. Your in-house people get a senior CMO and CRO partner plus an execution layer they can lean on. If you want, we can also help you build your in-house team. That is one of the services.",
  },
  {
    q: "Do you work with companies outside Israel?",
    a: "Yes. About half the work is global. Lihi is bilingual in Hebrew and English. The agents do not care about timezones. The Israeli context is a strength, not a limit.",
  },
  {
    q: "What does the first month look like?",
    a: "We start with Analysis. We map your revenue funnel, your current marketing, and the highest-impact growth levers. You get an AI Revenue Blueprint that names the moves to make and the order to make them. Then Strategy. Then Execution. The team starts shipping in week one.",
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

export function FAQ() {
  return (
    <section className="bg-purple-05 py-20 lg:py-30" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-[880px] px-8">
        <ScrollReveal>
          <p className="eyebrow text-center mb-4">FAQ</p>
          <h2 id="faq-heading" className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-center mb-12 text-purple-9">
            Questions before we get on a call.
          </h2>
        </ScrollReveal>
        {faqs.map((faq, i) => (
          <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>
    </section>
  );
}
