[Back to Day 4: Convert](README.md)

# Build Your Support Agent

Create a SUPPORT.md that tells an agent how to handle customer questions, then wire it up to draft support replies, monitor for churn signals, and surface issues that need your attention.

## Why This Matters

Support is the moment of truth. A customer who gets a fast, accurate, human-sounding reply is more likely to stick around than one who waits 48 hours for a canned response.

Most early-stage founders handle support personally — and should. You learn from every support conversation. But you also spend 2-3 hours a day on questions that have the same 10 answers.

A support agent doesn't replace you. It drafts replies to the 80% of tickets that have clear answers, flags the 20% that need your judgment, and monitors for the signals that precede churn. You review, approve, and send. Response time drops to minutes. You stay in the loop on what matters.

---

## What You're Building

**SUPPORT.md** — The support brain:
- How to handle the 10 most common questions (with approved answers)
- Escalation rules (what gets human review immediately)
- Refund and cancellation policy (exact language)
- Tone and empathy guidelines
- What to never say (no promises about features, no blame, no corporate-speak)
- Churn signals to flag (multiple failed payments, login drops, downgrade requests)

**A working support draft workflow** — that reads tickets, drafts replies, and surfaces escalations.

---

## Implementation Tiers

### Tier 1: Claude Projects (15 minutes)

Add SUPPORT.md to your Claude Project. Use it as context for a dedicated support conversation where you paste tickets and get draft replies.

**Step 1: Generate SUPPORT.md**

```
Based on COMPANY.md, write SUPPORT.md — the support playbook for an AI agent handling customer questions for [product name].

Include:
1. The 10 most common support questions for a [product category] SaaS — with our approved answer for each
2. Escalation rules — which tickets get immediate human response (billing disputes, data questions, threats to churn, angry tone)
3. Refund policy — exact language we use, under what conditions we offer refunds, what we say when we can't
4. Tone guide — how to open replies, how to close them, how to be empathetic without being sycophantic
5. What we never say — no promises about roadmap, no admitting fault for service outages without authorization, no competing-product comparisons
6. Churn signal definitions — patterns that indicate a customer is about to cancel

My product's common support scenarios:
- [scenario 1, e.g., "Can't connect my account"]
- [scenario 2, e.g., "Why was I charged X"]
- [scenario 3, e.g., "How do I export my data"]
```

**Step 2: Draft support replies**

```
Here is a support ticket:

Subject: [subject]
From: [customer name]
Plan: [their plan]

[paste ticket body]

Using SUPPORT.md and COMPANY.md:
1. Classify this ticket: routine / needs-escalation / churn-risk
2. Draft a reply that follows our tone guidelines exactly
3. If escalation is needed, explain why and what I should do
4. Flag any SUPPORT.md gaps — if you couldn't find an approved answer, say so
```

**Step 3: Build your reply library**

As you review and send replies, note which ones work best. These become approved templates in SUPPORT.md.

---

### Tier 2: Claude Code (30 minutes)

Wire Claude Code to your support inbox via a script that pulls tickets, drafts replies, and outputs a review queue.

**Step 1: Create SUPPORT.md**

```bash
# context/SUPPORT.md generated using prompt above
```

**Step 2: Simulate the support queue**

```
I have these support tickets that came in today:

1. [paste ticket 1]
2. [paste ticket 2]
3. [paste ticket 3]

For each ticket, using SUPPORT.md and COMPANY.md:
1. Classify: routine / escalation-needed / churn-risk
2. Draft a reply (ready to send, no editing needed if routine)
3. Note confidence level: high / medium / needs-human-review

Output to support/queue-[date].md as a structured table with the draft reply in each row.
```

**Step 3: Build a metrics alert script**

```
Write a script that reads support/queue-[date].md and outputs:
- Ticket count by classification
- Average estimated resolution time
- Any patterns in churn-risk tickets (common complaints)

Save to support/weekly-summary.md
```

---

### Tier 3: Paperclip (1 hour)

A Paperclip support agent connects to your support inbox, classifies tickets, drafts replies, and surfaces escalations — with routine replies going out after a 2-hour human review window.

**Step 1: Wire SUPPORT.md to the agent**

Add to your Support Agent's `AGENTS.md`:

```markdown
## Support Agent Instructions

Before any support task, read:
- `COMPANY.md` — product, pricing, policies
- `SUPPORT.md` — approved answers, escalation rules, tone, refund policy

For each support ticket:
1. Classify: routine / escalation-needed / churn-risk
2. Draft a reply following SUPPORT.md tone guidelines exactly
3. For routine tickets: create a task in the review queue with the draft
4. For escalation/churn-risk: immediately create a high-priority task and @-mention the board
5. Track ticket patterns — if the same question appears 3+ times this week, flag it as a potential FAQ gap

Hard rules:
- Never send a reply directly — always create a review task
- Never promise features or timelines not in COMPANY.md
- Never offer a refund without board approval unless within stated policy
```

**Step 2: Set up the review queue**

Create a Paperclip project for Support. All drafted replies appear as tasks in this project. You review them in the morning and evening — 2-4 minute sessions instead of an hour of inbox work.

**Step 3: Monitor churn signals**

Configure the agent to run a weekly report:

```
Every Sunday at 6pm: review all tickets from the past 7 days.
Identify: churn signals, recurring complaints, feature requests.
Create a weekly summary task assigned to the board.
```

You get a structured weekly brief on what's bothering your customers — without touching individual tickets.

---

## Deliverable

- `SUPPORT.md` — complete support playbook with approved answers and hard limits
- A support draft workflow that reduces your ticket time by 70%
- A churn signal monitoring process

See the [SUPPORT.md template](../templates/SUPPORT.md) for a starting point.

---

## What's Next

With your support and conversion systems running, move to [Agent Company Goes Live](agent-company-live.md) — where you launch publicly, hand off operations to your agent team, and establish the rhythms of a sustained one-person company.
