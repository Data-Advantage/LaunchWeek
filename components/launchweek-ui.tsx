"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Project, Stage } from "@/lib/launchweek-types";
import { STAGES } from "@/lib/launchweek-types";
import { cn } from "@/lib/utils";

const STAGE_COLORS: Record<Stage, string> = {
  1: "bg-brand-300",
  2: "bg-brand-300",
  3: "bg-brand-400",
  4: "bg-brand-400",
  5: "bg-brand-500",
  6: "bg-brand-500",
  7: "bg-brand-600",
  8: "bg-brand-600",
  9: "bg-brand-500",
};

const STAGE_TEXT: Record<Stage, string> = {
  1: "text-brand-950",
  2: "text-brand-950",
  3: "text-brand-950",
  4: "text-brand-950",
  5: "text-white",
  6: "text-white",
  7: "text-white",
  8: "text-white",
  9: "text-white",
};

function daysInStage(project: Project): number {
  const entered = new Date(project.enteredStageAt).getTime();
  return Math.max(0, Math.floor((Date.now() - entered) / (1000 * 60 * 60 * 24)));
}

export function StageBadge({ stage }: { stage: Stage }) {
  const meta = STAGES[stage];
  return (
    <span
      title={`Stage ${stage}: ${meta.name}`}
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold shadow-sm",
        STAGE_COLORS[stage],
        STAGE_TEXT[stage],
      )}
    >
      <span className="font-mono text-[10px] opacity-80 tabular-nums">{String(stage).padStart(2, "0")}</span>
      <span className="hidden lg:inline">{meta.name}</span>
    </span>
  );
}

export function StageTrack({ project }: { project: Project }) {
  const stages = [1, 2, 3, 4, 5, 6, 7, 8, 9] as Stage[];
  return (
    <div className="flex items-center gap-1">
      {stages.map((s) => {
        const done = s <= project.stage;
        const current = s === project.stage;
        return (
          <div
            key={s}
            title={STAGES[s].name}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              current && "bg-brand-600 shadow-sm ring-2 ring-brand-300 ring-offset-2 ring-offset-white",
              !current && done && "bg-brand-500",
              !done && "bg-brand-300/40",
            )}
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
      className="group block rounded-xl border border-l-[3px] border-slate-200 border-l-brand-500 bg-white p-6 shadow-sm transition-colors hover:border-brand-300 hover:border-l-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-heading text-xl font-semibold tracking-[-0.01em] text-slate-900 transition-colors group-hover:text-brand-600">
            {project.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-snug text-slate-500 text-pretty">{project.tagline}</p>
        </div>
        <StageBadge stage={project.stage} />
      </div>
      <div className="mt-4">
        <StageTrack project={project} />
      </div>
      <div className="mt-4 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span className="flex min-w-0 items-center gap-2">
          <span className={cn("font-mono", !project.domain && "font-sans text-slate-400")}>
            {project.domain ?? "No domain yet"}
          </span>
        </span>
        <span className="text-slate-500">
          {days} day{days === 1 ? "" : "s"} in stage · Owner: {project.ownerAgent ?? "Not assigned"}
        </span>
      </div>
    </Link>
  );
}

export function LaunchWeekSubnav() {
  const pathname = usePathname();
  const items = [
    { href: "/pipeline", label: "Pipeline" },
    { href: "/gallery", label: "Gallery" },
    { href: "/framework", label: "Framework" },
    { href: "/u/dataadvantage", label: "Data Advantage" },
  ];
  return (
    <div className="sticky top-16 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-4 sm:gap-6 sm:px-6 lg:px-8">
        {items.map((item) => {
          const active =
            pathname === item.href ||
            (item.href === "/u/dataadvantage" && pathname.startsWith("/u/dataadvantage/"));
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative inline-flex min-h-11 shrink-0 items-center py-3 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2",
                active && "text-slate-900",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-transparent transition-colors",
                  active && "bg-brand-500",
                )}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
