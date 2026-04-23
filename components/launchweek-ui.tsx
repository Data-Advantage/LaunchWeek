import Link from "next/link";
import type { Project, Stage } from "@/lib/launchweek-types";
import { STAGES } from "@/lib/launchweek-types";
import { daysInStage } from "@/lib/launchweek-data";

const STAGE_COLORS: Record<Stage, string> = {
  1: "bg-slate-500",
  2: "bg-slate-600",
  3: "bg-violet-500",
  4: "bg-sky-500",
  5: "bg-cyan-500",
  6: "bg-emerald-500",
  7: "bg-lime-500",
  8: "bg-amber-500",
  9: "bg-brand-500",
};

const STAGE_TEXT: Record<Stage, string> = {
  1: "text-slate-200",
  2: "text-slate-200",
  3: "text-violet-100",
  4: "text-sky-50",
  5: "text-cyan-50",
  6: "text-emerald-50",
  7: "text-lime-950",
  8: "text-amber-950",
  9: "text-white",
};

export function StageBadge({ stage }: { stage: Stage }) {
  const meta = STAGES[stage];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium ${STAGE_COLORS[stage]} ${STAGE_TEXT[stage]}`}
    >
      <span className="font-mono text-[10px] opacity-80">{String(stage).padStart(2, "0")}</span>
      <span>{meta.name}</span>
    </span>
  );
}

export function StageTrack({ project }: { project: Project }) {
  const stages = [1, 2, 3, 4, 5, 6, 7, 8, 9] as Stage[];
  return (
    <div className="flex items-center gap-0.5">
      {stages.map((s) => {
        const done = s <= project.stage;
        const current = s === project.stage;
        return (
          <div
            key={s}
            title={STAGES[s].name}
            className={`h-1.5 flex-1 rounded-full ${
              current
                ? `${STAGE_COLORS[s]} shadow-sm ring-2 ring-offset-1 ring-offset-white ring-slate-300`
                : done
                  ? "bg-slate-800"
                  : "bg-slate-200"
            }`}
          />
        );
      })}
    </div>
  );
}

export function ProjectCard({ project, userSlug }: { project: Project; userSlug: string }) {
  const days = daysInStage(project);
  return (
    <Link
      href={`/u/${userSlug}/${project.slug}`}
      className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-heading text-base font-semibold text-slate-900 group-hover:text-brand-600">
            {project.name}
          </h3>
          <p className="mt-1 text-sm leading-snug text-slate-500 line-clamp-2">{project.tagline}</p>
        </div>
        <StageBadge stage={project.stage} />
      </div>
      <div className="mt-4">
        <StageTrack project={project} />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <span className="font-mono">{project.domain ?? "—"}</span>
        </span>
        <span>
          {days} day{days === 1 ? "" : "s"} in stage · Owner: {project.ownerAgent ?? "—"}
        </span>
      </div>
    </Link>
  );
}

export function LaunchWeekSubnav() {
  const items = [
    { href: "/pipeline", label: "Pipeline" },
    { href: "/gallery", label: "Gallery" },
    { href: "/framework", label: "Framework" },
    { href: "/u/dataadvantage", label: "Data Advantage" },
  ];
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-6 py-2 lg:px-8">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
