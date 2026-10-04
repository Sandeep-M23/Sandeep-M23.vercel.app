'use client';

import { ButtonLink } from '@/components/primitives/button';
import { SocialLinks } from '@/components/site-footer';
import { profile } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

// Each word slides up from behind a mask; real spaces are kept between words so copied text reads correctly.
const lines = [
  // A non-breaking space keeps "Sandeep M." together on small screens.
  { words: ['Hi,', "I'm", 'Sandeep\u00a0M.'], accent: false },
  { words: ['Full-stack', 'engineer.'], accent: true },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Entrance
        gsap
          .timeline({ defaults: { ease: 'expo.out' } })
          .fromTo(
            '[data-hero-badge]',
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.8 },
          )
          .fromTo(
            '[data-hero-word]',
            { autoAlpha: 1, yPercent: 110 },
            { yPercent: 0, duration: 1.1, stagger: 0.07 },
            0.15,
          )
          .fromTo(
            '[data-hero-fade]',
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 1, stagger: 0.12 },
            0.6,
          )
          .fromTo(
            '[data-hero-photo]',
            { autoAlpha: 0, scale: 0.9, rotation: -6 },
            { autoAlpha: 1, scale: 1, rotation: 2, duration: 1.4 },
            0.3,
          );

        // 3D tilt toward the cursor
        const tilt =
          root.current?.querySelector<HTMLElement>('[data-hero-tilt]');
        if (!tilt) return;
        gsap.set(tilt, { transformPerspective: 900 });
        const rotX = gsap.quickTo(tilt, 'rotationX', {
          duration: 0.6,
          ease: 'power3',
        });
        const rotY = gsap.quickTo(tilt, 'rotationY', {
          duration: 0.6,
          ease: 'power3',
        });
        const onMove = (e: PointerEvent) => {
          const r = tilt.getBoundingClientRect();
          rotY(((e.clientX - r.left) / r.width - 0.5) * 14);
          rotX(-((e.clientY - r.top) / r.height - 0.5) * 14);
        };
        const onLeave = () => {
          rotX(0);
          rotY(0);
        };
        tilt.addEventListener('pointermove', onMove);
        tilt.addEventListener('pointerleave', onLeave);
        return () => {
          tilt.removeEventListener('pointermove', onMove);
          tilt.removeEventListener('pointerleave', onLeave);
        };
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className='relative isolate -mt-20 flex h-dvh items-center overflow-hidden pt-20'
    >
      <div className='mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-6 sm:px-6 lg:grid-cols-[1.4fr_1fr]'>
        <div>
          {/* On small screens the large photo is replaced by an avatar so everything fits on one screen. */}
          <div data-hero-badge className='relative mb-5 size-16 overflow-hidden rounded-2xl border border-border lg:hidden'>
            <Image src={profile.photo} alt='' fill priority sizes='64px' className='object-cover object-top' />
          </div>
          <p
            data-hero-badge
            className='mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted backdrop-blur'
          >
            <MapPin className='size-3.5 text-accent' /> Based in{' '}
            {profile.location}
          </p>

          <h1 className='text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl xl:text-[4.25rem]'>
            {lines.map((line, li) => (
              <span
                key={li}
                className={`block ${line.accent ? 'text-accent' : ''}`}
              >
                {line.words.map((word, wi) => (
                  <span key={wi}>
                    <span className='inline-block overflow-hidden pb-[0.1em] align-bottom'>
                      <span data-hero-word className='inline-block'>
                        {word}
                      </span>
                    </span>
                    {wi < line.words.length - 1 && ' '}
                  </span>
                ))}
                {li < lines.length - 1 && ' '}
              </span>
            ))}
          </h1>

          <p
            data-hero-fade
            className='mt-6 max-w-xl text-lg text-pretty text-muted'
          >
            {profile.intro}
          </p>
          <div
            data-hero-fade
            className='mt-8 flex flex-wrap items-center gap-3'
          >
            <ButtonLink href='/work'>
              View my work <ArrowRight className='size-4' />
            </ButtonLink>
            <ButtonLink
              href={profile.resume}
              download='Sandeep M.pdf'
              variant='secondary'
            >
              Download resume <Download className='size-4' />
            </ButtonLink>
            <SocialLinks className='sm:ml-2' />
          </div>
        </div>

        {/* Width follows the window height too, so the photo always fits without scrolling. */}
        <div className='relative mx-auto hidden w-[min(24rem,calc((100dvh-12rem)*0.8))] lg:block'>
          <div data-hero-photo>
            <div data-hero-tilt className='relative'>
              <div className='absolute -inset-3 -z-10 rounded-4xl bg-linear-to-br from-accent/35 via-transparent to-accent/10 blur-2xl' />
              <div className='relative aspect-4/5 overflow-hidden rounded-[1.75rem] border border-border'>
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes='(min-width: 1024px) 384px, 90vw'
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
