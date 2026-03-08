[Back to Day 1: Position](README.md)

# Define Your Brand Voice

Establish a consistent tone that resonates with your ICP. Create a voice guide that makes AI-generated content sound like you every time.

## Why This Matters

Brand voice is the difference between content that feels generic and content that builds an audience. Readers don't consciously notice voice — but they notice when it's absent. "This feels robotic" is a voice problem. "This feels like a real person who gets it" is voice working.

Voice matters especially when you're using AI to generate content at scale. Without a voice guide, every piece of AI-generated content will default to bland marketing speak. With a voice guide — fed directly into [FastWrite](https://fastwrite.ai) or your AI tool of choice — the output sounds like you.

Your brand voice should be designed for your ICP. Not what sounds "professional." Not what sounds "industry standard." The voice that makes your specific buyer think: *this was written for me.*

---

## The Four Voice Dimensions

Every brand voice lives somewhere on four spectrums:

**1. Formal ←→ Casual**
Do you write like a consultant or a coworker?

**2. Authoritative ←→ Collaborative**
Do you tell people what to do or figure it out together with them?

**3. Energetic ←→ Calm**
Do you excite or reassure?

**4. Precise ←→ Accessible**
Do you use technical language or plain language?

There's no right answer — but there are wrong answers for your specific ICP. A security tool for CISOs should sound different from a recipe app for home cooks.

---

## Step 1: Define Your Voice Personality

Start by identifying 3-5 adjectives that describe your brand voice. Not "professional" or "innovative" — every brand claims those. Choose adjectives that actually differentiate your tone.

Use this prompt:

```
I'm building [product] for [ICP]. My brand should resonate with [describe the buyer's personality and values].

Help me define our brand voice personality:

1. Suggest 10 voice adjectives that would resonate with this buyer (not generic ones like "professional" or "friendly")
2. For my top 5 candidates, give me an example sentence that embodies that adjective
3. Identify 5 voice adjectives we should explicitly avoid for this audience
4. Describe our brand voice in one sentence — the kind you'd read on a brand strategy deck

My product's positioning: [paste positioning statement]
My ICP's values: [what they believe, what they're trying to accomplish]
```

Choose 3-5 adjectives that feel true and differentiated. These become your voice anchor.

**FastWrite example:**
Direct. Specific. Founder-to-founder. No fluff. Builder-minded.

---

## Step 2: Write the Voice Guide

Now turn the adjectives into actionable guidance. A voice guide that says "be friendly" is useless. A voice guide with examples and anti-examples is actionable.

**The voice guide format:**

For each voice dimension, write:
- What it means
- We do this by:
- We say [example] — not [alternative]
- Example paragraph

```
Build a brand voice guide for [product].

Voice adjectives: [your 3-5 chosen adjectives]
Target audience: [ICP description]

For each voice dimension, write:
1. A 2-sentence definition of what this dimension means for us
2. Three "we say" examples (specific, short phrases or sentences)
3. Three "we don't say" anti-examples (what to avoid)
4. One example paragraph (75-100 words) that demonstrates this voice

Dimensions to cover:
- Tone (formal/casual spectrum)
- Language complexity (jargon level)
- Sentence structure (long/short preference)
- Perspective (first person, second person, how we address the reader)
- Humor (do we use it? how?)
```

---

## Step 3: Build Your Vocabulary

Every brand has words it uses and words it avoids. Codify these.

**Words to use:** Words that signal your positioning and resonate with your ICP. For a developer tool: specific function names, performance metrics, precise technical terms. For a marketing tool: outcomes, revenue, pipeline, CAC, ROI.

**Words to avoid:** Words that feel off-brand or generic. Most brands should avoid: "revolutionary," "world-class," "seamless," "robust," "leverage," "utilize," "synergy."

```
Build a vocabulary guide for [product].

Brand voice: [your voice adjectives]
ICP: [description]

Create three lists:
1. Words and phrases we use (20-25 examples, specific to our positioning and audience)
2. Words we never use (20-25 examples — industry jargon to avoid, overused marketing terms, off-brand vocabulary)
3. Technical terms we explain vs. assume (do we define "CAC"? Do we say "churn" or "cancellation rate"?)

For each list, explain why (1 sentence per word is fine).
```

---

## Step 4: Create "Before / After" Examples

The most useful part of a voice guide is side-by-side examples. Take 5 real content scenarios and show before (wrong voice) vs. after (right voice).

```
Write 5 "before and after" voice examples for [product].

For each scenario, write:
- Before: [off-brand version — too formal, too generic, too salesy, or AI-sounding]
- After: [on-brand version using our voice]
- Note: [what makes the After version better — specifically]

Scenarios:
1. A tweet about a product feature
2. An email subject line for a newsletter
3. A landing page headline
4. A LinkedIn post sharing an insight
5. An error message in the product ("Something went wrong")

Voice guide: [paste your guide from step 2]
```

These before/after examples are gold for training anyone (or any AI tool) who creates content for your brand.

---

## Step 5: Configure Your AI Tools

Once you have your voice guide, feed it directly into your AI content tools so every piece of generated content starts from the right baseline.

**In [FastWrite](https://fastwrite.ai):**
- Navigate to Brand Voice settings
- Paste your voice guide, vocabulary lists, and examples
- Run a test generation on a topic you know well and compare to your expected output
- Adjust until generated content passes your "does this sound like us?" test

**Prompt template for any AI tool:**

```
You are writing content for [Product]. Use the following brand voice guide exactly:

**Voice:** [adjectives]
**We sound like:** [one sentence description]
**We use words like:** [vocabulary list]
**We never say:** [avoid list]
**Example of our voice:**
[paste an example paragraph]

Now write: [content request]
```

Save this template. Use it every time you generate content outside of FastWrite.

---

## The Voice Guide as a Living Document

Your voice guide is not a one-time document. Update it:
- When you find a piece of content that's clearly on-brand (add it as an example)
- When a piece of content generates unusually strong engagement (note what made it work)
- When you find yourself editing AI output the same way repeatedly (codify that edit as a rule)

Review and update quarterly.

---

## Deliverable

One markdown file: `brand-voice.md`

Sections:
1. Voice personality (3-5 adjectives + definitions)
2. Voice guide (per dimension, with do/don't examples)
3. Vocabulary guide (use / avoid / explain)
4. Before/after examples (5 scenarios)
5. AI prompt template for content generation

---

## What's Next

With your voice guide complete, move to [Build Your Pitch Deck](pitch-deck.md) — useful for investors, partners, and your own strategic clarity.
