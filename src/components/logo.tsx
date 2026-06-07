import { asset } from "@/lib/asset";

interface LogoProps {
  className?: string;
  height?: number;
}

/**
 * Logic Insight wordmark, uses the official PNG asset directly.
 * Source: client brand asset (transparent-bg PNG, 1024×204).
 */
export function Logo({ className, height = 30 }: LogoProps) {
  // Aspect of the brand asset is ~5.02
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={asset("/logo-wordmark.png")}
      alt="Logic Insight"
      className={className}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
