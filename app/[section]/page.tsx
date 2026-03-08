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

  return (
    <div>
      <div className="mb-6">
        <Link href="/" className="text-sm text-orange-500 hover:text-orange-700">
          ← LaunchWeek
        </Link>
      </div>

      {topics.length > 0 && (
        <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
          {topics.map((t) => (
            <Link
              key={t.slug}
              href={`/${section}/${t.slug}`}
              className="block bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-orange-300 hover:bg-orange-50 transition-all group text-sm"
            >
              <span className="font-medium text-gray-900 group-hover:text-orange-700">
                {t.title}
              </span>
            </Link>
          ))}
        </nav>
      )}

      <MarkdownContent html={data.contentHtml} />
    </div>
  );
}
