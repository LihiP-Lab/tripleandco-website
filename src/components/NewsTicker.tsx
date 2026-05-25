"use client";

const headlines = [
  "Who decides what AI tells you? Campbell Brown, once Meta's news chief, has thoughts",
  "Clio's $500M milestone arrives just as Anthropic ups the ante",
  "Notion just turned its workspace into a hub for AI agents",
  "Anthropic's Cat Wu says that, in the future, AI will anticipate your needs before you know what they are",
  "Geothermal startup Fervo Energy pops 33% in IPO debut fueled by AI data center demand",
  "X launches a History tab for bookmarks, likes, videos, and articles",
  "Rivian spinoff Mind Robotics raises another $400M",
];

export function NewsTicker() {
  return (
    <section className="border-y border-border bg-surface py-4 overflow-hidden">
      <div className="flex">
        <div className="flex shrink-0 animate-ticker">
          {[...headlines, ...headlines].map((headline, i) => (
            <span key={i} className="flex items-center shrink-0 px-8">
              <span className="h-1.5 w-1.5 rounded-full bg-brand mr-4 shrink-0" />
              <span className="text-sm text-muted whitespace-nowrap">
                {headline}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
