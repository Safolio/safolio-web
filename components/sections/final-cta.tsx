import { useTranslations } from "next-intl";

export function FinalCTA() {
  const t = useTranslations("CTA");
  return (
    <section className="border-line border-t bg-[radial-gradient(60%_80%_at_50%_0%,var(--accent-soft)_0%,transparent_60%),var(--bg)] px-5 py-20 text-center md:px-8 md:py-[120px]">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="mx-auto mb-[18px] max-w-[800px] text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
          {t("h_a")} <em className="serif">{t("h_b")}</em>
        </h2>
        <p className="text-ink2 mx-auto mb-9 max-w-[580px] text-[17px] leading-[1.5] text-pretty">
          {t("sub")}
        </p>
        <a
          href="#waitlist"
          className="bg-ink text-bg hover:bg-accent hover:text-accent-ink inline-flex items-center justify-center rounded-full px-[26px] py-3.5 text-[15px] font-medium transition-colors"
        >
          {t("btn")}
        </a>
      </div>
    </section>
  );
}
