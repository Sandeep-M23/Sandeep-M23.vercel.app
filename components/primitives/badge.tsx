import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card px-2.5 py-0.5 font-mono text-[11px] tracking-tight text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
