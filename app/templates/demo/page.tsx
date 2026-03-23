import type { Metadata } from "next";
import Link from "next/link";
import { getAllDemoPages, TEMPLATES } from "@/lib/templates";
import { TemplateNav } from "@/components/template-nav";
import MarkdownContent from "@/components/MarkdownContent";

export const metadata: Metadata = {
  title: "Pixola Demo — Company OS Example — LaunchWeek.ai",
  description:
    "See a complete Company OS in action. All 5 AI agent templates filled out for Pixola, a fictional AI image generation SaaS. Copy this structure for your own company.",
  openGraph: {
    title: "Pixola Demo — Company OS Example",
    description:
      "A complete Company OS example with all 5 templates filled out. See how mission, marketing, content, outreach, and support work together.",
  },
};

export default async function DemoPage() {
  const demoPages = await getAllDemoPages();

  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
      <TemplateNav current="/templates/demo" />

      <div className="mb-12">
        <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          Complete Example
        </span>
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Pixola — A Complete Company OS
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
          Pixola is a fictional AI image generation SaaS. Below are all 5
          Company OS files filled out as a working reference. Use this as a
          blueprint when writing your own.
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Each section links back to the blank template so you can start from
          the structure and fill in your own details.
        </p>
      </div>

      <div className="space-y-10">
        {demoPages.map((page) => {
          const template = TEMPLATES.find((t) => t.slug === page.slug);
          return (
            <section
              key={page.slug}
              id={page.slug}
              className="scroll-mt-20 rounded-xl border border-slate-200 bg-white overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 sm:px-8">
                <h2 className="font-heading text-lg font-semibold text-slate-900">
                  {page.name}
                </h2>
                {template && (
                  <Link
                    href={`/templates/${template.slug}`}
                    className="text-sm font-medium text-brand-600 hover:text-brand-700"
                  >
                    View blank template →
                  </Link>
                )}
              </div>
              <div className="p-6 sm:p-8">
                <MarkdownContent html={page.contentHtml} />
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-500 mb-4">
          Ready to build your own Company OS?
        </p>
        <Link
          href="/templates/company"
          className="inline-flex items-center rounded-lg bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
        >
          Start with COMPANY.md →
        </Link>
      </div>
    </div>
  );
}
