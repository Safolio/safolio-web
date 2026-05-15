import { useTranslations } from "next-intl";

export function Manifesto() {
  const t = useTranslations("Manifesto");
  return (
    <section id="why" className="px-8 py-24">
      <div className="mx-auto max-w-[760px]">
        <div className="mb-14">
          <div className="font-mono text-[11.5px] font-medium tracking-[0.12em] text-ink3 uppercase">
            {t("eyebrow")}
          </div>
        </div>
        <div className="flex flex-col gap-[22px]">
          <p className="m-0 text-[clamp(26px,3.2vw,38px)] leading-[1.15] tracking-[-0.01em] text-balance text-ink serif">
            {t("p1")}
          </p>
          <p className="m-0 text-[17px] leading-[1.6] text-ink2 text-pretty">{t("p2")}</p>
          <p className="m-0 text-[17px] leading-[1.6] font-medium text-pretty text-ink">
            {t("p3")}
          </p>
        </div>
      </div>
    </section>
  );
}
