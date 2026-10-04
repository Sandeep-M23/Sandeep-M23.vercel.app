"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, FileText } from "lucide-react";
import { Logo } from "@/components/logo";
import { SocialLinks } from "@/components/site-footer";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span aria-hidden className="relative block h-3 w-4">
      <span
        className={cn(
          "absolute left-0 h-0.5 w-4 rounded-full bg-current transition-all duration-300",
          open ? "top-1.5 rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 h-0.5 w-4 rounded-full bg-current transition-all duration-300",
          open ? "top-1.5 -rotate-45" : "top-2.5",
        )}
      />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Switch to the floating glass bar once the page is scrolled.
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={cn(
            "mx-auto flex h-14 items-center justify-between gap-4 rounded-full border pl-4 pr-2 backdrop-blur-xl transition-all duration-500",
            scrolled || open
              ? "max-w-4xl border-border bg-card/80 shadow-lg shadow-black/10"
              : "max-w-6xl border-transparent bg-transparent",
          )}
        >
          <Logo />

          <nav aria-label="Main" className="hidden md:block" onMouseLeave={() => setHovered(null)}>
            <ul className="flex items-center">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={() => setHovered(link.href)}
                      className={cn(
                        "relative block px-4 py-2 text-sm transition-colors",
                        active ? "text-accent" : "text-muted hover:text-fg",
                      )}
                    >
                      {hovered === link.href && (
                        <motion.span
                          layoutId="nav-hover"
                          className="absolute inset-0 rounded-full bg-fg/[0.06]"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                        />
                      )}
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download="Sandeep M.pdf"
              className="hidden h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium text-white transition hover:brightness-110 sm:inline-flex"
            >
              Resume <FileText className="size-4" />
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-full border border-border bg-card text-fg md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col bg-bg/95 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between border-b border-border py-4 text-3xl font-semibold tracking-tight",
                        isActive(link.href) ? "text-accent" : "text-fg",
                      )}
                    >
                      {link.label}
                      <ArrowUpRight className="size-5 text-muted" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-auto flex items-center justify-between gap-4"
            >
              <a
                href={profile.resume}
                download="Sandeep M.pdf"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-medium text-white"
              >
                Resume <FileText className="size-4" />
              </a>
              <SocialLinks />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
