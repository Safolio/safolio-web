import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/logo";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="border-t border-line bg-surface2 px-8 pt-16 pb-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 gap-12 border-b border-line pb-14 min-[540px]:grid-cols-2 min-[880px]:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[280px] text-[15px] leading-[1.4] text-ink2">
              {t("tag_a")}
              <br />
              <em className="serif text-ink">{t("tag_b")}</em>
            </p>
          </div>

          <div>
            <div className="mb-3.5 font-mono text-[11px] font-medium tracking-[0.08em] text-ink3 uppercase">
              {t("contact")}
            </div>
            <div className="mb-1.5 text-[14px] text-ink">
              <a className="hover:text-accent" href="mailto:hello@safolio.com">
                hello@safolio.com
              </a>
            </div>
            <div className="mb-1.5 text-[14px] text-ink">{t("company")}</div>
            <div className="text-[14px] text-ink3">{t("address")}</div>
          </div>

          <div>
            <div className="mb-3.5 font-mono text-[11px] font-medium tracking-[0.08em] text-ink3 uppercase">
              {t("legal")}
            </div>
            <div className="mb-1.5 text-[14px] text-ink">
              <Link className="hover:text-accent" href="/privacy-policy">
                {t("legal1")}
              </Link>
            </div>
            <div className="mb-1.5 text-[14px] text-ink">
              <Link className="hover:text-accent" href="/cookie-policy">
                {t("legal2")}
              </Link>
            </div>
            <div className="mb-1.5 text-[14px] text-ink">
              <Link className="hover:text-accent" href="/terms-and-conditions">
                {t("legal3")}
              </Link>
            </div>
            <div className="mb-1.5 text-[14px] text-ink">
              <Link className="hover:text-accent" href="/acceptable-use-policy">
                {t("legal4")}
              </Link>
            </div>
            <div className="text-[14px] text-ink">
              <Link className="hover:text-accent" href="/eula">
                {t("legal5")}
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-3.5 font-mono text-[11px] font-medium tracking-[0.08em] text-ink3 uppercase">
              {t("social")}
            </div>
            <div className="mb-1.5 text-[14px] text-ink">
              <a className="hover:text-accent" href="#">
                {t("social1")}
              </a>
            </div>
            <div className="mb-1.5 text-[14px] text-ink">
              <a className="hover:text-accent" href="#">
                {t("social2")}
              </a>
            </div>
            <div className="text-[14px] text-ink">
              <a className="hover:text-accent" href="#">
                {t("social3")}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 pt-6 font-mono text-[12px] text-ink3 sm:flex-row sm:items-center">
          <span>{t("copyright")}</span>
          <span>{t("version")}</span>
        </div>
      </div>
    </footer>
  );
}
