[Back to Day 4: Convert](README.md)

# Customer Success Metrics Framework: The Numbers That Tell You Who's About to Churn (and Who's About to Expand)

Most founders flying blind on customer success have one of two problems. Either they look at zero metrics and hope ("our customers seem happy") or they look at every metric and confuse themselves ("our NPS is 30, CSAT is 4.2, retention is 92%, what does that even mean together?"). The fix is a deliberate framework: a small number of metrics, each with a clear purpose, reviewed at the right cadence, by the right person. Done well, the metrics tell you exactly which 5 customers will churn next quarter and which 5 will expand — months before either happens. Done badly, you get the result first and the explanation later.

A working framework answers: which 5-7 metrics actually matter (not 30), how to define each (NRR is famously mis-defined), how to instrument (data plumbing matters), how to score health (which customers are at-risk now), what cadence to review, who owns each metric, and how to act on signals. Distinct from product-side metrics (DAU / activation / feature adoption) which are upstream of CS metrics.

This guide is the leadership playbook for CS metrics — definition, instrumentation, review cadence, action. Companion to [Activation Metric Definition](activation-metric-definition.md), [Reduce Churn](reduce-churn.md), [Expansion Revenue](expansion-revenue.md), [Renewal Negotiation Playbook](renewal-negotiation-playbook.md), [Win-Back Churned Customers](win-back-churned-customers.md), and [First Customer Success Hire](first-customer-success-hire.md).

## What Done Looks Like

By end of this exercise:

- 5-7 metrics chosen (not 30) with rigorous definitions
- Each metric has owner + cadence + target
- Health score combining 3-5 inputs into single risk grade per customer
- At-risk customers reviewed weekly; rescue plan per high-risk
- Expansion-ready customers reviewed monthly
- Quarterly business review (QBR) format with metric history
- Tooling: source-of-truth dashboards, not 5 conflicting reports

This pairs with [Activation Metric Definition](activation-metric-definition.md), [Reduce Churn](reduce-churn.md), [Expansion Revenue](expansion-revenue.md), [Renewal Negotiation Playbook](renewal-negotiation-playbook.md), [Win-Back Churned Customers](win-back-churned-customers.md), [First Customer Success Hire](first-customer-success-hire.md), [High-Touch Onboarding](high-touch-onboarding.md), [Onboarding Flow](onboarding-flow.md), [Customer References](customer-references.md), [Win Loss Analysis](win-loss-analysis.md), [Sales Playbook](sales-playbook.md), [Annual Contract Negotiation](annual-contract-negotiation.md), [Free to Paid](free-to-paid.md), [Pricing Strategy](../1-position/pricing-strategy.md), and [Moats & Defensibility](../1-position/moats-and-defensibility.md).

## The Core 7 Metrics

```
Help me pick the metrics that matter.

The framework — 7 metrics across 3 categories:

**OUTCOME metrics (what's happening to revenue)**:

**1. Gross Revenue Retention (GRR)**
Definition: Revenue retained from existing customers, EXCLUDING expansion.
Formula: 
  GRR = (Starting MRR - Churned MRR - Contracted MRR) / Starting MRR
  Measured monthly or annually.

Why: pure measure of retention quality. 100% GRR = no one churned or downgraded.

Targets:
- B2C / SMB SaaS: 75-85%
- Mid-market SaaS: 85-90%
- Enterprise SaaS: 90-95%

GRR < 80% is a leaky bucket; fix retention before scaling acquisition.

**2. Net Revenue Retention (NRR)**
Definition: GRR + expansion within existing customers.
Formula:
  NRR = (Starting MRR - Churned - Contracted + Expansion + Reactivation) / Starting MRR

Why: shows growth from existing book.

Targets:
- B2C / SMB: 95-105%
- Mid-market: 105-115%
- Enterprise: 115-130%+

NRR > 100% means existing customers grow your revenue without new logos. Best-in-class.

**3. Logo Retention**
Definition: % of customers (count) retained.
Formula: 
  Logo Retention = (Customers at start - Churned) / Customers at start

Why: catches the "few big customers churned" problem that GRR$ might mask.

Targets:
- B2C: 70-85% annually
- Mid-market: 85-90%
- Enterprise: 90-95%

**LEADING-INDICATOR metrics (what's about to happen)**:

**4. Activation Rate**
Definition: % of new customers who reach the activation milestone (defined per product).
Formula: Activated customers / New customers (in cohort)
Why: leading indicator of retention 12 months out.

See [Activation Metric Definition](activation-metric-definition.md).

Target: 40-70% depending on product / motion.

**5. Health Score**
Definition: composite score per customer (combining product usage + engagement + sentiment).
Output: Green / Yellow / Red OR 0-100 score
Why: predicts churn 30-90 days out.

Recipe (typical):
- Product usage trend (last 30d vs prev 30d)
- Login frequency
- Feature breadth (using N+ features)
- Support ticket volume + sentiment
- NPS / CSAT recent
- Champion engagement (is your champion still active?)

Weighted; benchmarked vs healthy customer baseline.

**SENTIMENT metrics (how customers feel)**:

**6. NPS (Net Promoter Score)**
Definition: % Promoters (9-10) - % Detractors (0-6).
Formula: standard NPS calc.
Cadence: quarterly OR rolling (every customer surveyed 3-6 months after onboarding; then annually).

Targets:
- B2B SaaS median: 30-50
- Best-in-class: 60-70
- Below 20: real problem

NPS is most useful directionally (trending up/down) and segmented (by tier, persona, geography).

**7. Customer Satisfaction (CSAT) — at touchpoints**
Definition: 1-5 rating after specific interaction (support ticket, onboarding session, feature launch).
Formula: % rating 4-5 / total responses.

Why: granular than NPS; per-interaction.
Targets: > 85% satisfied (4-5 out of 5).

Use case-by-case (after support ticket; after onboarding milestone), not periodic.

**Why these 7?**

They cover:
- Past (GRR, Logo Retention)
- Present (Health Score, NPS, CSAT)
- Future (Activation, NRR)
- Customers (Logo Retention) and revenue (GRR, NRR)

Together, they tell the story.

For my company:
- Today's metrics
- Gaps

Output:
1. Adopt this 7 OR justify variations
2. Per-metric: owner, cadence, target
3. Definition rigor
```

The mistake to avoid: **tracking 30 metrics**. Once you have 30, the team checks 0. Pick 5-7; review weekly/monthly; take action. Add more only when the team is fluently using the core.

## The Two Most-Misdefined: GRR and NRR

```
Help me get the formulas right.

The non-obvious traps:

**Trap 1: Including expansion in GRR**

Wrong: GRR = (Starting + Expansion - Churned - Contracted) / Starting
This hides retention problems with expansion.

Right: GRR = (Starting - Churned - Contracted) / Starting
GRR is purely DEFENSIVE; expansion belongs in NRR.

**Trap 2: Wrong handling of new logos in calculation**

GRR/NRR should NOT include new customers acquired in the period.
Only existing customers from start of period count.

Wrong: tracking "MRR change" overall = blends acquisition with retention.
Right: cohort the customers by start-of-period; measure ONLY their MRR change.

**Trap 3: Annual vs monthly inconsistency**

Annual GRR is NOT 12 × monthly GRR.
Compounding matters.

Right approach: track monthly cohort retention; quote both monthly and annual.

**Trap 4: Cancellation-then-renewal**

Customer cancels in Q1; signs back up in Q3.
Counted as: churned (Q1), new customer (Q3) → biases retention numbers.

Right: track on cohort basis; 90-day "win-back" window allows re-classification.

**Trap 5: Discounts mid-period**

Customer at $1000/mo gets discounted to $500/mo for 3 months as save play.
Naive: counted as $500 contraction.
Better: track temporary discounts separately; long-term price reduction = contraction.

**Trap 6: Multi-product / cross-sell**

Customer adds product B (your other product). 
Is that "expansion" or "new logo"?
Convention: same legal entity = expansion (counts in NRR); different legal entity = new logo.

**The disciplined definition**:

```
Period: month or year
Cohort: customers active at start of period

For cohort:
  Starting MRR = sum of cohort MRR at period start
  Churned MRR = MRR lost from cohort customers who fully churned in period
  Contracted MRR = MRR lost from cohort customers who downgraded
  Expansion MRR = MRR gained from cohort customers who upgraded
  Reactivation MRR = MRR from previously churned cohort customers (within 90d)

GRR = (Starting - Churned - Contracted) / Starting
NRR = (Starting - Churned - Contracted + Expansion + Reactivation) / Starting
```

Document this in your data dictionary. Refer to it when in doubt.

For my company:
- Current definitions
- Audit them

Output:
1. Audited definitions
2. Implementation in DB / dashboards
3. Reconciliation with finance
```

The discipline: **pick a definition; document it; never change it without telling everyone**. Most founders silently change formulas mid-year and wonder why metrics jumped. The number is less important than the consistency.

## Building a Health Score

```
Help me build a health score.

The composite recipe:

**Pick 4-6 inputs, each scored 0-100**:

**Input 1: Usage trend (weight: 25%)**
  - Compare last 30 days product usage to prior 30 days
  - Flat or up = 70-100
  - Down 20% = 40
  - Down 50% = 0
  Source: product analytics (PostHog / Amplitude / Mixpanel)

**Input 2: Login activity (weight: 15%)**
  - DAU / weekly active vs healthy baseline for tier
  - At baseline = 80
  - 50% of baseline = 40
  Source: auth logs

**Input 3: Feature breadth (weight: 15%)**
  - Using N of M key features
  - All key features = 100
  - 1 of M = 30
  Source: product analytics

**Input 4: Support load + sentiment (weight: 15%)**
  - High ticket volume = lower
  - Negative-sentiment tickets = lower
  - Time-to-resolution slow = lower
  Source: helpdesk + sentiment classifier

**Input 5: NPS / CSAT (weight: 15%)**
  - Recent NPS 9-10 = 100
  - 7-8 = 70
  - 0-6 = 30
  Source: survey tool

**Input 6: Champion engagement (weight: 15%)**
  - Champion (named) still active in product = 100
  - Champion left company = 30 (red flag)
  - No champion = 50
  Source: CRM + manual

**Composite**:
```
Health = sum(input * weight) / 100

Health bands:
- Green: 70-100 (healthy)
- Yellow: 40-70 (at-risk)
- Red: 0-40 (critical)
```

**Iteration**:

V1: implement; review monthly; adjust weights.
V2: validate against actual outcomes — did Red customers churn? Adjust.
V3: per-segment health scores (different inputs for SMB vs enterprise).

**Anti-patterns**:

- Too many inputs (5-6 is plenty)
- Equal weighting (some inputs predict more)
- Static weights forever (validate vs reality quarterly)
- No baseline normalization (different tiers have different healthy patterns)

For my product:
- Top inputs available
- Sources

Output:
1. Health-score recipe
2. Implementation plan
3. Validation cadence
```

The validation step most teams skip: **does the score actually predict churn?** Pick 50 historic Red customers; look at outcomes 90 days later. If 70%+ churned, score works. If 30%, recipe is wrong. Iterate on the recipe.

## Cadence: Who Reviews What When

```
Help me set the cadence.

The cadence by metric:

**Daily** (CS leader / dashboard):
- New escalations
- New Red health-score flips
- Critical accounts flag

**Weekly** (CS team standup):
- Health-score changes (Green → Yellow → Red)
- At-risk customer reviews (rescue plans)
- Renewals approaching in next 60 days
- Expansion opportunities (Green + high usage trend)

**Monthly** (leadership):
- GRR / NRR / Logo Retention
- Health-score distribution (% Green/Yellow/Red)
- Activation rate (cohort)
- Top 5 reasons for downgrades / churn
- Top 5 expansion signals

**Quarterly** (whole company / board):
- GRR / NRR trend (4 quarters)
- NPS trend
- CS team capacity vs book size
- Product feedback themes
- Strategic CS goals

**At renewal time** (per customer):
- Full health review
- Usage report to customer
- Expansion conversation prep
- Churn-risk save play if Red

For my team:
- Stage
- Capacity

Output:
1. Cadence calendar
2. Owner per cadence
3. Meeting templates
```

The single most-impactful cadence: **weekly at-risk review**. CS team reviews every Yellow/Red customer for 5-10 minutes. "What's happening? What do we do?" Each gets an action. Catches churns 30-60 days out — long enough to actually save.

## Tooling: Where the Numbers Live

```
Help me set up tooling.

The 2026 stack:

**Tier 1 — Indie / pre-CS-team ($0-200/mo)**:
- **Spreadsheet** (Sheets / Excel) — fine for < 200 customers
- **PostHog** — product usage data
- **HubSpot Free** OR **Airtable** — CRM-lite
- **Stripe Sigma** — revenue queries
- Manual NPS via Google Forms / Typeform

**Tier 2 — Scaling CS ($200-2K/mo)**:
- **HubSpot Service Hub** OR **Salesforce + Service Cloud** — CRM
- **PostHog / Amplitude / Mixpanel** — usage
- **Delighted / SatisMeter** — NPS
- **Stripe + custom dashboards** — revenue
- **Custom health-score** in your DB
- **Metabase / Hex / Looker Studio** — dashboards

**Tier 3 — Mid-market+ ($2K-15K/mo)**:
- **Gainsight** OR **Catalyst** OR **Vitally** OR **ChurnZero** — purpose-built CS platforms
- They aggregate usage + CRM + support + revenue + survey
- Health scoring built-in
- Playbooks for at-risk
- Customer success automation

**Tier 4 — Enterprise ($15K+/mo)**:
- **Gainsight Enterprise** — comprehensive
- Custom data warehouse (Snowflake / BigQuery / Databricks)
- BI tool on top (Looker / Hex / Metabase)
- Custom CS workflows

**Pick by stage**:

- Pre-$1M ARR: Tier 1; spreadsheet + PostHog
- $1M-10M ARR: Tier 2; HubSpot + custom health
- $10M-50M ARR: Tier 3; Vitally / Catalyst (modern picks)
- $50M+ ARR: Tier 4; Gainsight or custom

For my stage: [stage]

Output:
1. Tier pick
2. Tools
3. Data plumbing
4. Migration path as you scale
```

The 2026 trend: **Vitally and Catalyst eating Gainsight's lunch at mid-market**. Both are modern, faster, cheaper. Default to Vitally / Catalyst; pick Gainsight only when enterprise procurement requires it or scale demands it.

## Acting on Signals

```
Help me act on the signals.

The playbook by signal:

**Red health score**:

1. CSM ownership; dedicated 30-min strategy call within 5 days
2. Diagnose: usage drop? Champion left? Blocking issue?
3. Action plan with deadline:
   - Re-onboard if usage drop
   - Identify new champion if old one left
   - Engineering escalation if blocker
   - Free credit + save offer if cost concern
4. Re-evaluate health weekly until Green or churn

**Yellow health score**:

1. CSM check-in (30 min); softer touch
2. Identify top friction
3. Light intervention (training, feature suggestion, account manager intro)
4. Re-evaluate in 30 days

**Green health, but expansion potential** (high usage, high feature breadth):

1. Account team (CSM + AE) align on expansion path
2. Schedule QBR (quarterly business review)
3. Expansion conversation: more seats / advanced tier / new module
4. Don't pitch expansion to customers without strong health — conversion fails

**Below-target NRR**:

1. Diagnose: which segment is dragging? (SMB usually, enterprise rarely)
2. Tactical fix:
   - SMB: improve activation; reduce friction; shorter contracts to reduce locked-in unhappy
   - Mid-market: identify top expansion features; add to roadmap
   - Enterprise: assign more CSM coverage to top 20 accounts

**Below-target GRR**:

1. This is urgent (leaky bucket)
2. Run win-loss analysis on last 30 churns
3. Pattern emerges: feature gap? Pricing? Onboarding? Support?
4. Fix the top reason; expect 6-12 months to see lift in metrics

**Activation rate stalling**:

1. Cohort analysis: when in onboarding do users drop?
2. UX fix at drop-off point
3. Better onboarding email / call sequence
4. Re-cohort and measure

For my company:
- Top signal today
- Action

Output:
1. Per-signal playbook
2. Owner + deadline per action
3. Tracking
```

The discipline: **every Red health score generates an action item within a week**. Not "let's discuss"; not "I'll check in." A specific action with owner + deadline. Without this, health score is performance art.

## Common CS Metric Mistakes

```
Help me avoid mistakes.

The 10 mistakes:

**1. Tracking 30 metrics; reviewing 0**
Pick 5-7; review religiously.

**2. Confusing GRR and NRR**
GRR is defensive; NRR includes expansion. Don't conflate.

**3. Health score with no validation**
Score says Red; customer renews fine. Score is wrong; iterate.

**4. NPS as the only sentiment metric**
NPS is rolling-12-month sentiment; CSAT catches per-touchpoint. Use both.

**5. No expansion-prediction signal**
You measure churn risk; don't measure expansion-readiness; miss easy growth.

**6. Founders running CS metric reviews alone**
Without sales / product / support input, blind spots dominate.

**7. Per-month metric churn (frequent definition changes)**
Comparison impossible. Pick definitions; commit for a year.

**8. No cohort analysis**
Aggregate metrics mask cohort patterns. Always cohort.

**9. Ignoring product friction in CS metrics**
"This customer's health is Red" → CS pushes harder on customer when product needs to be fixed. Surface product feedback.

**10. CS metrics without revenue context**
"NPS up 10 points" but NRR flat = wrong NPS measurement. Triangulate.

For my company: [risks]

Output:
1. Top 3 risks
2. Mitigations
3. Process changes
```

The single most-painful mistake: **realizing 6 months in that your GRR formula has been wrong**. Numbers reported to investors / board / team are off; nobody trusts the metrics; redo the year. Set up the formula correctly Day 1; document it; have finance verify.

## What Done Looks Like

A working CS metrics framework delivers:
- 5-7 metrics defined rigorously
- Health score predicts 70%+ of churn 60+ days out
- Weekly at-risk review with action items
- Monthly leadership review of GRR / NRR / NPS / activation
- Quarterly board metrics matching finance reports
- CS team capable of naming top-3 reasons for churn vs save vs expand
- Tooling matched to stage (spreadsheet → CS platform progression)
- Each renewal preceded by health diagnostic
- NRR > 105% (target by mid-market scale)
- GRR > 90% (mid-market scale)

The proof you got it right: a customer who churns next quarter was on your Red list 60 days ago, with rescue plan executed (and either succeeded or failed). Surprises are rare; metrics tell the story.

## See Also

- [Activation Metric Definition](activation-metric-definition.md) — leading indicator; upstream of CS metrics
- [Reduce Churn](reduce-churn.md) — companion playbook
- [Expansion Revenue](expansion-revenue.md) — NRR comes from here
- [Renewal Negotiation Playbook](renewal-negotiation-playbook.md) — health score informs renewals
- [Win-Back Churned Customers](win-back-churned-customers.md) — recovery playbook
- [First Customer Success Hire](first-customer-success-hire.md) — staffing the ops
- [High-Touch Onboarding](high-touch-onboarding.md) — activation owner
- [Onboarding Flow](onboarding-flow.md) — onboarding feeds activation rate
- [Customer References](customer-references.md) — Green customers fuel references
- [Win Loss Analysis](win-loss-analysis.md) — companion outcome analysis
- [Sales Playbook](sales-playbook.md) — sales/CS handoff
- [Annual Contract Negotiation](annual-contract-negotiation.md) — renewals + expansion
- [Free to Paid](free-to-paid.md) — activation upstream
- [Pricing Strategy](../1-position/pricing-strategy.md) — price changes affect retention
- [Moats & Defensibility](../1-position/moats-and-defensibility.md) — NRR is the moat-as-numbers
- [VibeWeek: Customer Health Scoring](https://vibeweek.dev/6-grow/customer-health-scoring-chat) — implementation companion
- [VibeReference: Survey & NPS Providers](https://vibereference.dev/product-and-design/survey-nps-providers) — tooling
