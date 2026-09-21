# PRD — Kyla Fitzpatrick Portfolio

## Original Problem Statement
Build a professional portfolio to showcase websites the user has built. Cards displaying website previews for 3 sites: chillflows.com, gracreation.com, bloomerslkn.com (corrected from bloomers.com). A link so visitors can view the resume. Optimized for recruiters and people interested in her background and website-building expertise. Professional blue/black color scheme.

## User Personas
- Recruiters / hiring managers evaluating Kyla for web developer roles
- Potential clients wanting a website built
- Collaborators checking her background, skills and contact info

## Core Requirements (static)
- Hero: "Kyla Fitzpatrick — Web Developer — I build fast, modern websites"
- 3 project cards with real landing-page snapshots, linked to live sites
- Resume viewable on click (on-page resume display)
- Skills & technologies section (web dev + Emergent, Claude, Adobe Express, Adobe Photoshop)
- Contact: kfitzpatrick44@gmail.com, linkedin.com/in/kylaannefitzpatrick, github.com/KylaFitzpatrick
- Portfolio linked to its GitHub repo
- Award-worthy motion design: framer-motion reveals, lenis smooth scroll, parallax hero, marquee, numbered manifesto chapters

## Architecture
- Frontend-only React SPA (CRA + craco + Tailwind); backend left as stock FastAPI (unused by UI)
- `/app/frontend/src/data/portfolio.js` — single source of truth for profile, projects, skills, chapters
- Components in `/app/frontend/src/components/portfolio/` (Navbar, Hero, Marquee, Projects, ProjectCard, Manifesto, Skills, Contact, Footer, ResumeModal)
- Lenis instance shared via `/app/frontend/src/lib/scroll.js`
- Real site screenshots captured live, optimized to webp in `/app/frontend/public/assets/`
- Fonts: Syne (display), Manrope (body), JetBrains Mono (labels)

## Implemented (2026-07-21... actually 2026-09-21)
- Kinetic hero: masked line-by-line reveal, mouse-follow parallax orb + scroll parallax, availability badge, stats row
- Slow editorial marquee (pause on hover)
- Selected Work: browser-chrome cards w/ spotlight cursor hover, LIVE badges, tech chips, quick-view preview modal, visit-site + GitHub links
- Manifesto: 3 numbered chapters with ghost-number hover
- Skills grid: 3 groups incl. highlighted AI (Emergent, Claude) and Adobe tooling
- Resume modal: full on-page resume (summary, work, tech, experience, education) + Print/Save-as-PDF via print stylesheet
- Contact: copy-email with toast, mailto CTA, LinkedIn/GitHub cards
- Footer with link to GitHub repo (KylaFitzpatrick.github.io)
- Verified end-to-end: hero load, scroll nav, preview modal open/close, resume modal open/close, contact section, backend /api/ health

## Backlog / Next
- P0: Replace draft resume content with Kyla's real resume (upload PDF to embed/download; fill real experience & education)
- P1: Point each project's GitHub button + footer source link at exact repos (currently her GitHub profile / pages repo)
- P1: Recruiter contact form with email delivery (Resend)
- P2: Case-study pages per project (process, stack, results)
- P2: Light/dark toggle, blog/writing section, testimonials

## Notes
- No authentication; no test credentials needed.
- Resume content is a best-effort draft derived from her GitHub/live sites — user should review.
