"use client";

import { useState } from "react";

export interface TemplateFormField {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "textarea";
  required?: boolean;
}

const FORM_FIELDS: Record<string, TemplateFormField[]> = {
  company: [
    {
      id: "companyName",
      label: "Company Name",
      placeholder: "e.g. Pixola",
      type: "text",
      required: true,
    },
    {
      id: "productName",
      label: "Product Name",
      placeholder: "e.g. Pixola — AI image generator for social media",
      type: "text",
      required: true,
    },
    {
      id: "productDescription",
      label: "What does your product do?",
      placeholder:
        "2–3 sentences: the core workflow, what the user does, and the result they get.",
      type: "textarea",
      required: true,
    },
    {
      id: "icp",
      label: "Ideal Customer",
      placeholder:
        "Who is your primary user? Their role, company size, and the problem they have today.",
      type: "textarea",
      required: true,
    },
    {
      id: "keyFeatures",
      label: "Key Features",
      placeholder:
        "List your 3–5 main features and what makes each one valuable.",
      type: "textarea",
      required: true,
    },
    {
      id: "pricing",
      label: "Pricing",
      placeholder:
        "Your pricing tiers, prices, and what each includes. E.g. Free: 10 exports/mo, Pro $19/mo: unlimited.",
      type: "textarea",
    },
    {
      id: "competitors",
      label: "Main Competitors",
      placeholder:
        "Who are your 2–3 main competitors and how do you differ from each?",
      type: "textarea",
    },
    {
      id: "brandVoice",
      label: "Brand Voice",
      placeholder:
        "3–5 adjectives that describe your tone. E.g. Direct, opinionated, founder-friendly, no-fluff.",
      type: "text",
    },
  ],
  marketing: [
    {
      id: "primaryChannels",
      label: "Primary Marketing Channels",
      placeholder:
        "Where do you focus? E.g. Twitter/X, Reddit, Product Hunt, email newsletter.",
      type: "textarea",
      required: true,
    },
    {
      id: "contentTypes",
      label: "Content Types You Create",
      placeholder:
        "E.g. short-form social posts, how-to threads, demo videos, comparison posts.",
      type: "textarea",
      required: true,
    },
    {
      id: "targetAudience",
      label: "Target Audience for Marketing",
      placeholder: "E.g. solo SaaS founders, bootstrapped B2B teams, indie hackers.",
      type: "text",
      required: true,
    },
    {
      id: "keyMessages",
      label: "Key Messages / Differentiators",
      placeholder:
        "What 2–3 things do you want every piece of marketing to communicate?",
      type: "textarea",
    },
  ],
  content: [
    {
      id: "targetKeywords",
      label: "Target Keywords / Topics",
      placeholder:
        "List your primary SEO keywords or topics you want to rank for.",
      type: "textarea",
      required: true,
    },
    {
      id: "blogTopics",
      label: "Blog Post Topics",
      placeholder:
        "5–10 post ideas you want to write. E.g. 'How we got to $1k MRR', 'Best tools for indie hackers'.",
      type: "textarea",
      required: true,
    },
    {
      id: "publishingFrequency",
      label: "Publishing Frequency",
      placeholder: "E.g. 2 posts/week, 1 long-form post/month.",
      type: "text",
    },
    {
      id: "contentGoals",
      label: "Content Goals",
      placeholder:
        "What should content achieve? E.g. SEO traffic, email signups, community trust.",
      type: "textarea",
    },
  ],
  outreach: [
    {
      id: "targetCommunities",
      label: "Target Communities",
      placeholder:
        "Where does your ICP hang out? E.g. r/SaaS, Indie Hackers, specific Discord servers.",
      type: "textarea",
      required: true,
    },
    {
      id: "triggerTopics",
      label: "Trigger Topics / Keywords",
      placeholder:
        "What questions or discussions signal someone needs your product?",
      type: "textarea",
      required: true,
    },
    {
      id: "outreachTone",
      label: "Outreach Tone",
      placeholder:
        "How should your outreach sound? E.g. helpful peer, founder sharing learnings, no pitch.",
      type: "text",
    },
  ],
  support: [
    {
      id: "commonQuestions",
      label: "Top Customer Questions",
      placeholder:
        "List 5–10 questions customers frequently ask about your product.",
      type: "textarea",
      required: true,
    },
    {
      id: "refundPolicy",
      label: "Refund Policy",
      placeholder: "E.g. 14-day money back, no questions asked. Or pro-rated refunds.",
      type: "textarea",
      required: true,
    },
    {
      id: "escalationContact",
      label: "Escalation Contact",
      placeholder: "Who handles escalations? E.g. founder email, support@yourcompany.com.",
      type: "text",
    },
  ],
};

interface TemplateFormProps {
  templateSlug: string;
  companyContext: string | null;
  onGenerate: (formData: Record<string, string>) => void;
  isLoading: boolean;
}

export function TemplateForm({
  templateSlug,
  companyContext,
  onGenerate,
  isLoading,
}: TemplateFormProps) {
  const fields = FORM_FIELDS[templateSlug] ?? [];
  const isCompany = templateSlug === "company";
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.id, ""]))
  );

  function handleChange(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onGenerate(values);
  }

  const hasRequired = fields
    .filter((f) => f.required)
    .every((f) => values[f.id]?.trim());

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!isCompany && (
        <div className="rounded-lg border border-orange-100 bg-orange-50 px-4 py-3">
          {companyContext ? (
            <p className="text-sm text-orange-700">
              <span className="font-medium">COMPANY.md context loaded.</span>{" "}
              Fill in the fields below and Claude will combine them to generate
              your {templateSlug.toUpperCase()}.md.
            </p>
          ) : (
            <p className="text-sm text-orange-700">
              <span className="font-medium">No COMPANY.md found.</span>{" "}
              Generate your{" "}
              <a
                href="/templates/company"
                className="underline hover:text-orange-900"
              >
                COMPANY.md first
              </a>{" "}
              for best results — it provides context for all other templates.
            </p>
          )}
        </div>
      )}

      {fields.map((field) => (
        <div key={field.id} className="space-y-1.5">
          <label
            htmlFor={field.id}
            className="block text-sm font-medium text-gray-700"
          >
            {field.label}
            {field.required && (
              <span className="ml-1 text-orange-500">*</span>
            )}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              value={values[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder={field.placeholder}
              rows={3}
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 resize-y"
            />
          ) : (
            <input
              id={field.id}
              type="text"
              value={values[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder={field.placeholder}
              className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={!hasRequired || isLoading}
        className="w-full rounded-md bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Generating…
          </span>
        ) : (
          "Generate with AI"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Powered by Claude Haiku · 10 generations per hour
      </p>
    </form>
  );
}
