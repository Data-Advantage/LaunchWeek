# Demo Agent Company — Pixola

This folder is a ready-to-use Company OS for a fictional SaaS called Pixola — an AI image generation tool for indie makers and small teams. It's a working example of the system described in LaunchWeek's agent company guides.

Clone it, replace the Pixola details with your own, and you have a working Company OS in under an hour.

---

## What's Here

| File | What it is |
|------|-----------|
| `COMPANY.md` | Master context: mission, product, ICP, pricing, competitors, voice |
| `MARKETING.md` | Channel strategy, content types, distribution rules, tone per channel |
| `CONTENT.md` | Editorial standards, keyword targets, blog post template, approval workflow |
| `SUPPORT.md` | Approved answers, escalation rules, refund policy, churn signals |
| `OUTREACH.md` | Target communities, trigger keywords, response framework, hard limits |

---

## How to Use These Files

### Option 1: Claude Projects (15 minutes to set up)

1. Create a new Project at [claude.ai](https://claude.ai)
2. Upload all 5 files as Project knowledge
3. Every conversation in this project now has your full company context

Start with this prompt:
```
I've just uploaded my Company OS. Read COMPANY.md, MARKETING.md, and CONTENT.md.

Now write a blog post targeting the keyword: [your keyword].
Follow the blog post template in CONTENT.md exactly.
```

### Option 2: Claude Code (repo-based)

1. Copy these files to a `context/` folder in your project repo
2. Create a `CLAUDE.md` at your repo root:

```markdown
# Agent Context

Before any task, read:
- `context/COMPANY.md`
- `context/MARKETING.md`
- `context/CONTENT.md`
- `context/SUPPORT.md`
- `context/OUTREACH.md`

All output must match voice, positioning, and policies in these files.
```

3. Claude Code reads `CLAUDE.md` automatically at session start

### Option 3: Paperclip (full autonomous operation)

1. Copy these files to your company GitHub repo root
2. In each agent's `AGENTS.md`, add:

```markdown
## Company Context

Before every task, read:
- `COMPANY.md`
- `MARKETING.md` (CMO and content agents)
- `CONTENT.md` (content agents)
- `SUPPORT.md` (support agents)
- `OUTREACH.md` (outreach agents)

All output must match voice, positioning, and policies in these files.
```

3. Create tasks. Agents execute with full context automatically.

---

## Adapting These Files for Your Company

### Step 1: Replace the Pixola identity
In `COMPANY.md`, update:
- Company name
- Mission paragraph
- Product description and features
- ICP section (this is the most important one — be specific)
- Pricing tiers
- Competitors table

### Step 2: Update your channel strategy
In `MARKETING.md`, update:
- Which channels you're actually using
- Your ICP's communities (subreddits, Discord servers, LinkedIn groups)
- Your content cadence

### Step 3: Set your keyword targets
In `CONTENT.md`, replace Pixola's keyword table with your actual target keywords. Use a tool like Ahrefs, SEMrush, or even Google Search Console to find keywords your ICP is already searching for.

### Step 4: Write your real approved answers
In `SUPPORT.md`, replace the 10 Pixola answers with the 10 questions your customers actually ask. You probably know these from your first few weeks of support.

### Step 5: Find your communities
In `OUTREACH.md`, replace Pixola's subreddits and communities with the ones where your ICP actually hangs out. Test a few before committing — some communities are more receptive than others.

---

## The Philosophy

These files work because they solve the context problem. When you prompt AI from scratch, you spend the first 200 tokens re-explaining your company every time. When your agents read these files, they start every task already knowing who you are and how you operate.

The result: consistent output, fewer corrections, less time spent on prompts.

The files get better over time. When a support reply doesn't match your tone, update `SUPPORT.md`. When a blog post misses your angle, refine `CONTENT.md`. Each update makes every future task slightly better.

---

## More Resources

- [Build Your Company OS](../content/1-position/company-os.md) — step-by-step guide to writing your own
- [Build a Content Agent](../content/2-content/content-agent.md)
- [Build an Outreach Agent](../content/3-distribute/outreach-agent.md)
- [Build a Support Agent](../content/4-convert/support-agent.md)
- [Agent Company Goes Live](../content/5-launch/agent-company-live.md)
- [Paperclip](https://paperclip.ing) — autonomous agent platform
