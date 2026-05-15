# Safolio Web

Pre-launch landing page for **Safolio** — an independent multi-asset investment platform (stocks, crypto, ETFs, gold) with built-in risk analysis. Captures waitlist sign-ups.

## Stack

- **Next.js 15** App Router, TypeScript (strict), Tailwind CSS v4
- **next-intl** (`/en`, `/tr` — default `en`)
- **next-themes** (light/dark/system)
- **Geist** + **Geist Mono** + **Instrument Serif** via `next/font/google`
- **shadcn/ui** (base-ui primitives)
- **lucide-react** icons
- **sonner** toasts
- **@vercel/analytics** + **@vercel/speed-insights**

## Development

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>. Root redirects to `/en`.

## Scripts

- `pnpm dev` — start dev server (Turbopack)
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm lint` — ESLint
- `pnpm format` / `pnpm format:check` — Prettier write / check
- `pnpm test:e2e` — Playwright golden-path tests (if installed)
- `pnpm assets:download` — fetch brand assets from safolio.com into `public/`

## Structure

- `app/[locale]/` — locale-scoped routes (homepage, 4 legal pages, 404, dynamic OG image)
- `app/{sitemap,robots,icon.svg}` — SEO endpoints + favicon
- `components/sections/` — Hero, Features, ProductPreview, HowItWorks, Personas, Manifesto, FinalCTA, Footer, Header
- `components/{hero-chart,dashboard-mock,logo,lang-toggle,theme-toggle,cookie-banner,skip-to-main,json-ld,theme-provider,legal-layout}.tsx`
- `components/ui/` — shadcn primitives (button, dropdown-menu, sheet, accordion, tabs, sonner, input)
- `i18n/{routing,navigation,request}.ts` — next-intl wiring
- `messages/{en,tr}.json` — translation catalogues
- `lib/utils.ts` — `cn` helper
- `public/{logo,logo-white}.svg`, `public/images/*` — brand assets

## Design tokens

The full token system lives in `app/globals.css`. Highlights:

- Light: `--bg #F7F8FB`, `--ink #0A1530`, `--accent #2150E0`, `--brand-blue #2150E0`, `--brand-cyan #00B6FF`
- Dark: `--bg #080C18`, `--ink #ECF0F8`, `--accent #5A86FF`
- Type: H1 `clamp(40,5.4vw,72px)/500/-0.025em`, body `16/1.55`, mono labels `11px uppercase 0.08em`

## Deploy (production target: `safolio.com`)

1. Push to GitHub
2. Import the repo in Vercel — framework auto-detected
3. No env vars required for this MVP
4. Add `safolio.com` (+ `www.safolio.com`) as production domains
5. Point DNS at Vercel
6. `@vercel/analytics` + `@vercel/speed-insights` activate automatically

## Open items before launch

- Real social media URLs (Footer uses `#` placeholders)
- Real legal copy for the 4 legal pages (currently placeholder text)
- Confirm `hello@safolio.com` is the right contact
- Optional: wire the waitlist email form to a real backend (Resend, Mailchimp, Loops, etc.). Today it's UI-only.
- Optional: official App Store / Google Play badge SVGs (we don't ship any badges in the current CTA — text-only "Coming Soon")
