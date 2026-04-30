[Back to Day 1: Position](README.md)

# Sub-Product & Feature Naming: Names That Don't Embarrass You at $10M ARR

Most founders agonize over the company name and then make sub-product / feature naming decisions on a 30-minute Slack thread. The result is what you'd expect: a homepage with "Acme AI Agent for Sales" next to "Acme Engagement Platform" next to "Acme Connect" — three products, three styles, no architecture. A year in, the sales rep can't explain how they relate. Two years in, you rename one of them at significant migration cost.

A working sub-product / feature naming system answers: which features get names at all, what naming style fits your brand architecture, how do feature names hang together as the product grows, and how do you keep names from collecting baggage as functionality changes. Done well, names compound — buyers can navigate a multi-product offering without confusion. Done badly, every renaming becomes a documentation/migration/legal project.

This guide is the playbook for naming features and sub-products deliberately — when to name something at all, the architecture choices, the rules that prevent regret, and the migration playbook for fixing names you already shipped. Companion to [Product Naming](product-naming.md) (which covers the company / primary product name).

## What Done Looks Like

By end of the exercise:

- A documented naming convention (when features get names; what style)
- A name architecture (descriptive vs branded; mono vs multi)
- 3-5 feature/sub-product names following the convention
- A namespace document (no duplicates; no clashes)
- Internal alignment (sales / docs / marketing use the same names)
- Quarterly review baked in
- A migration plan for any existing badly-named features

This pairs with [Product Naming](product-naming.md) (company name foundation), [Brand Identity](brand-identity.md) (visual context), [Brand Voice](brand-voice.md) (naming voice), [Pricing Packaging & Tier Design](pricing-packaging-tier-design.md) (tier names), [Tagline & One-Liner](tagline-and-one-liner.md) (naming tone consistency), [Mission & Vision Statement](mission-vision-statement.md) (naming alignment), [Competitive Positioning](competitive-positioning.md) (naming reflects positioning), and [Founder Story](founder-story.md) (naming origin sometimes).

## Decide Whether to Name Something at All

Naming proliferation is the #1 problem. Most "features" should NOT have proper names.

```
Help me decide whether to name something.

The hierarchy:

**Doesn't get a name (95% of features)**:

- Just call it what it does: "comments", "exports", "templates", "search"
- Generic English nouns
- Discoverable by what they ARE

Examples that DON''T need branded names:
- The comments feature
- File uploads
- Date filtering
- Email notifications

These are functionality. Naming them creates branding overhead with zero benefit.

**Gets a descriptive label (4%)**:

- Multi-word descriptive names that group related functionality
- "Activity Feed", "Smart Filters", "Saved Views"
- Capitalized; described; not branded

These are useful when functionality is non-obvious or grouped.

**Gets a branded name (1%)**:

- Names that customers see prominently
- Marketing-supported sub-products
- Significant standalone capability
- Examples: Linear "Insights", Notion "AI", Stripe "Atlas", Slack "Connect"

These are real sub-products with their own positioning.

**The four tests for "should this have a branded name?"**:

1. **Marketing test**: Will marketing want to write campaigns specifically about this?
2. **Pricing test**: Could this be priced separately or be a distinct tier?
3. **Acquisition test**: Could a customer buy this without buying anything else?
4. **Roadmap test**: Will this be a separate area of investment over years?

If 3+ "yes": branded name justified.
If 0-2 "yes": don''t brand it.

**The "feature creep" trap**:

Founders sometimes rename ordinary features to make the product sound bigger:
- "Comments" → "Acme Conversations"
- "File uploads" → "Acme Asset Hub"
- "Search" → "Acme Discover"

This is bad. Customers see through it. Buyers think the product is more bloated than it is. Internal team can''t talk simply.

Reserve branded names for capabilities that genuinely deserve them.

**The "fake sub-product" trap**:

Sometimes founders treat ordinary functionality as if it''s a sub-product to justify higher pricing:
- "Acme Pro includes Acme Insights" (where Insights is just a dashboard tab)
- Customers feel manipulated

Pricing should reflect real value, not fake brand-multiplication.

For my product:
- List of all features
- "Should this have a name?" assessment
- The naming budget (target: <5 branded names total)

Output:
1. The naming-eligibility audit
2. The branded vs descriptive vs generic split
3. The renaming list (names to remove)
```

The biggest unforced error: **branding everything.** A product with 12 branded sub-product names looks unfocused; the company''s positioning blurs; sales reps can''t explain how it all fits. The fix: ruthless minimalism. Most things stay generic English; only standout capabilities get names.

## Naming Architecture: Mono vs Multi vs Hybrid

How sub-products relate to the parent brand is a strategic choice. Pick deliberately.

```
Help me pick the naming architecture.

The three architectures:

**Architecture A: Branded house (mono-brand)**

- Everything carries the parent brand
- Sub-products: "[Brand] [Function]"
- Examples:
  - Apple: Apple TV, Apple Music, Apple Watch
  - Notion: Notion AI, Notion Calendar, Notion Mail
  - Stripe: Stripe Atlas, Stripe Climate, Stripe Tax

Pros:
- Simple; consistent
- Brand equity compounds across products
- Marketing efficient

Cons:
- All sub-products tied to parent reputation (good or bad)
- Less differentiation
- Naming gets repetitive

**Architecture B: House of brands (multi-brand)**

- Each sub-product has its own distinct brand
- Parent name might not appear
- Examples:
  - Procter & Gamble: Tide, Pampers, Crest (no "P&G" branding)
  - Unilever: Dove, Hellmann''s, Ben & Jerry''s

Pros:
- Each brand can target different audience
- Failure of one doesn''t hurt others
- Acquisitions can keep their identity

Cons:
- High marketing cost (each brand from scratch)
- No equity-sharing
- Confusing internal taxonomy

**Architecture C: Hybrid (endorsed brand)**

- Parent brand + distinct sub-product name
- Format: "[Sub-Product] from [Parent]" or "[Sub-Product] by [Parent]"
- Examples:
  - Microsoft: GitHub (acquired; kept name + "by Microsoft")
  - Atlassian: Jira (distinct; "Jira by Atlassian" sometimes)
  - Linear: Linear Insights (mostly mono; some hybrid)

Pros:
- Sub-product can stand alone
- Parent brand still endorses
- Flexible

Cons:
- More complex
- Inconsistency risk

**The 90% answer for indie SaaS**:

Mono-brand (Architecture A).

Reasons:
- Indie SaaS doesn''t have brand-portfolio bandwidth
- Customers expect consistency
- Marketing cost matters

Multi-brand makes sense only at:
- Acquisition (kept brand identity)
- Distinct ICP (hard to share branding)
- Massive scale ($100M+ ARR)

Hybrid makes sense for:
- Acquired products
- Sub-products with distinct positioning

**The "Apple model" rule**:

Apple uses "[Apple] [Product]" — but the products carry Apple''s style. The "Apple" prefix isn''t cosmetic; it signals "from Apple, made the Apple way."

For your sub-products: only carry your parent name if the product genuinely reflects the parent brand''s style.

**The "what feels right" test**:

Read aloud:
- "Notion Mail"
- "Notion Calendar"
- "Notion AI"

Does it feel coherent? Yes — Notion''s brand makes "Notion-style email" make sense.

Now: "Notion BankAccount" — feels weird. The financial-services brand doesn''t fit.

Pick architecture that lets all current + roadmap sub-products feel coherent.

For my product:
- Current sub-product structure
- Architecture choice
- Roadmap fit

Output:
1. The architecture pick
2. The naming format ("[Brand] X" / "X by [Brand]" / etc.)
3. The exceptions allowed
```

The biggest architecture mistake: **mixing styles within one company.** "Acme Connect" + "Insights for Acme" + "Acme.AI" + "Acme HelpDesk" — five products, five styles. Customers can''t tell what''s related. The fix: pick one architecture; apply it consistently; document it; require all new sub-products to follow.

## Descriptive vs Suggestive vs Abstract Names

For each name you DO create, pick the right register.

```
Help me pick the right name register.

The three name types:

**1. Descriptive (literal)**

- Says exactly what it does
- "Reports", "Calendar", "Documents", "Workflows"
- Generic English nouns

Pros:
- SEO-friendly (people search what they want)
- Self-explanatory
- Discoverable
- Works in any context

Cons:
- Hard to trademark
- Less memorable
- Generic

Use for: most internal features; basic functionality

**2. Suggestive (metaphor / association)**

- Hints at the function via metaphor
- "Atlas" (Stripe — guides incorporation)
- "Lighthouse" (Google — guides web quality)
- "Studio" (many — implies creation space)
- "Pulse" (vital signs / monitoring)

Pros:
- Memorable
- Brandable
- Trademarkable
- Implies meaning without stating

Cons:
- Requires context to understand
- Some metaphors don''t translate
- Can feel forced if poorly chosen

Use for: standout sub-products; capabilities with brand ambition

**3. Abstract (made-up word)**

- No literal connection to function
- "Notion", "Asana", "Kibo"
- Coined / invented words

Pros:
- Maximum trademarkability
- No baggage
- Can mean exactly what you make it mean

Cons:
- Heavy marketing investment to teach meaning
- Hard for first-time customers
- Risk of being confusing forever

Use for: company / primary product names; rarely sub-products

**The "register matches importance" rule**:

For a feature: descriptive ("reports", "filters", "templates")
For a meaningful capability: descriptive or light suggestive ("Activity Feed", "Smart Categories")
For a real sub-product: suggestive ("Stripe Atlas", "Notion AI", "Slack Connect")
For the company: abstract or suggestive (see [product-naming](product-naming.md))

**The "two-word rule"**:

Most sub-product names should be:
- 1 word (Atlas, Connect, Insights)
- Or 2 words (Activity Feed, Customer Hub)
- Rarely 3+ words

Long names rarely compound; short ones do.

**Anti-patterns**:

- Acronyms (CMS / ERP / RPM in product names = enterprise vibes)
- Numbers (Atlas2.0, Connect3 — feels stale)
- Symbols (Acme+, Acme*, Acme.io — confusing in URLs)
- Compound-tech-words (CloudFlow, FlexHub — stale 2010 vibes)

**The "test names with customers" rule**:

Before committing:
- Show 3-5 candidate names to 5 customers
- Ask: "What do you think this product does?"
- If their answers vary widely: name is too abstract
- If consistent: name works

For my naming:
- Register choice per name
- Anti-pattern check
- Customer-test plan

Output:
1. The naming register guidelines
2. The candidate names per use case
3. The customer-test results
```

The biggest register mistake: **picking abstract names for features.** "Acme Glide" for the search feature — customers Google "Acme search" and find nothing. The fix: descriptive names default; suggestive only for standout. Save abstract for the company name.

## The Namespace Problem: Avoiding Conflicts

Names live in a namespace. Conflicts kill SEO, marketing, and trademark.

```
Help me check the naming namespace.

The five conflicts to avoid:

**1. Internal duplication**

- Two features named the same thing in different contexts
- Sales rep refers to "Reports"; product team means dashboard reports; data team means exports

Audit:
- List every customer-facing name
- Flag duplicates
- Resolve to canonical naming

**2. Generic competitor conflicts**

- Your "Insights" vs competitor''s "Insights" — confusing in comparison
- Acceptable for descriptive names (everyone has "Reports")
- Not OK for branded names (if competitor owns "Atlas", don''t pick Atlas)

**3. Trademark conflicts**

- Existing trademarks in your category
- USPTO search; international search if you sell globally
- "Acme Hub" might be trademarked by another B2B company

For branded names:
- USPTO database search
- Domain availability (.com primarily; .ai, .io secondary)
- Social handles (Twitter/X, Instagram, LinkedIn)
- Top-30 Google results check

**4. Domain / URL conflicts**

- Sub-product needs a URL: yourcompany.com/insights or insights.yourcompany.com or insights.io
- Domain registration
- SEO: avoid keyword cannibalization (own /insights and /reports differently)

**5. Internal terminology drift**

- Sales calls it "the Hub"
- Product calls it "Workspace"
- Engineering calls it "Project View"
- Customers don''t know which name is real

The fix: single source of truth (often a glossary doc) — sales / docs / product / engineering all use one canonical name.

**The trademark search checklist**:

Before committing to a branded sub-product name:

- [ ] USPTO TESS search (US trademarks)
- [ ] EUIPO search (EU)
- [ ] WIPO Madrid Protocol (international)
- [ ] Domain availability (.com + .ai + .io minimum)
- [ ] Social handle availability
- [ ] Top 50 Google results check (any conflicting product / company?)
- [ ] App Store / Play Store search
- [ ] GitHub project name (if open-source)
- [ ] Common-law check (active products in your category, even if not trademarked)

If 1-2 problems: maybe workable
If 3+ problems: pick a different name

**The "single-canonical-name" doc**:

Maintain a central glossary:

| Canonical name | Synonyms (avoid) | Description | Owner |
|---|---|---|---|
| Activity Feed | "Updates", "What''s New" | Real-time team activity stream | Product |
| Reports | "Analytics", "Dashboards" | Built-in reporting | Product |
| Acme Atlas | "Acme Setup", "Onboarding Tool" | Company-formation product | Product |

Update when names change. Reference in sales calls / docs / website.

For my namespace:
- Internal duplication audit
- Trademark check for branded names
- Glossary creation

Output:
1. The namespace audit
2. The trademark-check results per branded name
3. The canonical-glossary doc
```

The biggest namespace mistake: **launching a branded name without a trademark check.** Six months in, a cease-and-desist arrives. You rebrand. You lose SEO + customer awareness. The fix: 30 minutes of trademark search before committing. Cheap insurance.

## Tier and Plan Naming

Pricing-tier naming is its own discipline. Get it right.

```
Help me name pricing tiers.

The standard patterns:

**Pattern A: Persona-based (most clear)**

- Free / Starter / Pro / Business / Enterprise
- Each name implies a user type

Pros: clear; standard; nobody confused
Cons: generic

**Pattern B: Size-based**

- Solo / Team / Company / Enterprise
- Implies team scale

Pros: scales with customer growth
Cons: some are awkward ("Team" is small but not "Solo")

**Pattern C: Branded tiers**

- Spark / Flame / Inferno (HubSpot tried similar)
- Bronze / Silver / Gold / Platinum (cliche)
- Light / Plus / Premium

Pros: differentiation
Cons: requires customer education

**Pattern D: Outcome-based**

- "Up to 100 users" plan
- "$5K / $25K / $50K" tiers
- Numeric / volume-based

Pros: clear value
Cons: less brand-friendly

**The 80% rule**:

For most indie SaaS in 2026: persona-based (Free / Pro / Business / Enterprise).

Reason: customers immediately know which tier they''re in. Decision-paralysis minimized.

Skip:
- Branded creative tier names (cause confusion)
- Numeric (hard to remember which is which)
- Made-up words (Notion uses "Plus" / "Business" / "Enterprise" — sensible)

**The "where I land" test**:

A new visitor reads the pricing page. Within 10 seconds:
- Can they identify which tier they should consider?
- Is there ambiguity (am I "Pro" or "Business"?)?

Persona-based names answer this fastest.

**The "anchor pricing" psychology**:

Naming the highest tier "Enterprise" anchors the others as "below enterprise". Naming the lowest "Free" anchors above as "premium".

This works in your favor when the goal is to push customers to mid-tier ("Business" vs "Pro" — Business sounds more capable for a real company).

**Don''t**:

- Rename tiers frequently (customer confusion compounds)
- Use industry-specific tier names ("Agency Plan", "SaaS Plan") — limits expansion
- Use temporary names that signal product-market-fit-ness ("Beta Plan")

For my pricing:
- Tier name audit
- The 80% pattern check
- The "where I land" test

Output:
1. The tier names
2. The clarity test results
3. The "no rename for 12 months" commitment
```

The biggest tier-naming mistake: **creative names that confuse buyers.** "Spark / Flame / Inferno" sounds branded but customers can''t tell which is bigger. The fix: persona-based names; trade brand-personality for clarity. Per [pricing-packaging-tier-design](pricing-packaging-tier-design.md).

## When and How to Rename

Names you''ve shipped sometimes need to change. Plan for it.

```
Help me handle a rename.

The reasons to rename:

**1. Trademark issue**

- C&D received
- New company in market with similar name
- Must rename quickly

**2. Brand drift**

- Product evolved; name no longer reflects function
- "Acme HelpDesk" is now full CX platform
- Name limits perception

**3. Architecture change**

- Going from house-of-brands to mono-brand (or reverse)
- Forces all sub-products to align

**4. M&A**

- Acquired product needs incorporation
- Or your product is rebranded post-acquisition

**5. Strategic pivot**

- Company / product strategy shifted
- Old name no longer fits

**Don''t rename when**:

- Founder is bored
- New marketing person disagrees with old name
- Investor suggests a "fresh look"
- Periodic brand-refresh urge

Renaming is expensive. Only do it for real reasons.

**The rename project plan**:

**Phase 1: Decision (1-2 weeks)**

- Why renaming
- New name candidates (5-10)
- Trademark / namespace check
- Customer / team feedback
- Final name

**Phase 2: Internal alignment (2 weeks)**

- Glossary update
- Sales / docs / marketing aligned
- Rollout plan
- FAQ for customer questions

**Phase 3: Soft launch (2-4 weeks)**

- New name appears alongside old: "[New Name] (formerly [Old Name])"
- Documentation cross-references
- Internal docs updated

**Phase 4: Hard launch (concurrent or after soft)**

- Public announcement / blog post
- Email customers
- All marketing materials updated
- Social-handle changes
- Domain changes (with redirects)

**Phase 5: Phase-out old name (3-6 months)**

- Old name in cross-references only
- Eventually only "[New Name]" mentions
- Old domain redirects forever

**Phase 6: Eventually retire old name (1-2 years)**

- Some customers will still use old name 2 years later
- That''s fine; don''t fight it; just don''t use old name yourself

**Customer communication**:

Email template:
> "We''ve renamed [Old Name] to [New Name]. Here''s why: [reason]. Nothing else changes — [feature/value/urls]. Questions? [link]."

Honest reasoning > corporate-speak.

**The "URL preservation" rule**:

Old URLs: 301 redirect to new URLs forever. Never delete.

SEO authority transfers via 301; broken links destroy trust.

**Don''t**:

- Delete old name from history (reads as gaslighting)
- Pretend the old name never existed
- Rush the rollout (Customer confusion compounds)

For my product:
- Existing names that should be renamed
- The renaming priority
- The plan per rename

Output:
1. The rename list
2. The plan per rename
3. The "do not rename" list (don''t fix what isn''t broken)
```

The biggest rename mistake: **renaming on vibes.** Founder gets a new marketer; marketer wants to "freshen up the brand"; renames sub-product; SEO craters; customers confused for 6 months. Renames have real costs; only do them for real reasons.

## Avoid Common Pitfalls

Recognizable failure patterns.

```
The naming mistake checklist.

**Mistake 1: Branding everything**
- 12 sub-product names; nobody can keep track
- Fix: 95% generic; 5% branded

**Mistake 2: Mixing architectures**
- Some Apple-style; some standalone-brand; chaos
- Fix: pick one; apply consistently

**Mistake 3: Abstract names for features**
- "Acme Glide" for search → SEO disaster
- Fix: descriptive defaults

**Mistake 4: Trademark collision**
- C&D arrives; rebrand at scale
- Fix: trademark search first

**Mistake 5: Internal terminology drift**
- Sales / product / docs use different names
- Fix: glossary; single source of truth

**Mistake 6: Long compound names**
- "Acme CustomerEngagementHub" - unmemorable
- Fix: 1-2 words

**Mistake 7: Creative tier names**
- Spark / Flame / Inferno
- Fix: persona-based (Pro / Business / Enterprise)

**Mistake 8: Frequent renames**
- Different name every year; customer confusion
- Fix: stable names; rename only on real signal

**Mistake 9: No URL strategy**
- Subdomain vs path vs separate domain decided ad-hoc
- Fix: namespace plan

**Mistake 10: Naming committees**
- 12 people debate; compromise pick; nobody likes it
- Fix: 1-2 deciders; founder veto

**The quality checklist**:

- [ ] Most features unbranded (descriptive English)
- [ ] Architecture chosen (mono / multi / hybrid)
- [ ] Branded names: <5 total
- [ ] Each branded name trademark-checked
- [ ] Namespace doc exists
- [ ] Tier names persona-based
- [ ] No frequent renames in last 12 months
- [ ] URL strategy consistent
- [ ] Single canonical glossary

For my product:
- Audit
- Top 3 fixes

Output:
1. Audit results
2. Top 3 fixes
3. The "v2 naming" plan
```

The single most-common mistake: **naming as fun/creative project rather than strategic decision.** Founders enjoy naming; it''s the cheap part of branding. The result: too many names; inconsistent style; customer confusion. Discipline beats creativity. Most things stay generic; only standout capabilities get names; everything follows architecture; nothing is renamed without reason.

---

## What "Done" Looks Like

A working naming system in 2026 has:

- Clear architecture (mono-brand default for indie SaaS)
- 95% of features unbranded (descriptive English)
- 1-5 branded sub-products with trademark + namespace clear
- Persona-based pricing tiers (Free / Pro / Business / Enterprise)
- Single canonical glossary (sales / docs / product aligned)
- No frequent renames (12+ months stability)
- URL strategy consistent (subdomain / path / TLD)
- Quarterly review

The hidden cost of weak naming: **complexity without substance.** A product with 12 branded sub-product names sounds like a complex enterprise platform; in reality, customers can''t navigate it. The cost shows up as longer sales cycles, more support tickets ("which feature do I have?"), and confused buyer perception. Naming is an architecture decision. Do it once, do it well, don''t change it without reason.

## See Also

- [Product Naming](product-naming.md) — company / primary product naming
- [Brand Identity](brand-identity.md) — visual context for names
- [Brand Voice](brand-voice.md) — naming voice consistency
- [Pricing Packaging & Tier Design](pricing-packaging-tier-design.md) — tier naming
- [Tagline & One-Liner](tagline-and-one-liner.md) — naming tone
- [Mission & Vision Statement](mission-vision-statement.md) — naming alignment with mission
- [Competitive Positioning](competitive-positioning.md) — naming reflects positioning
- [Founder Story](founder-story.md) — naming origin sometimes
- [Value Proposition](value-proposition.md) — names should embody value
- [Pricing Strategy](pricing-strategy.md) — pricing-tier name implications
- [Pricing Page](../4-convert/pricing-page.md) — where tier names display
- [Comparison Pages](../4-convert/comparison-pages.md) — name clashes vs competitors
- [SEO Strategy](../2-content/seo-strategy.md) — naming affects search

[Back to Day 1: Position](README.md)
