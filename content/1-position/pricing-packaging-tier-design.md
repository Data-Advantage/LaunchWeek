[Back to Day 1: Position](README.md)

# Pricing Packaging & Tier Design: What Goes in Free, Pro, and Enterprise (and Why)

Most founders set a price first and figure out tiers later. Two months in, the pricing page has Free / Pro / Enterprise but the dividing lines feel arbitrary — Free has too much (so nobody upgrades), Pro is missing one thing every buyer asks for (so deals stall), and Enterprise is "Contact Us" with no signal of what it includes. The packaging is reverse-engineered from "what we shipped" instead of designed forward from "how customers buy."

A working tier structure does specific work. It funnels users from low-friction entry to mid-tier conversion to enterprise expansion, with every dividing line tied to a recognizable buying threshold (team size, volume, governance need, support depth). Done well, packaging answers "which tier should I be on?" before the customer reads the fine print. Done badly, packaging is a Rorschach test that turns every sales conversation into "what tier are you actually trying to sell me?"

This guide is the playbook for designing tiers that read clearly, convert predictably, and don't require a quarterly rewrite. Companion to [Pricing Strategy](pricing-strategy.md) (which model — seat / usage / flat) and [Free Trial vs Freemium](free-trial-vs-freemium.md) (which entry mechanic).

## What Done Looks Like

By end of the exercise:

- 3-4 named tiers with distinct buyer personas
- Each tier has a clear "if you're like X, this is your tier" answer
- Dividing lines tied to recognizable thresholds (not arbitrary feature gates)
- "Most popular" badge on the tier you actually want most customers to pick
- Pricing page that reads in 30 seconds
- Sales / support team aligned on what's in each tier
- Quarterly review baked into the rhythm

This pairs with [Pricing Strategy](pricing-strategy.md) (model selection), [Free Trial vs Freemium](free-trial-vs-freemium.md) (entry mechanic), [Pricing Page](../4-convert/pricing-page.md) (how it's displayed), [Pricing Experiments](../4-convert/pricing-experiments.md) (how it's iterated), [Self-Serve vs Sales-Led](../4-convert/self-serve-vs-sales-led.md) (motion match), [Raise Prices](../4-convert/raise-prices.md) (when to update), [Expansion Revenue](../4-convert/expansion-revenue.md) (how tiers drive upgrade), [Free-to-Paid Conversion](../4-convert/free-to-paid.md) (the upgrade moment), [Annual Contract Negotiation](../4-convert/annual-contract-negotiation.md) (enterprise-tier negotiation), and [Comparison Pages](../4-convert/comparison-pages.md) (tier comparison vs competitors).

## The Three (Sometimes Four) Tier Pattern

Most modern SaaS converge on a similar shape. Start here; deviate only with reason.

```
Help me design the tier structure.

The standard pattern:

**Tier 1: Free / Starter**

The entry tier. Either truly free (freemium) or low-priced ($9-29/mo).

Purpose:
- Self-serve trial / discovery
- Low-friction adoption
- "Try before commit"
- Word-of-mouth distribution

Buyer persona: individual user, hobbyist, small startup evaluating

**Tier 2: Pro / Growth**

The "most teams land here" tier. $50-200/mo typical.

Purpose:
- Real-team usage
- Where you make money
- "We''re past evaluation; we''re using it for real"

Buyer persona: small-to-mid teams, paying for production use

**Tier 3: Business / Team**

The "company is serious about this" tier. $500-2000/mo typical.

Purpose:
- Larger teams
- Governance / admin features
- More usage / more seats / SSO

Buyer persona: 20-100 person teams, mid-market companies

**Tier 4: Enterprise**

Custom-priced; "Contact Us." $10K-100K+/yr typical.

Purpose:
- Deal-by-deal pricing
- Custom contract terms
- Compliance, custom SLAs (per [service-level-agreements](https://www.vibeweek.com/6-grow/service-level-agreements-chat))
- Dedicated CSM, custom onboarding

Buyer persona: 100+ person companies, regulated industries, enterprise procurement

**Three vs four tiers**:

- 3 tiers (Free + Pro + Enterprise): cleanest; works for most early-stage SaaS
- 4 tiers (Free + Pro + Business + Enterprise): adds a mid-market step; useful when you have meaningful Business-tier-only features (SSO, audit logs, compliance)

**Don''t**:

- 5+ tiers (decision paralysis; nobody picks)
- 1 tier (everyone gets everything; no upgrade path)
- 2 tiers without Free (high friction to start)
- Inconsistent naming across docs / pricing page / sales

For my product:
- Number of tiers (3 or 4)
- Buyer persona for each
- Price band

Output:
1. The tier shape
2. The named buyer persona per tier
3. The price band per tier
```

The biggest unforced error: **adding a tier because a competitor has it.** "Should we add a $499/mo Business tier?" — only if you have a real Business-tier buyer with distinct needs from Pro. Tiers proliferate when founders mirror competitors instead of mapping to actual customers. Three good tiers > five mediocre ones.

## The Dividing Lines That Actually Work

The hardest part of tier design is what differentiates one tier from the next. Get this right.

```
Help me pick the dividing lines between tiers.

The five proven dividing lines:

**1. Volume / Usage**

The most common and easiest to explain.

Examples:
- Free: 1K API calls/mo. Pro: 100K. Business: 1M. Enterprise: custom.
- Free: 3 projects. Pro: 25. Business: unlimited.
- Free: 100 emails/day. Pro: 10K/day. Business: 100K/day.

Pros: clean to communicate; aligns price with value
Cons: works only when usage is metric-able

**2. Seats / Users**

Standard for collaboration tools.

Examples:
- Free: 1 user. Pro: $20/user (10+ users). Business: $40/user (with SSO).
- Free: 5 users. Pro: 20 users included. Business: unlimited.

Pros: scales with team; predictable for buyers
Cons: doesn''t reflect heavy / light usage per seat

**3. Feature gating**

Some features only in higher tiers.

Examples:
- Free: basic features. Pro: advanced features. Business: admin features.
- Free: standard integrations. Pro: premium integrations. Business: custom.

Pros: clear "value-add" per tier
Cons: can feel arbitrary if features are gated for revenue rather than persona-fit

**4. Governance / compliance**

Mid-market+ buyers need governance.

Examples:
- Pro: standard SAML. Business: SSO + audit logs. Enterprise: custom DLP.
- Pro: shared compute. Business: dedicated. Enterprise: VPC isolation.
- Pro: 30-day data retention. Business: 1 year. Enterprise: custom.

Pros: matches procurement requirements; legitimate higher pricing
Cons: only for B2B; doesn''t help self-serve

**5. Support / SLA**

The differentiator that scales infinitely without product changes.

Examples:
- Free: community support. Pro: email 1 business day. Business: chat 4hr. Enterprise: 1hr 24/7.
- Free: no SLA. Pro: 99.5% uptime. Business: 99.9%. Enterprise: 99.95% custom.
- Free: docs only. Pro: onboarding videos. Business: dedicated CSM. Enterprise: implementation team.

Pros: easy to differentiate; valuable for enterprise
Cons: requires you to actually deliver the support (don''t over-promise)

**Combining dividing lines**:

Strong tier design uses 2-3 dividing lines together:
- Volume + governance: "Pro = 10K calls + standard auth; Business = 100K + SSO"
- Seats + features: "Pro = 20 seats + advanced features; Business = unlimited + admin tools"
- Volume + support: "Pro = 100K calls + email support; Business = 1M + dedicated CSM"

The dividing lines should map to RECOGNIZABLE buyer thresholds:
- "We just hit 50 employees" → time for SSO → Business tier
- "We just crossed 1M API calls" → time for higher volume → Business tier
- "Procurement is asking for an MSA" → time for Enterprise

**The "natural threshold" test**:

Read your dividing lines aloud. Does each one map to a moment in a customer''s life where they''d say "yes, that''s us now"?

If yes: clean tiers.
If no: arbitrary; redesign.

For my product:
- 2-3 dividing lines that fit
- The natural-threshold check per line
- The buyer-said-yes test

Output:
1. The dividing lines per transition (Free→Pro, Pro→Business, Business→Enterprise)
2. The threshold language ("when you reach X, upgrade to Y")
3. The decision-aid for buyers
```

The biggest dividing-line mistake: **gating features that have no buyer-segment connection.** "Pro has CSV export; Free doesn''t" — why? If CSV export is a $20/mo difference, you''re not segmenting buyers; you''re just charging for a single feature. Real dividing lines map to who the customer is, not what arbitrary feature you''re holding hostage.

## What Goes in the Free Tier

The Free tier is where 80% of pricing-page debates happen. Get the principles right.

```
Help me decide what goes in the Free tier.

The two Free-tier strategies:

**Strategy A: Generous freemium (the "land everywhere" play)**

- Free is genuinely useful for individual / small use
- Acts as a permanent acquisition channel
- Conversion to Pro happens when team / usage grows

Examples: Notion, Figma, Slack, Linear

When to use:
- Bottom-up adoption (individual users → team adoption → company)
- Freemium drives word-of-mouth
- Free → Pro conversion well above 2-5%
- Marginal cost per free user is low

**Strategy B: Limited starter (the "evaluate then decide" play)**

- Free is genuinely limited; can''t run real production
- Used as evaluation / proof-of-value
- Forces conversion by month 2-3

Examples: Datadog, Snowflake, MongoDB Atlas free tier

When to use:
- Top-down adoption (CFO / VP signs the contract)
- Per-user marginal cost is meaningful
- Free abusers are a real problem

**The hybrid**:

Most modern indie SaaS run a blend:
- Free is generous for individual / hobbyist use
- Limits trigger naturally when team grows or usage scales

Specific limits to consider:

**Time-based limits** (free trials):
- 14 days free; then pay
- Forces conversion decision
- Per [free-trial-vs-freemium](free-trial-vs-freemium.md)

**Volume limits** (most common):
- Free: 100 X / month; Pro: 10K X / month
- Natural ceiling for individual users

**Seat limits**:
- Free: 1-3 users; Pro: more
- Forces team upgrade

**Feature limits**:
- Free: basic dashboard; Pro: analytics
- Risky if features are core; works if features are advanced

**The "free tier abuse" problem**:

Some free tiers attract users who never convert and consume infrastructure:
- Heavy free users → infrastructure cost
- Spammers / fraud
- Affiliate / referral abuse

Mitigations:
- Hard limits (not just throttles)
- Email verification required
- Phone verification for high-cost actions
- Rate limits per IP / account

**The "what NOT to put in free" rule**:

- Anything that''s genuinely expensive per-user (heavy compute, large storage)
- Features that distinguish your enterprise positioning (SSO, audit logs)
- Premium integrations you pay for per-API-call

**The "Free tier should be enough that..."**:

A sole-founder running a side project should be able to use your Free tier productively for 3-6 months before they need to upgrade. If they hit limits in week 1, the Free tier is too tight (and Pro feels obligatory rather than optional). If they never hit limits in 2 years, Free is too generous.

For my product:
- Strategy (A / B / hybrid)
- Specific limits in Free
- Abuse mitigations
- The "individual user productive for X months" test

Output:
1. The Free-tier definition
2. The limits with rationale
3. The abuse-prevention plan
4. The conversion path from Free → Pro
```

The biggest Free-tier mistake: **giving away too much.** Free tier with unlimited everything except 1 small feature trapped in Pro = nobody upgrades. Free tier should be useful, not exhaustive. The point of Free is acquisition + evaluation, not solving the entire problem at zero cost.

## What Goes in Pro / Growth Tier

This is your money tier. Most customers should land here. Design accordingly.

```
Help me design the Pro / Growth tier.

The Pro-tier principles:

**1. Pro should solve the real problem**

If Pro is "Free + 5 more features," buyers feel nickle-and-dimed. Pro should be "the version that actually does the job."

**2. Pro should be priced for the typical buyer**

Calculate: what does a typical paying customer (mid-tier ICP) pay your competitors?

- Significantly higher → you''re overpriced; reduce
- Significantly lower → you''re underpriced; raise (per [raise-prices](../4-convert/raise-prices.md))
- Within 20% → you''re calibrated

**3. Pro should be usable as a real production tool**

Buyers shouldn''t need to upgrade to Business for basic production functionality.

**4. Pro should have a clear ceiling**

Heavy usage / large teams should naturally hit Pro''s ceiling and need Business.

**Pro-tier feature checklist**:

- [ ] Real volume (sufficient for production use)
- [ ] Sufficient seats (3-20 typical for B2B)
- [ ] Standard integrations (Slack, Google, etc.)
- [ ] Standard support (email response within 1-2 business days)
- [ ] Self-serve access to most features
- [ ] No artificial governance gating that hurts production use

**What''s NOT in Pro**:

- SSO / SAML (this is Business+)
- Audit logs (Business+)
- Custom retention policies (Business+)
- Dedicated CSM (Business+)
- Custom contracts (Enterprise)
- Premium SLAs (Business+ or Enterprise)

**Pricing the Pro tier**:

Common shapes:
- Flat: $49/mo or $79/mo or $99/mo (whole-number anchors)
- Per-seat: $20-50/user/mo with minimum
- Tier-based: $79/mo for X usage; auto-upgrade if exceeded
- Hybrid: $49/mo base + $X per Y over threshold

**The "70% should be on Pro" rule**:

If <30% of paying customers are on Pro, your Pro tier is too tight (everyone goes to Business or churns).
If >85% are on Pro, your Business tier isn''t differentiated enough (no upsell path).

Target ~60-70% of paying customers on Pro.

**The "value-band" pricing test**:

A Pro buyer should feel:
- "This is reasonable for what I get"
- "I''m getting more value than I''m paying"
- "If I can grow my team / usage, I''ll need to upgrade"

If any feel false: re-tune.

For my product:
- The Pro definition
- The Pro pricing
- The 70% test (fits today?)
- The path from Pro to Business

Output:
1. The Pro feature list
2. The Pro pricing
3. The fit test (% of customers on Pro)
4. The upgrade triggers to Business
```

The biggest Pro-tier mistake: **making Pro "Free + a single feature."** Buyers see this; they hate it; they don''t convert. Pro should feel like the "real product" — not Free with one less artificial limit. If the only difference between Free and Pro is "remove the watermark," you''re not packaging; you''re extorting.

## What Goes in Business / Team Tier

The Business tier is where governance + SSO + audit-trail features live.

```
Help me design the Business / Team tier.

The Business-tier principles:

**1. Business is for "the company is taking this seriously"**

When a team grows past ~20 people and IT / security gets involved, they need:
- SSO / SAML
- Audit logs
- Per-user governance
- Compliance features
- Higher SLAs

**2. Business is the procurement-ready tier**

Procurement asks for SSO + audit logs + DPA + SOC 2. Business answers yes to all.

**3. Business pricing should reflect the size of the buyer**

If Pro is $79/mo, Business should be $300-1000/mo (3-10x). Larger jump justifies the governance features and higher support.

**Business-tier feature checklist**:

- [ ] SSO / SAML (Okta, Azure AD, Google Workspace)
- [ ] Audit logs (per [audit-logs-chat](https://www.vibeweek.com/6-grow/audit-logs-chat))
- [ ] Role-based permissions (per [roles-permissions-chat](https://www.vibeweek.com/6-grow/roles-permissions-chat))
- [ ] Higher volume / more seats
- [ ] Better SLA (99.9% uptime)
- [ ] Faster support (4-hour response; chat)
- [ ] Optional: dedicated success manager
- [ ] Optional: custom onboarding

**What''s NOT in Business**:

- Custom contracts (Enterprise)
- Custom DPAs / MSAs (Enterprise)
- Dedicated infrastructure (Enterprise)
- Custom development (Enterprise)
- Highest-tier SLA (99.95%+) (Enterprise)

**Pricing the Business tier**:

- Flat: $299/mo or $499/mo or $999/mo
- Per-seat: $50-150/user/mo with minimum 10-25 seats
- Often annual-only (forces real commitment)

**The "is this a real Business tier?" test**:

If a Business-tier customer''s features are 80% the same as Pro, it''s not differentiated. Strong Business tier requires:

- Different buyer persona (CTO/CIO buying, not developer)
- Different procurement path (legal, security review)
- Different feature set (governance, not just volume)

If those don''t apply: collapse Business into Pro and have just Pro + Enterprise.

For my product:
- Whether Business tier is justified
- The Business feature differentiation
- The Business pricing
- The Business buyer persona

Output:
1. The Business definition
2. The Business pricing
3. The "real tier" test
4. The fallback (collapse if not justified)
```

The biggest Business-tier mistake: **adding it because "competitors have one."** If your Pro tier already includes most of what mid-market buyers need, you don''t need Business. Some products skip Business entirely and go Pro → Enterprise. That''s clean. Adding a half-baked Business tier creates confusion.

## What Goes in Enterprise

Enterprise is where pricing becomes deal-by-deal. Set up the framework; negotiate inside it.

```
Help me design the Enterprise tier.

The Enterprise principles:

**1. Enterprise is "Contact Us"**

- No published price (typically)
- Sales-led (per [self-serve-vs-sales-led](../4-convert/self-serve-vs-sales-led.md))
- Custom terms negotiated per deal

**2. Enterprise is for procurement-heavy buyers**

Need:
- Custom MSA / DPA
- Negotiated SLAs (per [service-level-agreements](https://www.vibeweek.com/6-grow/service-level-agreements-chat))
- SOC 2 / ISO / HIPAA compliance proofs
- Custom onboarding
- Dedicated CSM
- Possibly dedicated infrastructure

**3. Enterprise pricing reflects deal complexity**

Typical entry: $25K-100K/yr ACV. Below that: not really Enterprise.

**Enterprise tier feature list**:

- [ ] Everything in Business
- [ ] Custom contract / MSA / DPA
- [ ] Custom SLA (95-99.95% based on negotiation)
- [ ] Dedicated CSM
- [ ] Custom onboarding (white-glove implementation)
- [ ] SOC 2 / HIPAA / FedRAMP / industry-specific compliance
- [ ] Dedicated infrastructure (sometimes)
- [ ] Volume discounts at scale
- [ ] Multi-year deals
- [ ] Optional: source code escrow
- [ ] Optional: custom development

**The "Contact Us" alternative — published Enterprise pricing**:

Some modern SaaS publish Enterprise starting price ($50K/yr) to:
- Disqualify under-budget buyers early
- Build trust with mid-market
- Reduce sales-time-to-disqualify

Tradeoffs:
- Published price = competitors know your floor
- Published price = harder to negotiate down
- Published price = procurement has anchor

**Pick "Contact Us" if**:
- ACV varies widely (10x range)
- You''re still calibrating
- Enterprise sales is bespoke

**Pick "Starting at $X" if**:
- ACV is consistent
- You want to disqualify fast
- You want to build trust

**Enterprise sales motion**:

- Demo (per [sales-demo-calls](../4-convert/sales-demo-calls.md))
- Proof-of-concept / pilot
- Procurement / legal review
- Multi-stakeholder negotiation
- Annual contract (per [annual-contract-negotiation](../4-convert/annual-contract-negotiation.md))

**Don''t**:

- Sell Enterprise without dedicated capacity to deliver
- Over-promise on SLAs / compliance you can''t honor
- Discount aggressively without value justification
- Sign open-ended liability or compliance promises

For my product:
- Whether Enterprise tier is appropriate today
- The Enterprise feature list
- "Contact Us" vs "Starting at"
- The Enterprise sales motion

Output:
1. The Enterprise definition
2. The pricing approach (Contact / Starting)
3. The minimum ACV for Enterprise
4. The sales-readiness check
```

The biggest Enterprise-tier mistake: **selling Enterprise too early.** A solo founder selling a $25K Enterprise deal with a custom DPA, SLA negotiation, and dedicated CSM commitment is creating a 12-month support obligation they can''t honor. Enterprise tier should match capacity. Better: leave Enterprise as "Contact Us" and only engage when ready.

## The "Most Popular" Badge — Use It Strategically

The "most popular" / "recommended" badge on the pricing page is one of the highest-leverage design choices.

```
Help me decide which tier gets the "most popular" badge.

The principle:

The "most popular" badge isn''t descriptive (where customers actually go) — it''s prescriptive (where you WANT customers to go).

**Two strategies**:

**Strategy A: Recommend the tier you want most customers on**

- Typically Pro or Growth
- This is where you make money sustainably
- Most customers should land here

**Strategy B: Recommend the tier with best margin**

- Sometimes Business (higher margin per seat)
- Drives upgrade behavior
- Riskier; some customers feel manipulated

**Most companies do Strategy A**:

- Pro is "most popular"
- Customers self-select that tier
- 60-70% of customers end up there

**The pricing-page placement**:

- Pro / Most-popular tier in the middle
- Pricing card slightly elevated / different color
- "Most popular" badge clear and visible
- Sometimes "Recommended for teams" or "Best for growing teams" copy

**A/B testable**:

- Switching badge from Pro to Business → does Business uptake rise?
- Adding badge at all → does conversion rise?

Most experiments show the badge increases concentration on the badged tier. Use it.

**Don''t**:

- Badge the most expensive tier (looks greedy)
- Badge multiple tiers (defeats the purpose)
- Make it small or hidden (point is signal)
- Promise things on the badge that aren''t true ("90% of customers" if 30% of customers actually pick it)

For my pricing page:
- Which tier gets the badge
- The placement / design
- The A/B test plan

Output:
1. The badged tier
2. The visual treatment
3. The post-launch test plan
```

The biggest badge mistake: **no badge at all.** A pricing page with three identical-looking tiers has decision paralysis built in. The badge is anti-paralysis: "you''re probably this person; pick this tier." Use the badge.

## Iterate, Don't Redesign Constantly

Tier design isn''t one-shot, but it isn''t weekly either. Build the cadence.

```
Help me set up packaging review cadence.

The cadence:

**Monthly**:

- Track tier-mix (% on each tier)
- Track upgrade rate (Free→Pro; Pro→Business)
- Track downgrade / churn rate per tier
- Identify customers stuck below their natural tier

**Quarterly**:

- Review whether tier mix matches strategy (~70% Pro?)
- Check competitor pricing-page changes
- Review customer feedback on tier dividing lines
- Identify any features to move between tiers (rarely; only if signal is clear)

**Annually**:

- Major packaging review
- Consider price increase (per [raise-prices](../4-convert/raise-prices.md))
- Add / remove tiers if buyer landscape has shifted
- Update pricing page

**Event-driven**:

- New competitor with different packaging → react carefully
- Major feature launch → decide tier placement before launch
- Customer feedback pattern (5+ asks for X feature in Y tier) → consider moving

**The "stable tier names" rule**:

Tier names should outlast specific feature lists.
- "Pro" can mean different things over years
- "100K API plan" goes stale when API changes
- Use persona-based names (Free / Starter / Pro / Team / Business / Enterprise) not feature-based ones (Basic / Advanced / Premium)

**Anti-patterns**:

- Redesigning pricing every quarter (signals confusion)
- Letting tiers proliferate (5+ tiers = decision paralysis)
- Changing tier feature lists without updating sales docs
- A/B testing the entire structure simultaneously (chaos)

**The "lock pricing for 12 months" rule**:

After a major packaging change, lock the structure for 12 months minimum.
- Customers / sales need time to learn
- Data accumulates for analysis
- Frequent changes destroy trust

Within those 12 months, OK to:
- Add features to existing tiers
- A/B test specific copy / layout
- Adjust limits within reason

NOT OK:
- Restructure tier definitions
- Change tier names
- Move signature features between tiers

For my pricing:
- Current tier-mix
- Stability score (last redesign date)
- Quarterly review calendar
- Annual review date

Output:
1. The current tier-mix vs target
2. The cadence calendar
3. The "next review" agenda
4. The lock-pricing-for-12-months commitment
```

The biggest review-cadence mistake: **changing pricing as a vibes-based project.** "Founder went to a SaaStr talk and decided we need 5 tiers now." Pricing changes affect every customer; they should be data-driven and quarterly at most. Reactivity erodes the predictability that makes pricing pages convert.

## Avoid Common Pitfalls

Recognizable failure patterns.

```
The packaging mistake checklist.

**Mistake 1: Too many tiers**
- 5+ tiers; decision paralysis
- Fix: 3-4 max

**Mistake 2: Arbitrary feature gates**
- "Pro has dark mode; Free doesn''t"
- Fix: dividing lines map to buyer personas

**Mistake 3: Free tier too generous**
- Real production use possible on Free
- Fix: tighten limits; force upgrade path

**Mistake 4: Free tier too tight**
- Can''t evaluate; nobody signs up
- Fix: enable real evaluation

**Mistake 5: Pro feels like a pay-wall**
- Pro = Free + a couple features behind paywall
- Fix: Pro is the "real product" tier

**Mistake 6: Business tier undifferentiated**
- Business = Pro + bigger numbers (no real value adds)
- Fix: real differentiation (SSO, audit, CSM) or collapse to 3 tiers

**Mistake 7: No "most popular" badge**
- Decision paralysis; conversion rate suffers
- Fix: badge Pro

**Mistake 8: Inconsistent across docs / sales / pricing page**
- Sales says one thing; docs another
- Fix: single source of truth

**Mistake 9: Frequent restructuring**
- Pricing changes every quarter
- Fix: lock 12 months minimum

**Mistake 10: Enterprise without capacity**
- Selling Enterprise commitments you can''t honor
- Fix: don''t sell Enterprise until ready

**The quality checklist**:

- [ ] 3-4 tiers, not more
- [ ] Each tier has a clear buyer persona
- [ ] Dividing lines map to natural thresholds
- [ ] Free tier enables real evaluation
- [ ] Pro tier is the "real product"
- [ ] Business tier (if exists) has real governance value
- [ ] Enterprise tier has capacity to deliver
- [ ] "Most popular" badge on Pro
- [ ] Tier names persona-based (not feature-based)
- [ ] Stable for 12+ months
- [ ] 60-70% of paying customers on Pro
- [ ] Sales / docs / pricing page consistent

For my packaging:
- Audit against checklist
- Top 3 fixes

Output:
1. Audit results
2. Top 3 fixes prioritized
3. The "ship the v2 packaging" plan
```

The single most-common mistake: **packaging that''s reverse-engineered from features instead of designed forward from buyers.** A founder lists every feature, distributes them across three tiers, and calls it pricing. The result: tiers feel arbitrary; sales has to explain them; conversion suffers. Packaging done right starts with "who buys, why, and at what threshold do they upgrade?" Features map to the persona, not vice versa.

---

## What "Done" Looks Like

A working pricing-packaging design in 2026 has:

- 3-4 named tiers with distinct buyer personas
- Dividing lines tied to recognizable buyer thresholds (volume / seats / governance / SLA)
- Free tier enables 3-6 months of meaningful individual use
- Pro tier is the "real product" — 60-70% of paying customers land here
- Business tier (if present) has real governance differentiation (SSO + audit logs + CSM)
- Enterprise tier sells only when capacity exists to deliver
- "Most popular" badge on the tier you want most customers on
- Stable structure for 12+ months at a time
- Quarterly review of tier-mix and competitor changes
- Sales / docs / pricing page aligned on the same definitions

The hidden cost of weak packaging: **lost conversions you never see.** A buyer hits the pricing page, can''t figure out which tier fits them, and leaves. They never email; they just go to a competitor with a clearer page. The packaging isn''t a contract; it''s a navigation aid. If buyers can''t self-route, you''re bleeding revenue silently — and the only fix is design, not discounting.

## See Also

- [Pricing Strategy](pricing-strategy.md) — pricing model selection (companion guide)
- [Free Trial vs Freemium](free-trial-vs-freemium.md) — entry mechanic decision
- [Pricing Page](../4-convert/pricing-page.md) — how the tiers are displayed
- [Pricing Experiments](../4-convert/pricing-experiments.md) — iterating on tiers
- [Self-Serve vs Sales-Led](../4-convert/self-serve-vs-sales-led.md) — motion match
- [Raise Prices](../4-convert/raise-prices.md) — when to update pricing
- [Expansion Revenue](../4-convert/expansion-revenue.md) — how tiers drive upgrades
- [Free-to-Paid Conversion](../4-convert/free-to-paid.md) — the upgrade moment
- [Annual Contract Negotiation](../4-convert/annual-contract-negotiation.md) — Enterprise negotiation
- [Comparison Pages](../4-convert/comparison-pages.md) — tier comparison vs competitors
- [Ideal Customer Profile](ideal-customer-profile.md) — informs tier persona definitions
- [Value Proposition](value-proposition.md) — informs what each tier promises
- [VibeWeek: Service Level Agreements](https://www.vibeweek.com/6-grow/service-level-agreements-chat) — Business / Enterprise SLA design
- [VibeWeek: Roles & Permissions](https://www.vibeweek.com/6-grow/roles-permissions-chat) — Business-tier governance feature
- [VibeWeek: Audit Logs](https://www.vibeweek.com/6-grow/audit-logs-chat) — Business-tier governance feature

[Back to Day 1: Position](README.md)
