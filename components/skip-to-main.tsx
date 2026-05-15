import { useTranslations } from "next-intl";

export function SkipToMain() {
  const t = useTranslations("a11y");
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-button focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
    >
      {t("skipToMain")}
    </a>
  );
}
