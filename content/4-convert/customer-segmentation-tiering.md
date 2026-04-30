# Customer Segmentation & Tiering

[⬅️ Back to Day 4: Convert](./)

Not all customers are equal. A $200/yr account that submits 12 support tickets/month is unprofitable. A $200K/yr enterprise account that's silent for 11 months and shows up the 12th expecting a 30-day implementation is too expensive to serve as a tech-touch. Operating without explicit customer segmentation means you give every customer the same — same onboarding investment, same CSM coverage, same support priority, same renewal effort, same upgrade path. That's how you under-invest in your top 5% (who could expand) while over-investing in your bottom 50% (who never will).

Customer segmentation is the practice of explicitly grouping customers by characteristics that predict the right service model, cost-to-serve, and revenue potential — then designing differentiated programs against each tier. Done well, it turns CS / Support / Marketing investments into compounding returns. Done poorly, it produces tier definitions nobody respects and a high-touch program that's actually low-touch in disguise.

This playbook covers the dimensions of segmentation, the trade-offs of common segment models (ARR-based, persona-based, lifecycle-based, hybrid), how to operationalize tiers across CS / Support / Marketing / Product, and the failure modes that turn segmentation into shelfware.

## What Done Looks Like

- Defined segments (typically 3-5 tiers) with explicit criteria — measurable, automatic, not subjective
- Each segment has a documented service model: CS coverage level, support SLA, onboarding depth, marketing engagement, renewal motion
- Cost-to-serve calculated per tier; segment economics make sense (top tier subsidizes bottom; bottom is at least cash-flow positive)
- Each segment has explicit owners: head of enterprise CS, head of mid-market CS, head of self-serve / digital touch
- Segment is in your CRM as a derived field; tooling honors it (Intercom routing, ticket priority, marketing campaign targeting)
- Quarterly review: are accounts in the right tiers? Has anyone graduated up or fallen down?
- Upgrade / downgrade paths defined: what triggers a Free → Pro → Enterprise tier change?
- Pricing aligned with tiers: free / mid-tier / enterprise is the most obvious form; even within a tier, the segmentation might shape contract terms
- A specific person owns segmentation strategy past $5M ARR — usually rev ops, sometimes head of CS

## 1. Why Segment

Three fundamental reasons:

**1. Different customers need different service models.** A 10-person team buying $200/mo doesn't need a CSM. A 5000-person enterprise doesn't want only Intercom chat support. Match service to need.

**2. Different customers have different revenue potential.** A self-serve account that bought because they saw a Reddit comment will likely never expand to 50 seats. A Fortune 500 with one team piloting could expand 100x. Invest accordingly.

**3. Different customers have different cost-to-serve.** A high-touch enterprise account costs you 30% of ARR in CS + Support + Implementation effort. A self-serve SMB costs 2%. If you serve them the same way, you lose money on one and over-pay on the other.

Without segmentation, your unit economics blend — and one tier subsidizes another opaquely. Explicit segmentation makes the trade-offs visible.

## 2. Dimensions of Segmentation

The criteria you can segment on:

### ARR / Contract Value (most common)

- SMB: <$5K ARR
- Mid-market: $5K-50K ARR
- Enterprise: $50K-500K ARR
- Strategic: $500K+ ARR

Pros: directly tied to revenue; easy to measure; aligns with sales / CS allocation.

Cons: doesn't capture potential (a $5K customer that could be $500K). Doesn't capture risk (a $50K customer that's churning).

### Company Size (firmographic)

- SMB: <50 employees
- Mid-market: 50-500 employees
- Enterprise: 500+ employees

Pros: predicts ACV; aligns with how prospects think of themselves.

Cons: doesn't perfectly map to ARR (some 5K-employee co's spend $5K total; some 20-person co's spend $50K).

### Use Case / Persona

- "Solo founder using product X for use case A"
- "Marketing team using product X for use case B"
- "Engineering team using product X for use case C"

Pros: drives differentiated product UX, marketing, content.

Cons: harder to operationalize; multi-persona accounts complicate it.

### Lifecycle Stage

- Trial / Free
- New customer (<90 days)
- Growth (90-365 days; engagement up)
- Steady state (1-3 years; predictable)
- At-risk (declining usage, missed renewal cues)
- Champion (advocate, expansion-ready)
- Expansion (in-flight upgrade)

Pros: lifecycle-driven motions (onboarding for new; save offer for at-risk); aligns with CS playbooks.

Cons: not a pure segment — overlays on top of ARR / size segmentation.

### Strategic Importance

- Logo customers (recognizable brands you want as references)
- Key accounts (large potential, even if current ARR is modest)
- Standard accounts

Pros: focuses CS / Sales attention where it matters strategically (not just where current ARR is highest).

Cons: subjective; hard to operationalize without explicit criteria.

### Health / Risk Score

- Healthy
- At-risk
- Critical

Pros: drives CS intervention.

Cons: not a tier itself — overlays on top of other segments.

## 3. The Most Common Segment Model: Hybrid (ARR + Lifecycle + Strategic)

For most B2B SaaS, the operational segment looks like:

| Segment | Criteria | Typical Service Model |
|---|---|---|
| **Self-serve / Tech Touch** | <$5K ARR | Automated onboarding; in-product self-help; community + chat support; no CSM |
| **Mid-Market / Pooled CS** | $5K-50K ARR | Automated + light human onboarding; pooled CSM (1 CSM : 50-100 accounts); Slack channel + email support |
| **Enterprise / Dedicated CS** | $50K-500K ARR | Implementation manager + dedicated CSM (1 CSM : 8-15 accounts); priority support with SLAs |
| **Strategic / Named** | $500K+ ARR or strategic logo | Executive sponsor + dedicated CSM + technical account manager; 24/7 support; quarterly executive business reviews |

Plus overlays:

- **Lifecycle**: new (first 90 days) gets onboarding focus; at-risk gets save motion regardless of tier
- **Strategic**: logo accounts may get higher-tier treatment than their ARR alone would dictate

This isn't the only model — but it's where most SaaS converge.

## 4. Service Model per Tier

What "differentiated service" actually means:

### Self-Serve / Tech Touch

- **Onboarding**: in-product checklist, automated welcome emails, video library
- **Support**: in-app chat (with bot first), public knowledge base, community forum
- **CSM**: none assigned; pooled inbox handles questions
- **Renewal**: auto-renew with reminder emails; in-product upgrade prompts
- **Expansion**: in-product nudges to upgrade plan, invite teammates, hit usage limits
- **Marketing**: lifecycle email sequences segmented by usage
- **Cost-to-serve target**: <5% of ARR

### Mid-Market / Pooled CS

- **Onboarding**: kickoff call (45 min), 1-2 follow-up sessions, success plan template
- **Support**: priority chat + email; <8h response SLA
- **CSM**: pooled CSM owning 50-100 accounts; quarterly check-in; reactive otherwise
- **Renewal**: CSM-driven; 90 days before renewal trigger contact
- **Expansion**: CSM identifies expansion opportunities; sales gets engaged for >$10K expansion
- **Marketing**: targeted by use case + tier
- **Cost-to-serve target**: 8-12% of ARR

### Enterprise / Dedicated CS

- **Onboarding**: implementation manager (4-12 weeks), success plan tailored, integration support
- **Support**: dedicated support pod; <4h response; 24/7 critical
- **CSM**: dedicated CSM (1:8-15); monthly check-ins; quarterly business reviews
- **Renewal**: 6-month motion; QBR establishes expansion case; legal-friendly contracting
- **Expansion**: CSM owns expansion; sales partners on >$50K opportunities
- **Marketing**: ABM treatment; direct executive engagement
- **Cost-to-serve target**: 15-20% of ARR

### Strategic / Named

- **Onboarding**: white-glove; senior implementation lead; founder/exec sponsor
- **Support**: dedicated technical account manager; 24/7 SLA; war-room access
- **CSM**: dedicated senior CSM + executive sponsor (VP+ level)
- **Renewal**: 9-12 month motion; multi-year contracts standard; legal + finance specialists
- **Expansion**: dedicated expansion focus; new-product-launch input; strategic partnership conversations
- **Marketing**: ABM + executive marketing; case studies; advisory board candidates
- **Cost-to-serve target**: 20-30% of ARR (justified by expansion potential)

## 5. Operationalizing the Segments

A segmentation only matters if every system honors it. Operationalize across:

### CRM (the source of truth)

- A `segment` field on every account: derived (formula based on ARR + size + strategic flag) or manually set
- Daily / weekly recompute as ARR changes
- Updated counts visible to leadership: how many accounts in each tier?

### Support Tools

- Tier visible to support agents at first message
- Routing rules: enterprise tickets to enterprise pod; SMB to general pool
- SLA timers reflect tier (4h response for enterprise; 24h for SMB)

### CS Tools (Gainsight, ChurnZero, Vitally)

- Health scores tier-weighted differently
- Playbooks per tier (different onboarding playbook for SMB vs ENT)
- Capacity model per CSM by tier

### Marketing Automation

- Email cadence + content differentiated by tier (no enterprise cold-pitching to a $200/mo account)
- ABM targeting at the strategic tier

### Product

- In-product nudges differ: SMB sees upgrade prompts; ENT doesn't (they're billed differently)
- Feature gating may align with pricing tier (admin features for Pro; SSO for Enterprise)

### Sales / Expansion

- Expansion playbook per tier
- Quota credit weighted by segment
- Account assignment: enterprise AE owns ENT+ accounts only

## 6. The Math: Cost-to-Serve

Per-tier economics matter. Compute:

```
gross_margin_per_account = ARR - cost_to_serve

cost_to_serve =
  CSM_allocation_cost +
  support_cost +
  onboarding_amortized_cost +
  marketing_per_account_cost +
  hosting_per_account_cost
```

**Example math:**

- SMB account: $3K ARR. 1 CSM serves 100 accounts = $1.5K CSM cost / account. Support: $200. Onboarding: $300 amortized. Marketing: $100. Hosting: $200. Total cost: $2.3K. Gross margin: $0.7K (23%).
- Enterprise account: $100K ARR. 1 CSM serves 12 accounts = $12K CSM cost / account. Support: $4K. Onboarding: $20K amortized over 3 years = $6.7K/yr. Marketing: $500. Hosting: $5K. Total cost: $28K. Gross margin: $72K (72%).

These per-tier gross margins reveal whether your service model is sustainable. If your SMB gross margin is negative, you're losing money on every SMB account — only path is reduce cost-to-serve (more automation) or raise price.

## 7. Tier Migration: Up + Down

Customers don't stay in one tier forever.

### Upgrades

- SMB → Mid-market triggers: ARR grew past $5K; team grew past threshold; multi-team usage
- Mid-market → Enterprise triggers: ARR > $50K; SSO required; security review initiated; legal contracting started
- Enterprise → Strategic triggers: $500K+ ARR; strategic logo; multi-product expansion candidate

When a customer crosses a threshold, the system should:
1. Notify the previous tier owner (CSM) and the new tier owner
2. Schedule a tier-transition kickoff
3. Update playbooks (onboarding catch-up if needed)
4. Adjust pricing / contracting if appropriate

### Downgrades / Risk

- Enterprise account losing usage / engagement: drop to "at-risk enterprise" — different motion (save play, executive escalation)
- Mid-market not adopting: tech-touch drift (less CSM time)

Don't let a downgraded account silently slip — the moment it crosses a threshold, the new motion starts.

## 8. Segment-Specific Programs

Beyond service model, build differentiated programs:

### Self-Serve

- Heavy investment in in-app onboarding
- Automated lifecycle email sequences
- Self-help knowledge base + community forum
- In-product upgrade nudges
- Webinar / academy access (free intro tier)

### Mid-Market

- Quarterly office hours
- Cohort-based onboarding for new customers
- Peer-to-peer community (e.g., "Slack community of HubSpot users")
- Targeted webinars + roundtables
- Case studies featuring similar-size customers

### Enterprise

- Customer Advisory Board membership candidates
- Beta program access for new features
- Annual user conference VIP track
- Direct exec engagement
- Co-marketing opportunities (case studies, joint webinars)

### Strategic

- Joint roadmap discussions
- Strategic-account dedicated team channel
- Founder / CEO direct line
- Multi-year contract negotiation flexibility
- Custom development conversations (be careful here — slippery slope)

## 9. Common Failure Modes

**Segmenting only on ARR.** Misses strategic potential (low ARR / high logo value), misses lifecycle (new customer needs more attention regardless of tier).

**Segments that don't change behavior.** "We segment our customers" — but every customer gets the same email and the same support. Segments without operational consequence are theater.

**No automated tier assignment.** Manually flagging tiers means staleness; tiers drift. Make derivation automated and verifiable.

**Hard segment boundaries with no flexibility.** A $4,999 ARR account is "SMB" and a $5,001 account is "mid-market" — same product behavior, different service. Allow CS judgment for edge cases.

**Cost-to-serve unmeasured.** You don't know if SMB is profitable. Operations are flying blind. Build the per-tier math.

**Overinvesting in low-tier accounts.** A high-touch CSM hand-holding a $300/mo customer is unprofitable. Honor the tier.

**Underinvesting in high-tier accounts.** Treating a $200K enterprise like a self-serve trial is how they churn at renewal. Honor the tier.

**No upgrade triggers.** A SMB account quietly grows to $40K ARR but stays in SMB CS playbook because nobody noticed. Build automatic re-tier triggers.

**Tier as identity, not service model.** Customers shouldn't experience "you're SMB" as a label; they should experience the service. Don't pitch them their tier.

**Pricing decoupled from tier.** Free → Pro → Enterprise is the obvious one. But the segmentation should also affect contracting terms (annual vs monthly), payment terms (auto-charge vs invoice), discount policy.

**Strategic-tier accounts dictating product roadmap.** Custom feature requests from one big customer are tempting. Build a process: enterprise inputs feed roadmap discussions; one customer doesn't drive it.

**No tier visibility to support.** Support agent has no idea this is a strategic account. Same response time as SMB. Frustrating for the customer; risky for the deal.

**Segment definitions changed every quarter.** "We tweaked the SMB threshold to $7K" — operations don't adapt; data is inconsistent. Stable definitions; revisit annually only.

**Tiers in CRM but nowhere else.** Sales sees them; marketing doesn't; support doesn't; product doesn't. Tier needs to flow everywhere.

**Segments without owners.** "Mid-market" exists but nobody owns the mid-market motion. Each tier needs an executive owner.

**No QBR cadence with strategic accounts.** Top 1% of accounts drive 30%+ of ARR; you owe them a relationship. Quarterly business reviews are non-negotiable for strategic.

**Confusing pricing tiers with operational tiers.** "Pro" plan customers ≠ "mid-market" segment. The two often correlate but aren't identical. Keep separate dimensions.

**Underbuilding for the longest-tail tier.** SMB self-serve gets the least love because per-customer ARR is low. But it's where the most customers are, so support tickets dominate, and unit economics suffer if you don't invest in automation.

## What Done Looks Like (Recap)

You've shipped customer segmentation when:

- 3-5 segments defined with explicit, automated criteria
- Service model documented per tier; differentiated CS / Support / Marketing / Product engagement
- Cost-to-serve measured per tier; gross-margin economics make sense
- Tooling honors tier across CRM, support, CS, marketing automation
- Quarterly review: are accounts in the right tier? What's the migration rate?
- Tier owners named (head of self-serve, head of mid-market CS, head of enterprise CS, head of strategic accounts)
- Pricing + contracting aligned with tier
- A named segmentation owner (rev ops or head of CS) past $5M ARR

## Mistakes to Avoid

- Segmenting only on ARR — miss strategic potential
- Segments that don't change behavior — theater, not operational
- Hard boundaries; no flexibility for edge cases
- No cost-to-serve math — flying blind on profitability
- Overinvesting in low-tier; underinvesting in high-tier — symmetric mistake
- No automated tier reassignment as ARR grows
- Tier as label, not service model
- Pricing tiers ≠ operational tiers — distinct concepts
- Segments in CRM only; not propagated to support / CS / marketing
- Segments without owners — no accountability
- One big strategic customer dictating roadmap — process matters
- Confusing static segments with dynamic lifecycle stage
- Underbuilding for self-serve's tail — most customers, weakest unit economics

## See Also

- [Customer Lifetime Value Playbook](./customer-lifetime-value-playbook.md) — measuring per-segment value
- [Customer Health Scoring Playbook](./customer-health-scoring-playbook.md) — risk overlay on top of segments
- [Customer Success Metrics Framework](./customer-success-metrics-framework.md)
- [Customer Onboarding Playbook](./customer-onboarding-playbook.md) — segment-differentiated onboarding
- [High-Touch Onboarding](./high-touch-onboarding.md) — for enterprise+ tier
- [Customer Advisory Board](./customer-advisory-board.md) — strategic-tier engagement
- [Customer Marketing Program](./customer-marketing-program.md)
- [Customer Education & Training Programs](./customer-education-training-programs.md) — tier-differentiated education
- [Reduce Churn](./reduce-churn.md)
- [Renewal Forecasting & Management](./renewal-forecasting-management.md)
- [Renewal Negotiation Playbook](./renewal-negotiation-playbook.md)
- [Expansion Revenue](./expansion-revenue.md)
- [Win-Back Churned Customers](./win-back-churned-customers.md)
- [Sales-to-CS Handoff](./sales-to-cs-handoff.md)
- [First Customer Success Hire](./first-customer-success-hire.md)
- [Quarterly Business Reviews](./quarterly-business-reviews.md)
- [Lead Scoring & Qualification Frameworks](./lead-scoring-qualification-frameworks.md)
- [Sales Pipeline Coverage & Quota Setting](./sales-pipeline-coverage-quota-setting.md)
- [Sales Territory Design](./sales-territory-design.md)
- [Buying Committee Navigation & Champion Development](./buying-committee-champion-development.md)
- [Customer Journey Mapping Playbook](./customer-journey-mapping-playbook.md)
- [Self-Serve vs Sales-Led](./self-serve-vs-sales-led.md)
- [Pricing Strategy](../1-position/pricing-strategy.md)
- [Pricing Packaging & Tier Design](../1-position/pricing-packaging-tier-design.md)
- [Free Trial vs Freemium](../1-position/free-trial-vs-freemium.md)
- [Ideal Customer Profile](../1-position/ideal-customer-profile.md)
- [Annual Planning & OKRs](../1-position/annual-planning-okrs.md)
- [Quarterly Planning & Operating Cadence](../1-position/quarterly-planning-operating-cadence.md)
