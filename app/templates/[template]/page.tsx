import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getTemplatePage, TEMPLATES } from "@/lib/templates";
import { TemplateNav } from "@/components/template-nav";
import MarkdownContent from "@/components/MarkdownContent";

const SEO_DESCRIPTIONS: Record<string, string> = {
  company:
    "COMPANY.md — The master context file for your AI agent company. Define your mission, product, ICP, pricing, brand voice, and hard limits in one place.",
  marketing:
    "MARKETING.md — AI marketing playbook template. Channel strategy, content formats, distribution rules, and tone guidelines for every platform.",
  content:
    "CONTENT.md — AI editorial playbook template. Target keywords, blog templates, content calendar, SEO rules, and quality standards.",
  outreach:
    "OUTREACH.md — AI community outreach template. Target communities, trigger keywords, opportunity scoring, and response frameworks.",
  support:
    "SUPPORT.md — AI support playbook template. Approved answers, escalation rules, refund policy, and churn signal definitions.",
};

export async function generateStaticParams() {
  return TEMPLATES.map((t) => ({ template: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ template: string }>;
}): Promise<Metadata> {
  const { template } = await params;
  const info = TEMPLATES.find((t) => t.slug === template);
  if (!info) return {};
  return {
    title: `${info.name} Template — LaunchWeek.ai`,
    description: SEO_DESCRIPTIONS[template] ?? info.description,
    openGraph: {
      title: `${info.name} — AI Company Template`,
      description: SEO_DESCRIPTIONS[template] ?? info.description,
    },
  };
}

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ template: string }>;
}) {
  const { template } = await params;
  const data = await getTemplatePage(template);
  if (!data) notFound();

  const info = TEMPLATES.find((t) => t.slug === template)!;
  const currentIndex = TEMPLATES.findIndex((t) => t.slug === template);
  const prev = currentIndex > 0 ? TEMPLATES[currentIndex - 1] : null;
  const next =
    currentIndex < TEMPLATES.length - 1 ? TEMPLATES[currentIndex + 1] : null;

  return (
    <div>
      <TemplateNav current={`/templates/${template}`} />

      <div className="mb-6 flex items-center gap-2 text-sm">
        <Link href="/templates" className="text-orange-500 hover:text-orange-700">
          Templates
        </Link>
        <span className="text-gray-300">›</span>
        <span className="text-gray-500">{info.name}</span>
      </div>

      <div className="mb-8 rounded-lg bg-gray-50 border border-gray-100 px-5 py-4">
        <p className="text-sm text-gray-600 mb-2">{info.description}</p>
        <p className="text-xs text-gray-400">
          Recommended order: COMPANY → MARKETING → CONTENT → OUTREACH → SUPPORT
        </p>
      </div>

      <MarkdownContent html={data.contentHtml} />

      <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
        <div>
          {prev && (
            <Link
              href={`/templates/${prev.slug}`}
              className="text-sm text-orange-600 hover:underline"
            >
              ← {prev.name}
            </Link>
          )}
        </div>
        <Link
          href="/templates/demo"
          className="text-sm text-gray-400 hover:text-gray-600"
        >
          See Pixola demo →
        </Link>
        <div>
          {next && (
            <Link
              href={`/templates/${next.slug}`}
              className="text-sm text-orange-600 hover:underline"
            >
              {next.name} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
