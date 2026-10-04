'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

// Pure reds with almost no green channel, so the blurred glow never drifts toward orange or brown.
const blobs = [
  'left-[0%] -top-48 size-[34rem] bg-[rgb(220_0_40/0.16)]',
  'right-[-5%] -top-24 size-[30rem] bg-[rgb(120_0_16/0.3)]',
  'left-[30%] top-56 size-[24rem] bg-[rgb(180_0_30/0.1)]',
];

// Crimson and dark-red glows drifting on near-black, leaning toward the cursor.
// With `fixed`, it sits behind the whole site and stays put while pages scroll over it.
export function RedAurora({ fixed = false }: { fixed?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const field = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('[data-blob]').forEach((blob) => {
          gsap.to(blob, {
            x: 'random(-140, 140)',
            y: 'random(-80, 80)',
            scale: 'random(0.85, 1.25)',
            duration: 'random(9, 15)',
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
            repeatRefresh: true,
          });
        });
        const xTo = gsap.quickTo(field.current, 'x', { duration: 1.6, ease: 'power3' });
        const yTo = gsap.quickTo(field.current, 'y', { duration: 1.6, ease: 'power3' });
        const onMove = (e: PointerEvent) => {
          xTo((e.clientX / window.innerWidth - 0.5) * 60);
          yTo((e.clientY / window.innerHeight - 0.5) * 40);
        };
        window.addEventListener('pointermove', onMove);
        return () => window.removeEventListener('pointermove', onMove);
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden
      className={`pointer-events-none inset-0 -z-10 overflow-hidden dark:bg-black ${fixed ? 'fixed' : 'absolute'}`}
    >
      <div ref={field} className='absolute inset-0'>
        {blobs.map((classes) => (
          <div key={classes} data-blob className={`absolute rounded-full blur-[110px] ${classes}`} />
        ))}
      </div>
      {/* Deep vignette keeps the glow subtle and the edges black. */}
      <div className='absolute inset-0 bg-radial from-transparent from-25% to-bg/90 dark:to-black/90' />
      {!fixed && <div className='absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-bg' />}
    </div>
  );
}
