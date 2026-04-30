[Back to Day 4: Convert](README.md)

# Product-Qualified Leads (PQL): Define the Signal That Tells Sales "Talk to This One Now"

Most product-led SaaS companies waste sales effort on the wrong free users. Sales reps reach out to anyone who signed up; the response rate is low; deals are slow; reps get burned out. Or the opposite — sales never reaches out because "they're product-led" — and the 5% of free users who would have signed an enterprise deal silently churn because no one helped them. The signal that separates "this user might pay" from "this user might also pay $50K/year if a human reaches out" is the PQL.

A working PQL definition does specific work. It identifies free / trial users whose product behavior signals high buying intent, surfaces them to sales / CSM team in priority order, and triggers the right kind of outreach. Done well, PQL is the highest-leverage sales channel in PLG: 30-50% close rate on PQL-flagged accounts vs 1-5% on cold outbound. Done badly, "PQL" is a checkbox in the CRM nobody acts on, and the company stays purely self-serve at lower ACV.

This guide is the playbook for defining PQLs — the data analysis that finds the signals, the scoring model that ranks them, the routing to sales / CSM, and the operational discipline that turns PQL into pipeline. Companion to [Activation Metric Definition](activation-metric-definition.md) (different from PQL — covered below) and [Self-Serve vs Sales-Led](self-serve-vs-sales-led.md).

## What Done Looks Like

By end of the exercise:

- A documented PQL definition (specific events + thresholds)
- A daily / weekly PQL feed surfaced to sales/CSM
- A defined sales motion for PQL outreach (different from MQL)
- Tracking: PQLs identified → contacted → opportunity → closed-won
- Quarterly PQL definition review based on close-rate data
- A complementary "PQA" (Product-Qualified Account) for B2B teams

This pairs with [Activation Metric Definition](activation-metric-definition.md) (different but related), [Self-Serve vs Sales-Led](self-serve-vs-sales-led.md) (PLG motion context), [Free-to-Paid Conversion](free-to-paid.md) (PQLs are a subset), [Free Trial vs Freemium](../1-position/free-trial-vs-freemium.md) (PLG entry mechanics), [Sales Playbook](sales-playbook.md) (how sales handles PQLs), [First Sales Hire](first-sales-hire.md) (PQLs make first AE viable), [First Customer Success Hire](first-customer-success-hire.md) (CSM also handles PQLs), [Conversion Rate Optimization](conversion-rate-optimization.md) (PQL conversion is testable), [Annual Contract Negotiation](annual-contract-negotiation.md) (PQL → enterprise deal), [Customer References](customer-references.md) (closed PQLs become references), [Demo Request Flow](demo-request-flow.md) (PQL → demo path), and [Reduce Churn](reduce-churn.md) (un-converted PQLs are churn-risk).

## PQL vs MQL vs SQL vs Activation — Get the Categories Straight

Misuse of these terms causes confusion. Define them clearly.

```
Help me clarify the categories.

The hierarchy:

**Marketing-Qualified Lead (MQL)**:

- Signaled interest via marketing
- Examples: downloaded a whitepaper, attended webinar, requested demo
- Quality varies; many MQLs aren''t in-market
- Sales follows up to qualify further

**Sales-Qualified Lead (SQL)**:

- MQL that''s been qualified (BANT or similar)
- Has budget, authority, need, timeline
- Worth sales investment

**Activation event** (per [activation-metric-definition](activation-metric-definition.md)):

- User has experienced core product value
- Strong predictor of retention
- "Will they stick around?"

**Product-Qualified Lead (PQL)**:

- User has BOTH activated AND signaled buying intent
- Higher bar than activation
- "Will they pay (or pay more)?"

**The distinction in plain English**:

- MQL: "Said they''re interested" (talk)
- SQL: "Said it AND fits criteria" (talk + qualify)
- Activation: "Got value from product" (action)
- PQL: "Got value AND showed buying signals" (action + intent)

**The signals that distinguish PQL from activated user**:

A user can be activated (using the product successfully) but not show buying intent.
A PQL is activated AND shows specific signals:

- Hit a free-tier limit
- Invited multiple teammates (team adoption)
- Used premium-tier features in a free preview
- Multiple users from same domain signed up
- Visited pricing page repeatedly
- High usage frequency / depth
- Specific feature combinations that map to enterprise needs

**Why PQL is more valuable than MQL**:

- MQL is intention; PQL is action + intention
- MQLs convert at 1-5%; PQLs convert at 30-50%
- PQLs have already proven they can use the product

**The "MQL → PQL" upgrade**:

For PLG companies, sometimes flip the funnel:
- Lead enters via product trial (not whitepaper download)
- Becomes activated user
- Becomes PQL (added intent signal)
- Sales reaches out only at PQL stage

Skip MQL entirely; let product usage qualify.

For my product:
- Current lead categories
- The PQL definition gap
- The funnel shape

Output:
1. The category mapping
2. The current vs target funnel
3. The "we should add PQL" decision
```

The biggest unforced error: **conflating activation with PQL.** "We have 500 activated users" doesn''t mean 500 ready-to-buy. Some are happy on free forever; some have budget and need. PQL filters activated for specific buying signals.

## The Signals That Make a PQL

Not all behaviors are PQL signals. Be specific.

```
Help me identify PQL signals.

The signal categories:

**1. Limit-hitting signals**

Strongest signal — user is being constrained by free tier.

- Hit free-tier seat limit (5 seats max; tried to invite 6th)
- Hit usage limit (10K API calls; trying to do 20K)
- Hit feature limit (3 projects; trying to create 4th)
- Hit storage limit
- Hit retention limit

These say: "I want more product"

**2. Premium-feature signals**

Tried or wanted features available only in paid tiers.

- Clicked locked feature in UI
- Hovered "upgrade to use this" CTA
- Used trial-mode of premium feature
- Asked support about premium feature

These say: "Premium specifically interests me"

**3. Team-adoption signals**

Indicates organizational use, not just individual.

- 3+ users from same email domain signed up
- Invited 5+ teammates
- Multiple users active in same workspace
- Workspace has admin / regular roles assigned

These say: "We''re using this as a team"

**4. Buying-intent signals**

Direct purchase-funnel actions.

- Visited pricing page 3+ times
- Started checkout but didn''t complete
- Requested demo
- Asked sales question via chat
- Compared plans in product

These say: "I''m thinking about buying"

**5. Engagement / depth signals**

High product usage suggests dependency.

- Daily active for 14+ days
- Used 3+ key features
- Created 50+ records / completed 50+ actions
- Returned 20+ times

These say: "Product is becoming essential"

**6. Firmographic signals**

Company-level qualifiers (B2B).

- Email domain matches enterprise target list
- Company size (per Clearbit / Apollo) >100 employees
- Industry vertical match

These say: "Right ICP"

**The signal-strength hierarchy**:

| Signal | Strength | Why |
|---|---|---|
| Hit limit + multiple users | Strongest | Limited AND organizational |
| Hit limit | Strong | Want-to-pay constraint |
| Premium feature interest | Strong | Specific purchase signal |
| Multi-user team | Medium-strong | Organizational |
| Pricing page visits | Medium | Considering |
| High engagement only | Medium | Depends on plan ceiling |
| Firmographic only | Weak | Necessary, not sufficient |

**The "AND" rule**:

PQL = activated user AND at least 1 strong signal.

Not just any signal — combinations matter:
- Activated + hit-limit + multi-user = HOT
- Activated + pricing-views = warm
- Just activated = not PQL yet

For my product:
- Available signals (tracked in analytics)
- Signal strengths
- Combination patterns

Output:
1. The signals catalog
2. The strength ranking
3. The "PQL = X AND Y" definition
```

The biggest signal-selection mistake: **picking generic engagement as PQL signal.** "Logged in 10 times" isn''t PQL — it''s engaged. PQL requires SPECIFIC buying-intent signal: limit hit, premium-feature attempt, team formation, pricing visit. Engagement alone is just retention.

## Build the PQL Score

Combine signals into a numeric score for ranking.

```
Help me build a PQL scoring model.

The simple-additive model:

```typescript
function calculatePQLScore(user) {
  let score = 0;

  // Activation (required; gate)
  if (!user.isActivated) return 0;

  // Strong signals (10-30 each)
  if (user.hitFreeTierLimit) score += 30;
  if (user.attemptedPremiumFeature) score += 20;
  if (user.teamSize >= 3) score += 25;
  if (user.requestedDemo) score += 30;
  if (user.startedCheckout) score += 40;

  // Medium signals (5-15 each)
  if (user.pricingPageVisits >= 3) score += 15;
  if (user.daysActive >= 14) score += 10;
  if (user.featuresUsed >= 3) score += 10;

  // Firmographic (5-15)
  if (user.companySize >= 100) score += 10;
  if (user.isInTargetVertical) score += 10;
  if (user.isExistingCustomerExpansion) score += 20; // hot

  // Recency multiplier
  if (user.lastActiveAt > 7 days ago) score *= 1.0;
  else if (user.lastActiveAt > 30 days ago) score *= 0.5;
  else score *= 0.1;

  return score;
}
```

**The PQL threshold**:

| Score | Tier | Action |
|---|---|---|
| 0-25 | Cold | No outreach |
| 26-50 | Warm | Newsletter; light nurture |
| 51-75 | Hot | SDR outreach within 24 hours |
| 76+ | Burning | AE personal outreach within 4 hours |

Tune thresholds based on conversion data.

**The "calibrate by closing rate" rule**:

After 30-90 days of PQL operation:
- Group by score range
- Compute close rate per range
- Adjust thresholds

If 20-50 score range has 25% close rate, that should be PQL too.
If 76+ has only 15% close rate, signal weights are wrong.

**Tools for scoring**:

| Tool | Cost | Best for |
|---|---|---|
| Custom in-app | Engineering time | Most flexible |
| HubSpot lead scoring | Bundled | Already on HubSpot |
| Pocus | $$$ | Dedicated PQL platform |
| Endgame | $$$ | Dedicated PQL platform |
| Madkudu | $$$ | AI-powered scoring |
| Correlated | $$ | Modern alternative |
| PostHog (groups + alerts) | Bundled with PostHog | DIY scoring |

**The DIY approach**:

For most indie SaaS:
- Track events in product (PostHog / Mixpanel / Amplitude)
- Run a daily query that scores users
- Output to a Slack channel or CRM
- Sales acts on the list

```sql
-- Daily PQL query
WITH user_scores AS (
  SELECT
    u.id,
    u.email,
    u.tenant_id,
    -- Score components
    (CASE WHEN ... THEN 30 ELSE 0 END) +
    (CASE WHEN ... THEN 20 ELSE 0 END) +
    -- ... etc
    AS score
  FROM users u
  -- ... joins
)
SELECT * FROM user_scores WHERE score >= 50 ORDER BY score DESC;
```

For my product:
- Available signals
- Initial weights
- The threshold
- The tool

Output:
1. The scoring model
2. The threshold ranges
3. The implementation plan
```

The biggest scoring-model mistake: **over-engineering on day one.** A 50-variable model with AI-tuned weights and complex decay functions is overkill. Start with 5-10 simple signals, basic additive scoring, threshold at gut-feel. Tune based on results in month 3.

## Surface PQLs to the Right Person

A PQL list nobody acts on is wasted. Build the routing.

```
Help me route PQLs to action.

The destinations:

**1. Sales (AE / SDR) — for new prospects**

PQL fits ICP and isn''t already a customer:
- AE if high-score / mid-market+ ACV
- SDR if low-medium score; needs qualification
- Outbound message templated for PQL context

Channel:
- Slack channel + @mention SDR
- CRM (HubSpot / Salesforce) with task created
- Email digest daily

**2. CSM — for existing customers**

Existing customer showing PQL signals = expansion opportunity:
- Hit seat limit on Pro plan? Discuss Business
- Heavy usage? QBR + upsell discussion
- New team forming? Onboarding offer

Channel:
- Notify CSM owner of account
- Tag in CRM
- Auto-add to QBR talking points

**3. Product team — for un-actionable PQLs**

User wants something but can''t buy yet:
- Free tier user; no budget
- Wrong vertical; we don''t serve them
- Technical blocker we should fix

Channel:
- Roadmap input
- Product feedback queue

**The PQL routing rules**:

```typescript
function routePQL(user, score) {
  if (user.isExistingCustomer) {
    return { team: 'CSM', owner: user.account.csmId };
  }
  if (score >= 76 && fitsTargetICP(user)) {
    return { team: 'AE', owner: assignedAE(user) };
  }
  if (score >= 51) {
    return { team: 'SDR', owner: assignedSDR(user) };
  }
  return { team: 'Marketing', action: 'nurture-sequence' };
}
```

**Slack notification example**:

```
🔥 New burning PQL (score: 87)
- User: Bob Smith (bob@acmecorp.com)
- Company: Acme Corp (250 employees)
- Signals: Hit seat limit, 5 teammates, 12 days active, premium feature attempt
- Owner: @sarah-AE
- Action: outreach within 4 hours
- CRM: [link]
```

**The first-touch playbook**:

Per [sales-playbook](sales-playbook.md):

For high-score PQLs:
- Personal email referencing specific behavior
- "Saw you hit your seat limit yesterday — happy to chat about [Plan X] if it''d help"
- NOT generic "want a demo?" template
- Soft tone (they''re using the product; not a cold prospect)

**The "do not contact" list**:

Some users hit PQL but shouldn''t be contacted:
- They''re a competitor
- Free-trial-only signup with personal email
- Already in active sales conversation
- Recently churned (timing wrong)

Maintain a do-not-contact list; check before outreach.

**Speed matters**:

For high-score PQLs (limit-hit + intent), response time correlates with close rate:
- < 4 hours: 30-40% conversion
- 4-24 hours: 15-25%
- 24-72 hours: 5-15%
- 72+ hours: < 5%

Build alerts so PQLs don''t age.

For my routing:
- Channels (Slack / CRM / email)
- Owners (AE / SDR / CSM)
- SLA per tier

Output:
1. The routing rules
2. The notification pipeline
3. The SLAs
```

The biggest routing mistake: **PQLs land in CRM but nobody''s notified.** Sales rep checks CRM Mondays; PQL from Tuesday is now stale. The fix: real-time notification (Slack), task creation, SLA timer. Speed of response is half of the win.

## The PQL Sales Motion

PQLs need a different outreach than cold prospects. Train accordingly.

```
Help me design the PQL sales motion.

The principles:

**1. Acknowledge product use**

Don''t outreach as if they''ve never heard of you. They''re using the product.

> "Saw you hit your project limit last week — wanted to reach out and see if it''d help to chat about higher tiers."

vs. cold outreach:

> "Hi, are you struggling with project management?"

The difference is night and day.

**2. Reference specific behavior**

Use the signal that triggered the PQL:

- "Noticed your team has grown to 8 users on Pro..."
- "Saw you tried our [Feature] and might benefit from [Plan X]..."
- "You''ve been using us for 30 days — want to talk about scaling?"

Specificity = credibility.

**3. Soft ask**

Don''t lead with "demo?" — they don''t need a demo; they''re using the product.

Lead with:
- A specific question about their use
- An offer to help with something
- A relevant resource

The demo (or pricing call) comes second.

**4. Two-part outreach**

**Email 1 (immediate)**:
- Acknowledge the trigger event
- Soft offer to help
- Low-friction CTA

**Email 2 (3 days later if no response)**:
- Different angle (case study; specific feature)
- Still soft ask

**Email 3 (7 days later if no response)**:
- "Should I close this loop or keep the door open?"

If still no response: nurture sequence; come back when score increases.

**5. Match channel to seniority**

- Junior PQLs (IC users): email
- Senior PQLs (manager / director): LinkedIn + email
- VP / C-level (rare PQLs): personalized, longer-cycle

**6. The "convert without sales call" path**

For high-score PQLs at low-ACV plans:
- Direct upgrade message
- No sales call needed
- "Your team can upgrade here: [link]"

Most self-serve PLG conversions happen without sales call. Sales-touch reserved for higher-ACV / complex deals.

**The PQL outreach template**:

```
Subject: Quick thought after seeing your team hit X

Hey [Name],

Noticed your team at [Company] has grown to 8 users on our Pro plan — congrats on the growth.

Wanted to reach out because I thought it might be helpful to compare what you''re using now vs our Business tier — there''s SSO, audit logs, and a CSM for teams your size.

Here''s a quick page comparing them: [link]

If a 15-min chat would help, here''s my calendar: [link]
Otherwise, no worries — happy to answer questions over email.

[Name]
```

Note: specific behavior, soft ask, low friction.

For my motion:
- Templates per signal type
- Channels per persona
- The conversion-without-call path

Output:
1. The outreach templates
2. The channel mapping
3. The 3-touch sequence
```

The biggest PQL-motion mistake: **using cold-outreach templates.** "Are you struggling with X?" — they''re NOT struggling; they''re using the product. The templates that work for cold leads kill PQL conversion. The fix: behavior-specific outreach; respect the relationship; soft ask.

## Track and Iterate

PQL is data-driven by definition. Measure and improve.

```
Help me measure PQL effectiveness.

The metrics:

**Volume**:
- # PQLs identified per week
- Distribution by score range

**Reach rate**:
- % of PQLs contacted within SLA
- Time-to-first-contact (median)

**Engagement**:
- % of PQLs who reply to outreach
- % who book a meeting
- % who request demo

**Conversion**:
- % of PQLs who become opportunities
- % of opportunities that close-won
- ACV of PQL deals vs cold deals

**Quality**:
- Close rate by signal type (which signals predict best?)
- Close rate by score range (is threshold right?)
- Conversion lift vs non-PQL outreach

**Compare to baselines**:

| Cohort | Conversion to paid |
|---|---|
| Cold outbound (industry baseline) | 1-3% |
| MQL (industry baseline) | 5-15% |
| Free trial (without PQL) | 5-15% |
| PQL (our target) | 25-50% |

If PQL conversion is below MQL: PQL definition is wrong (too loose).
If PQL conversion is above 50%: definition is so tight you''re missing volume.

**The quarterly PQL review**:

Each quarter:
- Compare PQL signals to actual closes
- Drop signals that don''t correlate
- Add new signals based on data
- Adjust thresholds

**The "feedback loop" to product**:

PQLs reveal product gaps:
- "PQL hit limit but didn''t convert" → why? Pricing? Feature gap?
- "Many free users have intent but never become PQL" → onboarding miss?
- "Power-users but never paid" → tier design problem?

PQL data feeds product roadmap (per [public-roadmap](../2-content/public-roadmap.md)).

**The "PQL fatigue" check**:

If sales reps are skeptical of PQLs:
- Maybe definition too loose (low close rate)
- Or routing wrong (assigned to wrong rep)
- Or speed too slow (PQL gone cold by contact)

Diagnose; fix.

For my system:
- Current PQL metrics (probably none)
- The dashboard plan
- The review cadence

Output:
1. The PQL dashboard
2. The quarterly review template
3. The product-feedback loop
```

The biggest measurement mistake: **declaring PQL working without comparison data.** "We closed 3 PQL deals" — but how does that compare to similar effort on cold outbound? Always benchmark PQL conversion against alternatives. If the lift isn''t real, fix the definition.

## When Not to Build PQL Yet

PQL isn''t for every stage. Know when to wait.

```
Help me decide if PQL is right for now.

**Signals to build PQL**:

- 100+ active free / trial users per month
- Sales-led motion exists (or you''re hiring sales)
- ACV is meaningful ($1K+ per customer)
- Some self-serve conversion happening already
- Clear differentiation between free and paid tiers

**Signals to skip PQL (for now)**:

- < 50 trial users / month (too few signals; manual review faster)
- Pure self-serve (no human sales)
- ACV very low (<$50/mo per customer)
- No clear "upgrade path" feature differentiation
- No analytics / event tracking infrastructure
- No sales / CSM resource to act on PQLs

**The "manual triage" alternative for early stage**:

For < 50 PQLs/week:
- Daily 15-min review of new active users
- Founder/CMO eyeballs the list
- Personally reach out to interesting ones
- Capture patterns; build PQL definition over time

This produces the same quality with less infrastructure when volume is low.

**The build trigger**:

Build PQL system when:
- Volume exceeds manual triage capacity
- You have sales resources
- Initial patterns are clear

Don''t build prematurely.

For my company:
- Volume signals
- Sales capacity
- The "build / manual" decision

Output:
1. The decision criteria
2. The "manual triage" interim plan if not building
3. The trigger to upgrade
```

The biggest stage mistake: **building PQL infrastructure too early.** Solo founder spends 3 weeks building PostHog + HubSpot + Slack PQL pipeline; result: 5 PQLs/month, all of which the founder could have eyeballed in 5 minutes daily. The fix: scale PQL infrastructure with volume; manual at small scale; automated when volume justifies.

## Avoid Common Pitfalls

Recognizable failure patterns.

```
The PQL mistake checklist.

**Mistake 1: PQL = activation**
- Too loose; not predictive of buying
- Fix: activation + intent signal

**Mistake 2: Too tight**
- PQL only when limit hit + multi-user + pricing visit
- Volume too low; missing opportunities
- Fix: balance tightness vs volume

**Mistake 3: No SLA on response**
- PQL gets cold within 24 hours
- Fix: speed matters; <4 hour for hot PQLs

**Mistake 4: Cold-outreach templates**
- Treating PQL like cold lead
- Fix: behavior-specific outreach

**Mistake 5: PQL = checkbox in CRM**
- No notification; sales misses them
- Fix: real-time Slack + CRM task

**Mistake 6: Static definition**
- Same definition for 2 years; market changed
- Fix: quarterly review

**Mistake 7: No measurement**
- Don''t know if PQL is working
- Fix: dashboard + comparison metrics

**Mistake 8: Building too early**
- Solo founder; 5 PQLs/month; over-built
- Fix: manual triage at low volume

**Mistake 9: Ignoring CSM PQLs**
- Existing customers showing expansion signals
- Fix: route PQLs to CSM for expansion

**Mistake 10: PQL replaces CRO**
- Treating sales-touch as solution to bad onboarding
- Fix: PQL complements; doesn''t replace product/onboarding

**The quality checklist**:

- [ ] Definition documented
- [ ] Activation as gate; signal as differentiator
- [ ] Multiple signal types (limit / premium / team / intent)
- [ ] Scoring model with weights
- [ ] Threshold tiers (warm / hot / burning)
- [ ] Routing rules per tier
- [ ] SLA per tier
- [ ] Real-time notifications
- [ ] PQL-specific outreach templates
- [ ] Quarterly review

For my system:
- Audit
- Top 3 fixes

Output:
1. Audit results
2. Top 3 fixes
3. The "v2 PQL" plan
```

The single most-common mistake: **treating PQL like MQL.** Sending generic "request a demo" emails; not referencing product behavior; ignoring SLAs. PQL is a different motion: lighter, faster, behavior-anchored. Get this right or PQL doesn''t outperform cold outbound.

---

## What "Done" Looks Like

A working PQL system in 2026 has:

- Clear definition (activation + at least one buying-intent signal)
- Multiple signal types tracked + weighted
- Scoring model with threshold tiers
- Real-time notifications to assigned owners
- SLAs (4 hours hot; 24 hours warm)
- PQL-specific outreach templates (behavior-anchored)
- Routing to AE / SDR / CSM appropriately
- Tracking: PQL → opportunity → closed-won
- Quarterly review with iteration
- Comparison metrics vs cold outbound

The hidden cost of weak PQL: **leaving 30-50% close rate on the table.** Free / trial users who would have bought silently churn because nobody helped them. Or sales burns out chasing cold leads when warmer ones in-product are ignored. PQL is the highest-leverage sales channel in PLG; investing in the definition + routing + speed produces multiplicative returns. Every quarter without PQL is a quarter of missed expansion / new-business pipeline.

## See Also

- [Activation Metric Definition](activation-metric-definition.md) — different but related
- [Self-Serve vs Sales-Led](self-serve-vs-sales-led.md) — PLG motion context
- [Free-to-Paid Conversion](free-to-paid.md) — PQLs are a subset
- [Free Trial vs Freemium](../1-position/free-trial-vs-freemium.md) — PLG entry mechanics
- [Sales Playbook](sales-playbook.md) — how sales handles PQLs
- [First Sales Hire](first-sales-hire.md) — PQLs make first AE viable
- [First Customer Success Hire](first-customer-success-hire.md) — CSM also handles PQLs
- [Conversion Rate Optimization](conversion-rate-optimization.md) — PQL conversion testable
- [Annual Contract Negotiation](annual-contract-negotiation.md) — PQL → enterprise deal
- [Customer References](customer-references.md) — closed PQLs become references
- [Demo Request Flow](demo-request-flow.md) — PQL → demo path
- [Reduce Churn](reduce-churn.md) — un-converted PQLs are churn-risk
- [Public Roadmap](../2-content/public-roadmap.md) — PQL feedback to product
- [VibeWeek: Activation Funnel](https://www.vibeweek.com/6-grow/activation-funnel-chat) — implementation
- [VibeWeek: Customer Health Scoring](https://www.vibeweek.com/6-grow/customer-health-scoring-chat) — adjacent score
- [VibeReference: Customer Data Platforms](https://www.vibereference.com/marketing-and-seo/customer-data-platforms) — event pipeline
- [VibeReference: Web Analytics Providers](https://www.vibereference.com/marketing-and-seo/web-analytics-providers) — PostHog / Mixpanel for tracking
- [VibeReference: CRM Providers](https://www.vibereference.com/marketing-and-seo/crm-providers) — where PQL routes

[Back to Day 4: Convert](README.md)
