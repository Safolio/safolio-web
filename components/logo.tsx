import { cn } from "@/lib/utils";

interface LogoProps {
  size?: number;
  mono?: boolean;
  className?: string;
  hideWordmark?: boolean;
  wordmarkClassName?: string;
}

export function Logo({
  size = 22,
  mono = false,
  className,
  hideWordmark = false,
  wordmarkClassName,
}: LogoProps) {
  const blue = mono ? "currentColor" : "var(--brand-blue)";
  const cyan = mono ? "currentColor" : "var(--brand-cyan)";
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="block"
      >
        <g transform="skewX(-8) translate(2.2 0)">
          <rect x="4" y="9" width="6" height="19" rx="1" fill={blue} />
          <rect x="12" y="15" width="6" height="13" rx="1" fill={cyan} />
          <rect x="20" y="4" width="6" height="24" rx="1" fill={blue} />
        </g>
      </svg>
      {!hideWordmark && (
        <span
          className={cn(
            "text-[18px] font-semibold tracking-[-0.015em]",
            wordmarkClassName,
          )}
        >
          Safolio
        </span>
      )}
    </div>
  );
}
