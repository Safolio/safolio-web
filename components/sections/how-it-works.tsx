import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("How");
  const steps = [
    { n: "01", title: t("s1_t"), body: t("s1_b") },
    { n: "02", title: t("s2_t"), body: t("s2_b") },
    { n: "03", title: t("s3_t"), body: t("s3_b") },
  ];
  return (
    <section id="how" className="px-8 py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-14 max-w-[700px]">
          <div className="mb-[18px] font-mono text-[11.5px] font-medium tracking-[0.12em] text-ink3 uppercase">
            {t("eyebrow")}
          </div>
          <h2 className="mb-4 text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
            {t("h")}
          </h2>
        </div>

        <ol className="grid list-none grid-cols-1 border-t border-line p-0 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={
                "flex gap-[22px] py-9 pr-8 " +
                (i < steps.length - 1
                  ? "border-b border-line md:border-r md:border-b-0"
                  : "")
              }
            >
              <div className="pt-1 font-mono text-[12px] font-medium tracking-[0.06em] text-accent">
                {s.n}
              </div>
              <div>
                <div className="mb-2 text-[20px] font-medium tracking-[-0.01em]">{s.title}</div>
                <div className="max-w-[320px] text-[14.5px] leading-[1.5] text-ink2">
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
