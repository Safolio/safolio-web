import { useTranslations } from "next-intl";
import { Ban, Landmark, Eye, Info } from "lucide-react";

export function ReadOnly() {
  const t = useTranslations("ReadOnly");
  const items = [
    { title: t("i1_t"), body: t("i1_b"), Icon: Ban },
    { title: t("i2_t"), body: t("i2_b"), Icon: Landmark },
    { title: t("i3_t"), body: t("i3_b"), Icon: Eye },
    { title: t("i4_t"), body: t("i4_b"), Icon: Info },
  ];
  return (
    <section id="read-only" className="px-8 py-24">
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

        <div className="rounded-card border-line bg-line grid grid-cols-1 gap-px overflow-hidden border sm:grid-cols-2 xl:grid-cols-4">
          {items.map(({ title, body, Icon }) => (
            <article
              key={title}
              className="bg-surface flex flex-col gap-3 px-[22px] pt-[26px] pb-7"
            >
              <Icon size={22} strokeWidth={1.5} className="text-ink2" aria-hidden="true" />
              <h3 className="text-[19px] leading-tight font-medium tracking-[-0.01em]">{title}</h3>
              <p className="text-ink2 text-[14px] leading-[1.55]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
