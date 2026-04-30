# Customer Journey Mapping Playbook

[⬅️ Back to Day 4: Convert](./)

A customer journey map is a literal artifact: a visual representation of every step a person takes from "never heard of you" to "renewing for year three" — including what they're trying to do at each step, what they're feeling, what tools they're using, who's involved, and where the journey breaks. Built well, the map exposes friction your dashboards can't see, surfaces handoff failures between teams, and gives PMs / marketers / sales / CS one shared mental model to stop optimizing for their slice.

Built poorly, it's a Miro board with sticky notes that gathers dust because nobody invested the time to actually walk through real customer journeys. The difference: real research (interviews + data) vs. a leadership team guessing.

This playbook covers how to build a journey map that earns its keep — scoping the journey, gathering evidence, mapping the stages, surfacing pain points, prioritizing fixes, and keeping it alive past the workshop high.

## What Done Looks Like

- A documented journey map covering at least: awareness → consideration → onboarding → activation → habit → expansion → renewal (or your equivalents)
- Each stage describes: user goal, user actions, tools/channels used, emotions, friction points, success criteria
- Real evidence behind every claim: customer interviews, product analytics, support tickets, sales call recordings, NPS verbatim
- Identified friction points prioritized: the 3-5 highest-impact "moments of truth" tagged for action
- Cross-functional ownership of fixes: PM owns activation friction; Sales owns demo-to-buy friction; CS owns expansion friction
- A specific person owns the journey map document — keeps it updated, runs an annual refresh, makes sure it's used in roadmap discussions
- Quarterly check-in: have the friction points moved? What new ones emerged?

## 1. Scope the Journey: One Persona, One Outcome

Don't try to map "the customer journey" in the abstract. Pick a specific persona and a specific outcome.

**Pick a persona.** The journey for a free user is not the journey for an enterprise procurement lead. Map them separately. If you have multiple [ideal customer profiles](../1-position/ideal-customer-profile.md), each gets its own map.

**Pick the outcome.** What does the customer accomplish? Examples: "completes their first invoice," "ships their first deploy," "reaches the activation milestone." The outcome anchors the journey — every stage moves toward it.

**Pick the time horizon.** First 30 days is one journey. First year is another. Three years (renewal cycle) is a third. Pick one explicitly.

A useful constraint: **first-year journey for the primary persona** is the right starting point for most B2B SaaS. Get that right; expand later.

## 2. Define the Stages

There's no canonical list of stages — pick what fits your business. A common B2B SaaS framing:

1. **Awareness** — they don't know you exist; they're aware of the problem
2. **Consideration** — they know you exist; they're evaluating you vs. alternatives
3. **Decision** — they're picking a vendor; this is where sales / pricing / objections happen
4. **Onboarding** — they signed up / signed contract; getting them to first value
5. **Activation** — they hit the "aha" moment; they understand the value
6. **Adoption / Habit** — they use the product regularly; it becomes part of their workflow
7. **Expansion** — they buy more (more seats, higher tier, additional products)
8. **Advocacy** — they refer others; they're a reference customer

PLG variants might collapse Awareness + Consideration ("they discovered us in Google → signed up free"). Enterprise variants expand Decision into 4 sub-stages (initial demo → proof of concept → security review → procurement → contract).

**Pick 6-8 stages.** Fewer means too coarse to find friction. More means hard to fit on a page and harder to use.

## 3. Gather the Evidence

This is where most journey maps fail. Teams skip evidence and run a workshop where the leadership team draws what they *think* the journey looks like. The map ends up reflecting how the company *wishes* customers behaved, not how they actually do.

**Customer interviews (essential).** Talk to real customers in each stage of the journey:
- 5-10 prospects who recently chose you
- 5-10 prospects who chose a competitor (lost-deal interviews)
- 5-10 customers in onboarding (last 30 days)
- 5-10 customers in steady-state (6+ months)
- 5-10 customers who churned

Open-ended questions: "Walk me through how you found us." "What were you hoping would happen?" "What surprised you?" "What almost made you give up?" "What did you do right before you signed up?"

**Product analytics.** Pull funnel data:
- What % of trials reach the activation milestone?
- Which steps have the biggest drop-offs?
- What's the time-to-first-value distribution?
- Which features predict retention?

**Support tickets.** Categorize by stage. Where do tickets cluster? Onboarding-stage tickets indicate setup friction; year-two tickets indicate scale-pain.

**Sales call recordings.** Listen to discovery calls + lost-deal calls. What objections come up? What questions reveal confusion?

**NPS verbatim.** What do detractors say? What do promoters say? Tag verbatim by stage.

**CS notes.** What do customer success managers say in QBRs? What expansion conversations stalled?

**Onboarding session recordings.** If you do high-touch onboarding, watch 5+ recordings. Where do new customers struggle?

**Time investment**: 2-3 weeks for evidence gathering on a real map. Skipping this step means the map is fiction.

## 4. Map the Stages: What Goes In Each Column

For each stage, capture:

**Goal.** What is the customer trying to accomplish at this stage? (Not what you want them to do — what they want to do.)

**Actions.** What specific steps do they take? List in order. Get specific: "search Google for 'best [X]'", "click pricing link", "talk to teammate", "read 2 reviews on G2", "sign up for free trial."

**Channels / Tools.** Where are they doing this? Your website, Google, their inbox, your product, Slack with their team, a Zoom call, a procurement tool, etc.

**Touchpoints with you.** Which of those actions involve your product, marketing, sales, support, or CS? This is where you have control.

**People involved.** For B2B: just the user, or also their team, their manager, security/legal/procurement?

**Emotions.** What are they feeling at this stage? Confused, excited, frustrated, anxious, satisfied, dismissive. Use plain words; resist trying to force into a 5-point scale.

**Pain points.** Where does the journey break? Specific examples from interviews / data. "Couldn't figure out where to add a teammate." "Sales rep took 5 days to respond." "Pricing page didn't show our use case."

**Opportunities.** What could improve this stage? List ideas (don't filter yet).

**Success criteria.** How do you know this stage went well? "% reaching next stage," "Time to next stage," "NPS at this stage," "% taking key action X."

## 5. The "Moments of Truth" Lens

Not every step in the journey matters equally. Some are routine (logging in). Others are **moments of truth** — make-or-break decisions that determine whether the customer continues, abandons, or actively chooses a competitor.

For B2B SaaS, common moments of truth:

- **First Google search**: do you appear? Does your snippet match their problem?
- **First 90 seconds in product**: can they understand what to do?
- **First "aha" moment**: did they hit the activation milestone in their first session?
- **First teammate invite**: did they get past single-user mode?
- **First export / first integration**: did they invest in your product as a system of record?
- **First support ticket**: was it answered well, or was it the start of disengagement?
- **First renewal conversation**: did the CS team show ROI?

Identify your moments of truth. **5-7 max**. These are where engineering effort + marketing investment + CS attention pay back disproportionately.

## 6. Visualize: The Map Itself

You're producing an artifact, not a Notion page of bullet points. Visual format matters because cross-functional teams need to scan it together.

**Common formats:**

- **Horizontal swimlane** — most common. Stages across the top; rows for goal / actions / channels / emotions / pain / opportunities. Read left to right.
- **Spaghetti map / service blueprint** — for more complex journeys. Adds backstage actions (what your team does behind the scenes at each stage).
- **Customer story arc** — narrative format following a single representative customer through the journey. Good for executive presentations.
- **Heatmap** — friction points overlaid on an existing diagram (your funnel, your product map). Good for compactness.

Tools: **Miro** / **FigJam** / **Mural** are the dominant tools. Some teams do it in **Figma** for design-team alignment. Don't over-invest in tooling — content matters more.

**Make it scannable.** Headlines tell the story; details are below. A reader should understand the journey in 2 minutes from the headlines alone.

**Make it visual.** Emotion icons (😞 → 🙂 → 😐). Color coding for friction (red = serious, yellow = annoying, green = working). Pain-point callouts.

**Show evidence.** Each pain point has a quote or stat next to it: "47% of trials never invite a teammate" or "I almost gave up at this point — it wasn't clear what to do next" — Sarah, week-2 customer.

## 7. The Cross-Functional Workshop

A journey map built in isolation by one person isn't a journey map; it's a draft. Get it in front of cross-functional people to validate, challenge, and own it.

**Run a 3-hour workshop:**

- Pre-read: send the draft map to attendees 24 hours in advance
- Invite: PM lead, marketing lead, sales lead, CS lead, support lead, founder
- Agenda:
  - 15 min: walkthrough of the map by the owner
  - 60 min: critique each stage in turn — what's wrong / missing / wrong-priority
  - 60 min: prioritize friction points (5-7 to focus on this quarter)
  - 30 min: assign owners to each priority + agree on next steps
  - 15 min: close + commit to next review date

**Resist the temptation to rewrite the map in the workshop.** Take notes; iterate after. Workshop is for alignment, not authoring.

## 8. Prioritize Friction: What to Fix First

A good map surfaces 30+ friction points. You can't fix all of them. Prioritize.

**Use a 2x2:** impact (revenue / retention impact if fixed) on one axis, effort (engineering / design / process work to fix) on the other.

- High impact, low effort: do these now (quick wins)
- High impact, high effort: fund quarterly initiatives
- Low impact, low effort: backlog
- Low impact, high effort: don't do

**Stage-rate of contribution:**

- Activation friction (early stage): often the highest-impact fixes — every customer goes through this stage
- Onboarding friction: similar — high reach
- Expansion friction: lower reach (only customers who reach expansion stage), but high revenue per fix
- Renewal friction: moderate reach, very high revenue per fix

**Tag with owner:** PM for product friction; Marketing for awareness/decision friction; Sales for demo / pricing friction; CS for renewal/expansion friction; Support for question-resolution friction.

Each priority gets a one-page brief: what's broken, what evidence supports the priority, what done looks like, what owner team commits to.

## 9. Service Blueprint: The Backstage View

A journey map shows the customer's perspective. A **service blueprint** adds the company's perspective — who does what behind the scenes at each customer touchpoint.

For each touchpoint, capture:

- **Frontstage actions**: what the customer sees (your website page, your sales rep on a call, your product UI)
- **Backstage actions**: what your team does behind the scenes (the marketing nurture sequence, the SDR research, the CSM prep)
- **Support processes**: what tools / data / approvals enable backstage actions (your CRM, your data warehouse, your finance approvals)
- **Failure points**: where each layer breaks (the handoff drops a customer; the data is stale; the approval times out)

Service blueprints are heavier than journey maps — useful when the journey map has surfaced cross-functional handoff failures and you need to redesign the operating model.

## 10. Keeping the Map Alive

A journey map produced once and never updated decays fast. The product changes. The market changes. Customers change.

**Annual refresh.** Once a year, do a smaller version of the original mapping exercise. Talk to 10-20 fresh customers. Update the map. Re-prioritize.

**Quarterly check-in.** A 30-minute session on: have the priority friction points moved? Are the in-flight fixes shipping? What new friction has emerged?

**New-employee onboarding.** Show the map to every new PM, designer, marketer, sales lead, CSM. It's the fastest way to get someone up to speed on how customers actually experience the company.

**Decision input.** When debating roadmap, pricing, packaging, marketing strategy — the journey map is the reference point. "Will this fix moment of truth #3? Then it's higher priority than X."

**Persona expansion.** As you add ICPs (vertical, company size, geography), build journey maps for each. Don't dilute the original.

## 11. Common Failure Modes

**Skipping evidence.** Drawing the journey from the leadership team's imagination. The map ends up flattering and wrong. Always invest in interviews + data first.

**One-time exercise, never updated.** The map decays in months. Without quarterly check-ins, it's a Miro board nobody opens.

**Too many stages.** 12 stages reads like a process flowchart, not a journey. Stick to 6-8.

**Too few stages.** "Sign up → use → renew" hides where friction actually lives.

**No emotion / no language from real customers.** A clinical map without verbatim quotes loses cross-functional empathy.

**Solving for the average customer.** Real journeys have variance. Note the 80th percentile path AND the edge cases.

**Mapping multiple personas at once.** Free user vs. enterprise procurement is two journeys. Don't smush them onto one map.

**No owner for the artifact.** Without a named owner, the map gets stale. Assign ownership (often PM lead, head of CX, or chief of staff).

**Decoupled from roadmap.** The map identifies 7 priorities; quarterly planning ignores them. Tie the map to OKRs / quarterly goals so priorities propagate.

**Treating it as a deliverable, not a tool.** "We made a journey map" — and shelved it. The map's value is using it for decisions, not producing it.

**No metrics on each stage.** Every stage should have at least one quantitative health metric. Without them, "is this stage improving?" is unanswerable.

**Friction prioritized by who shouts loudest.** Sales lead complains about decision-stage friction; product team focuses on activation. Friction priority should be evidence-driven, not politics-driven.

**Ignoring the post-renewal stages.** Most maps end at "renewal" without considering year 2, 3, 4. Mature SaaS customer journeys have rich post-year-1 dynamics (expansion, multi-product adoption, advocacy) — map them.

**Confusing journey map with funnel.** Funnel is the conversion path you see in analytics. Journey map adds context (emotion, channels, people, friction) that funnel doesn't show. Don't substitute one for the other.

**Mapping in a silo.** A journey map built only by marketing or only by product reflects that team's biases. Cross-functional workshop is non-negotiable.

**Forgetting the "lost deal" path.** Maps usually trace customers who succeed. Map the journey of customers who *almost* signed but didn't — what got them close? What stopped them?

**Vague pain points.** "Onboarding is confusing" doesn't help anyone. Specific: "57% of new users don't invite a teammate in the first 7 days; in interviews, they say they don't know how to find the invite button."

## What Done Looks Like (Recap)

You've shipped a journey map when:

- Documented journey covers awareness through advocacy (or your equivalent)
- Each stage has goal / actions / channels / emotions / pain / opportunities / success criteria
- Real evidence (interviews, analytics, tickets, calls, NPS) backs every claim
- 5-7 moments of truth are identified and prioritized
- Each priority has an owner and a brief
- A specific person owns the artifact and runs quarterly check-ins
- The map is referenced in roadmap, marketing, and sales planning conversations

## Mistakes to Avoid

- Drawing the map from imagination instead of evidence
- One-and-done — no refresh cadence
- Smushing multiple personas onto one map
- Vague pain points that nobody can act on
- No emotion / no real customer language
- Decoupled from roadmap so priorities never propagate
- Mapping only the success path; ignoring lost deals and churn paths
- Endless stages (12+) or too few (3-4)
- No owner; no quarterly check-in
- Treating the map as a finished artifact instead of a living tool
- Friction prioritized by politics instead of evidence

## See Also

- [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md) — the evidence base
- [Ideal Customer Profile](../1-position/ideal-customer-profile.md) — pick the persona for the map
- [Customer Onboarding Playbook](./customer-onboarding-playbook.md) — fixes for onboarding friction
- [High-Touch Onboarding](./high-touch-onboarding.md) — variant for enterprise journeys
- [Onboarding Flow](./onboarding-flow.md) — product-side fixes
- [Activation Metric Definition](./activation-metric-definition.md) — measuring "moment of truth" #3
- [Reduce Churn](./reduce-churn.md) — addressing friction in renewal stage
- [Win-Back Churned Customers](./win-back-churned-customers.md)
- [Voice of Customer Program](./voice-of-customer-program.md) — running the interview pipeline
- [Win-Loss Analysis](./win-loss-analysis.md) — lost deal interviews
- [Customer Health Scoring Playbook](./customer-health-scoring-playbook.md) — operationalizing journey-stage health
- [Customer Lifetime Value Playbook](./customer-lifetime-value-playbook.md) — measuring journey impact financially
- [Customer Success Metrics Framework](./customer-success-metrics-framework.md)
- [Quarterly Business Reviews](./quarterly-business-reviews.md) — using the map for QBRs
- [Lead Scoring & Qualification Frameworks](./lead-scoring-qualification-frameworks.md) — handling the awareness/consideration stages
- [Conversion Rate Optimization](./conversion-rate-optimization.md)
- [Pricing Page](./pricing-page.md) — a moment-of-truth surface
- [Demo Request Flow](./demo-request-flow.md)
- [Self-Serve vs Sales-Led](./self-serve-vs-sales-led.md)
- [Quarterly Planning & Operating Cadence](../1-position/quarterly-planning-operating-cadence.md) — building friction priorities into operating cadence
- [Annual Planning & OKRs](../1-position/annual-planning-okrs.md)
- [Mission & Vision Statement](../1-position/mission-vision-statement.md)
