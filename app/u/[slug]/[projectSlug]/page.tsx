import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getUser, getAllProjects } from "@/lib/launchweek-data";
import { LaunchWeekSubnav, StageBadge, StageTrack } from "@/components/launchweek-ui";
import { STAGES } from "@/lib/launchweek-types";
import { cn } from "@/lib/utils";

export const revalidate = 900;

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.userSlug, projectSlug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; projectSlug: string }>;
}) {
  const { slug, projectSlug } = await params;
  const project = getProject(slug, projectSlug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.name} — ${project.tagline}`, description: project.tagline };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; projectSlug: string }>;
}) {
  const { slug, projectSlug } = await params;
  const project = getProject(slug, projectSlug);
  const user = getUser(slug);
  if (!project || !user) notFound();

  return (
    <>
      <LaunchWeekSubnav />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link
            href={`/u/${user.slug}`}
            className="font-medium hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            @{user.slug}
          </Link>
          <span>/</span>
          <span className="font-mono text-slate-700">{project.slug}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-start justify-between gap-6">
          <div className="min-w-0 flex-1">
            <h1 className="font-heading text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-slate-900 text-balance">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-slate-600 text-pretty">{project.tagline}</p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center rounded-lg border border-brand-200 bg-brand-50 px-4 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                {project.url} ↗
              </a>
            )}
          </div>
          <StageBadge stage={project.stage} />
        </div>

        <div className="mt-8 rounded-xl border border-l-[3px] border-slate-200 border-l-brand-500 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.015em] text-slate-900">
              Stage progression
            </h2>
            <span className="text-xs text-slate-500">
              Currently in <strong>{STAGES[project.stage].name}</strong>, owned by{" "}
              {project.ownerAgent ?? "an unassigned agent"}
            </span>
          </div>
          <div className="mt-4">
            <StageTrack project={project} />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[10px] text-slate-400 tabular-nums">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => (
              <span key={s}>{String(s).padStart(2, "0")}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.015em] text-slate-900">Metadata</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Variant</dt>
                <dd className="font-medium text-slate-900">{project.variant}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Owner agent</dt>
                <dd className="font-medium text-slate-900">{project.ownerAgent ?? "Not assigned"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Domain</dt>
                <dd className={cn(project.domain ? "font-mono text-slate-900" : "text-slate-500")}>
                  {project.domain ?? "No domain yet"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Entered stage</dt>
                <dd className="whitespace-nowrap text-slate-900 tabular-nums">
                  {new Date(project.enteredStageAt).toLocaleDateString()}
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.015em] text-slate-900">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="rounded-md bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.productMdExcerpt && (
          <div className="mt-8 rounded-xl bg-slate-50 p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.015em] text-slate-900">
              PRODUCT.md excerpt
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 text-pretty">{project.productMdExcerpt}</p>
          </div>
        )}

        {project.launch && (
          <div className="mt-8 rounded-xl border-2 border-brand-200 bg-brand-50 p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.015em] text-brand-800">
              Launch summary
            </h2>
            <p className="mt-3 text-lg font-medium text-slate-900 text-pretty">{project.launch.headline}</p>
            <p className="mt-1 text-sm text-brand-800">Launched {project.launch.launchedOn ?? "date pending"}</p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {project.launch.metrics.map((m) => (
                <div key={m.label} className="rounded-lg bg-white p-3 shadow-sm">
                  <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-brand-700">{m.label}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <h2 className="font-heading text-2xl font-semibold tracking-[-0.015em] text-slate-900">Stage history</h2>
          <ol className="mt-4 space-y-3">
            {project.stageHistory.map((e, i) => (
              <li key={i} className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm sm:flex-row sm:items-start">
                <div className="font-mono text-xs text-slate-500 tabular-nums">{new Date(e.at).toISOString().slice(0, 10)}</div>
                <div className="flex-1">
                  <div className="text-sm text-slate-900">
                    Advanced from{" "}
                    <span className="font-semibold">
                      {e.fromStage === 0 ? "Start" : STAGES[e.fromStage].name}
                    </span>{" "}
                    to <span className="font-semibold">{STAGES[e.toStage].name}</span>
                  </div>
                  {e.notes && <p className="mt-1 text-xs text-slate-500">{e.notes}</p>}
                </div>
                <span className="text-xs font-medium text-brand-700">{e.owner}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
