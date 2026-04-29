[Back to Day 3: Distribute](README.md)

# Run Paid Ads Without Lighting Money on Fire

*Most indie founders run paid ads the way they cook unfamiliar food — by feel. They turn on Google Ads with a $20/day budget, point it at "B2B SaaS founders", and three weeks later have $400 of impressions, 12 trials, 0 paying customers, and the conviction that "paid ads don't work." The version that works is structurally different — narrow targeting against a specific intent signal, a creative-and-landing-page system that converts, daily measurement against a budget kill-switch, and the discipline to keep most of your spend off paid ads until you've validated the unit economics on a small test.*

## Why Most Indie SaaS Paid Ads Fail

Three failure modes hit founders the same way:

- **The "I'll just turn on Google Ads with our brand keywords" plan.** Founder runs ads on terms they're already ranking for organically. CPC is high because the keyword is competitive in their category. Click-through is "decent" but most clicks would have happened organically anyway. Net new revenue: zero. The ads are eating the organic conversion and feeling like growth.
- **The "broad targeting + cheap CPC" trap.** Founder targets "anyone interested in productivity" or "small business owners" because the audience is huge and the CPC is low. The ads do get clicks; the clicks come from terrible-fit prospects who don't convert. CAC is computable but LTV from ad-acquired customers is half organic; payback period is 24+ months. The math fails after 3 months when the founder finally calculates real LTV.
- **No conversion tracking, no attribution.** Founder runs ads, the dashboard says "342 conversions" — but those are Google's pixel-fired conversion events for "page view" or "form submit on a page that had a form on it." Real signups in Stripe over the same period: 18. The vendor-reported number is hallucination. The founder doesn't notice for 6 weeks.

The version that works is structured: pick the right channel for your motion, narrow the targeting against a specific intent signal, build a creative-and-landing-page system that converts, run small tests with a kill-switch budget, instrument *real* attribution to revenue, and scale only what proves out.

This guide assumes you have already done [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md) (you need to know which intent signals match your buyer), have completed [Channel Selection](channel-selection.md) (paid is one of the candidate channels), have shipped a [Landing Page](../1-position/landing-page-copy.md) and [Pricing Page](../4-convert/pricing-page.md) (the destinations), and have [Analytics Setup](../4-convert/analytics-setup.md) running (you can't measure what isn't instrumented).

## When Paid Ads Are and Aren't Right

**Run paid ads when:**
- You have at least 50-100 paying customers and clear conversion data (you can compute realistic CAC and LTV)
- ARPA is $30+/month or annual is $300+ (the math needs unit economics)
- You can identify specific intent signals — keywords people search, problems they post about, communities they join — that map to buying intent (not just "interest")
- Your activation rate is healthy (paid acquired-customers won't activate at higher rates than organic; if organic activation is poor, paid will be too)
- You have a working landing page that converts organic traffic at a reasonable rate (paid traffic converts at 50-80% of organic at best — fix the page first)

**Skip paid ads when:**
- You're pre-PMF or pre-revenue (paid traffic is a bad way to find PMF)
- ARPA is below $20/month with no annual plan
- You can't track signup → trial → paid → retained (without attribution, you're flying blind)
- Your category has very low search intent (some categories are conference-led, not search-led)
- Your team can't sustain a 1-hour/week ad-management cadence (paid ads decay without weekly attention)

## The Five Paid Channels That Work for B2B SaaS in 2026

Pick deliberately based on motion. Each has different intent signals, creative formats, and unit economics.

### 1. Google Search Ads
Buyer is searching for a problem; you're showing up. Highest-intent paid traffic.

- **Cost**: $1-$50 CPC depending on keyword competition; B2B SaaS terms cluster $5-$15
- **Conversion**: best-in-class (high intent); 2-8% click-to-trial
- **Best for**: products that solve a clearly-searched problem ("CRM for [niche]", "vs [competitor]", "how to [job-to-be-done]")
- **Setup difficulty**: medium — keyword research + ad copy + landing pages + match types + negative keywords
- **Ongoing time**: 1-2 hours/week

### 2. LinkedIn Ads
Targeting by job title, company size, industry. Highest-quality B2B targeting available.

- **Cost**: $7-$15 CPC; $50-$200 CPL (cost per lead); $25-$60 CPM (impressions)
- **Conversion**: medium; 1-3% click-to-trial; quality is high
- **Best for**: mid-market B2B SaaS targeting specific roles (CMOs, founders, ops leads)
- **Setup difficulty**: medium-high — audience setup + creative + landing pages + lead-gen forms vs. click-through
- **Ongoing time**: 1-2 hours/week
- **Special note**: LinkedIn Lead Gen Forms convert higher than click-through ads — use them for capture, even if you have to import to your funnel manually

### 3. Reddit Ads
Targeting by subreddit + keyword + interest. Strong for technical/dev tools and indie founders.

- **Cost**: $0.50-$2 CPC (cheapest of the major B2B-relevant channels in 2026)
- **Conversion**: variable; high if your product fits the subreddit's audience
- **Best for**: developer tools (target r/programming, r/startups, r/saas), indie SaaS, technical buyers
- **Setup difficulty**: medium — Reddit's ad UX is rougher than Google/LinkedIn
- **Ongoing time**: 1-2 hours/week
- **Special note**: avoid promoted posts that look like ads; the most-converting Reddit ads feel like Reddit-native content (per [Reddit Launch Strategy](../5-launch/reddit.md))

### 4. X / Twitter Ads
Targeting by interests, follower-similarity, keywords. Strong for tech-Twitter audiences.

- **Cost**: $1-$5 CPC; CPM varies wildly
- **Conversion**: variable; depends heavily on creative
- **Best for**: products with audiences active on X (developer tools, AI tools, indie SaaS, certain B2B SaaS)
- **Setup difficulty**: medium — targeting options are decent; creative format matters most
- **Ongoing time**: 1-2 hours/week
- **Special note**: organic-style threads sponsored as ads outperform traditional ad creatives 2-3x

### 5. Meta (Facebook + Instagram) Ads
Most powerful targeting + creative options for B2C and visual products.

- **Cost**: $0.50-$3 CPC; CPM tied to creative quality
- **Conversion**: variable; can be great for B2C, weaker for B2B
- **Best for**: B2C SaaS (consumer apps, prosumer tools), visual products, products targeting specific demographics
- **Setup difficulty**: high — Meta's ads ecosystem has the deepest features but also the most complexity
- **Ongoing time**: 2-4 hours/week
- **Special note**: pixel + offline conversion uploads are essential for measurement; without them you're flying blind

For most indie B2B SaaS in 2026: start with Google Search (highest intent) + Reddit (cheapest cost-per-experiment). Add LinkedIn if your buyer is procurement-track. Skip Meta unless you're B2C or prosumer.

## 1. Pick the One Channel to Test First

Don't spread spend across three channels in week one. Pick one; learn it; expand.

```
Help me pick the single first paid channel to test for [your product] at [your-domain.com]. My ICP is [from your ICP work]. My ARPA is [$X/month]. My current paid customer count is [N].

The decision tree:

**Are people searching for what you solve?**
- Yes → Google Search Ads first. Highest intent, cleanest measurement.
- No → next question

**Is your buyer a specific role at a specific company size?**
- Yes (e.g., "VP of Marketing at SaaS companies 50-500 employees") → LinkedIn Ads
- No → next question

**Is your buyer a developer or technical practitioner?**
- Yes → Reddit Ads (target relevant subreddits) or X Ads
- No → next question

**Is your product B2C or visual / consumer-feel?**
- Yes → Meta Ads
- No → reconsider whether paid ads are right for you (some categories don't work paid)

For my situation, output:
1. The recommended first channel with rationale
2. The next 2 channels to test in order, after the first one proves out (or fails)
3. The reason NOT to start with each of the others (specifically what's wrong about them for my product)

Sanity check: if all four "no" answers, the recommendation may be "paid ads is not your fastest channel; revisit organic first via [SEO Strategy](../2-content/seo-strategy.md) and [Building in Public](building-in-public.md)."
```

Three principles I've watched founders re-learn:

- **Concentrated spend on one channel beats spread spend on three.** $3K/month on Google Search alone produces actionable data; $1K each across three channels produces noise.
- **Match the channel to the intent signal, not to where you already have an audience.** Some founders default to "I'll run Twitter Ads because I have followers there" — but their followers are people who already know them; paid Twitter Ads don't reach those people more.
- **Your category may not have a paid channel.** If you sell highly-specialized B2B software with a 6-month consideration cycle and a $50K ACV, paid ads may genuinely not be the right channel — sales-led outbound and conferences may dominate.

---

## 2. Set Up Real Conversion Tracking First

Before any ad spend, get attribution working. Otherwise you'll spend 3 months optimizing the wrong metric.

```
Help me set up conversion tracking for paid ads. Goal: I can attribute Stripe revenue back to specific ad campaigns / keywords / creatives.

The full attribution chain:

1. **UTM parameters on every ad URL**:
   - utm_source = google / linkedin / reddit / x / meta
   - utm_medium = paid
   - utm_campaign = [campaign-name-2026-Q2]
   - utm_term = [keyword-or-audience]
   - utm_content = [ad-variant-A or B]
   - All lowercase; no spaces; no special characters

2. **Server-side conversion tracking**:
   - When a user completes signup, capture the UTMs they arrived with
   - Store on the user record (first_touch_utms + last_touch_utms separately)
   - When the user converts to paid via Stripe webhook, fire a server-side event with the UTMs
   - This means: Stripe-confirmed paid signups attributed to the original UTMs

3. **Pixel / tag installation** (channel-specific):
   - Google: Google Ads conversion tag + Google Tag Manager
   - LinkedIn: LinkedIn Insight Tag
   - Reddit: Reddit Pixel
   - X: X Pixel
   - Meta: Meta Pixel + offline conversion uploads (CRITICAL post-iOS 14 for accuracy)
   - Set up server-side events as the source of truth, with pixel-fired events as supplementary

4. **PostHog instrumentation**:
   - Capture utm_* on every page view
   - User-level "first touch" persists across sessions
   - Custom property: ad_acquired = true if first_touch_utms shows paid

5. **Reporting layer**:
   - Spreadsheet or BI dashboard showing per-campaign:
     - Impressions
     - Clicks
     - Click-through rate
     - Cost
     - Trial signups (server-side counted)
     - Trial-to-paid conversions
     - Paid customer count
     - Stripe revenue
     - CAC ÷ ARPA = months-to-payback
     - LTV (rough estimate, refined as cohort matures)

6. **Sanity check**: monthly, cross-reference Stripe revenue from ad-attributed customers vs. Google/LinkedIn/etc. dashboard reports. They will differ. The Stripe truth wins; the platform reports usually overstate by 30-100%.

Output:
1. The UTM convention and naming rules
2. The server-side webhook code that captures + persists UTMs
3. The pixel installation code per channel
4. The PostHog config
5. The dashboard schema
6. The monthly reconciliation process
```

The single most consequential setup: **Stripe-attributed conversion as the truth source.** Platform-reported conversions are inflated; only Stripe-confirmed paid signups matter for unit economics. Build the pipeline before spending any money.

---

## 3. Build the Creative + Landing Page System

The ad is one half. The landing page is the other half. Both must match.

```
Help me design the ad creative + landing page system for [your channel].

**Match-the-promise principle**: the ad copy and the landing page must say the same thing. If your ad promises "AI-native CRM for indie SaaS founders", the landing page H1 should be "AI-native CRM for indie SaaS founders" (or close to it). Mismatched promise = bounce + wasted spend.

**Ad creative for [chosen channel]**:

For Google Search Ads:
- 3-5 headlines (30 char max each), 2-3 descriptions (90 char each)
- Include the keyword in the headline
- Include the value prop and the differentiation
- Use ad extensions: sitelinks (4-6), callouts (4-6), structured snippets, lead form extension if applicable

For LinkedIn Ads:
- Sponsored Content (in-feed) or Message Ads (DM-style)
- Image / single-image / video / carousel
- Headline (70 char), intro (150 char), descriptive text (350 char)
- Image: 1200x627px; show product or outcome, not stock
- A/B test 4-6 creative variants

For Reddit Ads:
- Native-feeling promoted post
- Headline (300 char) — make it look like a Reddit post, not an ad
- Image or video
- Avoid corporate logos / branded creative; Reddit users tune those out

For X Ads:
- Promoted Tweet
- Make it feel like an organic tweet from the founder
- Single image, carousel, or video

For Meta Ads:
- Image or video; video usually wins
- Square (1:1) or vertical (4:5); Stories: vertical (9:16)
- Strong hook in first 3 seconds for video

Anti-patterns across all channels:
- Logo-heavy creative
- Stock-photo people in suits
- "Click here to learn more" CTAs (specific CTAs convert 30-50% better)
- Generic "improve your business" copy
- Multiple competing CTAs in one ad

**Landing page**:

Dedicated landing page per ad campaign (or per match-group). NOT the homepage.

Page structure:
- H1 matches the ad's promise (verbatim is OK; rephrase only if necessary)
- Sub-headline: the supporting promise
- One CTA above the fold ("Start free trial" / "See pricing" / "Book a demo")
- Social proof (1-2 customer logos OR a stat OR a quote)
- 3 specific outcome statements (not feature lists)
- One concrete demo/screenshot
- Second CTA at end of page
- No navigation that takes the user away from the conversion goal

Per [Landing Page Copy](../1-position/landing-page-copy.md) for the broader copy framework. The paid-ad-landing-page is the streamlined version.

Output:
1. The 4-6 ad creative variants for the chosen channel
2. The 1-3 dedicated landing pages (one per major ad-group / message theme)
3. The H1 / CTA combinations to A/B test on the landing pages
4. The PostHog event tracking on the landing page (CTA clicks, scroll depth, time on page)
```

Three rules that prevent the worst outcomes:

- **Match the promise.** Any disconnect between ad and landing page = bounced traffic = wasted spend.
- **Dedicated landing page per campaign.** Generic homepage as the destination converts at 30-50% of a dedicated page.
- **Single CTA per page.** Multiple CTAs split conversion intent; pick one and stick.

---

## 4. Run a Kill-Switch Test

Don't commit to a channel before validating it. Set a small budget with a clear stop criterion.

```
Design the test plan for the chosen channel.

**Test budget**: $1,500-$3,000 over 2-3 weeks. Enough to generate statistical signal; small enough that failure is non-fatal.

**Daily cap**: $100-$200/day, hard-limited.

**Kill criteria** (any of these triggers immediate pause):
- Daily spend > $200 with zero conversions for 3 consecutive days
- Cost-per-acquired-customer > 3x your blended CAC after 50+ trials
- Click-through rate < 0.5% across all variants
- Bounce rate > 80% on the landing page (page-creative mismatch)

**Daily monitoring** (15 minutes / day):
- Spend pacing on track
- Click-through rates
- Trial signups (raw count)
- Any spike in bounce rate or drop in time-on-page

**Weekly review** (1 hour / week):
- Per-campaign / per-keyword / per-creative breakdown
- Pause underperforming variants
- Increase budget on winning variants by 20-30% (NOT 100% — Google's algorithm penalizes abrupt budget changes)
- Update negative keyword list (terms triggering ads but not converting)
- Check Stripe attribution against platform reports

**End-of-test review** (after 2-3 weeks):
- Total spend
- Total trials acquired
- Trial-to-paid conversions to date (some still in trial; project conservatively)
- Estimated CAC
- Estimated LTV (this is the wobbly number; cohort doesn't have history yet)
- Months-to-payback
- Decision: kill, scale (2-3x), or continue at current spend

For [my product specifically], output:
1. The exact test budget I should run
2. The daily monitoring dashboard I should bookmark
3. The weekly review template
4. The kill-criteria thresholds tuned to my unit economics
5. The "scale" criteria: when do I increase budget?
```

The single most important habit: **the kill-switch.** Founders who don't pre-commit to a stop criterion keep spending against weak signals because "it might work next week." It usually doesn't. The 3-week test, ended on time, produces actionable data.

---

## 5. Don't Over-Optimize Creative; Optimize Conversion Path

Most founders spend 80% of their paid-ads time on ad copy. The leverage is in the conversion path.

```
Help me audit the full paid-ads conversion path. The goal: the ad does its job (gets a click); everything after must convert that click to revenue.

The path:
1. Ad → Landing page (page load < 2 seconds; copy matches promise)
2. Landing page → Signup (CTA clear, friction low)
3. Signup → Activation (per [Activation Funnel](../../../VibeWeek/6-grow/activation-funnel-chat.md))
4. Activation → Trial-to-paid (per [Trial-to-Paid Conversion](../../../VibeWeek/6-grow/trial-to-paid-chat.md))
5. Paid → Retention (per [Reduce Churn](../4-convert/reduce-churn.md))

For each step, audit:
- What's the conversion rate?
- What's the dropoff?
- Where's the biggest leak?
- What 1-2 changes would meaningfully shift it?

Common leaks ranked by founder-pain:

**Leak #1: Landing page bounces high (50%+).**
- Fix: Match-the-promise check. Are you driving traffic with a keyword that doesn't match the page's H1?

**Leak #2: Signup form too long.**
- Fix: Reduce required fields to email + password (or magic link). Each additional field cuts conversion 5-10%.

**Leak #3: Signup confirmation experience.**
- Fix: Don't send a "verify your email" wall. Sign them in immediately; verify later via a non-blocking nudge.

**Leak #4: Activation rate of paid-acquired customers is much lower than organic.**
- Signal: paid traffic is reaching the wrong audience. Tighten targeting, even if it means smaller volume.

**Leak #5: Trial-to-paid conversion is much lower for paid traffic.**
- Signal: paid users are price-sensitive (saw the ad, probably comparison-shopping). Strengthen activation, paywall positioning, and the trial-end experience.

Output:
1. The conversion-rate dashboard for each step, segmented by traffic source (organic vs paid, paid vs ad campaign)
2. The diff: where does paid underperform organic by step?
3. The fix priorities — pick the 1-2 highest-leverage fixes
4. The monthly review cadence
```

The biggest mistake: spending another week optimizing ad copy when the landing page bounce rate is 65%. The leak is later in the funnel; that's where the money is.

---

## 6. Branded Search Ads (Yes or No?)

Specific question every founder hits: "should I bid on my own brand name?"

```
Help me decide whether to bid on my own brand keywords (e.g., "[your product]" or "[your company name]").

The argument for:
- Competitors might bid on your brand (Drift bids on "[other competitor name]"); this displaces them
- You control the messaging customers see (specific landing page, specific offer)
- Cheap CPC (your brand has high quality score)

The argument against:
- You'd rank #1 organically anyway
- The clicks you "earn" from brand bids would have been organic
- You're paying for traffic that was free

The data-driven answer:
- Run a brand-bid test for 2 weeks; turn it OFF for 2 weeks. Compare total trial signups attributed to brand search.
- If signups drop materially with brand bids off, competitors are stealing your traffic; bid defensively.
- If signups don't drop, brand bids are wasted spend.

Most indie SaaS in 2026:
- Year 1 (low brand awareness): skip brand bidding
- Year 2 (some brand awareness, occasional competitor bidding): defensive brand bids on the brand exact-match keyword (~$50-200/mo budget)
- Year 3+: ongoing defensive bidding plus competitor-name bidding if procurement-track buyers compare

Output:
1. The brand-bid recommendation for my stage
2. The defensive-bid budget if applicable
3. The competitor-name bid policy (only if your competitive positioning is strong; otherwise skip)
```

The middle-ground answer: **defensive brand bids if competitors are bidding on you; skip otherwise.** Run the test; let data decide.

---

## 7. Scale What Works, Sunset What Doesn't

After 1-2 months of data, you'll know which campaigns / keywords / creatives are winning. Concentrate there.

```
Build the scale-and-sunset workflow.

Monthly review:

**Per campaign**:
- CAC ÷ blended CAC: <1x = beat blended (scale), 1-1.5x = match blended (hold), >1.5x = below blended (optimize or sunset)
- Trial signups vs. last month
- LTV trend (when cohort matures)
- Trends in CTR, bounce rate, conversion rate

**Decision matrix**:
- Winners (CAC <1x blended, signups stable or growing): increase budget 20-30%/month
- Holders (CAC 1-1.5x blended): hold budget; optimize creative / landing page
- Losers (CAC >1.5x blended after 60+ days): sunset; redirect spend to winners

**Sunset gracefully**:
- Pause the campaign (don't delete; might re-test later)
- Document what was tried and why it didn't work
- Free up the budget for the next test

**Scale carefully**:
- Increase budget by 20-30% every 2 weeks (not 100% in one move; algorithms re-learn audience and performance dips)
- Watch for diminishing returns: as you scale, CAC creeps up because you're reaching less-qualified audiences. Plot CAC against budget to find the curve's elbow.
- The "elbow" point: where adding $1 of spend produces less than $1 of marginal customer LTV. That's the cap.

Output:
1. The monthly review template
2. The CAC-vs-budget curve for my channel
3. The sunset documentation template
4. The reinvestment heuristic (which winners get the budget freed by sunsetting losers)
```

The most-undersold discipline: **knowing when to stop scaling.** Founders who keep increasing budget past the elbow point burn money for vanity growth. Profitability per dollar is the real metric; total spend is not.

---

## 8. Don't Treat Paid as Your Primary Channel (Usually)

A reality check most founders skip: paid ads are rarely the dominant channel for indie B2B SaaS. They supplement; they don't substitute.

```
Help me set realistic expectations for paid ads' contribution to my MRR.

Healthy benchmarks for indie B2B SaaS in 2026:

- **Year 1**: paid contributes 10-25% of new MRR if it's working. If it's contributing >50%, you're either over-relying on paid (CAC will spike when you scale) or your other channels are starved.
- **Year 2-3**: paid contributes 15-30% in steady state for most B2B SaaS. The remainder comes from SEO, content, building in public, customer referrals, and warm outbound.
- **Mid-market+**: paid can grow to 30-50% of new MRR with sufficient budget, but typically requires brand investment in parallel (not just ads).

The composition of healthy growth:
- Organic search (SEO content) + AEO/GEO: 20-40%
- Founder-led / building in public: 10-30%
- Customer referrals + word-of-mouth: 10-30%
- Outbound (sales-led or cold outreach): 0-20% depending on motion
- Paid ads: 10-30%
- Other (events, partnerships, press): 5-15%

If your channel mix is 80% paid: that's a structural risk. Paid CAC inflates as you scale; the other channels compound. Without them, you're running on a treadmill.

Output:
1. The current channel-mix analysis for my MRR (split new MRR by source)
2. The healthy-mix benchmark for my stage
3. The diversification plan: which channels to invest in alongside paid
4. The "we're over-relying on paid" early-warning signal
```

The most useful framing: **paid ads buy time; organic channels build moat.** Pure-paid acquisition stops the day you turn off the spigot. Channel diversification is what builds a business that doesn't need to keep paying for distribution.

---

## What Done Looks Like

By end of week 4 of running paid ads:
1. **One channel chosen** with rationale
2. **Conversion tracking instrumented** with Stripe-attributed source-of-truth
3. **Creative + landing page system** built (4-6 variants + 1-3 pages)
4. **Test budget running** with daily monitoring + weekly review cadence
5. **Kill criteria set** and reviewed weekly
6. **First decision**: scale, hold, or sunset based on real data

Within 90 days:
- Clear answer to "is paid working?" — yes (scale) or no (sunset)
- If yes: 5-15% of new MRR attributable to the channel
- Per-campaign / per-keyword / per-creative dashboard mature enough to run by data not gut
- Healthy CAC payback: under 12 months for self-serve, under 18 for sales-led

Within 12 months:
- Paid ads in steady-state contribution to MRR (10-30% if it's working)
- Other channels invested in alongside (per [Channel Selection](channel-selection.md))
- A library of historical experiments documenting what works for your specific product

---

## Common Pitfalls

- **Spreading $3K across three channels in week one.** Concentrate spend; learn one channel; expand.
- **Not setting up Stripe-attributed conversion.** Platform-reported conversions are inflated 30-100%.
- **Generic homepage as ad destination.** Dedicated landing pages convert 1.5-2x better.
- **Pre-PMF paid spend.** You can't buy your way to PMF; finding it requires close customer relationships, not optimized funnels.
- **No kill switch.** Founders who don't pre-commit to stop criteria spend their way to ruin.
- **Optimizing ad copy when the leak is in the landing page.** Audit the full funnel; fix the biggest leak.
- **Ignoring negative keywords.** Your Google Ads spend evaporates on irrelevant searches without an aggressive negative keyword list.
- **Bidding on broad, generic terms.** "Project management software" is competitive and noisy. Long-tail keywords convert 3-5x better.
- **Scaling 100% in one budget change.** Algorithms re-learn; performance temporarily drops; founders panic and revert. Scale 20-30% per fortnight.
- **Treating paid as the primary channel.** It supplements; it doesn't substitute. Diversify or you're on a treadmill.

---

## Where Paid Ads Plug Into the Rest of LaunchWeek

- [Channel Selection](channel-selection.md) — paid is one of the candidate channels evaluated
- [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md) — informs targeting + intent signals
- [Ideal Customer Profile](../1-position/ideal-customer-profile.md) — anchor for targeting decisions
- [Competitive Positioning](../1-position/competitive-positioning.md) — informs ad creative + landing page messaging
- [Landing Page Copy](../1-position/landing-page-copy.md) — the destination for paid traffic
- [Pricing Page](../4-convert/pricing-page.md) — alternative landing-page destination (often higher CAC payback)
- [Demo Video](../2-content/demo-video.md) — creative for video ads (Meta, X, LinkedIn)
- [Analytics Setup](../4-convert/analytics-setup.md) — instrumentation prerequisite
- [A/B Testing](../4-convert/ab-testing.md) — for landing-page experiments after paid traffic exists
- [Reduce Churn](../4-convert/reduce-churn.md) — paid-acquired customers churn at higher rates than organic; this matters
- [Newsletter Sponsorships](newsletter-sponsorships.md) — alternative to programmatic paid
- [Influencer Marketing](influencer-marketing.md) — alternative to programmatic paid
- [SEO Strategy](../2-content/seo-strategy.md) — long-term complement; many paid winners come from keywords already ranking organically

## Verdict

Paid ads work for indie SaaS in 2026 when used surgically — narrow targeting, real attribution, kill-switch discipline, dedicated landing pages, and weekly optimization. They fail when used as the primary growth lever or when set up without proper measurement.

For most readers: start with one channel, $1.5-3K test budget, 2-3 weeks, kill-switch criteria pre-committed. Scale what works; sunset what doesn't. Diversify across channels rather than over-relying on paid alone.

The team that runs paid ads with this discipline can sustain a small but reliable channel contribution for years. The team that turns on Google Ads "to see what happens" usually turns them off six weeks later, $4K poorer and convinced "paid ads don't work" — when in fact they hadn't actually run paid ads correctly for a single hour.

---

[Back to Day 3: Distribute](README.md)
