[Back to Day 2: Content](README.md)

# Build Your Content Agent

Create a CONTENT.md that tells an agent exactly how to produce content for your business, then wire it up to generate blog posts, social copy, and SEO drafts — continuously, without you in the loop.

## Why This Matters

Most founders who try AI for content get mediocre output because they're prompting from scratch every time. No shared context. No brand memory. No style guardrails.

A content agent is different. It knows your brand, your ICP, your keywords, your editorial standards — because you wrote them down in CONTENT.md. Every piece it generates starts from that foundation.

The goal isn't one great blog post. It's a content system that runs without you having to think about it.

---

## What You're Building

**CONTENT.md** — The editorial brain:
- Keywords and topics you target
- Content types you publish and their format specs
- Approval workflow (what gets human review vs. auto-publish)
- SEO rules (word count, heading structure, internal linking)
- What a "great" post looks like for your audience
- Content calendar logic (cadence, seasonal angles, evergreen vs. timely)

**A working content agent** — configured in Claude Projects, Claude Code, or Paperclip — that reads CONTENT.md and produces publication-ready drafts.

---

## Implementation Tiers

### Tier 1: Claude Projects (15 minutes)

Add CONTENT.md to your Claude Project knowledge alongside COMPANY.md and MARKETING.md. Use it as context for a dedicated content conversation.

**Step 1: Generate CONTENT.md**

```
Based on my COMPANY.md and MARKETING.md, help me write CONTENT.md — the editorial playbook for an AI content agent.

Include:
1. Primary keywords — 10-15 keywords and phrases we target, with monthly search volume if known
2. Content types — blog posts, Twitter threads, LinkedIn posts, email newsletters (format specs for each: length, structure, tone)
3. Blog post template — exact structure we follow (intro format, H2 structure, CTA, meta description format)
4. Approval workflow — which content types auto-publish vs. require human review
5. SEO rules — minimum word count, keyword density guidance, internal linking rules, image alt text
6. Quality bar — what makes a piece "good enough to publish" vs. "needs revision"
7. What we never write about — topics, claims, or formats that don't fit our brand

My content goals:
- [e.g., rank for long-tail keywords around [topic]]
- [e.g., build Twitter following in [niche]]
- [e.g., nurture email list with weekly tips]
```

**Step 2: Run your first content brief**

```
Using CONTENT.md, write a full blog post brief for:
Topic: [your topic]
Target keyword: [keyword]

Brief should include:
- Working title (3 options)
- Target reader (specific persona from COMPANY.md)
- Angle / hook
- Outline (H2s with 2-sentence description of each)
- Key stat or proof point to lead with
- CTA at the end
- Meta description (155 chars)
```

**Step 3: Generate the full post**

```
Write the full blog post from this brief. Follow the format in CONTENT.md exactly.
Aim for [word count] words. Include internal links to [your other posts/pages] where relevant.
```

Review, edit, publish. You've got your first agent-drafted post.

---

### Tier 2: Claude Code (30 minutes)

Use Claude Code with your Company OS files to produce an entire content calendar and batch-generate drafts locally.

**Step 1: Scaffold the content system**

Create `context/CONTENT.md` using the prompt above. Then:

```bash
mkdir -p content/blog content/social content/email
```

**Step 2: Generate a content calendar**

In Claude Code:

```
Read COMPANY.md, MARKETING.md, and CONTENT.md.

Generate a 30-day content calendar with:
- 8 blog post topics (with target keyword and angle)
- 20 Twitter/X threads (5 per week, varied formats)
- 4 email newsletter topics (one per week)

Format as a markdown table with: Date | Type | Topic | Keyword/Angle | Status

Save to content/calendar.md
```

**Step 3: Batch-generate drafts**

```
From content/calendar.md, write the first 3 blog posts in full.
Follow all rules in CONTENT.md. Save each to content/blog/[slug].md.
Include meta description and internal link suggestions in each file.
```

You now have 3 publication-ready drafts in under 30 minutes.

---

### Tier 3: Paperclip (1 hour)

A Paperclip content agent wakes up on a schedule, pulls the next item from the content calendar, generates the draft, and creates a task for your review — without you ever opening a prompt.

**Step 1: Create your CONTENT.md and wire it to the agent**

Add to your CMO or Content Agent's `AGENTS.md`:

```markdown
## Content Agent Instructions

Before any content task, read:
- `COMPANY.md` — product, ICP, voice
- `CONTENT.md` — editorial standards, keyword targets, format specs

For each content task:
1. Identify the target keyword and content type from the task description
2. Write a brief (title options, outline, hook, CTA)
3. Generate the full draft following CONTENT.md format
4. Post the draft as a comment on the task and mark in_review for human approval
5. Never auto-publish — all content requires board review before publication
```

**Step 2: Create your content calendar as Paperclip tasks**

```
POST /api/companies/:companyId/issues
{
  "title": "Blog post: [topic]",
  "description": "Target keyword: [keyword]\nAngle: [angle]",
  "assigneeAgentId": "[content-agent-id]",
  "status": "todo"
}
```

Or create them in bulk from a CSV via script.

**Step 3: The agent takes it from here**

When the task is assigned, the content agent:
1. Reads COMPANY.md + CONTENT.md
2. Drafts the full post
3. Posts it as a task comment
4. Sets status to `in_review`
5. You review, approve, and it gets published

One human reviewing and approving. Zero humans writing first drafts.

---

## Deliverable

- `CONTENT.md` — complete editorial playbook
- At least 3 published or publication-ready content drafts
- A content calendar for the next 30 days

See the [CONTENT.md template](../templates/CONTENT.md) for a starting point.

---

## What's Next

With content production running, move to [Build Your Outreach Agent](../3-distribute/outreach-agent.md) — where you set up an agent that monitors communities, surfaces opportunities, and drafts outreach messages for your review.
