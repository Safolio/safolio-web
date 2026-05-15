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
  const a11y = useTranslations("a11y");
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
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur"
          : "bg-transparent",
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
          <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-accent">
            {t("home")}
          </Link>
          <LocaleSwitcher />
          <ThemeToggle />
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={a11y("openMenu")}
              />
            }
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="sr-only">{a11y("openMenu")}</SheetTitle>
            <div className="mt-8 flex flex-col gap-3 p-4">
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
