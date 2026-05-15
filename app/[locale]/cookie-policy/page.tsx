import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal-layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Footer.legal" });
  return { title: `${t("cookie")} — Safolio` };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer.legal" });
  return (
    <LegalLayout title={t("cookie")}>
      <p>This page will contain the Safolio cookie policy. Final copy pending legal review.</p>
    </LegalLayout>
  );
}
