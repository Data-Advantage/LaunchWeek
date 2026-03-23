import type { Metadata } from "next";
import Link from "next/link";
import { TEMPLATES } from "@/lib/templates";
import { TemplateNav } from "@/components/template-nav";
import { TemplateHubActions } from "@/components/template-hub-actions";

export const metadata: Metadata = {
  title: "Company OS Templates — LaunchWeek.ai",
  description:
    "5 free AI company templates that turn your business context into agent instructions. Build your Company OS — the operating system for AI-native companies.",
  openGraph: {
    title: "Company OS Templates — LaunchWeek.ai",
    description:
      "5 free templates to build your AI agent company operating system. Define your mission, marketing, content, outreach, and support — then let agents execute.",
  },
};

const ORDER_COLORS: Record<number, string> = {
  0: "bg-slate-900 text-white",
  1: "bg-brand-500 text-white",
  2: "bg-brand-400 text-white",
  3: "bg-brand-300 text-brand-900",
  4: "bg-brand-200 text-brand-900",
};

export default function TemplatesHub() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
      <TemplateNav current="/templates" />

      <TemplateHubActions />

      {/* Header */}
      <div className="mb-12">
        <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          5 Templates
        </span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Build Your Agent Company OS
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
          A Company OS is a set of markdown files that give your AI agents
          everything they need to execute — your mission, voice, strategy, and
          rules. No more repeating context in every prompt.
        </p>
        <p className="mt-3 text-slate-400">
          Start with{" "}
          <Link
            href="/templates/company"
            className="font-medium text-brand-600 hover:text-brand-700"
          >
            COMPANY.md
          </Link>{" "}
          — it&apos;s the master file every other template references. Then work
          through MARKETING → CONTENT → OUTREACH → SUPPORT. Or{" "}
          <Link
            href="/templates/demo"
            className="font-medium text-brand-600 hover:text-brand-700"
          >
            see a completed example
          </Link>{" "}
          built for Pixola, a fictional AI image tool.
        </p>
      </div>

      {/* Template grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((template, i) => (
          <Link
            key={template.slug}
            href={`/templates/${template.slug}`}
            className="card-hover group rounded-xl border border-slate-200 bg-white p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold ${ORDER_COLORS[i] ?? "bg-slate-100 text-slate-700"}`}
              >
                {i + 1}
              </span>
              <h2 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
                {template.name}
              </h2>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-500">
              {template.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {template.keySections.map((section) => (
                <span
                  key={section}
                  className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500"
                >
                  {section}
                </span>
              ))}
            </div>
          </Link>
        ))}

        <Link
          href="/templates/demo"
          className="card-hover group rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 transition hover:border-brand-300 hover:bg-brand-50/30"
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-100 text-xs font-bold text-brand-700">
              ★
            </span>
            <h2 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-brand-600 transition-colors">
              Pixola Demo
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-500">
            See what a completed Company OS looks like. All 5 templates filled
            out for Pixola, an AI image generation SaaS.
          </p>
        </Link>
      </div>
    </div>
  );
}
