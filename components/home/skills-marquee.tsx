import { Reveal } from '@/components/motion/reveal';
import { skills } from '@/lib/data';
import { cn } from '@/lib/utils';

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className='group flex overflow-hidden py-1.5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]'>
      <ul
        className={cn(
          'animate-marquee flex w-max shrink-0 gap-3 group-hover:[animation-play-state:paused]',
          reverse && '[animation-direction:reverse]',
        )}
      >
        {[...items, ...items].map((skill, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className='whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 font-mono text-sm text-muted transition-colors hover:text-fg'
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsMarquee() {
  const all = skills.flatMap((g) => g.items);
  const half = Math.ceil(all.length / 2);
  return (
    <div aria-label='Technologies I work with'>
      <Reveal variant='left'>
        <MarqueeRow items={all.slice(0, half)} />
      </Reveal>
      <Reveal variant='right' delay={0.1}>
        <MarqueeRow items={all.slice(half)} reverse />
      </Reveal>
    </div>
  );
}
