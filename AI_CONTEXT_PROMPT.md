# Dan DeBugger — AI Context Prompt

> **Purpose:** Paste this entire block into any new AI session to instantly bring it up to speed on who you are, what you've built, and how you work. No need to re-explain yourself.

---

## Identity

- **Real name:** Aden Cisneros
- **Alias / brand:** Dan DeBugger (stylised `Dan De Bugger` — the `De` and `Bugger` are visually split in portfolio branding)
- **GitHub:** [CaptainFredric](https://github.com/CaptainFredric)
- **LinkedIn:** [in/aden-cisneros](https://linkedin.com/in/aden-cisneros)
- **Email:** cisnerosadencode@gmail.com
- **Instagram:** [@captainfredric](https://www.instagram.com/captainfredric/)
- **Age:** 19
- **Bio (personal):** "Fun and chill guy who jokes a lot and likes talking about literally anything. Also likes to exercise. And sometimes, extra fries."

---

## Professional Identity

- **Title:** Frontend Software Engineer — product-minded, user-focused
- **Core philosophy:** Product-first. Focuses on *outcomes* (engagement, conversion, retention, accessibility) over just building features. Works backwards from business metrics.
- **Work style:** Collaborates cross-functionally with PMs, designers, and backend engineers. Produces incremental demos, writes clear acceptance criteria, instruments features with telemetry.
- **Institution:** Part of **FES (Frontend Simplified)** — a frontend engineering training institution.

---

## Technical Skills

| Area | Tools / Technologies |
|---|---|
| **Languages** | JavaScript (ES6+), HTML5, CSS3, Python |
| **Frameworks & Libraries** | Vite, CesiumJS, Flask, vanilla JS patterns |
| **Data / Backend** | SQLite, REST APIs, Flask session auth, proxy-based state |
| **Tooling** | Git, GitHub Pages, npm, basic CI, GitHub Actions |
| **Other** | Accessibility (ARIA, keyboard nav, progressive enhancement), responsive design, performance optimization, RUM |

---

## Projects (in order of significance)

### 1. ContentForge — `Python, Flask, RapidAPI, Chrome Extension`
A full **Content Intelligence API** — 47 endpoints, 12 platforms, live on RapidAPI.
- **Core philosophy:** Deterministic heuristic scoring — same input → same output, every time. <50ms, no AI in the scoring path, fully auditable open source logic.
- Scores content for: Twitter/X, LinkedIn, Instagram, YouTube (title + description), email subject lines, Facebook, TikTok, Pinterest, Reddit, Threads + more.
- AI generation layer (Ollama local → Gemini 2.5 Flash fallback) for rewrites, hooks, bios, ad copy, subject lines, content calendars.
- Quality gate system: `PASSED / REVIEW / FAILED` batch verdicts.
- Chrome extension with real-time scoring badge on X and LinkedIn.
- Multi-tier RapidAPI pricing (Free → $99/mo).
- Live API: `contentforge-api-lpp9.onrender.com`
- AGPL-3.0 licensed, self-hostable.
- **Links:** [GitHub](https://github.com/CaptainFredric/ContentForge) | [Live](https://captainfredric.github.io/ContentForge/)

### 2. Panopticon Earth / God's Eye — `JavaScript, CesiumJS, Vite, CSS`
A globe-first geospatial intelligence experience.
- 3D draggable/zoomable/rotatable Earth via Cesium.
- Layered simulated: commercial flights, military traffic, satellites, maritime routes, incident zones.
- Live feed refresh with trust indicators.
- Searchable globe navigation (OpenStreetMap Nominatim geocoding, keyboard-controlled).
- Persistent saved camera views via localStorage.
- CI/CD via GitHub Actions → GitHub Pages.
- **Links:** [GitHub](https://github.com/CaptainFredric/God-s-Eye) | [Live](https://captainfredric.github.io/God-s-Eye/)

### 3. Meridian / The-Terminal — `JavaScript, Flask, SQLite, CSS`
A Bloomberg + Palantir-inspired financial market workspace with a real backend.
- Full auth system: signup/login/logout/session via Flask + SQLite.
- Workspace persistence per account (watchlists, alerts, positions, panel layout, command history).
- 4-panel browser client with keyboard routing and command-style navigation.
- **The Moat — LogicEngine:** Parses explicit `IF ... THEN ...` rule syntax into structured alert conditions, evaluates against live quote state, emits on state transitions only — fully deterministic.
- Modules: QUOTE, CHART, NEWS, EQS, HEAT, PORT, MACRO, OMON, CALC.
- Black-Scholes and bond pricing calculators.
- **Links:** [GitHub](https://github.com/CaptainFredric/The-Terminal) | [Live](https://captainfredric.github.io/The-Terminal/)

### 4. Bookstore — `Vanilla JavaScript, HTML5, CSS3`
Responsive static catalog UI with live search, sorting, genre + format filtering, real Open Library cover images with graceful fallbacks.
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
- **9 public repositories.**
- Most active in **ContentForge** (33 of 37 commits in April 2026 alone).
- First PR opened April 2, 2026 (ContentForge v1.9.0).

---

## Career Goals

- Seeking **product or feature-driven frontend engineering roles**.
- Wants to influence UX, ship reliable user-facing experiences, and collaborate cross-functionally.
- Values teams that balance **craft with measurable outcomes**.
- Open to new opportunities (per the contact modal on the portfolio).

---

## Personality Snapshot

Fun, chill, conversational, self-deprecating humor. The "Dan DeBugger" persona has a clear brand identity — blue/dark color scheme, the name split visually across the tech stack (`De` = dark blue, `Bugger` = light blue). Strong design sensibility alongside engineering chops.

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

---

*Last updated: April 5, 2026*
