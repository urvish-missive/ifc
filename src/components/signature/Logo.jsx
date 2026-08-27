import { Link } from 'react-router-dom'

// The 1FC Insure lockup: a rounded chip holding the "thread + pulse" glyph
// (the site's signature), beside the wordmark. Adapts to light/dark grounds.
export default function Logo({ tone = 'dark', className = '', to = '/' }) {
  const onDark = tone === 'dark'
  const word = onDark ? 'text-cream' : 'text-ink'
  const chip = onDark
    ? 'bg-cream/10 ring-1 ring-inset ring-sage/30'
    : 'bg-pine ring-1 ring-inset ring-pine/10'
  const stroke = onDark ? '#F4F1E6' : '#F4F1E6'

  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="1FC Insure — home"
    >
      <span
        className={`grid h-9 w-9 place-items-center rounded-xl transition-colors ${chip}`}
      >
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" aria-hidden="true">
          <path
            d="M5 22 H14 L17 22 L20 11 L24 30 L27 22 L31 22 H36"
            stroke={stroke}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="24"
            cy="30"
            r="2.4"
            fill="#E8A64C"
            className="transition-transform duration-300 group-hover:scale-125"
          />
        </svg>
      </span>
      <span className={`font-display text-[1.22rem] font-semibold tracking-tight ${word}`}>
        1FC<span className="font-normal"> Insure</span>
      </span>
    </Link>
  )
}
