import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { Allocation } from "@/components/hero-chart";
import { cn } from "@/lib/utils";

const ROWS = [
  { sym: "ASELS", name: "Aselsan Elektronik", qty: "1,200", avg: "₺68.20", price: "₺82.40", val: "₺98,880", chg: "+20.83%", pos: true },
  { sym: "VWCE", name: "Vanguard FTSE All-World", qty: "182", avg: "€108.40", price: "€132.18", val: "€24,057", chg: "+21.95%", pos: true },
  { sym: "BTC", name: "Bitcoin", qty: "0.412", avg: "$58,200", price: "$104,820", val: "$43,186", chg: "+80.10%", pos: true },
  { sym: "ETH", name: "Ethereum", qty: "8.4", avg: "$3,420", price: "$3,890", val: "$32,676", chg: "+13.74%", pos: true },
  { sym: "XAU", name: "Gold Spot", qty: "12 oz", avg: "$2,180", price: "$2,914", val: "$34,968", chg: "+33.67%", pos: true },
  { sym: "TUPRS", name: "Tüpraş", qty: "240", avg: "₺168.40", price: "₺142.10", val: "₺34,104", chg: "−15.62%", pos: false },
];

export function DashboardMock() {
  const t = useTranslations("Dashboard");
  const chart = useTranslations("Chart");

  return (
    <div className="overflow-hidden rounded-dash border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(15,19,17,0.20)] dark:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between border-b border-line bg-surface2 px-[18px] py-3">
        <div className="flex gap-1">
          {[
            { key: "overview", active: true },
            { key: "positions" },
            { key: "risk" },
            { key: "journal" },
            { key: "community" },
          ].map((tab) => (
            <span
              key={tab.key}
              className={cn(
                "rounded-lg px-3 py-1.5 text-[12.5px] font-medium",
                tab.active ? "bg-surface text-ink" : "text-ink3",
              )}
            >
              {t(tab.key as "overview" | "positions" | "risk" | "journal" | "community")}
            </span>
          ))}
        </div>
        <div className="inline-flex min-w-[220px] items-center gap-2 rounded-lg border border-line bg-surface py-1.5 pr-2.5 pl-3 text-[12px] text-ink3">
          <Search size={12} aria-hidden="true" />
          <span>{t("search")}</span>
          <span className="ml-auto rounded bg-surface2 px-1.5 py-0.5 font-mono text-[10.5px] text-ink3">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-[240px_1fr]">
        <div className="border-b border-line p-[22px] md:border-r md:border-b-0">
          <div>
            <div className="font-mono text-[11px] font-medium tracking-[0.08em] text-ink3 uppercase">
              {chart("total")}
            </div>
            <div className="mt-1.5 mb-1 text-[24px] font-medium tracking-[-0.015em] text-ink">
              €267,914
            </div>
            <div className="inline-flex items-center gap-1.5 text-[12px] font-medium text-pos">
              +€5,318 · +2.02% · {chart("change")}
            </div>
          </div>

          <div className="my-[18px] h-px bg-line" />

          <div>
            <div className="font-mono text-[11px] font-medium tracking-[0.08em] text-ink3 uppercase">
              {chart("risk")}
            </div>
            <div className="mt-2.5 grid gap-2">
              <div className="relative h-[5px] rounded-full bg-[linear-gradient(to_right,var(--accent)_0%,var(--accent)_33%,color-mix(in_oklab,var(--accent)_60%,var(--neg)_40%)_66%,var(--neg)_100%)]">
                <div
                  className="absolute -top-[3px] h-[11px] w-[11px] -translate-x-1/2 rounded-full border-2 border-ink bg-surface"
                  style={{ left: "58%" }}
                />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[22px] font-medium tracking-[-0.01em] text-ink">58</span>
                <span className="font-mono text-[11.5px] text-ink3">/ 100</span>
              </div>
            </div>
          </div>

          <div className="my-[18px] h-px bg-line" />

          <div>
            <div className="font-mono text-[11px] font-medium tracking-[0.08em] text-ink3 uppercase">
              {chart("alloc")}
            </div>
            <Allocation />
          </div>
        </div>

        <div className="overflow-auto">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr>
                <th className="border-b border-line px-[18px] py-3.5 text-left font-mono text-[11px] font-medium tracking-[0.06em] text-ink3 uppercase">
                  {t("asset")}
                </th>
                {["qty", "avg", "price", "value", "return"].map((k) => (
                  <th
                    key={k}
                    className="border-b border-line px-[18px] py-3.5 text-right font-mono text-[11px] font-medium tracking-[0.06em] text-ink3 uppercase"
                  >
                    {t(k as "qty" | "avg" | "price" | "value" | "return")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.sym}>
                  <td
                    className={cn(
                      "px-[18px] py-3.5 align-middle text-ink",
                      i < ROWS.length - 1 && "border-b border-line",
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-lg border border-line bg-surface2" />
                      <div>
                        <div className="text-[13px] font-medium tracking-[0.01em] text-ink">
                          {r.sym}
                        </div>
                        <div className="text-[11.5px] text-ink3">{r.name}</div>
                      </div>
                    </div>
                  </td>
                  {[r.qty, r.avg, r.price, r.val].map((v, idx) => (
                    <td
                      key={idx}
                      className={cn(
                        "px-[18px] py-3.5 text-right font-mono tnum text-ink",
                        i < ROWS.length - 1 && "border-b border-line",
                      )}
                    >
                      {v}
                    </td>
                  ))}
                  <td
                    className={cn(
                      "px-[18px] py-3.5 text-right font-mono font-medium tnum",
                      r.pos ? "text-pos" : "text-neg",
                      i < ROWS.length - 1 && "border-b border-line",
                    )}
                  >
                    {r.chg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
