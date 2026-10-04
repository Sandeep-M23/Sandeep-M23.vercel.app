import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/primitives/button";
import { SectionHeading } from "@/components/primitives/section-heading";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectGrid } from "@/components/projects/project-grid";
import { featuredProjects, otherProjects, profile } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description:
    "Projects by Sandeep M, including full-stack web apps built with Next.js, GraphQL, PostgreSQL and tRPC.",
  path: "/projects",
});

export default function ProjectsPage() {
  const total = featuredProjects.length + otherProjects.length;
  return (
    <div className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24">
      <SectionHeading
        as="h1"
        eyebrow="Projects"
        title="Things I've built"
        description="Personal projects, hackathon builds and event websites. Every one is open source, so you can read the code behind it."
      />
      <Reveal delay={0.1} className="-mt-4 mb-16 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-muted">
        <span>
          <span className="text-fg">{total}</span> projects
        </span>
        <span>
          <span className="text-fg">{featuredProjects.length}</span> featured
        </span>
        <span>
          <span className="text-fg">100%</span> open source
        </span>
      </Reveal>

      <div className="space-y-24 lg:space-y-32">
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={project.title} project={project} index={i} />
        ))}
      </div>

      <section className="pt-32">
        <SectionHeading
          eyebrow="More"
          title="Other noteworthy projects"
          description="Smaller apps and hackathon builds. Filter by technology."
        />
        <ProjectGrid projects={otherProjects} />
      </section>

      <Reveal className="mt-20 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border px-6 py-12 text-center">
        <GitHubIcon className="size-8 text-muted" />
        <p className="max-w-md text-pretty text-muted">
          There&apos;s more on GitHub, including experiments and work in progress.
        </p>
        <ButtonLink href={profile.github} external variant="secondary">
          View my GitHub <ArrowUpRight className="size-4" />
        </ButtonLink>
      </Reveal>
    </div>
  );
}
