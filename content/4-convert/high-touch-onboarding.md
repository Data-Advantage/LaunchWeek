[Back to Day 4: Convert](README.md)

# High-Touch Onboarding: Get Mid-Market & Enterprise Customers Live in 30 Days

Most B2B SaaS founders confuse two different problems: getting a self-serve user from signup to "aha moment" in 5 minutes, and getting a $50K-ACV enterprise customer from contract-signed to live-in-production in 30-60 days. The first is a product-design problem (per [Onboarding Flow](onboarding-flow.md)). The second is a customer-success problem — a structured engagement with kickoff calls, configuration, integration, training, success criteria, and a go-live milestone. Confusing the two means either making PLG users sit through unnecessary calls or letting enterprise customers wander into a self-serve product they paid $50K to use.

Done well, high-touch onboarding accelerates time-to-value, reduces early churn, sets up expansion conversations, and converts new customers into reference accounts. Done badly, customers arrive in the product unprepared, fail to activate, and either churn at month 6 or stay but never expand. The difference is structure: a documented playbook the customer-success team runs against, with milestones, owner clarity, and consequence for missing the timeline.

This guide is the playbook for designing a 30-90 day high-touch onboarding that ships customers to "live in production" reliably without burning founder/CSM time on every account.

## What Done Looks Like

By end of the project:

- A documented onboarding playbook (typically 30, 60, or 90 days)
- Kickoff call template with required attendees
- Milestone schedule with owner per item
- Configuration / integration support process
- Training resources (live + async)
- Go-live criteria + sign-off
- Handoff to ongoing customer success
- Time-to-value (TTV) metric tracked

This pairs with [Sales Demo Calls](sales-demo-calls.md) (preceding step), [Sales Playbook](sales-playbook.md) (parent doc), [First Sales Hire](first-sales-hire.md) (CSM role), [Customer References](customer-references.md) (successful onboarders become references), [Trust Center & Security Page](trust-center-security-page.md) (security review during onboarding), [Reduce Churn](reduce-churn.md) (early churn correlates with bad onboarding), and [Onboarding Flow](onboarding-flow.md) (PLG counterpart for self-serve).

## When You Need High-Touch Onboarding

Not every product / customer needs this. Right-size it.

```
Help me decide what level of onboarding fits my customer.

The four levels:

**Level 0: Self-serve only**
- Free / Pro tier ($1-100/mo)
- Customer signs up; uses product immediately
- Per [Onboarding Flow](onboarding-flow.md)
- Cost: $0 marginal per customer

**Level 1: Light-touch (welcome call optional)**
- Mid-tier ($100-500/mo)
- Optional 30-min welcome / Q&A call
- Email-driven onboarding sequence
- Customer success agent at 1:N ratio
- Cost: $5-50 marginal per customer

**Level 2: Standard high-touch (typical mid-market)**
- ACV $5K-$50K/yr
- Mandatory kickoff call
- Defined 30-60 day implementation
- Dedicated CSM (1:30-1:50 ratio)
- Cost: $200-500 marginal per customer

**Level 3: White-glove enterprise**
- ACV $50K+/yr
- Multi-call kickoff with stakeholders
- 60-90 day implementation
- Custom integrations / training
- Dedicated CSM (1:5-1:15 ratio)
- Implementation services billable
- Cost: $1,000-$10,000+ marginal per customer

**Decision matrix**:

| ACV | Onboarding Level |
|---|---|
| <$1K/yr | Level 0 |
| $1-5K/yr | Level 1 |
| $5-50K/yr | Level 2 |
| $50K+/yr | Level 3 |

**Hybrid**: many companies offer Level 1 to Pro tier and Level 2 to Business tier; same product, different service.

For my product:
- Median ACV
- Customer expectations from sales process
- CSM bandwidth

Output:
1. The level appropriate to your ACV
2. The decision logic
3. Transitions between levels (what triggers an upgrade)
```

The biggest unforced error: **giving white-glove onboarding to free/Pro tier**. CSM time is your most expensive resource. Tier the service to match the revenue. Free customers get docs + community. Mid-market gets a kickoff call. Enterprise gets dedicated implementation.

## Run a Structured Kickoff Call

The kickoff sets the tone for the entire engagement. Make it count.

```
Design the kickoff call.

The agenda (60-90 min for Level 2-3):

**Pre-call prep** (CSM):

- Read the deal notes / discovery
- Review what was sold (which package, custom terms, etc.)
- Identify customer''s success criteria (what would make this a win?)
- Prepare a customized welcome doc
- Send pre-call materials (24-48h ahead)

**Pre-call materials sent to customer**:

- Welcome message naming attendees
- Agenda preview
- Pre-read: 1-page "what to expect" doc
- Account access info / login details
- Calendar invite with all required attendees

**During the call**:

1. **Introductions (5 min)**
   - Customer team
   - Your CSM team
   - Any other stakeholders (sales, sales engineer, founder if mid-market+)

2. **Goals review (10 min)**
   - "What does success look like for you in 90 days?"
   - Validate against what they bought
   - Surface any unstated expectations

3. **Onboarding plan walkthrough (15 min)**
   - The milestone schedule (covered next)
   - Who owns what
   - Communication cadence
   - Escalation path

4. **Technical / configuration (30-45 min)**
   - Initial product walkthrough
   - First integrations / configuration
   - Workspace / team setup
   - Permission model
   - Data import (if applicable)

5. **Training plan (10 min)**
   - Live training sessions to schedule
   - Self-serve docs
   - Champion identification

6. **Q&A + next steps (10 min)**
   - Open questions
   - Clear next-step items with owners and dates
   - Follow-up summary email same day

**Post-call follow-up** (within 24 hours):

- Recap email with action items
- Calendar invites for upcoming sessions
- Shared onboarding tracker (Notion / spreadsheet)
- Slack / shared channel if applicable

**Required attendees from customer**:

- **Champion**: the person who advocated internally for buying you
- **Day-to-day owner**: who will use the product daily
- **IT / security stakeholder**: if integrations / SSO / data are involved
- **Executive sponsor (Level 3)**: VP or C-suite who will care about ROI

Without these, the call has gaps and onboarding stalls.

**Don''t**:
- Skip the pre-call prep ("we''ll wing it")
- Make the call sales-y (it''s not — they bought already)
- Forget to set expectations on cadence ("we''ll meet weekly until live")

Output:
1. The kickoff call template
2. The pre-call materials
3. The post-call follow-up template
4. The required-attendee list
```

The single biggest predictor of successful onboarding: **kickoff call attendance.** A kickoff with the champion alone leaves stakeholder gaps; a kickoff with day-1 user + IT + executive sponsor surfaces issues immediately. Get the right people in the room.

## Define Milestones with Clear Owners

A 30-day onboarding without milestones is "we''ll figure it out." Structure prevents drift.

```
Design the milestone plan.

The 30-60-90 framework (Level 2):

**Days 1-7: Setup**

Milestones:
- Account created and configured
- SSO / identity provider connected (per [SSO & Enterprise Auth](../../../VibeWeek/6-grow/sso-enterprise-auth-chat.md))
- Initial user accounts provisioned
- First integrations connected
- First data imported (per [CSV Import Flows](../../../VibeWeek/6-grow/csv-import-chat.md))

Owner: customer technical lead + your CSM

**Days 8-14: Configuration**

Milestones:
- Workspace structure defined
- Roles and permissions configured (per [Roles & Permissions](../../../VibeWeek/6-grow/roles-permissions-chat.md))
- First workflow built / customized
- Test data validated

Owner: customer day-to-day owner + your CSM

**Days 15-21: Training**

Milestones:
- Live training session 1 (admin + power users)
- Live training session 2 (general users)
- Training docs distributed
- Champion certified

Owner: customer champion + your CSM

**Days 22-28: Go-live preparation**

Milestones:
- Final UAT (user acceptance testing)
- Migration from legacy tool (if applicable)
- Communication to broader team
- Go-live date confirmed

Owner: customer executive sponsor + your CSM

**Day 30: Go-live**

Milestones:
- Production use begins
- Success criteria measurable
- 30-day check-in scheduled
- Handoff to ongoing CSM if separate from implementation

**For 60-day onboarding** (Level 3 / complex):

- Add a "configuration deep" phase (days 30-45)
- Add custom integration / API work phase (days 30-50)
- Add multi-cohort training (days 45-60)

**For 90-day onboarding** (Level 3 / very complex / global):

- Phased rollout by team / region
- Multiple training cohorts
- Customer-success-plan documentation

**Tracking**:

- Shared Notion / Asana / spreadsheet
- Each milestone: status (Not Started / In Progress / Complete / Blocked)
- Each milestone: owner (named person on customer side AND your team)
- Each milestone: date
- Weekly review with customer

**The "stuck milestone" alert**:

Any milestone marked "Blocked" >7 days triggers escalation:
- Surface to customer''s exec sponsor
- Surface internally to founder/CTO
- Schedule unblock-call within 48 hours

**Critical implementation rules**:

1. **Owners on customer side, not yours.** "Customer to provide SSO config" — names the customer person. Without ownership, things slip.
2. **Specific milestones.** "Setup complete" is too vague. "5 SSO users provisioned and tested login" is specific.
3. **Visible to customer.** Shared tracker; transparent status.

**Don''t**:
- Skip the milestone tracker
- Let blocked items linger
- Run onboarding ad hoc without structure

Output:
1. The milestone schedule per onboarding length
2. The tracker template
3. The escalation logic
4. The customer-visible status format
```

The single biggest factor in on-time go-live: **named customer-side owners per milestone.** When a milestone is "the customer needs to do X" but no specific person is named, it doesn''t happen. With named owners, accountability exists.

## Provide Training in Multiple Formats

Different roles learn differently. Match training to audience.

```
Design the training program.

The training types:

**Type 1: Live admin training (60-90 min)**

Audience: workspace admins, IT, power users
Content: configuration, permissions, integrations, settings, advanced features
Format: live (Zoom); 5-10 attendees max; recorded for re-watch
Frequency: once during onboarding; refresher quarterly

**Type 2: Live end-user training (30-45 min)**

Audience: day-to-day users (the broader team)
Content: core workflows; how to do their job in the product
Format: live or recorded; group sessions OK
Frequency: once during onboarding; office hours after

**Type 3: Async docs / videos**

Audience: anyone, any time
Content: feature-specific tutorials, FAQ, troubleshooting
Format: docs site, YouTube, Loom library
Frequency: always available; refresh quarterly

**Type 4: Champion certification**

Audience: customer''s internal champion
Content: deep product knowledge; train-the-trainer
Format: 1:1 with CSM over 2-3 sessions
Outcome: customer can train new hires themselves

**Type 5: Office hours**

Audience: all customer users
Content: open Q&A
Format: weekly or biweekly Zoom; recorded; published
Frequency: ongoing post-onboarding

**Materials needed**:

- Training deck (per audience)
- Step-by-step docs
- Video library (Loom/YouTube)
- Cheat sheets (printable)
- Sandbox / test environment for practice
- FAQ / common-pitfalls doc

**The "champion" pattern**:

Each customer should have a designated champion:
- Internal advocate
- First point of contact for users
- Trained more deeply
- Becomes a [reference](customer-references.md) candidate later

Investing in the champion compounds: the champion trains new users, advocates internally for expansion, and represents you in their organization.

**Don''t**:
- Train everyone simultaneously (admin + end-user content differs)
- Skip async materials (live alone doesn''t scale)
- Forget the champion (without one, onboarding has no internal advocate)

Output:
1. The training program per audience
2. The materials inventory
3. The champion certification path
4. The office-hours cadence
```

The biggest investment with compounding returns: **the customer champion**. A trained, engaged champion is an internal CSM at the customer — they handle Tier 1 questions, advocate for renewal, and refer peers. Spend disproportionate time here.

## Define Go-Live Criteria

"Live" without criteria = vague success. Define explicitly.

```
Help me define go-live criteria.

The pattern:

**Generic criteria**:

- N users actively using the product weekly (e.g., 80% of provisioned users logged in within last 7 days)
- M workflows running successfully (specific numbers per use case)
- Critical integrations operational
- Trained champions identified
- Support contact established

**Customer-specific criteria** (defined in kickoff):

- "Migrate all open deals from [old tool]"
- "Run Q3 reporting cycle in [our product]"
- "Activate 50 sales reps with daily usage"
- "Pass internal IT security review"

**Sign-off**:

A formal sign-off doc:
- Customer exec sponsor signs
- Your CSM countersigns
- Triggers handoff to ongoing CSM team (different from implementation team)
- Sets baseline for renewal conversation 9 months later

**The 30-day post-go-live check-in**:

- Are usage metrics on target?
- Any features customer expected but isn''t using?
- Champion still engaged?
- Any support escalations?

Use this to identify expansion opportunities AND early-churn risks.

**The "not yet live" decision**:

Sometimes go-live should be delayed:
- Customer team isn''t trained
- Integrations aren''t complete
- Migration risk too high

Better to delay 2 weeks than rush a broken go-live. Push back honestly; customers respect it.

**Don''t**:
- Declare "live" because the timeline says so (without criteria met)
- Hand off to ongoing CSM before sign-off
- Skip the 30-day check-in

Output:
1. The generic + customer-specific criteria
2. The sign-off document
3. The post-go-live check-in template
4. The handoff process to ongoing CSM
```

The biggest predictor of long-term success: **a clean go-live sign-off**. Customers who sign off feel ownership; customers whose onboarding "just kind of ended" don''t. The artifact creates the conviction.

## Hand Off to Ongoing Customer Success

Implementation is a sprint. Customer success is a marathon. Different skills, different focus.

```
Design the handoff.

The pattern:

**Why separate roles** (at scale):

- Implementation CSM: project-management strong; technical setup; first 90 days
- Ongoing CSM: relationship-management strong; expansion; renewal; year 2+

At indie scale, often the same person; explicitly transition mode.

**Handoff meeting**:

- Implementation CSM + ongoing CSM + customer champion
- Recap: what was achieved
- Open items: anything still in progress
- Risks: anything to watch
- Goals: what customer wants in next 90 days

**Documentation**:

- Customer profile (per [CRM](https://www.vibereference.com/marketing-and-seo/crm-providers))
- Implementation notes
- Open tickets / requests
- Renewal date
- Expansion opportunities flagged

**Cadence post-onboarding**:

For Level 2-3 customers:
- Monthly check-ins (first 6 months)
- Quarterly business reviews (QBRs) for Level 3
- Annual renewal-focused conversation 90 days before renewal

For Level 1-2:
- Quarterly check-ins
- Renewal-focused conversation 60 days before

**The renewal-readiness signal**:

Customer is on track for renewal when:
- Usage metrics stable or growing
- Champion engaged
- ROI demonstrable
- No major support escalations

Customer is at-risk when:
- Usage declining
- Champion changed (left, role-changed)
- Multiple support escalations
- Slow on QBRs

Track these signals; act on them.

**Don''t**:
- Hand off without a meeting
- Let customers fall into "nobody owns me" gap
- Skip QBRs ("they''re happy" — until they''re not)

Output:
1. The handoff process
2. The ongoing-CSM cadence
3. The renewal-readiness checklist
4. The at-risk-signals dashboard
```

The biggest renewal-rate driver: **continuity of CSM relationship.** Customers who feel "owned" by a specific CSM renew at 90%+; customers who feel passed around renew at 60%. The cost of a CSM is small; the renewal lift is huge.

## Avoid Common High-Touch Failures

Each failure pattern has a fix. Recognize them.

```
The failure-mode checklist.

**Failure 1: Onboarding handoff from sales is bad**
- Sales sells X; CSM thinks Y was sold; expectation gap
- Fix: kickoff with sales rep present; explicit "what was sold" review

**Failure 2: Champion never identified**
- No internal advocate; onboarding stalls
- Fix: identify champion in kickoff; invest in their training

**Failure 3: Go-live timeline slips silently**
- Milestones missed; nobody escalates
- Fix: weekly review; blocked-item escalation policy

**Failure 4: Training without follow-up**
- Customer attends training; never uses product
- Fix: post-training office hours; check-in calls; usage monitoring

**Failure 5: Implementation CSM doesn''t hand off**
- Customer keeps reaching out to original CSM
- Fix: explicit handoff meeting + new CSM intro

**Failure 6: Customer team turnover**
- Champion leaves; nobody replaces them
- Fix: detect via product usage drop; reach out; identify new champion

**Failure 7: Feature requests during onboarding**
- Customer asks for changes; team agrees without scoping
- Fix: triage feature requests; honor only those that fit roadmap

**Failure 8: Integration delay because customer''s IT is slow**
- Onboarding waits on customer-side IT for SSO / API access
- Fix: surface this early; escalate to exec sponsor; provide alternative paths

**Failure 9: Underestimated configuration complexity**
- "1-week setup" turns into 6 weeks
- Fix: scope realistically in kickoff; pad estimates

**Failure 10: No post-onboarding retention plan**
- 30 days post-go-live, customer drifts
- Fix: ongoing-CSM cadence from day 31

**Output**:
1. Audit current onboarding for each failure
2. Fixes per failure
3. Prevention process
```

The single biggest failure pattern: **the implementation CSM doesn''t hand off to ongoing CSM.** The customer''s relationship is with one person; they don''t know who to talk to about renewal. This silently causes 20-30% of preventable churn at the year mark.

---

## What "Done" Looks Like

A working high-touch onboarding in 2026 has:

- Tier mapping (which level of onboarding for which ACV)
- Structured kickoff call template with required attendees
- 30/60/90-day milestone plan with named owners
- Multi-format training (live admin + end-user + async + champion certification)
- Defined go-live criteria with formal sign-off
- Handoff to ongoing CSM (continuity of relationship)
- Time-to-value metric tracked
- Quarterly review of program effectiveness
- Documented escalation paths for blockers
- Customer-success cadence post-go-live (monthly / quarterly)

The hidden cost in high-touch onboarding isn''t the CSM salary — it''s **early churn from customers who never made it to live.** A customer who paid $30K but never went live churns; the deal was net negative. Investing in structured onboarding lifts time-to-value, reduces early churn, and sets up renewal AND expansion. The discipline of "kickoff → milestones → training → go-live → handoff" is what turns sales into recurring revenue.

## See Also

- [Onboarding Flow](onboarding-flow.md) — PLG counterpart for self-serve
- [Sales Demo Calls](sales-demo-calls.md) — preceding step
- [Sales Playbook](sales-playbook.md) — parent doc
- [First Sales Hire](first-sales-hire.md) — including the CSM role
- [Customer References](customer-references.md) — successful onboarders become references
- [Trust Center & Security Page](trust-center-security-page.md) — security review during onboarding
- [Reduce Churn](reduce-churn.md) — early churn correlates with bad onboarding
- [Expansion Revenue](expansion-revenue.md) — depends on healthy onboarding
- [Beta Program](beta-program.md) — early customers as design partners
- [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md) — informs onboarding pain points
- [Multi-Tenant Data Isolation](../../../VibeWeek/6-grow/multi-tenancy-chat.md) — workspace setup during onboarding
- [SSO & Enterprise Auth](../../../VibeWeek/6-grow/sso-enterprise-auth-chat.md) — common implementation step
- [Roles & Permissions](../../../VibeWeek/6-grow/roles-permissions-chat.md) — common configuration step
- [CSV Import Flows](../../../VibeWeek/6-grow/csv-import-chat.md) — common data-migration step
- [CRM Providers](https://www.vibereference.com/marketing-and-seo/crm-providers) — where customer profile lives

[Back to Day 4: Convert](README.md)
