import Link from "next/link";
import { TOOL_HOOKS, type ToolHookId } from "@/lib/insights";

export function InsightToolHook({ id }: { id: ToolHookId }) {
  const hook = TOOL_HOOKS[id];
  return (
    <div className="relative rounded-2xl border border-purple-15 bg-purple-05 p-7 lg:p-8 card-gradient-top overflow-hidden">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand mb-2">
        {hook.eyebrow}
      </p>
      <h3 className="text-xl font-extrabold text-purple-9 tracking-tight mb-2">
        {hook.title}
      </h3>
      <p className="text-sm text-purple-7 leading-relaxed mb-5 max-w-xl">
        {hook.blurb}
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={hook.href}
          className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-6 py-3 text-[15px] font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
        >
          {hook.cta} <span aria-hidden>&#8594;</span>
        </Link>
        <p className="text-xs text-purple-6">{hook.meta}</p>
      </div>
    </div>
  );
}

export function InsightToolStrip() {
  const order: ToolHookId[] = ["score", "visibility", "diagnostic"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {order.map((id) => {
        const hook = TOOL_HOOKS[id];
        return (
          <Link
            key={id}
            href={hook.href}
            className="group relative flex flex-col gap-3 rounded-2xl border border-purple-15 bg-white p-7 card-gradient-top transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)] h-full"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              {hook.eyebrow}
            </p>
            <h3 className="text-lg font-extrabold text-purple-9 tracking-tight leading-snug">
              {hook.title}
            </h3>
            <p className="text-sm text-purple-7 leading-relaxed flex-1">
              {hook.blurb}
            </p>
            <p className="text-xs text-purple-5">{hook.meta}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand group-hover:gap-2 transition-all">
              {hook.cta} <span aria-hidden>&#8594;</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
