[Back to Day 3: Distribute](README.md)

# Demand Generation Playbook: Building a Reliable Pipeline Engine

Most B2B SaaS founders mean three different things when they say "demand gen": (a) "we need more leads from somewhere," (b) "we need a demand-gen marketer," (c) "we need an ABM motion." All three are valid; none is the same. The early-stage pattern: founder runs cold outreach personally, gets first 20 customers; thinks "now we need DEMAND GEN" → hires a marketer → sees pipeline drop because the marketer doesn't know who buys → blames marketing → tries paid ads → spends $50K with $20K of return → quits demand gen. The pattern repeats at every stage.

A real demand generation function is something different: a sustained, multi-channel system that creates predictable pipeline coverage at unit economics that work. It's not "more leads" — it's "pipeline at CAC < LTV/3 across multiple channels we can ramp." Done well, demand gen produces 60-70% of pipeline at growth stage; sales then converts. Done badly, it's a vanity activity disconnected from revenue.

This guide is the playbook for designing demand generation: defining your motion (PLG / sales-led / hybrid), identifying ICP-fit channels, building the funnel + measurement, organizing the team, picking budgets, and scaling. It complements [Cold Outreach](cold-outreach.md) (one channel), [Account-Based Marketing](account-based-marketing.md) (one motion), [Paid Ads](paid-ads.md) (one channel), and many other distribution articles — bringing them together as a system.

## What Done Looks Like

A working demand generation function produces:

- Predictable pipeline coverage (3-4x quota) at unit economics that work
- Multiple channels contributing (no >50% from one channel)
- Funnel measurement at every stage (visit → MQL → SQL → opp → close)
- Per-channel CAC + LTV math
- Quarterly experiments that find new working channels
- Tight collaboration with sales (handoff, feedback loop, MQL→SQL conversion)
- Marketing-attributable pipeline trackable in CRM
- Pipeline coverage 90+ days forward
- ICP-aligned content surface (organic + paid)
- Reliable recurring programs (not one-off campaigns)
- Marketing-sourced ARR > marketing investment by 5-10x

This pairs with [Channel Selection](channel-selection.md), [Cold Outreach](cold-outreach.md), [Account-Based Marketing](account-based-marketing.md), [Paid Ads](paid-ads.md), [SEO Link Building](seo-link-building.md), [LinkedIn Content Strategy](linkedin-content-strategy.md), [Building in Public](building-in-public.md), [Content Marketing (Reference)](../../VibeReference/content/marketing-and-seo/content-marketing.md), [SEO Strategy](../2-content/seo-strategy.md), [Long-tail SEO Content Production](../2-content/long-tail-seo-content-production.md), [Marketing Operations Playbook](../4-convert/marketing-operations-playbook.md), [Marketing Attribution Multi-Touch](../4-convert/marketing-attribution-multi-touch.md), [First Marketing Hire](../4-convert/first-marketing-hire.md), [Pricing Page](../4-convert/pricing-page.md), and [Demand Validation](../1-position/demand-validation.md).

## Step 0: Decide your motion

Demand gen for a PLG product looks completely different from demand gen for an enterprise sales-led product. Match motion to product.

```
Three motion archetypes:

PLG (Product-Led Growth)
- Free tier or free trial; user signs up via website
- Activates inside product before talking to sales
- Sales engages on expansion / enterprise tier
- Demand gen = drive product signups, not "leads to sales"
- Examples: Linear, Notion, Vercel, Figma

KPI cascade:
- Visits → signups (key conversion: 5-15%)
- Signups → activated users (30-70%)
- Activated → paid (5-15%)
- Paid → expansion contact

Demand-gen plays:
- SEO / content (drive visits)
- Product Hunt / Hacker News launches
- Building-in-public / founder brand
- Free tier optimization
- Activation funnel optimization
- Community building

SALES-LED
- Marketing generates lead → sales calls → close
- No self-serve to paid path; or paid path is small
- Higher ACV; longer sales cycle
- Examples: Salesforce, Workday, mid-market B2B with $20K+ ACV

KPI cascade:
- Visits / impressions → MQL
- MQL → SQL (marketing → sales handoff)
- SQL → opp (sales qualifies)
- Opp → close

Demand-gen plays:
- ABM
- Outbound + cold outreach
- Paid ads (LinkedIn / Google)
- Webinars / events
- Content marketing (gated for lead capture)
- Customer references / case studies

HYBRID (PLG + SALES)
- Self-serve for SMB; sales-led for enterprise
- Most growth-stage SaaS in 2026
- Demand gen straddles both
- Examples: HubSpot, Slack, Asana

Demand-gen plays:
- ALL of the above; coordinated
- PLG for top-of-funnel
- Sales-led for enterprise expansion
- Often: free tier as TOFU; sales engages high-value accounts

DEFAULT FOR MOST B2B SaaS:
- Pre-PMF: founder-led; no formal demand gen
- $1-3M ARR: pick motion based on product fit; lean PLG OR sales-led
- $3-30M ARR: hybrid emerges
- $30M+ ARR: hybrid mature

Don't:
- Try to do all motions equally
- Force PLG on enterprise product (no self-serve path)
- Force sales-led on tiny-ACV product (uneconomical)

Output: a clear motion choice that informs every channel + program decision.
```

## Step 1: Identify ICP-Fit Channels

Channels work or don't based on where your ICP spends time + buys. Don't pick because everyone else does.

```
Channel selection by ICP attribute:

By job role / persona:
- Engineers / devops / CTOs → GitHub, Stack Overflow, Hacker News, Reddit r/programming
- Product / Design → Twitter, Substack, designer Slack groups
- Sales / RevOps → LinkedIn (heavy), Reddit r/sales, podcasts
- Marketing → LinkedIn, newsletters (Marketing Brew, etc.)
- HR / People Ops → LinkedIn, HR-specific publications
- Finance → narrower; LinkedIn + targeted publications

By company size:
- SMB (< 50): Reddit, communities, Twitter, Product Hunt
- Mid-market (50-500): LinkedIn, webinars, content
- Enterprise (500+): events, ABM, analyst reports, executive networks

By stage of buying:
- Aware (problem-aware): SEO, content, social
- Considering: comparison content, peer reviews, demos
- Evaluating: trials, sales-engaged, references
- Buying: pricing pages, contracts, security review

Channel scoring:
For each candidate channel, ask:
1. Does my ICP spend time there?
2. Are they in buying mode there (vs. just consuming)?
3. Can I reach them at acceptable CAC?
4. Is there a path to scale beyond founder-led effort?
5. Does it produce intent signals (not just impressions)?

Tier-1 channels (most B2B SaaS in 2026):
- SEO (long-tail content)
- Founder brand on LinkedIn / Twitter
- Reviews on G2 / Capterra (when applicable)
- Cold outreach (when ACV > $5K)
- LinkedIn Ads (when ACV > $20K)
- Webinars / virtual events
- Customer referral program

Tier-2 channels (depends on ICP):
- ABM (when targeting enterprise)
- Paid Search / Google Ads (high-intent)
- Reddit / community engagement
- Podcast guesting
- Conference attendance / event marketing
- YouTube content
- Newsletter sponsorships

Tier-3 (specific niches):
- Print / radio / OOH (rare in B2B SaaS)
- TikTok / Instagram (most B2B doesn't fit)
- Industry-specific publications (vertical SaaS only)

Common mistake: scattering effort across 15 channels. Better: 3-5 channels deeply.

Output: 3-5 channels prioritized for next 12 months.
```

## Step 2: Design the Funnel + KPIs

You can't manage what you don't measure. Define funnel + targets.

```
Universal funnel stages:

For PLG:
1. Visits to website (top-of-funnel)
2. Signups (free tier or trial)
3. Activated users (reached value milestone)
4. Paid conversions
5. Expansion (paid → expanded)

For sales-led:
1. Visits / impressions
2. MQL (Marketing Qualified Lead)
3. SQL (Sales Qualified Lead) — sales accepted
4. Opportunity (deal in CRM)
5. Closed Won

Define each stage:
- MQL: a lead who has shown intent (downloaded gated content, attended webinar, requested demo)
- SQL: a lead a sales rep has confirmed fits ICP + has need + timing
- Opp: a deal in CRM with stage > qualification
- Closed Won: signed contract

Conversion benchmarks (B2B SaaS, sales-led, mid-market+):

Visit → MQL: 1-3%
MQL → SQL: 30-50%
SQL → Opp: 70-80%
Opp → Closed Won: 20-30%

Implied: visit → closed won = 0.05% - 0.4%

Target setting:
1. Start with revenue goal (e.g., $5M new ARR this year)
2. Average ACV (e.g., $20K → 250 deals needed)
3. Win rate (e.g., 25% → 1000 opportunities needed)
4. SQL → opp rate (e.g., 75% → 1333 SQLs)
5. MQL → SQL rate (e.g., 40% → 3333 MQLs)
6. Visit → MQL rate (e.g., 2% → 167K visits)

Required pipeline coverage = 3-4x of revenue goal (account for slip / loss / pushed deals)

Per-channel KPIs:
- Visits sourced
- MQLs sourced
- SQLs sourced
- Pipeline $ sourced
- Closed-Won ARR sourced
- CAC (cost / closed-won)
- LTV / CAC ratio (target: > 3)
- Payback period (target: < 18 months)

Tracking:
- Marketing analytics (PostHog / Amplitude / Mixpanel for product-side)
- CRM (HubSpot / Salesforce for lead/contact-side)
- Attribution (multi-touch via Segment / Attribution / built-in)
- Per-channel UTM discipline

Marketing dashboard:
- Funnel by channel
- Conversion rates
- CAC payback
- Pipeline by source
- ARR trends

Output: targets per stage; per-channel KPIs; dashboard live.
```

## Step 3: Build the Programs (recurring, not one-off)

Demand gen is a program, not a campaign. Programs run continuously.

```
Foundational programs (any motion):

A. SEO content engine
- Identify 50-100 long-tail keywords your ICP searches
- Publish 1-3 articles per week
- Distribute via LinkedIn / newsletter
- Update + refresh quarterly
- Pair with [Long-tail SEO Content Production](../2-content/long-tail-seo-content-production.md)

B. Email lifecycle
- Newsletter (weekly or biweekly)
- Onboarding sequence (post-signup)
- Re-engagement (lapsed users)
- Customer expansion (post-activation)

C. Founder brand
- 3-5x posts/week on LinkedIn (or Twitter, or both)
- Long-form articles (Substack / Medium / blog)
- Podcast guest appearances (1-2 per month)
- Pair with [Founder Brand](founder-brand.md)

D. Customer marketing
- Case studies (1-2 per quarter)
- Customer references for sales
- Customer review requests on G2 / Capterra
- Pair with [Customer Marketing Program](../4-convert/customer-marketing-program.md)

E. Webinar / event program
- Monthly webinars on relevant topics
- Quarterly larger event / co-marketed
- Pair with [Webinars](../2-content/webinars.md)

PLG-specific programs:

F. Free-tier optimization
- Activation funnel iteration
- Onboarding email sequence
- In-product upgrade prompts
- Pair with [Activation Funnel (VibeWeek)](../../VibeWeek/6-grow/activation-funnel-chat.md)

G. Building in public
- Public roadmap
- Founder updates (changelog as content)
- Twitter threads on product progress
- Pair with [Building in Public](building-in-public.md)

Sales-led specific:

H. Outbound program
- 100-300 personalized outreaches per AE per month
- SDR-led for higher volume
- Pair with [Cold Outreach](cold-outreach.md)

I. ABM program
- Top 50-200 target accounts
- Personalized outreach + ad targeting + content
- Pair with [Account-Based Marketing](account-based-marketing.md)

J. Paid ads
- LinkedIn for B2B (ACV > $20K)
- Google Search for high-intent
- Retargeting via Meta / LinkedIn
- Pair with [Paid Ads](paid-ads.md)

Hybrid:

K. Newsletter sponsorships (great for PLG → sales)
- Sponsor relevant newsletters
- Drives signups + brand
- Pair with [Newsletter Sponsorships](newsletter-sponsorships.md)

Cadence rule: 3-5 programs running CONTINUOUSLY, not "we'll do a campaign next month." Programs = compound; campaigns = bursts.

Output: 3-5 active programs running predictably.
```

## Step 4: Organize the Team

Demand gen team scales with stage. Different shapes per stage.

```
Pre-PMF / pre-Series A ($0-1M ARR):
- Founder owns it
- Maybe a part-time content marketer / agency
- No formal demand gen team

Early stage ($1-5M ARR):
- 1 marketing hire (Generalist or Content Marketer)
- Founder still doing significant work
- See [First Marketing Hire](../4-convert/first-marketing-hire.md)

Growth stage ($5-30M ARR):
- 3-8 person marketing team:
  - Head of Marketing (1)
  - Demand Gen Manager (1)
  - Content Marketing Manager (1-2)
  - Marketing Operations (1)
  - Customer Marketing (1)
  - Product Marketing Manager (1; see [First PMM Hire])
- Tight Sales-Marketing alignment

Mid-market ($30-100M ARR):
- 10-25 person marketing team
- Specialized roles: SEO lead, paid ads lead, brand, events, content
- Marketing Ops as a dedicated function

Enterprise ($100M+ ARR):
- 50-200+ person marketing team
- Sub-functions: brand, content, demand-gen, ops, product marketing, customer marketing, events, growth
- Director / VP layer

Roles in detail:

DEMAND GEN MANAGER:
- Owns: pipeline targets, channel mix, paid spend, lead handoff to sales
- Reports to: Head of Marketing
- KPI: marketing-sourced + influenced pipeline

CONTENT MARKETING MANAGER:
- Owns: content production (blog, SEO, gated assets)
- Reports to: Head of Marketing
- KPI: organic traffic, content-driven leads

MARKETING OPERATIONS:
- Owns: martech stack (HubSpot/Salesforce/Marketo), attribution, automation, scoring
- Reports to: Head of Marketing or RevOps
- KPI: data quality, system uptime, attribution accuracy

PRODUCT MARKETING MANAGER:
- Owns: positioning, messaging, launches, sales enablement
- See [First Product Manager Hire (different role)] / specifically a PMM hire
- KPI: launch impact, sales-team confidence, message resonance

CUSTOMER MARKETING:
- Owns: case studies, references, advocacy, expansion content
- KPI: references generated, expansion-attributable revenue

Output: right-shape team for stage; clear ownership.
```

## Step 5: Allocate Budget Sensibly

```
Marketing budget benchmarks (B2B SaaS, varies by stage):

Pre-PMF: spend nothing on programs; founder time is the budget
Early stage ($1-5M): 10-15% of revenue on marketing
Growth stage ($5-30M): 15-25% of revenue
Mid-market ($30-100M): 18-25%
Enterprise: 15-25% (declines as % as company matures)

Within marketing budget:
- People: 50-70%
- Programs (paid ads, events, content production): 20-40%
- Tools (martech): 5-15%

Per-channel allocation rough guide (sales-led B2B mid-market):
- Content / SEO: 20%
- Paid ads (search + social): 20-30%
- Events / webinars: 10-20%
- Outbound (SDR salaries; included in people): n/a
- ABM tools + content: 10%
- Brand / founder: 10%
- Tools / ops: 10%

Per-channel allocation for PLG:
- SEO + content: 30-40%
- Paid (lower than sales-led): 15-20%
- Brand / founder: 20-30%
- Community + events: 10-15%
- Tools: 10%

Sanity-check: each channel should have CAC < LTV/3. If a channel is dragging, fix it or kill it.

Common mistakes:
- Spending big on paid ads pre-PMF (paid scales bad fit)
- Hiring before programs are working (people without playbooks fail)
- Building tools before processes (ops without programs)
- Cutting content during downturns (compounding loss)

Output: budget allocated per channel; tied to revenue targets.
```

## Step 6: Operating Cadence

Demand gen is operationally heavy. Cadence matters.

```
Weekly:
- Demand-gen team standup (15 min)
- Channel-level performance review
- Sales-marketing handoff sync (15 min)
- Lead-quality review (which MQLs converted vs not)

Bi-weekly:
- Content production sync
- Paid-ad performance + budget reallocation
- Experiment review (what worked, what to kill)

Monthly:
- Pipeline review with sales leadership
- CAC / LTV review by channel
- Marketing-sourced ARR report
- Quarterly forecast adjustment

Quarterly:
- Strategic review: are we hitting pipeline coverage?
- Channel-mix re-evaluation
- Team / budget adjustments
- Big-program kickoffs (next quarter's webinars, content themes)

Annually:
- Annual planning + goal setting
- Compensation alignment
- Tool stack rationalization
- Brand / positioning review

Sales-Marketing alignment:
- Weekly: lead handoff issues + quality
- Monthly: pipeline coverage + funnel health
- Quarterly: target adjustment + team capacity
```

## Common Failure Modes

```
Failure 1: "Demand gen" without revenue connection
- Pattern: marketing reports on impressions, traffic, follows
- Reality: nothing tied to closed-won ARR
- Fix: every metric tied to pipeline / revenue

Failure 2: Single-channel dependency
- Pattern: 80% of pipeline from one channel (paid Google or LinkedIn)
- Reality: channel inevitably saturates / costs rise
- Fix: diversify; no channel >50%

Failure 3: Marketing-sourced metric gaming
- Pattern: every signup is "marketing sourced"
- Reality: founder Twitter is marketing; cold outreach is sales; muddied attribution
- Fix: clear sourcing rules; multi-touch attribution

Failure 4: Sales-Marketing misalignment
- Pattern: marketing generates "leads"; sales says "they're junk"; finger-pointing
- Reality: MQL definition disagreed-on
- Fix: joint MQL definition; SQL feedback loop; weekly sync

Failure 5: Demand gen without ICP
- Pattern: channels picked by "best practice"; no ICP fit
- Reality: high CAC; bad-fit leads; sales burnout
- Fix: ICP-driven channel selection (Step 1 of this playbook)

Failure 6: Too many channels too thin
- Pattern: 12 channels each at 8% of effort
- Reality: nothing scales; nothing proven
- Fix: 3-5 channels deeply

Failure 7: "Demand creation" vs "demand capture" confusion
- Pattern: spend on Google Search (capture) but no awareness (creation)
- Reality: capture works only if creation happens
- Fix: 70-80% on demand capture; 20-30% on creation (content, brand)

Failure 8: Hiring without playbook
- Pattern: hire demand-gen manager; expect them to figure out from scratch
- Reality: they spend 6 months exploring; no production
- Fix: founder must validate channels first; hire to scale

Failure 9: No experiment cadence
- Pattern: same channels for 3 years; no new tests
- Reality: market shifts; competitors find new channels; you fall behind
- Fix: 1-2 experiments per quarter; budget set aside

Failure 10: Quality over quantity neglected
- Pattern: 1000 MQLs/month at 10% conversion = 100 SQLs
- Could be: 200 MQLs/month at 60% conversion = 120 SQLs
- Reality: quality > quantity in most B2B
- Fix: optimize for conversion to SQL/won, not MQL count

Failure 11: No content engine
- Pattern: paid + outbound only; no organic
- Reality: every dollar is rented
- Fix: invest in content / SEO; compounds over time

Failure 12: Marketing-Ops underinvested
- Pattern: spreadsheets and manual lead routing
- Reality: scaling fails; data corrupt
- Fix: hire MarOps early; martech stack done well

Failure 13: Brand neglected
- Pattern: only direct-response; no brand investment
- Reality: long-term: brand drives demand
- Fix: 10-20% on brand even at growth stage

Failure 14: Demand gen separate from product
- Pattern: marketing markets; product builds; no feedback loop
- Reality: marketing promises features customer doesn't need; product builds wrong things
- Fix: weekly product-marketing sync; PMM in product reviews

Failure 15: Paid ads as growth strategy at indie stage
- Pattern: pre-PMF; spending $20K/mo on Google Ads
- Reality: paid ads scale a working motion; can't fix bad fit
- Fix: prove organic / outbound first; paid amplifies later
```

## What Done Looks Like (recap)

A working demand generation function:

- [ ] Motion clear (PLG / sales-led / hybrid)
- [ ] 3-5 channels selected based on ICP
- [ ] Funnel measured at every stage
- [ ] Per-channel KPIs + dashboards
- [ ] 3-5 active programs running continuously
- [ ] Marketing-Sales alignment on MQL/SQL definitions
- [ ] Pipeline coverage 3-4x quota at 90+ days
- [ ] CAC < LTV/3 across channels
- [ ] Quarterly experiments finding new channels
- [ ] Marketing-sourced ARR > marketing investment by 5-10x
- [ ] Right-shape team (Head of Marketing + DG Manager + Content + Ops at growth stage)
- [ ] Budget allocated per channel; tied to revenue targets
- [ ] Operating cadence (weekly / monthly / quarterly)

## Mistakes to Avoid

- **Demand gen disconnected from revenue.** Every metric should tie to pipeline / closed-won.
- **Single-channel dependency.** Diversify; no channel > 50%.
- **Sales-Marketing misalignment on MQL/SQL.** Joint definitions; weekly sync.
- **Wrong motion.** Don't force PLG on enterprise products or vice versa.
- **Too many thin channels.** 3-5 deep beats 12 shallow.
- **Paid ads as growth pre-PMF.** Paid amplifies; doesn't create.
- **Hiring before playbook.** Founder validates channels before delegating.
- **Skipping content engine.** Compound returns are real.
- **Underinvesting in marketing ops.** Data quality is the foundation.
- **Skipping brand.** 10-20% on brand even at growth stage.
- **No experiment cadence.** Channels saturate; new tests needed quarterly.
- **Quality vs quantity confusion.** Optimize for SQL/won conversion, not MQL count.
- **Forgetting customer marketing.** Existing customers feed expansion + advocacy.
- **No founder brand investment.** Founder voice is high-leverage TOFU at small scale.
- **Marketing in isolation from product.** PMM is the bridge; build it.

## See Also

- [Channel Selection](channel-selection.md) — depended-upon discipline
- [Cold Outreach](cold-outreach.md) — one channel
- [Account-Based Marketing](account-based-marketing.md) — one motion
- [Paid Ads](paid-ads.md) — one channel
- [SEO Link Building](seo-link-building.md) — adjacent SEO discipline
- [LinkedIn Content Strategy](linkedin-content-strategy.md) — one channel
- [Building in Public](building-in-public.md) — adjacent
- [Founder Brand](founder-brand.md) — pairs
- [Newsletter Sponsorships](newsletter-sponsorships.md) — channel option
- [Conference & Event Marketing](conference-and-event-marketing.md) — channel
- [Influencer Marketing](influencer-marketing.md) — channel option
- [Customer Referral Program](customer-referral-program.md) — channel
- [SEO Strategy](../2-content/seo-strategy.md) — adjacent
- [Long-tail SEO Content Production](../2-content/long-tail-seo-content-production.md) — adjacent
- [Marketing Operations Playbook](../4-convert/marketing-operations-playbook.md) — operational systems
- [Marketing Attribution Multi-Touch](../4-convert/marketing-attribution-multi-touch.md) — attribution
- [First Marketing Hire](../4-convert/first-marketing-hire.md) — sequencing
- [Pricing Page](../4-convert/pricing-page.md) — destination
- [Demand Validation](../1-position/demand-validation.md) — pre-demand-gen
- [Ideal Customer Profile](../1-position/ideal-customer-profile.md) — depended-upon
- [Product Launch (Reference)](../../VibeReference/content/marketing-and-seo/product-launch.md) — adjacent
- [Sales Engagement Platforms (Reference)](../../VibeReference/content/marketing-and-seo/sales-engagement-platforms.md) — tooling
- [Sales Intelligence & Prospect Data (Reference)](../../VibeReference/content/marketing-and-seo/sales-intelligence-prospect-data.md) — tooling
