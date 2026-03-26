# Octavio Henrique — Portfolio Website

## Project Overview
A personal portfolio/landing page for Octavio Henrique, a physical trainer based in Lavras, MG, Brazil. The site showcases his services (Personal Training, Weight Loss, Hypertrophy), pricing plans, and contact information.

## Tech Stack
- **Frontend:** Plain HTML5, CSS3, Vanilla JavaScript (no build system)
- **Server:** Node.js built-in `http` module (server.js) — serves static files on port 5000
- **Language:** Portuguese (pt-BR)

## Project Layout
```
.
├── index.html              # Main (and only) page
├── server.js               # Simple Node.js static file server
├── assets/
│   ├── css/main.css        # Stylesheet with CSS variables, responsive layout
│   ├── js/main.js          # Mobile nav toggle, footer year update
│   └── images/
│       ├── hero.svg        # Hero section background illustration
│       ├── logo.svg        # Brand logo
│       └── treino.svg      # Training section illustration
└── replit.md
```

## Development
- **Workflow:** "Start application" — runs `node server.js`, serves on port 5000
- **Deployment:** Configured as a static site (publicDir: ".")

## Notes
- Git merge conflicts in `assets/js/main.js` and `assets/css/main.css` were resolved during initial setup; the final (accessibility-enhanced) version was kept.
