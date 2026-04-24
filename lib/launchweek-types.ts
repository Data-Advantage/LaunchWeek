// LaunchWeek multi-tenant data model (v1)
// Keeps the v1 API surface stable so a v2 auth layer can slot in without breaking consumers.

export type Stage = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Variant = "full_saas" | "content_site" | "reference";

export type StageStatus = "on_track" | "stalled" | "blocked";

export const STAGES: Record<Stage, { key: string; name: string; owner: string; shortDescription: string }> = {
  1: { key: "concept", name: "Concept", owner: "CPO", shortDescription: "Validate the idea. Write the PRODUCT.md." },
  2: { key: "strategy", name: "Strategy", owner: "CPO", shortDescription: "Priorities, non-goals, pricing, ICP." },
  3: { key: "design_direction", name: "Design Direction", owner: "CDO", shortDescription: "Pick the visual and UX direction." },
  4: { key: "scaffold", name: "Scaffold", owner: "CTO", shortDescription: "Repo, stack, CI/CD, staging." },
  5: { key: "build_mvp", name: "Build (MVP)", owner: "CTO", shortDescription: "Core feature working end-to-end." },
  6: { key: "harden", name: "Harden", owner: "CTO", shortDescription: "Billing, auth, a11y, perf, security." },
  7: { key: "content_seo", name: "Content & SEO", owner: "CMO", shortDescription: "Marketing site, SEO, launch assets." },
  8: { key: "pre_launch", name: "Pre-Launch", owner: "CMO", shortDescription: "Analytics, waitlist, go-decision." },
  9: { key: "launch", name: "Launch & Post-Launch", owner: "CMO", shortDescription: "Ship. Measure. Iterate." },
};

export const VARIANTS: Record<Variant, { name: string; stagesApplied: Stage[]; description: string }> = {
  full_saas: {
    name: "Full SaaS",
    stagesApplied: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    description: "App with auth, billing, and ongoing product surface. All 9 stages.",
  },
  content_site: {
    name: "Content Site",
    stagesApplied: [1, 2, 3, 7, 8, 9],
    description: "Content-first site or reference. Skips build/harden — design blends with scaffold.",
  },
  reference: {
    name: "Reference / Gallery",
    stagesApplied: [1, 2, 3, 7, 8, 9],
    description: "Reference catalogue or gallery. No app surface.",
  },
};

export interface User {
  slug: string;
  displayName: string;
  tagline: string;
  avatarUrl?: string;
  website?: string;
  twitter?: string;
  github?: string;
  createdAt: string;
  /** Short narrative for the profile header. */
  about?: string;
}

export interface StageEvent {
  at: string;
  fromStage: Stage | 0;
  toStage: Stage;
  owner: string;
  notes?: string;
  artifactUrl?: string;
}

export interface LaunchMetrics {
  launchedAt: string;
  launchedOn?: string;
  headline: string;
  metrics: Array<{ label: string; value: string }>;
  linkUrl?: string;
  linkLabel?: string;
}

export interface Project {
  userSlug: string;
  slug: string;
  name: string;
  tagline: string;
  url?: string;
  stack: string[];
  variant: Variant;
  stage: Stage;
  stageStatus: StageStatus;
  stageStatusReason?: string;
  enteredStageAt: string;
  stageHistory: StageEvent[];
  productMdExcerpt?: string;
  launch?: LaunchMetrics;
  ownerAgent?: string;
  repoUrl?: string;
  domain?: string;
}

export interface PipelineSnapshot {
  generatedAt: string;
  totalProjects: number;
  totalUsers: number;
  byStage: Array<{ stage: Stage; count: number }>;
  projects: Project[];
}
