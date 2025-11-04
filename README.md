## Olivia Houlihan — Personal Website

This is a three-page personal website built with Next.js (App Router), React, and TypeScript.

- Landing page with name, description, and sidebar navigation
- Resume page
- "How this was built" page

### Tech
- Next.js 14, React 18, TypeScript (strict)
- Minimal custom CSS for a clean, accessible UI
- Dockerized for easy deployment

### Getting Started
1) Install dependencies
```
npm install
```

2) Start the dev server
```
npm run dev
```

3) Open `http://localhost:3000`

### Available Scripts
- `npm run dev` — run the development server
- `npm run build` — build the production bundle
- `npm start` — start the production server (after build)

### Docker
Build the image:
```
docker build -t olivia-website .
```

Run the container:
```
docker run -p 3000:3000 olivia-website
```

Open `http://localhost:3000` in your browser.

### Structure
- `app/` — App Router pages and layout
  - `/` — Landing page with sidebar
  - `/resume` — Resume page
  - `/about` — How this site was built
- `app/globals.css` — Global styles
- `Dockerfile`, `.dockerignore` — Containerization
- `next.config.mjs`, `tsconfig.json` — Project config

### Customization
- Update copy in `app/page.tsx`, `app/resume/page.tsx`, and `app/about/page.tsx`.
- Replace resume content with your own sections or embed a PDF.
- Tweak colors and spacing in `app/globals.css` to your preference.
