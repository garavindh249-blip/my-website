# KD — Developer & Product Builder Portfolio

A premium, dark-aesthetic personal developer portfolio built with **pure HTML5, CSS3 and Vanilla JavaScript** — no frameworks, no libraries, no build step.

## Quick Start

Just open `index.html` in any modern browser. That's it — no install, no build.

> Tip: for the best experience while developing, serve it locally
> (e.g. `npx serve` or the VS Code Live Server extension) — but plain
> double-click works too.

## File Structure

```text
portfolio/
├── index.html          # All sections + modal + lightbox markup
├── style.css           # Complete design system (CSS variables, responsive)
├── script.js           # Project data + all interactions
├── assets/
│   └── projects/       # Project screenshots (local images)
│       ├── Nellai Connect/   (img.jpg, img2.jpg, img3.jpg, img4.jpg)
│       ├── Blink/            (img.jpg, img2.jpg, img3.jpg, img4.jpg)
│       ├── Snap Solve/       (img.jpg, img2.jpg, img3.jpg, img4.jpg)
│       ├── Where Is My Bus/  (img.jpg, img2.jpg, img3.jpg, img4.jpg)
│       ├── Power Cut/        (img.jpg, img2.jpg, img3.jpg, img4.jpg)
│       └── Nearby Cheap Food/(img.jpg, img2.jpg, img3.jpg, img4.jpg)
└── README.md
```

## Adding Your Project Screenshots

Drop your screenshots into the matching folders using these exact names:

| File      | Meaning (editable in `script.js`) |
|-----------|-----------------------------------|
| `img.jpg`   | First screen — used as the card thumbnail |
| `img2.jpg`  | Second screen |
| `img3.jpg`  | Third screen |
| `img4.jpg`  | Fourth screen |

Notes:

- Missing images are handled gracefully — no broken icons, no console errors.
  A clean CSS-generated "PROJECT PREVIEW" placeholder is shown instead.
- If you prefer `.png`, update the paths in the `projects` array in `script.js`.

## Editing Content (one place)

Everything project-related lives in the `projects` array at the top of `script.js`:

```js
{
  name: "Nellai Connect",
  tagline: "...",
  category: "mobile",          // mobile | web | concept | utility (drives filters)
  description: "...",
  features: [...],
  technologies: [...],
  problem: "...", solution: "...", role: "...", status: "...",
  links: { view: "#", caseStudy: "#" },   // set real URLs when ready
  images: [ { path: "...", label: "..." }, ... ]
}
```

Hero stats are plain HTML in `index.html` (`.hero-stats`).

## Placeholder Links to Replace

- `mailto:kd@example.com` — your real email (contact section + footer)
- `https://github.com` — your GitHub profile
- `https://linkedin.com` — your LinkedIn profile
- `project.links.view` / `caseStudy` in `script.js` — real project URLs

## Features

- Sticky blurred navbar with active-section highlighting + mobile hamburger menu
- Hero with animated code window, stats row
- 6 project cards (flagship "featured" layout for Nellai Connect) with category filtering
- Project detail modal: problem / solution / features / tech / role / status
- 4-image gallery per project: thumbnails, prev/next with cycling, "1 / 4" counter,
  smooth fade transitions, fullscreen lightbox (ESC closes, arrow keys navigate)
- Image lazy-loading, alt text, and missing-image fallbacks
- Custom cursor (desktop only), background grid + drifting particles (canvas)
- IntersectionObserver scroll reveals, `prefers-reduced-motion` support
- Fully responsive: 1440 / 1200 / 992 / 768 / 480 breakpoints
- Semantic HTML, ARIA labels, visible focus states, keyboard navigation

## Tech

HTML5 · CSS3 · Vanilla JS · Google Fonts (Inter + JetBrains Mono)
