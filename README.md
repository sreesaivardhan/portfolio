# Sai Vardhan — Portfolio

Personal portfolio site. Built with React + Vite, deployed at [sreesaivardhan.dev](https://www.sreesaivardhan.dev).

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18 + Vite |
| Routing | react-router-dom v6 |
| Icons | react-icons |
| Styling | Vanilla CSS (custom properties, no Tailwind) |
| Fonts | Inter · Big Shoulders Display · Playfair Display · JetBrains Mono |
| Deployment | Netlify |

---

## Project Structure

```
src/
├── components/
│   ├── hero/            # Hero section (tiles, avatar bubble, code editor)
│   ├── DotBackground    # Interactive dot-field canvas
│   ├── Experience       # Timeline
│   ├── Footer           # Contact + links
│   ├── Highlights       # Certifications & achievements
│   ├── Navbar           # Floating pill nav
│   ├── Projects         # Featured project cards
│   ├── Reveal           # Scroll-reveal wrapper
│   └── SkillsStrip      # Infinite marquee
├── data/
│   ├── experience.js    # Work history
│   ├── heroContent.js   # Code editor lines
│   ├── highlights.js    # Highlight cards + certifications
│   ├── portfolioData.js # Project objects
│   ├── siteConfig.js    # Email, links, avatar path
│   └── skills.js        # Skills marquee items
├── hooks/
│   └── useReveal.js     # IntersectionObserver reveal hook
├── lib/
│   └── copyText.js      # Clipboard utility
└── pages/
    ├── Home.jsx
    ├── NotFound.jsx
    └── ProjectsArchive.jsx
public/
├── favicon.svg
├── og.png               # 1200×630 Open Graph image
├── robots.txt
└── sitemap.xml
```

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production bundle → dist/
```

> **Resume & avatar:** drop `resume.pdf` into `/public` and your photo as `/public/images/sai.png`.  
> The `siteConfig.js` paths already point there.

---

## Sections

| Route | Section |
|---|---|
| `/` | Hero · Skills · Projects · Experience · Highlights · Contact |
| `/projects` | Full project archive (8 projects) |
| `/*` | 404 |

---

## Customisation

All copy and data live in `src/data/` — no text is hard-coded in JSX.  
To add a project: append an object to `projects` in `portfolioData.js`, set `featured: true/false`, and add its slug to the matching ordered array at the bottom of the file.

---

## License

MIT — do whatever you want with the code. Please don't ship it as your own portfolio without changes.
