[Back to Day 1: Position](README.md)

# Define a Brand Voice That Survives AI-Generated Content

*Most indie SaaS sites in 2026 sound the same — flat, polite, slightly American, vaguely Stripe-adjacent. The reason is structural: founders who don't define a voice get whatever default voice their AI tools produce, and the AI defaults are converging on a polished mid-Atlantic tone that nobody chose. The version that works is a deliberate voice document — not a vibes board, but a working spec — that AI tools can apply, that human writers can audit against, and that survives a year of content production without drifting.*

## Why "Just Sound Like You" Doesn't Work

Three failure modes hit founders the same way:

- **The "I'll just write it myself" plan.** The founder writes the first 5 blog posts in their own voice. Then content production scales — AI drafts, contractor pieces, ghostwritten newsletters — and the voice immediately fragments. By month 6, half the site sounds like the founder, the other half sounds like ChatGPT, and visitors can't tell what kind of company this is. Voice is a multiplayer artifact; if it's only in your head, it doesn't survive scale.
- **The "vibes" voice doc.** The founder writes a one-page document that says "we sound smart but approachable, technical but not jargon-y, confident but not arrogant." Adjective stacking that gives no operative signal. AI tools generate the same generic copy with this prompt as without it. Writers misinterpret it. Reviewers can't tell if a piece is on-brand or off-brand. The doc is a totem, not a tool.
- **Too aggressive a voice that contradicts the buyer.** The founder picks a punchy, snarky, "we say what others won't" voice that worked for a 2017 indie hacker brand and tries to apply it to a 2026 enterprise-curious SaaS. The voice attracts the wrong audience or repels the right one. Voice is downstream of who you're selling to; pick one before picking the other.

The version that works is structured: pick a small set of voice attributes with explicit *do this / don't do this* examples, encode it in a system prompt that AI tools actually read, calibrate it on a few real artifacts before scaling, and audit it quarterly so drift doesn't accumulate.

This guide assumes you have already done [Customer Discovery Interviews](customer-discovery-interviews.md) (the voice should be calibrated to the customer's vocabulary), defined your [Ideal Customer Profile](ideal-customer-profile.md) (voice changes with audience seniority and technicality), and written your [Value Proposition](value-proposition.md) (voice is the *how* of saying the value prop). [Competitive Positioning](competitive-positioning.md) also feeds in — the voice should reinforce the trade-off you've claimed.

## What a Working Voice Document Contains

A useful voice doc has six sections. Anything less is decorative; more is bloat.

1. **Audience anchor** — one paragraph naming who reads this content and what they expect from a company like yours
2. **Voice axes** — 3–5 picked positions on a continuum (e.g., "formal ↔ casual: we're 70% casual, 30% formal")
3. **Tonal rules** — explicit "we do this / we don't do this" with example sentences
4. **Vocabulary** — the words you use, the words you don't, and the words that always trip up writers
5. **Structure rules** — how a piece of content is organized (sentence length, paragraph density, use of lists, headings cadence)
6. **Calibration examples** — 3–5 real pieces with annotations showing why they're on-voice

The whole thing should fit in 1500–3000 words. If you can't fit it in there, it's a brief, not a voice doc.

## 1. Anchor on the Audience

Before any voice attributes, name the audience explicitly. The voice serves them, not you.

```
You're helping me write the audience anchor section of my brand voice document for [your product] at [your-domain.com]. Use my customer-discovery work to ground this.

My ICP from [Ideal Customer Profile](ideal-customer-profile.md) is [paste ICP summary]. The single most-used phrase from my customer interviews was [exact phrase a customer used]. The biggest objection or skepticism my customers express is [exact objection].

Write a 1-paragraph audience anchor that names:

1. The role and seniority of the reader (e.g., "early-stage technical founders building B2B SaaS, working solo or in a small team, age 28-42, often previous engineers or PMs at larger companies")
2. The reader's vocabulary baseline (do they know what "ARR" / "MRR" / "churn" mean? Do they know "RAG" / "agent" / "vector DB"? Do they expect us to explain or to assume?)
3. The reader's emotional state when they encounter our content (skeptical? exhausted? curious? overwhelmed by options?)
4. What they specifically tune out (jargon? fake-friendly emoji-heavy copy? walls of bullet points? marketing-ese?)
5. What earns their attention (specifics? data? a hot take they hadn't considered? acknowledgment of trade-offs?)

Output the anchor paragraph (~150 words) plus a 3-bullet "writers, before you start a piece, check that:" list that operationalizes the anchor.
```

Three principles:

- **Name what the reader tunes out.** This is more useful than naming what they like. A voice that avoids the explicit tune-outs reads as on-brand even before you nail the positives.
- **Use the customer's actual words.** If they say "tools" not "platforms," use "tools." If they call it "the API thing" not "the integration layer," use "the API thing." Your voice should resonate as familiar.
- **Don't write to multiple audiences with one voice.** If you genuinely sell to both technical founders and enterprise procurement, you need two voices and two surfaces — not a single voice that compromises on both.

## 2. Pick Voice Axes With Explicit Positions

Don't write adjectives. Pick continua and place yourself on them.

```
Help me define the voice axes for [your product]. Pick exactly 5 axes from this list (or substitute better ones if my product needs them):

- **Formal ↔ Casual**: how proper is the language?
- **Authoritative ↔ Conversational**: do we lecture or chat?
- **Serious ↔ Playful**: how often do we use humor?
- **Concise ↔ Detailed**: do we say it in one line or three paragraphs?
- **Universal ↔ In-jokes**: do we reference subculture (indie hacker, dev Twitter, B2B SaaS clichés) deliberately?
- **Direct ↔ Diplomatic**: when we disagree with something, do we say so?
- **Optimistic ↔ Skeptical**: how do we frame opportunity vs trade-off?
- **Founder-voice ↔ Brand-voice**: is the company a person or an entity?
- **Technical ↔ Plain-English**: do we use specialized vocab?

For each picked axis, output:
1. The axis name
2. Where on the continuum we sit (0-100, where 0 is the left and 100 the right)
3. A 1-sentence justification (why this fits our audience)
4. Two example sentences:
   - One that hits the position correctly
   - One that overshoots in the wrong direction
5. The "exception" rule (when do we deviate?)

Example output for Formal ↔ Casual at 70% casual:
- "We sit at 70% casual because our audience is technical founders who tune out corporate-speak."
- On-voice: "Stripe Tax handles the calculation. You still file."
- Off-voice (too formal): "Stripe Tax provides comprehensive tax calculation services. The filing process remains the responsibility of the merchant."
- Off-voice (too casual): "Stripe Tax does the math, fam. Filing is on you 🙃"
- Exception: legal/security/policy pages — formality protects us and signals seriousness.

Output the 5 axes with full annotations.
```

Two principles:

- **A position number (0-100) is more useful than an adjective.** "70% casual" tells a writer to default to contractions and short sentences but reach for formal cadence in the legal section. "Casual" alone tells the writer to use emojis. The number prevents drift in both directions.
- **Always include the off-voice example.** The off-voice example is what trains AI tools and reviewers. Without it, both sides default to wherever they were trained, which is usually 50% of every axis (mid-Atlantic mush).

## 3. Write Tonal Rules — "We Do / We Don't"

Specific behaviors beat adjective stacking.

```
Generate the "we do / we don't" rules for [your product]'s voice. Aim for 8-12 paired rules. Each pair must include:

- **The rule** in plain language
- **A do-example** showing the behavior
- **A don't-example** showing the violation
- **Why** (1 line — the reason this rule exists, usually tied to audience)

Common categories to cover:

1. **Sentence length** — typical and max
2. **Paragraph length** — typical and max (e.g., "we average 2-3 sentences per paragraph; never more than 5")
3. **Headings cadence** — how often, what style (sentence case vs title case)
4. **Lists vs prose** — when to use bullets, when to use sentences
5. **Hyperbole and superlatives** — "best", "easiest", "10x", "revolutionary" — banned or rare?
6. **Cliches** — specific phrases on the do-not-use list
7. **Hedging** — "perhaps", "potentially", "may be", "we believe" — which are banned?
8. **Self-reference** — "we" / "I" / "[Product]" — which is the default subject?
9. **Reader address** — "you" vs "the reader" vs no direct address
10. **Punctuation idiosyncrasies** — em-dash use, parentheticals, ellipses, exclamation points
11. **Numbers and data** — when to use specific numbers vs ranges vs rounded figures
12. **Examples** — every claim has one? Concrete or abstract?
13. **Endings** — do we end posts with a CTA, a question, a one-line summary, or a punchline?

Output the rules as a numbered list with the 4-part structure for each (rule / do / don't / why).
```

Three principles I've watched producers re-learn:

- **Ban specific words, not categories.** "Don't be salesy" is uselessly broad. "Don't use 'leverage', 'unlock', 'streamline', 'enhance', 'cutting-edge', 'world-class', 'next-gen'" is auditable. AI tools and contractors can comply.
- **Sentence length rules dramatically improve perceived quality.** A document that mixes 8-word sentences with 35-word sentences reads as written by a human in flow. A document with 22-word average sentences reads as AI-generated. Set a target average and a max.
- **Em-dashes are a tell.** AI tools overuse em-dashes. Writers underuse them. Pick a position and enforce it. (Most polished modern brands use em-dashes deliberately, ~1 per paragraph max.)

## 4. Build the Vocabulary Lists

Specific words make voice tactile. Build three lists.

```
For [your product], generate the vocabulary lists:

**Words we use** (5-10): the words this brand prefers when generic alternatives exist
- e.g., "ship" (over "deploy"), "founder" (over "entrepreneur"), "compounding" (over "exponential")

**Words we never use** (10-20): the explicit ban list
- e.g., "leverage", "unlock", "synergy", "best-in-class", "revolutionary"
- Include the reason: usually "marketing cliche", "vague", "AI-default", or "audience-tunes-out"

**Words we get wrong often** (5-15): terms our writers misuse
- e.g., "free trial" vs "free tier" — our product offers a free tier, never a free trial; getting this wrong creates support-confusion downstream
- e.g., "agent" vs "automation" vs "assistant" — pick the precise term and use only that

**Brand-specific terms**: any names of features, concepts, or internal jargon that have a "right" form
- e.g., "Workspaces" (capitalized; never "workspaces"), "Live Mode" (two words, both capitalized)
- e.g., the customer is always "[your customer term]" — never "user", never "client"

Output the four lists. For each banned word, include 1 alternative.
```

The vocabulary list is the highest-leverage section because:
- AI tools can apply it as a hard constraint in the system prompt
- New writers / contractors / agencies pick it up in 5 minutes
- Reviewers can audit a piece against it in 30 seconds

The most common mistake: making the lists too long. Cap each at the size that fits on a single screen. A 100-item ban list is not enforced; a 15-item ban list is.

## 5. Encode the Voice as a System Prompt for AI Tools

You will use AI to generate a lot of content. Make sure the voice doc is machine-readable.

```
Compile the brand voice into a system prompt that I can paste into Claude / ChatGPT / FastWrite / any LLM-based content tool. The prompt should:

1. Open with the audience anchor (1 paragraph)
2. List the 5 voice axes with positions (compact form, e.g., "Formal-Casual: 70% casual")
3. List the do/don't rules in compact form (1 line per rule)
4. Include the vocabulary lists in full
5. Provide 2-3 calibration paragraphs at the end labeled "Examples of correct voice"
6. Provide 2-3 calibration paragraphs labeled "Examples of incorrect voice (do not write like this)"
7. End with: "When generating content, apply these rules strictly. If asked to write outside these rules, ask me to confirm the deviation."

The full prompt should be 600-1000 words. Format it for easy copy-paste into any system-prompt field.

Then output a 200-word condensed version for use in tools that have shorter context windows (e.g., short-form social tools).

Both versions live in /docs/brand-voice-system-prompt.md and are versioned in git so I can review changes over time.
```

Two principles for AI-applied voice:

- **Show, don't just tell.** AI tools follow examples better than they follow rules. The 2-3 correct + 2-3 incorrect paragraphs at the end of the prompt are doing 50% of the work.
- **Version the prompt.** Every meaningful change goes in git with a commit message. After a year, you'll see the voice has evolved — the git log tells you when and why.

## 6. Calibrate on Real Artifacts

The voice doc is a hypothesis until you've applied it to real content. Calibrate before scaling.

```
Help me run the voice calibration. The goal: produce 3-5 pieces of real content using the voice doc, audit each piece against the rules, and iterate the voice doc based on what doesn't work.

The 5 calibration pieces (pick the ones most representative of your future content production):

1. **Homepage hero copy** — 3-5 sentences, the most-edited surface
2. **A blog post intro** — 200 words, sets the voice for long-form
3. **A pricing page tier description** — 2-3 sentences, conversion-critical
4. **A cold outreach email** — 100 words, voice in 1:1 context
5. **A tweet / LinkedIn post** — 200 characters, voice in social context

For each piece:
- Generate using the voice doc + an AI tool
- Audit against the do/don't rules — score each rule pass/fail
- Note any rule that's hard to apply or that produced awkward output
- Iterate the voice doc to fix ambiguity or contradictions
- Re-generate and re-audit

Output:
1. The 5 generated pieces
2. The audit table (rule × piece, with pass/fail markers)
3. Voice doc revisions captured in git diffs
4. A 1-paragraph "what I learned" note about the voice that the doc didn't initially capture

Repeat until 3 consecutive generations pass the full audit without manual fixes. That's calibrated.
```

Calibration is where most voice docs die. Founders skip it because it feels meta — "I'll just use the voice and it'll be fine." Three months later the content is on three different voices. The 2-day calibration project is the immune system that keeps the voice consistent for years.

## 7. Train Every Content Producer

Voice that lives only in a doc is voice that drifts. Make it operational.

```
Build the voice operationalization plan. For every content producer (you, contractors, agencies, AI tools), specify:

1. **Onboarding** — what they read before producing their first piece (the voice doc, the system prompt, 5 calibrated examples)
2. **First piece review** — you personally review their first 3 pieces against the audit rubric. Use a markdown comment in the doc with line-by-line voice annotations.
3. **Ongoing audit cadence** — once per quarter, sample 5 pieces from each producer and audit. Catch drift early.
4. **Voice violations** — what happens when something off-brand ships? Treat it as a process failure, not a person failure. Update the voice doc to make the rule clearer if needed; never the producer's fault first.

For AI tools specifically:
1. **System prompt is loaded for every generation** — never let an AI tool generate without the voice prompt. Build this into the team's tooling.
2. **Output passes the audit before publication** — even AI-generated content gets the same rubric.
3. **Voice prompt updates are versioned** — when the voice evolves, every tool gets the new prompt; old generations are not retroactively rewritten.

Output the operationalization runbook plus the audit rubric template (ideally a markdown checklist you can copy-paste under any draft).
```

The audit rubric is the single most useful artifact. It turns "is this on-voice?" — a feeling — into a checklist with 12 yes/no questions. Reviewers, writers, and AI tools all benefit from the same rubric.

## 8. Quarterly Audit and Evolution

Voice is not static. Audit it, and let it evolve deliberately.

```
Generate the quarterly voice review template.

Each quarter:

1. **Sample audit**: pick 10 pieces of content shipped in the last 90 days at random. Audit each against the rubric. Score and aggregate.

2. **Drift identification**: which rules are most commonly violated? Why?
   - If it's misunderstanding: improve the rule wording
   - If it's the rule being wrong: update the rule
   - If it's a producer issue: more onboarding or different producer

3. **Audience evolution check**: has the audience changed in 90 days? New ICP segment? Different objections? If so, the voice anchor may need to shift.

4. **Vocabulary updates**: any new banned words? New preferred terms? New brand-specific terminology that needs canonical form?

5. **Voice axes review**: do the 5 axes still represent the right tensions? Sometimes a new axis emerges (e.g., "AI-skeptical ↔ AI-promotional" became relevant for many brands in 2024-2025).

6. **Update the system prompt and version**: any rule changes propagate to the AI tooling.

7. **Communicate changes**: if the voice has evolved, brief every producer.

Output the review as a 60-minute agenda I can run quarterly.
```

The quarterly review is what prevents the slow drift to AI-default voice. Without it, by year 2, the brand sounds like every other AI-content site on the internet — even if you started with a strong voice.

## What Done Looks Like

By the end of week 1 of this work:
1. **Audience anchor written** with explicit tune-outs and engagers
2. **5 voice axes picked** with positions (0-100) and on/off-voice examples
3. **8-12 do/don't rules** with concrete examples
4. **Vocabulary lists** (use / never use / get-wrong-often / brand-specific)
5. **System prompt compiled** for AI tools
6. **3-5 calibrated pieces** with audit results
7. **Audit rubric template** ready for reviewers and writers

Within 90 days:
- Every piece of customer-facing content (blog, email, social, sales) goes through the voice doc
- AI tools default to the voice prompt
- One quarterly audit completed; voice doc updated based on findings
- Producers (you + contractors + AI tools) all using the same calibration examples

Within 12 months:
- The voice is consistent enough across content types that a reader can't tell which pieces are AI-generated, founder-written, or contractor-written
- Customer-discovery feedback shows readers describe your tone in language that matches your voice axes
- The voice has evolved 1-2 axes deliberately as the audience and product evolved — captured in git history

## Common Pitfalls

- **Adjective stacking.** "Authoritative, friendly, confident, approachable" tells nobody anything. Pick continua and positions.
- **No off-voice examples.** Without them, the voice doc is half-finished and AI tools will hallucinate the missing half.
- **Skipping calibration.** Voice docs that haven't been applied to 5 real artifacts always have ambiguities that ship as content drift.
- **Voice without audience anchor.** A voice without a defined audience is just personal preference. The audience is what makes it justifiable.
- **Treating voice as decoration.** A real voice doc affects every customer-facing word, which is most of what marketing produces. It's a working tool, not a brand bible.
- **Not versioning the doc.** Voice evolves. Without git history, you can't tell when or why a rule changed.
- **Letting AI tools generate without the prompt.** Every generation loaded with the system prompt; otherwise, the tool reverts to its default mid-Atlantic voice.
- **Failing to audit AI-generated content the same way as human-written.** AI output is content like any other. It passes the rubric or it doesn't ship.

## Where Brand Voice Plugs Into the Rest of LaunchWeek

- [Customer Discovery Interviews](customer-discovery-interviews.md) — source of audience vocabulary and tune-outs
- [Ideal Customer Profile](ideal-customer-profile.md) — anchors voice to a defined reader
- [Value Proposition](value-proposition.md) — what to say; voice is how to say it
- [Competitive Positioning](competitive-positioning.md) — voice should reinforce the trade-off you've claimed
- [Landing Page Copy](landing-page-copy.md) — first surface the voice ships on
- [Founder Story](founder-story.md) — most founder-voice piece; tests "founder vs brand" axis
- [Blog Posts with AI](../2-content/blog-posts-with-ai.md) — every AI-generated post applies the voice prompt
- [Email Sequences](../2-content/email-sequences.md) — voice in 1:1 context
- [Social Content Calendar](../2-content/social-content-calendar.md) — voice in short-form social context
- [Cold Outreach](../3-distribute/cold-outreach.md) — voice in B2B 1:1 sales context
- [Founder Newsletter](../2-content/founder-newsletter.md) — most "founder voice" surface
- [Content Repurposing](../2-content/content-repurposing.md) — voice consistency across format conversions

## Verdict

Voice is the difference between a SaaS that sounds like every other SaaS and one that sounds like itself. In 2026, with AI generation lowering the floor on competent content, voice is one of the few remaining levers that genuinely differentiates how a brand reads. The investment is small (a week of work upfront, an hour quarterly thereafter) and the compounding benefit is real (every piece of content for the next 12 months reads as cohesive).

The trap is treating voice as decoration. The escape is treating it as a working spec — calibrated, machine-readable, and audited. Most indie SaaS in 2026 will skip this work and end up sounding like ChatGPT in their own brand voice. Don't be one of them.

---

[Back to Day 1: Position](README.md)
