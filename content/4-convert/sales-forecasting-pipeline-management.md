# Sales Forecasting & Pipeline Management

[⬅️ Back to Day 4: Convert](../4-convert/)

If you're running a B2B SaaS with sales-led GTM at $1M+ ARR, you need accurate sales forecasts. The naive version: ask reps "how's the quarter looking?" → optimistic numbers → miss by 30% → board awkwardness. The structured version: defined pipeline stages, exit criteria per stage, weighted forecasting, MEDDIC / MEDDPICC qualification, weekly forecast reviews, accuracy tracking. Sales forecasting is one of those things that looks simple from outside ("just multiply pipeline by win rate") and is actually one of the hardest sales-ops disciplines. Get it wrong and you mis-hire, mis-budget, mis-fundraise.

## What Done Looks Like

A working sales-forecasting system:
- [ ] Defined pipeline stages with exit criteria
- [ ] MEDDIC / MEDDPICC qualification per opportunity
- [ ] Weighted forecast model + commit/best-case/worst-case
- [ ] Weekly forecast reviews with reps
- [ ] Forecast accuracy tracked (target: ±10%)
- [ ] Pipeline coverage (3-5x of quota typical)
- [ ] CRM hygiene enforced (no stale opps)
- [ ] Quarterly board-ready forecast
- [ ] Annual planning informed by historical data
- [ ] Forecast drives decisions (hiring, marketing budget, fundraise timing)

## 1. Define pipeline stages with exit criteria

Most pipelines have stages but no exit criteria. Define both.

```text
Build pipeline stages with exit criteria.

Standard B2B SaaS stages:

Stage 0: Prospect (pre-pipeline)
- Suspect / lead from marketing
- Not yet qualified
- Not in forecast

Stage 1: Discovery (10% probability)
- Discovery call completed
- Buyer + use case identified
- Exit criteria: BANT or MEDDIC criteria starting to be filled

Stage 2: Qualified (25%)
- Need confirmed
- Budget exists
- Champion identified
- Exit criteria: MEDDIC: Metrics + Economic Buyer + Decision Criteria + Decision Process + Identify Pain + Champion

Stage 3: Proof / Demo (40%)
- Demo completed
- Technical / product fit confirmed
- POC if needed
- Exit criteria: Buyer agreed product solves problem; pricing discussed

Stage 4: Proposal (60%)
- Proposal sent
- Pricing negotiated
- Exit criteria: Verbal agreement on terms; legal review starting

Stage 5: Contract / Negotiation (80%)
- Contract sent
- Legal redlines in process
- Exit criteria: Contract signed within 2-4 weeks

Stage 6: Closed Won / Closed Lost (100% / 0%)

Exit criteria principles:
- Verifiable (not "vibes" — actual events)
- Buyer-confirmed (not just rep belief)
- Documented in CRM (notes, attachments)
- No skipping stages

Anti-patterns:
- "I'm in late discovery" (vague)
- Skipping Discovery to "save time"
- Promoting opp because rep wants commission
- Stages without probabilities

For [GTM MOTION], output:
1. Stage-by-stage definition
2. Exit criteria per stage (verifiable events)
3. Probability percentages (calibrated to historical close rates)
4. Stage-skip rules (don't allow)
5. CRM enforcement (required fields per stage)
```

The verifiable-exit-criteria rule: every stage advancement requires a documented event. "Customer confirmed pain in writing" or "demo deck shared." Not "rep feels good."

## 2. MEDDIC / MEDDPICC — qualify rigorously

The standard B2B qualification framework. Use it.

```text
Implement MEDDIC qualification.

MEDDIC fields:
- M — Metrics: quantified business impact (e.g., "save $200K/year")
- E — Economic Buyer: who signs the check
- D — Decision Criteria: what matters to them
- D — Decision Process: how they evaluate vendors
- I — Identify Pain: what's broken today
- C — Champion: internal advocate

MEDDPICC adds:
- P — Paper Process: legal / procurement specifics
- C — Competition: who else is being evaluated

Implementation:
- CRM custom fields per MEDDIC element
- Required fields at certain stages (Stage 2+ require all 6)
- Reps fill out via discovery + ongoing conversation
- Manager reviews quality (not just completion)

Per-element checklist:

Metrics:
- Quantified ROI / business impact?
- Specific (not "improve productivity" but "reduce ticket-handling time by 30%")?
- Tied to buyer's metrics, not yours

Economic Buyer:
- Named (not just "VP of X")
- Have you talked to them?
- Does THEY know about you?

Decision Criteria:
- What's their evaluation rubric?
- Functional / technical / commercial criteria?
- Documented?

Decision Process:
- Steps in their evaluation
- Stakeholders involved
- Timeline
- Approvals required

Identify Pain:
- What's broken today?
- What happens if they don't solve it?
- Quantified cost of inaction?

Champion:
- Internal advocate (not just user)
- Has political capital
- Will sell internally
- Verified: have they done it before?

Anti-patterns:
- Champion = end user (no political capital)
- "Decision Process: TBD" (rep doesn't know)
- Metrics = vague ("improve efficiency")
- Skipping E (Economic Buyer) — most-skipped, most-fatal

Output:
1. MEDDIC fields in CRM
2. Per-element coaching guide
3. Required completion at stage thresholds
4. Manager review process
5. Common gaps + how to surface
```

The Economic-Buyer test: if rep can't name and describe the EB, deal is at-risk. Either get to EB or de-risk forecast.

## 3. Weighted forecasting — the math

```text
Build a weighted forecast.

Basic weighted forecast:
- Sum: each opp's value × stage probability
- Example: $100K @ 60% = $60K weighted

Methods:

Method 1: Stage-based (simple)
- Stage 1 = 10%, Stage 2 = 25%, ..., Stage 5 = 80%
- Multiply opp value × stage probability
- Sum across pipeline

Method 2: Historical close rate per stage
- Look at last 12 months: Stage 3 deals closed at 38% (not 40%)
- Use actual rates (calibrated to your data)

Method 3: Per-rep adjustment
- Top reps close 60% of Stage 4 (vs 50% average)
- Junior reps close 40%
- Adjust per-rep
- Use only with enough data (>20 deals per rep)

Method 4: Per-segment / per-product
- Enterprise deals close 35% in Stage 4 (vs 50% mid-market)
- SMB closes faster but smaller; Enterprise larger but slower

Forecast categories (ABS-style):

- Commit: rep believes will close (high confidence)
- Best Case: could close with effort
- Pipeline: in pipeline; not yet committed

Total forecast = sum of (Commit + 50% Best Case + 25% Pipeline)
- Or: pure Commit (most conservative)
- Or: Commit + Best Case (most optimistic)

Reporting cadence:
- Weekly: rep submits commit / best case
- Monthly: forecast vs plan
- Quarterly: forecast accuracy review

Output:
1. Forecast methodology choice
2. Stage probabilities (historical)
3. Categorization rules (commit / best / pipeline)
4. CRM dashboard
5. Accuracy tracking
```

The "honest commit" discipline: reps over-commit early-quarter ("$500K!") and under-commit end-of-quarter ("$200K"). Manager calibration over time fixes this.

## 4. Pipeline coverage — how much you need

Pipeline is leading indicator of next quarter's revenue.

```text
Calculate pipeline coverage.

Pipeline coverage = Pipeline value / Quota

Healthy ratios:
- 3x coverage: aggressive (only sales orgs with >40% close rate)
- 4-5x coverage: standard for most B2B SaaS
- 6x+ coverage: low close rate or long sales cycles

Per-stage coverage:
- Stage 1-2 (early): need 5-10x quota (lots fall out)
- Stage 3-4 (mid): need 3-5x quota
- Stage 5 (late): need 2-3x quota
- Stage 6 (commit): need 1-1.5x quota for safety margin

By time horizon:
- This quarter: pipeline + commits should = 1-1.2x quota
- Next quarter: pipeline should = 3-4x quota (early-stage opps)
- 6 months out: pipeline should = 5-6x quota

Coverage gaps:
- Underforecasted = will miss quarter
- Overforecasted = waste of effort; possibly bad deals

Decision triggers:
- <2x coverage in current quarter → emergency mode
- <3x next quarter → invest in pipeline gen
- 5x+ in current quarter → pull deals forward; raise capacity

Pipeline-gen levers:
- Outbound (SDR / AE-led)
- Marketing campaigns (ABM, content, ads)
- Customer expansion
- Partner channels

Output:
1. Coverage targets per stage / quarter
2. Pipeline-gen plan (when coverage low)
3. CRM dashboard
4. Weekly coverage review
5. Triggers for marketing investment
```

The "we have huge pipeline" trap: $5M pipeline at 5% close rate = $250K. Coverage matters; quality of coverage matters more.

## 5. Forecast accuracy — measure to improve

Track accuracy. Reps + managers improve when they see their misses.

```text
Track forecast accuracy.

Accuracy metrics:

Forecast vs actual:
- Commit forecast (Day 1 of quarter) vs Actual closed
- Target: ±10% (good); ±20% (poor)
- Track by rep, by manager, by team

Mid-quarter accuracy:
- Forecast at week 8 of 13 vs Actual
- Tighter target by mid-quarter

Pipeline conversion rates:
- Stage 3 → Stage 4 conversion %
- Stage 4 → Closed Won %
- Track over time
- Used to calibrate stage probabilities

Sandbagging detection:
- Rep consistently beats commit by 30%+ → sandbagging
- Either commits artificially low or hiding deals
- Coach to honest commits

Optimism detection:
- Rep consistently misses commit by 30%+ → optimistic
- Pulls forward unrealistic deals
- Coach to realistic timeline

Reporting:
- Weekly: forecast snapshot
- Monthly: accuracy vs plan
- Quarterly: accuracy report card per rep
- Annual: methodology refresh

Anti-patterns:
- Accuracy not tracked → reps don't improve
- Penalize misses but not sandbagging → reps under-commit
- Manager doesn't review individual rep accuracy → bad data persists

Output:
1. Accuracy KPI definitions
2. Per-rep / team / quarterly tracking
3. Manager 1:1 forecast review
4. Sandbag / optimism coaching framework
5. Annual methodology calibration
```

The ±10% target: large companies hit ±2-3%. Mid-market typically ±10-15%. Below 80% accuracy = the system is broken.

## 6. Weekly forecast call — discipline

The single highest-leverage activity. Most teams skip or do poorly.

```text
Run effective weekly forecast calls.

Format:
- Manager + each rep individually
- 30 minutes weekly
- Same time / day each week

Agenda:
- Min 0-2: Headline numbers (pipeline, commit, gap)
- Min 2-15: Top 5-10 opps deep-dive (one at a time)
- Min 15-25: At-risk deals + recovery plan
- Min 25-30: Pipeline gen + next-week priorities

Per-opp deep-dive questions:
- What's the next step?
- What's confirmed by buyer (not rep belief)?
- What's the close timeline?
- Who's the EB?
- What could go wrong?
- What do you need from me?

Manager role:
- Pressure-test rep's belief
- Probe specific exit criteria
- Don't accept vague answers
- Coach on next steps

Common rep behaviors to address:
- "It'll close in 2 weeks" without verifiable evidence
- Skipping MEDDIC fields
- Optimistic timelines
- Stagnant deals (no activity in 30 days)

CRM hygiene:
- Stage updated weekly
- Notes documented
- Next steps logged
- Stale opps closed-lost or recategorized

Anti-patterns:
- Group forecast calls (peer pressure distorts)
- Manager talks more than rep
- No follow-up actions logged
- "Same as last week" answers

Output:
1. Weekly call agenda template
2. Deep-dive question bank
3. Manager coaching guide
4. Action-item tracking
5. Stale-opp review process
```

The discipline that separates great sales orgs: weekly 1:1 forecast calls every week without exception. Vacations don't pause; just shorter call.

## 7. CRM hygiene — clean data drives forecasts

Garbage in = garbage out. Enforce CRM discipline.

```text
Enforce CRM hygiene.

Required fields by stage:

Stage 1 (Discovery):
- Account, contact (multiple)
- Use case
- Initial pain
- Estimated value
- Estimated close date

Stage 2 (Qualified):
- All MEDDIC fields
- Champion identified
- EB confirmed

Stage 3+ (Proof, Proposal, Contract):
- Detailed notes per touchpoint
- Decision process / timeline
- Competitor identified
- Pricing discussed

Hygiene rules:
- No opp without next step
- No opp stagnant >30 days without manager review
- No opp with vague "TBD" close date >7 days
- No opp without Economic Buyer in Stage 2+

Enforcement:
- CRM validation rules (Salesforce / HubSpot)
- Required fields per stage
- Auto-flag stagnant opps
- Manager weekly review

Cleanup cadence:
- Weekly: stagnant opp review
- Monthly: full pipeline scrub (close-lost vs continue)
- Quarterly: stage probability recalibration

Pipeline rot:
- Old opps that won't close
- Inflate pipeline number; don't predict revenue
- Be ruthless: close-lost or push-out

Tools:
- Salesforce / HubSpot (CRM)
- Gong / Chorus (call analysis)
- Clari / BoostUp (forecasting layer)
- Outreach / Salesloft (engagement layer)

Output:
1. Required-field matrix per stage
2. Hygiene-rule definitions
3. Auto-flag triggers
4. Cleanup cadence
5. Tool stack recommendations
```

The pipeline-rot rule: if it hasn't moved in 60 days, it's not real. Close-lost or push-out. Looking at $5M pipeline of 50% rotted opps misleads.

## 8. Forecasting tools — when to upgrade

```text
Decide forecasting tools.

Tier 1: Spreadsheet ($0)
- Manual forecast in Excel / Google Sheets
- For <10 reps; simple GTM
- Limitations: error-prone; no real-time

Tier 2: CRM-native ($0 with CRM)
- Salesforce Forecasts / HubSpot Forecast
- Built-in, basic
- For 10-50 reps

Tier 3: Dedicated forecasting ($30-100K+/yr)
- Clari, BoostUp, Aviso, Outreach Commit
- AI-driven; pattern-recognition
- For 50+ reps; complex GTM

Tier 4: Revenue intelligence ($100K-500K+/yr)
- Clari Enterprise, BoostUp Enterprise
- Multi-product / multi-segment forecasting
- Renewal + expansion + new business unified

Decision criteria:
- Rep count (>20 reps → consider Tier 3)
- Forecast accuracy (consistently off → upgrade)
- Manual time spent (>5 hrs/week per manager → upgrade)
- Multi-product complexity → Tier 3+

Tool features to evaluate:
- Pipeline analytics
- AI-driven deal scoring
- Activity-based signals (calls, emails, meetings)
- Forecast roll-up across hierarchy
- CRM bidirectional sync
- Exec dashboard

Output:
1. Recommendation for [SCALE]
2. Build vs buy analysis
3. Implementation timeline
4. Adoption strategy (rep buy-in)
5. ROI metrics
```

The Clari signal: most B2B SaaS adopts Clari (or BoostUp / Aviso) at $10M+ ARR. Below that, CRM-native is fine.

## 9. Forecasting in different GTM motions

Forecasting differs across motions.

```text
Forecast methodology by GTM motion.

Sales-led (traditional):
- Pipeline-based forecasting
- MEDDIC qualification
- Stage probabilities
- Deal-by-deal review

PLG-led with sales (modern B2B SaaS):
- Two streams: self-serve (rate-based) + assisted (deal-based)
- PQL-driven pipeline (product-qualified leads)
- Conversion rate from PQL → meeting → deal

Bottom-up SaaS:
- Cohort-based forecasting
- Self-serve signups → trial → paid → expansion
- Less deal-by-deal; more funnel math

Channel-led:
- Forecast partner pipeline separately
- Less control; lower confidence
- Adjust probabilities (50% of partner forecasts hit)

Renewal-heavy SaaS:
- Renewal forecasting separate from new
- Default: assume 95% renewal; adjust per account health
- See renewal-negotiation-playbook

Hybrid:
- Combine multiple methods
- Roll up to total

For [GTM MOTION], output:
1. Forecast method
2. Key metrics (close rate / conversion / NRR)
3. CRM model (deal-based vs rate-based)
4. Cadence (weekly for sales-led; monthly for PLG)
5. Reporting structure
```

The PLG motion gotcha: traditional pipeline forecasts don't fit. Use cohort + funnel math for self-serve; standard pipeline for assisted.

## 10. Connect forecast to other functions

Forecast doesn't live in isolation.

```text
Connect forecast to broader org.

Marketing:
- Pipeline gap → marketing campaigns triggered
- ABM target lists for Stage 0-1
- Lead scoring informed by closed-won patterns
- Marketing-attributed pipeline reported separately

Customer Success:
- Renewal forecast separate from new business
- Health scoring → at-risk renewals
- Expansion forecast (upsell + cross-sell)

Finance:
- Forecast → revenue plan → budget
- Hiring decisions tied to forecast confidence
- Cash-flow planning

Product:
- Win-loss reasons inform roadmap
- Feature gaps blocking deals
- Pricing pressure points

CEO / board:
- Quarterly forecast presentation
- Multi-quarter revenue outlook
- Confidence ranges (commit / best / worst)

Anti-patterns:
- Sales has forecast; nobody else sees it
- Marketing campaigns disconnected from pipeline gaps
- CS / new business forecasts separate without unified view
- Finance plans on commit; reality misses

Output:
1. Cross-functional forecast-share cadence
2. Marketing-pipeline alignment process
3. Renewal + expansion forecast
4. Finance / FP&A integration
5. Board presentation template
```

The "marketing doesn't see pipeline gap until quarter-end" problem: forecast must be shared with marketing weekly so they can adjust campaigns / spend.

## What Done Looks Like

A working sales forecasting system:

- [ ] Defined pipeline stages with verifiable exit criteria
- [ ] MEDDIC / MEDDPICC qualification per opportunity
- [ ] Weighted forecast with commit / best / pipeline categories
- [ ] Pipeline coverage targets (3-5x typical)
- [ ] Weekly 1:1 forecast calls with reps
- [ ] CRM hygiene enforced (required fields, no rot)
- [ ] Forecast accuracy tracked (target ±10-15%)
- [ ] Stale-opp cleanup quarterly
- [ ] Tool stack appropriate to scale
- [ ] Cross-functional forecast-share with marketing / CS / finance

The mistakes to avoid:

1. **Vague exit criteria.** Stages without verifiable events let reps inflate pipeline.
2. **Missing Economic Buyer.** Most-fatal MEDDIC gap. Don't proceed to Stage 4+ without EB.
3. **Optimistic close dates.** Reps default to "this quarter." Calibrate to realistic.
4. **Pipeline rot ignored.** $5M pipeline of mostly-rotted opps misleads forecast.
5. **No accuracy tracking.** Without data, reps don't improve forecasting.
6. **Weekly forecast calls skipped.** Discipline that separates good from great sales orgs.
7. **CRM data poor.** Required fields not enforced; forecasts unreliable.
8. **Tool over-investment too early.** Clari at <10M ARR is overkill.

## See Also

- [Sales Playbook](./sales-playbook.md) — overall sales motion
- [Sales Discovery Call Playbook](./sales-discovery-call-playbook.md) — feeds Stage 1-2 quality
- [Sales Demo Calls](./sales-demo-calls.md) — feeds Stage 3 quality
- [Sales Compensation Plans](./sales-compensation-plans.md) — incentive alignment with forecast
- [Sales Onboarding Ramp](./sales-onboarding-ramp.md) — ramp informs forecast capacity
- [Sales Enablement & Battle Cards](./sales-enablement-battle-cards.md) — adjacent enablement
- [Sales-to-CS Handoff](./sales-to-cs-handoff.md) — adjacent post-close
- [First Sales Hire](./first-sales-hire.md) — first AE
- [Annual Contract Negotiation](./annual-contract-negotiation.md) — close-stage details
- [Renewal Negotiation Playbook](./renewal-negotiation-playbook.md) — renewal forecasting
- [Win-Loss Analysis](./win-loss-analysis.md) — feedback to forecast methodology
- [Quarterly Business Reviews](./quarterly-business-reviews.md) — board forecast presentation
- [Annual Planning OKRs](../1-position/annual-planning-okrs.md) — forecast feeds OKRs
- [Compensation Philosophy & Pay Bands](./compensation-philosophy-pay-bands.md) — comp anchors capacity
- [VibeReference: CRM Providers](https://vibereference.dev/marketing-and-seo/crm-providers) — Salesforce / HubSpot CRMs
- [VibeReference: Sales Engagement Platforms](https://vibereference.dev/marketing-and-seo/sales-engagement-platforms) — Outreach / Salesloft
