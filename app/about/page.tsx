import { Reveal } from '@/components/motion/reveal';
import { ButtonLink } from '@/components/primitives/button';
import { FeatureCard } from '@/components/primitives/feature-card';
import { SectionHeading } from '@/components/primitives/section-heading';
import { education, journey, profile, skills } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';
import { ArrowRight, Download, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export const metadata = pageMetadata({
  title: 'About',
  description:
    'About Sandeep M: a full-stack engineer in Bengaluru and founding engineer at Outbox Labs. Background, skills, education and journey.',
  path: '/about',
});

// The degree is featured on its own; its grade ("CGPA 8.21") is shown as a large score.
const [degree, ...schooling] = education;
const [degreeScale, degreeScore] = degree.grade.split(' ');

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24'>
      {/* Intro */}
      <div className='grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]'>
        <div>
          <SectionHeading
            as='h1'
            eyebrow='About me'
            title="Hi, I'm Sandeep. I love building things end to end."
          />
          <Reveal
            delay={0.1}
            className='space-y-5 text-lg text-pretty text-muted'
          >
            <p>
              I&apos;m a{' '}
              <span className='text-fg'>
                full-stack engineer from Bengaluru
              </span>
              . My journey started in college at JSS Academy of Technical
              Education, making small web apps with HTML, CSS and JavaScript.
              That curiosity grew into the MERN stack, full-stack side projects
              and a habit of sharpening my problem solving on LeetCode.
            </p>
            <p>
              Hackathons and internships taught me to ship. I built the official
              websites for <span className='text-fg'>Hackwell</span>,
              JSSATE&apos;s hackathon with Honeywell, built a site in a 24-hour
              UI hackathon, and interned as a frontend developer at Project42
              Labs and in public cloud at Getronics.
            </p>
            <p>
              After a frontend role at OpenInApp, I joined{' '}
              <span className='text-fg'>
                Outbox Labs as a founding engineer
              </span>
              , where I&apos;ve worked across the whole stack: backend services,
              third-party integrations and the frontend architecture our
              products are built on.
            </p>
            <p>
              I&apos;m a learner at heart who enjoys picking up new
              technologies. I like owning problems from start to finish, with a
              focus on clean system design, reliability and performance.
            </p>
          </Reveal>
          <Reveal delay={0.2} className='mt-8 flex flex-wrap gap-3'>
            <ButtonLink href={profile.resume} download='Sandeep M.pdf'>
              Download resume <Download className='size-4' />
            </ButtonLink>
            <ButtonLink href='/contact' variant='secondary'>
              Get in touch <ArrowRight className='size-4' />
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={0.15} className='mx-auto w-full max-w-sm lg:mt-6'>
          <div className='relative aspect-[4/5] overflow-hidden rounded-3xl border border-border'>
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes='(min-width: 1024px) 384px, 90vw'
              className='object-cover'
            />
          </div>
        </Reveal>
      </div>

      {/* Journey */}
      <section className='pt-28'>
        <SectionHeading eyebrow='Journey' title='How I got here' />
        <ol className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {journey.map((step, i) => (
            <li key={step.year}>
              <Reveal delay={i * 0.08} className='h-full'>
                <FeatureCard
                  label={step.year}
                  title={step.title}
                  description={step.description}
                />
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className='pt-28'>
        <SectionHeading
          eyebrow='Skills'
          title='Languages & technologies'
          description='The tools I use day to day to design, build and run production systems.'
        />
        <div className='overflow-hidden rounded-3xl border border-border bg-card'>
          {skills.map((group, i) => (
            <Reveal
              key={group.group}
              delay={i * 0.06}
              className='grid gap-4 border-b border-border p-6 transition-colors last:border-b-0 hover:bg-accent-soft md:grid-cols-[240px_1fr] md:items-center md:p-8'
            >
              <div className='flex items-baseline gap-3'>
                <span className='font-mono text-xs text-accent'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className='text-lg font-semibold tracking-tight'>
                  {group.group}
                </h3>
                <span className='font-mono text-xs text-muted'>
                  {group.items.length}
                </span>
              </div>
              <ul className='flex flex-wrap gap-2'>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className='rounded-full border border-border bg-bg px-3.5 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className='pt-28'>
        <SectionHeading eyebrow='Education' title='Where I studied' />
        <div className='grid gap-4 lg:grid-cols-[1.4fr_1fr]'>
          <Reveal className='h-full'>
            <FeatureCard
              label={`Degree · ${degree.year}`}
              icon={GraduationCap}
              title={degree.course}
              subtitle={degree.institution}
            >
              <div className='mt-auto pt-10'>
                <div className='flex items-baseline gap-3 border-t border-border pt-6'>
                  <span className='text-5xl font-semibold tracking-tight'>
                    {degreeScore}
                  </span>
                  <span className='text-sm text-muted'>{degreeScale}</span>
                </div>
              </div>
            </FeatureCard>
          </Reveal>
          <div className='grid gap-4'>
            {schooling.map((item, i) => (
              <Reveal
                key={item.course}
                delay={0.08 + i * 0.08}
                className='h-full'
              >
                <FeatureCard
                  label={item.year}
                  aside={
                    <span className='text-2xl font-semibold tracking-tight text-accent'>
                      {item.grade}
                    </span>
                  }
                  title={item.course}
                  subtitle={item.institution}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
