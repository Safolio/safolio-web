import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { LinkIcon, XIcon, Camera } from "lucide-react";

const SOCIAL = [
  { name: "linkedin", Icon: LinkIcon },
  { name: "twitter", Icon: XIcon },
  { name: "instagram", Icon: Camera },
];

function SocialRow({ label }: { label: string }) {
  return (
    <div>
      <p className="font-semibold text-on-dark-foreground">{label}</p>
      <div className="mt-4 flex gap-3">
        {SOCIAL.map(({ name, Icon }) => (
          <a
            key={name}
            href="#"
            aria-label={name}
            className="flex h-12 w-12 items-center justify-center rounded-button bg-white text-black transition-colors hover:bg-primary hover:text-white"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-on-dark-bg text-on-dark-foreground">
      <div className="mx-auto max-w-[1300px] px-4 py-16 md:px-6 md:py-20">
        <div className="mb-10 flex items-center gap-2">
          <Image src="/logo-white.svg" alt="" width={36} height={36} className="h-9 w-9" />
          <span className="text-2xl font-semibold tracking-tight">Safolio</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] font-semibold tracking-tight">
          <span className="bg-on-dark-border px-2">{t("tagline.line1")}</span>
          <span>{t("tagline.line2")}</span>
          <span className="text-accent">{t("tagline.line3")}</span>
          <span>{t("tagline.line4")}</span>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div className="text-sm leading-relaxed text-on-dark-muted">
            <p className="font-semibold text-on-dark-foreground">{t("contact")}</p>
            <a className="mt-2 block hover:text-on-dark-foreground" href="mailto:hello@safolio.com">
              hello@safolio.com
            </a>
            <p className="mt-6 font-semibold text-on-dark-foreground">{t("company")}</p>
            <p>{t("address")}</p>
          </div>
          <SocialRow label={t("globalSocial")} />
          <SocialRow label={t("turkishSocial")} />
        </div>

        <div className="my-12 h-px bg-on-dark-border" />

        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <li>
            <Link href="/privacy-policy" className="hover:text-accent">
              {t("legal.privacy")}
            </Link>
          </li>
          <li>
            <Link href="/cookie-policy" className="hover:text-accent">
              {t("legal.cookie")}
            </Link>
          </li>
          <li>
            <Link href="/terms-and-conditions" className="hover:text-accent">
              {t("legal.terms")}
            </Link>
          </li>
          <li>
            <Link href="/acceptable-use-policy" className="hover:text-accent">
              {t("legal.aup")}
            </Link>
          </li>
          <li>
            <Link href="/eula" className="hover:text-accent">
              {t("legal.eula")}
            </Link>
          </li>
        </ul>

        <p className="mt-8 text-sm text-on-dark-muted">{t("copyright", { year })}</p>
      </div>
    </footer>
  );
}
