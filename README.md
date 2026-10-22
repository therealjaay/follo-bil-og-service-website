# Follo Bil & Service – prototype av ny nettside

Live: https://follo-bil-og-service-website.vercel.app

Prototype (frontend only) of a redesigned website for Follo Bil & Service AS, Ski.
Stack: Vite 8 + React 19 + TypeScript + Tailwind CSS v4 + React Router 7.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # serve dist/ on http://localhost:4173
```

Routes: `/`, `/tjenester`, `/tjenester/:slug`, `/eu-kontroll`, `/dekk-og-dekkhotell`, `/priser`,
`/bestill-time`, `/om-oss`, `/kontakt`.

All business facts live in `src/data/business.ts`; services and indicative prices in `src/data/services.ts`.
Prices are indicative placeholders ("veiledende") and must be confirmed by the owner.
The booking form is mocked (no backend) – see `src/pages/Booking.tsx`.

## Deploy

The site is a static SPA. `vercel.json` rewrites all non-asset routes to `index.html` so React Router
deep links (e.g. `/bestill-time`, `/eu-kontroll`) work on Vercel. Pushing to `main` triggers a production deploy.
