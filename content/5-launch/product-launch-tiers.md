[Back to Day 5: Launch](README.md)

# Product Launch Tier Strategy: T1, T2, T3 — Right-Sizing Each Launch

Most B2B SaaS launch every feature the same way: a blog post, a tweet, an email to customers, an in-app announcement banner, three weeks of marketing nudging it. Six months in, nobody reads the launches anymore. Customers have launch fatigue. Marketing is exhausted. Half of the "launches" were tiny improvements that didn't deserve the noise; the other half were real product news that got drowned out by the noise. The fundamental error: treating every launch the same.

The fix is **tiered launches**. Most modern product-led companies (Linear, Vercel, Stripe, Notion, Anthropic) use some version of T1 / T2 / T3 / T4 to right-size launch effort to launch significance. T1 is "stop the press; CEO is on stage" — 3-6 per year max. T2 is "this is real news for our customers" — monthly or bi-monthly. T3 is "improvements you'll notice" — every changelog post. T4 is "internal only / quiet ship" — dozens per week. The discipline isn't the tier names; it's matching launch intensity to actual customer impact, so the team has bandwidth for the genuine T1s and customers have bandwidth to care.

This guide is the playbook for designing your launch tier system, deciding what's a T1 vs. T2 vs. T3, and operationalizing it across product / marketing / sales / CS so launches are predictable + impactful instead of constant + noisy.

## What Done Looks Like

A working launch tier system produces:

- A clear, written definition of T1 / T2 / T3 / T4 with criteria
- A decision rule: "this feature → this tier" with a named DRI
- 3-6 T1 launches per year (not more)
- Monthly T2 launches (12-15 per year)
- Weekly T3 changelog (50-200 per year)
- Continuous T4 quiet ships (no count)
- Marketing team capacity matched to tier loadout (not over-extended on T3s)
- Customers who notice T1s and read T2s
- Sales team that knows which features to lead with in pitches
- A "no launch" path for genuinely internal/cleanup work
- Quarterly portfolio review of upcoming tier-mix

This pairs with [Launch Checklist](launch-checklist.md) (the operational checklist), [Launch Announcements](launch-announcements.md) (multi-channel announcement coordination), [Press Outreach](press-outreach.md) (T1 press cycle), [Press Kit / Media Kit](press-kit-media-kit.md) (assets per tier), [Annual User Conference](annual-user-conference.md) (T1 stack-release moment), [Conference Launches](conference-launches.md) (event-tied T1s), [Hacker News](hacker-news.md), [Product Hunt](product-hunt.md) (channel discipline by tier), [Public Roadmap](../2-content/public-roadmap.md) (signals tier intent), and [Changelog & Roadmap (VibeWeek implementation)](../../VibeWeek/6-grow/changelog-roadmap-chat.md) (the surface for T3s).

## The Tier System

```
T1 — TENT-POLE
- "This is the news of the quarter / year for our customers"
- Major product, new product line, big strategic shift, major partnership
- Typical cadence: 3-6 per year
- Launch effort: 4-8 weeks
- Channels: blog post, press, video, customer email, conference moment, sales enablement, CEO+founder Twitter, investor update
- Customer expectation: "we should learn about this from multiple sources"

T2 — MAJOR
- "This is meaningful news for our customers"
- New significant feature, integration, capability, milestone
- Typical cadence: 1-2 per month
- Launch effort: 1-2 weeks
- Channels: blog post, social, customer email, in-app notification, sales enablement
- Customer expectation: "this is in the regular updates I see from them"

T3 — IMPROVEMENT
- "We shipped something you'll notice"
- Quality-of-life improvements, smaller features, incremental enhancements
- Typical cadence: weekly batched
- Launch effort: 1-3 hours per item; bundled in changelog
- Channels: changelog, in-app changelog, occasional social
- Customer expectation: "I check the changelog when I'm curious"

T4 — QUIET SHIP
- "Internal / non-customer-visible"
- Bug fixes, cleanup, internal infrastructure, refactors
- Typical cadence: continuous
- Launch effort: zero (just merge)
- Channels: none external
- Customer expectation: nothing
```

The names matter less than the criteria. Linear uses "X.0 vs X.Y"; Stripe uses Sessions and Releases; Vercel uses Ship moments. Pick names that work for your team.

## What Makes Something T1 vs T2 vs T3

Tier assignment is the most contested decision. PMs want their feature to be T1. Marketing wants fewer T1s. Engineering doesn't care. Without explicit criteria, every launch creeps to T1 and the system collapses.

```
T1 criteria — a launch must meet ALL of these:

1. NEW PRODUCT or NEW PRIMARY PERSONA
   - "We just shipped X" where X is a new product surface OR opens a new buyer
   - Or: a major strategic shift announceable in 1 sentence
   - NOT: a big feature on existing product (that's T2)

2. SALES IMPACT IS PIPELINE-MEANINGFUL
   - We expect this to drive measurable new pipeline (not "more leads")
   - 6-month forward: at least $X of pipeline attributable
   - Sales team has explicit motion built around it

3. PRESS-WORTHY
   - Real journalists at TechCrunch / The Information / Wall Street Journal would write a story
   - Not: "could write a story if we pitched aggressively"; this means "obvious story angle"

4. CEO IS ON CAMERA / STAGE
   - Founder-led keynote moment, video, or major-conference stage
   - This is binding test: if your CEO won't carry it, it's not T1

5. THE RESOURCE COST IS WORTH IT
   - You'll spend 4-8 weeks of marketing + product + design + PR
   - The expected upside justifies that

If any of these is "no," it's T2 or below.

T2 criteria — a launch must meet at least 3:

1. SIGNIFICANT NEW CAPABILITY
   - Real new feature; demo-able; sales can lead with it

2. CUSTOMER COMMS REASONABLE
   - "This affects how customers use the product" (e.g. integration, workflow change)
   - Customer email + blog post + in-app

3. MARKETING IS WILLING TO INVEST 1-2 WEEKS
   - Not just "blog post and forget"; coordinated channels

4. CUSTOMER IS LIKELY TO TELL ANOTHER CUSTOMER
   - Mid-significance feature; customers organically share

T3 criteria — anything that's customer-visible but doesn't meet T2:

- Improvements; performance; small new features; UI polish
- Bundled in weekly/monthly changelog
- One paragraph + screenshot per item
- No dedicated marketing campaign

T4 criteria — anything that's NOT customer-visible:

- Bug fixes (unless major outage-related; then T2 or T1)
- Refactors, cleanups, internal tools
- Performance improvements that aren't user-visible

Edge cases:
- Major bug fix or outage post-mortem? Could be T1 (we owe the world transparency) or T2 depending on impact
- Pricing/packaging change? Almost always T1 because it affects every customer
- Removed feature? T2 minimum (deprecation comms matter)
- Compliance / certification? T2 for the audience that cares
- Open-sourcing something? T1 if strategic; T2 if just a library

Decision DRI:
- Product Marketing leads tier-assignment decision
- CEO + Marketing-lead can elevate (rare)
- A "tier appeal" process: PM can argue for higher tier with criteria evidence
```

## The Channels-Per-Tier Matrix

Every tier has a default channel mix. Don't recreate the question for each launch.

```
T1 channels (all of these):
- Long-form blog post (founder-bylined often)
- 3-5 min product video (demo + narrative)
- Press release + 1:1 outreach to 5-15 reporters
- Customer email (segmented by relevance)
- In-app: prominent banner + tour
- CEO + founder social (Twitter/X, LinkedIn) — multi-day presence
- Sales enablement: pitch deck update, battle card, demo flow
- Customer Success: enablement on how to talk to existing customers
- Investor update inclusion
- Conference / podcast / webinar tie-ins
- Sometimes: press exclusive (one outlet first)
- Sometimes: live launch event / livestream

T2 channels:
- Blog post (PMM-bylined, polished)
- 1-2 min video demo or GIF
- Customer email (broader; less segmented)
- In-app notification / banner
- Social posts (founder + company accounts; few-day presence)
- Sales enablement: 1-page brief
- CS enablement: how-to talking points

T3 channels:
- Changelog entry (1 paragraph + screenshot)
- In-app changelog menu
- Sometimes: social post (company account)
- Bundled in monthly customer roundup email

T4 channels:
- None external
- Optional: brief mention in monthly internal all-hands
- May appear in audit log / system status

Resource expectations per tier:
T1: ~6 person-weeks across PMM + Eng + Design + Comms + CEO time
T2: ~1-2 person-weeks (mostly PMM)
T3: ~1-3 hours (PMM/eng combo)
T4: ~0 hours dedicated to launch
```

## Annual Launch Calendar

The hard part of running a tier system: planning the year's launches.

```
Annual launch calendar (example for $20M ARR B2B SaaS):

Q1:
- T1 #1: Major new product line (announced at user conference)
- T2 launches: 3 (one per month)
- T3: ~25 changelog items
- T4: continuous

Q2:
- T1 #2: New buyer persona expansion (e.g. "now for IT teams")
- T2: 4
- T3: ~30
- T4: continuous

Q3:
- T1 #3: Strategic partnership announcement
- T2: 3 (lighter; summer slowdown)
- T3: ~20
- T4: continuous

Q4:
- T1 #4: Year-end vision / 2027 platform direction (not just product)
- T2: 4
- T3: ~30
- T4: continuous

Total annual: 4 T1, 14 T2, ~105 T3, hundreds of T4

Calendar coordination rules:
- T1s spaced at least 8 weeks apart (no calendar collisions)
- T2s avoid T1 windows (2 weeks before / after)
- T3s continuous; weekly changelog cadence
- Avoid major launches: 2 weeks before/after Christmas, July 1-7, Thanksgiving week
- Conference-tied T1s anchor the calendar (build around them)

Quarterly portfolio review:
- Marketing + product + sales review next quarter's launch slate
- Approve tier assignments
- Align resourcing (Eng has bandwidth? Marketing has bandwidth?)
- Adjust scope / timing
```

## How Each Tier Actually Operates

```
T1 LAUNCH (4-8 week project):

Week -8 to -6: Strategy + scope
- Define the launch narrative (1-page brief)
- Pick anchor moment (user conference / press exclusive / standalone)
- Confirm CEO availability for video + press
- Lock content scope (what's in / out)
- Build cross-functional crew: PMM lead, Eng tech lead, Design lead, PR lead, Sales lead, CS lead, CEO

Week -6 to -4: Asset production
- Blog post drafted (multiple rounds with founder)
- Demo video scripted + recorded + edited
- Press kit assembled
- Customer email drafted
- Sales enablement: pitch deck + battle card + demo
- CS enablement: customer-facing FAQ + objection handling

Week -4 to -2: Press + analyst tour
- 1:1 briefings with target reporters (under embargo)
- Analyst briefings (Gartner / Forrester if you have relationships)
- Customer reference recruiting (1-3 customers to quote in press)

Week -2 to 0: Final prep
- Embargo locked
- All content in final review
- Sales team trained
- CS team trained
- Internal all-hands preview (1 week before)
- Final dry run with CEO

LAUNCH DAY:
- Embargo lifts at agreed time (often 9am ET)
- Blog post + video go live
- Press releases distribute
- Email + in-app + social fire
- Founder + executives engage on social all day
- Sales-enablement webinar same week

LAUNCH WEEK +1 to +4:
- Webinar deep-dive
- Conference / podcast appearances
- Influencer / customer amplification
- Sales motion in full force
- Daily metrics review (pipeline, signups, social engagement)

LAUNCH WEEK +6 to +12:
- Recap blog: "What we learned + what's next"
- ROI assessment for portfolio review
- Customer adoption metrics

T2 LAUNCH (1-2 week project):

Week -2:
- Blog post drafted
- Demo GIF / video produced
- Customer email written
- Sales enablement brief drafted

Week -1:
- Internal review
- In-app banner designed
- Social posts queued

Week 0 (Tuesday or Wednesday):
- Blog goes live
- Email sends
- In-app appears
- Social posts publish
- Sales briefed

Week +1:
- Optional: webinar
- Adoption metrics check

T3 LAUNCH (weekly batch):

- Tuesday: PMM compiles changelog from week's shipped features
- Wednesday: review with eng team for accuracy
- Thursday: changelog publishes
- Optional: monthly digest email rolls them up

T4 LAUNCH (no launch):

- Engineering merges
- Done
```

## Common Failure Modes

```
Failure 1: Tier inflation (everything becomes T1)
- Pattern: PMs lobby for T1; criteria erode; 12 T1s per year; team exhausted; nothing lands
- Fix: hard cap on T1s per year; CEO + marketing-lead approval required

Failure 2: No T3 / changelog discipline
- Pattern: every launch is T2 minimum; weekly small updates feel "below the bar"
- Reality: customers want a regular changelog; absence makes product feel stagnant
- Fix: commit to weekly T3 batch; even 2-3 items is fine

Failure 3: T1 launches collide
- Pattern: two T1s in same month; marketing capacity insufficient; both underdelivered
- Fix: 8-week minimum spacing; calendar discipline owned by marketing-lead

Failure 4: Sales team unaware of T2 launches
- Pattern: launches happen; sales discovers via customer; battle card outdated
- Fix: T2 includes sales enablement as a delivery checkpoint (not an afterthought)

Failure 5: Tier assignment without criteria
- Pattern: tiers exist on paper; in practice it's "what feels right"
- Fix: written criteria + named DRI for tier disputes

Failure 6: T1 without CEO
- Pattern: CEO too busy; T1 launch happens with VP-level voice
- Reality: customers and press feel the absence
- Fix: bind T1 to CEO availability (no CEO = no T1; downgrade or postpone)

Failure 7: Launch day = build complete day
- Pattern: feature ships Monday; launch is Monday; no time for assets
- Fix: feature complete date is at least 2 weeks before T2 launch, 6 weeks before T1
- Better: feature flag-shipped behind toggle; turned on at launch day

Failure 8: T3 changelog unread because it's boring
- Pattern: changelog has 47 entries; all 1-line; "Bug fixes and improvements"
- Fix: write changelog entries with VOICE; show what got better; include screenshots/GIFs

Failure 9: No post-launch retrospective
- Pattern: T1 ships; team moves on; no learning captured
- Fix: 2-week post-launch retro for every T1; quarterly retro for T2 portfolio

Failure 10: PR-led timing instead of customer-led timing
- Pattern: launch when press is "available"; ignore that customers are at Dreamforce that week
- Fix: customer-attention calendar drives launch timing; press fits in

Failure 11: Tier name confusion
- Pattern: team uses "big launch" / "small launch" / "ship it"; nobody agrees what each means
- Fix: written definitions; share in onboarding; refer back in launch reviews

Failure 12: Engineering not bought-in
- Pattern: marketing builds launch plan; eng learns date 2 weeks out; build slips; launch slips; trust erodes
- Fix: eng tech lead in tier-assignment from day one; launch date is binding for both

Failure 13: T1 launch metrics never tracked
- Pattern: launch happens; team celebrates; no data on what worked
- Fix: launch dashboard (signups, pipeline, social engagement, press coverage); 30-day review

Failure 14: Marketing fatigue cycle
- Pattern: too many T1s + T2s; marketing burns out; T3s neglected; product feels neglected
- Fix: portfolio review with explicit capacity-vs-load math each quarter

Failure 15: Customer feels overwhelmed
- Pattern: every week, a new launch email; customers tune out
- Fix: monthly digest for T2/T3 unless truly time-sensitive; T1 stands alone
```

## Tier System Operating Cadence

Once tiers are defined, here's the rhythm to maintain them:

```
Weekly:
- T3 changelog publishes (DRI: PMM)
- T4 quiet ships continue (no formal process)

Bi-weekly:
- Launch sync: PMM + Eng + Design review what's shipping next 4 weeks
- Tier assignments confirmed for next 4 weeks

Monthly:
- T2 launches execute on planned dates
- Customer monthly digest email rolls up T2 + T3 highlights
- Portfolio metrics review (adoption, pipeline impact)

Quarterly:
- Launch portfolio review (next quarter's T1 + T2 slate)
- Resourcing alignment (do we have capacity for the planned slate?)
- Retrospective on past quarter's launches (what hit, what missed)
- Calendar update with 6-month forward view

Annually:
- Annual launch tier strategy review (do tier definitions still match company stage?)
- Adjust criteria as needed (e.g. T1 bar may rise as company grows)
```

## Hire Signal: Product Marketing Manager

Tier discipline is the work of a Product Marketing Manager (PMM). Without one, the system collapses.

- Pre-$3M ARR: founder + part-time marketing-help owns launches
- $3-15M ARR: first PMM hire (often the first marketing hire; see [First Marketing Hire](../4-convert/first-marketing-hire.md))
- $15-50M ARR: PMM team of 1-3
- $50M+ ARR: PMM team with launch ops specialist

Profile of the first PMM:
- Background: PMM at growth-stage SaaS, OR: hands-on marketer with launch chops
- Skills: writes well (the blog post is theirs); coordinates well (cross-functional choreography); judgment (tier disputes)
- Mindset: customer-benefit framing; protective of the launch quality bar
- Comp: $130K-200K base depending on stage and location

## What Done Looks Like (recap)

A working launch tier system:

- [ ] Written tier definitions (T1/T2/T3/T4) with criteria
- [ ] Annual launch calendar with tier assignments
- [ ] 3-6 T1s per year, no more
- [ ] Monthly T2s executing on schedule
- [ ] Weekly T3 changelog publishing
- [ ] Continuous T4 quiet ships
- [ ] Cross-functional buy-in (eng, marketing, sales, CS)
- [ ] Sales team enabled per tier (full enablement T1; brief for T2)
- [ ] Customer email cadence right-sized (no over-emailing)
- [ ] CEO time committed for T1s in advance
- [ ] Launch retrospectives feeding next-quarter plans
- [ ] Customer NPS isn't dropping due to launch fatigue
- [ ] Sales pipeline impact measurable from T1+T2 launches
- [ ] PMM (or founder) is the launch-tier DRI

## Mistakes to Avoid

- **Tiers without criteria.** If "T1 vs T2" is a feeling, every launch is T1.
- **No hard cap on T1s.** Marketing-lead must be empowered to say no.
- **Skipping the changelog.** Customers want to see continuous progress; weekly changelog is the surface.
- **CEO not bound to T1s.** Without CEO commitment, the T1 disappears into a T2 quietly.
- **Launching too close to other companies' launches.** Salesforce, AWS, Google launches are tide; surf the waves carefully.
- **Hybrid tiers ("between T1 and T2").** Pick a tier; commit; ship.
- **No post-launch retrospective.** Without learning, the system stagnates.
- **Sales surprised by launches.** Sales enablement is a delivery checkpoint, not an afterthought.
- **Customer-comms cadence too dense.** Monthly digest beats weekly launches.
- **Letting eng pick tier.** Engineers underweight marketing; PMM owns tier-assignment.
- **Assuming T1 = bigger T2.** They're qualitatively different, not just bigger budgets.
- **Skipping launch criteria for "strategic" launches.** "We need to do this for fundraising" still has to meet criteria; otherwise call it what it is.
- **Conference-tied T1s without preparation.** Worst form of launch — all-or-nothing on stage; rehearse + stack-release plan must be tight.

## See Also

- [Launch Checklist](launch-checklist.md) — operational checklist per launch
- [Launch Announcements](launch-announcements.md) — multi-channel announcement coordination
- [Press Outreach](press-outreach.md) — T1 press cycle
- [Press Kit / Media Kit](press-kit-media-kit.md) — T1 / T2 assets
- [Annual User Conference](annual-user-conference.md) — T1 anchor moment
- [Conference Launches](conference-launches.md) — event-tied T1s
- [Hacker News](hacker-news.md) — channel discipline by tier
- [Product Hunt](product-hunt.md) — T1/T2 channel
- [Indie Hackers](indie-hackers.md) — adjacent channel
- [Reddit](reddit.md) — adjacent channel
- [First 10 Customers](first-10-customers.md) — earlier-stage launches
- [Pre-launch Revenue](pre-launch-revenue.md) — before formal launch system exists
- [Public Roadmap](../2-content/public-roadmap.md) — signals upcoming tier intent
- [Demo Video](../2-content/demo-video.md) — T1/T2 video assets
- [Customer Marketing Program](../4-convert/customer-marketing-program.md) — pairs with launch motion
- [First Marketing Hire](../4-convert/first-marketing-hire.md) — sister hiring playbook
- [Sales Enablement & Battle Cards](../4-convert/sales-enablement-battle-cards.md) — T1/T2 enablement deliverables
- [Changelog & Roadmap (VibeWeek)](../../VibeWeek/6-grow/changelog-roadmap-chat.md) — implementation surface for T3 changelog
