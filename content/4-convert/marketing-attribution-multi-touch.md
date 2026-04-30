# Marketing Attribution & Multi-Touch Modeling

[⬅️ Back to Day 4: Convert](../4-convert/)

If you're spending money on marketing in 2026 — paid ads, content, events, ABM, partnerships, podcasts, SEO — you need attribution to know what's working. The naive approach: ask leads "how did you hear about us?" → 60% say Google → declare SEO is winning. The structured approach: tracking with proper UTMs + CRM source fields, multi-touch attribution model, deduplication across channels, ITP/cookie-loss handling, lift studies for opaque channels (brand / podcast / TV). B2B SaaS attribution is hard because: long sales cycles (6-12 months), multiple stakeholders, dark channels (word of mouth, internal advocacy), iOS / Safari ITP killing cookies. Get this right and you allocate marketing budget intelligently. Get it wrong and you double down on losing channels.

## What Done Looks Like

A working marketing attribution system:
- [ ] UTM tracking standardized across all campaigns
- [ ] Lead-source captured on every signup / form fill
- [ ] Multi-touch attribution model (not just first / last)
- [ ] Deduplicate touches (don't double-count)
- [ ] Self-reported attribution as backup ("How did you hear about us?")
- [ ] CRM (Salesforce / HubSpot) configured for attribution reporting
- [ ] Pipeline-attribution dashboard (per channel ROI)
- [ ] Lift studies for opaque channels (brand, PR, podcast)
- [ ] Quarterly attribution review feeding budget decisions
- [ ] Documented attribution methodology + caveats (for board)

## 1. Decide attribution scope — what do you measure

```text
Decide attribution scope.

What you can measure cleanly:
- Direct response: paid ads → click → signup
- Inbound forms: filled with UTM params
- Tracked links: email, social, partner referrals
- Self-reported: "How did you hear about us?"

What you cannot measure cleanly:
- Brand / awareness building
- PR / press mentions
- Podcasts (rarely have direct conversion path)
- Word of mouth
- Internal advocacy (champion shares with team)
- Multi-device journeys (iOS / Safari ITP)
- Long-cycle B2B (12-month sales cycle attribution decay)

Honest framing for B2B SaaS:
- Direct response: 30-50% of pipeline (measurable)
- Brand / WOM / dark social: 30-50% (estimable via lift studies)
- Mixed / multi-touch: most deals had multiple touches

Don't pretend full attribution is possible. Be transparent about limits.

For [COMPANY], output:
1. What you can attribute reliably
2. What's "dark" (brand / WOM)
3. Mix percentage estimate
4. Methodology + caveats doc
5. Stakeholder communication ("here's what we know vs estimate")
```

The honesty discipline: B2B SaaS attribution is ~70% science, 30% guess. Communicate the uncertainty; don't manufacture false precision.

## 2. UTM tracking — disciplined and consistent

```text
Implement UTM tracking standards.

UTM parameters:
- utm_source: where (e.g., google, linkedin, twitter, newsletter-name)
- utm_medium: type (e.g., cpc, social, email, organic, podcast)
- utm_campaign: campaign name (e.g., q1-launch, blog-rag-guide)
- utm_term: keyword (paid search)
- utm_content: variant (e.g., headline-a, headline-b for A/B tests)

Standards:
- All-lowercase
- Hyphens (not spaces or underscores)
- No URL-unsafe characters
- Consistent vocabulary across team

Vocabulary control:
- Pre-defined source list (no "Linkedin" vs "linkedin" vs "linked-in")
- Pre-defined medium values (cpc / cpm / social / email / organic / referral / podcast)
- Campaign naming convention: [quarter]-[topic]-[asset] (e.g., q1-rag-blog-promo)

Tools:
- UTM builder spreadsheet / link-shortener (Bitly / Linktree)
- Required UTM-validation in landing-page tracking
- Internal "UTM cheat sheet" doc

Common failures:
- Inconsistent capitalization breaks reporting
- Custom values per team (no central standard)
- Missing UTMs on paid campaigns (ad agency forgot)
- UTMs stripped by redirect chain
- Campaign names that won't make sense in 6 months

Output:
1. UTM convention guide
2. Source / medium vocabulary
3. Campaign naming convention
4. Internal training
5. Validation in dashboards
```

The "consistent UTMs" trap: every B2B SaaS has inconsistent UTMs from year 1-3. Investing in a UTM convention early saves a painful cleanup project later.

## 3. CRM lead source — first-touch + multi-touch

The CRM is where revenue lives. Attribution must be there.

```text
Configure CRM for attribution.

Required fields per Lead / Contact / Opportunity:

First-touch source:
- First_Source__c (text or picklist)
- First_Source_Detail__c (utm_campaign, etc.)
- First_Touch_Date__c
- Captured: when lead first appears

Last-touch source:
- Last_Source__c
- Last_Source_Detail__c
- Last_Touch_Date__c
- Updated: each touch

Self-reported source:
- HDYHAU__c (How Did You Hear About Us)
- Open-text or picklist
- Captured: signup form

All-touches log:
- Touchpoints__c (related list with all touches)
- Date, source, channel, campaign per touch

Capture flow:
- Form submission → UTM params → CRM fields
- Lead → MQL → SQL transitions tracked
- Opportunity created → first/last/all-touch fields rolled up

Anti-patterns:
- Only "Lead Source" field (single value; loses context)
- HDYHAU as picklist (limits responses; people wedge into wrong category)
- Touch-points stored as comma-string (unparseable)
- Manual data entry by reps (drift)

Tools:
- HubSpot, Salesforce native attribution
- 6sense / Bombora for ABM intent
- Bizible / Dreamdata / Attribution.io / RudderStack for multi-touch

Output:
1. CRM field schema
2. Capture flow
3. Reporting dashboards
4. Manual-entry rules
5. Tool stack recommendations
```

The "How Did You Hear About Us" gold mine: open-text response from prospect. Often more accurate than tracked attribution. Codify themes; report as separate signal.

## 4. Pick attribution model — multi-touch is the default

```text
Pick attribution model.

Single-touch models:

First-touch:
- 100% credit to first interaction
- Pro: rewards top-of-funnel content
- Con: ignores closing influences

Last-touch:
- 100% credit to last interaction
- Pro: rewards conversion-driving touch
- Con: ignores discovery (every deal "comes through Google" if Google was last)

Multi-touch models:

Linear:
- Equal credit to all touches
- Pro: simple
- Con: doesn't reflect that some touches matter more

Position-based (40/20/40 or U-shaped):
- 40% first, 40% last, 20% middle
- Pro: emphasizes top + bottom of funnel
- Con: arbitrary weights

Time-decay:
- Touches closer to conversion weighted higher
- Pro: matches recency intuition
- Con: under-credits brand-building

Algorithmic (data-driven):
- ML-derived weights
- Pro: reflects actual data
- Con: black box; needs lots of data

W-shaped (B2B-favorite):
- 30% first, 30% lead-converted, 30% opportunity-created, 10% other
- Pro: B2B-specific (multi-stage funnel)
- Con: complex to set up

Recommended for B2B SaaS:
- Default: W-shaped or U-shaped
- Report multiple side-by-side (don't pick one as truth)
- Acknowledge model limits

Tools:
- HubSpot (basic multi-touch built in)
- Bizible (deeper)
- Dreamdata (modern B2B-focused)
- Attribution.io
- DIY in BigQuery / Snowflake with Census / Hightouch

Output:
1. Model recommendation for [GTM MOTION]
2. Reporting schema
3. Tool selection
4. Implementation timeline
5. Caveats for board / exec
```

The "report multiple models" discipline: no single model is right. Show first-touch + last-touch + W-shaped side-by-side. Decisions made on the disagreements between them.

## 5. Self-reported attribution — surprisingly accurate

```text
Implement self-reported attribution.

Question on signup form:
- "How did you hear about us?"
- Open text (best) OR picklist (categorize automatically)
- Optional but encouraged

Common picklist values:
- Google search
- LinkedIn
- Twitter / X
- Referral from friend / colleague
- Podcast
- Newsletter / Substack
- Reddit / HN / community
- Conference / event
- Sales team (someone reached out)
- Other (text field)

Open-text approach (better signal):
- Don't constrain answer
- Tag / categorize after the fact
- Reveals unexpected channels (e.g., "I saw your founder on a podcast")

Compare to tracked:
- Self-reported "Google" + tracked "organic" align → confidence
- Self-reported "Podcast" + tracked "direct" → podcast is dark traffic; credit it

Use cases:
- Validate paid attribution (does self-report match?)
- Discover dark channels (podcast, WOM)
- Customer-segment patterns (enterprise vs SMB sources differ)
- Pricing pages: who are people coming from?

Anti-patterns:
- HDYHAU as required field (harms conversion)
- Question buried (low fill rate)
- Picklist with no "Other" (misses nuance)
- Never analyze responses (waste)

Output:
1. Question wording + placement
2. Picklist vs open-text decision
3. Categorization process
4. Quarterly analysis
5. Validate vs tracked attribution
```

The HDYHAU truth: customers often know their journey better than your tracking. Open-text "I saw your CEO on a podcast" reveals dark channels you'd never tag.

## 6. Deduplicate touches — don't count same person twice

Common mistake: same touchpoint counted twice across channels.

```text
Deduplicate attribution.

Common dupe sources:
- LinkedIn ad click → user goes to homepage → bounces → returns via Google
  - LinkedIn last-touch lost; Google last-touch credited
  - LinkedIn was the spark
- Email click → lands on blog → reads → converts later from another email
  - Both emails count; double-count if not deduped
- Cross-device: phone click → desktop conversion (iOS ITP makes this nearly impossible to stitch)

Deduplication rules:
- Cookie-stitching (server-side recommended; ITP-resistant)
- User identification at signup/login (definitive)
- Touch-window deduplication (don't count multiple touches within 1 hour as separate)

Server-side tracking (recommended):
- First-party cookies set server-side
- Persist beyond ITP / 7-day cookie limits
- Stitch client-side touches to server-side identity

Tools:
- Segment / RudderStack (CDP for unification)
- PostHog (server-side capture)
- DIY with Next.js middleware

Anti-patterns:
- Double-count same campaign click + form fill
- Treat each session as separate touch
- Lose identity across devices

Output:
1. Deduplication rules
2. Server-side tracking implementation
3. CDP integration
4. Quality checks (dupe detection in dashboards)
5. Cross-device strategy (auth-based stitching)
```

The 2026 ITP reality: Safari / iOS strip third-party cookies after 7 days. Without server-side first-party cookies, you lose 30-50% of attribution data. Plan for it.

## 7. Channel-level reporting — ROI per channel

```text
Build channel-level ROI reporting.

Per-channel metrics:

Top-of-funnel:
- Traffic (visits)
- Leads generated
- Cost per lead (paid channels)

Mid-funnel:
- MQLs (marketing qualified)
- SQLs (sales qualified)
- Conversion rate (lead → MQL → SQL)

Bottom-funnel:
- Opportunities created
- Pipeline value
- Closed-won revenue
- ROI = revenue / spend

Per channel:
- Paid Google Search: $X spend → Y revenue → Z ROI
- LinkedIn ads: similar
- SEO: $X content investment → Y revenue (longer cycle)
- Webinars: $X cost → Y leads → Z revenue
- Events: same
- Partners: revenue share + co-marketing cost

Time-lag adjustments:
- B2B SaaS: 6-12 month sales cycle
- Don't compare current quarter spend to current quarter revenue
- Compare current revenue to spend 6-12 months ago

Cohort analysis:
- Group leads by first-touch month
- Track conversion over 12-18 months
- Reveals true channel ROI

Reporting cadence:
- Weekly: traffic + leads (early signal)
- Monthly: MQLs + SQLs (mid-funnel)
- Quarterly: revenue + ROI (mature)

Tools:
- HubSpot / Salesforce reports
- BI: Looker / Mode / Metabase / Tableau
- Specialized: Bizible / Dreamdata

Output:
1. Per-channel metrics framework
2. Time-lag-adjusted reporting
3. Cohort analysis
4. Cadence + dashboard
5. Action thresholds (when to cut / scale a channel)
```

The time-lag mistake: comparing this month's spend to this month's revenue. In B2B SaaS with 6-12 month cycles, you're attributing today's revenue to last year's spend.

## 8. Lift studies for opaque channels

Brand, PR, podcasts, TV ads can't be tracked click-by-click. Use lift studies.

```text
Run lift studies for dark channels.

What's "dark":
- Brand campaigns (TV, OOH, sponsorships)
- PR / press
- Podcasts (rarely click → convert)
- Word of mouth
- Influencer / creator partnerships

Lift study methodology:

Geographic lift:
- Run brand campaign in some markets, not others
- Compare conversion rates
- Attribute lift to brand

Temporal lift:
- Pre / post campaign comparison
- Adjusted for seasonality + secular growth
- Higher noise; longer study window

Holdout / control:
- Hold out audience from a campaign
- Compare conversion vs treated
- Cleanest design; complex to execute

Self-reported uplift:
- "Did you hear about us from [podcast]?" via HDYHAU
- Combine with overall lift signal

Survey-based attribution (Brand Lift):
- Survey users post-campaign
- Recall (did you see our ad?)
- Brand awareness shift

Cadence:
- Quarterly for major campaigns
- Annually for ongoing brand investment

Tools:
- Google Brand Lift (paid)
- Survey tools (Typeform, Qualtrics)
- Statistical software (R / Python for analysis)

Anti-patterns:
- Pretend dark channels don't matter (under-invest in brand)
- Pretend dark channels are 100% measurable (overconfident)
- One-time studies (need ongoing)

Output:
1. Channels to study
2. Methodology choice
3. Study design + budget
4. Reporting framework
5. Action: how does lift inform spend
```

The brand-investment trap: B2B founders who only fund measurable channels under-invest in brand. Brand compounds; pure-DR loses to competitors with brand presence.

## 9. Connect to budget decisions

Attribution that doesn't change budget is performance art.

```text
Connect attribution to budget.

Quarterly budget review:

Channel allocation:
- Last quarter: $X spent, $Y revenue
- Channel ROI: $Z
- Continue / scale / cut

Decision matrix:
- High ROI + room to scale → invest more
- High ROI + saturated → maintain
- Low ROI but strategic (brand) → maintain or cut
- Low ROI + tactical → cut

Marginal vs average:
- Average ROI hides marginal performance
- 1st $50K of Google Ads great; next $50K poor
- Look at incremental return per $

Mixed model:
- 50-70% measurable channels (paid, direct response)
- 20-30% brand / awareness (lift-tracked)
- 10-20% experiments (new channels)

Anti-patterns:
- Cut all channels with < N ROI without considering strategic
- Scale "winning" channel without diminishing-returns analysis
- Never experiment with new channels (compounds dependency)

CFO collaboration:
- Marketing-Finance shared dashboard
- Quarterly review meeting
- Annual planning informed by attribution

Output:
1. Budget review template
2. Channel decision matrix
3. Marginal-return analysis
4. Experiment budget (10% rule)
5. CFO collaboration cadence
```

The "experiment budget" rule: 10% of marketing budget for experiments. Otherwise you optimize current channels into ground; never discover next.

## 10. Communicate attribution honestly to stakeholders

CEOs and boards want certainty. Attribution doesn't deliver it. Communicate the uncertainty.

```text
Communicate attribution to stakeholders.

Annual attribution report (for board):

Section 1: Methodology (1 page)
- Models used (W-shaped + first-touch comparison)
- Data sources (CRM, Google Analytics, Bizible)
- Caveats (ITP, dark channels, time-lag)

Section 2: Channel performance (3 pages)
- Per-channel revenue + ROI
- Trend vs prior periods
- Saturation analysis

Section 3: Dark channels (1 page)
- Lift study results (brand, podcast, etc.)
- Estimated contribution

Section 4: Decisions (1 page)
- Channel changes for next year
- New experiments
- Continued investment areas

Section 5: Limits (always include)
- "These numbers are best estimates with X% confidence"
- "ITP / cookie loss removes Y% of data"
- "Long sales cycles mean current revenue tied to 12-month-old spend"

Anti-patterns:
- Reporting attribution as if it's accurate to 5%
- Hiding caveats (boardroom asks "is this right?")
- Changing models year-over-year (incomparable)
- No experiments / new channels reported

Tools:
- BI dashboard linked
- Slide deck for board
- Annual review as written doc

Output:
1. Annual report template
2. Caveats / limits section
3. Decision-summary
4. Confidence statements
5. Year-over-year consistency
```

The boardroom honesty: CEOs sometimes pressure marketing to "just give me a number." Resist false precision. Range estimates with confidence beat point estimates that mislead.

## What Done Looks Like

A working attribution system:

- [ ] UTM standards documented + enforced
- [ ] CRM lead-source fields configured (first / last / all)
- [ ] Self-reported HDYHAU question on signup
- [ ] Multi-touch attribution model (W-shaped or similar)
- [ ] Server-side tracking (ITP-resistant)
- [ ] Channel-level ROI reporting (time-lag adjusted)
- [ ] Lift studies for dark channels (brand, PR, podcasts)
- [ ] Quarterly budget review using attribution
- [ ] Honest communication to stakeholders (with caveats)
- [ ] Experiment budget (10% for new channels)

The mistakes to avoid:

1. **Last-touch as primary model.** "Google search closes everything" hides upstream work.
2. **Pretending dark channels don't exist.** Under-invest in brand; lose long-term.
3. **No HDYHAU question.** Miss customer-stated attribution; rely only on tracking.
4. **Inconsistent UTMs.** Reporting becomes garbage; clean-up expensive.
5. **Compare current spend to current revenue.** B2B has lag; cohort analysis required.
6. **False precision in board reports.** Attribution is range, not point. Communicate honestly.
7. **Ignore ITP / cookie loss.** Plan server-side tracking before issue compounds.

## See Also

- [Analytics Setup](./analytics-setup.md) — analytics infrastructure
- [Activation Metric Definition](./activation-metric-definition.md) — leading indicator
- [Customer Success Metrics Framework](./customer-success-metrics-framework.md) — adjacent CS metrics
- [Sales Forecasting & Pipeline Management](./sales-forecasting-pipeline-management.md) — sales-side
- [Conversion Rate Optimization](./conversion-rate-optimization.md) — improve conversion at touchpoints
- [Win-Loss Analysis](./win-loss-analysis.md) — adjacent qualitative attribution
- [G2 / Capterra Reviews](./g2-capterra-reviews.md) — review-driven attribution
- [Customer References](./customer-references.md) — referral attribution
- [Customer Referral Program](../3-distribute/customer-referral-program.md) — explicit referral tracking
- [Channel Selection](../3-distribute/channel-selection.md) — channel-strategy upstream
- [International Expansion Playbook](../3-distribute/international-expansion-playbook.md) — multi-market attribution
- [VibeReference: Web Analytics Providers](https://vibereference.dev/marketing-and-seo/web-analytics-providers) — GA4 / Plausible / etc.
- [VibeReference: Product Analytics Providers](https://vibereference.dev/devops-and-tools/product-analytics-providers) — PostHog / Amplitude
- [VibeReference: CRM Providers](https://vibereference.dev/marketing-and-seo/crm-providers) — Salesforce / HubSpot
- [VibeReference: Customer Data Platforms](https://vibereference.dev/marketing-and-seo/customer-data-platforms) — Segment / RudderStack
- [VibeWeek: Activation Funnel](https://vibeweek.dev/6-grow/activation-funnel-chat) — funnel tracking implementation
