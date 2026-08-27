import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none'

const sizes = {
  md: 'px-5 py-2.5 text-[0.95rem]',
  lg: 'px-6 py-3.5 text-base',
}

const variants = {
  // Primary marigold — reserved for the main action in a view.
  primary:
    'bg-marigold text-pine-900 hover:bg-marigold-deep hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(232,166,76,0.8)]',
  // Solid pine — for light backgrounds.
  pine: 'bg-pine text-cream hover:bg-pine-800 hover:-translate-y-0.5',
  // Outline on dark grounds.
  ghostDark:
    'text-cream ring-1 ring-inset ring-sage/40 hover:ring-sage/80 hover:bg-white/5',
  // Outline on light grounds.
  ghost:
    'text-ink ring-1 ring-inset ring-ink/15 hover:ring-ink/40 hover:bg-ink/[0.03]',
}

function Inner({ children, showArrow }) {
  return (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  ...props
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        <Inner showArrow={showArrow}>{children}</Inner>
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        <Inner showArrow={showArrow}>{children}</Inner>
      </a>
    )
  }
  return (
    <button className={cls} {...props}>
      <Inner showArrow={showArrow}>{children}</Inner>
    </button>
  )
}
