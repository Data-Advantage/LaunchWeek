[Back to Day 5: Launch](README.md)

# Press Kit / Media Kit: The Self-Serve Asset Bundle Journalists Actually Use

Most founders treat the press kit as an afterthought. They get press interest, scramble together a logo and a bio, send a hastily-written paragraph, and lose the story to the next outreach reply that arrives faster. The asset bundle journalists need — high-res logos, founder photos, product screenshots, fact sheet, boilerplate paragraphs — sits unbuilt for two years until a launch deadline forces a panic-assembly at midnight. Then the inconsistencies show up in print: misspelled name, outdated headcount, stale screenshot.

A working press kit does specific work. It removes 30 minutes of journalist labor by giving them everything they need at one URL — copy/paste-ready boilerplate, downloadable logos in five formats, captioned founder photos with usage rights spelled out, screenshots that don't leak internal data. Done well, the press kit converts press interest into actual coverage. Done badly, your story dies in the journalist's inbox because they couldn't find a headshot.

This guide is the playbook for building a press / media kit that's already done before you need it — at a public URL, kept current, designed to make journalists' lives easy and your story easy to file.

## What Done Looks Like

By end of the exercise:

- A `/press` (or `/media-kit`) URL on your website
- Logos in 5 formats (SVG, PNG @1x, PNG @2x, light variant, dark variant)
- 3-5 product screenshots in high-res (1920x1080 minimum)
- Founder headshots (each founder, 2-3 photos)
- Boilerplate company description (3 lengths: 1 line, 1 paragraph, 1 page)
- Fact sheet (founders, founded year, HQ, headcount, funding, customers)
- Press contact email (real, monitored)
- Logo / brand usage guidelines
- Recent press coverage list (proof points)
- A maintenance cadence (quarterly review)

This pairs with [Press Outreach](press-outreach.md) (sending the kit), [Founder Brand](../3-distribute/founder-brand.md) (the photos and bio), [Brand Identity](../1-position/brand-identity.md) (logo and visual standards), [Trust Center & Security Page](../4-convert/trust-center-security-page.md) (procurement-side proof; complements), [Founder Story](../1-position/founder-story.md) (boilerplate draws from this), [Launch Announcements](launch-announcements.md) (kit pre-loaded for launches), and [Pitch Deck](../1-position/pitch-deck.md) (sometimes shared with reporters).

## What a Press Kit Actually Contains

Don't guess. Build the journalist's checklist.

```
Help me build the complete asset list.

The mandatory elements:

**1. Boilerplate company description (3 lengths)**

- **1-line** (logline): "[Company] makes [thing] for [audience]." (10-15 words)
- **1-paragraph** (~50-80 words): the company in one short paragraph
- **1-page** (~300-500 words): full description with origin / mission / traction

Provide all three; journalists pick by space available.

Example 1-line: "Linear is the issue tracker for high-performance teams shipping software."

Example 1-paragraph: "Linear is the issue tracker for high-performance software teams. Founded in 2019, the San Francisco-based company has raised $35M from Sequoia, Accel, and 1confirmation. Linear is used by tens of thousands of teams including Mercury, Vercel, and Loom to plan, track, and ship faster."

**2. Founder bios + photos**

For each founder:
- Name, role, pronouns (if you choose to share)
- 1-paragraph bio (50-80 words; previous companies; education optional)
- 2-3 high-res photos (headshot + casual + working)
- LinkedIn / Twitter handles

Photos: 2000x2000 px minimum; multiple aspect ratios (square, 16:9, 4:5).

**3. Logos**

- Primary logo: SVG (scalable; required)
- PNG @ 2x: 2000px wide
- PNG @ 1x: 1000px wide
- Light variant (for dark backgrounds): SVG + PNG
- Dark variant (for light backgrounds): SVG + PNG
- Icon-only / wordmark variants: SVG
- ZIP bundle: all logos in one download

**4. Brand colors**

- Primary brand color: hex / RGB / Pantone / CMYK
- Secondary palette
- Typography (font names; "use these fonts if reproducing UI")

**5. Product screenshots**

- 5+ high-res screenshots (1920x1080 minimum)
- Show the product in different states (dashboard, detail, mobile)
- Anonymized or with sample data (NEVER real customer data)
- Captioned: "Linear's project page" not "screenshot.png"

**6. Product demo video (optional but high-value)**

- 60-90 second product demo (per [demo-video](../2-content/demo-video.md))
- MP4 + YouTube link
- Caption with what the video shows

**7. Fact sheet**

- Company name + founded year
- Founders + roles
- HQ location
- Headcount (range is fine: "11-50 employees")
- Funding raised + lead investors
- Notable customers (with permission)
- Pricing tiers (range is fine)
- Key milestones (Series A, 1M users, etc.)

**8. Recent press coverage**

- 5-10 most recent press hits with date, outlet, headline, link
- Updated quarterly
- Signals to journalists "others have covered this; here''s context"

**9. Press contact**

- Email: press@yourcompany.com (real, monitored)
- Response SLA: "We respond within one business day"
- Optional: name + role of person handling press

**10. Logo / brand usage guidelines**

- "You may use [logo] in [these contexts]"
- "Don''t recolor; don''t stretch; minimum size 80px"
- Provides legal / brand cover; reduces journalist hesitation

**Optional, high-value**:

- Founder pull-quotes (3-5 quotable sentences ready to use)
- Industry data / research (if you have proprietary stats)
- Customer logos (with permission)
- Awards / recognition
- Investor logos
- Comparison-against-competitors (if you have a clear story)

For my company:
- Inventory what I have today
- Identify the gaps
- The first version (minimum viable kit) vs full version

Output:
1. The asset checklist with status (✓ have / ✗ need / ~ partial)
2. The MVP press kit (week 1)
3. The full press kit (month 1)
```

The biggest unforced error: **launching the press kit with placeholder content that says "TBD" or "coming soon."** A press kit must be 100% complete on launch — even a minimal one. Half-done signals neglect; journalists assume the rest of the company is the same. Better to ship 6 perfect assets than 12 half-done ones.

## Build the Page

A press kit lives on the web. Build it once; maintain forever.

```
Help me design the press-kit page.

The structure:

**URL**: /press or /media-kit (both work; pick one and 301 the other)

**Page layout (top to bottom)**:

1. **Hero**: "Press & Media Kit" heading + 1-paragraph description of what''s on the page
2. **About [Company]**: the 1-paragraph boilerplate (most journalists copy this)
3. **Quick facts**: visual stat-box (founded, HQ, founders, funding, customers)
4. **Founders**: photo + bio for each, side-by-side
5. **Product**: screenshots in a grid, captioned
6. **Brand assets**: logo grid + ZIP download button
7. **Boilerplate descriptions**: copy-paste 1-line / 1-paragraph / 1-page versions
8. **Recent coverage**: list of press hits
9. **Press contact**: email + response time
10. **Brand guidelines**: usage rules

**Design principles**:

- Single page (don''t require navigation; journalists hate it)
- Direct download links (no signup walls; no email capture; no popups)
- Copy-paste-friendly text blocks (`pre` or selectable text)
- ZIP bundle for "give me everything" downloads
- Fast loading (compressed assets; no auto-play video)
- Mobile-friendly (some journalists work from phone at events)

**Anti-patterns**:

- Email-capture wall before downloads (kills 80% of journalist use)
- "Contact us for press kit" (immediately disqualifies you)
- Downloads in proprietary formats (.psd, .ai, .indd) — use SVG/PNG
- Stale content (last updated 18 months ago)
- No press contact email
- Logos hidden behind copyright threats

**Technical implementation**:

- Static page on your marketing site (Next.js / Astro / etc.)
- Assets hosted on CDN (Vercel / Cloudflare)
- Routes: `/press` (page), `/press/assets.zip` (bundle), `/press/logo.svg` etc.
- SEO: title "Press & Media Kit | [Company]"; meta description
- Schema markup: Organization (per [trust-center-security-page](../4-convert/trust-center-security-page.md))

**The "30-second test"**:

A journalist on deadline lands on your press page. Within 30 seconds, can they:
- Copy a boilerplate description?
- Download a logo?
- See a founder photo?
- Find an email to ask follow-up questions?

If yes to all: the page works. If no to any: fix.

For my page:
- The page builder / framework
- The asset hosting plan
- The mobile experience
- The 30-second test results

Output:
1. The page wireframe
2. The technical implementation (which framework, where assets live)
3. The launch checklist
4. The 30-second test outcome
```

The biggest page-design mistake: **gating downloads behind email capture.** "Enter your email to download our logo" reads as desperate to a journalist on deadline; they''ll find a different company to write about. The press kit''s job is to make their work easier, not generate marketing leads. Trade off: the company gets coverage; you don''t need a name/email to make that happen.

## Boilerplate That Doesn't Sound Like Boilerplate

The boilerplate is what 60% of articles will quote. Get it right.

```
Help me write boilerplate that journalists will actually use.

The hierarchy:

**1-line (logline)**

> "[Company] makes [thing] for [audience]."

This is the elevator pitch. 10-15 words.

Examples:
- "Linear is the issue tracker for high-performance teams shipping software."
- "Stripe is online payments infrastructure for the internet."
- "Notion is the connected workspace for teams."

**Test**: read it aloud; sounds natural? Could a journalist quote it without modifying?

**1-paragraph**

> "[Company] is [what we do]. Founded in [year], [HQ-based] [Company] has raised [$amount] from [investors]. [Company] is used by [number / category] of [users] including [3 named customers] to [outcome]."

50-80 words. Cover: what / when / where / funding / customers / outcome.

**1-page**

300-500 words. Includes:
- Origin story (1 paragraph; per [founder-story](../1-position/founder-story.md))
- Problem we''re solving (1-2 paragraphs)
- The product (1 paragraph)
- Traction / customers (1 paragraph)
- Investors (1 paragraph)
- What''s next / vision (1 paragraph; per [mission-vision-statement](../1-position/mission-vision-statement.md))

**Style notes**:

- Active voice, third person
- Numbers > adjectives ("10K customers" beats "many customers")
- Avoid superlatives ("the best," "revolutionary," "cutting-edge")
- No marketing-speak ("empower," "leverage," "synergy")
- Past-tense for traction; present-tense for current state
- Past-tense for funding ("raised $5M") not present ("has raised $5M")

**Common boilerplate mistakes**:

- Too long (journalists trim; pre-trim it for them)
- Too vague ("a software solution" — what kind?)
- Too jargon-y (a TechCrunch reporter shouldn''t need to look up terms)
- Missing key facts (no founded date; no HQ; no funding)
- Contradictions across pages (your /about says 5 founders; press kit says 3 — get one source of truth)

**The "single source of truth" rule**:

Boilerplate appears in:
- /about page
- /press page
- LinkedIn About
- Crunchbase
- Pitch decks
- Email signatures

Pick ONE master copy (the press kit''s 1-paragraph), then audit-and-update everywhere quarterly. Drift is the #1 boilerplate problem.

For my boilerplate:
- Current 1-line / 1-paragraph / 1-page versions
- The conflicts across surfaces
- The rewrite

Output:
1. The 3 length variants
2. The single-source-of-truth location
3. The audit list of where the boilerplate appears
4. The "test it on a stranger" plan
```

The biggest boilerplate mistake: **multiple inconsistent versions across different surfaces.** A journalist looks at /about, your LinkedIn, and Crunchbase — and finds three different headcount numbers, two different founding years, and one mention of an investor who isn''t actually on the cap table. This kills trust faster than anything; fix the inconsistencies before sending a single press email.

## Logo and Asset Hygiene

Journalists need logos. Make sure yours work everywhere.

```
Help me prepare logos and brand assets.

The asset matrix:

| Asset | Format | Size | Purpose |
|---|---|---|---|
| Primary logo | SVG | Vector | Print + web (scalable) |
| Primary logo @2x | PNG | 2000x[ratio]px | Print + retina screens |
| Primary logo @1x | PNG | 1000x[ratio]px | Standard web |
| Logo on dark | SVG + PNG | Same as above | Use on dark backgrounds |
| Logo on light | SVG + PNG | Same as above | Use on light backgrounds |
| Wordmark only | SVG + PNG | — | Type-only contexts |
| Icon only | SVG + PNG | Square | App icons, favicons |
| Founder headshots | JPG | 2000x2000+ | Articles |
| Product screenshots | PNG | 1920x1080+ | Article visuals |
| Product video | MP4 | 1080p+ | Embed in articles |

**Why SVG matters**:

- Scales to any size without quality loss
- Works in print (newspaper, magazine)
- Works on retina screens
- Smaller file size for simple logos

If a journalist asks for "the SVG" and you only have PNG, you look amateur.

**Why @2x / retina matters**:

- Most modern displays are retina; @1x looks fuzzy
- Always provide @2x (twice the pixel count)
- Some publications need @3x (rare; provide on request)

**Testing logos**:

- On white background ✓
- On black background ✓ (does the dark variant work?)
- On a photo background ✓ (does it have enough contrast?)
- Tiny (favicon at 32x32) ✓
- Massive (billboard at 10ft) ✓

If any fails: redesign the variant before launch.

**Brand colors documentation**:

- Hex: #0066CC
- RGB: 0, 102, 204
- CMYK: 100, 50, 0, 20 (for print)
- Pantone: 2935 C (for branded merchandise)

Always include CMYK + Pantone for print contexts.

**Logo usage guidelines (the legal section)**:

```
Logo usage:

You may:
- Use our logo to refer to [Company] in editorial / news contexts
- Resize while maintaining aspect ratio
- Place on backgrounds with sufficient contrast

You may not:
- Modify the logo (recolor, stretch, distort)
- Combine with other logos / wordmarks
- Use in ways that imply endorsement
- Use the logo at sizes below 80px wide

Questions: press@yourcompany.com
```

This protects your brand AND removes hesitation for legitimate users.

**The ZIP bundle**:

Include a single download: `[company]-press-kit.zip` containing:
- All logo formats (organized in subfolders)
- README.txt with usage notes
- Boilerplate.txt with copy-paste descriptions
- Last-updated date

Easier than 20 separate downloads.

For my brand:
- Audit current asset coverage
- Gaps (missing dark variant; missing SVG)
- The ZIP bundle structure

Output:
1. The asset checklist with status
2. The redesign / production list
3. The ZIP bundle contents
4. The hosting + URL plan
```

The biggest asset-hygiene mistake: **only providing PNG.** A print magazine or large-format article needs vector. If you can''t provide SVG, you signal "this company isn''t taken seriously enough to have a designer." Always SVG primary; PNG as fallback.

## Maintenance: Keep It Current

A press kit has a half-life. Without maintenance, it rots within 6 months.

```
Help me set up a press-kit maintenance cadence.

The recurring tasks:

**Quarterly (15 minutes)**:

- Update headcount in fact sheet
- Update funding total (if changed)
- Add 2-3 most-recent press hits
- Verify press@email is monitored
- Spot-check downloadable assets still load
- Update "last revised" date on the page

**Annually (1-2 hours)**:

- Refresh founder photos (older than 2 years = stale)
- Update product screenshots (the product has changed)
- Refresh fact sheet (customer count; revenue range; team size)
- Update the 1-paragraph boilerplate (often)
- Audit logo files (still match current brand?)
- Cross-check boilerplate against /about, LinkedIn, Crunchbase

**Event-driven (immediately)**:

- New funding round → update boilerplate + fact sheet
- New founder / executive → add bio + photo
- Major product launch → new screenshot
- Brand redesign → new logo files
- Award / recognition → add to press list

**Owner**:

Someone owns the press kit. Default: founder/CMO until you have marketing-ops. The owner gets a quarterly calendar reminder.

**The "stale press kit signal"**:

If a journalist visits your press page and the most recent press coverage is from 2024 and the headcount says "5-10" but you''re actually 30 — they assume the company is languishing. Even if the truth is the opposite. Maintenance is reputation management.

**The version-control rule**:

Track press-kit changes:
- Date of change
- What changed (headcount, funding, screenshot, etc.)
- Who changed it

A simple Notion doc or git history works. The point: when a journalist asks "is this still accurate?" you can answer confidently.

For my company:
- The owner of the press kit
- The quarterly cadence calendar
- The event triggers
- The version-tracking method

Output:
1. The maintenance calendar
2. The owner assignment
3. The event-trigger checklist
4. The version-control method
```

The biggest maintenance failure: **set-and-forget.** The press kit is a living asset; like all marketing assets, it ages out. A founder who hasn''t updated their press kit in two years is invisibly bleeding press opportunities — journalists land, see staleness, and use a fresher competitor instead. 15 minutes per quarter prevents this.

## Distribution: Get Journalists to It

The kit is built. Now make sure journalists find it.

```
Help me wire the press kit into outreach + discovery.

Distribution channels:

**1. /press URL on your homepage**

- Footer link: "Press" (next to About / Careers / Contact)
- About-page mention: "For press inquiries, see our press kit"
- Contact-page link

**2. Email signature (founder + CEO)**

> [Name]
> [Title], [Company]
> [Company.com] | Press kit: [company.com/press]

Pre-loads the journalist with the URL before they ask.

**3. LinkedIn / X bio**

- Pinned post or bio mention: "press kit at [URL]"
- Auto-respond on press DMs

**4. Outreach emails to journalists**

When pitching a journalist (per [press-outreach](press-outreach.md)):

> "I''ve attached our press kit at [URL] — logos, screenshots, founder photos, and boilerplate are all there. Let me know what else you need."

This signals "I''ve done my homework; you''ll have an easy file."

**5. Crunchbase / AngelList profile**

- Crunchbase has a "Press" field; link your URL
- AngelList profiles can include press kit links

**6. Wikipedia (if you''re notable enough)**

- Don''t edit your own page; let editors do it
- A press kit URL helps editors verify facts

**7. Product Hunt launch (if applicable; per [product-hunt](product-hunt.md))**

- "Press kit" link in maker comment
- Helps tech press writing about the launch

**8. Newsletter / blog footer**

- Footer of every email: "Press inquiries: press@..."

**9. Speaker bios at events**

- Conference profiles often pull from press kits
- Keep yours current so speaker pages show fresh info

**10. Investor data rooms**

- Some investors share press kits with portfolio
- Keeps the asset working for fundraising too

**The "one URL to rule them all" principle**:

Every place the company exists online should reference the press kit URL. Build it once; reference everywhere.

For my distribution:
- The 10 channels prioritized
- The footer / signature / bio updates needed
- The press-outreach template integration

Output:
1. The distribution checklist
2. The pre-launch updates needed
3. The "everywhere-the-company-exists" audit
```

The biggest distribution failure: **press kit exists but isn''t linked anywhere prominent.** Journalists who don''t know it exists won''t Google "[company] press kit"; they''ll just send an email asking for assets and you''ll miss the moment. Footer link + signature link + outreach-email link is the minimum.

## Avoid Common Pitfalls

Recognizable failure patterns.

```
The press-kit mistake checklist.

**Mistake 1: Email-gate downloads**
- "Enter email to download" kills 80% of journalist use
- Fix: open downloads, no friction

**Mistake 2: Outdated content**
- 18-month-old screenshot; defunct customer logos
- Fix: quarterly review

**Mistake 3: Inconsistent boilerplate**
- /about says X; /press says Y; LinkedIn says Z
- Fix: single source of truth + audit

**Mistake 4: PNG-only logos**
- No SVG; print publications can''t use it
- Fix: SVG primary; PNG fallback

**Mistake 5: No press contact**
- Page exists; no email to reach you
- Fix: real, monitored email

**Mistake 6: Press contact unmonitored**
- press@ goes to a black hole; emails ignored
- Fix: forward to founder/CMO; respond within 1 day

**Mistake 7: Stock photo headshots**
- Founder pic looks like Getty Images
- Fix: real photos (even iPhone-quality > stock)

**Mistake 8: Broken downloads**
- Click logo.zip; 404
- Fix: monthly link audit

**Mistake 9: Hostile usage guidelines**
- "Contact us before any use of our logo"
- Fix: liberal usage; clear guidelines; trust journalists

**Mistake 10: No press kit at all**
- Founder copy-pastes assets manually each time
- Fix: ship a basic kit even if imperfect; iterate

**The quality checklist**:

- [ ] /press URL exists and is linked from footer
- [ ] Boilerplate in 3 lengths (1-line, 1-paragraph, 1-page)
- [ ] Founder photos (high-res, multiple angles)
- [ ] Logo in 5+ formats (SVG primary)
- [ ] Product screenshots (5+, captioned)
- [ ] Fact sheet (founders, year, HQ, funding, customers)
- [ ] Recent press list (5-10 hits)
- [ ] Press contact email (real, monitored)
- [ ] Brand usage guidelines
- [ ] ZIP bundle download
- [ ] Last-updated date visible
- [ ] Mobile-friendly

For my press kit:
- Audit against this list
- Top 3 fixes

Output:
1. Quality audit
2. Top 3 fixes prioritized
3. The "ship the MVP this week" plan
```

The single most-common mistake: **treating the press kit as a one-time project.** It''s a living asset. The companies that get the most coverage have press kits that look like they were updated yesterday — because they were. Maintenance is the moat.

---

## What "Done" Looks Like

A working press / media kit in 2026 has:

- A public URL (no email-gate; no signup wall)
- 3 lengths of boilerplate (1-line, 1-paragraph, 1-page) consistent across all surfaces
- Logos in SVG + PNG, light + dark variants, ZIP bundle
- Founder headshots in high-res (2000x2000 minimum)
- 5+ product screenshots, captioned, no real customer data leaks
- Fact sheet (founders, year, HQ, funding, headcount, customers)
- Recent press list updated quarterly
- Press contact email (real, monitored, 1-business-day SLA)
- Brand usage guidelines (clear; liberal)
- Quarterly maintenance cadence with named owner

The hidden cost of a weak press kit: **press opportunities die in journalist inboxes.** A reporter on deadline emails 3 companies for sources; the one with the easiest press kit gets quoted; the others don''t. Each missed quote is missed credibility, missed traffic, missed pipeline. A press kit takes 1-2 days to build and 1 hour per quarter to maintain — small investments for an asset that compounds over the company''s entire history.

## See Also

- [Press Outreach](press-outreach.md) — the outreach motion that uses the kit
- [Founder Brand](../3-distribute/founder-brand.md) — the photos and bio
- [Brand Identity](../1-position/brand-identity.md) — logo and visual standards
- [Trust Center & Security Page](../4-convert/trust-center-security-page.md) — procurement-side proof
- [Founder Story](../1-position/founder-story.md) — boilerplate draws from this
- [Mission & Vision Statement](../1-position/mission-vision-statement.md) — mission appears in 1-page boilerplate
- [Tagline & One-Liner](../1-position/tagline-and-one-liner.md) — the 1-line is your tagline
- [Launch Announcements](launch-announcements.md) — kit pre-loaded for launches
- [Pitch Deck](../1-position/pitch-deck.md) — sometimes shared with reporters
- [Demo Video](../2-content/demo-video.md) — embedded in press kit
- [Customer Case Studies](../2-content/customer-case-studies.md) — proof embedded in fact sheet
- [Product Hunt](product-hunt.md) — kit referenced in maker comment
- [Hacker News](hacker-news.md) — kit referenced when story trends

[Back to Day 5: Launch](README.md)
