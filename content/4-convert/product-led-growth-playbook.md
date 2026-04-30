# Product-Led Growth (PLG) Playbook

[⬅️ Back to Day 4: Convert](../4-convert/)

If you're building a B2B SaaS in 2026, you're probably blending product-led growth (PLG) with sales-led motion. Pure PLG (Notion, Figma, Linear, Loom) and pure sales-led (Salesforce, Snowflake, Workday) are increasingly rare. The naive approach: "we'll be PLG" → ship freemium → wonder why no one converts. The structured approach: design product for self-serve onboarding + value-in-minutes + viral hooks + in-product expansion + a sales-assist layer for accounts that emerge above a threshold. PLG is not a tactic; it's a company-wide operating model affecting product, marketing, sales, CS, and pricing. This guide covers the full playbook.

## What Done Looks Like

A working PLG motion:
- [ ] Product onboarding gets users to value in <5 minutes
- [ ] Free / trial → paid conversion measured + improving (target 3-10% for freemium; 10-30% for trial)
- [ ] In-product upgrade prompts at limit moments
- [ ] Self-serve checkout (no sales required for SMB)
- [ ] Sales-assist layer for emerging accounts (PQL flagging)
- [ ] In-product expansion (seats / features / usage)
- [ ] Activation metric defined + tracked
- [ ] Viral / network-effect loops (where applicable)
- [ ] Pricing aligned with PLG model (transparent, low entry)
- [ ] Marketing → product seamless (signup-as-CTA)

## 1. Decide if PLG fits — not all products PLG-able

```text
Decide PLG fit.

Strong PLG fit:
- End-user is the buyer (or strong influence)
- Product solves problem in <5 minutes
- Single-user value (works for solo before team)
- Self-serve possible (no integration / setup overhead)
- Examples: Linear, Notion, Loom, Figma, Calendly, Vercel

Weak PLG fit:
- Enterprise procurement required
- Long implementation (3+ months)
- Team-only value (worthless solo)
- Heavy integration / customization
- Examples: Salesforce, Workday, SAP

Hybrid (most B2B SaaS in 2026):
- PLG bottom (free / trial → individuals + small teams)
- Sales-led top (Enterprise contracts)
- "Land and expand": PLG plants seed; sales lands enterprise

Decision questions:
1. Can a single user get value in 1 session?
2. Is signup → first value <5 minutes possible?
3. Does the buyer or end-user care about UX?
4. Is the product useful below team / enterprise scale?

Stage considerations:
- Pre-PMF: PLG harder (no clear value to demo)
- Post-PMF: PLG amplifies
- Mature: PLG + sales-led hybrid common

For [COMPANY], output:
1. PLG fit assessment
2. Pure PLG / sales-led / hybrid recommendation
3. Land-and-expand pattern if hybrid
4. Sequencing (what to build first)
5. Anti-pattern check (forcing PLG on bad-fit product)
```

The "PLG ≠ B2C" rule: PLG is B2B with self-serve UX. End-user is decision-maker (or influencer). Different from B2C where individual = sole user.

## 2. Self-serve onboarding — value in 5 minutes

The single highest-leverage PLG investment.

```text
Design self-serve onboarding.

Time-to-value targets:
- Signup → first action: <60 seconds
- First action → "aha" moment: <5 minutes
- Aha moment → habit: <7 days

Steps in onboarding:

Step 1: Frictionless signup
- Email + password OR Google / Microsoft / GitHub OAuth
- Skip email verification (trust on signup; verify via subsequent action)
- No credit card for free / trial (huge friction)
- Workspace name (or skip; auto-generate)

Step 2: Empty state guidance
- Clear next action (single CTA)
- Sample data / template option
- "Try with sample" reduces friction

Step 3: First meaningful action
- Define your activation event (e.g., create first project, send first message)
- Guide to it via product tour OR contextual hints
- Don't overwhelm with full tour

Step 4: Post-action celebration
- "You did it!" moment
- What's next?

Step 5: Habit formation (day 1-7)
- Email sequence reinforcing value
- In-product nudges to next action
- Don't bombard

Anti-patterns:
- 12-step setup wizard (signup-to-value > 30 min)
- Email verification blocking immediate use
- Credit card required for free / trial
- Empty state with no guidance
- Overly long product tour (>7 steps)

Tools:
- Userflow / Appcues / Pendo / Userpilot / Chameleon for onboarding flows
- See onboarding-tour-implementation-chat for implementation

Output:
1. Onboarding flow map
2. Activation metric definition (see activation-metric-definition)
3. Empty-state guidance
4. Email sequence first 7 days
5. Drop-off measurement (which steps lose users)
```

The first-session-success metric: % of new signups who reach activation in first session. Target 40%+. Below that = onboarding broken.

## 3. Freemium vs free trial

```text
Pick freemium or free trial.

Freemium:
- Permanent free tier with limits
- Examples: Slack (free for 90 days history), Notion (limited blocks), Linear (free for small team)
- Pro: huge top-of-funnel; viral
- Con: low conversion (1-5% typical); engineering overhead for free tier

Free trial (time-limited):
- 14-30 days full access
- Examples: HubSpot, Salesforce trials
- Pro: focuses urgency; higher conversion (10-30%)
- Con: smaller top-of-funnel; users churn before trying

Reverse trial (best of both):
- Start with full premium for 14 days
- After expiration: downgrade to free / freemium tier
- Or: prompt to pay
- Used by: Notion, Loom

Open source + paid (newer 2026):
- Open source self-host
- Paid cloud / enterprise
- Examples: Cal.com, Supabase, PostHog, Convex
- Pro: developer love; dual-purpose (acquisition + brand)

Decision criteria:
- Time-to-value: <5 min → freemium works (users build habit)
- 5-30 min → trial better
- 30+ min → trial only

Pricing alignment:
- Free tier: solo users / hobbyists
- Pro: individual professional use
- Team: 2-10 people
- Business: 10-100 people
- Enterprise: 100+ + custom needs

Free tier limits — what to gate:
- # of items (projects / notes / etc.)
- # of users
- # of integrations
- Advanced features (SSO / audit / API)
- Storage
- See quotas-limits-plan-enforcement-chat

For [PRODUCT], output:
1. Freemium / trial / hybrid recommendation
2. Free-tier limits
3. Conversion expectations
4. Pricing tier structure
5. Reverse-trial design (if applicable)
```

The 2026 trend: reverse trial is increasingly default. "Try premium for 14 days; auto-downgrade if not paid" gets best of both.

## 4. Activation metric — the leading indicator

PLG without activation metric flies blind.

```text
Define activation metric.

Activation = "user reached value moment"

Examples:
- Linear: created an issue + invited a teammate
- Slack: 2,000+ messages sent in workspace
- Loom: recorded + shared first video
- Calendly: scheduled first meeting via shared link
- Notion: created 1+ page + 1+ block

Properties of good activation metric:
- Predictive of long-term retention
- Achievable in first session (not "after 30 days")
- Single user can complete (not requires teammates)
- Specific (not "engaged with product")

Define via cohort analysis:
- Look at retained users (still active 90+ days)
- What did they do in first session that churned users didn't?
- That's your activation event

Track:
- % of signups who activate (target 40%+)
- Time to activation
- Drop-off at each step

Use:
- Marketing optimizes for signups → activations
- Onboarding designed around activation event
- Sales prioritizes activated PQLs

See activation-metric-definition.md for full framework.

Output:
1. Activation metric for [PRODUCT]
2. Cohort analysis to validate
3. Tracking instrumentation
4. Optimization roadmap
```

The activation rule: don't pick activation by gut. Cohort-analysis. Compare retained-vs-churned in first session. Find the event.

## 5. Growth loops — virality + network effects

PLG products grow via loops, not just funnels.

```text
Identify growth loops.

Funnel: linear (visitor → signup → activate → pay)
Loop: cyclical (signup → use → invite → new signup)

Common PLG loops:

Inviter loop:
- User invites teammate to collaborate
- Teammate signs up
- Teammate invites their team
- Examples: Slack, Notion, Loom

Sharing loop:
- User creates artifact (Loom video, Calendly link)
- Shares with non-user
- Non-user sees product brand
- Some convert
- Examples: Loom, Calendly, Typeform

Embed loop:
- User embeds widget on their site (Calendly, Tally)
- Visitors see product
- Some sign up
- Examples: Calendly, Tally, Typeform

Content loop:
- User creates public content (Notion site, Webflow site)
- Search engines index
- Discover via SEO
- Examples: Webflow, Carrd, Notion

API loop:
- User integrates product
- Their integration creates more usage
- Examples: Stripe, Twilio, OpenAI

Designing loops:

For each loop:
- Action that triggers exposure
- Inviter motivation (why invite?)
- Invitee CTA (how easy to join?)
- Conversion rate
- Cycle time

Optimize:
- Reduce friction at invitee side
- Incentivize inviter (referral credit; not always needed)
- Make share / invite a natural product action

Anti-patterns:
- Forcing invites (Dropbox-era spam)
- Loop without reciprocal value
- Loops that feel hostile (LinkedIn-era over-invite)

Output:
1. Loop opportunities for [PRODUCT]
2. Invitee friction analysis
3. Inviter motivation
4. Loop metrics
5. Optimization roadmap
```

The K-factor: average new users invited per existing user. >1.0 = exponential growth. Most B2B SaaS PLG: 0.1-0.5 (sub-viral but cumulative).

## 6. Pricing for PLG

PLG pricing is different from sales-led.

```text
Design PLG pricing.

Principles:

Transparent:
- Public pricing page
- No "contact sales" until enterprise
- See pricing-page-chat

Low / no entry friction:
- Free tier OR
- Cheap entry ($10-30/mo individual)
- Avoid: required annual commit at entry

Self-serve scale:
- Tier upgrade in-product
- Card on file → automatic billing
- No invoice / contract for SMB

Per-seat usually:
- Linear, Notion, Slack, Asana model
- Predictable for buyer
- Easy to expand

Usage-based occasionally:
- For consumption products (Twilio, Vercel, OpenAI)
- See usage-based-billing-chat
- Aligns with value

Enterprise tier:
- "Contact sales"
- Custom pricing
- Annual contracts
- For: 100+ seats, SSO, compliance, complex needs

Anti-patterns:
- Hidden pricing (signal: not PLG-friendly)
- Required sales call before purchase
- Annual-only contracts at low ACV
- Free-only with no upgrade path

Trial / free-tier conversion benchmarks:
- Freemium B2B: 1-5% to paid
- Free trial B2B: 10-30%
- Reverse trial: 5-15%

Output:
1. Pricing structure
2. Free / trial design
3. Entry-tier price point
4. Per-seat vs usage decision
5. Enterprise tier criteria
```

The "transparent pricing → trust" effect: making pricing public signals confidence. Hidden pricing signals "we'll figure out what to charge." Engineering buyers especially distrust hidden pricing.

## 7. In-product upgrade prompts

Convert at the moment of friction.

```text
Build in-product upgrade prompts.

Triggers:

At limit:
- "You've hit 10 projects (Free plan limit)"
- Modal: explain Pro benefits + price
- See quotas-limits-plan-enforcement-chat

Behavior-based:
- 10+ active projects + 5+ users → "You're growing! Pro unlocks X"
- Heavy usage of paid feature in trial

Time-based:
- Trial day 7: "Your trial ends in 7 days"
- Trial day 13: "Last day to upgrade"

Feature-based:
- "Unlock SSO with Pro"
- "Get audit logs with Business"

Position:
- Modal at limit (blocks action)
- Banner (subtle ongoing nudge)
- In-product: feature page with "Upgrade to use"

Don't:
- Spam upgrade prompts
- Block free-tier features unrelated to limits
- Modal interrupt mid-flow
- Aggressive countdown timers

Friction:
- 1-click upgrade (card on file)
- Self-serve checkout
- Plan comparison link
- Talk-to-sales for enterprise

Conversion measurement:
- Track: prompt shown → upgrade clicked → completed
- A/B test copy + design
- Optimize highest-friction moments

Output:
1. Trigger framework
2. Per-trigger prompt design
3. Self-serve upgrade flow
4. A/B test plan
5. Conversion dashboard
```

The "expansion is the lifeblood" PLG truth: most PLG revenue is expansion (more seats / higher tier), not new logos. Optimize in-product expansion relentlessly.

## 8. Sales-assist layer — PQLs

Pure PLG misses the enterprise opportunity. Sales-assist captures it.

```text
Build sales-assist layer.

PQL definition:
- Free / trial users showing buying signals
- See product-qualified-leads-pql.md

Signal sources:
- Behavior: heavy usage, multiple users, feature usage
- Firmographic: company size, industry, vertical
- Engagement: visited pricing 3x, opened sales emails

PQL scoring:
- Sum signals
- Threshold for "PQL" status
- Routing rules: PQL → assigned AE

Outreach:
- Personalized (referencing usage)
- Helpful, not pitchy ("noticed you're hitting limits")
- Offer: demo, sales call, onboarding help

Sales motion:
- Reach out within 24h of becoming PQL
- High close rate (30-50% vs 1-5% cold)
- AEs love PQLs

Operating cadence:
- Marketing-Product-Sales weekly sync
- Refine PQL definition quarterly

Tools:
- Pocus (PLG sales platform)
- Endgame (similar)
- HubSpot / Salesforce custom + Looker dashboards
- Calixa, Variance (PLG sales assist)

Output:
1. PQL signal definition
2. Scoring model
3. Routing to sales
4. Outreach templates
5. Tool stack
```

The 30-50% PQL close rate: data-backed. Free users showing signals close way better than cold outbound. Sales should love PQLs; if they don't, signals are wrong.

## 9. PLG metrics dashboard

Measure ruthlessly.

```text
PLG metrics framework.

Top-of-funnel:
- Signups (per day / week)
- Source (organic, paid, referral, content)
- CAC per signup

Activation:
- % of signups who activate (60-day window)
- Time to activate
- Drop-off by step

Engagement:
- DAU / WAU / MAU
- Stickiness (DAU/MAU)
- Feature usage
- Power users vs casual

Conversion:
- Free → paid conversion rate
- Trial → paid rate
- Time to paid (median days)
- Self-serve vs sales-assisted breakdown

Expansion:
- NRR (net revenue retention)
- Seat growth per account
- Tier upgrades
- Cross-sell

Retention:
- Monthly churn rate
- Cohort retention curves (3 / 6 / 12 / 24 month)
- Reasons for churn

Loop metrics:
- Invite rate (% sending invites)
- Acceptance rate
- K-factor

Reporting cadence:
- Daily: signups, activations
- Weekly: cohort reviews
- Monthly: NRR, churn
- Quarterly: comprehensive review

Tools:
- PostHog / Amplitude / Mixpanel for product analytics
- ChartMogul / ProfitWell for revenue metrics
- Looker / Mode for custom

Output:
1. Metric framework
2. Tooling stack
3. Dashboard design
4. Reporting cadence
5. Action triggers
```

The PLG-metric culture: every team member can quote conversion rate, NRR, activation rate. If it's locked in marketing's dashboard, you're not PLG.

## 10. Cross-functional alignment

PLG isn't a marketing program. It's how the company operates.

```text
Align org around PLG.

Product:
- Build self-serve UX
- Own activation metric
- Iterate onboarding weekly
- A/B test continuously

Marketing:
- Drive signups (not just leads)
- Optimize signup → activation
- Content for self-discovery (SEO, docs, comparisons)
- Less "demo request"; more "try it free"

Sales:
- Pivot from outbound to PQL-led
- Higher-touch only for enterprise
- Lower-ACV self-serve eliminates sales

Customer Success:
- Tech-touch for SMB / individual
- High-touch for enterprise
- Expansion-focused for paid customers

Engineering:
- Ship fast (PLG depends on iteration)
- Instrumentation first-class (analytics events everywhere)
- Self-serve features (billing, settings, admin)

Cultural shifts:
- Build for end-user, not buyer
- Speed over thoroughness
- Customer-led roadmap
- "Demos kill PLG" (mostly true)

Org structure:
- Growth team (PMs + engineers + designers focused on funnel)
- Product analytics team
- Sales as a product feature, not separate function

Anti-patterns:
- Old-school sales team forced onto PLG (resists self-serve)
- Marketing measures MQLs (not signups / activations)
- Eng builds features without instrumentation
- CEO doesn't understand PLG metrics

Output:
1. Org chart adjustments
2. Per-function priorities
3. Cultural shifts needed
4. Hiring roadmap (Growth PM, product analyst, etc.)
5. Annual planning around PLG metrics
```

The "PLG is a culture" truth: hiring sales-led leaders to run PLG (or vice versa) breaks alignment. Hire PLG-experienced leaders if you're committing.

## What Done Looks Like

A working PLG motion:

- [ ] Time-to-value <5 minutes from signup
- [ ] Activation metric defined + tracked
- [ ] Free / trial / reverse-trial structure designed
- [ ] Self-serve checkout (no sales for SMB)
- [ ] In-product upgrade prompts at limits
- [ ] Growth loops identified + measured
- [ ] PQL definition + sales-assist layer
- [ ] PLG metrics dashboard (signups → activation → conversion → retention → expansion)
- [ ] Pricing transparent + PLG-aligned
- [ ] Cross-functional alignment (product, marketing, sales, CS, eng)
- [ ] Iteration cadence (weekly experiments)

The mistakes to avoid:

1. **Forcing PLG on a sales-led product.** Long implementation + complex products don't fit.
2. **Slow onboarding.** >5 min time-to-value loses users.
3. **No activation metric.** Flying blind.
4. **Hiding pricing.** PLG requires transparency.
5. **No sales-assist for emerging accounts.** Lost enterprise upside.
6. **Marketing measures MQLs not signups.** Wrong incentive.
7. **Sales team measured on cold outbound when PQLs exist.** Wasted effort.
8. **Engineering ships features without instrumentation.** Can't optimize.

## See Also

- [Self-Serve vs Sales-Led](./self-serve-vs-sales-led.md) — strategic decision (companion)
- [Product-Qualified Leads (PQL)](./product-qualified-leads-pql.md) — sales-assist signals
- [Activation Metric Definition](./activation-metric-definition.md) — leading indicator
- [Free Trial vs Freemium](../1-position/free-trial-vs-freemium.md) — entry model
- [Onboarding Flow](./onboarding-flow.md) — onboarding strategy
- [Pricing Strategy](../1-position/pricing-strategy.md) — pricing
- [Pricing Page](./pricing-page.md) — pricing UX
- [Pricing Packaging Tier Design](../1-position/pricing-packaging-tier-design.md) — tier design
- [Free to Paid](./free-to-paid.md) — conversion mechanics
- [Trial to Paid](./trial-to-paid.md) — trial conversion
- [Customer Lifetime Value Playbook](./customer-lifetime-value-playbook.md) — economics
- [Marketing Attribution & Multi-Touch](./marketing-attribution-multi-touch.md) — attribution challenge
- [Customer Success Metrics Framework](./customer-success-metrics-framework.md) — CS metrics
- [Sales Forecasting & Pipeline Management](./sales-forecasting-pipeline-management.md) — sales-side
- [VibeWeek: Quotas, Limits & Plan Enforcement](https://vibeweek.dev/6-grow/quotas-limits-plan-enforcement-chat) — limit + upgrade UX
- [VibeWeek: Onboarding Tour Implementation](https://vibeweek.dev/6-grow/onboarding-tour-implementation-chat) — in-product tour
- [VibeWeek: Activation Funnel](https://vibeweek.dev/6-grow/activation-funnel-chat) — funnel instrumentation
- [VibeWeek: Trial to Paid](https://vibeweek.dev/6-grow/trial-to-paid-chat) — conversion
- [VibeWeek: Workspace, Org & Tenant Switcher](https://vibeweek.dev/6-grow/workspace-tenant-switcher-chat) — adjacent UX
- [VibeReference: Product Analytics Providers](https://vibereference.dev/devops-and-tools/product-analytics-providers) — PostHog / Amplitude
- [VibeReference: Subscription Billing Providers](https://vibereference.dev/auth-and-payments/subscription-billing-providers) — billing
