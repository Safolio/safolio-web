import { useTranslations } from "next-intl";

export function WhyWeCreated() {
  const t = useTranslations("WhyWeCreated");
  const paragraphs = t.raw("paragraphs") as string[];
  return (
    <section className="border-t border-border bg-[url('/images/hero-bg.webp')] bg-[length:200px] bg-[position:calc(100%-45px)_60px] bg-no-repeat">
      <div className="mx-auto max-w-[1300px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="max-w-2xl text-[clamp(1.875rem,4vw,3rem)] leading-tight font-semibold tracking-tight">
          {t("heading")} <span className="bg-highlight px-2">{t("headingHighlight")}</span>
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 text-base leading-[26px] text-muted-foreground">
          {paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
