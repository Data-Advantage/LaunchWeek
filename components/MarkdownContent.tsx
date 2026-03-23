export default function MarkdownContent({ html }: { html: string }) {
  return (
    <div
      className="prose prose-slate max-w-none
        prose-headings:font-heading prose-headings:tracking-tight prose-headings:font-semibold
        prose-h1:text-3xl prose-h1:mb-6
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-3
        prose-h3:text-base prose-h3:mt-8
        prose-p:leading-relaxed prose-p:text-slate-600
        prose-a:text-brand-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
        prose-strong:text-slate-800 prose-strong:font-semibold
        prose-code:rounded prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:text-slate-700 prose-code:before:content-none prose-code:after:content-none
        prose-pre:rounded-lg prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:shadow-sm
        prose-li:text-slate-600 prose-li:leading-relaxed
        prose-blockquote:border-brand-300 prose-blockquote:text-slate-500 prose-blockquote:not-italic
        prose-table:text-sm prose-th:text-left prose-th:font-semibold prose-th:text-slate-700
        prose-hr:border-slate-200
        prose-img:rounded-lg prose-img:shadow-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
