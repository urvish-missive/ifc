import { Link } from 'react-router-dom'

// The 1FC Insure lockup: a rounded chip holding the "thread + pulse" glyph
// (the site's signature), beside the wordmark. Adapts to light/dark grounds.
export default function Logo({ tone = 'dark', className = '', to = '/' }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center ${className}`}
      aria-label="1FC Insure — home"
    >
      <img
        src="/brand/new1fcLogo.webp"
        alt="1FC Insure"
        className="h-[34px] w-auto block object-contain"
      />
    </Link>
  )
}
