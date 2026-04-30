# Interview Loop Design

[⬅️ Back to Day 4: Convert](../4-convert/)

If you're past your first 10 hires and into systematic hiring, you need a documented interview loop. The naive version: each interviewer asks whatever they want; decisions are gut feelings; great candidates fall through gaps. The structured version: 3-5 standardized interviews per role family, each measuring specific signals, with calibrated scorecards, debrief discipline, and decision rights — so the company hires consistently great people without depending on a single founder's intuition. Done right, your hiring quality increases as you scale; done wrong, the second 100 hires are dramatically worse than the first 10.

## What Done Looks Like

A working interview loop:
- [ ] Documented loop per role family (eng, product, sales, CS, etc.)
- [ ] 3-5 stages, each measuring distinct signals
- [ ] Standardized interviews with question banks
- [ ] Scorecards filled out by every interviewer
- [ ] Debrief meetings with calibration discipline
- [ ] Defined decision rights (who calls hire/no-hire)
- [ ] Candidate experience metrics (NPS >40)
- [ ] Time-to-decision target (≤2 weeks from first interview)
- [ ] Hire rate calibration (your top performers hired the same way)
- [ ] Annual loop review + iteration

## 1. Decide loop length — fewer stages, deeper signal

Most companies over-index on length. 3-4 stages with substance beats 7 with overlap.

```text
Decide interview loop length per role.

Standard patterns:

Engineering (3-4 stages):
1. Recruiter screen (30 min)
2. Hiring manager / technical screen (45-60 min)
3. Onsite or virtual loop (3-4 hours):
   - Coding interview (45-60 min)
   - System design (45-60 min)
   - Behavioral / values (45-60 min)
   - Cross-team interview (30-45 min)
4. Optional: founder / exec final (30-45 min)

Product (3-4 stages):
1. Recruiter screen
2. Hiring manager
3. Onsite (3-4 hours):
   - Product sense / case study
   - Execution / project deep-dive
   - Cross-functional / collaboration
4. Founder / exec final

Sales (3-4 stages):
1. Recruiter screen
2. Sales manager
3. Pitch / mock demo (45-60 min)
4. Cross-team / culture
- Optional: ride-along with current rep

Customer Success (3-4 stages):
1. Recruiter screen
2. CS manager
3. Customer scenario / role-play
4. Cross-team / customer hand-off

Bad patterns:
- 6+ interviews (candidate fatigue; signal redundant)
- 1-stage hire (high mis-hire risk)
- Same questions across multiple interviews (waste)
- "Vibe check" with no specific signal (introduces bias)

For [ROLE], output:
1. Recommended loop length (3-5 stages)
2. Per-stage signal (what unique thing does this measure?)
3. Time investment per candidate
4. Time-to-decision target (≤14 days)
5. When to add / remove stages
```

The "fewer-stages-deeper-signal" rule: 4 well-designed interviews beat 8 mediocre ones. Each interview should measure something specific the others don't.

## 2. Map signals to interviews

Before adding interviews, define what signal each measures.

```text
Map signals to interview stages.

Common signals (not exhaustive):

Engineering:
- Coding ability (algorithms, data structures, problem-solving)
- System design (scaling, architecture, tradeoffs)
- Code quality (testing, readability, idioms)
- Communication (explaining decisions)
- Product sense (does this engineer think about users?)
- Collaboration (works well in team)
- Values fit (mission alignment, ethics)
- Domain expertise (specific tech, industry)

Product:
- Product sense (intuition for what to build)
- Analytical (data-driven decisions)
- Execution (shipping, prioritization)
- Strategy (long-term thinking)
- Communication (writing, speaking, decks)
- Influence (without authority)
- Cross-functional collaboration

Sales:
- Discovery skills (asking right questions)
- Demo / presentation
- Objection handling
- Pipeline management
- Pace / hustle
- Coachability
- Domain knowledge
- Cultural fit (high-performing sales culture)

Per stage, define:
- Primary signal (1-2 things this interview measures)
- Secondary signal (1-2 weaker signals also surfaced)
- Anti-pattern (what this interview is NOT for)

Avoid:
- Every interview measures "communication" (overlap)
- "Whiteboard" interview that's actually 3 unrelated questions
- "Behavioral" interview with no specific competency

For [ROLE], output:
1. Signal map per interview
2. Primary vs secondary signals
3. Anti-redundancy check
4. Coverage check (all critical signals measured at least once)
5. Calibration: top performers' scores vs hire bar
```

The coverage-check ritual: list signals that matter for the role; ensure each is covered by at least one interview. List signals each interview measures; remove redundancy.

## 3. Standardize interview content

Every candidate gets the same questions, scored the same way.

```text
Standardize interviews.

Per interview, build:

Question bank:
- 3-5 primary questions (rotate across candidates to prevent leak)
- Each question maps to specific signal
- Difficulty calibrated to level (IC2 vs IC4)
- Clear "right answer" framework (or rubric of acceptable approaches)

Interviewer guide:
- Opening script (30 sec): introduction + interview format
- Question framing (2 min per question)
- Probing follow-ups (when to dig deeper)
- Hint protocol (when / how to give hints; track in scorecard)
- Time allocation per section
- Closing: candidate questions + next steps

Rubric:
- 4-point scale: Strong No / No / Yes / Strong Yes
- Per-question scoring with examples of each level
- Anti-bias: rubric defined before candidate, not after

Sample question structure:
- Topic: System design — design a rate limiter
- Time: 45 min
- Signals: System design, communication, tradeoffs
- Rubric:
  - Strong No: doesn't understand requirements; can't articulate basic structure
  - No: basic structure but missing key tradeoffs
  - Yes: clean design + recognizes major tradeoffs
  - Strong Yes: identifies non-obvious tradeoffs; thinks about edge cases at scale

Live coding pattern (eng):
- 1-3 problems, 45-60 min total
- Problem statement is paragraph (not whiteboard)
- Real IDE (CoderPad / interview-tool)
- Specific signals scored

Take-home pattern (alternative):
- 4-8 hour problem
- 1-2 day deadline
- Paid ($200-1000 typical)
- Reduces interview-stage count

Output:
1. Question bank per interview type
2. Interviewer guide (10-page doc)
3. Scoring rubric
4. Calibration session (interviewers practice on past candidates)
5. Refresh cadence (rotate questions every 6-12 months)
```

The rubric-before-candidate rule: define what "strong yes" looks like before you meet the candidate. Otherwise interviewers pattern-match to "people I'd want to work with" — the most-biased criterion.

## 4. Train interviewers

Untrained interviewers introduce noise. Train.

```text
Train interviewers.

Required training (1-2 hours per interviewer):

Module 1: Bias awareness
- Common biases (confirmation, similarity, halo, recency)
- How they distort scoring
- Specific examples from your hiring data
- Mitigation tactics (write notes during, score against rubric, not at end)

Module 2: Signal-vs-noise
- What this interview measures (specific signals)
- What it does NOT measure
- How to probe deeper (follow-up questions)
- How to give hints without revealing answer

Module 3: Scoring discipline
- Use the rubric
- Score each signal independently (not "overall")
- Score immediately after (not next day)
- Submit before debrief (avoids groupthink)

Module 4: Logistics
- Note-taking format
- Scorecard system (Greenhouse / Ashby / Lever / DIY)
- Debrief protocol
- Timeline expectations

Training format:
- Live or recorded session
- Mock interview practice (each new interviewer interviews 2 mock candidates)
- Calibration: shadow 2 real interviews before solo
- Periodic recalibration (6-12 months)

Common training failures:
- "Watch this video and you're certified" (too thin)
- No mock practice (no opportunity to fail safely)
- No shadow before solo (sink-or-swim)
- No ongoing calibration (drift)

Who interviews:
- Trained interviewers only
- Mix levels (Senior + Staff for IC4 hire)
- Diversity of perspective (cross-functional input)
- Don't burn out top performers (rotate)

Output:
1. Training curriculum
2. Mock interview process
3. Shadow + solo progression
4. Recalibration cadence
5. Interviewer pool tracking
```

The "we trust everyone to interview" mistake: untrained interviewers cost you great candidates. Train; require certification.

## 5. Score independently before debrief

The single highest-leverage discipline: independent scoring before debrief.

```text
Implement independent scoring discipline.

Process:
1. Each interviewer scores within 24h of interview
2. Scores submitted to ATS (no peeking at others)
3. Debrief meeting starts: read aloud scores in turn
4. Discuss disagreements (not consensus-build before)

Why this matters:
- Without it: groupthink. Loud voices anchor others.
- With it: each interviewer's signal preserved. Disagreements surface.

Scorecard fields:
- Per-signal score (rubric scale)
- Specific evidence from interview
- Recommendation: Strong No / No / Yes / Strong Yes
- Dealbreakers (any signal that's a hard no?)
- Open questions (what would change my view?)

Debrief format:
- Round-robin: each interviewer summarizes (3-5 min each)
- Discussion of disagreements
- Hiring manager facilitates (not advocates)
- Decision: Strong Yes / Yes (with caveats) / No
- If Yes: what's level + comp band?

Anti-patterns:
- Interviewer 1 announces "great candidate" before others speak (anchors discussion)
- Hiring manager builds consensus subtly to push their preference
- Decision made before all interviewers heard from
- Discussion focuses on "vibes" not signal evidence

Tools:
- Greenhouse / Ashby / Lever (built-in score-before-debrief features)
- Lock scores at debrief start

Output:
1. Scoring discipline rules
2. Debrief format
3. Decision-rights matrix (who calls)
4. Disagreement resolution process
5. ATS configuration (lock scores)
```

The locked-scores feature: ATS like Greenhouse / Ashby support locking scores so others can't see until everyone submits. Use it. Without it, late submitters anchor on early opinions.

## 6. Decision rights — who calls hire/no-hire

Ambiguous decision rights = candidates wait + decisions get made by loudest voice.

```text
Define decision rights.

Hierarchy:

Hiring manager:
- Final say on hire/no-hire for their role
- Sets level + comp recommendation
- Owns onboarding / ramp

Loop members:
- Input via scores + debrief
- Veto power: any "Strong No" requires hiring manager justification
- No anonymous vetoes ("I have concerns I won't share" doesn't count)

Functional VP / Head of:
- Calibrates across hiring managers
- Reviews offers above certain band
- Owns systemic decisions (not individual ones)

CEO:
- Founder / Series A: usually weighs in on every hire
- Series B+: sample-only (skip-level interviews)
- Final approval on senior leaders (VP+)

Recruiter:
- Process owner
- Closes candidates
- Tracks metrics

Decision categories:
- Hire (with offer)
- Hire-but-different-role (rare; explicit)
- No-hire (with feedback to candidate)
- No-decision (exceptional; need more data; 1 more interview max)

Anti-patterns:
- 12 people in debrief; everyone has veto
- Hiring manager defers to loudest debrief voice
- CEO reviews every hire at scale (bottleneck)
- Decision made by recruiter (no domain context)

Output:
1. Decision matrix per role level
2. Veto rules
3. Tie-breaker process
4. Escalation path
5. Documentation (each decision has owner + rationale)
```

The Series A → Series B founder transition: at 30 employees, founder weighs in on every hire. At 100, that's a bottleneck. Explicit decision rights enable scaling.

## 7. Calibration — measure your loop

A loop should hire people who turn out to be top performers. Measure.

```text
Calibrate the interview loop.

Measurement framework:

For each hire:
- Loop scores (predictions)
- 90-day performance rating
- 1-year performance rating
- Promotion velocity vs peers
- Voluntary attrition

Patterns to watch:

Loop scores predict performance:
- Did "Strong Yes" candidates outperform "Yes" candidates?
- If not: scoring is noisy; calibrate

Bias toward similarity:
- Do hired candidates match interviewer demographics?
- Diversify interview panels

Stage redundancy:
- Are 2 stages always agreeing? (Eliminate one)
- Are 2 stages always disagreeing? (Calibrate definitions)

Time-to-decision:
- ≤14 days from first interview is target
- >14 days = candidates accept other offers

Acceptance rate:
- Of "Strong Yes" candidates, what % accept offers?
- <60% acceptance = compensation or candidate experience issue

Mis-hire rate:
- % of hires that don't make 1-year
- <10% target for senior; <20% for junior

Annual review:
- All hiring data analyzed
- Loop refresh decisions made
- Question rotations

Tools:
- Greenhouse / Ashby reporting
- BI dashboards (Looker / Mode for hiring funnel)

Output:
1. Measurement framework
2. Annual hiring retro
3. Question / loop iterations
4. Calibration sessions (interviewers re-aligned)
5. Public hiring scorecard (internal)
```

The mis-hire-rate honest test: track it. If 30% of hires don't make 1 year, your loop is missing critical signals. Investigate; refine.

## 8. Candidate experience — they're interviewing you too

In a tight market, candidate experience determines acceptance rates.

```text
Optimize candidate experience.

Experience principles:

Speed:
- Reply within 24h of application
- First interview within 1 week
- Total loop ≤2 weeks
- Decision communicated within 48h of last interview

Transparency:
- Explain process upfront (# stages, timeline, what to expect)
- Provide interviewer names + LinkedIn
- Share comp band early (avoid wasted time)
- Honest "no" with brief feedback

Respect:
- No 5-hour onsite without warning
- Take-home pay (don't ask for free work)
- Reasonable scheduling (offer multiple slots)
- Brief and prep candidates ("This interview will cover X")

Personalization:
- Recruiter who actually knows the candidate
- Interviewers prepared (read resume + LinkedIn)
- Ask about candidate's interests (not just qualifications)

Communication post-decision:
- Hire: warm, fast offer + close
- No-hire: kind, brief, specific (1-2 sentences feedback)
- Maybe-later: explain timing; offer to stay in touch

Metrics:
- Candidate NPS (post-process survey)
- Offer acceptance rate
- Glassdoor / LinkedIn reviews
- Reapplications (people who interviewed before reapplying)

Anti-patterns:
- Take-home assignment with no compensation (above 1-2 hours)
- 6+ hour interview day with no breaks
- Ghost candidates after final round
- Interviewer late / unprepared / hostile
- Offer with low cash + no context

Output:
1. Candidate experience playbook
2. Communication templates (each stage)
3. Take-home compensation rules
4. NPS survey + analysis
5. Glassdoor / LinkedIn monitoring
```

The Glassdoor signal: post-interview reviews mention specific failures (rude interviewer / unclear process / ghost). Read them; fix root cause.

## 9. Closing — convert "yes" candidates to acceptance

Offer-to-acceptance rate matters. Plan the close.

```text
Close offers.

Pre-offer prep:
- Candidate's motivations (recruiter notes from screening)
- Comp band + equity context
- References completed
- Other-offer awareness

Offer design:
- Cash within band (not lowballed)
- Equity at level
- Sign-on if competing offers
- Title + level explicit
- Start date flexibility

Offer delivery:
- Verbal first (recruiter or hiring manager)
- Written within 24h
- Open to negotiation (within reason)
- 5-7 day deadline (not "expires today")

Closing tactics:
- Offer-day call from CEO / hiring manager (not recruiter alone)
- Address candidate's specific concerns (career growth / role / mission)
- Connect with future teammates (1:1 calls)
- Show love: handwritten card, gift, team intro video

Counter-offers:
- Expect candidate to negotiate
- Have flex room ($5-15K typical)
- Equity bumps over cash bumps (alignment + cheaper for company)
- Don't make low-ball first offers

Other-offer scenarios:
- Match cash if at-market
- Lean on equity + role + mission for non-cash differentiation
- Don't get into bidding war (rarely wins)

Anti-patterns:
- Recruiter closes alone (no senior connection)
- Offer with 24h deadline (pressure tactic)
- "Final offer" too early (no room for negotiation)
- Ghosting after offer ("we're still deciding")

Output:
1. Offer template
2. Closing playbook (who calls, when)
3. Negotiation flex rules
4. Counter-offer playbook
5. Acceptance metrics (offer-to-accept rate by role)
```

The senior-connection rule: candidates rarely accept based on recruiter pitch. They accept based on senior leader (CEO / VP / hiring manager) call. Schedule it.

## 10. Iterate — annual loop review

Loops decay. Refresh annually.

```text
Annual hiring loop review.

Process:
- Q4: review prior year's hires + loop performance
- Identify: what worked, what didn't
- Update: questions, rubrics, training

Review questions:
- Did our top performers score "Strong Yes" in the loop?
- Did our bottom performers score "Yes" or "Strong No"?
- Which interview stage best predicted performance?
- Which stage was redundant?
- What signals were we missing?
- What's our mis-hire rate?
- What's our acceptance rate?
- What's candidate NPS?

Outputs:
- Loop changes documented
- Training updates
- Question rotation
- New interviewer recruitment / retirement

Cadence:
- Annual deep review (Q4)
- Quarterly check-in (metrics scan)
- Ad-hoc fixes (if specific issue identified)

Year-1 vs Year-3:
- Year-1: loop is rough; iterate fast
- Year-3: stable; subtle refinement

Output:
1. Annual review template
2. Hiring data dashboard
3. Refresh outputs
4. Implementation timeline
5. Communication to interviewers
```

The "if you're not iterating, you're decaying" rule: questions leak (candidates share online); team's needs change; market shifts. Refresh annually.

## What Done Looks Like

A working interview loop:

- [ ] 3-5 stage loop per role family with documented signals
- [ ] Standardized question banks + rubrics
- [ ] Trained interviewers with mock + shadow before solo
- [ ] Independent scoring before debrief
- [ ] Clear decision rights (hiring manager calls; veto rules explicit)
- [ ] Candidate NPS measured + improving
- [ ] Time-to-decision ≤14 days
- [ ] Offer acceptance rate >60%
- [ ] Mis-hire rate <10-20% by level
- [ ] Annual loop review + iteration
- [ ] Hiring data flowing to BI dashboard

The mistakes to avoid:

1. **6+ stage loops.** Candidate fatigue; signal redundant. 3-5 max.
2. **No standardized questions.** Each candidate gets different interview; can't compare.
3. **Score in debrief, not before.** Groupthink. Loud voice wins. Lock scores.
4. **Untrained interviewers.** Noise. Bias. Mis-hires.
5. **Ambiguous decision rights.** Candidates wait; decisions languish.
6. **No measurement.** Can't tell if loop works. Refine blindly.
7. **Bad candidate experience.** Best candidates have other offers. Lose them.

## See Also

- [Founder Hiring Playbook](./founder-hiring-playbook.md) — first-10-hires meta-framework
- [First Sales Hire](./first-sales-hire.md) — sales-specific
- [First Customer Success Hire](./first-customer-success-hire.md) — CS-specific
- [Sales Onboarding Ramp](./sales-onboarding-ramp.md) — post-hire onboarding
- [Compensation Philosophy & Pay Bands](./compensation-philosophy-pay-bands.md) — comp tied to offer
- [Sales Compensation Plans](./sales-compensation-plans.md) — sales offers
- [Quarterly Business Reviews](./quarterly-business-reviews.md) — performance review cadence
- [Annual Planning OKRs](../1-position/annual-planning-okrs.md) — hiring plan ties to OKRs
- [Customer Advisory Board](./customer-advisory-board.md) — customer panel for product hiring input
- [Annual Strategy Offsite](../1-position/annual-strategy-offsite.md) — hiring plan in annual planning
- [International Expansion Playbook](../3-distribute/international-expansion-playbook.md) — international hiring
- [Fundraising Playbook](../5-launch/fundraising-playbook.md) — funding informs hiring budget
- [VibeReference: HR & Payroll Tools](https://vibereference.dev/auth-and-payments/hr-payroll-tools) — Gusto / Rippling
- [VibeReference: Cap Table & Equity Management Tools](https://vibereference.dev/auth-and-payments/cap-table-equity-management-tools) — Carta for offer-letter equity
