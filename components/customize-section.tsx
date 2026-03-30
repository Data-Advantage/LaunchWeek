"use client";

import { useState, useEffect } from "react";
import { track } from "@vercel/analytics";
import Link from "next/link";
import { TemplateForm } from "./template-form";
import { TemplatePreview } from "./template-preview";
import MarkdownContent from "./MarkdownContent";

const COMPANY_STORAGE_KEY = "launchweek_company_md";

function getTemplateStorageKey(slug: string) {
  return `launchweek_${slug}_md`;
}

type TabId = "template" | "customize";
type GenerateState = "idle" | "loading" | "done" | "error";

interface CustomizeSectionProps {
  templateSlug: string;
  templateHtml: string;
}

export function CustomizeSection({
  templateSlug,
  templateHtml,
}: CustomizeSectionProps) {
  const [activeTab, setActiveTab] = useState<TabId>("template");
  const [generateState, setGenerateState] = useState<GenerateState>("idle");
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [companyContext, setCompanyContext] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(COMPANY_STORAGE_KEY);
    if (stored) setCompanyContext(stored);
  }, []);

  async function handleGenerate(formData: Record<string, string>) {
    setGenerateState("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/customize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          template: templateSlug,
          formData,
          companyContext: templateSlug !== "company" ? companyContext : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setGenerateState("error");
        track("template_generation_error", {
          template: templateSlug,
          status: res.status,
        });
        return;
      }

      setGeneratedMarkdown(data.result);
      setGenerateState("done");

      localStorage.setItem(getTemplateStorageKey(templateSlug), data.result);
      if (templateSlug === "company") {
        localStorage.setItem(COMPANY_STORAGE_KEY, data.result);
        setCompanyContext(data.result);
      }

      track("template_generated", { template: templateSlug, success: true });
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setGenerateState("error");
      track("template_generation_error", {
        template: templateSlug,
        status: "network",
      });
    }
  }

  function handleReset() {
    setGenerateState("idle");
    setGeneratedMarkdown(null);
    setErrorMessage(null);
  }

  return (
    <div>
      {/* Tabs */}
      <div className="mb-6 flex border-b border-border">
        {(["template", "customize"] as TabId[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`-mb-px border-b-2 px-5 py-2.5 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "border-brand-500 text-brand-600"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab === "template" ? "Template" : "Customize with AI"}
          </button>
        ))}
      </div>

      {activeTab === "template" && (
        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <MarkdownContent html={templateHtml} />
        </div>
      )}

      {activeTab === "customize" && (
        <div className="max-w-2xl">
          {templateSlug !== "company" && companyContext === null && generateState === "idle" && (
            <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">Tip:</span> Start with{" "}
                <Link href="/templates/company" className="underline hover:text-amber-900">
                  COMPANY.md
                </Link>{" "}
                first — the AI uses it to personalize all other templates with your company&apos;s voice and context.
              </p>
            </div>
          )}
          {generateState === "done" && generatedMarkdown ? (
            <TemplatePreview
              templateSlug={templateSlug}
              markdown={generatedMarkdown}
              onRegenerateClick={handleReset}
            />
          ) : (
            <>
              {generateState === "error" && errorMessage && (
                <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              )}
              <TemplateForm
                templateSlug={templateSlug}
                companyContext={companyContext}
                onGenerate={handleGenerate}
                isLoading={generateState === "loading"}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}
