[Back to Day 5: Launch](README.md)

# Behind the Scenes: How We Built This Site with Agents

LaunchWeek.ai is a site about building a company with AI agents. It was built by AI agents.

This is what that actually looks like.

---

## The Setup

Data Advantage runs on [Paperclip](https://paperclip.ing) — a platform for deploying autonomous AI agents in a company structure. The company has a CEO, a CTO, a CMO, a CPO, and two engineers. Most of them are AI.

The human board sets direction. Agents execute.

Here's the agent roster that built this site:

| Agent | Role | What they did |
|-------|------|---------------|
| CEO | Strategy | Approved scope, unblocked decisions |
| CTO | Engineering | Architecture, code review, Vercel deploys |
| CMO | Marketing | Content strategy, guide structure |
| CPO | Product | Requirements, user flow, acceptance criteria |
| Founding Engineer | Code | Next.js implementation, routing, markdown system |
| Engineer 2 | Code | Additional features, bug fixes |

---

## How a Task Actually Gets Done

When the board decided to build LaunchWeek, they created an issue. The CEO broke it into epics. The CPO wrote requirements. The CTO designed the architecture and assigned engineering tasks. The engineers implemented. The CTO reviewed.

No one coordinated in Slack. No one scheduled a meeting. The agents woke up, checked their inbox, picked up tasks, and shipped.

Here's a real example. When the CPO defined the content routing system, the task description looked like this:

```
Build a markdown content routing system for LaunchWeek.

Requirements:
- Content lives in content/[day]/[topic].md
- Routes resolve as /[day]/[topic]
- Navigation links extracted from each day's README.md
- No YAML frontmatter — title comes from first H1
- Build passes on Vercel
```

The CTO reviewed the spec, checked the Next.js App Router conventions, and assigned it to the Founding Engineer with a technical note:

```
Use lib/markdown.ts for content discovery.
Dynamic route: app/[section]/[topic]/page.tsx
Avoid Pages Router — we're App Router only.
Review required before merge.
```

The Founding Engineer implemented, committed, and posted a review request. The CTO reviewed the diff, verified the Vercel build passed, and marked it done. Total human involvement: 5 minutes of board direction at the start.

---

## The AGENTS.md Pattern

Every agent in our company has an `AGENTS.md` file — a plain markdown document that tells the agent who they are, what they're responsible for, and how to behave.

Here's an excerpt from the CTO's AGENTS.md:

```markdown
## Technical Standards

### Next.js: App Router Only

All Data Advantage apps use Next.js App Router exclusively.
Do NOT use Pages Router for any reason.

## Code Review (Gate) — Two-Pass Protocol

Pass 1 — Critical (must fix before merge):
- Security issues
- Data loss or corruption risks
- Broken functionality
- Build failures

Pass 2 — Informational (nice to fix, not blocking):
- Style improvements
- Performance optimizations

If Pass 1 has issues, send it back (in_progress) with critical items only.
```

This is the same pattern as COMPANY.md — write the context once, every agent reads it every time. The CTO's decisions are consistent because the rules are written down.

---

## What the Task Queue Looks Like

At any moment, Paperclip shows the board a kanban view of every task across every agent. Here's what it looked like during the main build sprint:

**In Progress:**
- `DAT-312` CTO: Architecture review for LaunchWeek routing
- `DAT-318` Founding Engineer: Implement markdown content system
- `DAT-325` CMO: Draft Day 1 guide content
- `DAT-331` Engineer 2: Build sitemap generation

**In Review:**
- `DAT-308` CPO review: LaunchWeek requirements spec

**Done (today):**
- `DAT-290` Vercel project setup
- `DAT-297` Next.js scaffold + deploy
- `DAT-301` Tailwind + shadcn configuration

The board can see everything. Approve what needs approval. Unblock what's stuck. Everything else runs without them.

---

## When Things Go Wrong

Agents don't get it right every time. Here are real things that happened during the LaunchWeek build:

**Tailwind v3/v4 mismatch** — One engineer deployed a Tailwind v4 configuration with v3 syntax. The build passed. The site rendered completely unstyled. We caught it because the CTO's AGENTS.md included: "A passing build is necessary but not sufficient. Verify the deployed site renders correctly." The CTO opened the deployed URL, saw an unstyled page, diagnosed the Tailwind version conflict, and sent it back.

**Pages Router fallback** — An engineer added a `pages/_document.tsx` file to fix a prerender error. The CTO noticed during code review and added a note: "Explain the technical reason before removing this — did it fix a specific bug?" It had. The CTO documented why it was there and approved it.

**Duplicate content routes** — A content file was named `company-os.md` while a link in README.md referenced `company-os-guide.md`. The agent that created the link had guessed at the filename. The CTO caught the 404 during build verification.

These aren't failures of the agent system. They're normal bugs — the same ones human engineers create. The difference is the review system is built into the workflow by default.

---

## What the Agents Can't Do

There are things only humans do:

- **Set strategic direction** — Agents execute. Humans decide what to build.
- **Make pricing decisions** — Any change to pricing goes through the board.
- **Handle sensitive customer situations** — An angry customer gets a human.
- **Create legal commitments** — Terms, contracts, partnerships.
- **Approve content that mentions competitors** — Every comparison gets human eyes.
- **Generate API keys and secrets** — Credentials require board action.

The agents know their limits. When they hit them, they mark the task `blocked`, post a comment explaining what they need, and reassign to the appropriate human. The board sees it in their inbox.

---

## Try It Yourself

The best way to understand how this works is to do it.

Start with the [Day 1 Company OS guide](../1-position/company-os.md) — write your COMPANY.md and MARKETING.md in the next 30 minutes.

Then try a Claude Project with those files as knowledge. Ask it to draft a blog post. You'll immediately feel the difference between a prompt from scratch and a prompt with full company context.

If you want the full autonomous setup, [Paperclip](https://paperclip.ing) is how we run ours.

The demo company OS files in this repo are pre-filled for a fictional SaaS called Pixola:

- [demo-agent-company/](../../demo-agent-company/)

Clone them, replace the Pixola details with your own, and you have a working Company OS in under an hour.

---

## What's Next

- [Agent Company Goes Live](agent-company-live.md) — the operating rhythm after launch
- [LaunchWeek Home](../../README.md)
- [Paperclip](https://paperclip.ing) — the autonomous agent platform we use
