import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal-layout";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer.legal" });
  return (
    <LegalLayout title={t("terms")}>
      <p>This page will contain the Safolio terms and conditions. Final copy pending legal review.</p>
    </LegalLayout>
  );
}
