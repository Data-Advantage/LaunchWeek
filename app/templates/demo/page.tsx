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
    <div>
      <TemplateNav current="/templates/demo" />

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Pixola — A Complete Company OS Example
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-4">
          Pixola is a fictional AI image generation SaaS. Below are all 5
          Company OS files filled out as a working reference. Use this as a
          blueprint when writing your own.
        </p>
        <p className="text-sm text-gray-400">
          Each section links back to the blank template so you can start from
          the structure and fill in your own details.
        </p>
      </div>

      <div className="space-y-12">
        {demoPages.map((page) => {
          const template = TEMPLATES.find((t) => t.slug === page.slug);
          return (
            <section
              key={page.slug}
              id={page.slug}
              className="scroll-mt-20"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900">
                  {page.name}
                </h2>
                {template && (
                  <Link
                    href={`/templates/${template.slug}`}
                    className="text-sm text-orange-600 hover:underline"
                  >
                    View blank template →
                  </Link>
                )}
              </div>
              <MarkdownContent html={page.contentHtml} />
            </section>
          );
        })}
      </div>

      <div className="mt-12 pt-6 border-t border-gray-100 text-center">
        <p className="text-gray-500 mb-4">
          Ready to build your own Company OS?
        </p>
        <Link
          href="/templates/company"
          className="inline-block rounded-lg bg-orange-600 text-white px-6 py-2.5 text-sm font-medium hover:bg-orange-700 transition-colors"
        >
          Start with COMPANY.md →
        </Link>
      </div>
    </div>
  );
}
