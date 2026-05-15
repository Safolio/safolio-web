import { useTranslations } from "next-intl";

export function Personas() {
  const t = useTranslations("Personas");
  const items = [t("p1"), t("p2"), t("p3"), t("p4"), t("p5"), t("p6"), t("p7")];
  return (
    <section id="personas" className="bg-surface2 px-8 py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-14 max-w-[700px]">
          <div className="mb-[18px] font-mono text-[11.5px] font-medium tracking-[0.12em] text-ink3 uppercase">
            {t("eyebrow")}
          </div>
          <h2 className="mb-4 text-[clamp(30px,3.6vw,48px)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
            {t("h")}
          </h2>
        </div>

        <ul className="grid list-none grid-cols-1 gap-x-12 border-t border-line-strong p-0 sm:grid-cols-2">
          {items.map((p, i) => (
            <li
              key={i}
              className="grid grid-cols-[56px_1fr] items-baseline gap-4 border-b border-line py-[22px] text-[17px] tracking-[-0.005em] text-ink"
            >
              <span className="font-mono text-[11px] tracking-[0.06em] text-ink3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="max-w-[460px] leading-[1.4]">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
