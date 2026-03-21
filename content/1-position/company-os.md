[Back to Day 1: Position](README.md)

# Build Your Company OS: COMPANY.md and MARKETING.md

Your agents are only as good as the context you give them. COMPANY.md and MARKETING.md are that context — the two documents that tell every agent exactly what your business does, who it serves, and how to talk about it.

## Why This Matters

When you use Claude for marketing copy, you write a paragraph of context before every prompt. When you hire a freelancer, you spend an hour onboarding them. When you add a team member, you hand them a brand guide.

Your Company OS solves this once. Write it well, and every agent — whether Claude Projects, Claude Code, or a fully autonomous Paperclip agent — starts every task already knowing your company.

This is not optional busywork. It's the foundation of your entire agent stack. Every piece of content, every customer reply, every outreach message will be shaped by these two files.

---

## What You're Building

**COMPANY.md** — The operating brain of your business:
- Mission and the problem you solve
- Product description and key features
- Ideal Customer Profile (ICP) with specific persona details
- Pricing tiers and positioning
- Competitive landscape and your differentiators
- Brand voice and communication style
- What makes a "yes" vs. a "no" for your business

**MARKETING.md** — The playbook for reaching your customers:
- Marketing channels and why they work for your ICP
- Content types and angles that resonate
- Distribution rules (where to post, how often)
- Tone and messaging guidelines per channel
- What success looks like for each channel

---

## Implementation Tiers

### Tier 1: Claude Projects (15 minutes)

Create a Project in Claude.ai and upload these files as Project knowledge. Every conversation in the Project automatically has company context.

**Step 1: Open a conversation and generate COMPANY.md**

```
I'm building [product name] — [one sentence description].

Help me write a COMPANY.md file that will serve as the master context document for AI agents helping run my business. It should include:

1. Mission — why we exist (1 paragraph)
2. Product — what we sell, key features, how it works (2-3 paragraphs)
3. ICP — detailed ideal customer profile: role, company size, industry, pain points, goals, what they've tried before, their objections to buying (2-3 paragraphs)
4. Pricing — tiers, what each includes, positioning rationale
5. Competitors — 3-5 alternatives and our differentiator vs. each
6. Voice — 5 adjectives that describe our brand, with examples of do/don't for each
7. Hard limits — things we never say, never promise, never do

Here's what I know about my business so far:
- Target customer: [description]
- Core problem I solve: [description]
- Pricing: [your pricing]
- Main competitors: [list them]
- My strongest differentiator: [description]

Write this as a clean, complete markdown document ready to use as agent context.
```

**Step 2: Generate MARKETING.md**

```
Based on the COMPANY.md above, write a MARKETING.md that gives an AI agent the complete marketing playbook.

Include:
1. Channel strategy — which channels we use and why (Twitter/X, LinkedIn, Reddit, email, content SEO)
2. Content types — blog posts, social posts, email sequences, and the angle/format for each
3. Posting cadence — how often per channel and what time windows
4. Tone per channel — how we adjust voice for each platform
5. Distribution rules — where we cross-post, what we never automate, what requires human approval
6. What a great piece of content looks like for us (with examples or criteria)
7. Hard limits — no cold DMs, no paid-for reviews, etc.

Write this as a clean, complete markdown document.
```

**Step 3: Upload both files to your Claude Project**

Go to Claude Projects → your project → Knowledge → Add files. Upload COMPANY.md and MARKETING.md. Now every conversation in this project has full company context automatically.

---

### Tier 2: Claude Code (30 minutes)

Store your Company OS as files in your repo and use them as context in your local Claude Code sessions.

**Step 1: Create the files**

```bash
mkdir -p context
# Generate COMPANY.md and MARKETING.md using prompts above
# Save them to context/COMPANY.md and context/MARKETING.md
```

**Step 2: Create a CLAUDE.md that references them**

Create `CLAUDE.md` at your repo root:

```markdown
# Agent Context

This repository contains [your product]. Before any task, read:
- `context/COMPANY.md` — complete company and product context
- `context/MARKETING.md` — marketing playbook and channel strategy

Always match voice, messaging, and positioning from these files.
```

Claude Code automatically reads `CLAUDE.md` at session start. Your company context loads every time.

**Step 3: Verify it works**

Open Claude Code and ask:

```
Summarize our ICP from the company context files.
```

If the answer is specific and accurate, your Company OS is working.

---

### Tier 3: Paperclip (1 hour)

With Paperclip, your Company OS becomes the shared context for a team of autonomous agents — each reading the same files before every task, with no manual re-prompting.

**Step 1: Create your files at the repo root**

```
COMPANY.md
MARKETING.md
```

These live in your company GitHub repo. Every Paperclip agent is configured to reference these files via their `AGENTS.md` instructions.

**Step 2: Wire agents to read them**

In each agent's `AGENTS.md`, include:

```markdown
## Company Context

Before every task, read:
- `COMPANY.md` — company mission, product, ICP, pricing, competitors, voice
- `MARKETING.md` — marketing channels, content types, distribution rules

All output must align with the voice and positioning in these files. Do not invent claims, pricing, or features that are not in COMPANY.md.
```

**Step 3: Deploy agents with full autonomy**

Your CMO agent handles content strategy. Your Outreach agent handles community presence. Your Support agent handles customer replies. Each one starts every heartbeat by reading COMPANY.md.

When you update your pricing, change one file. All agents adapt automatically on their next heartbeat.

This is the agent company. One human, consistent context, continuous execution.

---

## Deliverable

Two markdown files in your project:
- `COMPANY.md` — complete, ready to use as agent context
- `MARKETING.md` — complete marketing playbook

Save them somewhere permanent. You'll reference these in every guide that follows.

See the [COMPANY.md template](../templates/COMPANY.md) and [MARKETING.md template](../templates/MARKETING.md) for a starting point.

---

## What's Next

With your Company OS in place, move to [Build a Content Agent](../2-content/content-agent.md) — where you create a CONTENT.md and wire up an agent that generates blog posts, social copy, and SEO content automatically.
