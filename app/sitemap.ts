import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";

const ROUTES = [
  "",
  "/privacy-policy",
  "/cookie-policy",
  "/terms-and-conditions",
  "/acceptable-use-policy",
  "/eula",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://safolio.com";
  const now = new Date();
  return routing.locales.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${base}/${locale}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1.0 : 0.5,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${base}/${l}${route}`]),
        ),
      },
    })),
  );
}
