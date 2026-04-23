import { NextResponse } from "next/server";
import { getProject } from "@/lib/launchweek-data";

export const revalidate = 900;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ userSlug: string; projectSlug: string }> },
) {
  const { userSlug, projectSlug } = await params;
  const project = getProject(userSlug, projectSlug);
  if (!project) return NextResponse.json({ error: "project_not_found" }, { status: 404 });
  return NextResponse.json(
    { project },
    { headers: { "cache-control": "s-maxage=900, stale-while-revalidate=3600" } },
  );
}
