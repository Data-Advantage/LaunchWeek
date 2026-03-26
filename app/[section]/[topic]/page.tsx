import { notFound } from "next/navigation";
import Link from "next/link";
import { getTopicPage, getSectionTopics, SECTIONS } from "@/lib/markdown";
import MarkdownContent from "@/components/MarkdownContent";

export async function generateStaticParams() {
  const params: { section: string; topic: string }[] = [];
  for (const s of SECTIONS) {
    const topics = getSectionTopics(s.slug);
    for (const t of topics) {
      params.push({ section: s.slug, topic: t.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string; topic: string }>;
}) {
  const { section, topic } = await params;
  const data = await getTopicPage(section, topic);
  if (!data) return {};
  return { title: `${data.title} — LaunchWeek.ai` };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ section: string; topic: string }>;
}) {
  const { section, topic } = await params;
  const data = await getTopicPage(section, topic);
  if (!data) notFound();

  const sectionInfo = SECTIONS.find((s) => s.slug === section);
  const allTopics = getSectionTopics(section);
  const currentIdx = allTopics.findIndex((t) => t.slug === topic);
  const prevTopic = currentIdx > 0 ? allTopics[currentIdx - 1] : null;
  const nextTopic =
    currentIdx < allTopics.length - 1 ? allTopics[currentIdx + 1] : null;

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
        <Link
          href={`/${section}`}
          className="text-slate-400 transition-colors hover:text-slate-600"
        >
          {sectionInfo?.label ?? section}
        </Link>
        <span className="text-slate-300">/</span>
        <span className="truncate font-medium text-slate-700">
          {data.title}
        </span>
      </nav>

      {/* Content */}
      <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-10">
        <MarkdownContent html={data.contentHtml} />
      </article>

      {/* Prev / Next nav */}
      {(prevTopic || nextTopic) && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {prevTopic ? (
            <Link
              href={`/${section}/${prevTopic.slug}`}
              className="card-hover group rounded-lg border border-slate-200 bg-white p-4 transition-colors hover:border-brand-300"
            >
              <span className="text-xs text-slate-400">← Previous</span>
              <span className="mt-1 block text-sm font-medium text-slate-700 group-hover:text-brand-700 transition-colors">
                {prevTopic.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextTopic && (
            <Link
              href={`/${section}/${nextTopic.slug}`}
              className="card-hover group rounded-lg border border-slate-200 bg-white p-4 text-right transition-colors hover:border-brand-300"
            >
              <span className="text-xs text-slate-400">Next →</span>
              <span className="mt-1 block text-sm font-medium text-slate-700 group-hover:text-brand-700 transition-colors">
                {nextTopic.title}
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
