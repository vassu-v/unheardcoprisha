# UNHEARD — sticker-book redesign

A self-contained multi-page site. Nothing here depends on `../site/` or
`../design-references/`, and every asset it uses is inside this folder. No
framework and no npm dependencies.

```bash
node build.js   # src/pages/*.html + data/activities.json -> *.html
node serve.js   # http://localhost:4400  (PORT=xxxx to change)
```

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
*.html            GENERATED: edit src/pages/, then run node build.js
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
- **Links:** relative `.html` links, so the site also works from `file://` or
  any static host. `serve.js` also answers clean URLs (`/kit`) and serves
  `404.html` for unknown paths.
