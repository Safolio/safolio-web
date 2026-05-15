"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Header() {
  const t = useTranslations("Nav");
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_oklab,var(--bg)_80%,transparent)] backdrop-blur-md backdrop-saturate-[1.8]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-[14px] md:gap-8 md:px-8">
        <Link href="/" aria-label="Safolio">
          <Logo wordmarkClassName="hidden min-[400px]:inline" />
        </Link>

        <nav className="hidden items-center gap-7 text-[14px] text-ink2 md:flex">
          <a href="#features" className="transition-colors hover:text-ink">
            {t("product")}
          </a>
          <a href="#how" className="transition-colors hover:text-ink">
            {t("how")}
          </a>
          <a href="#why" className="transition-colors hover:text-ink">
            {t("manifesto")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full bg-ink px-[14px] py-[7px] text-[13px] font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink"
          >
            {t("signup")}
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={t("openMenu")}
              className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-line text-ink2 transition-colors hover:border-line-strong hover:text-ink md:hidden"
            >
              <Menu className="size-4" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-bg p-6">
              <SheetTitle className="sr-only">{t("openMenu")}</SheetTitle>
              <nav className="mt-10 flex flex-col gap-5 text-[16px] text-ink">
                <a
                  href="#features"
                  onClick={closeMenu}
                  className="transition-colors hover:text-accent"
                >
                  {t("product")}
                </a>
                <a
                  href="#how"
                  onClick={closeMenu}
                  className="transition-colors hover:text-accent"
                >
                  {t("how")}
                </a>
                <a
                  href="#why"
                  onClick={closeMenu}
                  className="transition-colors hover:text-accent"
                >
                  {t("manifesto")}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
