[Back to Day 4: Convert](README.md)

# Sales Territory Design: Carving Up the Market Without Burning Reps

Most B2B SaaS founders design their first sales territories badly. The pattern: founder hires 3 AEs, splits accounts geographically (Mountain / East / West) because that's how Salesforce did it 25 years ago, ignores account-size or vertical fit, watches one rep close 60% of revenue while two struggle, blames "the strugglers," and burns through 2 of 3 AE hires within 18 months. Or the opposite: lets reps "self-select" their accounts, ends up with 5 reps fighting over the same 50 accounts, ignored 500 mid-market accounts in the middle, and a customer success team confused about who owns what.

A real territory design balances three things at once: (a) equitable rep workload + comp opportunity, (b) account fit (right rep matched to right account profile), and (c) coverage of the addressable market without overlap. Done well, every rep has a fair shot at quota, no account is unloved, and the team scales without re-carving every quarter. Done badly, you get rep churn, customer-coverage gaps, and a sales-leader spending half their time refereeing territory disputes.

This guide is the playbook for designing territories that work — covering when to redesign, criteria for carving, the specific dimensions to use (geography / segment / vertical / named-account / hybrid), how to balance for fairness, the rollout playbook, and the operational realities of territory disputes + carve-outs.

## What Done Looks Like

A successful territory design produces:

- Every rep has equitable quota opportunity (within ~10% of each other)
- Every account in TAM has a clear owner — no orphans, no overlaps
- Sales leaders can predict pipeline coverage by territory
- Reps believe the design is fair (high-trust > technically-optimal)
- The design holds for 12-18 months before requiring re-carving
- New AE hire onboarding has a clear "here's your territory" doc
- Carve-out + dispute process is documented + fast (<2 weeks resolution)
- Marketing knows which accounts each rep covers (for ABM coordination)
- Customer Success knows which AE owns which expansion conversation
- Quota math + comp plan tied to territory math

This pairs with [Sales Compensation Plans](sales-compensation-plans.md) (comp follows territory), [Sales Forecasting & Pipeline Management](sales-forecasting-pipeline-management.md) (pipeline rolls up by territory), [Sales Operations Playbook](sales-operations-playbook.md) (the systems territories rely on), [First Sales Hire](first-sales-hire.md), [Sales Playbook](sales-playbook.md), [Account-Based Marketing](../3-distribute/account-based-marketing.md) (territory + ABM are related), [Annual Sales Kickoff](annual-sales-kickoff.md) (territories announced at SKO), [Quarterly Business Reviews](quarterly-business-reviews.md) (territory health reviewed), [Sales Onboarding & Ramp](sales-onboarding-ramp.md), and [Ideal Customer Profile](../1-position/ideal-customer-profile.md) (the basis of segmentation).

## When to Design Territories

Don't design formal territories if any of these apply:

**You have <3 sales reps.** With 1-2 reps, territories are theater. Just say "you take inbound; I take strategic accounts" and move on. Real territory design starts at 3+ reps.

**You don't have an ICP yet.** Without a clear customer profile, you're carving up an undefined market. Get [Ideal Customer Profile](../1-position/ideal-customer-profile.md) right first.

**You don't have a CRM or it's a mess.** Territories live in Salesforce / HubSpot. If your CRM has 5,000 duplicate accounts and inconsistent firmographic data, fix that first. Otherwise the territory math is fiction.

**You're pre-PMF.** Territory design assumes a working sales motion. Pre-PMF, you're still discovering; territories ossify the wrong things.

**You can't articulate your TAM.** A territory carve assumes you know the universe. If you don't, you're carving fog.

If any apply, fix the precondition first.

Design real territories when ALL of these are true:

**1. 3+ AE-equivalent sellers.** Could be 2 AEs + 1 SDR or 3 AEs.

**2. ICP is documented + recognized by the team.** "We sell to mid-market HR teams in the US" is concrete enough.

**3. CRM has clean firmographic data.** Accounts have employee counts, industry, region, revenue, technographics. Cleaning up data first is non-negotiable.

**4. TAM is enumerable.** You can list 5,000-50,000 accounts that fit your ICP.

**5. There's a clear sales motion.** Inbound or outbound; AE-led or SDR-supported. Different motions need different territory shapes.

**6. Sales leadership has the time to do this right.** A bad territory design is more damaging than no territory design. Allocate 4-6 weeks of sales-leader focus.

If 4+ are true, you're ready.

## The Five Territory Dimensions

```
Five common dimensions to carve by:

1. GEOGRAPHY (most traditional; least useful for SaaS)
- US Eastern Time / Central / Pacific
- Country / region (EMEA / NA / APAC)
- Cities / states for very dense markets
- Pros: simple; clear; field-rep-friendly (in-person calls)
- Cons: irrelevant in remote-first SaaS sales (most of B2B); creates artificial boundaries
- Use when: products require local presence (e.g., field sales for vertical-physical products); multi-region with local-language requirements

2. SEGMENT / SIZE (most common in 2026)
- SMB (1-50 employees)
- Mid-market (51-500 or 51-1000)
- Enterprise (1000+ or 5000+)
- Strategic / Named (top 100 accounts)
- Pros: aligns with sales motion + comp; recognizes that selling to a 5-person company differs from a 5,000-person company
- Cons: requires good firmographic data
- Use when: your ICP spans multiple sizes (most B2B SaaS)

3. VERTICAL / INDUSTRY (when industry expertise matters)
- Healthcare / Financial Services / Retail / Manufacturing / Tech
- Sub-verticals (Healthcare → providers vs payers vs medtech)
- Pros: rep develops deep vertical expertise; better discovery; faster close
- Cons: vertical-strong reps hard to recruit; segments may not balance evenly
- Use when: your product solves industry-specific problems OR sells differently to different verticals

4. NAMED ACCOUNTS (top accounts pre-assigned)
- 50-200 named accounts assigned to specific reps; everyone else is "non-named"
- Pros: ensures ABM-quality attention to top accounts; predictable pipeline allocation
- Cons: complex to manage; named accounts may be unfair to reps
- Use when: you have specific high-value accounts that demand consistent attention

5. PRODUCT (multi-product companies)
- Different reps sell different products
- Pros: deep product expertise
- Cons: customer experience can fragment ("which rep do I talk to?")
- Use when: products are sufficiently different that one rep can't sell both well

HYBRID DESIGNS (most companies end up here):
- "Mid-market US East" (segment + geography)
- "Enterprise Healthcare" (segment + vertical)
- "Named Accounts (Strategic)" + "Mid-market General" (named + segment)

Most successful 2026 designs use 2 dimensions: SIZE + (geography OR vertical) for most B2B SaaS.
```

## Picking the Right Dimensions for YOUR Product

```
Match dimensions to product reality:

If your product has:
- Single ICP, similar accounts → SEGMENT only (e.g., "all SMB reps split alphabetically")
- Diverse account sizes → SEGMENT primary
- Industry-specific value props → VERTICAL primary or secondary
- Geographic field-sales requirements → GEOGRAPHY primary
- 50-200 strategic accounts that matter most → NAMED accounts (top tier) + SEGMENT (rest)
- Multiple distinct products → PRODUCT primary

Sales motion matters too:
- Inbound-heavy → SEGMENT alone may suffice; round-robin or by-zip
- Outbound + ABM → NAMED + VERTICAL works well
- Field sales → GEOGRAPHY primary
- PLG self-serve → minimal territory; all reps see qualified leads

Rep profile matters:
- Generalist reps → broader territories; SEGMENT-only
- Specialist reps → narrower; VERTICAL or NAMED
- Junior reps → smaller, simpler territories
- Senior reps → bigger or more complex (named accounts)

Pricing matters:
- High ACV ($100K+) → fewer accounts per rep; NAMED + size
- Mid ACV ($25-100K) → SEGMENT + maybe vertical
- Low ACV (<$25K) → broad territories; volume-driven; geography or alphabet
```

## Building the Territory Carve

Step-by-step process:

```
T-6 weeks: Data preparation
- Pull TAM list from sales intel tool (ZoomInfo, Apollo) + clean
- Tag accounts: size, vertical, region, intent signal, current customer status
- Reconcile with CRM
- Output: clean TAM list of 5-50K accounts with full attributes

T-4 weeks: Define dimensions
- Confirm: which dimensions to carve by (segment, geo, vertical, etc.)
- Confirm: how many segments per dimension
- Output: dimension framework agreed by sales leadership

T-3 weeks: Run the math
- For each rep: calculate "ideal" territory size based on quota + ramp
- Distribute accounts to balance:
  a. Quota opportunity (sum of expected ACV × close rate)
  b. Account count (workload balance)
  c. Vertical / regional fit (if relevant)
- Aim: every rep within 10% of the average opportunity
- Output: draft territory list per rep

T-2 weeks: Pressure-test
- Show drafts to ONE senior rep + ONE manager (NOT the team)
- Ask: where are the obvious imbalances? edge cases? rep-account misfits?
- Iterate

T-1 week: Pre-announce + 1-on-1s
- Sales leader meets each rep separately
- Walks through their territory
- Listens for "this account doesn't fit me" / "I'd be stronger with X"
- Adjusts modestly (don't redesign for one rep; do adjust for clear mismatches)

Day 0: Announce + Q&A
- All-hands sales meeting
- Walk through territory framework + each rep's allocation
- Q&A — full transparency on logic
- Effective date: usually start of next quarter

T+30 days: Initial review
- How does pipeline coverage look?
- Are there orphan accounts (nobody's reaching them)?
- Any rep severely struggling?
- Adjust ONLY if a clear failure mode

T+90 days: First quarterly review
- Did each rep have fair quota opportunity?
- Did pipeline distribute as expected?
- Any structural issues?
- Carve-outs / adjustments at this checkpoint (not before)

T+12 months: Annual re-evaluation
- Major redesign tied to annual planning + SKO
- Don't redesign more often unless absolutely needed
```

## Balancing for Fairness (the Hardest Part)

The single biggest predictor of territory health: do reps believe their territory is FAIR? More than mathematical optimality.

```
Fairness dimensions:

1. Quota opportunity
- Each rep's territory should yield roughly equal pipeline IF they execute well
- Calculate: sum of (ACV potential × probable close rate) per account
- Aim: max-min spread ≤ 15% across reps

2. Account count balance
- Some reps want fewer-better-named accounts; others want volume
- Match preference where possible
- Aim: account count variance ≤ 30% (less critical than quota)

3. Vertical / regional fit
- Don't put a Healthcare-specialist in a Tech-vertical territory
- Don't assign EU-language accounts to a US-only rep
- Match expertise to territory

4. Difficulty distribution
- Mix easy + hard accounts (don't dump all the strugglers on one rep)
- Mix existing customers + new logos
- Mix high-intent + cold

5. Existing-relationship preservation
- If a rep has been working a deal for 3 months, don't reassign mid-cycle
- Honor in-flight deals through close

Fairness pitfalls:
- Putting all the "best" accounts in one territory (rep gets lucky; others demoralized)
- Splitting by alphabet without size-balancing (some letters dominate)
- Geographic carve when geographic relevance is low (artificial)
- Ignoring rep tenure (junior rep ≠ senior rep capability)

Trust beats math:
- A territory that's mathematically 5% suboptimal but everyone trusts > a perfectly-optimized territory everyone hates
- Sales-leader transparency on the LOGIC matters as much as the result
```

## Account Assignment Rules

```
Assignment rules to document:

1. New accounts (greenfield)
- Assigned by territory rules at creation
- Usually CRM auto-assigns based on field values

2. Existing customers
- Stay with current rep through renewal
- Re-assign at renewal IF territory changed (with clear handoff)

3. In-flight deals
- Honor current rep through close
- If rep leaves: assign to manager or designated successor

4. Strategic / named accounts
- Assigned by sales leadership
- Re-evaluated annually (not quarterly)

5. Inbound leads
- Round-robin within segment OR territory-routed
- Don't let inbound leads ignore territory boundaries (chaos)

6. Carve-outs (exceptions to rules)
- Documented with reason
- Approved by sales leadership
- Audit trail in CRM (who carved, why, when)

7. Account splits (one company, multiple territories)
- Sometimes a giant account spans verticals or regions
- Decision: ONE rep per account (preferred) OR named-account team (multi-rep)
- Document the rule

8. Family / corporate hierarchy
- Parent company in one territory; subsidiaries in another?
- Usually: keep family together with parent
- Use account hierarchy fields in CRM

9. Legacy customers
- Customer signed years ago; original rep gone
- Assign to current territory holder OR create "legacy" territory for one CSM/AE

10. Duplicates
- One company, multiple records in CRM
- Merge before territory assignment
- RevOps responsibility
```

## The Dispute Resolution Process

Territory disputes are inevitable. Build the process.

```
Dispute scenarios:
- Rep A claims account; rep B has been working it
- Account moved verticals (e.g., Healthcare → Tech-Healthcare)
- Account split (acquisition adds subsidiaries)
- New territory boundaries; account fell into different segment

Process:
1. Rep raises dispute via documented channel (Slack channel, ticket, email — pick one)
2. Manager triages within 48 hours
3. Sales-leader decision within 5 business days
4. Decision logged in CRM (audit trail)
5. Comp impact noted (deal stays with original rep through close; territory rolls forward)

Common resolution rules:
- Active deal: rep with documented activity in last 30 days keeps it
- Inactive: assigned by current territory rules
- Multi-rep claim: highest pipeline contribution wins; or sales-leader decides
- Major customer expansion: original rep retains relationship
- "Who touched it first" tie-breaker: NOT a useful rule (creates land-grabs)

Anti-patterns:
- Ad-hoc decisions ("just figure it out")
- Disputes settled in heated meetings (always cool 24 hours first)
- Manager favoritism (use objective criteria)
- Endless escalation (sales-leader decision is final unless egregious)
- Comp clawbacks ex post (don't take credit away after rep closed)
```

## Common Failure Modes

```
Failure 1: Geography-first when geography doesn't matter
- Pattern: SaaS sold remotely; carved by US East/West/Central anyway
- Reality: artificial boundaries; reps can't reach prospects regardless
- Fix: carve by SEGMENT or VERTICAL primary; geo only if relevant

Failure 2: Designed by the math, not the people
- Pattern: optimal mathematical balance; reps hate it
- Reality: reps work what they trust; territories are abandoned in practice
- Fix: pressure-test with reps; trust > optimality

Failure 3: All accounts ≠ all opportunity
- Pattern: 100 accounts each = "fair"; reality is 100 mid-market reps' accounts vs 100 SMB-with-30-employees
- Fix: weight by ACV potential, not raw count

Failure 4: Ignoring rep expertise
- Pattern: "Sarah has 5 years in healthcare"; she gets a Tech vertical territory
- Reality: rep struggles; clients don't trust
- Fix: match expertise to territory at the dimension level

Failure 5: Carving out top accounts to favorite rep
- Pattern: "Sarah always gets the best accounts"
- Reality: politics; team morale tanks
- Fix: documented criteria for top-account assignment; rotation if contested

Failure 6: Re-carving every quarter
- Pattern: every QBR, "let's redesign territories"
- Reality: reps spend more time fighting territory than selling
- Fix: 12-18 month cycles; minor adjustments only between

Failure 7: No clear "owns it" rule
- Pattern: 5 reps think they own the same account
- Reality: customer confused; rep effort wasted
- Fix: ONE rep per account always (named-account teams are ONE team, not multiple owners)

Failure 8: Mid-cycle territory changes
- Pattern: redesign in Q2 with active deals in flight
- Reality: chaos; deals slip; comp disputes
- Fix: territory changes effective at quarter-start ONLY; honor in-flight deals

Failure 9: Forgetting CSM coverage
- Pattern: AE has clear territory; CSM doesn't; customer confused on point-of-contact
- Fix: territory design includes CSM mapping

Failure 10: Marketing not aligned with territory
- Pattern: ABM campaign blasts EVERY account; doesn't respect rep ownership
- Reality: 3 reps each get email about same account; messy
- Fix: marketing-CRM integration uses territory data

Failure 11: No carve-out process
- Pattern: territory disputes settled in heat-of-moment Slack threads
- Reality: politics + grudges
- Fix: documented process; manager + leader involvement; audit trail

Failure 12: TAM not enumerated
- Pattern: territory designed assuming TAM = "the world"
- Reality: reps prospecting outside ICP; effort wasted
- Fix: explicit TAM; territory accounts come from TAM only

Failure 13: New rep onboarded into "leftover" territory
- Pattern: 3 senior reps grab best accounts; new hire gets remainders
- Reality: new rep can't ramp; quits at 12 months
- Fix: territory design considers new-rep ramp; reserve some good accounts for incoming

Failure 14: Compensation didn't follow territory
- Pattern: territory boundaries; quota math doesn't reflect them
- Reality: rep with smaller territory has same quota; impossible to hit
- Fix: comp plan + quota math derived from territory math

Failure 15: Anniversary / cohort-based territory disruption
- Pattern: company-wide reorg disrupts active deal cycles
- Reality: customer relationships break
- Fix: stagger transitions; honor in-flight deals
```

## What Done Looks Like (recap)

A successful territory design:

- [ ] Documented framework (dimensions chosen, rationale)
- [ ] Per-rep territory list with accounts assigned
- [ ] Quota opportunity within 10-15% across reps
- [ ] Account count variance reasonable (~30% max)
- [ ] No orphan accounts; no overlaps
- [ ] Vertical / expertise fit considered
- [ ] In-flight deals respected
- [ ] Comp plan + quotas derived from territory math
- [ ] CSM coverage aligned with AE territory
- [ ] Marketing / ABM aware of rep ownership
- [ ] Dispute resolution process documented
- [ ] Carve-out process documented
- [ ] 12-18 month stability (no redesign between)
- [ ] Reps trust the design (high reported fairness)
- [ ] New AE onboarding includes "here's your territory" doc

## Mistakes to Avoid

- **Designing by geography in remote-first SaaS sales.** Use SEGMENT or VERTICAL.
- **Optimizing math over rep trust.** Pressure-test with team; iterate.
- **Equal account count ≠ equal opportunity.** Weight by ACV potential.
- **Reassigning active deals mid-cycle.** Honor in-flight; transition at quarter-start.
- **No clear "ONE rep per account" rule.** Multiple owners → chaos.
- **Re-carving more than annually.** Disrupts more than it fixes.
- **Ignoring rep expertise / fit.** Match vertical knowledge.
- **Skipping pre-announce 1-on-1s.** Reps need to feel heard before public announcement.
- **No documented dispute process.** Disputes will happen; build the process.
- **Forgetting CSM coverage.** Customer success-side ownership matters too.
- **Forgetting marketing alignment.** ABM and territories must coordinate.
- **Letting top accounts go to favorites.** Documented criteria, not politics.
- **Designing without TAM enumerated.** You're carving fog.
- **Not factoring rep tenure.** Junior reps need different territory shape than senior.
- **Skipping comp-plan alignment.** Quota math must follow territory math.
- **Hiding the logic.** Transparency builds trust; opacity erodes it.

## See Also

- [Sales Compensation Plans](sales-compensation-plans.md) — comp follows territory
- [Sales Forecasting & Pipeline Management](sales-forecasting-pipeline-management.md) — pipeline rolls up by territory
- [Sales Operations Playbook](sales-operations-playbook.md) — operational systems territories rely on
- [Sales Playbook](sales-playbook.md) — the artifact reps execute against
- [First Sales Hire](first-sales-hire.md) — earlier-stage equivalent
- [Sales Onboarding & Ramp](sales-onboarding-ramp.md) — territory is part of new-hire onboarding
- [Annual Sales Kickoff](annual-sales-kickoff.md) — territories announced at SKO
- [Quarterly Business Reviews](quarterly-business-reviews.md) — territory reviewed quarterly
- [Account-Based Marketing](../3-distribute/account-based-marketing.md) — pairs with territory
- [Channel Partner Programs](../3-distribute/channel-partner-programs.md) — channel partners need territory respect too
- [Compensation Philosophy & Pay Bands](compensation-philosophy-pay-bands.md) — comp framing
- [Renewal Forecasting & Pipeline Management](renewal-forecasting-management.md) — renewal coverage by territory
- [Customer Success Metrics Framework](customer-success-metrics-framework.md) — CS coverage aligns with AE territory
- [Solutions Engineering Hire](solutions-engineering-hire.md) — SE coverage often follows territory
- [Ideal Customer Profile](../1-position/ideal-customer-profile.md) — TAM definition
- [Sales Intelligence & Prospect Data Platforms (Reference)](../../VibeReference/content/marketing-and-seo/sales-intelligence-prospect-data.md) — TAM data layer
- [CRM Providers (Reference)](../../VibeReference/content/marketing-and-seo/crm-providers.md) — territory data lives here
