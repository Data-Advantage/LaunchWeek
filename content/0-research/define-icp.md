[Back to Day 0: Research](README.md)

# Define Your ICP (Ideal Customer Profile)

Get specific about who your first 100 customers are. Vague targeting produces vague results.

## Why This Matters

"My product is for small businesses" is not an ICP. "My product is for solo founders running B2B SaaS products under $10K MRR who are doing their own marketing without a team" is an ICP.

The difference is actionability. With a specific ICP, you know:
- Which subreddits to post in
- Which keywords to target
- What pain to reference in your headline
- Which features to prioritize
- Who to reach out to for beta feedback

Vague ICPs lead to vague copy that resonates with no one. Specific ICPs let you write content that makes the right reader feel like you're reading their mind.

Your first ICP is not your only ICP. You're defining who to focus on *first* — the customer who has the most urgent need, the most willingness to pay, and the easiest path to finding.

---

## The Three-Layer ICP Model

Build your ICP in three layers:

**Layer 1: Firmographics (for B2B) or Demographics (for B2C)**
Who are they objectively? Company size, industry, revenue, geography. Or: age range, income, lifestyle, life stage.

**Layer 2: Psychographics**
What do they believe? What do they value? What do they fear? What does success look like to them?

**Layer 3: Situational trigger**
What has to be true for them to be in-market for your product right now? The trigger is the difference between a potential customer and an active buyer.

---

## Step 1: Draft Your ICP Hypothesis (20 minutes)

Start with what you know. You built this product — you have an intuition about who needs it. Write down your initial hypothesis before any research.

Use this prompt:

```
I built [product description]. Help me draft an initial ICP hypothesis.

Based on the problem this product solves, describe the ideal first customer using these dimensions:
- Who they are (role, company size/type, or demographic)
- What they're trying to accomplish (job to be done)
- What's frustrating them today (current pain/workaround)
- What would make them pay for a solution (willingness criteria)
- Where they spend time online (communities, platforms, media)
- What would make them in-market right now vs. 6 months from now (trigger)

Give me 3 distinct ICP hypotheses — different customer types who might benefit from this product. I'll validate and narrow down from there.
```

Write down the 3 hypotheses. Don't commit yet — you'll test them.

---

## Step 2: Validate Against Real Communities (45 minutes)

This is the most important step. You're not validating that people *could* use your product. You're validating that they *want* to and *talk about* the problem it solves.

Go to Reddit, Twitter/X, and Indie Hackers. Search for conversations about the pain you're solving.

**Reddit search:**
```
site:reddit.com "[pain description]" OR "[alternative tool] alternative"
```

Look for:
- Posts complaining about the problem your product solves
- Questions asking for tool recommendations
- Threads comparing alternatives
- Comments describing workarounds people use

**What to note:**
- The exact language people use to describe the problem (copy this word for word into your copy later)
- Who is posting (their role, company type, what they reveal about themselves)
- What solutions they've tried and rejected
- How urgent the problem sounds

Use Claude to synthesize what you find:

```
Here are 10-15 real community posts about [problem]:
[paste posts/comments]

Based only on what people actually said (not assumptions):
1. How do they describe the problem in their own words?
2. What solutions have they tried? Why did those fail?
3. What does "success" look like to them?
4. How urgent is this problem? (Is it blocking their work, or just annoying?)
5. Which of my 3 ICP hypotheses fits best?
```

---

## Step 3: Build 3 Customer Personas (45 minutes)

Now build out 3 specific customer personas. These are not demographic stereotypes — they're composites of real people you observed in communities.

Use this template for each:

```
Build a detailed customer persona for [ICP name]:

Name: [Give them a name — makes them feel real]
Role/situation: [Specific]
Company/context: [Specific]

**Their day:**
[What does their day look like? What are they responsible for? What frustrates them?]

**Their relationship with [problem your product solves]:**
[How often do they deal with this? What's their current solution? What do they hate about it?]

**Their goal:**
[What are they trying to achieve? What does success look like 6 months from now?]

**Their trigger:**
[What specific event would make them search for a solution RIGHT NOW?]

**Their objection:**
[What's the main reason they wouldn't buy your product today?]

**Where to find them:**
[Subreddits, newsletters, events, Twitter accounts they follow, Slack groups]

**What would make them pay:**
[What outcome justifies the cost? What's their ROI calculation?]
```

Write all 3 personas. Then rank them: which one is most urgent, most accessible, and most likely to convert?

---

## Step 4: Pick Your Primary ICP

Don't try to market to all three at once. Pick one.

Use this framework to choose:

| Criteria | Persona 1 | Persona 2 | Persona 3 |
|----------|-----------|-----------|-----------|
| Problem urgency (1-5) | | | |
| Willingness to pay (1-5) | | | |
| Ease of finding them (1-5) | | | |
| How well product fits today (1-5) | | | |
| Total | | | |

Score each criteria 1-5. The highest total is your primary ICP — for now.

"For now" is important. Once you have 10 customers from your primary ICP, you'll have enough data to decide whether to double down or expand to a secondary ICP.

---

## Step 5: Generate ICP-Specific Content Ideas

Your ICP definition isn't just for positioning — it's your content targeting strategy. Use [FastWrite](https://fastwrite.ai) to generate content ideas targeted specifically to your primary ICP:

```
I'm targeting [ICP description].

Generate 20 blog post ideas that:
- Address their specific pain points (use the language they actually use)
- Answer questions they're already searching for
- Position [product name] as the natural solution
- Are searchable (not too vague, not too branded)

Format as: [Title] — [2-sentence description of what it covers and why this ICP would search for it]
```

Save these 20 ideas. They become your Day 2 content strategy.

---

## Persona Validation Checklist

Before moving on, verify:

- [ ] Each persona is based on at least some real community signal (not pure assumption)
- [ ] You can name 5 specific subreddits, Slack groups, or communities where your primary ICP hangs out
- [ ] You know the exact language they use to describe their problem
- [ ] You know what they've tried before and why it didn't work
- [ ] You know the trigger event that makes them actively look for a solution

If you can't check all five, go back to Step 2 and do more community research.

---

## Deliverable

One markdown file: `icp.md`

Include:
- 3 personas (using the template above)
- Primary ICP selection with scoring rationale
- Community list (where to find them)
- Their language verbatim (5-10 phrases to use in copy)

---

## What's Next

Now that you know who you're targeting, move to [Positioning That Sticks](positioning.md) — how to carve out a market position that speaks directly to your primary ICP.
