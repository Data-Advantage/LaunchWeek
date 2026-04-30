# Customer Marketing Program

[⬅️ Back to Day 4: Convert](../4-convert/)

If you're a B2B SaaS at $5M+ ARR, your existing customers are your most-undervalued marketing channel. The naive approach: collect a few testimonials, link to G2 reviews, hope. The structured approach: a dedicated customer marketing program that systematically turns customers into case studies, references, advocates, speakers, co-marketing partners, and community members. Customer marketing closes deals (peer references), drives expansion (advocacy → upsell), and recruits new buyers (champions changing companies). Most B2B SaaS leaves 50%+ of customer-marketing leverage unused. This guide covers the operating system for activating it.

## What Done Looks Like

A working customer marketing program:
- [ ] Named owner (Customer Marketing Manager, CSM, or founder for early-stage)
- [ ] Customer advocate database (50-500 willing customers tagged in CRM)
- [ ] Case study pipeline (2-4 per quarter)
- [ ] Reference program (matching prospects with customers)
- [ ] Customer events / community
- [ ] Co-marketing program with high-value customers
- [ ] Recognition / rewards system (advocacy is asked, not assumed)
- [ ] Connected to sales (reference rate impacts close rate)
- [ ] Connected to CS (advocates are healthy customers; tracks NPS/churn correlation)
- [ ] Quarterly metrics reported to leadership

## 1. Define what customer marketing is

Many companies confuse customer marketing with customer success. Distinguish.

```text
Define customer marketing scope.

Customer Success (CS):
- Goal: customer health, retention, expansion
- Daily activities: onboarding, support, QBRs
- Owns: retention metrics, NPS, expansion
- Skills: relationship management, problem-solving

Customer Marketing (CM):
- Goal: customer voice amplified for sales / brand / community
- Daily activities: case studies, reference recruiting, events, co-marketing
- Owns: advocacy metrics, content from customers
- Skills: content production, relationship management, marketing

Overlap:
- CS identifies advocacy candidates
- CM converts to programs
- Tight collaboration

Why distinct from CS:
- CS focused on each customer's success
- CM focused on cross-customer programs
- Different metrics; different incentives

Common patterns:

Stage 1 (early): founder owns CM (no dedicated person)
Stage 2 ($5-15M ARR): part-time CSM hat OR shared with marketing
Stage 3 ($15M+): dedicated Customer Marketing Manager
Stage 4 ($30M+): customer marketing team (lead, advocacy manager, events specialist)

For [COMPANY], output:
1. Customer marketing scope vs CS
2. Recommended ownership at current stage
3. Reporting line (Marketing vs CS)
4. KPIs
5. Hiring plan as scale grows
```

The CS-vs-CM scope rule: CS works *with* customers; CM works *through* customers (to influence prospects). Different skills; different metrics.

## 2. Build customer advocate database

Before programs, identify who's willing to advocate.

```text
Build advocate database.

Identify advocates:

Signals:
- High NPS (9-10 promoters)
- Long-tenure (1+ years)
- Champion behavior (multiple users at account)
- Word-of-mouth referrals (told others)
- Speaking engagements (volunteered at conferences)
- Public reviews (G2 / Capterra)
- Featured in case studies

CRM tags:
- Custom field: Advocate Status
- Values: Asked / Willing / Active / Inactive
- Track: case study completed, references provided, events attended

Outreach to recruit:
- Founder / CEO note (most-effective for early customers)
- CSM-led program ("would you be willing to be referenced?")
- NPS follow-up (promoters → advocate ask)
- Email campaign (light-touch ask)

Permission tiers:
- Reference (private): "Will you take a 30-min prospect call?"
- Case study (public): "Will you let us write about your success?"
- Speaking (public): "Will you speak at our event?"
- Co-marketing (public): "Will you co-author / co-host with us?"
- Community (peer): "Will you participate in customer Slack / forum?"

Different customers do different things; track per-tier.

Database structure:
- advocates table: customer_id, type, permission_status, last_used, fatigue_score
- advocacy_history: each ask + response

Don't over-ask:
- 1-2 references per quarter max per customer
- Some customers can be asked more (deep relationships)
- Track fatigue; don't burn

Output:
1. Advocate database schema
2. Recruitment process
3. Permission tiers
4. Tracking system
5. Fatigue prevention rules
```

The "ask once, respect forever" rule: if customer says no to advocacy, don't ask again for 12 months. Also: don't burn champions by over-asking.

## 3. Case study production pipeline

Case studies are the highest-leverage customer marketing artifact.

```text
Build case study pipeline.

Cadence:
- Target: 2-4 case studies per quarter
- Each: 2-4 weeks production time
- Pipeline: 8-12 customers in different stages at any time

Process:

Stage 1: Identify candidates
- CS / sales nominate
- Advocate database query (high NPS + ROI)
- Customer requests (sometimes proactive)

Stage 2: Reach out
- Customer marketing or CSM sends pitch
- Frame: "We'd love to share your success story"
- Soft commitment

Stage 3: Discovery interview
- 30-60 min interview (founder / CEO / CSM)
- Ask: situation, problem, solution, results
- Ask for specific metrics ("saved X hours / month")
- Record (with permission)

Stage 4: Draft
- Writer (in-house or freelance) drafts case study
- 600-1500 words
- Visual elements: hero image, customer quote, metrics callouts
- Multiple formats (1-pager PDF, blog post, video)

Stage 5: Customer review
- Send draft for approval
- Round of edits
- Get final approval
- 2-3 review cycles typical

Stage 6: Publish
- Marketing site (case studies page)
- Sales-enablement (battle cards integration)
- Distribution (LinkedIn, email, ads)

Stage 7: Maintain
- Refresh annually if outcomes evolved
- Retire if customer churned

Anti-patterns:
- Logo-only "case studies" (no story)
- All "200% growth" hyperbole (loses credibility)
- No specific metrics (vague claims)
- Generic copy that could fit any company
- Customer doesn't sign off (legal risk)

Tools:
- CRM: track stages
- Content production: Notion / Google Docs
- Distribution: Webflow / Framer for landing pages

Output:
1. Pipeline framework
2. Per-stage owner + SLA
3. Interview script template
4. Draft template
5. Distribution checklist
```

The metric-anchored case study: "Reduced ticket-handling time from 8 minutes to 3 minutes." Specific. Compelling. Vague claims ("dramatically improved efficiency") fail to convince prospects.

## 4. Reference program

Matching prospects with customers for sanity-check calls.

```text
Run reference program.

Goal: every prospect deal has 1-3 reference calls before closing.

Mechanics:

Sales-side:
- Sales reps request references via internal tool
- Specify: prospect name, deal size, industry, use case
- Form: when needed (this week / next week / flexible)

Customer-marketing-side:
- Match: filter advocate database by industry / use case / tenure
- Reach out to 2-3 candidates (in case some can't)
- Get confirmation
- Brief candidate (talking points; don't script)

Connection:
- Customer-marketing introduces by email
- Sales rep + customer + (optional) CSM coordinate call
- 30-min call typical
- Customer talks; rep observes

Follow-up:
- Thank customer (gift / note)
- Track outcome (deal close + customer fatigue)
- Refresh customer's "last used" timestamp

Customer experience:
- Don't blast list (always ask permission)
- Vary which customer is asked
- Don't burn one customer (max 2-3 calls / quarter)

Reciprocity:
- For high-value customers: discount or feature credit
- Recognition: featured in customer marketing
- Connections: peer customer intros (highest-value)

Anti-patterns:
- Same customer asked 10x / year (burns out)
- No briefing (customer unprepared)
- Forced positive talking points (loses credibility)
- Reference calls without follow-up thanks

Tools:
- Reference management: ReferenceEdge, Influitive (paid)
- Or: spreadsheet + email
- ReferenceEdge integrates with Salesforce

Output:
1. Reference request flow
2. Matching algorithm
3. Customer briefing
4. Follow-up
5. Tooling
```

The "reference call closes deals" data: B2B SaaS deals with reference calls have ~30% higher close rates. Reference is one of the highest-ROI activities in sales.

## 5. Customer events / community

Bring customers together for cross-pollination.

```text
Run customer events / community.

Format options:

Quarterly user group:
- 10-30 customers in person or virtual
- Topic-focused (e.g., "Scaling your usage", "Best practices Q&A")
- Mix peer learning + product roadmap

Annual user conference:
- 100-1000+ attendees
- Multi-day; multi-track
- Customer speakers (case studies live)
- Co-marketing with customers

Customer Slack / Discord community:
- Always-on peer support + product team presence
- Monthly threads
- Customer-only or hybrid (customers + prospects)

Webinars:
- Customer-led sessions (they teach; you facilitate)
- Recordings published
- Customers as marketing assets

Customer Advisory Board (separate; see customer-advisory-board.md):
- Smaller, strategic
- Different from broad community

Goals:
- Peer connection (customers help each other)
- Brand association (advocates spread word)
- Feedback (light-touch; not strategic — that's CAB)
- Recruiting (customers refer prospects)

ROI considerations:
- Events are expensive (in-person $500-2K/attendee cost)
- Community is infrastructure (low-cost; high-ongoing-effort)
- Webinars are cheap; lower bonding

Anti-patterns:
- Forced "fun" / corporate-feel
- Sales pitches at customer events
- Inactive Slack channel (worse than no community)
- One-time conferences without follow-up

Output:
1. Format mix recommendation
2. Annual cadence
3. Owner per format
4. Budget
5. Success metrics
```

The community Slack rule: don't launch unless you have 1+ FTE running it. Inactive Slacks signal abandonment + harm brand.

## 6. Co-marketing with customers

Customers willing to co-market with you create powerful joint content.

```text
Build co-marketing partnerships.

Forms:

Joint blog posts:
- "How [Customer] uses [Product] to [Outcome]"
- Co-bylined; promoted by both
- Mid-effort; high-distribution

Joint webinars:
- Customer presents; you facilitate
- Promoted to both audiences
- Lead gen for both

Co-branded reports / research:
- Joint research with industry insight
- Both companies build authority
- High-effort; high-value

Conference sponsorships:
- Co-sponsor industry events with customer
- Joint booth / talks
- Cost-shared

Customer-on-podcast:
- Interview customer for your podcast
- Customer promotes via their channels
- Easy + effective

Speaker swap:
- Customer speaks at your event; you speak at theirs

Why customers say yes:
- Brand exposure (especially for emerging customers)
- Thought leadership
- Recruiting / hiring boost
- Reciprocal reach

Selection criteria:
- High brand-fit (customer's brand reflects well on you)
- Mutual audience overlap
- Customer health (not at risk)
- Champion willing

Approach:
- Joint planning meeting
- Equal effort split
- Distribution clear (who promotes what)

Anti-patterns:
- Too much branding pressure (forces customer logo prominence)
- One-sided benefit (only your marketing wins)
- Picking weak co-marketing partners (drag down your brand)

Output:
1. Co-marketing format options
2. Customer-selection criteria
3. Joint planning template
4. Distribution split
5. Quarterly co-marketing calendar
```

The mutual-benefit rule: co-marketing only works when both sides benefit. If customer doesn't get value (audience reach, recruiting, thought leadership), they won't invest.

## 7. Awards + recognition + advocacy programs

Recognition turns customers into long-term advocates.

```text
Build customer recognition program.

Forms:

Customer-of-the-year award:
- Annual recognition
- Categories (innovation, growth, community)
- Featured in conference / website
- High prestige

Champion program (advocacy SaaS-style):
- Tiered (Bronze / Silver / Gold) based on advocacy actions
- Points for: case study, reference call, speaking, social share, review
- Rewards: swag, exclusive access, co-marketing, gifts

Spotlights:
- Monthly customer feature
- Newsletter / blog
- Light-touch recognition

User Group leaders:
- Volunteer customers run regional / topical user groups
- Recognition + budget

Beta program access:
- Customers get early access to new features
- Recognition + feedback channel

Tools:

Influitive / Champion AdvocateHub:
- Advocacy SaaS
- Gamified points + rewards
- Mid-market+

Custom-built:
- Internal tracker
- Reward scheme

Reward types:
- Recognition (most-valued at executive level)
- Branded swag
- Gift cards
- Charitable donations in customer's name
- Exclusive access (founder dinners, beta features)
- Co-marketing opportunities

Anti-patterns:
- Recognition feels transactional (too commercial)
- Tier-system that creates customer-fatigue
- Rewards out of touch with audience (gaming SWAG to enterprise CFO)

Output:
1. Recognition framework
2. Reward types
3. Cadence
4. Tooling
5. Budget per quarter
```

The "exclusive access > free swag" insight: enterprise champions value invitation to founder dinner more than $200 gift card. Spend on experiences, not commodity.

## 8. Connect to sales — measurable impact

Customer marketing must drive sales results to justify investment.

```text
Connect customer marketing to sales.

Metrics:

Reference call rate:
- % of late-stage deals with reference call
- Target: 50%+ for $50K+ deals

Reference call → close rate:
- Deals with reference vs without
- Typically 25-40% higher close

Case study influence:
- % of new deals citing a specific case study
- Tracked via "How did you hear about us" + sales notes

Customer-sourced pipeline:
- Pipeline from customer referrals
- Includes: customer-introduced prospects, champions changing companies

Champions changing companies:
- Track when customer (champion) moves to new company
- Often becomes new customer
- "Buyer follows" rate

Connecting to revenue:
- Bizible / 6sense attribute case studies / events to deals
- Self-reported HDYHAU mentions specific customer
- Track in CRM

Operating cadence:
- Sales reps include reference asks in deal review
- Customer marketing reports quarterly
- Joint planning (sales + customer marketing)

Anti-patterns:
- Customer marketing not measured against revenue
- Sales doesn't request references (skip the program)
- No feedback loop (CM doesn't know which content closed deals)

Output:
1. KPIs for customer marketing
2. Attribution methodology
3. Sales-CM cadence
4. Revenue impact reporting
5. Annual review
```

The "champion follows" gold mine: track when champions change jobs. Outreach to their new company often results in new deal. This metric alone justifies a customer marketing manager.

## 9. Connect to CS — health correlation

Customer marketing also amplifies CS effectiveness.

```text
Connect customer marketing to customer success.

Correlation:
- Advocates are healthy customers (high NPS, low churn)
- Advocacy involvement strengthens relationship
- Companies that engage in customer marketing have higher retention

Mechanics:

CS surfaces advocates:
- After successful onboarding / QBR / expansion
- Suggest to customer marketing

Customer marketing strengthens CS:
- Recognition motivates customer team
- Community provides peer learning
- Case study published → champion's career boost

Closed-loop feedback:
- Customer marketing flags risks ("customer mentioned challenges in interview")
- CS investigates / acts

Don't conflate:
- CS metrics: NPS, retention, expansion
- CM metrics: advocacy, references, content

But align:
- Advocates' churn rate is leading indicator
- Disengaged customers signal product issues

Joint cadence:
- Weekly handoffs (CS → CM and back)
- Quarterly review of advocate health
- Shared dashboards

Output:
1. CS-CM workflow
2. Health correlation tracking
3. Risk flagging
4. Joint metrics
5. Weekly handoff process
```

The "advocates churn less" data: advocacy correlates with retention. Engaging customer in advocacy (case studies, references) deepens commitment + signals investment.

## 10. Stage by company scale

Customer marketing scales differently across stages.

```text
Customer marketing by stage.

Stage 1: <$1M ARR
- No formal program
- Founder owns customer relationships + advocacy
- 1-3 customer success stories (informal)
- No dedicated content production

Stage 2: $1-5M ARR
- Founder + first marketing hire share customer marketing
- 1-2 case studies / quarter
- Manual reference program
- Initial customer advisory feedback

Stage 3: $5-15M ARR
- Customer marketing as % of marketer's time
- 4-6 case studies / year
- Reference program structured
- Annual user event / quarterly user groups
- CRM tracks advocates

Stage 4: $15-30M ARR
- Dedicated Customer Marketing Manager
- 8-12 case studies / year
- Influitive or similar advocacy SaaS
- Quarterly events + annual conference
- Champion program

Stage 5: $30M+
- Customer Marketing team (Lead + 1-3 specialists)
- Continuous case study production
- Self-service reference matching
- Multi-format community (Slack, conferences, podcast)
- Co-marketing partnerships

Hiring:
- Stage 3: hire if marketing team has bandwidth
- Stage 4: dedicated CM manager (often from CS background)
- Stage 5: scale team (events, content, community specialists)

Output:
1. Stage-appropriate scope for [COMPANY]
2. Hiring plan
3. Investment level
4. Tooling
5. Maturity roadmap
```

The "first dedicated CM hire" pattern: $15-25M ARR. Often promoted from CS (knows customers) or marketing (knows content). Either works.

## What Done Looks Like

A working customer marketing program:

- [ ] Owner identified at appropriate stage
- [ ] Advocate database in CRM
- [ ] Case study pipeline (2-4/quarter at $5M+ ARR)
- [ ] Reference program with matching + briefing
- [ ] Customer events (quarterly + annual)
- [ ] Co-marketing partnerships (3-5/year)
- [ ] Recognition program (champion / award)
- [ ] Connected to sales (reference rate, case study influence)
- [ ] Connected to CS (advocate health correlation)
- [ ] Quarterly metrics reported to leadership
- [ ] Tooling appropriate to scale (manual → Influitive → custom)

The mistakes to avoid:

1. **Treat customer marketing as content marketing's afterthought.** Needs dedicated focus.
2. **Over-ask champions.** Burn out; lose them.
3. **Vague case studies.** No metrics; loses credibility.
4. **No reference program.** Sales reps fend for themselves; close rates suffer.
5. **Customer Slack without community manager.** Ghost-town.
6. **No recognition.** Customers feel used; advocacy shrinks.
7. **Disconnected from sales.** Can't measure ROI; investment dries up.
8. **Hire CMM too early or too late.** $15-25M ARR is the sweet spot.

## See Also

- [Customer References](./customer-references.md) — adjacent reference mechanics
- [Customer Case Studies](../2-content/customer-case-studies.md) — case study craft
- [G2 / Capterra Reviews](./g2-capterra-reviews.md) — review program
- [Customer Advisory Board](./customer-advisory-board.md) — strategic advisory (different from broad CM)
- [Quarterly Business Reviews](./quarterly-business-reviews.md) — CS context
- [Sales-to-CS Handoff](./sales-to-cs-handoff.md) — handoff
- [Customer Success Metrics Framework](./customer-success-metrics-framework.md) — CS metrics
- [Reduce Churn](./reduce-churn.md) — retention adjacent
- [Win-Loss Analysis](./win-loss-analysis.md) — deal feedback
- [Customer Lifetime Value Playbook](./customer-lifetime-value-playbook.md) — economics
- [Customer Referral Program](../3-distribute/customer-referral-program.md) — referrals adjacent
- [Community Seeding](../3-distribute/community-seeding.md) — community foundation
- [Conference & Event Marketing](../3-distribute/conference-and-event-marketing.md) — events adjacent
- [Founder Newsletter](../2-content/founder-newsletter.md) — content distribution
- [Webinars](../2-content/webinars.md) — webinar format
- [VibeReference: Webinar & Virtual Event Platforms](https://vibereference.dev/marketing-and-seo/webinar-virtual-event-platforms) — Zoom Webinars / Demio
- [VibeReference: Community Platforms](https://vibereference.dev/marketing-and-seo/community-platforms) — Slack / Discord / Circle
- [VibeReference: CRM Providers](https://vibereference.dev/marketing-and-seo/crm-providers) — advocate database
- [VibeReference: Customer Education & LMS Platforms](https://vibereference.dev/product-and-design/customer-education-lms-platforms) — adjacent learning programs
- [VibeReference: Survey & NPS Providers](https://vibereference.dev/product-and-design/survey-nps-providers) — NPS for advocate identification
