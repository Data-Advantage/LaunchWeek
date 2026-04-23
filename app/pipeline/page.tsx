import Link from "next/link";
import { getPipelineSnapshot, getAllUsers } from "@/lib/launchweek-data";
import { STAGES } from "@/lib/launchweek-types";
import type { Stage } from "@/lib/launchweek-types";
import { ProjectCard } from "@/components/launchweek-ui";

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
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Live pipeline</p>
            <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900">
              {snapshot.totalProjects} projects shipping through the framework.
            </h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              A public board of every project across every user on LaunchWeek. Each tile updates as its owner agent
              advances a stage. Learn the framework on the{" "}
              <Link href="/framework" className="text-brand-600 underline-offset-4 hover:underline">
                Framework page
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-lg bg-slate-900 px-4 py-3 text-sm text-slate-100 sm:items-end">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Snapshot</span>
            <span>{new Date(snapshot.generatedAt).toUTCString()}</span>
            <span className="text-slate-400">
              {snapshot.totalUsers} user{snapshot.totalUsers === 1 ? "" : "s"} · {snapshot.totalProjects} projects
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {users.map((u) => (
            <Link
              key={u.slug}
              href={`/u/${u.slug}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 hover:border-brand-400 hover:text-brand-600"
            >
              @{u.slug}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STAGE_ORDER.map((s) => {
            const projects = byStage.get(s) ?? [];
            if (projects.length === 0) return null;
            return (
              <div key={s} className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between border-b border-slate-200 pb-2">
                  <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-700">
                    <span className="font-mono text-slate-400">{String(s).padStart(2, "0")}</span> {STAGES[s].name}
                  </h2>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
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
