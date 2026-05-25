"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { agents, CATEGORIES, type Agent, type Category } from "@/lib/agents-data";
import { ScrollReveal } from "./ScrollReveal";

function ModelBadge({ model }: { model: Agent["model"] }) {
  const colorMap: Record<Agent["model"], string> = {
    "Claude Sonnet": "bg-pink-05 text-brand border-pink-1",
    "Claude Opus": "bg-purple-05 text-purple-6 border-purple-15",
    "Claude Haiku": "bg-purple-05 text-purple-5 border-purple-15",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${colorMap[model]}`}
    >
      {model}
    </span>
  );
}

function AgentDetailCard({ agent, index }: { agent: Agent; index: number }) {
  return (
    <ScrollReveal delay={0.08 + index * 0.06}>
      <div
        id={agent.id}
        className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] overflow-hidden border border-purple-15 transition-all duration-300 hover:shadow-[var(--shadow-hover)] scroll-mt-28"
      >
        <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start gap-5 mb-5">
            <div className="w-20 h-20 rounded-full bg-purple-05 overflow-hidden shrink-0">
              <Image
                src={agent.image}
                alt={`${agent.name}, AI marketing agent`}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-extrabold text-purple-9">
                {agent.name}
              </h3>
              <p className="text-sm text-purple-6 mb-2">{agent.role}</p>
              <ModelBadge model={agent.model} />
            </div>
          </div>

          {/* Description */}
          <p className="text-[15px] text-purple-7 leading-relaxed mb-6">
            {agent.description}
          </p>

          {/* What you get */}
          <div className="mb-6">
            <p className="eyebrow mb-4">What you get</p>
            <div className="grid grid-cols-3 gap-4">
              {agent.deliverables.map((d) => (
                <div key={d.title} className="text-center">
                  <div className="text-2xl mb-2">{d.icon}</div>
                  <div className="text-sm font-bold text-purple-9 mb-0.5">
                    {d.title}
                  </div>
                  <div className="text-xs text-purple-6 leading-snug">
                    {d.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic CTA */}
          <Link
            href={`/contact?agent=${agent.id}&offer=diagnostic`}
            className="flex items-center justify-between w-full rounded-xl border-2 border-brand/20 bg-pink-05/50 px-5 py-4 group hover:border-brand/40 transition-all"
          >
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-brand rounded px-2 py-0.5 mb-1.5">
                Start here
              </span>
              <div className="text-sm font-bold text-purple-9">
                {agent.diagnostic.name}
              </div>
              <div className="text-xs text-purple-6">
                {agent.diagnostic.duration} &middot; {agent.diagnostic.price}{" "}
                fixed scope
              </div>
            </div>
            <span className="text-brand text-xl group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        </div>

        {/* Footer: tags + pricing */}
        <div className="border-t border-purple-15 px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {agent.categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center rounded-full bg-purple-05 px-3 py-1 text-[11px] font-medium text-purple-6"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <div className="text-right">
              <span className="text-lg font-black text-purple-9">
                {agent.hourlyRate}
              </span>
              <span className="text-xs text-purple-6">/hr</span>
            </div>
            <div className="text-right text-xs text-purple-6 leading-tight">
              {agent.monthlyRetainer}/mo
              <br />
              retainer
            </div>
            <Link
              href={`/contact?agent=${agent.id}`}
              className="text-brand text-sm font-semibold hover:text-brand-dark transition-colors whitespace-nowrap"
            >
              Book a call &rarr;
            </Link>
          </div>
        </div>

        {/* Builder profile */}
        <div className="border-t border-purple-15 px-8 py-4">
          <Link
            href="https://tripleandco.com/builder-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full rounded-full border-2 border-purple-15 py-2.5 text-sm font-semibold text-purple-6 hover:border-brand hover:text-brand transition-all"
          >
            View Builder Profile &rarr;
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function AgentFilterBar() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return agents;
    return agents.filter((a) => a.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <>
      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-brand text-white shadow-sm"
                : "bg-purple-05 text-purple-6 hover:bg-purple-1 border border-purple-15"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto text-sm text-purple-6">
          {filtered.length} agent{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Agent cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((agent, i) => (
          <AgentDetailCard key={agent.id} agent={agent} index={i} />
        ))}
      </div>
    </>
  );
}
