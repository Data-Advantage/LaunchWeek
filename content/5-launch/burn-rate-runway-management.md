# Burn Rate & Runway Management

[⬅️ Back to Day 5: Launch](../5-launch/)

If you're a founder who raised any capital — pre-seed through Series B — burn rate and runway are the two metrics that determine whether you exist 18 months from now. The naive approach: "we've got plenty of money, we'll figure it out." The structured approach: track gross burn / net burn / runway monthly, model 12-24 month scenarios, set burn-rate triggers tied to milestones, communicate honestly to board, raise next round before runway dips below 6 months. Founders who run the company on burn-rate discipline outlive founders who don't. Most failures aren't from bad product; they're from running out of money before the product proves itself.

## What Done Looks Like

A working burn / runway discipline:
- [ ] Monthly burn calculated (gross + net)
- [ ] Runway tracked at current burn rate
- [ ] 12-24 month financial model maintained
- [ ] Burn-rate scenarios (conservative / moderate / aggressive)
- [ ] Triggers defined ("if X happens, cut Y")
- [ ] Board sees runway projection every meeting
- [ ] Next-round timing tied to runway (6-9 month buffer)
- [ ] Hiring tied to burn (one bad month delays hires)
- [ ] Cash management (sweep accounts, treasury yield)
- [ ] Year-end tax / accounting in good shape

## 1. Calculate burn correctly

Most founders confuse gross burn with net burn. Both matter.

```text
Calculate burn correctly.

Gross burn:
- Total monthly cash outflow
- Salaries, rent, software, ad spend, vendors, taxes
- Doesn't account for revenue
- Used for: cost-side analysis

Net burn:
- Gross burn minus monthly revenue (or cash collected)
- The actual cash leaving bank
- Used for: runway calculation

Cash burn vs P&L burn:
- Cash burn: actual money out
- P&L burn: accrual accounting (some expenses booked but not paid yet)
- Most founders track cash; investors expect both

Components of gross burn:

Personnel (often 60-80%):
- Salaries
- Bonuses
- Equity (no cash; track for dilution)
- Benefits / insurance
- Payroll taxes
- Severance reserves

Software / SaaS (5-15%):
- Cloud (AWS / Vercel / etc.)
- Tools (Slack, Notion, GitHub, etc.)
- Database, monitoring, analytics

Marketing / sales (5-25%):
- Ad spend
- Tools (CRM, analytics)
- Content / agency
- Events

Office / G&A (5-15%):
- Rent
- Office supplies
- Legal / accounting
- Insurance

Other:
- Travel
- Compliance / certifications
- Contractors
- Hardware

Calculation:

Monthly:
- Sum of all checks written / cash debited
- Less: revenue collected this month
- = Net burn

Watch:
- One-time charges (annual subscriptions, legal fees, hardware)
- Smooth or call out separately
- Don't include in trend

For [COMPANY], output:
1. Burn breakdown (% per category)
2. Gross + net burn
3. One-time vs recurring
4. Trend analysis
5. Comparison to plan
```

The "we're profitable on accrual" trap: companies celebrate accrual profitability while cash bleeds. Cash burn is what kills companies; track it primarily.

## 2. Calculate runway honestly

Runway = bank balance / monthly net burn. Sounds simple; gets gamed often.

```text
Calculate runway.

Basic formula:
- Runway (months) = current cash / monthly net burn

Honest calculation:
- Use last 3 months avg net burn (smooths one-time charges)
- Use lower bound of expected revenue (don't assume aggressive growth)
- Subtract reserved obligations (tax, severance, legal)

Conservative runway (recommended for board):
- Current cash
- Less: 3 months of operating reserve (don't run to $0)
- Divided by: max plausible monthly burn
- = Months until cash crisis (not zero)

Aggressive runway (don't share):
- Assumes hockey-stick revenue + flat burn
- Planning fiction; not actionable

Time horizon framing:
- "12 months at current burn"
- "9 months if we grow burn 20%"
- "18 months if we cut 25%"

Round-trip consideration:
- Fundraising takes 3-6 months
- Need to start raising at 6-9 months runway
- Working backward: "If we want to raise by July, we must be at 9 months runway in April"

Edge cases:
- Lumpy revenue (annual contracts) — average over period
- Pending receivables (assume collection delay)
- Pending tax refunds (don't count until received)
- Investment income on cash balance (yields ~5% in 2026 short-term)

Tools:
- QuickBooks / Xero / NetSuite for accounting
- Mosaic / Pry / Causal for financial modeling
- Spreadsheet for early-stage

Output:
1. Runway calculation
2. Conservative + aggressive scenarios
3. Trigger thresholds (when to act)
4. Fundraise back-calculation
5. Quarterly refresh
```

The "we have 18 months runway" comfort trap: 18 months at current burn assumes burn stays flat. Reality: burn grows with hiring + spend. Test scenarios.

## 3. Build a 12-24 month financial model

Model future, don't just measure present.

```text
Build a forward financial model.

Inputs:

Revenue model:
- Current ARR / MRR
- Growth rate assumption (conservative + base + aggressive)
- Churn rate
- Expansion rate (NRR)
- New customer additions per month

Headcount plan:
- Current headcount per function
- Hiring plan (which roles, when, salary)
- Attrition assumption

Other costs:
- Software / cloud (often grows with users)
- Marketing spend (often grows with budget)
- Office / G&A

Outputs:

Monthly P&L:
- Revenue
- COGS (hosting, support)
- Gross profit
- Operating expenses (engineering, sales, marketing, G&A)
- EBITDA
- Net income

Monthly cash:
- Starting cash
- Cash from operations
- Cash from financing
- Ending cash

Runway projection:
- Month-by-month runway calculation
- Crosses zero in month X
- Triggers (e.g., "raise round before month X-9")

Scenarios:
- Conservative (low growth, plan-as-budget)
- Base (current trajectory)
- Aggressive (high growth, can spend more)

Sensitivity:
- What if churn doubles?
- What if hiring 50% slower?
- What if revenue grows 50% slower?
- Stress test the model

Tools:
- Excel / Google Sheets for early-stage
- Pry, Causal, Mosaic, Cube for SaaS-aware models
- Driver-based: change inputs → outputs flow

Refresh:
- Monthly during early-stage
- Quarterly when more stable
- Real-time during fundraise

Output:
1. Model template
2. Scenario inputs
3. Visualization
4. Trigger thresholds
5. Communication template
```

The "linear growth assumption" mistake: most early-stage SaaS doesn't grow linearly. Lumpy revenue + cohort behavior matter. Use SaaS-specific tools (Pry / Causal) over generic spreadsheet.

## 4. Set burn triggers tied to milestones

Burn shouldn't drift. Tie it to milestones.

```text
Set burn triggers.

Trigger framework:

Trigger 1: Runway-based
- "If runway < 12 months, freeze new hires"
- "If runway < 9 months, start fundraise"
- "If runway < 6 months, cut 25% (last resort)"

Trigger 2: Milestone-based
- "If $1M ARR by Q2 → continue current burn"
- "If <$700K ARR by Q2 → reduce burn 20%"
- "If $1.5M ARR → can raise burn 30%"

Trigger 3: Macro-based
- "If interest rates spike + market freezes → 15-month buffer minimum"
- "If sector valuations crash → fundraise harder; cut earlier"

Pre-defined responses:

Burn-cut levers (in order of pain):
1. Pause hiring (no offers; existing offers honored)
2. Reduce ad spend (often biggest line item after personnel)
3. Cut software / vendor costs (~10% achievable)
4. Reduce contractor / agency
5. Pause discretionary (offsites, conferences)
6. Reduce travel / office
7. Salary reductions (founders / execs first)
8. Layoffs (last resort)

Communication:
- Triggers in writing with board
- Pre-agreed responses (no panic decisions)
- CFO / founders execute when triggered

Anti-patterns:
- "We'll figure it out"
- Wait until crisis to react
- Pretend triggers don't apply ("but the next month will be different")
- Layoffs as first response (skip earlier levers)

Output:
1. Trigger framework
2. Pre-defined responses
3. Decision-rights (who calls)
4. Board communication
5. Quarterly trigger review
```

The "no plan = panic" failure: companies that hit runway crisis without pre-agreed triggers panic. Layoffs done badly. Layoffs done before exhausting cheaper levers (ad spend, contractors).

## 5. Hiring tied to burn

Hiring is the biggest burn lever. Manage it intentionally.

```text
Tie hiring to burn discipline.

Hiring plan:
- Per-function targets (eng / sales / marketing / etc.)
- Timing (Q1 / Q2 / Q3 / Q4)
- Salary bands (see compensation-philosophy-pay-bands)
- Total headcount target

Burn-aware hiring:

Approval framework:
- All hires require runway-buffer check
- "After this hire, runway is X months at projected revenue"
- If X < threshold (12 months typical), CFO + CEO approve
- Else: hiring manager + CEO

Hiring freeze states:
- Active: hire per plan
- Selective: only critical roles (replace departures, key bets)
- Freeze: no new offers; existing in pipeline maybe pause
- Layoffs: separate decision

Triggers from runway:
- Runway > 18 months → active hiring
- 12-18 months → standard cadence
- 9-12 months → selective freeze
- <9 months → full freeze + fundraise
- <6 months → cuts

Replacement vs net-new:
- Replacement (someone left) → easier to approve
- Net-new (growing team) → tied to revenue trajectory

Founder discipline:
- Don't promise hires you can't deliver
- Communicate honestly with candidates ("we're hiring slowly given market")
- Honor existing offers (legal + reputational risk)

Output:
1. Hiring approval matrix
2. Freeze trigger thresholds
3. Replacement vs net-new policy
4. Communication during freezes
5. Quarterly hiring plan vs actual
```

The "growth at all costs" 2021-era mistake: hiring beyond runway. Now (2026) the discipline is back. Hire when revenue justifies; freeze when not.

## 6. Cash management — earn yield + protect

Cash isn't passive. Manage it.

```text
Manage cash actively.

Bank account structure:

Operating account:
- 2-3 months of expenses
- Used for daily operations
- Bank: Mercury, Brex, Chase, SVB-replacement
- FDIC insured to $250K

Treasury / sweep account:
- Excess cash here
- Earn yield (5%+ in 2026 on short-term Treasury)
- Mercury Treasury, Brex Treasury, or direct via broker
- Diversify: not all at one bank

Safety:
- FDIC limit per bank: $250K
- For $5M+ cash: spread across multiple banks
- Or: Treasury (essentially zero risk; backed by US gov)

Yield options (2026):
- Money market funds: ~5% (safe + liquid)
- Short-term Treasury (1-3 months): ~5%
- Treasury Bills: ~5%
- High-yield savings: ~4-5%
- CD ladders: 4.5-5% (less liquid)
- Don't: equity, bonds, crypto, anything risky

For $5M cash earning 5% = $250K/year passive income. Real money.

Risk management:

Concentration risk:
- Don't hold > $250K at any single bank (FDIC limit)
- SVB collapse 2023 reminder: bank concentration risk is real
- Spread across 2-3 banks minimum

Currency risk:
- Holding non-USD? FX exposure
- Hedge if material exposure

Counterparty risk:
- Vendors: don't pre-pay 12 months for vendor that might disappear
- Customers: collect timely; don't carry receivables forever

Treasury strategy:
- Founder-friendly bank (Mercury, Brex)
- Treasury services for yield
- Quarterly review with CFO
- Annual audit

Tools:
- Mercury / Brex / Ramp (banking + cards)
- ProfitWell / ChartMogul (revenue tracking)
- QuickBooks / Xero (accounting)

Output:
1. Account structure
2. Yield strategy
3. FDIC distribution
4. Risk management
5. Quarterly review
```

The 2023 SVB lesson: banks can fail. Don't concentrate $5M at one bank because "they're our partner." Spread; use Treasury directly for ultimate safety.

## 7. Communicate burn to the board

Board cares about burn. Communicate clearly.

```text
Communicate burn to board.

Monthly report (board):

Section 1: Cash position
- Starting cash
- Net burn this month
- Ending cash
- Runway at current burn

Section 2: Burn trend
- 3-month rolling avg
- Trend up / down / stable
- One-time vs recurring breakdown

Section 3: Forward projection
- Next 12-18 months
- Scenarios (conservative / base / aggressive)
- Trigger thresholds

Section 4: Variance vs plan
- Plan vs actual (revenue + expenses)
- Reasons for variance
- Plan adjustment if needed

Section 5: Decisions needed
- Hiring approvals (if exceeds plan)
- Major spend approvals
- Fundraise timing

Quarterly deep-dive:
- Sensitivity analysis
- Headcount plan review
- Marketing budget effectiveness
- Cost-cut opportunities

Tone:
- Honest, not optimistic
- Acknowledge concerns proactively
- Show plan + alternatives

Anti-patterns:
- Hide concerning trends (board finds out later; trust collapses)
- Optimistic-only scenarios
- No forward projection (only reactive)
- Surprise board with cash issue ("we need to raise NOW")

Output:
1. Monthly report template
2. Quarterly deep-dive format
3. Variance analysis
4. Communication tone
5. Decision-rights for major spend
```

The "no surprises" rule: board hates surprises. Tell them about runway concern when there's runway to act. Telling at 3 months left = no options + collapsed trust.

## 8. Plan fundraise timing from runway

Fundraise timing is determined by runway, not by company milestones.

```text
Plan fundraise timing.

Runway-driven timeline:

12+ months runway:
- Not yet raising
- Build traction; reach metrics for next round
- Optionality

9-12 months:
- Begin fundraise prep (pre-read, deck, list)
- Soft conversations with existing investors
- 3-month process kicks off

6-9 months:
- Active fundraise
- Term sheet target by month -6
- Close by month -3

3-6 months:
- Closing legal docs
- Cash arrives
- Reset to 18-24 months at new round

<3 months runway:
- Crisis mode
- Bridge from existing investors
- Distressed terms
- Avoid by acting earlier

Why 6-9 month buffer:
- Fundraise process takes 3-6 months
- Closing legal: 1-3 months
- Buffer for delays / re-trade

Anti-patterns:
- "We'll raise when we have to" → distressed
- "We don't need to raise" → at 6 months, pressure builds
- Wait for "perfect" metrics → market changes

Bridge financing:
- If milestones missed, bridge from existing investors
- "Bridge to next round" or "bridge to revenue"
- Convertible note typical
- Higher cost; reputational signal

Alternatives:
- Revenue growth (extend runway organically)
- Cost cuts
- Strategic financing (revenue-based, debt)

Output:
1. Runway-to-fundraise timeline
2. Trigger thresholds
3. Bridge / alternative options
4. Communication with existing investors
5. Annual planning incorporating fundraise
```

The "wait for milestones" trap: founders wait too long. By the time milestones hit, runway is short. Better to start raising earlier with okay metrics than panicked at 6 months.

## 9. Year-end financial close + tax

Annual cycle: close books + plan taxes.

```text
Annual financial close.

Year-end checklist:

Books close:
- Reconcile all bank accounts
- Reconcile credit cards
- Verify revenue recognition
- AR / AP cleanup
- Inventory if applicable

Tax prep:
- 1099s for contractors (Jan deadline)
- W-2s for employees (HR / payroll)
- Federal + state corporate filing
- Sales / VAT tax filings

R&D tax credit:
- Qualifying engineering activity
- Federal credit (typically 6-10%)
- State credits available
- Worth filing for engineering-heavy companies

QSBS planning:
- Qualified Small Business Stock
- 5+ year holding period for full exclusion
- Founders + early investors qualify
- Track shares from grant date

Audit (if needed):
- Series A+ often requires
- Set up data for auditor
- Big 4 vs mid-tier vs boutique

Forecasting:
- Next year plan
- Annual planning (see annual-planning-okrs)
- Burn / runway projections

Tools / vendors:
- Pilot / Bench / Acuity (bookkeeping)
- CPA firm (tax)
- R&D credit specialist (Strike, Boast, others)

Output:
1. Year-end close checklist
2. Tax prep timeline
3. R&D credit evaluation
4. Audit preparation
5. Following year planning
```

The R&D credit insight: most engineering-heavy startups qualify. Worth $50K-500K+ annually. Hire a specialist (Strike, Boast); typical fee 15-25% of credit.

## 10. Cost-cutting playbook (when needed)

When cuts are necessary, do them well.

```text
Cost-cutting playbook.

Order of cuts (from least painful to most):

Tier 1: No-brainer ($10-50K/yr per item):
- Software audit (cancel unused subscriptions)
- Vendor renegotiation (annual contracts)
- Office downsizing (sublet, smaller space)
- Travel reduction
- Conference / events

Tier 2: Tighten without pain ($50-200K/yr per category):
- Marketing channels (cut lowest-ROI; see marketing-attribution)
- Contractor reduction
- Discretionary spending (offsites, perks beyond essentials)
- Founder / exec salary reductions

Tier 3: Significant changes ($200K+/yr):
- Hiring freeze (most-effective lever)
- Vendor consolidation
- Office closure (if remote-friendly)

Tier 4: Layoffs (last resort, traumatic):
- 10-20% if needed
- Severance + COBRA
- Public communication
- Affects morale + recruiting long-term

Process when cuts needed:

1. Honest assessment (CEO + CFO + board)
2. Pre-defined target (e.g., reduce burn 25%)
3. Identify cuts in tier order
4. Stack until target met
5. Communicate transparently
6. Execute fast (slow is worse)

Avoid:
- Across-the-board cuts (low-impact areas)
- Cutting growth (without impacting unit economics)
- Layoffs as first response (skip Tier 1-3)
- Optimism that masks the problem

Output:
1. Cost-cut tier framework
2. Target setting
3. Communication plan
4. Execution timeline
5. Morale management post-cuts
```

The "don't bleed slowly" rule: half-measures don't work. If you need 25% cut, do 25% once. Slow drip causes ongoing morale damage; bigger cut once heals faster.

## What Done Looks Like

A working burn / runway discipline:

- [ ] Monthly gross + net burn calculated
- [ ] Runway projected 12-24 months at current + scenarios
- [ ] Triggers tied to runway (freeze hiring at X, fundraise at Y, cut at Z)
- [ ] Hiring tied to burn discipline
- [ ] Cash managed actively (yield + diversification)
- [ ] Board sees burn / runway every meeting
- [ ] Fundraise timed from runway (start at 9 months left)
- [ ] Year-end close + tax + R&D credit pursued
- [ ] Cost-cut tiers documented if needed
- [ ] No surprises — transparent communication

The mistakes to avoid:

1. **"We've got plenty of money" complacency.** Burn drifts up; runway shortens; no plan.
2. **Linear growth assumption in model.** SaaS is lumpy; cohort-based.
3. **Concentrate cash at one bank.** SVB lesson.
4. **Wait for crisis to fundraise.** Distressed terms.
5. **Layoffs as first response.** Skip cheaper levers.
6. **Hide bad trends from board.** Trust collapses.
7. **Skip R&D credit.** Money on the table.
8. **No financial model.** Flying blind.

## See Also

- [Fundraising Playbook](./fundraising-playbook.md) — round mechanics
- [Investor Monthly Updates](./investor-monthly-updates.md) — investor comms
- [Board Meeting Cadence & Materials](./board-meeting-cadence-materials.md) — board reporting
- [Compensation Philosophy & Pay Bands](../4-convert/compensation-philosophy-pay-bands.md) — biggest burn lever
- [Sales Forecasting & Pipeline Management](../4-convert/sales-forecasting-pipeline-management.md) — revenue side
- [Customer Lifetime Value Playbook](../4-convert/customer-lifetime-value-playbook.md) — economics
- [Marketing Attribution & Multi-Touch](../4-convert/marketing-attribution-multi-touch.md) — marketing efficiency
- [Crisis Communication Playbook](./crisis-communication-playbook.md) — when cuts go public
- [Founder Mental Health & Sustainable Pace](./founder-mental-health-sustainable-pace.md) — pacing
- [Annual Planning OKRs](../1-position/annual-planning-okrs.md) — annual planning
- [Annual Strategy Offsite](../1-position/annual-strategy-offsite.md) — strategic decisions
- [Quarterly Business Reviews](../4-convert/quarterly-business-reviews.md) — review cadence
- [Acquisition / Exit Strategy](./acquisition-exit-strategy.md) — exit options
- [VibeReference: Accounting & Bookkeeping Software](https://vibereference.dev/auth-and-payments/accounting-bookkeeping-software) — QuickBooks / Xero
- [VibeReference: Cap Table & Equity Management Tools](https://vibereference.dev/auth-and-payments/cap-table-equity-management-tools) — Carta
- [VibeReference: HR & Payroll Tools](https://vibereference.dev/auth-and-payments/hr-payroll-tools) — payroll cost
- [VibeReference: Cloud Cost Management Tools](https://vibereference.dev/cloud-and-hosting/cloud-cost-management-tools) — cloud spend
