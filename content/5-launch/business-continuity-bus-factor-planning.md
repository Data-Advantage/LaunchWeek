# Business Continuity & Bus-Factor Planning

[⬅️ Back to Day 5: Launch](./)

The "bus factor" is the number of people who need to be hit by a bus before the company falls apart. For most early-stage startups, the answer is one — the founder. Sometimes two — both founders. The morbid framing aside, the underlying question is real: if the CEO is suddenly unavailable for 4 weeks (medical emergency, family crisis, force majeure, getting hit by a literal bus), what happens?

Most founders never plan for this. They assume "we'll figure it out." Then a real event happens and the company freezes for two months: no decisions, no fundraising progress, no payroll signoff, no urgent customer escalations resolved. Investors panic. Employees lose confidence. Customers lose patience.

Continuity planning is the practice of explicitly mapping which people, accounts, decisions, and processes the company depends on — and ensuring there's redundancy or a documented transition plan for each. Done well, it's invisible insurance: when the worst happens, the company keeps running. Done poorly, you discover the gaps the hardest possible way.

This playbook covers the canonical risks (founder unavailability, key-employee departure, single-vendor lock-in, compromised infrastructure access, founder death + estate planning), the artifacts and processes that mitigate them, and the failure modes that make continuity plans paper exercises.

## What Done Looks Like

- Documented succession + delegation plan for CEO + key executives
- Multiple people with administrative access to critical systems (banking, cloud, domain registrar, email, payment processor, key SaaS platforms)
- Documented "what to do if [founder/key person] is unavailable" runbook
- Estate planning for founders: stock disposition, beneficiary, executor, IP / data access
- Employee bus-factor assessment: which roles have only one person who knows critical context; mitigation plan
- Vendor lock-in audit: which vendors are single-source; backup options if vendor disappears
- Quarterly "fire drill": simulate founder unavailability for 1 day; identify gaps
- Insurance: D&O, key-person life, business continuity insurance
- Documentation discipline: critical processes documented in a place others can find
- Communication plan: who tells employees / customers / investors / press if a major continuity event happens

## 1. Why Most Startups Skip This

Founders skip continuity planning for understandable reasons:

- **Optimism**: "I'm 28; nothing's going to happen"
- **Ego**: "I'm essential; I can't really delegate"
- **Time pressure**: "We have customers to serve; this is overhead"
- **Awkwardness**: discussing your own mortality / incapacity is uncomfortable

The honest counter: the cost of planning is low (a weekend and some legal docs); the cost of NOT planning when something happens is enormous. Treat it as engineering risk management, not personal mortality.

## 2. Catalog the Risks

Start with an honest inventory.

### Tier 1: Founder Unavailability (1+ weeks)

- Health crisis (you, family member)
- Force majeure (natural disaster, accident)
- Required leave (parental, bereavement, jury duty, military reserve)
- Burnout requiring time off

Bus-factor implication: who runs the company in your absence? Who signs payroll? Who decides on the customer escalation? Who responds to the urgent investor email?

### Tier 2: Founder Departure / Death

- Founder dies (rare but happens; especially small companies)
- Founder permanently disabled
- Co-founder breakup (covered separately in [Co-Founder Disputes & Breakup](./cofounder-disputes-breakup.md))

Implication: equity disposition, board control, IP rights, estate handling.

### Tier 3: Key Employee Unavailability

- VP Engineering quits with 2-week notice
- Sole DevOps engineer goes on parental leave
- Salesperson with all the customer relationships disappears

Implication: knowledge transfer, account handoff, replacement hiring.

### Tier 4: Critical Vendor / System Failure

- Cloud provider has multi-day outage
- Stripe disables your account
- Domain registrar locks your domain
- Key SaaS platform shuts down

Implication: backup providers, exportable data, fallback plans.

### Tier 5: Compromised Access / Security Incident

- Founder's accounts compromised
- Employee with admin access leaves angrily
- Cloud account hacked

Implication: access controls, MFA, recovery procedures.

## 3. The Critical Access List

Document who has access to what. The minimal "in case of emergency" list:

| System | Primary | Backup | Notes |
|---|---|---|---|
| Bank account | CEO | CFO | Wire approval requires both |
| Stripe | CEO | CFO | Both have admin |
| Domain registrar | CEO | CTO | 2FA backup codes in safe |
| Cloud (AWS / GCP) | CTO | CEO | Root account in safe; daily access via IAM users |
| GitHub org | CTO | VP Eng | Multiple owners |
| Email admin (Google Workspace) | CEO | CTO | Multiple super-admins |
| Payroll (Gusto / Rippling) | CFO | CEO | |
| Customer Stripe data | CFO | CEO | |
| Key SaaS (Salesforce, HubSpot, etc.) | Function lead | CEO | |
| 1Password / vault | CEO | CTO | Family recovery configured |
| Legal docs | CEO + outside counsel | n/a | Backup with counsel |

The default failure mode: founder is sole admin on everything. Diversify to at least 2 people.

### MFA + Recovery

- All critical accounts: MFA enforced
- Backup codes stored in physical safe + secondary location
- Hardware keys (YubiKey) for highest-stakes accounts (banking, domain, cloud root)
- Family / executor knows where backup codes are

## 4. Decision-Making Continuity

If founder is unavailable for 1+ weeks, who decides?

### Decision Matrix

| Decision Type | Founder Available | Founder Unavailable |
|---|---|---|
| Routine ops (<$10K) | Founder or delegate | Senior team |
| Hiring (within plan) | Hiring manager | Hiring manager |
| Spending ($10K-100K) | Founder + CFO | CFO + COO + senior team consensus |
| Spending (>$100K) | Founder | CFO + board chair |
| Strategy / pivot | Founder | DEFER until founder back; if extended, board |
| Legal / contract redlines (standard) | Counsel + COO | Counsel + COO |
| Legal / contract (non-standard) | Founder + counsel | Defer or board chair |
| Customer escalations (P0) | Founder if VIP; else CSM/CS lead | CS lead + COO |
| PR / media | Founder | COO + PR firm |
| Fundraising | Founder | DEFER (or board engages) |
| Layoffs | Founder + board | Board only |

The principle: routine operations have a delegated path; strategic decisions defer or escalate to board.

### Documented Authority Levels

For each role, document:
- What they can decide alone
- What requires consultation
- What requires founder/board approval
- Spend limits

Most companies haven't documented this. Doing so reveals over-concentration.

## 5. The Continuity Runbook

A specific document: "What to do if [founder] is unavailable for [duration]."

Template:

```markdown
# Continuity Runbook: Founder Unavailability

## Trigger
Founder is unreachable for 24+ hours during business operations (or via prior notification of extended absence).

## First 24 hours

1. [COO/Senior leader] becomes acting CEO
2. Notify board chair via [channel] of the situation
3. Notify senior leadership team via Slack #leadership
4. Postpone all founder-only meetings; reschedule for return
5. Defer non-urgent decisions; document them for founder return

## First week

1. Daily 9am leadership team standup
2. Customer escalations: handled per decision matrix
3. Payroll: ensure CFO has signing authority; confirm next run
4. Press / investor inquiries: route through PR firm + board chair
5. Update employees: brief, calm message via all-hands or email

## Communication templates

### To employees
"[Founder] is taking [some time / extended leave]. [Acting CEO] is leading day-to-day during this period. We expect [no business interruption]. Please continue [normal operations]. Direct urgent matters to [acting CEO]."

### To customers (if asked)
"Our team is operating normally. [Acting CEO/Senior team] is your point of contact for any urgent matters."

### To investors
"[Founder] is on temporary leave for personal reasons. [Acting CEO] is running day-to-day. We'll provide updates as appropriate. Business operations continue as planned."

### To press (only if asked)
"We don't comment on personal matters. The company is operating normally."

## Critical access (in case of urgent need)

[Pointer to the access list document]

## Contacts

- Outside counsel: [name + phone]
- Board chair: [name + phone]
- PR firm: [name + phone]
- Family contact (in case of medical emergency): [name + phone]
- Estate executor (in case of worst case): [name + phone]
```

Store this somewhere multiple senior leaders can find without founder access. Not in founder's personal Notion. In a shared admin Notion / Confluence with appropriate permissions.

## 6. Estate Planning for Founders

The morbid section. Most founders don't have wills until 40+. Founder of a $100M company without estate planning is a disaster.

### Documents Founders Need

- **Will**: who inherits your stock + assets
- **Trust** (if estate is large): tax-efficient transfer; avoids probate
- **Power of Attorney (POA)**: who acts on your behalf if incapacitated
- **Healthcare Directive**: medical decisions if you can't make them
- **HIPAA authorization**: who can talk to doctors about your condition
- **Beneficiary designations**: 401(k), insurance, brokerage accounts
- **Letter of intent**: non-binding guidance for executor on company-specific matters

### Stock-Specific Considerations

- **Vesting acceleration on death**: many companies accelerate unvested stock on founder death; document the term
- **Right of first refusal (ROFR)**: company often has ROFR on stock transferred to family; ensure terms allow inheritance
- **Voting trust**: family may inherit stock but lack expertise; voting trust can have a trusted board member vote
- **IP assignments**: ensure all IP is assigned to the company so heirs can't claim it

### Founder Will Specifics

Standard will doesn't cover startup stock well. Get a will drafted by an attorney who knows startup equity. Cost: $1-3K for basic; $5-10K for trust + will combo.

### Communicate the Plan

Spouse / partner / executor needs to know:
- Where docs are
- Who outside counsel is
- Company info (name, EIN, address)
- Who at the company to contact

Without this, executor takes 6+ months to figure out what they're inheriting.

## 7. Vendor Lock-In Mitigation

For each critical vendor, document:

- **What we use them for**: payroll, banking, payment processing, etc.
- **Backup option**: if they shut down or terminate us, who do we switch to?
- **Migration time**: 1 day? 1 month? 6 months?
- **Data export**: do we have current backups of our data from them?
- **SLA for response**: if vendor goes down, how do we react?

### High-Risk Single-Vendor Exposures

- **Stripe**: backup is Adyen / Braintree / Square + reactivating customer payment methods (painful)
- **AWS**: backup is GCP / Azure (multi-month migration)
- **Domain registrar**: easy to migrate but DNS / email config moves with it
- **Email (Google Workspace)**: backup is Microsoft 365 (significant disruption)
- **Payroll (Gusto / Rippling)**: backups exist; migration timed around quarter-end ideally
- **CRM / sales engagement (Salesforce / HubSpot / Outreach)**: data lock-in real

### Mitigation

- **Daily / weekly data exports** of customer data, transactions, usage
- **Secondary providers** for highest-risk infrastructure (multi-cloud at scale)
- **Force-majeure exit clauses** in contracts where leverage allows
- **Vendor risk monitoring**: be aware of vendor financial health (public companies' earnings, private companies' fundraising)

## 8. Knowledge Transfer + Documentation

The single biggest bus-factor risk in early-stage: undocumented institutional knowledge in someone's head.

Common examples:

- Only the CTO knows how the build pipeline works
- Only the founder knows the password to the Stripe account
- Only the senior PM knows why the pricing was set the way it was
- Only the CTO knows which of the 12 internal services can be safely scaled down

### Mitigation

- **Documentation culture**: write it down norm
- **Pair work + rotation**: more than one person can do critical things
- **Recorded onboarding**: when senior people join, document their setup
- **Quarterly bus-factor audit**: ask each function "who else can do your job for 2 weeks?" and remediate gaps

### Hard Cases

Some knowledge is genuinely hard to document — historical context, customer relationships, judgment from past decisions. For these, the answer is **redundancy** (more than one person involved over time) rather than documentation.

## 9. Fire Drill: Simulating Founder Absence

The best test of continuity planning is doing it.

### Quarterly Drill Pattern

- Founder takes 1 day "off" (not really; but doesn't respond to anything)
- Acting CEO runs the day
- After: review what broke + what worked

### What You'll Discover

- Decisions piled up that the team couldn't make
- Approvals stuck (only founder can sign / authorize)
- Customer escalations stalled (only founder has the relationship)
- Tools the team couldn't access

### Iterate

After each drill:
- Add the discovered gap to the runbook
- Delegate new authorities
- Document new processes

Within 4-6 quarters, the company runs cleanly without you.

## 10. Insurance for Continuity

### Key-Person Life Insurance

A policy on the founder, payable to the company. Used to cover transition costs if founder dies. Typical coverage: 5-10x annual salary for a CEO.

Cost: $500-3000/yr depending on age + health. Worth it for $2M+ ARR companies.

### Disability Insurance

Pays the founder a portion of salary if disabled and unable to work. Personal coverage; complements company protection.

### Business Interruption Insurance

Covers lost revenue + operating expenses during a covered disruption (typically physical: fire, flood). Not all events covered.

### D&O Insurance

Covers directors and officers from claims related to their decisions. Critical when board adds independent directors. (See [Startup Insurance & D&O Coverage](./startup-insurance-do-coverage.md))

## 11. Common Failure Modes

**Founder is sole admin on everything.** No backup access; if founder is unavailable, nothing happens. Always 2+ admins on critical systems.

**No documented authority.** "Founder decides everything" → in absence, paralysis. Document delegated authority levels.

**No estate planning.** Founder dies; family + company in chaos for months. Get a will at company formation.

**Single-vendor lock-in for critical infrastructure.** Vendor terminates; company can't operate. Identify backups for top 5 critical vendors.

**Knowledge in single heads.** "Only Bob knows" — until Bob is gone. Quarterly bus-factor audit; pair / rotate / document.

**Continuity runbook in founder's personal Notion.** Founder is unavailable; nobody can find the runbook. Store in shared admin space.

**No fire drills.** Plan exists on paper; never tested. Quarterly drill reveals gaps.

**Founders avoid morbid topics.** "We'll deal with that later." Real events don't wait. Have the conversations now.

**MFA without backup codes.** Founder loses phone; can't access critical systems. Backup codes in safe + secondary location.

**Unwilled bus-factor.** Spouse inherits stock; doesn't know what to do with it; voting tied up. Estate plan + voting trust.

**Insurance gaps.** No key-person life; no D&O; no disability. Real exposure to single-founder risk.

**Banking access concentrated.** Only CEO can sign wires; CEO unavailable; payroll skipped. Multi-signatory setup.

**Forgetting offshore subsidiaries.** UK / EU / Indian sub has its own access controls; founder is sole director. Ensure secondary access.

**Stale runbooks.** Runbook from 2 years ago references former employees + outdated vendors. Quarterly review minimum.

**Communication plan vague.** Major event happens; nobody knows what to say to whom. Pre-drafted templates ready.

**Co-founders' continuity tied together.** Both founders fly together; one accident; both gone. Avoid.

**Investor side neglected.** Investors discover founder's situation via TechCrunch. Brief proactively.

**Family unaware.** Founder dies; family doesn't know which lawyer to call. Communicate the plan to family + executor.

**Compounding outages.** AWS down + your CFO on vacation + Stripe webhook delay. Expect compounding; design redundancy across.

**Burnout-driven exits not planned.** Founder burns out; no continuity plan; quits abruptly; vacuum. Address founder mental health AND continuity.

**Privacy overrides safety.** Founder doesn't want anyone to know about health issue; doesn't activate continuity plan; company drifts. Discreet communication > silence.

## What Done Looks Like (Recap)

You've shipped continuity planning when:

- Multiple people have admin access on every critical system
- Documented authority + delegation matrix
- Continuity runbook exists, accessible to senior team without founder
- Founder estate plan in place (will, trust, POA, healthcare directive)
- Stock-specific terms documented (acceleration, ROFR, voting trust)
- Vendor lock-in audit + backup options identified
- Quarterly bus-factor audit + fire drill cadence
- Key-person + D&O insurance in place
- Family / executor briefed on company info + contacts
- Communication templates ready for major continuity events

## Mistakes to Avoid

- Founder as sole admin / signatory
- No documented authority levels
- No estate plan
- Single-vendor lock-in unmitigated
- Knowledge concentrated in single heads
- Runbook stored where only founder can access
- Never doing fire drills
- Avoiding the morbid conversations
- MFA without backup
- Insurance gaps (key-person, D&O, disability)
- Banking + payment access concentrated
- Stale runbooks not updated quarterly
- Communication plan vague / unrehearsed
- Family + executor unaware of company details

## See Also

- [Co-Founder Disputes & Breakup](./cofounder-disputes-breakup.md) — adjacent continuity scenario
- [Founder-CEO Transition](./founder-ceo-transition.md) — planned vs. emergency transition
- [Founder Mental Health & Sustainable Pace](./founder-mental-health-sustainable-pace.md) — preventing burnout-driven crises
- [Founder Productivity / Calendar Discipline](./founder-productivity-calendar-discipline.md)
- [Crisis Communication Playbook](./crisis-communication-playbook.md)
- [Startup Insurance & D&O Coverage](./startup-insurance-do-coverage.md)
- [Layoffs & Restructuring Playbook](./layoffs-restructuring-playbook.md)
- [Down Round & Bridge Round Navigation](./down-round-bridge-round-navigation.md)
- [Burn Rate & Runway Management](./burn-rate-runway-management.md)
- [Fundraising Playbook](./fundraising-playbook.md)
- [Board Meeting Cadence & Materials](./board-meeting-cadence-materials.md)
- [Investor Monthly Updates](./investor-monthly-updates.md)
- [Demo Day & Investor Pitch](./demo-day-investor-pitch.md)
- [M&A Strategy / Acquihire](./ma-strategy-acquihire.md)
- [Acquisition Exit Strategy](./acquisition-exit-strategy.md)
- [IPO Readiness & S-1 Preparation](./ipo-readiness-s1-preparation.md)
- [Advisory Board Strategy](./advisory-board-strategy.md)
- [409A Valuations & Equity Management](./409a-valuations-equity-management.md)
- [First 90 Days](./first-90-days.md)
- [Year in Review / Annual Letter](./year-in-review-annual-letter.md)
- [Founder Story](../1-position/founder-story.md)
- [Mission & Vision Statement](../1-position/mission-vision-statement.md)
- [Annual Strategy Offsite](../1-position/annual-strategy-offsite.md)
- [Annual Planning & OKRs](../1-position/annual-planning-okrs.md)
- [Quarterly Planning & Operating Cadence](../1-position/quarterly-planning-operating-cadence.md)
- [Compensation Philosophy & Pay Bands](../4-convert/compensation-philosophy-pay-bands.md)
- [Founder Hiring Playbook](../4-convert/founder-hiring-playbook.md)
- [VP Engineering Hire / Transition](../4-convert/vp-engineering-hire-transition.md)
- [Founder-Led Sales Handoff](../4-convert/founder-led-sales-handoff.md)
- [Cap Table & Equity Management Tools (VibeReference)](https://viberef.dev/auth-and-payments/cap-table-equity-management-tools.md)
- [Compliance Automation Tools (VibeReference)](https://viberef.dev/devops-and-tools/compliance-automation-tools.md)
- [Secret Management Providers (VibeReference)](https://viberef.dev/devops-and-tools/secret-management-providers.md)
- [Startup Banking & Corporate Spend Platforms (VibeReference)](https://viberef.dev/auth-and-payments/startup-banking-corporate-spend-platforms.md)
- [HR & Payroll Tools (VibeReference)](https://viberef.dev/auth-and-payments/hr-payroll-tools.md)
- [Backups Disaster Recovery (VibeWeek)](https://vibeweek.dev/6-grow/backups-disaster-recovery-chat.md)
- [Incident Response (VibeWeek)](https://vibeweek.dev/6-grow/incident-response-chat.md)
