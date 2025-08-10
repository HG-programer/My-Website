# Personal Portfolio (Vite + React + TypeScript + Tailwind)

Modern developer portfolio built with:

- Vite (fast dev + optimized build)
- React 19 + TypeScript
- Tailwind CSS 3
- React Router v7

## Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Tailwind
Configuration in `tailwind.config.js`. Purge (content) paths already set to strip unused classes in production.

Global styles + Tailwind directives are in `src/index.css`.

## Project Structure
```
src/
  components/   Reusable UI (Navbar, Footer, etc.)
  pages/        Routed pages
  assets/       Static assets (images, svg)
  index.tsx     App entry
  App.tsx       Routes wrapper
```

## Future Improvements (Roadmap)
- SEO: per-route titles & meta tags
- Accessibility: skip link, improved nav semantics
- Code splitting (lazy loaded routes)
- PWA (offline + manifest integration)
- Testing (Vitest + React Testing Library)

## License
MIT
