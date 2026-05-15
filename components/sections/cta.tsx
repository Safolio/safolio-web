import Image from "next/image";
import { useTranslations } from "next-intl";
import { SignupForm } from "@/components/signup-form";

export function CTA() {
  const t = useTranslations("CTA");
  return (
    <section className="mx-auto max-w-[1300px] px-4 py-16 md:px-6 md:py-24">
      <div className="relative overflow-hidden rounded-card bg-on-dark-bg px-6 py-20 md:px-12 md:py-28">
        <Image
          src="/images/cta-bg.webp"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 1300px"
          className="object-cover opacity-40"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.2em] text-on-dark-muted uppercase">{t("eyebrow")}</p>
          <h2 className="mt-4 text-[clamp(1.875rem,4vw,3rem)] leading-tight font-semibold tracking-tight text-on-dark-foreground">
            {t("heading")} <span className="text-accent">{t("headingBrand")}</span>{" "}
            {t("headingMiddle")} <span className="text-accent">{t("headingSecure")}</span>
            {t("headingTail")} <span className="text-accent">{t("headingEmpowering")}</span>
            {t("headingPeriod")}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-on-dark-muted">{t("body")}</p>
          <div className="mt-8 flex justify-center">
            <SignupForm tone="on-dark" />
          </div>
          <p className="mt-12 text-lg font-semibold text-on-dark-foreground">
            {t("comingSoon")}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <span
              role="img"
              aria-label="App Store (coming soon)"
              className="rounded-button bg-white/10 px-5 py-3 text-sm text-on-dark-foreground"
            >
              App Store
            </span>
            <span
              role="img"
              aria-label="Google Play (coming soon)"
              className="rounded-button bg-white/10 px-5 py-3 text-sm text-on-dark-foreground"
            >
              Google Play
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
