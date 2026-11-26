# Rajeshwaran N — Portfolio

Personal portfolio built with **React 18 + Vite + React Router**. Green & white theme (light by default, dark toggle).

## Quick start

```bash
npm install
npm run dev      # dev server
npm run build    # production build → dist/
npm run preview  # preview the build
```

## Edit content

All content is data-driven — edit files in `src/data/`:

- `profile.js` — name, title, contact, WhatsApp number/message, photo paths
- `skills.js` — skill groups + proficiency levels (0–100)
- `projects/` — one file per project; register it in `projects/index.js`
- `experience.js` — experience, education, strengths, languages
- `certifications.js` — certifications (optional images in `public/certificates/`)

## Add your photo

1. Put images in `public/` (e.g. `public/profile-face.jpg`, `public/profile-portrait.png`).
2. In `src/data/profile.js` set `photo: '/profile-face.jpg'` and `portrait: '/profile-portrait.png'`.

Until then, the photo slots show an empty placeholder.

## Resume

`public/Rajeshwaran-N-Resume.pdf` is served by the "Resume" buttons. Replace the file to update it.

## Deploy

`vercel.json` is included (SPA rewrites). Import the repo in Vercel and deploy.
