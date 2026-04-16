# Dan DeBugger — AI Context Prompt

> **Purpose:** Paste this entire block into any new AI session to instantly bring it up to speed on who you are, what you've built, and how you work. No need to re-explain yourself.

---

## Identity

- **Real name:** Aden Jonas Cisneros
- **Alias / brand:** Dan DeBugger (stylised `Dan De Bugger` in portfolio branding, with `De` and `Bugger` rendered in separate colors; the name is a pun on "debugger")
- **GitHub:** [CaptainFredric](https://github.com/CaptainFredric)
- **LinkedIn:** [in/aden-cisneros](https://linkedin.com/in/aden-cisneros)
- **Email:** cisnerosadencode@gmail.com
- **Instagram:** [@captainfredric](https://www.instagram.com/captainfredric/)
- **Age:** 19
- **Location:** Omaha, NE
- **Bio (personal):** "Fun and chill guy who jokes a lot and likes talking about literally anything. Also likes to exercise. And sometimes, extra fries."

---

## Professional Identity

- **Title:** Frontend Software Engineer, product-minded and user-focused
- **Core approach:** Works backwards from outcomes (engagement, conversion, retention, accessibility) rather than leading with implementation. Prefers to understand the metric before writing the feature.
- **Work style:** Collaborates cross-functionally with PMs, designers, and backend engineers. Produces incremental demos, writes clear acceptance criteria, instruments features with telemetry.
- **Institution:** Part of **FES (Frontend Simplified)**, a frontend engineering training institution.
- **Education:** B.S. Computer Science + Philosophy minor, Creighton University, Omaha NE. Expected May 2029. Previously on a pre-medicine track before switching to CS.

---

## Technical Skills

| Area | Tools / Technologies |
|---|---|
| **Languages** | JavaScript (ES6+), HTML5, CSS3, Python, SQL |
| **Frameworks & Libraries** | Vite, CesiumJS, Flask, vanilla JS patterns |
| **Data / Backend** | SQLite, REST APIs, Flask session auth, proxy-based state |
| **Tooling** | Git, GitHub Pages, npm, basic CI, GitHub Actions, Shell Scripting |
| **Other** | Accessibility (ARIA, keyboard nav, progressive enhancement), responsive design, performance optimization, RUM |

---

## Projects (in order of significance)

### 1. ContentForge — `Python, Flask, RapidAPI, Chrome Extension`
A content scoring API with 47 endpoints across 12 platforms, live on RapidAPI.
- **Key design decision:** The scoring engine is deterministic rule-based heuristics with no AI in the critical path. Same input always produces the same output, under 50ms, fully auditable. AI is used only in the generation layer (Ollama local, Gemini 2.5 Flash as fallback) for rewrites, hooks, and copy.
- Scores content for Twitter/X, LinkedIn, Instagram, YouTube, email subject lines, Facebook, TikTok, Pinterest, Reddit, Threads, and more.
- Quality gate system with `PASSED / REVIEW / FAILED` batch verdicts.
- Chrome extension with real-time scoring badge on X and LinkedIn.
- Multi-tier RapidAPI pricing (Free to $99/mo).
- Live API: `contentforge-api-lpp9.onrender.com`
- AGPL-3.0 licensed, self-hostable.
- **Links:** [GitHub](https://github.com/CaptainFredric/ContentForge) | [Live](https://captainfredric.github.io/ContentForge/)

### 2. Panopticon Earth / God's Eye — `JavaScript, CesiumJS, Vite, CSS`
An interactive 3D Earth visualization built with CesiumJS.
- Simulated data layers: commercial flights, military traffic, satellites, maritime routes, incident zones.
- Live feed refresh with per-source trust indicators.
- Geocoding search via OpenStreetMap Nominatim, keyboard-navigable.
- Persistent saved camera views via localStorage.
- CI/CD via GitHub Actions to GitHub Pages.
- Visual style is HUD-panel and command-interface oriented.
- **Links:** [GitHub](https://github.com/CaptainFredric/God-s-Eye) | [Live](https://captainfredric.github.io/God-s-Eye/)

### 3. Meridian / The-Terminal — `JavaScript, Flask, SQLite, CSS`
A Bloomberg-style financial market workspace with a real backend.
- Full auth system (signup/login/logout/session) via Flask + SQLite.
- Workspace persistence per account: watchlists, alerts, positions, panel layout, command history.
- 4-panel browser client with keyboard routing and command-style navigation.
- **LogicEngine:** A custom rule parser that compiles `IF ... THEN ...` syntax into structured alert conditions, evaluates them against live quote state, and fires only on state transitions. No third-party rules engine used.
- Modules: QUOTE, CHART, NEWS, EQS, HEAT, PORT, MACRO, OMON, CALC.
- Black-Scholes and bond pricing calculators.
- **Links:** [GitHub](https://github.com/CaptainFredric/The-Terminal) | [Live](https://captainfredric.github.io/The-Terminal/)

### 4. Bookstore — `Vanilla JavaScript, HTML5, CSS3`
Responsive static catalog UI with live search, sorting, genre + format filtering, real Open Library cover images with graceful fallbacks. Accessibility-first (semantic HTML, skip links, labeled form controls, prefers-reduced-motion).
- **Links:** [GitHub](https://github.com/CaptainFredric/Bookstore) | [Live](https://captainfredric.github.io/Bookstore/)

### 5. Dan's E-Portfolio — `HTML, CSS, JavaScript`
Personal portfolio site. The repo you're likely working in right now.
- **Links:** [GitHub](https://github.com/CaptainFredric/Dan-s-E-Portfolio) | [Live](https://captainfredric.github.io/Dan-s-E-Portfolio/)

### Other repos
- **FES-Folder-1** — Training folder from Frontend Simplified studies.
- **Dan-DeBugger-s-First-Project** — First CSS project.
- **LandingTempDanDeBug** — Landing page template/experiment.
- **DanDeBugger-Info** — General page of proof of work ethics (recruiter-facing README).

---

## GitHub Activity & Achievements

- **213 contributions** in the last year.
- **Achievements:** Pull Shark, Pair Extraordinaire, YOLO.
- **9 public repositories.** Commit volume is concentrated in a small number of repos rather than spread across many.
- Most active in **ContentForge** (33 of 37 commits in April 2026 alone).
- First PR opened April 2, 2026 (ContentForge v1.9.0).

---

## Career Goals

- Seeking **product or feature-driven frontend engineering roles**.
- Wants to influence UX, ship reliable user-facing experiences, and collaborate cross-functionally.
- Values teams that balance **craft with measurable outcomes**.
- Open to new opportunities (per the contact modal on the portfolio).

---

## Personality & Cognitive Profile

Fun, chill, conversational, self-deprecating humor. Tends toward dense wordplay and lateral thinking in casual conversation, though he generally reads the room and paces himself. The "Dan DeBugger" brand has consistent visual identity: blue/dark palette, name split across three color registers. Good eye for design relative to his engineering focus.

**Observable patterns from his background and project output:**
- **Tends toward divergent thinking.** He's more comfortable expanding a problem into multiple framings than narrowing to a single prescribed answer. This shows up in why rote math is unappealing to him and why building a custom DSL parser is more engaging than using an existing library: one is a closed procedure, the other requires structural decisions.
- **Pre-medicine to CS + Philosophy is a coherent path, not a scattered one.** Medicine builds comfort with incomplete data and consequential decisions. Philosophy builds precision about argument structure. CS is one of the few fields where both of those are regularly useful. The combination is uncommon at his age and tends to make his technical choices more opinionated than average.
- **His project aesthetics lean toward command interfaces and oversight tools.** Panopticon Earth, Meridian, and the LogicEngine all share this. Whether that's a conscious preference or just what he finds interesting is worth noting.
- **AGPL-3.0 on ContentForge is worth flagging.** It is the most restrictive common open-source license. At 19, choosing it intentionally suggests he has read into licensing tradeoffs rather than defaulting to MIT.
- **Prefers precision in language over vocabulary range.** This is consistent with the Philosophy minor and with building deterministic scoring logic rather than probabilistic systems.
- **Geographic context:** He is based in Omaha, not in a major tech market, and is at a university without a strong CS recruiting pipeline. Has a live monetized API and a custom rule-parser-equipped financial terminal at 19.
- **Engages deeply with problems that have structural complexity. Disengages quickly from tasks that are purely repetitive without architectural payoff.**
- **Growth areas (self-identified):** Tolerance for necessary repetitive work. Letting peers work through failures without unsolicited advice. Adjusting expectations that a good argument will change someone's behavior.

---

## How to Use This Prompt

1. **Paste this entire block** at the start of any new AI session.
2. The AI will now know your full background, projects, skills, and goals without you having to re-explain.
3. You can then ask follow-up questions like:
   - "Help me update the portfolio with a new project."
   - "Write a cover letter for a frontend role at [company]."
   - "Review my ContentForge README for clarity."
   - "Suggest improvements to my God's Eye project."
   - "Help me prepare for a frontend engineering interview."
   - "Make more deductions about me based on this codebase."

---

*Last updated: April 15, 2026*
