import { useReducedMotion } from 'framer-motion'

// Continuous marquee for the assurances strip. Duplicates its content so the
// -50% translate loops seamlessly. Pauses on hover; static when reduced-motion.
export default function Marquee({ items, className = '' }) {
  const reduce = useReducedMotion()
  const content = [...items, ...items]

  if (reduce) {
    return (
      <div className={`flex flex-wrap justify-center gap-x-8 gap-y-3 ${className}`}>
        {items.map((it, i) => (
          <Item key={i} label={it} />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className="marquee-track flex shrink-0 items-center gap-x-8 pr-8 group-hover:[animation-play-state:paused]">
        {content.map((it, i) => (
          <Item key={i} label={it} />
        ))}
      </div>
    </div>
  )
}

function Item({ label }) {
  return (
    <span className="flex shrink-0 items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-marigold" aria-hidden="true" />
      <span className="whitespace-nowrap text-sm font-medium text-sage-mist/80">
        {label}
      </span>
    </span>
  )
}
