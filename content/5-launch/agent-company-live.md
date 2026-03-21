[Back to Day 5: Launch](README.md)

# Agent Company Goes Live

You've built the foundation. Today you launch publicly, hand off continuous operations to your agent team, and step into the rhythm of a one-person company that runs while you sleep.

## Why This Matters

Most founders launch, then burn out maintaining what they launched. They write one blog post, then forget for a month. They monitor one community, then stop. They answer support tickets until 11pm, then let the backlog pile up.

The agent company doesn't have this problem. Your agents are scheduled. Your context files are written. Your approval workflows are in place. What you built this week runs — Monday through Sunday, whether you're focused on it or not.

Today is not the end of your launch week. It's the beginning of your operating rhythm.

---

## What Happens on Go-Live Day

**Morning: Final checks before you open the doors**
- [ ] All five Company OS files committed and in the repo (COMPANY.md, MARKETING.md, CONTENT.md, SUPPORT.md, OUTREACH.md)
- [ ] Landing page live and converting
- [ ] Support inbox wired and tested
- [ ] First week of content scheduled or queued
- [ ] Outreach monitor running

**Midday: The public launch**
- Submit to Product Hunt, Hacker News Show HN, and/or Indie Hackers
- Post your launch thread on Twitter/X
- Send your launch email to your waitlist

**Evening: The handoff**
- Review the day's agent tasks in your inbox
- Approve or reject the first round of content drafts
- Note what worked, what needs adjustment
- Update COMPANY.md or MARKETING.md if any guidance needs clarification

That's it. The agents handle everything else.

---

## The Operating Rhythm After Launch

### Daily (10 minutes)
1. Open Paperclip inbox (or your Claude Project)
2. Review agent tasks from the past 24 hours
3. Approve content drafts that are ready to publish
4. Review outreach opportunities and post the best replies
5. Review support drafts — approve routine ones, handle escalations personally

### Weekly (30 minutes)
1. Read the weekly support summary — what are customers asking?
2. Update CONTENT.md with new keyword opportunities or format tweaks
3. Review the content calendar — anything need adjusting based on what performed?
4. Check churn signals — anyone showing warning signs?
5. Update COMPANY.md if pricing, features, or positioning changed

### Monthly (1 hour)
1. Review MRR and churn metrics
2. Decide which content types are driving signups and double down
3. Update the outreach keyword list based on what's surfacing good opportunities
4. Read 5-10 support tickets personally to stay close to customer reality
5. Update any agent instructions that need refinement

---

## Implementation: Transitioning to Full Autonomy

### Tier 1: Claude Projects

Your operating rhythm lives in a dedicated "Operations" conversation in your Claude Project.

Each morning:

```
Here's what happened in the last 24 hours:
- Support tickets: [paste any that need handling]
- Outreach opportunities I found: [paste threads]
- Content due today: [from your calendar]

Using our Company OS files, help me:
1. Draft replies for each support ticket
2. Draft community replies for the outreach opportunities
3. Generate today's social posts from the content calendar
```

Review, edit, approve. 10 minutes of focused work.

### Tier 2: Claude Code

Build a daily digest script that surfaces everything needing your attention:

```
Write a script that generates a daily digest from:
- content/queue/ — content drafts pending review
- support/queue-[today].md — support drafts pending review
- outreach/opportunities-[today].md — outreach opportunities

Output to digest/[date].md as a prioritized action list:
1. High-priority items (escalations, churn risks)
2. Approve-or-reject content drafts
3. Outreach replies to post

Format each item with an estimated time to review and approve.
```

Run this each morning. Your 10-minute operating session is structured.

### Tier 3: Paperclip

Full autonomous operation with Paperclip is the endgame. Here's what it looks like at steady state:

**Agents running continuously:**
- **CMO Agent** — generates weekly content, drafts social posts, monitors what's performing
- **Outreach Agent** — monitors communities daily, surfaces opportunities with drafted replies
- **Support Agent** — drafts all support replies, flags escalations, sends weekly churn report

**Your inbox each morning:**
- 3-5 content drafts for approval
- 5-10 outreach opportunities with drafted replies
- Any support escalations or churn signals (high priority)
- A daily summary with nothing urgent (best possible inbox)

**Your role:**
- Approve or tweak the content drafts (3 minutes)
- Review outreach, copy the ones you like, post them yourself (5 minutes)
- Handle the escalations personally (variable)
- Make strategic decisions agents can't: new channels, pricing changes, pivots

You've built an agent company. The agents execute. You govern.

---

## Updating Your Company OS

The biggest mistake after launch: letting your Company OS go stale.

Your agents are only as current as their context files. When you change pricing, update COMPANY.md that day. When you launch a new feature, add it. When you discover a new competitor, document it.

Set a 15-minute monthly reminder: review all five files and ask yourself if they still reflect reality.

A maintained Company OS means your agents always sound current. A stale one means they're confidently wrong.

---

## Deliverable

- Your company is live and public
- All five Company OS files are committed, current, and in production
- Your agents are on their operating schedule
- Your daily 10-minute operating session is defined and habitual

---

## What You've Built This Week

| Day | What You Did | What's Running Now |
|-----|-------------|-------------------|
| Day 0 | Research | ICP intel, competitor map |
| Day 1 | Position | Company OS: COMPANY.md + MARKETING.md |
| Day 2 | Content | Content agent: CONTENT.md + publishing pipeline |
| Day 3 | Distribute | Outreach agent: OUTREACH.md + community monitor |
| Day 4 | Convert | Support agent: SUPPORT.md + churn monitor |
| Day 5 | Launch | Agent company live + operating rhythm |

You're not a solo founder anymore. You're an operator with a team.

---

## Keep Going

- [Behind the Scenes: How We Built This Site with Agents](behind-the-scenes.md)
- [LaunchWeek Home](../../README.md)
- Get the complete template kit: [demo-agent-company](../../demo-agent-company/)
