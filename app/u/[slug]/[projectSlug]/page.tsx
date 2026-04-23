import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getUser, getAllProjects } from "@/lib/launchweek-data";
import { StageBadge, StageTrack } from "@/components/launchweek-ui";
import { STAGES } from "@/lib/launchweek-types";

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
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Link href={`/u/${user.slug}`} className="hover:text-brand-600">
            @{user.slug}
          </Link>
          <span>/</span>
          <span className="font-mono text-slate-700">{project.slug}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-slate-900">{project.name}</h1>
            <p className="mt-2 text-lg text-slate-600">{project.tagline}</p>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-brand-600 hover:text-brand-700"
              >
                {project.url} ↗
              </a>
            )}
          </div>
          <StageBadge stage={project.stage} />
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-baseline justify-between">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-700">
              Stage progression
            </h2>
            <span className="text-xs text-slate-500">
              Currently in <strong>{STAGES[project.stage].name}</strong>, owned by {project.ownerAgent ?? "—"}
            </span>
          </div>
          <div className="mt-4">
            <StageTrack project={project} />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[10px] text-slate-400">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => (
              <span key={s}>{String(s).padStart(2, "0")}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-700">Metadata</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Variant</dt>
                <dd className="font-medium text-slate-900">{project.variant}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Owner agent</dt>
                <dd className="font-medium text-slate-900">{project.ownerAgent ?? "—"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Domain</dt>
                <dd className="font-mono text-slate-900">{project.domain ?? "—"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Entered stage</dt>
                <dd className="text-slate-900">{new Date(project.enteredStageAt).toLocaleDateString()}</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-700">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.productMdExcerpt && (
          <div className="mt-8 rounded-2xl bg-slate-50 p-6">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-700">
              PRODUCT.md excerpt
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{project.productMdExcerpt}</p>
          </div>
        )}

        {project.launch && (
          <div className="mt-8 rounded-2xl border-2 border-brand-200 bg-brand-50 p-6">
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-700">
              Launch summary
            </h2>
            <p className="mt-2 text-lg font-medium text-slate-900">{project.launch.headline}</p>
            <p className="mt-1 text-sm text-slate-600">Launched {project.launch.launchedOn}</p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {project.launch.metrics.map((m) => (
                <div key={m.label} className="rounded-lg bg-white p-3">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">{m.label}</div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-700">Stage history</h2>
          <ol className="mt-4 space-y-3">
            {project.stageHistory.map((e, i) => (
              <li key={i} className="flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4">
                <div className="font-mono text-xs text-slate-500">{new Date(e.at).toISOString().slice(0, 10)}</div>
                <div className="flex-1">
                  <div className="text-sm text-slate-900">
                    Advanced from{" "}
                    <span className="font-semibold">
                      {e.fromStage === 0 ? "—" : STAGES[e.fromStage].name}
                    </span>{" "}
                    to <span className="font-semibold">{STAGES[e.toStage].name}</span>
                  </div>
                  {e.notes && <p className="mt-1 text-xs text-slate-500">{e.notes}</p>}
                </div>
                <span className="text-xs font-medium text-slate-500">{e.owner}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
