import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getTemplatePage, TEMPLATES } from "@/lib/templates";
import { TemplateNav } from "@/components/template-nav";
import { CustomizeSection } from "@/components/customize-section";

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
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
      <TemplateNav current={`/templates/${template}`} />

      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm">
        <Link
          href="/templates"
          className="text-slate-400 transition-colors hover:text-slate-600"
        >
          Templates
        </Link>
        <span className="text-slate-300">/</span>
        <span className="font-medium text-slate-700">{info.name}</span>
      </nav>

      {/* Description */}
      <div className="mb-8 rounded-xl border border-slate-200 bg-white px-6 py-5">
        <p className="text-sm leading-relaxed text-slate-600">{info.description}</p>
        <p className="mt-2 text-xs text-slate-400">
          Recommended order: COMPANY → MARKETING → CONTENT → OUTREACH → SUPPORT
        </p>
      </div>

      <CustomizeSection
        templateSlug={template}
        templateHtml={data.contentHtml}
      />

      {/* Prev / Next */}
      <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6">
        <div>
          {prev && (
            <Link
              href={`/templates/${prev.slug}`}
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              ← {prev.name}
            </Link>
          )}
        </div>
        <Link
          href="/templates/demo"
          className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          See Pixola demo →
        </Link>
        <div>
          {next && (
            <Link
              href={`/templates/${next.slug}`}
              className="text-sm font-medium text-brand-600 hover:text-brand-700"
            >
              {next.name} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
