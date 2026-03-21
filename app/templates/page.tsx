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

export default function TemplatesHub() {
  return (
    <div>
      <TemplateNav current="/templates" />

      <TemplateHubActions />

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Build Your Agent Company OS
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-4">
          A Company OS is a set of markdown files that give your AI agents
          everything they need to execute — your mission, voice, strategy, and
          rules. No more repeating context in every prompt.
        </p>
        <p className="text-gray-500 mb-6">
          Start with{" "}
          <Link
            href="/templates/company"
            className="text-orange-600 hover:underline"
          >
            COMPANY.md
          </Link>{" "}
          — it&apos;s the master file every other template references. Then work
          through MARKETING → CONTENT → OUTREACH → SUPPORT. Or{" "}
          <Link
            href="/templates/demo"
            className="text-orange-600 hover:underline"
          >
            see a completed example
          </Link>{" "}
          built for Pixola, a fictional AI image tool.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((template, i) => (
          <Link
            key={template.slug}
            href={`/templates/${template.slug}`}
            className="group block rounded-lg border border-gray-200 p-6 hover:border-orange-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium text-gray-400 bg-gray-50 rounded px-2 py-0.5">
                {i + 1} of 5
              </span>
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                {template.name}
              </h2>
            </div>
            <p className="text-sm text-gray-500 mb-4">{template.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {template.keySections.map((section) => (
                <span
                  key={section}
                  className="text-xs text-gray-400 bg-gray-50 rounded px-2 py-0.5"
                >
                  {section}
                </span>
              ))}
            </div>
          </Link>
        ))}

        <Link
          href="/templates/demo"
          className="group block rounded-lg border border-dashed border-gray-300 p-6 hover:border-orange-300 hover:shadow-sm transition-all"
        >
          <h2 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors mb-3">
            Pixola Demo
          </h2>
          <p className="text-sm text-gray-500">
            See what a completed Company OS looks like. All 5 templates filled
            out for Pixola, an AI image generation SaaS.
          </p>
        </Link>
      </div>
    </div>
  );
}
