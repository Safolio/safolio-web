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
      <main id="main" className="pt-24">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-20">
          <h1 className="mb-8 text-3xl font-semibold tracking-tight">{title}</h1>
          <div className="prose prose-neutral max-w-none dark:prose-invert">{children}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}
