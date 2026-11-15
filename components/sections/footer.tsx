import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/logo";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-line bg-surface2 border-t px-8 pt-16 pb-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="border-line grid grid-cols-1 gap-12 border-b pb-14 min-[540px]:grid-cols-2 min-[880px]:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="text-ink2 mt-5 max-w-[280px] text-[15px] leading-[1.4]">
              {t("tag_a")}
              <br />
              <em className="serif text-ink">{t("tag_b")}</em>
            </p>
          </div>

          <div>
            <div className="text-ink3 mb-3.5 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
              {t("contact")}
            </div>
            <div className="text-ink mb-1.5 text-[14px]">
              <a className="hover:text-accent" href="mailto:hello@safolio.com">
                hello@safolio.com
              </a>
            </div>
            <div className="text-ink mb-1.5 text-[14px]">{t("company")}</div>
            <div className="text-ink3 text-[14px]">{t("address")}</div>
          </div>

          <div>
            <div className="text-ink3 mb-3.5 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
              {t("legal")}
            </div>
            <div className="text-ink mb-1.5 text-[14px]">
              <Link className="hover:text-accent" href="/privacy-policy">
                {t("legal1")}
              </Link>
            </div>
            <div className="text-ink mb-1.5 text-[14px]">
              <Link className="hover:text-accent" href="/cookie-policy">
                {t("legal2")}
              </Link>
            </div>
            <div className="text-ink mb-1.5 text-[14px]">
              <Link className="hover:text-accent" href="/terms-and-conditions">
                {t("legal3")}
              </Link>
            </div>
            <div className="text-ink mb-1.5 text-[14px]">
              <Link className="hover:text-accent" href="/acceptable-use-policy">
                {t("legal4")}
              </Link>
            </div>
            <div className="text-ink text-[14px]">
              <Link className="hover:text-accent" href="/eula">
                {t("legal5")}
              </Link>
            </div>
          </div>

          <div>
            <div className="text-ink3 mb-3.5 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
              {t("social")}
            </div>
            <div className="text-ink mb-1.5 text-[14px]">
              <a className="hover:text-accent" href="#">
                {t("social1")}
              </a>
            </div>
            <div className="text-ink mb-1.5 text-[14px]">
              <a className="hover:text-accent" href="#">
                {t("social2")}
              </a>
            </div>
            <div className="text-ink text-[14px]">
              <a className="hover:text-accent" href="#">
                {t("social3")}
              </a>
            </div>
          </div>
        </div>

        <p className="text-ink3 max-w-[760px] pt-6 text-[13px] leading-[1.5]">{t("disclaimer")}</p>

        <div className="text-ink3 flex flex-col items-start justify-between gap-2 pt-4 font-mono text-[12px] sm:flex-row sm:items-center">
          <span>{t("copyright")}</span>
          <span>{t("version")}</span>
        </div>
      </div>
    </footer>
  );
}
