import { NextResponse } from "next/server";
import { getFrameworkDoc } from "@/lib/launchweek-data";

export const revalidate = 3600;

export function GET() {
  return NextResponse.json(getFrameworkDoc(), {
    headers: { "cache-control": "s-maxage=3600, stale-while-revalidate=86400" },
  });
}
