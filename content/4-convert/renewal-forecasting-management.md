# Renewal Forecasting & Management

[⬅️ Back to Day 4: Convert](../4-convert/)

If you're a B2B SaaS at $5M+ ARR with annual contracts, renewals are 70-90% of next year's revenue. The naive approach: wait for renewals to come up; CSMs ping customers 30 days before; hope for the best. The structured approach: forecast renewals 6-9 months ahead, segment by health + risk, run different motions per segment, track gross + net renewal rates, escalate at-risk accounts early. Renewal management is the operational discipline that separates predictable B2B SaaS from chaotic. (See `renewal-negotiation-playbook.md` for the negotiation tactics; this guide covers the forecasting + operating system.)

## What Done Looks Like

A working renewal management system:
- [ ] Renewals tracked 6-9 months ahead in CRM
- [ ] Per-account health score (red / yellow / green)
- [ ] Renewal forecast presented to leadership monthly
- [ ] Different motion per segment (high-touch / tech-touch / auto-renew)
- [ ] Gross + Net Revenue Retention tracked
- [ ] At-risk accounts flagged 90+ days early
- [ ] Renewal owner per account (CSM / AM / sales)
- [ ] Annual contract data clean + accessible
- [ ] Customer Success Platform integrated (see customer-success-platforms in VibeReference)
- [ ] Quarterly renewal review with leadership

## 1. Define renewal motion segments

Not all renewals are equal. Segment them.

```text
Define renewal segments.

By contract size:

Strategic ($100K+ ACV):
- High-touch CSM / AE-led renewal
- 6+ months engagement before renewal
- QBR-driven; multi-stakeholder
- Custom negotiations expected

Commercial ($25K-100K ACV):
- CSM-led with sales support
- 90-day renewal motion
- Standard contract; some negotiation

SMB ($5K-25K ACV):
- Tech-touch (automation + light CSM)
- 30-60 day notice
- Standard pricing; minimal negotiation

Self-serve (<$5K ACV):
- Auto-renew
- Minimal touch
- Cancel-when-customer-cancels

By health:

Healthy (green):
- Renewal expected; expand likely
- Light touch
- "Renewing on time?" check 60 days out

At-risk (yellow):
- Some signals (low usage, support tickets, exec turnover)
- Active outreach; success plan
- Escalate if 60 days out and not progressing

High-risk (red):
- Strong churn signals
- Save play activated
- Exec sponsor involved
- 90-120 days outreach starts

Output:
1. Segment framework for [COMPANY]
2. Motion per segment
3. Touchpoint cadence
4. Owner assignments
5. Escalation triggers
```

The segmentation discipline: standard contracts run smoothly with minimal effort; strategic accounts get the love. Without segmentation, you over-touch SMB and under-touch enterprise.

## 2. Build renewal forecast — 9 months ahead

Forecast far in advance to enable action.

```text
Build renewal forecast.

Time horizons:

12 months out:
- All renewals visible in CRM
- Aggregate ARR up for renewal
- Plan headcount / capacity

9 months out:
- Per-account forecast (likely / at-risk)
- Initial outreach for strategic accounts
- Begin success plan refresh

6 months out:
- All accounts assigned to renewal owner
- Health-score check
- Strategic account QBR

3 months out:
- Active renewal motion
- Pricing / package decisions
- Proposal preparation

1 month out:
- Closing motion
- Procurement engagement
- Contract redlines

Forecast components:

Gross renewal forecast:
- Sum of all annual contracts up for renewal
- Less: expected churn
- = Gross retention $

Net renewal forecast:
- Gross + expansion
- - downsell
- = Net retention $

Per-account forecast:
- Likely renewal $ (high confidence)
- Best case (with expansion)
- Worst case (downsell or churn)

Confidence levels:
- Commit (high; expected)
- Best case (with effort)
- At risk (active save play)
- Likely lost

Forecast accuracy:
- Track predicted vs actual
- Calibrate over time
- Target: ±5% accuracy 90 days out

Tools:
- Salesforce / HubSpot for contract data
- Customer Success Platform (Vitally / Gainsight / Catalyst) for health
- BI tool for aggregation

Output:
1. Forecast template
2. Time-horizon framework
3. Per-account input fields
4. Aggregation method
5. Reporting cadence
```

The "9 months ahead" rule: renewals at 60 days are too late to save. Identifying risk 6-9 months out gives time to act.

## 3. Track GRR + NRR

Gross + Net Retention are the headline metrics.

```text
Track retention metrics.

Gross Revenue Retention (GRR):
- Revenue retained from existing customers (no expansion)
- Formula: (Starting ARR - Churn - Downsell) / Starting ARR
- Range: 80-95% typical for B2B SaaS
- Excludes new business + expansion

Net Revenue Retention (NRR):
- Revenue from existing customers (with expansion)
- Formula: (Starting ARR - Churn - Downsell + Expansion) / Starting ARR
- Range: 95-130% for healthy B2B; 110%+ great
- Includes upsell / cross-sell

Logo Retention:
- % of customers retained (regardless of $)
- Different from revenue retention

Cohort tracking:

Cohort by quarter signed:
- Q1 2024 cohort: 100 customers
- Q1 2026 (2 years later): 75 still active
- Logo retention: 75%
- Revenue retention varies (some grew; some shrunk)

Cohort by segment:
- Enterprise typically 95%+ NRR
- Mid-market 100-115% NRR
- SMB 80-95% NRR

Reporting:

Monthly:
- Renewals due this month + actuals
- Forecast vs actual
- Top wins + losses

Quarterly:
- GRR / NRR trend
- Per-segment breakdown
- Cohort behavior

Annual:
- Long-term retention curves
- Comparison to industry benchmarks

Industry benchmarks (2026):
- B2B SaaS GRR: 88-94%
- B2B SaaS NRR: 105-120%
- Best-in-class NRR: 130%+ (Snowflake / Datadog era)

Anti-patterns:
- Confuse GRR with NRR (NRR is rosier; cite GRR for honesty)
- Cherry-pick cohorts
- Ignore segment differences

Output:
1. GRR / NRR calculation
2. Cohort tracking
3. Per-segment breakdown
4. Monthly + quarterly + annual reporting
5. Benchmark comparison
```

The GRR-vs-NRR honesty: NRR includes expansion; rosier number. GRR shows pure retention. Investors / board want both. Don't show only NRR.

## 4. Health scoring — leading indicator

Health scores predict renewals. Get them right.

```text
Build health-score model.

Components (weighted):

Product usage:
- Active users (vs licensed)
- Login frequency
- Feature adoption (key features)
- Trend (growing / stable / declining)

Outcomes:
- Customer-stated ROI
- Goal achievement (success plan)
- Quantitative metrics (e.g., "saved X hours")

Engagement:
- QBR attendance
- Email response rate
- Support ticket volume + sentiment
- NPS / CSAT scores

Sentiment:
- Champion engagement
- Executive engagement
- New stakeholder additions / departures

Financial:
- Payment history (any failed payments)
- Contract size growth / shrink
- Discount pressure

Composite score:
- Weighted sum → 0-100
- Bucket: red (0-40) / yellow (40-70) / green (70-100)

Or: red / yellow / green directly

Update cadence:
- Daily (automated; product usage)
- Weekly (CSM input on engagement)
- Monthly (manual review)

Tools:
- Customer Success Platform (Gainsight / Vitally / Catalyst) calculates
- Or DIY in BI tool

Action triggers:

Red account:
- Save play activated
- Exec sponsor outreach
- Escalation in CRM

Yellow account:
- CSM check-in
- Success plan refresh
- Risk noted

Green account:
- Standard cadence
- Expansion play if applicable

Calibration:
- Compare health score to actual outcome
- Refine weights quarterly
- Beware: green accounts churning = score is wrong

Output:
1. Score components + weights
2. Bucket thresholds
3. Update cadence
4. Action triggers
5. Calibration process
```

The "validate score with actual churn" rule: if 30% of green accounts churn, your model is broken. Quarterly calibration adjusts weights.

## 5. Save plays for at-risk accounts

When health goes red, run save plays.

```text
Build save-play playbook.

Trigger: account flagged red (or yellow trending red).

Save play components:

1. Discovery:
- Why is the account at risk?
- Stated reason vs underlying reason
- Stakeholder mapping (who supports / opposes)

2. Diagnosis:
- Product issues? (fix product)
- Adoption issues? (CS investment)
- Champion left? (rebuild)
- Pricing pressure? (negotiate)
- Strategic shift? (likely lose)

3. Plan:
- Specific actions per stakeholder
- Timeline (60-90 days typical)
- Owner (CSM + AE + exec sponsor)

4. Execution:
- Weekly check-ins
- Document progress
- Adjust based on response

5. Outcome:
- Saved (renewed)
- Saved with concession (downsell or discount)
- Lost (churned)
- Document lessons

Common save plays:

Champion left:
- Find new champion
- Re-onboard new contact
- Extra-touch to demonstrate value
- Customer education / training

Adoption issues:
- Hands-on workshop
- Custom training
- Health check + recommendations

Product gap:
- Roadmap visibility
- Beta access if applicable
- Workaround support
- Sometimes: lose gracefully

Pricing pressure:
- Renegotiate if strategic
- Offer downgrade vs churn
- Multi-year for discount

Executive turnover:
- Exec sponsor outreach
- Establish new exec relationship
- Re-pitch value

Save metrics:

Save rate:
- % of red accounts saved
- Target: 30-50% (some always lost)

Save cost:
- $ spent (CS time, discounts, exec time)
- Compare to LTV; sometimes worth it; sometimes not

Output:
1. Save play framework
2. Common scenarios
3. Roles + timelines
4. Metrics
5. Lessons capture
```

The "some accounts you should let go" wisdom: not every save is worth the cost. SMB account at $5K ARR with deep adoption issues + strategic mismatch = let go. Save expensive accounts only.

## 6. Renewal owner clarity

Who owns the renewal? Often unclear; causes drops.

```text
Define renewal ownership.

Patterns:

CSM-owned (most common):
- CSM owns the renewal motion
- AE involved on commercial / strategic
- Pro: relationship continuity
- Con: CSMs may not want to negotiate

Account Manager (AM)-owned:
- Dedicated AM owns commercials
- CSM owns relationship
- Pro: separation of concerns
- Con: handoff friction

Original AE-owned:
- AE who closed retains until renewal
- Common pre-CS-team-existence
- Risk: AE moves on; renewal drops

Renewal Specialist team:
- Dedicated renewal team
- Specialist negotiation skills
- Used by larger teams ($50M+ ARR)

Co-ownership:
- CSM + AE jointly
- Confusing if not clear
- Defines decision rights

Decision matrix:

Strategic accounts:
- CSM + AE + exec sponsor
- AE leads on negotiation; CSM on relationship

Commercial:
- CSM-led; AE consulted

SMB / self-serve:
- CSM-light or auto-renew
- Lower-touch

For [COMPANY] at [STAGE]:

Stage 1 ($1-5M ARR):
- Founder / first CSM owns all
- No formal split

Stage 2 ($5-15M ARR):
- CSM owns; AE supports strategic

Stage 3 ($15-50M ARR):
- Distinct CSM + AM roles for top accounts
- CSM-led for mid-market
- Tech-touch for SMB

Stage 4 ($50M+ ARR):
- Renewal Specialist team for commercial
- CSM + AM team for strategic

Output:
1. Owner-per-segment matrix
2. Co-ownership rules
3. Handoff process
4. Stage-appropriate org
5. Compensation alignment
```

The "everyone and no-one" trap: vague ownership = renewals drop. Clear single-owner per renewal; supporting cast roles defined.

## 7. Pricing on renewal — increase, hold, or discount

Annual price increases are touchy. Plan policy.

```text
Set renewal pricing policy.

Options:

Annual price increase (common in 2026):
- 5-10% standard
- Cited inflation / cost of business
- May exclude existing accounts; apply to new only
- Or: graduated (3% year 1; 5% year 2; etc.)

Hold pricing flat:
- Pro: no friction
- Con: missed revenue
- Used by: customer-friendly cultures

Discount on renewal:
- Multi-year contract for discount
- Volume / expansion discount
- Avoid: discount-as-default (sets bad precedent)

Per-segment policy:

Strategic / large:
- Custom negotiations
- May offer multi-year discount in exchange for commitment

Commercial:
- Standard 5-7% increase typical
- Multi-year option

SMB / self-serve:
- 5-10% increase OR no change
- Auto-renewal at new price

Annual increase mechanics:

Notice:
- 90+ days advance notice
- Email + in-product
- Reasoning included

Cap on increase:
- Some contracts cap (e.g., max 7% annually)
- Honor commitments

Grandfathering:
- Honor original pricing for early customers (loyalty)
- Or: phase out gradually

Negotiation:
- Customer pushes back; have BATNA
- "We can hold at current rate for multi-year commitment"
- Or: "We can offer X% if you sign 3-year"

Anti-patterns:
- Surprise increase (no notice)
- Increase without value justification
- Inconsistent (some customers; not others)

Output:
1. Annual increase policy
2. Per-segment rules
3. Notice timing
4. Multi-year discount structure
5. Grandfathering policy
```

The "value-justified increase" framing: tell customers what's improved (new features, better SLA, more usage included). Vague "cost of business" doesn't fly.

## 8. Procurement + legal — plan time

Enterprise renewals often get stuck in procurement.

```text
Navigate procurement + legal.

Common challenges:

Procurement:
- New PO required
- Vendor approval re-validation
- Compliance check (insurance, certifications)
- Multi-vendor competitive review (re-bid every 3 years)

Legal:
- Master agreement updates
- Liability / indemnity revisions
- Data processing addendum (DPA) updates
- Security review

Finance:
- Multi-year discounting
- Payment terms (annual / quarterly)
- Currency / FX

Timeline:
- 90+ days for enterprise renewals
- 30-60 days for mid-market
- Same-day for SMB

Mitigation:

Early start:
- 6 months out for enterprise
- Procurement notification 4 months out

Renewal-friendly contracts:
- Auto-renewal clauses (with cancellation notice)
- Pre-approved annual increases (5% cap)
- Streamlined renewal exhibits

Legal partnership:
- Internal legal contact at customer
- Pre-built MSA + addendums
- Standard redline patterns

Procurement enablement:
- ROI documentation
- Reference to original business case
- Renewal-specific case study

Anti-patterns:
- Wait for customer to start renewal
- No procurement engagement until 30 days
- New legal terms each year
- Surprise during renewal

Output:
1. Process per segment
2. Timeline-back-from-expiration
3. Customer-internal stakeholder map
4. Pre-built artifacts
5. Escalation when stuck
```

The "auto-renewal clause" rule: include in initial contract. Customer cancels by giving N-days notice; otherwise auto-renews. Saves hassle for both sides.

## 9. Expansion at renewal

Renewal is also expansion opportunity.

```text
Drive expansion at renewal.

Expansion plays:

More seats:
- Customer grew; license more users
- Often automatic (in usage-based pricing)

Higher tier:
- Upgrade to Pro / Enterprise
- Unlock features they need
- Tied to use case maturity

Add-on products:
- Cross-sell related products
- Modules / features
- Customer education needed

Multi-year commitment:
- Year 2-3 commitment for discount
- Predictability for both sides

Identify expansion signals:

Usage growth:
- More users / more usage
- New use cases emerging

Stakeholder additions:
- New teams adopting
- New executives engaged

Customer requests:
- "Can we get X feature?"
- Upgrade path

Health score green:
- Strong adoption signals expansion-readiness

Process:

In Q-1 before renewal:
- Identify expansion candidates
- Plan upsell pitch
- Allocate capacity

At renewal time:
- Combine renewal + expansion conversation
- Bundle for discount
- Single contract change

Anti-patterns:
- Surprise upsell at renewal time
- Push expansion when adoption is shaky
- Confuse renewal motion with expansion (different sales)

Compensation:
- Pay AEs for renewal + expansion separately
- Avoid double-counting
- Some companies: 50% of new sale comp on expansion

Output:
1. Expansion play playbook
2. Signal identification
3. Renewal-time integration
4. Comp model
5. Quarterly expansion forecast
```

The "expand-the-greens; save-the-reds" focus: 80% of CSM time goes to red accounts (saving). 20% should go to green accounts (expanding). Often inverted.

## 10. Connect renewal to leadership cadence

Renewals are board-level metric. Communicate.

```text
Renewal in leadership cadence.

Monthly:
- Renewal forecast vs plan
- This month's renewals: status
- At-risk accounts
- Wins + losses

Quarterly:
- GRR / NRR trend
- Per-segment performance
- Save rate
- Lessons learned
- Year-end forecast accuracy

Annual:
- Long-term retention curves
- Cohort analysis
- Compensation impact
- Strategic shifts

Board reporting:
- GRR / NRR every meeting
- Customer concentration risk
- Top wins + losses (anonymized if needed)
- Forecast vs actual

CEO / exec involvement:

Strategic accounts:
- CEO check-in 6 months pre-renewal
- Exec sponsor program (top 10-50 accounts)
- Annual customer dinners

At-risk accounts:
- Save play sponsorship
- Personal note from CEO

Anti-patterns:
- Renewal forecast hidden from leadership
- No board-level renewal metric
- CEO surprised by churn

Output:
1. Reporting cadence
2. Board-level metrics
3. Exec sponsor program
4. Customer events / dinners
5. CEO involvement framework
```

The "executive sponsor" rule: top 20-50 accounts have an exec sponsor (VP+ at your company). Quarterly check-in. When health goes red, exec engages immediately. Compounds retention.

## What Done Looks Like

A working renewal management system:

- [ ] Renewals tracked 9+ months ahead
- [ ] Per-segment motion (strategic / commercial / SMB)
- [ ] Health scoring with action triggers
- [ ] Save plays for at-risk accounts
- [ ] Clear renewal ownership per account
- [ ] Pricing policy (increase / hold / discount)
- [ ] Procurement / legal early engagement
- [ ] Expansion plays at renewal
- [ ] GRR + NRR tracked + reported
- [ ] Forecast accuracy ≤±5% at 90 days
- [ ] Leadership cadence + exec sponsor program

The mistakes to avoid:

1. **Wait for renewal to come up.** 30 days out is too late.
2. **One-size-fits-all motion.** Strategic vs SMB need different attention.
3. **Health score never validated.** Green accounts churning = broken model.
4. **Vague ownership.** Renewals drop in handoffs.
5. **Surprise pricing increase.** Erodes trust.
6. **Auto-renewal without monitoring.** Bad fit customers stick longer; eventual mass-churn.
7. **No save plays.** Red accounts auto-churn.
8. **No expansion at renewal.** Missing easy wins.
9. **Renewal forecasts hidden.** Leadership surprised.
10. **No exec sponsor program.** Top accounts feel commodified.

## See Also

- [Renewal Negotiation Playbook](./renewal-negotiation-playbook.md) — negotiation tactics (companion)
- [Customer Success Metrics Framework](./customer-success-metrics-framework.md) — CS metrics
- [Customer Lifetime Value Playbook](./customer-lifetime-value-playbook.md) — LTV
- [Reduce Churn](./reduce-churn.md) — churn reduction
- [Win-Back Churned Customers](./win-back-churned-customers.md) — post-churn
- [Quarterly Business Reviews](./quarterly-business-reviews.md) — QBR cadence
- [Customer Marketing Program](./customer-marketing-program.md) — advocacy
- [Customer Advisory Board](./customer-advisory-board.md) — strategic
- [Sales Forecasting & Pipeline Management](./sales-forecasting-pipeline-management.md) — new business forecast
- [Sales Compensation Plans](./sales-compensation-plans.md) — comp design
- [Compensation Philosophy & Pay Bands](./compensation-philosophy-pay-bands.md) — broader comp
- [Annual Contract Negotiation](./annual-contract-negotiation.md) — contract specifics
- [Pricing Review Cadence](./pricing-review-cadence.md) — pricing strategy
- [Pricing Strategy](../1-position/pricing-strategy.md) — pricing
- [VibeReference: Customer Success Platforms](https://vibereference.dev/product-and-design/customer-success-platforms) — Vitally / Gainsight / Catalyst
- [VibeReference: CRM Providers](https://vibereference.dev/marketing-and-seo/crm-providers) — Salesforce / HubSpot
- [VibeReference: Subscription Billing Providers](https://vibereference.dev/auth-and-payments/subscription-billing-providers) — billing infrastructure
- [VibeWeek: Customer Health Scoring](https://vibeweek.dev/6-grow/customer-health-scoring-chat) — health-score implementation
- [VibeWeek: Reduce Churn](https://vibeweek.dev/6-grow/reduce-churn-chat) — churn implementation
