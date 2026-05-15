import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { LegalLayout } from "@/components/legal-layout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Footer" });
  return { title: `${t("legal3")} — Safolio` };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Footer" });
  return (
    <LegalLayout title={t("legal3")}>
      <p>This page will contain the Safolio terms and conditions. Final copy pending legal review.</p>
    </LegalLayout>
  );
}
