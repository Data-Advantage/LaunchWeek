[Back to Day 4: Convert](README.md)

# Customer Health Scoring: The Playbook (Strategy-Level)

Most B2B SaaS founders meet "health scoring" as a Salesforce dashboard requirement around Series B: "we need to track customer health." The CS team builds a 1-10 score from a weighted formula of usage + NPS + tickets, displays it in a column on the customer list, and it sits there ignored — because nobody trusts it, nobody acts on it, and the score doesn't predict the things that actually matter (renewal, expansion, churn). Six months later, a different VP rebuilds it. The pattern repeats every 18 months.

A real customer health scoring program is something different: a measurement system that drives BEHAVIOR (CSM intervention, expansion plays, renewal forecasting) and is tightly tied to outcomes (NRR, churn, expansion, advocacy). Done well, health scores predict 80%+ of churn 60+ days in advance, drive 3-5x ROI on CSM time allocation, and become the operating system for customer success. Done badly, they're vanity metrics.

This is distinct from [Customer Health Scoring (VibeWeek)](../../VibeWeek/6-grow/customer-health-scoring-chat.md), which is the IMPLEMENTATION chat (data model, scoring engine, surfacing). This article is the STRATEGY playbook: deciding what to score, how to weight, how to act, who owns, and how to make the program produce ROI rather than dashboard theater.

## What Done Looks Like

A working customer health scoring program produces:

- A score (categorical green/yellow/red OR numeric 0-100) per customer
- Score predicts churn ≥60 days ahead with 70%+ accuracy
- Score predicts expansion likelihood with 60%+ accuracy
- CSM time allocation tied to score (red customers get more attention; not less)
- Renewal forecast tied to score
- Quarterly score validation: did red customers actually churn? did green renew?
- Score is reviewed weekly by CS team (not just at QBRs)
- Trends over time visible (deteriorating vs improving)
- Per-segment scoring (free / SMB / mid-market / enterprise calibrated separately)
- Action playbooks per score state (red → escalation; yellow → outreach; green → expansion ask)
- Sales-CS-Product alignment on what "healthy" means
- Iterations every quarter based on what predicted vs didn't

This pairs with [Reduce Churn](reduce-churn.md) (the action playbook for low-score customers), [Customer Success Metrics Framework](customer-success-metrics-framework.md), [Voice of Customer Program](voice-of-customer-program.md) (NPS feeds health), [Renewal Forecasting & Pipeline Management](renewal-forecasting-management.md) (uses health to forecast), [Customer Onboarding Playbook](customer-onboarding-playbook.md) (sets initial health), [Customer Marketing Program](customer-marketing-program.md) (high-health customers feed advocacy), [Quarterly Business Reviews](quarterly-business-reviews.md), [Activation Metric Definition](activation-metric-definition.md), [Customer Lifetime Value Playbook](customer-lifetime-value-playbook.md), and [Customer Health Scoring (VibeWeek implementation)](../../VibeWeek/6-grow/customer-health-scoring-chat.md).

## When to Build Health Scoring

Don't build health scoring if:

**You have <50 paying customers.** With 30 customers, a CSM can hold every account in their head. Health scores produce noise.

**You don't have an activation metric defined.** Health depends on knowing what good usage looks like. Get [Activation Metric Definition](activation-metric-definition.md) first.

**You have no CSM team yet.** Score without owner = nobody acts. Pre-CSM, founder is the implicit CSM and doesn't need a dashboard.

**You can't track product usage.** Health depends on usage data. If you don't have product analytics (PostHog / Amplitude / Mixpanel) yet, fix that first.

**You're pre-PMF.** What predicts retention isn't stable yet. Health scoring assumes a stable working motion.

**Your sales motion is purely self-serve, low ACV.** With $20/mo customers, intervention isn't economical. Trial-to-paid + churn-prevention via product UX is the path.

If any apply, fix the precondition.

Build health scoring when ALL are true:

**1. 50+ paying customers** with meaningful per-account economics ($1K+/yr ACV).

**2. Defined activation metric** — you know what "first value" looks like.

**3. CSM team exists** (or will exist within 90 days).

**4. Product usage tracked** in product analytics + warehouse.

**5. Renewal cycle is observable** — you can see who renews vs churns.

**6. Sales-Marketing-CS-Product alignment exists or can be facilitated** — health scoring is cross-functional.

If 5+ are true, you're ready.

## The Five Pillars of Health

Different companies pick different pillars. The 5 most-load-bearing across B2B SaaS:

```
PILLAR 1: USAGE / ENGAGEMENT
- Are they using the product?
- Frequency: weekly active users in account; sessions per user
- Depth: features used per user / per account
- Volume: actions per week (whatever your "value action" is)
- Trend: increasing or declining over last 30/60/90 days

Why important: usage is the leading indicator. Stop using → churn 90 days later.

PILLAR 2: ADOPTION / ACTIVATION
- Have they reached the value milestones?
- Activation rate: did they cross the activation threshold?
- Feature adoption: which features have they used (and which haven't)?
- Multi-user: are multiple users active or just one?
- Multi-team: more than one team using?

Why important: lonely accounts (one user) churn at 3-5x the rate of broad accounts.

PILLAR 3: SENTIMENT
- Do they like us?
- NPS / CSAT scores
- Support ticket sentiment (any "very frustrated" tickets?)
- Engagement with comms (email open rates; webinar attendance)
- Champion engagement (replies to CSM email?)

Why important: sentiment leads usage; if they're frustrated, they'll stop using soon.

PILLAR 4: BUSINESS HEALTH (the customer's business)
- Are they doing well as a company?
- Layoffs / news signals (downsizing)
- Industry health (e.g. fintech companies in 2023-2024)
- Funding signals (raised? running out?)
- Champion still employed?
- Executive sponsor still engaged?

Why important: customer's business problems → first thing they cut.

PILLAR 5: COMMERCIAL HEALTH
- Are we set up to renew?
- Contract end date
- Payment status (any failed payments?)
- Recent expansion / contraction
- Multi-year discount in place?
- Auto-renewal enabled?
- Procurement signal (renewal evaluation initiated?)

Why important: commercial signals predict actual contract decisions.

The right number of pillars: 3-5. More than 5 over-fits + adds noise.
```

## How to Weight (this is the hard part)

```
Naive weighting:
- 25% usage + 25% adoption + 25% sentiment + 25% commercial = 1-100 score

Why naive weighting fails:
- Usage trends matter MORE than absolute usage (declining usage is the predictor)
- Different segments need different weights (SMB vs enterprise)
- Sentiment alone doesn't predict churn (NPS detractors often stay)
- Some pillars are leading; some are lagging

Better weighting approaches:

A. SEGMENT-DRIVEN
- SMB: heavily weight usage + activation
- Mid-market: balance usage + sentiment
- Enterprise: weight commercial + sponsor engagement higher
- Different formulas per segment

B. TIME-WEIGHTED
- Recent activity (last 14 days) > older (last 90 days)
- Trend matters more than absolute level
- Velocity-of-change > value

C. TIER-BASED CATEGORICAL
- Don't compute a single score; compute pillar-level scores
- Then apply rules: any pillar red → overall red; all green → overall green
- Easier to explain; easier to act on

D. ML-DRIVEN (advanced; later stage)
- Train classifier on historical churn / renewal data
- Features: all pillar inputs + meta (segment, ACV, tenure)
- Output: P(churn within 90 days)
- Best at scale; requires 12+ months of data

DEFAULT FOR FIRST HEALTH SCORE:
- Tier-based categorical (option C)
- Manageable; explainable; debuggable
- Don't start with ML; you don't have the data yet

Sample tier-based rules:

Score = RED if any:
- No login in 30+ days
- NPS detractor (0-6) in last 90 days
- Champion left company
- Open priority-1 ticket > 7 days
- Failed payment unresolved

Score = YELLOW if any:
- 14-30 days since last login
- NPS passive (7-8) in last 90 days
- Usage declined > 30% over 60 days
- Activation never reached
- Open ticket without resolution > 14 days
- Champion engagement low

Score = GREEN if all:
- Active in last 14 days
- Activation reached
- NPS promoter or no recent score
- No open priority tickets
- Champion engaged in last 30 days
```

## Scoring Pillar Examples (concrete)

```
Per pillar, define inputs + thresholds:

USAGE PILLAR (per account):

Inputs:
- weekly_active_users (last 4 weeks): count
- sessions_per_user (last 4 weeks): average
- key_actions_per_week: count

Thresholds (varies by product):
- Green: WAU/total_seats ratio >= 60%
- Yellow: 30-60%
- Red: <30%

Trend modifier:
- If trend is declining > 20% over 60 days: bump down one tier

ADOPTION PILLAR:

Inputs:
- has_reached_activation: bool
- features_used_count: int (out of N total)
- multi_user: bool
- integrations_connected: int

Thresholds:
- Green: activated, 5+ features, multi-user
- Yellow: activated, 2-4 features, single-user
- Red: not activated OR 0-1 features used

SENTIMENT PILLAR:

Inputs:
- last_nps_score (0-10)
- last_csat_score (1-5)
- support_ticket_priority_1_count_last_90d
- support_ticket_resolution_avg_satisfaction

Thresholds:
- Green: NPS 9-10 OR no recent score + no escalations
- Yellow: NPS 7-8 OR resolved P1 ticket recently
- Red: NPS 0-6 OR open P1 OR unresolved escalation

BUSINESS HEALTH PILLAR:

Inputs:
- champion_employed: bool
- exec_sponsor_engaged: bool
- public_layoff_signals: bool
- recent_news_negative: bool

Thresholds:
- Green: champion + sponsor engaged
- Yellow: champion engaged but sponsor cooled
- Red: champion left OR sponsor unreachable

COMMERCIAL HEALTH PILLAR:

Inputs:
- days_to_renewal: int
- payment_status: ok / overdue / failed
- contract_health: standard / stretched / contested
- recent_expansion: bool

Thresholds:
- Green: payment current; 90+ days from renewal; recent expansion
- Yellow: 60-90 days from renewal with no engagement
- Red: failed payment OR <30 days to renewal with no expansion talk
```

## Acting on Scores (the part that matters)

A score that doesn't drive action is theater. Define playbooks per state.

```
RED CUSTOMERS:

Owner: senior CSM + manager involvement
Cadence: daily monitoring + weekly action
Plays:
- "What's wrong?" 1:1 outreach within 48 hours of red
- Diagnose root cause: product, sentiment, business, commercial
- Action plan with customer (joint document)
- Senior leader involvement (CSM Director or VP)
- Optional executive escalation
- 90-day save plan
- Track: did the save attempt work? Conversion: red → yellow / red → churn

If save fails:
- Graceful churn (don't burn bridges)
- Capture exit interview
- Feed learnings back to product / GTM

YELLOW CUSTOMERS:

Owner: CSM
Cadence: weekly check-in
Plays:
- Proactive outreach: "I noticed [signal]; how are things?"
- Re-engagement: training, advanced features, integration help
- Renewal prep: 60+ days before renewal, surface value, address concerns
- Move toward green within 30-60 days

GREEN CUSTOMERS:

Owner: CSM + AE (if expansion possible)
Cadence: monthly check-in
Plays:
- EXPANSION CONVERSATIONS (often missed!)
- Reference / case study ask
- Power-user training
- Cross-team expansion
- Multi-year renewal locks
- Advocacy program enrollment
- Don't ignore green: they're your growth

Anti-pattern: spending all CSM time on red, ignoring green
- Green customers are who renews + expands; ignoring them is leaving 30-50% growth on the table
- Allocate: 40% red intervention; 30% yellow improvement; 30% green expansion + advocacy
```

## Operational Cadence

```
Weekly:
- CSM team reviews red list
- Manager reviews escalations
- Action items captured + tracked

Bi-weekly:
- Score audit: any score that "shouldn't be"? Investigate
- Pillar-level review: which pillar is failing most?

Monthly:
- Cross-functional review (CS + Product + Sales)
- Identify systemic issues (too many reds because of feature X)
- Feed back to product roadmap
- Adjust thresholds if too noisy

Quarterly:
- Validation: did scores predict actual outcomes?
- Cohort analysis: red 90 days ago → outcome today
- Score model adjustments
- New pillar / signal additions

Annually:
- Major model overhaul if needed
- Comparison with industry benchmarks
- Strategic review
```

## Common Failure Modes

```
Failure 1: Score nobody acts on
- Pattern: built; displayed; ignored
- Fix: explicit playbook per score; CSM accountability

Failure 2: Lagging indicators only
- Pattern: scoring NPS + ticket count + payment status (all lagging)
- Fix: add USAGE trend (leading); product activity must be > 50% of weight

Failure 3: Same weights for all segments
- Pattern: SMB and enterprise score with same formula
- Reality: SMB usage matters more; enterprise sentiment + sponsor matters more
- Fix: segment-specific formulas

Failure 4: Score not validated against outcomes
- Pattern: built once; never validated
- Fix: quarterly cohort analysis; adjust based on what actually predicts churn

Failure 5: Score bouncing wildly
- Pattern: account is green Mon, red Tue, yellow Wed
- Reality: thresholds are too tight; actions impossible at this volatility
- Fix: smooth with rolling-window averages; minimum 7-day stickiness

Failure 6: Score = product analytics only
- Pattern: ignoring sentiment, business signals, commercial signals
- Fix: multi-pillar; usage alone isn't enough

Failure 7: Score becomes a CSM stick (punitive)
- Pattern: leadership: "why are 12 of your accounts red?"
- Reality: score becomes a CSM-blame metric; CSMs game it
- Fix: score is a SYSTEM measurement; CSM responsibility is action, not score itself

Failure 8: Owner unclear
- Pattern: data team builds score; CS team doesn't trust; product team doesn't update inputs
- Fix: ONE DRI (CS Ops or RevOps); cross-functional inputs

Failure 9: Score doesn't predict expansion
- Pattern: only built for churn
- Reality: green customers ARE expansion targets
- Fix: green-customer plays explicit; expansion is a health-score outcome

Failure 10: Customer-facing
- Pattern: showing customer their health score
- Reality: customer game it / get offended
- Fix: keep internal; share insights, not raw scores

Failure 11: Too granular too soon
- Pattern: shipping 1-100 score with 12 pillars in v1
- Fix: start with green/yellow/red; 3-5 pillars; iterate

Failure 12: Activation not in score
- Pattern: scoring usage but not activation
- Reality: a customer using product daily but never reached activation will churn
- Fix: activation is a non-negotiable pillar input

Failure 13: Score not trended
- Pattern: showing current score; no historical
- Reality: trend matters MORE than current level
- Fix: 30-60-90-day trend in CSM dashboard
```

## Tooling

```
What you need:

- Product analytics (PostHog / Amplitude / Mixpanel) — usage data
- Data warehouse (Snowflake / BigQuery / Postgres) — central aggregation
- CRM (Salesforce / HubSpot) — where score lives + who owns
- Customer Success Platform (optional, mid-market+):
  - Vitally — modern; popular at growth stage
  - Catalyst — strong on segmentation
  - Gainsight — enterprise standard
  - ChurnZero — mid-market
- Notification tool (Slack) — alert CSMs on score changes
- Dashboard (Looker / Hex / Mode) — internal reporting

Stack patterns:

Indie / early ($1-5M ARR):
- DIY: Postgres-based scoring + Slack alerts + Salesforce / HubSpot CRM column
- No dedicated CS Platform yet

Growth-stage ($5-30M ARR):
- Vitally or Catalyst
- Health score automated
- CSM playbooks integrated

Enterprise ($30M+ ARR):
- Gainsight (enterprise default)
- ML-driven scoring
- Cross-functional dashboards

Note: customer-success-platforms are reviewed in the [Customer Success Platforms (Reference)](../../VibeReference/content/product-and-design/customer-success-platforms.md).

Don't:
- Buy Gainsight at $3M ARR (overkill)
- Build custom dashboards instead of using your CRM (loses CSM workflow)
- Run scoring in 5 different places (one source of truth)
```

## Hire Signal: CS Operations DRI

```
Health scoring is a CS Ops discipline. Owner profile:

When to hire CS Ops:
- $5-10M ARR with formal CSM team
- Growing complexity (more segments, more products)

Profile:
- Background: Salesforce admin / RevOps / Customer Success Manager → Operations
- Skills: SQL, Salesforce admin, dashboards, process design
- Comp: $90-150K base depending on stage

Responsibilities (related to health scoring):
- Define + maintain health scoring model
- Operate weekly review with CSM team
- Validate scores against outcomes quarterly
- Iterate on model
- Cross-functional sync (CS / Product / Sales / Data)
```

## What Done Looks Like (recap)

A working health scoring program:

- [ ] Score per customer (categorical or numeric)
- [ ] 3-5 pillars (usage, adoption, sentiment, business, commercial)
- [ ] Segment-specific weighting
- [ ] Score predicts churn 60+ days ahead with 70%+ accuracy
- [ ] Score predicts expansion likelihood
- [ ] Action playbook per state (red / yellow / green)
- [ ] CSM time-allocation tied to scores
- [ ] Weekly red list reviewed by CSM team
- [ ] Quarterly score validation against outcomes
- [ ] Trend visible (rolling 30/60/90)
- [ ] Cross-functional alignment on definitions
- [ ] Single DRI (CS Ops or RevOps)
- [ ] Iterations based on validation findings
- [ ] Tied to renewal forecast + expansion pipeline
- [ ] Customers don't see raw score (insights yes; score no)

## Mistakes to Avoid

- **Building before activation defined.** Health depends on usage; usage signal needs activation framework.
- **Showing customers their health score.** Internal-only; share insights not numerics.
- **Single score; no pillars.** Aggregate scores hide where the problem is.
- **No segment differentiation.** One formula for all = noise for all.
- **Ignoring trend.** A green customer trending down is more concerning than a yellow customer trending up.
- **Score without playbook.** Theater; fix by defining red / yellow / green plays.
- **Punishing CSMs for red customers.** Score is system measurement; action is CSM responsibility.
- **Forgetting expansion plays for green.** 30-50% of growth comes from green customers; don't neglect.
- **No quarterly validation.** Without it, the model never improves.
- **Lagging indicators only.** Add usage trends (leading) to predict 60+ days out.
- **Score volatility.** Smooth with rolling windows; weekly stability minimum.
- **Building dashboards in wrong tool.** Score must live where CSMs work (CRM / CS Platform).
- **Overweighting NPS.** NPS detractors often stay; NPS alone is weak signal.
- **Not feeding learnings to product.** Health-score data is product feedback; close the loop.
- **Confusing customers' product health with customers' BUSINESS health.** Both matter; track both.

## See Also

- [Customer Health Scoring (VibeWeek implementation)](../../VibeWeek/6-grow/customer-health-scoring-chat.md) — implementation companion
- [Reduce Churn](reduce-churn.md) — action playbook
- [Customer Success Metrics Framework](customer-success-metrics-framework.md) — broader metric stack
- [Voice of Customer Program](voice-of-customer-program.md) — NPS feeds health
- [Renewal Forecasting & Pipeline Management](renewal-forecasting-management.md) — uses health to forecast
- [Customer Onboarding Playbook](customer-onboarding-playbook.md) — sets initial health
- [Customer Marketing Program](customer-marketing-program.md) — green customers feed advocacy
- [Customer Lifetime Value Playbook](customer-lifetime-value-playbook.md) — adjacent
- [Activation Metric Definition](activation-metric-definition.md) — depended-upon
- [Quarterly Business Reviews](quarterly-business-reviews.md) — health surfaces here
- [Expansion Revenue](expansion-revenue.md) — green customers expand
- [Win-Back Churned Customers](win-back-churned-customers.md) — red → churned → win-back
- [First Customer Success Hire](first-customer-success-hire.md) — earlier stage
- [Customer Success Platforms (Reference)](../../VibeReference/content/product-and-design/customer-success-platforms.md) — tooling
- [Survey & NPS Providers (Reference)](../../VibeReference/content/product-and-design/survey-nps-providers.md) — sentiment input
- [Product Analytics Providers (Reference)](../../VibeReference/content/devops-and-tools/product-analytics-providers.md) — usage input
