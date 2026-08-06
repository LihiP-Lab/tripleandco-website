import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Native AI CMO: Marketing for B2B",
  description:
    "Every B2B team uses AI tools, yet pipeline quality has not improved. The problem is architecture, not tools. Here is what a Native AI CMO function looks like.",
  alternates: { canonical: "https://www.tripleandco.com/insights/native-ai-cmo-marketing-for-b2b-in-the-ai-era" },
  openGraph: {
    title: "Native AI CMO: Marketing for B2B in the AI Era",
    description:
      "Every B2B team is using AI tools. Pipeline quality has not improved. The problem is the architecture, here is what native AI marketing actually looks like.",
    url: "https://www.tripleandco.com/insights/native-ai-cmo-marketing-for-b2b-in-the-ai-era",
    siteName: "Triple & Co.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Native AI CMO: Marketing for B2B in the AI Era",
    description:
      "You are using AI. You are still losing to companies that are built on it. Here is the difference.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Native AI CMO: Marketing for B2B in the AI Era",
  description:
    "Every B2B team uses AI tools, yet pipeline quality has not improved. The problem is architecture, not tools. Here is what a Native AI CMO function looks like.",
  image:
    "https://www.tripleandco.com/insights/native-ai-cmo-marketing-for-b2b-in-the-ai-era/opengraph-image",
  datePublished: "2026-06-01",
  dateModified: "2026-07-23",
  author: { "@type": "Person", name: "Lihi Pinto", url: "https://www.tripleandco.com/about" },
  publisher: {
    "@type": "Organization",
    name: "Triple & Co.",
    logo: { "@type": "ImageObject", url: "https://www.tripleandco.com/images/logos/logo-dark.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.tripleandco.com/insights/native-ai-cmo-marketing-for-b2b-in-the-ai-era",
  },
};

export default function Article3Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* ── HERO ── */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 bg-purple-05">
        <div className="mx-auto max-w-[1200px] px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: "Native AI CMO: Marketing for B2B in the AI Era" },
            ]}
          />
          <div className="max-w-[800px] mt-6">
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
                Native AI Marketing
              </span>
              <span className="rounded-full bg-purple-05 border border-purple-15 px-3 py-1 text-xs font-semibold text-purple-6">
                Pillar Article
              </span>
              <span className="rounded-full bg-purple-05 border border-purple-15 px-3 py-1 text-xs font-semibold text-purple-6">
                10 min read
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.05] text-purple-9 mb-6">
              Why Your B2B Company Needs a Native AI CMO, Not Just AI Tools
            </h1>
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-15 shrink-0">
                <Image src="/images/lihi.png" alt="Lihi Pinto" fill className="object-cover" sizes="40px" />
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-9">Lihi Pinto</p>
                <p className="text-xs text-purple-6">Founder, Triple &amp; Co. &middot; <time dateTime="2026-06-01">June 2026</time> &middot; Updated <time dateTime="2026-07-23">July 2026</time></p>
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
              You Are Using AI. You Are Still Losing to Companies That Are Built on It.
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              Every B2B marketing team is using AI now. ChatGPT for first drafts. Jasper for ads.
              Midjourney for visuals. Notion AI for meeting notes. The tool stack has expanded faster
              than most teams can track.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              And yet pipeline quality has not improved proportionally. Brand voice has gotten blurrier.
              Content is publishing faster but converting less. The AI is producing volume. The volume
              is not producing revenue.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              The problem is not the tools. The problem is the architecture.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              Plugging AI tools into a traditional marketing workflow is like bolting a turbocharged engine
              onto a bicycle frame. The power is real. The structure cannot handle it. You get speed
              without control, output without strategy, and content without the coherent point of view
              that makes B2B buyers trust you enough to take a meeting.
            </p>
            <p className="text-purple-7 leading-relaxed mb-8">
              Marketing for B2B in the AI era is not about which tools your team uses. It is about whether
              your entire marketing function was designed, from the ground up, to operate with AI as the
              execution layer rather than a feature add-on. That is the difference between using AI and
              being a Native AI CMO organization.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              The AI Tool Trap and Why It Is Stalling B2B Growth
            </h2>
            <p className="text-purple-7 leading-relaxed mb-6">
              Most companies discovered AI marketing tools in 2023 and 2024. The early adopters got a
              genuine productivity boost, content that used to take three days now took three hours.
              Then everyone else caught up. By 2025, every B2B company in your category was
              producing AI-assisted content. The volume in every niche tripled. Differentiation collapsed.
            </p>
            <p className="text-purple-7 leading-relaxed mb-6">
              When every company&apos;s blog posts are drafted by the same foundation models, optimized by
              the same SEO tools, and distributed through the same channels, the content that stands out
              is the content written with a genuine, specific, human point of view. The AI tool trap is
              this: you adopted AI to move faster, and you did. But so did everyone else. Speed became
              the baseline, not the advantage.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">What Native AI Marketing Is Not</h3>
            <ul className="space-y-2 mb-6 pl-0">
              {[
                "It is not a team that uses AI tools to produce content faster.",
                "It is not an agency that runs AI-generated ads and calls them \"AI-powered campaigns.\"",
                "It is not a ChatGPT wrapper with a branded interface.",
                "It is not automation that publishes content without a human reviewing it against a strategic objective.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-purple-4 mt-1 shrink-0">&#215;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-purple-9 mb-3">What Native AI Marketing Actually Is</h3>
            <ul className="space-y-2 mb-8 pl-0">
              {[
                "AI is not a tool your team uses. It is the execution layer your strategy runs on.",
                "Every AI agent has a defined function, a defined scope, and a defined relationship to the senior operator who sets strategic direction.",
                "Human oversight is not an afterthought or a quality check. It is a structural component of every output, at every stage.",
                "The system produces consistent brand voice, strategic precision, and revenue-linked outputs, not because an editor caught the errors, but because the architecture prevents generic output from entering the system at all.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">&#8594;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              The Generic AI Output Problem: A Brand Liability, Not Just a Quality Issue
            </h2>
            <p className="text-purple-7 leading-relaxed mb-6">
              Generic AI content is not just a missed opportunity. In B2B, it is an active liability.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">How B2B Buyers Actually Evaluate Vendors</h3>
            <p className="text-purple-7 leading-relaxed mb-4">
              Enterprise and mid-market B2B buyers do not make purchase decisions based on content volume.
              They make them based on whether they trust the vendor&apos;s point of view.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              Before a CFO approves a six-figure software contract, her team has read your website, your
              case studies, your LinkedIn content, and at least two of your blog posts. The question they
              are asking, often unconsciously, is: does this company understand our specific problem better
              than anyone else? Generic AI content answers that question with a no. It signals that your
              company is optimizing for search traffic rather than buyer trust.
            </p>
            <p className="text-purple-7 leading-relaxed mb-6">
              That signal is lethal in enterprise B2B sales cycles.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">The Consistency Problem</h3>
            <p className="text-purple-7 leading-relaxed mb-4">
              AI tools, used without an integrated architecture, produce inconsistent outputs. The content
              brief from a content manager produces one tone. The ad copy from a paid media specialist
              produces another. The email sequence from a demand gen manager produces a third. Each one
              is passable on its own. Together, they create a fragmented brand experience that erodes the
              cumulative trust B2B buyers need before they will commit to a vendor.
            </p>
            <p className="text-purple-7 leading-relaxed mb-6">
              In a world where the average enterprise deal involves six to ten stakeholders reviewing your
              content across multiple channels over a period of months, brand inconsistency is not a
              cosmetic issue. It is a revenue issue.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">The Accountability Gap</h3>
            <p className="text-purple-7 leading-relaxed mb-8">
              When AI tools are distributed across a team, no single person owns the quality of the
              system&apos;s output. The content manager owns the blog. The paid team owns the ads. The demand
              gen lead owns email. Each person is accountable for their channel. No one is accountable
              for whether the full body of content tells a coherent story that moves buyers toward a
              decision. A native AI CMO architecture fixes this by design.
            </p>

            {/* Section 3, Agents */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              The Eight-Agent Architecture: Specialization at Scale
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              At{" "}
              <Link href="/" className="text-brand hover:text-brand-dark font-semibold underline underline-offset-2">
                Triple &amp; Co.
              </Link>
              , the native AI CMO function is built on eight specialized agents, each with a defined
              scope, a defined relationship to the revenue objective, and a defined interaction with the
              senior operator who runs the system. This is not a single generalist AI told to &ldquo;do
              marketing.&rdquo; Generalist AI produces generalist output.{" "}
              <Link href="/agents" className="text-brand hover:text-brand-dark font-semibold underline underline-offset-2">
                Explore the full agent system
              </Link>
              .
            </p>

            {[
              {
                name: "Camille",
                role: "Brand Voice and Content Strategy",
                fn: "Long-form editorial, brand voice governance, content strategy, and narrative architecture.",
                body: "Camille ensures every piece of content, from a 2,500-word pillar article to a 90-word LinkedIn caption, sounds like it was written by the same authoritative voice. In B2B, brand voice is not a style preference. It is a trust signal. Camille operates from a brand voice document Lihi builds at the start of every engagement, a precise definition of tone, vocabulary, and the specific point of view the brand holds in its category.",
              },
              {
                name: "Vega",
                role: "SEO and Organic Pipeline Architecture",
                fn: "Keyword strategy, content gap analysis, on-page optimization, internal linking structure, and organic pipeline reporting.",
                body: "Vega does not optimize content for rankings. Vega optimizes content for commercial intent, the specific searches that indicate a buyer is actively evaluating solutions, not just educating themselves. Traffic from informational keywords fills a blog's analytics dashboard. Traffic from commercial-intent keywords fills a pipeline. Vega is calibrated to the latter.",
              },
              {
                name: "Rex",
                role: "Paid Pipeline Generation",
                fn: "Paid media strategy, campaign architecture, audience segmentation, bidding logic, and performance analysis across LinkedIn, Google, and Meta.",
                body: "Rex does not run paid media campaigns. Rex architects paid media systems, the full structure of audience targeting, creative variation, bidding strategy, and conversion tracking. LinkedIn CPCs are high. The targeting precision required to reach a Director of Revenue Operations at a 200-person software company without wasting budget demands a level of discipline that most in-house teams and many agencies do not apply consistently.",
              },
              {
                name: "Zara",
                role: "Social Content and Community Signals",
                fn: "LinkedIn content strategy, short-form social copy, thought leadership sequencing, and community engagement signals.",
                body: "In B2B, LinkedIn is not a vanity channel. It is where your buyers form their first impression of your brand's point of view, often weeks or months before they visit your website. Zara produces the social content that builds this ambient awareness: short-form posts that express a specific, defensible position on a market problem, not generic productivity tips or recycled industry news.",
              },
              {
                name: "Nova",
                role: "Email, Outbound, and Lifecycle Sequences",
                fn: "Cold outreach sequences, nurture flows, onboarding email architecture, re-engagement campaigns, and CRM behavioral trigger logic.",
                body: "Nova is the agent that ensures no lead is lost to silence. In B2B, the majority of pipeline value is destroyed not by lost deals, but by leads that were never followed up with the right message at the right moment. Nova builds the behavioral trigger logic that makes follow-up feel like a relevant conversation rather than a broadcast.",
              },
              {
                name: "Atlas",
                role: "Competitive Intelligence and Market Research",
                fn: "Competitor monitoring, positioning gap analysis, market signal tracking, and sales battlecard production.",
                body: "Atlas runs continuously so your team is never surprised by a competitor move. A competitor launches a new product feature on a Monday. Your sales team has a demo on Thursday. Without Atlas, your rep walks into that call unaware. With Atlas, they walk in with a briefing that addresses the new feature specifically and anticipates the objection before it is raised.",
              },
              {
                name: "Sage",
                role: "Analytics, Attribution, and Revenue Intelligence",
                fn: "Marketing attribution modeling, pipeline analytics, conversion reporting, channel performance scoring, and board-ready revenue reporting.",
                body: "Sage is the agent that prevents marketing investment from disappearing into a black box. Most B2B marketing teams run on activity metrics. Sage is calibrated to revenue metrics: which channels are producing pipeline-qualified leads, what the conversion rate is at each stage, and where the highest-leverage intervention point is in the current funnel.",
              },
              {
                name: "Lumen",
                role: "Creative Direction and Visual Consistency",
                fn: "Creative briefing, visual asset direction, design system governance, ad creative strategy, and brand consistency across touchpoints.",
                body: "Lumen ensures that the visual layer of every marketing output reinforces the same positioning signals as the written layer. A brand whose LinkedIn ads look like one company, whose website looks like a second, and whose sales deck looks like a third is communicating fragmentation at every touchpoint. Lumen operates from the same brand brief as Camille, translating verbal positioning into visual direction.",
              },
            ].map((agent) => (
              <div key={agent.name} className="mb-8 rounded-2xl border border-purple-15 bg-purple-05 p-6 card-gradient-top">
                <div className="mb-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand">{agent.role}</span>
                </div>
                <h3 className="text-xl font-bold text-purple-9 mb-1">{agent.name}</h3>
                <p className="text-xs text-purple-6 italic mb-3">{agent.fn}</p>
                <p className="text-purple-7 leading-relaxed text-sm">{agent.body}</p>
              </div>
            ))}

            {/* Section 4 */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              The Woman in the Loop: Why Human Oversight Is the Architecture, Not the Safety Net
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              The WIL model is frequently misunderstood. The assumption is that Lihi reviews AI outputs
              before they publish, a human quality check at the end of an otherwise automated process.
              That is not how it works.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">Oversight Is Structural, Not Sequential</h3>
            <p className="text-purple-7 leading-relaxed mb-4">
              In the WIL architecture, human strategic judgment is built into the system at three levels,
              not applied at the end as a review step.
            </p>
            <ul className="space-y-4 mb-6 pl-0">
              {[
                ["Level 1, Strategic Input:", "Every agent operates from a strategic brief that Lihi builds and maintains. This brief defines the ICP, the positioning, the messaging hierarchy, the competitive context, and the revenue objective. It is not a style guide. It is the operating system of the entire marketing function."],
                ["Level 2, Calibration Signals:", "Lihi reviews agent outputs as a strategist. The question is never \"is this grammatically correct?\" The question is always \"does this advance the revenue objective and reflect the buyer's specific reality?\" When outputs miss that standard, the brief is updated, not just the individual piece."],
                ["Level 3, Strategic Recalibration:", "Monthly, Lihi conducts a full review of what the system has produced against what the market has signaled in response. Positioning shifts. New competitive threats emerge. ICP understanding deepens. These inputs update the strategic brief, which updates every agent's operating context."],
              ].map(([bold, rest]) => (
                <li key={bold} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">&#8594;</span>
                  <span><strong className="text-purple-9">{bold}</strong> {rest}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-purple-9 mb-3">What This Prevents</h3>
            <ul className="space-y-3 mb-6 pl-0">
              {[
                ["Generic positioning.", "An agent without a precise strategic brief defaults to category-level language. The WIL brief prevents this by making generic output structurally impossible."],
                ["Tone drift.", "AI tools without oversight drift toward the average of everything they have been trained on. Camille's output is anchored to a specific, documented voice that does not drift because the brief does not drift."],
                ["Strategic misalignment.", "An AI agent optimizing for SEO traffic without a revenue brief will generate content that attracts the wrong audience. Vega operates with a pipeline objective, because that objective is in the brief Lihi sets."],
                ["Brand inconsistency.", "When eight separate agents run without a shared operating context, their outputs will diverge. The WIL brief is the shared context that keeps all eight agents producing coherent, mutually reinforcing outputs."],
              ].map(([bold, rest]) => (
                <li key={bold} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">&#8594;</span>
                  <span><strong className="text-purple-9">{bold}</strong> {rest}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-purple-9 mb-3">The Principle: AI Executes. Humans Decide.</h3>
            <p className="text-purple-7 leading-relaxed mb-4">
              AI is exceptionally good at sustained execution: writing at volume, optimizing against
              defined parameters, monitoring signals continuously, and producing consistent outputs
              without fatigue or distraction.
            </p>
            <p className="text-purple-7 leading-relaxed mb-8">
              AI is not good at strategic judgment: understanding the specific commercial context of a
              B2B buying relationship, reading the subtle signals that indicate a market is shifting,
              or making the positioning bets that define a brand&apos;s competitive identity. The WIL
              architecture puts AI where it excels and keeps humans where they are irreplaceable.
            </p>

            {/* Section 5 */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              What Native AI Marketing Looks Like Inside a B2B Company
            </h2>

            <h3 className="text-xl font-bold text-purple-9 mb-3">Weeks 1 to 2: Revenue Diagnostic and Strategic Brief</h3>
            <p className="text-purple-7 leading-relaxed mb-3">
              Lihi conducts a structured audit of the current marketing function. The output is a
              Strategic Brief, the operating document all eight agents run from. It covers:
            </p>
            <ul className="space-y-2 mb-6 pl-0">
              {[
                "ICP definition with firmographic and psychographic detail",
                "Positioning statement and the specific claim of differentiation the brand will own",
                "Messaging hierarchy: what matters most to the buyer at each stage of the funnel",
                "Channel priorities ranked by pipeline impact potential",
                "Competitive landscape summary with identified positioning gaps",
                "Revenue targets and the pipeline metrics that lead to them",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">&#8594;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-purple-9 mb-3">Week 3: Agent Deployment</h3>
            <p className="text-purple-7 leading-relaxed mb-3">
              All eight agents are initialized against the Strategic Brief. Initial asset production begins
              across every channel simultaneously:
            </p>
            <ul className="space-y-2 mb-3 pl-0">
              {[
                "Camille produces the first pillar content pieces",
                "Vega audits the existing SEO architecture and builds the keyword roadmap",
                "Rex structures the paid campaign architecture",
                "Zara builds the first month of LinkedIn content",
                "Nova writes the outbound sequences and nurture flows",
                "Atlas produces a competitive intelligence briefing",
                "Sage builds the attribution model and reporting dashboard",
                "Lumen produces the visual brief and asset templates",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-purple-7 leading-relaxed">
                  <span className="text-brand mt-1 shrink-0">&#8594;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-purple-7 leading-relaxed mb-6 font-semibold text-purple-9">
              By the end of Week 3, the marketing engine is running. Not planned. Running.
            </p>

            <h3 className="text-xl font-bold text-purple-9 mb-3">Week 4 Onward: Continuous Execution and Recalibration</h3>
            <p className="text-purple-7 leading-relaxed mb-4">
              The agents execute continuously. Lihi reviews outputs weekly against strategic intent, not
              as an editor, but as the senior operator ensuring the system stays aligned to the revenue
              objective. Monthly recalibration sessions update the Strategic Brief based on market signals.
            </p>
            <p className="text-purple-7 leading-relaxed mb-8">
              For companies competing in global B2B markets, US-based companies targeting EU enterprise
              buyers, Israeli-founded startups running North American go-to-market from Tel Aviv, European
              software companies expanding into the Middle East, this architecture removes the geographic
              constraint that makes traditional marketing operations expensive and slow. The agents run
              regardless of timezone. The commercial outcomes do not depend on whether your marketing
              team and your target market share working hours.
            </p>

            {/* Conclusion */}
            <h2 className="text-2xl font-extrabold text-purple-9 mb-4">
              The Companies That Win in the AI Era Are the Ones Built for It
            </h2>
            <p className="text-purple-7 leading-relaxed mb-4">
              Using AI tools is table stakes. Every B2B company is doing it. The competitive
              advantage has moved upstream, to the architecture that determines what those tools produce
              and whether that output moves the revenue needle.
            </p>
            <p className="text-purple-7 leading-relaxed mb-4">
              A Native AI CMO function is not a technology investment. It is a structural decision about
              how your company will compete for attention, trust, and pipeline in a market where every
              competitor has access to the same foundation models, the same distribution channels, and
              the same volume-production capabilities.
            </p>
            <p className="text-purple-7 leading-relaxed mb-8">
              The differentiator is not the AI. It is the strategic judgment that directs it, the
              specialized architecture that structures it, and the human oversight that ensures every
              output advances a specific commercial objective rather than filling a content calendar.
              That is the WIL model. That is what marketing for B2B in the AI era actually looks like
              when it is built to produce revenue rather than activity.
            </p>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 lg:py-16 bg-purple-05">
        <div className="mx-auto max-w-[800px] px-8 text-center">
          <p className="eyebrow mb-3">See the system. Then decide.</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-purple-9 tracking-tight mb-4">
            Book a Free Diagnostic Call
          </h2>
          <p className="text-purple-7 leading-relaxed mb-8 max-w-xl mx-auto">
            In 45 minutes, Lihi will assess your current marketing setup, identify the highest-leverage
            gap in your system, and give you a concrete picture of what a WIL engagement would change.
            No generic recommendations. No AI-generated proposals.
          </p>
          <Link
            href="/revenue-diagnostic#book"
            className="inline-flex items-center gap-2 rounded-[10px] bg-brand px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
          >
            Book a Diagnostic Call <span>&#8594;</span>
          </Link>
        </div>
      </section>

      {/* ── FOOTER BLURB ── */}
      <section className="py-8 bg-white border-t border-purple-15">
        <div className="mx-auto max-w-[800px] px-8">
          <p className="text-sm text-purple-6 leading-relaxed">
            Triple &amp; Co. is a Native AI CMO and CRO as a Service firm for B2B companies. Our
            Woman in the Loop (WIL) architecture combines senior strategic direction from Lihi Pinto
            with eight specialized AI agents executing across brand, content, SEO, paid, social, email,
            intelligence, and analytics.{" "}
            <Link href="/agents" className="text-brand hover:text-brand-dark font-semibold">
              Meet the agents
            </Link>
            {", "}
            <Link href="/about" className="text-brand hover:text-brand-dark font-semibold">
              learn how we work
            </Link>
            {", or "}
            <Link href="/insights" className="text-brand hover:text-brand-dark font-semibold">
              return to the Insights Hub
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
