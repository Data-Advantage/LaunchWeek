[Back to Day 1: Position](README.md)

# Market Sizing for Indie SaaS Founders: TAM, SAM, SOM Without Playing Pretend

Most founders meet "what's your TAM?" the same way: they Google "[my industry] market size 2026," paste the biggest number they find, multiply by 1% ("we just need 1% to be huge"), and move on. The slide is a placeholder. Investors know it's a placeholder. Nobody's actually wiser. The exercise becomes a hoop to jump through, not a tool that informs decisions.

Done well, market sizing is one of the most useful clarity exercises a founder can run. It forces you to define your buyer with enough precision that you could go talk to one tomorrow. It tells you whether the business you're building can plausibly hit your goal — VC-scale, $10M-of-ARR-and-stay-indie, or something in between. And it forces you to be honest about whether your current ICP is the one that gets you there, or whether you're building for the wrong segment.

This guide is the playbook for sizing the market of an indie SaaS or B2B startup in 2026 — bottom-up, with sources, with humility, and with honest conclusions about what the math means for your strategy.

## What Done Looks Like

By end of the exercise:

- A defensible TAM, SAM, and SOM with named sources and stated assumptions
- An ICP precise enough to enumerate target customers (not "B2B SaaS" — specific)
- An honest answer to: "Is the SOM big enough for the kind of business I want to build?"
- A pitch-deck slide that won't get laughed out of the room
- A list of 3–5 ICP variations to test if the primary SOM is too small

This pairs with [Ideal Customer Profile](ideal-customer-profile.md) (TAM math is downstream of ICP precision), [Pitch Deck](pitch-deck.md) (the deck slide is the most-visible artifact), [Pricing Strategy](pricing-strategy.md) (TAM × pricing = ceiling estimate), [Competitive Positioning](competitive-positioning.md) (your SOM is the segment where you win), and [Self-Serve vs Sales-Led](../4-convert/self-serve-vs-sales-led.md) (the motion changes the addressable math).

## Define the Three Numbers — Honestly

The trio is widely misunderstood. Most decks confuse them. Get the definitions right first.

```
Help me define TAM, SAM, and SOM for [my product].

The standard definitions:

**TAM (Total Addressable Market)**
- The total revenue opportunity if you had 100% of every possible buyer in your category
- Think: "If everyone who could buy this category did, and they all bought from someone, the total market is $X."
- Useful as a sanity check on whether the category is big enough to support a serious company
- NOT useful as a target you're "going after"

**SAM (Serviceable Addressable Market)**
- The portion of TAM you could reasonably serve given your product, geography, language, and constraints
- Think: "Of TAM, what slice could I actually sell to?"
- Filters: geography (US/EU only?), language, segment (SMB vs enterprise), regulatory limits, integration requirements
- This is the more useful number for strategy

**SOM (Serviceable Obtainable Market)**
- The portion of SAM you can realistically capture in 3-5 years
- Think: "Given competitors, my GTM motion, my team size, my content reach, what's plausible?"
- This is the number that actually shapes your business
- Investors care about this; bootstrapped founders should too

**The relationship**:
- TAM > SAM > SOM
- TAM is rarely <1% of category; SAM is usually 1-30% of TAM; SOM is usually 1-10% of SAM
- A SOM larger than 10% of SAM is suspect; either your SAM is too narrow or you''re overestimating capture

**Common mistakes**:
- Quoting TAM as the addressable opportunity ("$80B market") — investors mentally divide by 100x
- Treating "1% of TAM" as a reasonable assumption — it''s a meaningless heuristic
- Skipping SAM entirely — without it, the TAM-to-SOM jump has no logic
- Sizing your SOM by "what we''re shooting for" rather than ground-up evidence

For my product, define each:

1. **TAM definition**: what category am I in? What''s the total spend on this category globally?
2. **SAM definition**: what segments can my product realistically serve in my first 3-5 years?
3. **SOM definition**: what penetration of SAM is plausible given my GTM and competitive position?

Output:
1. The three definitions, written as full paragraphs
2. The constraints that filter TAM → SAM
3. The factors that constrain SAM → SOM
4. The single sentence that captures my market opportunity (e.g., "$2B SAM with $40M SOM achievable in 5 years through SMB self-serve")
```

The biggest unforced error: **using TAM as the headline number.** "$80B market" tells the reader nothing about whether you can build a $50M ARR business; SOM does. Lead with SOM in any conversation that matters.

## Build It Bottom-Up, Not Top-Down

Top-down sizing ("the market is $X; we'll capture 1%") is the version everyone knows is hand-wavy. Bottom-up sizing — multiply realistic numbers — is defensible.

```
Help me build a bottom-up market size for [my product].

The bottom-up formula:

`SAM = number of potential buyers in the segment × annual revenue per buyer`

For each input, source the number; cite the source.

**Step 1: Define the buyer precisely**

Don''t say "B2B SaaS." Say:
- "US-based B2B SaaS companies between 10 and 500 employees"
- "Marketing teams at e-commerce brands doing $1M–$50M in revenue"
- "Engineering managers at Series A-D startups in North America and EU"

The more precise the buyer, the more defensible the count.

**Step 2: Count the buyers**

Use real sources:
- **US Census Bureau / Bureau of Labor Statistics** for company counts by size and industry
- **Crunchbase / PitchBook** for venture-funded startups
- **LinkedIn Sales Navigator** for role-based counts (e.g., "VP of Engineering at SaaS, 10-200 employees, US")
- **Industry reports** (Statista, IBISWorld, Gartner) — pricey but defensible
- **Company directories** (BuiltWith, G2, Apollo) for tech-stack-based segmentation

For a TypeScript example: "US-based B2B SaaS companies, 10-500 employees" might come out to ~15,000 companies based on Crunchbase + LinkedIn cross-reference.

**Step 3: Estimate revenue per buyer**

Anchor to:
- Comparable products' published pricing (per [Pricing Strategy](pricing-strategy.md))
- Your own pricing, if you''ve set it
- Industry benchmarks for ACV at your segment

For SMB SaaS, $5K-$30K ACV is typical. For mid-market, $20K-$200K. For enterprise, $50K-$1M+. Your number should land in a defensible band.

**Step 4: Multiply**

`SAM = 15,000 buyers × $20K ACV = $300M`

**Step 5: Sanity-check with a top-down number**

Find a published market-size estimate for your category. If your bottom-up number is wildly different (>5x off), something''s wrong with your definitions or sources.

**Step 6: Apply the SOM filter**

`SOM = SAM × realistic 5-year capture rate`

Realistic capture rates:
- Bootstrapped indie SaaS: 0.5%-2% of SAM in 5 years
- Venture-backed startup with strong execution: 2%-10% of SAM in 5-7 years
- Category leader with network effects: 10%-30% of SAM in 7-10 years

If your model assumes >10% SOM capture, you need an explanation that''s more compelling than "we''re going to crush it."

**Output**:
1. The buyer-count calculation with sources
2. The ACV range with sources
3. The bottom-up SAM number
4. The sanity-check vs top-down
5. The SOM with stated capture-rate assumption
```

The biggest single improvement: **citing sources for every number.** "I read this in a Crunchbase report" beats "I think there are about 50,000 companies" by an order of magnitude. Investors don't expect you to be McKinsey, but they do expect you to be honest about what you know vs guessed.

## The Indie-Specific Variations

VC-scale market sizing assumes you need a $1B+ TAM. Indie SaaS doesn't need that. Run the math for your actual goal.

```
Help me run the indie-specific market math.

**Variation 1: $10M ARR, stay indie**

If your goal is to reach $10M ARR and stay independent (no VC, profitable, durable):
- You need $10M ÷ ACV = number of customers
- Examples:
  - $1K ACV → 10,000 customers
  - $5K ACV → 2,000 customers
  - $20K ACV → 500 customers
  - $100K ACV → 100 customers
- Compare to your SAM: is the customer count <5% of SAM?
- If yes: the math is plausible
- If no: either your ACV is too low for the segment, or your SAM is too small, or your target needs adjustment

**Variation 2: $1M ARR, profitable solopreneur**

If your goal is $1M ARR as a solo founder or small team:
- You need 1,000 customers × $1K ACV, or 100 customers × $10K ACV, or 10 customers × $100K ACV
- The customer count must be small enough that one founder can serve it (with automation)
- The math: <500 customers usually requires sales-led; >2,000 requires self-serve
- SOM doesn''t need to be huge — it needs to be reachable

**Variation 3: VC-scale ($100M+ ARR, exit potential)**

If you''re raising VC and pitching exit potential:
- Investors want to see plausible $1B+ revenue trajectory
- That means SOM × 10x = TAM-ish
- If your SOM is $50M, the deck needs a credible path to expansion (adjacent markets, upsell to enterprise, geographic expansion)
- A "$10M SOM with $100M expansion potential" pitch is harder than a "$200M SOM directly" pitch

**Variation 4: Niche / vertical SaaS**

If your product serves a specific industry or vertical:
- TAM may be small in absolute terms but high penetration is achievable
- Capture rates 20%-50% of SAM are plausible if you''re category-defining
- ACV often higher than horizontal SaaS due to specialization premium
- Investors evaluate this differently — they want category dominance, not %-of-large-market

**Run the math for the specific business model you''re building**:
1. State your goal in absolute revenue terms ($1M / $10M / $100M ARR)
2. Compute customer counts at different ACVs
3. Compare to SOM
4. Identify the gap, if any

**Output**:
- The model that fits your goal
- The plausible path to your number
- The assumption changes needed if the math doesn''t work
```

The most useful single output of this exercise: **discovering that your current ICP can't get you to your goal.** A founder who realizes their $200/mo prosumer SaaS would need 50,000 customers to hit $10M ARR may decide to either move upmarket or stay realistic about the goal. That clarity is worth the afternoon spent.

## When the Math Says No

If the bottom-up math doesn't support your business goal, you have four honest options.

```
Decide which option fits if the math doesn''t work.

**Option 1: Move upmarket**
- Same product, higher-tier customers
- Requires: enterprise sales motion, security/compliance posture, custom contracts
- Adds: deal cycle length, sales hiring needs, longer time-to-revenue
- Pick when: your product genuinely serves enterprise needs

**Option 2: Move downmarket / horizontal**
- Broader ICP, lower ACV, higher volume
- Requires: self-serve onboarding, automated support, content-marketing flywheel
- Adds: support load at scale, churn pressure
- Pick when: the product is simple enough to use without humans

**Option 3: Vertical specialization**
- Narrower ICP, higher ACV, deeper integrations
- Requires: domain expertise, vertical-specific features
- Adds: specialization risk (one vertical declines)
- Pick when: there''s a vertical where you have insight or distribution

**Option 4: Adjust the goal**
- Maybe $10M ARR isn''t the right target for this market
- Maybe a $2M ARR profitable indie business is the right size
- This is the bravest option; it requires admitting that your initial vision was bigger than the market supports

**Don''t**:
- Inflate the numbers to justify the original goal
- Add adjacent markets to TAM without serving them today ("expansion potential" with no plan)
- Use 1% capture as the lever — that''s the giveaway tell

**Run the decision**:
1. Which option fits the actual market?
2. What does the product / GTM / team need to look like for that option?
3. What changes to the current plan?

**Output**:
- The chosen path
- The 90-day actions to validate the new direction
- The honest acknowledgment of what''s being given up
```

The bravest founder move: **changing the plan when the math says so.** Most founders fight the data because admitting "the market is smaller than I thought" feels like admitting failure. It''s not — it''s the early correction that prevents 18 months of building toward an unreachable goal.

## How to Present Market Sizing

If the slide is going in a deck, write it for the audience. Different readers want different cuts.

```
Help me write the market-sizing slide for my pitch deck (per [Pitch Deck](pitch-deck.md)).

**For VC pitch (Seed → Series B)**:

Slide structure:
1. Headline: "$X SOM achievable through [primary motion]"
2. Three boxes: TAM ($X), SAM ($Y), SOM ($Z), with one-line justification each
3. Sources cited inline (small font; investors will check)
4. The bottom-up math summarized in one diagram (buyers × ACV = SAM)
5. The 5-year capture rate assumption explicit
6. The expansion story below: "SOM grows to $X by adding [adjacent market] in years 3-5"

**For angel / pre-seed**:

- Less rigor expected; more vibes
- One number that anchors the conversation: "We''re going after $X ICP with $Y revenue per buyer"
- Show you''ve thought about it; don''t overdo it

**For internal strategy**:

- Skip TAM entirely; focus on SAM and SOM
- The SAM-to-SOM gap is where strategy lives
- "We''re ignoring the bottom 30% of SAM because they don''t self-serve well"

**For bootstrapped founder reflection**:

- Skip the slide entirely
- Run the math privately
- Adjust strategy based on the answer

**Anti-patterns**:

- Three concentric circles with vibes-based numbers (the classic bad market-sizing slide)
- "$80B market" headline with no SOM (investor red flag)
- "1% capture = $X" as the SOM math (lazy)
- Citing one source from 2018 for a 2026 deck (out of date)

**Output**:
1. The slide layout
2. The three sentences that justify TAM, SAM, SOM
3. The sources block
4. The expansion-story bullet (if pitching VCs)
```

The single best deck-presentation pattern: **lead with SOM, justify it bottom-up, show the expansion path to bigger.** "$50M SOM directly addressable, $500M with international expansion in years 3-5" beats "$80B TAM with 0.06% capture target."

## Update Quarterly

Market sizes shift. The buyer count changes; ACV benchmarks evolve; competitors take share. Keep the numbers fresh.

```
Set up the quarterly market-sizing review.

**What to refresh**:
- Buyer-count sources (Crunchbase, LinkedIn, industry reports may have updated counts)
- ACV benchmarks (your own pricing changes; competitor pricing changes)
- Capture-rate assumptions (your actual penetration after 1-2 years of selling)
- SAM definition (have you expanded into new geographies, segments, or use cases?)

**What to compare**:
- Last quarter''s SOM vs this quarter''s
- Plan SOM (the deck) vs realized customer count (your CRM per [CRM Providers](https://www.vibereference.com/marketing-and-seo/crm-providers))
- ACV plan vs ACV realized

**What it tells you**:
- If realized SOM tracks plan: the model is calibrated
- If realized lags plan: either GTM is broken or SAM was overestimated
- If realized exceeds plan: SAM was underestimated; SOM has more room

**Action triggers**:
- 2+ quarters of plan-miss → re-run the model from scratch
- 2+ quarters of plan-beat → consider raising ambition
- Major competitor exit or entrance → re-run capture-rate assumption

**Output**:
- The refreshed numbers
- The narrative explanation of changes
- The strategy implications (if any)
```

---

## What "Done" Looks Like

A serious market-sizing exercise in 2026 produces:

- A precise, named buyer (not "B2B SaaS" — specific segment, role, geography, size)
- A bottom-up SAM number with at least 2 sources cited
- A SOM with a stated 3-5 year capture-rate assumption between 0.5% and 30% of SAM
- A sanity check vs top-down published market estimates
- A clear answer to "can this market support my goal?" — yes, no, or "with these adjustments"
- A pitch-deck slide that leads with SOM, not TAM
- Quarterly review baked into your strategy rhythm

The hidden cost of sloppy market sizing isn't the deck slide getting a chuckle — it's **building toward the wrong goal for 18 months.** A founder who realizes early that their ICP can't get them to $10M ARR redirects faster than one who learns it through 24 months of disappointing growth. The exercise is cheap; the misalignment it prevents is expensive.

## See Also

- [Ideal Customer Profile](ideal-customer-profile.md) — the precision of your ICP determines the precision of your TAM
- [Pitch Deck](pitch-deck.md) — the most-visible artifact this exercise produces
- [Pricing Strategy](pricing-strategy.md) — ACV is the multiplier in the SAM math
- [Competitive Positioning](competitive-positioning.md) — your SOM is the segment where you win
- [Self-Serve vs Sales-Led](../4-convert/self-serve-vs-sales-led.md) — motion changes which slice of SAM is reachable
- [Customer Discovery Interviews](customer-discovery-interviews.md) — talking to buyers validates the SAM definition
- [Value Proposition](value-proposition.md) — sharper value prop expands SOM
- [Demand Validation](https://www.vibereference.com/marketing-and-seo/demand-validation) — search-volume sizing complements bottom-up
- [CRM Providers](https://www.vibereference.com/marketing-and-seo/crm-providers) — your CRM is where realized SOM gets measured

[Back to Day 1: Position](README.md)
