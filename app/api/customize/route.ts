import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const TEMPLATES_DIR = path.join(process.cwd(), "content", "templates");

const TEMPLATE_FILENAMES: Record<string, string> = {
  company: "COMPANY.md",
  marketing: "MARKETING.md",
  content: "CONTENT.md",
  outreach: "OUTREACH.md",
  support: "SUPPORT.md",
};

// In-memory rate limiter: 10 requests per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Rate limit exceeded. Please try again in an hour." },
      { status: 429 }
    );
  }

  let body: { template: string; formData: Record<string, string>; companyContext?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { template, formData, companyContext } = body;

  if (!template || !formData || !TEMPLATE_FILENAMES[template]) {
    return NextResponse.json(
      { error: "Missing or invalid template." },
      { status: 400 }
    );
  }

  const templateFile = path.join(TEMPLATES_DIR, TEMPLATE_FILENAMES[template]);
  if (!fs.existsSync(templateFile)) {
    return NextResponse.json(
      { error: "Template file not found." },
      { status: 404 }
    );
  }

  const templateContent = fs.readFileSync(templateFile, "utf8");
  const isCompany = template === "company";

  const systemPrompt = `You are an AI assistant that fills in markdown template files for SaaS companies.
Your job is to replace all [placeholder] values in the template with specific, actionable content based on the information provided.

Rules:
- Replace EVERY [placeholder] with real, specific content
- Match the template's tone and structure exactly
- Be specific and concrete — avoid vague generalities
- Keep all headers, formatting, tables, and structure intact
- If information wasn't provided for a placeholder, make a reasonable assumption consistent with the other details
- Return ONLY the filled-in markdown, no commentary or preamble`;

  const formDataLines = Object.entries(formData)
    .filter(([, v]) => v.trim())
    .map(([k, v]) => `**${k}:** ${v}`)
    .join("\n");

  const userMessage = isCompany
    ? `Fill in this COMPANY.md template using the company information below.

## Company Information:
${formDataLines}

## Template to fill in:
${templateContent}`
    : `Fill in this ${template.toUpperCase()}.md template using the company context and template-specific information below.

## Company Context (from COMPANY.md):
${companyContext?.trim() || "No company context provided — make reasonable assumptions."}

## Template-Specific Information:
${formDataLines}

## Template to fill in:
${templateContent}`;

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI service not configured. ANTHROPIC_API_KEY is missing." },
      { status: 503 }
    );
  }

  const client = new Anthropic({ apiKey });

  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 4096,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });

  const content = message.content[0];
  if (content.type !== "text") {
    return NextResponse.json(
      { error: "Unexpected response from AI." },
      { status: 500 }
    );
  }

  return NextResponse.json({ result: content.text });
}
