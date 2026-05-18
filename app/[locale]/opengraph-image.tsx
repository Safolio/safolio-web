import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Safolio";
export const dynamic = "force-static";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OG({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #2869F5 0%, #6461FC 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>Safolio</div>
        <div style={{ marginTop: 24, fontSize: 36, textAlign: "center", maxWidth: 900 }}>
          {t("title").replace(/^Safolio — /, "")}
        </div>
      </div>
    ),
    size,
  );
}
