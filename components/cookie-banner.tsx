"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const STORAGE_KEY = "safolio_cookie_consent";

export function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
  }, []);

  function decide(value: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, value);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-card border border-line bg-surface p-4 text-ink2 shadow-lg md:flex md:items-center md:gap-4">
      <p className="text-sm">
        {t("message")}{" "}
        <Link href="/cookie-policy" className="text-ink underline underline-offset-2 hover:text-accent">
          {t("policyLink")}
        </Link>
      </p>
      <div className="mt-3 flex shrink-0 gap-2 md:mt-0 md:ml-auto">
        <button
          type="button"
          onClick={() => decide("rejected")}
          className="inline-flex items-center justify-center rounded-full border border-line px-[14px] py-[7px] text-[13px] font-medium text-ink transition-colors hover:border-line-strong"
        >
          {t("reject")}
        </button>
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="inline-flex items-center justify-center rounded-full bg-ink px-[14px] py-[7px] text-[13px] font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
