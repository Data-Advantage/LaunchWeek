[Back to Day 4: Convert](README.md)

# B2B Procurement Process Navigation: How Enterprise Deals Actually Get Signed

Most founders selling to mid-market and enterprise hit the same wall: the deal "is closed" — buyer loves the product, says yes, even sends signed quotes — and then nothing happens for 3 months. Procurement, legal, IT security, and finance show up sequentially with hundred-question security questionnaires, redlined MSAs, vendor-onboarding paperwork, and SOC 2 audits. Each adds 2-4 weeks. The founder isn't selling anymore — they're navigating a bureaucratic gauntlet that could fail at any step. Half of "won deals" stall and die in this phase.

A working procurement-navigation playbook does specific work. It anticipates the steps, prepares the artifacts ahead, names the right contacts, accelerates legal/security review, and keeps the deal moving instead of waiting reactively. Done well, deals that take "6 months" close in 6-10 weeks. Done badly, every quarter sales reps watch closed deals stall and quotas miss.

This guide is the playbook for navigating B2B procurement — the mid-market and enterprise version of "closing the deal" — so deals actually fund the way they were forecast. Companion to [Annual Contract Negotiation](annual-contract-negotiation.md), [Trust Center & Security Page](trust-center-security-page.md), and [Sales Playbook](sales-playbook.md).

## What Done Looks Like

By end of the exercise:

- Procurement-stage stakeholder map (legal / security / IT / finance)
- Pre-built artifact library (security questionnaire responses, MSA template, DPA, SOC 2 letter)
- Procurement-stage SLA targets (week-by-week timeline)
- Sales-team training on procurement objections
- Acceleration tactics in playbook
- Revenue forecasting accounting for procurement timeline
- Quarterly review of stuck deals

This pairs with [Annual Contract Negotiation](annual-contract-negotiation.md) (concurrent process), [Trust Center & Security Page](trust-center-security-page.md) (procurement-required artifacts), [Sales Playbook](sales-playbook.md) (the broader sales motion), [First Sales Hire](first-sales-hire.md) (rep training), [First Customer Success Hire](first-customer-success-hire.md) (post-procurement transition), [Self-Serve vs Sales-Led](self-serve-vs-sales-led.md) (procurement = sales-led), [Service Level Agreements](https://www.vibeweek.com/6-grow/service-level-agreements-chat) (often a procurement ask), [Customer References](customer-references.md) (vouched-for vendor), [Demo Request Flow](demo-request-flow.md) (precedes procurement), and [Win/Loss Analysis](win-loss-analysis.md) (procurement-stage losses).

## Procurement Is Multiple Processes, Not One

Founders treat "procurement" as one box. It''s actually 4-6 parallel processes.

```
Help me understand what procurement actually involves.

The parallel tracks (each with own owner / timeline):

**1. Commercial / pricing**

- Final price negotiated
- Order form / quote signed
- Per [annual-contract-negotiation](annual-contract-negotiation.md)
- Owner: buyer''s economic decision-maker
- Timeline: 1-4 weeks

**2. Legal / contract**

- MSA review + redlines
- SOW / order-form review
- DPA (data processing agreement)
- Indemnity / liability terms
- Owner: buyer''s legal team
- Timeline: 2-8 weeks

**3. Security / IT review**

- Security questionnaire (CAIQ / SIG / custom)
- SOC 2 review
- Penetration test results
- Data flow diagrams
- Vendor risk assessment
- Owner: buyer''s security / IT team
- Timeline: 2-6 weeks

**4. Finance / vendor onboarding**

- Vendor management system entry
- Tax forms (W-9 / W-8)
- Insurance certificates
- Banking info / ACH setup
- Owner: buyer''s AP / finance
- Timeline: 1-4 weeks

**5. Compliance / regulatory** (industry-dependent)

- HIPAA BAA (healthcare)
- FERPA (education)
- FedRAMP (federal)
- PCI DSS attestation
- GDPR DPA + Standard Contractual Clauses
- Owner: buyer''s compliance officer
- Timeline: 2-12 weeks

**6. Procurement office** (mid-market+; if exists)

- RFP / RFI process (sometimes)
- Approved-vendor list
- Negotiation discipline
- Owner: dedicated procurement team
- Timeline: 4-12 weeks (worst-case)

**The "parallel vs serial" rule**:

Some buyers run these in parallel (faster); others serially (slower).

If serial: 6+ months total
If parallel: 6-10 weeks total

Push for parallel. The economic buyer can authorize starting all tracks simultaneously.

**The "your champion is critical" reality**:

Each procurement track has different blockers; your champion (buyer-side advocate) navigates internal stakeholders for you.

Without a strong champion: procurement dies in some random office.

For my deals:
- Procurement tracks present in current pipeline
- Owner per track on customer side
- Parallel vs serial reality

Output:
1. The procurement-track map
2. The owner per track
3. The parallel-track strategy
```

The biggest unforced error: **treating procurement as one stage.** Sales rep checks "with procurement" weekly; procurement says "with security"; security says "with legal"; legal says "waiting on tech eval." Nobody''s coordinating. The fix: map all parallel tracks; track each separately; chase each owner.

## Build the Artifact Library Before You Need It

The biggest accelerator: have artifacts ready BEFORE the deal asks.

```
Help me build the procurement-artifact library.

The artifacts:

**Security artifacts**:

- SOC 2 Type II report (or in-progress letter)
- ISO 27001 cert (if applicable)
- Penetration test summary
- Privacy impact assessment
- Data flow diagram
- Encryption documentation (at-rest + in-transit)
- Vulnerability disclosure policy
- Incident response plan
- Sub-processor list

Per [trust-center-security-page](trust-center-security-page.md): publish much of this on /trust.

**Legal artifacts**:

- MSA template (your standard)
- DPA (data processing addendum)
- SCCs (EU Standard Contractual Clauses)
- BAA template (HIPAA-eligible)
- Order form template
- SOW template (custom services)
- Indemnity / limitation of liability standard

Have these reviewed by your lawyer once; reuse forever.

**Compliance artifacts**:

- GDPR compliance statement
- CCPA compliance statement
- Cookie policy
- Privacy policy
- Sub-processor list
- Records of processing activities
- HIPAA / FERPA / specific compliance docs

**Operational artifacts**:

- SLA terms (per [service-level-agreements](https://www.vibeweek.com/6-grow/service-level-agreements-chat))
- Uptime history
- Status page link
- Backup / DR documentation
- Onboarding plan template

**Financial artifacts**:

- W-9 / W-8 forms
- Insurance certificates (E&O, cyber, general liability)
- Banking ACH info
- Vendor questionnaire pre-filled

**Pre-filled security questionnaires**:

The most-asked questionnaires:
- CAIQ (Cloud Security Alliance) — 200+ questions
- SIG (Shared Assessments) — large
- Custom buyer questionnaires

Pre-fill the standard ones with your stock answers. Updates per quarter.

Tools to manage:
- **Vanta / Drata / Secureframe / Tugboat Logic** — automate trust-center + questionnaire response
- **Loopio / Conga / Responsive** — questionnaire-response automation

**The "trust center" central hub**:

Per [trust-center-security-page](trust-center-security-page.md):

A `/trust` page with:
- Security overview
- Compliance certifications
- Documentation downloads (gated by login if sensitive)
- Sub-processor list
- Status page link
- Vulnerability disclosure

This satisfies 60-80% of typical procurement asks without 1:1 work.

**The pre-built kit per deal-size**:

| Deal size | Artifacts to provide |
|---|---|
| < $10K | Privacy policy + DPA |
| $10-50K | + SOC 2 letter + security questionnaire + MSA |
| $50-250K | + sub-processor list + insurance + BAA if applicable |
| $250K+ | + custom redlines accepted + executive briefing + compliance review |

For my company:
- Artifacts I have today
- Gaps
- The trust-center build plan

Output:
1. The artifact-library inventory
2. The gap list
3. The build / acquire plan
```

The biggest artifact mistake: **scrambling per deal.** Each deal asks for SOC 2; founder spends a week tracking down auditor; deal stalls. Built once: 5 minutes to send a link. The fix: build the kit before the first enterprise deal; update quarterly.

## Map the Stakeholders

Each procurement track has a different owner. Identify them.

```
Help me map procurement stakeholders.

The roles to identify:

**Champion (sales-side ally)**

- Already met them; selling experience
- Budget and need; advocates internally
- Per [sales-demo-calls](sales-demo-calls.md)

**Economic buyer (authorizes spend)**

- Signs the order form / approves budget
- Often: VP Engineering / VP Operations / CFO

**Legal contact**

- Reviews MSA / DPA
- Often: VP Legal / General Counsel / external counsel

**Security / IT contact**

- Runs vendor risk assessment
- Often: CISO / IT Director / Security team

**Compliance contact (when applicable)**

- HIPAA / regulatory officer
- Often: Compliance Officer / Privacy Officer / DPO

**Procurement contact (mid-market+)**

- Manages vendor process
- Often: Procurement Manager / Strategic Sourcing

**Finance / AP contact**

- Vendor setup / payment
- Often: Accounts Payable / Vendor Management

**The "ask the champion" approach**:

Once deal signals "let''s start procurement", ask champion:

"Who else gets involved? Specifically:
- Who reviews the contract on legal?
- Who runs security review for new SaaS?
- Is there a vendor management process?
- Who approves the budget?
- Anyone in compliance / privacy office?"

Get names + emails. This is your stakeholder map.

**The intro request**:

Then ask champion:

"Could you intro me to [Legal / Security / etc.]? I''d like to make sure they have everything they need from us; saves time vs back-and-forth."

Get warm intros from champion to each stakeholder.

**The "parallel kickoff" call**:

For larger deals (>$50K), schedule a "vendor kickoff" call with all stakeholders:

- 30 minutes
- All key stakeholders attend
- Walk through: who needs what, when
- Sets expectations + timelines
- Establishes parallel-track motion

Customer side may resist ("we usually do this serially"). Push for it; cite faster timeline benefit.

For my deals:
- Champion identified per deal
- Stakeholder map per deal
- The intro request strategy

Output:
1. The stakeholder template
2. The intro-request templates
3. The kickoff-call structure
```

The biggest stakeholder-mapping mistake: **only knowing the champion.** Champion is an advocate, but can''t make legal / security / finance decisions. The fix: get names + intros to ALL stakeholders early. Each track has its own owner who needs to be sold separately.

## Accelerate Each Track

For each track, specific tactics speed the process.

```
Help me accelerate procurement tracks.

**Legal / contract acceleration**:

- Send YOUR MSA first ("we have a standard MSA; here it is — let me know if you have specific concerns")
- Avoid: "send us your standard MSA" (their MSA is buyer-favorable; takes weeks to redline)
- Pre-redline expected pain points (limitation of liability, indemnity, data terms)
- Have outside counsel on retainer for fast turnaround
- Match counterparty cadence: if they redline twice, redline twice; if 5x, push back

**Security review acceleration**:

- Send unsolicited: trust-center link, SOC 2 letter, security overview
- Pre-fill CAIQ; send proactively
- Schedule call with their security team early ("happy to walk through your questions on a call vs back-and-forth")
- For complex deals: offer a security architecture review session

**Compliance acceleration**:

- HIPAA: send your BAA template; sign first if buyer is healthcare
- GDPR: send DPA + SCCs proactively for EU buyers
- SOC 2: just send the report; don''t make them ask

**Finance / vendor onboarding acceleration**:

- Have W-9 / W-8 / insurance / banking ready as a single PDF "vendor onboarding pack"
- Pre-fill any vendor management system the buyer uses (sometimes you fill out their portal)
- Match payment terms (Net 30 standard; some demand Net 60)

**Procurement office acceleration**:

- Approved-vendor lists: get on if exists ("can we be added to your approved-vendor list for next deal?")
- RFP-stage: provide thoughtful responses; don''t cut corners
- Sole-source justification: help champion write the "why this vendor without RFP" memo

**The "deadline pressure" tactic**:

Procurement moves to deadlines. Create one:
- "Pricing locked through end of quarter"
- "We''d need to sign by [date] to start onboarding before [event]"
- "Annual renewal cycle from your team needs to align with [milestone]"

Don''t fake deadlines (procurement sees through). Real ones (quarter-end pricing; fiscal year alignment) work.

**The "executive sponsor" escalation**:

When a track stalls > 2 weeks past expected:
- Escalate to your CEO/VP
- Have them email peer at customer ("I see our team has been working with yours on [Acme] — anything I can do to unblock?")
- Often unsticks deals through executive intervention

**The "concierge" approach**:

For top deals, assign a dedicated person (CSM-to-be) to:
- Track every procurement step
- Chase outstanding items
- Connect customer-side stakeholders
- Be the single point of contact

This costs internal time but accelerates massively.

**Don''t**:

- Pretend procurement isn''t happening (they ARE; track it)
- Send 50-page PDFs as first-touch
- Argue with procurement style (they have processes; work within)
- Skip steps (will surface later as blockers)

For my acceleration:
- Track-by-track tactics
- Executive escalation playbook
- Concierge approach for top deals

Output:
1. The acceleration tactics per track
2. The escalation triggers
3. The concierge model
```

The biggest acceleration mistake: **passive waiting.** Sales rep ask champion weekly "any update?"; champion says "nothing yet"; another week passes. The fix: proactive driving. Send artifacts before asked; schedule calls; chase specific stakeholders; escalate when stuck.

## The Procurement-Stage Forecast Adjustment

Procurement skews revenue forecasts. Account for it.

```
Help me forecast through procurement.

The reality:

- Verbal yes ≠ contract
- Contract sent ≠ contract signed
- Contract signed ≠ payment received

Each stage has slippage:

| Stage | Typical slippage | Cause |
|---|---|---|
| Verbal yes → contract sent | 1-2 weeks | Sales takes time |
| Contract sent → first redlines | 2-4 weeks | Legal review |
| Redlines → final | 2-6 weeks | Negotiation rounds |
| Final → security clear | 2-6 weeks | Security review parallel |
| Security clear → finance setup | 1-3 weeks | Vendor onboarding |
| Sign → invoice paid | 30-60 days | Net terms |

**The forecast bands**:

For deals in different procurement stages:

| Stage | Probability | Forecast |
|---|---|---|
| Verbal yes; not in procurement yet | 60% | Discount for stall |
| In procurement; champion strong | 70% | Most likely to close |
| In procurement; champion weak | 40% | Risk of dying |
| Final redlines | 80% | Probably this quarter |
| Sign date set | 95% | This quarter |
| Signed; pending invoice | 100% (closed-won) | Recognized |

**The "won deal that didn''t close" reality**:

Industry: 20-30% of "verbal yes" enterprise deals fail in procurement.

Don''t forecast them as won until signed.

**The slippage budget**:

For Q4 forecast: assume 20% of "in-procurement" deals slip to Q1.

If you forecast 100% of in-procurement as Q4: you''ll miss.
If you forecast 75-80%: realistic.

**The "stuck deal" review**:

Weekly: review every in-procurement deal:
- What''s the current track-level status?
- Who''s blocking?
- What''s our next action?

If a deal hasn''t moved in 2 weeks: at risk; take action.

**The "deal age" alert**:

Deals that age beyond expected:
- 6 weeks in procurement: warning
- 10 weeks: red
- 16 weeks: probably dead

Don''t leave them in pipeline as "active." Either revive or mark stalled / lost.

For my forecasting:
- Stage-by-stage probabilities
- Slippage assumptions
- Stuck-deal alerts

Output:
1. The forecast model
2. The deal-age alerting
3. The weekly review template
```

The biggest forecasting mistake: **counting verbal-yes as won.** Founder forecasts based on closer''s gut; quarter ends; half the "won" deals are still in procurement. The fix: weight by procurement stage; account for slippage; review weekly.

## Common Procurement Objections (and Responses)

You''ll hear the same things repeatedly. Have answers ready.

```
Help me handle common procurement objections.

**Objection 1: "We don''t have a SOC 2 audit / report yet"**

Response:
- "We''re finishing our audit; here''s an interim letter from our auditor"
- "Here''s our security architecture overview"
- "Happy to schedule call with your security team to walk through controls"

If pre-SOC 2: be honest. Some buyers will accept; others won''t.

**Objection 2: "Your MSA has [X] term that''s a non-starter"**

Response:
- "What specifically? Most teams have flexibility on..."
- Common: limitation of liability, indemnity, data ownership
- Be ready with redlines

**Objection 3: "We need NDA before any docs"**

Response:
- Sign their NDA promptly (1-day turnaround)
- Have your own template if they don''t have one

**Objection 4: "You''re not on our approved-vendor list"**

Response:
- "What does the process look like to be added?"
- "Can we get sole-source justification for this deal?"
- "Who in your procurement team handles vendor evaluation?"

**Objection 5: "We need 6-month free trial / pilot"**

Response (often pricing-related):
- "We can do 30-day trial at full pricing; if it doesn''t deliver value, no charge"
- Don''t do 6-month free; massive operational cost

**Objection 6: "Your insurance limits aren''t high enough"**

Response:
- "Our standard E&O / cyber is $X / $Y million"
- "We can purchase higher limits for $Z additional fee"
- For Fortune 500: required limits are sometimes $10M+

**Objection 7: "We need data residency in [region]"**

Response:
- "We support EU / US / etc. residency on Enterprise tier"
- If you don''t: be honest; might be deal-blocker

**Objection 8: "Pricing requires VP approval; budget cycle starts April"**

Response:
- "We can hold pricing through [date]"
- "Annual contracts can start anytime; pro-rate to your fiscal year"

**Objection 9: "We need DPA + SCCs (EU)"**

Response:
- Send pre-built DPA + SCCs immediately
- Already updated for latest SCCs (2021/914)

**Objection 10: "Custom contract clauses required"**

Response:
- "Send the redlines; we''ll respond within 5 business days"
- Have outside counsel on retainer

**The "if you can''t do this, who else can?" question**:

If the buyer demands something you can''t do (residency, specific cert, custom terms):
- Be honest
- Sometimes: you walk
- Sometimes: customer goes to a competitor who can
- Don''t over-promise to keep the deal

**The "what''s the path to yes?" question**:

Reframe stuck conversations:
- "What would it take to get this deal closed?"
- Listen for the real blocker
- Specific tactics often unstick

For my objections:
- Common ones in my market
- Pre-built responses
- Walk-away criteria

Output:
1. The objection playbook
2. The responses
3. The walk-away triggers
```

The biggest objection mistake: **treating each as a fresh problem.** Every enterprise deal asks similar things; founders treat each as unique; reinvent answers each time. The fix: catalog objections; pre-build responses; sales rep has answers in 30 seconds.

## When to Walk Away

Some procurement asks aren''t worth meeting. Know your line.

```
Help me identify deal-killing asks.

The asks that should kill a deal:

**1. Unbounded liability**

- "Limitation of liability removed"
- "Unlimited indemnity"
- Risk: one bad outcome = company-killing lawsuit
- Fix: hold the line; standard caps non-negotiable

**2. Custom code commitments**

- "We need feature X within 60 days"
- Risk: roadmap captured by one customer
- Fix: only if substantial multi-year ACV; price the development

**3. Source code escrow with broad triggers**

- "Source code escrow released if you miss any SLA by 1 minute"
- Risk: source code leaks
- Fix: tight escrow conditions only

**4. Most-favored-nation clauses**

- "We get the lowest price you ever charge anyone"
- Risk: locks pricing forever
- Fix: refuse

**5. Audit rights without limits**

- "We can audit your systems / employees anytime"
- Risk: operational chaos
- Fix: structured audit (advance notice, scope, paid by them)

**6. Long payment terms**

- "Net 90 / Net 120"
- Risk: cash flow crisis
- Fix: Net 30 standard; Net 60 max; charge premium for longer

**7. Non-standard data terms**

- "All data is yours; we own nothing"
- Risk: can''t use anonymized data; can''t improve product
- Fix: balanced ownership; you have license to use anonymized

**8. Disproportionate SLA penalties**

- "1 hour downtime = full month free"
- Risk: catastrophic on minor outage
- Fix: capped credits (per [service-level-agreements](https://www.vibeweek.com/6-grow/service-level-agreements-chat))

**9. Indefinite term with no exit**

- "Auto-renewing 5-year term, no termination"
- Risk: locked in; can''t fix bad relationships
- Fix: always have a notice-based termination

**10. Required residency you can''t deliver**

- "Data must be in Switzerland"
- If your infrastructure can''t deliver: walk

**The "20% over standard" rule**:

If a buyer demands more than 20% deviation from your standard terms:
- Pricing premium (markup the contract)
- Or: walk

Don''t fold to keep the deal. The deal that requires bending principles is usually the worst customer.

**The "buyer''s market vs seller''s market" check**:

- Lots of buyers, few sellers (your category): can hold the line
- Few buyers, many sellers: more flexible
- Adjust based on real market dynamics

**The walk-away rehearsal**:

Sales reps practice walking away:
- "Based on the terms we''re seeing, this deal isn''t feasible without [X]. Want us to circle back when [trigger]?"
- Walk-away calmly; door open; respect intact

Many "lost" deals come back 6-12 months later on better terms.

For my walk-away criteria:
- Top 5 deal-killers
- Walk-away script
- The "open door" follow-up

Output:
1. The walk-away criteria
2. The script
3. The follow-up plan
```

The biggest walk-away mistake: **agreeing to bad terms to close.** "We''ll figure out the unbounded liability later" — later arrives; legal costs $50K to defend. The fix: walk-away criteria documented; sales rep authority limited; CEO approval required to bend on protected terms.

## Avoid Common Pitfalls

Recognizable failure patterns.

```
The procurement-navigation mistake checklist.

**Mistake 1: Treating procurement as one stage**
- Single "with procurement" status; no track visibility
- Fix: track-by-track tracking

**Mistake 2: Reactive, not proactive**
- Wait for asks; respond
- Fix: send artifacts unprompted

**Mistake 3: Only knowing the champion**
- Other stakeholders unmapped
- Fix: stakeholder map per deal

**Mistake 4: No artifact library**
- Scramble per deal
- Fix: build library before first enterprise deal

**Mistake 5: Folding on bad terms**
- Bend to close
- Fix: walk-away criteria + premium pricing

**Mistake 6: Forecasting verbal-yes as won**
- Forecast misses
- Fix: stage-weighted probabilities

**Mistake 7: Their-MSA-first**
- Buyer-favorable; long redlines
- Fix: yours first

**Mistake 8: Stuck deals stay in pipeline**
- Aging deals never moved
- Fix: deal-age alerts; weekly review

**Mistake 9: No executive escalation**
- Champion can''t unstick
- Fix: peer-level escalation playbook

**Mistake 10: No premium for non-standard**
- Custom terms at standard pricing
- Fix: price the deviation

**The quality checklist**:

- [ ] Procurement-track map per deal
- [ ] All stakeholders identified
- [ ] Artifact library complete
- [ ] Trust center / pre-built questionnaires
- [ ] Standard MSA / DPA / BAA templates
- [ ] Outside counsel on retainer
- [ ] Stage-weighted forecasting
- [ ] Weekly stuck-deal review
- [ ] Walk-away criteria documented
- [ ] Executive escalation playbook

For my system:
- Audit
- Top 3 fixes

Output:
1. Audit results
2. Top 3 fixes
3. The "v2 procurement" plan
```

The single most-common mistake: **passive procurement navigation.** Sales rep does their part (closing); then waits for procurement to "do their thing"; deal dies in inactivity. The fix: actively drive every track. Procurement is sales — just a different phase.

---

## What "Done" Looks Like

A working procurement-navigation system in 2026 has:

- Multi-track visibility (legal / security / compliance / finance / procurement)
- Stakeholder mapping per deal
- Pre-built artifact library (security questionnaires / MSA / DPA / SOC 2 / etc.)
- Trust center as central artifact hub
- Stage-weighted forecasting
- Weekly stuck-deal review
- Walk-away criteria documented
- Executive escalation playbook
- 6-10 week typical procurement cycle (not 6 months)
- Premium pricing for non-standard terms

The hidden cost of weak procurement navigation: **lost deals you''d already won.** A founder closes the deal verbally; thinks the work is done; procurement starts; nothing accelerated; deal stalls; competitor sweeps in. Or: deal closes with bad terms because nobody held the line. Procurement isn''t paperwork; it''s the second phase of selling. Treat it as such.

## See Also

- [Annual Contract Negotiation](annual-contract-negotiation.md) — concurrent process
- [Trust Center & Security Page](trust-center-security-page.md) — procurement-required artifacts
- [Sales Playbook](sales-playbook.md) — broader sales motion
- [First Sales Hire](first-sales-hire.md) — rep training
- [First Customer Success Hire](first-customer-success-hire.md) — post-procurement transition
- [Self-Serve vs Sales-Led](self-serve-vs-sales-led.md) — procurement = sales-led
- [Sales Demo Calls](sales-demo-calls.md) — precedes procurement
- [Customer References](customer-references.md) — vouched-for vendor
- [Demo Request Flow](demo-request-flow.md) — funnel start
- [Win/Loss Analysis](win-loss-analysis.md) — procurement-stage losses
- [Discount & Promotion Strategy](discount-and-promotion-strategy.md) — pricing flexibility
- [Pricing Packaging & Tier Design](../1-position/pricing-packaging-tier-design.md) — tier-fit during procurement
- [VibeWeek: Service Level Agreements](https://www.vibeweek.com/6-grow/service-level-agreements-chat) — SLA in contracts
- [VibeWeek: Audit Logs](https://www.vibeweek.com/6-grow/audit-logs-chat) — security ask
- [VibeWeek: Account Deletion & Data Export](https://www.vibeweek.com/6-grow/account-deletion-data-export-chat) — GDPR ask
- [VibeReference: Identity Verification & KYC Tools](https://www.vibereference.com/auth-and-payments/identity-verification-kyc-tools) — security stack

[Back to Day 4: Convert](README.md)
