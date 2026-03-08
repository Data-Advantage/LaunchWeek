[Back to Day 1: Position](README.md)

# Craft Your Value Proposition

Distill what you do, who it's for, and why it matters into one compelling sentence. Then generate and test dozens of variations.

## Why This Matters

A value proposition is not a mission statement. It's not a tagline. It's a clear claim that a specific customer, in a specific situation, would find immediately relevant.

"We help businesses grow" is not a value proposition.
"Reduce customer churn by 30% by catching at-risk users before they cancel" is a value proposition.

The test: can a stranger read your value proposition and immediately know (1) what you do, (2) who it's for, and (3) why they should care? If any of those answers require explanation, you're not there yet.

Your value proposition lives at the top of your landing page, in your onboarding email, in your Twitter bio, and in how you introduce yourself at events. It's the most important sentence in your marketing. Get it right before anything else.

---

## The Three Core Formulas

There is no single right formula, but these three cover 90% of effective SaaS value props:

**Formula A: Outcome-focused**
> "[Verb] [specific outcome] [for whom] [without/in/by context]"
>
> Example: "Publish SEO-optimized blog posts in under an hour — without hiring a content team."

**Formula B: Comparative**
> "[Outcome] that [alternative] can't match — [brief reason why]"
>
> Example: "Content that ranks where generic AI tools fail — because we score against real competitor pages before you publish."

**Formula C: Job-to-be-done**
> "When you need to [job they're doing], [Product] [how you help them] so you can [end state]."
>
> Example: "When you need to scale content without scaling headcount, FastWrite handles research through publishing so you can focus on strategy."

You'll generate variations of all three, then test which resonates.

---

## Step 1: Extract Your Core Promise

Before writing anything, crystallize the single most important thing your product does. This is harder than it sounds — most founders conflate multiple promises.

Use this prompt:

```
I'm building [product description]. My target buyer is [ICP].

Help me identify my single most important promise — the one thing, if I could only say one thing, that would make my target buyer want to learn more.

For context:
- The problem they have: [description]
- Their current workaround: [what they do today]
- The key outcome my product produces: [description]
- My strongest differentiator vs. alternatives: [description]

Generate 10 "single promise" statements. Each should be one sentence that leads with the outcome. Rank them by which one would be most compelling to my target buyer.
```

From the output, identify your top 3 candidates. Hold these — you'll test them.

---

## Step 2: Generate Value Prop Variations

Now generate a broad set of variations using all three formulas. Volume matters here — you want enough options to find the ones that genuinely click.

```
Based on this core promise: [your top candidate from step 1]

Generate value proposition variations using each of these formulas:

Formula A (Outcome-focused): 5 variations
Formula B (Comparative): 5 variations
Formula C (Job-to-be-done): 5 variations

Guidelines:
- Lead with the outcome, not the feature
- Use the language my ICP actually uses (see ICP notes below)
- Be specific — numbers and timeframes make claims credible
- Avoid jargon, buzzwords, and superlatives

ICP language examples: [paste 5-10 phrases from your ICP research]
```

You now have 15 candidates. Time to evaluate them.

---

## Step 3: Evaluate Against the Value Prop Scorecard

Run each candidate through this scorecard (score 1-3 for each dimension):

| Criterion | Score (1-3) | Notes |
|-----------|-------------|-------|
| Clarity — can a stranger immediately understand it? | | |
| Specificity — is it specific enough to be credible? | | |
| Relevance — does it address what the ICP actually cares about? | | |
| Differentiation — does it distinguish from alternatives? | | |
| Believability — can we prove this claim? | | |

Score each candidate. The highest total (15 max) is your candidate.

Then have Claude evaluate:

```
Here are my top 5 value proposition candidates:
[list them]

Evaluate each against these criteria:
1. Clarity — could a stranger immediately understand what this company does?
2. Specificity — is it vague or concrete?
3. Relevance — would it resonate with [ICP description]?
4. Differentiation — does it distinguish from [list top competitors]?
5. Credibility — can this claim be verified or supported?

Rank them 1-5. Explain what's wrong with the weaker ones.
```

Pick one winner. You'll test it in the real world over the next few days.

---

## Step 4: Build Your Headline / CTA Combinations

Your value prop feeds directly into your landing page headline and CTA pairing. These aren't the same thing — the headline makes the claim, the CTA tells them what to do next.

Use [FastWrite](https://fastwrite.ai) to generate headline + CTA combos:

```
Based on this value proposition: [your chosen value prop]

Generate 10 landing page headline + CTA combinations.

Format:
Headline: [compelling claim, 6-12 words]
Subheadline: [supporting context or proof point, 15-25 words]
CTA: [action button text, 2-5 words]

Vary:
- Emotional vs. functional framing
- Outcome-led vs. feature-led
- Urgency vs. aspiration
- Direct CTA ("Start free") vs. low-friction CTA ("See how it works")
```

Review all 10. Pick 2-3 to test on your landing page.

---

## Step 5: Pressure-Test with Your ICP Language

The best value propositions use the language buyers already use — not the language founders think sounds smart.

Go back to your ICP research (community posts, Reddit threads, conversations). Find the most emotionally resonant phrases — the sentences where someone sounds most frustrated, most hopeful, or most specific about their need.

Then run:

```
Here is my current value proposition:
[your chosen value prop]

Here are phrases my target customers actually use when describing their problem:
[10-15 verbatim phrases from community research]

Suggest 3 revisions that:
- Keep my core claim
- Incorporate the language my customers actually use
- Feel like a founder talking to a peer, not a marketer talking to a prospect

Specifically: which word choices feel like marketing-speak that I should replace with real language?
```

The revised version should feel like something your customer would say, not something your pitch deck would say.

---

## Deliverable

One section in your positioning doc: `value-proposition.md`

Include:
- Chosen value proposition (1-2 sentences)
- 3 headline + CTA combinations for testing
- The core promise (1 sentence)
- Rejected candidates + why (useful to have for future reference)

---

## What's Next

With your value prop locked, move to [Pricing Strategy for Early-Stage SaaS](pricing-strategy.md) — because pricing is part of positioning and needs to be set before you write landing page copy.
