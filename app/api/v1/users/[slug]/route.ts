import { NextResponse } from "next/server";
import { getUser, getUserProjects } from "@/lib/launchweek-data";

export const revalidate = 900;

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = getUser(slug);
  if (!user) return NextResponse.json({ error: "user_not_found" }, { status: 404 });
  const projects = getUserProjects(slug);
  const launched = projects.filter((p) => p.stage === 9).length;
  const active = projects.length - launched;
  return NextResponse.json(
    {
      user,
      stats: { totalProjects: projects.length, launched, active },
    },
    { headers: { "cache-control": "s-maxage=900, stale-while-revalidate=3600" } },
  );
}
