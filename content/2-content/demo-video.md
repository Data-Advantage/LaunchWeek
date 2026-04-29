[Back to Day 2: Content](README.md)

# Produce a Demo Video That Actually Sells the Product

*The demo video is your highest-leverage piece of content. One good 90-second video does the job of a thousand landing-page words and runs on every channel — your homepage, your Product Hunt page, your cold outreach, your sales calls, your Reddit posts. Most indie SaaS demo videos are 4 minutes long, narrated by a tired founder, and watched to the end by 4% of viewers. The version that works is structurally different — short, scripted, problem-led, and produced as a small system, not a one-time event.*

## Why Most Founder Demo Videos Fail

Three failure modes hit indie SaaS the same way every time:

- **The "tour the UI" mistake.** The founder records themselves clicking through every screen of the product. The viewer is asked to keep up with the founder's mental model of the app, has no anchor for *why* this matters, and bails at 30 seconds. A demo video is not a UI walkthrough — it's a story about a problem and the version of the world where the viewer's problem is gone.
- **Too long, too unscripted.** Indie founders default to "I'll just hit record and explain it." The result is 4–7 minutes of "um", repeated re-takes mid-stream, and unedited mouse hesitation. Viewers don't tell you it's bad — they just close the tab. The data on every video platform shows that completion drops off a cliff after ~120 seconds for product content.
- **Made once, never updated.** The demo video that goes up on launch day stays up for two years. The product changed three times in the meantime. The video shows screens that no longer exist. Viewers who try the product after watching feel deceived. Your conversion rate quietly bleeds.

The version that works is structured: a 60–120 second video with a clear hook in the first 5 seconds, a tight scripted narration, professional-grade production (which in 2026 means free tools used well, not expensive equipment), and a versioning plan so the video stays current as the product evolves.

This guide assumes you have already done [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md) (you cannot demo a product if you don't know which customer pain to lead with), have shipped a [Landing Page](../1-position/landing-page-copy.md) (the demo lives there), and have a working product (not a pitch deck).

## The Three Videos You Actually Need

A common misconception is that you need "the demo video." You actually need three:

**1. The 30-second hero** (homepage, Product Hunt, ads)
- Auto-plays muted on the homepage above the fold
- One sentence of value prop on screen, no narration required
- Shows the product solving the *one* core problem
- Goal: viewer watches to end and clicks "Get Started"

**2. The 60–120-second walkthrough** (cold outreach, sales calls, conference talks)
- Embedded narration with a script
- Hook → problem → solution-in-product → outcome
- Goal: viewer feels they understand the product without signing up

**3. The 5–10-minute deep dive** (sales process, technical evaluation, YouTube)
- Real workflow walkthrough with founder voice
- Used as a "leave-behind" after a sales call or as a YouTube video
- Goal: viewer who has decided to evaluate gets enough to make a buy decision

Most indie SaaS in 2026 should ship the 60–120-second walkthrough first, because it works in the most contexts. The 30-second hero comes second. The deep dive comes when sales calls demand it.

## 1. Write the Script Before Touching the Recorder

The single highest-leverage step. Founders skip this and produce 4-minute videos. Founders who don't skip it produce 90-second videos that convert.

```
You're helping me write the script for a 90-second demo video for [your product] at [your-domain.com]. The product solves [specific problem] for [target customer]. The single most resonant pain my customer-discovery interviews surfaced was [exact pain point in customer's language].

Write the script in this exact 5-section structure:

**Section 1: Hook (5 seconds)** — name the pain in the customer's words. Not the product. Not the company. The pain. Examples that work:
- "You spend two hours every Friday building the same report."
- "Your inbox is buried under 200 customer emails and your support team is burning out."
- "You're testing 47 prompt variations by hand because there's no good way to track which ones work."

**Section 2: Stakes (10 seconds)** — what does the pain cost? Money, time, sleep, growth, sanity. Stay in the customer's voice. The viewer should think "yes, that's exactly my problem" by the 15-second mark.

**Section 3: Solution Preview (5 seconds)** — name the product, show one screen, state the promise. "[Product] gives you [outcome] in [timeframe / effort]."

**Section 4: Walkthrough (60 seconds)** — three concrete steps that show the product solving the pain. NOT a tour. Each step is 15-20 seconds:
- Step 1: "Here's where you start" — show the entry point and the first action that creates value
- Step 2: "And then you do this" — show the core productive action that's different from the customer's current workflow
- Step 3: "And you end up here" — show the outcome state, the thing that's different about the customer's life now

For each step, write the exact narration AND the exact visual cue (which screen, what to click, where the cursor goes). The viewer's eye and ear should arrive at the same understanding at the same moment.

**Section 5: Call to action (10 seconds)** — one specific next step. "Try it free at [URL]" or "Book a 15-minute demo at [URL]". Show the URL on screen even if narration says it. Don't list 3 options — pick one.

Output the script as a 2-column table: timecode | narration | visual cue. Total length under 100 seconds.

Then output a 30-second cut of the same content for the homepage hero version (no narration; just on-screen text + product visuals).
```

Three rules I've watched founders re-learn:

- **The hook is the entire video.** If the first 5 seconds don't make the viewer think "yes, that's me", they leave. Spend 30% of your scripting time on the first 5 seconds. They drive 80% of the result.
- **Tell the customer's story, not yours.** "I built this because I was frustrated with..." is the founder's pain. The viewer's pain is different in language even if it's the same in substance. Use the *customer's* language captured in your discovery interviews.
- **Cut everything that doesn't move the customer to the next emotional state.** A demo video has 5 emotional beats: pain recognition → cost realization → hope → mechanism understanding → action. Anything that doesn't push the viewer to the next beat is cut.

## 2. Record the Footage

The script tells you exactly what footage you need. Now you record it.

```
Help me build the recording plan for the demo video. Inputs:
- Script (from step 1) with timecodes and visual cues
- Product URL: [your URL]
- Demo account credentials: [you'll create a fake account with realistic-looking data — do NOT use a real customer's account, even with permission]

Output:
1. **Demo data prep checklist** — populate the demo account with realistic data:
   - Names that look real but obviously aren't (Acme Inc, Globex, Initech) — never use real customer names
   - Numbers that look credible (your demo dashboard should show $48,392 not $999,999)
   - Status states that show variety (some "in progress", some "complete") so screens don't look empty or homogeneous
   - Avatars / images that aren't placeholder gray (use Unsplash or your design system's defaults)

2. **Browser/screen prep checklist**:
   - Hide bookmarks bar and other browser chrome
   - Use Chrome's "device toolbar" to lock window to a specific resolution (1440x900 is common for demo videos)
   - Disable notifications system-wide
   - Close all other tabs
   - Test mode for any third-party integrations so demo doesn't accidentally send real emails or charge real cards

3. **Recording tool**: pick one
   - **Loom** — fastest, in-browser, fine quality. Default for indie SaaS demo videos.
   - **Screen Studio** ($229 one-time) — much better visual polish: auto zooms, smooth cursor, beautiful transitions
   - **Tella** ($30/mo) — solid in-browser polish, good for camera + screen layouts
   - **OBS** (free) — full control, steeper learning curve
   - For 2026 indie defaults: Screen Studio if you can spend $229, otherwise Tella or Loom

4. **Recording approach**: record the screen in 3-5 segments matching the script's sections. Recording 90 seconds in one take with no mistakes is hard; segments make re-takes cheap.

5. **Audio**: record narration separately from screen.
   - Mic: a basic USB condenser mic ($60–$120 like the FIFINE K688 or Blue Yeti) is enough. Built-in laptop mics sound bad and viewers notice.
   - Treat the room: record under a blanket fort or in a closet with clothes. No music. Quiet computer fan. Phone in airplane mode.
   - Software: Audacity (free) or any DAW. Apply noise reduction, normalize to -16 LUFS, light compression.
   - Re-record any line you stumble on. The script has 5-7 lines total — getting all of them clean takes 30 minutes max.

6. **Cursor and click visualization**:
   - Screen Studio handles this automatically (zoom-on-click, ripple effects)
   - In Loom, enable "Click highlights"
   - In OBS, install a cursor highlight plugin

Output the recording day plan as a 30–60 minute checklist I can run through.
```

Two unexpected production wins:

- **Re-record narration once, against the same screen footage.** The narration carries the entire video; if it sounds rushed or unsure, the viewer assumes the product is too. A clean second take after warming up almost always sounds better.
- **Add 2 seconds of breathing room before the first word.** Viewers need a beat to orient. Starting cold makes the video feel jarring.

## 3. Edit the Video

The edit is where most amateur demo videos get caught. Stay disciplined.

```
Help me edit the demo video. Tools:
- **CapCut Desktop** (free) — well-featured, intuitive, excellent for short-form
- **DaVinci Resolve** (free) — pro-grade, harder learning curve
- **Descript** ($24/mo) — script-driven editing, edit by deleting words from a transcript. Strong for narration-heavy demo videos.
- **Premiere Pro / Final Cut** — overkill for a 90-second video unless you already know them

For a 90-second demo video in 2026, Descript or CapCut are the right defaults.

Edit checklist (in order):

1. **Cut all dead air.** Any pause longer than 0.5 seconds gets tightened. The pace should feel slightly fast — viewers tolerate more pace than founders expect.

2. **Cut all "ums", "uhs", "you know".** Descript does this automatically by detecting filler words; in CapCut you do it manually.

3. **Add subtitles.** 70%+ of social-feed views are muted. Subtitles are not optional — they double watch time. Use Descript or CapCut's auto-caption (correct any product-name misspellings).

4. **Add on-screen text for key claims.** "5 minutes vs 2 hours" or "$1.2M tracked" should appear as on-screen text, not just be spoken. Reinforces the message in muted views.

5. **Background music.** Optional but raises perceived production quality.
   - **Epidemic Sound** ($15/mo) — broad library, indie-licensable
   - **Artlist** ($15/mo) — similar
   - **YouTube Audio Library** — free, more limited
   - Keep it under -25 LUFS (quiet relative to narration). Music should be felt, not heard.

6. **Branded intro/outro.** A 1-second logo at the end is enough. Skip 5-second intros — they kill watch time on social.

7. **Color and lighting consistency.** If your product UI has distinct light/dark mode, pick one and stick to it. Don't switch mid-video.

8. **Watermark/credit at the end frame.** Show your URL clearly for the last 3 seconds. Many viewers screenshot or pause at the end to find you.

9. **Render at 1080p H.264 MP4.** Universal compatibility. Aspect: 16:9 for horizontal use cases (homepage, YouTube, sales calls). Also export a 9:16 vertical cut for TikTok/Reels/Shorts (cut differently — vertical demands its own pacing).

10. **Output durations**:
    - 90s horizontal cut (primary)
    - 30s horizontal cut (homepage hero, ads)
    - 60s vertical cut (TikTok / Reels / Shorts)
    - 15s vertical cut (story-format ads)

Output a 90-minute edit plan I can complete in one focused session.
```

The single most important post-production step: **add subtitles**. Demo videos without subtitles lose 50%+ of muted social views. The cost is 10 minutes; the gain is enormous.

## 4. Distribute the Video

Where the demo lives matters as much as how good it is.

```
Help me build the distribution plan for the demo video.

Required placements:
1. **Homepage above the fold** — 30s muted auto-play hero loop, with "Watch full demo (90s)" button that opens the long version in a modal
2. **Product Hunt launch page** — Product Hunt accepts up to a 60s video, ideally 30-45s for engagement. Use the 30s cut.
3. **YouTube** — upload the 90s + the 5-10 min deep dive (when you have it). Title with the customer's pain in their language, not your product name.
4. **Pricing page** — embed the 90s near the top of the page, before any pricing comparison
5. **Footer / About page** — embed the 90s as social proof

Outreach placements:
6. **Cold outreach emails** — link to the 90s with a personalized one-line opener: "I built this for [their specific use case from a recent post they wrote] — 90 seconds, would love your read."
7. **Sales pre-call email** — "Watch this 90s video before our call so we can spend the time on your specific use case"
8. **Twitter/X / LinkedIn pinned post** — the 60s vertical cut, with a thread of context underneath

Repurposing placements:
9. **Newsletter announcement** — embed for subscribers
10. **Sales decks / pitch decks** — embed slide
11. **Conference / event pitches** — show the 30s during your slot
12. **Reddit posts** — link to YouTube version (Reddit kills outbound video hosts; YouTube allowed)

For each placement, output:
- Recommended cut length
- Format (horizontal / vertical)
- Hosting platform (YouTube, Wistia, Mux, Loom, native upload)
- The thumbnail / poster frame to use (do not let auto-generated thumbnails ship — manually pick a frame that shows the customer's pain or the outcome state, with a person if possible)
- The conversion event to instrument (homepage video play → 90% completion, click through to signup)

Output the distribution checklist plus the analytics events to fire.
```

Three traps founders fall into:

- **Hosting on Loom for production traffic.** Loom is great for recording; less great for embedding because of brand chrome and conversion features. Use Wistia ($24/mo) or Mux ($0.005/min streamed) for production homepage embed.
- **Default thumbnails are conversion killers.** YouTube auto-thumbnail picks a frame at random — usually mid-blink, mid-mouseclick. Pick the thumbnail manually. Add a 2-word overlay if needed.
- **Linking to a "watch our demo" CTA without the video on the page.** Don't make the visitor click through. Embed in-page; let the click-through be "sign up after watching."

## 5. Instrument and Iterate

A demo video is a hypothesis, not a deliverable. Measure and iterate.

```
Help me instrument the demo video. Three metrics to track per placement:

1. **Play rate** — what percentage of pageviews result in a video play?
   - Healthy homepage benchmark: 30-50%. Below 20% means thumbnail or context is wrong.
   - Healthy outreach email benchmark: 15-30% of clicks (since the click already implies intent).

2. **Completion rate** — what percentage of plays watch to the end?
   - Healthy 90s benchmark: 40-60%. Below 30% means the hook or pacing is wrong.
   - Map drop-off curves to script sections — if 60% drop in section 4 (walkthrough), that's where the script is failing.

3. **Conversion rate from video viewer** — of viewers who completed (or watched 50%+), what percentage took the next action (signup, demo booking, etc.)?
   - Healthy: 5-15% of completers convert directly. Below 3% means the CTA is wrong or the video doesn't match what they get on signup.

Tools that capture all three:
- **Wistia** — gold-standard for embed analytics including drop-off curves
- **Mux Data** — engineering-friendly, drop-off analysis included
- **YouTube Studio** — good for YouTube only
- **Loom** — basic, fine for outreach video tracking

Set up a monthly review:
- Review play / completion / conversion by placement
- Identify the placement where the funnel is weakest
- Run a 1-month experiment (new thumbnail, new hook, new CTA) and measure
- Re-record the entire video annually OR when product changes meaningfully (new core feature, redesigned UI, repositioned pricing)

Output the analytics dashboard spec and the monthly review template.
```

Two principles that pay off over a year:

- **Drop-off curves are the most actionable signal you have.** A flat curve to the end means the video works. A cliff at 25 seconds means the hook bought you 25 seconds and then lost the viewer. The fix is the script section that started at 25 seconds.
- **Re-record annually.** The product changes, your customer language changes, your brand evolves. A 2-year-old demo video is a slow leak. Calendar an annual re-record as part of [first 90 days post-launch](../5-launch/first-90-days.md) → quarterly review.

## 6. The Optional Founder-Face Variant

For some products, having the founder's face in the video raises trust dramatically. For others, it's a distraction. Decide deliberately.

**Use founder face when:**
- You're selling to enterprise or sales-led buyers (relationship matters)
- Your founder story is part of the positioning ("former [credible role at credible company]")
- The product is high-trust (handles money, sensitive data, agent autonomy)
- You're [building in public](../3-distribute/building-in-public.md) and viewers may already know you

**Skip founder face when:**
- The product is self-serve and the buyer doesn't expect a relationship
- You're earlier than 100 followers and adding face won't change trust
- You're recording in poor lighting or a noisy environment (looking unprofessional is worse than no face)

If you do include face, the format that works:
- Picture-in-picture: small founder webcam in a corner, screen takes most of the frame
- Founder appears in first 5 seconds (hook), maybe at 60 seconds (transition), and at the CTA
- Skip "I'm [name], I built [product]" intros — the face does the introduction

A separate founder-led variant (founder talking 70%+ of the time, screen 30%) is good for podcasts and longer YouTube uploads, not for the 90s walkthrough.

## What Done Looks Like

By the end of week 2 of producing your demo video:
1. **A 90s walkthrough video** with subtitles, music, professional audio, embedded on your homepage and pricing page
2. **A 30s homepage hero cut** auto-playing muted above the fold
3. **A 60s vertical cut** for social distribution
4. **A YouTube channel** with at least the 90s + a 5-10 min deep dive (if you have it)
5. **Analytics on every placement** showing play / completion / conversion
6. **An annual re-record on the calendar**

Within 90 days of shipping the video:
- 30-50% homepage play rate
- 40-60% completion rate
- A measurable signup-rate lift on the homepage compared to pre-video baseline

## Common Pitfalls

- **The "make it longer to be thorough" mistake.** A 4-minute demo doesn't sell better than a 90-second demo. It sells worse. The discipline of cutting is the discipline of converting.
- **The "wait until the product is more polished" trap.** A demo video with a slightly imperfect product does more for sales than a perfect product with no demo. Ship the video against today's product; re-record next quarter.
- **Recording before scripting.** Always script first. The script is the product; the recording is the rendering of it.
- **Forgetting subtitles.** Half your viewers are muted. Subtitles double watch time.
- **Auto-thumbnails on YouTube.** Always pick a frame manually.
- **Hosting on Loom for the homepage.** Use a real video host (Wistia / Mux) for production traffic.
- **One-and-done.** Demo videos rot. Calendar a quarterly review, an annual re-record.
- **Not embedding the video on the pricing page.** Pricing is where buyers stall — a video at the top of the pricing page increases pricing-page conversion measurably.

## Where the Demo Video Plugs Into the Rest of LaunchWeek

- [Customer Discovery Interviews](../1-position/customer-discovery-interviews.md) — provides the customer language for the script's hook
- [Value Proposition](../1-position/value-proposition.md) — the demo is the value proposition rendered in motion
- [Landing Page Copy](../1-position/landing-page-copy.md) — the demo lives on the landing page; both must say the same thing
- [Pricing Page](../4-convert/pricing-page.md) — embed the demo video at the top of the pricing page
- [Sales Demo Calls](../4-convert/sales-demo-calls.md) — the recorded demo replaces 50% of live demos and frees your calendar for high-intent buyers
- [YouTube Distribution](../3-distribute/youtube-distribution.md) — the 5-10 min deep dive lives here
- [Cold Outreach](../3-distribute/cold-outreach.md) — link to the 90s in every cold message
- [Product Hunt](../5-launch/product-hunt.md) — the 30s cut is your launch-day video
- [Launch Announcements](../5-launch/launch-announcements.md) — every channel embed goes through this template

## Verdict

Demo videos are not a "nice to have" content asset. They are the single highest-leverage piece of content most indie SaaS will ever ship — usable in 12+ contexts, durable for 12+ months, and conversion-multiplying when done correctly.

Most founders ship their first demo video as a one-take, no-script, 4-minute Loom and never iterate. The version that works treats the video like a small product: scripted, edited, instrumented, reviewed, and re-recorded annually. The cost gap between "amateur" and "credible" is one weekend of focused work and ~$300 in software. The conversion gap between the two is often 2-3x.

Build the script-first habit now. The team that ships its first scripted demo video at week 2 of launch has a permanent edge over the team that's still recording 4-minute Looms at month 6.

---

[Back to Day 2: Content](README.md)
