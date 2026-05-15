"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const W = 560;
const H = 220;

const RANGE_DATA = [
  { trend: 0.025, seed: 7, noise: 0.04, changeAbs: "+€842.10", changePct: "+0.34%", pos: true },
  { trend: 0.09, seed: 23, noise: 0.05, changeAbs: "+€2,140.55", changePct: "+0.86%", pos: true },
  { trend: 0.22, seed: 41, noise: 0.06, changeAbs: "+€4,128.21", changePct: "+1.69%", pos: true },
  { trend: 0.62, seed: 89, noise: 0.07, changeAbs: "+€38,512.40", changePct: "+18.31%", pos: true },
  { trend: 1.4, seed: 137, noise: 0.08, changeAbs: "+€124,820.18", changePct: "+101.05%", pos: true },
];

function buildPoints(seed: number, trendFactor: number, noise: number) {
  const n = 64;
  const arr: { x: number; y: number }[] = [];
  const r = (i: number) => {
    const x = Math.sin(i * 12.9898 + 4.1414 + seed) * 43758.5453;
    return x - Math.floor(x);
  };
  let y = 0.55;
  for (let i = 0; i < n; i++) {
    const trend = (i / (n - 1)) * trendFactor;
    y = 0.55 - trend + (r(i) - 0.5) * noise;
    arr.push({ x: (i / (n - 1)) * W, y: y * H + 30 });
  }
  return arr;
}

function buildLinePath(points: { x: number; y: number }[]) {
  if (points.length === 0) return "";
  let d = `M ${points[0]!.x} ${points[0]!.y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i]!;
    const p1 = points[i]!;
    const p2 = points[i + 1]!;
    const p3 = points[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

const TICKERS = [
  {
    sym: "ASELS",
    name: "Aselsan",
    price: "₺82.40",
    chg: "+1.82%",
    pos: true,
    spark: "M0 14 L8 12 L16 13 L24 9 L32 10 L40 6 L48 7 L56 4",
  },
  {
    sym: "BTC",
    name: "Bitcoin",
    price: "$104,820",
    chg: "+2.41%",
    pos: true,
    spark: "M0 10 L8 11 L16 8 L24 9 L32 5 L40 6 L48 3 L56 4",
  },
  {
    sym: "VWCE",
    name: "FTSE All-World",
    price: "€132.18",
    chg: "+0.34%",
    pos: true,
    spark: "M0 12 L8 11 L16 12 L24 10 L32 11 L40 9 L48 10 L56 8",
  },
  {
    sym: "XAU",
    name: "Gold",
    price: "$2,914",
    chg: "−0.18%",
    pos: false,
    spark: "M0 8 L8 9 L16 7 L24 9 L32 10 L40 11 L48 10 L56 12",
  },
];

export function HeroChart() {
  const t = useTranslations("Chart");
  const [activeRange, setActiveRange] = React.useState(2);
  const [hasMounted, setHasMounted] = React.useState(false);

  const range = RANGE_DATA[activeRange]!;
  const points = React.useMemo(
    () => buildPoints(range.seed, range.trend, range.noise),
    [range.seed, range.trend, range.noise],
  );
  const linePath = React.useMemo(() => buildLinePath(points), [points]);
  const areaPath = React.useMemo(
    () => `${linePath} L ${W} ${H + 40} L 0 ${H + 40} Z`,
    [linePath],
  );

  const pathRef = React.useRef<SVGPathElement | null>(null);
  const [progress, setProgress] = React.useState(0);
  const [dotPos, setDotPos] = React.useState({ x: W, y: 100 });
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      return;
    }
    setProgress(0);
    let raf = 0;
    let start: number | null = null;
    const dur = hasMounted ? 700 : 1800;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeRange]);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  React.useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    let start: number | null = null;
    const dur = 1400;
    const target = 248912;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setTotal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  React.useEffect(() => {
    if (!pathRef.current) return;
    const len = pathRef.current.getTotalLength();
    const pt = pathRef.current.getPointAtLength(len * progress);
    setDotPos({ x: pt.x, y: pt.y });
  }, [progress, linePath]);

  const ranges = [
    t("range_1d"),
    t("range_1w"),
    t("range_1m"),
    t("range_1y"),
    t("range_all"),
  ];

  return (
    <div className="relative rounded-chart border border-line bg-surface p-[22px] pb-4 shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_24px_60px_-32px_rgba(15,19,17,0.18)] dark:shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_24px_60px_-32px_rgba(0,0,0,0.6)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink3">
            {t("total")}
          </div>
          <div className="mt-1.5 flex items-baseline gap-0.5 font-mono tnum">
            <span className="mr-1 text-[20px] text-ink2">€</span>
            <span className="text-[36px] font-medium tracking-[-0.02em] text-ink">
              {total.toLocaleString("en-US")}
            </span>
            <span className="text-[20px] text-ink3">.42</span>
          </div>
          <div
            className={cn(
              "mt-1 inline-flex items-center gap-1.5 text-[12px] font-medium",
              range.pos ? "text-pos" : "text-neg",
            )}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path
                d={range.pos ? "M5 1 L9 7 L1 7 Z" : "M5 9 L9 3 L1 3 Z"}
                fill="currentColor"
              />
            </svg>
            {range.changeAbs} · {range.changePct} · {t("change")}
          </div>
        </div>
        <div className="inline-flex gap-0.5 rounded-full bg-surface2 p-[3px]">
          {ranges.map((r, i) => (
            <button
              key={r}
              onClick={() => setActiveRange(i)}
              className={cn(
                "rounded-full px-2.5 py-1.5 font-mono text-[11.5px] font-medium tracking-[0.02em] transition-colors",
                i === activeRange
                  ? "bg-surface text-ink shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                  : "text-ink3 hover:text-ink2",
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="-mx-1 mt-[18px]">
        <svg
          viewBox={`0 0 ${W} ${H + 40}`}
          preserveAspectRatio="none"
          className="block h-[220px] w-full"
          role="img"
          aria-label="Portfolio value chart"
        >
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
            <clipPath id="reveal">
              <rect x="0" y="0" width={W * progress} height={H + 40} />
            </clipPath>
          </defs>
          {[0.25, 0.5, 0.75].map((g) => (
            <line
              key={g}
              x1="0"
              x2={W}
              y1={(H + 40) * g}
              y2={(H + 40) * g}
              stroke="var(--line)"
              strokeDasharray="1 4"
            />
          ))}
          <g clipPath="url(#reveal)">
            <path d={areaPath} fill="url(#areaGrad)" />
            <path
              ref={pathRef}
              d={linePath}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>
          <g style={{ opacity: progress }}>
            <circle cx={dotPos.x} cy={dotPos.y} r="10" fill="var(--accent)" opacity="0.15" />
            <circle cx={dotPos.x} cy={dotPos.y} r="4" fill="var(--accent)" />
            <circle cx={dotPos.x} cy={dotPos.y} r="2" fill="var(--bg)" />
          </g>
        </svg>
      </div>

      <div className="grid grid-cols-[1fr_1.4fr] gap-[22px] border-t border-line pt-3.5">
        <div className="min-w-0">
          <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink3">
            {t("risk")}
          </div>
          <div className="mt-2.5 grid gap-2">
            <div className="relative h-[5px] rounded-full bg-[linear-gradient(to_right,var(--accent)_0%,var(--accent)_33%,color-mix(in_oklab,var(--accent)_60%,var(--neg)_40%)_66%,var(--neg)_100%)]">
              <div
                className="absolute -top-[3px] h-[11px] w-[11px] -translate-x-1/2 rounded-full border-2 border-ink bg-surface"
                style={{ left: "42%" }}
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[22px] font-medium tracking-[-0.01em] text-ink">42</span>
              <span className="font-mono text-[11.5px] text-ink3">
                / 100 · {t("moderate")}
              </span>
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <div className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-ink3">
            {t("alloc")}
          </div>
          <Allocation />
        </div>
      </div>

      <div className="mt-3.5 flex flex-col border-t border-line">
        {TICKERS.map((tk, idx) => (
          <div
            key={tk.sym}
            className={cn(
              "grid grid-cols-[1fr_auto_auto] items-center gap-4 py-3",
              idx < TICKERS.length - 1 && "border-b border-line",
            )}
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="h-7 w-7 flex-none rounded-lg border border-line bg-surface2" />
              <div>
                <div className="text-[13px] font-medium tracking-[0.01em] text-ink">
                  {tk.sym}
                </div>
                <div className="text-[11.5px] text-ink3">{tk.name}</div>
              </div>
            </div>
            <svg width="56" height="18" viewBox="0 0 56 18" aria-hidden="true">
              <path
                d={tk.spark}
                fill="none"
                stroke={tk.pos ? "var(--pos)" : "var(--neg)"}
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-right">
              <div className="font-mono text-[13px] font-medium text-ink tnum">
                {tk.price}
              </div>
              <div
                className={cn(
                  "font-mono text-[11.5px] font-medium tnum",
                  tk.pos ? "text-pos" : "text-neg",
                )}
              >
                {tk.chg}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Allocation() {
  const t = useTranslations("Chart");
  const segs = [
    { label: t("alloc_eq"), pct: 42, color: "var(--accent)" },
    { label: t("alloc_etf"), pct: 26, color: "var(--ink)" },
    { label: t("alloc_cr"), pct: 16, color: "var(--ink2)" },
    { label: t("alloc_au"), pct: 10, color: "var(--ink3)" },
    { label: t("alloc_cash"), pct: 6, color: "var(--line-strong)" },
  ];
  return (
    <div className="mt-2.5">
      <div className="flex h-[6px] gap-[2px] overflow-hidden rounded-full bg-surface2">
        {segs.map((s, i) => (
          <div
            key={i}
            className={cn(
              i === 0 && "rounded-l-full",
              i === segs.length - 1 && "rounded-r-full",
            )}
            style={{ width: `${s.pct}%`, background: s.color }}
          />
        ))}
      </div>
      <div className="mt-2.5 flex flex-wrap gap-x-3.5 gap-y-2 text-[11.5px]">
        {segs.slice(0, 3).map((s) => (
          <div key={s.label} className="inline-flex items-center gap-1.5">
            <span
              className="h-[7px] w-[7px] rounded-full"
              style={{ background: s.color }}
            />
            <span className="text-ink2">{s.label}</span>
            <span className="font-mono font-medium text-ink tnum">{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
