# Customer Lifetime Value (CLV/LTV) Playbook

[⬅️ Back to Day 4: Convert](../4-convert/)

If you're running a B2B SaaS at $1M+ ARR, you should know your Customer Lifetime Value (CLV / LTV). The naive approach: Google "LTV formula" → ARPU × gross margin / churn → declare $50K LTV → board declares profitability. The structured approach: cohort-based LTV (not single-number), segmented by customer type (SMB vs mid-market vs enterprise), broken down by acquisition channel, calculated honestly with discount rates and time horizons. CLV is one of those metrics that gets cited constantly and calculated wrong constantly. Most "we have $X LTV" statements collapse on examination. Get this right and you make smart CAC decisions. Get it wrong and you over-spend on bad-fit customers.

## What Done Looks Like

A working CLV system:
- [ ] Cohort-based CLV calculation (not single number)
- [ ] Segmented by customer size / channel / vertical
- [ ] Discount rate applied (not raw revenue)
- [ ] LTV / CAC ratio tracked (3:1+ healthy)
- [ ] Payback period tracked (12 months target)
- [ ] Connected to GTM decisions (channel ROI, ICP refinement)
- [ ] Reported to board with caveats
- [ ] Quarterly refresh as data matures
- [ ] Different CLVs for different decisions (not one-size-fits-all)
- [ ] Sensitivity analysis (range, not point)

## 1. Decide what CLV you're measuring

```text
Define CLV scope.

Different CLVs for different purposes:

Gross CLV:
- Total revenue from customer
- Pre-COGS
- Used for: top-line analysis

Net CLV (recommended default):
- Gross CLV × Gross Margin
- Subtracts COGS (hosting, support, payment fees)
- Used for: profitability analysis, CAC decisions

Contribution CLV:
- Net CLV minus variable customer costs
- Subtracts: CSM time, support overhead
- Used for: marginal profitability

Discounted CLV:
- Net CLV adjusted for time-value-of-money
- 10-20% discount rate typical
- Used for: rigorous financial analysis

Enterprise vs SMB:
- SMB: simpler, shorter horizon (3-5 years)
- Enterprise: complex, longer (5-10 years), expansion-driven

Period-locked CLV:
- "Customer acquired in 2023 has generated $X by now"
- Conservative; based on actuals only
- Less speculative

Predicted CLV:
- "Based on cohort behavior, we expect $X over 5 years"
- Riskier; depends on assumptions

Recommendation:
- Default: Net CLV with discount rate applied; period-locked when possible
- Show predicted as upper bound

For [COMPANY], output:
1. Which CLV definition for which decision
2. Calculation formulas
3. Time horizon (3 / 5 / 10 years)
4. Discount rate assumption
5. Documentation for stakeholders
```

The "single CLV number" trap: every B2B SaaS has 5-10 CLV numbers depending on cohort / segment / methodology. Picking one as "THE LTV" misleads. Use multiple; report ranges.

## 2. Cohort-based calculation — not formula

The naive "ARPU × gross margin / churn" formula assumes constant churn forever. Reality: churn changes; expansion happens; cohorts behave differently.

```text
Calculate cohort-based CLV.

Step 1: Define cohort
- Customers who started in a specific period (Q1 2023, etc.)
- Group of N customers

Step 2: Track revenue per cohort over time
- Month 1: $X total revenue from cohort
- Month 2: $Y (some churn; some expansion)
- Continue 12-60 months

Step 3: Measure cumulative revenue
- Cohort total revenue at month T = sum of all monthly revenues 0 to T

Step 4: Divide by cohort size
- Average revenue per customer at month T

Step 5: Apply margin + discount
- Multiply by gross margin
- Discount future periods (10-20%)

Step 6: Project remaining periods
- Use cohort retention curve to predict beyond observed
- Flatten at 5-7 years (most B2B SaaS retention curves flatten)

Example calculation:
- Cohort: Q1 2023 (100 customers)
- Year 1 cumulative revenue: $500K → $5K/customer
- Year 2 cumulative: $850K → $8.5K/customer
- Year 3 cumulative: $1.05M → $10.5K/customer
- Apply 75% gross margin: ~$7.9K NPV
- Discount future years at 12%
- Project years 4-10 from retention curve

Tools:
- BI tool (Looker / Mode / Metabase / Tableau)
- DIY in Python / R
- Specialized: ChartMogul, ProfitWell, Baremetrics

Output:
1. Cohort calculation framework
2. SQL for cohort revenue
3. Retention curve projection
4. Discounting methodology
5. Visualization
```

The retention-curve insight: B2B SaaS retention typically flattens after year 2-3. Survival curve. Project flat retention beyond observed; don't assume continued decay.

## 3. Segment CLV by customer type

CLV varies wildly by customer segment. Average is misleading.

```text
Segment CLV by customer type.

Common segments:

By size:
- SMB (<$10K ACV): higher churn; smaller LTV; faster sales cycle
- Mid-market ($10K-$100K ACV): moderate; expansion-friendly
- Enterprise ($100K+ ACV): lower churn; high LTV; long sales cycle

By acquisition channel:
- Organic (SEO / WOM): often best LTV (self-selected fit)
- Paid: varies; sometimes worst (least committed)
- Outbound (SDR-led): mid; targeted ICP
- Referral: often best (warm signal)
- Events / partnerships: enterprise-skewed

By vertical / use case:
- Different industries have different retention
- Some verticals (e.g., financial services) sticky; others (e.g., consumer SMBs) churn-prone

By plan tier:
- Free → paid converters (low LTV typically)
- Pro plan starters
- Enterprise contracts

Calculation:
- Calculate CLV per segment, not aggregate
- Compare segments
- Identify highest-LTV segments → invest more

Decision implications:
- SMB segment with low LTV / high churn → consider self-serve only (no expensive sales)
- Enterprise with high LTV → invest in field sales
- Channel with low LTV → reduce spend
- Channel with high LTV → scale up

Anti-patterns:
- Aggregate CLV (averages over wildly different segments)
- Optimizing for largest segment regardless of LTV
- Ignoring small-but-high-LTV segments

Output:
1. Segmentation framework
2. Per-segment CLV
3. Decision implications
4. ICP refinement signals
5. Channel investment recommendations
```

The ICP refinement loop: track CLV by ICP attributes. Discover unexpected: maybe healthtech has higher LTV than fintech in your product. Refine targeting.

## 4. CLV / CAC ratio — the key metric

Single CLV number isn't useful. CLV / CAC ratio is.

```text
Calculate CLV / CAC ratio.

CAC (Customer Acquisition Cost):
- Total marketing + sales spend in period / new customers acquired
- Typical components: paid ads, content, events, sales team comp, BDR/SDR salaries, sales tools

Per-segment CAC:
- Different channels have different CAC
- Outbound (SDR-led): higher CAC
- Organic / SEO: lower CAC
- Paid: depends on saturation

LTV / CAC ratio:
- 3:1 = healthy
- 1:1 = breakeven (lose money)
- 5:1+ = under-investing in growth (could spend more)
- 10:1 = either insanely good or wrong calculation

Payback period:
- Months to recover CAC
- 12 months = healthy
- 24+ months = stretching (need long retention)
- 6 months or less = freaks of nature (or wrong)

Per-channel ratio:
- Calculate CLV / CAC per channel
- Identify winners + losers
- Reallocate budget

Time considerations:
- LTV calculated over 5 years → CAC must be < 1/3 of 5-yr value
- LTV / CAC takes time to materialize (long-cycle B2B)

Industry benchmarks (2026):
- B2B SaaS: 3:1 healthy; 5:1 great
- Enterprise: 5:1+ typical (high LTV)
- SMB: 2:1-3:1 (lower LTV)
- PLG: varies wildly

Output:
1. CAC calculation per channel
2. CLV / CAC ratio per segment + channel
3. Payback period
4. Decision matrix
5. Quarterly refresh
```

The "5:1 ratio" benchmark: aspirational. Most B2B SaaS in 2026 runs 2:1-4:1. If you have 5:1+, you're either great or under-investing in growth (could spend more on marketing).

## 5. Account for expansion + downgrades

CLV in B2B SaaS isn't linear. Customers expand (more users / features / usage) and downgrade.

```text
Model expansion + downgrade in CLV.

Net Revenue Retention (NRR):
- Year-over-year revenue change for existing customers
- 100%+ = expansion outpaces churn
- 110%+ = strong (typical for great B2B SaaS)
- 120%+ = exceptional (Snowflake-tier)

Expansion sources:
- More seats / users
- Higher tier upgrade
- Add-on features
- Usage-based billing growth

Cross-sell:
- Different product line
- Bundled offerings

Downgrade:
- Plan downgrade
- Seat reduction
- Feature removal
- Usage drop (if usage-based)

Modeling:
- Cohort revenue includes expansion + downgrades
- NRR captures net effect
- LTV with NRR > 100% looks much higher than naive

Implications:
- High NRR (120%+) means CLV grows over time
- Compounds; year 5 customer worth more than year 1 expectation
- Conservative LTV: assume NRR = 100%
- Aggressive LTV: assume current NRR continues

Sensitivity:
- LTV varies dramatically by NRR assumption
- Show LTV at NRR = 90%, 100%, 110%, 120%
- Don't pick the most-flattering for board

Output:
1. NRR calculation framework
2. Cohort-level NRR
3. LTV at multiple NRR assumptions
4. Sensitivity table
5. Honest range for stakeholders
```

The "NRR drives LTV" insight: at 120% NRR, LTV is 3-5x higher than at 100% NRR. Most B2B SaaS lifetime value is in expansion, not initial purchase.

## 6. Honest churn calculation

Churn assumption drives CLV. Most companies under-state churn.

```text
Calculate churn honestly.

Logo churn (customer count):
- # customers lost in period / # at start
- Annualized

Revenue churn (gross):
- $ lost in period / $ at start
- Doesn't include expansion

Net revenue churn:
- (Gross revenue churn - expansion) / starting revenue
- Can be negative (NRR > 100%)

Definitional issues:
- When is a customer "churned"?
- Active billing → cancelled: clearly churned
- Active billing → frozen / paused: ambiguous
- Negotiated discount: not churn but revenue impact
- Account merged with another (M&A): not churn but logo loss

Cohort-based churn:
- Year-1 churn typically higher than year 2+
- New-customer churn vs existing
- Survivorship bias if not careful

Annual contract considerations:
- Customer cancels mid-contract: still on books until renewal
- "Churn" date = renewal-not-renewed date, not cancel-intent date
- Lag in observed churn

Common mistakes:
- "We have 5% monthly churn" (often confuses customer vs revenue)
- Not accounting for cohort-age effects
- Not separating new vs expansion churn
- Reporting most-favorable view to board

Output:
1. Logo + revenue + net definitions
2. Cohort-aged churn rates
3. Annual contract considerations
4. Survivorship bias mitigation
5. Stakeholder reporting
```

The "real churn" rule: include everyone. Cancellations, paused accounts older than 90 days, downgrade-to-free, M&A losses. If you're cherry-picking, you're optimizing reporting not understanding business.

## 7. Use CLV for GTM decisions

CLV that doesn't drive decisions is decoration.

```text
Connect CLV to GTM decisions.

Decisions informed by CLV:

Channel investment:
- Channel A: $50K LTV / $5K CAC = 10:1 → invest more
- Channel B: $10K LTV / $8K CAC = 1.25:1 → reduce / stop
- Marketing budget reallocation quarterly

ICP refinement:
- Segment with $100K LTV → target more
- Segment with $20K LTV → de-prioritize
- Update sales / marketing personas

Sales motion:
- High-LTV enterprise → field sales worth it
- Low-LTV SMB → self-serve only
- Inside sales for mid-market

Customer success investment:
- High-LTV customers → dedicated CSM
- Low-LTV customers → tech-touch / pooled CSM

Pricing decisions:
- LTV doesn't capture price sensitivity
- But informs ceiling: enterprise willing to pay X based on value delivered

M&A decisions:
- Acquisition target with strong cohort LTV → pay more
- Target with weak retention → pay less

Anti-patterns:
- LTV calculated annually, never used
- Marketing keeps spending on low-LTV channels (don't see report)
- Sales chases low-LTV deals (commission incentive ≠ business)
- One-size-fits-all GTM despite segment-LTV differences

Output:
1. Decision-cadence using CLV
2. Reporting by channel / segment
3. Marketing reallocation framework
4. Sales motion alignment
5. Quarterly review process
```

The decision-loop discipline: every quarter, channel investment + sales motion reviewed against latest CLV by channel/segment. Otherwise CLV reporting is performance art.

## 8. Sensitivity + ranges, not points

Reporting CLV as a single number is misleading. Use ranges.

```text
Report CLV with sensitivity.

Variables that swing CLV:

NRR assumption:
- 95% (conservative): low LTV
- 105% (moderate): mid LTV
- 115% (aggressive): high LTV

Time horizon:
- 3 years: low LTV
- 5 years: mid LTV (industry standard)
- 10 years: high LTV (speculative)

Discount rate:
- 8%: low (cheap capital)
- 12%: mid (typical)
- 20%: high (expensive capital / risky)

Margin assumption:
- 65% gross margin: lower LTV
- 75% mid
- 85% high (rare for B2B SaaS)

Sensitivity table:
- Combine all variables in matrix
- Best / mid / worst case LTV
- Stakeholder discussion

Communication:
- "CLV is $20K-$60K depending on NRR assumption"
- Don't just pick the favorable one
- Show your math

Stakeholder framing:
- Conservative for budget planning
- Aggressive for fundraise pitch (acknowledge optimism)
- Honest middle for strategy

Output:
1. Sensitivity table
2. Best / mid / worst scenarios
3. Stakeholder communication
4. Quarterly refresh
5. Actuals tracking (did we hit predicted?)
```

The actuals-vs-predicted check: review last year's predicted CLV vs actual. Calibrates future predictions; surfaces over-optimism.

## 9. Tools for CLV analysis

```text
Pick CLV analysis tools.

Tier 1: Spreadsheet ($0)
- Manual SQL → Excel / Sheets
- For early-stage; <100 customers
- Limitations: error-prone; no real-time

Tier 2: BI tool ($100-500/mo)
- Looker / Mode / Metabase / Tableau / Hex
- Build CLV dashboards
- Refresh nightly
- Most B2B SaaS at scale

Tier 3: SaaS metrics platforms ($300-2K/mo)
- ChartMogul, ProfitWell (now ProfitWell + Recharge), Baremetrics
- Plug-and-play with Stripe / billing
- Built-in cohort analysis
- Less DIY

Tier 4: Custom platforms ($$$)
- Looker LookML for sophisticated cohort modeling
- Census / Hightouch for reverse ETL to CRM
- Integration with sales ops

Decision criteria:
- Customer count (>1K customers → BI minimum)
- Sophistication of cohort analysis needed
- Team bandwidth (manual SQL vs SaaS)
- Existing BI / data infrastructure

Output:
1. Recommendation for [SCALE]
2. Build vs buy
3. Cost vs value
4. Migration path
5. Integration with sales / marketing / finance tools
```

The ChartMogul / Baremetrics shortcut: for B2B SaaS at $1M-10M ARR, paying $300-1K/mo for plug-and-play SaaS metrics dashboard is cheaper than data engineering time. Move to custom BI later.

## 10. Communicate CLV honestly

CLV is one of the most-misused metrics in B2B SaaS. Don't add to the noise.

```text
Communicate CLV honestly.

For board / investors:
- Range, not point
- Cohort-based, not formula-only
- Segmented (SMB vs enterprise vs channel)
- Caveats included
- Sensitivity analysis
- Compare to prior periods + actuals

Common misuses to avoid:
- "Average LTV is $X" → which segment? what assumptions?
- "LTV / CAC is 5:1" → over what time horizon?
- "We project 10x LTV growth" → based on what cohort behavior?
- "Industry benchmark is Y" → benchmarks vary wildly; don't lean

Honest framings:
- "Conservative LTV (NRR 100%, 5-year): $20K"
- "Best-case LTV (NRR 120%, 5-year): $45K"
- "Range reflects expansion-uncertainty"

Internal communication:
- Marketing: "Channel A's LTV is X; Channel B's is Y" → drives spend
- Sales: "Segment X's LTV justifies field sales" → drives motion
- CS: "Account size X warrants dedicated CSM" → drives investment

Annual deep-dive:
- Q4 LTV review with all functions
- Update assumptions
- Refresh actuals vs predicted
- Plan changes

Output:
1. Board-report template
2. Range communication
3. Caveats checklist
4. Sensitivity table
5. Annual review process
```

The "trust the range, distrust the point" rule: any CLV reported as a single $X with no context is suspicious. Honest CLV is a range with caveats and clear assumptions.

## What Done Looks Like

A working CLV system:

- [ ] Cohort-based calculation per segment / channel
- [ ] Net CLV with margin + discount applied
- [ ] NRR-aware (account for expansion + downgrade)
- [ ] LTV / CAC ratio tracked (target 3:1+)
- [ ] Payback period (target 12 months)
- [ ] Sensitivity analysis (range + best/mid/worst case)
- [ ] Connected to GTM decisions (quarterly review)
- [ ] Reported honestly to board with caveats
- [ ] Tools appropriate to scale (Spreadsheet → BI → SaaS metrics → custom)
- [ ] Annual actuals-vs-predicted check (calibration)

The mistakes to avoid:

1. **Single CLV number without segmentation.** Average masks segment differences.
2. **Naive formula (ARPU / churn).** Assumes constant churn forever.
3. **Cherry-pick churn definition.** Be inclusive; don't game it.
4. **Aggressive NRR projection.** 120% NRR + 10-year horizon = manufactured number.
5. **CLV not used for decisions.** Just reporting; no impact.
6. **Compare to industry benchmarks naively.** Benchmarks vary wildly.
7. **One-time calculation; never refreshed.** CLV evolves; quarterly minimum.

## See Also

- [Sales Forecasting & Pipeline Management](./sales-forecasting-pipeline-management.md) — sales-side metrics
- [Reduce Churn](./reduce-churn.md) — churn improvement
- [Win-Back Churned Customers](./win-back-churned-customers.md) — adjacent retention
- [Customer Success Metrics Framework](./customer-success-metrics-framework.md) — CS metrics
- [Marketing Attribution & Multi-Touch Modeling](./marketing-attribution-multi-touch.md) — attribution informs CAC
- [Expansion Revenue](./expansion-revenue.md) — expansion drives NRR
- [Renewal Negotiation Playbook](./renewal-negotiation-playbook.md) — renewals drive LTV
- [Pricing Strategy](../1-position/pricing-strategy.md) — pricing affects ARPU
- [Pricing Review Cadence](./pricing-review-cadence.md) — pricing iteration
- [Quarterly Business Reviews](./quarterly-business-reviews.md) — internal review
- [Annual Planning OKRs](../1-position/annual-planning-okrs.md) — annual planning informed by CLV
- [Customer Advisory Board](./customer-advisory-board.md) — high-LTV customer council
- [Compensation Philosophy & Pay Bands](./compensation-philosophy-pay-bands.md) — sales / CS comp
- [Fundraising Playbook](../5-launch/fundraising-playbook.md) — CLV cited in fundraise narrative
- [Board Meeting Cadence & Materials](../5-launch/board-meeting-cadence-materials.md) — CLV in board reports
- [VibeReference: BI & Analytics Tools](https://vibereference.dev/devops-and-tools/bi-analytics-tools) — Looker / Mode / Metabase
- [VibeReference: Subscription Billing Providers](https://vibereference.dev/auth-and-payments/subscription-billing-providers) — billing data source
- [VibeReference: Stripe](https://vibereference.dev/auth-and-payments/stripe) — Stripe revenue data
- [VibeWeek: Usage-Based Billing](https://vibeweek.dev/6-grow/usage-based-billing-chat) — usage billing data
- [VibeWeek: Customer Health Scoring](https://vibeweek.dev/6-grow/customer-health-scoring-chat) — leading indicator of LTV
