import Link from "next/link";
import { notFound } from "next/navigation";
import { getUser, getUserProjects, getAllUsers } from "@/lib/launchweek-data";
import { LaunchWeekSubnav, ProjectCard } from "@/components/launchweek-ui";

export const revalidate = 900;

export function generateStaticParams() {
  return getAllUsers().map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = getUser(slug);
  if (!user) return { title: "User not found" };
  return {
    title: `${user.displayName} — pipeline on LaunchWeek`,
    description: user.tagline,
  };
}

export default async function UserPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const user = getUser(slug);
  if (!user) notFound();
  const projects = getUserProjects(slug);
  const launched = projects.filter((p) => p.stage === 9);
  const active = projects.filter((p) => p.stage < 9);

  return (
    <>
      <LaunchWeekSubnav />
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6 rounded-xl border border-l-[3px] border-slate-200 border-l-brand-500 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex size-16 items-center justify-center rounded-full bg-brand-500 font-heading text-2xl font-bold text-white">
            {user.displayName.slice(0, 2).toUpperCase()}
          </div>
          <div className="flex-1">
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-brand-600">@{user.slug}</p>
            <h1 className="mt-2 font-heading text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-slate-900 text-balance">
              {user.displayName}
            </h1>
            <p className="mt-3 max-w-3xl text-slate-600 text-pretty">{user.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
              {user.website && (
                <a
                  href={user.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-lg border border-slate-200 bg-white px-3 font-medium transition-colors hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  {user.website.replace(/^https?:\/\//, "")}
                </a>
              )}
              {user.github && (
                <a
                  href={`https://github.com/${user.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-lg border border-slate-200 bg-white px-3 font-medium transition-colors hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  GitHub: {user.github}
                </a>
              )}
              {user.twitter && (
                <a
                  href={`https://twitter.com/${user.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-lg border border-slate-200 bg-white px-3 font-medium transition-colors hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  @{user.twitter}
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start gap-1 sm:items-end sm:text-right">
            <div className="text-3xl font-bold text-slate-900 tabular-nums">{projects.length}</div>
            <div className="text-xs uppercase tracking-[0.08em] text-slate-500">Projects</div>
            <div className="mt-1 text-sm text-slate-500">
              {launched.length} launched · {active.length} active
            </div>
          </div>
        </div>

        {user.about && (
          <div className="mt-8 rounded-xl bg-slate-50 p-6 text-slate-700">
            <p className="leading-relaxed text-pretty">{user.about}</p>
          </div>
        )}

        {projects.length === 0 ? (
          <div className="mt-12 rounded-xl border border-dashed border-brand-300 bg-brand-50 p-6">
            <h2 className="font-heading text-2xl font-semibold tracking-[-0.015em] text-slate-900">
              No projects published yet
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-brand-800 text-pretty">
              When this founder connects a LaunchWeek pipeline, active work and launched products will appear here.
            </p>
          </div>
        ) : (
          <>
            <h2 className="mt-12 font-heading text-2xl font-semibold tracking-[-0.015em] text-slate-900">
              Active pipeline
            </h2>
            <p className="mt-2 text-sm text-slate-500">Stages 1-8. Click any tile for the full teardown.</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {active.length === 0 ? (
                <div className="rounded-xl border border-brand-200 bg-brand-50 p-6 text-sm text-brand-800">
                  No active projects right now. This pipeline is fully launched.
                </div>
              ) : (
                active.map((p) => <ProjectCard key={p.slug} project={p} userSlug={user.slug} />)
              )}
            </div>

            <h2 className="mt-12 font-heading text-2xl font-semibold tracking-[-0.015em] text-slate-900">Launched</h2>
            <p className="mt-2 text-sm text-slate-500">Stage 9: shipped and in market.</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {launched.length === 0 ? (
                <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-sm">
                  No launched products yet. Stage 9 launches will appear here.
                </div>
              ) : (
                launched.map((p) => <ProjectCard key={p.slug} project={p} userSlug={user.slug} />)
              )}
            </div>
          </>
        )}

        <div className="mt-16 rounded-xl bg-slate-900 p-6 text-sm text-slate-300 shadow-sm">
          <p>
            Want your own directory page like this?{" "}
            <Link
              href="/"
              className="inline-flex min-h-11 items-center font-semibold text-brand-300 hover:text-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Join the waitlist
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
