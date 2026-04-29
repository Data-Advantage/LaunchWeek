[Back to Day 1: Position](README.md)

# Build a Brand Identity That Looks Indie-Made (Not Indie-Lazy)

*Most indie SaaS founders ship a product with a brand identity that looks rushed — a Canva-generated logo, a generic font pairing, a stock-color palette pulled from a Tailwind preset. The product might be great; the brand looks like a 2017 hackathon project. The version that works isn't enterprise-polished (that's wrong for indie); it's deliberate, cohesive, and feels like a real choice was made. Most founders think they need a $20K agency engagement; what they actually need is 3-5 deliberate decisions made well, captured in a brand kit, and applied consistently. Done in a focused weekend, the brand identity becomes invisible — which is what good identity does.*

## Why Brand Identity Matters Even at Indie Scale

Three reasons it's worth more than founders think:

- **First-impression cost.** A prospect lands on your homepage. In 0.5 seconds, they form an impression based purely on visual signals — logo, color, typography, spacing. A "looks indie-lazy" brand makes them assume the product is also indie-lazy. The conversion impact is small per-visit but compounds across thousands of impressions.
- **Trust transfer for B2B.** A buyer evaluating B2B SaaS for their team subconsciously checks "does this look like a serious company?" Visual brand contributes substantially. Mid-market and enterprise customers in particular notice; some won't even scroll past the homepage if the brand looks rushed.
- **Compounding asset.** A brand identity built thoughtfully in week 1 of launch is the same brand identity carrying you through year 5. Done well, it never needs a "rebrand" except minor evolution. Done badly, you'll spend a quarter rebranding at year 2 — and another at year 4.

The catch: most founders over-invest OR under-invest. Over-invest = $20K agency engagement that produces a "professional" brand that doesn't fit indie scale. Under-invest = Canva logo + Tailwind defaults = generic. The right approach is in the middle: deliberate decisions; cohesive choices; documented in a kit; cheap.

This guide assumes you have already done [Customer Discovery Interviews](customer-discovery-interviews.md) (you know who you're branding for), have shipped [Brand Voice](brand-voice.md) (the verbal counterpart), and have completed [Competitive Positioning](competitive-positioning.md) (the strategic frame).

## When Brand Identity Investment Is and Isn't Right

**Invest in brand identity when:**
- You're at the launch / early-stage moment when foundational decisions matter
- Your buyer's first impression is visual (most B2B SaaS audiences)
- You can dedicate a focused weekend / week
- You have a budget of $0-$2K (not $20K)
- The brand will be used across multiple surfaces (homepage, product, social, email, etc.)

**Skip brand identity work when:**
- You're pre-PMF (positioning will change; identity will need to follow)
- Your audience genuinely doesn't care about visual brand (some niche developer-tool audiences are deliberately anti-design)
- The product itself is the brand (some products' UX IS the identity; less work needed on logo / colors)
- You're considering rebranding in next 6 months anyway

The honest middle: every B2B SaaS in 2026 needs SOMETHING beyond Tailwind defaults; very few need a $20K agency engagement.

## The Six Decisions That Comprise an Indie Brand Identity

Brand identity isn't 47 decisions; it's 6. Make them deliberately.

### 1. Logo / wordmark
The visual mark customers see in the corner of every screen.

### 2. Color palette
2-4 brand colors that appear across surfaces.

### 3. Typography
Headline + body font pair (sometimes just one).

### 4. Iconography style
The visual feel of icons (line vs filled; stroke weight; corner radius).

### 5. Imagery style
Photography, illustration, screenshots, abstract — what visuals your brand uses.

### 6. The "feel" / mood
The overall aesthetic — soft / sharp; warm / cool; busy / minimal.

For most indie SaaS in 2026: the wordmark + color palette + typography are 80% of the brand identity. Iconography + imagery are next; mood emerges from the others.

## 1. Decide on a Logo Approach

The single most consequential decision. Most founders over-think it.

```
Help me decide on a logo approach for [your product] at [your-domain.com]. My product name is [name].

Three pragmatic options:

**Option A: Wordmark only (no separate icon)**
- The product name in a chosen typeface, sometimes with a small visual flourish
- Examples: Stripe, Vercel, Linear, Plain, Loops
- Cheap, cohesive, modern
- Best for: most indie SaaS in 2026; default if no strong reason to do otherwise

**Option B: Wordmark + simple icon**
- The product name in typeface PLUS a separate symbol (the icon for favicon, app, etc.)
- Examples: Notion, Figma, Slack, GitHub, Cal.com
- Slightly more work; flexible across surfaces
- Best for: products with mobile apps (need an icon); products with strong "moment" you want a symbol for

**Option C: Custom wordmark with bespoke letterforms**
- The name set in custom-drawn type
- Examples: Stripe (custom letter shapes), Spotify, Airbnb
- Requires a designer; not realistic at $0-$2K budget
- Best for: brands with budget + identity as a major investment area

For most indie SaaS in 2026: Option A or B.

**The "do I need a separate icon" decision**:
- Yes if: mobile app icon needed; favicon would be illegible at 16x16 if it's just text; brand needs a "moment" symbol for marketing
- No if: web-only B2B SaaS where the favicon being recognizable as the wordmark is fine

**The wordmark itself**:
- Pick a typeface that matches your brand voice (if voice is "friendly", typeface is rounded / humanist; if voice is "technical", typeface is geometric / monospaced)
- Set the name; adjust kerning manually (most fonts kern poorly at logo size)
- Optional flourish: one custom letter, a punctuation mark, a small icon adjacent

**Tools for the indie path**:
- Figma (free) — most-used; design the logo as a Figma component
- Affinity Designer ($60 one-time) — alternative to Adobe
- Canva (free / paid) — last-resort; templates produce generic results
- AI tools (Midjourney for inspiration; not for final logo)

**Budget options**:
- $0: design it yourself in Figma using a quality typeface (Inter, IBM Plex, Söhne are cheap or free)
- $200-$500: hire a freelance designer for a wordmark (Twitter is full of indie designers offering this)
- $2K-$5K: small studio engagement (overkill for most indie scale)
- $10K+: agency (almost always wrong for indie)

Output:
1. The recommended option (A / B / C) for my situation
2. The typeface candidates (3-5 from Inter / IBM Plex / Söhne / Cabinet Grotesk / etc.)
3. The flourish decision (none / single letter custom / small icon)
4. The icon design if Option B (concept + iteration plan)
5. The budget recommendation
```

The single most useful tip: **start with the wordmark; add the icon only if you need one.** Stripe spent years as just "Stripe" in their typeface; nobody complained. Add complexity when you have a reason.

---

## 2. Pick a Color Palette With Intent

Colors carry meaning. Tailwind defaults are too common. Pick deliberately.

```
Help me design the color palette for [your product]. My brand voice from [Brand Voice](brand-voice.md) is [characteristics]. My competitive positioning per [Competitive Positioning](competitive-positioning.md) is [the trade-off].

The structure of a brand color palette:

**Primary brand color (1)**:
- The "this is [Product]" color
- Used on logos, primary buttons, links, highlights
- Should be: distinctive in your category (don't use blue if every competitor is blue)
- Should be: accessible (sufficient contrast on white AND dark backgrounds — check WCAG AA)

**Secondary / supporting color (1-2)**:
- Used for accents, secondary buttons, illustration
- Complements the primary
- Often: a warm color if primary is cool; or a desaturated tone

**Neutral palette (4-8 grays)**:
- Background, text, borders, disabled states
- Includes: pure white, pure black, and 4-6 grays in between
- Critical: pick ONE neutral hue (slightly warm gray or slightly cool gray) — don't mix

**Semantic colors (3-4)**:
- Success (typically green)
- Error (typically red/orange)
- Warning (typically yellow/amber)
- Info (typically blue, sometimes redundant with primary)

**The picking process**:

**Step 1: Look at your competitors' palettes**
- B2B SaaS in your space — what colors are taken?
- Avoid: same primary as a top-3 competitor (causes confusion; trust transfer goes to them)
- Differentiate: if everyone is blue, consider purple, green, orange

**Step 2: Anchor in voice**
- Friendly / approachable: warm hues (oranges, corals, rose)
- Technical / serious: cool hues (blues, deep greens, dark accents)
- Playful: high-saturation, primary colors
- Premium: muted tones, deep desaturation

**Step 3: Pick the primary; build the rest around it**
- Use a tool: [Coolors.co](https://coolors.co), [Realtime Colors](https://realtimecolors.com), or Figma plugins
- Test in context: real product UI, not on a swatch page

**Step 4: Test accessibility**
- WCAG AA minimum on all text-on-background combinations
- Use Stark Figma plugin or [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

**Tools**:
- [Coolors](https://coolors.co) — palette generator
- [Realtime Colors](https://realtimecolors.com) — preview palette in a fake product UI
- Figma + plugins — most-used by professional designers
- [Tailwind UI palettes](https://tailwindcss.com/docs/customizing-colors) — start point if Tailwind-stack

**Anti-patterns**:
- Pure Tailwind defaults (every other indie SaaS uses these; you blend in)
- 6+ brand colors (looks like a rainbow; lacks coherence)
- Neon green / electric purple as primary (hard to use across surfaces; reads as gimmicky)
- Too-similar competitor primary
- Inaccessible color contrast (excludes 5%+ of users with vision differences)

Output:
1. The 6-8 color palette (primary + secondary + neutrals + semantic) as hex codes
2. The accessibility check (WCAG AA pass / fail per combination)
3. The "where each color is used" guide (primary on CTAs; neutral on text; etc.)
4. The Figma file with the palette saved as styles
```

The single most undervalued aspect: **pick a neutral hue and stick to it.** Mixing warm gray on one screen and cool gray on the next produces incoherence that customers feel without naming. Pick one; use it consistently.

---

## 3. Pair Typography for Readability and Personality

Most indie SaaS use 1-2 typefaces. Pick them deliberately.

```
Help me pick typefaces for [your product].

The decision:

**Option A: One typeface for everything**
- Used by: Vercel (Geist), Linear (Inter), Stripe (Camphor)
- Simpler; faster page loads (one font family)
- Best for: most indie SaaS in 2026

**Option B: Two typefaces (display + body)**
- Display for headlines; body for paragraphs
- Used by: editorial / content-heavy brands
- Best for: products where typography IS part of the brand (Substack-style content products)

For most indie SaaS: Option A. The single-typeface approach.

**Picking a single typeface**:

**Modern indie defaults in 2026**:
- **Inter** — most-used in indie SaaS; free; broad weights; works everywhere
- **IBM Plex Sans** — distinctive; free; modern feel
- **Geist** (Vercel's) — clean; free; modern
- **Söhne** — premium feel; license required (~$200)
- **Cabinet Grotesk** — distinctive; free
- **General Sans** — distinctive; free
- **Switzer** — distinctive; free

**Pairings if Option B**:
- Modern serif + sans (e.g., Fraunces + Inter)
- Geometric sans + neutral sans (e.g., Cabinet Grotesk for headlines + Inter for body)
- Mono + sans (e.g., JetBrains Mono headlines + Inter body — strongly developer-tool feel)

**The "weight" decision**:
- Pick 3-4 weights of your chosen typeface
- Typical: Regular (400), Medium (500), Semibold (600), Bold (700)
- Skip Light / Thin weights for body text (illegibility on screens)

**The "size" decision** — set a type scale:
- Headings: 48 / 36 / 28 / 22 / 18 px
- Body: 16 px (default; smaller is hostile to readability)
- Captions: 13-14 px
- Use a tool like [Typescale](https://typescale.com/) to generate

**Implementation**:
- Self-host fonts where possible (faster than Google Fonts CDN; avoids GDPR issue)
- Use [Fontsource](https://fontsource.org) for self-hosting OSS fonts
- Subset to Latin charset if you don't need others (smaller file size)

**Anti-patterns**:
- 4+ typefaces on one page (incoherent; unprofessional)
- Comic Sans (obvious, but it happens)
- Generic system fonts only (looks unfinished; "we didn't pick a typeface" energy)
- Tiny body text (12px or smaller; illegible to many readers)
- Light weights for body (illegible on screens)
- Using Google Fonts CDN in EU contexts (GDPR concern; self-host instead)

Output:
1. The recommended typeface(s)
2. The weight set (3-4 weights)
3. The type scale (sizes for h1-h6 + body + caption)
4. The implementation: self-host vs CDN; subset strategy
5. The "where each style is used" guide
```

The single most consequential improvement most indie SaaS can make: **set body text to 16-18px with a generous line-height (1.5-1.7).** Cramped, small body text is the #1 typography mistake; fixing it makes everything feel more polished.

---

## 4. Define Iconography Style

Icons appear hundreds of times across the product. Consistency matters.

```
Help me decide on iconography for [your product].

The decision:

**Option A: Use an existing icon library**
- [Lucide](https://lucide.dev) — most-popular indie default; free; thousands of icons
- [Heroicons](https://heroicons.com) — Tailwind's official; free; line + filled variants
- [Phosphor](https://phosphoricons.com) — beautiful; free; many weights
- [Tabler Icons](https://tabler.io/icons) — large set; free
- [Feather Icons](https://feathericons.com) — minimal; free

For most indie SaaS in 2026: Lucide is the right answer 80% of the time.

**Option B: Custom iconography**
- Hire a designer to create a custom icon set
- Cost: $1K-$10K depending on coverage
- Best for: brands where iconography is part of the differentiator
- Skip for most indie SaaS

**The style consistency rules**:

When using Lucide / Heroicons / etc., stick to ONE library:
- Don't mix Lucide and Heroicons in the same product (different stroke weights, different corner radii)
- Pick the library; use it everywhere

**Stroke weight**:
- Lucide default is 2px; works well at most sizes
- Don't change stroke weight per icon; consistency matters

**Size**:
- Icons should be sized in even steps: 16px / 20px / 24px (most common UI sizes)
- Match icon size to text size (16px text = 16px icon next to it)

**Color**:
- Inline-icon color = current text color (use `currentColor`)
- Standalone icon color = your neutral palette
- Don't put icons in your brand primary color unless they're functional CTAs

**Filled vs. line**:
- Most modern indie SaaS use line (outline) icons
- Filled is OK but pick one approach and stick with it

Output:
1. The icon library recommendation (Lucide / Heroicons / Phosphor)
2. The size scale (16 / 20 / 24)
3. The stroke weight + color rules
4. The Figma component setup (icons as components for consistency)
```

The single most-consequential rule: **pick ONE icon library and use it everywhere.** Mixing libraries is the visible-but-unnameable signal of "indie-lazy" brand work. Pick once; stick with it.

---

## 5. Decide on Imagery Style

The imagery you use carries brand more than colors.

```
Help me decide imagery style for [your product].

The categories:

**Option A: Real product screenshots**
- Used by: Linear (heavy), Notion (heavy), Vercel (mixed)
- The product IS the marketing imagery
- Best for: products with visual UX worth showing

**Option B: Custom illustration**
- Used by: Figma (heavy), Stripe (heavy), Slack (mixed)
- A signature illustration style develops the brand
- Cost: $500-$5K initial setup with a freelance illustrator + ongoing per piece
- Best for: products where the abstraction is core (developer tools; abstract concepts)

**Option C: Photography**
- Used by: business-focused B2B (Salesforce, HubSpot)
- People-of-customers / abstract real-world
- Risk: stock photography looks generic; custom photography is expensive
- Skip for most indie SaaS

**Option D: Mixed (screenshots + small illustrations)**
- Used by: most indie SaaS in 2026
- Screenshots show the product; small illustrations frame moments
- Best for: most indie SaaS; pragmatic balance

**Option E: AI-generated illustration**
- Used by: increasingly in 2026, but with care
- Risk: AI illustration has tells (uncanny details, inconsistent style)
- Mitigate: use AI as starting point; refine in Figma
- Skip if your audience is design-conscious

For most indie SaaS in 2026: Option A or D.

**Avoid**:
- Generic stock photos (signal of "no real customers"; trust-eroding)
- Stock illustrations (recognizable; everyone uses the same illustration sets)
- AI imagery without curation (the tell-tale signs are obvious in 2026)

**For screenshots specifically**:
- Use real product, populated with realistic-but-fake data (per [Demo Video](../2-content/demo-video.md))
- Crop / annotate consistently
- Use the same visual treatment (frame, shadow, etc.) across all screenshots

**For custom illustration if you go that path**:
- Work with one illustrator long-term; consistent style emerges
- Provide the brand kit (colors + voice) so illustrations match
- Cost is ongoing, not one-time

Output:
1. The recommended imagery approach for my situation
2. The screenshot treatment (frame, shadow, background)
3. The illustration sourcing (in-house, freelance, library)
4. The "what we don't use" list (stock photos, generic illustration sets, etc.)
```

The single most-undervalued imagery decision: **realistic-but-fake demo data in screenshots.** "Acme Inc / John Doe" reads as fake; specific industry-relevant fake data ("Stripe" / "Sequoia Capital" examples) reads as professional. Customize the data to your audience.

---

## 6. Document the Brand in a Kit

A brand identity that lives only in the founder's head doesn't survive the first contractor or co-founder. Document.

```
Build the brand kit. The kit should be:

**Single source of truth** — one document, accessible to everyone

**Format**: Notion / Figma file / Linear page — whichever your team uses

**Required sections**:

**1. Logo**
- Files: SVG (for web), PNG (transparent + white background), favicon ICO
- Spacing rules: clear-zone around logo
- Size minimums: smallest legible size (typically 24px for icon, 80px for wordmark)
- Color variants: full-color, white, black, single-color
- Don't-do examples: don't recolor; don't stretch; don't add effects

**2. Colors**
- Hex / RGB / HSL values for each
- Where to use each (CTAs, text, backgrounds, etc.)
- Accessible contrast pairings table

**3. Typography**
- Typeface(s) + weights
- Type scale
- Where to use each style
- Implementation: self-host links or font-loading code

**4. Iconography**
- Library (Lucide / etc.)
- Stroke weight + size scale
- Color rules

**5. Imagery**
- Approach (screenshots / illustration / mix)
- Screenshot treatment
- Illustration style guide if applicable

**6. Voice** (per [Brand Voice](brand-voice.md))
- Linked from brand kit; not duplicated

**7. Component examples**
- Common UI patterns (buttons, cards, navigation, modals)
- Spacing rules
- Pre-made Figma components

**8. Don't-do examples**
- Visual examples of what's off-brand
- Most useful section for non-designers

**Distribution**:
- Linked from team wiki
- Shared with any contractor / freelancer / agency before they start
- Updated quarterly as the brand evolves

**Anti-patterns**:
- Brand kit that's a 60-page PDF (nobody reads it)
- Brand kit that's not maintained (drift over time)
- No "don't-do" examples (people misinterpret abstractions)

Output:
1. The brand kit Notion / Figma template
2. The required sections checklist
3. The distribution / onboarding process for new team members
4. The quarterly review cadence
```

The single most-consequential discipline: **the brand kit must be the source of truth.** When a contractor asks "what's our primary color?" the answer is a link to the kit, not a Slack message that gets lost.

---

## 7. Apply the Identity Consistently Across Surfaces

A brand kit exists only when it's used. Audit application.

```
Design the brand-application audit.

Surfaces to check:

**1. Marketing site**
- Homepage, pricing page, about, blog, individual content pages
- Every page uses brand colors, typography, voice
- Per [Landing Page Copy](landing-page-copy.md)

**2. Product UI**
- Settings, dashboard, every functional screen
- Brand colors used appropriately (not too much; primary on CTAs only)
- Typography consistent

**3. Email**
- Transactional emails (signups, password resets, billing)
- Lifecycle emails (per [Email Sequences](../2-content/email-sequences.md))
- Newsletter (per [Founder Newsletter](../2-content/founder-newsletter.md))

**4. Social**
- Twitter / X profile, LinkedIn page, YouTube channel
- Profile pictures, banners, post templates

**5. Product collateral**
- Demo videos (per [Demo Video](../2-content/demo-video.md))
- Pitch decks (per [Pitch Deck](pitch-deck.md))
- Sales collateral

**6. Documentation**
- Per [Documentation Site Builders](https://www.vibereference.com/frontend/docs-site-builders): docs site uses brand
- API docs, customer-facing help center

**7. Customer-facing dashboards**
- Per [Customer Analytics Dashboards](../../../VibeWeek/6-grow/customer-analytics-dashboards-chat.md): branded customer-data views

**The audit**:
- Quarterly: walk through each surface; check brand consistency
- Each surface scored: on-brand / mostly on-brand / off-brand
- "Off-brand" gets a fix ticket

**The "is anyone working without the brand kit" check**:
- Any contractor / agency using their own design without the kit?
- Any team member who hasn't read it?
- Onboard them; share the link

Output:
1. The audit checklist per surface
2. The quarterly review template
3. The fix-prioritization rubric
```

The single most-undervalued audit: **the email templates.** Most teams design beautiful homepages and ship transactional emails that look like they came from a different company. Audit emails specifically.

---

## What Done Looks Like

By end of week 1 of brand identity work:
1. **Logo / wordmark** designed and saved as SVG / PNG / favicon
2. **Color palette** picked with accessibility verified
3. **Typography** chosen with type scale defined
4. **Iconography library** selected (Lucide / Heroicons / Phosphor)
5. **Imagery approach** decided (screenshots, illustration, etc.)
6. **Brand kit** documented in Notion / Figma
7. **Marketing site** updated to apply the brand consistently

Within 90 days:
- Every customer-facing surface aligns to the brand kit
- 1 quarterly audit completed
- Team / contractors onboarded to the kit

Within 12 months:
- Brand identity is invisible because it works
- Customers describe the brand in language matching what you intended
- Zero "we need to rebrand" conversations
- Cohesive across product, marketing, sales, support

---

## Common Pitfalls

- **Over-investing.** $20K agency engagement for an indie SaaS produces "professional" identity that doesn't fit indie scale.
- **Under-investing.** Tailwind defaults + Canva logo = generic; trust-eroding for B2B.
- **No brand kit.** Identity drifts as team grows; contractors invent their own.
- **Generic stock photos.** Signal of "we don't have real customers"; trust-eroding.
- **Inconsistent icon libraries.** Mixing Lucide and Heroicons in one product is the indie-lazy giveaway.
- **Tiny body text.** 12-14px body is illegible; bumping to 16-18px makes everything feel more polished.
- **Pure Tailwind / Google Fonts defaults.** Indistinguishable from 1,000 other indie SaaS; doesn't differentiate.
- **Too many brand colors.** Cohesion suffers; identity lacks anchor.
- **Ignoring email templates.** They look like they're from a different company.
- **No quarterly audit.** Drift accumulates; fix later costs more.

---

## Where Brand Identity Plugs Into the Rest of LaunchWeek

- [Brand Voice](brand-voice.md) — the verbal counterpart; pair with visual identity in the brand kit
- [Competitive Positioning](competitive-positioning.md) — informs differentiation in visual choices
- [Customer Discovery Interviews](customer-discovery-interviews.md) — informs whether your audience is design-conscious
- [Product Naming](product-naming.md) — naming and visual identity work together
- [Landing Page Copy](landing-page-copy.md) — applied through brand identity
- [Demo Video](../2-content/demo-video.md) — uses brand colors / typography
- [Pitch Deck](pitch-deck.md) — branded
- [Founder Story](founder-story.md) — visual elements in the about page
- [Founder Newsletter](../2-content/founder-newsletter.md) — branded
- [Documentation Site Builders](https://www.vibereference.com/frontend/docs-site-builders) — docs use brand
- [Customer References](../4-convert/customer-references.md) — branded case studies

## Verdict

Brand identity for indie B2B SaaS in 2026 is a $0-$2K, focused-week investment that compounds for years. The teams that make 6 deliberate decisions and document them in a kit produce a product that feels cohesive; the teams that ship Tailwind defaults blend into the indie-SaaS background. Neither extreme — over-investing in agency work or under-investing in defaults — is right.

For most indie founders in 2026: a focused weekend in Figma with attention to logo, color, type, icons, imagery, and a documented brand kit produces 80% of the brand value. The remaining 20% comes from quarterly audits and consistent application. Skip the $20K agency; skip the Canva templates; do the focused middle.

---

[Back to Day 1: Position](README.md)
