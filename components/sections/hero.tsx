"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const HeroChart = dynamic(
  () => import("@/components/hero-chart").then((m) => ({ default: m.HeroChart })),
  {
    ssr: false,
    loading: () => (
      <div className="h-[680px] rounded-chart border border-line bg-surface shadow-[0_24px_60px_-32px_rgba(15,19,17,0.18)]" />
    ),
  },
);

export function Hero() {
  const t = useTranslations("Hero");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="mx-auto max-w-[1240px] px-8 pt-16 pb-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1.1fr]">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 pl-2.5 text-[12.5px] tracking-[-0.005em] text-ink2">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent shadow-[0_0_0_3px_color-mix(in_oklab,var(--accent)_22%,transparent)]" />
            {t("preLabel")}
          </span>

          <h1 className="my-[22px] text-[clamp(40px,5.4vw,72px)] leading-[1.02] font-medium tracking-[-0.025em] text-balance">
            {t("h1_a")} <em className="serif text-[1.04em]">{t("h1_b")}</em>
            <br />
            {t("h1_c")}
          </h1>

          <p className="mb-7 max-w-[540px] text-[18px] leading-[1.55] text-ink2 text-pretty">
            {t("sub")}
          </p>

          {!submitted ? (
            <form
              onSubmit={onSubmit}
              className="grid max-w-[480px] grid-cols-[1fr_auto] gap-1.5 rounded-full border border-line bg-surface p-1.5 transition-colors focus-within:border-line-strong focus-within:shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_12%,transparent)]"
            >
              <input
                type="email"
                required
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 border-0 bg-transparent px-3.5 text-[14.5px] text-ink outline-none placeholder:text-ink3"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-ink px-[18px] py-2.5 text-[14px] font-medium text-bg transition-colors hover:bg-accent hover:text-accent-ink"
              >
                {t("signupBtn")}
              </button>
            </form>
          ) : (
            <div className="inline-flex max-w-[480px] items-center gap-2.5 rounded-full bg-accent-soft px-[18px] py-3.5 text-[14px] font-medium text-accent">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12l4 4 10-10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t("successMessage")}</span>
            </div>
          )}

          <p className="mt-2.5 text-[12.5px] text-ink3">{t("ctaNote")}</p>

          <div className="mt-9 grid max-w-[480px] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-card border border-line bg-surface px-[18px] py-3.5">
            <div>
              <div className="text-[12px] font-medium text-ink2">{t("waitlistLabel")}</div>
              <div className="text-[11px] text-ink3">{t("waitlistCaption")}</div>
            </div>
            <div className="relative h-1.5 overflow-hidden rounded-full bg-surface2">
              <div
                className="h-full animate-fill-in rounded-full bg-accent"
                style={{ width: "75%" }}
              />
            </div>
            <div className="font-mono text-[13px] font-medium text-ink tnum">75%</div>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 text-[12.5px] text-ink3">
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-3.5 bg-ink3" />
              {t("trustA")}
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-3.5 bg-ink3" />
              {t("trustB")}
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-3.5 bg-ink3" />
              {t("trustC")}
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <HeroChart />
        </div>
      </div>
    </section>
  );
}
