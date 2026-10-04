import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          aria-label={label}
          className="grid size-10 place-items-center rounded-full border border-border bg-card text-muted transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
        >
          <Icon className="size-4" />
        </a>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
