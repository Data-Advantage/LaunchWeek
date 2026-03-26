import { notFound } from "next/navigation";
import Link from "next/link";
import { getSectionPage, getSectionTopics, SECTIONS } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export async function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = await getSectionPage(section);
  if (!data) return {};
  return { title: `${data.title} — LaunchWeek.ai` };
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = await getSectionPage(section);
  if (!data) notFound();

  const topics = getSectionTopics(section);
  const sectionInfo = SECTIONS.find((s) => s.slug === section);

  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm">
        <Link
          href="/"
          className="text-slate-400 transition-colors hover:text-slate-600"
        >
          LaunchWeek
        </Link>
        <span className="text-slate-300">/</span>
        <span className="font-medium text-slate-700">
          {sectionInfo?.label ?? section}
        </span>
      </nav>

      {/* Section header */}
      <div className="mb-10">
        {sectionInfo?.day !== null && sectionInfo?.day !== undefined && (
          <span className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Day {sectionInfo.day}
          </span>
        )}
        <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {sectionInfo?.label.replace(/^Day \d+: /, "") ?? section}
        </h1>
      </div>

      {/* Topic grid */}
      {topics.length > 0 && (
        <nav className="mb-12 grid gap-2 sm:grid-cols-2">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/${section}/${t.slug}`}
              className="card-hover group flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 transition-colors hover:border-brand-300"
            >
              <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-brand-700 transition-colors">
                {t.title}
              </span>
            </Link>
          ))}
        </nav>
      )}

      {/* Section content */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-10">
        <MarkdownContent html={data.contentHtml} />
      </div>
    </div>
  );
}
