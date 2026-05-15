import { useTranslations } from "next-intl";

export function FinalCTA() {
  const t = useTranslations("CTA");
  return (
    <section className="border-t border-line bg-[radial-gradient(60%_80%_at_50%_0%,var(--accent-soft)_0%,transparent_60%),var(--bg)] px-8 py-[120px] text-center">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="mx-auto mb-[18px] max-w-[800px] text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
          {t("h_a")} <em className="serif">{t("h_b")}</em>
        </h2>
        <p className="mx-auto mb-9 max-w-[580px] text-[17px] leading-[1.5] text-ink2 text-pretty">
          {t("sub")}
        </p>
        <a
          href="#waitlist"
          className="inline-flex items-center justify-center rounded-full bg-ink px-[26px] py-3.5 text-[15px] font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink"
        >
          {t("btn")}
        </a>
      </div>
    </section>
  );
}
