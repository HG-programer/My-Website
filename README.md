# Modern React + Vite + Tailwind CSS Portfolio

This is a fresh, professional portfolio website built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- Modern responsive Navbar and Footer
- Main sections: Home, About, Certifications, Projects, Japan Vision, Contact
- Beautiful hero section and animated transitions
- Clean, accessible, and mobile-friendly layout
- All styling with Tailwind CSS
- Reusable PageSection component

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- Edit the content in the `src/pages` and `src/components` folders.
- Update Tailwind config in `tailwind.config.js` as needed.

---

Built with ❤️ using React, Vite, and Tailwind CSS.

## Deployment

### Cloudflare Pages (Recommended)
1. Push code to GitHub.
2. In Cloudflare Pages: Create project -> Connect to repo.
3. Build settings:
   - Framework: None (or Vite detected)
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Ensure SPA routing: `_redirects` file already added (`/* /index.html 200`).
5. Set custom domain (optional) and deploy.

### Netlify
1. New Site from Git -> select repo.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a redirect rule (already via `_redirects`).

### GitHub Pages (Via Actions)
1. Install: `npm i -D gh-pages` (optional if using manual deploy).
2. Or set up a GitHub Action using `peaceiris/actions-gh-pages` publishing `dist`.
3. Set repository settings -> Pages -> Deploy from GitHub Actions.

### Environment / Caching
Security headers and caching hints provided in `public/_headers` (used by Cloudflare / Netlify). Adjust if dynamic content added later.

## Production Build

```bash
npm run build
npm run preview # local preview at http://localhost:4173
```

## Accessibility & Performance
- Route code-splitting via React.lazy.
- IntersectionObserver-driven animations (degrades gracefully).
- i18n language sync updates `<html lang>`.
- Preload critical assets & theme-color hints.

