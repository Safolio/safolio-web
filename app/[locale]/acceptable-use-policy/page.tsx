import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal-layout";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer.legal" });
  return (
    <LegalLayout title={t("aup")}>
      <p>This page will contain the Safolio acceptable use policy. Final copy pending legal review.</p>
    </LegalLayout>
  );
}
