import { NextResponse } from "next/server";
import { getLaunched } from "@/lib/launchweek-data";

export const revalidate = 900;

export function GET() {
  const projects = getLaunched();
  return NextResponse.json(
    { projects, count: projects.length },
    { headers: { "cache-control": "s-maxage=900, stale-while-revalidate=3600" } },
  );
}
