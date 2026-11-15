"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/logo";
import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

export function Header() {
  const t = useTranslations("Nav");
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="border-line sticky top-0 z-50 border-b bg-[color-mix(in_oklab,var(--bg)_80%,transparent)] backdrop-blur-md backdrop-saturate-[1.8]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-[14px] md:gap-8 md:px-8">
        <Link href="/" aria-label="Safolio">
          <Logo wordmarkClassName="hidden min-[400px]:inline" />
        </Link>

        <nav className="text-ink2 hidden items-center gap-7 text-[14px] md:flex">
          <a href="#features" className="hover:text-ink transition-colors">
            {t("product")}
          </a>
          <a href="#how" className="hover:text-ink transition-colors">
            {t("how")}
          </a>
          <a href="#why" className="hover:text-ink transition-colors">
            {t("manifesto")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LangToggle />
          <ThemeToggle />
          <a
            href="#waitlist"
            className="bg-ink text-bg hover:bg-accent hover:text-accent-ink inline-flex items-center justify-center rounded-full px-[14px] py-[7px] text-[13px] font-medium transition-colors"
          >
            {t("signup")}
          </a>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={t("openMenu")}
              className="border-line text-ink2 hover:border-line-strong hover:text-ink inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border transition-colors md:hidden"
            >
              <Menu className="size-4" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-bg w-[280px] p-6">
              <SheetTitle className="sr-only">{t("openMenu")}</SheetTitle>
              <nav className="text-ink mt-10 flex flex-col gap-5 text-[16px]">
                <a
                  href="#features"
                  onClick={closeMenu}
                  className="hover:text-accent transition-colors"
                >
                  {t("product")}
                </a>
                <a href="#how" onClick={closeMenu} className="hover:text-accent transition-colors">
                  {t("how")}
                </a>
                <a href="#why" onClick={closeMenu} className="hover:text-accent transition-colors">
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
