import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { DesignedForYou } from "@/components/sections/designed-for-you";
import { WhyWeCreated } from "@/components/sections/why-we-created";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { SkipToMain } from "@/components/skip-to-main";
import { OrganizationJsonLd } from "@/components/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://safolio.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", tr: "/tr" },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      siteName: "Safolio",
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SkipToMain />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <DesignedForYou />
        <WhyWeCreated />
        <CTA />
      </main>
      <Footer />
      <OrganizationJsonLd locale={locale} />
    </>
  );
}
