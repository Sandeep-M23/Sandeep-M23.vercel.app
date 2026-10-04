import Link from 'next/link';
import type { ComponentType, ReactNode } from 'react';
import { Badge } from '@/components/primitives/badge';
import { cn } from '@/lib/utils';

type FeatureCardProps = {
  title: ReactNode;
  /** Small mono label at the top left; a number is zero-padded ("01"). */
  label?: number | string;
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>;
  /** Replaces the icon tile at the top right (e.g. links or a score). */
  aside?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  tags?: string[];
  /** Edge-to-edge content above the card body, such as a screenshot. */
  media?: ReactNode;
  href?: string;
  external?: boolean;
  className?: string;
  children?: ReactNode;
};

// The site's standard card: label + icon header, large title, description, tags,
// and a red accent bar that slides in on hover.
export function FeatureCard({
  title,
  label,
  icon: Icon,
  aside,
  subtitle,
  description,
  tags,
  media,
  href,
  external,
  className,
  children,
}: FeatureCardProps) {
  const shell = cn(
    'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-300 hover:border-accent/40 focus-visible:border-accent/40 focus-visible:outline-none',
    className,
  );
  const header = label !== undefined || Icon || aside;

  const body = (
    <>
      <span
        aria-hidden
        className='absolute bottom-8 left-0 z-10 h-16 w-1 origin-top scale-y-0 rounded-r-full bg-accent transition-transform duration-500 group-hover:scale-y-100 group-focus-visible:scale-y-100'
      />
      {media}
      <div className='flex flex-1 flex-col p-7 sm:p-8'>
        {header && (
          <div className='mb-6 flex items-start justify-between gap-6'>
            <span className='font-mono text-sm text-accent'>
              {typeof label === 'number' ? String(label).padStart(2, '0') : label}
            </span>
            {aside ??
              (Icon && (
                <span className='grid size-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent'>
                  <Icon className='size-6' strokeWidth={1.5} />
                </span>
              ))}
          </div>
        )}
        <h3 className='text-xl font-semibold tracking-tight text-balance sm:text-2xl'>{title}</h3>
        {subtitle && <p className='mt-1.5 text-sm text-muted'>{subtitle}</p>}
        {description && <p className='mt-3 flex-1 text-pretty text-muted'>{description}</p>}
        {children}
        {tags && tags.length > 0 && (
          <div className='mt-6 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </div>
    </>
  );

  if (href && external) {
    return (
      <a href={href} target='_blank' rel='noreferrer' className={shell}>
        {body}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={shell}>
        {body}
      </Link>
    );
  }
  return <div className={shell}>{body}</div>;
}
