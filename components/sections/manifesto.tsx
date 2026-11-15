import { useTranslations } from "next-intl";

export function Manifesto() {
  const t = useTranslations("Manifesto");
  return (
    <section id="why" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[760px]">
        <div className="mb-14">
          <div className="text-ink3 font-mono text-[11.5px] font-medium tracking-[0.12em] uppercase">
            {t("eyebrow")}
          </div>
        </div>
        <div className="flex flex-col gap-[22px]">
          <p className="text-ink serif m-0 text-[clamp(26px,3.2vw,38px)] leading-[1.15] tracking-[-0.01em] text-balance">
            {t("p1")}
          </p>
          <p className="text-ink2 m-0 text-[17px] leading-[1.6] text-pretty">{t("p2")}</p>
          <p className="text-ink m-0 text-[17px] leading-[1.6] font-medium text-pretty">
            {t("p3")}
          </p>
        </div>
      </div>
    </section>
  );
}
