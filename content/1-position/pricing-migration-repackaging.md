[Back to Day 1: Position](README.md)

# Pricing Migration & Repackaging: Restructuring Plans Without Losing Customers

Most B2B SaaS founders raise prices once or twice (see [Raise Prices](../4-convert/raise-prices.md)) before they encounter the harder problem: their pricing structure itself is wrong. The 4-tier plan ladder doesn't match how customers buy. The per-seat model is breaking down because customers want per-credit. The "Pro" plan has bloated to 47 features while the "Starter" still looks like the 2022 version. The free tier is cannibalizing low-end paid. The "feature usage" is now happening primarily through one feature you priced as a freebie. The current pricing is broken — but you have 800 customers grandfathered into 6 different historical SKUs, three legacy discount codes still active, and a sales team trained on the old plan-comparison talk track.

This is pricing migration: restructuring HOW you charge, not just how much. It's harder than a price increase. Done right, it produces 20-50% revenue lift over 12 months and a sustainable structure for years. Done wrong, you trigger a churn spike, a sales-team revolt, a Reddit thread, a refund tsunami, and 6 months of confusion across your CS team about which customer is on which plan.

This is the playbook for designing, sequencing, and executing a pricing migration without losing customers — covering when to do it, how to design the new structure, how to grandfather existing customers, how to communicate, and how to operationalize it across product / sales / billing / CS / support.

## What Done Looks Like

A successful pricing migration produces:

- A NEW pricing structure that matches how customers actually buy
- Existing customers grandfathered or migrated with minimum disruption (target: <2% churn attributable)
- New customers on the new structure from day one
- Clean SKU inventory in your billing system (legacy SKUs deprecated and contained)
- Sales team retrained with new playbooks and battle cards
- CS team able to articulate "why this is better for you" to existing customers
- Support team handling migration questions confidently
- Revenue impact measurable + positive within 90 days
- A 12-month path to sunset the legacy plans entirely (or grandfather them gracefully forever)
- Zero "gotcha pricing" stories on Reddit / Hacker News
- Internal alignment that the new structure is the structure for the next 2-3 years

This pairs with [Pricing Strategy](pricing-strategy.md) (the foundation), [Pricing Packaging Tier Design](pricing-packaging-tier-design.md) (the design discipline), [Raise Prices](../4-convert/raise-prices.md) (sister discipline; price increase vs structural change), [Pricing Page](../4-convert/pricing-page.md) (where the new structure surfaces), [Pricing Experiments](../4-convert/pricing-experiments.md) (testing pre-migration), [Pricing Review Cadence](../4-convert/pricing-review-cadence.md) (operational rhythm), [Reduce Churn](../4-convert/reduce-churn.md) (churn risk during migration), [Annual Contract Negotiation](../4-convert/annual-contract-negotiation.md) (renewal moment is migration moment), and [Sales Playbook](../4-convert/sales-playbook.md) (sales team retraining).

## When to Migrate (and When NOT to)

Don't run a pricing migration if any of these are true:

**You're confusing "we should change pricing" with "we should change packaging."** A 10% price increase is NOT a migration. Migration changes the metric (per-seat → per-credit), the tier structure (4 plans → 2 plans + custom), the packaging logic (modular bolt-ons vs all-in tiers). If you only need a price increase, see [Raise Prices](../4-convert/raise-prices.md).

**Your runway is under 9 months.** Migrations take 3-9 months from design to retired-old-plan. Don't do this in fundraising panic.

**You have <50 paying customers.** Below this scale, just announce the change and move everyone over. There's no migration; there's a transition.

**You haven't tested the new structure on at least 20 prospects + 10 existing customers.** Pricing migrations that aren't tested fail spectacularly. Talk-test before you ship.

**Your pricing currently works.** "Working" = predictable conversion, predictable expansion, no significant churn-by-pricing. Don't migrate if it ain't broken.

**You're using migration as a Trojan horse for a 50% price hike.** Customers see through this. Migrate the structure as honestly as possible; raise prices separately, transparently.

**Sales team isn't aligned.** A migration with a sales team that doesn't believe in it produces 5x the friction. Get sales bought in BEFORE customers see anything new.

**The new structure is more complex than the old.** Migrations should usually simplify. If the new structure is "simplification by adding a fourth dimension," reconsider.

If any of these apply, fix the precondition first. Pricing migrations are real change-management projects.

## When You're Ready

Migrate when ALL of these are true:

**1. Your current structure systematically misprices a real customer segment.** Examples: per-seat model breaks for enterprise (they want unlimited seats, capped consumption); free tier eats into Starter (need to merge or repackage); a specific feature has become the dominant value driver but is bundled across all tiers (extract it).

**2. You have evidence — not just intuition.** Customer interviews, win/loss data, pricing experiments, or honest competitive review. The signal is strong enough that 5+ independent data points point the same way.

**3. The new structure has been pressure-tested with prospects.** 20+ sales conversations using the new pricing language. Conversion rate looks comparable or better.

**4. You can articulate the new structure in 30 seconds.** "We charge per X, with tiers based on Y. The most popular plan is Z." If it takes 5 minutes, the structure isn't simple enough yet.

**5. Engineering / billing systems can support both old and new SKUs simultaneously.** You'll run both for 6-18 months. If you can't represent that in your billing tool, you can't migrate.

**6. Leadership commits to a 6-12 month rollout window.** This isn't a quarterly project. Plan for it.

If 5+ of these are true, you're ready.

## Designing the New Structure

A pricing migration is FIRST a design problem. The structure is the artifact; everything else is execution.

```
Six questions to answer in design:

1. What's the new metric?
   - Per-seat? Per-event? Per-record? Per-credit? Per-API-call?
   - Hybrid (per-seat + capped consumption)?
   - The "metric" is what the bill grows with as customers grow

2. How many tiers, and what are they?
   - Recommended for B2B: 2-3 tiers + Enterprise
   - Free tier? Self-serve only? Sales-required for higher tiers?
   - Each tier needs a distinct buyer profile (small team / mid / enterprise)

3. What's bundled vs unbundled?
   - Core product in every tier
   - Premium features in Pro/Plus tier
   - Bolt-ons / add-ons (avoid; each one adds cognitive load)
   - Modular pricing (e.g., per-product line items) is sometimes right but usually overengineered

4. What's the entry point + ladder?
   - Free → Starter → Pro → Enterprise (classic SaaS ladder)
   - Or: Self-serve → Sales-led (two-tier ladder)
   - Or: Single tier + custom (very simple; works at low ACVs)

5. What's the value driver in each tier?
   - Why does someone upgrade Tier 1 → Tier 2?
   - Specific feature? Team size? Volume? Compliance/SSO?
   - The upgrade reason must be CLEAR + non-jankily framed

6. How does pricing scale with success?
   - Land light, expand heavy (small entry + high upgrade frequency)?
   - Land heavy, expand minimal (sales-led)?
   - Aim for net dollar retention 110%+; pricing structure determines this

Output: a 1-page structure document with:
- Metric (one sentence)
- Tier names + price points
- 5-7 features per tier (NOT a 30-row matrix)
- Buyer profile per tier
- Upgrade path
- Two key competitive comparisons
```

Pressure-test before commit:
- Show structure to 5-10 customers (NDA if needed); ask "would this make sense to you?"
- Show to sales team; do they understand it without explanation?
- Run 5 mock sales calls using new structure; measure how often they revert to old language

## Grandfathering: The Single Most Important Decision

This is where migrations succeed or fail. How you handle existing customers determines churn risk + customer-trust impact.

```
Five grandfathering options (pick consciously):

OPTION A: PURE GRANDFATHER (most generous)
- Existing customers stay on their plan forever
- New plans available only to new customers
- New features available to grandfathered customers (your decision)
- Pros: zero churn risk; trust-building
- Cons: complex SKU inventory forever; revenue penalty (legacy plans don't grow)
- Best for: small customer base; high LTV; trust-critical brands

OPTION B: TIME-BOXED GRANDFATHER
- Existing customers locked at current price for 12-24 months
- After window: migrate to new plan (with notice)
- Pros: contained complexity; eventual clean state
- Cons: communications burden; 12-24 month "watch the calendar" stress
- Best for: most cases (the common default)

OPTION C: VOLUNTARY MIGRATION
- Existing customers stay on old plan UNLESS they choose to migrate
- Incentivize migration (e.g., "20% discount for first year if you switch now")
- After 12-24 months: forced migration
- Pros: customer agency; lower friction
- Cons: dual SKU inventory; sales-team distraction
- Best for: when new plan is genuinely better for most customers

OPTION D: AUTO-MIGRATE WITH PRICE LOCK
- All existing customers move to nearest-equivalent new plan
- Their current price is preserved (price lock) — even if it's a discount vs new pricing
- Pros: clean inventory in 30 days
- Cons: requires "nearest-equivalent" mapping for every customer
- Best for: structural changes where pricing doesn't increase

OPTION E: AUTO-MIGRATE WITH PRICE INCREASE
- All existing customers move + new pricing applies at next renewal
- Maximum revenue lift
- Maximum churn risk
- Pros: clean state; revenue gain
- Cons: trust impact; churn risk; press risk
- Best for: only when current pricing is dramatically broken

Selection rule:
- For most B2B SaaS: Option B or C
- For loyalty-critical / community-driven products: Option A
- For broken pricing fixing: Option D
- Avoid Option E unless absolutely necessary (and then with massive transparency)
```

The 'price-lock' commitment matters: tell customers, in writing, "we will not raise your price as a result of this migration." Then keep that promise. Trust here pays dividends for years.

## Sequencing the Rollout

A typical pricing migration is a 6-12 month project. Sequencing matters.

```
T-6 months: DESIGN
- Develop new structure (1-page artifact)
- Pressure-test with customers + prospects
- Iterate based on feedback
- Lock the structure
- Internal alignment (CEO + sales lead + marketing lead + finance lead + product lead)

T-4 months: BUILD
- Engineering / billing builds new SKUs in your billing system (Stripe, Chargebee, etc.)
- Create migration logic for existing customer mapping
- Build internal admin tooling for "switch plan for customer X"
- Update the pricing page (staging environment)
- Update sales tools (battle cards, pricing calculators, proposals)
- Update CS / support knowledge base
- QA the new pricing in test environment

T-2 months: SOFT LAUNCH (NEW CUSTOMERS ONLY)
- New signups go on new pricing
- Pricing page updated
- Sales team trained + practicing
- Internal monitoring: watch conversion rate; look for friction
- Existing customers see no change yet (they're on their grandfathered plan)
- 4-6 weeks of soft launch lets you tune before customer-facing comms

T-1 month: EXISTING CUSTOMER COMMUNICATIONS
- Email + in-app notification to all customers explaining:
  - What's changing
  - What stays the same for them (price-lock; grandfather terms)
  - When their plan transitions (if Option B/D/E)
  - What's better for them (specific features)
  - Where to ask questions
- 1-month notice minimum; 90 days for major changes
- CSMs reach out personally to top 50 accounts
- FAQ page; CS team trained on objections

T+0: LAUNCH DAY
- Public pricing page fully updated
- All sales team using new pricing
- Press / blog post if news-worthy
- Customer comms wave 1 (most customers)

T+30 days: POST-LAUNCH MONITORING
- Track: conversion rate (vs prior 90 days), churn rate, support volume, CS escalation
- Watch for outliers; intervene quickly
- Survey new customers on pricing clarity

T+90 days: ASSESSMENT
- Hard read on revenue impact
- Customer feedback synthesis
- Decisions on legacy SKU sunsetting
- Begin prep for forced migration window (if Option B/D)

T+180 days: LEGACY PLAN SUNSET (where applicable)
- Final notices to grandfathered customers (if Option B with 6-month window)
- Plans migrated; legacy SKUs deprecated
- Old SKUs remain only for true historical accounting
```

## The Communications Playbook

How you tell customers determines how they react. Get this wrong and you generate the Reddit thread.

```
Tone guidelines:
- Honest, not corporate
- Customer-benefit-led, not company-need-led
- Specific, not vague ("we're streamlining our offerings")
- Acknowledge change without apologizing for it
- Lead with what's NOT changing for them (price lock, grandfathering)

The customer email template:

Subject: Updates to [Product] pricing — and what it means for you

Hi [name],

We're making changes to [Product]'s pricing structure. We want to be upfront about what's changing — and especially what's NOT changing for you as an existing customer.

WHAT'S CHANGING (for new customers, starting [date]):
- [One-sentence description of new structure]
- [What's better about it: simpler / aligned with usage / more flexible]
- [Where to learn more: link to pricing page]

WHAT STAYS THE SAME (for you, as a customer since [year]):
- Your current plan: [plan name] at [price]
- Your price will not increase as a result of this change. We're locking your current price for [12 / 24 months / forever].
- All existing features in your plan continue to be available.

WHAT YOU CAN DO (optional):
- If you'd like to switch to the new structure (in case it benefits you), [link to comparison]
- We'll send you a comparison reminder in [6 months]

Why we're making this change:
- [Honest 2-3 sentence reason — usually: structure is clearer; better matches usage; supports your growth]

Questions?
- [Email / link to FAQ / link to schedule a call with your CSM]

Thanks for being a [Product] customer. We don't take it for granted.

[Founder name]


Anti-patterns:
- "We've decided to streamline our offerings" (vague; corporate)
- Burying the price impact ("there may be some changes")
- Lengthy justifications ("after careful consideration ...")
- Skipping FAQ (drives support volume)
- Sending it from a generic email (not founder / not personal)

Channel mix:
- Email primary (everyone gets it)
- In-app notification (first login after launch)
- Personal outreach for top 20-100 accounts (CSM or founder)
- Public blog post (drives transparency)
- FAQ page (handles objections)
- Tweet thread (for community-driven products)
```

## Sales Team Retraining

Sales is the largest variable in migration success. Without retraining, they'll revert to the old language for months.

```
Sales retraining components:

1. Why we made this change (the customer-value story)
   - Internal-only deck explaining the rationale
   - Common customer objections + your response

2. New pricing playbook
   - Plan ladder explanation (30-second pitch)
   - When to recommend each plan
   - Discount approval thresholds (often tighter post-migration)
   - Trade-up / trade-down scripts

3. Existing customer conversations
   - "I see you're on the old [Plan]; here's how it compares to the new structure"
   - Voluntary migration conversations
   - Contract renewal moments (often tied to migration)

4. Battle cards
   - Updated competitive comparisons
   - Updated proposal templates
   - Updated quote tools (CPQ if applicable)

5. Practice
   - Mock sales calls with peer review
   - Recorded calls with feedback
   - Pricing-specific role-plays

6. Rollout cadence
   - 2-week training runway
   - 4-week pricing-focused weekly review
   - First quarter: every win/loss reviewed for pricing-related signal

Failure mode: sales team trained for one day, then reverts to old language because new is uncomfortable.
Fix: 4-6 weeks of weekly pricing-pulse reviews; recorded mock calls with peer review.
```

## Operational Realities

```
Things that WILL break during migration:

1. Stripe / Chargebee SKU explosion
   - Old SKUs + new SKUs + legacy promo codes + custom enterprise SKUs
   - Action: name SKUs consistently; tag legacy; build report of "active grandfathered customers"

2. Customer support flooded with "what plan am I on?" questions
   - Action: in-app "your plan: [X]" prominent; pre-empt with comms

3. Sales team negotiating off the new pricing inappropriately
   - Action: discount approval workflow tightens during migration window

4. CS reps confused about what migration says to existing customers
   - Action: enablement doc; FAQ; named DRI for migration questions

5. Product team gets feature requests blocking migration
   - Action: feature freeze on migration-relevant code paths during launch window

6. Finance can't reconcile MRR mid-migration
   - Action: dashboard showing "old SKU MRR" vs "new SKU MRR" separately

7. Accounting / revrec headache
   - Action: get accounting/revrec people in design phase

8. Customer renews on legacy plan because nobody told them about new
   - Action: renewal playbook explicitly discusses migration option

9. International / localized pricing not migrated correctly
   - Action: don't forget non-USD pricing in design

10. Annual customers renew with old pricing locked for 12 more months
    - Action: time annual renewal touch points to migration messaging

11. Sales team negotiates "old price" as a discount on new plan
    - Action: clear policy; sales-leader-approved exceptions only
```

## Common Failure Modes

```
Failure: "Stealth" migration (no comms; just change pricing page)
- Pattern: hope existing customers don't notice; they do; trust hit
- Fix: over-communicate; explicit price-lock for existing

Failure: New structure more complex than old
- Pattern: 4 plans → 6 plans + bolt-ons; sales team confused
- Fix: simplification > complexity; if the new structure is more complex, the design isn't done

Failure: Migration without sales alignment
- Pattern: marketing ships; sales doesn't believe; reverts to old talk track
- Fix: sales lead is co-owner of design; sales practice before launch

Failure: Existing customers forced onto worse plan
- Pattern: forced migration where some customers' new plan is more expensive for less
- Fix: nearest-equivalent mapping with price lock; only force-migrate if new is at-least-as-good

Failure: Public Reddit / HN thread about "they raised my prices via migration"
- Pattern: opaque migration; customers feel duped
- Fix: TRANSPARENCY in comms; explicit "price will not increase" commitment

Failure: Engineering not consulted on billing complexity
- Pattern: billing system can't represent both old and new; manual workarounds; chaos
- Fix: engineering in design phase; SKU inventory plan from day one

Failure: No time-box on legacy plans
- Pattern: 5 years later, you have 47 SKUs; no one knows what's active
- Fix: time-bound legacy plans; 12-24 month sunset; clean inventory annually

Failure: Migration coincides with major product launch
- Pattern: customers can't tell if pricing change is the news or the product launch
- Fix: sequence them 60+ days apart

Failure: Sales-team incentives misaligned (still comp'd on legacy plan ACV)
- Pattern: AEs avoid migrating customers because comp doesn't reward it
- Fix: comp-plan adjustment that aligns with migration

Failure: International / FX considerations skipped
- Pattern: USD migrated; EUR/GBP/JPY pricing untouched; international customers confused
- Fix: include all currencies in scope from design phase

Failure: Migration runs forever
- Pattern: design ↔ build ↔ test loop with no launch deadline
- Fix: pick a launch date in design phase; ship with iteration plan

Failure: Trying to fix everything in one migration
- Pattern: structure + price + tier names + bolt-ons + free tier all change simultaneously
- Fix: one or two big changes max; sequence the rest
```

## What Done Looks Like (recap)

A successful pricing migration:

- [ ] New structure articulated in 30 seconds (in writing)
- [ ] Tested with 20+ prospects + 10+ existing customers pre-launch
- [ ] Engineering / billing supports old + new SKUs simultaneously
- [ ] Sales team trained, practiced, comp-aligned
- [ ] Existing customers grandfathered with explicit price-lock commitment
- [ ] Customer communications wave-rolled (email + in-app + personal for top accounts)
- [ ] FAQ + comparison tools live
- [ ] CS / support trained for migration questions
- [ ] Pricing page launched cleanly
- [ ] Conversion rate stable or improved within 90 days
- [ ] Churn attributable to migration <2%
- [ ] Legacy plan sunset path defined
- [ ] No high-profile public complaint thread
- [ ] Internal alignment that the new structure holds for 2-3 years
- [ ] Revenue impact positive within 6 months

## Mistakes to Avoid

- **Confusing pricing migration with raising prices.** Different problems; different playbooks.
- **Skipping customer pressure-testing.** Pricing decisions made in conference rooms break in the field.
- **Underestimating the sales-retraining lift.** 6 weeks of weekly cadence minimum.
- **Forced migration without explicit price-lock for existing customers.** Trust-destroying.
- **Stealth migration.** Customers always notice; the only question is whether they trust you afterwards.
- **Increasing complexity rather than reducing it.** Pricing should always simplify in migration.
- **No time-box on legacy plans.** Inventory chaos within 18 months.
- **Skipping the engineering / billing conversation in design.** SKU inventory has to support both old and new.
- **Migration coincident with major product or company news.** Sequence 60+ days apart.
- **No DRI for the migration project.** Cross-functional projects without a single owner fail.
- **Communications that lead with "we" not "you."** Customer-benefit framing or it doesn't land.
- **Not adjusting sales comp during migration window.** Sales reverts to old plans when comp says to.
- **Forgetting international currencies / localizations.** Migration must be global.
- **No measurement framework.** Without tracked conversion + churn + support volume, you don't know if it worked.
- **Iterating after launch without a hold-period.** Don't tweak in week 2; let signal stabilize for 60 days.

## See Also

- [Pricing Strategy](pricing-strategy.md) — foundational pricing discipline
- [Pricing Packaging Tier Design](pricing-packaging-tier-design.md) — the design discipline
- [Pricing Page](../4-convert/pricing-page.md) — where the new structure surfaces
- [Pricing Experiments](../4-convert/pricing-experiments.md) — pre-migration test methodology
- [Pricing Review Cadence](../4-convert/pricing-review-cadence.md) — operational rhythm
- [Raise Prices](../4-convert/raise-prices.md) — sister discipline (price increases)
- [Free Trial vs Freemium](free-trial-vs-freemium.md) — adjacent acquisition / monetization
- [Annual Contract Negotiation](../4-convert/annual-contract-negotiation.md) — renewal moment is migration moment
- [Reduce Churn](../4-convert/reduce-churn.md) — churn risk during migration
- [Sales Playbook](../4-convert/sales-playbook.md) — sales retraining
- [Sales Compensation Plans](../4-convert/sales-compensation-plans.md) — comp adjustments during migration
- [Customer Marketing Program](../4-convert/customer-marketing-program.md) — customer-comms muscle
- [Voice of Customer Program](../4-convert/voice-of-customer-program.md) — pre-migration signal source
- [Multi-Product Strategy](multi-product-strategy.md) — when migration involves splitting products
- [Vertical SaaS Positioning](vertical-saas-positioning.md) — vertical-specific pricing considerations
