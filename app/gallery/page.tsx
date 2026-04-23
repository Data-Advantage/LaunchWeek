import Link from "next/link";
import { getLaunched } from "@/lib/launchweek-data";
import { LaunchWeekSubnav, StageBadge } from "@/components/launchweek-ui";

export const revalidate = 900;

export const metadata = {
  title: "Gallery — launched products from AI-native founders",
  description: "Every product that shipped through the LaunchWeek framework, with stage timelines and launch metrics.",
};

export default function GalleryPage() {
  const projects = getLaunched();
  return (
    <>
      <LaunchWeekSubnav />
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-600">Gallery</p>
        <h1 className="mt-2 max-w-3xl font-heading text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-slate-900 text-balance">
          {projects.length} launched products. All shipped through the framework.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 text-pretty">
          Each tile is a real launch, with stage timeline and metrics. Click any tile to see the full PRODUCT.md
          teardown.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.userSlug + "/" + p.slug}
              href={`/u/${p.userSlug}/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-l-[3px] border-slate-200 border-l-brand-500 bg-white shadow-sm transition-colors hover:border-brand-300 hover:border-l-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <div className="flex-1 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="font-heading text-xl font-semibold tracking-[-0.01em] text-slate-900 transition-colors group-hover:text-brand-600">
                      {p.name}
                    </h2>
                    <p className="mt-2 font-mono text-sm text-slate-500">{p.domain ?? "No domain yet"}</p>
                  </div>
                  <StageBadge stage={p.stage} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 text-pretty">{p.tagline}</p>
                {p.launch && (
                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-xs">
                    {p.launch.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-mono uppercase tracking-[0.08em] text-slate-400">{m.label}</div>
                        <div className="mt-1 font-semibold text-slate-900">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-3 text-xs text-slate-500">
                Launched {p.launch?.launchedOn ?? "Launch date pending"} · by{" "}
                <span className="font-medium">@{p.userSlug}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
