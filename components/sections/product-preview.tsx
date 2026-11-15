import { useTranslations } from "next-intl";
import { DashboardMock } from "@/components/dashboard-mock";

export function ProductPreview() {
  const t = useTranslations("Preview");
  return (
    <section id="preview" className="px-5 pt-10 pb-16 md:px-8 md:pt-14 md:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-14 max-w-[700px] text-center">
          <div className="text-ink3 mb-[18px] font-mono text-[11.5px] font-medium tracking-[0.12em] uppercase">
            {t("eyebrow")}
          </div>
          <h2 className="mb-4 text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
            {t("h")}
          </h2>
          <p className="text-ink2 mx-auto max-w-[580px] text-[17px] leading-[1.5] text-pretty">
            {t("sub")}
          </p>
        </div>
        <DashboardMock />
      </div>
    </section>
  );
}
