'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// A thin red bar along the top of the window that fills as the page scrolls.
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: document.documentElement, start: 0, end: 'max', scrub: 0.3 },
        },
      );
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div
      ref={bar}
      aria-hidden
      className='fixed inset-x-0 top-0 z-[70] h-0.5 origin-left scale-x-0 bg-accent shadow-[0_0_10px_rgb(220_0_40/0.7)]'
    />
  );
}
