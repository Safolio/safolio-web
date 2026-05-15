"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

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
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-card border border-border bg-card p-4 shadow-lg md:flex md:items-center md:gap-4">
      <p className="text-sm text-muted-foreground">
        {t("message")}{" "}
        <Link href="/cookie-policy" className="underline">
          {t("policyLink")}
        </Link>
      </p>
      <div className="mt-3 flex gap-2 md:mt-0">
        <Button variant="outline" size="sm" onClick={() => decide("rejected")}>
          {t("reject")}
        </Button>
        <Button size="sm" onClick={() => decide("accepted")}>
          {t("accept")}
        </Button>
      </div>
    </div>
  );
}
