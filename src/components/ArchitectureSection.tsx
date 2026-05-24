import Image from "next/image";
import Link from "next/link";

const agents = [
  {
    name: "Camille",
    role: "Writes the brand voice. Not an LLM's.",
    src: "/images/agents/camille.png",
  },
  {
    name: "Rex",
    role: "Briefs the strategy. Plans campaigns the team can execute.",
    src: "/images/agents/rex.png",
  },
  {
    name: "Zara",
    role: "Ships the social channels.",
    src: "/images/agents/zara.png",
  },
  {
    name: "Nova",
    role: "Reads the room. Research, trends, competitive intel.",
    src: "/images/agents/nova.png",
  },
  {
    name: "Atlas",
    role: "Reads the numbers. Tells us what's working.",
    src: "/images/agents/atlas.png",
  },
  {
    name: "Sage",
    role: "Repurposes everything. One piece becomes ten.",
    src: "/images/agents/sage.png",
  },
  {
    name: "Vega",
    role: "Directs how it looks. Art direction.",
    src: "/images/agents/vega.png",
  },
  {
    name: "Lumen",
    role: "Turns it into video.",
    src: "/images/agents/lumen.png",
  },
];

export function ArchitectureSection() {
  return (
    <section className="bg-white py-20 lg:py-30">
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">The architecture</p>
          <h2 className="text-3xl lg:text-[44px] font-black tracking-tight leading-[1.1] text-purple-9 mb-3">
            How a supervised AI marketing team works.
          </h2>
          <p className="text-lg text-purple-6 italic">
            We call it{" "}
            <strong className="text-brand not-italic font-bold">WIL.</strong>{" "}
            Woman in the Loop.
          </p>
        </div>

        {/* Architecture diagram */}
        <div className="max-w-[960px] mx-auto mb-8">
          {/* Tier 1: Lihi */}
          <div className="flex justify-center mb-3">
            <div className="relative bg-dark text-white rounded-2xl shadow-[var(--shadow-base)] px-8 py-6 text-center min-w-[280px] lg:min-w-[320px] overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
              <div className="font-extrabold text-lg text-white">
                Lihi Pinto · The operator
              </div>
              <div className="text-sm text-purple-3 mt-1">
                Every decision that matters. Strategy. Brand. Judgment.
              </div>
            </div>
          </div>
          <div className="text-center text-purple-3 text-[22px] leading-none my-2">
            &#8597;
          </div>
          {/* Tier 2 */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-3">
            <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] px-7 py-5 text-center min-w-[220px] max-w-[320px] mx-auto md:mx-0 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
              <div className="font-extrabold text-[17px] text-purple-9">
                Digital COO
              </div>
              <div className="text-sm text-purple-6 mt-1">
                Orchestrates the team. Enforces brand standards.
              </div>
            </div>
            <div className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] px-7 py-5 text-center min-w-[220px] max-w-[320px] mx-auto md:mx-0 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
              <div className="font-extrabold text-[17px] text-purple-9">
                Chief Agent
              </div>
              <div className="text-sm text-purple-6 mt-1">
                Claude at C-suite level. Brings only the calls that need a
                human.
              </div>
            </div>
          </div>
          <div className="text-center text-purple-3 text-[22px] leading-none my-2">
            &#8597;
          </div>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-[960px] mx-auto">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="relative bg-white rounded-2xl shadow-[var(--shadow-base)] px-5 py-6 text-center overflow-hidden border border-purple-15 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" />
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-05 overflow-hidden">
                <Image
                  src={agent.src}
                  alt={`${agent.name}, AI marketing agent`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-extrabold text-lg text-purple-9 mb-1.5">
                {agent.name}
              </div>
              <div className="text-sm text-purple-6 leading-snug">
                {agent.role}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-purple-7 italic mt-6">
          <strong className="text-brand not-italic font-bold">
            Zero unsupervised output.
          </strong>{" "}
          Every piece passes a human before it ships.
        </p>
        <div className="text-center mt-8">
          <Link
            href="/agents"
            className="text-brand font-semibold text-[15px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            Meet the cast in detail <span>&#8594;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
