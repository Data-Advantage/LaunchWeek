[Back to Day 0: Research](README.md)

# Competitor Analysis Framework

Map your competitive landscape so you know exactly how you're different — and can prove it to buyers.

## Why This Matters

Most founders do one of two things with competitors: ignore them ("we have no competitors") or obsess over them ("I check their changelog every week"). Both are wrong.

The goal of competitor analysis is not to copy or defeat competitors — it's to understand the conversation buyers are already having in their heads. When a buyer evaluates your product, they're comparing it to something. That something might be a direct competitor, an indirect alternative, or doing nothing. You need to know what that comparison looks like and how to win it.

A good competitive analysis tells you:
- Where your differentiation actually lands with buyers
- Which features are table stakes vs. genuine advantages
- What messaging angles are already crowded vs. open
- Where buyers are underserved

---

## The Three-Column Framework

Before diving into research, understand the three types of competition every product faces:

**Column 1: Direct competitors**
Products solving the exact same problem for the exact same customer. Same use case, similar feature set, competing for the same budget.

**Column 2: Indirect competitors**
Different approach, same outcome. If you're building project management software, indirect competitors include email, spreadsheets, and even just not tracking projects at all.

**Column 3: "Do nothing"**
The most underestimated competitor. For many SaaS products, the biggest obstacle is buyers who don't believe the pain is urgent enough to justify switching from whatever they do today (including nothing structured at all).

Build a row in your matrix for each type. The "do nothing" column often reveals the most important positioning insight.

---

## Step 1: Identify Your Competitors (20 minutes)

Start with Perplexity to find competitors you might not know about:

```
What are the main products people use to solve [the specific problem your product solves]?

Include:
- Established SaaS products (direct competitors)
- Tools people use indirectly for this job (spreadsheets, Notion, etc.)
- Free/open source alternatives
- Any new entrants or funded startups in this space

For each, note: target customer, price range, primary value prop.
```

Then search:
- G2 / Capterra category pages for your category
- "alternatives to [biggest player]" — captures the longtail of what buyers compare
- Reddit threads in relevant subreddits asking "what tool do you use for X?"

Aim for 5-8 direct competitors and 3-5 indirect alternatives. More than that and you're diluting your focus.

---

## Step 2: Research Each Competitor (60 minutes)

For each direct competitor, gather:

**From their website:**
- Headline / primary value prop
- Target customer (who do they claim to serve?)
- Pricing (tiers, price points, what's gated)
- Feature set (from their features page)
- Social proof (testimonials, case studies, logos)

**From review sites:**
- Top-rated features (what do customers love?)
- Common complaints (what do customers hate?)
- Who's leaving and why (churn signals)

Use this prompt to synthesize each competitor:

```
Here is information about [Competitor Name]:
[paste their homepage text, pricing page, and top G2 reviews]

Summarize:
1. Their primary value proposition (1 sentence)
2. Their target customer (be specific)
3. Their 3 biggest strengths (according to customers)
4. Their 3 biggest weaknesses (according to customers)
5. The type of buyer who should NOT use them
6. Their pricing model and approximate entry point

Be direct. Don't soften the weaknesses.
```

---

## Step 3: Build Your Comparison Matrix

Now build a feature/attribute matrix. Pick 8-12 dimensions that matter most to your target buyer and score each competitor:

**Example dimensions:**
- Ease of setup (time to first value)
- Price point (entry/mid/enterprise)
- AI capabilities (none / basic / advanced)
- Integration ecosystem
- Customer support quality
- Mobile experience
- Specific feature your product has
- Specific feature your product lacks

Create a spreadsheet or markdown table:

```
| Feature / Attribute    | Your Product | Competitor A | Competitor B | Do Nothing |
|------------------------|-------------|-------------|-------------|------------|
| Setup time             | 5 minutes   | 2 hours     | 1 hour      | n/a        |
| AI-native workflow     | Yes         | No          | Partial     | No         |
| Price (entry tier)     | $29/mo      | $79/mo      | Free        | $0         |
| [Your key feature]     | Yes         | No          | No          | No         |
| [Their key feature]    | No          | Yes         | Yes         | n/a        |
```

Be honest. Where you're worse, say so. This forces you to think about whether you need to build something or whether you need to position away from the comparison.

---

## Step 4: Find Your Differentiation

With the matrix built, run this analysis:

```
Based on this competitive matrix:
[paste your matrix]

Identify:
1. Where do we have a genuine, defensible advantage? (Not just "we're better" — why would a buyer believe this?)
2. Where are we behind and it matters? What would need to change?
3. What's the most crowded positioning claim in this market? (What are all competitors saying?)
4. What positioning claim is open — something true about us that no one else is saying?
5. What is the "switching trigger" — the specific situation that makes a buyer ready to leave their current solution?

Don't be diplomatic. Be accurate.
```

The open positioning claim is gold. If every competitor is saying "easy to use," don't say "easy to use." Find what they're NOT saying that's true about you.

---

## Step 5: Write Your Differentiation Statement

Condense your analysis into a crisp differentiation statement you can use in copy, pitches, and content:

**Format:** "[Product] is the only [category] that [unique differentiator], built for [specific customer] who [specific situation]."

**Example:** "FastWrite is the only content marketing platform that runs your draft through multiple AI models and scores it against real competitor content before you publish, built for marketing teams who need to prove SEO ROI."

Don't confuse features with differentiation. Differentiation is why a specific buyer, in a specific situation, would choose you over the alternative they're already considering.

---

## Competitive Intelligence: Ongoing

Competitor research is a one-time exercise today, but competitive intelligence is continuous. Set up:

- **Google Alerts** for each major competitor's name + "update" or "pricing"
- **G2 review alerts** for new reviews on competitor products
- **RSS feeds** for their changelogs or company blogs

Spend 15 minutes per week on competitive intelligence. Know when competitors change pricing, launch new features, or enter new markets. You don't need to react to everything — but you need to know.

---

## Deliverable

One markdown file: `competitor-matrix.md`

Include:
- Competitor list (direct, indirect, do nothing)
- Feature/attribute matrix
- Differentiation statement
- Top 3 open positioning angles

---

## What's Next

With your competitive landscape mapped, move to [Define Your ICP](define-icp.md) — because knowing competitors is useful, but knowing your customer is essential.
