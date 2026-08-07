"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { agents, CATEGORIES, type Agent, type Category } from "@/lib/agents-data";
import { ScrollReveal } from "./ScrollReveal";
import { DeliverableIcon } from "@/lib/deliverable-icon";

const MODEL_COLOR: Record<Agent["model"], string> = {
  "Claude Sonnet": "#3DE1FF",
  "Claude Opus": "#FE3465",
  "Claude Haiku": "#8B7BFF",
};

function ModelBadge({ model }: { model: Agent["model"] }) {
  const color = MODEL_COLOR[model];
  return (
    <span
      className="mono-label inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
      style={{
        border: `1px solid ${color}40`,
        background: `${color}12`,
        color,
        fontSize: 10,
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: 999,
          background: color,
          display: "inline-block",
        }}
      />
      {model}
    </span>
  );
}

function AgentDetailCard({ agent, index }: { agent: Agent; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 4}deg) rotateY(${(px - 0.5) * 4}deg)`;
  };
  const reset = () => {
    if (cardRef.current)
      cardRef.current.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <ScrollReveal delay={0.08 + index * 0.06}>
      <div
        ref={cardRef}
        id={agent.id}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl scroll-mt-28"
      >
        <span className="card-spotlight" aria-hidden="true" />
        <div className="p-7">
          {/* Header */}
          <div className="mb-4 flex items-start gap-4">
            <div
              className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl"
              style={{ border: "1px solid var(--c-border-strong)" }}
            >
              <Image
                src={agent.image}
                alt={`${agent.name}, AI marketing agent`}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold" style={{ color: "var(--c-text)" }}>
                {agent.name}
              </h3>
              <p className="mb-2 text-sm" style={{ color: "var(--c-text-dim)" }}>
                {agent.role}
              </p>
              <ModelBadge model={agent.model} />
            </div>
          </div>

          {/* Boot-up status line */}
          <div
            className="mb-4 flex items-center gap-2 rounded-lg px-3 py-2"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid var(--c-border)",
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: 11,
              color: "var(--c-text-dim)",
            }}
          >
            <span className="signal-dot shrink-0" aria-hidden="true" />
            <span className="truncate">
              online · {agent.model} · ready to deploy
            </span>
          </div>

          {/* Description */}
          <p
            className="mb-5 text-[14px] leading-relaxed line-clamp-4"
            style={{ color: "#B5B5C2" }}
          >
            {agent.description}
          </p>

          {/* What you get */}
          <div className="mb-5">
            <p className="mono-label mb-3" style={{ color: "var(--c-text-dim)" }}>
              What you get
            </p>
            <div className="grid grid-cols-3 gap-3">
              {agent.deliverables.map((d) => (
                <div key={d.title} className="text-center">
                  <div
                    className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      background: "rgba(61,225,255,0.08)",
                      border: "1px solid rgba(61,225,255,0.2)",
                      color: "#3DE1FF",
                    }}
                  >
                    <DeliverableIcon emoji={d.icon} className="h-[18px] w-[18px]" />
                  </div>
                  <div
                    className="mb-0.5 text-xs font-semibold"
                    style={{ color: "var(--c-text)" }}
                  >
                    {d.title}
                  </div>
                  <div
                    className="text-[11px] leading-snug"
                    style={{ color: "var(--c-text-dim)" }}
                  >
                    {d.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic CTA */}
          <Link
            href="/revenue-diagnostic#book"
            className="group/diag flex items-center justify-between rounded-xl px-4 py-3.5 transition-all"
            style={{
              background: "rgba(254,52,101,0.08)",
              border: "1px solid rgba(254,52,101,0.3)",
            }}
          >
            <div>
              <span
                className="mono-label mb-1 inline-block rounded px-1.5 py-0.5 text-white"
                style={{ background: "var(--color-brand-dark)", fontSize: 9 }}
              >
                Start here
              </span>
              <div className="text-sm font-bold" style={{ color: "var(--c-text)" }}>
                {agent.diagnostic.name}
              </div>
              <div className="text-xs" style={{ color: "var(--c-text-dim)" }}>
                {agent.diagnostic.duration} &middot; {agent.diagnostic.price} fixed
                scope
              </div>
            </div>
            <span
              className="text-xl transition-transform group-hover/diag:translate-x-1"
              style={{ color: "var(--c-brand)" }}
            >
              &rarr;
            </span>
          </Link>
        </div>

        {/* Footer: tags + pricing */}
        <div
          className="mt-auto flex flex-wrap items-center justify-between gap-3 px-7 py-4"
          style={{ borderTop: "1px solid var(--c-border)" }}
        >
          <div className="flex flex-wrap gap-1.5">
            {agent.categories.map((cat) => (
              <span
                key={cat}
                className="mono-label rounded-full px-2.5 py-1"
                style={{
                  border: "1px solid var(--c-border)",
                  color: "var(--c-text-dim)",
                  fontSize: 9,
                }}
              >
                {cat}
              </span>
            ))}
          </div>
          <div
            className="text-right"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              color: "var(--c-text-dim)",
              fontSize: 11,
            }}
          >
            <span className="font-bold" style={{ color: "var(--c-text)" }}>
              {agent.monthlyRetainer}
            </span>
            /mo · {agent.hourlyRate}/hr
          </div>
        </div>

        {/* Deploy CTA */}
        <div className="px-7 pb-7 pt-2">
          <Link
            href={`/contact?agent=${agent.id}`}
            className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white transition-all"
            style={{ background: "var(--color-brand-dark)" }}
          >
            Deploy {agent.name} &rarr;
          </Link>
          <Link
            href="https://tripleandco.com/builder-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex w-full items-center justify-center text-xs font-medium transition-colors"
            style={{ color: "var(--c-text-dim)" }}
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
      {/* Tactical filter bar */}
      <div className="mb-9 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            data-active={activeCategory === cat}
            className="chip cursor-pointer rounded-full px-3.5 py-1.5"
          >
            {cat}
          </button>
        ))}
        <span
          className="mono-label ml-auto"
          style={{ color: "var(--c-text-dim)" }}
        >
          {filtered.length} agent{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Agent grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((agent, i) => (
          <AgentDetailCard key={agent.id} agent={agent} index={i} />
        ))}
      </div>
    </>
  );
}
