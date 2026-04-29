[Back to Day 4: Convert](README.md)

# Run Pricing Experiments That Move Revenue (Without Burning Trust)

*Most indie founders set their pricing once and never touch it. They published the pricing page in week 4, picked $19/$49/$99 because it felt right, and 18 months later are still on those numbers despite shipping a 3x more capable product. The teams that win iterate on pricing deliberately — small experiments, careful measurement, transparent communication — and over 18-24 months end up with 2-3x the ARPA of where they started. The catch: pricing experiments are the single highest-trust-risk experiments you can run, because customers feel personally affected by price changes in a way they don't feel about UI changes. Done badly, you erode trust and accelerate churn. Done well, you build a sustainable revenue trajectory.*

## Why Most Founder Pricing Stays Stuck

Three failure modes hit founders the same way:

- **Set-and-forget after launch.** Founder picks pricing on launch day; never revisits. The product evolves, the market evolves, the customer mix evolves — but pricing stays frozen. By year 2, the value-to-price ratio is wildly off; some customers are getting a steal, others are leaving because the entry tier doesn't fit them. The opportunity cost of static pricing is bigger than founders realize.
- **One big price change every year (or two).** Founder accumulates 12-18 months of "we should raise prices" pressure, then ships a single 50%-increase price change to all new customers (sometimes existing). Customer reaction is large; some churn; the change is bigger than necessary because it's compounded delays. Smaller, more frequent adjustments preserve trust better.
- **No experimentation discipline.** Founder changes pricing reactively — "competitor lowered theirs; we should match" or "this customer pushed back; let's drop our enterprise tier." No measurement; no learning; just whiplash. Pricing is treated as a feeling rather than a discipline.

The version that works is structured: a clear pricing-tier philosophy, small targeted experiments tested on new customers (not existing), measurement of conversion + ARPA + retention together, and quarterly reviews that compound learnings.

This guide assumes you have already done [Pricing Strategy](../1-position/pricing-strategy.md) (the initial framework), have shipped [Pricing Page](pricing-page.md) (the artifact), have completed [Raise Your Prices](raise-prices.md) (one-off increase mechanics), and have [PostHog Setup](../../../VibeWeek/6-grow/posthog-setup-chat.md) (the measurement layer).

## When Pricing Experiments Make Sense

**Run pricing experiments when:**
- 50+ paying customers (statistically meaningful conversion data)
- Stable product with clear feature tiers (not pre-PMF where pricing is conjecture)
- You can segment new vs existing customers cleanly (so experiments don't disrupt existing)
- You have 3+ months between any two pricing changes (avoid whiplash)
- Conversion or ARPA is genuinely a bottleneck (not just curiosity)

**Skip pricing experiments when:**
- Pre-PMF or pre-revenue (focus on PMF first, not pricing optimization)
- Below 50 customers (sample size too small; noise dominates signal)
- Your product changes weekly (pricing assumes stable feature scope)
- You can't track per-customer cohort retention (you'll move ARPA up but won't notice churn moving with it)
- You're in a regulatory price-control environment (some markets have pricing rules)

## The Pricing Experiment Hierarchy

Not all pricing changes are equal. The risk and learning vary dramatically by experiment type.

### Type 1: Tier Renaming / Packaging (low-risk, low-learning)
You rename "Pro" to "Business" or move feature X from one tier to another.

- Risk: low (existing customers grandfathered)
- Learning: incremental (some signal on segment fit)
- Frequency: as needed; minor change

### Type 2: New Tier Addition (low-risk, medium-learning)
You add a $999/mo tier above existing tiers OR a $9/mo entry tier below.

- Risk: low (new tier doesn't affect existing customers)
- Learning: high (does the new tier convert? does it pull from existing tiers?)
- Frequency: 1-2 times per year typical

### Type 3: Anchor / Display-Only Changes (medium-risk, medium-learning)
You change which tier is "Most Popular" highlight, or the visual presentation of pricing.

- Risk: medium (affects new-customer behavior; doesn't change actual prices)
- Learning: medium (which tier gets highlighted affects conversion mix)
- Frequency: every few months on the pricing page

### Type 4: Per-Tier Price Increase (medium-risk, high-learning)
You raise the price on one or more tiers by 10-30% for new customers; existing grandfathered.

- Risk: medium-high (new conversion can drop; existing customers eventually find out and feel the asymmetry)
- Learning: high (price elasticity for the segment)
- Frequency: 1-2 times per year max

### Type 5: Pricing Model Change (high-risk, high-learning)
You change from per-seat to usage-based, or add a metered overage component, or switch from monthly to annual default.

- Risk: high (every customer needs to understand the new model)
- Learning: high (different customer segments respond differently)
- Frequency: rarely; usually once or twice in a product's lifetime

For most indie SaaS in 2026, Type 2 (new tier addition) and Type 3 (anchor) are the experiments to run frequently. Type 4 (price increase) is once per 6-12 months. Type 5 is rare and significant.

## 1. Run Pricing Tests on New Customers Only

The single most consequential discipline. Existing customers should not be affected by your experiments.

```
Help me design the new-customer-only pricing experiment pattern.

The setup:

**Two flows on the pricing page**:

**Flow A (control)**: existing pricing, shown to a percentage of visitors
**Flow B (variant)**: new pricing, shown to a percentage of visitors

**Implementation**:

1. **Cookie-based assignment**: visitor's first visit assigns them to Flow A or B; persisted in cookie
2. **Server-side assignment**: signup webhook captures which flow the user was on; sticks for the user
3. **Existing customers**: never see the experiment; they're on their original pricing terms

**Volume requirements**:

- Need 100-500 new customers per arm to detect realistic differences (10-25% lift) at 80% power
- For most indie SaaS in 2026: that's 1-3 months of traffic for a meaningful test
- Lower-traffic founders should test for longer, accept smaller resolutions, OR just commit to a price change without the formal A/B

**Per [A/B Testing](ab-testing.md)**: same statistical discipline applies to pricing experiments

**Statistical caveats specific to pricing**:

- The conversion event is "paid signup" not "view pricing page" — much lower base rate
- Higher prices typically convert at lower rates BUT generate higher ARPA — measure both
- Retention matters MORE than conversion in pricing experiments (a 30%-lower-conversion-but-higher-retention cohort can win)
- Don't conclude based on month 1 conversion alone; wait 60-90 days to see retention

**The "we lost the test" decision**:
- Higher pricing converted lower; ARPA delta didn't compensate; retention didn't improve
- Roll back to original pricing for new customers
- Existing customers (on either pricing) keep what they had

Output:
1. The cookie + server-side assignment code
2. The PostHog event tracking (saw_pricing_page_variant, signed_up_variant, paid_variant, retained_30d_variant)
3. The dashboard schema (per-arm: traffic, signups, conversions, ARPA, 30/60/90-day retention)
4. The decision rules (when to call a winner, when to roll back)
5. The sample-size calculator for my actual traffic volume
```

The single most important rule: **never change pricing for existing customers as part of an experiment.** Even small changes erode trust if customers feel they're guinea pigs. Existing customers stay on their original terms; experiments only affect new visitors.

---

## 2. Test Anchor and Display Changes First

The cheapest, lowest-risk experiments. Run these before touching prices.

```
Design the anchor and display experiments.

**Experiment A: "Most popular" badge moves**

Current: "Pro" tier is highlighted as Most Popular
Variant: "Business" tier is highlighted as Most Popular

What you'll learn:
- Does highlighting affect conversion mix?
- Most teams find the highlighted tier captures 40-60% of new customers
- Moving the highlight to a higher tier increases ARPA without changing actual prices

Risk: low; cosmetic change

**Experiment B: Annual-vs-monthly default**

Current: Monthly default; toggle for annual
Variant: Annual default with prominent "save X%" callout; toggle for monthly

What you'll learn:
- What % of new customers go annual?
- Annual customers retain at 2-3x monthly rates; the difference is often huge
- Most indie SaaS undersell annual; switching the default produces significant ARPA + retention lift

Risk: low; monthly remains available; only the default changes

**Experiment C: Number of tiers visible**

Current: 4 tiers shown
Variant: 3 tiers (collapse Free + Starter into "Free with limits"; or hide Enterprise behind "contact sales")

What you'll learn:
- Decision paralysis is real at 4+ tiers
- Showing fewer tiers often INCREASES conversion in the visible tiers

Risk: low; total customers count + total ARR matter, not raw conversion

**Experiment D: Price-anchor presence**

Current: Three tiers ($19/$49/$99)
Variant: Four tiers ($19/$49/$99/$249) where the $249 is for the largest customers

What you'll learn:
- Adding a high anchor tier often raises perceived value of the middle tier (the $49 looks cheap next to $249)
- Even if nobody buys the anchor tier, ARPA on lower tiers can rise

Risk: low; higher tier doesn't reduce existing options

**Experiment E: "Best value" labeling**

Variant: Mark a specific tier as "Best Value" or "Recommended" with a different color/badge

What you'll learn:
- Same as Most Popular; framing affects choice

For each experiment:
- Run for 4-6 weeks (need 200+ paid signups per arm minimum)
- Measure: conversion rate per tier, total signups, total ARR added
- The winning variant: ARR per visitor, not just conversion rate

Output:
1. The 5 experiment designs with hypotheses
2. The sequencing: which to run first (start with highest-leverage)
3. The measurement template
4. The implementation timeline (one experiment at a time, 4-6 weeks each)
```

The single most-undersold tactic: **moving the "Most Popular" badge to the next tier up.** It's a free experiment with no actual price change, and it produces measurable ARPA lift in most cases.

---

## 3. Run Targeted Price Increases (Type 4)

Once anchor experiments have stabilized, test actual price increases. New customers only.

```
Design the per-tier price-increase experiment.

The pattern:

**Pick the tier to increase**:
- Usually mid-tier ($49-$99 range), where elasticity is highest
- Or the tier with strongest demand signal (high conversion + high retention)
- Avoid: the tier that's struggling (price won't fix product fit)

**Pick the increase magnitude**:
- 10-15% for "minor" tests (low statistical power but low risk)
- 20-30% for meaningful tests (better statistical power, real risk)
- Avoid >30% in a single test (too risky; learning is messy)

**Run the experiment**:

- Flow A: $49/mo (control)
- Flow B: $59/mo (test, 20% increase)
- 50/50 traffic split for 60-90 days
- Measure: conversion rate, ARPA, 60-day retention, 90-day retention

**Decision rule**:

- **Winner = Flow B** if: ARPA × retention × volume > Flow A. Often the case even with lower conversion.
- **Winner = Flow A** if: Flow B's volume drop multiplies the per-customer ARPA gain into a net loss.
- **Inconclusive**: extend the test or accept the noise; commit based on gut + math

**Hard rule**: at the end of the test, pick a price and commit. Don't keep two prices live in production permanently — that's complexity overhead.

**Communication after the test**:

- New pricing on the pricing page
- Existing customers grandfathered (always)
- No proactive announcement to non-customers; price page just reflects new reality
- Press / launch coverage if you want to highlight the change strategically

**Anti-patterns**:

- Don't test multiple tiers' prices simultaneously (interactions corrupt the data)
- Don't test pricing changes the same week as major feature launches (confounded variables)
- Don't run tests longer than 90 days (price elasticity changes with seasonality + market)

Output:
1. The price-increase test plan template
2. The decision rule with worked example math
3. The post-test communication (or lack thereof)
4. The roll-out vs roll-back logic
```

The single most-misunderstood pattern: **higher prices often produce higher TOTAL revenue even with lower conversion.** A 20% price increase that drops conversion 10% nets +10% revenue per visitor. Always measure ARR per visitor, not just conversion rate.

---

## 4. Test New Tier Additions (Type 2)

Adding tiers is generally safe and informative. Run these often.

```
Design the new-tier-addition experiment.

The two patterns:

**Pattern A: Adding a higher tier**

You currently have $19/$49/$99. You add $249 (Business / Team / Enterprise tier).

Hypothesis: a higher tier captures customers you previously lost ("we needed more seats / more usage / SSO" customers)

Implementation:
- Add the tier to the pricing page
- Define the differentiating features (usually: higher seat counts, SSO/SCIM per [SSO & Enterprise Auth](../../../VibeWeek/6-grow/sso-enterprise-auth-chat.md), audit logs, dedicated support)
- Some customers move up from $99; some new customers self-select higher
- Measure: new tier signups, total ARR change, average ARPA change

Risk: low; doesn't affect existing customers; can be removed if it underperforms

**Pattern B: Adding a lower tier**

You currently have $49/$99/$249. You add $19 (Starter tier).

Hypothesis: a lower tier captures customers who were dropping at the entry point

Implementation:
- Define lower-tier limitations (lower seat count, fewer features, etc.)
- Risk: cannibalization — existing $49 customers might downgrade
- Mitigate: differentiate enough that downgrade is meaningful (significant feature gap)

Measure carefully:
- New low-tier signups
- Existing-customer downgrades to new tier (this is the big risk)
- Net ARR change

If cannibalization is too high: limit lower tier visibility; gate it behind specific contexts (e.g., "Free trial expires; here's a smaller starter tier") rather than open on the pricing page

Output:
1. The new-tier specification (features, limits, price)
2. The cannibalization analysis (current $49 customers' likelihood to downgrade)
3. The measurement plan (60-90 day evaluation)
4. The roll-back / iterate decision rule
```

The pattern that wins for most indie B2B SaaS in 2026: **adding a higher tier (Business / Team) with SSO/SCIM/audit logs.** It captures the mid-market segment that was previously lost; rarely cannibalizes existing tiers. Adding a lower tier is riskier; do it only with cannibalization analysis.

---

## 5. Switch Pricing Models Carefully (Type 5)

Major pricing model changes — per-seat to usage-based, or new metering — are the most consequential and the most risky.

```
Design the pricing-model-change strategy.

When this is right:
- Customer feedback consistently asks for it ("we're not using all the seats; can we pay for usage?")
- Per-customer revenue is plateauing on per-seat model
- Competitors have moved to a different model and you're losing deals
- The product's value scales with a metered axis (API calls, data processed, AI tokens used)

When this is wrong:
- You're chasing a trend without customer signal
- Your revenue is stable on the current model
- You don't have the engineering to support metered billing reliably

**The pattern**:

**Phase 1: Test new-model pricing for new customers only**
- Existing customers stay on current model
- Run for 6-12 months
- Validate: new customers convert; ARPA is sustainable; retention is comparable

**Phase 2: Offer migration to existing customers**
- Optional, opt-in migration
- Communicate the trade-offs honestly: "Your usage suggests new model would cost X; current is Y"
- Some customers will benefit; some won't; respect the choice

**Phase 3: Deprecate old model for new customers**
- After Phase 1 validation, only new model on the pricing page
- Existing customers remain grandfathered

**Phase 4: Force migration only with significant runway**
- 12+ months notice
- Generous grandfathering options
- Refund offer for customers who don't fit the new model
- Per [Raise Your Prices](raise-prices.md) for the change-management discipline

**Anti-patterns**:

- Switching everyone overnight (mass-churn risk)
- Hidden price increases via metering changes (trust-destroying)
- Multiple model changes within 24 months (whiplash)

**Common failure**: per-seat → usage-based when usage isn't predictable for the customer. Customer can't budget; CFO blocks; you lose the deal.

Output:
1. The model-change decision tree (when to do it; when not)
2. The 4-phase rollout plan
3. The customer communication templates
4. The grandfathering policy
```

The biggest mistake: **forcing model changes on existing customers without notice or grandfathering.** Even profitable model changes destroy trust if forced. Generous grandfathering pays compounding dividends.

---

## 6. Measure What Matters (Beyond Conversion Rate)

Pricing experiments fail when measurement is too narrow. Look at the full picture.

```
Build the pricing-experiment dashboard.

Required metrics, per arm:

**1. Conversion funnel**:
- Visitors → pricing page views
- Pricing page views → tier clicks
- Tier clicks → signup starts
- Signup starts → paid conversions

**2. ARPA distribution**:
- Average revenue per account, by tier mix
- Median ARPA (sometimes more useful than mean)
- ARPA distribution (10th / 25th / 50th / 75th / 90th percentile)

**3. Retention (the lagging signal)**:
- 30-day retention
- 60-day retention
- 90-day retention
- Per [Reduce Churn](reduce-churn.md): the cohort tracking

**4. Cohort revenue**:
- Total ARR added per arm = (signups × ARPA × retention)
- This is the metric that matters; not raw conversion

**5. Tier mix shift**:
- Which tier did new customers pick?
- Did the experiment shift the mix toward higher or lower tiers?
- Tier-mix-shift can produce ARPA gains even when prices don't change

**6. Customer feedback / NPS / CSAT** (per [Customer Feedback Surveys](../../../VibeWeek/6-grow/customer-feedback-surveys-chat.md)):
- Did NPS shift between arms?
- Are higher-priced customers more or less satisfied?
- Sometimes the answer is surprising

**Decision framework**:

**Winner if**:
- Total ARR per visitor is materially higher AND
- 60-day retention is comparable or better AND
- NPS is comparable or better

**Loser if any of**:
- Total ARR per visitor is lower AND not statistically meaningful
- 60-day retention is materially worse
- NPS drops materially

**Inconclusive if**:
- Statistical power insufficient (extend or accept)
- Mixed signals (ARPA up but retention down)

Output:
1. The dashboard schema
2. The "winner / loser / inconclusive" decision rule
3. The 90-day retention check (most experiments need this)
4. The qualitative-feedback collection (post-purchase survey: "how did you decide?")
```

The single most undervalued metric: **90-day retention by arm.** A higher-converting variant that retains worse can produce LESS revenue at year 1 than a lower-converting variant that retains well. Wait for the retention data.

---

## 7. Communicate Pricing Changes Without Eroding Trust

The communication is half the work. Get it wrong and even small changes feel hostile.

```
Design the customer-facing pricing-change communication.

**Scenarios**:

**Scenario A: New customer pricing only (existing grandfathered)**
- Communication: usually none required (existing customers don't see new prices unless they go to pricing page)
- If you launch the change publicly: tweet / blog / newsletter mentioning the change
- Tone: confident, not apologetic; this is the new pricing for new customers
- Existing-customer reaction: minimal if true grandfathering

**Scenario B: Price increase affecting existing customers (post-renewal)**
- Per [Raise Your Prices](raise-prices.md): 60-90 day notice, generous grandfathering options
- Communication: direct email from founder; not buried in notifications
- Honesty: explain WHY the change (new features shipped, costs increased, etc.)
- Choice: lock in old pricing for X more months; or upgrade to new tier; or cancel with full prorated refund

**Scenario C: New tier added**
- Communication: optional public announcement; pricing page reflects it
- Existing customers can upgrade or stay
- No friction added to existing customers' workflows

**Scenario D: Pricing model change**
- Multi-month communication arc
- Per Phase 4 above: 12+ months notice for forced changes
- Customer-by-customer outreach for high-value accounts
- Public blog post explaining the rationale

**Universal rules**:

- Never bury price changes in fine print; surface them
- Never change prices the same month as a major feature launch (mixed signals)
- Always provide an out (refund / cancel / grandfather option)
- Honor commitments (lifetime deals stay lifetime; annual contracts honor full term)
- Track customer reaction; if it's worse than expected, slow down or reverse

**Anti-patterns**:

- Pricing changes via app notification only (looks slimy)
- Surprise auto-renewals at higher prices
- Hidden meter changes that effectively raise prices
- Changes timed to make customers commit before discovery
- Defensive language ("our costs have increased" without specifics)

Output:
1. The communication template per scenario
2. The legal review checkpoint (any change affecting existing customers needs lawyer review)
3. The customer-reaction monitoring plan (NPS, support tickets, social mentions, churn rate)
4. The "we're rolling back" template if reaction is too negative
```

The biggest trust mistake: **silent price changes.** Customers who discover changes via fine print or invoice surprises feel manipulated. Transparent communication preserves trust even when the news isn't what they want.

---

## 8. Quarterly Pricing Review

Make pricing iteration a habit, not a crisis.

```
Design the quarterly pricing review.

Every 90 days, review:

**1. Where are we vs. where the market is?**
- Have competitors changed pricing? (signal, not mandate)
- Is our value-to-price ratio still right? Subjective but worth discussing
- Are we the cheap option, the premium option, the middle?

**2. Tier-by-tier health**:
- Which tier has the highest signup rate? Lowest? Why?
- Which tier has the best retention? Worst?
- Are customers expressing tier-fit issues in support / NPS?

**3. ARPA trends**:
- Is ARPA growing, flat, or declining over time?
- Per-cohort ARPA: do newer cohorts have different ARPA than older?
- Decline signals: pricing is too low for new customer mix, or premium tier isn't being chosen

**4. Active experiments**:
- What's currently running? Status?
- What's in the queue? Priority?

**5. New experiments to plan**:
- Pick 1-2 experiments for next quarter
- Resist the urge to run more than 2 simultaneously

**6. Roadmap of changes**:
- What changes are committed for next quarter (already decided, not testing)?
- What's the customer communication plan for those?

**7. Action items**:
- 1-2 specific experiments or changes to launch
- Owner + date

The 60-minute meeting:
- Founder + product / sales lead + finance (if applicable)
- Quarterly: not weekly; not annually

Output:
1. The quarterly review template
2. The dashboard view that supports the meeting
3. The decision-log for tracking experiments + outcomes over time
```

The discipline that compounds: **quarterly cadence, not crisis-driven changes.** Pricing experiments run on a schedule produce learning that compounds; pricing changes triggered by competitor moves or revenue panic produce whiplash.

---

## What Done Looks Like

By end of 90 days of pricing-experiment discipline:
1. **First experiment launched** (typically anchor / display)
2. **Measurement infrastructure** in place (PostHog + cohort dashboard)
3. **Decision rules** documented (winner / loser / inconclusive criteria)
4. **First quarterly review** completed
5. **1+ experiments yielded a measured ARPA lift** (or rolled back with clear reasoning)

Within 12 months:
- 3-5 pricing experiments completed
- ARPA up 15-50% from baseline (typical for well-run experimentation)
- Pricing-page conversion stable or improved
- Customer-trust intact (no significant churn from pricing)
- Repeatable playbook established

Within 24 months:
- Pricing iteration is a quarterly habit
- ARPA is materially different from where you started (often 2-3x for high-leverage products)
- Pricing intelligence informs product roadmap (which features warrant which tier)

---

## Common Pitfalls

- **Set-and-forget after launch.** Pricing should evolve as the product evolves.
- **Single big change every 18 months.** Smaller, more frequent adjustments preserve trust.
- **Existing-customer experiments.** Trust-destroying; new customers only.
- **Testing prices the week of a feature launch.** Confounded variables.
- **Multiple simultaneous price tests.** Interactions corrupt data.
- **Concluding from conversion rate only.** ARR per visitor is the metric; retention closes the loop.
- **No qualitative feedback collection.** Numbers don't tell you why; ask.
- **Burying price changes in fine print.** Customers feel manipulated.
- **No grandfathering policy.** Forced changes feel hostile.
- **Defensive communication.** "Our costs increased" sounds whiny; "We've shipped X new features" sounds confident.

---

## Where Pricing Experiments Plug Into the Rest of LaunchWeek

- [Pricing Strategy](../1-position/pricing-strategy.md) — the initial framework before any experiments
- [Pricing Page](pricing-page.md) — the artifact where experiments land
- [Raise Your Prices](raise-prices.md) — companion for the one-off price-increase mechanic
- [A/B Testing](ab-testing.md) — the broader experimentation discipline
- [Reduce Churn](reduce-churn.md) — retention is half the pricing-experiment outcome
- [Land and Expand](expansion-revenue.md) — expansion drives ARPA up alongside pricing
- [Customer Feedback Surveys](../../../VibeWeek/6-grow/customer-feedback-surveys-chat.md) — qualitative input
- [SSO & Enterprise Auth](../../../VibeWeek/6-grow/sso-enterprise-auth-chat.md) — common enterprise-tier feature
- [Audit Logs](../../../VibeWeek/6-grow/audit-logs-chat.md) — common enterprise-tier feature
- [Stripe Payments](stripe-payments.md) — the underlying billing infrastructure
- [Customer Support](../../../VibeWeek/6-grow/customer-support-chat.md) — handles confusion / pushback during changes
- [Trial-to-Paid](../../../VibeWeek/6-grow/trial-to-paid-chat.md) — pricing changes affect trial conversion

## Verdict

Pricing experiments are one of the highest-leverage activities for indie B2B SaaS in 2026 and one of the most under-invested. The teams that run quarterly experiments with discipline build 2-3x ARPA over 18-24 months without dramatic price-shock; the teams that set-and-forget end up with the same revenue per customer they had at launch.

For most indie SaaS founders in 2026: 1-2 pricing experiments per quarter, anchored by quarterly reviews, with new-customer-only test isolation, produces sustainable revenue growth. Don't run experiments before PMF; do run them once you have 50+ paying customers; treat pricing as a discipline, not a feeling.

---

[Back to Day 4: Convert](README.md)
