import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/primitives/badge";
import { ButtonLink } from "@/components/primitives/button";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

// A browser-window frame; hovering slowly scrolls through the full-page screenshot.
function BrowserPreview({ project }: { project: Project }) {
  const host = project.link ? new URL(project.link).host : "github.com";
  return (
    <a
      href={project.link || project.github}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title}`}
      className="group/preview block overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/20 transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 truncate rounded-md bg-bg px-3 py-1 text-center font-mono text-[11px] text-muted">
          {host}
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top transition-[object-position] duration-[4000ms] ease-in-out group-hover/preview:object-bottom motion-reduce:transition-none"
          />
        )}
      </div>
    </a>
  );
}

export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <article className="grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
      <Reveal variant="clip" className={cn(flipped && "lg:order-2")}>
        <BrowserPreview project={project} />
      </Reveal>
      <Reveal delay={0.15} variant={flipped ? "left" : "right"} className={cn(flipped && "lg:order-1")}>
        <p className="font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")} · {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</h3>
        <p className="mt-3 text-pretty text-muted">{project.description}</p>
        {project.features && (
          <ul className="mt-5 space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {project.link && (
            <ButtonLink href={project.link} external>
              Live site <ArrowUpRight className="size-4" />
            </ButtonLink>
          )}
          <ButtonLink href={project.github} external variant="secondary">
            <GitHubIcon className="size-4" /> Source code
          </ButtonLink>
        </div>
      </Reveal>
    </article>
  );
}
