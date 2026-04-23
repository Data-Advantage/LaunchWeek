# Product Strategy: LaunchWeek

## Vision

The public pipeline for autonomous SaaS. Where AI-native founders ship in public — and copy each other's plays.

LaunchWeek is both a framework (the 9-stage pipeline from idea → launched SaaS) and a directory (every founder's live pipeline, rendered as a public board and a launch gallery). You see who is building what, at which stage, with which agents — and you see what launched with what results.

## Target Users

1. **AI-native founders running agent companies** who want a public venue to publish their pipeline, attract inbound interest, and prove they ship.
2. **Solo founders and indie hackers studying how autonomous SaaS actually operates** — looking for a playbook they can copy.
3. **Data Advantage itself** — the canonical reference implementation. All ~19 DA products live on `/u/dataadvantage`.

## Positioning

The only public control plane + directory for AI-agent-run SaaS companies. Every project entry is a live teardown: stage, variant, stack, owner agent, days-in-stage, launch metrics. No hypotheticals, no slide-deck frameworks — real projects, real stages, watched in real time.

Competitors fall into two buckets we don't:
- **Generic launch playbooks** (ProductHunt guides, newsletters): abstract tips, not live pipelines.
- **Indie-hacker directories** (Indie Hackers, OpenStartup pages): revenue-first, not process-first.

LaunchWeek's wedge: framework + directory fused, plus an API, so other tools and agents can subscribe.

## Framework

The 9-stage pipeline (see `docs/launchweek-pipeline.md`):

1. Concept (CPO) → 2. Strategy (CPO) → 3. Design Direction (CDO) → 4. Scaffold (CTO) → 5. Build MVP (CTO) → 6. Harden (CTO) → 7. Content & SEO (CMO) → 8. Pre-Launch (CMO + CEO) → 9. Launch & Post-Launch (CMO).

Three variants: Full SaaS, Content Site, Reference/Gallery.

## Current Stage

**Stage 7 (Content & SEO) — v2 rebuild underway.** v1 was a static content site (human framework). v2 repositions LaunchWeek as a multi-tenant pipeline platform with a seeded `dataadvantage` user. See [DAT-2237](/DAT/issues/DAT-2237).

## Current Priorities

1. **Ship v1 multi-tenant surfaces** — `/pipeline`, `/gallery`, `/framework`, `/u/[slug]`, `/api/v1/*` backed by the Data Advantage seed.
2. **Open the directory waitlist** — collect email signups from AI-native founders who want their own `/u/[slug]` page.
3. **Keep the Data Advantage pipeline fresh** — weekly `gallery-refresh` + daily `pipeline-sweep` routines so the seed user tells a live story.
4. **Write teardowns** — each launched product gets a dedicated stage-by-stage teardown page in the framework content.
5. **v2 planning** — separate plan for auth (Clerk), Postgres persistence, per-user API keys, and webhook ingress from third-party Paperclip instances.

## Key Decisions

- **v1 is static seed data, not auth-gated.** Prioritizes shipping speed. v2 adds auth.
- **API is public read-only under `/api/v1/*`.** Stable surface. v2 auth endpoints will live under `/api/v2/*` so v1 consumers don't break.
- **Homepage pivots** from "33 free guides" to "See the pipeline live" — guides become part of the framework teardowns, not the lead value prop.
- **`launchweek.ai/u/dataadvantage` is the flagship showcase** — it must always look best-in-class.
- **No paid tiers in v1.** v2 introduces team accounts.
- **Stack:** Next.js 16 static content + ISR + file-based seed (`content/users/*.json`). No Convex, no Clerk, no DB in v1.
- **Companion to VibeWeek:** VibeWeek = 7-day technical build challenge. LaunchWeek = live operational pipeline for post-challenge products.

## Non-goals (v1)

- No auth, writes, webhooks, or paid features.
- No scoped API tokens.
- No integrations with other Paperclip instances.
- No human-authored project submissions — v1 seed is Data Advantage only.
