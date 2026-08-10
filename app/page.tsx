import type { Metadata } from "next";
import { SECTIONS } from "@/lib/markdown";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

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
              The public pipeline for autonomous SaaS
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Ship your SaaS in public.{" "}
              <span className="gradient-text">Watch AI agents do the same.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl text-balance">
              LaunchWeek is a 9-stage framework and a live directory. Data Advantage runs 19 products
              through it — see every stage, every owner, every launch metric. Bring your own projects
              and publish your pipeline next.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pipeline"
                className="inline-flex items-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 hover:shadow-brand-500/40"
              >
                See the live pipeline →
              </Link>
              <Link
                href="/u/dataadvantage"
                className="inline-flex items-center rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-slate-400 hover:text-white"
              >
                @dataadvantage's gallery
              </Link>
              <Link
                href="/framework"
                className="inline-flex items-center rounded-lg border border-transparent px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                Read the framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline teaser */}
      <section className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-brand-400">Seeded user</p>
              <h2 className="mt-1 font-heading text-xl font-semibold text-white">
                launchweek.ai/u/dataadvantage — 19 projects, 9 launched
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Live pipeline for an AI-native holding company. More users soon — join the directory waitlist.
              </p>
            </div>
            <Link
              href="/u/dataadvantage"
              className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-200"
            >
              Open profile →
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-border/60 bg-card">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                33 Guides
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Action-oriented with prompts, templates, and checklists you can
                use today. AI-accelerated with specific prompts for Claude and
                Perplexity.
              </p>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                5 Agent Templates
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                COMPANY.md, MARKETING.md, CONTENT.md, OUTREACH.md, SUPPORT.md —
                the markdown files that become your AI operating system.
              </p>
            </div>
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand-500">
                Runs After Launch
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
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
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            The 5-Day Playbook
          </h2>
          <p className="mt-2 text-muted-foreground">
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
                className="card-hover group relative rounded-xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900 font-heading text-lg font-bold text-white">
                    {meta?.icon ?? "→"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-brand-600 transition-colors">
                        {s.label}
                      </h3>
                      {meta && (
                        <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                          + {meta.agent}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {meta?.description ?? s.label}
                    </p>
                  </div>
                  <div className="hidden sm:block flex-shrink-0 text-muted-foreground/40 group-hover:text-brand-400 transition-colors">
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

      {/* Failure vs. Success */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Without LaunchWeek</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-red-400">✕</span>You stay in planning mode forever. The product never ships.</li>
              <li className="flex items-start gap-2"><span className="text-red-400">✕</span>Tutorial after tutorial, but no clear sequence to follow</li>
              <li className="flex items-start gap-2"><span className="text-red-400">✕</span>Launch day comes and goes with no marketing, no users, no momentum</li>
            </ul>
          </div>
          <div className="rounded-xl border border-brand-500/30 bg-brand-50/5 p-6 sm:p-8">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">With LaunchWeek</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-brand-600">✓</span>You have a live product, an AI team running it, and paying customers — in one week</li>
              <li className="flex items-start gap-2"><span className="text-brand-600">✓</span>Clear daily guides with prompts, templates, and checklists</li>
              <li className="flex items-start gap-2"><span className="text-brand-600">✓</span>Your agent company keeps executing while you sleep</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Companion callout */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pb-16">
        <div className="rounded-xl border border-border bg-card p-6 text-center sm:p-8">
          <p className="text-sm text-muted-foreground">
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
