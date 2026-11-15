import { useTranslations } from "next-intl";
import { Shield, LayoutGrid, BookOpen, Gauge, Users } from "lucide-react";

export function Features() {
  const t = useTranslations("Features");
  const items = [
    { num: "01", title: t("f1_t"), body: t("f1_b"), Icon: Shield },
    { num: "02", title: t("f2_t"), body: t("f2_b"), Icon: LayoutGrid },
    { num: "03", title: t("f3_t"), body: t("f3_b"), Icon: BookOpen },
    { num: "04", title: t("f4_t"), body: t("f4_b"), Icon: Gauge },
    { num: "05", title: t("f5_t"), body: t("f5_b"), Icon: Users },
  ];
  return (
    <section id="features" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-14 max-w-[700px]">
          <div className="text-ink3 mb-[18px] font-mono text-[11.5px] font-medium tracking-[0.12em] uppercase">
            {t("eyebrow")}
          </div>
          <h2 className="mb-4 text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
            {t("h")}
          </h2>
          <p className="text-ink2 max-w-[580px] text-[17px] leading-[1.5] text-pretty">
            {t("sub")}
          </p>
        </div>

        <div className="rounded-card border-line bg-line grid grid-cols-1 gap-px overflow-hidden border min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 [&>*:first-child]:col-span-1 min-[480px]:[&>*:first-child]:col-span-2 xl:[&>*:first-child]:col-span-1">
          {items.map(({ num, title, body, Icon }) => (
            <article
              key={num}
              className="bg-surface flex min-h-[260px] flex-col gap-3 px-[22px] pt-[26px] pb-7"
            >
              <div className="text-ink2 flex items-center justify-between">
                <span className="text-ink3 font-mono text-[11px] tracking-[0.06em]">{num}</span>
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="text-[19px] leading-tight font-medium tracking-[-0.01em]">{title}</h3>
              <p className="text-ink2 text-[14px] leading-[1.55]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
