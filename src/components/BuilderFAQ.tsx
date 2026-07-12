"use client";

import { FaqAccordionList } from "./FaqAccordion";

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
    a: "Both. Lihi provides senior CMO/CRO leadership and strategy. The eight AI agents handle execution \u2014 content, campaigns, social, analytics, and more. You get strategic guidance and a full execution team in one engagement.",
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

export function BuilderFAQ() {
  return <FaqAccordionList faqs={faqs} />;
}
