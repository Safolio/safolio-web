"use client";

import { useEffect } from "react";
import { routing } from "@/i18n/routing";

export default function RootPage() {
  useEffect(() => {
    const preferred = navigator.language.split("-")[0] ?? "";
    const target = (routing.locales as readonly string[]).includes(preferred)
      ? preferred
      : routing.defaultLocale;
    window.location.replace(`/${target}/`);
  }, []);

  return null;
}
