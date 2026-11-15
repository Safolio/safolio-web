import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("How");
  const steps = [
    { n: "01", title: t("s1_t"), body: t("s1_b") },
    { n: "02", title: t("s2_t"), body: t("s2_b") },
    { n: "03", title: t("s3_t"), body: t("s3_b") },
  ];
  return (
    <section id="how" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-14 max-w-[700px]">
          <div className="text-ink3 mb-[18px] font-mono text-[11.5px] font-medium tracking-[0.12em] uppercase">
            {t("eyebrow")}
          </div>
          <h2 className="mb-4 text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
            {t("h")}
          </h2>
        </div>

        <ol className="border-line grid list-none grid-cols-1 border-t p-0 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={
                "flex gap-[22px] py-7 pr-0 md:py-9 lg:pr-8 " +
                (i < steps.length - 1 ? "border-line border-b lg:border-r lg:border-b-0" : "")
              }
            >
              <div className="text-accent pt-1 font-mono text-[12px] font-medium tracking-[0.06em]">
                {s.n}
              </div>
              <div>
                <div className="mb-2 text-[20px] font-medium tracking-[-0.01em]">{s.title}</div>
                <div className="text-ink2 max-w-[460px] text-[14.5px] leading-[1.5] lg:max-w-[320px]">
                  {s.body}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
