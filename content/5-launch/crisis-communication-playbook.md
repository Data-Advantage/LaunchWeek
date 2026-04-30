[Back to Day 5: Launch](README.md)

# Crisis Communication Playbook: Don't Wait Until the Outage Happens to Figure Out What to Say

Every SaaS will face a crisis. Major outage during business hours; data breach; security incident; viral customer complaint that misrepresents what happened; a senior employee departure that leaks; a feature that backfires badly. Most founders' instinct is to delay communicating ("we don't know enough yet"); minimize ("technically we didn't lose data"); or hide behind legal ("can't comment until investigation complete"). All three make crises worse. The fix is a deliberate playbook drafted before crisis: who decides what to say, how fast, on which channels, with what level of transparency. Companies that handle crises well — Stripe's transparent post-mortems; Cloudflare's outage write-ups; GitHub's incident timeline updates — earn customer trust. Companies that handle them badly — Equifax 2017, Okta 2022, multiple SolarWinds-era — lose it for years.

A working crisis playbook answers: who's the spokesperson (founder for major; specific exec for category-specific), how fast must initial communication go (within 1 hour for major incidents), what to say when you don't have facts (acknowledge + commit to update), how to balance transparency with legal, what NOT to say, how to handle social media noise, and how to write the post-mortem.

This guide is the playbook for crisis communication. Companion to [Incident Response (VibeWeek)](https://vibeweek.dev/6-grow/incident-response-chat), [Trust Center & Security Page](../4-convert/trust-center-security-page.md), [Founder Mental Health & Sustainable Pace](founder-mental-health-sustainable-pace.md), [Customer References](../4-convert/customer-references.md), and [Investor Monthly Updates](investor-monthly-updates.md).

## What Done Looks Like

By end of this exercise:

- Crisis types categorized (severity ladder)
- Spokesperson per type defined
- Initial communication template (the 1-hour update)
- Channel matrix (status page / email / Twitter / press)
- Severity 1 / 2 / 3 thresholds + responses
- Post-mortem template
- Pre-drafted holding statements for top scenarios
- Quarterly tabletop exercise (practice the playbook)

This pairs with [Incident Response (VibeWeek)](https://vibeweek.dev/6-grow/incident-response-chat), [Trust Center & Security Page](../4-convert/trust-center-security-page.md), [Founder Mental Health & Sustainable Pace](founder-mental-health-sustainable-pace.md), [Customer References](../4-convert/customer-references.md), [Investor Monthly Updates](investor-monthly-updates.md), [Reduce Churn](../4-convert/reduce-churn.md), [Win Loss Analysis](../4-convert/win-loss-analysis.md), [Quarterly Business Reviews](../4-convert/quarterly-business-reviews.md), [Press Outreach](press-outreach.md), [Press Kit & Media Kit](press-kit-media-kit.md), [Founder Brand](../3-distribute/founder-brand.md), [Building in Public](../3-distribute/building-in-public.md), [Mission & Vision Statement](../1-position/mission-vision-statement.md), and [Brand Voice](../1-position/brand-voice.md).

## Crisis Categories

```
Help me categorize crises.

The 6 categories:

**1. Outage / availability incident**
- Production down; customers can't use product
- Examples: DB failure; AWS region outage; major bug

**2. Security incident**
- Data breach; unauthorized access; credential leak
- Required: legal review; possibly regulatory disclosure
- Examples: SOC 2-relevant; PII leaked; credentials exposed

**3. Performance / data integrity**
- System works but data wrong; reports incorrect
- Examples: analytics calculation bug; billing wrong amount

**4. Public reputation / social-media incident**
- Customer complaint goes viral; competitor attacks; founder said something controversial
- Examples: Twitter pile-on; press article; influencer call-out

**5. Personnel / executive departure**
- Key exec leaves with controversy
- Co-founder dispute leaks
- Layoffs gone public

**6. Compliance / legal**
- Regulator inquiry; lawsuit filed; subpoena received
- Required: lawyer-driven communication

**Severity within each**:

- **Sev 1**: most users affected; brand-defining moment; founder must lead response
- **Sev 2**: some users affected; significant; senior exec leads
- **Sev 3**: limited impact; standard response; team handles

For my product:
- Top crises by likelihood
- Severity scoring

Output:
1. Top 5 crisis scenarios
2. Severity per
3. Owner per
```

The mistake to avoid: **only thinking about outages**. Most founders prepare for technical outages; get blindsided by reputation / personnel / legal crises. Plan for all 6 categories.

## The 1-Hour Initial Response

```
Help me handle the first hour.

The principle: communicate within 1 hour, even with incomplete information.

Why: silence in a crisis = vacuum filled by speculation; speculation almost always worse than reality.

**The 1-hour template** (for outage / availability):

```
Subject: [INVESTIGATING] [Service Name] Issue

We are currently investigating reports of [issue] affecting some / all customers.

What we know:
- [Symptom 1]
- [Symptom 2]
- Started at: [timestamp]

What we don't know yet:
- Root cause (investigating)
- Estimated time to resolution

What we're doing:
- [Specific action being taken]
- Engineering team is engaged

We'll update [channel] every 30 minutes until resolved.

Status: https://status.yourdomain.com
```

**For security incident** (template; lawyer-reviewed):

```
Subject: Important security update

We're investigating a potential security event involving [scope]. We're sharing this proactively while details are still emerging.

What we know:
- [What happened, what's confirmed]
- [Scope: who's affected]
- [Initial mitigation taken]

What we don't know yet:
- [What's still being investigated]

What we're doing:
- [Specific actions]
- [Outside expert engaged if relevant]

What you should do:
- [Optional: change passwords; rotate API keys; etc.]

We'll update every [N] hours. Questions: [contact]
```

**The discipline**:

State facts; acknowledge unknowns; commit to update cadence; honor it.

What NOT to say:
- "Don't worry"
- "We're fully investigating" (vague)
- "It's probably nothing"
- "Other companies have it worse"
- Anything that sounds defensive

For my templates: [draft now]

Output:
1. Per-crisis-type initial response
2. Update cadence
3. Channel mix
```

The single most-important crisis communication skill: **comfort with uncertainty**. "We don't know yet, here's what we're doing, here's when we'll update" is more reassuring than fake-confident vague statements.

## The Channel Matrix

```
Help me map channels.

Per crisis type, channels to use:

**Severity 1 (major)**:
- Status page (always)
- Email to all affected customers (always)
- Twitter / X (founder + company)
- LinkedIn (company)
- In-app banner
- Phone calls to top accounts (sales / CS)
- Investor update (if material)
- Press statement (if media-attention warranted)

**Severity 2 (significant)**:
- Status page
- Email to affected customers
- Twitter (company)
- In-app banner if applicable

**Severity 3 (limited)**:
- Status page
- Email to specific affected customers only

**Don't use**:

- DMs / private channels exclusively (signals hiding)
- Vague status-page updates without email
- Press release without customer notification first
- Twitter only (excludes non-Twitter customers)

**The "tell customers first" discipline**:

Before press / investors / public:
- Affected customers get the news first (or simultaneously)
- Especially for security incidents

This builds trust; customers feel respected.

**Status page discipline**:

For ongoing incidents: update every 30 min minimum during active.
After resolution: post-mortem within 7 days.

For my channels: [audit]

Output:
1. Channel matrix
2. Sequencing
3. Templates per channel
```

The pivotal sequencing decision: **affected customers BEFORE press**. Customers reading about your incident in a news article first feel disrespected. Send to them first; let them break the news themselves if they choose.

## Pre-Drafted Holding Statements

```
Help me draft holding statements.

For top likely scenarios, draft now (when calm). Use later (when chaotic).

**Scenario 1: Major outage**

(Already covered above)

**Scenario 2: Data breach (suspected)**

```
We discovered [time] potential unauthorized access to [scope]. We immediately [action: revoked tokens, etc.]. We've engaged outside cybersecurity experts to investigate.

What we know:
- [Confirmed scope]

What we're doing:
- Investigation underway
- Notifying affected customers individually within 24 hours
- Working with [authorities if applicable]

What you should do (immediately):
- [Specific action: rotate credentials; etc.]

We'll update within 24 hours. Direct questions: security@yourdomain.com
```

**Scenario 3: Pricing / billing error**

```
We discovered [time] our billing system was [over/under]-charging some customers from [date].

What we know:
- [Number of affected customers]
- [Range of incorrect charges]

What we're doing:
- Refunding overcharges automatically within 7 days
- Auditing system to prevent recurrence

What you should do:
- Nothing required; we're fixing this proactively.
- Questions: billing@yourdomain.com
```

**Scenario 4: Public misrepresentation (Twitter / press)**

```
We've seen [reports / posts] suggesting [misrepresentation].

We want to clarify:
- [Fact 1]
- [Fact 2]
- [Fact 3]

[If we made an error]:
- We acknowledge [specific mistake]
- Here's what we're doing differently going forward.

[If misrepresentation]:
- Here's the actual data / context
- Direct questions: [contact]
```

**Scenario 5: Founder / exec departure**

```
[Name] has decided to [transition / leave / new role]. We're grateful for [their contributions].

[If it's amicable]:
- They'll be transitioning over [timeframe]
- [Successor named or transition plan]

[If not amicable]: less is more; let lawyer review.

We'll continue [mission / strategy].
```

**Scenario 6: Layoffs**

```
We've made the difficult decision to reduce our team by [number / percent].

Why: [honest reason — usually budget / focus]

What we're doing for affected employees:
- [Severance: weeks / benefits]
- [Helping with placement: alumni network / referrals]

What this means for customers:
- [Impact on product / support]
- [Continuity reassurance — must be honest]

We're sorry. We're committed to [forward path].
```

**Drafting discipline**:

When NOT in crisis:
- Lawyer reviews each
- Founder + comms approve
- Stored in shared doc
- Quarterly review / refresh

When crisis hits:
- Customize specifics
- Don't reinvent voice mid-crisis
- Already-approved language reduces panic

For my company: [risks]

Output:
1. Top 5 holding statements
2. Lawyer review
3. Storage
```

The discipline: **draft holding statements during calm**. Mid-crisis is the worst time to write. Pre-drafted = faster response + better thinking + lawyer pre-approval.

## What NOT to Say

```
Help me avoid common mistakes.

The phrases that destroy credibility:

**1. "Out of an abundance of caution"**
Translation: "we panicked." Use sparingly.

**2. "We take security/privacy/customer-data very seriously"**
Generic; meaningless. Specific actions > platitudes.

**3. "There's no evidence of [bad thing]"**
Suggests bad thing happened (just no evidence). Be specific.

**4. "Our prayers are with..."**
For business crises, sounds tone-deaf.

**5. "We can't comment due to ongoing investigation"**
Sometimes legally required; otherwise feels like hiding. Use selectively.

**6. "This is unprecedented"**
Usually it isn't. Sounds defensive.

**7. "We're committed to making this right"**
Vague. What specifically?

**8. "Lessons learned"**
Cliche. Better: "Here's what we changed."

**9. "[Other company] had it worse"**
Never compare. Doesn't help; sounds defensive.

**10. "We respect customers' privacy"** (in privacy breach)
Self-serving; tone-deaf.

The principle:

Specific actions; honest acknowledgment; clear next steps. No corporate-speak.

**Tone**:

- Direct, not defensive
- Honest, not performative
- Specific, not vague
- Confident in actions, humble in mistakes

For my drafts: [audit]

Output:
1. Common phrases to remove
2. Better alternatives
3. Voice guidelines
```

The single most-effective crisis communication: **specificity**. "5,000 customers were affected; here are the 3 things they should do" beats "some customers may have been impacted." Specific = trust.

## The Post-Mortem

```
Help me write the post-mortem.

After resolution (within 7 days for major; 14 for security):

```
**[Title] Post-Mortem**

**TL;DR**: [1-2 sentence summary]

**Impact**:
- Who: [number / type of customers affected]
- When: [timeline; duration]
- What: [specifically what happened from user perspective]

**Timeline** (with timestamps in UTC):
- 00:00 — [event]
- 00:15 — [event]
- 00:45 — [first response]
- 01:30 — [escalation]
- ...
- Resolved at [time]

**Root cause**:
- [Technical / process explanation]
- [Why this slipped through prevention]

**What went well**:
- [Detection time was X]
- [Communication cadence was held]
- [Mitigation was Y]

**What went poorly**:
- [Honest acknowledgment]

**Action items** (with owners + dates):
- 1. [Specific change to prevent recurrence]
- 2. [Process improvement]
- 3. [Monitoring / alerting improvement]

**Apology**:
- [Honest; direct]

**Going forward**:
- [Concrete commitment]

[Posted publicly OR sent to affected customers]
```

**Public vs internal post-mortems**:

Public: most details + actionable lessons (Stripe / Cloudflare / GitHub style)
Internal: more candor about specific failures + people involved

Public post-mortems build trust; internal post-mortems prevent repeats.

**Cadence**:

Sev 1: post-mortem within 7 days
Sev 2: 14 days
Sev 3: optional; at least internal-only

**Examples to study**:

- Stripe — clear timeline; root cause; lessons
- Cloudflare — comprehensive technical depth
- GitHub — incident-by-incident; consistent format

For my next post-mortem: [scope]

Output:
1. Post-mortem template
2. Public vs internal
3. Action-item discipline
```

The trust-builder: **public post-mortem with specific action items**. "We deployed a database migration during peak traffic. Here's the new policy preventing this." Concrete commitment; customers see learning happening.

## Tabletop Exercises

```
Help me practice.

Quarterly: 60-min "what if X happens?" exercise.

The structure:

**Setup**:
Designate 1 person presents scenario; others respond as if real.

**Sample scenarios**:

- "Major outage starting now; AWS east-1 down"
- "Security alert: unusual login pattern detected"
- "Twitter pile-on accusing us of [misrepresentation]"
- "CEO travel-delayed; can't reach for 4 hours"
- "Co-founder departure announcement leaks"

**Roles**:
- "On-call engineer detects incident"
- "Customer support starts seeing tickets"
- "Founder gets paged"
- "Comms drafts statement"
- "Sales / CS prep customer talk-tracks"

**Each round**:
- Inject new info every 10 min
- "Now reporters are calling"
- "Now affected customer has 100K Twitter followers"
- "Now investor texts asking what's happening"

**Debrief**:
- What worked?
- What broke?
- What was unclear?
- Update playbook accordingly.

**Cadence**:

- Quarterly: full team
- Monthly: incident-response team only
- After real incident: AAR (after-action review)

For my team: [stage]

Output:
1. Scenarios per quarter
2. Cadence
3. Roles / participants
```

The discipline most teams skip: **practicing crisis comms**. Real crisis is the worst time to figure out roles + voice + sequencing. Practice ahead.

## Common Crisis-Communication Mistakes

```
Help me avoid mistakes.

The 10 mistakes:

**1. Delayed initial communication**
Silence = speculation; speculation = damage.

**2. Hiding behind "investigation ongoing"**
Acknowledge what's known; flag what's unknown.

**3. Defensive tone**
Reads as guilty; even when you're not.

**4. Generic platitudes**
"Customer trust is paramount" — meaningless.

**5. Tell press before customers**
Customers feel disrespected.

**6. No update cadence; gone silent**
Customers waiting; trust erodes.

**7. Lawyer over-rules transparency**
Legal-driven statements feel cold; over-cautious.

**8. Performative apology**
"Lessons learned" without specific action items.

**9. Public-stunt response**
Free credits / product comp without addressing root cause = bandage.

**10. Founder hides**
Major crises need founder voice; absent founder = vacuum.

For my approach: [risks]

Output:
1. Top 3 risks
2. Mitigations
3. Practice plan
```

The single most-painful mistake: **founder absent during major crisis**. Customers, employees, investors all want to hear from the person whose name is on the door. Even brief statements + update cadence > silence.

## What Done Looks Like

A working crisis comms playbook:
- 6 crisis categories with severity ladder
- Per-category spokesperson + channel matrix
- Pre-drafted holding statements (lawyer-reviewed) for top 5 scenarios
- 1-hour initial-response template
- Update-cadence discipline (30 min Sev 1; hourly Sev 2)
- Customer-first sequencing (before press / investors)
- Public post-mortem template + action items
- Quarterly tabletop exercises
- Founder-led for major; team for minor

The proof you got it right: a major incident hits at 2 AM Sunday; on-call detects; founder paged; initial comms out within 1 hour using pre-drafted template; updates every 30 min; resolved; post-mortem published in 5 days. Customer trust preserved or strengthened.

## See Also

- [Incident Response (VibeWeek)](https://vibeweek.dev/6-grow/incident-response-chat) — technical incident-response companion
- [Trust Center & Security Page](../4-convert/trust-center-security-page.md) — public security trust
- [Founder Mental Health & Sustainable Pace](founder-mental-health-sustainable-pace.md) — crisis stress
- [Customer References](../4-convert/customer-references.md) — references during crisis
- [Investor Monthly Updates](investor-monthly-updates.md) — material crisis = investor update
- [Reduce Churn](../4-convert/reduce-churn.md) — crisis triggers churn risk
- [Quarterly Business Reviews](../4-convert/quarterly-business-reviews.md) — QBRs reference incidents
- [Press Outreach](press-outreach.md) — companion press relations
- [Press Kit & Media Kit](press-kit-media-kit.md) — media-ready assets
- [Founder Brand](../3-distribute/founder-brand.md) — founder voice in crisis
- [Building in Public](../3-distribute/building-in-public.md) — transparency baseline
- [Mission & Vision Statement](../1-position/mission-vision-statement.md) — anchor during crisis
- [Brand Voice](../1-position/brand-voice.md) — voice consistency
- [VibeReference: Status Page Providers](https://vibereference.dev/cloud-and-hosting/status-page-providers) — status page tooling
- [VibeWeek: Audit Logs](https://vibeweek.dev/6-grow/audit-logs-chat) — forensics during incidents
