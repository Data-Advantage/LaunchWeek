[Back to Day 1: Position](README.md)

# Define Your ICP for an AI Company

Your Ideal Customer Profile is the single document that decides which of your features matter, which leads your agents pursue, and which copy lands. For an AI company in 2026, the standard B2B SaaS ICP template — industry, headcount, ARR — is necessary but insufficient. The buyer pool is narrower than the addressable market, and the difference is *AI readiness*, not headcount.

This page is the playbook: what makes an AI ICP different, the seven attributes that actually matter, how to validate it, and how to feed it into the autonomous agents you'll use to do outbound, content, and conversion.

---

## Why AI ICPs Are Different

A traditional SaaS ICP optimizes for *fit*: company size, industry, role, software stack. The product slots in next to incumbents and adds incremental value.

An AI product replaces a workflow, an agent, or a budget line. That is a much bigger ask. Your buyer needs three things a traditional buyer doesn't:

1. **AI tolerance** — willingness to put a non-deterministic system in front of customers, employees, or money.
2. **Agent willingness** — comfort with autonomous decisions, not just suggestions.
3. **An AI-aligned budget** — funding that lives outside the "vendor consolidation" cost-cutting motion.

A perfect-fit firmographic match without those three is a no. A weaker firmographic match with all three is a yes. Treat AI readiness as the gating attribute.

---

## What You're Building

A one-page document that names — by name — who you sell to, what they care about, what they don't, and how to recognize them. This becomes:

- The grounding context for your sales agent's lead scoring
- The voice in your landing page copy
- The filter for which features make the roadmap
- The disqualifier for leads that look exciting but won't close

Use [FastWrite](https://fastwrite.ai) to draft and refine the document. Don't ship a generic template — fill it with names, quotes, and observed behavior.

---

## The Seven Attributes That Matter

For an AI-native company in 2026, build your ICP around these seven attributes. Skip three of them and your scoring is noise.

### 1. Company stage and growth posture

**Sweet spot**: $1M–$50M ARR incumbents actively reshaping a workflow with AI, or seed/Series-A startups with AI on the critical path. Avoid pre-revenue tinkerers and Fortune 500 procurement cycles unless you have the patience for both.

**How to detect**: Funding rounds in the last 18 months, public job posts mentioning "AI/ML/agent," recent product announcements with AI framing.

### 2. AI adoption signal

The single most predictive attribute. A company with three open AI/ML/agent roles posted in the last 90 days will close 3–5× faster than one with zero.

**How to detect**: Job board scans (LinkedIn, Wellfound), public statements from leadership about AI, an active AI working group, or named tools (ChatGPT Enterprise, Claude for Work, Cursor for Teams) already in the stack.

### 3. Technical fluency in the buyer

The person signing the order knows what an embedding is, what a hallucination is, and why latency matters. If you have to explain those concepts in the demo, your sales cycle just doubled.

**How to detect**: Title heuristics — VP Engineering, Head of Platform, Director of AI, CTO of a small company. Avoid Marketing Ops or Sales Enablement as your primary buyer for an early-stage AI product.

### 4. Budget category

Where the money comes from matters more than the dollar amount. Three good categories to find yourself in:
- **Innovation / R&D budget** — newer, faster decision cycles
- **AI transformation initiative** — board-level, multi-year, vendor-friendly
- **A specific replaced line item** — "we were spending $40K/year on [legacy tool], we're switching to you"

Avoid being a *new* line item in a procurement-heavy IT budget. The cycle is long, the win-rate is poor, and the renewal looks the same.

### 5. Risk tolerance and time horizon

AI products fail more often than traditional SaaS. Buyers willing to tolerate that — early adopters, founder-led teams, product orgs measured on outcomes — are dramatically faster to close. Risk-averse procurement teams are not your week-1 buyer.

**How to detect**: Recent product launches, public "we're rebuilding X" announcements, founder posts on X / LinkedIn about experimentation.

### 6. Trigger event in the last 90 days

Companies don't buy AI in the abstract. They buy AI when something specific happened: a competitor shipped an AI feature, a board pushed an AI mandate, a key employee left, a customer demanded an integration. ICP without a trigger event is a list, not a pipeline.

**How to detect**: News mentions, exec hires, funding announcements, public roadmap updates, conference presence.

### 7. Existing tooling that signals AI maturity

The tools they already use predict whether they'll buy yours. A modern stack — Linear, Notion, Vercel, dbt, Snowflake — correlates with AI readiness. A locked-down enterprise Microsoft stack correlates with two-year procurement cycles.

**How to detect**: BuiltWith, public engineering blogs, Stack Share profiles, hiring posts ("experience with [tool]"), Slack community presence.

---

## Write the One-Page ICP Document

Once you've picked attributes, fill out a single page. Keep it short and concrete. The format that works:

```
## ICP: [Name your ICP — one phrase, e.g., "AI-native fintech ops teams"]

### Who they are
- Company stage: [e.g., Series A–C, $5M–$50M ARR]
- Industry: [e.g., fintech, vertical SaaS, dev tools]
- Geography: [e.g., US/EU primarily, English-first]
- Team shape: [e.g., 20–80 engineers, with a Head of Platform]

### What they care about
- [Pain 1, in their language — quote a real customer]
- [Pain 2 — concrete, measurable, recent]
- [Pain 3 — what their CEO/board cares about]

### What they don't care about
- [Anti-pain 1 — features competitors push that this ICP ignores]
- [Anti-pain 2 — common SaaS pitches that won't land]

### How we recognize them
- Hiring [N] AI/ML/agent roles in the last 90 days
- Uses [tool A], [tool B], [tool C] in their stack
- Has shipped [type of feature] in the last 6 months
- Founder/CTO is active on X about [topic]

### What "yes" looks like
- They sign the order in [N] meetings
- They activate within [N] days
- They expand within [N] months

### What "no" looks like
- [Disqualifier 1 — e.g., procurement-led]
- [Disqualifier 2 — e.g., no in-house engineering]
- [Disqualifier 3 — e.g., regulatory category we can't serve yet]
```

If this document is more than one page, you don't have an ICP yet — you have a wishlist.

---

## Validate the ICP with Real Conversations

Before you scale outbound, talk to 10–20 people who match the profile. The 2026 stack for this:

- **Clay** or **Apollo.io** — build the initial enriched list. Use signals (hiring, funding, tech stack) to score 100–500 prospects against your attributes.
- **Common Room** — pull behavioral signals (community activity, GitHub stars, repo activity) to enrich the firmographic list.
- **Zoom AI Companion** or **Fathom** — record and transcribe interviews automatically. Don't take notes manually; you'll lose the language.
- **Notion or Linear** — log the interview output one row per company, with the seven attributes scored 0–10.

Run the interviews against three questions:

1. *"What's the most recent thing that broke in [the workflow your product replaces]?"*
2. *"Who else have you tried for this in the last 12 months?"*
3. *"If you bought our product tomorrow, what specifically would change in the first 30 days?"*

After 10 interviews, the ICP either tightens or you discover you have two ICPs. Don't pretend the second one doesn't exist — pick the one that converts faster and shelve the other for v2.

---

## Feed the ICP Into Your Agents

This is the step a traditional SaaS playbook doesn't have. Your AI agents — for outbound, content, qualification — need ICP grounding. Without it, they generate generic output and burn list quality.

The pattern: bake the ICP into a system prompt that every agent uses. A working template:

```
You are an autonomous outbound agent for [Your Company].

Our Ideal Customer Profile:
[Paste the one-page ICP doc here, verbatim.]

Lead scoring rubric (0-100):
- Company stage match (weight 0.20)
- AI adoption signal (weight 0.25) 
- Technical fluency of contact (weight 0.15)
- Budget category fit (weight 0.15)
- Trigger event in last 90 days (weight 0.15)
- Existing tooling signal (weight 0.10)

Score each lead. If score >= 75: write a personalized 3-sentence email
referencing the trigger event and one ICP-aligned pain point. 
If score < 75: skip and log "below ICP threshold."

Never invent a trigger event. If you can't find one in the input data, 
mark trigger event as 0 and adjust the score accordingly.
```

Run this through Claude Code or Cursor when you build the actual agent. The "never invent" instruction is critical — without it, AI outbound agents fabricate context, get reported as spam, and burn your sender reputation.

---

## Common Mistakes Specific to AI Founders

**"Everyone is our customer."** No. AI products replace specific workflows for specific people with specific budgets. If your ICP is broader than two pages, it's not an ICP, it's a fantasy. Cut until it stings.

**Chasing AI-curious users instead of AI buyers.** A user who tries every new ChatGPT plugin is not a buyer — they're a tourist. Focus on companies with budget *and* a triggering event, not on people with hobbyist interest.

**Targeting based on hype, not pain.** "We sell to companies excited about agents" is a category error. The right targeting is "we sell to companies whose [specific workflow] is breaking and where AI is one of the candidate fixes."

**Treating early customers as the ICP.** Your first 10 customers are who said yes, not who you should sell to next. They're a sample of one. Validate the ICP independently before scaling outbound to the same shape.

**Ignoring the buyer's technical fluency.** If you have to explain LLMs, embeddings, or hallucinations in the first sales call, your cycle just doubled. That's not necessarily wrong, but it should be a deliberate choice — not an accident.

**No anti-ICP.** A good ICP names who *not* to sell to. If you can't list five disqualifiers, you haven't done the work.

---

## ICP Refresh Cadence

ICPs decay. Refresh quarterly, hard-refresh annually. The triggers for an off-cycle refresh:

- Win rate drops >10 percentage points within an ICP segment
- A new buyer persona keeps showing up in qualified pipeline
- A competitor reframes the category in a way that changes who has the budget
- The underlying AI capability shifts (e.g., new models change what's possible) and your TAM expands or contracts

Each refresh: re-run 5 customer interviews, re-score 50 prospects, update the document, re-deploy the system prompt.

---

## ICP Acceptance Checklist

- [ ] One page, not three
- [ ] Names who *not* to sell to (anti-ICP)
- [ ] Includes AI tolerance, agent willingness, and budget category
- [ ] Validated against 10+ real customer or prospect interviews
- [ ] Has measurable detection signals (hiring, tools, events)
- [ ] Translated into a system prompt your agents actually use
- [ ] Has a refresh cadence (quarterly review on the calendar)

---

## Related Reading

- [Build Your Company OS](company-os.md) — COMPANY.md / MARKETING.md, where the ICP lives in your agent context
- [Value Proposition](value-proposition.md) — what you say to the ICP once you've defined it
- [Landing Page Copy](landing-page-copy.md) — turning the ICP into above-the-fold copy
- [Pricing Strategy](pricing-strategy.md) — pricing the offer for the ICP's budget category
- [Cold Outreach](../3-distribute/cold-outreach.md) — using the ICP as the basis for outbound
- [Outreach Agent](../3-distribute/outreach-agent.md) — building the agent the ICP system prompt drives

[Back to Day 1: Position](README.md)
