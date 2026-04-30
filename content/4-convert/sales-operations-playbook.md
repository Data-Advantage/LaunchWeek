# Sales Operations Playbook (Sales Ops / RevOps)

[⬅️ Back to Day 4: Convert](../4-convert/)

If you're a B2B SaaS at $5M+ ARR with a real sales team (5+ reps), you'll feel the pull toward Sales Operations (Sales Ops / RevOps) — the function that owns CRM hygiene, forecasting tools, comp plans, territory design, deal-desk, sales analytics. The naive approach: founder + first sales rep handle everything; Salesforce becomes a mess. The structured approach: hire dedicated Sales Ops; design CRM data model; instrument funnel; build comp plans; run quarterly review cadence; integrate with marketing + CS for unified RevOps. Sales Ops is the lever that turns 5 reps into 15 productively. Without it, scale exposes every ad-hoc decision.

## What Done Looks Like

A working Sales Ops function:
- [ ] Dedicated Sales Ops (or shared with marketing) at right stage
- [ ] CRM single source of truth (Salesforce / HubSpot / Pipedrive)
- [ ] Sales process documented + enforced
- [ ] Funnel instrumented (stages, conversion, velocity)
- [ ] Forecasting cadence + accuracy
- [ ] Compensation plans designed + administered
- [ ] Territory + account assignment
- [ ] Sales tooling stack rationalized
- [ ] Quarterly review cadence with leadership
- [ ] Marketing-Sales SLA + alignment

## 1. Decide if you need Sales Ops

Stage matters; not everyone needs dedicated Sales Ops yet.

```text
Decide Sales Ops readiness.

Right time signals:
- 5+ sales reps
- $5M+ ARR
- Multiple GTM motions (inbound + outbound)
- Forecast issues (off by >20% regularly)
- CRM hygiene concerns
- Comp plan getting complex (variable / accelerators)

Wrong time signals:
- <3 reps (founder can manage)
- <$3M ARR (process overhead exceeds value)
- Single-product, single-segment
- One closing motion

Alternatives at small scale:

Founder doing it:
- Manages CRM, forecast, comp
- Limit: 3-5 reps

Hire RevOps Generalist:
- 1 person owns sales + marketing + CS ops
- Used at 10-50 employees

Outsource fractional:
- Specialist 10-20 hrs / week
- Cost: $5-15K / month
- Used as bridge

Hire dedicated:
- Sales Ops Manager full-time
- Stage: 5+ reps; $5M+ ARR

Senior team:
- VP / Director of Sales Ops + analyst(s)
- Stage: 20+ reps; $20M+ ARR

For [COMPANY], output:
1. Recommendation (DIY / fractional / hire)
2. Stage fit
3. Cost
4. Timing
5. First-year priorities
```

The "Sales Ops at <5 reps" mistake: hiring full-time generates more process than value. Founder + Salesforce admin is fine.

## 2. CRM single source of truth

Sales Ops's first job: clean CRM.

```text
Establish CRM discipline.

Choose CRM:

Salesforce:
- Most-used at scale
- Most-customizable
- Most-expensive
- Steep learning curve
- See vibereference

HubSpot:
- Mid-market default
- Easier than SF
- All-in-one (marketing + sales + CS)
- Limit at large enterprise

Pipedrive:
- SMB friendly
- Pipeline-focused
- Less powerful

Attio / Folk / others:
- Modern alternatives
- Smaller scale

Selection by stage:

<$5M ARR: HubSpot or Pipedrive
$5-50M ARR: HubSpot or Salesforce
$50M+ ARR: Salesforce typical

Data model:

Required objects:
- Account (company)
- Contact (person)
- Lead (pre-qualified person)
- Opportunity (deal)
- Activity (calls, emails, meetings)

Custom objects (as needed):
- Product
- Asset
- Renewal
- Implementation project

Required fields:

Lead:
- Source (UTM)
- Score
- Status (new / qualified / disqualified)
- Owner

Account:
- ICP fit (yes / no / partial)
- Tier (1 / 2 / 3)
- Industry, size

Opportunity:
- Stage (with exit criteria; see sales-forecasting)
- Amount, close date
- Source
- MEDDIC fields
- Owner
- Loss reason (if lost)

Hygiene rules:

Stale opps:
- No activity 30+ days → flag for review
- 60+ days → close-lost or push out

Required at stage:
- Stage 2+ requires: discovery notes, pain points
- Stage 3+ requires: economic buyer identified
- Stage 4+ requires: pricing discussed

Validation rules:
- Required fields enforced
- Date logic (close date in future)
- Stage progression rules

Reporting cadence:

Weekly:
- Pipeline + commit
- Activity (calls, meetings)

Monthly:
- Funnel conversion
- Stage velocity
- Win/loss

Quarterly:
- Forecast accuracy
- Cohort retention
- Plan vs actual

Output:
1. CRM choice
2. Data model
3. Required fields
4. Hygiene rules
5. Reporting cadence
```

The "CRM hygiene drives everything" rule: bad data → bad forecasts, bad comp, bad coaching. Sales Ops's #1 deliverable.

## 3. Sales process documentation

Process beats heroics.

```text
Document sales process.

Stages (see sales-forecasting-pipeline-management):
- Discovery
- Qualification
- Demo / Proof
- Proposal
- Negotiation / Contract
- Closed (won / lost)

Per stage:

Entry criteria:
- What needs to be true to enter

Exit criteria:
- What proves stage is complete

Required activities:
- Discovery call
- Demo
- POC if applicable
- Decision-maker engagement

Required artifacts:
- Discovery notes
- ROI analysis
- Proposal
- Contract redlines

Roles:

SDR / BDR:
- Outbound prospecting
- Inbound qualification
- Hand off to AE

AE (Account Executive):
- Owns deal closing
- Discovery → contract

Sales Engineer (SE):
- Technical support during sales
- Demo expert
- Solutions design

CSM:
- Post-close
- Onboarding + retention

Handoffs:

SDR → AE:
- Qualified meeting handoff
- Required: company, contact, pain
- See sales-discovery-call-playbook

AE → CSM:
- Deal closed; handoff
- See sales-to-cs-handoff

Cadences:

Outbound cadence:
- Email + call + LinkedIn over 14-21 days
- 8-12 touches typical

Stage progression:
- Time-bound expectations
- Discovery → Qualification: 1 week
- Qualification → Demo: 2 weeks
- Demo → Proposal: 2-4 weeks
- Proposal → Close: 2-4 weeks

Anti-patterns:

Heroic culture:
- Top reps "just know"
- Doesn't scale; new reps fail

Process by exception:
- Different for each rep
- Forecast unreliable

No documentation:
- Tribal knowledge
- New hires lost

Output:
1. Process doc
2. Per-stage criteria
3. Role definitions
4. Handoff specs
5. Cadence templates
```

The "process doc as onboarding" benefit: new rep reads doc + shadows = ramped faster. Without doc, ramp is months not weeks.

## 4. Funnel instrumentation

Measure every stage.

```text
Instrument sales funnel.

Metrics per stage:

Entry rate:
- Leads / opps entering each stage

Conversion rate:
- % progressing to next stage
- Track per-rep, per-source, per-segment

Velocity:
- Days in each stage
- Track median + p90

Drop-off:
- Where do deals die?
- Loss reasons captured

Aggregated metrics:

Win rate:
- Closed-won / total closed
- Per-segment / per-rep

ACV:
- Average deal size
- Trend

Sales cycle:
- Lead-to-close time
- Different by segment

ARR per rep:
- New ARR / rep / quarter
- Ramp curve

Activity metrics:

Calls / emails / meetings per rep:
- Per-week target
- Quality + quantity

Meeting set rate:
- % of outbound that books meeting

Show rate:
- % of meetings that happen

Conversion to opp:
- Meeting → opp creation

Per-rep dashboards:

Rep score card:
- Pipeline coverage
- Win rate
- Cycle time
- Activity level

Manager dashboards:
- Team rollup
- Outliers (high / low)
- Coaching focus

Exec dashboards:
- Top-of-funnel health
- Forecast vs plan
- Quarterly trends

Tools:

Built-in:
- Salesforce / HubSpot dashboards

Specialized:
- Gong (conversation intelligence)
- Chorus (similar)
- Outreach (engagement)

BI:
- Looker / Mode / Tableau
- Custom revenue dashboards

Anti-patterns:

Vanity metrics:
- "5000 calls!" without conversion
- Measures activity not outcome

Lagging only:
- Win rate tells you past
- Need leading: pipeline coverage, activity

Output:
1. Per-stage metrics
2. Per-rep + team dashboards
3. Tooling
4. Cadence
5. Coaching loop
```

The leading indicator: pipeline coverage 90 days out. Tells you next quarter's revenue. Lagging metrics like win rate explain past.

## 5. Compensation plan administration

Comp plans are Sales Ops's hardest job.

```text
Administer comp plans.

Components (see sales-compensation-plans):

Base + variable:
- Mix typical 50/50 to 60/40

Quota:
- Annual or quarterly
- Should be hitable (60-70% rate)

Accelerators:
- Above quota → higher rate
- Common: 2x for 100-150%; 3x for 150%+

SPIFs:
- Special incentives (new product, specific accounts)

Sales Ops job:

Plan design:
- Annual; aligned with company goals

Quota setting:
- Realistic; based on history + segment

Comp calculation:
- Monthly / quarterly payouts
- Reconcile with CRM data
- Catch errors

Disputes:
- Reps will dispute calculations
- Documented process

Tooling:

Spreadsheet (small):
- Excel / Sheets
- Up to ~10 reps
- Error-prone

Compensation software:
- Spiff, CaptivateIQ, QuotaPath, Performio
- Automates calculations
- Integrates with CRM

Cost: $30-100/rep/month.

Plan documentation:

Per-rep plan doc:
- Quota
- Variable structure
- Accelerators
- Dispute process

Signed by rep:
- Acknowledgment of plan
- Annual

Year-end true-up:
- Final calculations
- Bonus payments

Anti-patterns:

Plan changes mid-cycle:
- Demoralizing
- Document and announce in advance

No clawbacks for churn:
- Reps close bad-fit deals
- Add: comp clawback if customer churns in 90 days

Quotas too high:
- 30% hit rate = bad design
- Aim 60-70%

Output:
1. Plan documentation
2. Quota-setting framework
3. Comp software (when to add)
4. Dispute process
5. Annual review
```

The 60-70% quota-hit-rate target: too high (>80%) and reps not stretched; too low (<40%) and morale tanks. Calibrate.

## 6. Territory + account assignment

Who-gets-what matters.

```text
Design territories + accounts.

Methods:

Geographic:
- US-East, US-West, EU, APAC
- Simple; clear ownership

Industry / vertical:
- Healthcare reps; FinTech reps
- Specialization; vertical fit

Size / segment:
- SMB / Mid-market / Enterprise
- Different motion + skill

Account-based (named accounts):
- Top 100 accounts assigned by name
- Strategic ABM
- Used at enterprise scale

Round-robin / random:
- New leads distributed evenly
- Simple; low specialization

Hybrid:
- Geo + segment
- Most common

Reassignment:

Annual:
- Reset based on performance + growth
- Cleansing event

Mid-year:
- Only for major changes
- Disruptive; minimize

When rep leaves:
- Accounts redistributed
- Continuity for customers

Conflict resolution:

Two reps claim account:
- Rule of thumb: who engaged first
- Documented in CRM
- Manager arbitrates

Customer changes geography:
- Original rep often retains
- Or transfer with continuity

Tooling:

Salesforce territory management:
- Built-in module
- Powerful; complex

LeanData / Distribution Engine:
- Lead routing automation
- Per-rule assignment

Anti-patterns:

Hot vs cold territories:
- Some reps get easy; others hard
- Reset annually

Reassignment chaos:
- Frequent changes
- Customers confused

Sales Ops favoritism:
- Top rep gets best
- Resentment

Output:
1. Territory design method
2. Reassignment cadence
3. Conflict resolution
4. Tooling
5. Annual review
```

The "fair-but-stretching" territory: each rep can hit quota with effort but not without. Equal-opportunity territories build trust.

## 7. Sales tooling stack

Sales Ops manages the stack.

```text
Manage sales tooling stack.

Core stack:

CRM:
- Salesforce or HubSpot

Sales engagement:
- Outreach, Salesloft, Apollo
- Email + call sequences
- $50-150/user/mo

Conversation intelligence:
- Gong, Chorus
- Call recording + analysis
- $50-150/user/mo

Data / enrichment:
- ZoomInfo, Apollo, Cognism
- Contact data
- $20-100/user/mo

Forecasting:
- Clari, BoostUp, Aviso (enterprise)
- Or CRM-native

Quote-to-cash / CPQ:
- Salesforce CPQ, DealHub
- For complex pricing
- Enterprise

Contract management:
- DocuSign, Pandadoc, HelloSign
- E-signature

Compensation:
- Spiff, CaptivateIQ
- Comp calculation

Analytics / BI:
- Looker, Mode (cross-functional)

Total cost:
- Mid-market sales team (10 reps): $5-20K/month
- Enterprise (50 reps): $50-200K/month

Sales Ops's job:

Vendor evaluation:
- Pilot before commit
- Avoid bloat (10 tools when 5 sufficient)

Integration:
- Tools must talk to CRM
- Single source of truth

ROI tracking:
- Justify each tool
- Cut underperformers

Adoption:
- Train reps
- Track usage; if <50% adopted, kill or fix

Consolidation:

Periodic audit:
- Are we using everything?
- Negotiate consolidation

Bundle leverage:
- HubSpot Sales Hub vs separate Outreach + Gong
- Less powerful but cheaper + simpler

Anti-patterns:

Tool sprawl:
- 15 tools; reps confused
- Most underutilized

No integration:
- Data in silos
- Reporting impossible

Reps build their own stack:
- Inconsistent
- Sales Ops can't measure

Output:
1. Stack recommendations by stage
2. Vendor evaluation process
3. Integration requirements
4. Cost / ROI tracking
5. Annual audit
```

The "consolidate if you can" wisdom: 5 tools well-integrated > 12 tools partially-integrated. Sales Ops's leverage.

## 8. Marketing-Sales alignment

Sales Ops increasingly = RevOps (Marketing + Sales + CS aligned).

```text
Align Marketing-Sales.

Service-Level Agreements (SLAs):

Lead handoff:
- Marketing delivers MQLs
- Sales follows up within X hours
- Documented; tracked

Lead quality:
- Marketing: % MQLs that become SQLs
- Target: 30-50%

Pipeline contribution:
- Marketing-sourced vs sales-sourced
- Track per channel

Joint metrics:

Marketing-attributed pipeline:
- $X pipeline this quarter
- Conversion rate

Marketing-attributed revenue:
- $X closed-won
- 6-12 month attribution window

Cost per opportunity:
- Marketing spend / opps generated

Cost per closed-won:
- Marketing spend / new customers

Operating cadence:

Weekly:
- Marketing-Sales standup
- Lead flow + pipeline

Monthly:
- Funnel review
- Channel performance

Quarterly:
- Strategic review
- Plan adjustments

RevOps consolidation:

Combined function:
- VP RevOps owns Sales Ops + Marketing Ops + CS Ops
- Used at $20M+ ARR
- Strategic + operational

Tools:

Aligned CRM:
- Single CRM for marketing + sales

Marketing automation:
- HubSpot Marketing, Marketo, Pardot
- Integrate with CRM

Attribution:
- Bizible, Dreamdata
- Multi-touch

Anti-patterns:

Marketing throws leads over wall:
- No follow-up tracking
- Sales blames marketing; vice versa

Different definitions:
- "MQL" means different things
- Aligned definitions matter

No joint metrics:
- Each function reports separately
- No accountability

Output:
1. SLA framework
2. Joint metrics
3. Operating cadence
4. RevOps org option
5. Tooling alignment
```

The MQL definition discipline: marketing + sales agree what an MQL is. Without alignment, half of MQLs are unworked; sales blames marketing.

## 9. Quarterly business review

QBRs surface Sales Ops's value.

```text
Run Sales Ops QBR.

Audience:
- VP Sales + leadership
- Sometimes: CEO + CFO

Agenda (90 min):

Min 0-15: Headline numbers
- Revenue vs plan
- Pipeline health
- Forecast accuracy

Min 15-30: Funnel deep-dive
- Conversion rates
- Velocity
- Drop-off

Min 30-45: Per-rep performance
- Top performers
- At-risk reps
- Coaching focus

Min 45-60: Territory / segment
- What's working
- What's not
- Adjustments

Min 60-75: Tooling + process
- Wins
- Friction
- Investments needed

Min 75-90: Forward-looking
- Next quarter forecast
- Risks + mitigations
- Asks

Outputs:

Action items:
- Decisions made
- Owners + dates
- Follow-up

Insights:
- Trends spotted
- Hypotheses
- Test plans

Strategic asks:
- Headcount
- Tooling investment
- Process changes

Prep:

2 weeks before:
- Pull data
- Build slides

1 week before:
- Manager review
- Refine

Day-of:
- Present
- Discussion

Anti-patterns:

Numbers-only report:
- No insights
- Reads as data dump

No decisions:
- Discussion without action
- Wasted time

Sales Ops as scribe:
- Just present numbers
- Not strategic

Output:
1. QBR template
2. Cadence (quarterly minimum)
3. Audience + agenda
4. Decision-making
5. Follow-through
```

The "Sales Ops as strategic partner" elevation: best Sales Ops becomes part of strategic discussion, not just data report. Quarterly insight vs monthly numbers.

## 10. Hiring + scaling Sales Ops team

Build the team thoughtfully.

```text
Build Sales Ops team.

Stage progression:

Stage 1 ($1-5M ARR):
- Founder / VP Sales does Sales Ops
- Salesforce admin contractor (10-20 hrs / week)

Stage 2 ($5-15M ARR):
- Hire Sales Ops Manager
- $130-200K base + bonus
- Generalist; CRM + reporting + ad-hoc

Stage 3 ($15-50M ARR):
- Sales Ops Manager + Analyst
- Maybe: Salesforce admin in-house

Stage 4 ($50-200M ARR):
- Director / VP RevOps
- Sales Ops + Marketing Ops + CS Ops
- 5-15 person team

Stage 5 ($200M+ ARR):
- VP RevOps + senior leaders
- Specialized functions (deal desk, comp ops, planning ops)

Roles:

Sales Ops Manager:
- Generalist; do everything
- Stage 2

Sales Analyst:
- Reports + dashboards
- Stage 3

Salesforce Admin:
- CRM hygiene + customization
- Stage 3

Sales Process Lead:
- Process design + enablement
- Stage 4

Deal Desk:
- Pricing + contract approvals
- Stage 4

Comp Ops:
- Compensation administration
- Stage 4

Profile:

Sales Ops Manager:
- 5-8 years experience
- Sales background OR analytics + sales exposure
- Salesforce / HubSpot expert
- Stakeholder management

Hiring:

Pipeline:
- Network referrals
- Recruiters specializing in Ops
- 2-4 month search

Interview:
- CRM expertise (live exercise)
- Analytics (case study)
- Process design (mock scenario)
- Stakeholder mgmt (behavioral)

Comp:
- Stage 2: $130-200K base
- Stage 3-4: $200-350K
- Stage 5: $350K-500K + equity

Output:
1. Stage-appropriate hiring
2. Role definitions
3. Profile
4. Comp
5. Team progression
```

The Sales Ops Manager hire at $5-15M ARR: most-leveraged hire in sales org. ROI through process + tooling + accuracy compounds.

## What Done Looks Like

A working Sales Ops function:

- [ ] Stage-appropriate ownership (founder / dedicated / team)
- [ ] CRM clean and reliable
- [ ] Sales process documented
- [ ] Funnel instrumented; reports automated
- [ ] Forecast accuracy ±10%
- [ ] Compensation plans administered
- [ ] Territories assigned + reviewed
- [ ] Sales tooling stack rationalized
- [ ] Marketing-Sales SLA + joint metrics
- [ ] Quarterly business review with insights
- [ ] Strategic partner to VP Sales

The mistakes to avoid:

1. **Hire Sales Ops at <5 reps.** Process overhead exceeds value.
2. **Tool sprawl.** 15 tools; reps confused.
3. **No CRM hygiene.** Bad data → bad everything.
4. **Vague sales process.** Heroic culture; doesn't scale.
5. **Comp plan changes mid-cycle.** Demoralizing.
6. **No forecasting accuracy tracking.** Don't improve.
7. **Sales Ops as scribe.** Underuses strategic value.
8. **No marketing alignment.** Pipeline gaps blame.
9. **Quarterly review with no decisions.** Performance art.
10. **Underpay Sales Ops Manager.** They have alternatives.

## See Also

- [Sales Forecasting & Pipeline Management](./sales-forecasting-pipeline-management.md) — forecasting (companion)
- [Sales Compensation Plans](./sales-compensation-plans.md) — comp design
- [Sales Playbook](./sales-playbook.md) — sales motion
- [Sales Discovery Call Playbook](./sales-discovery-call-playbook.md) — discovery
- [Sales Demo Calls](./sales-demo-calls.md) — demos
- [Sales Onboarding Ramp](./sales-onboarding-ramp.md) — ramp
- [Sales Enablement & Battle Cards](./sales-enablement-battle-cards.md) — enablement
- [Sales-to-CS Handoff](./sales-to-cs-handoff.md) — handoff
- [First Sales Hire](./first-sales-hire.md) — first AE
- [Self-Serve vs Sales-Led](./self-serve-vs-sales-led.md) — strategy
- [Product-Qualified Leads (PQL)](./product-qualified-leads-pql.md) — PLG sales
- [Product-Led Growth Playbook](./product-led-growth-playbook.md) — PLG strategy
- [Marketing Attribution & Multi-Touch](./marketing-attribution-multi-touch.md) — attribution
- [Customer Lifetime Value Playbook](./customer-lifetime-value-playbook.md) — economics
- [Renewal Forecasting & Management](./renewal-forecasting-management.md) — renewals
- [Annual Planning OKRs](../1-position/annual-planning-okrs.md) — planning
- [Compensation Philosophy & Pay Bands](./compensation-philosophy-pay-bands.md) — comp philosophy
- [Interview Loop Design](./interview-loop-design.md) — hiring
- [VP Engineering Hire & Transition](./vp-engineering-hire-transition.md) — adjacent senior hire
- [VibeReference: CRM Providers](https://vibereference.dev/marketing-and-seo/crm-providers) — Salesforce / HubSpot
- [VibeReference: Sales Engagement Platforms](https://vibereference.dev/marketing-and-seo/sales-engagement-platforms) — Outreach / Salesloft
- [VibeReference: ABM Platforms](https://vibereference.dev/marketing-and-seo/abm-platforms) — 6sense / Demandbase
- [VibeReference: Customer Data Platforms](https://vibereference.dev/marketing-and-seo/customer-data-platforms) — Segment
- [VibeReference: Customer Success Platforms](https://vibereference.dev/product-and-design/customer-success-platforms) — adjacent ops
