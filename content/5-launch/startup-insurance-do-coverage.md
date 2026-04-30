# Startup Insurance & D&O Coverage Strategy

[⬅️ Back to Day 5: Launch](./)

Insurance is the company-building line item nobody explains until you suddenly need it — when a customer's lawyer sends a letter, a former employee files a wrongful termination claim, a board candidate refuses to join without D&O, or a Series B term sheet requires $5M of cyber coverage as a closing condition. Founders typically discover insurance through three doors: a customer contract demands it, an investor demands it, or a claim arrives and reveals what wasn't covered.

The right insurance strategy is **boring and forgettable**: the policies are right-sized, premiums fit your stage, claims are handled cleanly, and you never think about it day-to-day. The wrong strategy is one of two failure modes: under-insured (a $2M claim, a $1M policy, founders writing the gap personally) or over-insured (paying $40K/yr for $10M cyber when you have 30 customers and no PII).

This playbook covers the policies that matter for SaaS startups, when to buy each (timed to ARR / fundraising / customer demands), typical premium ranges in 2026, the modern startup-focused brokers vs. traditional brokers, and the failure modes that destroy companies — most of which are avoidable with $3K-30K/yr of premium spent at the right time.

## What Done Looks Like

- D&O policy in place before your board has external (non-founder, non-investor) directors
- E&O / Tech E&O / Cyber liability policy sized to your largest customer's contractual requirement
- General liability + EPLI in place once you have employees beyond founders
- A specific person owns insurance — outside fractional CFO or in-house finance lead — not the founder by default past Series A
- Annual renewal review with broker; coverage scaled to current ARR + customer base + headcount
- Insurance certificates (COIs) issued promptly to customers on request without scrambling
- Claims experience: when something happens, the broker is the first call and the response is methodical, not panicked

## 1. The Policies That Matter for SaaS

Six policies cover the vast majority of SaaS exposure. Two of them are mandatory in most US states (workers' comp, sometimes EPLI); the rest are demand-driven (customer contracts, investor requirements, or recommended best-practice).

### 1.1 D&O — Directors & Officers Liability

Protects directors and officers from claims related to their decisions in running the company. Covers legal defense costs and judgments for things like breach of fiduciary duty, mismanagement, regulatory investigations.

**Why it matters**: independent directors and (often) institutional investors will refuse to join your board without D&O coverage. Without it, their personal assets are exposed to suits brought by shareholders, employees, regulators, or business partners.

**When to buy**:

- Before adding a non-founder, non-investor independent director
- Before a Series A (most institutional VCs require D&O as a closing condition)
- After raising any priced round with multiple shareholders

**Typical 2026 pricing for SaaS**:

- Pre-seed/seed: $2K-8K/yr for $1M-3M coverage (Side A only or "thin" entity coverage)
- Series A: $8K-15K/yr for $3M-5M coverage
- Series B: $15K-40K/yr for $5M-15M coverage
- Series C+: $40K-150K+/yr for $15M-50M+ coverage

**Sides A/B/C explained**:

- **Side A** — direct coverage for individuals when the company can't or won't indemnify (insolvency, derivative suits)
- **Side B** — reimbursement to the company for indemnifying its directors/officers
- **Side C** — coverage for the company itself (entity coverage), often for securities claims

A standard "ABC" policy covers all three. Pre-seed companies sometimes buy "Side A only" thinner policies.

### 1.2 E&O / Tech E&O — Errors & Omissions

Covers claims that your *product or service* caused financial harm — bugs, downtime, missed deliverables, contract failures. The "professional liability" of the SaaS world.

**Why it matters**: enterprise customers contractually require E&O coverage, often $5M-10M minimum. Without it, you can't sign the deal. Also: when your platform has an outage that costs a customer money and they sue, this is the policy that defends you.

**When to buy**:

- Before signing your first enterprise contract
- Once you have $500K+ ARR and any customer-impacting downtime risk
- When customers start sending you certificate-of-insurance requests with required E&O limits

**Typical 2026 pricing**:

- Early SaaS ($500K-3M ARR): $3K-15K/yr for $1M-3M coverage
- Growing SaaS ($3M-25M ARR): $15K-50K/yr for $5M-10M coverage
- Mid-market+ ($25M+): $50K-200K+/yr for $10M-25M+ coverage

**Tech E&O specifics**: a SaaS-tailored E&O that covers software defects, cloud outages, integration failures, IP infringement claims related to your product, and similar. Generic E&O may not cover SaaS-specific claims; insist on Tech E&O.

### 1.3 Cyber Liability

Covers data breaches, ransomware, regulatory fines (GDPR, CCPA), customer notification costs, credit monitoring, business interruption from cyber incidents.

**Why it matters**: a breach involving customer PII can cost $200-400 per record in notification + remediation costs. A 100K-record breach = $20-40M in costs. Customer contracts increasingly require cyber coverage. Some industries (healthcare, fintech) require specific cyber coverage by regulation.

**When to buy**:

- Before storing meaningful customer PII (any healthcare data, payment data, personal identifiers)
- Before signing enterprise customers (they'll require cyber coverage as a contractual condition)
- Once you have $1M+ ARR with even moderate PII handling

**Typical 2026 pricing**:

- Light PII handling: $3K-10K/yr for $1M-3M coverage
- Moderate PII (B2B SaaS, customer data, no PHI/payment data): $10K-30K/yr for $3M-10M
- Heavy PII (healthcare, fintech, marketing data brokers): $30K-150K+/yr for $10M-50M

**Underwriting note**: cyber underwriters now require detailed security posture answers — MFA enforcement, EDR coverage, backup strategy, SOC 2 status. Bad answers raise premiums or trigger exclusions.

**E&O + Cyber combined**: many startup-focused brokers (Vouch, Embroker) sell E&O + Cyber as a bundle; this is usually fine and often cheaper than separate policies.

### 1.4 General Liability (GL)

Covers third-party bodily injury and property damage. The boring policy — slip-and-fall coverage if someone visits your office, damage to a customer's property at an on-site visit.

**Why it matters**: cheap, often required by landlords (commercial lease) and customers (anyone who'll have you on their premises). Many large enterprise customers require $1M-2M GL as a contract condition.

**When to buy**:

- Before signing a commercial lease (landlords usually require)
- Once you have employees who travel to customer sites
- Before signing any enterprise customer with a "vendor on premises" requirement

**Typical 2026 pricing**: $500-2K/yr for $1M-2M coverage. One of the cheapest policies; just buy it.

### 1.5 Workers' Compensation

Covers employee work-related injuries. **Mandatory in nearly all US states** once you have any W-2 employees (even one). Penalties for not carrying WC are severe.

**When to buy**: with your first W-2 employee. Most modern PEOs (Justworks, Rippling, Gusto, TriNet) include WC in their package — verify yours does and whether the limits match your state and customer requirements.

**Typical pricing**: paid per-employee per-payroll-cycle, varies by state and job classification. Tech workers are low-risk class — typical is 0.1%-0.3% of payroll. Through a PEO it's bundled into the PEO admin fee.

### 1.6 EPLI — Employment Practices Liability

Covers employment-related claims: wrongful termination, discrimination, harassment, retaliation. Covers legal defense and judgments.

**Why it matters**: the most common claim type for early-stage companies after D&O. Wrongful termination + discrimination claims happen even with great culture and clean process — the defense costs alone can be $50K-300K. EPLI covers them.

**When to buy**:

- Once you have 5+ employees
- Before letting anyone go (a single firing can trigger a claim)
- California-based companies: as soon as you have any employees (CA has the highest claim frequency)

**Typical 2026 pricing**:

- 5-25 employees: $2K-6K/yr for $1M coverage
- 25-100 employees: $6K-15K/yr for $1M-3M
- 100-500 employees: $15K-50K/yr for $3M-10M

Often bundled with D&O at small scale.

### 1.7 Other Policies (Conditional)

- **Commercial property / Business Personal Property**: covers office equipment, inventory. Buy if you have meaningful office assets ($25K+).
- **Business interruption**: covers lost income from a covered event. Niche for SaaS — your "business interruption" is a cyber incident, covered better under cyber liability.
- **Crime / Fidelity**: covers employee theft, wire fraud, social engineering. **Worth considering** at any size — wire fraud against startups is rampant.
- **Key person**: insures the company against the death/disability of a critical founder. Sometimes required by acquirers; rarely by VCs.
- **Product liability**: relevant if you ship physical hardware or have a product that could cause bodily harm.
- **International coverage extensions**: if you sell internationally or have foreign subsidiaries, your standard policies may not cover. Discuss with broker.
- **Fiduciary liability**: covers ERISA-related claims for 401(k) and benefits plans. Required at scale; PEOs sometimes handle.
- **Employed Lawyers / Pollution / Bonds**: industry-specific.

## 2. Buying Insurance: The Modern Startup Stack

Two paths to buying insurance: traditional brokerage (Marsh, Aon, Lockton, Hub International, Woodruff Sawyer) or modern startup-focused tech-broker (Vouch, Embroker, Founder Shield, Newfront, Athletic Greens — wait, those last few are not insurance brokers, ignore that, the modern startup-focused ones are Vouch, Embroker, Founder Shield, Newfront).

### Modern Startup Brokers (recommended for pre-Series C)

**Vouch** — fastest underwriting; D&O, E&O, Cyber, EPLI bundled for tech startups. Online quote-to-bind. Pricing competitive for Series A-B.

**Embroker** — broader coverage menu; strong in tech/SaaS verticals. Online platform; human broker support for complex needs.

**Founder Shield** — boutique; longer broker relationships; competitive at Series B+ where complexity grows. Strong claims advocacy.

**Newfront** — modern tech-broker built on a tech platform; strong for high-growth Series B-D companies.

**At-Bay**, **Coalition** — cyber-specific; useful as overlay on broader policy from Vouch/Embroker.

### Traditional Brokers (recommended for late-stage / pre-IPO)

**Marsh, Aon, Woodruff Sawyer** — most public companies use them; most pre-IPO companies migrate to one of these for Series C+ as coverage complexity demands more relationship-driven brokerage.

**Hub International, USI, Lockton** — large brokers with startup teams; usable at any stage but better-suited Series B+.

### Decision Framework

| Stage | Recommended |
|---|---|
| Pre-seed / Seed | Vouch or Embroker. Online platform is enough. |
| Series A | Vouch / Embroker / Founder Shield. Get quotes from 2 of the three. |
| Series B | Founder Shield / Newfront / Embroker. Start considering broker relationship for complex E&O claims. |
| Series C+ | Newfront, or migrate to Woodruff Sawyer / Aon as you approach IPO readiness. |
| Pre-IPO | Marsh, Aon, or Woodruff Sawyer. Coverage complexity (D&O for public-company readiness, IPO-specific risk) demands experienced broker. |

### What to Ask a Broker

When evaluating brokers:

1. **Who's my dedicated point of contact?** You want a named broker, not "the chat queue."
2. **What's your claims process?** When something happens, how do I reach you, and how do you advocate for me with the carrier?
3. **What's the typical turnaround for a Certificate of Insurance (COI)?** Customers will request these; speed matters.
4. **What's your experience with [my industry]?** SaaS-specific knowledge matters for Tech E&O underwriting.
5. **Can you bind coverage on Friday for a Monday closing?** Real test of broker responsiveness.
6. **What's your renewal philosophy?** Some brokers shop the market every year; others auto-renew. You generally want shopping every 2 years.

## 3. Pricing & Budget by Stage

Rough total annual insurance spend by stage (D&O + E&O + Cyber + GL + EPLI; not workers' comp which is in payroll):

| Stage | Headcount | ARR | Total Annual Premium |
|---|---|---|---|
| Pre-seed | 1-5 | $0-100K | $5K-15K |
| Seed | 5-15 | $100K-1M | $10K-25K |
| Series A | 15-40 | $1M-5M | $20K-60K |
| Series B | 40-150 | $5M-25M | $40K-150K |
| Series C | 150-400 | $25M-75M | $100K-400K |
| Pre-IPO | 400+ | $75M+ | $300K-1.5M+ |

These are aggregates across all policies. Expect bumps when:

- Closing an enterprise customer contractually requires higher limits (suddenly $10M cyber instead of $3M)
- Your sector becomes hot with regulators (e.g. AI startups and FTC scrutiny)
- A claim happens — premiums rise 20-50% the next renewal

## 4. Customer Insurance Demands (COIs and Contractual Limits)

Enterprise customers often demand specific insurance limits as contract conditions. The dance:

1. Customer's vendor management form lists required minimums: e.g. "$1M GL, $1M E&O, $5M Cyber"
2. Your broker issues a Certificate of Insurance (COI) showing your coverage meets those limits
3. Customer's procurement reviews; if compliant, deal proceeds
4. If not compliant, you either (a) buy higher limits or (b) negotiate down

### Typical Required Limits by Customer Tier

| Customer Type | Typical Required E&O / Cyber |
|---|---|
| SMB customer | $1M / $1M (sometimes none) |
| Mid-market customer | $1M-3M / $1M-3M |
| Enterprise (Fortune 500) | $5M-10M / $5M-10M |
| Healthcare / regulated | $10M+ E&O, $10M+ Cyber, plus HIPAA-specific |
| Federal government | $10M+ all categories, plus federal-specific (CMMC, FedRAMP) |

### Negotiating Down When Limits Are Excessive

Sometimes customer contracts have boilerplate $25M minimums that don't fit your size. Tactics:

- "We carry $5M; we can scale up if there's a specific risk you're concerned about — what is it?"
- Offer a "limit amendment" — agree to scale to required limit if customer's spend exceeds $X/yr
- Decline coverage and accept higher contractual indemnification cap (rarely a good trade)

A good broker advises here. Customers' procurement teams have negotiation rooms — they're not always immovable.

## 5. Claims: What Actually Happens When Something Goes Wrong

Insurance is most useful when something bad happens. The process:

1. **An event occurs**: a customer threatens suit, a former employee files an EEOC complaint, a breach is detected, a board member is named in a derivative suit.
2. **Notify your broker immediately** — not after consulting a lawyer or trying to "handle it." The policy may have notice requirements (e.g., "report within 30 days") that, if missed, void coverage.
3. **Broker contacts the carrier** to open a claim. Carrier assigns a claims handler.
4. **Coverage determination** — carrier reviews whether the claim is covered. This can take days to weeks.
5. **Defense begins** — carrier appoints (or you propose, depending on policy) a law firm to defend. Defense costs paid from policy limits in most policies (eroding the limit) or sometimes outside the limit.
6. **Resolution** — settlement, dismissal, or judgment. Carrier pays settlement / judgment up to policy limit, minus retention (deductible).
7. **Renewal impact** — claim is reported on your loss runs; renewal premium typically rises 20-50% for 3 years post-claim.

### Common Claim Triggers for Startups

- **D&O**: shareholder dispute (founder-cofounder breakup → derivative suit), regulatory investigation, fraud allegation
- **E&O**: customer alleges product caused financial loss (downtime, data corruption, missed deliverable)
- **Cyber**: data breach, ransomware, accidental data exposure
- **EPLI**: wrongful termination, discrimination claim (most common), harassment
- **GL**: visitor injury at office, property damage at customer site

### Things That Void or Limit Coverage

- **Late notice**: failing to report within policy timeframe
- **Pre-known claims**: the "known claim exclusion" — if you knew about the issue when you bought the policy and didn't disclose, no coverage
- **Fraud/intentional acts**: D&O doesn't cover deliberately fraudulent acts
- **Settlement without consent**: settling a claim without the carrier's approval voids coverage for the settlement
- **War, nuclear, etc.**: standard exclusions usually don't matter for SaaS; cyber may have specific war/nation-state exclusions worth reviewing
- **Specific exclusions**: read the exclusions list at policy bind. Some cyber policies exclude "social engineering" (phishing-induced wire transfers); some D&O excludes "insured-vs-insured" (founder suing co-founder). Know what you bought.

## 6. Failure Modes

**Buying too late**: a customer demands $5M cyber on Friday for a Monday close. Underwriting takes 5-10 days minimum. Buy before you need.

**Buying the wrong policy**: generic E&O instead of Tech E&O; cyber that excludes social engineering; GL that excludes premises you actually use. Read policy schedules.

**Under-insuring**: $1M E&O against an enterprise customer with $20M ARR using your platform. A claim wipes out the limit and the founders pay the gap.

**Over-insuring**: $25M cyber at a 5-person seed company with no PII. Premiums burn cash; no actual risk.

**Using boilerplate broker**: a generic small-business broker doesn't understand SaaS. They'll mis-underwrite (wrong class codes, wrong assumptions about revenue) and you'll find out at claim time.

**Not naming additional insureds**: many customer contracts require you to name them as "additional insured" on your GL or E&O. Forgetting this can mean coverage doesn't apply to claims arising from that customer relationship.

**Letting policies lapse**: insurance is the line item that's easy to forget. A lapsed policy = no coverage for the lapse window, plus underwriters re-rate when you reapply (usually higher).

**Failing to disclose**: at policy bind, you complete an application. Missing facts (prior claims, regulatory matters, large customer disputes, breaches) = the carrier can rescind the policy when a claim is made. Disclose everything — bad facts make premiums slightly higher; non-disclosure makes coverage zero.

**Not reading the policy**: the schedule of exclusions and conditions matters. Some policies have $5M limits but $1M sub-limits for specific claim types (e.g. social engineering). Read with broker.

**No claims process**: when an event happens, founders panic, retain their own lawyer, settle without notifying carrier, and discover the policy doesn't cover the settlement. Process: notify broker first, always.

**Founder's personal indemnification gap**: D&O has retention (deductible) — usually $25K-100K. Founder is personally on the hook for retention amount. Plan for it; don't be surprised.

**Buying from one source for everything**: tying all coverage to one carrier means a bad-claim experience can spike all renewals at once. Some diversification helps.

**Forgetting international**: opening a UK or EU subsidiary may require local policies; your US D&O may not cover board members of foreign subs. Discuss with broker before incorporating internationally.

**Not budgeting for renewal increases**: insurance budgets are not flat year-over-year. As ARR grows, headcount grows, and customer demands grow, premiums grow — often 30-50% YoY at high-growth Series A-B.

**Skipping cyber underwriting hygiene**: if you can't answer "yes" to MFA on all admin accounts, EDR on all endpoints, immutable backups — your cyber premium will be 2-3x what a clean shop pays, or you'll get exclusions for ransomware. Get the security posture clean before renewal.

**Not getting COIs into customer's hands fast**: customers sometimes block deals on missing COIs. A 30-day delay because procurement waited on the broker is a real revenue loss. Tell broker COIs are time-sensitive at issuance.

## What Done Looks Like (Recap)

You've shipped insurance strategy when:

- D&O in place before independent directors join the board
- Tech E&O + Cyber sized to your largest customer's contractual minimum
- General liability + EPLI covering the basics; workers' comp via PEO
- A startup-focused broker (Vouch, Embroker, Founder Shield, Newfront) advising on changes
- Annual renewal review with explicit consideration of: new customer requirements, ARR growth, headcount growth, security posture changes
- COIs issued to customers within 24 hours of request
- A documented process: an event happens → broker is the first call → no settlement without carrier approval → policy schedule reviewed for relevant exclusions
- Insurance is a budget line item, not a panic purchase

## Mistakes to Avoid

- Buying after a customer demand instead of before — underwriting is slow
- Generic E&O instead of Tech E&O — won't cover SaaS-specific claims
- Under-insuring against the largest customer ACV — claim wipes out limit + founder gap
- Over-insuring at pre-revenue stage — premium burn for nothing
- Boilerplate small-business broker without SaaS expertise — mis-underwrites at bind, fails at claim
- Forgetting to name customer as "additional insured" when contract requires it
- Letting policies lapse — gap windows + renewal re-rate
- Non-disclosure on application — voids coverage when it matters
- Not reading policy exclusions — surprised at claim time
- Settling a claim without carrier consent — voids that coverage
- Not budgeting for renewal increases — premiums grow with ARR + headcount
- Skipping cyber security posture work — premiums spike or exclusions hit
- COIs issued slowly — deals stall in procurement
- One-carrier dependency — bad claim spikes everything

## See Also

- [Fundraising Playbook](./fundraising-playbook.md) — D&O is a closing condition for most institutional rounds
- [Board Meeting Cadence & Materials](./board-meeting-cadence-materials.md) — D&O protects board members
- [Burn Rate & Runway Management](./burn-rate-runway-management.md) — insurance is a steady opex line
- [Crisis Communication Playbook](./crisis-communication-playbook.md) — cyber claims often pair with comms crises
- [Founder-CEO Transition](./founder-ceo-transition.md) — Side A coverage matters during leadership change
- [M&A Strategy / Acquihire](./ma-strategy-acquihire.md) — acquirers diligence insurance; tail coverage matters at exit
- [Acquisition Exit Strategy](./acquisition-exit-strategy.md) — D&O tail policies on exit
- [Investor Monthly Updates](./investor-monthly-updates.md) — coverage changes worth flagging
- [Trust Center & Security Page](../4-convert/trust-center-security-page.md) — cyber underwriters increasingly look at this
- [Compensation Philosophy & Pay Bands](../4-convert/compensation-philosophy-pay-bands.md) — EPLI mitigates wrongful-pay claims
- [Founder Hiring Playbook](../4-convert/founder-hiring-playbook.md) — structuring offers reduces EPLI claim surface
- [Annual Sales Kickoff](../4-convert/annual-sales-kickoff.md)
- [Lead Scoring & Qualification Frameworks](../4-convert/lead-scoring-qualification-frameworks.md)
- [B2B Procurement Navigation](../4-convert/b2b-procurement-navigation.md) — COIs are a procurement gate
- [Quarterly Planning & Operating Cadence](../1-position/quarterly-planning-operating-cadence.md)
- [Annual Planning & OKRs](../1-position/annual-planning-okrs.md)
- [Open Source Strategy](../1-position/open-source-strategy.md) — IP indemnification interplay
