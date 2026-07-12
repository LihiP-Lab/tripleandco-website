"use client";

import { FaqAccordionList, type FaqItem } from "./FaqAccordion";

export function PillarFAQ({ faqs }: { faqs: FaqItem[] }) {
  return <FaqAccordionList faqs={faqs} />;
}
