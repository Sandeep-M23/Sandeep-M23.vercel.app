"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/primitives/badge";
import { Reveal } from "@/components/motion/reveal";
import { experience } from "@/lib/data";

export function ExperienceTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative space-y-14 pl-8 sm:pl-12">
      <div aria-hidden className="absolute bottom-0 left-[7px] top-2 w-px bg-border sm:left-[11px]" />
      <motion.div
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-accent sm:left-[11px]"
      />
      {experience.map((job) => (
        <li key={job.company} className="relative">
          <span
            aria-hidden
            className="absolute -left-8 top-1.5 grid size-4 place-items-center rounded-full border border-accent bg-bg sm:-left-12 sm:size-6"
          >
            <span className="size-1.5 rounded-full bg-accent sm:size-2" />
          </span>
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {job.role}{" "}
                <a
                  href={job.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center text-accent hover:underline"
                >
                  @ {job.company}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </h3>
              <p className="font-mono text-xs text-muted">
                {job.duration} · {job.location}
              </p>
            </div>
            <ul className="mt-5 space-y-3">
              {job.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-pretty text-muted">
                  <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
