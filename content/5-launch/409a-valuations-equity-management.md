# 409A Valuations & Equity Management

[⬅️ Back to Day 5: Launch](./)

A 409A valuation is the IRS-required appraisal of your company's common stock used to set the strike price for stock options. Get it right and your option grants are clean: employees pay no immediate tax on receiving options, and they have meaningful exercise upside if the company does well. Get it wrong and the IRS imposes punitive consequences — immediate income tax on the difference between strike price and "fair market value" at grant, plus a 20% penalty, plus interest, plus state penalties, applied to every employee whose grant was mispriced. That's not a small thing. It's also one of the legal/finance line items most founders defer until their lawyer flags it.

This playbook covers what 409As are, when you need them, who provides them, what drives valuations up vs. down, how the result interacts with option pricing + cap table strategy, what triggers refreshes, and how to think about valuations during fundraising, repricing after down rounds, and exits.

## What Done Looks Like

- A current 409A valuation in place before issuing any new option grant
- Refreshed at least every 12 months OR after a "material event" (priced funding round, M&A activity, large customer change)
- A reputable provider chosen — Carta, Pulley, AngelList, Aranca — appropriate to your stage
- Strike prices on all option grants set at-or-above the 409A FMV (Fair Market Value)
- Documentation retained: the full 409A report (often 30-60 pages); board approval of the valuation; option-grant documents tying back to it
- Awareness of how 409A interacts with current fundraising: a Series B priced at $100M might be supported by a 409A that values common at $25-40M (typical 30-40% common discount)
- After down rounds: 409A re-priced to reflect new value; existing option strikes may be repriced via formal repricing program
- Annual or event-driven refresh built into operating cadence
- A specific person owns equity ops past Series A — usually a fractional CFO, in-house finance lead, or rev ops + legal pair

## 1. What is a 409A Valuation?

In 2004, IRS Section 409A was enacted to prevent companies from issuing stock options at strike prices below "fair market value" (FMV) at the moment of grant — which would have been a way to give employees instant taxable income disguised as options. The fix: the IRS demands an independent appraisal of the company's common stock. Options must be granted at a strike price ≥ that FMV.

The 409A FMV is **for the common stock specifically**. Preferred stock (held by investors) is usually worth more per share — investors got liquidation preferences, anti-dilution, control terms, and often participating preferred. Common stock is what employees get. The valuation accounts for this discount (typically 30-50% of preferred price for early-stage; can compress to 15-25% as the company matures).

A typical 409A report:

- 30-60 pages
- Conducted by an independent appraiser
- Uses methodologies appropriate to stage: Backsolve (after a recent priced round), Option Pricing Model (OPM), Probability Weighted Expected Return (PWERM), Hybrid
- Lists assumptions (volatility, time to liquidity, comparable public companies)
- Returns a single FMV per share for common stock
- Includes Safe Harbor protection IF the appraiser is qualified and the methodology is reasonable

**Safe Harbor matters.** A qualified 409A puts the burden of proof on the IRS to challenge it. Without Safe Harbor, the burden is on you. Always use a qualified provider.

## 2. When You Need a 409A

You need a 409A whenever you grant stock options or set option strike prices. Specifically:

- **Before your first option grant.** No 409A = no defensible strike price. Don't grant options without one.
- **At least every 12 months.** The IRS treats valuations as "stale" after 12 months.
- **After a material event.** A priced funding round (especially), a significant customer win/loss, an M&A discussion, a major product launch, regulatory shift, leadership change.
- **Before any large grant.** Senior hires getting >5% should trigger a refresh check.
- **At exit / acquisition discussion.** Final valuation may matter for tax + reporting.

The "material event" rule is what catches founders. You closed Series B at $300M post; you're using a 409A from 4 months ago that valued common at $0.50/share when the new round implies $5/share. Strikes set against the old 409A are now suspect. Refresh.

## 3. Who Provides 409A Valuations

Three categories:

### 1. Bundled with cap table software (the 80% case)

- **Carta**: includes 409A in higher-tier plans; ~$3K-15K/yr depending on stage; integrates seamlessly with their cap table
- **Pulley**: similar; usually cheaper than Carta at early stage
- **AngelList Stack**: bundled
- **Shareworks (Morgan Stanley)**: enterprise
- **EquityEdge**: legacy

For early-stage (pre-Series B), bundled is usually the right call — saves you from juggling vendors. The valuation team is competent for routine cases. Pricing is opaque but $3-10K per refresh is typical.

### 2. Specialized 409A firms

- **Aranca**: well-respected; mid-market & later
- **Scalar (acquired by Carta)**: now part of Carta
- **Andersen Tax**: enterprise
- **Houlihan Lokey**: complex / pre-IPO

Use these when:
- Complex cap table (multiple preferred tranches; warrants; SAFEs not yet converted)
- Unusual structure (LLC, dual-class, international subsidiary)
- Pre-IPO / late-stage where the valuation is consequential
- Audit-track companies where Big-4 needs comfort with the methodology

### 3. Big-4 accounting firms (Deloitte, PwC, EY, KPMG)

Pre-IPO and public-company-track only. Cost $25K-100K+ per valuation. Overkill for early-stage but mandatory for late-stage public-readiness work.

## 4. What Drives 409A Valuations

The 409A FMV reflects the common stock's value, not the company's headline valuation. Several factors shape it:

### Recent priced rounds (the biggest factor)

If you closed a Series A at $100M post-money 60 days ago, the 409A appraiser will use that as a primary input ("backsolve" approach). The common stock FMV is derived as a discount from the preferred price.

Typical discount:
- Pre-Series-A: common often valued at 20-40% of preferred-equivalent
- Series A: 25-35% discount
- Series B: 20-30%
- Series C: 15-25%
- Pre-IPO: 10-15%

The discount narrows as the company matures because liquidation preferences become less impactful relative to total exit value.

### Recent secondary transactions

If existing common shareholders (founders, early employees) have sold stock recently, that price is a strong signal. Tender offers run by your investors qualify.

### Comparable public companies

For mid-late-stage companies, the appraiser uses public comps — what's the trading multiple of [Snowflake / DataDog / Atlassian]? That's an input.

### Time to liquidity

Common stock value heavily depends on how soon investors can exit. A 5-year time-to-liquidity hurts common more than preferred (since preferred can convert for liquidity preferences in any exit). Longer time → larger common discount.

### Volatility

Higher expected volatility (your sector is hot or volatile) → larger common discount in OPM models.

### Stage of company

- Pre-revenue: deep discount on common
- Revenue but unprofitable: moderate
- Profitable, growing: smaller discount
- Pre-IPO: discount narrows as IPO timing clarifies

### Cash + runway

Strong runway + clean balance sheet → narrower common discount. Imminent need to fundraise → wider discount (more risk to common).

## 5. How 409A Valuations Affect Cap Table Strategy

### Lower 409A = Cheaper Options for Employees

A lower common FMV means a lower strike price. Employees pay less to exercise; have more upside. This is good for retention.

But: artificially low 409As get challenged. Don't optimize. Use a reputable provider who'll defend a methodology.

### Higher 409A = Less Refresh Pool Needed

The trade-off: a higher 409A means each option grant is "more valuable" on paper, but the strike is higher. Often this nets out.

### Valuation vs. Strike: A Common Mistake

The headline post-money valuation (e.g., $100M) is NOT the 409A common-stock value. Many founders confuse the two. The 409A is for common stock only and is significantly lower than the preferred-derived "post-money."

When pitching options to candidates: explain.
- "The company valuation in the recent round was $100M post-money" — true for fundraising purposes.
- "Your strike price is $1.50" — that's based on the 409A, not the headline number.
- "The current 409A FMV is $1.50/share; current preferred price is $5/share" — both pieces of context matter for the candidate to understand option upside.

### When You Should Ignore the 409A Number for Decision-Making

The 409A is a tax compliance instrument. It's NOT:
- The "real" market value
- A signal about company performance
- A prediction of exit value

For decisions like "should we sell?", "are we overvalued?", "how am I doing?" — ignore the 409A. Use the priced round, comparable companies, or your real strategic perspective.

## 6. Refresh Triggers

Refresh schedule:

### Always refresh after:

- **Priced funding round closed** (the new pricing is public; old 409A is stale)
- **Material customer change** (largest customer churned, or huge logo signed)
- **Significant secondary transaction** (large founder/employee sale)
- **Material business event** (acquisition target, regulatory action, leadership change)
- **At least every 12 months** (regardless of activity — the IRS staleness rule)

### Optional refreshes:

- Mid-cycle if you're about to make a large senior grant
- Just before fiscal year-end for clean financial reporting
- Before audit if your auditor questions option pricing

### Process

1. Notify your provider (Carta, Pulley, etc.) of the refresh request
2. Provide updated financials, cap table, customer/contract data
3. Provider runs the valuation (typically 2-4 weeks)
4. Draft report → board reviews → sign off
5. Final report → board approves the new FMV → sets strike for go-forward grants
6. Grants made between old and new 409A retain their original strike
7. New grants going forward use the new FMV

## 7. Down Round Refresh

After a down round (raising at lower valuation than prior round), 409A naturally drops too. New common FMV reflects the lower preferred price.

Implications:

- **New options going forward**: priced at the new (lower) FMV — meaningful upside for new hires
- **Existing options**: still have their old (higher) strike price — possibly underwater (strike > current FMV)

For existing-option holders, two responses:
1. **Do nothing**: existing strikes stay; some are underwater; people may quit
2. **Repricing program**: formally exchange existing options for new ones at the new strike. Requires:
   - Board approval
   - Often shareholder approval
   - Tax considerations (repricing can trigger income recognition under some rules)
   - Communication to employees
   - Sometimes a tender offer process

Repricing is common after major down rounds; rare for routine valuation drops.

## 8. Common Failure Modes

**Issuing options without a current 409A.** No defensible strike. IRS challenge risk on every grant.

**Stale 409A used for new grants.** Issued options 14 months after the last 409A; legally treated as without valuation. Refresh on the 12-month boundary.

**No refresh after material events.** Closed Series B at 5x prior valuation; still using pre-Series-B 409A for new hires for 6 months. Strike-price exposure on all those grants.

**Confusing 409A with post-money.** Telling new hires "the company is worth $100M" when their strike is set to $1.50 (based on a $20M common-stock 409A). Misleading; explanation expected.

**Going artificially low on 409A.** Pressuring the appraiser for a lower number. Usually backfires — qualified appraisers won't go below defensible methodology, and unqualified ones lose Safe Harbor protection.

**Switching providers mid-cycle without proper handoff.** Old provider's data + methodology don't transfer cleanly. Plan the switch around a refresh cycle.

**No board minutes recording 409A approval.** The IRS expects a paper trail. Board approves the valuation; minutes record it.

**Forgetting state taxes.** Some states (California, especially) have their own 409A-equivalent rules. Federal compliance ≠ state compliance.

**Granting before 409A approved by board.** "We promised her options at sign date Tuesday, but the 409A board approval is Friday." Legally messy. Either hold the grant date, or use a previously-approved 409A.

**Backdating grants.** "Pretending" the grant was issued earlier (when 409A was lower) is fraud. Real penalties.

**Using 409A for decisions it shouldn't drive.** "We can't afford to do X because our 409A is too low." 409A doesn't constrain operational decisions; it's a tax artifact.

**Ignoring 409A on M&A.** Acquirer's diligence will scrutinize option grants. Mispriced grants surface here; expensive at the wrong time.

**Over-frequent refreshes.** Refreshing every quarter when nothing material changed wastes money. Stick to 12-month cadence + material events.

**Founders setting their own strike.** Founders can't price their own option grants below the 409A; the same rules apply.

**No process for incoming hires between cycles.** Hire joins; you don't have a current 409A; you can't price their options. Have a buffer / queue process.

**Not understanding how SAFEs/notes affect 409A.** Outstanding SAFEs not yet converted — appraiser assumes they convert at next round; this affects the model.

**Audit issues with retroactive 409A documentation.** "We had verbal approval but no signed report" — auditor flags it. Get the paperwork.

**Not preserving old 409A reports.** Years later, you need to reference 5-year-old grants. Keep all reports indefinitely.

**409A misalignment with cap table software.** Carta-issued 409A but you maintain the cap table in a spreadsheet — option-pricing inconsistencies arise. Use one system of record.

**Skipping valuation for "at-cost" issuances to founders.** Even founders' restricted stock at par-value-equivalent benefits from documented 409A support.

## What Done Looks Like (Recap)

You've shipped 409A discipline when:

- Current 409A in place before any new option grant
- Refresh at least every 12 months + after material events
- Reputable provider (Carta / Pulley / Aranca / Big-4 at scale)
- All option grants at strike ≥ current FMV
- Board approval documented; reports retained
- Awareness of common-vs-preferred discount when communicating with hires
- Process for between-refresh grants (queue or buffer)
- Down-round repricing program designed if/when needed
- Equity ops owned by a named function past Series A

## Mistakes to Avoid

- Issuing options without a current 409A
- Stale 409A used for new grants past 12 months
- No refresh after material events (priced rounds especially)
- Confusing 409A with post-money valuation
- Pressuring for artificially low 409A — risks Safe Harbor
- Granting before board approval of valuation
- Backdating grants — real legal exposure
- Skipping state-specific compliance (California especially)
- Over-frequent refreshes wasting money
- Hires between cycles without buffer process
- Forgetting SAFE / note effect on the model
- Records not preserved for the long term
- Cap-table-software misalignment with valuation
- Treating 409A as a strategic decision input

## See Also

- [Fundraising Playbook](./fundraising-playbook.md) — context where most 409A refreshes happen
- [Down Round & Bridge Round Navigation](./down-round-bridge-round-navigation.md) — when 409A repricing matters most
- [Pre-Launch Revenue](./pre-launch-revenue.md)
- [Burn Rate & Runway Management](./burn-rate-runway-management.md)
- [Founder-CEO Transition](./founder-ceo-transition.md)
- [M&A Strategy / Acquihire](./ma-strategy-acquihire.md)
- [Acquisition Exit Strategy](./acquisition-exit-strategy.md)
- [Investor Monthly Updates](./investor-monthly-updates.md)
- [Board Meeting Cadence & Materials](./board-meeting-cadence-materials.md) — where 409A approvals happen
- [Demo Day & Investor Pitch](./demo-day-investor-pitch.md)
- [Year in Review / Annual Letter](./year-in-review-annual-letter.md)
- [Startup Insurance & D&O Coverage](./startup-insurance-do-coverage.md) — D&O matters during equity events
- [Crisis Communication Playbook](./crisis-communication-playbook.md)
- [Founder Mental Health & Sustainable Pace](./founder-mental-health-sustainable-pace.md)
- [Founder Productivity / Calendar Discipline](./founder-productivity-calendar-discipline.md)
- [Compensation Philosophy & Pay Bands](../4-convert/compensation-philosophy-pay-bands.md) — option grants are part of the package
- [Founder Hiring Playbook](../4-convert/founder-hiring-playbook.md) — how options factor into hiring conversations
- [Sales Compensation Plans](../4-convert/sales-compensation-plans.md) — sales comp + equity together
- [Interview Loop Design](../4-convert/interview-loop-design.md)
- [First Sales Hire](../4-convert/first-sales-hire.md)
- [First Marketing Hire](../4-convert/first-marketing-hire.md)
- [First Product Manager Hire](../4-convert/first-product-manager-hire.md)
- [First Customer Success Hire](../4-convert/first-customer-success-hire.md)
- [VP Engineering Hire / Transition](../4-convert/vp-engineering-hire-transition.md)
- [Solutions Engineering Hire](../4-convert/solutions-engineering-hire.md)
- [Quarterly Planning & Operating Cadence](../1-position/quarterly-planning-operating-cadence.md)
- [Annual Planning & OKRs](../1-position/annual-planning-okrs.md)
- [Cap Table & Equity Management Tools (VibeReference)](https://viberef.dev/auth-and-payments/cap-table-equity-management-tools.md)
- [HR & Payroll Tools (VibeReference)](https://viberef.dev/auth-and-payments/hr-payroll-tools.md)
- [Performance Management Tools (VibeReference)](https://viberef.dev/auth-and-payments/performance-management-tools.md)
- [Subscription Analytics Platforms (VibeReference)](https://viberef.dev/auth-and-payments/subscription-analytics-platforms.md)
- [Startup Banking & Corporate Spend Platforms (VibeReference)](https://viberef.dev/auth-and-payments/startup-banking-corporate-spend-platforms.md)
