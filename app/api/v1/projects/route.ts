import { NextResponse } from "next/server";
import { getAllProjects } from "@/lib/launchweek-data";
import type { Stage, Variant } from "@/lib/launchweek-types";

export const revalidate = 900;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const stage = url.searchParams.get("stage");
  const variant = url.searchParams.get("variant");
  const user = url.searchParams.get("user");
  let projects = getAllProjects();
  if (stage) projects = projects.filter((p) => String(p.stage) === stage);
  if (variant) projects = projects.filter((p) => p.variant === (variant as Variant));
  if (user) projects = projects.filter((p) => p.userSlug === user);
  return NextResponse.json(
    { projects, count: projects.length, filters: { stage: stage as Stage | null, variant, user } },
    { headers: { "cache-control": "s-maxage=900, stale-while-revalidate=3600" } },
  );
}
