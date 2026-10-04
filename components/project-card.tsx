import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { FeatureCard } from "@/components/primitives/feature-card";
import type { Project } from "@/lib/data";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-1">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} source code`}
        className="grid size-10 place-items-center rounded-2xl bg-accent-soft text-accent transition-colors hover:bg-accent hover:text-white"
      >
        <GitHubIcon className="size-4" />
      </a>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} live site`}
          className="grid size-10 place-items-center rounded-2xl bg-accent-soft text-accent transition-colors hover:bg-accent hover:text-white"
        >
          <ArrowUpRight className="size-4" />
        </a>
      )}
    </div>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <FeatureCard
      label={project.category}
      aside={<ProjectLinks project={project} />}
      title={project.title}
      description={project.description}
      tags={project.tags}
      media={
        project.image && (
          <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        )
      }
    />
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <FeatureCard
      label={project.category}
      aside={<ProjectLinks project={project} />}
      title={project.title}
      description={project.description}
      tags={project.tags}
    />
  );
}
