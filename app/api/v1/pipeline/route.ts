import { NextResponse } from "next/server";
import { getPipelineSnapshot } from "@/lib/launchweek-data";

export const revalidate = 900;

export function GET() {
  const snapshot = getPipelineSnapshot();
  return NextResponse.json(snapshot, {
    headers: { "cache-control": "s-maxage=900, stale-while-revalidate=3600" },
  });
}
