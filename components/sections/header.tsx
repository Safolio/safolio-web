import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/logo";
import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const t = useTranslations("Nav");
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[color-mix(in_oklab,var(--bg)_80%,transparent)] backdrop-blur-md backdrop-saturate-[1.8]">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-8 px-8 py-[14px]">
        <Link href="/" aria-label="Safolio">
          <Logo />
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
          <LangToggle />
          <ThemeToggle />
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full bg-ink px-[14px] py-[7px] text-[13px] font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink"
          >
            {t("signup")}
          </a>
        </div>
      </div>
    </header>
  );
}
