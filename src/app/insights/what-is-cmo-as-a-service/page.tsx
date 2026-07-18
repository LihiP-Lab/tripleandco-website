import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "What Is CMO as a Service? The Complete Guide | Triple & Co.",
  description:
    "CMO as a Service is not a fractional hire. It is a full marketing function, strategy, AI execution, and senior oversight, without the full-time overhead. Here is exactly how it works.",
  alternates: { canonical: "https://www.tripleandco.com/insights/what-is-cmo-as-a-service" },
  openGraph: {
    title: "What Is CMO as a Service? The Complete Guide for B2B Founders",
    description:
      "CMO as a Service is not a fractional hire. It is a full marketing function, strategy plus AI execution, without the full-time overhead.",
    url: "https://www.tripleandco.com/insights/what-is-cmo-as-a-service",
    siteName: "Triple & Co.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is CMO as a Service? The Complete Guide for B2B Founders",
    description:
      "Not a fractional hire. Not an agency retainer. CMO as a Service is a full marketing function with AI execution built in.",
  },
};

export default function MegaPillarCMOPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: "What Is CMO as a Service?" },
            ]}
          />
          <div className="max-w-[800px] mt-6">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                CMO &amp; CRO as a Service
              </span>
              <span className="rounded-full bg-purple-05 border border-purple-15 px-3 py-1 text-xs font-semibold text-purple-6">
                Pillar Article
              </span>
              <span className="rounded-full bg-purple-05 border border-purple-15 px-3 py-1 text-xs font-semibold text-purple-6">
                12 min read
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
              What Is CMO as a Service? The Complete Guide for B2B Founders
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-15 shrink-0">
                <Image src="/images/lihi.png" alt="Lihi Pinto" fill className="object-cover" sizes="40px" />
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-9">Lihi Pinto</p>
                <p className="text-xs text-purple-6">Founder, Triple &amp; Co. &middot; June 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="max-w-[800px]">

            {/* Intro */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              The Marketing Leadership Question Every Founder Faces
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              You have product-market fit, or you are close enough to need marketing to work harder than it
              currently is. You know you need senior marketing leadership. But a full-time CMO at the level
              your company needs costs between $250,000 and $400,000 a year in salary alone, before equity,
              benefits, and the 6-to-12-month ramp before they produce anything measurable.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              So you look at alternatives. A marketing agency, maybe. Or a Fractional CMO, a senior marketer
              who works part-time across several clients. Both options have become standard advice for
              growth-stage founders who need expertise without full-time overhead.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              And both have the same fundamental problem: they give you thinking without doing, or doing
              without thinking. Neither gives you the integrated system your company actually needs to generate
              consistent, compounding pipeline.
            </p>
            <p className="text-purple-7 leading-relaxed mb-8">
              CMO as a Service is a different model entirely. This guide explains what it is, how it differs
              from every alternative, who it is built for, and what it looks like in practice.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              What CMO as a Service Actually Means
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              CMO as a Service is a complete outsourced marketing function. It combines senior strategic
              leadership with a full execution layer, the people, processes, and in modern implementations,
              the AI agents, that actually deliver the work the strategy calls for.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              The &quot;as a Service&quot; framing matters. It is not a consulting arrangement where someone
              advises your existing team. It is not a part-time hire who shows up for three days a month.
              It is a complete marketing capability delivered as an ongoing engagement, structured to produce
              measurable commercial outcomes rather than activity metrics.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              At its core, a well-structured CMO as a Service engagement delivers four things simultaneously:
            </p>
            <ul className="space-y-3 mb-8 pl-0">
              {[
                ["Strategic direction:", "ICP definition, positioning, messaging hierarchy, channel prioritization, and the competitive context that shapes every marketing decision."],
                ["Execution infrastructure:", "The campaigns, content, sequences, and assets that actually reach buyers, produced consistently, not episodically."],
                ["Performance accountability:", "Reporting tied to pipeline and revenue, not vanity metrics. Someone who owns the number, not just the activity."],
                ["Organizational leverage:", "A model that scales with your growth stage without requiring you to build and manage a full internal marketing team prematurely."],
              ].map(([label, text]) => (
                <li key={label as string} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">→</span>
                  <span><span className="font-semibold text-purple-9">{label}</span> {text}</span>
                </li>
              ))}
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              CMO as a Service vs. Fractional CMO: The Critical Distinction
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              The Fractional CMO model became popular because it solved one real problem: giving companies
              access to senior marketing thinking without paying for a full-time executive. That part works.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              What it does not solve, and what consistently frustrates the founders who hire Fractional CMOs,
              is the execution gap. A Fractional CMO works 2-3 days per week across multiple clients. They
              can set the strategy. They can define the ICP, build the messaging framework, and outline the
              channel mix. What they cannot do is also deliver the work the strategy requires.
            </p>
            <p className="text-purple-7 leading-relaxed mb-6">
              So the strategy lands in front of a marketing team that may not have the capacity, seniority,
              or contextual knowledge to execute it. Or it lands in front of a founder who is already
              stretched and cannot implement it. The strategy document sits in Notion. The pipeline does not
              move.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">The Three Structural Gaps in the Fractional Model</h3>
            <ul className="space-y-3 mb-8 pl-0">
              {[
                ["The execution gap:", "Strategy is delivered. A team to run it is not. The Fractional CMO's value depends entirely on the quality and capacity of whoever executes the plan, and that team is rarely the reason you hired a Fractional CMO in the first place."],
                ["The continuity gap:", "A Fractional CMO splits their attention across clients. Your company gets a fraction of their bandwidth at any given moment. When a campaign needs fast iteration or a positioning problem needs deep focus, you are in a queue."],
                ["The accountability gap:", "A Fractional CMO can advise on what to do, but they rarely own the pipeline number. When results miss, the conversation becomes about whether the advice was followed correctly rather than whether the commercial outcome was achieved."],
              ].map(([label, text]) => (
                <li key={label as string} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">→</span>
                  <span><span className="font-semibold text-purple-9">{label}</span> {text}</span>
                </li>
              ))}
            </ul>
            <p className="text-purple-7 leading-relaxed mb-8">
              CMO as a Service closes all three gaps. The senior operator sets the strategy and the
              execution layer delivers against it, under the same engagement, from the same brief, accountable
              to the same commercial objective. See what each model costs in the Israeli market in{" "}
              <Link href="/insights/outsourced-cmo-israel-cost" className="text-brand hover:text-brand-dark font-semibold underline underline-offset-2">
                Outsourced CMO in Israel: What It Really Costs in 2026
              </Link>.
            </p>

            {/* Section 3 */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              CMO as a Service vs. Full-Time CMO Hire
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              The full-time CMO is the right answer, eventually. For most B2B companies, that moment comes
              when you have enough scale, enough internal marketing infrastructure, and enough organizational
              complexity to justify a $300,000+ executive whose primary job is managing people and processes
              rather than driving them directly.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              Before that point, the full-time CMO hire creates three problems that founders consistently
              underestimate:
            </p>
            <ul className="space-y-3 mb-6 pl-0">
              {[
                ["Ramp time:", "A new CMO needs 3-6 months to understand your market, your ICP, your product, and your internal dynamics before they can make strategic decisions with real confidence. During that window, your pipeline does not stop needing to grow."],
                ["Team dependency:", "A CMO is a leader, not a doer. Their value multiplies when there is a team to direct. If you are hiring a CMO to replace a marketing function rather than lead one, you are hiring the wrong role for the stage you are at."],
                ["Cost structure:", "At $250,000-$400,000 in fully-loaded annual cost, a full-time CMO is a significant bet on a single person. CMO as a Service delivers comparable strategic seniority at a fraction of the cost, without the irreversibility of a senior executive hire that does not work out."],
              ].map(([label, text]) => (
                <li key={label as string} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">→</span>
                  <span><span className="font-semibold text-purple-9">{label}</span> {text}</span>
                </li>
              ))}
            </ul>
            <p className="text-purple-7 leading-relaxed mb-8">
              CMO as a Service works best as a growth-stage bridge: get the marketing function operating at
              a high level, build the playbooks and the pipeline proof points, and, when the business is ready,
              hand a well-documented, high-performing marketing function to an internal leader who can scale it.
            </p>

            {/* Section 4 */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              CMO as a Service vs. Marketing Agency
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              The agency model has one core problem: misaligned incentives. Agencies are optimized for
              retainer stability, not pipeline growth. The metrics they report, impressions, engagement rate,
              leads generated, are activity metrics. They are not the same as revenue metrics.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              Agencies also have a structural positioning problem for B2B companies specifically. Their teams
              rotate. The strategist who onboarded your account is not the same person executing your campaigns
              six months later. The brand voice and market context that took time to establish bleeds out every
              time a new account manager takes over.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              And agencies rarely own the commercial outcome. When pipeline does not grow, the conversation
              with an agency becomes a negotiation about which inputs they controlled and which ones they did
              not. CMO as a Service has one accountable operator who owns the full revenue marketing system,
              with no diffusion of responsibility across departments and no rotation of the people who
              understand your business.
            </p>

            {/* Comparison Table */}
            <div className="mb-12 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-purple-05 border border-purple-15">
                    <th className="text-left px-4 py-3 font-bold text-purple-9 border-r border-purple-15">Criteria</th>
                    <th className="text-left px-4 py-3 font-bold text-purple-9 border-r border-purple-15">Fractional CMO</th>
                    <th className="text-left px-4 py-3 font-bold text-purple-9 border-r border-purple-15">Full-Time CMO</th>
                    <th className="text-left px-4 py-3 font-bold text-purple-9 border-r border-purple-15">Agency</th>
                    <th className="text-left px-4 py-3 font-bold text-brand">CMO as a Service</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Senior strategic oversight", "Yes", "Yes", "Rarely", "Yes"],
                    ["Execution included", "No", "Depends on team", "Yes (channel-specific)", "Yes (full-stack)"],
                    ["Speed to output", "Slow (depends on your team)", "Slow (ramp period)", "Medium", "Fast"],
                    ["Revenue accountability", "Low", "High", "Low", "High"],
                    ["Cost (annual)", "$80K–$150K", "$250K–$400K+", "$60K–$200K", "Varies by scope"],
                    ["Scales with growth", "Limited", "Yes (with team)", "Partial", "Yes"],
                    ["Brand/ICP continuity", "Medium", "High", "Low (team rotation)", "High"],
                    ["AI-native execution", "Rarely", "Rarely", "Rarely", "Yes (WIL model)"],
                  ].map(([criteria, frac, ft, agency, caas], idx) => (
                    <tr key={criteria as string} className={idx % 2 === 0 ? "bg-white border border-purple-15" : "bg-purple-05 border border-purple-15"}>
                      <td className="px-4 py-3 font-semibold text-purple-9 border-r border-purple-15">{criteria}</td>
                      <td className="px-4 py-3 text-purple-7 border-r border-purple-15">{frac}</td>
                      <td className="px-4 py-3 text-purple-7 border-r border-purple-15">{ft}</td>
                      <td className="px-4 py-3 text-purple-7 border-r border-purple-15">{agency}</td>
                      <td className="px-4 py-3 font-semibold text-brand">{caas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5 */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              What You Actually Get: The Deliverables of a CMO as a Service Engagement
            </h2>
            <p className="text-purple-7 leading-relaxed mb-6">
              The output of a CMO as a Service engagement is not a strategy document. It is a running marketing
              function that produces commercial results. Here is what that looks like in practice.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">Revenue Marketing Infrastructure</h3>
            <p className="text-purple-7 leading-relaxed mb-6">
              The foundation is a Strategic Brief: a living document that defines your ICP with firmographic
              and psychographic precision, your positioning and differentiation claim, your messaging hierarchy
              across funnel stages, your competitive landscape, and the pipeline targets the marketing system
              is accountable to. Every output, every campaign, every piece of content, every email sequence,
              runs from this brief. It is not a style guide. It is the operating system of the entire marketing
              function.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">Full-Stack Channel Execution</h3>
            <p className="text-purple-7 leading-relaxed mb-4">
              A complete CMO as a Service engagement covers every channel in the revenue marketing mix:
            </p>
            <ul className="space-y-2 mb-6 pl-0">
              {[
                "Content and SEO: pillar articles, keyword architecture, internal linking strategy, and topical authority built around the queries your buyers are actually making.",
                "Paid pipeline: LinkedIn, Google, and Meta campaigns structured around commercial-intent audiences, not broad awareness plays.",
                "Social and thought leadership: LinkedIn content that builds ambient brand trust with buyers before they ever visit your website.",
                "Email and outbound: cold outreach sequences, nurture flows, and behavioral trigger logic calibrated to where prospects are in the buying process.",
                "Sales enablement: messaging frameworks, objection handling guides, and competitive battlecards that give your sales team a structural advantage in every conversation.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-purple-9 mb-3">Performance Reporting Tied to Revenue</h3>
            <p className="text-purple-7 leading-relaxed mb-8">
              Weekly and monthly reporting that measures pipeline contribution, channel performance ranked
              by revenue impact, conversion rates at each funnel stage, and the highest-leverage intervention
              point in the current system. Not impressions. Not MQLs. Revenue.
            </p>

            {/* Section 6, Triple & Co. model */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              The Triple &amp; Co. Model: AI-Native CMO as a Service
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              <Link href="/" className="text-brand hover:text-brand-dark font-semibold underline underline-offset-2">
                Triple &amp; Co.
              </Link>{" "}
              is a Native AI CMO and{" "}
              <Link href="/cmo-as-a-service" className="text-brand hover:text-brand-dark font-semibold underline underline-offset-2">
                CMO as a Service
              </Link>{" "}
              firm built on what we call the Woman in the Loop (WIL) architecture. It is the same
              CMO as a Service model described above, rebuilt for the AI era.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              The WIL model combines senior strategic direction from Lihi Pinto, 15+ years of B2B growth
              leadership across Israeli tech, US enterprise, and global markets, with{" "}
              <Link href="/agents" className="text-brand hover:text-brand-dark font-semibold underline underline-offset-2">
                eight specialized AI agents
              </Link>{" "}
              that execute the marketing work the strategy requires. The agents cover brand voice and content,
              SEO, paid pipeline, social, email and outbound, competitive intelligence, analytics, and creative.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              This is not AI replacing strategic judgment. It is AI executing what strategic judgment
              directs, at a speed, consistency, and scale that a human team of equivalent seniority
              could not match.
            </p>
            <p className="text-purple-7 leading-relaxed mb-6">
              The result: a marketing function that runs continuously, produces consistent brand voice, and
              reports on pipeline outcomes, without the overhead of building an internal team, without the
              rotation problems of an agency, and without the execution gap of a Fractional CMO.
            </p>

            <div className="rounded-2xl border border-purple-15 bg-purple-05 p-6 card-gradient-top mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">The WIL Principle</p>
              <p className="text-purple-7 leading-relaxed text-sm">
                AI is exceptionally good at sustained execution: writing at volume, optimizing against defined
                parameters, monitoring signals continuously. AI is not good at strategic judgment: reading
                the specific commercial context of a B2B buying relationship, making the positioning bets
                that define a brand&apos;s competitive identity, or knowing when the market has shifted and the
                brief needs to change. The WIL architecture puts AI where it excels and keeps humans where
                they are irreplaceable.
              </p>
            </div>

            {/* Section 7, Fit */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              Who CMO as a Service Is Built For
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              CMO as a Service is the right model for a specific kind of company. It is not the right model
              for everyone, and a good CMO as a Service provider should tell you that honestly before taking
              your money.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">Strong Fit</h3>
            <ul className="space-y-2 mb-6 pl-0">
              {[
                "B2B companies between $1M and $20M ARR that have validated product-market fit and need a scalable marketing system to grow pipeline.",
                "Founders who are currently running marketing themselves and need to hand it off to a senior operator without hiring a full team.",
                "Companies with an early-stage marketing hire (coordinator or manager level) who need senior strategic direction they cannot provide internally.",
                "Companies expanding into new geographies, US to EU, Israel to North America, Europe to MENA, who need a marketing function that can operate across markets without adding headcount.",
                "Companies that have tried agency retainers and found that execution without strategic ownership does not produce results.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-purple-9 mb-3">Not the Right Fit</h3>
            <ul className="space-y-2 mb-8 pl-0">
              {[
                "Pre-product companies still searching for product-market fit. CMO as a Service amplifies a validated go-to-market motion. It does not discover one.",
                "Companies that want to hand marketing off entirely without any internal point of contact. The WIL model requires a feedback loop. Someone inside the company needs to own the relationship.",
                "Companies that need a senior executive primarily to manage a large internal marketing team. At that scale, a full-time CMO is the right answer.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-purple-4 mt-1 shrink-0">&#215;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Section 8, 90 days */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              What the First 90 Days Look Like
            </h2>
            <p className="text-purple-7 leading-relaxed mb-6">
              The question founders ask most often before starting a CMO as a Service engagement is: how long
              before we see results? The honest answer depends on what &quot;results&quot; means. Here is what
              the first 90 days of a Triple &amp; Co. engagement actually looks like.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  label: "Weeks 1–2: The Revenue Diagnostic",
                  body: "Lihi conducts a structured audit of your current marketing function: ICP definition (or the absence of one), existing messaging, channel mix, conversion rates at each funnel stage, competitive positioning, and the specific revenue objective. The output is the Strategic Brief, the document that all agents and all outputs run from. This is not a generic onboarding questionnaire. It is a deep commercial diagnosis.",
                },
                {
                  label: "Week 3: System Deployment",
                  body: "All eight agents are initialized against the Strategic Brief. Initial asset production begins across every channel simultaneously: content, SEO architecture, paid campaign structure, LinkedIn content calendar, outbound sequences, competitive intelligence, reporting framework, and creative direction. By the end of Week 3, the marketing engine is running. Not planned. Running.",
                },
                {
                  label: "Weeks 4–8: First Commercial Signals",
                  body: "Campaigns are live. Content is publishing. Outbound is running. The first performance data arrives. Lihi reviews outputs weekly against the Strategic Brief, not as an editor but as a strategist checking whether the system is producing the right commercial signals. Adjustments happen at the brief level, not the asset level, so the entire system recalibrates together.",
                },
                {
                  label: "Month 3: Recalibration and Compounding",
                  body: "The first monthly recalibration session updates the Strategic Brief based on what the market has signaled: what content is converting, what paid audiences are producing pipeline-qualified leads, what competitive moves have changed the landscape. From this point, the system compounds. Each month of data improves the quality of every subsequent output.",
                },
              ].map(({ label, body }) => (
                <div key={label} className="rounded-2xl border border-purple-15 bg-purple-05 p-6 card-gradient-top">
                  <p className="text-sm font-bold text-purple-9 mb-2">{label}</p>
                  <p className="text-purple-7 leading-relaxed text-sm">{body}</p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              The Bottom Line
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              CMO as a Service is not a compromise between a full-time hire and a part-time consultant. It is
              a purpose-built model for the stage most B2B companies are at when they realize marketing needs
              to perform at a higher level than it currently does.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              It gives you senior strategic ownership, a full execution layer, and commercial accountability,
              structured as an ongoing engagement that scales with your growth stage rather than a headcount
              decision that locks you into a fixed org structure too early.
            </p>
            <p className="text-purple-7 leading-relaxed mb-8">
              In the AI era, the best version of CMO as a Service also gives you something else: an execution
              layer that does not sleep, does not context-switch, and does not drift from the strategic brief
              that makes every output commercially precise. That is the model{" "}
              <Link href="/about" className="text-brand hover:text-brand-dark font-semibold underline underline-offset-2">
                Triple &amp; Co.
              </Link>{" "}
              was built to deliver.
            </p>

            {/* CTA */}
            <div className="rounded-2xl bg-purple-05 border border-purple-15 p-8 card-gradient-top">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
                Ready to talk specifics?
              </p>
              <h3 className="text-2xl font-extrabold text-purple-9 mb-3">
                Find Out If CMO as a Service Is the Right Model for Your Stage
              </h3>
              <p className="text-purple-7 leading-relaxed mb-6 text-sm">
                In a 45-minute Diagnostic Call, Lihi will assess your current marketing setup, identify the
                highest-leverage gap in your system, and give you a straight answer about whether CMO as a
                Service is the right move for your company right now. No generic pitch. No AI-generated
                proposal. A senior operator who has built this from scratch, telling you what she actually
                sees.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark transition-colors"
              >
                Book a Diagnostic Call <span>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER BLURB ── */}
      <section className="py-8 bg-purple-05 border-t border-purple-15">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="max-w-[800px]">
            <p className="text-xs text-purple-6 leading-relaxed">
              <Link href="/" className="text-brand hover:text-brand-dark font-semibold">Triple &amp; Co.</Link>{" "}
              is a Native AI CMO and CRO as a Service firm. Our Woman in the Loop (WIL) architecture
              combines senior strategic direction from Lihi Pinto with eight specialized AI agents executing
              across brand, content, SEO, paid, social, email, intelligence, and analytics.{" "}
              <Link href="/agents" className="text-brand hover:text-brand-dark font-semibold">Meet the agents</Link>{" "}
              or{" "}
              <Link href="/about" className="text-brand hover:text-brand-dark font-semibold">learn how we work</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
