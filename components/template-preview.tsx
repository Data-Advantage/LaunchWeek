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
      {copied && (
        <div className="fixed bottom-5 right-5 z-50 pointer-events-none rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background shadow-lg">
          Copied to clipboard!
        </div>
      )}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">
          Generated {templateSlug.toUpperCase()}.md
        </h3>
        <div className="flex items-center gap-2">
          <button
            onClick={onRegenerateClick}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
          >
            ← Edit form
          </button>
          <button
            onClick={handleCopy}
            className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted"
          >
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="rounded-md bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Download .md
          </button>
        </div>
      </div>

      <pre className="max-h-[600px] overflow-auto whitespace-pre-wrap rounded-lg border border-border bg-muted p-4 font-mono text-xs leading-relaxed text-foreground">
        {markdown}
      </pre>

      <p className="text-xs text-muted-foreground">
        Review and edit before deploying to your AI agents. Save this file as{" "}
        <code className="rounded bg-muted px-1 py-0.5 font-mono">
          {templateSlug.toUpperCase()}.md
        </code>{" "}
        in your agent company repo.
      </p>
    </div>
  );
}
