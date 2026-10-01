# UNHEARD — sticker-book redesign

A self-contained multi-page site. Nothing here depends on `../site/` or
`../design-references/`, and every asset it uses is inside this folder. No
framework and no npm dependencies.

```bash
npm run dev     # http://localhost:4400  (no install, no build)
npm run check   # render every page + fail on any internal .html link
```

There is **no build step**. `api/router.js` renders each page on request from
`src/pages/` + `data/`, and redirects any `.html` / trailing-slash URL (308) to its
clean route: `/`, `/kit`, `/activities`, `/about`, `/contact`. Unknown paths
get the 404 page. Locally, edits show on refresh.

**Vercel:** `vercel.json` serves `public/` (css, js, assets) as static files and
rewrites everything else to the `api/router` Node function. Nothing to
configure: no build command, no output folder to generate.

**Guard:** `lib/render.js` refuses to render a page containing an internal
`.html` link, and `npm run check` scans the sources for them. Page URLs are
defined in one place, `ROUTES` in `lib/render.js`.

The full brand system, vision and process log are in [brand/](brand/).

## Layout

```
api/router.js     the router: Vercel function + used by serve.js locally
lib/render.js     page renderer, ROUTES table, clean-link guard
lib/shapes.js     seeded brush-stroke geometry
lib/check.js      npm run check
src/pages/        page bodies: index, kit, activities, about, contact, 404
data/             activities.json: 45 activities, 5 models, 5 domains
public/           css, js, assets: the only static files served
brand/            brand docs + swatches (served at /brand/swatches)
serve.js          local server (public/ + router)
vercel.json       static public/, everything else -> api/router
```

The first line of each page is a meta comment:
`<!--meta {"title": "...", "desc": "...", "nav": "kit"}-->`.

Tokens available in page bodies:

- **Brush shapes:** `{{tall}}`, `{{tall2}}`, `{{splat}}`, `{{blob}}`, `{{blob2}}`
- **Activity data:** `{{activityCount}}`, `{{activities}}`, `{{modelChips}}`,
  `{{domainChips}}`, `{{domainKey}}`, `{{modelCards}}`

To add or edit an activity, change `data/activities.json`. No rebuild needed.

## Notes

- **Activity library:** the 45 cards are rendered on the server, so the library
  works without JavaScript. JS adds search, filtering by model and by domain,
  and `?model=` / `?domain=` deep links.
- **Contact form:** there is no backend. The form validates, then hands the
  message to the visitor's own email app, and says on screen that nothing has
  been sent. `?interest=kit|webinar|workshops` preselects the topic.
- **Links and assets** are root-relative (`/kit`, `/css/style.css`), so the site
  needs the server (`npm run dev` or Vercel).
