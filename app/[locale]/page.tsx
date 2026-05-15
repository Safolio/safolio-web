import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { DesignedForYou } from "@/components/sections/designed-for-you";
import { WhyWeCreated } from "@/components/sections/why-we-created";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { SkipToMain } from "@/components/skip-to-main";

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
    </>
  );
}
