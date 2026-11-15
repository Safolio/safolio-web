import Image from "next/image";
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
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/logo.png"
        alt=""
        width={353}
        height={371}
        priority
        sizes={`${size}px`}
        style={{
          height: size,
          width: "auto",
          filter: mono ? "brightness(0) invert(1)" : undefined,
        }}
      />
      {!hideWordmark && (
        <span className={cn("text-[18px] font-semibold tracking-[-0.015em]", wordmarkClassName)}>
          Safolio
        </span>
      )}
    </div>
  );
}
