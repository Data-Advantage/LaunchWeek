[Back to Day 0: Research](README.md)

# Validate Demand Before You Launch

Run lightweight experiments to confirm real people want what you built — before you invest heavily in marketing it.

## Why This Matters

Marketing amplifies signal. If there's no demand signal, marketing just amplifies silence — faster and louder.

Demand validation is not about proving your product is perfect. It's about establishing a baseline: do real people, with real money, have this problem urgently enough to take action?

"My friends think it's a good idea" is not demand validation. Ten strangers signing up to a waitlist with their real email address is.

Do this day before spending time on SEO, content, or distribution. If you get a strong signal, the rest of Launch Week has momentum. If you get a weak signal, you need to either pivot your positioning or reconsider the product — and the sooner you know that, the better.

---

## The Hierarchy of Demand Evidence

From weakest to strongest:

1. **Someone said they'd use it** — near worthless
2. **Someone signed up for a waitlist** — weak signal (low friction)
3. **Someone gave you their email after reading your pitch** — moderate signal
4. **Someone engaged with your content about the problem** — moderate signal
5. **Someone clicked "start free trial"** — strong signal
6. **Someone entered a credit card** — very strong signal
7. **Someone paid** — definitive signal

Your validation goal: get to at least level 4-5 within a day.

---

## Experiment 1: Landing Page Smoke Test (2-3 hours)

A smoke test is a minimal landing page with a real CTA — usually email signup or "request access." You're not lying (you have a real product) — you're just measuring the response rate before investing in full marketing.

**What to build:**
- Headline (your positioning statement)
- 3-sentence problem description
- 3-bullet solution description
- Email capture or "Get early access" CTA

You can build this in under an hour with v0.dev + Vercel, or use a free Carrd or Typedream page.

**How to test:**
Post the URL to 3-5 relevant communities (Reddit, Discord, Twitter). Use the community seeding approach from Day 3 — don't just spam links.

**Success metric:** 5%+ conversion rate from unique visitors to email signups. 2% is weak but worth investigating. Under 1% suggests a copy/positioning problem.

Use this prompt to write the smoke test copy:

```
I need to write a minimal landing page to test demand for [product].

My positioning: [paste positioning statement]
My target buyer: [ICP description]
The problem they have: [description]

Write:
1. A headline (8-12 words)
2. A 3-sentence problem description (their words, not mine)
3. Three solution bullets (outcome-focused, not feature-focused)
4. A CTA button label and supporting line

Tone: direct, honest, no hype. Make it feel like a founder talking to a peer.
```

---

## Experiment 2: Community Polls (1-2 hours)

Go to 3-5 subreddits, Discord servers, or Slack groups where your ICP hangs out. Post a question — not a pitch.

**Good poll format:**
> "Quick question for [specific role] — how do you currently handle [specific problem]? Do you use [option A], [option B], or something else? I'm trying to understand this before building a solution."

Note: don't mention your product. You're listening, not pitching. Founders who do this well get responses that directly improve their messaging and ICP targeting.

**What to note from responses:**
- How many people respond (signal of problem prevalence)
- What solutions they mention (competitor intel)
- Language they use (copy gold)
- Whether the problem sounds urgent ("I deal with this every day") or mild ("sometimes it's annoying")

**Prompt to analyze results:**

```
Here are responses to my community poll about [problem]:
[paste responses]

Analyze:
1. How urgent does this problem appear? Scale 1-5 with evidence.
2. What patterns appear in how people describe the problem?
3. What existing solutions are mentioned? Any gaps?
4. Which respondent type seems most likely to pay for a dedicated solution?
5. Are there any surprising insights — things you didn't expect?
```

---

## Experiment 3: Direct Outreach (1-2 hours)

Identify 20 people who match your ICP. Send them a direct message — not a pitch, a genuine question.

**Finding targets:**
- LinkedIn: search by role + company type
- Twitter/X: search by topic + profile keywords
- Reddit: people who've posted about the problem
- Indie Hackers: builders who've mentioned the problem

**Message template:**
```
Hi [name],

I saw your post about [specific thing they said] and it resonated. I'm trying to understand how [specific role] typically handles [specific problem].

Would you be willing to answer two quick questions?

1. How do you currently manage [problem]?
2. What's the most frustrating part of your current approach?

I'm building a tool to help with this and I'm in listening mode right now — trying to understand the real pain before I invest in marketing.

[Your name]
```

**Target response rate:** 20-30% is good for cold outreach with a research frame (vs. a sales frame).

Even 3-5 responses give you qualitative insights worth the effort. You're looking for patterns: do people describe the same frustrations? Do they all mention the same workaround?

---

## Experiment 4: Content Engagement Test (ongoing, starts today)

Post 3-5 pieces of content about the *problem* your product solves (not the product itself). Measure engagement.

**Content formats that work:**
- Twitter/X thread: "The thing no one tells you about [topic]"
- LinkedIn post: "I spent 3 months trying to solve [problem]. Here's what I learned."
- Reddit post (in the right subreddit): A genuine insight or lesson without a pitch
- Indie Hackers post: "How I [solved the problem] before building [product]"

**What strong engagement looks like:**
- Comments from people saying "I have this exact problem"
- Shares / reposts from your target audience
- DMs from people asking about your solution
- Saves / bookmarks (high intent signal on Twitter)

Use [FastWrite](https://fastwrite.ai) to generate and optimize these posts:

```
I need to write [platform] content about [problem my product solves].

My target reader: [ICP]
The insight I want to share: [what you learned about this problem]

Write 3 options that:
- Lead with a hook relevant to my ICP
- Share genuine insight (not a pitch)
- End with an engagement prompt (question or invitation to share experience)

No promotional language. No product mentions. Pure value.
```

---

## Interpreting Your Results

| Signal | Interpretation |
|--------|---------------|
| Strong engagement + multiple DMs + 5%+ smoke test conversion | Strong demand signal — accelerate marketing investment |
| Moderate engagement + some signups + community responses | Demand exists but positioning may need refinement |
| Weak engagement + low conversions + little community response | Positioning problem OR low-urgency problem OR wrong channel |
| No response to anything | Problem may not be urgent enough, or you're in the wrong communities |

If you get weak results, don't panic — but do investigate before doubling down on marketing:

```
I ran these validation experiments and got weak results:
[describe what you tried and what happened]

Help me diagnose what went wrong:
1. Is this a positioning problem (right audience, wrong message)?
2. Is this an audience problem (right message, wrong community)?
3. Is this a problem urgency problem (people have it, but not urgent enough to act)?
4. Is this a channel problem (I'm just not where my ICP is)?

What would you recommend testing next?
```

---

## Setting Your Validation Criteria Upfront

Before running experiments, define what success looks like. Use [MetricGen](https://metricgen.ai) to model out your validation thresholds:

- Minimum email signups to proceed with full marketing
- Minimum response rate on outreach to validate demand
- Minimum content engagement to validate the audience channel

Having these numbers set in advance prevents you from rationalizing weak results as "good enough."

---

## Deliverable

One markdown file: `validation-results.md`

Include:
- Which experiments you ran
- Results (quantitative where possible)
- Key qualitative insights
- Go / no-go decision
- If go: top 3 validated pain points to use in copy
- If no-go: hypothesis for what to change

---

## What's Next

With validated demand and solid research, move to [Day 1: Position](../1-position/README.md) — where you turn your research into a full positioning framework, pricing strategy, and landing page.
