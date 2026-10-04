import { ExperienceTimeline } from '@/components/experience-timeline';
import { Reveal } from '@/components/motion/reveal';
import { FeatureCard } from '@/components/primitives/feature-card';
import { SectionHeading } from '@/components/primitives/section-heading';
import { earlierExperience } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { Cloud, Code2, LayoutTemplate } from 'lucide-react';

const internshipIcons = { code: Code2, cloud: Cloud, layout: LayoutTemplate };

export const metadata = pageMetadata({
  title: 'Work',
  description:
    'Work experience of Sandeep M: founding engineer at Outbox Labs and frontend developer at OpenInApp, building production SaaS systems with Node.js, Kafka and Next.js.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <div className='mx-auto max-w-4xl px-4 pt-16 sm:px-6 md:pt-24'>
      <SectionHeading
        as='h1'
        eyebrow='Experience'
        title='Building production systems, end to end'
        description='From founding-team backend infrastructure to frontend architecture used across every product.'
      />
      <ExperienceTimeline />

      <section className='pt-28'>
        <SectionHeading
          eyebrow='Earlier'
          title='Internships that got me started'
          description='Where I learned to ship real features, before going full-time.'
        />
        <div className='space-y-4'>
          {earlierExperience.map((job, i) => (
            <Reveal key={job.role + job.company} delay={i * 0.08}>
              <FeatureCard
                href={job.link}
                external
                label={job.duration ?? 'Internship'}
                icon={internshipIcons[job.icon]}
                title={job.role}
                subtitle={job.company}
                description={job.summary}
                tags={job.tags}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
