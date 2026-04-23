# LaunchWeek v2 — Plan: Auth, Postgres, Self-Serve Onboarding

**Status:** Draft for board approval. No implementation until approved.
**Owner:** CTO (plan). Engineering pod TBD after board sign-off.
**Parent:** [DAT-2237](/DAT/issues/DAT-2237) · **This issue:** [DAT-2267](/DAT/issues/DAT-2267)

---

## 1. Goal

Turn LaunchWeek from a single-seed static directory (v1 = Data Advantage only, content/users/*.json) into a self-serve multi-tenant directory where any AI-native founder can sign up, claim `/u/[slug]`, post their pipeline, publish launches, and receive a scoped API key to push stage updates from their own Paperclip or agent harness.

**v1 must not break.** All `/api/v1/*` read endpoints stay public, unauthenticated, stable contract. All write endpoints (new) live under `/api/v2/*`.

## 2. Success Criteria

1. A new user can sign up with Clerk and claim a unique `/u/[slug]` in under 2 minutes.
2. That user can create a project, post stage events, and publish a launch — all persisted in Postgres, rendered at `/u/[slug]` and `/u/[slug]/[projectSlug]`.
3. A user can generate a scoped API key from their dashboard and `POST /api/v2/projects/:id/stage-events` with `Authorization: Bearer <key>` from outside the browser.
4. The existing seed user `dataadvantage` is migrated from `content/users/dataadvantage.json` into Postgres with zero change to the rendered pages or v1 API output.
5. Free tier is enforced (limits below). Paid tier upgrade path exists but billing integration can be a follow-on issue if needed to keep Phase-1 shippable.
6. `/api/v1/*` responses byte-equivalent (modulo timestamps) before and after v2 cutover.

## 3. Non-Goals

- No webhook ingress from third-party Paperclip instances in v2 scope (tracked as a later phase — DAT-TBD).
- No email/transactional sending infra build-out beyond Clerk defaults and a single "welcome" email.
- No custom domains per user (`/u/[slug]` only; `[slug].launchweek.ai` deferred).
- No in-app analytics dashboards — just raw stage events + launch metrics.
- No team/org accounts. Individual users only in v2. Teams deferred.

## 4. Stack Recommendation

**Recommended: Supabase Postgres + Clerk.** Not Convex.

Rationale:
- **Data is relational** (User 1-N Project 1-N StageEvent). Pipeline queries like "all projects at stage X across all users, ordered by days-in-stage" are natural SQL, awkward in Convex.
- **Row-Level Security** maps 1:1 to "owner can write, everyone can read published rows" — the exact multi-tenant pattern LaunchWeek needs.
- **Public read-only v1 API** stays fast via Postgres read replicas + ISR caching. Convex would add a client-side reactivity cost LaunchWeek doesn't need (content-style site, not app-style).
- **Future BI / teardown analytics** on pipeline data is trivial in SQL, painful in Convex.
- **Clerk handles auth identity** and syncs `user_id` → Postgres via Clerk webhook. Standard pattern.

**Tradeoff vs. house stack:** Data Advantage default is Convex + Clerk (Pixola, Flixola, ArtTV, FastWrite, SarahsRecipes, StoryD). LaunchWeek deviates. Justification above. If board prefers the house stack, fallback is Convex with a flat `projects` table indexed by `userId` and a materialized `pipelineSnapshot` doc. Plan document Section 11 covers that alternative.

### Supporting infra
- **Hosting:** Vercel (existing `prj_cvT85esLkKkF8YXt5UBK3uih1yu3`).
- **Auth:** Clerk (Free tier sufficient; upgrade at user cap).
- **DB:** Supabase Postgres (Free tier → Pro when row count justifies).
- **Secrets:** Vercel env vars. Clerk webhook secret, Supabase service role, Supabase anon key.
- **Billing (Phase 4):** Stripe checkout + customer portal. Clerk has Stripe integration but we'll use Stripe directly for plan flexibility.

## 5. Data Model (Postgres)

```sql
-- Clerk user mirror. One row per authenticated user. Populated by Clerk webhook.
create table users (
  id text primary key,                  -- Clerk user_id (e.g. user_abc123)
  slug text unique not null,            -- claimed at signup; /u/[slug]
  display_name text not null,
  tagline text,
  avatar_url text,
  website text,
  twitter text,
  github text,
  about text,
  plan text not null default 'free',    -- 'free' | 'pro'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table projects (
  id uuid primary key default gen_random_uuid(),
  user_id text not null references users(id) on delete cascade,
  slug text not null,                   -- /u/[userSlug]/[projectSlug]
  name text not null,
  tagline text,
  url text,
  repo_url text,
  domain text,
  stack text[] not null default '{}',
  variant text not null,                -- 'full_saas' | 'content_site' | 'reference'
  stage smallint not null,              -- 1..9
  stage_status text not null default 'on_track', -- 'on_track' | 'stalled' | 'blocked'
  entered_stage_at timestamptz not null default now(),
  product_md_excerpt text,
  owner_agent text,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, slug)
);

create table stage_events (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  at timestamptz not null default now(),
  from_stage smallint not null,         -- 0..9 (0 = pre-concept)
  to_stage smallint not null,           -- 1..9
  owner text,
  notes text,
  artifact_url text
);

create table launch_metrics (
  project_id uuid primary key references projects(id) on delete cascade,
  launched_at timestamptz not null,
  launched_on text,
  headline text,
  link_url text,
  link_label text,
  metrics jsonb not null default '[]'   -- [{label, value}, ...]
);

-- Scoped, per-user API keys for writing via /api/v2/*.
create table api_keys (
  id uuid primary key default gen_random_uuid(),
  user_id text not null references users(id) on delete cascade,
  name text not null,                   -- user-given label
  prefix text not null,                 -- first 8 chars, shown in UI
  hash text not null,                   -- sha256 of full key, indexed
  scopes text[] not null default '{write:projects,write:stage_events}',
  last_used_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);
create index api_keys_hash_idx on api_keys(hash) where revoked_at is null;

-- Enforce usage limits for free tier.
create table usage_counters (
  user_id text not null references users(id) on delete cascade,
  period_start date not null,
  stage_events_count int not null default 0,
  primary key (user_id, period_start)
);
```

**RLS policies (summary):**
- `users`: self-read/write via Clerk `auth.jwt()->>'sub' = id`. Public read of slug, display_name, avatar, tagline only (via a `public_users` view).
- `projects`: owner full CRUD; anyone can `select` where `published = true`.
- `stage_events`, `launch_metrics`: owner write via parent `project.user_id`; public read where parent `published = true`.
- `api_keys`, `usage_counters`: owner-only. Never exposed publicly.

## 6. API Versioning

### v1 (frozen, read-only, public, unauthenticated)

Keep as-is. Migrate the backing implementation from file reads to Postgres queries, but responses must match byte-for-byte (modulo `generatedAt` timestamps).

| Method | Path | Behavior |
|---|---|---|
| GET | `/api/v1/users` | All users |
| GET | `/api/v1/users/[slug]` | One user |
| GET | `/api/v1/users/[slug]/projects` | Their projects |
| GET | `/api/v1/projects` | All projects (pipeline) |
| GET | `/api/v1/projects/[userSlug]/[projectSlug]` | One project with history + launch |
| GET | `/api/v1/pipeline` | PipelineSnapshot |
| GET | `/api/v1/gallery` | Launched projects |
| GET | `/api/v1/framework` | Stage + variant metadata |

### v2 (new, write endpoints, authenticated)

Auth: `Authorization: Bearer <api_key>` for programmatic, or Clerk session cookie for browser. Per-user scopes enforced.

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/v2/users/me` | Create/update own profile (slug claim at signup, profile edits) |
| POST | `/api/v2/projects` | Create project |
| PATCH | `/api/v2/projects/:id` | Update project (stage, stack, url, etc.) |
| DELETE | `/api/v2/projects/:id` | Delete (soft: `published=false`) |
| POST | `/api/v2/projects/:id/stage-events` | Record stage transition (auto-updates `project.stage`) |
| POST | `/api/v2/projects/:id/launch` | Publish launch metrics |
| GET | `/api/v2/me/api-keys` | List own keys |
| POST | `/api/v2/me/api-keys` | Create key (returns full key once; only hash stored) |
| DELETE | `/api/v2/me/api-keys/:id` | Revoke key |
| GET | `/api/v2/me/usage` | Current period counters |

v2 read endpoints (`GET /api/v2/projects/:id` etc.) exist for authenticated dashboards that want fresh data (no ISR cache). Public reads stay on v1.

## 7. Self-Serve Signup Flow

1. User hits `/sign-up` → Clerk handles auth.
2. First sign-in webhook hits `/api/clerk/webhook` → upserts `users` row with placeholder slug (`user_<clerk-id-prefix>`).
3. Middleware redirects first-time users to `/onboarding` where they pick their `slug` (uniqueness-checked) and fill profile basics.
4. On save: `POST /api/v2/users/me` commits the slug; user lands at `/u/[slug]` (their own empty profile with "Create your first project" CTA).
5. "Create project" wizard: name → slug → variant → starting stage → stack chips. Post-create, land on `/u/[slug]/[projectSlug]/edit`.
6. Dashboard at `/dashboard` (authenticated only): list own projects, quick stage-advance buttons, API keys section, usage meter.

## 8. Tiered Plans

| Feature | Free | Pro ($12/mo, tentative) |
|---|---|---|
| Public profile `/u/[slug]` | ✓ | ✓ |
| Projects | up to 5 | unlimited |
| Stage events per month | 200 | 5,000 |
| API keys | 1 | 5 |
| Launch entries | unlimited | unlimited |
| Custom slug prefix validation | basic | premium (shorter slugs) |
| Featured placement on `/pipeline` | — | rotates-in |

Enforcement: `usage_counters` incremented on each write; middleware returns `429` with upgrade CTA when exceeded. Stripe checkout creates a `customer_id` we store on `users`. Webhook flips `plan` to `pro`.

**Phase-split note:** Billing is Phase 4. Phases 1-3 ship with Free tier only + a "Join waitlist for Pro" button. This keeps the critical path to v2 cutover short.

## 9. Phase Split (for CTO-led engineering pod)

Each phase should be a single Paperclip issue with a clear acceptance test. Phases are sequential (each depends on the prior being on `main`).

### Phase 1 — Infra + Auth Shell (1 engineer, ~1 day)
- Provision Supabase project. Create schema above. Enable RLS.
- Install `@clerk/nextjs`, wire middleware, add `/sign-in` and `/sign-up`.
- Clerk webhook → `users` upsert.
- Add Vercel env vars (DATABASE_URL, CLERK keys, webhook secret).
- **Acceptance:** Sign up, see Clerk session, verify row in `users` table. No UI changes yet. v1 still live on file-based data.

### Phase 2 — v1 Migration to Postgres (1 engineer, ~1 day)
- Port `lib/launchweek-data.ts` to a Postgres adapter. Keep the same exported signatures.
- Write a one-shot migration script: load `content/users/dataadvantage.json` into `users`/`projects`/`stage_events`/`launch_metrics`.
- Update v1 API routes to read from Postgres. Verify byte-equivalence with a diff script.
- **Acceptance:** `/pipeline`, `/gallery`, `/framework`, `/u/dataadvantage`, `/api/v1/*` identical in rendered output before and after. Remove `content/users/*.json` from the read path (keep files as a seed backup).

### Phase 3 — Write Surface + v2 API + Onboarding (2 engineers, ~2-3 days)
- `/onboarding` slug-claim flow.
- `/dashboard` — project list, stage-advance, profile edit.
- `/dashboard/api-keys` — generate/revoke.
- `POST /api/v2/*` endpoints with Clerk session auth.
- `POST /api/v2/*` with Bearer API key auth (separate middleware).
- Project create/edit wizard.
- **Acceptance:** A brand-new user signs up, claims a slug, creates a project, posts a stage event via dashboard and via `curl` with API key, publishes a launch, sees it on their public `/u/[slug]`. E2E happy path recorded.

### Phase 4 — Tiered Plans + Stripe (1 engineer, ~2 days)
- Stripe product + price. Checkout session endpoint.
- Webhook → `plan` flip + `stripe_customer_id` store.
- Usage enforcement middleware on v2 writes.
- `/dashboard/billing` with customer portal link.
- **Acceptance:** Paid upgrade works end-to-end. Free user hits 200-event cap and gets upgrade CTA with working checkout.

### Phase 5 — Polish + Launch (1 engineer, ~1 day)
- Empty states, error boundaries, rate limits, 429 pages.
- Open-waitlist → opened-signup copy swap on homepage.
- Announcement blog post.
- **Acceptance:** Homepage CTA reads "Claim your /u/[slug]" and leads to working signup. Data Advantage internal team onboards 2-3 early-access users manually.

### Total estimated engineering time: ~7-9 engineer-days

## 10. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Clerk webhook lag causes signup → onboarding race | Onboarding page reads Clerk session client-side and upserts `users` row eagerly; webhook is backup reconciliation |
| RLS misconfiguration leaks draft projects | Ship with `published=false` default; integration test scrapes `/api/v1/projects` and asserts no drafts; automated RLS policy test suite |
| v1 byte-equivalence breaks consumer tools | Write a snapshot test: capture current JSON, diff after migration; block Phase 2 merge if diff ≠ ∅ modulo whitelisted fields |
| Slug squatting | Reserved slug list (`admin`, `api`, `u`, `about`, `dataadvantage`, etc.); allow slug changes within 7 days of signup, then lock |
| API key leak | Keys stored as sha256 hash only; prefix shown in UI; revocation is immediate; optional IP allowlist in v2.1 |
| Free tier abuse (bot signups spamming events) | Clerk email verification required; Cloudflare Turnstile on `/sign-up`; 200 events/month cap enforced server-side |
| Supabase free-tier row limits | Monitor via weekly cron; upgrade to Pro at 100K rows (well before hard limits) |
| Stack deviation from Convex house pattern | Documented tradeoff in §4; revisit after 3 months in prod — migrate to Convex if relational queries aren't load-bearing |

## 11. Alternative: Convex (if board prefers house stack)

If the board rejects Supabase, the Convex fallback:
- `users`, `projects`, `stageEvents`, `launchMetrics`, `apiKeys` tables.
- Clerk JWT templates for Convex auth — existing pattern in Pixola/Flixola.
- Pipeline snapshot as a reactive query with client-side filter, or a materialized doc refreshed on mutation.
- Con: multi-user pipeline queries ("all projects at stage X") require a full scan unless we denormalize; no RLS, so auth checks live in every mutation.
- Pro: one less service to run; house-stack consistency.

Recommendation stands with Supabase. Explicit board override needed to choose Convex.

## 12. Open Questions for Board

1. **Stack:** Approve Supabase + Clerk, or require Convex + Clerk?
2. **Pricing:** $12/mo Pro tier acceptable, or different price / free-forever?
3. **Paid tier timing:** Ship Phase 1-3 as free-only and defer Phase 4 billing to a follow-on, or gate launch on billing?
4. **Slug reservation:** Who approves the reserved-slug list? (Suggest: CTO maintains it in code.)
5. **Paperclip-instance webhook ingress:** Defer fully to v2.1, or include a read-only webhook receiver in v2?
6. **Early-access cap:** Invite-only for first 30 days, or fully open signup at v2 launch?

## 13. What Happens Next

This plan is in the `in_review` state awaiting board approval. **Do not open implementation subtasks until at least Questions 1-3 are answered.** Once approved:
1. CTO opens 5 child issues (one per phase) with acceptance criteria copied from §9.
2. Phase 1 assigned to Founding Engineer. Subsequent phases assigned as Phase 1 lands.
3. CTO reviews each phase at `in_review` before merging to `main`.
4. CEO notified at Phase 3 completion (the meaningful cutover) and Phase 5 completion (public launch).
