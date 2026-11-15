"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Search, TrendingUp, AlertTriangle, BookOpen, MessageCircle, Heart } from "lucide-react";
import { Allocation } from "@/components/hero-chart";
import { cn } from "@/lib/utils";

type TabKey = "overview" | "positions" | "risk" | "journal" | "community";

const TABS: TabKey[] = ["overview", "positions", "risk", "journal", "community"];

const POSITIONS = [
  {
    sym: "ASELS",
    name: "Aselsan Elektronik",
    qty: "1,200",
    avg: "₺68.20",
    price: "₺82.40",
    val: "₺98,880",
    chg: "+20.83%",
    pos: true,
  },
  {
    sym: "VWCE",
    name: "Vanguard FTSE All-World",
    qty: "182",
    avg: "€108.40",
    price: "€132.18",
    val: "€24,057",
    chg: "+21.95%",
    pos: true,
  },
  {
    sym: "BTC",
    name: "Bitcoin",
    qty: "0.412",
    avg: "$58,200",
    price: "$104,820",
    val: "$43,186",
    chg: "+80.10%",
    pos: true,
  },
  {
    sym: "ETH",
    name: "Ethereum",
    qty: "8.4",
    avg: "$3,420",
    price: "$3,890",
    val: "$32,676",
    chg: "+13.74%",
    pos: true,
  },
  {
    sym: "XAU",
    name: "Gold Spot",
    qty: "12 oz",
    avg: "$2,180",
    price: "$2,914",
    val: "$34,968",
    chg: "+33.67%",
    pos: true,
  },
  {
    sym: "TUPRS",
    name: "Tüpraş",
    qty: "240",
    avg: "₺168.40",
    price: "₺142.10",
    val: "₺34,104",
    chg: "−15.62%",
    pos: false,
  },
];

const RISK_FACTORS = [
  {
    label: "Concentration",
    value: 38,
    hint: "Top 2 positions = 53% of book",
    level: "moderate" as const,
  },
  { label: "Volatility (30d)", value: 22, hint: "Within target band", level: "low" as const },
  { label: "Drawdown", value: 12, hint: "−8.2% peak-to-trough", level: "low" as const },
  {
    label: "FX exposure",
    value: 64,
    hint: "USD 41% · EUR 18% · TRY 41%",
    level: "elevated" as const,
  },
];

const JOURNAL = [
  {
    d: "Today",
    sym: "BTC",
    title: "Trimmed BTC to 16%",
    body: "Concentration risk creeping above target. Logged a 0.08 BTC sale made on my exchange. Plan to re-add on a 10% pullback.",
    tag: "Rebalance",
    pos: true,
  },
  {
    d: "Yesterday",
    sym: "ASELS",
    title: "Added on dip",
    body: "Bought more at my broker. Defense sector tailwind intact. Position now at 22%, max comfort.",
    tag: "Buy",
    pos: true,
  },
  {
    d: "3 days ago",
    sym: "TUPRS",
    title: "Closed — thesis broken",
    body: "Sold at my broker. Refining margin compression worse than expected. Exited at −15.6%. Lesson: respect the stop.",
    tag: "Sell",
    pos: false,
  },
  {
    d: "1 week ago",
    sym: "XAU",
    title: "Initial gold position",
    body: "Hedge against TRY exposure. Sized at 10%. Reviewing quarterly.",
    tag: "Buy",
    pos: true,
  },
];

const COMMUNITY = [
  {
    who: "Mert K.",
    role: "Long-term investor",
    t: "2h",
    body: "Anyone else watching the spread between ASELS and the sector ETF? Looks dislocated to me.",
    likes: 14,
    replies: 6,
  },
  {
    who: "Selin A.",
    role: "Long-term",
    t: "5h",
    body: "Just hit my 5-year FIRE checkpoint using Safolio's projections. The journal habit changed everything.",
    likes: 41,
    replies: 12,
  },
  {
    who: "Ozan T.",
    role: "Crypto-native",
    t: "1d",
    body: "Hot take: if your portfolio's risk score is under 30, you might be over-diversified for your time horizon.",
    likes: 27,
    replies: 18,
  },
];

const RISK_LEVEL_STYLES = {
  low: "text-pos",
  moderate: "text-ink2",
  elevated: "text-neg",
} as const;

export function DashboardMock() {
  const t = useTranslations("Dashboard");
  const chart = useTranslations("Chart");
  const [active, setActive] = React.useState<TabKey>("overview");

  return (
    <div className="rounded-dash border-line bg-surface overflow-hidden border shadow-[0_30px_80px_-40px_rgba(15,19,17,0.20)] dark:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]">
      <div className="border-line bg-surface2 flex items-center justify-between border-b px-[18px] py-3">
        <div className="flex gap-1">
          {TABS.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-[12.5px] font-medium transition-colors",
                key === active ? "bg-surface text-ink" : "text-ink3 hover:text-ink2",
              )}
            >
              {t(key)}
            </button>
          ))}
        </div>
        <div className="border-line bg-surface text-ink3 hidden min-w-[220px] items-center gap-2 rounded-lg border py-1.5 pr-2.5 pl-3 text-[12px] sm:inline-flex">
          <Search size={12} aria-hidden="true" />
          <span>{t("search")}</span>
          <span className="bg-surface2 text-ink3 ml-auto rounded px-1.5 py-0.5 font-mono text-[10.5px]">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-[240px_1fr]">
        <aside className="border-line border-b p-[22px] md:border-r md:border-b-0">
          <div>
            <div className="text-ink3 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
              {chart("total")}
            </div>
            <div className="text-ink mt-1.5 mb-1 text-[24px] font-medium tracking-[-0.015em]">
              €267,914
            </div>
            <div className="text-pos inline-flex items-center gap-1.5 text-[12px] font-medium">
              +€5,318 · +2.02% · {chart("change")}
            </div>
          </div>

          <div className="bg-line my-[18px] h-px" />

          <div>
            <div className="text-ink3 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
              {chart("risk")}
            </div>
            <div className="mt-2.5 grid gap-2">
              <div className="relative h-[5px] rounded-full bg-[linear-gradient(to_right,var(--accent)_0%,var(--accent)_33%,color-mix(in_oklab,var(--accent)_60%,var(--neg)_40%)_66%,var(--neg)_100%)]">
                <div
                  className="border-ink bg-surface absolute -top-[3px] h-[11px] w-[11px] -translate-x-1/2 rounded-full border-2"
                  style={{ left: "58%" }}
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-ink text-[22px] font-medium tracking-[-0.01em]">58</span>
                <span className="text-ink3 font-mono text-[11.5px]">/ 100</span>
              </div>
            </div>
          </div>

          <div className="bg-line my-[18px] h-px" />

          <div>
            <div className="text-ink3 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
              {chart("alloc")}
            </div>
            <Allocation />
          </div>
        </aside>

        <div className="min-w-0 overflow-auto">
          {(active === "overview" || active === "positions") && (
            <PositionsTable t={t} compact={active === "overview"} />
          )}
          {active === "risk" && <RiskView />}
          {active === "journal" && <JournalView />}
          {active === "community" && <CommunityView />}
        </div>
      </div>
    </div>
  );
}

function PositionsTable({
  t,
  compact,
}: {
  t: (k: "asset" | "qty" | "avg" | "price" | "value" | "return") => string;
  compact: boolean;
}) {
  const rows = compact ? POSITIONS.slice(0, 5) : POSITIONS;
  return (
    <table className="w-full border-collapse text-[13px]">
      <thead>
        <tr>
          <th className="border-line text-ink3 border-b px-[18px] py-3.5 text-left font-mono text-[11px] font-medium tracking-[0.06em] uppercase">
            {t("asset")}
          </th>
          {(["qty", "avg", "price", "value", "return"] as const).map((k) => (
            <th
              key={k}
              className="border-line text-ink3 border-b px-[18px] py-3.5 text-right font-mono text-[11px] font-medium tracking-[0.06em] uppercase"
            >
              {t(k)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r.sym}>
            <td
              className={cn(
                "text-ink px-[18px] py-3.5 align-middle",
                i < rows.length - 1 && "border-line border-b",
              )}
            >
              <div className="flex items-center gap-2.5">
                <div className="border-line bg-surface2 h-7 w-7 rounded-lg border" />
                <div>
                  <div className="text-ink text-[13px] font-medium tracking-[0.01em]">{r.sym}</div>
                  <div className="text-ink3 text-[11.5px]">{r.name}</div>
                </div>
              </div>
            </td>
            {[r.qty, r.avg, r.price, r.val].map((v, idx) => (
              <td
                key={idx}
                className={cn(
                  "tnum text-ink px-[18px] py-3.5 text-right font-mono",
                  i < rows.length - 1 && "border-line border-b",
                )}
              >
                {v}
              </td>
            ))}
            <td
              className={cn(
                "tnum px-[18px] py-3.5 text-right font-mono font-medium",
                r.pos ? "text-pos" : "text-neg",
                i < rows.length - 1 && "border-line border-b",
              )}
            >
              {r.chg}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RiskView() {
  return (
    <div className="p-[22px]">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-ink3 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
            Risk breakdown
          </div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-ink text-[28px] font-medium tracking-[-0.02em]">58</span>
            <span className="text-ink3 font-mono text-[12px]">/ 100 · Moderate</span>
          </div>
        </div>
        <div className="border-line text-ink2 hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] sm:inline-flex">
          <AlertTriangle size={12} aria-hidden="true" />2 factors elevated
        </div>
      </div>

      <div className="rounded-card border-line bg-line grid gap-px overflow-hidden border sm:grid-cols-2">
        {RISK_FACTORS.map((f) => (
          <div key={f.label} className="bg-surface p-4">
            <div className="flex items-center justify-between">
              <div className="text-ink3 font-mono text-[11px] font-medium tracking-[0.06em] uppercase">
                {f.label}
              </div>
              <div
                className={cn("tnum font-mono text-[11px] font-medium", RISK_LEVEL_STYLES[f.level])}
              >
                {f.level}
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-1.5">
              <span className="text-ink tnum text-[22px] font-medium tracking-[-0.01em]">
                {f.value}
              </span>
              <span className="text-ink3 font-mono text-[11px]">/ 100</span>
            </div>
            <div className="bg-surface2 mt-2 h-[5px] overflow-hidden rounded-full">
              <div
                className="bg-accent h-full rounded-full transition-all"
                style={{ width: `${f.value}%` }}
              />
            </div>
            <p className="text-ink2 mt-3 text-[12.5px]">{f.hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function JournalView() {
  return (
    <div className="p-[22px]">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-ink3 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
            Investment journal
          </div>
          <div className="text-ink mt-1.5 text-[20px] font-medium tracking-[-0.015em]">
            4 recent notes
          </div>
        </div>
        <div className="border-line text-ink2 hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] sm:inline-flex">
          <BookOpen size={12} aria-hidden="true" />
          18 this month
        </div>
      </div>

      <ol className="flex flex-col gap-3">
        {JOURNAL.map((j, i) => (
          <li
            key={i}
            className="rounded-card border-line bg-surface grid grid-cols-[auto_1fr_auto] items-start gap-4 border p-4"
          >
            <div className="border-line bg-surface2 text-ink2 flex h-9 w-9 items-center justify-center rounded-lg border font-mono text-[10.5px] font-medium">
              {j.sym}
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-ink text-[14px] font-medium">{j.title}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.06em] uppercase",
                    j.pos ? "bg-accent-soft text-accent" : "border-neg/30 text-neg border",
                  )}
                >
                  {j.tag}
                </span>
              </div>
              <p className="text-ink2 mt-1 text-[12.5px] leading-[1.5]">{j.body}</p>
            </div>
            <div className="text-ink3 flex items-center gap-1.5 font-mono text-[11px] whitespace-nowrap">
              <TrendingUp size={12} aria-hidden="true" />
              {j.d}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CommunityView() {
  return (
    <div className="p-[22px]">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-ink3 font-mono text-[11px] font-medium tracking-[0.08em] uppercase">
            Community feed
          </div>
          <div className="text-ink mt-1.5 text-[20px] font-medium tracking-[-0.015em]">
            Today&apos;s threads
          </div>
        </div>
        <div className="border-line text-ink2 hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] sm:inline-flex">
          <MessageCircle size={12} aria-hidden="true" />
          1,284 active
        </div>
      </div>

      <ol className="flex flex-col gap-3">
        {COMMUNITY.map((c, i) => (
          <li key={i} className="rounded-card border-line bg-surface border p-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-surface2 text-ink2 flex h-8 w-8 items-center justify-center rounded-full font-mono text-[11px] font-medium">
                {c.who.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="text-ink text-[13px] font-medium">{c.who}</div>
                <div className="text-ink3 font-mono text-[11px]">
                  {c.role} · {c.t}
                </div>
              </div>
            </div>
            <p className="text-ink2 mt-3 text-[13.5px] leading-[1.5]">{c.body}</p>
            <div className="text-ink3 mt-3 flex items-center gap-4 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1">
                <Heart size={12} aria-hidden="true" />
                {c.likes}
              </span>
              <span className="inline-flex items-center gap-1">
                <MessageCircle size={12} aria-hidden="true" />
                {c.replies}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
