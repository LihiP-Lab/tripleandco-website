"use client";

import { ScrollReveal } from "./ScrollReveal";
import { FaqAccordionItem } from "./FaqAccordion";

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
          <FaqAccordionItem key={faq.q} q={faq.q} a={faq.a} index={i} />
        ))}
      </div>
    </section>
  );
}
