[Back to Day 3: Distribute](README.md)

# Build Your Outreach Agent

Create an OUTREACH.md that governs how your agent reaches communities, identifies opportunities, and drafts messages — then wire it up to monitor the spaces where your ICP lives.

## Why This Matters

Community outreach done manually doesn't scale. You find one Reddit thread, write a thoughtful reply, forget to follow up, and move on. The next day you're too busy. The opportunity window closes.

An outreach agent doesn't forget. It monitors the communities you care about, surfaces threads where your ICP is asking questions your product can answer, and drafts responses that match your voice. You approve before anything gets posted.

The key constraint: approval. Outreach that feels automated destroys trust. Every reply your agent drafts is a candidate, not a sent message, until you say so.

---

## What You're Building

**OUTREACH.md** — The rules of engagement:
- Which communities to monitor (subreddits, LinkedIn groups, Hacker News, Discord)
- What triggers a response (keywords, question types, pain points)
- Who to reach (and who to never reach — no competitors, no existing customers mid-conversation)
- Messaging rules (length, format, how to mention your product naturally)
- Hard limits (never direct-pitch, never paste the same reply twice, never DM unsolicited)
- Follow-up cadence for genuine conversations

**A working outreach monitor** — that watches for opportunities and surfaces them for your review.

---

## Implementation Tiers

### Tier 1: Claude Projects (15 minutes)

Use Claude with your Company OS to draft OUTREACH.md and generate outreach-ready responses to real threads.

**Step 1: Generate OUTREACH.md**

```
Based on COMPANY.md and MARKETING.md, write OUTREACH.md — the community outreach playbook for an AI agent.

Include:
1. Target communities — list of Reddit subreddits, LinkedIn groups, Discord servers, Slack communities, Hacker News
2. Trigger keywords — phrases that indicate someone has the problem we solve
3. Ideal thread — what a "good opportunity" looks like (question type, post age, engagement level)
4. Response framework — how to structure a helpful reply that mentions our product naturally
5. Hard limits — what we never do (copy-paste replies, DM cold, pitch without helping, post in groups that ban self-promotion)
6. Tone per platform — how outreach voice differs from blog voice
7. Follow-up rules — when and how to continue a conversation vs. let it go

My ICP community intel:
- Where they ask questions: [subreddits, communities you know about]
- Common pain points they post about: [list them]
- What kind of reply would genuinely help them: [description]
```

**Step 2: Find live opportunities**

```
I need to find Reddit threads where my ICP is asking about [problem your product solves].

Search these subreddits: [list from OUTREACH.md]
Look for threads from the last 7 days that match these patterns:
- Questions about [pain point 1]
- Frustration with [alternative tool]
- Asking for recommendations for [category your product is in]

Generate a list of 5 hypothetical thread types I should be monitoring, with example thread titles and what a helpful (non-spammy) reply would look like.
```

**Step 3: Draft your first outreach replies**

Find a real thread in your target community. Then:

```
Here is a Reddit thread in [subreddit] from my target ICP:

[paste the post text]

Using OUTREACH.md and COMPANY.md, write 3 reply options that:
1. Directly answer their question first
2. Mention my product only if it genuinely solves what they're asking about
3. Sound like a founder being helpful, not a marketer pitching
4. Follow all rules in OUTREACH.md

Mark each reply option with the expected reception: "high trust", "medium trust", or "risky".
```

---

### Tier 2: Claude Code (30 minutes)

Build a local monitoring script that surfaces opportunities from Reddit's public API, then use Claude Code to draft responses.

**Step 1: Create OUTREACH.md and store keywords**

```bash
# context/OUTREACH.md already written above
# context/keywords.txt — one trigger phrase per line
echo "best tool for [your category]" >> context/keywords.txt
echo "[problem] without [limitation]" >> context/keywords.txt
```

**Step 2: Write a monitoring script**

In Claude Code:

```
Write a Node.js script that:
1. Reads trigger keywords from context/keywords.txt
2. Uses Reddit's JSON API (no auth required) to search each target subreddit
3. Filters for posts from the last 7 days with at least 5 comments
4. Scores each post by keyword match count
5. Outputs a markdown report: outreach/opportunities-[date].md
   Format: | Score | Subreddit | Post Title | URL | Posted | Comments |

Save to scripts/monitor-reddit.js
Run it now against these subreddits: [your list]
```

**Step 3: Draft responses with Claude Code**

```
Read outreach/opportunities-[date].md and OUTREACH.md.

For the top 3 opportunities:
1. Summarize what the person is asking
2. Draft a reply that follows OUTREACH.md rules exactly
3. Rate the opportunity: should I reply, skip, or save for later?

Output to outreach/drafts-[date].md
```

---

### Tier 3: Paperclip (1 hour)

A Paperclip outreach agent monitors on a schedule, surfaces opportunities as tasks for your review, and drafts replies — you approve, copy, and post.

**Step 1: Wire OUTREACH.md to the agent**

Add to your Outreach Agent's `AGENTS.md`:

```markdown
## Outreach Agent Instructions

Before any outreach task, read:
- `COMPANY.md` — product, ICP, pricing, voice
- `OUTREACH.md` — target communities, trigger keywords, hard limits, response rules

Your workflow:
1. Monitor target communities for threads matching trigger keywords
2. Score each opportunity (high/medium/low) based on criteria in OUTREACH.md
3. For high-opportunity threads: draft a reply following OUTREACH.md rules
4. Create a Paperclip task with the thread URL, your score, and your draft reply
5. Assign the task to the board for human approval before anything is posted
6. Never post directly to any community — always create an approval task first
```

**Step 2: Set the monitoring schedule**

Configure the agent to run on a cron trigger:

```
Every weekday at 8am: monitor Reddit for new threads
Every weekday at 4pm: monitor LinkedIn and HN
```

**Step 3: Review and approve outreach**

Each morning you have a Paperclip inbox with:
- 3-5 outreach opportunities, scored
- A draft reply for each
- A link to the original thread

You read, tweak if needed, copy the reply, and post it yourself. The agent found the opportunity and wrote the draft. You maintain the human touch in the actual posting.

This is the right autonomy balance for community outreach.

---

## Deliverable

- `OUTREACH.md` — complete outreach playbook with hard limits
- An opportunity monitoring workflow (script, Claude Project, or Paperclip task)
- At least 5 outreach drafts ready to review and post

See the [OUTREACH.md template](../templates/OUTREACH.md) for a starting point.

---

## What's Next

With your distribution engine running, move to [Build Your Support Agent](../4-convert/support-agent.md) — where you create a SUPPORT.md and wire up an agent that handles customer questions, drafts replies to support tickets, and monitors for churn signals.
