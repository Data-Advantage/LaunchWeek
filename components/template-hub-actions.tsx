"use client";

import { useState, useEffect } from "react";
import JSZip from "jszip";

const TEMPLATE_SLUGS = ["company", "marketing", "content", "outreach", "support"];

function getTemplateStorageKey(slug: string) {
  return `launchweek_${slug}_md`;
}

const README_CONTENT = `# My Company OS

This package contains your AI-generated Company OS — a set of markdown files that give your AI agents everything they need to execute autonomously.

## Files

- **COMPANY.md** — Master context file. Every AI agent reads this before every task.
- **MARKETING.md** — Marketing playbook: channels, formats, and distribution rules.
- **CONTENT.md** — Editorial playbook: keywords, templates, and quality standards.
- **OUTREACH.md** — Community outreach playbook: target communities and response frameworks.
- **SUPPORT.md** — Support playbook: approved answers, escalation rules, and churn signals.

## How to use

1. Add these files to your agent company repository (e.g., \`agents/company/\`).
2. Reference COMPANY.md in every agent's instructions using \`@COMPANY.md\`.
3. Reference the relevant playbook file per agent (e.g., @MARKETING.md for marketing agents).

Built with [LaunchWeek.ai](https://launchweek.ai) — the Company OS builder for AI-native teams.
`;

export function TemplateHubActions() {
  const [generatedSlugs, setGeneratedSlugs] = useState<string[]>([]);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const slugs = TEMPLATE_SLUGS.filter(
      (slug) => !!localStorage.getItem(getTemplateStorageKey(slug))
    );
    setGeneratedSlugs(slugs);
  }, []);

  if (generatedSlugs.length < 2) return null;

  async function handleDownloadAll() {
    setDownloading(true);
    try {
      const zip = new JSZip();
      for (const slug of generatedSlugs) {
        const content = localStorage.getItem(getTemplateStorageKey(slug));
        if (content) {
          zip.file(`${slug.toUpperCase()}.md`, content);
        }
      }
      zip.file("README.md", README_CONTENT);
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "company-os.zip";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="mb-8 rounded-lg border border-orange-200 bg-orange-50 px-5 py-4 flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-orange-900">
          {generatedSlugs.length} of 5 templates generated
        </p>
        <p className="text-xs text-orange-700 mt-0.5">
          {generatedSlugs.map((s) => s.toUpperCase() + ".md").join(", ")}
        </p>
      </div>
      <button
        onClick={handleDownloadAll}
        disabled={downloading}
        className="shrink-0 rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-700 disabled:opacity-60 transition-colors"
      >
        {downloading ? "Building…" : "Download All (.zip)"}
      </button>
    </div>
  );
}
