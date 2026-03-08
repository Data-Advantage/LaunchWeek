[Back to Day 0: Research](README.md)

# Positioning That Sticks

Apply proven positioning frameworks to carve out a defensible market position. Then use AI to stress-test it.

## Why This Matters

Positioning is not your tagline. It's not your value proposition. It's the strategic decision about what game you're playing and how you win it.

Bad positioning: "The best AI writing tool for teams."
Good positioning: "The only content marketing platform with BM25 SEO scoring built in — for marketing teams who need to prove their content drives search traffic."

The difference is specificity and defensibility. The first claim every competitor can make. The second claim requires you to actually have BM25 scoring. Positioning should be true, specific, and hard to copy.

Get positioning right and your landing page writes itself. Get it wrong and every piece of content you create will feel off — technically correct but never quite landing.

---

## Two Frameworks That Actually Work

### Framework 1: April Dunford's "Obviously Awesome"

April Dunford's positioning framework is the best one for early-stage SaaS. It starts with context — where you compete — and builds from there.

**The five components:**

1. **Competitive alternatives** — What would buyers use if your product didn't exist?
2. **Unique attributes** — What do you have that alternatives don't?
3. **Value** — What value do those attributes deliver to buyers?
4. **Target customers** — Who cares most about that value?
5. **Market category** — Which market category makes the value obvious?

Work through all five before writing a word of copy.

### Framework 2: Category Design (Christensen / Play Bigger)

If you're genuinely doing something new, category design argues you should name and own a new category rather than compete in an existing one. "Inbound marketing" (HubSpot), "product-led growth" (Amplitude), "vibe coding" (Cursor) — these companies didn't win their category, they created it.

You probably don't need category design for launch. But if your product truly has no good existing category, consider creating one.

---

## Step 1: Map Your Competitive Alternatives

Pull from your competitor analysis (previous guide). For positioning purposes, answer:

```
What would my target buyer do if my product didn't exist?

List all realistic alternatives in order of likelihood:
1. [Most likely alternative]
2. [Second most likely]
3. [Third most likely]

For each alternative, why is it a legitimate option? What does it get right that makes buyers choose it?
```

This is important: your positioning must beat these specific alternatives. Not theoretical competitors — the actual alternatives your buyer will compare you to.

---

## Step 2: Identify Your Unique Attributes

Use this prompt with Claude:

```
I'm building [product description]. My competitive alternatives are [list from step 1].

Identify what my product has that those alternatives don't.

Focus on:
- Capabilities that are technically differentiated (not just "better UX")
- Workflows that are uniquely efficient or effective
- Data or integrations no one else has
- Business model differences that matter to buyers (pricing, packaging, etc.)

Be honest. Don't list things as differentiated unless they genuinely are. If something is table stakes (everyone has it), say so.

My product's key features:
[list your actual features]
```

From the output, mark each attribute:
- **Genuinely unique** — no competitor has this
- **Executed better** — competitors have it but we're materially better
- **Table stakes** — everyone has this; not a differentiator

Only build positioning on "genuinely unique" or "executed significantly better" attributes.

---

## Step 3: Map Attributes to Buyer Value

Features are not benefits. Attributes are not value. You need to translate each unique attribute into the specific value it delivers to your target buyer.

Use this matrix format:

```
Help me build a value translation table.

For each attribute, identify:
1. What the attribute is (technical description)
2. What it means for the buyer's work (practical implication)
3. The outcome it produces (what they can accomplish that they couldn't before)
4. The emotion it resolves (what stress, fear, or frustration goes away)

Attributes:
[list your unique attributes from step 2]

Target buyer: [ICP description from previous guide]
```

The emotion column is where marketing copy lives. Technical buyers care about outcomes; emotional buyers care about what goes away.

---

## Step 4: Write Your Positioning Statement

Now draft the positioning statement using Dunford's format:

```
For [target customers]
who [need/want something]
[Product name] is a [market category]
that [key benefit / unique differentiator]
unlike [competitive alternative]
which [how the alternative falls short].
```

**Example:**
"For marketing teams at B2B SaaS companies who need to prove content drives search traffic, FastWrite is an AI content pipeline that scores every article against real competitor content using BM25 before publishing — unlike generic AI writing tools which produce content without any built-in SEO validation."

Prompt Claude to generate 5 variations:

```
Based on these attributes and buyer values:
[paste your step 3 output]

Write 5 positioning statements using this format:
"For [target customers] who [need/want], [Product] is a [category] that [key benefit], unlike [alternative] which [how it falls short]."

Vary:
- Which attribute leads
- Which alternative is called out
- The emotional vs. functional framing

Target buyer: [ICP]
```

Pick the one that feels most defensible and most specific to the situation that drives buyers to search for a solution.

---

## Step 5: Stress-Test Your Positioning

Before you commit to a positioning statement, stress-test it with Claude:

```
Here is my positioning statement:
[your positioning]

Stress-test this positioning:

1. Could a competitor copy this claim next quarter? If yes, what would make it more defensible?
2. Would my target buyer immediately understand why this matters to them?
3. Does this statement help a buyer say "yes, this is for me" AND "no, this is not for me"? (Good positioning filters out bad fit customers)
4. Is there anything in this statement a buyer couldn't verify without taking my word for it? If yes, how do we prove it?
5. What's the strongest counter-argument a competitor could make?

Be direct. Flag any weakness you see.
```

Revise based on the output. Run the stress test again. Repeat until you have a statement where the weaknesses are honest tradeoffs (you chose to not serve X in order to serve Y better) rather than gaps.

---

## Step 6: Derive Secondary Messaging

Your positioning statement is the strategic anchor. From it, you can derive:

**Headline formula:** [Result you produce] for [who] — without [the sacrifice usually required]

**Tagline:** 3-5 word distillation of your core promise

**Elevator pitch (30 seconds):** For [who] struggling with [problem], [product] is [category] that [delivers value]. Unlike [alternative], we [key differentiator]. [Social proof if you have it.]

Use [FastWrite](https://fastwrite.ai) to generate dozens of variations of each:

```
Based on this positioning:
[paste statement]

Generate:
- 10 landing page headline options
- 5 tagline options (3-5 words each)
- 3 elevator pitch scripts (30 seconds spoken)

For each, note which attribute or buyer emotion it leads with.
```

Review and edit. The best headline will usually surprise you — it's rarely the first one.

---

## Deliverable

One markdown file: `positioning.md`

Include:
- Positioning statement (chosen version)
- Value translation table (attributes → outcomes → emotions)
- Derived headline (chosen)
- Derived tagline (chosen)
- Elevator pitch (chosen)
- Open questions / future positioning evolution

---

## What's Next

With your positioning locked, move to [Validate Demand Before You Launch](validate-demand.md) — because positioning is theory until buyers confirm it.
