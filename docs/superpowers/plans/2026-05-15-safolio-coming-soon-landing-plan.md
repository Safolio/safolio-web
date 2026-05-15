# Safolio Coming Soon Landing — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multilingual (TR/EN), themed (light/dark), Next.js 15 Coming Soon landing page for Safolio (independent investment portfolio platform), replacing the existing WordPress site at safolio.com.

**Architecture:** Single-page scroll landing at `/[locale]` composed of 7 section components (Header, Hero, About, DesignedForYou, WhyWeCreated, CTA, Footer), plus 5 legal static pages and a 404. Locale layout owns `<html>`, ThemeProvider, and NextIntlClientProvider. Signup form is UI-only (fake success toast).

**Tech Stack:** Next.js 15 (App Router), TypeScript 5 (strict), Tailwind CSS v4, shadcn/ui, next-intl, next-themes, react-hook-form + zod, sonner, Framer Motion, Lucide React, Vercel Analytics. Tests via Vitest + Testing Library + Playwright. Deploy to Vercel.

**Spec reference:** [docs/superpowers/specs/2026-05-15-safolio-coming-soon-landing-design.md](../specs/2026-05-15-safolio-coming-soon-landing-design.md)

---

## Working Directory

All paths are relative to `C:\Users\yasin\Projects\safolio-web`. Use absolute paths in commands where the tool requires them; in git/npm commands, `cd` is implicit (the working tree).

## Conventions

- **Indentation:** 2 spaces (TS/TSX/JSON), tabs disabled.
- **Quotes:** Double quotes in TSX, single in TS (Prettier-driven).
- **Imports:** `@/*` alias for `./` root (configured in tsconfig).
- **Component naming:** PascalCase files for components, kebab-case for non-component files.
- **Commits:** Conventional Commits — `feat:`, `fix:`, `chore:`, `test:`, `docs:`, `style:`.
- **Branching:** Single `main` branch for this MVP. Each task = 1 commit (or a small group if logically inseparable).
- **TDD discipline:** Where unit/component tests are meaningful (forms, helpers, routing logic), write test first. For pure visual components, snapshot+render-smoke is enough.

---

## Chunk 1: Project Foundation (Tasks 1–10)

Sets up the Next.js project, dependency baseline, tooling, and core providers (i18n + theme). After this chunk, `pnpm dev` shows a working bilingual + themed empty layout.

### Task 1: Initialize Next.js project

**Files:**

- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `.gitignore`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `public/next.svg`, `public/vercel.svg`

- [ ] **Step 1: Create Next.js 15 project**

Run from `C:\Users\yasin\Projects\safolio-web`:

```bash
pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-pnpm --skip-install
```

When prompted "Would you like your code inside a `src/` directory?" → **No** (already passed via flag).
When prompted "Would you like to use Turbopack for `next dev`?" → **Yes**.

Expected: Files scaffolded in working directory, `pnpm install` not run.

- [ ] **Step 2: Install dependencies**

```bash
pnpm install
```

Expected: `node_modules/`, `pnpm-lock.yaml` created.

- [ ] **Step 3: Verify dev server boots**

```bash
pnpm dev
```

Expected: Next.js dev server on `http://localhost:3000`, default Next.js welcome page renders. Press Ctrl+C to stop.

- [ ] **Step 4: Initialize git and commit**

```bash
git init
git add .
git commit -m "chore: initialize Next.js 15 project with TypeScript and Tailwind v4"
```

---

### Task 2: Strict TypeScript config

**Files:**

- Modify: `tsconfig.json`

- [ ] **Step 1: Update tsconfig.json to strict mode**

Replace contents:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 2: Verify typecheck passes**

```bash
pnpm exec tsc --noEmit
```

Expected: Exit code 0, no errors.

- [ ] **Step 3: Commit**

```bash
git add tsconfig.json
git commit -m "chore: enable strict TypeScript"
```

---

### Task 3: Prettier setup

**Files:**

- Create: `.prettierrc.json`, `.prettierignore`
- Modify: `package.json` (add scripts and devDeps)

- [ ] **Step 1: Install Prettier**

```bash
pnpm add -D prettier prettier-plugin-tailwindcss
```

- [ ] **Step 2: Create `.prettierrc.json`**

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 100,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

- [ ] **Step 3: Create `.prettierignore`**

```
.next
node_modules
pnpm-lock.yaml
public
```

- [ ] **Step 4: Add format scripts to `package.json`**

Inside `"scripts"` block, add:

```json
"format": "prettier --write .",
"format:check": "prettier --check ."
```

- [ ] **Step 5: Format codebase**

```bash
pnpm format
```

- [ ] **Step 6: Commit**

```bash
git add .prettierrc.json .prettierignore package.json pnpm-lock.yaml
git add -u
git commit -m "chore: add Prettier with Tailwind plugin"
```

---

### Task 4: Install runtime dependencies

**Files:**

- Modify: `package.json`, `pnpm-lock.yaml`

- [ ] **Step 1: Install all runtime libs**

```bash
pnpm add next-intl@^3 next-themes@^0.4 react-hook-form@^7 @hookform/resolvers zod@^3 lucide-react framer-motion@^11 sonner clsx tailwind-merge class-variance-authority @vercel/analytics @vercel/speed-insights
```

- [ ] **Step 2: Verify install**

```bash
pnpm list --depth=0
```

Expected: All packages listed without warnings/errors.

- [ ] **Step 3: Commit**

```bash
git add package.json pnpm-lock.yaml
git commit -m "chore: add runtime dependencies (next-intl, next-themes, form, animation, analytics)"
```

---

### Task 5: Folder skeleton

**Files:**

- Create: `app/[locale]/`, `components/sections/`, `components/ui/`, `lib/`, `i18n/`, `messages/`

- [ ] **Step 1: Create directories**

```bash
mkdir -p "app/[locale]" components/sections components/ui lib i18n messages public/images/badges
```

- [ ] **Step 2: Create placeholder `messages/en.json` and `messages/tr.json`**

`messages/en.json`:

```json
{
  "Nav": {
    "home": "Home"
  }
}
```

`messages/tr.json`:

```json
{
  "Nav": {
    "home": "Ana Sayfa"
  }
}
```

- [ ] **Step 3: Commit (after later tasks add real content; placeholder commit not needed here — fold into Task 6)**

---

### Task 6: next-intl routing + middleware

**Files:**

- Create: `i18n/routing.ts`, `i18n/navigation.ts`, `i18n/request.ts`, `middleware.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Create `i18n/routing.ts`**

```ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["tr", "en"],
  defaultLocale: "tr",
  localePrefix: "always",
});
```

- [ ] **Step 2: Create `i18n/navigation.ts`**

```ts
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
```

- [ ] **Step 3: Create `i18n/request.ts`**

```ts
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

- [ ] **Step 4: Create `middleware.ts`**

```ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

- [ ] **Step 5: Update `next.config.ts`**

```ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withNextIntl(nextConfig);
```

- [ ] **Step 6: Commit**

```bash
git add i18n/ middleware.ts next.config.ts messages/
git commit -m "feat(i18n): configure next-intl with TR/EN locales"
```

---

### Task 7: Pass-through root layout + locale layout (with ThemeProvider)

**Files:**

- Delete: `app/page.tsx` (will be replaced under `[locale]`)
- Modify: `app/layout.tsx`
- Create: `app/[locale]/layout.tsx`, `app/[locale]/page.tsx`, `components/theme-provider.tsx`

- [ ] **Step 1: Replace `app/layout.tsx` with pass-through**

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
```

Note: `globals.css` is imported by the locale layout (Step 4), not here, to avoid duplicate-import warnings.

- [ ] **Step 2: Delete `app/page.tsx`**

```bash
rm app/page.tsx
```

- [ ] **Step 3: Create `components/theme-provider.tsx`**

```tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

- [ ] **Step 4: Create `app/[locale]/layout.tsx`**

```tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <Toaster richColors position="top-center" />
            <Analytics />
            <SpeedInsights />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Create temporary `app/[locale]/page.tsx`**

```tsx
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Nav");
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">{t("home")}</h1>
    </main>
  );
}
```

- [ ] **Step 6: Run dev server and verify both locales**

```bash
pnpm dev
```

Visit `http://localhost:3000` → should redirect to `/tr`.
Visit `http://localhost:3000/en` → should show "Home".
Visit `http://localhost:3000/tr` → should show "Ana Sayfa".

Stop server with Ctrl+C.

- [ ] **Step 7: Commit**

```bash
git add app/ components/theme-provider.tsx
git commit -m "feat(layout): wire next-intl + next-themes providers in locale layout"
```

---

### Task 8: Global CSS with theme tokens

**Files:**

- Modify: `app/globals.css`

- [ ] **Step 1: Replace `app/globals.css`**

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: var(--font-inter), system-ui, sans-serif;
  --radius-card: 16px;
  --radius-button: 10px;
  --radius-input: 10px;
  --color-on-dark-bg: #010101;
  --color-on-dark-foreground: #ffffff;
  --color-on-dark-muted: rgba(255, 255, 255, 0.7);
  --color-on-dark-border: #171717;
}

:root {
  --background: #ffffff;
  --foreground: #010101;
  --muted-foreground: #666666;
  --card: #ffffff;
  --card-foreground: #010101;
  --primary: #2869f5;
  --primary-hover: #03a9f4;
  --primary-foreground: #ffffff;
  --accent: #6461fc;
  --accent-foreground: #ffffff;
  --border: #e9e9e9;
  --input: #e9e9e9;
  --ring: #2869f5;
  --highlight: #f0f0f0;
}

.dark {
  --background: #0a0a0a;
  --foreground: #fafafa;
  --muted-foreground: #a1a1a1;
  --card: #151515;
  --card-foreground: #fafafa;
  --border: #222222;
  --input: #2a2a2a;
  --ring: #6461fc;
  --highlight: #1f1f1f;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-muted-foreground: var(--muted-foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-hover: var(--primary-hover);
  --color-primary-foreground: var(--primary-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-highlight: var(--highlight);
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
  :focus-visible {
    @apply outline-ring outline-2 outline-offset-2;
  }
}
```

- [ ] **Step 2: Verify dev server still renders without console errors**

```bash
pnpm dev
```

Visit `http://localhost:3000` → page renders with light theme background (#FFFFFF). No CSS console errors.

Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat(theme): add light/dark CSS variables and Tailwind v4 @theme bindings"
```

---

### Task 9: Tailwind utility helper

**Files:**

- Create: `lib/utils.ts`

- [ ] **Step 1: Create `lib/utils.ts`**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Commit**

```bash
git add lib/utils.ts
git commit -m "feat(lib): add cn() Tailwind class merger helper"
```

---

### Task 10: shadcn/ui init + first components

**Files:**

- Create: `components.json`, `components/ui/button.tsx`, `components/ui/input.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/sheet.tsx`, `components/ui/accordion.tsx`, `components/ui/tabs.tsx`
- Modify: relevant files as shadcn requires

- [ ] **Step 1: Initialize shadcn**

```bash
pnpm dlx shadcn@latest init
```

Answer prompts:

- Which style? → **Default**
- Which color? → **Neutral**
- CSS variables? → **Yes**

Accept all defaults; expect this command to overwrite `app/globals.css` with shadcn's default tokens.

- [ ] **Step 2: Restore custom globals.css**

The shadcn init very likely overwrote our custom theme tokens. Restore from the previous commit:

```bash
git checkout app/globals.css
```

Verify the file contains `@custom-variant dark` and `--color-on-dark-bg`. If not, paste back the contents from Task 8 Step 1.

- [ ] **Step 3: Verify `components.json` was created**

```bash
cat components.json
```

Expected: JSON file with `tailwind.cssVariables: true`, `aliases.components: "@/components"`, `aliases.ui: "@/components/ui"`.

- [ ] **Step 4: Add required components**

```bash
pnpm dlx shadcn@latest add button input dropdown-menu sheet accordion tabs sonner
```

Accept any prompts.

- [ ] **Step 5: Verify typecheck passes**

```bash
pnpm exec tsc --noEmit
```

Expected: No errors.

- [ ] **Step 6: Commit**

```bash
git add components.json components/ui/
git commit -m "feat(ui): add shadcn/ui base components"
```

---

**End of Chunk 1.** Verify: `pnpm dev` shows `/tr` and `/en` rendering "Ana Sayfa" / "Home" with Tailwind classes working.

---

## Chunk 2: Layout Primitives & Assets (Tasks 11–18)

Builds the LocaleSwitcher, ThemeToggle, SkipToMain, Header, Footer scaffolding, and pulls in all static assets from the existing safolio.com.

### Task 11: Asset download script

**Files:**

- Create: `scripts/download-assets.mjs`
- Modify: `package.json` (add `assets:download` script)

- [ ] **Step 1: Create `scripts/download-assets.mjs`**

```js
import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const ASSETS = [
  ["public/logo.svg", "https://safolio.com/wp-content/uploads/2025/07/safolio_logo.svg"],
  [
    "public/logo-white.svg",
    "https://safolio.com/wp-content/uploads/2025/07/safolio_logo_white.svg",
  ],
  ["public/icon.png", "https://safolio.com/wp-content/uploads/2025/07/safolio-icon-1.png"],
  [
    "public/images/hero-portrait.png",
    "https://safolio.com/wp-content/uploads/2025/07/20250724_1245_Gercekci_Adam_Portresi_remix_01k0y0f4h8fk4bz2qz9kk742gf-removebg-preview-2.png",
  ],
  ["public/images/hero-bg.webp", "https://safolio.com/wp-content/uploads/2025/04/h2-1.webp"],
  [
    "public/images/team.jpg",
    "https://safolio.com/wp-content/uploads/2025/07/20250724_1303_Uluslararasi-Ekip-Calismasi_remix_01k0y1h93zfg1v27bd35z8xe66-Large.jpeg",
  ],
  [
    "public/images/designed-for-you.jpg",
    "https://safolio.com/wp-content/uploads/2025/07/20250724_1313_Fotograf-Yeniden-Olusturma_remix_01k0y23q23fm6ve3pycznaw925.jpeg",
  ],
  ["public/images/cta-bg.webp", "https://safolio.com/wp-content/uploads/2025/04/h2-32.webp"],
];

for (const [target, url] of ASSETS) {
  console.log(`Fetching ${url} -> ${target}`);
  const res = await fetch(url, {
    headers: { "User-Agent": "safolio-web/asset-download" },
  });
  if (!res.ok) throw new Error(`Failed: ${url} (${res.status})`);
  await mkdir(dirname(target), { recursive: true });
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(target, buf);
}
console.log("Done.");
```

- [ ] **Step 2: Add script to `package.json`**

Inside `"scripts"`:

```json
"assets:download": "node scripts/download-assets.mjs"
```

- [ ] **Step 3: Run script**

```bash
pnpm assets:download
```

Expected: 8 files downloaded into `public/`.

- [ ] **Step 4: Manually save App Store and Google Play badges**

Note for implementer: Download official badges manually from:

- Apple: https://developer.apple.com/app-store/marketing/guidelines/#downloadOnAppstore
- Google: https://play.google.com/intl/en_us/badges/

Save as `public/images/badges/app-store.svg` and `public/images/badges/play-store.svg`.

If unable to obtain official SVGs in this pass, create text-only placeholder buttons in the CTA component instead (handled in Task 24); skip this step.

- [ ] **Step 5: Commit**

```bash
git add scripts/ package.json public/
git commit -m "chore: add asset download script and import brand assets from safolio.com"
```

---

### Task 12: Favicon and metadata icons

**Files:**

- Create: `app/icon.png`, `app/apple-icon.png`
- Modify: nothing else

- [ ] **Step 1: Copy `public/icon.png` to Next.js metadata locations**

```bash
cp public/icon.png app/icon.png
cp public/icon.png app/apple-icon.png
```

Next.js auto-serves these as `<link rel="icon">` and `<link rel="apple-touch-icon">`.

- [ ] **Step 2: Commit**

```bash
git add app/icon.png app/apple-icon.png
git commit -m "feat(meta): add favicon and apple-touch-icon"
```

---

### Task 13: messages/en.json and messages/tr.json full content

**Files:**

- Modify: `messages/en.json`, `messages/tr.json`

- [ ] **Step 1: Replace `messages/en.json`**

```json
{
  "Metadata": {
    "title": "Safolio — Invest with Insight",
    "description": "An independent platform designed for smart investors. Unify your assets, manage with ease, and decide with risk analysis. Stocks, crypto, ETFs — all in Safolio."
  },
  "Nav": {
    "home": "Home"
  },
  "a11y": {
    "skipToMain": "Skip to main content",
    "toggleTheme": "Toggle theme",
    "selectLanguage": "Select language",
    "openMenu": "Open menu"
  },
  "ThemeToggle": {
    "light": "Light",
    "dark": "Dark",
    "system": "System"
  },
  "Hero": {
    "heading": "Empower Your Financial Future!",
    "description": "Designed for smart investors, Safolio is an independent platform that brings all your assets together in one place, helps you manage them with ease, and supports you in making the best decisions through risk analysis. Stocks, crypto, ETFs… all in Safolio.",
    "signUpLabel": "Sign Up Early",
    "signUpHint": "Be Among the First to Try:",
    "comingSoon": "Coming Soon…",
    "comingSoonReady": "Get Ready for the Safolio Experience!"
  },
  "About": {
    "heading": "What is",
    "headingHighlight": "Safolio?",
    "body": "Safolio is an independent investment platform that brings together all your assets — stocks, crypto, ETFs, gold, and more — into one place. With advanced risk analysis, it helps you make smarter decisions and guides you on your path to financial freedom.",
    "features": {
      "intro": {
        "title": "Independent, empowering, simple and risk-smart",
        "body": "Safolio is more than just a portfolio tracker — it's your companion on the path to financial freedom. No matter what assets you hold, Safolio helps you see the bigger picture, understand your risks, refine your strategy, and take action with ease."
      },
      "independent": {
        "title": "Truly Independent",
        "body": "Not tied to any bank or broker. Every calculation and analysis is built for your benefit and trust."
      },
      "multiAsset": {
        "title": "Multi-Asset Support",
        "body": "From stocks to crypto, funds to gold, manage and evaluate all your investments in one place."
      },
      "journal": {
        "title": "Integrated Trading Journal",
        "body": "Learn from your past and plan your future. Track all your moves in the simplest way."
      },
      "risk": {
        "title": "Smart Risk Analysis",
        "body": "No surprises. Let advanced tools work for you, so you can stay in control and enjoy managing your investments yourself."
      },
      "community": {
        "title": "Community Driven",
        "body": "Learn, share, and grow together. Safolio opens the doors to a community of investors managing their own portfolios."
      }
    }
  },
  "DesignedForYou": {
    "heading": "Designed",
    "headingHighlight": "For You",
    "tabs": {
      "audience": {
        "label": "Who is Safolio for?",
        "items": [
          "New investors taking their very first steps into the world of investing",
          "Experienced investors and traders looking for smarter tools and deeper insights",
          "Those managing both crypto and traditional assets together",
          "Investment communities that love to share knowledge",
          "Savers who want to turn their money into investments with reliable insights",
          "Financial professionals seeking advanced analysis and clarity",
          "Thought leaders and influencers shaping the future of finance"
        ],
        "outro": "Wherever you are on your investment journey, Safolio gives you the tools to guide your way and a community to walk alongside you."
      },
      "why": {
        "label": "Why Safolio?",
        "items": [
          "Independent and unbiased",
          "Informative and educational",
          "Community-driven",
          "Transparent with a simple, intuitive experience",
          "Advanced and detailed risk analysis",
          "Trustworthy — you stay in control of your own decisions",
          "Enables those with small savings to start investing",
          "Provides professionals with all the tools they need in one place"
        ]
      }
    }
  },
  "WhyWeCreated": {
    "heading": "Why Did We Create",
    "headingHighlight": "Safolio?",
    "paragraphs": [
      "We believe investing is a right for everyone, no matter the size of their savings. Too many investors get lost in scattered platforms and overwhelming information. As investors ourselves, searching for the best way to grow our money, we built Safolio.",
      "Safolio is a trustworthy, independent platform that empowers you to make your own decisions with confidence — backed by unbiased analysis and advanced risk insights. As you plan for your future, you're no longer alone. Safolio is with you 24/7, helping you take control and make the right moves on your investment journey."
    ]
  },
  "CTA": {
    "eyebrow": "WELCOME TO FINANCIAL FREEDOM!",
    "heading": "Join the",
    "headingBrand": "Safolio",
    "headingMiddle": "community and discover an investment experience that's",
    "headingSecure": "secure",
    "headingTail": ", effortless, and",
    "headingEmpowering": "empowering",
    "headingPeriod": ".",
    "body": "Forget what you thought you knew about finance — a new era is beginning, and this time, you're in control.",
    "comingSoon": "Coming Soon!"
  },
  "Footer": {
    "tagline": {
      "line1": "Unify your",
      "line2": "investments,",
      "line3": "empower",
      "line4": "your decisions."
    },
    "contact": "Contact",
    "address": "Vinkenburgstraat 2 A, 3512AB Utrecht",
    "company": "Safolio B.V.",
    "globalSocial": "Global Social",
    "turkishSocial": "Turkish Social",
    "legal": {
      "privacy": "Privacy Policy",
      "cookie": "Cookie Policy",
      "terms": "Terms and Conditions",
      "aup": "Acceptable Use Policy",
      "eula": "EULA"
    },
    "copyright": "© Safolio {year}. All rights reserved."
  },
  "Form": {
    "emailPlaceholder": "E-Mail",
    "submit": "Register",
    "submitting": "Sending…",
    "successTitle": "Thanks!",
    "successMessage": "We'll keep you posted.",
    "errorRequired": "Email is required",
    "errorInvalid": "Please enter a valid email"
  },
  "CookieBanner": {
    "message": "We use cookies for analytics. Read more in our cookie policy.",
    "accept": "Accept",
    "reject": "Reject",
    "policyLink": "Cookie Policy"
  },
  "NotFound": {
    "heading": "404",
    "title": "Page not found",
    "description": "The page you're looking for doesn't exist or has been moved.",
    "back": "Back to home"
  }
}
```

- [ ] **Step 2: Replace `messages/tr.json`**

```json
{
  "Metadata": {
    "title": "Safolio — İçgörüyle Yatırım Yapın",
    "description": "Akıllı yatırımcılar için tasarlanmış bağımsız platform. Varlıklarınızı birleştirin, kolayca yönetin, risk analiziyle karar verin. Hisse, kripto, ETF — hepsi Safolio'da."
  },
  "Nav": {
    "home": "Ana Sayfa"
  },
  "a11y": {
    "skipToMain": "Ana içeriğe atla",
    "toggleTheme": "Temayı değiştir",
    "selectLanguage": "Dil seç",
    "openMenu": "Menüyü aç"
  },
  "ThemeToggle": {
    "light": "Açık",
    "dark": "Koyu",
    "system": "Sistem"
  },
  "Hero": {
    "heading": "Finansal Geleceğinizi Güçlendirin!",
    "description": "Akıllı yatırımcılar için tasarlanan Safolio, tüm varlıklarınızı tek yerde bir araya getiren, kolay yönetmenize yardımcı olan ve risk analiziyle en doğru kararları almanızı destekleyen bağımsız bir platformdur. Hisse, kripto, ETF… hepsi Safolio'da.",
    "signUpLabel": "Erken Kayıt",
    "signUpHint": "İlk deneyenlerden olun:",
    "comingSoon": "Çok Yakında…",
    "comingSoonReady": "Safolio Deneyimine Hazırlanın!"
  },
  "About": {
    "heading": "Safolio",
    "headingHighlight": "nedir?",
    "body": "Safolio, hisse senedi, kripto, ETF, altın ve daha fazlası dahil tüm varlıklarınızı tek yerde toplayan bağımsız bir yatırım platformudur. Gelişmiş risk analiziyle daha akıllı kararlar almanıza yardımcı olur ve finansal özgürlük yolunda size rehberlik eder.",
    "features": {
      "intro": {
        "title": "Bağımsız, güçlendirici, basit ve risk-akıllı",
        "body": "Safolio sadece bir portföy takipçisi değil — finansal özgürlüğe giden yolda yol arkadaşınızdır. Hangi varlıklara sahip olursanız olun, Safolio büyük resmi görmenize, risklerinizi anlamanıza, stratejinizi geliştirmenize ve kolayca harekete geçmenize yardımcı olur."
      },
      "independent": {
        "title": "Gerçekten Bağımsız",
        "body": "Hiçbir banka veya aracı kuruma bağlı değil. Her hesaplama ve analiz sizin yararınız ve güveniniz için inşa edildi."
      },
      "multiAsset": {
        "title": "Çoklu Varlık Desteği",
        "body": "Hisseden kriptoya, fondan altına, tüm yatırımlarınızı tek bir yerden yönetin ve değerlendirin."
      },
      "journal": {
        "title": "Entegre Trading Günlüğü",
        "body": "Geçmişinizden öğrenin ve geleceğinizi planlayın. Tüm hamlelerinizi en basit şekilde takip edin."
      },
      "risk": {
        "title": "Akıllı Risk Analizi",
        "body": "Sürprizler yok. Gelişmiş araçlar sizin için çalışsın, böylece kontrolde kalın ve yatırımlarınızı kendiniz yönetmenin keyfini çıkarın."
      },
      "community": {
        "title": "Topluluk Odaklı",
        "body": "Öğrenin, paylaşın ve birlikte büyüyün. Safolio, portföylerini yöneten bir yatırımcı topluluğunun kapılarını aralar."
      }
    }
  },
  "DesignedForYou": {
    "heading": "Sizin",
    "headingHighlight": "için tasarlandı",
    "tabs": {
      "audience": {
        "label": "Safolio kimler için?",
        "items": [
          "Yatırım dünyasına ilk adımlarını atan yeni yatırımcılar",
          "Daha akıllı araçlar ve derin içgörüler arayan deneyimli yatırımcı ve trader'lar",
          "Kripto ve geleneksel varlıkları birlikte yönetenler",
          "Bilgi paylaşmayı seven yatırım toplulukları",
          "Tasarruflarını güvenilir içgörülerle yatırıma dönüştürmek isteyenler",
          "Gelişmiş analiz ve netlik arayan finans profesyonelleri",
          "Finansın geleceğini şekillendiren düşünce liderleri ve influencer'lar"
        ],
        "outro": "Yatırım yolculuğunuzun neresinde olursanız olun, Safolio size yön gösterecek araçları ve birlikte yürüyeceğiniz bir topluluğu sunar."
      },
      "why": {
        "label": "Neden Safolio?",
        "items": [
          "Bağımsız ve tarafsız",
          "Bilgilendirici ve eğitici",
          "Topluluk odaklı",
          "Şeffaf, basit ve sezgisel deneyim",
          "Gelişmiş ve detaylı risk analizi",
          "Güvenilir — kararlarınızın kontrolü sizde",
          "Küçük tasarruflarla bile yatırıma başlamayı sağlar",
          "Profesyonellere ihtiyaçları olan tüm araçları tek yerde sunar"
        ]
      }
    }
  },
  "WhyWeCreated": {
    "heading": "Safolio'yu",
    "headingHighlight": "neden yarattık?",
    "paragraphs": [
      "Yatırımın, tasarrufun büyüklüğüne bakılmaksızın herkesin hakkı olduğuna inanıyoruz. Çok fazla yatırımcı dağınık platformlarda ve bilgi yığınında kayboluyor. Kendimiz de yatırımcı olarak, paramızı büyütmenin en iyi yolunu ararken Safolio'yu inşa ettik.",
      "Safolio, kendi kararlarınızı güvenle vermenizi sağlayan güvenilir ve bağımsız bir platformdur — tarafsız analiz ve gelişmiş risk içgörüleriyle desteklenir. Geleceğinizi planlarken artık yalnız değilsiniz. Safolio yatırım yolculuğunuzda 7/24 yanınızda; kontrolü ele almanıza ve doğru hamleleri yapmanıza yardımcı olur."
    ]
  },
  "CTA": {
    "eyebrow": "FİNANSAL ÖZGÜRLÜĞE HOŞ GELDİNİZ!",
    "heading": "Safolio",
    "headingBrand": "topluluğuna",
    "headingMiddle": "katılın ve",
    "headingSecure": "güvenli",
    "headingTail": ", zahmetsiz ve",
    "headingEmpowering": "güçlendirici",
    "headingPeriod": " bir yatırım deneyimini keşfedin.",
    "body": "Finans hakkında bildiğinizi sandığınız her şeyi unutun — yeni bir çağ başlıyor ve bu kez kontrol sizde.",
    "comingSoon": "Çok Yakında!"
  },
  "Footer": {
    "tagline": {
      "line1": "Yatırımlarınızı",
      "line2": "birleştirin,",
      "line3": "kararlarınızı",
      "line4": "güçlendirin."
    },
    "contact": "İletişim",
    "address": "Vinkenburgstraat 2 A, 3512AB Utrecht",
    "company": "Safolio B.V.",
    "globalSocial": "Global Sosyal",
    "turkishSocial": "Türkiye Sosyal",
    "legal": {
      "privacy": "Gizlilik Politikası",
      "cookie": "Çerez Politikası",
      "terms": "Hüküm ve Koşullar",
      "aup": "Kabul Edilebilir Kullanım Politikası",
      "eula": "EULA"
    },
    "copyright": "© Safolio {year}. Tüm hakları saklıdır."
  },
  "Form": {
    "emailPlaceholder": "E-Posta",
    "submit": "Kayıt Ol",
    "submitting": "Gönderiliyor…",
    "successTitle": "Teşekkürler!",
    "successMessage": "Sizi haberdar edeceğiz.",
    "errorRequired": "E-posta gerekli",
    "errorInvalid": "Geçerli bir e-posta girin"
  },
  "CookieBanner": {
    "message": "Analitik için çerez kullanıyoruz. Detaylar çerez politikamızda.",
    "accept": "Kabul Et",
    "reject": "Reddet",
    "policyLink": "Çerez Politikası"
  },
  "NotFound": {
    "heading": "404",
    "title": "Sayfa bulunamadı",
    "description": "Aradığınız sayfa mevcut değil veya taşınmış olabilir.",
    "back": "Ana sayfaya dön"
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add messages/
git commit -m "feat(i18n): add full TR/EN message catalogues"
```

---

### Task 14: SkipToMain component

**Files:**

- Create: `components/skip-to-main.tsx`

- [ ] **Step 1: Create `components/skip-to-main.tsx`**

```tsx
import { useTranslations } from "next-intl";

export function SkipToMain() {
  const t = useTranslations("a11y");
  return (
    <a
      href="#main"
      className="focus:rounded-button focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2"
    >
      {t("skipToMain")}
    </a>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/skip-to-main.tsx
git commit -m "feat(a11y): add SkipToMain link"
```

---

### Task 15: LocaleSwitcher component

**Files:**

- Create: `components/locale-switcher.tsx`

- [ ] **Step 1: Create `components/locale-switcher.tsx`**

```tsx
"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { routing } from "@/i18n/routing";

const LOCALE_LABELS: Record<string, string> = {
  tr: "Türkçe",
  en: "English",
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("a11y");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t("selectLanguage")}>
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((l) => (
          <DropdownMenuItem
            key={l}
            disabled={l === locale}
            onSelect={() => router.replace(pathname, { locale: l })}
          >
            {LOCALE_LABELS[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

- [ ] **Step 2: Verify typecheck**

```bash
pnpm exec tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add components/locale-switcher.tsx
git commit -m "feat(i18n): add LocaleSwitcher dropdown"
```

---

### Task 16: ThemeToggle component

**Files:**

- Create: `components/theme-toggle.tsx`

- [ ] **Step 1: Create `components/theme-toggle.tsx`**

```tsx
"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const t = useTranslations("ThemeToggle");
  const a11y = useTranslations("a11y");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={a11y("toggleTheme")}>
          <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" /> {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" /> {t("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" /> {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/theme-toggle.tsx
git commit -m "feat(theme): add ThemeToggle dropdown"
```

---

### Task 17: Header component

**Files:**

- Create: `components/sections/header.tsx`

- [ ] **Step 1: Create `components/sections/header.tsx`**

```tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-200",
        scrolled ? "border-border bg-background/80 border-b backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1300px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center" aria-label="Safolio">
          <Image
            src="/logo.svg"
            alt="Safolio"
            width={140}
            height={26}
            priority
            className="block dark:hidden"
          />
          <Image
            src="/logo-white.svg"
            alt="Safolio"
            width={140}
            height={26}
            priority
            className="hidden dark:block"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <Link href="/" className="hover:text-accent px-3 py-2 text-sm font-medium">
            {t("home")}
          </Link>
          <LocaleSwitcher />
          <ThemeToggle />
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/" className="text-base font-medium">
                {t("home")}
              </Link>
              <div className="mt-4 flex items-center gap-2">
                <LocaleSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/header.tsx
git commit -m "feat(section): add Header with logo, nav, language and theme switchers"
```

---

### Task 18: Wire Header into page; manual smoke test

**Files:**

- Modify: `app/[locale]/page.tsx`

- [ ] **Step 1: Replace `app/[locale]/page.tsx`**

```tsx
import { Header } from "@/components/sections/header";
import { SkipToMain } from "@/components/skip-to-main";

export default function HomePage() {
  return (
    <>
      <SkipToMain />
      <Header />
      <main id="main" className="min-h-screen pt-16">
        <div className="mx-auto max-w-[1300px] px-4 py-24">
          <p className="text-muted-foreground">Sections coming…</p>
        </div>
      </main>
    </>
  );
}
```

- [ ] **Step 2: Manual smoke**

```bash
pnpm dev
```

- Visit `/tr` → header shows logo, "Ana Sayfa", language and theme buttons.
- Click theme toggle → switches to dark; logo swaps to white variant.
- Click language switcher → switches to `/en`, header labels update.
- Tab key focuses SkipToMain link → visible top-left.
- Scroll page → header gets blurred background + border.
- Resize browser to <768px → hamburger menu replaces nav.

Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/[locale]/page.tsx
git commit -m "feat(page): wire Header and SkipToMain into homepage"
```

---

**End of Chunk 2.** Verify: Header is functional, theme + locale switching work.

---

## Chunk 3: Section Components (Tasks 19–27)

Build out the seven page sections plus the SignupForm.

### Task 19: SignupForm component + zod schema

**Files:**

- Create: `lib/schemas.ts`, `components/signup-form.tsx`

- [ ] **Step 1: Create `lib/schemas.ts`**

```ts
import { z } from "zod";

export function createEmailSchema(messages: { required: string; invalid: string }) {
  return z.object({
    email: z
      .string({ required_error: messages.required })
      .min(1, messages.required)
      .email(messages.invalid),
  });
}

export type EmailFormValues = { email: string };
```

- [ ] **Step 2: Create `components/signup-form.tsx`**

```tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createEmailSchema, type EmailFormValues } from "@/lib/schemas";
import { cn } from "@/lib/utils";

interface SignupFormProps {
  tone?: "on-light" | "on-dark";
}

export function SignupForm({ tone = "on-light" }: SignupFormProps) {
  const t = useTranslations("Form");
  const schema = createEmailSchema({
    required: t("errorRequired"),
    invalid: t("errorInvalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EmailFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: EmailFormValues) => {
    void values;
    await new Promise((r) => setTimeout(r, 800));
    toast.success(t("successTitle"), { description: t("successMessage") });
    reset();
  };

  const onDark = tone === "on-dark";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-md"
      aria-label={t("submit")}
    >
      <div
        className={cn(
          "rounded-input relative flex items-center border",
          onDark ? "border-on-dark-border bg-white/10" : "border-input bg-card",
        )}
      >
        <Mail
          className={cn("ml-3 h-4 w-4", onDark ? "text-on-dark-muted" : "text-muted-foreground")}
          aria-hidden
        />
        <Input
          type="email"
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(
            "flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0",
            onDark && "placeholder:text-on-dark-muted text-white",
          )}
          {...register("email")}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="rounded-input bg-primary text-primary-foreground hover:bg-primary-hover m-1 h-9 px-4"
        >
          {isSubmitting ? t("submitting") : t("submit")}
        </Button>
      </div>
      {errors.email && (
        <p id="email-error" className="mt-2 text-sm text-red-500">
          {errors.email.message}
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add lib/schemas.ts components/signup-form.tsx
git commit -m "feat(form): add SignupForm with zod validation and fake-success toast"
```

---

### Task 20: Hero section

**Files:**

- Create: `components/sections/hero.tsx`

- [ ] **Step 1: Create `components/sections/hero.tsx`**

```tsx
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SignupForm } from "@/components/signup-form";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[url('/images/hero-bg.webp')] bg-left-top bg-no-repeat pt-24 md:pt-32"
    >
      <div className="mx-auto grid max-w-[1300px] gap-12 px-4 pb-24 md:grid-cols-2 md:px-6 md:pb-32">
        <div className="flex flex-col justify-center">
          <h1 className="text-foreground text-[clamp(2rem,5vw,3.25rem)] leading-[1.15] font-semibold tracking-tight">
            {t("heading")}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-md text-sm leading-[26px]">
            {t("description")}
          </p>
          <div className="bg-border my-8 h-px w-1/4" />
          <p className="mb-3 text-base font-semibold">
            <strong>{t("signUpLabel")}</strong>{" "}
            <span className="text-muted-foreground font-normal">| {t("signUpHint")}</span>
          </p>
          <SignupForm tone="on-light" />
        </div>

        <div className="relative">
          <div className="rounded-card bg-primary/95 text-primary-foreground px-6 py-5 md:max-w-sm">
            <p className="text-sm">{t("comingSoonReady")}</p>
          </div>
          <div className="rounded-card relative mt-6 overflow-hidden">
            <Image
              src="/images/hero-portrait.png"
              alt=""
              width={566}
              height={1008}
              priority
              className="mx-auto h-auto w-full max-w-md object-contain dark:brightness-[0.7]"
            />
            <div className="rounded-card bg-card/95 absolute inset-x-4 bottom-4 p-5 shadow-lg backdrop-blur">
              <p className="text-muted-foreground text-xs tracking-wide uppercase">
                {t("comingSoon")}
              </p>
              <div className="bg-highlight mt-3 h-2 w-full overflow-hidden rounded-full">
                <div className="bg-primary h-full w-3/4 rounded-full" />
              </div>
              <p className="text-foreground mt-2 text-xs font-semibold">75%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/hero.tsx
git commit -m "feat(section): add Hero with signup form and progress card"
```

---

### Task 21: About section ("What is Safolio?")

**Files:**

- Create: `components/sections/about.tsx`

- [ ] **Step 1: Create `components/sections/about.tsx`**

```tsx
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FEATURE_KEYS = [
  "intro",
  "independent",
  "multiAsset",
  "journal",
  "risk",
  "community",
] as const;

export function About() {
  const t = useTranslations("About");
  return (
    <section className="border-border border-t">
      <div className="mx-auto grid max-w-[1300px] gap-12 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24">
        <div>
          <h2 className="text-[clamp(1.875rem,4vw,3rem)] leading-tight font-semibold tracking-tight">
            {t("heading")} <span className="bg-highlight px-2">{t("headingHighlight")}</span>
          </h2>
          <p className="text-muted-foreground mt-6 text-base leading-[26px]">{t("body")}</p>
          <div className="rounded-card mt-10 overflow-hidden">
            <Image
              src="/images/team.jpg"
              alt=""
              width={1280}
              height={853}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
        <div className="md:pl-10">
          <Accordion type="single" defaultValue="intro" collapsible>
            {FEATURE_KEYS.map((key) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {t(`features.${key}.title`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(`features.${key}.body`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/about.tsx
git commit -m "feat(section): add About section with team image and feature accordion"
```

---

### Task 22: DesignedForYou section

**Files:**

- Create: `components/sections/designed-for-you.tsx`

- [ ] **Step 1: Create `components/sections/designed-for-you.tsx`**

```tsx
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function DesignedForYou() {
  const t = useTranslations("DesignedForYou");
  const audienceItems = t.raw("tabs.audience.items") as string[];
  const whyItems = t.raw("tabs.why.items") as string[];

  return (
    <section className="border-border border-t">
      <div className="mx-auto max-w-[1300px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="text-center text-[clamp(1.875rem,4vw,3rem)] leading-tight font-semibold tracking-tight md:text-left">
          {t("heading")} <span className="bg-highlight px-2">{t("headingHighlight")}</span>
        </h2>
        <div className="mt-12 grid items-start gap-12 md:grid-cols-2">
          <div className="rounded-card overflow-hidden">
            <Image
              src="/images/designed-for-you.jpg"
              alt=""
              width={1536}
              height={1024}
              className="h-auto w-full object-cover"
            />
          </div>
          <Tabs defaultValue="audience">
            <TabsList>
              <TabsTrigger value="audience">{t("tabs.audience.label")}</TabsTrigger>
              <TabsTrigger value="why">{t("tabs.why.label")}</TabsTrigger>
            </TabsList>
            <TabsContent value="audience" className="text-muted-foreground mt-6">
              <ul className="list-disc space-y-2 pl-5">
                {audienceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t("tabs.audience.outro")}</p>
            </TabsContent>
            <TabsContent value="why" className="text-muted-foreground mt-6">
              <ul className="list-disc space-y-2 pl-5">
                {whyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/designed-for-you.tsx
git commit -m "feat(section): add DesignedForYou with audience and reasons tabs"
```

---

### Task 23: WhyWeCreated section

**Files:**

- Create: `components/sections/why-we-created.tsx`

- [ ] **Step 1: Create `components/sections/why-we-created.tsx`**

```tsx
import { useTranslations } from "next-intl";

export function WhyWeCreated() {
  const t = useTranslations("WhyWeCreated");
  const paragraphs = t.raw("paragraphs") as string[];
  return (
    <section className="border-border border-t bg-[url('/images/hero-bg.webp')] bg-[length:200px] bg-[position:calc(100%-45px)_60px] bg-no-repeat">
      <div className="mx-auto max-w-[1300px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="max-w-2xl text-[clamp(1.875rem,4vw,3rem)] leading-tight font-semibold tracking-tight">
          {t("heading")} <span className="bg-highlight px-2">{t("headingHighlight")}</span>
        </h2>
        <div className="text-muted-foreground mt-10 max-w-3xl space-y-6 text-base leading-[26px]">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/why-we-created.tsx
git commit -m "feat(section): add WhyWeCreated narrative section"
```

---

### Task 24: CTA section

**Files:**

- Create: `components/sections/cta.tsx`

- [ ] **Step 1: Create `components/sections/cta.tsx`**

```tsx
import Image from "next/image";
import { useTranslations } from "next-intl";
import { SignupForm } from "@/components/signup-form";

export function CTA() {
  const t = useTranslations("CTA");
  return (
    <section className="mx-auto max-w-[1300px] px-4 py-16 md:px-6 md:py-24">
      <div className="rounded-card bg-on-dark-bg relative overflow-hidden px-6 py-20 md:px-12 md:py-28">
        <Image
          src="/images/cta-bg.webp"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 1300px"
          className="object-cover opacity-40"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-on-dark-muted text-xs tracking-[0.2em] uppercase">{t("eyebrow")}</p>
          <h2 className="text-on-dark-foreground mt-4 text-[clamp(1.875rem,4vw,3rem)] leading-tight font-semibold tracking-tight">
            {t("heading")} <span className="text-accent">{t("headingBrand")}</span>{" "}
            {t("headingMiddle")} <span className="text-accent">{t("headingSecure")}</span>
            {t("headingTail")} <span className="text-accent">{t("headingEmpowering")}</span>
            {t("headingPeriod")}
          </h2>
          <p className="text-on-dark-muted mx-auto mt-6 max-w-xl text-base">{t("body")}</p>
          <div className="mt-8 flex justify-center">
            <SignupForm tone="on-dark" />
          </div>
          <p className="text-on-dark-foreground mt-12 text-lg font-semibold">{t("comingSoon")}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <span
              role="img"
              aria-label="App Store (coming soon)"
              className="rounded-button text-on-dark-foreground bg-white/10 px-5 py-3 text-sm"
            >
              App Store
            </span>
            <span
              role="img"
              aria-label="Google Play (coming soon)"
              className="rounded-button text-on-dark-foreground bg-white/10 px-5 py-3 text-sm"
            >
              Google Play
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Note:** Store badge SVGs are not bundled in this MVP — placeholder text badges show "Coming Soon". When real badge assets are added under `public/images/badges/`, swap the two `<span>` blocks for `<Image>` elements referencing them. Avoid `node:fs` checks at module load — they couple build-time filesystem state to bundling and complicate static export.

- [ ] **Step 2: Commit**

```bash
git add components/sections/cta.tsx
git commit -m "feat(section): add CTA with on-dark signup and coming-soon badges"
```

---

### Task 25: Footer section

**Files:**

- Create: `components/sections/footer.tsx`

- [ ] **Step 1: Create `components/sections/footer.tsx`**

```tsx
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const SOCIAL = [
  { name: "linkedin", Icon: Linkedin },
  { name: "twitter", Icon: Twitter },
  { name: "instagram", Icon: Instagram },
];

function SocialRow({ label }: { label: string }) {
  return (
    <div>
      <p className="text-on-dark-foreground font-semibold">{label}</p>
      <div className="mt-4 flex gap-3">
        {SOCIAL.map(({ name, Icon }) => (
          <a
            key={name}
            href="#"
            aria-label={name}
            className="rounded-button hover:bg-primary flex h-12 w-12 items-center justify-center bg-white text-black transition-colors hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-on-dark-bg text-on-dark-foreground">
      <div className="mx-auto max-w-[1300px] px-4 py-16 md:px-6 md:py-20">
        <Image src="/logo-white.svg" alt="Safolio" width={140} height={36} className="mb-10" />

        <div className="flex flex-wrap items-center gap-3 text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] font-semibold tracking-tight">
          <span className="bg-on-dark-border px-2">{t("tagline.line1")}</span>
          <span>{t("tagline.line2")}</span>
          <span className="text-accent">{t("tagline.line3")}</span>
          <span>{t("tagline.line4")}</span>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div className="text-on-dark-muted text-sm leading-relaxed">
            <p className="text-on-dark-foreground font-semibold">{t("contact")}</p>
            <a className="hover:text-on-dark-foreground mt-2 block" href="mailto:hello@safolio.com">
              hello@safolio.com
            </a>
            <p className="text-on-dark-foreground mt-6 font-semibold">{t("company")}</p>
            <p>{t("address")}</p>
          </div>
          <SocialRow label={t("globalSocial")} />
          <SocialRow label={t("turkishSocial")} />
        </div>

        <div className="bg-on-dark-border my-12 h-px" />

        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <li>
            <Link href="/privacy-policy" className="hover:text-accent">
              {t("legal.privacy")}
            </Link>
          </li>
          <li>
            <Link href="/cookie-policy" className="hover:text-accent">
              {t("legal.cookie")}
            </Link>
          </li>
          <li>
            <Link href="/terms-and-conditions" className="hover:text-accent">
              {t("legal.terms")}
            </Link>
          </li>
          <li>
            <Link href="/acceptable-use-policy" className="hover:text-accent">
              {t("legal.aup")}
            </Link>
          </li>
          <li>
            <Link href="/eula" className="hover:text-accent">
              {t("legal.eula")}
            </Link>
          </li>
        </ul>

        <p className="text-on-dark-muted mt-8 text-sm">{t("copyright", { year })}</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/footer.tsx
git commit -m "feat(section): add Footer with tagline, contact, social and legal links"
```

---

### Task 26: Compose homepage with all sections

**Files:**

- Modify: `app/[locale]/page.tsx`

- [ ] **Step 1: Replace `app/[locale]/page.tsx`**

```tsx
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { DesignedForYou } from "@/components/sections/designed-for-you";
import { WhyWeCreated } from "@/components/sections/why-we-created";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { SkipToMain } from "@/components/skip-to-main";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SkipToMain />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <DesignedForYou />
        <WhyWeCreated />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Smoke test**

```bash
pnpm dev
```

Visit `/tr` and `/en`. Scroll the page from top to footer. Verify:

- All 7 sections render in order with no console errors
- Images load (hero portrait, team, designed-for-you, cta-bg)
- Theme toggle still works across all sections
- Tabs in DesignedForYou switch
- Accordion in About opens/collapses
- Both forms (hero + CTA) accept input and show success toast on submit
- Footer legal links route to placeholders (will 404 until Chunk 4 — note this)

Stop server.

- [ ] **Step 3: Commit**

```bash
git add app/[locale]/page.tsx
git commit -m "feat(page): compose all section components on homepage"
```

---

### Task 27: Framer Motion scroll-in animations (optional pass)

**Files:**

- Create: `components/animated-section.tsx`
- Modify: section components (wrap with AnimatedSection) — defer to one commit per section

- [ ] **Step 1: Create `components/animated-section.tsx`**

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function AnimatedSection({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Wrap About, DesignedForYou, WhyWeCreated, CTA in AnimatedSection**

Inside each respective section file, wrap the top-level `<section>` content in `<AnimatedSection>`. Hero stays static (above the fold). Footer stays static.

Example for `about.tsx`:

```tsx
import { AnimatedSection } from "@/components/animated-section";

export function About() {
  // ... existing logic
  return (
    <section className="border-border border-t">
      <AnimatedSection>
        <div className="mx-auto grid max-w-[1300px] ...">{/* existing children */}</div>
      </AnimatedSection>
    </section>
  );
}
```

- [ ] **Step 3: Smoke test**

```bash
pnpm dev
```

Scroll down — sections fade and slide in. Enable "Reduce motion" in OS settings; reload — sections appear instantly.

- [ ] **Step 4: Commit**

```bash
git add components/animated-section.tsx components/sections/
git commit -m "feat(motion): add scroll-in animations to non-hero sections"
```

---

**End of Chunk 3.** Verify: Full homepage renders bilingual with theme + animations.

---

## Chunk 4: Legal Pages, SEO, Cookie Banner, Tests, Deploy (Tasks 28–40)

### Task 28: Legal page layout

**Files:**

- Create: `components/legal-layout.tsx`

- [ ] **Step 1: Create `components/legal-layout.tsx`**

```tsx
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SkipToMain } from "@/components/skip-to-main";

export function LegalLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <SkipToMain />
      <Header />
      <main id="main" className="pt-24">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-20">
          <h1 className="mb-8 text-3xl font-semibold tracking-tight">{title}</h1>
          <div className="prose prose-neutral dark:prose-invert max-w-none">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Install Tailwind typography plugin**

```bash
pnpm add -D @tailwindcss/typography
```

- [ ] **Step 3: Enable plugin in globals.css**

Add at top of `app/globals.css` after the existing `@import "tailwindcss";`:

```css
@plugin "@tailwindcss/typography";
```

- [ ] **Step 4: Commit**

```bash
git add components/legal-layout.tsx app/globals.css package.json pnpm-lock.yaml
git commit -m "feat(legal): add reusable LegalLayout with typography"
```

---

### Task 29: Privacy Policy page (placeholder)

**Files:**

- Create: `app/[locale]/privacy-policy/page.tsx`

- [ ] **Step 1: Create `app/[locale]/privacy-policy/page.tsx`**

```tsx
import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal-layout";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer.legal" });
  return (
    <LegalLayout title={t("privacy")}>
      <p>This page will contain the Safolio privacy policy. Final copy pending legal review.</p>
    </LegalLayout>
  );
}
```

- [ ] **Step 2: Replicate for the other 4 legal pages**

Create the following four files with the **exact same shell** as the privacy policy file above. Only the `namespace` key in `getTranslations` and the value passed to `t()` changes:

| File                                          | Key           |
| --------------------------------------------- | ------------- |
| `app/[locale]/cookie-policy/page.tsx`         | `t("cookie")` |
| `app/[locale]/terms-and-conditions/page.tsx`  | `t("terms")`  |
| `app/[locale]/acceptable-use-policy/page.tsx` | `t("aup")`    |
| `app/[locale]/eula/page.tsx`                  | `t("eula")`   |

The full file body for each: copy the privacy file verbatim, change the `t("privacy")` argument to the matching key, and update the placeholder paragraph text accordingly (e.g. "Safolio cookie policy", "Safolio terms of service", etc.).

- [ ] **Step 3: Smoke test**

```bash
pnpm dev
```

Click each footer legal link → all 5 pages render with correct title in current locale.

- [ ] **Step 4: Commit**

```bash
git add app/[locale]/
git commit -m "feat(legal): add 5 legal page placeholders"
```

---

### Task 30: 404 page

**Files:**

- Create: `app/[locale]/not-found.tsx`

- [ ] **Step 1: Create `app/[locale]/not-found.tsx`**

```tsx
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-primary text-8xl font-bold">{t("heading")}</p>
      <h1 className="mt-6 text-2xl font-semibold">{t("title")}</h1>
      <p className="text-muted-foreground mt-3 max-w-md">{t("description")}</p>
      <Button asChild className="mt-8">
        <Link href="/">{t("back")}</Link>
      </Button>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/[locale]/not-found.tsx
git commit -m "feat(404): add localized not-found page"
```

---

### Task 31: Metadata API for homepage and legal pages

**Files:**

- Modify: `app/[locale]/page.tsx`, all 5 legal page files

- [ ] **Step 1: Add `generateMetadata` to `app/[locale]/page.tsx`**

Insert at top of file (after imports):

```tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://safolio.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", tr: "/tr" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: "Safolio",
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}
```

- [ ] **Step 2: Add `generateMetadata` to each legal page**

For each of the 5 legal pages, add at top of the file:

```tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Footer.legal" });
  return { title: `${t("privacy")} — Safolio` };
}
```

Replace `"privacy"` with the appropriate key for each page (`cookie`, `terms`, `aup`, `eula`).

- [ ] **Step 3: Commit**

```bash
git add app/[locale]/
git commit -m "feat(seo): add Metadata API to homepage and legal pages"
```

---

### Task 32: OpenGraph image generator

**Files:**

- Create: `app/[locale]/opengraph-image.tsx`

- [ ] **Step 1: Create `app/[locale]/opengraph-image.tsx`**

```tsx
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Safolio";

export default async function OG({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #2869F5 0%, #6461FC 100%)",
        color: "#FFFFFF",
        fontFamily: "sans-serif",
        padding: 80,
      }}
    >
      <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>Safolio</div>
      <div style={{ marginTop: 24, fontSize: 36, textAlign: "center", maxWidth: 900 }}>
        {t("title").replace(/^Safolio — /, "")}
      </div>
    </div>,
    size,
  );
}
```

- [ ] **Step 2: Verify**

```bash
pnpm dev
```

Visit `http://localhost:3000/tr/opengraph-image` → should render a 1200×630 image with brand gradient and title.

- [ ] **Step 3: Commit**

```bash
git add app/[locale]/opengraph-image.tsx
git commit -m "feat(seo): generate dynamic OpenGraph image per locale"
```

---

### Task 33: sitemap and robots

**Files:**

- Create: `app/sitemap.ts`, `app/robots.ts`

- [ ] **Step 1: Create `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const ROUTES = [
  "",
  "/privacy-policy",
  "/cookie-policy",
  "/terms-and-conditions",
  "/acceptable-use-policy",
  "/eula",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://safolio.com";
  const now = new Date();
  return routing.locales.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.5,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, `${base}/${l}${route}`])),
      },
    })),
  );
}
```

- [ ] **Step 2: Create `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://safolio.com/sitemap.xml",
  };
}
```

- [ ] **Step 3: Verify**

```bash
pnpm dev
```

Visit `/sitemap.xml` → XML listing all 12 URLs (2 locales × 6 routes). Visit `/robots.txt` → standard robots config.

- [ ] **Step 4: Commit**

```bash
git add app/sitemap.ts app/robots.ts
git commit -m "feat(seo): add sitemap and robots"
```

---

### Task 34: JSON-LD structured data

**Files:**

- Create: `components/json-ld.tsx`
- Modify: `app/[locale]/page.tsx` (inject JSON-LD)

- [ ] **Step 1: Create `components/json-ld.tsx`**

```tsx
export function OrganizationJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Safolio",
    url: `https://safolio.com/${locale}`,
    logo: "https://safolio.com/logo.svg",
    description:
      locale === "tr"
        ? "Bağımsız yatırım portföy yönetim platformu"
        : "Independent investment portfolio management platform",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vinkenburgstraat 2 A",
      postalCode: "3512AB",
      addressLocality: "Utrecht",
      addressCountry: "NL",
    },
    parentOrganization: { "@type": "Organization", name: "Safolio B.V." },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
```

- [ ] **Step 2: Inject into homepage**

In `app/[locale]/page.tsx`, import and render at end of fragment:

```tsx
import { OrganizationJsonLd } from "@/components/json-ld";
// ... existing
return (
  <>
    <SkipToMain />
    <Header />
    <main id="main">{/* ... */}</main>
    <Footer />
    <OrganizationJsonLd locale={locale} />
  </>
);
```

- [ ] **Step 3: Commit**

```bash
git add components/json-ld.tsx app/[locale]/page.tsx
git commit -m "feat(seo): add Organization JSON-LD structured data"
```

---

### Task 35: Cookie banner

**Files:**

- Create: `components/cookie-banner.tsx`
- Modify: `app/[locale]/layout.tsx`

- [ ] **Step 1: Create `components/cookie-banner.tsx`**

```tsx
"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "safolio_cookie_consent";

export function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
  }, []);

  function decide(value: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, value);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="rounded-card border-border bg-card fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl border p-4 shadow-lg md:flex md:items-center md:gap-4">
      <p className="text-muted-foreground text-sm">
        {t("message")}{" "}
        <Link href="/cookie-policy" className="underline">
          {t("policyLink")}
        </Link>
      </p>
      <div className="mt-3 flex gap-2 md:mt-0">
        <Button variant="outline" size="sm" onClick={() => decide("rejected")}>
          {t("reject")}
        </Button>
        <Button size="sm" onClick={() => decide("accepted")}>
          {t("accept")}
        </Button>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Mount in `app/[locale]/layout.tsx`**

Inside `<NextIntlClientProvider>`, after `{children}`:

```tsx
<CookieBanner />
```

Import: `import { CookieBanner } from "@/components/cookie-banner";`

- [ ] **Step 3: Smoke test**

```bash
pnpm dev
```

Clear localStorage (devtools), reload — banner appears at bottom. Click "Accept" → banner disappears, `localStorage.safolio_cookie_consent === "accepted"`.

- [ ] **Step 4: Commit**

```bash
git add components/cookie-banner.tsx app/[locale]/layout.tsx
git commit -m "feat(consent): add cookie banner with localStorage persistence"
```

---

### Task 36: Vitest + Testing Library setup

**Files:**

- Create: `vitest.config.ts`, `vitest.setup.ts`, `__tests__/lib/schemas.test.ts`
- Modify: `package.json` (add scripts + devDeps)

- [ ] **Step 1: Install deps**

```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react jsdom
```

- [ ] **Step 2: Create `vitest.config.ts`**

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, ".") },
  },
});
```

- [ ] **Step 3: Create `vitest.setup.ts`**

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 4: Add test script in `package.json`**

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 5: Write the failing test — `__tests__/lib/schemas.test.ts`**

```ts
import { describe, it, expect } from "vitest";
import { createEmailSchema } from "@/lib/schemas";

const schema = createEmailSchema({ required: "Required", invalid: "Invalid" });

describe("createEmailSchema", () => {
  it("rejects empty email with required message", () => {
    const result = schema.safeParse({ email: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe("Required");
    }
  });

  it("rejects malformed email with invalid message", () => {
    const result = schema.safeParse({ email: "not-an-email" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe("Invalid");
    }
  });

  it("accepts valid email", () => {
    const result = schema.safeParse({ email: "user@example.com" });
    expect(result.success).toBe(true);
  });
});
```

- [ ] **Step 6: Write component smoke test — `__tests__/components/signup-form.test.tsx`**

```tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextIntlClientProvider } from "next-intl";
import en from "@/messages/en.json";
import { SignupForm } from "@/components/signup-form";

vi.mock("sonner", () => ({ toast: { success: vi.fn() } }));

function renderForm() {
  return render(
    <NextIntlClientProvider locale="en" messages={en}>
      <SignupForm />
    </NextIntlClientProvider>,
  );
}

describe("<SignupForm />", () => {
  it("renders email input and submit button", () => {
    renderForm();
    expect(screen.getByPlaceholderText("E-Mail")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Register" })).toBeInTheDocument();
  });

  it("shows validation error on invalid email", async () => {
    const user = userEvent.setup();
    renderForm();
    await user.type(screen.getByPlaceholderText("E-Mail"), "not-an-email");
    await user.click(screen.getByRole("button", { name: "Register" }));
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 7: Install user-event dep**

```bash
pnpm add -D @testing-library/user-event
```

- [ ] **Step 8: Run tests**

```bash
pnpm test
```

Expected: 5 tests pass (3 schema + 2 component).

- [ ] **Step 9: Commit**

```bash
git add vitest.config.ts vitest.setup.ts __tests__/ package.json pnpm-lock.yaml
git commit -m "test: add vitest setup, schema tests, and SignupForm smoke tests"
```

---

### Task 37: Playwright E2E for golden path

**Files:**

- Create: `playwright.config.ts`, `e2e/home.spec.ts`
- Modify: `package.json` (add e2e script)

- [ ] **Step 1: Install Playwright**

```bash
pnpm add -D @playwright/test
pnpm exec playwright install chromium
```

- [ ] **Step 2: Create `playwright.config.ts`**

```ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  webServer: {
    command: "pnpm build && pnpm start",
    url: "http://localhost:3000/tr",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
```

- [ ] **Step 3: Create `e2e/home.spec.ts`**

```ts
import { test, expect } from "@playwright/test";

test.describe("homepage", () => {
  test("loads with hero heading in Turkish by default", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/tr$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Geleceğinizi/);
  });

  test("switches to English via locale switcher", async ({ page }) => {
    await page.goto("/tr");
    await page.getByLabel(/Dil seç/i).click();
    await page.getByRole("menuitem", { name: "English" }).click();
    await expect(page).toHaveURL(/\/en$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/Empower/);
  });

  test("signup form shows success toast on valid email", async ({ page }) => {
    await page.goto("/en");
    await page
      .getByPlaceholder(/E-Mail/i)
      .first()
      .fill("test@example.com");
    await page
      .getByRole("button", { name: /Register/i })
      .first()
      .click();
    await expect(page.getByText(/Thanks!/i)).toBeVisible();
  });

  test("signup form rejects invalid email", async ({ page }) => {
    await page.goto("/en");
    await page
      .getByPlaceholder(/E-Mail/i)
      .first()
      .fill("not-an-email");
    await page
      .getByRole("button", { name: /Register/i })
      .first()
      .click();
    await expect(page.getByText(/valid email/i)).toBeVisible();
  });

  test("theme toggle switches html class", async ({ page }) => {
    await page.goto("/tr");
    await page.getByLabel(/Temayı değiştir/i).click();
    await page.getByRole("menuitem", { name: /Koyu/i }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);
  });
});
```

- [ ] **Step 4: Add e2e script in `package.json`**

```json
"e2e": "playwright test"
```

- [ ] **Step 5: Run e2e**

```bash
pnpm e2e
```

Expected: All 5 tests pass.

- [ ] **Step 6: Commit**

```bash
git add playwright.config.ts e2e/ package.json pnpm-lock.yaml
git commit -m "test(e2e): add Playwright golden-path scenarios"
```

---

### Task 38: Lint & typecheck CI scripts

**Files:**

- Modify: `package.json`

- [ ] **Step 1: Add scripts**

Inside `"scripts"`:

```json
"typecheck": "tsc --noEmit",
"check": "pnpm typecheck && pnpm lint && pnpm format:check && pnpm test"
```

- [ ] **Step 2: Run full check**

```bash
pnpm check
```

Expected: All pass.

- [ ] **Step 3: Commit**

```bash
git add package.json
git commit -m "chore: add typecheck and aggregate check scripts"
```

---

### Task 39: Lighthouse manual pass

- [ ] **Step 1: Build production**

```bash
pnpm build
pnpm start
```

- [ ] **Step 2: Run Lighthouse in Chrome devtools** on `http://localhost:3000/tr`. Targets:
- Performance ≥ 95
- Accessibility ≥ 95
- Best Practices ≥ 95
- SEO = 100

- [ ] **Step 3: Fix any failing audits**

Common issues to expect: missing image dimensions (already handled), color contrast on `--muted-foreground` (raise to `#555555` if AA fails), missing `lang` on html (already handled).

If issues found, fix them, re-run, commit each fix separately:

```bash
git commit -m "perf|a11y|seo: <specific fix>"
```

- [ ] **Step 4: No commit if no changes**

---

### Task 40: README and deploy notes

**Files:**

- Modify: `README.md`

- [ ] **Step 1: Replace `README.md`**

````markdown
# Safolio Web

Coming Soon landing page for Safolio, an independent investment portfolio platform.

## Development

```bash
pnpm install
pnpm assets:download   # one-time, pulls brand assets from safolio.com
pnpm dev
```
````

Open http://localhost:3000.

## Scripts

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm start` — serve production build
- `pnpm test` — unit + component tests (Vitest)
- `pnpm e2e` — end-to-end tests (Playwright)
- `pnpm check` — typecheck + lint + format + unit tests

## Stack

Next.js 15 App Router, TypeScript (strict), Tailwind v4, shadcn/ui, next-intl (TR/EN), next-themes, react-hook-form + zod, sonner, Framer Motion.

## Deploy

Deploy to Vercel. The included `@vercel/analytics` and `@vercel/speed-insights` activate automatically on Vercel.

## Structure

- `app/[locale]/` — locale-scoped routes
- `components/sections/` — page section components
- `components/ui/` — shadcn primitives
- `i18n/` — next-intl routing, navigation, request config
- `messages/` — TR/EN translation catalogues
- `lib/` — utilities and zod schemas

````

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README"
````

---

**End of Chunk 4.** Project is feature-complete and tested.

---

## Final Verification Checklist

Before declaring complete:

- [ ] `pnpm check` passes
- [ ] `pnpm e2e` passes
- [ ] Lighthouse hits targets on `/tr` and `/en`
- [ ] Manual test on mobile viewport (375px) — all sections legible, no horizontal scroll
- [ ] Manual test in Firefox + Safari — visual parity with Chrome
- [ ] Cookie banner shows on first visit, hides after accept/reject
- [ ] Theme persists across reload
- [ ] All 5 legal page routes return 200 in both locales
- [ ] OG image renders at `/tr/opengraph-image` and `/en/opengraph-image`
- [ ] Sitemap lists 12 URLs at `/sitemap.xml`

## Deployment

**Decision (2026-05-15):** Direct to `safolio.com` — no staging environment. Procedure when implementation is complete:

1. Push repo to GitHub (private).
2. Import repo on Vercel; framework auto-detected (Next.js).
3. Configure environment: none required for this MVP.
4. Add `safolio.com` and `www.safolio.com` as production domains in Vercel.
5. Update DNS A/CNAME at registrar to point to Vercel.
6. Verify production URL, OG image, sitemap, robots, both locales, theme persistence, cookie banner.
7. Existing WordPress site is replaced at DNS switch.

## Open Items Carried From Spec

These remain after implementation; user input needed before final launch:

1. Real social media URLs (Footer placeholder `#` links)
2. Final legal page copy (currently placeholder text)
3. Confirmation of `hello@safolio.com` as contact
4. Official App Store / Google Play badge SVGs (CTA currently has text fallback)
5. Decision on whether the signup form should write to a real backend before launch
