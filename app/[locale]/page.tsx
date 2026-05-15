import { Header } from "@/components/sections/header";
import { SkipToMain } from "@/components/skip-to-main";

export default function HomePage() {
  return (
    <>
      <SkipToMain />
      <Header />
      <main id="main" className="min-h-screen pt-16">
        <div className="mx-auto max-w-[1300px] px-4 py-24">
          <p className="text-muted-foreground">Sections coming…</p>
        </div>
      </main>
    </>
  );
}
