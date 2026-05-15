import { useTranslations } from "next-intl";
import { DashboardMock } from "@/components/dashboard-mock";

export function ProductPreview() {
  const t = useTranslations("Preview");
  return (
    <section id="preview" className="px-8 pt-14 pb-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto mb-14 max-w-[700px] text-center">
          <div className="mb-[18px] font-mono text-[11.5px] font-medium tracking-[0.12em] text-ink3 uppercase">
            {t("eyebrow")}
          </div>
          <h2 className="mb-4 text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
            {t("h")}
          </h2>
          <p className="mx-auto max-w-[580px] text-[17px] leading-[1.5] text-ink2 text-pretty">
            {t("sub")}
          </p>
        </div>
        <DashboardMock />
      </div>
    </section>
  );
}
