import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="text-8xl font-bold text-primary">{t("heading")}</p>
      <h1 className="mt-6 text-2xl font-semibold">{t("title")}</h1>
      <p className="mt-3 max-w-md text-muted-foreground">{t("description")}</p>
      <Button render={<Link href="/" />} className="mt-8">
        {t("back")}
      </Button>
    </main>
  );
}
