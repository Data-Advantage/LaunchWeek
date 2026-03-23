import { SECTIONS } from "@/lib/markdown";
import Link from "next/link";

const DAY_META: Record<number, { icon: string; description: string; agent: string }> = {
  1: {
    icon: "01",
    description: "Nail your positioning, pricing, and landing page. Write COMPANY.md — the operating manual every agent reads.",
    agent: "Company OS",
  },
  2: {
    icon: "02",
    description: "Build your content engine with SEO, blog posts, and social calendar. Deploy a content agent that keeps writing.",
    agent: "Content Agent",
  },
  3: {
    icon: "03",
    description: "Set up distribution channels, outreach, and community presence. Launch agents that post, reply, and monitor.",
    agent: "Outreach Agent",
  },
  4: {
    icon: "04",
    description: "Wire up analytics, payments, onboarding, and pricing. Deploy support and metrics agents.",
    agent: "Support Agent",
  },
  5: {
    icon: "05",
    description: "Execute a coordinated launch across every channel — with your agent company running alongside you.",
    agent: "Agent Company Live",
  },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="hero-glow absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand-400">
              The free GTM playbook for founders
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Build Your Agent Company{" "}
              <span className="gradient-text">in 5 Days</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl text-balance">
              33 action-oriented guides that teach you to launch your SaaS{" "}
              <em>and</em> build the AI agent team that keeps marketing,
              supporting, and measuring after launch day. Current LaunchWeek
              ends on Day 5. Yours is still running on Day 50.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#days"
                className="inline-flex items-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 hover:shadow-brand-500/40"
              >
                Start the 5-Day Playbook
              </Link>
              <Link
                href="/templates"
                className="inline-flex items-center rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-400 hover:text-white"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-slate-200/60 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                33 Guides
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                Action-oriented with prompts, templates, and checklists you can
                use today. AI-accelerated with specific prompts for Claude and
                Perplexity.
              </p>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                5 Agent Templates
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                COMPANY.md, MARKETING.md, CONTENT.md, OUTREACH.md, SUPPORT.md —
                the markdown files that become your AI operating system.
              </p>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                Runs After Launch
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                Most playbooks end on launch day. This one builds an agent team
                that keeps executing while you sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Day cards */}
      <section id="days" className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            The 5-Day Playbook
          </h2>
          <p className="mt-2 text-slate-500">
            Each day has guides you work through <em>plus</em> the agent layer
            you deploy alongside them.
          </p>
        </div>

        <div className="grid gap-4">
          {SECTIONS.map((s) => {
            const meta = s.day !== null ? DAY_META[s.day] : null;
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="card-hover group relative rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 font-heading text-lg font-bold text-white">
                    {meta?.icon ?? "→"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                        {s.label}
                      </h3>
                      {meta && (
                        <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                          + {meta.agent}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {meta?.description ?? s.label}
                    </p>
                  </div>
                  <div className="hidden sm:block flex-shrink-0 text-slate-300 group-hover:text-brand-400 transition-colors">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Templates CTA */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-slate-900 p-8 sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Your Company OS
              </h2>
              <p className="mt-2 max-w-lg text-slate-400">
                Five markdown files that give your AI agents everything they need
                to execute. Customize them with AI or start from the Pixola demo.
              </p>
            </div>
            <Link
              href="/templates"
              className="inline-flex flex-shrink-0 items-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
            >
              Browse Templates →
            </Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-5">
            {["COMPANY", "MARKETING", "CONTENT", "OUTREACH", "SUPPORT"].map(
              (name) => (
                <Link
                  key={name}
                  href={`/templates/${name.toLowerCase()}`}
                  className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-center transition hover:border-brand-500/50 hover:bg-slate-800"
                >
                  <span className="block font-mono text-sm font-medium text-slate-200">
                    {name}.md
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Companion callout */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pb-16">
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-center sm:p-8">
          <p className="text-sm text-slate-500">
            The GTM companion to{" "}
            <a
              href="https://vibeweek.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              VibeWeek.ai
            </a>{" "}
            — VibeWeek builds it, LaunchWeek launches it.{" "}
            New to AI tools? Start with{" "}
            <a
              href="https://vibereference.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              VibeReference.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
