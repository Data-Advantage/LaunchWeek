[Back to Day 3: Distribute](README.md)

# Outbound Sales Playbook: Building a Predictable Cold-Sourcing Engine

Most B2B SaaS founders try outbound twice. The first attempt: founder sends 200 cold emails personally; books 15 demos; closes 3; calls it "outbound works." The second attempt (after hiring an SDR or outsourced firm): SDR sends 20,000 cold emails over 3 months; books 6 demos; closes 0; founder concludes "outbound doesn't work." Neither conclusion is right. The real lesson: outbound at scale is a SYSTEM — research, list-building, sequence design, deliverability, qualification, handoff to AE, measurement — and it requires investment that founders consistently underestimate.

A real outbound function is multi-channel (email + LinkedIn + sometimes phone), tightly integrated with marketing intent signals, ICP-disciplined, scaled via SDRs (or AI agents in 2026), measured at every step, and ruthless about dropping accounts that don't fit. Done well, outbound contributes 30-60% of pipeline at growth-stage B2B and is the most-controllable lever in the GTM stack. Done badly, it burns reputation, destroys deliverability, and produces a steady stream of false-positive demos that waste AE time.

This is distinct from [Cold Outreach](cold-outreach.md) (the messaging discipline), [Account-Based Marketing](account-based-marketing.md) (a strategic motion that incorporates outbound), and [Demand Generation Playbook](demand-generation-playbook.md) (broader system across all channels). This article is about OUTBOUND specifically — building the cold-sourcing engine end-to-end.

## What Done Looks Like

A working outbound sales function produces:

- Predictable, measurable pipeline contribution (30-60% of new pipeline at growth stage)
- ICP-fit accounts targeted (not random)
- Multi-channel cadences executed at scale
- Email deliverability protected (sender reputation > 95)
- Demo-set rate that supports unit economics (e.g., 1-3% of cold contacts → demo)
- Demo-to-opportunity conversion 50%+ (handoff quality good)
- AE feedback loop functional (which leads convert; which don't)
- Per-rep + per-segment KPIs trackable
- CAC at acceptable level (LTV/CAC > 3; payback < 18 months)
- Tech stack tight (no random tool sprawl)
- Compliance discipline (CAN-SPAM, GDPR, privacy)
- Continuous experimentation cadence (new sequences, new offers)

This pairs with [Cold Outreach](cold-outreach.md) (messaging), [Sales Engagement Platforms (Reference)](../../VibeReference/content/marketing-and-seo/sales-engagement-platforms.md), [Sales Intelligence & Prospect Data (Reference)](../../VibeReference/content/marketing-and-seo/sales-intelligence-prospect-data.md), [Account-Based Marketing](account-based-marketing.md), [Demand Generation Playbook](demand-generation-playbook.md), [Channel Selection](channel-selection.md), [Sales Playbook](../4-convert/sales-playbook.md), [Sales Discovery Call Playbook](../4-convert/sales-discovery-call-playbook.md), [Sales Forecasting & Pipeline Management](../4-convert/sales-forecasting-pipeline-management.md), [Sales Operations Playbook](../4-convert/sales-operations-playbook.md), [First Sales Hire](../4-convert/first-sales-hire.md), [Sales Territory Design](../4-convert/sales-territory-design.md), [Sales Compensation Plans](../4-convert/sales-compensation-plans.md), [Email Deliverability (VibeWeek)](../../VibeWeek/6-grow/email-deliverability-chat.md), and [Ideal Customer Profile](../1-position/ideal-customer-profile.md).

## When NOT to Run Outbound

Outbound isn't right for every business. Don't invest if:

**Your ACV is < $5K and motion is self-serve.** Outbound CAC > LTV. Use marketing channels instead.

**You don't have a clear ICP.** Outbound to "the world" wastes effort + damages reputation. Get [Ideal Customer Profile](../1-position/ideal-customer-profile.md) right first.

**You haven't done founder-led outbound.** Founder should send first 200-500 cold emails personally before delegating. Otherwise you can't write the playbook.

**Your product isn't yet demoing well.** Outbound surfaces demos; if demos don't close, outbound multiplies waste.

**Your runway is under 9 months.** Outbound takes 3-6 months to ramp. Use channels with shorter feedback loops.

**Your buyer is highly resistant to cold (e.g., enterprise security buyers).** Some buyer profiles strictly inbound. Different motion required.

**You don't have email deliverability hygiene.** Outbound at scale without proper SPF/DKIM/DMARC + warm-up = spam folder forever.

If any apply: fix the precondition.

## When Outbound Works

Best fit:

- **B2B with ACV $10K-$500K.** Sweet spot for outbound CAC.
- **Buyer is a known role / persona.** "VP Sales at SaaS company 50-500 employees" is targetable.
- **Product solves an obvious + recognizable pain.** "Speed up sales emails" is searchable + sellable cold.
- **Sales cycle 30-180 days.** Not too fast (no need for outbound) or too slow (cold contact loses momentum).
- **You have multi-channel signal sources.** ZoomInfo + LinkedIn + intent data > just spray.

## The Outbound Funnel

```
Standard outbound funnel:

1. ACCOUNTS IDENTIFIED (TAM)
   - ICP-fit companies enumerated
   - Source: sales intelligence (ZoomInfo, Apollo) + manual research
   - Typical: 2,000-20,000 target accounts

2. CONTACTS SELECTED PER ACCOUNT
   - 1-5 contacts per account (multi-threading)
   - Personas: economic buyer, champion, end-user
   - Source: sales intelligence

3. SEQUENCED (cadence active)
   - Each contact in a sequence (5-10 touches over 14-21 days)
   - Sequence per persona / per ICP cluster
   - Multi-channel: email + LinkedIn + sometimes phone

4. TOUCHED (sequence touches delivered)
   - Email opened (~30-50% rate; declining post-Apple Mail Privacy)
   - Email replied (~3-8% positive reply rate good)
   - LinkedIn engagement (5-15% acceptance + reply)

5. POSITIVE REPLIED (engaged)
   - Counter-question or interest
   - Even objections count if they engage

6. MEETINGS BOOKED
   - 1-3% of touched contacts → meeting
   - Often via Calendly link or SDR-AE handoff

7. SQO (Sales Qualified Opportunity)
   - 50-70% of meetings → SQO (depends on AE qualification)
   - Often filtered out: bad-fit, low-intent, wrong-stage

8. CLOSED WON
   - 20-30% of SQO → closed won (depends on stage)

Reverse-engineer from revenue target:

Revenue goal: $5M new ARR
Average ACV: $20K
Closed won needed: 250
Win rate: 25%
SQOs needed: 1,000
SQO rate from meetings: 60%
Meetings needed: ~1,667
Meeting rate from touched: 1.5%
Touched contacts: 111,000
Average touches per contact: 6
Total touch-events: 666,000

Equivalent capacity:
- 1 SDR: ~10,000 touches/month → 1 SDR/year for 120K touches
- That's ~6 SDRs needed for the volume
- Or: SDR + AI augmentation; or SDR + outsourced

Output: math that ties revenue → SDR headcount.
```

## Step 1: Define ICP + Account List

```
Tighter ICP = better outbound.

ICP definition:
- Industry / vertical
- Size (employees, revenue)
- Geography
- Tech stack (e.g., "uses Salesforce")
- Stage / funding signal
- Job titles / personas
- Buying triggers (e.g., recently raised; rapid hiring; new VP)

Account selection:

Source data via [Sales Intelligence Tools (Reference)](../../VibeReference/content/marketing-and-seo/sales-intelligence-prospect-data.md):
- ZoomInfo: broadest catalog
- Apollo.io: SMB-friendly
- Cognism: EU-strong
- Clearbit / HubSpot Breeze: HubSpot-aligned
- LinkedIn Sales Navigator: titles + filter by intent
- 6sense / Bombora: intent data layer
- RB2B: visitor de-anon

Account scoring:
- Tier 1 (top 100-500): perfect-fit, high-intent → priority
- Tier 2 (500-2K): good-fit → standard cadence
- Tier 3 (2K-10K+): broader fit → automated touches

Refresh:
- Quarterly account list refresh
- Track: which segments converted; which didn't
- Drop low-converting segments

Tools to manage:
- CRM (Salesforce / HubSpot) as system of record
- Sales engagement platform for cadences
- Analytics for measurement
```

## Step 2: Build Multi-Channel Cadences

```
A cadence = sequence of touches across channels over time.

Sample cadence (12-touch over 21 days):

Day 1: Email 1 (intro; specific pain; soft CTA)
Day 2: LinkedIn connect request (with personalized note)
Day 4: Email 2 (different angle; case study)
Day 6: LinkedIn message (if connected) or 2nd connect attempt
Day 9: Email 3 (offer specific value; deeper insight)
Day 11: Phone call (if titles + ACV justify)
Day 14: Email 4 (tactical; ROI math)
Day 16: LinkedIn engagement (like / comment on their post)
Day 19: Email 5 ("Bumping this; should I close the loop?")
Day 21: Email 6 (final break-up; "Closing your file")

Channel mix:
- Email: 40-60% of touches
- LinkedIn: 30-40%
- Phone: 0-20% (varies; phone-heavy for high-ACV)
- Direct mail / video: rare, high-leverage in specific cases

Personalization tiers:
- Tier 1 (top 100): 1:1 personalized; founder/AE writes
- Tier 2 (top 1K): templated + 1-2 sentence personalization
- Tier 3 (broader): AI-personalized at scale (but careful — risk of formulaic)

Cadence design principles:
- Open with curiosity, not pitch
- Each touch has different angle (don't repeat same message)
- Provide value (insight, data, resource) before asking
- Be specific (use their name, company, industry, recent news)
- Honest break-up (no false urgency at the end)

A/B testing:
- Subject line A/B
- Send time A/B
- Sequence length (5 vs 10 touches)
- Channel mix
- Persona differentiation

Sequence builder:
- Sales engagement platform (Outreach, Salesloft, Apollo)
- Templates per persona
- Iteration rapid; don't wait
```

## Step 3: Email Deliverability Hygiene

```
This is the #1 silent killer of outbound. Without good deliverability, your emails go to spam.

Foundational setup:

1. Domain authentication
- SPF record published
- DKIM signing enabled (per sender domain)
- DMARC policy: quarantine or reject
- Verify all configured correctly via mxtoolbox / DMARC report

2. Sender domain segregation
- Separate cold-outbound from transactional
- Use cold-outbound subdomain (e.g., outreach.yourco.com)
- Don't risk transactional reputation with cold

3. Warm-up
- New domain: 4-8 weeks of warm-up before scaling
- Use [Mailwarm / Lemwarm / Smartlead Warmup] for automated warm-up
- Gradually increase volume

4. Volume limits
- Per-mailbox: 30-50 cold emails/day max (Google Workspace abuse threshold)
- Per-day across team: scaled to mailbox count
- Don't blast 1000+ from one mailbox

5. Multiple sending mailboxes
- Spread volume across 5-20 mailboxes
- Each mailbox 30-50/day
- Total team: 1500-10,000/day capacity

6. Quality content
- Avoid spam-trigger words ("Free", "Discount", "Act now")
- Don't include images (drives spam scoring)
- Plain text > heavy HTML for cold
- Custom signatures with no images / minimal links

7. List hygiene
- Verify emails before sending (Hunter / NeverBounce)
- Bounce-rate < 5% (10%+ flags spam)
- Remove hard-bounces immediately

8. Monitoring
- Sender reputation tools (Postmaster Tools, Sender Score)
- Watch open rates (declining = deliverability issue)
- Watch reply rates
- Spam-complaint rate <0.1%

Sales-engagement platforms handle most of this; you still need to do the foundational setup.
```

## Step 4: Personalization at Scale

```
Outbound at scale tension: personalize OR scale, hard to both.

The 2026 stack:

A. Tier 1 (top 100): manual 1:1
- Founder / AE writes personally
- 30-60 minutes per email
- Highest reply rate (15-30%)
- Highest CAC; only for biggest accounts

B. Tier 2 (top 1K): templated + light personalization
- SDR adds 1-2 sentences specific to prospect
- Reference recent news, role, company specifics
- 5-10 minutes per email
- Reply rate 8-15%

C. Tier 3 (broader): AI-personalized
- Tools: Clay, Smartlead, Apollo AI personalization
- AI scrapes LinkedIn / company website / news
- Generates first-line personalization
- Cost: $0.10-1.00 per personalized email
- Reply rate 3-8% (declining over time as everyone uses AI)

D. Tier 4 (broadest): fully templated
- No personalization beyond [first_name]
- Cheap; high volume
- Reply rate 1-3%
- Risk of being filtered as spam

Best practice:
- Don't use AI for top-50 accounts (sound generic)
- Do use AI for tier 3 / 4 to scale
- Always have a human review step for tier 2

AI personalization tools:
- Clay (orchestration + scrape + AI; popular 2024-2026)
- Smartlead AI
- Apollo AI Sequences
- Outreach AI
```

## Step 5: SDR Org Structure + Compensation

```
SDR (Sales Development Rep) is the standard outbound role.

When to hire:
- Founder personally validates outbound works (200-500 self-sent emails)
- $1-3M ARR with proven outbound conversion
- AE bandwidth limited
- Predictable demand for cold-sourcing

Profile:
- 0-3 years experience (entry-level role)
- Resilient (rejection-heavy)
- Coachable
- Some sales process discipline
- Domain familiarity (or fast learner)

Comp structure:
- Base: $50-75K (US; varies by region)
- Variable: $20-40K (tied to meetings booked + SQO conversion)
- Total OTE: $70-115K
- 70/30 split typical (70% base, 30% variable)
- Variable tied to:
  - Meetings booked (60% weight)
  - SQO conversion (30% weight)
  - Quality scoring by AE (10% weight)

Quota:
- 60-100 meetings booked per month per SDR (varies by ACV; lower for high-ACV)
- Plus quality threshold (60%+ converted to SQO)

Career path:
- SDR → Senior SDR → AE (typical 12-18 months)
- Some stay SDR; promote to SDR Manager

Org size:
- 1 SDR per 1-2 AEs is typical
- For $5M ARR: 2-3 SDRs + 2-4 AEs
- For $50M ARR: 20-40 SDRs + 30-60 AEs

Outsourced alternative:
- BDR-as-a-service (e.g. Belkins, CIENCE, Belkins, SalesRoads)
- Pros: ramp fast; lower fixed cost
- Cons: quality variable; hard to control culture; less coachable
- Use for early validation; transition to in-house once proven

AI SDR alternative (2026 emerging):
- 11x.ai, Artisan AI, regie.ai, others
- AI does prospecting + outreach + booking
- Cost: $5-15K/mo per AI SDR equivalent
- Quality varies; supplement not replace humans
- Best for: top-of-funnel volume; not quality-replacement
```

## Step 6: Tech Stack

```
Sample outbound stack (typical 2026):

Sales engagement platform:
- Outreach.io (enterprise standard)
- Salesloft (Outreach competitor)
- Apollo.io (all-in-one; cheaper)
- Lemlist (modern; budget)
- HubSpot Sales (HubSpot-bundled)
- Smartlead (modern; affordable)

Sales intelligence:
- ZoomInfo (enterprise standard; expensive)
- Apollo.io (data + outreach combined)
- Cognism (EU-strong)
- Clearbit / HubSpot Breeze
- LinkedIn Sales Navigator

Email infrastructure:
- Google Workspace (most common; multiple mailboxes)
- Microsoft 365 (alternative; some platforms not as well integrated)
- Mailgun / dedicated SMTP for transactional only

Warm-up:
- Mailwarm
- Lemwarm
- Smartlead Warmup
- Apollo Warm-Up

CRM:
- Salesforce (enterprise B2B standard)
- HubSpot CRM (SMB / mid-market)

Calendar booking:
- Calendly
- Cal.com
- Chili Piper (round-robin to AE; advanced)
- HubSpot Meetings

Personalization:
- Clay (orchestration + scrape; popular)
- Smartlead AI
- Apollo AI

Tracking + analytics:
- CRM dashboards
- Outreach / Salesloft analytics
- Custom Looker / Mode dashboards

Data enrichment:
- Clearbit Reveal / RB2B (visitor de-anon)
- 6sense / Bombora (intent data)
- Hunter.io (email finder for ad-hoc)
- NeverBounce (verification)

Recording / coaching:
- Gong / Chorus (call recording + analysis)
- Coaching layer for AE + SDR coaching

Default stack for $1-10M ARR:
- Apollo.io (data + sequences + dialer)
- HubSpot CRM
- Calendly
- Clay (for advanced personalization)
- Smartlead Warmup
```

## Step 7: Measurement + Iteration

```
Per-SDR metrics:
- Touches/day (volume)
- Meetings booked
- Meetings held (some no-show)
- Meeting → SQO conversion
- SQO → opportunity conversion
- Activity per stage
- Reply quality (positive / negative)

Per-cadence metrics:
- Open rate
- Reply rate
- Positive reply rate
- Meeting set rate
- Per-step performance

Per-segment metrics:
- Conversion by ICP segment
- Conversion by industry
- Conversion by company size
- Conversion by persona

Per-message metrics:
- Open rate by subject line
- Reply rate by message
- Spam complaint rate

Quarterly retrospective:
- Which sequences worked
- Which didn't (kill them)
- New experiments to run
- ICP refinement signals

A/B testing:
- One variable at a time
- Statistically significant sample (1K+ touches per variant)
- Iterate quickly

Dashboards:
- Daily: SDR activity + meetings booked
- Weekly: cadence performance
- Monthly: conversion funnel
- Quarterly: ICP-fit + segment learnings
```

## Common Failure Modes

```
Failure 1: Spray-and-pray
- Pattern: 50K cold emails to anyone with relevant title
- Reality: <1% conversion; reputation damage; spam folder
- Fix: tight ICP; quality > volume

Failure 2: No deliverability hygiene
- Pattern: emails go to spam; SDR thinks "outbound doesn't work"
- Fix: SPF/DKIM/DMARC; warm-up; volume limits; monitor sender reputation

Failure 3: Generic templates
- Pattern: "Hey [first_name], hope you're well..." (everyone sends this)
- Reality: 0.5% reply rate; brand erosion
- Fix: personalization beyond [first_name]; specific to their context

Failure 4: SDR-AE handoff broken
- Pattern: SDR books meeting; AE no-shows or comes unprepared
- Reality: customer trust hit; SDR demoralized
- Fix: tight handoff process; AE acknowledges meeting in <2hr; pre-call brief

Failure 5: AE qualifies meetings out aggressively
- Pattern: SDR books; AE rejects 70% as "not qualified"
- Reality: SDR comp dies; SDR quits
- Fix: clear MQL definition; SDR-AE 1:1 on disagreements; calibration

Failure 6: Compensation tied to volume only
- Pattern: SDR books junk meetings to hit quota
- Reality: AE wastes time; conversion poor
- Fix: comp tied to QUALITY (SQO conversion + AE quality score)

Failure 7: No founder review of cadences
- Pattern: SDRs writing on their own; founder doesn't review
- Reality: bad messaging; brand voice erosion
- Fix: founder reviews cadence library quarterly minimum

Failure 8: Buying ZoomInfo without strategy
- Pattern: $30K/yr on ZoomInfo; SDR makes random lists
- Reality: data without strategy = waste
- Fix: ICP-driven account selection; review which segments convert

Failure 9: Outbound + Marketing not aligned
- Pattern: marketing nurturing same accounts; SDR cold-emails too
- Reality: customer feels stalked
- Fix: ABM coordination; suppression lists; cadence respect for marketing engagement

Failure 10: Three-channel cadences without depth
- Pattern: 12-touch cadence with same generic message rephrased
- Fix: each touch a unique angle / value-add

Failure 11: Outsourced firm produces low-quality
- Pattern: BDR-as-a-service; high volume; low conversion
- Fix: rigorous QA; founder reviews messages; convert to in-house

Failure 12: Phone call low-touch
- Pattern: SDR doesn't call; relies on email only
- Reality: phone calls in cadence increase conversion 30-50%
- Fix: include calls; train SDRs

Failure 13: Compliance ignored (GDPR / CAN-SPAM)
- Pattern: cold email to EU contacts without legitimate interest
- Reality: legal risk; reputation damage
- Fix: compliance review per region; opt-out clear

Failure 14: AI SDR + no human oversight
- Pattern: 11x.ai sends thousands; nobody reviews
- Reality: hallucinated content; brand damage
- Fix: human review batch; AI for volume + human for quality

Failure 15: No experiment cadence
- Pattern: same sequences for 12 months
- Reality: market shifts; stale messages
- Fix: 1-2 new sequence experiments per quarter
```

## What Done Looks Like (recap)

A working outbound function:

- [ ] ICP + account list disciplined + reviewed quarterly
- [ ] Multi-channel cadences (email + LinkedIn + phone)
- [ ] Email deliverability healthy (>95 sender score)
- [ ] Personalization tiered (manual / templated / AI)
- [ ] SDR org structure + comp aligned with quality + quantity
- [ ] Tech stack tight (sales engagement + intel + CRM + warm-up)
- [ ] SDR-AE handoff process documented + functional
- [ ] Per-SDR + per-cadence + per-segment metrics tracked
- [ ] A/B testing cadence active (1-2 experiments / quarter)
- [ ] Pipeline contribution measurable (30-60% of new pipeline)
- [ ] CAC at acceptable level (LTV/CAC > 3)
- [ ] Compliance + reputation protected

## Mistakes to Avoid

- **Spraying without ICP discipline.** Quality > volume always.
- **Skipping deliverability hygiene.** Emails go to spam = nothing else matters.
- **Generic templates.** Personalization beyond [first_name] is non-negotiable.
- **Volume-only SDR comp.** Quality must factor in.
- **Skipping founder validation.** Founder sends 200-500 emails before SDR hire.
- **AI SDR without human oversight.** Volume × hallucination = damage.
- **Outsourced firm without QA.** Low cost; low conversion; brand risk.
- **Marketing-Sales misalignment.** Suppression lists + ABM coordination.
- **No cadence iteration.** Markets shift; stale messages stop working.
- **Phone-skipping.** Calls increase conversion materially.
- **Compliance gaps (especially GDPR).** Legal risk + reputation.
- **No SDR career path.** Promote to AE; don't trap them.
- **Forgetting handoff.** SDR books meeting; AE must execute beautifully.
- **Tracking only volume.** SQO conversion is the truer metric.

## See Also

- [Cold Outreach](cold-outreach.md) — sister discipline (messaging-focused)
- [Account-Based Marketing](account-based-marketing.md) — sister motion
- [Demand Generation Playbook](demand-generation-playbook.md) — broader system
- [Channel Selection](channel-selection.md) — depended-upon
- [Sales Playbook](../4-convert/sales-playbook.md) — handoff target
- [Sales Discovery Call Playbook](../4-convert/sales-discovery-call-playbook.md) — what AE does post-handoff
- [Sales Forecasting & Pipeline Management](../4-convert/sales-forecasting-pipeline-management.md) — pipeline rolls up
- [Sales Operations Playbook](../4-convert/sales-operations-playbook.md) — operational systems
- [First Sales Hire](../4-convert/first-sales-hire.md) — adjacent
- [Sales Territory Design](../4-convert/sales-territory-design.md) — adjacent
- [Sales Compensation Plans](../4-convert/sales-compensation-plans.md) — comp framework
- [Sales Onboarding & Ramp](../4-convert/sales-onboarding-ramp.md) — adjacent
- [Annual Sales Kickoff](../4-convert/annual-sales-kickoff.md) — adjacent
- [Founder-Led Sales Handoff](../4-convert/founder-led-sales-handoff.md) — adjacent
- [Ideal Customer Profile](../1-position/ideal-customer-profile.md) — depended-upon
- [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md) — adjacent
- [Sales Engagement Platforms (Reference)](../../VibeReference/content/marketing-and-seo/sales-engagement-platforms.md) — tooling
- [Sales Intelligence & Prospect Data (Reference)](../../VibeReference/content/marketing-and-seo/sales-intelligence-prospect-data.md) — tooling
- [Marketing Automation Platforms (Reference)](../../VibeReference/content/marketing-and-seo/marketing-automation-platforms.md) — adjacent
- [Email Deliverability (VibeWeek)](../../VibeWeek/6-grow/email-deliverability-chat.md) — depended-upon
- [Email Marketing Providers (Reference)](../../VibeReference/content/marketing-and-seo/email-marketing-providers.md) — adjacent
