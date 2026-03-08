[Back to Day 1: Position](README.md)

# Pricing Strategy for Early-Stage SaaS

Choose your model, set your tiers, and price with confidence — not anxiety.

## Why This Matters

Most early-stage founders underprice out of fear. They're afraid that if they charge too much, no one will sign up. So they charge $9/month, attract customers who expect $9/month quality, create unsustainable unit economics, and train the market to see their product as cheap.

Pricing is positioning. A $9/month product is positioned as a commodity. A $79/month product is positioned as a professional tool. A $299/month product is positioned as a business-critical platform.

Your price communicates value before anyone reads your feature list. Set it intentionally.

The goal today: choose a pricing model, set your launch price, and design 2-3 tiers that guide buyers toward the tier that's best for them and most profitable for you.

---

## Choosing Your Pricing Model

There are four common SaaS models. Pick the one that aligns with how buyers get value from your product.

### 1. Seat-Based (Per User)
**Best for:** Collaboration tools, productivity software, anything where usage scales with team size.

**Pros:** Revenue scales naturally with customer growth. Easy to understand.
**Cons:** Customers share logins to minimize seats. Enterprises discount hard on seats.

**Examples:** Slack, Notion, Linear

### 2. Usage-Based (Consumption)
**Best for:** AI products, APIs, data products — anything where usage varies significantly by customer.

**Pros:** Low entry barrier. Revenue scales with customer value.
**Cons:** Revenue is unpredictable. Customers optimize to minimize usage (which may not align with your product goals).

**Examples:** OpenAI, Anthropic, Stripe

### 3. Feature-Based (Tiered)
**Best for:** Products with clear feature differentiation between customer segments.

**Pros:** Natural upsell path. Works well when small teams need basic features, enterprises need advanced ones.
**Cons:** Requires careful feature gating decisions. Risk of cannibalization between tiers.

**Examples:** HubSpot, Intercom, Zapier

### 4. Outcome-Based
**Best for:** Products with clear, measurable ROI.

**Pros:** Aligns your incentives with customer success. Justifies premium pricing.
**Cons:** Hard to implement fairly. Requires robust measurement.

**Examples:** Some legal tech, rev share models

**For most early-stage SaaS:** Start with feature-based tiered pricing. It's predictable, easy to explain, and gives you a clear upsell path.

---

## The 3-Tier Framework

Three tiers is almost always the right answer at launch:

| Tier | Role | Who It's For |
|------|------|-------------|
| **Starter** | Lowers the entry barrier | Solo users, small teams, people evaluating |
| **Pro** (your target) | Captures the ideal customer | Your ICP at full value |
| **Business/Team** | Anchors value and enables upsells | Growing teams, heavier users |

**The Pro tier should be designed for your ICP with the pricing that reflects your full value.** The Starter tier exists to reduce friction for people who aren't sure yet. The Business tier exists to make Pro look reasonably priced and to capture customers who need more.

---

## Step 1: Anchor to Customer Value, Not Costs

The most common pricing mistake: pricing based on what you think your costs justify, rather than the value you create for customers.

If your product saves a customer 10 hours per month and that customer's time is worth $100/hour, you're creating $1,000/month in value. Charging $29/month for that is leaving 97% of value on the table.

Use this prompt to anchor your pricing to value:

```
I'm building [product description] for [ICP].

Help me calculate the value delivered to a typical customer:

1. Time saved: [what tasks does it automate or accelerate?]
2. Revenue generated: [does it help them make more money?]
3. Cost avoided: [does it replace something more expensive?]
4. Risk reduced: [does it prevent something costly?]
5. Outcome improved: [what measurable metric does it improve?]

Based on this value calculation, what price range would represent:
- 1-5% of the value created (aggressive value capture)
- 10-20% of the value created (moderate value capture)
- 30-50% of the value created (risk-sharing / premium)

What is the monthly value delivered to my ICP? And what does 10% of that suggest as a pricing anchor?
```

Use [MetricGen](https://metricgen.ai) to model out the revenue implications of different price points and conversion rate assumptions. Seeing your annual revenue projection at $29 vs. $79 vs. $149 clarifies the stakes quickly.

---

## Step 2: Research Competitive Price Points

Your pricing also has to pass the "is this reasonable?" test relative to alternatives. If competitors charge $50/month and you charge $200/month, you need a very clear reason why.

```
Research the pricing for these products in [market]:
[list 5 competitors]

For each, identify:
- Entry price
- Most popular tier (if disclosed)
- What's included at each tier
- Any pricing page patterns (annual discount, per-seat, usage limits)

Based on this, what's the pricing range I can realistically charge without needing extensive justification? What would be considered premium? What would be considered underpriced?
```

You're not aiming to be the cheapest. You're aiming to be priced correctly relative to the value you deliver and the alternatives buyers have.

---

## Step 3: Design Your 3 Tiers

Now design each tier with clear feature gates. The key question for each gate: "Does including this feature in the Starter tier prevent a real buyer from upgrading to Pro?"

**Tier design guidelines:**
- Starter: Include enough to deliver real value (not a crippled experience), exclude things that matter to serious users
- Pro: Include everything your ICP needs to fully benefit from the product
- Business: Pro + volume limits + team features + priority support

Use this prompt:

```
Based on my product's features:
[list all features]

And my three customer types:
- Starter: [solo user / experimenter / small use case]
- Pro: [your ICP]
- Business: [larger team / heavier user]

Design a 3-tier feature gating structure.

For each tier, specify:
1. What's included
2. What's excluded (and why that exclusion makes sense)
3. Usage limits if applicable
4. Price recommendation
5. Who this tier is explicitly for (write the one-sentence description for the pricing page)

Make sure the Starter tier still delivers real value — a crippled free tier that can't do anything trains customers to not trust the product.
```

---

## Step 4: Set Your Launch Price

A few important principles:

**Raise prices later. Don't start low and expect to raise.** Early customers anchor on your launch price. Raising prices on existing customers is painful. Start at the price you want to sustain.

**Annual pricing creates compounding benefits.** Offer 20% off annual (2 months free). Annual customers churn less, are more committed, and improve your cash position. List annual pricing prominently.

**Don't offer a free tier at launch unless you have a specific PLG reason.** Free users generate support burden, don't validate willingness to pay, and delay the feedback that comes from customers who pay. A free trial (7 or 14 days, no credit card required) is better than a permanent free tier for early-stage products.

**Set your Pro tier price.** Everything else is math:
- Starter: 40-60% of Pro
- Business: 150-250% of Pro

---

## Step 5: Write Your Pricing Page Copy

The pricing page is where positioning meets proof. Good pricing page copy helps buyers self-select — they read the tier description and think "that's me."

```
Based on my 3 tiers:
[paste tier design]

Write pricing page copy for each tier:
1. Tier name (not just "Starter / Pro / Business" — name it for who it's for)
2. Price + billing cadence
3. One-sentence who-it's-for description
4. Feature list (bulleted, outcome-framed where possible)
5. CTA button text

Also write:
- A 1-sentence headline for the pricing section ("Simple, transparent pricing" is boring — write something specific to our value)
- A FAQ section with 5 common pricing questions and answers

Target buyer for Pro: [ICP description]
```

---

## Pricing Psychology Principles

**Anchor high.** Display the highest tier first (left to right if horizontal, or lead with it). The first number people see becomes the anchor.

**Make one tier "recommended."** Add a badge to your Pro tier. Buyers follow recommendations.

**Annual vs. monthly.** Display annual pricing by default. Monthly pricing should require a toggle.

**Remove the enterprise tier from the page.** If you have enterprise customers with custom contracts, list "Enterprise" with a "Contact us" CTA — but don't give them a price. This creates mystique and prevents large companies from anchoring to your listed price.

---

## Deliverable

One markdown file: `pricing.md`

Include:
- Pricing model choice + rationale
- 3-tier structure with features and prices
- Annual discount %
- Pricing page copy (tier names, descriptions, feature lists, CTAs)
- Launch price decision + reasoning

---

## What's Next

With pricing set, move to [Write Your Landing Page Copy](landing-page-copy.md) — where you assemble everything into a complete landing page draft.
