[Back to Day 4: Convert](README.md)

# Customer Onboarding Playbook: Designing the First 30 Days

Most B2B SaaS founders treat onboarding as a checkbox: send the welcome email, hand off to CSM (or not), wait three weeks, see if the customer logs in. The pattern is predictable: 30% of "won" deals never reach activation; another 20% activate but don't expand; the third churn driver shows up at month 6 because the customer never really got value. Sales celebrated the win; CS inherited a customer who didn't understand what they bought. Six months later the renewal call is the first time anyone has asked "are you happy?"

A real customer onboarding playbook is something different: a 30-90 day program that takes the customer from contract-signed to "this product is essential to my workflow." Done well, time-to-value drops from 60+ days to 14-21 days, expansion conversations open at month 4 instead of month 11, and net revenue retention compounds. Done badly, you have signed-but-disengaged customers — the most expensive form of acquisition because the LTV never materializes.

This guide is the playbook for designing customer onboarding that produces measurable activation, value-realization, and retention. It covers the framework, segment design (small/mid/large), key moments, ownership boundaries, kickoff calls, success milestones, and the operational reality of running onboarding at scale.

## What Done Looks Like

A working customer onboarding program produces:

- Time-to-first-value (TTFV) measurable + decreasing quarter-over-quarter
- 80%+ of customers reach a defined activation milestone within 30 days
- Sales → CS handoff smooth (no customer feels "dropped")
- Onboarding plan documented per customer (clarity for both sides)
- Kickoff call sets expectations + commitments mutually
- Each segment (SMB / mid-market / enterprise) has a right-sized motion
- Health-score visibility starts in week 1 (not just at renewal)
- Expansion conversation opportunities surfaced by month 3
- Activation metric improves: aim 60-80%+ activated by 30 days
- Onboarding-driven churn (failure to activate) <10%
- Customer references / case studies happen at 90 days for power users

This pairs with [Onboarding Flow](onboarding-flow.md) (the in-product UX), [High-Touch Onboarding](high-touch-onboarding.md) (sales-led white-glove), [Activation Metric Definition](activation-metric-definition.md), [Sales-to-CS Handoff](sales-to-cs-handoff.md), [First Customer Success Hire](first-customer-success-hire.md), [Customer Success Metrics Framework](customer-success-metrics-framework.md), [Reduce Churn](reduce-churn.md), [Customer Onboarding Specialist Hire (in this same playbook applied)], [Voice of Customer Program](voice-of-customer-program.md) (post-onboarding NPS), [Customer Marketing Program](customer-marketing-program.md), [Quarterly Business Reviews](quarterly-business-reviews.md), and [Onboarding Email Sequence (VibeWeek)](../../VibeWeek/6-grow/onboarding-email-sequence-chat.md).

## The Three Onboarding Tracks

Don't onboard everyone the same way. Right-size to ACV + complexity.

```
TRACK A: SELF-SERVE (low-touch; under $5K ACV)
- Customer signed up online; paid via Stripe; no human contact
- Onboarding: in-product flow + email sequence + help docs
- Primary owners: Product (in-app) + Lifecycle Marketing (email)
- Time horizon: 7-14 days to activation
- Concurrent volume: hundreds-thousands of customers in this state simultaneously
- Examples: most PLG SaaS

TRACK B: MID-TOUCH (mid-market; $5K-50K ACV)
- Customer signed via sales but doesn't justify deep white-glove
- Onboarding: kickoff call + 30-60 day program + CSM check-ins
- Primary owners: CSM (small portfolio; 30-100 customers each)
- Time horizon: 30-45 days to first value
- Concurrent volume: dozens of customers per CSM
- Examples: typical mid-market B2B SaaS

TRACK C: HIGH-TOUCH / ENTERPRISE ($50K+ ACV)
- Custom-implemented; sometimes Solutions Engineer involved
- Onboarding: 60-120 day implementation project + dedicated CSM + executive sponsor
- Primary owners: Implementation Manager + CSM + (optional Solutions Engineer)
- Time horizon: 30-90 days to first value depending on complexity
- Concurrent volume: 5-20 customers per implementation manager
- Examples: enterprise B2B SaaS (Salesforce, Workday-style)

DEFAULT FOR MOST B2B SaaS:
- Year 1-2: Track A (self-serve) for nearly all customers
- Year 2+: Add Track B (mid-touch) for mid-market segment
- Year 3+: Add Track C (high-touch) for enterprise tier
- Don't apply Track C to small customers (uneconomical) or Track A to enterprise (under-served)

Track assignment:
- Triggered at contract signing
- Determined by ACV, segment, complexity, customer-success plan tier
- Documented in CRM at deal-close

Output: clear track definitions; right customer routes to right motion.
```

## The Universal Onboarding Framework

Every track shares structural elements. Differences are in depth + cadence.

```
4 phases of any customer onboarding:

PHASE 1: SET (Days 0-7)
- Customer is excited; momentum is highest right after purchase
- Goal: clear understanding of next steps + first commitment
- Activities:
  - Welcome email (within 1 hour of contract sign)
  - Kickoff call scheduled within 7 days
  - Onboarding plan shared (mutual deliverables)
  - Account set up (technical: SSO, integrations, data migration)
  - Champion contact + executive sponsor identified

PHASE 2: USE (Days 7-30)
- Customer logs in; tries to do something useful
- Goal: reach activation milestone (defined per product)
- Activities:
  - First value: customer accomplishes a real task
  - Training (sync or async; varies by track)
  - Integration setup with existing tools
  - First-value moment celebrated (in-app + email + CSM)
  - Initial usage report
  - Issues raised proactively addressed

PHASE 3: EXPAND (Days 30-60)
- Customer using core; ready for advanced
- Goal: expand to multiple use cases / users / departments
- Activities:
  - Mid-onboarding check-in (CSM)
  - Advanced features introduced (don't dump everything in week 1)
  - Additional team members invited
  - Integration with adjacent tools
  - Best-practice consultation
  - Health score reviewed

PHASE 4: GRADUATE (Days 60-90)
- Customer self-sufficient; onboarding officially ends
- Goal: transition to ongoing CS cadence
- Activities:
  - Onboarding closure call
  - Transition to ongoing CSM cadence (weekly/biweekly/monthly)
  - First QBR scheduled (if mid/high-touch)
  - Reference / case-study ask if appropriate
  - Onboarding NPS survey
  - Renewal-risk assessment

Each phase has explicit:
- Owner (who's responsible)
- Deliverables (what gets done)
- Decision points (continue / escalate / pivot)
- Success metric (did this phase produce its result?)
```

## Phase 1: Set (the kickoff call is critical)

```
The kickoff call is the most-loaded 60 minutes in customer relationship.

Kickoff call agenda:

0-5 min: Introductions
- Customer team: who's who, what's their role
- Vendor team: CSM, optional executive sponsor
- Mutual congratulations on partnership

5-15 min: Customer goals
- "What are you hoping to accomplish in 30 / 60 / 90 days?"
- Listen for: specific use cases, business outcomes, individuals' personal goals
- Capture verbatim (this becomes onboarding-plan north-star)

15-30 min: Onboarding plan walkthrough
- Vendor pre-shares 30-60-90 day plan
- Walk through milestones + responsibilities
- Adjust based on customer feedback

30-45 min: Practical setup
- SSO / data migration / integration list
- Who owns each task on customer side
- Timeline commitments

45-55 min: Communication cadence
- "How often should we sync? Weekly? Biweekly?"
- Slack / email / phone / video preferences
- Escalation path if something's blocked

55-60 min: Action items
- Mutual to-dos with owners + dates
- Next sync scheduled

Critical kickoff outputs:
1. Mutual onboarding plan (signed-off by both sides)
2. Champion identified (your day-to-day point of contact)
3. Executive sponsor identified (your escalation path)
4. Activation milestone agreed (what does "first value" look like?)
5. Communication cadence + tools chosen
6. Calendar invitations for next 4 sync calls

Anti-patterns:
- Skipping kickoff call (customer feels abandoned)
- Templated kickoff with no customization (customer feels processed)
- Kickoff scheduled 3+ weeks after contract (momentum lost)
- Customer-side multiple stakeholders not aligned (you discover this in week 4)
- Kickoff is just product demo (sales-tier; should be focused on customer goals)

Required pre-work:
- Read deal notes from sales (champion, pain points, sold-on outcomes)
- Review their current tooling (technographics)
- Identify potential integration paths
- Personalize kickoff deck (their logo, their outcomes, their team names)
- Practice if new CSM
```

## Phase 2: Use (driving to activation)

```
Activation is the make-or-break of onboarding. Define it tightly.

Activation = the moment a customer accomplishes their first meaningful task on your product.

Examples:
- Linear: customer creates 5+ issues across 2+ projects within 14 days
- Slack: 3+ users from same workspace post in 3+ channels within 7 days
- Stripe: customer accepts first payment
- HubSpot: customer creates first deal + closes first won deal
- Vercel: customer deploys 3 projects + connects custom domain

Bad activation definitions:
- "Customer logs in" (too low a bar)
- "Customer reaches MAU" (too high; lagging)
- "Customer subscribes" (already happened)

Right activation definitions:
- Specific to your product's value
- Achievable in 7-21 days
- Strongly correlated with renewal
- Measurable in your analytics

Activation tactics by track:

TRACK A (self-serve):
- In-product onboarding tour
- Day-1 email: "Here's the first thing to do"
- Day-3 email: progress check
- Day-7 email: roadblock check + offer help
- Triggered intervention if stalled (e.g., live chat outreach if 3 days no progress)
- Reach activation: triggered celebration email + next-step prompt

TRACK B (mid-touch):
- CSM proactively reviews customer activity in first 7 days
- 1-on-1 outreach if stalled
- Targeted training session if needed
- Integration setup support
- Reach activation: CSM celebrates + introduces next phase

TRACK C (high-touch / enterprise):
- Implementation manager owns activation milestone delivery
- Weekly project sync calls
- Custom integration support (sometimes paid)
- Training rollout to customer's broader team
- Reach activation: formal milestone review + sign-off

If activation NOT reached by day 21:
- Escalation: CSM + manager + champion
- Diagnose: what's blocking? Technical / training / fit?
- Action: dedicated 1-on-1 to unblock
- Document the blocker (informs future product / GTM)

Tracking:
- Activation rate by cohort (target: 70-85%)
- Time-to-activation distribution
- Activation rate by segment / vertical / acquisition channel
```

## Phase 3: Expand (don't stop at activation)

```
Activation is the floor; not the ceiling. Drive to deeper adoption.

Day 30+ activities:

Multi-user invitation:
- "Now that you're seeing value, who else on your team should be using this?"
- Easier to invite at month 1 than at renewal
- Track: seat-fill rate over time

Advanced feature introduction:
- DON'T dump every feature in week 1 (overwhelming)
- DO introduce advanced features once basics are working
- Sequence: core feature → first integration → advanced workflow → power-user feature

Integration with adjacent tools:
- "Can we connect this to your existing Salesforce / Slack / Jira?"
- Each integration deepens stickiness
- Often opens cross-sell conversations

Use-case expansion:
- Customer signed for use case A; surface use case B + C
- "Our [other-customer] in [your-industry] uses us also for X"
- Increases NPS + reduces churn

Training depth-up:
- Webinar / workshop for power users
- 1-on-1 strategy sessions for champions
- Certification program (if applicable)

Health-score review:
- Joint review of customer's usage + outcomes
- Identify gaps + opportunities
- Adjust onboarding plan accordingly

Best-practice consultation:
- "Based on what we've seen with similar customers, here's what works..."
- Position you as advisor, not vendor
```

## Phase 4: Graduate (clean handoff to ongoing CS)

```
End of onboarding is a moment, not just a fade-out.

Onboarding closure call (60 min):

15 min: Review what was accomplished
- Activation milestone reached
- Active users / use cases
- Outcomes against initial goals (compared to kickoff verbatims)

15 min: Outstanding items
- Anything pending
- Documented + scheduled

15 min: Transition to ongoing
- Cadence change (kickoff was weekly; ongoing might be monthly)
- Introduction of any handoff (if onboarding CSM ≠ retention CSM)
- New escalation path

15 min: Forward-looking
- Goals for next 90 days
- Renewal expectation set
- Reference / case-study ask (if successful)
- First QBR scheduled if applicable

Outputs:
1. Onboarding-completion summary doc
2. NPS / CSAT survey sent
3. CSM transition (if applicable)
4. First QBR scheduled
5. Reference-eligibility flag in CRM

Critical: customer should feel celebrated, not abandoned. The right tone: "you've graduated to power-user; now we partner long-term."
```

## Hiring the First Customer Onboarding Specialist

Different from a CSM. The CSM owns long-term customer health; the Onboarding Specialist owns the first 90 days.

```
When to hire:
- 50+ customers in any 30-day window
- Average kickoff-to-activation > 30 days
- Activation rate < 60%
- Founder/CSM bottlenecked on onboarding work
- ARR $3M+

Profile:
- Background: ex-CSM at SaaS, ex-Implementation Consultant
- Skills: project mgmt, customer empathy, technical literacy (varies by product)
- Mindset: process-oriented, methodical, friendly-but-firm on commitments
- Comp: $70-120K base depending on stage and location

vs CSM hiring:
- CSM: portfolio of 30-100 customers; long-term relationship
- Onboarding Specialist: 5-20 NEW customers per month; 60-90 day relationship; hands-off after

Specialization rule:
- Below 50 onboards / month: 1 person doing both onboarding + ongoing CS
- 50-200 onboards / month: 1+ dedicated Onboarding Specialist + CSMs
- 200+ onboards / month: Onboarding TEAM + CSM team
```

## Operational Discipline

```
What you measure improves; what you don't, doesn't.

Onboarding metrics dashboard:

Per cohort (monthly):
- Activation rate at 7 / 14 / 30 / 60 days
- Time-to-first-value (median + p75)
- Onboarding completion rate
- Onboarding NPS
- Churn within 90 days (signal: bad onboarding)

Per CSM / Onboarding Specialist:
- Activation rate of their portfolio
- TTV
- Customer NPS
- Hours per onboarding (efficiency)

Per segment:
- SMB activation rate
- Mid-market activation rate
- Enterprise activation rate

Health-flag thresholds:
- 7 days no login → flag yellow
- 14 days no activity → flag red
- 21 days no activation → escalate

Cadence:
- Daily standup: review at-risk onboarding accounts
- Weekly: roll up onboarding KPIs to leadership
- Monthly: cohort analysis + improvements
- Quarterly: deeper review with sales + product

Retrospectives:
- Every 90 days: pick 5 random "onboarded" customers; full review
- Track: what worked? What broke? What surprised?
- Feed product + GTM
```

## Common Failure Modes

```
Failure 1: Sales-CS handoff is a black hole
- Pattern: deal closes Friday; customer hears nothing until Tuesday next week
- Reality: momentum lost; customer's enthusiasm fades
- Fix: handoff process triggered automatically; CSM meets customer within 48 hours

Failure 2: Kickoff is a templated demo
- Pattern: same kickoff deck; customer goals not heard
- Reality: customer feels "processed"; trust low
- Fix: pre-call read-up; personalized agenda; verbatim capture of goals

Failure 3: No activation definition
- Pattern: "we just hope they use the product"
- Reality: no signal; can't measure; can't iterate
- Fix: define activation specifically; measure cohort-level

Failure 4: Onboarding ends at kickoff
- Pattern: kickoff happens; customer disappears for 60 days
- Fix: weekly cadence in first 30 days; biweekly through 60 days

Failure 5: Same motion for all ACV tiers
- Pattern: $500/yr customer + $50K/yr customer get same kickoff
- Reality: small customer feels over-served; large customer feels under-served
- Fix: 3-track motion; right-size investment

Failure 6: Onboarding hits a roadblock; nobody notices
- Pattern: customer's IT delays SSO setup 6 weeks; CSM doesn't follow up
- Fix: weekly status review; auto-flag stuck onboarding

Failure 7: No expansion conversation
- Pattern: customer activated; CSM pivots to "managing the account"
- Reality: expansion opportunity wasted
- Fix: month-3 explicit expansion conversation embedded in motion

Failure 8: Champion leaves mid-onboarding
- Pattern: contact who bought leaves company at week 3
- Reality: relationship reset; vulnerable to churn
- Fix: identify executive sponsor in kickoff; multiple contacts established by week 4

Failure 9: Multi-stakeholder customer; only one person engaged
- Pattern: customer's marketing team uses; their sales team unaware
- Fix: kickoff includes all relevant stakeholders; ongoing org-wide visibility

Failure 10: Documentation gap
- Pattern: implementation discussions happen in calls; nothing written
- Fix: every call results in updated implementation doc; customer has access

Failure 11: Onboarding feels like work for the customer
- Pattern: 5 hours of training in week 1; customer overwhelmed
- Fix: introduce features incrementally; show value early; defer advanced

Failure 12: Sales over-promised; CS under-delivers
- Pattern: deal won by promising X; X is hard
- Fix: sales + CS alignment on what's feasible; if sales over-sold, CS escalates

Failure 13: Activation milestone reached but customer not happy
- Pattern: hit the metric; customer's actual goal wasn't met
- Fix: track BOTH activation metric AND customer's stated goals from kickoff

Failure 14: Onboarding NPS skipped
- Pattern: assume successful onboarding without survey
- Fix: NPS at end of onboarding; close the loop on detractors

Failure 15: Onboarding success doesn't lead to references
- Pattern: customers happy; never asked for case study / reference
- Fix: month-3 explicit reference ask for satisfied customers
```

## What Done Looks Like (recap)

A successful customer onboarding playbook:

- [ ] Three tracks defined (self-serve / mid-touch / high-touch)
- [ ] Activation milestone defined per product
- [ ] Kickoff call template per track
- [ ] Onboarding plan template (mutual; signed off)
- [ ] Sales-CS handoff process automated
- [ ] Weekly cadence in days 0-30
- [ ] Health-score visible from week 1
- [ ] Activation rate at 30 days target: 70-85%
- [ ] Time-to-first-value measured + decreasing
- [ ] Onboarding NPS captured at completion
- [ ] Expansion conversations at month 3
- [ ] Reference / case-study program tied to onboarding success
- [ ] Onboarding-driven churn <10%
- [ ] Per-CSM / per-segment metrics visible
- [ ] Quarterly cohort review feeding product + GTM

## Mistakes to Avoid

- **Treating onboarding as a checkbox.** It's the highest-leverage post-sale moment.
- **Skipping kickoff call.** Even self-serve benefits from a 30-min welcome call for paid plans.
- **No activation definition.** You can't improve what you can't measure.
- **Same motion for all ACV.** Right-size: 3 tracks based on $$.
- **Sales-CS handoff black hole.** Automate; <48hr from sign to first CSM contact.
- **Onboarding ends at kickoff.** Cadence through day 60+ matters.
- **Multi-stakeholder neglect.** Identify champion + executive sponsor early.
- **No mid-onboarding intervention.** Health score yellow → action; red → escalate.
- **Skip expansion conversation.** Month 3 explicit; don't wait for renewal.
- **No survey / NPS.** Detractor follow-up critical.
- **No documentation.** Customer needs written record of decisions.
- **Onboarding owned by everyone.** Single DRI; cross-functional inputs.
- **Onboarding without health-score signal.** Need leading indicator of trouble.
- **Track A motion at enterprise tier.** Customer feels neglected; high churn.
- **Track C motion at SMB tier.** Uneconomical; CSMs burn out.
- **No closure / graduation.** Customer needs to feel celebrated, not abandoned.

## See Also

- [Onboarding Flow](onboarding-flow.md) — adjacent (in-product UX)
- [High-Touch Onboarding](high-touch-onboarding.md) — sister Track C
- [Activation Metric Definition](activation-metric-definition.md) — depended-upon discipline
- [Sales-to-CS Handoff](sales-to-cs-handoff.md) — depended-upon process
- [First Customer Success Hire](first-customer-success-hire.md) — adjacent hiring
- [Customer Success Metrics Framework](customer-success-metrics-framework.md) — measurement framework
- [Reduce Churn](reduce-churn.md) — adjacent (post-onboarding)
- [Voice of Customer Program](voice-of-customer-program.md) — pairs for onboarding NPS
- [Customer Marketing Program](customer-marketing-program.md) — references / case studies
- [Quarterly Business Reviews](quarterly-business-reviews.md) — ongoing cadence after onboarding
- [Customer References](customer-references.md) — reference program
- [Customer Lifetime Value Playbook](customer-lifetime-value-playbook.md) — adjacent metric
- [Renewal Forecasting & Pipeline Management](renewal-forecasting-management.md) — adjacent
- [Expansion Revenue](expansion-revenue.md) — onboarding feeds expansion
- [Free-to-Paid](free-to-paid.md) — adjacent for self-serve track
- [Trial-to-Paid (VibeWeek)](../../VibeWeek/6-grow/trial-to-paid-chat.md) — implementation surface
- [Onboarding Email Sequence (VibeWeek)](../../VibeWeek/6-grow/onboarding-email-sequence-chat.md) — implementation surface
- [Onboarding Tour Implementation (VibeWeek)](../../VibeWeek/6-grow/onboarding-tour-implementation-chat.md) — implementation surface
- [Activation Funnel (VibeWeek)](../../VibeWeek/6-grow/activation-funnel-chat.md) — implementation surface
