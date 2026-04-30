[Back to Day 1: Position](README.md)

# International Pricing & Localization: Pricing Across Geographies

Most B2B SaaS founders set US-dollar pricing on day one and apply it everywhere. By Series A, customers in Brazil, India, Indonesia, Egypt, and Argentina ask why a $99/mo plan costs ~half their monthly salary. The naive responses: "we'll figure it out later" (six months later: nothing changed; emerging-market growth zero) or "let's give them a 50% discount" (now your unit economics are tangled). The right shape: deliberate international pricing strategy — purchasing power parity (PPP) considerations, currency handling, regional pricing pages, tax + invoicing per region, and the discipline to test before scaling.

International pricing is one of the highest-leverage levers for B2B SaaS in 2026: GitHub, Stripe, Notion, Slack, Atlassian all have geographic pricing differentiation now. Founders who do this well unlock 30-50% more international ARR. Done badly, you fragment pricing into chaos, customers in lower-priced regions resell to higher-priced regions (gray market), and US customers find your "Brazil pricing" via VPN.

This guide is the playbook for international pricing: deciding when to differentiate, by how much, how to operationalize (currency, tax, billing), and how to defend against arbitrage.

## What Done Looks Like

A successful international pricing strategy:

- Differentiated pricing in 3-10 regional tiers (vs. one global price)
- Local currency display + billing where it makes sense
- Tax handled correctly per region (VAT, GST, local sales tax)
- Pricing page detects user's region (with manual override)
- Anti-arbitrage controls (don't let US customers buy Brazil pricing)
- International ARR grows 30-50% faster post-implementation
- Unit economics still defensible (not racing to bottom)
- Compliance per region (consumer protection laws; auto-renewal rules)
- 18-30 months from "consider international pricing" to "fully implemented"

This pairs with [Pricing Strategy](pricing-strategy.md), [Pricing Migration & Repackaging](pricing-migration-repackaging.md), [Pricing Packaging Tier Design](pricing-packaging-tier-design.md), [Vertical SaaS Expansion](vertical-saas-expansion.md), [Brand Refresh & Rebrand](brand-refresh-rebrand.md), [Multi-Product Strategy](multi-product-strategy.md), [Annual Planning OKRs](annual-planning-okrs.md), [International Expansion Playbook (LaunchWeek 3-distribute)](../3-distribute/international-expansion-playbook.md), [Tax Compliance Tools (Reference)](../../VibeReference/content/auth-and-payments/tax-compliance-tools.md), [Stripe (Reference)](../../VibeReference/content/auth-and-payments/stripe.md), [Subscription Billing Providers (Reference)](../../VibeReference/content/auth-and-payments/subscription-billing-providers.md), [Pricing Page (LaunchWeek 4-convert)](../4-convert/pricing-page.md), [Free-to-Paid (LaunchWeek 4-convert)](../4-convert/free-to-paid.md), and [Localization & Translation Tools (Reference)](../../VibeReference/content/marketing-and-seo/localization-translation-tools.md).

## When to Differentiate Pricing Internationally

Don't internationalize pricing if:

**You have <100 international customers.** Sample size too small; differentiation produces complexity without ROI.

**Your TAM is US-only.** If you're selling to US enterprise only, no point.

**International customers are happy + retaining.** If churn isn't price-driven, fix something else.

**You can't operationalize multi-currency / multi-tax.** Don't ship pricing you can't bill correctly.

**Your runway is short.** International pricing is a 6-12 month project; not for survival mode.

Differentiate when:

**1. International customers are 15%+ of pipeline / signups.** Real demand.

**2. International conversion rate is significantly below US.** Price-driven friction.

**3. International customers ask for local pricing / currency.** Demand pull.

**4. International ACV is significantly below US.** Price ceiling visible.

**5. Competitors offer regional pricing.** Competitive pressure.

**6. You have $5M+ ARR + ops capacity.** Resources to operationalize.

If 4+ are true, plan international pricing.

## The Pricing Differentiation Framework

```
Three approaches to international pricing:

APPROACH A: SINGLE GLOBAL PRICING (the default)
- One price; one currency (usually USD)
- Customer pays in USD; banks convert
- Pros: simplest; no fragmentation; lowest ops overhead
- Cons: leaves money on table in high-PPP regions; loses customers in low-PPP regions
- Right for: pre-Series A; <100 international customers

APPROACH B: PURCHASING POWER PARITY (PPP) PRICING
- Differentiated pricing per geography based on PPP / median income
- Common: 30-70% discount in lower-PPP markets
- Examples: GitHub Copilot ($10/mo US, $4/mo Brazil); Stripe regional pricing; Notion (limited)
- Pros: significant unlock for emerging-market growth
- Cons: arbitrage risk; ops complexity; perceived unfairness in some regions
- Right for: Series A+ with proven international demand

APPROACH C: PER-COUNTRY CUSTOMIZED PRICING
- Tailored pricing for major markets (US / EU / UK / India / Brazil / China)
- Local currency + payment methods
- Pros: max optimization
- Cons: maximum complexity; usually only at Series C+
- Right for: $50M+ ARR with international as core market

DEFAULT FOR MOST B2B SaaS:
- Year 1-2: Single global (Approach A)
- Year 2-3: PPP differentiation (Approach B) when international is 15%+
- Year 3+: Per-country (Approach C) only for biggest markets

PPP TIERS (typical 2026 SaaS approach):

Tier 1 (US / Western Europe / UK / Canada / Australia / Japan): 100% (full price)
Tier 2 (Eastern Europe / Brazil / Mexico / Turkey / South Africa): 60-75%
Tier 3 (India / Indonesia / Philippines / Egypt / Vietnam / Pakistan): 35-50%
Tier 4 (Sub-Saharan Africa / lowest-income markets): 20-35%

Don't differentiate within Tier 1; not worth the complexity. Differentiate ACROSS tiers.

Implementation: country-based regional tiers; lookup table.
```

## Currency Handling

```
Currency decisions:

A. PRICE DISPLAY currency
- US: USD ($)
- UK: GBP (£)
- EU: EUR (€)
- Canada: CAD (C$)
- Australia: AUD (A$)
- India: INR (₹)
- Brazil: BRL (R$)

B. BILLING currency
- Charge in customer's local currency where supported
- Or charge in USD; their bank converts
- Local-currency billing reduces friction (no FX surprise)

C. CONVERSION method
- Fixed FX rate (locked at signup; "$50 = €45")
- Floating FX rate (real-time conversion)
- PSP-handled (Stripe handles conversion; you set local-currency price)

D. PRICE FORMATTING
- US: $1,000.00
- EU: €1.000,00 (commas + periods reversed)
- India: ₹1,00,000 (lakhs)
- Match local convention

E. ROUNDING
- US: $99 (psychological pricing)
- EU: €99 (NOT €87.45 from $99 USD conversion)
- Round to local-pretty numbers; don't show converted decimals

Implementation:
- Stripe (or your billing) supports per-currency price tiers
- Set local price (not USD-converted) per region
- Round to local conventions

Anti-pattern:
- Showing "$99 (€87.45 / £75.32)" — feels foreign
- Storing conversion rates from years ago
- Different prices via FX drift week-to-week

Default 2026: local currency display + local currency billing where Stripe / PSP supports.
```

## Anti-Arbitrage Controls

```
Arbitrage risk: US customers find your Brazil pricing via VPN; resellers exploit price differences.

Controls (in order of strictness):

LOOSE (gentle nudge):
- Detect customer's billing-address country
- Auto-set tier based on country
- Allow override (customer claims "I'm in Brazil")
- Honor manual override (most customers won't lie)

MEDIUM (verify on signup):
- Require billing address match country claim
- Verify via credit-card-issuing-country
- Block obvious mismatches (US credit card + claims Brazil)

STRICT (annual verification):
- Annual proof-of-residence verification for low-tier regions
- Tax ID requirements
- VAT / GST validation against local registry

VERY STRICT (enterprise / regulated):
- Local entity required for billing
- W-9 / W-8BEN forms
- Treaty residency verification

Most SaaS use LOOSE to MEDIUM — strict controls cause friction that often costs more than arbitrage saves.

Common arbitrage patterns:
1. Reseller buys at Brazil price; resells to US customers at premium
   - Block: detect IP / payment country mismatch
   - Block: limit accounts per customer
   - Audit: large purchases by individual accounts

2. US customer uses VPN + foreign card to get cheaper price
   - Block: card-issuing-country mismatch
   - Block: known VPN IP detection (BotID; Cloudflare detection)

3. Multi-account creation across geographies
   - Block: phone verification per account
   - Block: workspace-level enforcement

4. Enterprise customer in US uses subsidiary in India to buy at India price
   - Block: legal terms (use restricted to billing country)
   - Allow: enterprise customers negotiate this anyway

Implementation:
- IP geolocation (rough)
- Billing address country (precise)
- Card-issuing country (verifies)
- Tax-ID validation (strictest)

Tradeoff: friction ↑ vs arbitrage ↓.
```

## Tax Handling

```
Each region has different tax rules. Get this wrong = legal liability.

TAX REGIMES:

US: state sales tax (45+ states; varies by state + local)
- Threshold-based ($100K+ sales / 200+ transactions per state typically)
- Use [Stripe Tax / Anrok / Avalara / TaxJar] — see [Tax Compliance Tools (Reference)](../../VibeReference/content/auth-and-payments/tax-compliance-tools.md)

EU: VAT (varies by member state; 17-27%)
- Reverse charge for B2B with VAT ID
- Charged for B2C / no-VAT-ID
- OSS (One-Stop Shop) for B2C across EU
- Mandatory for SaaS

UK: VAT (20%)
- Post-Brexit; separate from EU
- Similar reverse-charge rules

Canada: GST + provincial sales tax
- Federal GST 5%
- Provincial varies (HST in some)
- Threshold-based registration

Australia: GST (10%)
- Threshold-based (A$75K)

India: GST (18% for SaaS)
- Mandatory for B2B
- TDS / TCS withholding

Brazil: ISS / multiple federal + state taxes
- Complex; often requires local entity
- Many SaaS just charge USD without local tax

Japan: Consumption Tax (10%)
- Mandatory for cross-border B2C

Each region:
- Threshold for registration
- Filing frequency
- Local-language invoicing requirements

Tooling:
- Stripe Tax (most popular; auto-handles many regions)
- Anrok (modern; SaaS-focused)
- Avalara (enterprise; comprehensive)
- Quaderno (mid-market)

Implementation:
- Register for tax in regions where you have nexus / threshold
- Use tax tool for calculation + filing
- Display tax at checkout (inclusive vs exclusive per region convention)

Common mistakes:
- Ignoring EU VAT (large liability after years)
- Not collecting tax IDs (B2B reverse charge requires)
- Not registering above thresholds
- Wrong tax rate per region

Default 2026: integrate Stripe Tax or Anrok from day one of international expansion.
```

## Pricing Page Localization

```
Pricing page per region:

A. LOCATION DETECTION
- IP geolocation (rough but fast)
- Manual selector ("Change country")
- Stored preference (logged-in users)

B. CONTENT
- Local currency
- Local pricing
- Local tax display
- Local payment methods (PIX in Brazil; UPI in India)
- Local trust signals (logos of local customers)
- Local-language copy (translated; not auto-machine-translated)

C. PROOF / TRUST
- Local customer logos (highest priority)
- Local testimonials
- Local case studies
- Local awards / press

D. LEGAL / COMPLIANCE
- Local Terms of Service link
- Local Privacy Policy
- Cookie consent per region (GDPR for EU; CCPA for California)

E. PAYMENT METHODS
- US: card; ACH
- EU: card; SEPA; Klarna
- UK: card; BACS
- Brazil: card; Pix; Boleto
- India: card; UPI; Netbanking
- China: WeChat Pay; AliPay (if entering)

Implementation:
- Single pricing page; dynamic content per region
- Or: per-region landing pages (yourapp.com/in / yourapp.com/br) — better SEO
- A/B test per region (sometimes localized doesn't always win)

URL strategy:
- /pricing → auto-detect or default to USD
- /pricing/in → India pricing page
- /pricing/br → Brazil pricing page
- Per-region SEO: optimized for local search terms

Translation:
- High-priority regions: human-translated by native speaker
- Lower-priority: machine + human-edit
- Don't auto-translate without review (brand voice loss)
- Use [Localization & Translation Tools (Reference)](../../VibeReference/content/marketing-and-seo/localization-translation-tools.md): Lokalise, Crowdin, Phrase

Output: pricing page per region; tested + iterated.
```

## Operational + Edge Cases

```
1. Customer relocates (US → India mid-subscription)
- Existing contract: honor at original tier
- Renewal: re-tier based on new location (with notice)
- Be honest about the change

2. Customer has billing address ≠ usage country (international team)
- Use billing address (paying entity)
- Don't penalize multi-region usage

3. Custom enterprise pricing for low-PPP region
- Enterprise contracts negotiate above standard PPP discount
- Document: PPP discount applies to standard tier; enterprise is custom

4. Currency volatility (peso / lira / etc. crashes)
- Annual price review (don't change every quarter)
- Existing customers: lock for renewal cycle
- Adjust new-customer pricing periodically

5. Sanctioned countries (Cuba / Iran / N. Korea / sanctioned regions)
- Block at signup
- Comply with US OFAC + EU sanctions
- Use compliance tool (Stripe Compliance + sanctions lists)

6. Customer claims wrong region for cheaper pricing
- Detect: card country mismatch
- Block; notify customer
- Allow appeal with proof of residence

7. SaaS reseller (legitimate; e.g., partner program)
- Different pricing model (channel discount); not regional pricing
- See [Channel Partner Programs (LaunchWeek 3-distribute)](../3-distribute/channel-partner-programs.md)

8. Comparing US to local-currency price
- Customer math: "Why is mine $99 USD when Indian person pays $35 equivalent?"
- Be transparent: "PPP-adjusted pricing for emerging markets"
- Don't hide; explain

9. Sales (enterprise) vs self-serve (PPP-priced)
- Often: self-serve PPP; sales-led custom (often higher than US PPP, lower than US standard)
- Document policy

10. Sales tax / VAT registration thresholds change
- Annual review; track per region
- Register before exceeding to avoid penalties

11. Customer requests refund cross-currency
- Refund in original currency
- Don't profit from FX shift
- Document policy

12. Multi-currency billing requires accounting handling
- Books in single base currency (usually USD)
- FX gain/loss accounted per period
- Talk to accounting + tax advisor early

For each: code change + UX impact + ops consideration.
```

Output: ops handling.

## Common Failure Modes

```
Failure 1: One-size-fits-all USD pricing
- Pattern: "we'll figure it out later"
- Reality: emerging-market growth stagnant; obvious unfairness
- Fix: differentiate at Series A+ if international is meaningful

Failure 2: Aggressive discount without operationalization
- Pattern: 50% off Brazil; tax not handled; arbitrage rampant
- Reality: legal liability + ops mess
- Fix: full system (currency + tax + anti-arbitrage)

Failure 3: Per-country chaos
- Pattern: 50 countries with custom pricing; no standardization
- Reality: ops can't handle; customers confused
- Fix: tier-based (3-5 PPP tiers max)

Failure 4: Ignoring EU VAT
- Pattern: charging EU customers without VAT
- Reality: years of liability; EU enforcement
- Fix: Stripe Tax / Anrok from day one

Failure 5: Auto-machine-translated pricing pages
- Pattern: Google Translate output for pricing copy
- Reality: looks unprofessional; trust low
- Fix: human translation for high-priority regions

Failure 6: Arbitrage out of control
- Pattern: 30% of "Brazil pricing" customers actually US
- Reality: revenue eroded; customer trust mixed
- Fix: medium-strict controls (card-country verification)

Failure 7: Forgetting to upgrade tiers when economies change
- Pattern: PPP set in 2020; never updated
- Reality: Eastern Europe much wealthier now; under-charging
- Fix: annual PPP review

Failure 8: Currency conversion FX surprise
- Pattern: customer charged €87.45 for "$99" plan
- Reality: feels arbitrary; customer trust hit
- Fix: round to local-pretty numbers; show in local currency natively

Failure 9: Local payment methods missing
- Pattern: India users can't pay (no UPI)
- Reality: 50%+ India self-serve fails
- Fix: integrate local PSP / payment methods

Failure 10: Compliance gaps
- Pattern: Brazil ISS not collected; auto-renewal not GDPR-compliant
- Reality: legal risk
- Fix: regional compliance review per market

Failure 11: Sales pricing collision with self-serve
- Pattern: Sales sells $50K to India enterprise; same product self-serve at PPP-discount
- Reality: sales loses deal; self-serve cannibalized
- Fix: clear policy; tier separation; usage-based gates

Failure 12: Existing customer relocation handling
- Pattern: customer moves Indonesia → US; subscription cost stays low
- Fix: re-tier on next renewal

Failure 13: Showing only USD on US site; only EUR on EU site (no global view)
- Pattern: customer evaluating from EU sees only EUR; can't compare to US standard
- Fix: allow currency switching even on regional pages

Failure 14: Underselling (PPP discount too aggressive)
- Pattern: 80% discount in low-PPP region; unit economics broken
- Fix: PPP-discount caps (typically max 65-75% off)

Failure 15: Currency-arbitrage-resistant friction too high
- Pattern: every signup requires tax-ID + proof-of-residence
- Reality: 80% conversion drop
- Fix: friction proportional to risk; loose for self-serve; strict for enterprise
```

## What Done Looks Like (recap)

A successful international pricing strategy:

- [ ] PPP tier structure (3-5 tiers)
- [ ] Local currency display + billing
- [ ] Tax handling per region (Stripe Tax / Anrok / Avalara)
- [ ] Anti-arbitrage controls (medium strictness)
- [ ] Pricing pages localized for top 5 regions
- [ ] Local payment methods integrated for top regions
- [ ] Compliance per region (GDPR / CCPA / local data laws)
- [ ] Customer relocation policy documented
- [ ] Annual PPP review cadence
- [ ] International ARR growth measurable post-implementation
- [ ] Unit economics defensible (LTV/CAC > 3 in each tier)

## Mistakes to Avoid

- **One-size USD pricing past meaningful international.** Differentiate at $5M+ ARR with real international demand.
- **Aggressive PPP discount without operations.** Tax + arbitrage controls + payment methods needed.
- **Ignoring EU VAT.** Years of liability await.
- **Auto-machine-translated content.** Brand voice damage.
- **Per-country chaos.** 3-5 PPP tiers max.
- **Currency FX surprise.** Round to local-pretty numbers.
- **Skipping local payment methods.** Conversion crash in markets like India / Brazil.
- **Underselling (too aggressive PPP).** Cap at 65-75% max discount.
- **Skipping anti-arbitrage controls entirely.** US customers find Brazil pricing via VPN.
- **Strict controls everywhere.** Friction kills conversion; match strictness to risk.
- **No customer-relocation policy.** Existing customers move; what then?
- **Forgetting PPP refresh.** Economies change; review annually.
- **Implementing without compliance / tax tool.** Mid-market liabilities.
- **Localized pages without local case studies.** Trust signals matter regionally.
- **Rolling out without sales / CS alignment.** Sales sells different prices than self-serve.

## See Also

- [Pricing Strategy](pricing-strategy.md) — depended-upon
- [Pricing Migration & Repackaging](pricing-migration-repackaging.md) — sister discipline
- [Pricing Packaging Tier Design](pricing-packaging-tier-design.md) — depended-upon
- [Multi-Product Strategy](multi-product-strategy.md) — adjacent
- [Vertical SaaS Expansion](vertical-saas-expansion.md) — adjacent (segment vs geography)
- [Brand Refresh & Rebrand](brand-refresh-rebrand.md) — adjacent
- [Annual Planning OKRs](annual-planning-okrs.md) — depended-upon
- [International Expansion Playbook (LaunchWeek 3-distribute)](../3-distribute/international-expansion-playbook.md) — broader expansion strategy
- [Pricing Page (LaunchWeek 4-convert)](../4-convert/pricing-page.md) — conversion surface
- [Free-to-Paid (LaunchWeek 4-convert)](../4-convert/free-to-paid.md) — adjacent
- [Pricing Experiments (LaunchWeek 4-convert)](../4-convert/pricing-experiments.md) — adjacent
- [Annual Contract Negotiation (LaunchWeek 4-convert)](../4-convert/annual-contract-negotiation.md) — adjacent
- [Tax Compliance Tools (Reference)](../../VibeReference/content/auth-and-payments/tax-compliance-tools.md) — tooling
- [Subscription Billing Providers (Reference)](../../VibeReference/content/auth-and-payments/subscription-billing-providers.md) — tooling
- [Stripe (Reference)](../../VibeReference/content/auth-and-payments/stripe.md) — depended-upon
- [Stripe Customer Portal (Reference)](../../VibeReference/content/auth-and-payments/stripe-customer-portal.md) — adjacent
- [Stripe Usage-Based Billing (Reference)](../../VibeReference/content/auth-and-payments/stripe-usage-based-billing.md) — adjacent
- [Localization & Translation Tools (Reference)](../../VibeReference/content/marketing-and-seo/localization-translation-tools.md) — pages localization
- [Payment Providers (Reference)](../../VibeReference/content/auth-and-payments/payment-providers.md) — local payment methods
- [Internationalization (VibeWeek)](../../VibeWeek/6-grow/internationalization-chat.md) — implementation
- [Currency / FX Handling (VibeWeek)](../../VibeWeek/6-grow/currency-fx-handling-chat.md) — implementation
- [Tax / VAT Handling (VibeWeek)](../../VibeWeek/6-grow/tax-vat-handling-chat.md) — implementation
