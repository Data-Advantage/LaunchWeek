export default function MarkdownContent({ html }: { html: string }) {
  return (
    <div
      className="prose prose-gray max-w-none prose-headings:font-semibold prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-gray-100"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
