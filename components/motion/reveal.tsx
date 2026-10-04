'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Variant = 'up' | 'scale' | 'left' | 'right' | 'clip';

// Start and end states per variant; each only animates the properties it needs.
const variants: Record<Variant, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
  up: { from: { y: 48, filter: 'blur(6px)' }, to: { y: 0, filter: 'blur(0px)' } },
  scale: { from: { y: 32, scale: 0.92 }, to: { y: 0, scale: 1 } },
  left: { from: { x: -80 }, to: { x: 0 } },
  right: { from: { x: 80 }, to: { x: 0 } },
  clip: {
    from: { clipPath: 'inset(14% 10% 14% 10% round 28px)', scale: 1.06 },
    to: { clipPath: 'inset(0% 0% 0% 0% round 28px)', scale: 1 },
  },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
};

// Animates content into place the first time it scrolls into view (GSAP ScrollTrigger).
// Elements start hidden via CSS ([data-reveal]) so nothing flashes before the animation runs.
export function Reveal({ children, className, delay = 0, variant = 'up' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, ...variants[variant].from },
          {
            autoAlpha: 1,
            ...variants[variant].to,
            duration: variant === 'clip' ? 1.3 : 1,
            delay,
            ease: 'expo.out',
            clearProps: 'filter,clipPath',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        );
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(el, { autoAlpha: 1 });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} data-reveal className={className}>
      {children}
    </div>
  );
}
