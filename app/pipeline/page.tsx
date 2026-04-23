import Link from "next/link";
import { getPipelineSnapshot, getAllUsers } from "@/lib/launchweek-data";
import { STAGES } from "@/lib/launchweek-types";
import type { Stage } from "@/lib/launchweek-types";
import { LaunchWeekSubnav, ProjectCard } from "@/components/launchweek-ui";

export const revalidate = 900;

export const metadata = {
  title: "Live pipeline — every project, every stage, every user",
  description: "Public pipeline board for AI-native founders shipping SaaS. Live status from Data Advantage and beyond.",
};

const STAGE_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9] as Stage[];

export default function PipelinePage() {
  const snapshot = getPipelineSnapshot();
  const users = getAllUsers();
  const byStage = new Map<Stage, typeof snapshot.projects>();
  for (const s of STAGE_ORDER) byStage.set(s, []);
  for (const p of snapshot.projects) byStage.get(p.stage)!.push(p);

  return (
    <>
      <LaunchWeekSubnav />
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-600">Live pipeline</p>
            <h1 className="mt-2 max-w-3xl font-heading text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-slate-900 text-balance">
              {snapshot.totalProjects} projects shipping through the framework.
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600 text-pretty">
              A public board of every project across every user on LaunchWeek. Each tile updates as its owner agent
              advances a stage. Learn the framework on the{" "}
              <Link href="/framework" className="font-medium text-brand-600 underline-offset-4 hover:underline">
                Framework page
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-lg bg-slate-900 px-4 py-3 text-sm text-slate-100 shadow-sm sm:items-end">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-brand-300">Snapshot</span>
            <span className="tabular-nums">{new Date(snapshot.generatedAt).toUTCString()}</span>
            <span className="text-slate-400">
              {snapshot.totalUsers} user{snapshot.totalUsers === 1 ? "" : "s"} · {snapshot.totalProjects} projects
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {users.map((u) => (
            <Link
              key={u.slug}
              href={`/u/${u.slug}`}
              className="inline-flex min-h-11 items-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              @{u.slug}
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {STAGE_ORDER.map((s) => {
            const projects = byStage.get(s) ?? [];
            if (projects.length === 0) return null;
            return (
              <div key={s} className="flex flex-col gap-4">
                <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                  <h2 className="font-heading text-xl font-semibold tracking-[-0.01em] text-slate-900">
                    <span className="mr-2 font-mono text-sm font-semibold text-brand-600 tabular-nums">
                      {String(s).padStart(2, "0")}
                    </span>
                    {STAGES[s].name}
                  </h2>
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 tabular-nums">
                    {projects.length}
                  </span>
                </div>
                {projects.map((p) => (
                  <ProjectCard key={p.userSlug + "/" + p.slug} project={p} userSlug={p.userSlug} />
                ))}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
