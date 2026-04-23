import Link from "next/link";
import { getLaunched } from "@/lib/launchweek-data";
import { StageBadge } from "@/components/launchweek-ui";

export const revalidate = 900;

export const metadata = {
  title: "Gallery — launched products from AI-native founders",
  description: "Every product that shipped through the LaunchWeek framework, with stage timelines and launch metrics.",
};

export default function GalleryPage() {
  const projects = getLaunched();
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Gallery</p>
        <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-slate-900">
          {projects.length} launched products. All shipped through the framework.
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Each tile is a real launch, with stage timeline and metrics. Click any tile to see the full PRODUCT.md
          teardown.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.userSlug + "/" + p.slug}
              href={`/u/${p.userSlug}/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-slate-900 group-hover:text-brand-600">
                      {p.name}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">{p.domain}</p>
                  </div>
                  <StageBadge stage={p.stage} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">{p.tagline}</p>
                {p.launch && (
                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-xs">
                    {p.launch.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-mono uppercase tracking-wider text-slate-400">{m.label}</div>
                        <div className="mt-0.5 font-semibold text-slate-900">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-3 text-xs text-slate-500">
                Launched {p.launch?.launchedOn ?? "—"} · by <span className="font-medium">@{p.userSlug}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
