import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Nav");
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">{t("home")}</h1>
    </main>
  );
}
