# CEO Agent Instructions: Design Harness Rollout (Phases 1-4)

## Context

We are implementing a "design harness" across Data Advantage to improve the UI/UX quality of all our products. This is based on the emerging best practice of installing AI design skills (instruction files that give agents design expertise) into our coding and product agents. These skills are free, open-source, and install in minutes. The expected outcome is that every frontend-facing feature our agents ship will have significantly higher design quality — catching anti-patterns, maintaining design consistency across sessions, and enforcing accessibility standards.

This rollout has four phases. Execute them in order. Create issues in Paperclip for each actionable step below, assigned to the appropriate agent.

---

## Phase 1: Install Design Skills on All Frontend-Facing Agents

**Priority:** Critical
**Timeline:** Day 1
**Cost:** $0

### Issue 1.1: Install Impeccable skill in workspace root
**Assign to:** Engineer 2
**Description:** Install the Impeccable design skill (by Paul Bakaus, 10K+ GitHub stars) at the workspace root level. This gives all agents access to 20+ design commands including `/audit`, `/polish`, `/animate`, `/typeset`, `/arrange`, `/delight`, and more. It prevents the most common AI-generated UI anti-patterns (overused fonts, gray-on-color text, pure blacks, nested cards, generic AI color palettes).

**Commands to run:**
```bash
cd /home/ec2-user/dataadvantage-workspace
npx skills add pbakaus/impeccable
```

**Acceptance criteria:**
- `.claude/skills/` directory at workspace root contains the Impeccable skill files
- Running `/audit` in a Claude Code session from the workspace root produces output (test on any existing page)

---

### Issue 1.2: Install Impeccable skill in each active project repo
**Assign to:** Engineer 2
**Description:** Install Impeccable in every project repo that has frontend code, so the skill travels with the code in version control. Run the install command from within each project directory.

**Projects to install in (all projects with frontend/UI):**
- Pixola
- DeckChat
- MetricGen
- LaunchWeek
- DataStoryBot
- Flixola
- ArtTV
- VibeReference
- VibeWeek
- STORYD
- BuildADataAdvantage
- PPTX.dev
- DataStoryCoach
- FastWrite
- PPTX.gallery

**Commands to run (repeat for each project):**
```bash
cd /home/ec2-user/dataadvantage-workspace/projects/{project-name}
npx skills add pbakaus/impeccable
```

**Acceptance criteria:**
- Each project directory listed above has `.claude/skills/` containing Impeccable
- Commit the skill files to each project repo

---

### Issue 1.3: Install Interface Design plugin in workspace root
**Assign to:** Engineer 2
**Description:** Install the Interface Design plugin (by Dammyjay93, 4.2K+ GitHub stars). This solves the critical problem of design memory loss between agent sessions. It stores design specifications (spacing grids, color palettes, component patterns, button heights, border radius, depth strategies) in a persistent `.interface-design/system.md` file that loads automatically every conversation. Without this, every agent session starts from zero on design decisions.

**Commands to run:**
```bash
cd /home/ec2-user/dataadvantage-workspace
npx skills add Dammyjay93/interface-design
```

Also install in each project repo listed in Issue 1.2 using the same pattern.

**Acceptance criteria:**
- Interface Design plugin installed at workspace root and in each project repo
- Running `/interface-design:status` produces output

---

### Issue 1.4: Install UI Skills collection in workspace root
**Assign to:** Engineer 2
**Description:** Install the UI Skills collection (by Julien Thibeaut / ibelick) — 15+ open-source skills covering baseline UI validation, accessibility auditing, motion performance, metadata, animation principles, Tailwind CSS patterns, WCAG compliance, and web design guidelines. This provides broad coverage for quality standards.

**Commands to run:**
```bash
cd /home/ec2-user/dataadvantage-workspace
npx skills add ibelick/ui-skills
```

Also install in each project repo listed in Issue 1.2.

**Acceptance criteria:**
- UI Skills installed at workspace root and in each project repo
- Running `/baseline-ui review src/` produces output

---

### Issue 1.5: Install Emil Kowalski design engineer skill
**Assign to:** Engineer 2
**Description:** Install Emil Kowalski's design engineer skill. Emil is the design engineer at Linear (previously Vercel), creator of Sonner and Vaul (15M+ weekly npm downloads combined). His skill encodes best practices for animations, component design, restraint, speed, and purposeful motion. This is especially valuable for our SaaS products (MetricGen, DataStoryBot, DataStoryCoach, STORYD).

**Commands to run:**
```bash
cd /home/ec2-user/dataadvantage-workspace
npx skills add emilkowalski/skill
```

Also install in each project repo listed in Issue 1.2.

**Acceptance criteria:**
- Emil Kowalski skill installed at workspace root and in each project repo

---

## Phase 2: Update Agent Instructions for Design Awareness

**Priority:** Critical
**Timeline:** Day 1-2
**Cost:** $0

### Issue 2.1: Update Engineer 2 AGENTS.md with design mandates
**Assign to:** CPO (or self)
**Description:** Edit `/home/ec2-user/dataadvantage-workspace/agents/engineer-2/AGENTS.md` to add the following design-aware instructions. Add these as a new section in the existing file — do not remove any existing instructions.

**Add the following section:**

```markdown
## Design Quality Standards

Before marking any frontend-facing task as done, you MUST:

1. Run `/audit` on all changed frontend files to check for design anti-patterns. Fix any critical or high-severity issues before closing the task.
2. Check if `.interface-design/system.md` exists in the project. If it does, read it before starting any new UI component and follow the established design specifications (spacing, colors, component patterns, typography).
3. If `.interface-design/system.md` does NOT exist for a project, flag this to the CPO or CDO agent as a blocking issue — do not invent design decisions from scratch.
4. When writing CSS or Tailwind classes, prefer the patterns established in the project's design system over ad-hoc choices.
5. Run `/baseline-ui review` on your changes to validate animation durations, typography scale, component accessibility, and layout patterns.

These steps are mandatory for all frontend work. Design quality is not optional — it directly impacts user trust and product perception.
```

**Acceptance criteria:**
- Engineer 2 AGENTS.md updated with the above section
- Next heartbeat run for Engineer 2 picks up the new instructions

---

### Issue 2.2: Update Founding Engineer AGENTS.md with same design mandates
**Assign to:** CPO (or self)
**Description:** Apply the identical design quality standards section from Issue 2.1 to `/home/ec2-user/dataadvantage-workspace/agents/founding-engineer/AGENTS.md`.

**Acceptance criteria:**
- Founding Engineer AGENTS.md updated

---

### Issue 2.3: Update CPO AGENTS.md with design review responsibilities
**Assign to:** Self (CEO)
**Description:** Edit `/home/ec2-user/dataadvantage-workspace/agents/cpo/AGENTS.md` to add design review responsibilities. Add the following section:

```markdown
## Design Direction & Review

You are responsible for establishing and maintaining design direction across all Data Advantage products.

1. For every new project or major feature, run `/interface-design:init` to establish the design direction. Choose from these six approaches based on the product type:
   - **Precision & Density** — for admin dashboards, dev tools (MetricGen, DataStoryCoach)
   - **Warmth & Approachability** — for consumer apps (Sarah's Recipes, Danny's Drinks, Bible Buddies)
   - **Sophistication & Trust** — for enterprise/finance products (BuildADataAdvantage, STORYD)
   - **Boldness & Clarity** — for marketing-facing products (LaunchWeek)
   - **Utility & Function** — for developer tools (PPTX.dev, FastWrite)
   - **Data & Analysis** — for analytics/BI products (MetricGen, DataStoryBot)

2. When reviewing completed frontend features, run `/critique` to evaluate design quality. Create follow-up issues for any design deficiencies.

3. Maintain the `.interface-design/system.md` file for each project as a living document. Update it when design decisions evolve.

4. When delegating frontend tasks to engineers, include a reference to the project's design system file and specify which design direction applies.
```

**Acceptance criteria:**
- CPO AGENTS.md updated with the above section

---

### Issue 2.4: Update CEO AGENTS.md with design workflow step
**Assign to:** Self (CEO)
**Description:** Update your own AGENTS.md to include design awareness in task delegation. Add:

```markdown
## Design Quality Workflow

When creating or delegating any issue that involves frontend UI changes:

1. Ensure the issue description includes a note: "Design review required — run /audit before closing."
2. For new products or major features, ensure the CPO has run /interface-design:init and established a design direction before engineering work begins.
3. If a CDO agent exists, assign a design review subtask to them for any high-priority frontend feature.
```

**Acceptance criteria:**
- CEO AGENTS.md updated

---

## Phase 3: Create CDO (Chief Design Officer) Agent

**Priority:** High
**Timeline:** Week 1
**Cost:** ~$50-100/month additional API costs

### Issue 3.1: Create CDO agent in Paperclip
**Assign to:** Self (CEO) or Ops Assistant
**Description:** Create a new agent in Paperclip with the following configuration:

**Identity:**
- **Name:** CDO
- **Title:** Chief Design Officer
- **Capabilities:** UI/UX design review, design system governance, visual quality assurance, brand consistency across the Data Advantage portfolio, accessibility compliance (WCAG 2.2), interaction design review, typography and color auditing, and design direction for all products.

**Prompt Template:**
```
You are agent {{ agent.name }}. Your role is {{ agent.role }}.

You are the design authority for Data Advantage. Your primary responsibilities are:

1. DESIGN SYSTEM GOVERNANCE: Maintain .interface-design/system.md for every active project. Ensure all design decisions are documented and consistent.

2. QUALITY ASSURANCE: Review frontend output from engineer agents. Run /audit, /polish, /critique, and /baseline-ui review on completed work. Create issues for any design deficiencies.

3. DESIGN DIRECTION: When the CPO or CEO initiates a new product or major feature, establish the design direction using /interface-design:init. Document the rationale.

4. BRAND CONSISTENCY: Ensure visual consistency across all Data Advantage products. Flag inconsistencies between products that should share design language.

5. ACCESSIBILITY: Run /fixing-accessibility audits periodically. Ensure all products meet WCAG 2.2 AA standards at minimum.

6. POLISH: Before any product launches or major releases, run /delight and /polish to elevate the overall feel. Create issues for any enhancements.

Available design commands (via installed skills):
- /audit — Full design audit for anti-patterns
- /polish — Apply design improvements
- /delight — Add surprise and craft to interactions
- /animate — Review and improve animations
- /typeset — Audit and fix typography
- /arrange — Improve layout and spatial design
- /colorize — Audit and improve color usage
- /critique — Provide design feedback
- /normalize — Enforce consistency
- /harden — Make UI robust and resilient
- /interface-design:init — Initialize design direction for a project
- /interface-design:audit — Audit code against design system
- /baseline-ui review — Validate UI patterns
- /fixing-accessibility — Audit accessibility
- /wcag-audit-patterns — WCAG 2.2 compliance audit
```

**Adapter Configuration:**
- **Adapter type:** Claude (local)
- **Working directory:** /home/ec2-user/dataadvantage-workspace
- **Agent instructions file:** /home/ec2-user/dataadvantage-workspace/agents/cdo/AGENTS.md
- **Command:** claude
- **Model:** Claude Opus 4.6
- **Thinking effort:** High
- **Enable Chrome:** Off (unless visual screenshot review is needed later)
- **Skip permissions:** On
- **Max turns per run:** 80
- **Heartbeat on interval:** Yes, every 3600 sec (1 hour) — same as CPO

**Permissions:**
- Can create new agents: Disabled

**Acceptance criteria:**
- CDO agent appears in Paperclip dashboard
- CDO agent can run a heartbeat successfully
- CDO agent has access to all design skills installed in Phase 1

---

### Issue 3.2: Create CDO AGENTS.md file
**Assign to:** Self (CEO) or CPO
**Description:** Create the file `/home/ec2-user/dataadvantage-workspace/agents/cdo/AGENTS.md` with comprehensive instructions for the CDO role. The file should include:

1. Role description (design authority for all Data Advantage products)
2. List of all available design commands and when to use each
3. Design review checklist to apply to every frontend task
4. Instructions to maintain `.interface-design/system.md` per project
5. Design direction mapping (which projects use which design direction)
6. Workflow: check inbox for assigned issues, run audits, create follow-up issues, update design system docs
7. Reference to the six design directions from Interface Design (Precision & Density, Warmth & Approachability, Sophistication & Trust, Boldness & Clarity, Utility & Function, Data & Analysis)

**Acceptance criteria:**
- AGENTS.md file created and accessible to the CDO agent
- File follows the same format as existing agent AGENTS.md files

---

### Issue 3.3: Install all design skills in CDO working environment
**Assign to:** Engineer 2 (or DevOps)
**Description:** Ensure the CDO agent has access to all four design skill sets. Since the CDO uses the same workspace root, the skills from Phase 1 should already be available. Verify access by running each skill command from the CDO's working directory context.

**Verification commands:**
```bash
# Verify Impeccable
ls /home/ec2-user/dataadvantage-workspace/.claude/skills/ | grep -i impeccable

# Verify Interface Design
ls /home/ec2-user/dataadvantage-workspace/.claude/skills/ | grep -i interface

# Verify UI Skills
ls /home/ec2-user/dataadvantage-workspace/.claude/skills/ | grep -i ui-skills

# Verify Emil Kowalski
ls /home/ec2-user/dataadvantage-workspace/.claude/skills/ | grep -i emil
```

**Acceptance criteria:**
- All four skill sets confirmed accessible from CDO's working directory

---

## Phase 4: Initialize Design Direction for Every Active Project

**Priority:** High
**Timeline:** Week 1-2
**Cost:** $0

### Issue 4.1: Run /teach-impeccable on all active projects
**Assign to:** CDO (once created) or CPO
**Description:** For each active project with frontend code, run `/teach-impeccable` to create a project-specific `.impeccable.md` file. This file captures the project's unique design context (brand colors, typography choices, component patterns, target audience, design philosophy) and is automatically loaded by Impeccable on every session.

During the `/teach-impeccable` process, answer the questions based on each project's existing design and target market. If the project doesn't have established design choices yet, use the design direction mapping below as a starting point.

**Projects and suggested context:**

| Project | Design Direction | Notes |
|---------|-----------------|-------|
| Pixola | Warmth & Approachability | Consumer creative tool |
| DeckChat | Utility & Function | Communication/productivity tool |
| MetricGen | Data & Analysis | Analytics/metrics product |
| LaunchWeek | Boldness & Clarity | Marketing/launch platform |
| DataStoryBot | Data & Analysis | Data storytelling product |
| Flixola | Warmth & Approachability | Consumer entertainment |
| ArtTV | Boldness & Clarity | Creative/media platform |
| VibeReference | Warmth & Approachability | Reference/inspiration tool |
| VibeWeek | Warmth & Approachability | Content/lifestyle product |
| STORYD | Sophistication & Trust | Enterprise data storytelling |
| BuildADataAdvantage | Sophistication & Trust | Enterprise consulting |
| PPTX.dev | Utility & Function | Developer tool |
| DataStoryCoach | Precision & Density | Analytics/coaching tool |
| FastWrite | Utility & Function | Developer/writing tool |
| PPTX.gallery | Warmth & Approachability | Gallery/showcase product |

**Commands to run (per project):**
```bash
cd /home/ec2-user/dataadvantage-workspace/projects/{project-name}
# Then in a Claude Code session: /teach-impeccable
```

**Acceptance criteria:**
- Each project directory has a `.impeccable.md` file
- The file contains project-specific design context (not generic defaults)
- Files are committed to each project's repo

---

### Issue 4.2: Run /interface-design:init on all active projects
**Assign to:** CDO (once created) or CPO
**Description:** For each active project with frontend code, run `/interface-design:init` to create the persistent design system file (`.interface-design/system.md`). Select the appropriate design direction from the table in Issue 4.1.

This is the most impactful step for long-term design consistency. Once initialized, every agent session that works on the project will automatically load the design system and follow established specifications for spacing, colors, typography, component patterns, border radius, and shadows.

**Commands to run (per project):**
```bash
cd /home/ec2-user/dataadvantage-workspace/projects/{project-name}
# Then in a Claude Code session: /interface-design:init
# When prompted, select the design direction from the table above
```

**Acceptance criteria:**
- Each project directory has `.interface-design/system.md`
- The system.md file contains: color palette, typography scale, spacing grid, border radius values, shadow/depth strategy, button specifications, and component patterns appropriate for the chosen design direction
- Files are committed to each project's repo

---

### Issue 4.3: Run initial /audit on all active projects
**Assign to:** CDO (once created) or Engineer 2
**Description:** Now that skills and design systems are in place, run `/audit` on every active project's frontend code to establish a baseline of existing design issues. Create a new issue for each project that has critical or high-severity findings, assigned to the appropriate engineer.

This gives us a clear picture of the current design debt across the portfolio and creates a backlog of improvements.

**Commands to run (per project):**
```bash
cd /home/ec2-user/dataadvantage-workspace/projects/{project-name}
# Then in a Claude Code session: /audit
```

**For each audit that finds issues:**
- Create a new Paperclip issue titled: "[Project Name] Design audit findings — initial baseline"
- Set priority based on severity of findings
- Assign to the engineer responsible for that project
- Include the full audit output in the issue description

**Acceptance criteria:**
- Every active project has been audited
- Issues created for all projects with critical or high-severity findings
- Audit results documented for tracking improvement over time

---

## Success Metrics

After completing all four phases, the following should be true:

1. **Every engineer agent** automatically has access to design skills when working on any project
2. **Every project** has a persistent design system file that survives between agent sessions
3. **Every frontend task** goes through a `/audit` check before closing
4. **A dedicated CDO agent** exists to maintain design quality standards and review work
5. **Design decisions compound** instead of resetting — each session builds on previous design choices
6. **Initial design debt** is documented and tracked as a backlog

## Dependencies Between Issues

```
Issue 1.1 ──┐
Issue 1.2 ──┤
Issue 1.3 ──┼── All Phase 1 can run in parallel
Issue 1.4 ──┤
Issue 1.5 ──┘
              │
              ▼
Issue 2.1 ──┐
Issue 2.2 ──┤
Issue 2.3 ──┼── All Phase 2 can run in parallel (after Phase 1)
Issue 2.4 ──┘
              │
              ▼
Issue 3.1 ───► Issue 3.2 ───► Issue 3.3  (Phase 3, sequential)
              │
              ▼
Issue 4.1 ──┐
Issue 4.2 ──┼── Phase 4 can run in parallel (after Phase 3)
Issue 4.3 ──┘  (Issue 4.3 should run after 4.1 and 4.2 are complete)
```

## Total Issues to Create: 13

| Issue | Title | Assignee | Priority |
|-------|-------|----------|----------|
| 1.1 | Install Impeccable skill in workspace root | Engineer 2 | Critical |
| 1.2 | Install Impeccable skill in all project repos | Engineer 2 | Critical |
| 1.3 | Install Interface Design plugin in workspace + all projects | Engineer 2 | Critical |
| 1.4 | Install UI Skills collection in workspace + all projects | Engineer 2 | Critical |
| 1.5 | Install Emil Kowalski design skill in workspace + all projects | Engineer 2 | High |
| 2.1 | Update Engineer 2 AGENTS.md with design mandates | CPO | Critical |
| 2.2 | Update Founding Engineer AGENTS.md with design mandates | CPO | Critical |
| 2.3 | Update CPO AGENTS.md with design review responsibilities | CEO | High |
| 2.4 | Update CEO AGENTS.md with design workflow step | CEO | High |
| 3.1 | Create CDO agent in Paperclip | CEO | High |
| 3.2 | Create CDO AGENTS.md file | CPO | High |
| 3.3 | Verify CDO has access to all design skills | Engineer 2 | Medium |
| 4.1 | Run /teach-impeccable on all 15 active projects | CDO | High |
| 4.2 | Run /interface-design:init on all 15 active projects | CDO | High |
| 4.3 | Run initial /audit on all projects and create debt backlog | CDO | Medium |
