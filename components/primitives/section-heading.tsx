'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
};

// On scroll into view: the eyebrow fades in, the title's words slide up from behind a mask,
// then the description follows. Real spaces are kept between words so copied text reads correctly.
export function SectionHeading({ eyebrow, title, description, as: Tag = 'h2' }: SectionHeadingProps) {
  const root = useRef<HTMLDivElement>(null);
  const words = title.split(' ');

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap
          .timeline({
            defaults: { ease: 'expo.out' },
            scrollTrigger: { trigger: root.current, start: 'top 88%', once: true },
          })
          .fromTo('[data-eyebrow]', { autoAlpha: 0, x: -16 }, { autoAlpha: 1, x: 0, duration: 0.8 })
          .fromTo('[data-word]', { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.06 }, 0.05);
        if (description) {
          tl.fromTo('[data-description]', { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.35);
        }
        gsap.set(root.current, { autoAlpha: 1 });
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(root.current, { autoAlpha: 1 });
      });
    },
    { scope: root },
  );

  return (
    <div ref={root} data-reveal className='mb-10 max-w-2xl'>
      <p data-eyebrow className='mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent'>
        {eyebrow}
      </p>
      <Tag className='text-3xl font-semibold tracking-tight text-balance sm:text-4xl'>
        {words.map((word, i) => (
          <span key={i}>
            <span className='inline-block overflow-hidden pb-[0.08em] align-bottom'>
              <span data-word className='inline-block'>
                {word}
              </span>
            </span>
            {i < words.length - 1 && ' '}
          </span>
        ))}
      </Tag>
      {description && (
        <p data-description className='mt-4 text-pretty text-muted'>
          {description}
        </p>
      )}
    </div>
  );
}
