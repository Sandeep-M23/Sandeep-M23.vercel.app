import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-accent text-white shadow-[0_8px_24px_-8px_var(--accent)] hover:brightness-110",
  secondary: "border border-border bg-card text-fg hover:border-muted/60",
  ghost: "text-muted hover:bg-accent-soft hover:text-fg",
};

type ButtonLinkProps = {
  href: string;
  variant?: keyof typeof variants;
  external?: boolean;
  download?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export const buttonClass = (variant: keyof typeof variants = "primary", className?: string) =>
  cn(
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-200 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className,
  );

export function ButtonLink({ href, variant, external, download, className, children, ...rest }: ButtonLinkProps) {
  const classes = buttonClass(variant, className);
  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
