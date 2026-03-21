"use client";

import { useState } from "react";

interface TemplatePreviewProps {
  templateSlug: string;
  markdown: string;
  onRegenerateClick: () => void;
}

export function TemplatePreview({
  templateSlug,
  markdown,
  onRegenerateClick,
}: TemplatePreviewProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleDownload() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${templateSlug.toUpperCase()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-4">
      {/* Toast notification */}
      {copied && (
        <div className="fixed bottom-5 right-5 z-50 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-lg pointer-events-none">
          Copied to clipboard!
        </div>
      )}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">
          Generated {templateSlug.toUpperCase()}.md
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={onRegenerateClick}
            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            ← Edit form
          </button>
          <button
            onClick={handleCopy}
            className="rounded-md border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="rounded-md bg-orange-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-orange-700 transition-colors"
          >
            Download .md
          </button>
        </div>
      </div>

      <pre className="overflow-auto rounded-lg bg-gray-50 border border-gray-200 p-4 text-xs leading-relaxed text-gray-800 whitespace-pre-wrap font-mono max-h-[600px]">
        {markdown}
      </pre>

      <p className="text-xs text-gray-400">
        Review and edit before deploying to your AI agents. Save this file as{" "}
        <code className="rounded bg-gray-100 px-1 py-0.5 font-mono">
          {templateSlug.toUpperCase()}.md
        </code>{" "}
        in your agent company repo.
      </p>
    </div>
  );
}
