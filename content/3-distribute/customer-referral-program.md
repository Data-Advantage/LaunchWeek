[Back to Day 3: Distribute](README.md)

# Customer Referral Programs: Turn Happy Customers Into Your Cheapest Channel

Most SaaS founders confuse referrals with affiliates. They're not the same. Affiliates are third-party marketers who promote your product for commission; referrals are existing customers recommending the product to people they know. Customer referral programs are the highest-CAC-efficiency channel in SaaS — referred customers convert at 3-5x higher rates and have 2x lower churn than other channels — but most founders ship a half-baked "give $50 get $50" widget, see no traction, and abandon the lever.

A working referral program answers: when to launch (post-PMF, not before), what to reward (cash / credit / product / status / nothing), who to reward (referrer only, both, or neither), how to make sharing easy (no clunky form), how to attribute fairly (which referrer gets credit), and how to operate it without it becoming a margin-eroder. Done well, referrals drive 20-40% of new customers at near-zero CAC. Done badly, you give away $50K in credit to people who would have paid anyway.

This guide is the playbook for designing, launching, and running a referral program. Distinct from [Affiliate Program](affiliate-program.md) (third-party marketers) and [Customer References](../4-convert/customer-references.md) (logos for sales).

## What Done Looks Like

By end of this exercise:

- Decision: do we launch a program now, or wait?
- Reward structure (referrer / referee / both / neither) chosen
- Reward amount calibrated to CAC and ACV
- Sharing UX in product (one-click share, copy-link, email-invite)
- Attribution model (cookie / link param / unique code)
- Tracking dashboard for referral pipeline
- Anti-abuse rules
- Quarterly review cadence with metrics

This pairs with [Affiliate Program](affiliate-program.md), [Customer References](../4-convert/customer-references.md), [Customer Case Studies](../2-content/customer-case-studies.md), [Activation Metric Definition](../4-convert/activation-metric-definition.md), [Reduce Churn](../4-convert/reduce-churn.md), [Free to Paid](../4-convert/free-to-paid.md), [Pricing Strategy](../1-position/pricing-strategy.md), [Onboarding Flow](../4-convert/onboarding-flow.md), [Email Sequences](../2-content/email-sequences.md), [Founder Brand](founder-brand.md), [Building in Public](building-in-public.md), [Community Seeding](community-seeding.md), and [Conversion Rate Optimization](../4-convert/conversion-rate-optimization.md).

## When (and Whether) to Launch

```
Help me decide if a referral program makes sense.

The prerequisites:

**1. Product-market fit (real, not aspirational)**
You need customers who would recommend you organically already.
Test: NPS > 50 OR organic referrals already happening informally.
If you're at NPS 20, fix the product before paying people to refer.

**2. Repeatable activation**
Referee can self-serve to value in <1 week.
If onboarding requires 2-week implementation, referrals stall — referrer's friend tries, hits friction, gives up.

**3. ACV > $0**
Free products: nothing to give back; share-the-love programs work but minimal lever.
$10-100/mo: small reward works.
$100+/mo: meaningful reward worth running.
Enterprise ($10K+/yr): different game — see "Enterprise referrals" below.

**4. Sales motion supports it**
Self-serve product: easy referral path (signup → trial → convert).
Sales-led: referral becomes "warm intro" — different mechanic.

**5. Margin to share**
Reward should be < 20% of first-year revenue per referee.
Example: $100/mo product = $1,200 ARR; reward up to $200-400 sustainable.

The "wait" signals:
- NPS < 30
- Activation rate < 30%
- Churn > 5%/mo (you'd just be acquiring customers who churn)
- < 100 paying customers (volume too low for stat-sig referral signal)

The "go" signals:
- NPS 50+, organic word-of-mouth happening
- Activation rate 40%+
- Churn < 3%/mo
- 500+ active customers
- Founder has heard "I should refer X to you" from > 5 customers

For my company:
- NPS / health
- Customer count
- Margin

Output:
1. Verdict: launch / wait
2. If wait: which prerequisite to fix first
3. If launch: timeline (4-8 weeks for v1)
```

The most common mistake: **launching a referral program to fix slow growth**. Referrals amplify existing love. They don't manufacture love. If your product isn't working, paying people to invite their friends produces churn, not growth.

## Reward Structure: Five Models

```
Help me pick a reward model.

The five models:

**1. Single-sided (referrer gets reward)**

Referrer: $100 credit / cash / month free
Referee: nothing extra (just signs up at standard pricing)

Pros: simple; aligns incentive with referrer; lower per-referee cost
Cons: referee feels less special; lower conversion

Examples: traditional SaaS

**2. Single-sided (referee gets reward)**

Referrer: nothing
Referee: 50% off first month / extended trial / bonus credit

Pros: lowers friction for new sign-up; works pre-PMF
Cons: referrer has no incentive — relies on goodwill alone

Examples: many B2C SaaS at launch

**3. Double-sided (both get rewards) — DEFAULT FOR SAAS**

Referrer: $50 credit when referee converts
Referee: $50 credit on first month / 20% off / extended trial

Pros: aligns both sides; best conversion rates
Cons: 2x the reward cost per successful referral

Examples: Dropbox (the canonical example), Airtable, Notion (historically)

**4. Cash-only (referrer cash, referee discount)**

Referrer: cash payout (PayPal / bank transfer)
Referee: discount on subscription

Pros: cash motivates more strongly than credit
Cons: 1099 reporting; tax complexity; legal compliance; sometimes signals "this is just an affiliate program"

**5. Status / non-monetary (recognition; access)**

Referrer: badge in product; access to private community; early-access features
Referee: standard pricing

Pros: zero cost; works for high-status communities
Cons: only works for status-driven categories; doesn't scale

Examples: Linear (early), Superhuman (waitlist invites)

For my company:
- ACV
- Margin tolerance
- Customer psychology

Output:
1. Recommended model
2. Reward amount
3. Why
```

The 2026 default for B2B SaaS: **double-sided credit-based reward**. Both sides win; credit (vs cash) keeps margin in product; calibration is straightforward.

## Calibrating the Reward Amount

```
Help me calibrate the reward.

The math:

**1. Calculate your blended CAC**
Total Sales+Marketing spend / new paid customers per period.
Indie: $50-200. Mid-market: $200-2000. Enterprise: $2K+.

**2. Calculate referral CAC (without reward)**
Just the operational cost: tracking, support, fraud handling.
Usually < $20.

**3. Reward should be 30-60% of blended CAC**

Example:
- Blended CAC: $300
- Reward: 30-60% × $300 = $90-180
- Double-sided $75 referrer + $75 referee = $150 reward → still under blended CAC

**4. Sanity check vs ACV**

Reward < 20% of first-year ACV.
$1,200 ACV → max $240 reward.

**5. Calibration by relationship type**

For credit-based programs:
- $50/mo product → $20 referrer + $20 referee credit
- $100/mo product → $50 + $50
- $300/mo product → $100 + $100
- $1000/mo product → $250 + 1 month free

For cash-based (less common):
- 10-20% of first-year revenue, payable on customer's 90-day mark
- Minimum threshold ($25)
- Maximum cap ($1000 per referral, prevents abuse)

**6. Prevent margin death**

Cap rewards per referrer per year (e.g. max $2K/yr).
Without cap, top referrers can wipe out a quarter of margin.

**Examples 2026**:
- Notion (historical): 5% lifetime credit; double-sided
- Dropbox (peak): 500 MB per side per referral, capped at 16 GB
- Airbnb: $25 referrer + $25 referee
- Tesla: $1000 referee credit when referee orders (single-sided in some periods)
- Many B2B SaaS: 1 month free per side

For my product:
- ACV
- CAC
- Margin

Output:
1. Recommended reward amount
2. Cap per referrer per year
3. Cap per referee
4. Cooldown rules
```

The mistake to avoid: **giving cash for the same dollar amount as credit**. Credit costs you marginal dollars; cash costs you actual dollars. A $100 in-product credit may cost you $5 in COGS; $100 cash costs you $100. Default to credit unless your business is non-recurring.

## The Sharing UX

The reward structure means nothing if sharing isn't easy. Most SaaS referral programs fail at the share interface.

```
Help me build the sharing UX.

The principles:

**1. One-click share**

Bad: form with "enter friend's email" and 5 fields
Good: button → "Copy your referral link" → goes to clipboard

**2. Multiple share methods**

In the modal:
- Copy link (default)
- Email pre-filled (mailto: with subject + body)
- Twitter / LinkedIn pre-filled
- WhatsApp / SMS for B2C

**3. Pre-written message**

User: "I think you'd like Acme."
Pre-written: "Hey, I've been using Acme for [use case] — saves me [time/money]. Worth checking out: [link]. You'll get $50 off your first month."

User can edit; default works.

**4. In-product placement**

- Settings → Referrals page
- Top nav: "Refer a friend" link (clean, not aggressive)
- After value moment: "Loving Acme? Refer a friend, get $50" modal (post-activation, not blocker)
- Email signature (optional): "P.S. — I love Acme. Refer here for $50 off."

**5. Track everything**

Each generated link is unique to the referrer.
Tracked: clicks, sign-ups, paid conversions, time-to-conversion.

**6. Mobile-friendly**

Most sharing happens on mobile. Don't ship a desktop-only modal.

**7. Don't over-prompt**

After first share: cool down 30 days before re-prompting same user.
Spam-y prompts kill goodwill.

**Tools**:

Build vs buy:
- **Rewardful** — modern referral SaaS; SaaS-friendly pricing $99-299/mo
- **PartnerStack** — partner + referral; mid-market+
- **Referral Factory** — affiliate-flavored
- **Tolt** — modern Stripe-friendly
- **Friendbuy** — enterprise
- **In-house** — usually 1-2 engineering weeks; custom but full control

For most indie SaaS: build in-house first; switch to vendor when complexity warrants.

For my product:
- Where to surface
- Build vs buy

Output:
1. Sharing modal design
2. Placement plan
3. Tooling pick
```

The single most-skipped detail: **the pre-written message**. If you make the user write the message themselves, 80% bail. If you pre-write a good one, they edit slightly and send. That's the difference between 2% and 20% share rates.

## Attribution: Who Gets Credit?

```
Help me design attribution.

The mechanics:

**Link-based attribution (most common)**:

Referrer's link: app.com/?ref=abc123
- abc123 = unique referrer code
- Cookie set on referee's browser (90-day TTL typical)
- On signup, attribute to referrer code

Schema:
```sql
CREATE TABLE referrals (
  id UUID PRIMARY KEY,
  referrer_user_id UUID NOT NULL REFERENCES users,
  referee_user_id UUID REFERENCES users,  -- NULL until signup
  referral_code VARCHAR(20) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  signed_up_at TIMESTAMPTZ,
  paid_at TIMESTAMPTZ,
  reward_credited_at TIMESTAMPTZ,
  reward_amount_cents INT
);
```

**Trigger for reward**:

Don't reward at signup; reward at paid conversion.
- Signup is cheap (free trials abused)
- Paid conversion proves real customer

For free-trial → paid model:
- Reward when trial converts to paid
- AND when 30-day mark passes (refund risk past)

For freemium → paid:
- Reward at first paid month

**Conflict resolution**:

User clicks two referral links. Which wins?
- Last-touch (most common)
- First-touch (fairer to long-burning referrers)
- Self-attribution if user enters code at signup

**Edge cases**:

- Referee already exists in DB (employee at same company on free plan): don't reward
- Referee email matches existing customer's domain: questionable; flag for review
- Referrer refers themselves (different email): block; same-IP / same-device check
- Referee cancels in 30 days: claw back reward

**Self-attribution UI**:

"How did you hear about us? [dropdown]"
If "Friend referral": "Their referral code (optional): [input]"

This catches the case where someone tells a friend verbally; friend signs up direct.

For my product: [tracking infrastructure]

Output:
1. Attribution model
2. Schema
3. Edge-case rules
4. Anti-abuse measures
```

The trade-off most teams get wrong: **last-touch vs first-touch**. Last-touch is easier and matches affiliate norms; first-touch is fairer to early advocates. For B2B SaaS where referrals come months before signup, first-touch is more accurate. For B2C with quick conversion, last-touch is fine.

## Anti-Abuse

Referral programs attract abuse. Cap exposure before launch.

```
Help me set up anti-abuse.

The abuse patterns:

**1. Self-referral**
User creates two accounts; refers themselves; collects reward.
Mitigation: same-IP check; same-device fingerprint; same-payment-method check; manual review for first reward per user.

**2. Mass signup of fake referees**
Single referrer signs up 50 fake accounts.
Mitigation: cap rewards per referrer per month; cap per IP / per device.

**3. Reward then refund**
Referee signs up, refers triggers reward, then refunds.
Mitigation: hold reward until 30 days post-payment; claw back on refund.

**4. Reward farming**
Coupon-stacking: ?ref=abc on existing customer's signup attempt.
Mitigation: only reward NEW emails / never-paid users.

**5. Bot signups**
Automated signup with referral code.
Mitigation: CAPTCHA on signup; bot detection (Vercel BotID / Cloudflare Turnstile); behavioral checks.

**6. Account sharing**
Two users sharing one account → "referrals" between same person across personal/work emails.
Mitigation: company-domain matching; manual review of suspicious patterns.

**The defense layers**:

```
Layer 1: signup CAPTCHA + bot detection
Layer 2: same-device / same-IP cap (max 3 referrals per device/IP per month)
Layer 3: reward held 30 days; clawed back on refund / chargeback
Layer 4: per-referrer monthly cap ($500-2000)
Layer 5: behavioral anomaly detection (e.g. 50 signups in 24h flagged)
Layer 6: manual review of top earners monthly
```

**The honest framing**:

Some abuse is unavoidable. Goal: keep abuse to <5% of program cost.
Aggressive anti-abuse hurts legit users; leniency invites farming.
Tune by watching the numbers monthly.

For my program:
- Risk tolerance
- Volume expected

Output:
1. Defense layers
2. Caps / thresholds
3. Monitoring queries
```

The single most-effective anti-abuse: **hold the reward until 30 days post-payment**. Most fraud collapses because the fraudster can't afford to wait or because their fake card refunds. A 30-day hold is invisible to legit users (most don't notice when reward arrives) and kills 80% of abuse.

## Operating the Program

```
Help me operate the program.

The metrics to track:

**Top of funnel**:
- Active referrers (% of users who shared at least once)
- Shares per referrer
- Click-through rate from share

**Conversion**:
- Referee signup rate (clicks → signups)
- Referee activation rate
- Referee paid conversion rate
- Referred LTV / churn vs other channels

**ROI**:
- Reward cost per referred customer
- Referred CAC = reward × 2 / paid conversions
- Compare to blended CAC

**Anti-abuse health**:
- % of rewards clawed back
- % of suspicious referrals flagged
- Top referrers list (review monthly)

**Targets**:
- Active referrer rate: 5-15%
- Share-to-signup conversion: 5-15%
- Referred conversion vs other channels: 1.5-3x higher
- Referred churn vs other channels: 1.5-2x lower
- Referred CAC: 30-60% of blended CAC

**Cadence**:

Weekly:
- Pipeline view (shares → signups → paid)

Monthly:
- Top referrer list
- Anti-abuse review
- Reward cost vs budget

Quarterly:
- Reward calibration (raise / lower / change structure)
- A/B test reward variants
- Compare referred-customer cohort vs other channels

For my program: [stage]

Output:
1. KPI dashboard fields
2. Cadence
3. Owner
4. Targets
```

The metric to anchor on: **referred customer LTV / CAC ratio vs other channels**. If referred customers have 3x LTV / CAC of paid-ad customers, double down on referrals. If 1.5x, healthy. If 1x or below, your program isn't working — either reward is too high or referees are wrong-fit.

## Enterprise Referrals (Different Game)

```
Help me think about enterprise referrals.

For $10K+/yr ACV, the dynamics change:

**Why traditional referrals don't work**:
- Decision-maker isn't an end-user
- Reward to end-user looks like a kickback (compliance issue)
- Sales cycle is 3-12 months — referral attribution decays
- ACV justifies dedicated sales motion

**What works instead**:

**1. Customer advisory board / VIP program**:
Selected enterprise customers get:
- Early access to features
- Direct line to product / executive team
- Speaking spots at user conference
- Influence on roadmap
In exchange: warm intros to peers in their network.

**2. Reference program**:
Customers who allow themselves to be cited / called by prospects.
Reward: account credit, conference passes, exec-team thank-you, gift cards.

**3. Champion-led referrals**:
Identify champion in customer org; ask "who else in your network has this problem?"
Champion makes warm intro; reward is non-monetary (status, swag, exec recognition).

**4. Co-marketing partnerships**:
Joint webinars, case studies, conference talks with referenceable customer.
Indirectly drives referrals; aligns with [Customer Case Studies](../2-content/customer-case-studies.md).

**5. Per-deal referral fees (rare)**:
$1000-5000 cash per closed enterprise deal referred.
Compliance-check first — many enterprise buyers prohibit referral fees.

**The framing**:
Enterprise referrals are RELATIONSHIPS, not programs.
Founder-led; sales-team-supported; not automated.

For my motion:
- Stage
- Customer profile

Output:
1. Enterprise-referral strategy
2. Roles / owners
3. Timeline expectation
```

The honest framing: **enterprise referrals don't fit the "program" mold**. They're a sales motion. Build relationships; ask champions for intros; reward with status not cash; close deals through warm pipeline. Don't put a "Refer a friend" widget in your enterprise dashboard.

## What Done Looks Like

A working customer referral program delivers:
- 10-30% of new customers from referrals at 30-60% of blended CAC
- Active referrer rate > 5% of paying users
- Referred customers with 1.5-3x better LTV vs other channels
- Referred customers with lower churn vs other channels
- Anti-abuse cost < 5% of program cost
- Quarterly review on leadership calendar
- Sharing UX in product (one-click; pre-written message)
- Attribution working (link-based; 90-day cookie; reward at paid conversion)
- Caps preventing margin damage
- Tooling matching scale (in-house at indie; vendor at mid-market+)

The proof you got it right: ask a happy customer "would you refer Acme?" — they say yes, immediately know how (because UX is in product), and follow through. Your dashboard shows referrals as a top-3 channel by 12 months in.

## See Also

- [Affiliate Program](affiliate-program.md) — third-party marketers (different from referrals)
- [Customer References](../4-convert/customer-references.md) — references for sales (different from referrals)
- [Customer Case Studies](../2-content/customer-case-studies.md) — written stories from customers
- [Activation Metric Definition](../4-convert/activation-metric-definition.md) — referees must activate to convert
- [Reduce Churn](../4-convert/reduce-churn.md) — referrals only work if you don't churn fast
- [Free to Paid](../4-convert/free-to-paid.md) — referees follow free-to-paid path
- [Pricing Strategy](../1-position/pricing-strategy.md) — referral reward calibrates against pricing
- [Onboarding Flow](../4-convert/onboarding-flow.md) — referees onboarded same as cold signups
- [Email Sequences](../2-content/email-sequences.md) — referrer follow-up; referee welcome
- [Founder Brand](founder-brand.md) — strong founder brand multiplies referrals
- [Building in Public](building-in-public.md) — public posts drive informal referrals
- [Community Seeding](community-seeding.md) — communities are referral multipliers
- [Conversion Rate Optimization](../4-convert/conversion-rate-optimization.md) — referee landing page
- [VibeWeek: Referral Program Implementation](https://vibeweek.dev/6-grow/referral-program-chat) — technical implementation
