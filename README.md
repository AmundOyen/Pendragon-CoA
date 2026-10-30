# Pendragon CoA

Angular 22 app using Angular Material (Material 3), deployed to GitHub Pages.

## Requirements

Node.js `^22.22.3`, `^24.15.0` or `>=26` (see `.nvmrc`).

## Development

```bash
npm ci
npm start            # http://localhost:4200
npm test             # Vitest unit tests
npm run build        # production build to dist/pendragon-coa/browser
```

## Deployment (GitHub Pages)

Every push to `main` triggers `.github/workflows/deploy.yml`. The workflow runs the tests, builds with
`--base-href /<repo-name>/`, copies `index.html` to `404.html` so deep links work with the Angular router,
and publishes the result with GitHub Pages.

One-time setup: in the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.

The site is then available at `https://<owner>.github.io/Pendragon-CoA/`.

To build the Pages output locally, run `npm run build:gh-pages`.
