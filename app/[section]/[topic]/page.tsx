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

  return (
    <div>
      <div className="mb-6 flex items-center gap-2 text-sm">
        <Link href="/" className="text-orange-500 hover:text-orange-700">
          LaunchWeek
        </Link>
        <span className="text-gray-300">›</span>
        <Link href={`/${section}`} className="text-orange-500 hover:text-orange-700">
          {sectionInfo?.label ?? section}
        </Link>
      </div>

      <MarkdownContent html={data.contentHtml} />
    </div>
  );
}
