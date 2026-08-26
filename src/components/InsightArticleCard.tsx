import Image from "next/image";
import Link from "next/link";
import {
  articleHref,
  CATEGORY_AGENTS,
  type InsightArticle,
} from "@/lib/insights";

export function InsightArticleCard({ article }: { article: InsightArticle }) {
  const agent = CATEGORY_AGENTS[article.category];
  return (
    <Link
      href={articleHref(article)}
      className="group relative flex flex-col h-full rounded-[20px] border border-purple-15 bg-white overflow-hidden shadow-[0_4px_20px_rgba(137,109,156,0.12)] transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_12px_32px_rgba(137,109,156,0.18)]"
    >
      <div className="h-[5px] gradient-bar shrink-0" aria-hidden />
      <div className="flex flex-col gap-4 p-7 flex-1">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-pink-05 px-3 py-1 text-[11px] font-bold text-brand-dark">
            {article.category}
          </span>
          {article.pillar && (
            <span className="inline-flex items-center rounded-full border border-purple-15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-purple-6">
              Pillar
            </span>
          )}
        </div>
        <h3 className="text-[21px] font-extrabold text-purple-9 tracking-tight leading-[1.25] group-hover:text-brand transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-purple-6 leading-[1.6] flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-purple-15 pt-4">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-15 shrink-0">
              <Image
                src="/images/lihi.png"
                alt="Lihi Pinto"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <div className="leading-tight">
              <p className="text-[13px] font-semibold text-purple-9">
                Lihi Pinto
              </p>
              <p className="text-[12px] text-purple-5">
                {article.date} &middot; {article.readTime}
              </p>
            </div>
          </div>
          <div
            className="relative h-10 w-7 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
            title={`${agent.name} · ${agent.role}`}
          >
            <Image
              src={agent.img}
              alt={`${agent.name}, ${agent.role}`}
              fill
              className="object-contain object-bottom"
              sizes="28px"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
