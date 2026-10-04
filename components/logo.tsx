import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href='/'
      aria-label='Sandeep M, home'
      className='group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'
    >
      <svg viewBox='0 0 40 40' className='size-9' aria-hidden>
        <rect
          x='1.5'
          y='1.5'
          width='37'
          height='37'
          rx='10'
          className='fill-card stroke-accent'
          strokeWidth='2'
        />
        <text
          x='20'
          y='29'
          textAnchor='middle'
          className='fill-accent'
          style={{ font: "700 26px Georgia, 'Times New Roman', serif" }}
        >
          S
        </text>
      </svg>
    </Link>
  );
}
