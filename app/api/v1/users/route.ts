import { NextResponse } from "next/server";
import { getAllUsers } from "@/lib/launchweek-data";

export const revalidate = 900;

export function GET() {
  const users = getAllUsers();
  return NextResponse.json(
    { users, count: users.length },
    { headers: { "cache-control": "s-maxage=900, stale-while-revalidate=3600" } },
  );
}
