import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SkipToMain } from "@/components/skip-to-main";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SkipToMain />
      <Header />
      <main id="main" className="pt-12">
        <article className="mx-auto max-w-3xl px-8 py-12 md:py-20">
          <h1 className="mb-8 text-[clamp(30px,3.6vw,48px)] font-medium tracking-[-0.02em]">
            {title}
          </h1>
          <div className="prose prose-neutral max-w-none text-ink2 dark:prose-invert">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
