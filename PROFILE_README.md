# Aden Cisneros (Dan DeBugger)

Frontend Software Engineer. CS + Philosophy student at Creighton University, Omaha NE. Expected graduation May 2029.

[cisnerosadencode@gmail.com](mailto:cisnerosadencode@gmail.com) · [linkedin.com/in/aden-cisneros](https://linkedin.com/in/aden-cisneros) · [Portfolio](https://captainfredric.github.io/Dan-s-E-Portfolio/)

---

## What I work on

I build frontend-heavy web applications with a focus on what the user actually needs to do. Most of my projects have a backend component and a specific technical constraint I set for myself going in.

Three patterns that show up consistently:
- **Deterministic scoring over AI inference** when correctness and auditability matter more than flexibility
- **Keyboard-navigable, command-oriented interfaces** over passive read-only displays
- **Building dependencies from scratch** when a third-party library would obscure the logic I need control over

---

## Projects

### [ContentForge](https://captainfredric.github.io/ContentForge/) — Content Scoring API
`Python · Flask · RapidAPI · Chrome Extension`

A content scoring API with 47 endpoints across 12 platforms. Scores tweets, LinkedIn posts, YouTube titles, email subject lines, and more with an A-F grade in under 50ms. The scoring engine is entirely rule-based heuristics with no AI in the critical path, so the output is consistent and auditable. AI is used separately for content generation (rewrites, hooks, copy). Live on RapidAPI with tiered pricing. Includes a Chrome extension that scores content inline on X and LinkedIn. AGPL-3.0, self-hostable.

→ [GitHub](https://github.com/CaptainFredric/ContentForge) · [Live API](https://contentforge-api-lpp9.onrender.com)

---

### [Panopticon Earth](https://captainfredric.github.io/God-s-Eye/) — 3D Geospatial Interface
`JavaScript · CesiumJS · Vite · CSS`

An interactive 3D Earth built with CesiumJS, displaying simulated data layers: commercial flights, military traffic, satellites, maritime routes, and incident zones. Includes geocoding search via OpenStreetMap, persistent saved camera views in localStorage, and a glass-panel HUD layout. Deployed via GitHub Actions to GitHub Pages.

→ [God's 3rd Eye](https://github.com/CaptainFredric/God-s-Eye)

---

### [Meridian](https://captainfredric.github.io/The-Terminal/) — Financial Market Workspace
`JavaScript · Flask · SQLite · CSS`

A Bloomberg-style terminal workspace with a real backend. Flask + SQLite handles auth and per-account workspace persistence (watchlists, alerts, positions, panel layout, command history). The client is a four-panel UI with keyboard routing. Modules include QUOTE, CHART, NEWS, EQS, HEAT, PORT, MACRO, OMON, and CALC with Black-Scholes and bond pricing implementations.

The LogicEngine is worth noting separately: it parses `IF ... THEN ...` alert rules into structured conditions, evaluates them against live quote state, and fires only on state transitions. No rules engine library was used.

→ [GitHub](https://github.com/CaptainFredric/The-Terminal)

---

### [Bookstore](https://captainfredric.github.io/Bookstore/) — Catalog UI
`Vanilla JavaScript · HTML5 · CSS3`

Single-page catalog with live search, genre and format filtering, and real cover images from the Open Library API with graceful fallbacks. Built with accessibility as a baseline: semantic HTML, skip links, labeled form controls, and `prefers-reduced-motion` support.

→ [GitHub](https://github.com/CaptainFredric/Bookstore)

---

## Stack

```
Languages    JavaScript (ES6+)  Python  HTML5  CSS3  SQL
Frameworks   Vite  CesiumJS  Flask  vanilla JS
Backend      SQLite  REST APIs  Flask session auth
Tooling      Git  GitHub Actions  npm  GitHub Pages  Shell
Other        a11y (ARIA, keyboard nav)  responsive design
             performance optimization  RUM
```

---

## GitHub

![213 contributions last year](https://img.shields.io/badge/213_contributions-last_year-4973f0?style=flat-square)
![Pull Shark](https://img.shields.io/badge/achievement-Pull_Shark-49d1f0?style=flat-square)
![Pair Extraordinaire](https://img.shields.io/badge/achievement-Pair_Extraordinaire-49d1f0?style=flat-square)

---

## What I'm looking for

Frontend engineering roles on product teams where I can own features end-to-end. I prefer teams that measure outcomes, not just output, and where there's room to work with designers and backend engineers directly.

If you're a recruiter or hiring manager, send a note with the role and what problem you're trying to solve. I'll respond with a concrete plan.

---

*Updated April 2026 · [Full portfolio](https://captainfredric.github.io/Dan-s-E-Portfolio/)*
