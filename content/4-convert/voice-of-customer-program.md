[Back to Day 4: Convert](README.md)

# Voice of Customer Program: Running NPS, CSAT, CES at SaaS Scale

Most B2B SaaS companies "do NPS" and produce nothing useful. The pattern is familiar: leadership asks "what's our NPS?" — Customer Success scrambles, sends a Typeform to a random sample of 200 customers, gets 14 responses with an unrepresentative bias, calculates a score (let's say 47), reports it on the next board deck, and never acts on the open-ended responses. Six months later the question repeats; the answer drifts to 39; nobody knows whether that's signal, noise, or sample-bias. The "VoC program" was theater all along.

A real Voice of Customer (VoC) program is something else: a recurring cross-functional system that captures structured + unstructured customer feedback at known lifecycle moments, routes the signal to the team that can act on it, closes the loop with the customer, and produces measurable change in retention, expansion, and product. NPS is one of three measurements (alongside CSAT and CES) — and the score itself matters less than the open-ended "why" responses, which become the strategic intelligence backbone for the company.

This guide is the playbook for designing, launching, and running a VoC program that produces ROI, not theater.

## What Done Looks Like

A working VoC program produces:

- A clear definition of NPS, CSAT, and CES — and which to use when
- Surveys triggered at known lifecycle moments (not random blasts)
- 25-50% response rates (not 5%)
- An automated closed-loop system: low-score → CSM follow-up; high-score → reference / advocacy ask
- A weekly or bi-weekly synthesis of qualitative themes back to the team
- Quarterly executive review of trends + actions taken
- Demonstrable causation: "we shipped X because of VoC theme Y; result Z"
- Survey fatigue managed (no customer surveyed more than monthly)
- A small, owned team or DRI (often Customer Marketing / CS Ops / Product Ops)
- Lift in retention attributable to closed-loop interventions

This pairs with [Customer Marketing Program](customer-marketing-program.md) (advocacy from promoters), [Reduce Churn](reduce-churn.md) (detractor intervention is churn prevention), [Customer Success Metrics Framework](customer-success-metrics-framework.md) (VoC is part of the metric stack), [Customer Advisory Board](customer-advisory-board.md) (VoC themes drive CAB agendas), [Customer References](customer-references.md) (promoters become references), [Win/Loss Analysis](win-loss-analysis.md) (sister discipline for prospects), [Renewal Forecasting](renewal-forecasting-management.md) (VoC scores feed renewal risk), and [Marketing Operations Playbook](marketing-operations-playbook.md) (the operational systems VoC depends on).

## What NPS, CSAT, and CES Actually Measure

```
The three are NOT interchangeable. Pick the one that matches what you want to know.

NPS — Net Promoter Score
- Question: "How likely are you to recommend [Product] to a friend or colleague? (0-10)"
- Promoters: 9-10 | Passives: 7-8 | Detractors: 0-6
- Score: % Promoters - % Detractors (range -100 to +100)
- Best for: overall brand health; relationship strength
- Cadence: quarterly or biannually (relationship survey)
- Pros: industry-standard; comparable across companies + categories
- Cons: lagging; conflates many factors; cultural bias (US scores differ from JP, etc.)

CSAT — Customer Satisfaction
- Question: "How satisfied were you with [specific interaction/feature]?" (1-5 or 1-7 scale)
- Score: % satisfied (4-5 of 5) or average score
- Best for: specific moment / interaction satisfaction
- Cadence: triggered by specific events (post-support, post-onboarding, post-feature-use)
- Pros: actionable; tied to specific moment
- Cons: harder to compare across orgs; doesn't capture overall brand

CES — Customer Effort Score
- Question: "How much effort did you have to put forth to [accomplish task]?" (1-5 or 1-7 scale)
- Score: % low-effort (1-2 of 5) or average score
- Best for: friction in specific flows (support, signup, checkout, etc.)
- Cadence: triggered post-task
- Pros: highly actionable; predicts loyalty better than NPS in some studies
- Cons: less industry-standard; harder to benchmark

When to use which:
- Want overall brand health, board metric: NPS
- Want to evaluate a specific feature / launch / interaction: CSAT
- Want to find friction points: CES
- Want all three: stagger them to avoid survey fatigue

Common mistake: running ONLY NPS and treating it as the master metric.
NPS is a lagging indicator; CSAT/CES are leading indicators. You need both.
```

## When to Launch (and When NOT to)

Don't run a VoC program if:

**You don't have a process to act on the data.** A VoC program with no close-loop response is worse than no program — customers feel surveyed-and-ignored, which is a churn signal of its own.

**You have <50 active customers.** Below this, every customer is a 1:1 conversation. Pick up the phone instead of sending a survey.

**You haven't defined who owns it.** "We'll all act on it" = nobody acts on it. VoC needs a single DRI before launch.

**You're surveying too often.** If a customer is already getting product-feedback emails, support-CSAT emails, and your monthly newsletter, adding NPS is fatigue. Consolidate first.

**You think NPS = your job is done.** A score is a starting point. The OPEN-ENDED RESPONSES are the gold; the score is the headline.

**Your product is pre-PMF.** NPS scores below PMF are noise. Run lots of customer-discovery interviews instead.

Launch the program when:

- 50+ active customers (or 500+ if PLG-self-serve)
- A named DRI (Customer Marketing / CS Ops / Product Ops)
- Tooling chosen (see Tooling section below)
- A close-loop process designed for detractors
- A close-loop process designed for promoters (advocacy/reference path)
- Leadership commits to acting on themes (NOT just reading reports)
- A clear answer to "what will we do differently if we learn X?"

## Designing the Survey Cadence

The biggest mistake: blasting one giant NPS survey twice a year. The right shape: continuous, lifecycle-triggered, well-spaced.

```
Recommended VoC survey cadence for B2B SaaS ($1M-50M ARR):

LIFECYCLE TRIGGERED SURVEYS (most valuable; highest response rate):

Day 14 post-onboarding: CSAT + CES
- "How satisfied are you with your onboarding experience?"
- "How much effort did it take to get started with [Product]?"
- Triggered: 14 days after first paid session
- Expected response rate: 40-60% (high engagement window)

Post-support-ticket-close: CSAT
- "How satisfied were you with the support you received?"
- Triggered: 24-48 hours after ticket closes
- Expected response rate: 25-40%

Post-feature-launch (new feature usage): CSAT
- "How satisfied are you with [new feature]?"
- Triggered: after first 3 uses of the feature
- Expected response rate: 15-25%

90 days post-onboarding: NPS (the relationship survey)
- "How likely are you to recommend [Product] to a colleague?"
- Triggered: 90 days after first paid session
- Expected response rate: 30-45%

RELATIONSHIP NPS: BIANNUALLY (every 6 months thereafter)
- Same NPS question
- Triggered: every 180 days for active accounts
- Expected response rate: 25-40%

ANNUAL DEEP-DIVE: Once per year
- Longer survey (5-10 questions): NPS + CSAT on key features + CES + open-ended
- Triggered: annually, often timed to renewal preparation
- Expected response rate: 30-50% (with executive sponsorship)
- WARNING: this is a one-shot; don't increase frequency

PROSPECT/CHURN SURVEYS:
- Lost-deal survey: post close-lost (sales-driven)
- Churn survey: at cancellation (CS-driven; often triggers retention save attempt)
- Both are different programs but feed VoC themes

Stagger to avoid fatigue:
- No customer surveyed more than once per ~30 days
- Honor "do not survey" preferences explicitly
- For multi-user accounts: rotate surveyed contacts; don't blast everyone

Important: ratio matters
- 70%+ of surveys should be lifecycle-triggered (low-effort, contextual, high response)
- 20% should be relationship NPS
- 10% should be annual deep-dive
- Rare: ad-hoc thematic surveys (max 2-3 per year)
```

## Surveys vs. Interviews

A truth most VoC programs miss: surveys are great for breadth + benchmarking; interviews are where the real strategic intelligence lives.

```
Surveys → quantitative themes + scores + benchmarks
Interviews → root cause + product-strategy intelligence + relationship building

Recommended interview cadence:
- 5-10 customer interviews per quarter (cross-functional: PM, CS, marketing observe)
- Detractor follow-up interviews: 100% of detractors get a 1:1 outreach offer (50% accept)
- Promoter interviews: 5-10 per quarter for case studies + advocacy

Interview formats:
- 30-45 min, video (Zoom/Loom-recorded with consent)
- Open-ended questions tied to current strategy questions
- Always end with: "If you could change one thing about [Product], what would it be?"

Synthesis discipline:
- Tag every interview transcript by theme (use Dovetail, Notion, or AI-assisted tagging)
- Quarterly synthesis: top 5 themes across all interviews + surveys
- Triangulate: theme present in interviews AND surveys = high confidence

Best practice: pair interviews with VoC scores
- Detractor (NPS 0-6): high-priority interview ask
- Passive (NPS 7-8): batch interview targeting
- Promoter (NPS 9-10): advocacy + reference path interviews
- Use NPS as the ROUTING signal, not the destination
```

## Closed-Loop: Detractor Intervention

The single highest-ROI VoC mechanic: when a customer scores you a detractor, get to them within 24-48 hours.

```
Detractor close-loop process:

T+0: Customer responds NPS 0-6
- Trigger: webhook from survey tool to your CRM/CS platform
- Auto-create CSM task: "Detractor follow-up: [customer]"
- Auto-pull the customer's recent activity, support tickets, last login

T+4 hours: CSM reviews context
- Reads NPS comment if any
- Reviews account health
- Determines outreach approach (personalized email vs. video vs. call)

T+24 hours: CSM reaches out
- Personalized message (NEVER templated for detractors)
- Acknowledges feedback explicitly
- Asks: "I'd love 15 minutes to understand what's going wrong and see how we can help"
- Roughly 30-50% of detractors accept the call

T+1 week: Outcome captured
- Customer's actual issue tagged in CRM (root cause, not symptom)
- Action taken (product change request, billing adjustment, training, etc.)
- Renewal risk flag updated
- Promoter / passive / detractor segment updated for next survey

T+30 days: Follow-up
- "Following up on our conversation 30 days ago — how are things now?"
- Often turns 0-6 detractors into 7-10 (passive or promoter)
- Document the conversion

Common detractor patterns + actions:
- Onboarding friction → CS team intervention + onboarding revamp ticket
- Specific feature gap → product team review with frequency tagging
- Pricing dissatisfaction → packaging review (NOT discount; understand value perception)
- Bug or reliability → engineering escalation
- Wrong-fit / never should have closed → mark for risk-tier; assess churn likelihood
- Competitor switch consideration → urgent retention save with senior CS lead

Tracking:
- Detractor follow-up coverage rate (target: 80%+ within 7 days)
- Detractor-to-passive conversion rate (target: 30%+ within 60 days)
- Detractor-driven product changes per quarter (target: 5-10 product changes "tagged VoC")

Resourcing:
- 1 CSM can handle ~30-50 detractor follow-ups per quarter
- At scale, dedicated "VoC Response" specialist on CS team
```

## Closed-Loop: Promoter Activation

The mirror image: when a customer scores 9-10, immediately ask them to do something for you.

```
Promoter activation playbook:

T+0: Customer responds NPS 9-10
- Trigger: webhook from survey tool
- Auto-route to Customer Marketing
- Auto-tag account as "promoter eligible"

T+72 hours: Personalized advocacy ask
- Email from CSM or Customer Marketing
- "Thanks for the kind words! We'd love to feature you / get a quote / interview you. Would you be open to:
  • A short case study (30-min interview, you approve final draft)?
  • A G2/Capterra review (we'll send the link)?
  • A logo on our website (with your approval)?
  • Speaking at our user conference?
  • Joining our customer advisory board?"

Tier the asks:
- All promoters: review request (G2, Capterra, app store)
- Engaged promoters: case study request
- Top 20 promoters: CAB invitation, conference speaker, video testimonial
- Aspirational promoters: keynote stage, joint webinar, integration partner

Tracking:
- Promoter activation rate: % of promoters who say yes to ANY ask (target: 35-50%)
- Reviews generated per quarter from VoC promoters
- Case studies generated per quarter
- Sourced expansion via promoter referrals (track in CRM)

Pitfall: don't ask all promoters for everything. Light ask first; deepen for repeat-promoters.
```

## Tooling

Pick the right tool for the right stage. Don't over-buy.

```
TIER 1: First VoC program (under $5M ARR)
- Delighted, Refiner, or Survicate ($50-200/mo)
- One product, simple lifecycle triggers
- Pipe to Slack / email for promoters and detractors
- Tag responses in your CRM (HubSpot/Salesforce)

TIER 2: Mid-market ($5-30M ARR)
- Sprig (PLG / in-product surveys; great for B2B SaaS)
- OR Refiner (B2B SaaS-focused, mature)
- Lifecycle triggers from your CDP (Segment) or product analytics (Amplitude/Mixpanel)
- AI-assisted synthesis (most modern tools have this)
- Auto-routing of detractors/promoters to CRM tasks
- Dovetail for interview transcript management

TIER 3: Enterprise ($30M+ ARR)
- Qualtrics or Medallia (enterprise VoC platforms)
- Deeper analytics + executive dashboards
- Multi-language; multi-region; sophisticated sampling
- Integration with broader experience-management initiatives
- Often $30K-300K+/yr (the budget conversation matters here)

For this stage spectrum, see [Customer Survey & NPS Providers](../../VibeReference/content/product-and-design/survey-nps-providers.md) for vendor-by-vendor depth.

Avoid:
- Qualtrics at $5M ARR (way too much; team doesn't extract value)
- SurveyMonkey for NPS at scale (no real lifecycle triggering)
- Google Forms (no automation; survey fatigue uncontrolled)
```

## Synthesis + Action: The Weekly Discipline

Without synthesis, VoC produces noise. With synthesis, it produces strategy.

```
Weekly VoC review (1 hour, recurring):

Attendees: VoC owner + CS lead + Product lead + Marketing lead

Agenda:
- Top open-ended responses from past 7 days (raw quotes)
- New themes emerging (compared to last 4 weeks)
- Detractor follow-up status: who's behind on outreach?
- Promoter activation status: who converted to advocacy?
- Score trend (NPS, CSAT, CES) week over week, with statistical-significance flag
- One question to align on: "What's the top 1 theme this week, and who owns it?"

Outputs:
- 1-2 product-team tickets (validated themes converted to product asks)
- 1-2 CS process changes
- 1-2 marketing message tweaks
- Detractor recovery plan for at-risk accounts
- Promoter activation list

Quarterly synthesis (90 min):
- Score trends YTD
- Top 5 themes ranked by frequency + business impact
- Actions taken (with owners + outcomes)
- Top 10 quotes that capture the customer voice
- Recommendations for next quarter

Annual review:
- Year-over-year trends
- Theme persistence (which themes returned despite action)
- VoC-attributed product changes shipped
- VoC-attributed retention saves
- ROI calc: detractor follow-up cost vs. retention saved

Without weekly synthesis, VoC degrades into a number on a slide. With it, VoC becomes the company's strategic listening system.
```

## Avoiding Common Failure Modes

```
Failure 1: NPS-only, no qualitative analysis
- Pattern: leadership asks "what's our NPS?"; team reports score; nobody reads the comments
- Fix: report 5-10 representative quotes alongside every score reading

Failure 2: Survey blast that ignores fatigue
- Pattern: every customer gets monthly NPS + post-support CSAT + product surveys + research interviews
- Customer experience: spam
- Fix: governance — one global survey-frequency budget; suppress overlapping triggers

Failure 3: Closed-loop never closes (detractors)
- Pattern: detractor responds; nobody follows up; customer churns 3 months later
- Fix: SLA — detractor outreach within 48 hours; auto-task; CSM accountability metric

Failure 4: Score chasing instead of theme acting
- Pattern: leadership pressures team to "raise NPS by 5 points"; team gamifies survey timing
- Fix: report themes alongside scores; tie reviews to "actions taken," not "score moved"

Failure 5: Sample bias making score noise
- Pattern: 8% response rate on a 30K-customer base; demographics skew; conclusions don't generalize
- Fix: track response rate by segment; over-sample under-represented; use confidence intervals

Failure 6: VoC owned by everyone (= nobody)
- Pattern: PM owns it / CS owns it / Marketing owns it — turns into committee paralysis
- Fix: ONE DRI; cross-functional inputs but single owner

Failure 7: Quarterly executive summary in isolation from operating cadence
- Pattern: VoC report once a quarter; nothing happens between reports
- Fix: weekly micro-cadence; quarterly is synthesis, not initiation

Failure 8: Promoter activation neglected
- Pattern: focus all energy on detractors; promoters never asked for advocacy
- Fix: balanced playbook — both ends matter

Failure 9: B2B treats every contact as the account
- Pattern: surveys go to one user (often champion); detractor user ≠ detractor account
- Fix: account-level NPS rollup; surface multi-stakeholder perspectives

Failure 10: Surveys not localized
- Pattern: English-only NPS in markets with low English fluency; response rate craters
- Fix: native-language survey for top 3 markets minimum; localize the open-ended response analysis too

Failure 11: VoC doesn't tie to renewal/expansion
- Pattern: VoC scores live in a separate report from renewal forecast
- Fix: integrate VoC scores into health scores into renewal risk forecasting

Failure 12: Confusing "we did surveys" with "we have a program"
- Pattern: program existence justified by survey volume
- Fix: measure outcomes — themes acted on, retention impact, references generated
```

## Hire Signal: The First VoC Owner

When does a dedicated VoC role make sense?

- Pre-$5M ARR: distributed ownership (CS lead + part-time CS Ops)
- $5-15M ARR: 0.5-1 FTE owns VoC + adjacent (often CS Ops)
- $15-50M ARR: dedicated VoC manager (or "Customer Insights Manager")
- $50M+ ARR: VoC team (manager + analysts + research lead)

Profile of the first VoC owner:
- Background: CS Ops, Product Ops, or Customer Marketing
- Skills: SQL or analytics-platform fluency; qualitative coding; cross-functional facilitation
- Mindset: pattern-recognition; good at saying "no, that's not the theme"
- Comp: $90K-160K base depending on stage and location

## What Done Looks Like (recap)

A working VoC program at scale produces:

- [ ] Lifecycle-triggered NPS, CSAT, CES — not random blasts
- [ ] 25-50% response rates on lifecycle surveys (not 5%)
- [ ] Closed-loop detractor follow-up within 48 hours (80%+ coverage)
- [ ] Closed-loop promoter activation (35%+ convert to advocacy)
- [ ] Weekly synthesis cadence (not just quarterly)
- [ ] Quarterly executive review with actions taken and outcomes
- [ ] Demonstrable causation: "we shipped X because of VoC; result Z"
- [ ] Survey fatigue managed (no customer over-surveyed)
- [ ] Single DRI owning VoC with executive sponsorship
- [ ] Retention lift attributable to VoC interventions
- [ ] Promoter pipeline feeding [Customer Marketing](customer-marketing-program.md), [References](customer-references.md), [CAB](customer-advisory-board.md)
- [ ] Detractor pipeline feeding [Reduce Churn](reduce-churn.md), [Renewal Risk](renewal-forecasting-management.md), Product roadmap

## Mistakes to Avoid

- **Treating NPS as the master metric.** It's a lagging indicator; CSAT/CES are leading. Use all three.
- **Reporting score without quotes.** The comments ARE the strategic signal. The score is the headline.
- **Skipping detractor close-loop.** This single mechanic is the highest-ROI part of any VoC program.
- **Skipping promoter activation.** Asking promoters for reviews/cases is the second-highest-ROI mechanic.
- **Surveying everyone, every time.** Survey fatigue tanks response rates and damages relationships.
- **No DRI.** "We all own VoC" → committee paralysis. One owner; cross-functional inputs.
- **Quarterly-only cadence.** Weekly synthesis is where the strategic work actually happens.
- **Confusing tools with programs.** Buying Qualtrics doesn't make you VoC-mature. The process does.
- **Score-chasing leadership.** "Raise NPS by 5 points" creates gamification incentives. Reward action, not score movement.
- **Forgetting localization.** International customers give different scores; use localized surveys for top markets.
- **VoC silo'd from renewals/CS.** VoC must feed health-scoring, renewal-risk, and CS account plans.
- **Annual program only.** Annual deep-dive is a moment; lifecycle triggers are the engine.
- **Asking detractors for case studies.** Wrong segment, wrong moment — reach out to understand, not to sell.
- **Asking promoters for product feedback only.** Promoters are advocacy gold; activate them.
- **No interview supplement.** Surveys give breadth; interviews give depth. Run both.
- **Skipping the synthesis step.** Without synthesis, VoC is data exhaust. With it, VoC is strategy.

## See Also

- [Customer Marketing Program](customer-marketing-program.md) — promoter activation feeds here
- [Reduce Churn](reduce-churn.md) — detractor follow-up is churn prevention
- [Customer Success Metrics Framework](customer-success-metrics-framework.md) — VoC metrics fit in here
- [Customer Advisory Board](customer-advisory-board.md) — top promoters become CAB members
- [Customer References](customer-references.md) — promoters become references
- [Win/Loss Analysis](win-loss-analysis.md) — sister VoC discipline for prospects + churned
- [Win-Back Churned Customers](win-back-churned-customers.md) — adjacent (detractor → churn → win-back)
- [Renewal Forecasting & Pipeline Management](renewal-forecasting-management.md) — VoC feeds health/risk scoring
- [Marketing Operations Playbook](marketing-operations-playbook.md) — operational systems VoC depends on
- [Customer Survey & NPS Providers (Reference)](../../VibeReference/content/product-and-design/survey-nps-providers.md) — vendor-by-vendor tooling depth
- [Customer Feedback & Feature Request Tools (Reference)](../../VibeReference/content/product-and-design/customer-feedback-feature-request-tools.md) — adjacent feedback tools
- [Customer Health Scoring (VibeWeek implementation chat)](../../VibeWeek/6-grow/customer-health-scoring-chat.md) — code-side implementation detail
- [Customer Feedback Surveys (VibeWeek implementation chat)](../../VibeWeek/6-grow/customer-feedback-surveys-chat.md) — code-side implementation detail
