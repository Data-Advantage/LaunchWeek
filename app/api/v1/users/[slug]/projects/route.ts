import { NextResponse } from "next/server";
import { getUser, getUserProjects } from "@/lib/launchweek-data";

export const revalidate = 900;

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = getUser(slug);
  if (!user) return NextResponse.json({ error: "user_not_found" }, { status: 404 });
  const projects = getUserProjects(slug);
  return NextResponse.json(
    { userSlug: slug, projects, count: projects.length },
    { headers: { "cache-control": "s-maxage=900, stale-while-revalidate=3600" } },
  );
}
