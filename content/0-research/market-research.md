[Back to Day 0: Research](README.md)

# Market Research with AI

Use Perplexity and Claude to build a complete market brief in a few hours — work that used to take consultants weeks.

## Why This Matters

Founders skip market research because it feels slow and academic. But launching without it means writing copy for the wrong audience, building features the market doesn't want, and competing on dimensions that don't matter to buyers.

A one-page market brief answers the three questions your marketing needs to be effective:
1. Is the market real and growing?
2. Who already plays here and how do they win?
3. Where does my product fit?

You don't need a market research firm. You need 3-4 hours and the right AI prompts.

## What You'll Build

A one-page market brief covering:
- Market size and growth trajectory
- Key trends shaping buyer behavior
- Major players and their positioning
- Your best opportunity within the market

---

## Step 1: Define Your Research Scope (15 minutes)

Before you prompt anything, get specific about what market you're actually in. Founders often define their market too broadly ("the AI market") or too narrowly ("AI writing tools for B2B SaaS marketing managers who use HubSpot").

Start with this framing exercise:

```
I'm building [product description]. Help me define my market clearly.

For each of the following, give me 2-3 options at different levels of specificity:
- Broadest possible market definition
- Most specific niche definition
- The "just right" market definition that's specific enough to target but large enough to matter

Also tell me: what search terms would someone use to find solutions in this market?
```

Pick the definition that balances specificity with opportunity. Write it down — this becomes your research anchor.

---

## Step 2: Market Size and Growth (30 minutes)

Open Perplexity and run these searches. Perplexity cites sources and pulls live data — far better than relying on Claude's training cutoff for market stats.

**Search 1: Market size**
```
[Your market] market size 2024 2025 total addressable market growth rate
```

**Search 2: Trends**
```
[Your market] trends 2025 buyer behavior shifts emerging needs
```

**Search 3: Industry reports**
```
[Your market] industry report Gartner Forrester IDC 2024 2025
```

For each search, save:
- The market size figure (note the source and methodology — TAM figures vary wildly)
- The growth rate (CAGR)
- 3-5 key trends shaping the market

**Reality check:** If you can't find credible market size data, you're either in a very new market (document your assumptions) or you've defined the market too narrowly (broaden your definition).

---

## Step 3: Competitive Landscape Scan (30 minutes)

This is a quick scan — full competitor analysis comes in the next guide. Here you want to understand who the major players are and what categories they fall into.

Run this in Claude or Perplexity:

```
I'm building [product description] in the [market] space.

Map the competitive landscape for me:
1. Direct competitors (solving the exact same problem)
2. Indirect competitors (different approach, same outcome)
3. "Do nothing" — what are buyers doing today without a dedicated solution?
4. Adjacent players who might expand into this space

For each category, list the top 3-5 players and their primary positioning/value prop.
```

You're not doing deep research here — just mapping the terrain. The goal is to walk away knowing who the major players are so your market brief is grounded.

---

## Step 4: Identify Market Trends (30 minutes)

Trends tell you which way the market is moving. Riding a wave is dramatically easier than fighting one.

Use this prompt with Claude + recent Perplexity data:

```
Based on the following data about [market]:
[paste your Perplexity findings]

Identify:
1. The 3 most important trends reshaping this market right now
2. Which trend represents the biggest opportunity for a new entrant
3. Which trend represents the biggest threat
4. What buyers believe they need vs. what they actually need (if there's a gap)
```

Document the 3 trends. Later, your content strategy (Day 2) will be built around these trends — they're what your target buyers are searching for and talking about.

---

## Step 5: Synthesize Into a One-Page Brief (30 minutes)

Now pull everything together. Use this template:

```
Synthesize the following research into a crisp, one-page market brief.
Use this exact structure:

**Market Definition:** [1 sentence]

**Market Size:** [TAM figure + source + growth rate]

**Key Trends:**
1. [Trend] — why it matters to buyers
2. [Trend] — why it matters to buyers
3. [Trend] — why it matters to buyers

**Competitive Landscape:**
- Direct: [top 3 players + their positioning]
- Indirect: [top 2-3 alternatives]
- Do nothing: [what buyers do today without a solution]

**Opportunity:**
[2-3 sentences on where the gap is and why now is the right time]

**Assumptions:**
[List any data points you couldn't verify with sources]

Here's my research:
[paste everything you've gathered]
```

Save this brief. You'll reference it in every other guide this week — positioning, copy, SEO strategy, and pitch decks all depend on having this foundation.

---

## AI Tool Comparison for Research

Different AI tools have different strengths for market research. Use the right tool for each task:

| Task | Best Tool | Why |
|------|-----------|-----|
| Live market data | Perplexity | Real-time web search with citations |
| Synthesis and analysis | Claude | Best reasoning and structure |
| Multi-source reports | ChatGPT Deep Research | Comprehensive research mode |
| Competitor monitoring | [LLMReference.com](https://llmreference.com) | Compare AI model capabilities |

[LLMReference.com](https://llmreference.com) is useful when your product intersects with AI — you can quickly compare which models competitors might be using and what capabilities they have access to.

---

## Common Mistakes

**Using TAM figures uncritically.** "The global X market is $50B" numbers are often inflated or irrelevant to your actual addressable opportunity. Find the segment you're realistically going after.

**Researching for confirmation.** You're looking for truth, not validation. If the research suggests the market is crowded or the problem isn't urgent, that's valuable — better to know now.

**Spending too long here.** Market research is a foundation, not the work. Cap it at half a day and move on. You'll update your understanding continuously.

**Ignoring the "do nothing" option.** Your biggest competitor is usually inertia — buyers choosing spreadsheets, manual processes, or simply ignoring the problem. Understand why they do nothing before assuming they'll buy your solution.

---

## Deliverable

One markdown file: `market-brief.md`

Save it in your project notes. Contents:
- Market definition (1 sentence)
- Market size + growth rate
- 3 key trends
- Competitive landscape overview
- Your opportunity statement

---

## What's Next

With your market brief done, move to [Competitor Analysis Framework](competitor-analysis.md) to go deeper on the specific competitors you'll be positioned against.
