# Marketing Operations Playbook (Marketing Ops)

[⬅️ Back to Day 4: Convert](../4-convert/)

If you're a B2B SaaS at $5M+ ARR with multi-channel marketing — content + SEO + paid ads + email + events + ABM — Marketing Operations (Marketing Ops / MOps) becomes the discipline that makes it all work together. The naive approach: marketers run channels independently; founder asks "what's our pipeline?" and gets 4 different numbers. The structured approach: dedicated Marketing Ops who owns marketing automation (HubSpot / Marketo / Pardot), CDP, attribution, lead scoring + routing, MQL definition, marketing-sales SLA, marketing tooling stack, ROI reporting. Marketing Ops is sales-ops's twin — different function, similar discipline. (See `sales-operations-playbook.md` for sales side; this is marketing side. See `marketing-attribution-multi-touch.md` for attribution depth.)

## What Done Looks Like

A working Marketing Ops function:
- [ ] Dedicated Marketing Ops (or shared with sales as RevOps) at right stage
- [ ] Marketing automation platform configured (HubSpot / Marketo)
- [ ] CDP / data infrastructure in place
- [ ] MQL definition + scoring
- [ ] Lead routing automated
- [ ] Marketing-Sales SLA documented + tracked
- [ ] Attribution model implemented
- [ ] Campaign performance dashboards
- [ ] Marketing tooling stack rationalized
- [ ] Quarterly review with leadership

## 1. Decide if you need Marketing Ops

```text
Decide Marketing Ops readiness.

Right time signals:
- $5M+ ARR
- 3+ marketing team members
- Multi-channel (content + paid + email + events)
- Marketing automation in use (HubSpot / Marketo)
- Attribution complexity (multiple touches before sale)
- Reports take >1 day to compile

Wrong time signals:
- <$3M ARR (marketer can run their own ops)
- 1-2 marketers (not yet at scale)
- Single-channel
- Founder-led marketing

Alternatives:

Generalist marketer doing it:
- 30% of marketer's time
- Used at <10 marketing team

RevOps consolidation:
- Combined Sales + Marketing Ops
- Used at $10-30M ARR
- Common in 2026

Dedicated Marketing Ops:
- Full-time
- $10-50M ARR with sophisticated marketing

Marketing Ops team:
- Lead + analysts
- $30M+ ARR

Profile:

Marketing Ops Manager:
- 5-10 years experience
- HubSpot / Marketo / Pardot expert
- Analytics-comfortable
- Cross-functional collaborative

Compensation:
- $120-180K base + bonus (Stage 2-3)
- $150-250K (Stage 3-4)

Output:
1. Readiness assessment
2. Owner per stage
3. RevOps vs separate
4. Hire timing
5. Profile + comp
```

The "Marketing Ops vs RevOps" decision: at $5-15M ARR, RevOps generalist often works (one person doing both). At $20M+, specialization helps.

## 2. Marketing automation platform

Pick the right MAP.

```text
Choose marketing automation platform.

Options:

HubSpot Marketing Hub:
- Best for SMB-mid
- All-in-one (CRM + Marketing + Sales + CS)
- Easier to use; less powerful at scale
- Pricing: $20-3,600+/mo per portal

Marketo (Adobe):
- Enterprise leader
- Most-powerful; complex
- Pricing: $1,250-3,200+/mo (varies)

Pardot (Salesforce):
- Salesforce-native
- B2B-focused
- Pricing: $1,250-15,000/mo

Klaviyo:
- E-commerce / B2C focus
- B2B SaaS rare
- Pricing: $0-$$ (volume-based)

Customer.io:
- Modern; developer-friendly
- API-first
- Pricing: $100-$$$/mo

Iterable:
- Multi-channel (email / push / SMS)
- Mid-market+
- Pricing: enterprise

Selection by stage:

<$5M ARR: HubSpot Marketing Hub Starter
$5-30M ARR: HubSpot Pro / Enterprise OR Pardot
$30M+ ARR: Marketo OR Salesforce Marketing Cloud OR Pardot

Stack alignment:
- Salesforce CRM → Pardot or Marketo
- HubSpot CRM → HubSpot Marketing
- Mixed → HubSpot or Marketo (with integration)

Migration considerations:

HubSpot to Marketo:
- Common at scale
- 3-6 month migration
- Significant cost + risk

Marketo to HubSpot:
- Less common
- Simplification move

Stay vs migrate:
- Switch only when current platform blocks growth
- Not for "shiny new"

Output:
1. Platform recommendation
2. Stack alignment
3. Migration timing (if applicable)
4. Cost estimate
5. Implementation timeline
```

The HubSpot-vs-Marketo decision: HubSpot for usability + integrated stack; Marketo for power + Salesforce-native. Most B2B SaaS reaches $30M on HubSpot.

## 3. MQL definition + lead scoring

Marketing Ops owns "what's a qualified lead."

```text
Define MQL.

MQL (Marketing Qualified Lead):

Components:

Demographic / firmographic:
- Title (decision-maker / influencer)
- Company size (above ICP threshold)
- Industry (target vertical)
- Location (target geo)

Behavioral:
- Visited pricing page
- Downloaded gated content
- Multiple visits in 30 days
- Webinar attended
- Form filled

Negative signals:
- Competitor email domain (skip)
- Job-seeker language
- Personal email vs business
- Unsubscribed history

Scoring model:

Point-based:

Demographic (max 50):
- Decision-maker title: +20
- Target ICP company size: +15
- Target vertical: +15

Behavioral (max 50):
- Pricing page: +20
- 3+ visits 30 days: +15
- Demo request: +30
- Webinar attended: +10

MQL threshold: 60 points

SQL threshold: 80 points (sales-qualified)

Or simpler tiers:
- Cold: 0-30
- Warm: 30-60
- MQL: 60-80
- SQL: 80+

Implementation:

In MAP:
- HubSpot scoring rules
- Marketo Lead Score
- Pardot Score Categories

Decay:
- Score decays over time (engagement gets stale)
- Re-engage required to refresh

Validation:

Test:
- Sample MQLs → does sales accept?
- Acceptance rate <50% = scoring wrong
- Re-calibrate

Per-segment scoring:

Different by segment:
- Enterprise: high firmographic threshold
- SMB: lower; more behavioral

Anti-patterns:

Score everyone:
- Casual visitor scored high
- Sales overwhelmed

Sales doesn't trust:
- "These MQLs are garbage"
- Marketing-Sales tension
- Mitigate: joint definition

Output:
1. MQL definition
2. Scoring model
3. Implementation
4. Validation
5. Per-segment variations
```

The "joint MQL definition" rule: Marketing + Sales agree what counts. Without alignment, MQLs ignored; pipeline-credit fights.

## 4. Lead routing automation

Where do leads go?

```text
Route leads automatically.

Routing rules:

By geography:
- US East / West / EU / APAC
- Match SDR / AE territory

By segment:
- SMB / Mid-market / Enterprise
- Different teams

By account ownership:
- Existing customer → CSM
- Existing prospect (in CRM) → owning AE
- New prospect → SDR / AE round-robin

By source:
- Inbound → SDR for qualification
- Outbound (rep-sourced) → that rep
- Partner / referral → partner manager

By score:
- High score (SQL) → AE direct
- Medium (MQL) → SDR
- Low → nurture

Tools:

LeanData:
- Most-popular in 2026
- Salesforce-native
- Visual routing builder

Distribution Engine:
- Salesforce alternative
- Per-rule routing

Chili Piper:
- Inbound scheduling + routing
- Real-time routing

HubSpot Workflows:
- Built-in routing for HubSpot users
- Less powerful than dedicated tools

Custom (Zapier / DIY):
- Smaller scale
- Brittle

Hand-off process:

Inbound form fill:
- Score + route in <5 min
- SLA: SDR contacts in <1 hour (best-in-class)
- 24-hour absolute max

Demo request:
- Schedule directly via Calendly / Chili Piper
- AE assigned by territory

Anti-patterns:

Round-robin without context:
- Same rep gets terrible + great leads
- No specialization

Manual routing:
- Slow; misses SLA
- Doesn't scale

No SLA enforcement:
- Leads sit; cool off
- Conversion drops

Output:
1. Routing rules
2. Tools
3. Hand-off process
4. SLA + enforcement
5. Anti-pattern checks
```

The 5-minute response rule: leads contacted within 5 minutes have 21x higher conversion than 30 minutes. SLA matters massively.

## 5. Marketing-Sales SLA

Two-way agreement.

```text
Marketing-Sales SLA.

Marketing's commitments:

Lead volume:
- "X MQLs per month"
- Quarterly target

Lead quality:
- "X% of MQLs become SQLs"
- Acceptance rate

Lead enrichment:
- All MQLs have: name, email, company, title, source
- Pre-enriched via Clearbit / ZoomInfo

Hand-off speed:
- MQLs delivered to sales in <5 min
- Auto-routing

Sales's commitments:

Response speed:
- First contact <1 hour for MQLs
- <24 hours absolute max

Follow-up cadence:
- 8-12 touches over 14-21 days
- Email + phone + LinkedIn

Disposition:
- Within 14 days, mark MQL as: SQL / not-qualified / nurture
- Reasons documented

Joint commitments:

Definition alignment:
- Quarterly review of MQL definition
- Update based on data

Reporting:
- Joint dashboard
- Both sides see same numbers

Escalation:

Marketing under-delivering:
- Volume below target
- Quality below threshold
- Diagnosis + plan

Sales under-following-up:
- Response time above SLA
- Disposition rate below
- Coaching + process

Tracking:

Per-channel:
- Lead → MQL → SQL → opp → revenue
- Conversion rates per stage

Per-rep:
- SDR conversion rates
- Speed-to-contact

Cadence:

Weekly:
- Marketing-Sales standup
- Lead flow review

Monthly:
- SLA review
- Quality check

Quarterly:
- Strategic alignment
- Plan updates

Output:
1. SLA document
2. Joint metrics
3. Escalation process
4. Cadence
5. Continuous improvement
```

The SLA discipline: writing it down resolves "marketing leads suck" / "sales doesn't follow up" tension. Both sides see joint dashboard.

## 6. Attribution + ROI tracking

Marketing must justify spend.

```text
Track marketing ROI.

Attribution models:

Single-touch:
- First-touch (gives credit to first interaction)
- Last-touch (gives credit to converting touch)
- Misses middle journey

Multi-touch:
- Linear (equal credit all touches)
- W-shaped (heavy first / convert / late)
- Position-based / time-decay
- See marketing-attribution-multi-touch

Tools:

CRM-native:
- HubSpot attribution
- Salesforce Pardot Multi-Touch Attribution

Specialized:
- Bizible (now Adobe)
- Dreamdata
- Attribution.io

DIY:
- BigQuery + Looker
- Custom modeling

Per-channel ROI:

Per dollar spent:

Paid ads:
- Spend → impressions → clicks → leads → MQL → opp → revenue
- Direct response measurable

Content / SEO:
- Cost: content investment
- Revenue: organic-attributed
- Long-tail attribution

Events:
- Cost: sponsorship + travel
- Revenue: event-attributed deals

Email:
- Cost: tooling + creative
- Revenue: email-influenced

Webinars:
- Cost: hosting + promo
- Revenue: webinar-attributed

ROI calculation:

CAC (Customer Acquisition Cost):
- Marketing spend / new customers
- Track by channel

LTV / CAC ratio:
- Healthy: 3:1+
- Per channel

Payback period:
- Months to recover CAC
- 12-18 months target

Reporting:

Monthly:
- Per-channel spend + leads + opps
- Trend vs prior

Quarterly:
- Strategic review
- Channel reallocation

Annual:
- ROI summary
- Strategic shifts

Anti-patterns:

Last-touch only:
- Under-credits top of funnel
- Bad reallocation decisions

No attribution:
- Spend without justification
- Cuts during downturns

Vanity metrics:
- "1M impressions!" without conversion
- Misleading

Output:
1. Attribution model
2. Tooling
3. Per-channel ROI tracking
4. CAC / LTV calculation
5. Reporting cadence
```

The "honest attribution > false precision" wisdom: B2B attribution is directional, not exact. Show ranges; communicate uncertainty.

## 7. Marketing tooling stack

Marketing Ops manages the stack.

```text
Marketing tooling stack.

Core:

CRM (CRM-aligned):
- Salesforce / HubSpot

Marketing automation:
- HubSpot / Marketo / Pardot

Email service provider:
- Resend / SendGrid / Postmark for transactional
- Marketing automation handles marketing email

CDP (Customer Data Platform):
- Segment / RudderStack
- Data unification
- See customer-data-platforms

Web analytics:
- GA4 / Plausible / Fathom
- Posthog / Amplitude / Mixpanel for product

ABM:
- 6sense / Demandbase / Terminus / RollWorks
- See abm-platforms

Content:

CMS:
- WordPress / Webflow / Sanity / Contentful
- Marketing site

Content distribution:
- Buffer / Hootsuite / Sprout Social
- Social scheduling

SEO:
- Ahrefs / Semrush / Clearscope
- Keyword research + optimization

Events / webinars:
- Zoom Webinars / Demio / Livestorm
- Or in-person event tools

Paid:

Google Ads / LinkedIn Ads / Facebook Ads:
- Direct platforms

Bid management:
- Search Ads 360 (enterprise)
- Or in-platform

Conversion tracking:
- GA4 / GTM / platform-native

Engagement / chat:

Live chat:
- Intercom / Drift / Crisp
- See live-chat-widget-tools

ABM-specific:

Account engagement:
- 6sense / Demandbase
- Intent + reveal

Content sales enablement:

Highspot / Showpad / Seismic:
- Sales content management
- Mid-market+

Total cost:

SMB ($5K-30K/mo):
- HubSpot + GA4 + ahrefs + Buffer

Mid-market ($30-150K/mo):
- HubSpot/Marketo + Segment + Bizible + Ahrefs + RollWorks

Enterprise ($150-500K+/mo):
- Marketo + Salesforce + 6sense + Bizible + Highspot + many

Marketing Ops job:

Audit:
- Quarterly stack review
- Cut underperforming
- Negotiate consolidation

Integration:
- All tools talk
- CRM is source of truth

Adoption:
- Train marketers
- Track usage

Anti-patterns:

Tool sprawl:
- 30+ tools; redundant
- $X spend without ROI

No integration:
- Data silos
- Reporting impossible

Output:
1. Stack per stage
2. Cost estimate
3. Audit cadence
4. Integration architecture
5. Vendor management
```

The "consolidate aggressively" wisdom: 10 well-integrated tools > 25 disconnected. Marketing Ops's leverage is integration, not feature breadth.

## 8. Campaign performance dashboards

Build dashboards marketers actually use.

```text
Build campaign dashboards.

Per-channel:

Paid ads:
- Spend, impressions, clicks, CTR
- Conversions (form fills, demos)
- Cost per conversion
- Quality (MQL rate)

Organic / SEO:
- Organic traffic
- Keyword rankings
- Backlinks
- Conversions

Email:
- Sends, opens, clicks, unsubscribes
- Conversions
- Per-campaign + lifecycle

Events / webinars:
- Registrations, attendance, MQLs generated
- Per-event ROI

ABM:
- Account engagement scores
- Pipeline-influenced
- Per-tier performance

Aggregated:

Pipeline view:
- MQLs / SQLs / opps / revenue by source
- Trend over time

Funnel:
- Each stage conversion rate
- Drop-offs

Marketing-influenced revenue:
- $ closed-won with marketing touch
- Per-channel contribution

Tools:

BI:
- Looker / Mode / Tableau / Hex
- Custom dashboards

CRM-native:
- HubSpot reporting
- Salesforce Reports

Specialized:
- Bizible / Dreamdata for attribution
- HockeyStack for marketing analytics

Cadence:

Daily:
- Top-of-funnel (signups, leads)

Weekly:
- Channel performance
- MQL volume

Monthly:
- Conversion rates
- Per-channel ROI

Quarterly:
- Strategic review
- Plan adjustments

Audience:

Marketing team:
- Weekly + daily for execution

CMO / VP Marketing:
- Weekly + monthly for direction

CEO / board:
- Monthly + quarterly for strategic

Anti-patterns:

Vanity metric dashboards:
- "Impressions" without conversion
- Looks busy; means little

100 metrics; no priority:
- Overwhelming
- Pick 5-10 KPIs

No ownership:
- Dashboard exists; nobody acts
- Match to decisions

Output:
1. Per-channel + aggregated dashboards
2. Tooling
3. Cadence
4. Audience-specific
5. KPI prioritization
```

The 5-10 KPI rule: more metrics ≠ better. Pick 5-10 that drive decisions; rest is supporting detail.

## 9. Quarterly business review

Marketing Ops drives MQBR.

```text
Marketing QBR.

Audience:
- VP Marketing + CMO + leadership
- Sometimes: CEO + board

Agenda (90 min):

Section 1: Pipeline + revenue (15 min)
- Marketing-attributed pipeline + revenue
- Per-channel breakdown
- Vs plan

Section 2: Funnel deep-dive (20 min)
- Lead → MQL → SQL → opp → revenue
- Conversion rates
- Drop-offs

Section 3: Per-channel performance (20 min)
- ROI per channel
- Wins + losses
- Reallocation suggestions

Section 4: Tooling + process (10 min)
- Wins
- Friction
- Investments needed

Section 5: ABM / strategic accounts (10 min)
- Engagement
- Pipeline influence
- Tactics

Section 6: Forward-looking (15 min)
- Next quarter plan
- Risks + mitigations
- Asks

Outputs:

Decisions:
- Channel reallocation
- Tooling investments
- Headcount

Insights:
- Top performers
- Underperformers (cut)
- New experiments

Strategic alignment:
- Annual plan progress
- Quarterly adjustments

Prep:

2 weeks before:
- Pull data
- Build slides

1 week before:
- VP Marketing review
- Refine

Day-of:
- Present
- Discussion

Anti-patterns:

Numbers report:
- Just data; no insight
- Reads as spreadsheet

No decisions:
- Discussion without action
- Wasted time

Marketing Ops as scribe:
- Just present numbers
- Underused strategic value

Output:
1. QBR template
2. Cadence
3. Audience-specific deck
4. Decision-making
5. Follow-through
```

The "Marketing Ops as strategic partner" elevation: best Marketing Ops co-strategist, not just data person. Insight + recommendation > data alone.

## 10. Hiring + scaling

Build Marketing Ops thoughtfully.

```text
Marketing Ops hiring + scaling.

Stage progression:

Stage 1 ($1-5M ARR):
- VP Marketing handles ops
- HubSpot admin contractor
- Cost: $0-3K/mo

Stage 2 ($5-15M ARR):
- Hire Marketing Ops Manager
- $130-200K base
- Generalist; do everything

Stage 3 ($15-50M ARR):
- Marketing Ops Manager + Analyst
- 2-3 people
- Specialization starts

Stage 4 ($50-200M ARR):
- VP / Director Marketing Ops + team
- 3-10 people
- Specialized roles

Stage 5 ($200M+ ARR):
- VP MOps + senior leaders
- Specialized functions (data eng, attribution, automation)

Roles:

Marketing Ops Manager:
- Generalist; ops + analytics
- Stage 2

Marketing Analyst:
- Reporting + insights
- Stage 3

Marketing Automation Specialist:
- HubSpot / Marketo configuration
- Stage 3

Data Engineer:
- Pipeline; CDP; attribution
- Stage 4

Web / SEO Ops:
- Site analytics; SEO tooling
- Stage 4

Profile:

Marketing Ops Manager:
- 5-10 years experience
- HubSpot / Marketo / Pardot expert
- Analytics + SQL comfortable
- Cross-functional

Hiring:

Sources:
- Network referrals
- Specialized recruiters (e.g., MOps experts)
- 2-4 month search

Interview:
- HubSpot / Marketo expertise (live exercise)
- Analytics (case study)
- Process design (mock scenario)
- Cross-functional (behavioral)

Comp:
- Stage 2: $130-200K
- Stage 3-4: $200-350K
- Stage 5: $350-500K + equity

Output:
1. Stage-appropriate hiring
2. Roles
3. Profile
4. Comp
5. Team progression
```

The Marketing Ops Manager hire at $5-15M ARR: similar leverage to Sales Ops. Process + tooling + accuracy compounds.

## What Done Looks Like

A working Marketing Ops function:

- [ ] Right ownership (founder / dedicated / team) per stage
- [ ] Marketing automation platform configured
- [ ] CDP for data unification
- [ ] MQL definition with sales agreement
- [ ] Lead scoring + routing automated
- [ ] Marketing-Sales SLA documented + tracked
- [ ] Attribution model implemented
- [ ] Per-channel ROI tracked
- [ ] Tooling stack rationalized
- [ ] Quarterly QBR with strategic insights
- [ ] Marketing-Sales alignment (RevOps consideration)

The mistakes to avoid:

1. **Hire Marketing Ops at <5M ARR.** Process overhead > value.
2. **MQL defined unilaterally.** Sales doesn't accept; tension.
3. **Tool sprawl.** 30 tools; redundant; $X waste.
4. **No SLA with sales.** Leads dropped; blame games.
5. **Last-touch attribution only.** Misleads channel decisions.
6. **Vanity metric dashboards.** Decisions not driven.
7. **Marketing Ops as scribe.** Underuses strategic value.
8. **No CDP.** Data silos; integration impossible.
9. **Quarterly review without decisions.** Performance art.
10. **Underpay Marketing Ops Manager.** They have alternatives.

## See Also

- [Sales Operations Playbook](./sales-operations-playbook.md) — sales side (companion)
- [Marketing Attribution & Multi-Touch](./marketing-attribution-multi-touch.md) — attribution depth
- [Customer Lifetime Value Playbook](./customer-lifetime-value-playbook.md) — economics
- [Customer Marketing Program](./customer-marketing-program.md) — adjacent program
- [Product-Led Growth Playbook](./product-led-growth-playbook.md) — PLG strategy
- [Sales Forecasting & Pipeline Management](./sales-forecasting-pipeline-management.md) — sales forecast
- [Annual Planning OKRs](../1-position/annual-planning-okrs.md) — planning
- [Compensation Philosophy & Pay Bands](./compensation-philosophy-pay-bands.md) — comp
- [Interview Loop Design](./interview-loop-design.md) — hiring
- [Quarterly Business Reviews](./quarterly-business-reviews.md) — QBR cadence
- [VibeReference: CRM Providers](https://vibereference.dev/marketing-and-seo/crm-providers) — Salesforce / HubSpot
- [VibeReference: Customer Data Platforms](https://vibereference.dev/marketing-and-seo/customer-data-platforms) — Segment / RudderStack
- [VibeReference: Email Marketing Providers](https://vibereference.dev/marketing-and-seo/email-marketing-providers) — Mailchimp / Klaviyo
- [VibeReference: Sales Engagement Platforms](https://vibereference.dev/marketing-and-seo/sales-engagement-platforms) — Outreach / Salesloft
- [VibeReference: ABM Platforms](https://vibereference.dev/marketing-and-seo/abm-platforms) — 6sense / Demandbase
- [VibeReference: Web Analytics Providers](https://vibereference.dev/marketing-and-seo/web-analytics-providers) — GA4 / Plausible
- [VibeReference: Webinar & Virtual Event Platforms](https://vibereference.dev/marketing-and-seo/webinar-virtual-event-platforms) — Zoom Webinars
- [VibeReference: Customer Loyalty & Rewards Programs](https://vibereference.dev/marketing-and-seo/customer-loyalty-rewards-programs) — adjacent
