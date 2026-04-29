[Back to Day 3: Distribute](README.md)

# Run an Affiliate Program That Actually Drives Revenue

*Most indie SaaS affiliate programs are graveyards. Two affiliates posting once each year, $40 in tracked revenue, and a public dashboard that quietly broadcasts that nobody cares. The version that works is small, deliberately recruited, and structurally different — fewer affiliates doing more volume, paid more, with assets that make their job possible.*

## Why Most Affiliate Programs Fail

Three patterns repeat across hundreds of indie launches:

- **Open-door recruitment with low payouts.** Founder turns on Rewardful or Lemon Squeezy affiliates, opens the program to anyone with an email, sets 20% lifetime, and waits. The signups come from coupon-site farms and SEO mercenaries who never drive a real customer. The actual people who could move volume — newsletter operators, niche YouTubers, course creators with audience overlap — never apply because they don't search "[your product] affiliate program."
- **No co-marketing assets.** Even good affiliates who sign up can't promote what they can't explain. If the only thing you give them is a referral link, they will treat the program as a curiosity. Programs that actually generate revenue ship affiliates a Notion page with copy variants, screenshots, demo videos, swipe-ready tweets, prewritten newsletter blurbs, and an updates feed when product changes.
- **Commission economics that punish the affiliate's customers.** A 30% recurring affiliate commission on a $20/mo plan = $6/mo per referred customer for the life of the customer. Sounds great until you realize the affiliate has to send 50–100 visitors to convert one customer, gets paid $6 the first month, and abandons your program by month 3 because the math is worse than display ads. Affiliates who drive volume need either large up-front bounties or strong recurring with a high ARPA.

The version that works flips all three: hand-pick the first 5–10 partners, give them a media kit and a real human relationship, and pay them enough that the unit economics make sense for both sides.

## When You Should and Shouldn't Run an Affiliate Program

**Run an affiliate program if:**
- ARPA is $30+/mo or you have a strong annual / lifetime deal at $200+
- Your product has a clearly identifiable adjacent audience (e.g., "course creators" → Teachable, Kajabi, Maven; "writers" → Substack-style content; "agency owners" → community-led growth)
- You have 50+ paying customers and clear conversion data so you can price the commission realistically
- You have at least one [building in public](building-in-public.md) presence or warm distribution to seed the program

**Don't run one if:**
- You're below 50 paying customers (you don't have enough conversion signal — the math will lie to you)
- ARPA is below $20/mo and you have no annual plan (commission economics fail)
- Your audience overlaps with no obvious creator niche (then your real distribution is paid ads, SEO, or partnerships — see [Partnerships](partnerships.md))
- You haven't shipped your [pricing page](../4-convert/pricing-page.md) yet (you can't measure whether referred traffic converts at the same rate as organic)

## The Math Affiliates Need to See

Before you set rates, understand what an affiliate's worldview looks like.

A creator with a 10,000-subscriber newsletter who promotes you in a sponsored slot expects to earn $300–$1,000 from a single mention. If your affiliate program pays $6/mo recurring on a $20 plan, they need ~30 referred customers from a single mention to match a paid slot — and they have to wait 5+ months for the first dollar to land.

What makes affiliate work for the creator:
- **High-payout one-shot bounty**: $50–$300 per converted paid customer, paid within 30 days. Easy to compare to other revenue.
- **Recurring with annual capture**: 30% recurring for 12 months, paid up front when the annual plan converts. Affiliate sees a $200/yr plan convert and earns $60 immediately.
- **Tiered up-side**: bonus payouts at volume thresholds (10 customers in a month → $500 bonus; 50 customers in a quarter → $5,000 bonus).

What kills affiliate motivation:
- **Tiny commissions on monthly plans without an annual option**: 30% × $20/mo = $6, paid monthly, only while the customer pays. The affiliate is doing your dunning recovery work for $6 a month.
- **Long cookie windows that don't matter**: 90-day cookies sound generous, but if your conversion happens within 7 days, the longer window adds nothing.
- **Hidden clawbacks**: refunds in month 2 retroactively reverse the affiliate's commission. If the affiliate doesn't see the policy clearly, they will get one surprise clawback and quit.

## 1. Define the Two-Tier Structure

Most working programs use two tiers — not because everyone needs them, but because the math is different for two different kinds of partner.

```
You're helping me design a 2-tier affiliate program for [your product] at [your-domain.com]. The product is [one-sentence description] with monthly pricing of $[X] and annual at $[Y]. My current paid customer count is [N] and average customer lifetime is [N] months. I have [yes/no] strong audience overlap with [creator niche, e.g., indie SaaS founders, marketing operators, dev-tool users].

Design the two tiers:

**Tier 1 — Open program** (anyone can apply and get approved within 24 hours):
- Commission rate
- Cookie window
- Payout schedule and minimum threshold
- What anti-fraud rules apply (no self-referrals, no PPC bidding on brand keywords, no incentivized signups)

**Tier 2 — Hand-recruited partners** (5–10 named partners with curated relationship):
- Commission rate (typically higher or with bonus structure)
- Custom co-marketing assets included
- Quarterly check-in cadence
- Bonus thresholds for volume
- Optional: revenue-share on annual deals or lifetime deals

For each tier, output the exact economics in a table comparing:
- Affiliate revenue per converted customer (year 1)
- Your gross margin per referred customer (year 1)
- Break-even traffic each affiliate needs to send to make the program worth their time

Sanity check: if my ARPA is below $30/mo and my CAC payback is over 6 months, recommend either dropping the open tier entirely or making it bounty-only (one-time payment per converted customer, no recurring).
```

The default that works for most indie SaaS in 2026:
- **Open tier**: 20% recurring for 12 months OR a flat $50–$100 bounty per paid signup, whichever the affiliate prefers
- **Partner tier**: 30% recurring lifetime + custom co-marketing + quarterly call

## 2. Choose Your Tracking Stack

You don't need a custom-built affiliate platform. Pick one of three:

**Rewardful** — Stripe-native, popular for SaaS, $49–$299/mo. Strong dashboard, good payouts, dunning-aware (so refunds claw back commission cleanly). Works with Stripe direct, doesn't fight you on integration. Best default for most SaaS.

**Lemon Squeezy / Polar / Paddle** — built-in affiliate features included with the [payment provider](https://www.vibereference.com/auth-and-payments/payment-providers). If you already use one of these as merchant of record, the native affiliate tooling is good enough — fewer moving parts and the math is consistent with the rest of your billing.

**FirstPromoter** — also Stripe-native, comparable to Rewardful, slightly cheaper at smaller volumes. Both Rewardful and FirstPromoter are fine; pick one and stop comparing.

**PartnerStack / Impact / Tune** — enterprise-grade. Skip until you have 50+ active affiliates and need approval workflows, multi-tier commissions, or a real partnership management team.

Avoid building your own. Affiliate tracking is a solved problem, fraud detection is a moat you don't have, and rolling your own attribution will cost you more in lost trust than the SaaS fee.

## 3. Recruit the First 10 Partners by Hand

The single most important step. Open recruitment is a graveyard. Targeted recruitment is the program.

```
You're helping me build a 10-partner recruitment list for my hand-picked affiliate tier.

My ICP is [describe ICP from your customer-discovery work]. My product solves [specific job-to-be-done]. The audiences who already trust authority figures my ICP listens to include:

- [Creator type 1, e.g., indie hacker newsletter operators]
- [Creator type 2, e.g., YouTube developer educators]
- [Creator type 3, e.g., niche course creators]
- [Creator type 4, e.g., consultants and agency owners serving my ICP]

For each of the 4 creator types, generate 3 specific named candidates I should research and reach out to. For each candidate, output:

- Name and main platform
- Estimated audience size
- Why they fit (overlap with my ICP, content cadence that includes recommendations, has run affiliates before for similar products)
- A specific recent piece of theirs (post, video, episode) that shows the overlap
- A 4-sentence personalized cold pitch using the [cold outreach](cold-outreach.md) playbook
- A draft of what their first piece of co-marketing content might look like

Generate 12 candidates total. I'll cut to 10 after research.
```

The pattern is research-first, pitch-second. Skip anyone you can't write a personalized first sentence about — they're not your partner.

## 4. Build the Partner Media Kit

Even great partners need to be given the words. Build the kit before the first partner needs it.

The minimum viable affiliate kit:

**Product overview (1 page):**
- One-sentence description
- Three problems we solve, with specific examples
- Who we're for (echoing the partner's audience)
- Pricing summary (so the partner doesn't quote a wrong number)
- 3–5 customer outcomes with metrics

**Asset library:**
- Brand-approved logo files (light, dark, monochrome)
- 5–10 screenshots covering the most "demoable" features
- 1 demo video (60–120 seconds, no narration — partner adds their own voiceover or embeds with their own intro)
- 1 longer walkthrough video (5–10 minutes, with narration)
- Hero images sized for X, LinkedIn, blog featured-image, YouTube thumbnail, newsletter header

**Copy variants:**
- 5 one-sentence pitches (different angles)
- 3 tweet/X variants (short, with image hint)
- 1 newsletter blurb (150 words)
- 1 newsletter blurb (300 words, includes screenshot placement)
- 1 long-form review template the partner can adapt to their voice
- 5 FAQ entries with pre-written answers

**Mechanics:**
- Their unique referral link
- The commission rate they're on
- Cookie window
- Payout schedule and minimum
- Refund/clawback policy in plain English
- One paragraph on what your customer support will and will not do for their referrals (keeping the partner from accidentally promising things)

**Updates feed:**
- An RSS or email list partners subscribe to so they hear about new features, pricing changes, and case studies before announcing publicly. Partners feel like insiders. Insiders sell harder.

Host all of this on a single Notion page or a Linear/GitBook docs page. One link, kept up to date, that any partner can be sent.

## 5. The First Email to a Hand-Picked Partner

The cold pitch matters disproportionately. Most partner programs die at this email.

```
Subject: One paying customer of [your product] watches your every [post/video/episode]

Hi [name],

[2 sentences proving you've read/watched/listened to their work, naming the specific piece]. The reason I'm reaching out: one of our paying customers, [name or anonymized description], specifically credited [partner's piece] for getting them to think differently about [problem your product solves]. They later signed up for [your product] and they've been on our $[X]/yr plan since [month].

I'm building an affiliate partner program for [product]. We currently pay [tier 2 commission structure — be specific]. We have 5 partners on it now (happy to share who) and we'd like you to be the 6th. I've put together a draft brief showing what a piece of co-marketing for your audience might look like — happy to send if useful.

If the answer is no, no follow-up. If you're curious, can I send the brief?

[your name]
```

Three notes:
- The "we have N partners" line is a soft proof point. Skip it on partner #1; replace with "you'd be the first I'm reaching out to about this."
- The customer-credit line is the strongest opener. If you don't have one, instead lead with their work directly and offer to do a paid sponsored slot in addition to the affiliate option (creators trust paid relationships first; affiliate pays out later).
- The "no follow-up" line dramatically increases reply rates. Most cold outreach feels like a trap; making the no easy makes the yes easier.

## 6. Run the Quarterly Partner Touch

The program dies if you set it and forget it. Quarterly cadence keeps it alive.

Each quarter, with each tier-2 partner:
- A 20-minute call (or a 5-minute Loom both ways if calls aren't their thing)
- You share: customer outcomes from their referrals, recent product changes, upcoming features, what's converting and why
- They share: what their audience is asking about, what content they have planned, what assets they wish they had
- Action items: 1–2 specific co-marketing ideas, with a date

Result: partners feel ownership of the relationship. Programs without this cadence have churn rates >70% in year 1. Programs with it retain 80%+ active partners.

## 7. Measure What Matters

Three numbers per quarter. Anything more is theater.

**Per-partner contribution**: revenue / signups / active referred customers, by partner. Most programs show 80% of revenue from 20% of partners. The data tells you which 20% to invest in.

**Referred customer LTV vs organic LTV**: are referred customers retaining and expanding at the same rate as organic? If LTV is materially lower, your commission economics are wrong (you're acquiring price-sensitive customers who don't fit). Adjust commissions and partner mix.

**Cohort by partner type**: which kind of partner (newsletter / YouTuber / course creator / consultant) drives the highest-LTV customers? Concentrate next quarter's recruitment on that type.

**The vanity metric to ignore**: total clicks. Affiliates love clicks. You don't. Measure paid conversions only.

## 8. Common Failure Modes and How to Avoid Them

- **The forever-monthly affiliate**: the partner posted once, generated $40 in lifetime commission, and the program shows 47 active affiliates in your dashboard. Cull. Mark inactive after 6 months. Send a polite "we love your work but reactivating partners need to be active" email and move on.
- **Brand bidding**: an affiliate runs Google Ads on your brand keyword, intercepts your organic traffic, and earns commission on customers who would have signed up anyway. Catch it with a Google Ads search of your brand from incognito. Ban the affiliate.
- **Coupon-stack abuse**: an affiliate pairs their referral with a public 30%-off coupon, attracting price-shopper customers with bad LTV. Either ban coupon stacking or ban affiliate-promoted coupons (clearer policy).
- **Self-referrals**: affiliate signs up via their own link and gets commission on their own subscription. Always ban; the platforms detect this automatically.
- **Disclosure failures**: in the US, FTC requires affiliate relationships to be disclosed. Make it part of your partner agreement. Helps you and helps them avoid an ugly post-disclosure scandal.
- **Partner discovery failure**: you ship the program and nobody applies. The fix is recruitment, not promotion. The affiliate page on your site is a conversion tool, not a discovery tool. Read [cold outreach](cold-outreach.md) and pitch 30 named partners by hand.

## What Done Looks Like

90 days after launching the program:
- 10–15 hand-recruited partners on the partner tier, of whom 4–6 have driven at least one paid signup
- 50+ approved affiliates on the open tier (volume is fine here, signal is in the partner tier)
- A media kit that any partner can pull from in 5 minutes
- One dashboard you check weekly: revenue, signups, top-3 partners, total payouts due
- A quarterly cadence calendar with every tier-2 partner

12 months in, expect:
- 15–25% of new MRR attributed to affiliate channel for products with strong audience overlap (less for products without natural creator niches)
- 2–3 partners who have become a meaningful share of new revenue and effectively act as paid distribution arms
- A clearer answer than any other channel about who your "lookalike" buyer is — the partner-referred customers reveal segmentation you couldn't see from organic

## Where Affiliate Plugs Into the Rest of LaunchWeek

- [Channel selection](channel-selection.md) — affiliate is one of the 14 channels; this guide is the deep cut
- [Partnerships](partnerships.md) — co-marketing partnerships are a superset; affiliate is the commission-tracked subset
- [Newsletter sponsorships](newsletter-sponsorships.md) — paid is the alternative when affiliate doesn't make sense; many partners do both
- [Cold outreach](cold-outreach.md) — the recruitment muscle for hand-picked partners
- [Building in public](building-in-public.md) — your affiliate-eligible audience starts as building-in-public followers
- [Pricing page](../4-convert/pricing-page.md) — the page partners are sending traffic to; if it doesn't convert, the program won't either
- [First 10 customers](../5-launch/first-10-customers.md) — affiliate is rarely a first-10 channel; revisit this guide once you've reached 50+ paying customers

## Verdict

Affiliate programs are not a growth channel. They are a *concentrated relationship* channel that pays out like a growth channel when run well. The mistake is treating it like SEO — set up a page, wait for the world. The reality is more like business development: hand-pick partners, build assets, do the quarterly call, and earn the trust that turns a referral link into real revenue.

For most indie SaaS in 2026, the affiliate program at year 1 should be 10 hand-picked partners and a dormant open tier. Year 2, expand. Year 3, decide if a Partnerships hire is the next investment.

---

[Back to Day 3: Distribute](README.md)
