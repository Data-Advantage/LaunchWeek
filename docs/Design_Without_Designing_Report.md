# DESIGN WITHOUT DESIGNING
## How AI Agent Harnesses Are Replacing Traditional Design Skills
### Article Analysis & Strategic Recommendations for Data Advantage (Paperclip Autonomous Company)

**Prepared for Michael Grimm | March 23, 2026**

---

## Executive Summary

On March 19, 2026, engineer Neethan Wu published a widely-shared article describing how he went from zero design experience to shipping polished UI weekly, using a three-layer agent harness. The article has garnered over 536K views and 1.2K likes, signaling strong resonance with the builder community.

Wu describes a framework consisting of three layers: **Skills** (design expertise encoded as instruction files), **Agent Canvases** (design surfaces that integrate with your AI agents), and **Inspiration tools** (for training visual taste). This report analyzes each tool in his stack, cross-references them with your current Data Advantage autonomous company setup on Paperclip, and provides actionable recommendations for upgrading your design automation capabilities.

---

## Article Analysis: The Three-Layer Framework

Wu frames the problem clearly: design is the discipline that builds trust before users read a word, but most engineers and product people lack the trained intuition to do it well. His solution is not to become a designer, but to assemble what he calls a "harness" — three complementary layers working together.

---

### Layer 1: Skills (The Expertise)

Skills are instruction files installed into AI coding agents (Claude Code, Cursor, Codex, etc.) that transfer design expertise into the agent's workflow. They act as borrowed taste from experienced designers, encoding anti-patterns to avoid and principles to follow.

#### Impeccable (by Paul Bakaus, creator of jQuery UI)

Wu identifies this as his most-used skill. Impeccable offers **20+ commands** including `/audit`, `/polish`, `/animate`, `/typeset`, `/arrange`, `/delight`, `/colorize`, `/overdrive`, and more. It builds on Anthropic's original frontend-design skill with curated patterns and anti-patterns across typography, color, layout, motion, and interaction design.

- **Key strength:** Catches AI-generated anti-patterns such as overused fonts (Inter, Roboto, Arial), gray-on-color text, pure black/white colors, nested cards, and the generic "AI color palette" (cyan-on-dark, purple gradients, neon accents).
- **Design context persistence:** The `/teach-impeccable` command creates a persistent `.impeccable.md` file that captures project-specific design context, loaded automatically on every session.
- **Commands in detail:** Diagnostic (`/audit`, `/critique`), Quality (`/normalize`, `/polish`, `/optimize`, `/harden`), Adaptation (`/clarify`, `/distill`, `/adapt`), Enhancement (`/animate`, `/colorize`, `/delight`, `/onboard`, `/typeset`, `/arrange`, `/overdrive`), Intensity (`/quieter`, `/bolder`), System (`/teach-impeccable`, `/extract`).
- **Anti-pattern examples it catches:**
  - Wrapping everything in cards / nesting cards inside cards
  - Using glassmorphism everywhere decoratively
  - Identical card grids with icon + heading + text repeated endlessly
  - Centered everything (left-aligned with asymmetric layouts feels more designed)
  - Bounce/elastic easing (dated and tacky; real objects decelerate smoothly)
  - Using modals unless truly no better alternative
- **Installation:** `npx skills add pbakaus/impeccable` (auto-detects Claude Code, Cursor, Gemini CLI, Codex, etc.)
- **Pricing:** Free and open-source (Apache 2.0). Over 10,000 GitHub stars.

#### Emil Kowalski's Design Engineer Skill

Created by the design engineer at Linear (previously Vercel), known for Sonner and Vaul (15M+ weekly npm downloads combined). The skill encodes his philosophy around animations, component design, restraint, speed, and purposeful motion.

- **Installation:** `npx skills add emilkowalski/skill`
- **Pricing:** Free version available. Full version bundled with his animations.dev course.
- **Best for:** Productivity tool interfaces, motion design, and the small details most developers skip.
- **Usage note:** Emil recommends using it on a case-by-case basis rather than always-on (e.g., "use the emil-anim skill to audit and improve my frontend").

#### Interface Design (by Dammyjay93)

This Claude Code plugin solves the critical problem of **design memory loss between sessions**. It stores design specifications in a persistent `.interface-design/system.md` file that loads automatically every conversation. 4,208 GitHub stars.

- **How it works:** Captures button heights, padding, border radius, spacing grids, color palettes, depth strategies, and component patterns. States design choices before creating each component and enforces them automatically.
- **Design directions supported:**
  - **Precision & Density** — Tight spacing, borders, monochrome (admin dashboards, dev tools)
  - **Warmth & Approachability** — Generous spacing, soft shadows, rounded corners (consumer apps)
  - **Sophistication & Trust** — Cool tones, layered shadows, refined (finance, enterprise)
  - **Boldness & Clarity** — High contrast, dramatic spacing, strong accents (marketing)
  - **Utility & Function** — Muted palette, minimal decoration (dev tools, documentation)
  - **Data & Analysis** — Chart-optimized colors, numbers-first (analytics, BI tools)
- **Commands:** `/interface-design:init`, `/interface-design:status`, `/interface-design:audit <path>`, `/interface-design:extract`
- **Pricing:** Free and open-source (MIT license).

#### UI Skills (by Julien Thibeaut / ibelick)

A collection of **15+ open-source skills** covering baseline UI, accessibility, motion performance, metadata, typography, animation principles, and more. Works with Claude Code, Cursor, GitHub Copilot, Windsurf, OpenCode, and other agents.

- **Notable skills:** `baseline-ui`, `fixing-accessibility`, `fixing-metadata`, `fixing-motion-performance`, `12-principles-of-animation`, `canvas-design`, `design-lab`, `frontend-design`, `interaction-design`, `interface-design`, `swiftui-ui-patterns`, `tailwind-css-patterns`, `ui-ux-pro-max`, `wcag-audit-patterns`, `web-design-guidelines`
- **Installation:** `npx skills add ibelick/ui-skills` (all skills) or individually, e.g., `npx ui-skills add baseline-ui`
- **Pricing:** Completely free and open-source.

---

### Layer 2: Agent Canvases (The Surface)

Agent canvases are design surfaces without built-in AI — they use your existing agents (Claude Code, Codex, etc.) through MCP integration. The canvas is the shell; your agent is the kernel.

#### Paper (@paper)

A code-native design tool built on real HTML and CSS. Designs export directly as functional code with no translation layer or handoff. Exposes **24 MCP tools** with full bidirectional read/write access — a key differentiator from tools that only let agents read designs.

- **Read tools:** `get_basic_info`, `get_selection`, `get_node_info`, `get_children`, `get_tree_summary`, `get_screenshot`, `get_jsx`, `get_computed_styles`
- **Write tools:** `create_artboard`, `write_html`, `set_text_content`, `update_styles`, `rename_layer`, `duplicate_node`, `delete_node`
- **Key feature:** The `get_jsx` tool returns JSX output directly, enabling agents to generate React/Tailwind code that maps naturally to the design without translation.
- **Wu's usage:** Design systems, design tokens, and page design iterations. Uses Paper as the source of truth and design reference alongside building the product.
- **Pricing:** Free tier (100 MCP calls/week). Pro at $20/month (1M calls/week — effectively unlimited).

#### Pencil (@tomkrcha)

Uses a JSON-based `.pen` format that is Git-diffable and agent-manipulable via MCP. Design files live directly in your codebase, versioned like code. Recently crossed **100,000 users**.

- **Swarm mode:** Up to 6 AI agents work simultaneously on one canvas — one handling typography, another doing layout, a third propagating the design system. Agents and humans can edit concurrently.
- **IDE integration:** Installs directly into VS Code or Cursor as an extension. Generates clean, semantic HTML, CSS, and React code in real time.
- **Figma import:** Preserves vectors, text editability, and styles. Generates matching React components 1:1.
- **Pricing:** Currently free in early access. Requires Claude Code subscription ($20/month) or Cursor for full integration.

---

### Layer 3: Inspiration & Taste (The Eye)

The third layer addresses the need to train visual taste — to know what good design looks like before directing an agent to produce it.

#### Variant (@variantui)

An AI design generation tool where you type an idea and scroll through endless non-repeating design interpretations. The **Style Dropper** feature absorbs visual DNA from any design (color palette, typographic rhythm, spatial density) and transfers it onto another design.

- **Wu's workflow:** Spends ~20 minutes daily scrolling as a warm-up. Picks something he likes, prompts it to generate variants, explores directions, then copies the code, exports as React, or copies prompts with HTML references and hands them directly to coding agents for implementation. Extracts tokens/components and builds out more views.
- **Key value:** A surprisingly smooth bridge from inspiration to actual product.

#### Mobbin (@mobbin) & Awwwards (@awwwards)

Established design reference platforms. Mobbin covers mobile apps and websites for studying real-world UX patterns (onboarding, settings, checkout). Awwwards is jury-scored and covers cutting-edge web craft with conferences and an academy.

#### Cosmos (@thecosmos)

A visual reference collection tool spanning web design, interiors, typography, photography, and architecture. Features hex color search and natural language description search for building clusters of visual references that shape design thinking over time.

---

## Tool Comparison Matrix

| Tool | Layer | Type | Price | MCP | Best For |
|------|-------|------|-------|-----|----------|
| **Impeccable** | Skills | 20+ design commands | Free | N/A | UI quality & anti-pattern prevention |
| **Emil Kowalski** | Skills | Animation/design skill | Free+ | N/A | Motion, interaction polish |
| **Interface Design** | Skills | Design memory plugin | Free | N/A | Persistent design systems |
| **UI Skills** | Skills | 15+ skill collection | Free | N/A | Accessibility, motion, baseline |
| **Paper** | Canvas | HTML/CSS canvas + MCP | Free/$20/mo | Yes (24 tools) | Design systems, page iteration |
| **Pencil** | Canvas | JSON canvas + MCP | Free | Yes | Multi-agent swarm design |
| **Variant** | Taste | AI design generator | TBD | No | Rapid exploration, style transfer |
| **Mobbin** | Taste | Design reference library | Free+ | No | UX pattern research |
| **Cosmos** | Taste | Visual reference collector | Free+ | No | Building design taste over time |

---

## Your Current Setup: Data Advantage on Paperclip

### Company Overview

Your autonomous company runs on Paperclip with **10 agents** (2 currently live), managing **20+ projects** across SaaS products, content platforms, and tools. Monthly spend is approximately **$1,360.94** with an unlimited budget allocation. Projects include Pixola, LLMReference, DeckChat, MetricGen, LaunchWeek, DataStoryBot, Flixola, ArtTV, VibeReference, VibeWeek, Bible Buddies, STORYD, BuildADataAdvantage, Kirkland Newborn, PPTX.dev, DataStoryCoach, Sarah's Recipes, Danny's Drinks, PPTX.gallery, and FastWrite.

### Current Agent Roster

| Agent | Capabilities | Model | Status |
|-------|-------------|-------|--------|
| **CEO** | Strategic oversight, task delegation | Opus 4.6 | Live |
| **CPO** | Product strategy, ICP, roadmap, competitive intel | Opus 4.6 | Idle |
| **CTO** | Technical architecture & decisions | TBD | Idle |
| **CMO** | Marketing strategy & campaigns | TBD | Idle |
| **Engineer 2** | Full-stack: monetization, A/B, MVP, analytics | Sonnet 4.6 | Live |
| **Founding Engineer** | Core engineering | TBD | Idle |
| **DevOps Engineer** | Infrastructure & deployment | TBD | Idle |
| **Researcher** | Market & technical research | TBD | Idle |
| **Ops Assistant** | Operations support | TBD | Idle |
| **CLO** | Legal operations | TBD | Idle |

### CPO Agent Configuration (Observed)

- **Adapter:** Claude (local)
- **Model:** Claude Opus 4.6
- **Thinking effort:** High
- **Working directory:** `/home/ec2-user/dataadvantage-workspace`
- **Agent instructions:** `/home/ec2-user/dataadvantage-workspace/agents/cpo/AGENTS.md`
- **Heartbeat:** Every 3600 seconds (1 hour)
- **Max turns per run:** 80
- **Environment:** PERPLEXITY_API_KEY configured
- **Recent issues completed:** Draft plan for LaunchWeek template pages + AI customization, CPO input on STORYD v2, ASCII UI mockups for FastWrite, LaunchWeek content outlines, moving DeckChat designs into DeckChat project

### Engineer 2 Agent Configuration (Observed)

- **Adapter:** Claude (local)
- **Model:** Claude Sonnet 4.6
- **Thinking effort:** Auto
- **Capabilities:** Full-stack product engineering — monetization features, A/B testing, MVP builds, analytics dashboards
- **Active work observed:** CSS pattern replacement (`container mx-auto px-4` patterns across public pages)

### Key Gap Identified

**Your company has strong coverage for strategy (CEO, CPO), engineering (Engineer 2, Founding Engineer, DevOps), marketing (CMO), research, ops, and legal. However, there is no dedicated Design agent or design skill infrastructure.** The CPO handles product strategy and feature prioritization but has no design-specific capabilities, tools, or skills configured. Your engineers are building UI (Engineer 2 was actively doing CSS pattern replacement) but without structured design guidance.

---

## Strategic Recommendations

Based on the article analysis and your current Paperclip setup, here are specific recommendations organized by implementation priority.

### Recommendation 1: Install Design Skills on Engineer Agents (Immediate, Free)

This is the highest-impact, lowest-effort change. Install Impeccable and Interface Design on every agent that writes frontend code.

**On Engineer 2, Founding Engineer (and any future engineer agents):**

1. **Install Impeccable:** Run `npx skills add pbakaus/impeccable` in the working directory. This gives agents 20+ design commands and prevents the most common AI-generated UI anti-patterns.
2. **Install Interface Design:** Run `/plugin marketplace add Dammyjay93/interface-design`. This creates persistent design memory across sessions, so design decisions compound instead of resetting.
3. **Install UI Skills baseline:** Run `npx skills add ibelick/ui-skills` for broad coverage of accessibility, motion performance, and Tailwind CSS patterns.
4. **Run `/teach-impeccable` once per project:** This captures project-specific design context into `.impeccable.md`, which all skills automatically reference.

**On the CPO agent:**

- Install Impeccable (for `/audit` and `/critique` commands to evaluate design quality during product reviews).
- Install Interface Design (so the CPO can establish and maintain design direction per project).

### Recommendation 2: Update Agent Instructions for Design Awareness (Immediate, Free)

Modify the `AGENTS.md` files for your engineer and CPO agents to include design-aware instructions:

- **Engineer agents:** Add instructions to run `/audit` before marking any frontend task as done. Add instructions to check `.interface-design/system.md` before starting any new UI component.
- **CPO agent:** Add instructions to run `/critique` on new features during review. Add a responsibility for maintaining design direction documents using Interface Design's `/interface-design:init` command at the start of each new project.
- **CEO agent:** Update the CEO's task delegation logic to include a design review step in the workflow for any frontend-facing issue.

### Recommendation 3: Create a Dedicated Design Agent (Short-term, Low Cost)

Add an 11th agent to your Paperclip company — a **Chief Design Officer (CDO)** or Design Engineer agent.

**Suggested Configuration:**

- **Name:** CDO
- **Title:** Chief Design Officer
- **Capabilities:** UI/UX design review, design system governance, visual quality assurance, brand consistency, accessibility compliance, and design direction for all Data Advantage products.
- **Model:** Claude Opus 4.6 (design requires taste and nuance; Opus handles this better than Sonnet).
- **Thinking effort:** High
- **Skills installed:** Impeccable (all 20+ commands), Emil Kowalski skill (for animation/motion), Interface Design (for design memory), UI Skills (all 15 — especially `baseline-ui`, `fixing-accessibility`, `wcag-audit-patterns`, `interaction-design`, `tailwind-css-patterns`).

**Workflow integration:**

- The CDO reviews every frontend-facing PR or task before it ships.
- The CDO maintains a master design system file (`.interface-design/system.md`) that all engineer agents reference.
- The CDO runs `/audit` and `/polish` on completed features and creates follow-up issues for design fixes.
- The CPO consults the CDO for design direction on new products (choosing from the six design directions Interface Design supports).

### Recommendation 4: Integrate Agent Canvas Tools (Medium-term)

For projects requiring visual design iteration before code, integrate Paper or Pencil as MCP servers in your agents' tool configuration.

**Paper (Recommended for design-to-code workflows):**

- Connect Paper's MCP server to Engineer 2 and the new CDO agent.
- Use Paper for design system creation, design token definition, and page layout iteration.
- Paper's `get_jsx` tool generates React/Tailwind code directly, eliminating the design-to-code translation gap.
- Free tier (100 MCP calls/week) is sufficient for design review; Pro ($20/month) for active design work.

**Pencil (Recommended for multi-agent design collaboration):**

- Pencil's swarm mode (up to 6 agents simultaneously) maps perfectly to your multi-agent Paperclip architecture.
- Install the Pencil VS Code extension in your workspace. Store `.pen` design files in your repo alongside code.
- Have the CDO, CPO, and engineers all access the same design canvas through Pencil's MCP integration.
- Currently free in early access.

### Recommendation 5: Build a Taste Reference Library (Ongoing)

Create a structured approach to design inspiration that compounds over time:

- **Researcher agent:** Add periodic tasks to use Variant, Mobbin, and Awwwards to collect and catalog design references for each project category in your portfolio (SaaS dashboards, content platforms, developer tools).
- **CPO agent:** Reference the taste library when writing product briefs and defining design direction for new projects.
- **CDO agent:** Use Cosmos to build visual reference clusters that inform the design system for each product.

---

## Implementation Roadmap

| Phase | Action | Timeline | Cost | Impact |
|-------|--------|----------|------|--------|
| **Phase 1** | Install Impeccable + Interface Design + UI Skills on all engineer and CPO agents | Day 1 | $0 | Very High |
| **Phase 2** | Update AGENTS.md files with design-aware instructions and `/audit` mandates | Day 1-2 | $0 | High |
| **Phase 3** | Create CDO agent with full design skill stack | Week 1 | ~$50/mo | Very High |
| **Phase 4** | Run `/teach-impeccable` and `/interface-design:init` on every active project | Week 1-2 | $0 | High |
| **Phase 5** | Integrate Paper MCP for design-heavy projects (Pixola, DeckChat, VibeReference) | Week 2-3 | $0-20/mo | Medium |
| **Phase 6** | Set up Pencil for multi-agent design collaboration across portfolio | Week 3-4 | $0 | Medium |
| **Phase 7** | Build taste reference library via Researcher agent + Variant/Mobbin/Cosmos | Ongoing | Minimal | Long-term |

### Estimated Additional Monthly Cost

Phases 1-2 and 4 are completely free. The CDO agent (Phase 3) would add approximately $50-100/month in Claude API costs depending on task volume (Opus 4.6 at high thinking effort). Paper Pro (Phase 5) adds $20/month if needed. **Total estimated increase: $70-120/month** on top of your current $1,360.94, representing a **5-9% budget increase** for a significant upgrade in design quality across your entire portfolio.

---

## Conclusion

Neethan Wu's article reveals a maturing ecosystem of AI design tools that are production-ready and immediately applicable to autonomous company architectures like yours. The three-layer framework (Skills + Canvas + Taste) maps cleanly onto your Paperclip setup.

Your most critical gap is the absence of any design infrastructure in your agent stack. Your engineers are writing CSS and building interfaces without the guard rails, institutional memory, or quality checks that design skills provide. The good news is that the highest-impact changes (installing Impeccable and Interface Design) are free, take minutes, and begin improving output quality immediately.

The article's core thesis applies directly to your autonomous company: **you do not need a designer agent that has years of trained intuition. You need the right harness.** The tools described above provide that harness, and your Paperclip architecture is well-positioned to adopt them.
