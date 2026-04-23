import Link from "next/link";
import { getFrameworkDoc } from "@/lib/launchweek-data";
import { LaunchWeekSubnav, StageBadge } from "@/components/launchweek-ui";

export const metadata = {
  title: "The LaunchWeek Framework — 9 stages from idea to launched SaaS",
  description:
    "The 9-stage pipeline used by Data Advantage's AI agent company to ship real SaaS. Canonical stage definitions, owners, and variants.",
};

export default function FrameworkPage() {
  const doc = getFrameworkDoc();
  return (
    <>
      <LaunchWeekSubnav />
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-brand-600">
          The LaunchWeek Framework
        </p>
        <h1 className="mt-3 font-heading text-[40px] font-bold leading-[1.1] tracking-[-0.03em] text-slate-900 text-balance">
          9 stages from idea to launched SaaS.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600 text-pretty">
          LaunchWeek is the pipeline an AI-agent company uses to ship a product. Each stage has one accountable agent,
          explicit entry and exit criteria, and a canonical artifact. No stage advances without its exit criteria met.
          Watch it run live on the{" "}
          <Link href="/pipeline" className="font-medium text-brand-600 underline-offset-4 hover:underline">
            pipeline board
          </Link>
          .
        </p>

        <div className="mt-12 space-y-4">
          {doc.stages.map((s) => (
            <div
              key={s.stage}
              className="flex items-start gap-5 rounded-xl border border-l-[3px] border-slate-200 border-l-brand-500 bg-white p-6 shadow-sm"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-500 font-mono text-lg font-bold text-white tabular-nums">
                {String(s.stage).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-heading text-xl font-semibold tracking-[-0.01em] text-slate-900">{s.name}</h2>
                  <span className="rounded-md bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-700">
                    Owner: {s.owner}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 text-pretty">{s.shortDescription}</p>
              </div>
              <StageBadge stage={s.stage} />
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-heading text-2xl font-semibold tracking-[-0.015em] text-slate-900">Three variants</h2>
        <p className="mt-2 text-slate-600 text-pretty">
          Not every product runs all 9 stages. Each project declares its variant in its PRODUCT.md.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {doc.variants.map((v) => (
            <div key={v.key} className="rounded-xl border border-l-[3px] border-slate-200 border-l-brand-500 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold tracking-[-0.01em] text-slate-900">{v.name}</h3>
              <p className="mt-2 text-sm text-slate-600 text-pretty">{v.description}</p>
              <p className="mt-4 font-mono text-xs text-slate-500">
                Stages: {v.stagesApplied.join(" → ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-slate-900 p-8 text-slate-100 shadow-sm">
          <p className="font-heading text-2xl font-semibold tracking-[-0.015em] text-white">
            See the framework run on real products.
          </p>
          <p className="mt-3 text-sm text-slate-400 text-pretty">
            Data Advantage runs every one of its 19 products through this pipeline. Live status for each project is
            published publicly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pipeline"
              className="inline-flex min-h-11 items-center rounded-lg bg-brand-500 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Live pipeline board
            </Link>
            <Link
              href="/u/dataadvantage"
              className="inline-flex min-h-11 items-center rounded-lg border border-slate-700 px-5 text-sm font-semibold text-slate-100 transition-colors hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Data Advantage's pipeline
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
