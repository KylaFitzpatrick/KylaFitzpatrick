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

## Implemented (2026-09-21, update 3 — GitHub Pages prep)
- Production build verified with PUBLIC_URL=/KylaFitzpatrick (assets, resume PDF, favicons, .nojekyll all in build/)
- Added /app/.github/workflows/deploy-pages.yml — auto-builds frontend and deploys to GitHub Pages on every push to main
- User steps: Save to GitHub (repo KylaFitzpatrick/KylaFitzpatrick, branch main), then GitHub repo Settings → Pages → Source = "GitHub Actions". Site then lives at https://kylafitzpatrick.github.io/KylaFitzpatrick/ (replaces old portfolio there)

## Implemented (2026-09-21, update 2)
- Real resume integrated: uploaded PDF served at /KylaFitzpatrick_Resume.pdf with a working Download PDF button in the resume modal (plus Print)
- Resume modal rewritten from the actual PDF: Software Engineer title, 8 yrs QA/engineering, phone 704.748.3653, portfolio URL, 8 real roles (Walmart Global Tech → CITCO), real education (UT Austin bootcamp, UNC Charlotte BS)
- Skills grid rebuilt from resume: Languages & Frameworks, Testing & Platforms (Cypress/TestCafe/Selenium/Docker/AWS...), AI & Design Craft (Emergent, Claude, Adobe Photoshop/Express highlighted)
- Hero stats updated with real data (08+ years in software engineering)
- Footer links to source repo github.com/KylaFitzpatrick/KylaFitzpatrick (GitHub Pages URL removed per user request 2026-09-21)
- Green/black theme (emerald #10B981 family on green-tinted black) — swapped from blue per user request; KF favicon (svg + png) added; responsive verified at 390px/820px/1920px
- bloomerslkn card screenshot re-captured after landing animation fully loads (Ruby truck + logo visible)
- Verified: PDF serves 200 application/pdf, resume modal scrolls through all roles, download href correct, footer links render

## Implemented (2026-09-21, initial)
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
- P1: Recruiter contact form with email delivery (Resend)
- P1: Custom domain / deploy to kylafitzpatrick.github.io or a custom domain
- P2: Case-study pages per project (process, stack, results)
- P2: Light/dark toggle, blog/writing section, testimonials

## Notes
- No authentication; no test credentials needed.
- Resume content now matches the uploaded PDF exactly; PDF is in /app/frontend/public/KylaFitzpatrick_Resume.pdf.
