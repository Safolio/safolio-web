# Safolio Web

Coming Soon landing page for Safolio, an independent investment portfolio platform.

## Development

```bash
pnpm install
pnpm assets:download   # one-time, pulls brand assets from safolio.com
pnpm dev
```

Open <http://localhost:3000> — root redirects to `/tr` by default.

## Scripts

- `pnpm dev` — start dev server (Turbopack)
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — Next.js ESLint check
- `pnpm format` — Prettier write
- `pnpm format:check` — Prettier dry-run
- `pnpm assets:download` — fetch brand assets from safolio.com into `public/`

## Stack

- **Next.js 15** App Router, TypeScript (strict), Tailwind v4
- **shadcn/ui** (base-ui primitives)
- **next-intl** for TR/EN routing and translations
- **next-themes** with light/dark/system
- **react-hook-form + zod** for the signup form (UI only — submit shows a fake success toast)
- **sonner** for toasts, **lucide-react** for icons
- **@vercel/analytics + @vercel/speed-insights** for production telemetry

## Structure

- `app/[locale]/` — locale-scoped routes (homepage + 5 legal pages + 404)
- `app/layout.tsx` — pass-through root layout
- `app/sitemap.ts`, `app/robots.ts` — generated SEO endpoints
- `app/[locale]/opengraph-image.tsx` — dynamic OG image
- `components/sections/` — page section components (Header, Hero, About, DesignedForYou, WhyWeCreated, CTA, Footer)
- `components/ui/` — shadcn primitives
- `components/{theme-provider,theme-toggle,locale-switcher,signup-form,skip-to-main,cookie-banner,legal-layout,json-ld}.tsx`
- `i18n/` — `routing.ts`, `navigation.ts`, `request.ts`
- `messages/` — TR/EN translation catalogues
- `lib/` — `utils.ts` (cn helper), `schemas.ts` (zod)
- `scripts/download-assets.mjs` — brand asset fetcher

## Deploy

Production target: `safolio.com` on Vercel.

1. Push to GitHub.
2. Import in Vercel — framework auto-detected.
3. No env vars required.
4. Add `safolio.com` and `www.safolio.com` as production domains in Vercel.
5. Update DNS at registrar to point to Vercel.

`@vercel/analytics` and `@vercel/speed-insights` activate automatically on Vercel.

## Status

MVP complete. Pending follow-ups before launch:

- Real social media URLs (Footer currently uses `#` placeholders)
- Final legal copy for the 5 legal pages (placeholder text in place)
- Confirm `hello@safolio.com` is the right contact email
- Optional: hook the signup form to a real backend (Resend / Supabase / Mailchimp)
- Optional: official App Store / Google Play badge SVGs (CTA currently uses text fallback)
