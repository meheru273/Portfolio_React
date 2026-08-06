# Portfolio — Meheru Zannat

Personal academic-style portfolio: about, news, research, projects, skills, education and contact.

Built with React 19, Vite and Tailwind CSS v4, with framer-motion for scroll reveals and a class-based light/dark theme.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
npm run lint
```

## Editing content

All copy lives in [`src/constants/index.js`](src/constants/index.js) — profile, social links, nav,
about paragraphs, news, publications, projects, skills, education and contact. Components read from
it and render; there is no content in the JSX.

Body copy (about paragraphs, news items, education notes) supports a little inline markup:
`[label](url)`, `**bold**` and `*italic*`, rendered by
[`src/components/RichText.jsx`](src/components/RichText.jsx).

## Assets

- `src/assets/profile.jpg` — the circular headshot in the sidebar.
- `public/Meheru_Zannat_CV.pdf` — served at `/Meheru_Zannat_CV.pdf`; replace this file to update
  the CV behind the nav link and the sidebar button.

## Theme

Colours are CSS custom properties in [`src/index.css`](src/index.css) (`:root` for light, `.dark`
for dark) exposed to Tailwind through `@theme inline`, so utilities like `bg-page`, `text-muted`
and `border-line` follow the active theme. An inline script in `index.html` applies the saved theme
before first paint to avoid a flash.
