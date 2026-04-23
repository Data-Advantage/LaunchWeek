import Link from "next/link";
import { notFound } from "next/navigation";
import { getUser, getUserProjects, getAllUsers } from "@/lib/launchweek-data";
import { ProjectCard } from "@/components/launchweek-ui";

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
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-slate-200 bg-white p-8 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 font-heading text-2xl font-bold text-white">
            {user.displayName.slice(0, 2).toUpperCase()}
          </div>
          <div className="flex-1">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">@{user.slug}</p>
            <h1 className="mt-1 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {user.displayName}
            </h1>
            <p className="mt-2 text-slate-600">{user.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
              {user.website && (
                <a href={user.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600">
                  🌐 {user.website.replace(/^https?:\/\//, "")}
                </a>
              )}
              {user.github && (
                <a
                  href={`https://github.com/${user.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600"
                >
                  GitHub: {user.github}
                </a>
              )}
              {user.twitter && (
                <a
                  href={`https://twitter.com/${user.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-600"
                >
                  @{user.twitter}
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <div className="text-3xl font-bold text-slate-900">{projects.length}</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">Projects</div>
            <div className="mt-1 text-sm text-slate-500">
              {launched.length} launched · {active.length} active
            </div>
          </div>
        </div>

        {user.about && (
          <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-slate-700">
            <p className="leading-relaxed">{user.about}</p>
          </div>
        )}

        <h2 className="mt-12 font-heading text-2xl font-bold text-slate-900">Active pipeline</h2>
        <p className="mt-1 text-sm text-slate-500">Stages 1–8. Click any tile for full teardown.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {active.length === 0 ? (
            <p className="text-slate-500">No active projects — everything is launched. 🚀</p>
          ) : (
            active.map((p) => <ProjectCard key={p.slug} project={p} userSlug={user.slug} />)
          )}
        </div>

        <h2 className="mt-12 font-heading text-2xl font-bold text-slate-900">Launched</h2>
        <p className="mt-1 text-sm text-slate-500">Stage 9 — shipped and in market.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {launched.length === 0 ? (
            <p className="text-slate-500">Nothing launched yet.</p>
          ) : (
            launched.map((p) => <ProjectCard key={p.slug} project={p} userSlug={user.slug} />)
          )}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-900 p-6 text-sm text-slate-300">
          <p>
            Want your own directory page like this?{" "}
            <Link href="/" className="text-brand-400 hover:text-brand-300">
              Join the waitlist →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
