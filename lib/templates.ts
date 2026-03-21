import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const TEMPLATES_DIR = path.join(process.cwd(), "content", "templates");
const DEMO_DIR = path.join(process.cwd(), "demo-agent-company");

export interface TemplateInfo {
  slug: string;
  filename: string;
  name: string;
  description: string;
  keySections: string[];
}

export interface TemplatePageData {
  title: string;
  contentHtml: string;
}

export const TEMPLATES: TemplateInfo[] = [
  {
    slug: "company",
    filename: "COMPANY.md",
    name: "COMPANY.md",
    description:
      "Master context file. Every AI agent reads this before every task — mission, product, ICP, brand voice, and hard limits.",
    keySections: [
      "Mission & Product",
      "Ideal Customer Profile",
      "Pricing",
      "Brand Voice",
      "Hard Limits",
    ],
  },
  {
    slug: "marketing",
    filename: "MARKETING.md",
    name: "MARKETING.md",
    description:
      "Marketing playbook. Channels, content formats, distribution rules, and tone guidelines for every platform.",
    keySections: [
      "Channel Strategy",
      "Content Formats",
      "Distribution Rules",
      "Tone Per Channel",
      "Hard Limits",
    ],
  },
  {
    slug: "content",
    filename: "CONTENT.md",
    name: "CONTENT.md",
    description:
      "Editorial playbook. Target keywords, blog templates, content calendar, SEO rules, and quality standards.",
    keySections: [
      "Target Keywords",
      "Blog Post Template",
      "Content Calendar",
      "SEO Rules",
      "Quality Bar",
    ],
  },
  {
    slug: "outreach",
    filename: "OUTREACH.md",
    name: "OUTREACH.md",
    description:
      "Community outreach playbook. Target communities, trigger keywords, opportunity scoring, and response frameworks.",
    keySections: [
      "Target Communities",
      "Trigger Keywords",
      "Opportunity Scoring",
      "Response Framework",
      "Follow-up Rules",
    ],
  },
  {
    slug: "support",
    filename: "SUPPORT.md",
    name: "SUPPORT.md",
    description:
      "Support playbook. Approved answers, escalation rules, refund policy, tone guidelines, and churn signals.",
    keySections: [
      "Top 10 Answers",
      "Escalation Rules",
      "Refund Policy",
      "Tone Guidelines",
      "Churn Signals",
    ],
  },
];

async function mdToHtml(content: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  return result.toString();
}

export async function getTemplatePage(
  slug: string
): Promise<TemplatePageData | null> {
  const template = TEMPLATES.find((t) => t.slug === slug);
  if (!template) return null;
  const filePath = path.join(TEMPLATES_DIR, template.filename);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const contentHtml = await mdToHtml(content);
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : template.name;
  return { title, contentHtml };
}

export async function getDemoPage(
  slug: string
): Promise<TemplatePageData | null> {
  const template = TEMPLATES.find((t) => t.slug === slug);
  if (!template) return null;
  const filePath = path.join(DEMO_DIR, template.filename);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const contentHtml = await mdToHtml(content);
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : template.name;
  return { title, contentHtml };
}

export async function getAllDemoPages(): Promise<
  { slug: string; name: string; title: string; contentHtml: string }[]
> {
  const pages = [];
  for (const template of TEMPLATES) {
    const filePath = path.join(DEMO_DIR, template.filename);
    if (!fs.existsSync(filePath)) continue;
    const raw = fs.readFileSync(filePath, "utf8");
    const { content } = matter(raw);
    const contentHtml = await mdToHtml(content);
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : template.name;
    pages.push({
      slug: template.slug,
      name: template.name,
      title,
      contentHtml,
    });
  }
  return pages;
}
