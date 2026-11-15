"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LangToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const a11y = useTranslations("Nav");

  const cycle = () => {
    const next = locale === "en" ? "tr" : "en";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={a11y("selectLanguage")}
      className="border-line text-ink3 hover:border-line-strong inline-flex items-center gap-1 rounded-full border bg-transparent px-2.5 py-[5px] font-mono text-[11.5px] font-medium tracking-[0.04em] transition-colors"
    >
      {routing.locales.map((l, i) => (
        <span key={l} className="inline-flex items-center">
          <span className={cn(l === locale ? "text-ink" : "text-ink3")}>{l.toUpperCase()}</span>
          {i < routing.locales.length - 1 && <span className="text-ink3 px-1 opacity-60">/</span>}
        </span>
      ))}
    </button>
  );
}
