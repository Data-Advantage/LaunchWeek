import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const CONTENT_DIR = path.join(process.cwd(), "content");

export const SECTIONS = [
  { slug: "position", dir: "1-position", label: "Day 1: Position", day: 1 },
  { slug: "content", dir: "2-content", label: "Day 2: Content", day: 2 },
  { slug: "distribute", dir: "3-distribute", label: "Day 3: Distribute", day: 3 },
  { slug: "convert", dir: "4-convert", label: "Day 4: Convert", day: 4 },
  { slug: "launch", dir: "5-launch", label: "Day 5: Launch", day: 5 },
];

export interface PageData {
  title: string;
  contentHtml: string;
}

async function mdToHtml(content: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  return result.toString();
}

export async function getHomePage(): Promise<PageData> {
  const filePath = path.join(CONTENT_DIR, "README.md");
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const contentHtml = await mdToHtml(content);
  return { title: "LaunchWeek.ai", contentHtml };
}

export async function getSectionPage(sectionSlug: string): Promise<PageData | null> {
  const section = SECTIONS.find((s) => s.slug === sectionSlug);
  if (!section) return null;
  const filePath = path.join(CONTENT_DIR, section.dir, "README.md");
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const contentHtml = await mdToHtml(content);
  return { title: section.label, contentHtml };
}

export async function getTopicPage(
  sectionSlug: string,
  topicSlug: string
): Promise<PageData | null> {
  const section = SECTIONS.find((s) => s.slug === sectionSlug);
  if (!section) return null;
  const filePath = path.join(CONTENT_DIR, section.dir, `${topicSlug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { content } = matter(raw);
  const contentHtml = await mdToHtml(content);
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : topicSlug;
  return { title, contentHtml };
}

export function getSectionTopics(sectionSlug: string): { slug: string; title: string }[] {
  const section = SECTIONS.find((s) => s.slug === sectionSlug);
  if (!section) return [];
  const dir = path.join(CONTENT_DIR, section.dir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const filePath = path.join(dir, f);
      const raw = fs.readFileSync(filePath, "utf8");
      const { content } = matter(raw);
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = titleMatch ? titleMatch[1].trim() : slug;
      return { slug, title };
    });
}
