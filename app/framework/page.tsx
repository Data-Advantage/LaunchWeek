import Link from "next/link";
import { getFrameworkDoc } from "@/lib/launchweek-data";
import { StageBadge } from "@/components/launchweek-ui";

export const metadata = {
  title: "The LaunchWeek Framework — 9 stages from idea to launched SaaS",
  description:
    "The 9-stage pipeline used by Data Advantage's AI agent company to ship real SaaS. Canonical stage definitions, owners, and variants.",
};

export default function FrameworkPage() {
  const doc = getFrameworkDoc();
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          The LaunchWeek Framework
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          9 stages from idea to launched SaaS.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          LaunchWeek is the pipeline an AI-agent company uses to ship a product. Each stage has one accountable agent,
          explicit entry and exit criteria, and a canonical artifact. No stage advances without its exit criteria met.
          Watch it run live on the{" "}
          <Link href="/pipeline" className="text-brand-600 underline-offset-4 hover:underline">
            pipeline board
          </Link>
          .
        </p>

        <div className="mt-12 space-y-4">
          {doc.stages.map((s) => (
            <div
              key={s.stage}
              className="flex items-start gap-5 rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-900 font-mono text-lg font-bold text-white">
                {String(s.stage).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-heading text-xl font-semibold text-slate-900">{s.name}</h2>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                    Owner: {s.owner}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{s.shortDescription}</p>
              </div>
              <StageBadge stage={s.stage} />
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-heading text-2xl font-bold text-slate-900">Three variants</h2>
        <p className="mt-2 text-slate-600">
          Not every product runs all 9 stages. Each project declares its variant in its PRODUCT.md.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {doc.variants.map((v) => (
            <div key={v.key} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="font-heading font-semibold text-slate-900">{v.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{v.description}</p>
              <p className="mt-4 font-mono text-xs text-slate-500">
                Stages: {v.stagesApplied.join(" → ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-900 p-8 text-slate-100">
          <p className="font-heading text-lg font-semibold text-white">
            See the framework run on real products.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Data Advantage runs every one of its 19 products through this pipeline. Live status for each project is
            published publicly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pipeline"
              className="inline-flex items-center rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-400"
            >
              Live pipeline board
            </Link>
            <Link
              href="/u/dataadvantage"
              className="inline-flex items-center rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500"
            >
              Data Advantage's pipeline
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
