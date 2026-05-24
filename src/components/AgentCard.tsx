import Image from "next/image";
import Link from "next/link";

interface AgentCardProps {
  name: string;
  role: string;
  model: string;
  description: string;
  color: string;
  image: string;
}

export function AgentCard({
  name,
  role,
  model,
  description,
  color,
  image,
}: AgentCardProps) {
  return (
    <div
      className={`group rounded-2xl border border-border bg-gradient-to-br ${color} p-6 hover:border-brand/30 transition-all`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image
                src={image}
                alt={name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">{name}</h3>
              <p className="text-xs text-muted">{role}</p>
            </div>
          </div>
        </div>
        <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted">
          {model}
        </span>
      </div>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      <Link
        href="/agents"
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-dark transition-colors"
      >
        View agent
        <svg
          className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
}
