"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

// Grid of projects with technology filter chips; cards reflow with a layout animation.
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const filters = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)));
    const shared = [...counts].filter(([, n]) => n > 1).sort((a, b) => b[1] - a[1]).map(([t]) => t);
    return ["All", ...shared];
  }, [projects]);
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <>
      <div role="group" aria-label="Filter projects by technology" className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "relative rounded-full border px-4 py-1.5 text-sm transition-colors",
              active === filter ? "border-accent/40 text-fg" : "border-border text-muted hover:text-fg",
            )}
          >
            {active === filter && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-accent-soft"
                transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
              />
            )}
            <span className="relative">{filter}</span>
          </button>
        ))}
      </div>
      <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
