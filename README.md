# UNHEARD — sticker-book redesign

A self-contained multi-page site. Nothing here depends on `../site/` or
`../design-references/`, and every asset it uses is inside this folder. No
framework and no npm dependencies.

```bash
npm run dev     # build + serve -> http://localhost:4400  (no npm install needed)
npm run build   # src/pages + data -> dist/
npm start       # serve dist/ only
```

URLs are clean: `/`, `/kit`, `/activities`, `/about`, `/contact`. `serve.js`
mirrors Vercel `cleanUrls`. `/kit.html` and `/kit/` redirect (308) to `/kit`,
and unknown paths get the 404 page.

**Deploying to Vercel:** create a project with **Root Directory = `redesign`**.
`redesign/vercel.json` runs `node build.js` and serves `dist/`. The repo-root
`vercel.json` (which publishes `site/`) is untouched.

The full brand system, vision and process log are in [brand/](brand/).

## Layout

```
src/pages/        page bodies: index, kit, activities, about, contact, 404
data/             activities.json: 45 activities, 5 models, 5 domains
css/style.css     tokens + every component
js/main.js        nav, scroll reveal, library filters, contact form
assets/           photos, kid stickers, favicon
shapes.js         seeded brush-stroke geometry
build.js          wraps each page in shared head/nav/footer, renders tokens
dist/             GENERATED + served: the only public folder (gitignored)
serve.js          local router, same URL rules as Vercel
vercel.json       buildCommand, outputDirectory dist, cleanUrls
```

The first line of each page is a meta comment:
`<!--meta {"title": "...", "desc": "...", "nav": "kit"}-->`.

Tokens available in page bodies:

- **Brush shapes:** `{{tall}}`, `{{tall2}}`, `{{splat}}`, `{{blob}}`, `{{blob2}}`
- **Activity data:** `{{activityCount}}`, `{{activities}}`, `{{modelChips}}`,
  `{{domainChips}}`, `{{domainKey}}`, `{{modelCards}}`

To add or edit an activity, change `data/activities.json` and rebuild.

## Notes

- **Activity library:** the 45 cards are rendered at build time, so the library
  works without JavaScript. JS adds search, filtering by model and by domain,
  and `?model=` / `?domain=` deep links.
- **Contact form:** there is no backend. The form validates, then hands the
  message to the visitor's own email app, and says on screen that nothing has
  been sent. `?interest=kit|webinar|workshops` preselects the topic.
- **Links and assets** are root-relative (`/kit`, `/css/style.css`), so the site
  needs a server (`npm run dev` or Vercel). Opening files directly via `file://`
  is no longer supported.
