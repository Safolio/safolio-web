import Image from "next/image";
import { useTranslations } from "next-intl";
import { SignupForm } from "@/components/signup-form";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[url('/images/hero-bg.webp')] bg-top-left bg-no-repeat pt-24 md:pt-32"
    >
      <div className="mx-auto grid max-w-[1300px] gap-12 px-4 pb-24 md:grid-cols-2 md:px-6 md:pb-32">
        <div className="flex flex-col justify-center">
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] leading-[1.15] font-semibold tracking-tight text-foreground">
            {t("heading")}
          </h1>
          <p className="mt-6 max-w-md text-sm leading-[26px] text-muted-foreground">
            {t("description")}
          </p>
          <div className="my-8 h-px w-1/4 bg-border" />
          <p className="mb-3 text-base font-semibold">
            <strong>{t("signUpLabel")}</strong>{" "}
            <span className="font-normal text-muted-foreground">| {t("signUpHint")}</span>
          </p>
          <SignupForm tone="on-light" />
        </div>

        <div className="relative">
          <div className="rounded-card bg-primary/95 px-6 py-5 text-primary-foreground md:max-w-sm">
            <p className="text-sm">{t("comingSoonReady")}</p>
          </div>
          <div className="relative mt-6 overflow-hidden rounded-card">
            <Image
              src="/images/hero-portrait.png"
              alt=""
              width={566}
              height={1008}
              priority
              className="mx-auto h-auto w-full max-w-md object-contain dark:brightness-[0.7]"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-card bg-card/95 p-5 shadow-lg backdrop-blur">
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                {t("comingSoon")}
              </p>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-highlight">
                <div className="h-full w-3/4 rounded-full bg-primary" />
              </div>
              <p className="mt-2 text-xs font-semibold text-foreground">75%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
