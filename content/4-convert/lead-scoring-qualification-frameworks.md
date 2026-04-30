# Lead Scoring & Qualification Frameworks

[⬅️ Back to Day 4: Convert](./)

Lead scoring is how you turn "we have a lot of names in the funnel" into "we know which 50 to call this week." Done well, it concentrates rep effort on the prospects most likely to close, prevents marketing-sales fights about lead quality, and makes pipeline forecastable. Done poorly — which is the default — it generates score reports nobody trusts, fights between marketing and sales over MQL definitions, and reps ignoring the system to rebuild it in spreadsheets.

The core insight: scoring is two layers, **fit** (does this look like a customer?) and **intent** (are they showing buying signals?). Both matter; both work differently; both decay differently. Most companies under-invest in fit, over-invest in intent, and end up with high-scoring leads who will never pay because they were the wrong company to begin with.

This playbook covers the qualification frameworks (BANT, MEDDIC, MEDDPICC, GPCT, CHAMP), how to build a scoring model that combines fit + intent, MQL/SQL/PQL definitions and handoff, common implementation pitfalls, and what done looks like at $1M / $10M / $50M ARR.

## What Done Looks Like

- Marketing and sales agree, in writing, on what makes someone an MQL, an SQL, and a PQL
- A documented lead scoring model with explicit point allocation for fit and intent
- Score thresholds tied to specific actions: when to nurture, when to pass to SDR, when to assign to AE, when to disqualify
- Clear lead routing rules — which territory, which segment, which rep — so leads don't sit in unassigned queues
- A qualification framework (BANT / MEDDIC / MEDDPICC) that reps actually use during discovery, with a path from "qualified opportunity" to "won deal"
- Ongoing review: monthly look at scoring model performance (lead-to-MQL conversion, MQL-to-SQL, SQL-to-Win) by score bucket
- A specific person owns it (rev ops, marketing ops, or a sales ops lead — not a part-time founder concern past $1M ARR)

## 1. The Vocabulary: MQL, SQL, PQL, and Why They Cause Fights

Before scoring, agree on terms.

**MQL — Marketing Qualified Lead.** Marketing has decided this person is worth a sales conversation. Defined by some combination of fit (right company size, right industry, right title) + intent (downloaded a pricing comparison, requested a demo, attended a webinar). Threshold is set by marketing.

**SQL — Sales Qualified Lead.** A rep has talked to the lead and confirmed they're a real opportunity worth pursuing — there's a pain, a budget conversation, a path to a deal. SQL means a rep accepted the lead and is working it.

**PQL — Product Qualified Lead.** The user has demonstrated value in the product itself — signed up for a free trial, hit some usage threshold, invited teammates. Different from MQL: their action *was* using the product, not consuming marketing content.

The fight: marketing measures their job by MQLs delivered; sales measures their job by SQLs accepted and revenue closed. If MQL definition is too loose, marketing claims success while sales drowns in junk. If MQL is too strict, marketing under-delivers and the sales team complains about pipeline gaps.

Resolution:

1. **Joint MQL/SQL definition meeting** — marketing leader, sales leader, rev ops. Document the exact criteria. Sign it.
2. **Acceptance/rejection feedback loop** — when a rep rejects an MQL, they categorize *why* (wrong company size, no budget, wrong title, etc.). Marketing adjusts.
3. **Quarterly review** — actual MQL-to-SQL acceptance rate, MQL-to-Win rate. If acceptance is below 70%, the criteria are wrong and need re-tuning.

## 2. Qualification Frameworks: BANT, MEDDIC, MEDDPICC, GPCT, CHAMP

These are the questions reps ask during discovery to decide if a lead is real. They're not scoring models — they're conversation frameworks. Pick one. Train on it.

### BANT (Budget, Authority, Need, Timeline)

The classic IBM-era framework. Simple, taught widely, still in use.

- **Budget**: Do they have money allocated?
- **Authority**: Are we talking to the decision-maker (or the path to them)?
- **Need**: Do they have the problem we solve?
- **Timeline**: When are they buying?

Pros: simple, easy to teach, works for transactional sales.

Cons: budget-first conversations don't fit modern SaaS where users often pilot and *then* find budget. "Authority" is too narrow for committee-driven enterprise sales. Fails for inbound-led GTM.

Use BANT when: simple SaaS, mid-market, transactional sales cycle (under 60 days), and budget conversations happen early.

### MEDDIC (Metrics, Economic buyer, Decision criteria, Decision process, Identify pain, Champion)

The enterprise default. Developed at PTC; popularized by Andy Whyte and the MEDDIC Academy.

- **Metrics**: What measurable result will the customer get? ($X saved, Y% time reduction, Z hours/week)
- **Economic buyer**: Who actually has signing authority for this deal?
- **Decision criteria**: How will they evaluate vendors? What's the comparison rubric?
- **Decision process**: What are the formal steps — POC, security review, legal, procurement, board?
- **Identify pain**: What specific pain are they solving? How urgent? What happens if they don't?
- **Champion**: Who internally is selling for us when we're not in the room?

Pros: enterprise-grade. Forces structured thinking. Works for 6-12 month deals.

Cons: heavy for SMB/mid-market. Not all questions are relevant for $5K/yr deals. Can become a checklist exercise rather than a deep discovery practice.

Use MEDDIC when: $50K+ ACV, multi-stakeholder buying committees, formal procurement process, sales cycle 3+ months.

### MEDDPICC (MEDDIC + Paper process + Competition)

The 2020s upgrade to MEDDIC. Adds two letters that matter:

- **Paper process**: Specifically the legal/contract/redline pipeline. How long does it take from verbal yes to signed paper? Who's involved? (This kills more deals than people realize.)
- **Competition**: Who else are they evaluating? What's our position vs theirs? Why might they pick the competitor?

Use MEDDPICC when: enterprise deals where contract negotiation is non-trivial (security questionnaires, legal redlines, MSAs); competitive evaluations are common.

### GPCT (Goals, Plans, Challenges, Timeline)

HubSpot's framework, designed for inbound sales.

- **Goals**: What are they trying to achieve? (Forces customer-language goals, not vendor-language solutions.)
- **Plans**: What's their current plan to achieve those goals?
- **Challenges**: What's blocking them?
- **Timeline**: When do they need this fixed?

Pros: customer-centric framing; reps don't sound like 1990s closers. Maps to consultative selling.

Cons: less rigorous on decision-making process; weaker for enterprise.

Use GPCT when: inbound-heavy GTM, mid-market, value-based selling.

### CHAMP (Challenges, Authority, Money, Prioritization)

A reorder of BANT that puts the customer's pain first.

- **Challenges**: What's the problem?
- **Authority**: Who's involved in the decision?
- **Money**: Budget conversation comes after pain is established
- **Prioritization**: How urgent is this vs. other priorities?

Use CHAMP when: you want BANT-style coverage but the customer-pain-first ordering matters for your buyer.

### Pick One and Train On It

The framework is less important than training and consistency. Pick one. Build call scorecards, CRM stage exit criteria, and forecast review questions around it. Sales coaches review calls against it.

The single biggest mistake: documenting "we use MEDDIC" but reps actually wing it. The framework only works when discovery calls and forecast reviews use the same questions.

## 3. Lead Scoring Model: Fit + Intent

Lead scoring is a separate problem from qualification framework. The framework is for human-driven discovery; the score is automated triage.

A working lead scoring model has two axes:

### Fit Score (firmographic + demographic)

Does this look like a customer? Score on attributes you know from form fills, enrichment, or manual research.

| Attribute | Examples | Why |
|---|---|---|
| Company size | 50-500 employees: +30; <50 or >500: 0 | If your ICP is mid-market, big or small companies are misfits |
| Industry | SaaS / fintech / healthcare: +20 | Vertical fit matters — your case studies don't translate to manufacturing |
| Geography | US/Canada: +10; EU: +5; other: 0 | If you're not staffed for international, weight by where you sell |
| Job title | VP / Director / Head of: +20; IC: +5; intern: 0 | Decision-maker proxy |
| Tech stack | Uses Stripe / Vercel / Snowflake (relevant integrations): +15 | Signals readiness |
| Funding stage (B2B SaaS) | Series A-C: +15; Seed: +5; bootstrapped: +10 | Indicates buying capacity |

Total possible fit score: 100. Threshold for "good fit": typically 60+. Below 30: probably never going to buy from you.

### Intent Score (behavior + engagement)

How interested are they? Score on observed behavior. Important: **intent decays**. A pricing page view from 6 months ago is not the same as one from yesterday.

| Action | Score | Decay |
|---|---|---|
| Visited pricing page | +10 | -2/week |
| Visited /demo or /contact | +20 | -3/week |
| Downloaded competitor-comparison whitepaper | +15 | -2/week |
| Attended webinar | +15 | -3/week |
| Replied to outbound email | +25 | -5/week |
| Booked a demo | +50 | none |
| Inactive 60+ days | -20 | n/a |
| Unsubscribed from email | -50 | none |
| Clicked email link (any) | +5 | -1/week |
| Signed up for free trial | +30 | n/a |
| Hit usage milestone in product (PQL) | +40 | n/a |

Total possible intent score: typically capped at 100. Threshold for "showing buying signal": 40-60.

### Combined Score

There are two common approaches:

**Sum (simple):** total = fit + intent. Easy to implement. Works for early-stage GTM.

**Matrix (recommended):** plot fit on one axis, intent on the other. Different actions for different quadrants:

|  | Low Intent | High Intent |
|---|---|---|
| **High Fit** | Nurture (right buyer, not ready) | **MQL — pass to SDR** |
| **Low Fit** | Disqualify | Nurture lightly (wrong buyer, but engaged — qualify if title changes) |

This avoids the failure mode of "score 80 high-intent free Gmail user from a 5-person agency in Romania" being treated the same as "score 80 enterprise IT VP at a Series C SaaS." Both have the same combined score; the second is real, the first isn't.

### Build the Model

```
score = (fit_score × fit_weight) + (intent_score × intent_weight)
```

Don't try to ML this on day one. Hand-tune scores for 3-6 months, watch performance by bucket, then revisit. Most companies that "ML their lead scoring" are over-engineered for the volume of data they have.

## 4. MQL/SQL/PQL Thresholds and Routing

After scoring, what happens?

### Threshold Bands

| Score Band | Status | Action |
|---|---|---|
| Fit < 30 | Disqualified | Auto-disposition; remove from active list |
| Fit ≥ 30, intent < 40 | Lead | Nurture campaign; no SDR contact |
| Fit ≥ 60, intent ≥ 40 | MQL | Route to SDR within 1 hour for outbound |
| (any path) booked demo | SAL/SQL | Route to AE; SDR books discovery call |
| Free trial + PQL milestone | PQL | Auto-route to AE if fit ≥ 60; in-product nudge if not |

### Routing Rules

Who gets the lead?

- **Territory routing**: by geography, segment (SMB/MM/ENT), industry vertical, or named account list
- **Round-robin within tier**: equal distribution among reps with capacity
- **Capacity caps**: no rep gets more leads than they can work (typically 50-150 active opps depending on segment)
- **Named accounts**: pre-assigned to specific reps regardless of who fills out the form

Tools that route automatically: HubSpot, Salesforce + LeanData / Chili Piper, Outreach, Default. For early stage: a Slack alert + a shared queue + a manual triage works fine.

### SLA: How Fast Must Sales Respond?

The data is unambiguous: response time matters more than almost anything else.

- **Inbound demo request**: <5 minutes ideal; <15 minutes acceptable
- **MQL from content download**: <1 hour
- **PQL from product activation**: same-day human follow-up + automated in-product nurture

InsideSales / others have shown 100x decreases in qualification rate for response times >30 minutes vs <5 minutes. Don't overthink it: route fast.

## 5. The Handoff: Marketing → SDR → AE

The handoff is where most lead-quality fights happen. Make it explicit.

### Marketing → SDR Handoff

When marketing passes an MQL to an SDR:

- Lead status changes to "MQL" in CRM
- SDR has [N hours/days] to attempt contact
- Required: at least [3-5] touches across [phone, email, LinkedIn]
- Outcome categorization: Qualified (becomes SQL), Disqualified (with reason), Recycled (back to nurture with reason)
- SLA for completion: typically 14 days

### SDR → AE Handoff

When SDR qualifies a lead into an SQL:

- Discovery call scheduled with AE
- SDR fills out a structured handoff form: pain identified, MEDDIC fields completed (or whichever framework), key context
- AE gets calendar invite + handoff doc 24 hours pre-meeting
- AE accepts or rejects within 48 hours of the discovery call (post-call, with reason if rejected)

### Acceptance Rate Health

Track:
- MQL acceptance rate (SDR accepts MQL): target 80%+
- SQL acceptance rate (AE accepts SQL): target 85%+
- MQL-to-Win rate: monitor by score bucket, by source, by industry
- Time-from-MQL-to-SQL: a leading indicator of pipeline velocity

If MQL acceptance is below 70%, marketing's MQL definition is wrong. If SQL acceptance is below 80%, SDR qualification is wrong. Fix the upstream criteria — don't chase the symptom.

## 6. PQL: When the Product Is the First Salesperson

For PLG SaaS, the lead lifecycle starts with self-serve usage, not form fills.

PQL signal candidates:

- Hit feature X (the "aha moment" feature) Y times in first week
- Invited Z+ teammates to the workspace
- Reached usage limit on free tier (the "you've outgrown this" moment)
- Created their first piece of content / first project / first integration
- Returned for [N] consecutive days

Building a PQL model:

1. Identify the 2-3 actions that strongly correlate with paid conversion (look at past converters; find what they did in week 1)
2. Set a threshold (e.g. "users who do A + B + C in the first 14 days convert at 40% vs 5% baseline")
3. Trigger sales motion when threshold is crossed: in-app nudge, email, AE outreach, or all three depending on ACV
4. For high-ACV accounts (say, ICP fit + larger company size detected via email domain), route to AE; for low-ACV, automated upgrade prompts

The key PQL trap: assuming the product activation IS the buying signal. It's a *signal*, not the deal. PQL still needs human qualification — many product-active users are individual contributors at companies that won't buy. PQL + ICP fit + decision-maker title is the actual SQL-equivalent.

## 7. Common Pitfalls

**Scoring everyone**. Including unsubscribed leads, bounced emails, and people who explicitly told you they're never buying. Filter your TAM first.

**Scoring on attributes you can't trust**. Self-reported "company size: 1000-5000" on a form fill from a Gmail address is noise. Use enrichment (Clearbit / 6sense / Apollo) before scoring on firmographics.

**Decay rules nobody set**. Intent score from 6 months ago shouldn't equal intent today. Without decay, your "high intent" bucket fills with stale data and SDRs waste time on cold leads.

**Weighting intent too high**. Someone visiting your pricing page repeatedly is interesting; if they're at a 5-person agency in a country you don't sell to, it's noise. Fit must be a hard filter, not just one factor.

**Scoring is set-and-forget**. The model needs quarterly review against actual conversion data. Some signals decay in value (industry: "AI startup" was high-signal in 2023, lower-signal as the market saturated).

**No closed-loop feedback**. If reps disqualify an MQL, why? If marketing doesn't see the reason codes, the model never improves. CRM must capture "MQL rejected because [reason]" and marketing must read it weekly.

**Overengineering ML scoring early**. If you have 200 MQLs / month, you don't have enough data to train a model. Hand-tune until you have 1000+ MQLs / month and 12+ months of conversion data.

**Mixing fit and intent in one number**. As covered in §3, the matrix approach (separate axes, action by quadrant) outperforms a single combined score for routing decisions.

**"BANT failed for our enterprise deal" — switching framework mid-deal**. Pick a framework; train; stick with it. Switching frameworks per deal is how reps end up running ad-hoc discovery and forecasts become unreliable.

**Forgetting the qualification handoff doc**. SDR-to-AE handoffs without a written summary mean the AE re-asks questions, the buyer feels like nobody talks to each other, and the deal stalls. Standardize the handoff template.

**No SLA enforcement**. "We respond within 5 minutes" except on weekends, evenings, holidays — fine, document it. But silently letting weekend leads sit until Tuesday means competitors win. Either staff for it or set explicit weekend behavior in your nurture flow.

**Treating PQL like a free upgrade button**. PQL users still need qualification (decision-maker, fit, budget). Auto-converting product-engaged free users to "ready to buy" leads burns SDR time on individual contributors who can't sign anything.

**No common language between marketing and sales**. Marketing dashboards say "MQL" while sales dashboards say "Lead" while the CRM stage is "Open" — three names for the same thing. Standardize on one taxonomy. Document. Audit quarterly.

**Scoring without segmenting**. Same scoring model for SMB self-serve, mid-market sales-led, and enterprise — except those are three different motions with three different correct thresholds. Build separate scoring models per segment past $5M ARR.

**Treating disqualified leads as gone forever**. A "disqualified — too small" lead at a 30-person company today might be a perfect ICP fit when they hit 200 employees in 18 months. Recycle to long-cycle nurture; check fit attributes quarterly.

**No champion development plan**. MEDDIC has Champion as one of six letters. In practice it's the most predictive of close. If your discovery doesn't ask "who internally will sell for us when we're not in the room?" you're not running MEDDIC.

**Scoring as a marketing-only project**. Sales must own the qualification framework; marketing must own the scoring model; rev ops must own the integration. If any of the three opt out, the system breaks at the seam.

## What Done Looks Like (Recap)

You've shipped lead scoring & qualification when:

- Marketing and sales have signed off on MQL/SQL/PQL definitions in writing
- A documented scoring model with fit + intent layers, point allocations, decay rules, and routing thresholds
- One qualification framework adopted (BANT / MEDDIC / MEDDPICC / GPCT / CHAMP) — trained, used in calls, used in forecast reviews
- Lead routing rules that get an MQL to a rep within SLA (5 min for demo requests; <1 hour for content MQLs)
- Closed-loop feedback: reps capture rejection reasons; marketing reviews monthly
- Acceptance rates above the bar (MQL > 70%, SQL > 80%); MQL-to-Win tracked by source and bucket
- A named owner — rev ops, marketing ops, or sales ops — past $1M ARR

## Mistakes to Avoid

- Setting MQL definitions in isolation (marketing without sales) — they'll be wrong and rejected
- Picking BANT for an enterprise deal or MEDDIC for a $5K/yr SMB sale — frameworks have ranges
- Sum scoring without a fit floor — high-intent + zero-fit leads burn SDR time
- No decay rules — stale intent scores corrupt the routing
- Quarterly review skipped — scoring drift compounds
- ML modeling before you have enough conversion data — overfitting on noise
- Mixing PQL with SQL without qualification — product engagement isn't the same as buying intent
- No handoff doc between SDR and AE — discovery context lost; deals stall
- Forgetting recycled-lead nurture — past disqualifications can become future ICP fits
- Treating lead scoring as marketing's job alone — sales must co-own definitions and feedback loop

## See Also

- [Product Qualified Leads (PQL)](./product-qualified-leads-pql.md) — the product-driven sibling of MQL
- [Sales Discovery Call Playbook](./sales-discovery-call-playbook.md) — running discovery against a framework
- [Sales Playbook](./sales-playbook.md) — how qualification fits into the sales process
- [Sales Enablement Battle Cards](./sales-enablement-battle-cards.md) — competitive context for MEDDIC's "Competition" letter
- [Sales Forecasting & Pipeline Management](./sales-forecasting-pipeline-management.md) — using qualification stages for forecast accuracy
- [Sales Operations Playbook](./sales-operations-playbook.md) — owning the scoring + routing tooling
- [Marketing Operations Playbook](./marketing-operations-playbook.md) — the marketing side of the same workflow
- [Demand Generation Playbook](../3-distribute/demand-generation-playbook.md) — what feeds the top of the scoring funnel
- [Inbound Marketing Playbook](../3-distribute/inbound-marketing-playbook.md) — how inbound MQLs get generated
- [Outbound Sales Playbook](../3-distribute/outbound-sales-playbook.md) — how outbound feeds and consumes scoring
- [Customer Onboarding Playbook](./customer-onboarding-playbook.md) — what happens after qualified leads close
- [Activation Metric Definition](./activation-metric-definition.md) — defining the PQL "aha moment"
- [Demo Request Flow](./demo-request-flow.md) — the highest-intent inbound surface
- [Self-Serve vs Sales-Led](./self-serve-vs-sales-led.md) — which scoring model fits your motion
- [B2B Procurement Navigation](./b2b-procurement-navigation.md) — what MEDDIC's "Decision Process" actually looks like
- [Sales-to-CS Handoff](./sales-to-cs-handoff.md) — the next handoff in the chain
- [Sales Onboarding & Ramp](./sales-onboarding-ramp.md) — training reps on the framework you picked
- [Quarterly Business Reviews](./quarterly-business-reviews.md) — reviewing scoring model performance
- [Voice of Customer Program](./voice-of-customer-program.md) — pulling rejection reasons into the model
- [Win-Loss Analysis](./win-loss-analysis.md) — testing whether scoring predicts wins
- [Annual Sales Kickoff](./annual-sales-kickoff.md) — re-training on the framework annually
- [Quarterly Planning & Operating Cadence](../1-position/quarterly-planning-operating-cadence.md) — where lead scoring fits the operating system
