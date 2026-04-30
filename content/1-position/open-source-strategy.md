[Back to Day 1: Position](README.md)

# Open-Source Strategy: Should You Open-Source (and How)?

Most B2B SaaS founders eventually consider open-source: as a marketing channel, as a developer-trust signal, as a moat against giants, as a community-building tool, or because a competitor went OSS and is taking deals on "we're open; they're not." Some companies are obviously OSS-native (PostHog, Cal.com, Plausible, Supabase, Linear's components, Sentry, n8n) and have built dramatic businesses on it. Others ship proprietary forever and do fine (Notion, Figma, Linear's app, Vercel's app). A third category — increasingly common in 2026 — chooses a hybrid: open-source the SDK / library / engine; keep the cloud product proprietary (Sentry, Posthog, Convex, Supabase, BAML, Cube).

The trap most founders fall into: open-sourcing as marketing without a strategy. They release the code, get a 200-star burst on Hacker News, then nobody contributes, the issue tracker fills with bug reports they can't fix, customers worry about lock-in to the OSS edition, and the company splits energy between supporting OSS users (who pay nothing) and paying customers. Six months later, it's a quiet drag on engineering velocity.

The other failure: NOT open-sourcing when it would have been the right move. The proprietary tool gets out-shipped by an OSS alternative because the OSS alternative has 100 contributors. By the time the proprietary tool reacts, the OSS one has the community lock-in.

This is the playbook for deciding when (and how) to open-source: scope, license, commercial model, community building, and operational discipline.

## What Done Looks Like

A coherent open-source strategy produces:

- A clear answer to "are we open-source / partial / proprietary?" with documented reasoning
- A specific scope: what's open vs closed, and why
- A license chosen consciously (MIT / Apache / AGPL / SSPL / BUSL / commercial)
- A commercial model that aligns OSS adoption with paid revenue
- A documented contribution process + community management cadence
- An honest assessment of OSS-engineering cost vs benefit
- A path to commercial conversion (OSS user → paid customer)
- Resilience against fork-and-compete scenarios
- Clarity for sales: when to lean on OSS; when to compete on cloud product

This pairs with [Moats and Defensibility](moats-and-defensibility.md), [Pricing Strategy](pricing-strategy.md), [Pricing Packaging Tier Design](pricing-packaging-tier-design.md), [Multi-Product Strategy](multi-product-strategy.md), [Founder Story](founder-story.md), [Competitive Positioning](competitive-positioning.md), [Founder Brand](../3-distribute/founder-brand.md), [GitHub Distribution](../3-distribute/github-distribution.md), [Building in Public](../3-distribute/building-in-public.md), [Channel Selection](../3-distribute/channel-selection.md), and [Community Platforms (Reference)](../../VibeReference/content/marketing-and-seo/community-platforms.md).

## Five Strategy Archetypes

```
Pick the archetype that matches your business:

ARCHETYPE 1: FULL OSS WITH PAID CLOUD
- Software is fully open (e.g., AGPL or Apache 2.0)
- Self-host is supported (and free)
- You sell managed cloud + enterprise features
- Examples: PostHog, Plausible, Cal.com, n8n, Sentry (Functional Source License now), Supabase (parts)
- Pros: distribution moat (developers love free); community-driven roadmap
- Cons: forks possible; supporting OSS users is real cost; conversion to paid takes time

ARCHETYPE 2: OPEN-CORE
- Core product is OSS (often Apache or MIT)
- Enterprise features (SSO, audit, multi-tenancy, advanced analytics) are commercial
- Self-host with proprietary modules requires paid license
- Examples: GitLab, MongoDB pre-2018, Hashicorp pre-BSL, Cube, Convex (proprietary core; OSS SDK)
- Pros: developer-loved core + commercial path
- Cons: license drama possible; contributors may dislike tier-locked features

ARCHETYPE 3: OSS COMPONENTS / LIBRARIES (closed app)
- Specific libraries are open (SDK, CLI, components)
- Main product remains proprietary
- Examples: Vercel's Next.js (closed app, OSS framework), Linear's components, Stripe's CLI, Anthropic's SDK
- Pros: developer-credibility without giving away product
- Cons: requires sustained OSS investment in non-revenue surfaces

ARCHETYPE 4: SOURCE-AVAILABLE (NOT OSS)
- Code visible / readable but commercial use restricted
- Licenses: BUSL (Business Source License), Elastic License, Confluent Community License, SSPL
- Examples: Sentry (Functional Source), Cockroach Labs, MariaDB MaxScale, Cube CCL parts
- Pros: developer trust without OSS-fork risk
- Cons: not technically OSS; some communities reject

ARCHETYPE 5: CLOSED / PROPRIETARY
- No source available; standard SaaS
- Examples: Notion, Linear (app), Figma, Slack, Salesforce
- Pros: simplicity; no OSS-engineering tax; full control
- Cons: lose OSS-credibility appeal; vulnerable to OSS competitor

DEFAULT FOR MOST B2B SaaS:
- Year 1-2: Closed (Archetype 5). Don't add OSS complexity pre-PMF.
- Year 2+: Add Archetype 3 (open-source SDK/CLI/components) if developers are buyers.
- Year 3+: Consider Archetype 2 or 4 if differentiation requires it.
- Archetype 1 (Full OSS): only if it matches founder DNA + business strategy from day one.
```

## When OSS Makes Sense

Open-source AS A STRATEGY makes sense when ALL of these are true:

**1. Your buyer is a developer, devops, or technically-sophisticated user.** OSS-as-marketing works for products developers evaluate. It doesn't work for marketers/finance/HR buyers (they don't care if your product is open).

**2. Self-hosting is a real customer use case.** Compliance-strict customers (banks, governments, healthcare) often want self-host. If your product is unhosted-first valuable, OSS unlocks deals.

**3. The OSS product alone is genuinely useful.** "OSS but you must use our cloud" feels like bait-and-switch. The OSS edition has to STAND ALONE for trust.

**4. You can absorb 6-18 months before commercial revenue.** OSS communities take time to build; commercial conversion takes longer. Don't OSS for fast revenue.

**5. You have engineering capacity for OSS engineering.** Code reviews from contributors, issue triage, security disclosures, documentation, packaging — these aren't free.

**6. Your business model has a clear OSS → paid path.** Cloud convenience? Enterprise SSO? Hosted scale? Be specific BEFORE going OSS.

**7. You're prepared for a fork.** Someone might take your code, fork it, compete with you. Plan for it (license helps; community helps; product velocity helps).

If 5+ are true, OSS is plausible. If 3 or fewer, stay proprietary.

## When OSS Does NOT Make Sense

```
Avoid OSS strategy if:

- Your buyer is non-technical (marketing, sales, HR, finance)
- Your moat is data/network effects (OSS doesn't help; users still need cloud anyway)
- Your differentiation is brand / design (OSS often commoditizes)
- Your engineering team is <8 (OSS overhead crushes velocity)
- You're pre-PMF (focus on PMF; OSS is amplification, not discovery)
- You need investor-clear differentiation (OSS makes it harder)
- You're in a regulated industry where customers won't self-host anyway (then why OSS?)
- Your competitive moat depends on proprietary data / models
- Your product is built on third-party APIs (OSS-ing wraps doesn't help)
- You can't articulate what you'd open-source vs keep closed
```

## Picking a License (the Hardest Decision)

Licenses encode strategy. Choose deliberately.

```
Common license choices in 2026:

PERMISSIVE (anyone can use, modify, fork, even sell)
- MIT — minimal restrictions; preferred for libraries / SDKs
- Apache 2.0 — like MIT + patent grant + contributor-license clarity
- BSD-3-Clause — old-school permissive
- Best for: libraries, SDKs, components you want maximum adoption
- Risk: AWS / cloud giant takes your code, hosts as service, doesn't pay you

COPYLEFT (modifications must be open too)
- GPL-3.0 — strong copyleft; downstream changes must be GPL
- AGPL-3.0 — extends GPL to networked services (must open if you offer as service)
- Best for: applications you want to keep open even when others run them
- Risk: enterprises avoid AGPL (legal review nightmare)

LIMITED-COMMERCIAL (modern licenses; not technically OSI-OSS)
- BUSL (Business Source License) — open after N years; restricted commercial use until then
- Elastic License v2 — disallows hosted-as-service competitors
- SSPL (MongoDB) — copyleft + must open service-management code if you host
- Functional Source License (Sentry) — converts to OSI license after 2 years
- Best for: balancing openness with anti-cloud-competition
- Risk: developers / OSS purists may reject; some package registries refuse

SOURCE-AVAILABLE BUT NOT OSS
- Confluent Community License (Confluent)
- Apache 2.0 with Commons Clause
- Custom commercial licenses
- Best for: source visibility without OSS commitment
- Risk: marketing as "open" without OSI approval is dishonest

DEFAULT RECOMMENDATIONS:

For SDKs / libraries / CLIs / components:
- MIT or Apache 2.0
- Maximize adoption; the library is not your moat

For developer tools (the application itself):
- Apache 2.0 (permissive but with patent grant) for full-OSS
- BUSL (4-year conversion) for hybrid
- AGPL for deep moat against cloud competitors (with caveats)

For databases / infra:
- BUSL increasingly common (Sentry, Cockroach pre-2024, others)
- AGPL still used (MongoDB pre-SSPL)

Avoid:
- Custom licenses without legal review (will burn you)
- Multi-license dual-stacks without clear contribution policy (legal hell)
- Promising OSS then changing license later (community trust burn — see Hashicorp 2023, Redis 2024 backlash)

Get a lawyer to review BEFORE publishing. Once published under a license, you cannot un-publish. Future contributors require CLA (Contributor License Agreement) or DCO (Developer Certificate of Origin) to allow license changes.
```

## The Commercial Model: How OSS → Paid

Free OSS doesn't pay rent. The commercial model has to be designed alongside the OSS strategy.

```
Commercial models that work:

1. MANAGED CLOUD (most common)
- OSS product is free; you sell hosted version
- Customer trades self-host complexity for managed simplicity
- Examples: PostHog Cloud, Sentry SaaS, Plausible Hosted
- Pricing: per-user / per-event / per-volume
- Conversion rate: 1-5% of OSS users → cloud paying

2. ENTERPRISE EDITION (open-core)
- OSS = community edition
- Enterprise features (SSO, advanced auth, audit, compliance, multi-tenancy, advanced support) require paid license
- Examples: GitLab EE, Mattermost
- Pricing: per-user/year subscriptions
- Conversion: enterprise customers pay 5-10x SMB

3. SUPPORT + PROFESSIONAL SERVICES
- OSS is free; support contracts cost
- Examples: Red Hat (classic model), early MongoDB
- Less common in B2B SaaS now; SaaS-led wins

4. HOSTED-WITH-DATA
- OSS lets developers experiment
- Real value comes from your hosted data (your model, your network, your dataset)
- Examples: HuggingFace's Datasets (OSS) + Inference Endpoints (paid)
- Conversion: comes from data-network-effect lock-in

5. MARKETPLACE / PLUGIN ECOSYSTEM
- OSS core; charge for plugins, integrations, premium templates
- Examples: WordPress (OSS) + WooCommerce ecosystem
- Less applicable to B2B SaaS

6. DUAL-LICENSE
- OSS license for non-commercial / community use
- Commercial license for embed-in-product / proprietary integration
- Examples: Sequelize, FluentBit
- Niche; works for libraries with embed use cases

Default for B2B SaaS in 2026: combination of (1) Managed Cloud + (2) Enterprise Edition.

Critical: design the conversion path explicitly:
- What's painful to self-host? (scaling, monitoring, upgrades, backups, compliance)
- What pulls people to your cloud? (zero-ops, performance, support, multi-region)
- What gates upgrade-to-enterprise? (SSO, audit, multi-tenancy, advanced data tools)
```

## Operating an OSS Project: The Real Cost

OSS isn't free. Plan for the engineering tax.

```
Ongoing engineering investment in OSS:

1. Issue triage (~5-10 hours/week per maintainer)
- Bug reports come in; need triage
- Feature requests come in; need triage + closing
- Stale issues need closing
- Community wants response within days

2. Pull request review (~5-10 hours/week)
- Contributor PRs need review
- Style / quality / security review
- Often 3-5x effort vs. internal PR (less context)
- Mentoring contributors costs time

3. Documentation (~5 hours/week ongoing)
- Tutorials, getting-started, API docs
- Translations (community-contributed but vetted)
- Examples + cookbook

4. Release engineering (~3-5 hours/week)
- Versioning, changelog, packaging (npm, PyPI, Homebrew, etc.)
- Security advisories
- Backwards-compat decisions

5. Community management (~5-15 hours/week)
- Discord/Slack moderation
- Twitter / Mastodon / Bluesky engagement
- Contributor recognition
- Conference talks, meetups

6. Security disclosures (variable; ~5-10 incidents/year for popular OSS)
- Coordinated disclosure process
- Patches across versions
- Communications

7. Legal / governance (~2 hours/week)
- License compliance
- DPAs / SCCs for OSS users (less common but happens)
- Trademark + branding

Total: 1-2 dedicated FTE for an OSS project at meaningful adoption. Often blended across the eng team.

If you can't commit this, don't go OSS.
```

## Avoiding the Anti-Patterns

```
Common OSS-strategy failure modes:

Failure 1: OSS as marketing without a strategy
- "We released code; now we have OSS!" (then it dies in a month)
- Fix: clear scope + commercial model from day one

Failure 2: Open-sourcing the wrong thing
- Open-sourcing the cloud product but keeping the SDK closed (developers can't reach you)
- Fix: open the LIBRARY / CLI; the cloud product can stay closed

Failure 3: Switching license mid-stream
- Hashicorp BSL switch in 2023; Redis SSPL switch in 2024 — both faced fork backlash
- Fix: pick license carefully; don't switch unless absolutely necessary; if you switch, communicate aggressively

Failure 4: Free-riding on OSS contribution
- Accept PRs without crediting contributors; copyright issues
- Fix: contributor license agreement (CLA); credit always

Failure 5: Mismatching license + business model
- AGPL software with cloud-only business — works
- MIT software with cloud-only business — competitor copies you and hosts; you compete on convenience alone
- Fix: align license with business model

Failure 6: No OSS support DRI
- Community pings flow to whoever feels guilty; no consistent response
- Fix: rotate "OSS on-call" role; documented SLA for community responses

Failure 7: Killing OSS edition gradually
- Customer feels locked in; OSS becomes unmaintained; community withers
- Fix: commit publicly to OSS edition cadence; honor it

Failure 8: Open-source then enterprise-only the most-loved features
- Customers feel betrayed; "open-core abuse"
- Fix: clear policy on what stays OSS forever; stick to it

Failure 9: Vague boundaries (what's OSS vs. paid?)
- Customers can't tell what they get free
- Fix: explicit feature table; OSS edition = these features; cloud = these; enterprise = these

Failure 10: No GTM around OSS
- OSS users never become customers; never asked
- Fix: in-product upsell to cloud; usage-based outreach; lifecycle nurture
```

## Hire Signal: Open-Source / Developer Relations

```
Stages of OSS team-building:

Pre-OSS launch:
- Founder + senior eng owns OSS strategy
- No dedicated DevRel hire yet

OSS-launch (~$1-3M ARR):
- 1 dedicated maintainer (often founding eng)
- Founder still active in community
- Optional: 0.5 FTE community + content

OSS adoption growing (~$3-15M ARR):
- 1-2 maintainers
- 1 DevRel / community manager (full-time)
- 1 technical writer (often shared with marketing)

Mature OSS ($15M+ ARR):
- OSS team: 3-8 people
- Maintainers + DevRel + technical writer + community manager + program manager
- May include a Head of Open Source or VP

DevRel hire profile:
- Background: developer first; storyteller second
- Skills: writes well, gives talks, builds (sample code), manages community
- Mindset: long-term-relationship-driven, not quota-driven
- Comp: $150K-220K base depending on stage and experience

DevRel comp structure:
- Mostly base + equity (NOT commission-based; community trust > deal closing)
- KPIs: stars, contributors, downloads, content engagement, speaking output
- NOT KPIs: closed deals, MQLs (those are sales/marketing)
```

## Practical Decision Framework

```
Use this 5-question framework:

1. Who's your buyer?
- Developer / devops / technical user → OSS plausibly helps
- Marketer / finance / HR / non-technical → OSS unlikely to help
- Mix → OSS may help with the technical buyer; doesn't hurt

2. What's your competitive moat?
- Network effects / proprietary data → OSS okay; data is the moat
- Brand / design / UX / GTM → OSS may dilute brand
- Distribution / community → OSS amplifies

3. Can you sustain 6-12 months without commercial conversion?
- Yes → OSS plausible
- No → Stay closed; OSS is long-term play

4. What's your engineering capacity?
- 8+ engineers + can dedicate 1-2 to OSS → plausible
- <8 engineers → too costly to add OSS overhead

5. What's the worst case (someone forks)?
- Fine — community-driven, our cloud still wins on convenience → OSS fine
- Catastrophic — they'd take our customers → consider source-available license (BUSL) or stay closed

Answer YES to 4+ → open-source plausible.
Answer YES to 2 or fewer → stay closed.
```

## What Done Looks Like (recap)

A coherent open-source strategy:

- [ ] Archetype chosen (Full OSS / Open-Core / Components / Source-Available / Closed)
- [ ] License selected with legal review
- [ ] Commercial model designed (cloud / enterprise / hybrid)
- [ ] OSS scope defined (what's open vs. closed; documented)
- [ ] CONTRIBUTING.md, CODE_OF_CONDUCT.md, SECURITY.md in repo
- [ ] CLA or DCO process for contributors
- [ ] OSS-engineering capacity allocated (1-2 FTE-equivalent)
- [ ] DevRel / community management hired or scoped
- [ ] Conversion path designed (OSS → paid)
- [ ] Public roadmap or signal of OSS direction
- [ ] License-change process documented (or commitment to NOT change)
- [ ] Quarterly OSS metrics review (stars, downloads, contributors, conversions)

## Mistakes to Avoid

- **OSS as marketing without commercial model.** Don't release without a paid path.
- **Open-sourcing too early (pre-PMF).** Focus on PMF; OSS amplifies what works.
- **Wrong license for the strategy.** MIT for cloud business = competitor risk. AGPL for sale-to-enterprise = legal review pain.
- **License switches.** Burns community trust; do it only if survival demands.
- **Over-promising community influence on roadmap.** Founders set roadmap; community informs.
- **Free-riding on contribution.** Credit + sometimes pay top contributors.
- **No OSS DRI.** Community needs predictable response cadence.
- **Letting issues pile up.** Stale issues with 100s of comments signal abandonment.
- **Splitting energy 50/50 OSS vs paid customers.** Paid customers always win in a tie; communicate that honestly.
- **Open-sourcing the bait, hiding the value behind paywall.** Customers will notice and resent.
- **Fighting forks publicly.** Forks happen; usually they don't matter; engaging publicly amplifies them.
- **Hiding behind "we're open-source"to avoid product investment.** OSS doesn't substitute for product quality.
- **Skipping CLA/DCO.** Without contribution agreements, you can't relicense, can't sublicense, can't enforce against forks.

## See Also

- [Moats and Defensibility](moats-and-defensibility.md) — strategic context
- [Pricing Strategy](pricing-strategy.md) — adjacent
- [Pricing Packaging Tier Design](pricing-packaging-tier-design.md) — open-core pricing
- [Multi-Product Strategy](multi-product-strategy.md) — adjacent
- [Founder Story](founder-story.md) — OSS narrative
- [Competitive Positioning](competitive-positioning.md) — OSS positioning
- [Founder Brand](../3-distribute/founder-brand.md) — pairs with OSS distribution
- [GitHub Distribution](../3-distribute/github-distribution.md) — OSS distribution channel
- [Building in Public](../3-distribute/building-in-public.md) — adjacent
- [Channel Selection](../3-distribute/channel-selection.md) — OSS as a channel
- [Developer Portal & API Sandbox (VibeWeek)](../../VibeWeek/6-grow/developer-portal-api-sandbox-chat.md) — adjacent developer experience
- [Community Platforms (Reference)](../../VibeReference/content/marketing-and-seo/community-platforms.md) — community tooling
- [GitHub (Reference)](../../VibeReference/content/devops-and-tools/github.md) — GitHub usage
- [Public Roadmap](../2-content/public-roadmap.md) — OSS roadmap surface
