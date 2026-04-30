# Cloud Marketplace Listings (AWS, Azure, GCP, Salesforce, HubSpot, Atlassian)

[⬅️ Back to Day 3: Distribute](../3-distribute/)

If you're a B2B SaaS at $1M+ ARR selling to enterprise or upper mid-market, **cloud marketplaces are now a primary distribution channel — not a side experiment**. By 2026, a meaningful percentage of enterprise software spend flows through AWS Marketplace, Microsoft Azure Marketplace, Google Cloud Marketplace, Salesforce AppExchange, HubSpot App Marketplace, and Atlassian Marketplace because customers have committed cloud spend (EDPs, MACC commitments) they need to burn down, and procurement has been trained that "buy through marketplace = 90% faster." The naive approach: list once, hope for inbound, get nothing. The structured approach: pick the right marketplaces for your ICP, invest in private offers, build a co-sell motion with the cloud's field sales, optimize for committed-spend customers, and treat the marketplace as a real channel partner — not a price-list page. Marketplace can drive 15-40% of net-new ARR at scale and can compress sales cycles from 9 months to 3 weeks for the right deals. Get this right and you ride the cloud-buying tailwind; get it wrong and you waste 6 months on a listing nobody finds.

## What Done Looks Like

A working cloud marketplace program:

- [ ] Listed on the right marketplace(s) for your ICP (not all of them — focused)
- [ ] Listing optimized: clear value prop, screenshots, video, pricing model, free trial
- [ ] Private offers enabled (custom pricing for enterprise deals)
- [ ] Contract templates approved (EULA / DPA / SCC)
- [ ] Cloud co-sell program registered (AWS ACE / Microsoft Partner Center / GCP Partner Advantage)
- [ ] Sales team trained on private offers + marketplace deal mechanics
- [ ] Finance integrated for marketplace billing reconciliation
- [ ] Tracking marketplace-sourced + marketplace-influenced ARR separately
- [ ] Reaching ≥10% of net-new ARR via marketplace by year 2 of program
- [ ] Field-sales co-sell relationships actively cultivated (named cloud reps know your product)

## 1. Decide which marketplaces to list on

Not all marketplaces are created equal. The right choices depend on your ICP, your cloud deployment posture, and your sales motion.

```text
Decide which cloud marketplaces fit your B2B SaaS.

Marketplaces by ICP fit:

AWS Marketplace
- Best for: AWS-deployed software, infra/devops/security/data tools, enterprise B2B
- Customer base: every enterprise on AWS (which is most large enterprises)
- Strengths: largest, most mature, EDP committed-spend burn-down, most field-sales co-sell muscle
- Required: AWS account; ideally product is deployable on AWS or is genuinely multi-cloud
- Investment: HIGH — but ROI is also highest

Microsoft Azure Marketplace + Microsoft Commercial Marketplace (AppSource)
- Best for: Microsoft-shop enterprises (most Fortune 1000), Office 365 / Teams integrations
- Customer base: Microsoft-committed enterprises (MACC = Microsoft Azure Consumption Commitment)
- Strengths: massive enterprise reach, especially regulated industries, gov, financial services
- Required: Microsoft Partner; transactable offer for committed-spend burn-down
- Investment: HIGH; especially if you also chase Co-sell IP / Azure IP Co-sell badge

Google Cloud Marketplace
- Best for: GCP-deployed software, AI/ML/data tools, modern tech-stack companies
- Customer base: GCP-committed (smaller than AWS/Azure but growing), AI-forward shops
- Strengths: growing fast for AI workloads; less crowded
- Investment: MEDIUM

Salesforce AppExchange
- Best for: Sales/CRM tooling, anything that integrates with Salesforce
- Customer base: 150K+ Salesforce customers
- Strengths: proven channel; "Salesforce-native" badge has real weight
- Required: Native Salesforce integration; security review (intensive)
- Investment: HIGH (3-9 month security review process for new apps)

HubSpot App Marketplace
- Best for: marketing/sales/service tools that integrate with HubSpot
- Customer base: 200K+ HubSpot customers (mid-market lean)
- Strengths: lighter onboarding than AppExchange; growing fast
- Investment: MEDIUM

Atlassian Marketplace
- Best for: Jira/Confluence/Bitbucket ecosystem tools (devtools, project mgmt)
- Customer base: 250K+ Atlassian customers; many F500 dev teams
- Strengths: pays out 75% margin to vendors; predictable revenue
- Investment: MEDIUM-HIGH (Atlassian Connect/Forge dev investment)

Snowflake Native Apps + Databricks Marketplace
- Best for: data/analytics/AI tools running on Snowflake or Databricks
- Customer base: data-heavy enterprises
- Strengths: emerging; co-sell with data-platform reps
- Investment: MEDIUM

Slack Marketplace
- Best for: bots, integrations, internal-comms add-ons
- Customer base: huge but lower revenue per app
- Investment: LOW-MEDIUM

ServiceNow Store, Workday Marketplace, etc.
- Best for: very specific verticals (ITSM, HCM)
- Skip unless your ICP overlaps tightly

Decision rule:
- 1-2 marketplaces, done well, beats 6 marketplaces done poorly
- Start where your ICP already buys software
- Expand only after the first marketplace generates real revenue ($100K+ marketplace ARR)
```

Output: a ranked list of 1-3 marketplaces to invest in, with rationale.

## 2. Understand the committed-cloud-spend tailwind

The reason marketplaces exploded 2023-2026 is **enterprise cloud commitments**. AWS EDPs (Enterprise Discount Programs), Microsoft MACCs, GCP Committed Use Discounts — enterprises commit to multi-year, multi-million-dollar cloud spend in exchange for discounts. They then need to **burn down that committed spend or lose it**. Marketplace purchases count toward that commitment.

```text
Educate your sales + GTM team on the marketplace tailwind:

The mechanism (AWS as example):
- Enterprise commits $50M to AWS over 3 years
- Year 2, halfway through, they've consumed $30M; need to spend $20M more
- They CAN'T burn it on more EC2; they've already optimized
- They CAN burn it on AWS Marketplace purchases — counts toward commitment
- A $500K SaaS contract through marketplace = $500K closer to their commitment
- Their procurement is INCENTIVIZED to push contracts through marketplace
- The procurement cycle drops from 90 days to 5 days (no new vendor onboarding)

What this means for your sales process:
- Asking "do you have an AWS EDP we can leverage?" early in the cycle is gold
- For target accounts on AWS/Azure/GCP, default to marketplace pricing
- Marketplace = procurement velocity, not just discount
- Sales reps who learn this close 2-3x faster on enterprise deals

Train your AEs:
- How to ask about cloud commitments in discovery
- How to explain marketplace benefit to the customer (procurement velocity)
- How to structure private offers (more on this below)
- When to involve cloud field sales (co-sell)
```

Output: trained AE team that asks about cloud commitments in every enterprise opportunity.

## 3. Build the listing

Public listings are the SEO of marketplaces. Most marketplace revenue actually comes via private offers (next section), but a public listing is table stakes.

```text
Build the public marketplace listing:

Required elements:
- Hero copy (2-3 sentences; problem → solution → outcome)
- Description (1500-3000 chars; SEO + value prop)
- Categories + keywords (research what customers search)
- Pricing model: SaaS contract / SaaS subscription / SaaS consumption / professional services
- Free trial OR free tier OR private-offer-only
- Screenshots (3-6, high quality, annotated)
- Demo video (60-180 seconds, captioned)
- Customer logos (if allowed by NDA)
- Awards / certifications / SOC 2 / FedRAMP if applicable
- EULA (custom or marketplace standard)
- Data Processing Agreement (DPA)
- Standard Contractual Clauses (SCCs) for EU
- Support contact + SLA
- Documentation URL
- Categories that match your ICP search behavior

Pricing model decisions:
- SaaS Contract (fixed-price multi-year) — easiest for enterprise; default for most B2B SaaS
- SaaS Subscription (monthly/annual) — for self-serve marketplace transactions
- SaaS Consumption (usage-based) — for usage-priced products
- Private Offer Only — for everything that doesn't fit above (most enterprise SaaS)

Design principle: optimize for the procurement evaluator, not the technical user.
The buyer reading the listing is often non-technical. Lead with business value.
```

Output: a listing live on the marketplace within 4-12 weeks (varies by marketplace).

## 4. Master private offers

**This is where the money actually is.** Public listing prices are often a fiction; serious enterprise deals run through private offers — custom pricing, custom terms, custom duration, sent directly to one specific buyer. Private offers convert at 10x+ the rate of public listings for enterprise deals.

```text
Build a private offer playbook:

What a private offer is:
- A custom-priced contract sent to one specific AWS/Azure/GCP/Salesforce account
- Bypasses public listing pricing
- Custom terms (1yr, 3yr, custom payment schedule)
- Custom EULA terms negotiable
- Customer accepts in their cloud console; charge hits their committed spend
- You get paid by the cloud (typically NET-60 to NET-90)

When to use a private offer:
- Any deal >$50K ACV (default to private offer)
- Multi-year deals (always private offer for term flexibility)
- Custom pricing (volume discount, ramp deals)
- Specific contractual terms required by enterprise legal

Private offer workflow (AWS example):
1. AE qualifies; customer wants marketplace purchase
2. AE asks customer for AWS account ID
3. AE works with marketplace ops to draft private offer (price + terms + duration)
4. AE sends private offer link to customer's procurement
5. Customer accepts in AWS console (clicks one button)
6. AWS bills customer; AWS pays you (NET-60 typically)
7. Your CRM closes won; finance reconciles

Private offer playbook includes:
- AE training on when/how to offer private offers
- Pricing rules (max discount, max term, approval thresholds)
- Approval workflow (deal-desk approval for non-standard)
- Template private offer terms
- Marketplace-ops support (or contractor) to draft offers fast (24hr turnaround target)
- Finance reconciliation process

Key gotcha: marketplace fees
- AWS: 3% listing fee (negotiable down to 1.5% for top-tier vendors)
- Azure: 3% (down to 1.5% for "preferred" partners)
- GCP: 3% (down to 1.5%)
- Salesforce AppExchange: 15-25% (much higher)
- HubSpot: 20%
- Atlassian: 25% (vendor keeps 75%)

Plan for marketplace fees in pricing — don't surprise sales with margin compression.
```

Output: AE team that closes 50%+ of enterprise deals via private offers within 6 months.

## 5. Activate co-sell with cloud field sales

The single highest-leverage move in cloud marketplace strategy is **co-sell**. The cloud providers (AWS, Microsoft, Google) have armies of field sales reps. Those reps have customer relationships, are quota-carrying, and are compensated for marketplace bookings (varies by program). If a cloud rep introduces you into one of their accounts, conversion is dramatically higher.

```text
Build a cloud co-sell motion:

AWS — AWS Co-sell (ACE)
- Register at AWS Partner Network (APN) → ACE program
- Submit deal opportunities; AWS reps may engage
- Get reciprocal lead share from AWS reps (with referral fees)
- Tier: Select / Advanced / Premier (more co-sell weight at higher tiers)

Microsoft — Microsoft Partner Center / IP Co-sell
- Register at partner.microsoft.com
- Get a Microsoft Co-sell IP listing (your product is "co-sell ready")
- Microsoft reps get compensated for marketplace deals
- Engage your local Partner Development Manager (PDM)

Google Cloud — Google Cloud Partner Advantage
- Register at cloud.google.com/partners
- Build Solution Co-sell relationships
- GCP field sales is smaller but very engaged

Salesforce — AppExchange Partner Program
- Register at partners.salesforce.com
- Become an ISV / SI partner
- Engage Salesforce account executives + Distribution Managers

Co-sell tactics that actually work:
1. Identify your top 50 target accounts on each cloud
2. Find the named cloud rep for each account (LinkedIn / cloud partner portal)
3. Reach out: "we have a strong product fit for [account], can we co-sell?"
4. Bring a deal forward with cloud rep involved (not asked to "find" deals)
5. Make the cloud rep look good (ACV, marketplace consumption, customer happiness)
6. Repeat; reps bring you back into their other accounts

Tactics that don't work:
- Submitting 100 leads to ACE and waiting for AWS to "find deals" — they won't
- Asking your account manager at the cloud for sales help — wrong contact
- Generic "let's partner" emails to cloud field — ignored

Hire signal:
- At ~$3M+ ARR with marketplace strategy, hire a Cloud Alliance Manager
- Their job: relationships with cloud field, joint pipeline reviews, co-marketing
- Comp: base + commission tied to cloud-sourced + cloud-influenced ARR
- Profile: ex-cloud field rep or ex-channel manager from Stripe / Datadog / Snowflake
```

Output: 5-10 active cloud co-sell relationships generating qualified pipeline within 12 months.

## 6. Integrate marketplace deal flow with your sales process

Marketplace can be a side-channel that the sales team avoids ("it's too complicated, I'll just sell direct") or a force multiplier. Integration is the difference.

```text
Wire marketplace into your sales process:

CRM:
- New "Source" field: Direct / Marketplace-Sourced / Marketplace-Influenced
- New "Marketplace" field: AWS / Azure / GCP / Salesforce / HubSpot / Atlassian / Other
- New "Cloud Account ID" field at account level
- New "Cloud Commitment" qualification field (Y/N + amount + expiry)
- Reporting on marketplace ARR vs direct ARR by quarter

Discovery script update:
- "Are you on AWS / Azure / GCP?" (basic qualification)
- "Do you have a cloud spend commitment we should consider?" (deeper qual)
- "How does procurement typically handle SaaS purchases — through marketplace or direct?"

Comp plan:
- Marketplace deals usually carry HIGHER margin from sales perspective (no marketplace fee impact on AE quota)
- BUT pay marketplace fees out of company gross margin
- Don't let marketplace fees create sales-team disincentive to sell via marketplace
- Cloud Alliance Manager comp: tied to cloud-influenced ARR (split with AE)

Onboarding new AEs:
- 30-min training on marketplace mechanics
- 60-min training on private offers
- 60-min training on co-sell motion + how to engage cloud reps
- Cheat-sheet card: "When to bring up marketplace in discovery"

Deal desk:
- Standard private offer template
- Approval thresholds (max discount, max term, etc.)
- 24-hr turnaround target for private offers (faster = more deals close)
```

Output: marketplace becomes part of sales DNA, not a side project.

## 7. Optimize over time

Marketplace strategy is a 24-month investment with compounding returns. Year 1 = listing + a few deals. Year 2 = real channel. Year 3 = 20-40% of net-new ARR.

```text
Marketplace optimization roadmap:

Quarter 1-2 (after listing live):
- 5-15 private offer deals
- Build co-sell relationships with 5 cloud reps
- Refine listing based on early feedback
- Track: marketplace pipeline, marketplace win-rate, marketplace ACV

Quarter 3-4:
- 20-50 private offer deals
- Expand co-sell to 15-25 cloud reps
- Add second marketplace if first is producing
- Hire Cloud Alliance Manager (if ARR justifies)
- Track: marketplace as % of net-new ARR (target: 10%+)

Year 2:
- 100+ marketplace deals
- 50+ active cloud co-sell relationships
- Joint go-to-market campaigns with cloud (joint webinars, joint case studies)
- Earn vendor tier upgrade (Premier / Gold / Strategic)
- Marketplace fee reduction negotiated (3% → 1.5%)
- Track: marketplace as % of net-new ARR (target: 20%+)

Year 3:
- Marketplace as primary enterprise GTM motion
- Cloud field sales views you as preferred partner in your category
- Joint sales motions, joint events, dedicated cloud GTM team
- Track: marketplace as % of net-new ARR (target: 30-40%+)

Optimization levers:
- Listing SEO (keywords, screenshots, video) — quarterly refresh
- Private offer template improvements (legal terms, payment terms)
- Cloud co-sell relationship depth (joint pipeline reviews, joint accounts)
- Marketplace fee negotiation (annual; based on volume)
- Field sales gifts / SPIFFs (compliantly — check cloud partner rules)
- Joint case studies with cloud branding
- Joint webinars + events (cloud reps attend = pipeline)
```

Output: marketplace as a structurally compounding GTM channel.

## 8. Beware the failure modes

Most marketplace strategies underperform. Here's why.

```text
Common marketplace strategy failures:

Failure 1: List and ghost
- Pattern: build listing in 4 weeks; never revisit; expect inbound; get nothing
- Fix: marketplace is co-sell + private offer + sales-team-trained; the listing alone does ~5% of the work

Failure 2: List on too many marketplaces
- Pattern: 6 marketplaces, no investment in any, no co-sell relationships, no traction
- Fix: pick 1-2 marketplaces; invest deeply; expand only after $250K+ ARR per marketplace

Failure 3: Sales avoids marketplace
- Pattern: AEs see marketplace as "more paperwork," default to direct
- Fix: train, comp correctly, simplify private offer process to <24hr turnaround

Failure 4: Underprice on marketplace
- Pattern: post low public-listing prices to look cheap; can't justify higher private-offer pricing
- Fix: public listings are "starting point"; default to private offers for any meaningful deal

Failure 5: Forget marketplace fees
- Pattern: discount aggressively, pay 3% to AWS, sales rep comped at full ACV — margin compressed
- Fix: bake fees into pricing; comp sales on net-of-fees ARR or budget the fee

Failure 6: Wrong cloud co-sell contacts
- Pattern: working with the cloud's "channel team" (alliances) instead of field reps
- Fix: alliances unlocks programs; field reps drive deals; you need both, but field is where revenue lives

Failure 7: Marketplace as a discount channel
- Pattern: customer asks "can we get this through marketplace?" interpreted as "can we get a discount?"
- Fix: marketplace is procurement velocity, not discount; same price, faster close
- Marketplace deals can actually carry HIGHER ACV due to multi-year terms

Failure 8: Skipping the legal upfront
- Pattern: deal ready to close, then EULA/DPA/SCC negotiations take 6 weeks
- Fix: get legal templates approved BEFORE listing; pre-negotiate standard terms

Failure 9: Not tracking marketplace separately
- Pattern: marketplace ARR mixed with direct ARR; can't measure ROI of program
- Fix: separate fields in CRM; quarterly marketplace dashboard; marketplace-influenced vs sourced

Failure 10: AppExchange security review surprise
- Pattern: 9-month security review timeline shocks the team; product launch slips
- Fix: Salesforce AppExchange has a real security review; budget 6-12 months
```

Output: avoid the predictable failure modes.

## What Done Looks Like (recap)

A working cloud marketplace program at scale:

- [ ] Listed on 1-3 right-fit marketplaces (focused, not scattered)
- [ ] Listing optimized: SEO, screenshots, video, pricing, free trial, customer logos
- [ ] Private offer playbook live: <24hr turnaround, AE-trained, deal-desk-approved templates
- [ ] Cloud co-sell active: 25+ named-rep relationships, quarterly joint pipeline reviews
- [ ] Cloud Alliance Manager hired (at $3M+ ARR with marketplace as channel)
- [ ] Marketplace deal flow integrated in CRM (source, account, commitment fields)
- [ ] Marketplace fees negotiated to ≤2% (Premier-tier vendor)
- [ ] Joint go-to-market with cloud (joint webinars, case studies, events)
- [ ] Marketplace = 20-40% of net-new ARR by year 2-3
- [ ] Sales cycle compressed (90-day enterprise direct → 30-day enterprise marketplace)

## Mistakes to Avoid

- **Treating marketplace like Yelp for SaaS.** It's a sales channel with co-sell mechanics, not a directory. Listing without co-sell is wasted effort.
- **"Multi-cloud listing" without multi-cloud strategy.** Listing on AWS/Azure/GCP simultaneously when you have no cloud relationships at any of them dilutes effort. Pick one. Win there. Expand.
- **Letting AEs skip marketplace because "it's complex."** It IS complex initially. Train, simplify, comp correctly, automate. The reps who learn marketplace close faster.
- **Not investing in private offers.** Public-listing pricing is for SMB and self-serve. Enterprise = private offers. If your private-offer process takes 5 days, you're losing deals.
- **Skipping cloud field rep relationships.** Co-sell at scale is people-to-people. Hire someone whose job is the cloud field relationship.
- **Forgetting marketplace fees in pricing model.** A 3% AWS fee on every transaction is real margin. Bake it into pricing or accept the gross-margin hit knowingly.
- **Underestimating Salesforce AppExchange security review.** It's a 6-12 month process for new apps. Start it early. Don't promise a launch before security is approved.
- **Listing your free tier publicly without a free-trial limit.** Some marketplaces don't easily support trial-to-paid; design your free experience accordingly.
- **Using marketplace as "discount field."** Customers and your own AEs will start expecting marketplace = lower price. It's not. It's faster procurement at the same price.
- **Ignoring cloud commitment expirations.** Customers have annual commitment burn-down deadlines (e.g., March year-end). Time outreach around their fiscal year.
- **Not building a marketplace dashboard.** If you can't show the board "marketplace was 24% of net-new ARR last quarter, growing 15% QoQ," you're not running a program.

## See Also

- [Channel Partner Programs](./channel-partner-programs) — adjacent reseller / SI motion
- [Strategic Partnership Negotiation](./strategic-partnership-negotiation) — pairs with cloud co-sell
- [Account-Based Marketing](./account-based-marketing) — fits with marketplace target-account strategy
- [Partnerships](./partnerships) — cross-promotion / content partnership distinction
- [Pricing Strategy](../1-position/pricing-strategy) — informs marketplace pricing model
- [Pricing Packaging Tier Design](../1-position/pricing-packaging-tier-design) — how to structure marketplace SKUs
- [Sales Operations Playbook](../4-convert/sales-operations-playbook) — CRM fields + private offer workflows
- [Annual Contract Negotiation](../4-convert/annual-contract-negotiation) — multi-year deal structuring
- [Enterprise POC Management](../4-convert/enterprise-poc-management) — pairs with marketplace enterprise motion
- [B2B Procurement Navigation](../4-convert/b2b-procurement-navigation) — marketplace IS a procurement shortcut
- [Trust Center & Security Page](../4-convert/trust-center-security-page) — security review prep for AppExchange
