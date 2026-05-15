# Safolio Coming Soon Landing — Tasarım Belgesi

**Tarih:** 2026-05-15
**Durum:** v2 (review sonrası revize) — Kullanıcı incelemesi bekliyor
**Hedef:** Mevcut [safolio.com](https://safolio.com)'un yerine geçecek, Next.js 15 ile yeniden yazılmış, modern fintech estetiğinde bir "Coming Soon" landing page.

> **Not:** Bu spec Türkçe yazılmış; downstream implementation/plan adımları da Türkçe yürütülecektir. Kod identifier'ları İngilizce kalır.

---

## 1. Amaç ve Kapsam

### 1.1 Amaç

Safolio (bağımsız portföy yönetim platformu) için, ürün lansmanından önce erken kayıt toplayan ve markayı tanıtan bir landing page. Mevcut WordPress + Elementor tabanlı `safolio.com`'un Next.js'e taşınması.

### 1.2 Kapsam içi

- Tek scroll-based ana sayfa (`/[locale]`)
- Statik legal sayfalar (Privacy, Cookie, Terms, AUP, EULA)
- İki dil (TR, EN)
- Light/Dark theme toggle
- UI olarak çalışan kayıt formu (submit'te fake success — backend yok)
- Modern fintech görsel dili (güven verici, kurumsal)
- SEO için temel metadata, OG image, sitemap

### 1.3 Kapsam dışı

- Blog (mevcut sitedeki `/blog` taşınmıyor)
- Form backend / e-mail listesi entegrasyonu
- Dashboard / kullanıcı paneli
- Ödeme, kullanıcı oturumu
- Mobil uygulama (App Store/Play Store badge'leri "Coming Soon" placeholder olarak kalacak)

---

## 2. Site Yapısı

### 2.1 Route'lar

```
/                              → middleware ile /[locale]'a yönlendir
/[locale]                      → Ana sayfa (single-page scroll)
/[locale]/privacy-policy
/[locale]/cookie-policy
/[locale]/terms-and-conditions
/[locale]/acceptable-use-policy
/[locale]/eula
```

`[locale]` ∈ `{tr, en}`. **Varsayılan locale: `tr`** (Safolio B.V. Türk kurucularla Hollanda merkezli, Turkish social hesapları ayrıca mevcut). Locale algılama sırası:

1. URL prefix (`/tr/...` veya `/en/...`)
2. `NEXT_LOCALE` cookie
3. `Accept-Language` header
4. Varsayılan `tr`

### 2.2 Ana sayfa bölümleri (scroll sırasına göre)

| #   | Bölüm                      | İçerik özeti                                                                                    |
| --- | -------------------------- | ----------------------------------------------------------------------------------------------- |
| 1   | Header (sticky)            | Logo, nav linkleri (anchor), dil değiştirici, theme toggle                                      |
| 2   | Hero                       | Başlık + açıklama + Sign Up Early formu + portre görseli + "Coming Soon 75%" kartı              |
| 3   | What is Safolio?           | Tanıtım metni + ekip görseli + 6 maddelik accordion                                             |
| 4   | Designed For You           | Görsel + iki tab ("Who is Safolio for?" / "Why Safolio?")                                       |
| 5   | Why Did We Create Safolio? | Hikaye / misyon metni (2 paragraf)                                                              |
| 6   | CTA / Newsletter           | Renkli arkaplan, başlık, e-mail formu, "Coming Soon!" + App Store & Play Store badge'leri       |
| 7   | Footer (koyu)              | Beyaz logo, büyük tipografi, contact, sosyal medya (Global + Turkish), legal linkler, copyright |

---

## 3. Tasarım Sistemi

### 3.1 Renk Paleti

**Önemli:** Footer (her iki tema için de) sabit koyu arka plana sahiptir — yani temaya bakılmaksızın `#010101` üzerinde beyaz metin. CTA bölümü de "on-dark" sabit tonludur. Bu yüzden ayrı `--footer-*` ve "on-dark surface" tokenları aşağıda tanımlanır.

#### Light theme (varsayılan)

| Token                  | Hex       | Kullanım                 |
| ---------------------- | --------- | ------------------------ |
| `--primary`            | `#2869F5` | Ana CTA, vurgu           |
| `--primary-hover`      | `#03A9F4` | Primary hover state      |
| `--primary-foreground` | `#FFFFFF` | Primary üstündeki metin  |
| `--accent`             | `#6461FC` | Linkler, secondary vurgu |
| `--accent-foreground`  | `#FFFFFF` | Accent üstündeki metin   |
| `--foreground`         | `#010101` | Başlıklar, ana metin     |
| `--muted-foreground`   | `#666666` | Body text, secondary     |
| `--background`         | `#FFFFFF` | Sayfa arka planı         |
| `--card`               | `#FFFFFF` | Kart arka planı          |
| `--card-foreground`    | `#010101` | Kart üstü metin          |
| `--border`             | `#E9E9E9` | Kenarlık, divider        |
| `--input`              | `#E9E9E9` | Input border             |
| `--ring`               | `#2869F5` | Focus ring               |
| `--highlight`          | `#F0F0F0` | Vurgulu metin arkası     |

#### Dark theme

| Token                  | Hex       |
| ---------------------- | --------- |
| `--primary`            | `#2869F5` |
| `--primary-hover`      | `#03A9F4` |
| `--primary-foreground` | `#FFFFFF` |
| `--accent`             | `#6461FC` |
| `--accent-foreground`  | `#FFFFFF` |
| `--foreground`         | `#FAFAFA` |
| `--muted-foreground`   | `#A1A1A1` |
| `--background`         | `#0A0A0A` |
| `--card`               | `#151515` |
| `--card-foreground`    | `#FAFAFA` |
| `--border`             | `#222222` |
| `--input`              | `#2A2A2A` |
| `--ring`               | `#6461FC` |
| `--highlight`          | `#1F1F1F` |

#### Tema-bağımsız (her iki temada sabit)

| Token                  | Hex         | Kullanım                               |
| ---------------------- | ----------- | -------------------------------------- |
| `--on-dark-bg`         | `#010101`   | Footer ve CTA arka planı               |
| `--on-dark-foreground` | `#FFFFFF`   | Footer/CTA başlıklar                   |
| `--on-dark-muted`      | `#FFFFFFB3` | Footer/CTA secondary metin (70% beyaz) |
| `--on-dark-border`     | `#171717`   | Footer divider                         |

Dark mode'da hero görselindeki portre arka planı (h2-1.webp) dark variant gerektirir — şimdilik filter ile karartılır (`brightness(0.7)`).

### 3.2 Tipografi

- **Font:** Inter (Google Fonts), `next/font` ile yerel yüklenir
- **Weights:** 400 (body), 500 (accent), 600 (heading), 700 (extra)
- **Letter-spacing:** Heading'lerde `-0.02em` (büyük başlıklar için `-0.04em`)

| Element              | Desktop                                  | Mobile      |
| -------------------- | ---------------------------------------- | ----------- |
| Hero heading (h1)    | 52px / 65px                              | 30px / 40px |
| Section heading (h2) | 48px / 58px                              | 30px / 40px |
| Card heading (h3)    | 24px / 32px                              | 20px / 28px |
| Body large           | 16px / 26px                              | 16px / 26px |
| Body                 | 14px / 24px                              | 14px / 22px |
| Footer mega heading  | 120px / 130px (xl), 80px (md), 40px (sm) | 40px / 55px |

### 3.3 Spacing & Layout

- Container max-width: `1300px`
- Container padding: `16px` (mobile), `24px` (md+)
- Section vertical padding: `48px` (mobile), `96px` (md+)
- Grid system: CSS Grid + Flexbox (Tailwind utilities)

### 3.4 Border Radius

- Cards: `16px`
- Buttons: `10px`
- Form inputs: `10px`
- Social icons: `12px`

### 3.5 Shadow

- Header (scrolled): `0 0 10px rgba(0,0,0,0.1)`
- Cards: `0 4px 24px rgba(0,0,0,0.06)` (light), `none` (dark)

### 3.6 Animation

- Section fade-in on scroll: **Framer Motion** (`whileInView` + `viewport={{ once: true }}`). CSS-only alternatifi YAGNI.
- Hover transitions: Tailwind `transition-colors duration-200`
- Theme transition: `transition-colors duration-300` body üzerinde
- Reduced motion: Tüm animasyonlar `prefers-reduced-motion: reduce` query'sine saygı gösterir (Framer Motion'da `useReducedMotion` hook'u veya global setting).

---

## 4. i18n Stratejisi

### 4.1 Kütüphane

**next-intl** (v3+). Server component'larda `getTranslations`, client component'larda `useTranslations`.

### 4.2 Mesaj dosyaları

```
messages/
  en.json
  tr.json
```

Yapı:

```json
{
  "Nav": { "home": "Home", "blog": "Blog" },
  "Hero": {
    "heading": "Empower Your Financial Future!",
    "description": "Designed for smart investors...",
    "signUpLabel": "Sign Up Early",
    "signUpHint": "Be Among the First to Try:",
    "emailPlaceholder": "E-Mail",
    "submit": "Register"
  },
  "About": { ... },
  "DesignedForYou": { ... },
  "WhyWeCreated": { ... },
  "CTA": { ... },
  "Footer": { ... },
  "Form": { "successMessage": "Thanks! We'll keep you posted." }
}
```

### 4.3 Middleware

`middleware.ts` ile:

- `/` → `/<detected-locale>`
- Locale prefix yoksa redirect
- Statik dosyalar (`_next`, `images`) middleware'i bypass eder

### 4.4 Dil değiştirici

Header'da dropdown (TR / EN bayraklarıyla). Switch yapınca aynı path'in karşı locale'ine yönlendirir (örn: `/en/privacy-policy` → `/tr/privacy-policy`).

---

## 5. Theme Stratejisi

### 5.1 Kütüphane

**next-themes** (App Router uyumlu). Konfigürasyon: `attribute="class"`, `defaultTheme="light"`, `enableSystem={true}`, `disableTransitionOnChange={false}`.

### 5.2 Davranış

- Varsayılan: `light`
- Kullanıcı toggle ile `light` / `dark` / `system` arasında geçer
- Tercih `localStorage`'a kaydedilir (key: `theme`)
- SSR hydration mismatch'i önlemek için `<html suppressHydrationWarning>` (root layout'ta)
- `<html lang="...">` attribute'ü locale layout tarafından yönetilir (Bkz. §5.5)

### 5.3 CSS yaklaşımı — Tailwind v4 + next-themes uyumlu

**Strateji:**

- `@theme` directive → **statik** tasarım tokenları (Tailwind utility class'larını üretir): font family, spacing scale, radius, statik renkler
- `:root` → light tema CSS değişkenleri (runtime-swap edilen tokenlar)
- `.dark` (HTML element class'ı) → dark tema değişken override'ları
- Tailwind v4 dark variant: `@custom-variant dark (&:where(.dark, .dark *));`

**`app/globals.css` örneği:**

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

/* Statik tokenlar — utility üretir */
@theme {
  --font-sans: "Inter", system-ui, sans-serif;
  --radius-card: 16px;
  --radius-button: 10px;
  --radius-input: 10px;
  /* statik tema-bağımsız renkler */
  --color-on-dark-bg: #010101;
  --color-on-dark-foreground: #ffffff;
  --color-on-dark-muted: rgba(255, 255, 255, 0.7);
  --color-on-dark-border: #171717;
}

/* Runtime-swap edilen tokenlar */
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

/* @theme inline ile Tailwind utility'lerine bağla */
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
```

Bu yapı ile `bg-primary`, `text-foreground` gibi Tailwind utility'leri runtime'da tema değişikliğine cevap verir. shadcn/ui bileşenleri bu token isimlerini bekler.

### 5.4 Theme toggle UI

Header'da bir ikon (Sun/Moon/Monitor — Lucide). shadcn `DropdownMenu` ile 3 seçenek (Light, Dark, System). `useTheme()` hook'undan `setTheme()`. Mount-before-render pattern ile hidrasyon flicker'ı önlenir.

### 5.5 Provider topolojisi ve `<html>` sahipliği

next-intl + next-themes birlikte kullanırken hydration sorunlarını önlemek için **sadece root layout `<html>` ve `<body>` öğelerini render eder**. Locale layout, content'i `NextIntlClientProvider` ile sarar.

```tsx
// app/layout.tsx (Root)
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

```tsx
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
```

**Not:** `<html lang>` attribute'ü, next-intl resmi pattern'inden farklı olarak burada locale layout'unda set EDİLMEZ. Bunun yerine root layout'ta `<html>` lang'ı dinamik olarak set etmek için bir client-side `useEffect` kullanılır VEYA `lang` özellikle SEO için kritikse, locale layout'ta nested `<html>` yerine bir `<div lang={locale}>` wrapper tercih edilir. **Karar:** SEO için `<html lang>` doğru olmalı; root layout'tan kaldırıp `app/[locale]/layout.tsx`'in en üst `<html>`'i render etmesi gerekir. Bu durumda root layout'ta `<html>` ve `<body>` olmaz — sadece children pass-through (Next.js bunu destekler).

**Final yapı:**

- `app/layout.tsx`: Sadece `return children` (Next.js teknik gereksinimi — boilerplate yok)
- `app/[locale]/layout.tsx`: `<html lang={locale} suppressHydrationWarning><body><ThemeProvider><NextIntlClientProvider>{children}</...></...></body></html>`

Bu, next-intl'in dokümante ettiği App Router pattern'idir.

---

## 6. Teknik Mimari

### 6.1 Stack

- **Framework:** Next.js 15.x (App Router)
- **Dil:** TypeScript 5.x (strict mode)
- **Styling:** Tailwind CSS v4
- **UI bileşenleri:** shadcn/ui (component-by-component, `npx shadcn@latest add ...`)
- **Icons:** Lucide React
- **i18n:** next-intl
- **Theme:** next-themes
- **Form:** react-hook-form + zod
- **Animation:** Framer Motion (yalnızca gerektiğinde)
- **Linting:** ESLint + Prettier
- **Type checking:** `tsc --noEmit` (CI'da)
- **Hosting:** Vercel

### 6.2 Klasör yapısı

```
safolio-web/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # <html lang>, <body>, ThemeProvider, IntlProvider sahibi
│   │   ├── page.tsx                # Ana sayfa — section'ları compose eder
│   │   ├── privacy-policy/page.tsx
│   │   ├── cookie-policy/page.tsx
│   │   ├── terms-and-conditions/page.tsx
│   │   ├── acceptable-use-policy/page.tsx
│   │   ├── eula/page.tsx
│   │   ├── not-found.tsx           # Locale içi 404
│   │   └── opengraph-image.tsx     # Locale-aware OG image
│   ├── layout.tsx                  # Pass-through (sadece return children)
│   ├── globals.css                 # @import "tailwindcss" + @theme + :root/.dark
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx               # Locale-dışı 404 (rare)
├── components/
│   ├── ui/                         # shadcn/ui: button, input, tabs, accordion, dropdown-menu, sonner (toast), sheet
│   ├── sections/
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── about.tsx               # "What is Safolio?"
│   │   ├── designed-for-you.tsx
│   │   ├── why-we-created.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   ├── theme-toggle.tsx
│   ├── locale-switcher.tsx
│   ├── cookie-banner.tsx
│   ├── skip-to-main.tsx
│   └── signup-form.tsx             # 'use client'
├── messages/
│   ├── en.json
│   └── tr.json
├── lib/
│   ├── utils.ts                    # cn() helper
│   └── schemas.ts                  # zod schemas (email)
├── i18n/
│   ├── routing.ts                  # defineRouting({ locales, defaultLocale })
│   ├── navigation.ts               # createSharedPathnamesNavigation
│   └── request.ts                  # getRequestConfig — next.config'in pointladığı dosya
├── public/
│   ├── images/
│   │   ├── hero-portrait.png       # Mevcut siteden indirilir (bkz. §6.4 Asset Inventory)
│   │   ├── hero-bg.webp
│   │   ├── team.jpg
│   │   ├── designed-for-you.jpg
│   │   ├── cta-bg.webp
│   │   └── badges/
│   │       ├── app-store.svg       # Apple resmi badge (lokal SVG)
│   │       └── play-store.svg      # Google resmi badge (lokal SVG)
│   ├── logo.svg                    # Renkli
│   ├── logo-white.svg              # Beyaz (footer için)
│   ├── favicon.ico
│   └── icon.png
├── middleware.ts                   # createMiddleware(routing) — next-intl
├── next.config.ts                  # createNextIntlPlugin("./i18n/request.ts") wrap
├── postcss.config.mjs              # Tailwind v4 PostCSS
├── components.json                 # shadcn/ui config
├── tsconfig.json
├── package.json
├── .prettierrc                     # + prettier-plugin-tailwindcss
├── .eslintrc.json                  # eslint-config-next
└── README.md
```

**Not:** `tailwind.config.ts` Tailwind v4'te gerekli değil — tüm konfigürasyon `app/globals.css` içinde `@theme`/`@custom-variant` ile yapılır. Bu dosya **oluşturulmayacak**.

### 6.4 Asset Inventory (mevcut safolio.com'dan alınacaklar)

Implementasyon sırasında tek geçişte indirilecek:

| Hedef path                            | Kaynak URL                                                                                                                                    | Açıklama                        |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `public/logo.svg`                     | `https://safolio.com/wp-content/uploads/2025/07/safolio_logo.svg`                                                                             | Renkli logo (header)            |
| `public/logo-white.svg`               | `https://safolio.com/wp-content/uploads/2025/07/safolio_logo_white.svg`                                                                       | Beyaz logo (footer)             |
| `public/icon.png`                     | `https://safolio.com/wp-content/uploads/2025/07/safolio-icon-1.png`                                                                           | Favicon kaynağı                 |
| `public/images/hero-portrait.png`     | `https://safolio.com/wp-content/uploads/2025/07/20250724_1245_Gercekci_Adam_Portresi_remix_01k0y0f4h8fk4bz2qz9kk742gf-removebg-preview-2.png` | Hero kişi portresi (transparan) |
| `public/images/hero-bg.webp`          | `https://safolio.com/wp-content/uploads/2025/04/h2-1.webp`                                                                                    | Hero arka plan deseni           |
| `public/images/team.jpg`              | `https://safolio.com/wp-content/uploads/2025/07/20250724_1303_Uluslararasi-Ekip-Calismasi_remix_01k0y1h93zfg1v27bd35z8xe66-Large.jpeg`        | "What is Safolio?" ekip görseli |
| `public/images/designed-for-you.jpg`  | `https://safolio.com/wp-content/uploads/2025/07/20250724_1313_Fotograf-Yeniden-Olusturma_remix_01k0y23q23fm6ve3pycznaw925.jpeg`               | "Designed For You" görseli      |
| `public/images/cta-bg.webp`           | `https://safolio.com/wp-content/uploads/2025/04/h2-32.webp`                                                                                   | CTA bölümü arka planı           |
| `public/images/badges/app-store.svg`  | Apple Marketing Resources resmi badge                                                                                                         | "Coming Soon" sahte link        |
| `public/images/badges/play-store.svg` | Google Play resmi badge                                                                                                                       | "Coming Soon" sahte link        |

### 6.3 Bağımlılıklar

**Runtime:**

- `next@15`, `react@19`, `react-dom@19`
- `next-intl@^3.x`
- `next-themes@^0.4`
- `react-hook-form@^7`, `@hookform/resolvers`, `zod@^3`
- `lucide-react`
- `framer-motion@^11` (yalnızca section scroll-in animasyonları için)
- `sonner` (shadcn'in tercih ettiği toast bileşeni)
- `@vercel/analytics`, `@vercel/speed-insights`
- `clsx`, `tailwind-merge` (cn helper)
- `class-variance-authority` (shadcn)

**Dev:**

- `typescript@5`, `@types/node`, `@types/react`, `@types/react-dom`
- `tailwindcss@4`, `@tailwindcss/postcss`, `postcss`
- `eslint@9`, `eslint-config-next`
- `prettier`, `prettier-plugin-tailwindcss`
- `vitest@^2`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom` (unit/component test)
- `@playwright/test` (E2E)

---

## 7. Bileşen Tasarımı

### 7.1 `<Header />`

- Sticky, scroll'da `bg-background/80 backdrop-blur` + shadow
- Mobile'da hamburger menü (shadcn Sheet)
- Logo (sol), nav linkleri + locale switcher + theme toggle (sağ)
- Header'ın hemen üzerinde gizli `<SkipToMain />` linki — Tab ile fokuslanınca görünür hale gelir, `<main id="main">`'e atlar

### 7.2 `<Hero />`

- 2 sütun (md+), tek sütun (mobile)
- Sol: h1, açıklama, divider, "Sign Up Early" label, e-mail formu
- Sağ: arka plan görsel + ön planda kişi portresi PNG + sağ alt köşede beyaz card ("Coming Soon...", 75% progress bar)
- Background image: gradient + soft pattern

### 7.3 `<About />` ("What is Safolio?")

- 2 sütun (md+)
- Sol: h2, açıklama, fotoğraf (16px rounded)
- Sağ: 6 öğelik shadcn Accordion (ilk öğe default açık)

### 7.4 `<DesignedForYou />`

- 2 sütun (md+), mobile'da görsel önce
- Sol: görsel (16px rounded)
- Sağ: shadcn Tabs ("Who is Safolio for?", "Why Safolio?") + her tab altında bullet list

### 7.5 `<WhyWeCreated />`

- Tek sütun, max-width 800px
- h2 (highlight'lı kelime ile) + 2 paragraf

### 7.6 `<CTA />`

- Full-width, koyu zemin (`var(--on-dark-bg)`) üzerinde `public/images/cta-bg.webp` arka plan görseli (overlay ile)
- Üst: "WELCOME TO FINANCIAL FREEDOM!" eyebrow, büyük h2 (beyaz metin, "Safolio" gibi vurgu kelimeleri için `--accent` rengi)
- Orta: `<SignupForm tone="on-dark" />`
- Alt: "Coming Soon!" başlık + 2 görsel badge (App Store, Google Play — `aria-disabled="true"`, tıklanamaz)
- Bu bölüm **her iki temada da koyu zemin tonludur** (site teması light olsa bile)

### 7.7 `<Footer />`

- Koyu arka plan (`#010101`)
- Üst: beyaz logo + büyük responsive tipografi: "Unify your investments, empower your decisions." (line break'li, vurgu kelimeleri için `<span>` ile renk farkı)
- Orta: 3 sütunlu grid → Contact, Global Social, Turkish Social
- Alt: divider + legal linkler listesi + copyright + sosyal medya satırı

### 7.8 `<SignupForm />`

- **Client component** (`'use client'`)
- Tek `input[type=email]` + submit button
- react-hook-form + zod (email validation; required + format)
- Submit edince:
  - 800ms fake delay (real backend yokluğunu simüle eder)
  - `sonner` toast ile success: `t('Form.successMessage')`
  - Form reset
- Prop: `tone: "on-light" | "on-dark"` — temadan **bağımsız** olarak formun rendering'ini belirler
  - `on-light`: Hero'da kullanılır. Açık zeminde koyu input (light tema renkleri ile).
  - `on-dark`: CTA bölümünde kullanılır. Koyu zeminde yarı saydam beyaz input (footer ile aynı). Site teması light olsa da CTA bölümü her zaman koyu zeminde olduğu için bu prop sabitlenir.

### 7.9 `<ThemeToggle />`

- shadcn DropdownMenu
- 3 öğe: Light / Dark / System (Sun, Moon, Monitor ikonları)

### 7.10 `<LocaleSwitcher />`

- shadcn DropdownMenu
- 2 öğe: TR (🇹🇷 ile) / EN (🇬🇧 ile)
- Tıklayınca `useRouter().push(pathname with new locale)`

### 7.11 `<CookieBanner />`

- **Client component**
- Sayfa altına sabit (`position: fixed; bottom: 0`)
- İçerik: Kısa metin + "Accept" + "Reject" butonları + "Cookie Policy" linki
- Karar `localStorage` (`safolio_cookie_consent: "accepted" | "rejected"`) — set edilince banner gizlenir
- Mount sonrası `useEffect` ile localStorage kontrol; karar yoksa banner görünür
- Şu an gerçek tracking olmadığı için karar kozmetiktir; ileride analytics opt-in olursa bu state'e bakar
- Vercel Analytics cookie-free olduğu için kapsam dışı kalır (yine de banner GDPR bilgi gereği gösterilir)

### 7.12 `<SkipToMain />`

- Header'ın hemen üstünde, sadece klavye focus'unda görünür
- `<a href="#main" class="sr-only focus:not-sr-only ...">{t("a11y.skipToMain")}</a>`
- Tab ile fokuslanınca sol üstte beliren accessible button stili

---

## 8. SEO & Metadata

### 8.1 Sayfa başına metadata

```tsx
// app/[locale]/page.tsx
export async function generateMetadata({ params }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('home.title'),
    description: t('home.description'),
    openGraph: { ... },
    twitter: { card: 'summary_large_image' },
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', tr: '/tr' }
    }
  };
}
```

### 8.2 OG Image

`app/[locale]/opengraph-image.tsx` — Next.js OG image generation API ile dinamik. **1200x630** (sosyal medya standardı). Logo + tagline + gradient bg. Locale'e göre tagline değişir.

### 8.3 Yapısal veri

JSON-LD (`Organization` + `WebSite` + `WebPage`). Mevcut sitedeki schema'yı temel al, `Safolio B.V.` ve Utrecht adresi dahil.

### 8.4 sitemap.ts & robots.ts

- Tüm route'lar her iki locale için sitemap'te
- `hreflang` alternate linkler her sayfada

---

## 9. Performans

- **Görseller:** `next/image` + AVIF/WebP. Hero görseli `priority`, diğerleri lazy.
- **Fonts:** `next/font/google` ile Inter, `display: 'swap'`, subset: `latin` + `latin-ext` (TR karakterler).
- **Bundle size hedefi:** First Load JS < 150KB
- **Lighthouse hedefleri:** Performance ≥ 95, A11y ≥ 95, SEO = 100
- **Analytics:** `@vercel/analytics` paketi; `<Analytics />` root layout'a eklenir. Cookie-free, GDPR-uyumlu. Web Vitals ek olarak `@vercel/speed-insights` ile takip edilir.
- **Statik üretim:** Tüm sayfalar default static (`export const dynamic = "force-static"` opsiyonel — Next.js zaten statik üretir). `<SignupForm />` `'use client'` olduğu için sayfa segmentinin statik renderini engellemez; interaktif kısım hydration sonrası client'ta çalışır. Route-segment için ek config gerekmez.

---

## 10. Erişilebilirlik

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, heading hiyerarşisi)
- Form input'ların `label` veya `aria-label`'ı
- Focus state'leri görünür (`focus-visible:ring`)
- Renk kontrastı WCAG AA (özellikle `--muted-foreground` üzerinde test edilecek)
- Theme toggle ve locale switcher klavye ile erişilebilir (shadcn varsayılan)
- Tüm görseller `alt` ile (dekoratif olanlar `alt=""`)
- Skip-to-main link

---

## 11. Test Stratejisi

### 11.1 Test türleri

- **Unit:** Yardımcı fonksiyonlar (`lib/utils.ts`, form schemaları) — Vitest
- **Component:** Kritik bileşenler (`<SignupForm />`, `<LocaleSwitcher />`, `<ThemeToggle />`) — Testing Library
- **E2E:** Ana akışlar (sayfa yüklenir, dil değişir, theme değişir, form submit eder ve success gösterir) — Playwright

### 11.2 Manuel doğrulama checklist

- [ ] Hem TR hem EN'de tüm metinler doğru görünüyor
- [ ] `/` → otomatik yönlendirme çalışıyor
- [ ] Theme toggle 3 mod arasında çalışıyor, refresh sonrası kalıyor
- [ ] Mobile (375px), tablet (768px), desktop (1440px) breakpoint'lerinde layout düzgün
- [ ] Form geçersiz email'i red ediyor, geçerli olanda success gösteriyor
- [ ] Tüm legal sayfalara footer'dan ulaşılabiliyor
- [ ] Lighthouse skorları hedeflere ulaşıyor

---

## 12. Kararlar ve Açık Konular

### 12.1 Alınmış kararlar (planlamayı bloke etmez)

| Konu                              | Karar                                                                                                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hero portresi                     | Mevcut safolio.com'daki PNG kullanılacak (Asset Inventory §6.4'te)                                                                                                       |
| CTA arka planı                    | Mevcut `h2-32.webp` kullanılacak (Asset Inventory §6.4'te)                                                                                                               |
| Sosyal medya linkleri             | Şimdilik `href="#"` placeholder; gerçek URL'ler `messages/*.json`'a sonradan eklenir                                                                                     |
| Mailing backend                   | YOK — UI only, fake success toast (§7.8)                                                                                                                                 |
| Analytics                         | **Vercel Analytics** (Vercel'e deploy ettiğimiz için native; `@vercel/analytics` paketi ile eklenir; cookie-free)                                                        |
| Cookie banner                     | **EVET** — Hollanda GDPR/ePrivacy uyumu için zorunlu. shadcn pattern + localStorage. Sadece "Accept / Reject" iki seçenek (gerçek tracking olmadığı için minimum kapsam) |
| App Store / Play Store badge'leri | "Coming Soon" — tıklama disabled (`role="img"` ve `aria-label` ile)                                                                                                      |
| 404 sayfası                       | Özel basit tasarım (`app/[locale]/not-found.tsx`) — büyük "404", kısa mesaj, ana sayfaya dönüş butonu                                                                    |
| Default locale                    | TR (§2.1'de detaylandırıldı)                                                                                                                                             |
| `tailwind.config.ts`              | Oluşturulmayacak — Tailwind v4'te CSS-first config tercih (§6.2 not)                                                                                                     |

### 12.2 Hâlâ açık (kullanıcıdan teyit gerekir, planlamayı bloke etmez)

1. **Gerçek sosyal medya URL'leri:** Global ve Turkish hesap linkleri. Kullanıcı bunları paylaşana kadar `#` placeholder. (Düşük öncelik — i18n mesaj dosyasından güncellenebilir.)
2. **Domain & deploy:** Yeni site `safolio.com`'a doğrudan mı, yoksa önce `staging.safolio.com` veya `v2.safolio.com`'a mı yayınlanacak? Mevcut WordPress hâlâ ayakta. **Plan:** Önce staging, kullanıcı onayından sonra domain geçişi.
3. **İletişim e-mail'i:** Mevcut sitede encrypted halde görünüyor. `hello@safolio.com` varsayımı. Kullanıcı `mailto:` linki için doğru adresi onaylayacak.
4. **Erken kayıt formu:** "UI only" şu an için yeterli mi, yoksa minimal de olsa bir yere yazılması (örn. Resend audience) gerekir mi? Spec UI-only diyor; ürün lansmanından önce karar verilir.

---

## 13. Riskler & Varsayımlar

### Riskler

- **i18n + theme kombinasyonu**: next-intl + next-themes birlikte server/client boundary'de hydration sorunlarına yol açabilir. Mitigation: shadcn'in dökümante ettiği pattern'i kullan.
- **Mevcut görsel asset'leri**: Mevcut WordPress sitesindeki görseller telifli/lisanslı olabilir. Mitigation: indirip `public/`'a koymadan önce her görseli kontrol et.
- **Tailwind v4 olgunluğu**: v4 yeni; shadcn v4 uyumu kontrol edilmeli. Fallback: Tailwind v3.

### Varsayımlar

- Kullanıcı mevcut sitedeki görselleri kullanma hakkına sahip (telif sorunu yok).
- Domain `safolio.com` Vercel'e yönlendirilecek (DNS değişikliği kullanıcı tarafında).
- Mevcut WordPress sitesi geçişte korunacak (yeni site `staging.safolio.com` veya başka subdomain'de önce test edilebilir).

---

## 14. Başarı Kriterleri

- Mevcut sitenin tüm bölümleri (blog hariç) yeni sitede yer alıyor
- TR ve EN dilleri tam çevrilmiş
- Light/Dark theme cihazlar arası senkron çalışıyor
- Lighthouse Performance ≥ 95
- Tüm legal sayfalar erişilebilir
- Form UI çalışıyor (backend olmasa da)
- Mobil (iOS Safari, Android Chrome) ve masaüstü (Chrome, Firefox, Safari) sorunsuz
