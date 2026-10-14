"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SOCIAL_AGENTS, type SocialAgent } from "@/lib/social-packages";
import { Avatar, LIHI_PORTRAIT, MotionToggle, useStudioTicker } from "./studio";

const LIHI_DOES = [
  "Sets the monthly direction",
  "Contributes ideas, angles, and copy",
  "Reviews every piece before it reaches you",
];

function AgentCard({
  agent,
  index,
  tick,
  side,
}: {
  agent: SocialAgent;
  index: number;
  tick: number;
  side: "left" | "right";
}) {
  const task = agent.tasks[(tick + index) % agent.tasks.length];
  return (
    <li className="relative">
      <article className="flex h-full gap-3.5 rounded-xl border border-purple-15 bg-white p-4 shadow-[var(--shadow-base)] transition-transform hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
        <Avatar src={agent.image} size={52} />
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-widest text-brand-dark">{agent.job}</p>
          <h3 className="text-base font-extrabold text-purple-9 leading-tight">{agent.name}</h3>
          <p className="mt-1 text-sm text-purple-7 leading-relaxed">{agent.body}</p>
          <p aria-hidden="true" className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-purple-6">
            <span className="live-dot h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span key={task} className="studio-enter truncate">
              {task}
            </span>
          </p>
        </div>
      </article>
      <span
        aria-hidden="true"
        className={`hidden lg:block absolute top-1/2 h-px w-5 bg-purple-15 ${side === "left" ? "-right-5" : "-left-5"}`}
      >
        <span
          className="flow-dot absolute -top-[3px] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-brand"
          style={{
            animationDelay: `${index * 0.3}s`,
            animationDirection: side === "left" ? "normal" : "reverse",
          }}
        />
      </span>
    </li>
  );
}

export function AgentTeam() {
  const { ref, tick, paused, setPaused, reduced, running } = useStudioTicker(2400);
  const left = SOCIAL_AGENTS.slice(0, 4);
  const right = SOCIAL_AGENTS.slice(4);

  return (
    <div ref={ref} data-motion={running ? "on" : "off"}>
      {!reduced && (
        <div className="mb-4 flex justify-end">
          <MotionToggle paused={paused} onToggle={() => setPaused((p) => !p)} label="the agent status animation" />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,0.85fr)_1fr] gap-5 items-center">
        <ul aria-label="Agents: research to design" className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {left.map((a, i) => (
            <AgentCard key={a.id} agent={a} index={i} tick={tick} side="left" />
          ))}
        </ul>

        <article className="order-1 lg:order-2 relative overflow-hidden rounded-2xl border border-purple-15 bg-white shadow-[var(--shadow-base)]">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[5px] gradient-bar z-10" />
          <div className="relative aspect-[4/3] lg:aspect-[4/4.4]">
            <Image
              src={LIHI_PORTRAIT}
              alt="Lihi Pinto, founder of Triple & Co."
              fill
              sizes="(min-width: 1024px) 360px, 90vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-dark">Direction and final review</p>
            <h3 className="text-2xl font-black tracking-tight text-purple-9">Lihi Pinto</h3>
            <ul className="mt-3 space-y-2">
              {LIHI_DOES.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-purple-8">
                  <Check className="h-4 w-4 text-brand-dark shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div aria-hidden="true" className="mt-4 flex items-center gap-2 border-t border-purple-15 pt-4">
              <span className="flex -space-x-2">
                {SOCIAL_AGENTS.map((a) => (
                  <Avatar key={a.id} src={a.image} size={26} />
                ))}
              </span>
              <span className="text-xs font-semibold text-purple-6">8 agents report to Lihi</span>
            </div>
          </div>
        </article>

        <ul aria-label="Agents: video to reporting" className="order-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {right.map((a, i) => (
            <AgentCard key={a.id} agent={a} index={i + 4} tick={tick} side="right" />
          ))}
        </ul>
      </div>
      <p className="mt-8 text-[15px] text-purple-7 leading-relaxed max-w-[760px]">
        The agents do the production work. Lihi is accountable for the quality, and you approve before anything is
        published.{" "}
        <Link href="/agents" className="font-semibold text-brand-dark underline underline-offset-4 hover:text-purple-9">
          Meet the agents
        </Link>
      </p>
    </div>
  );
}
