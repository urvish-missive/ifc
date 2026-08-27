// A rounded icon tile. `tone` adapts it to light or dark grounds.
export default function IconBadge({ icon: Icon, tone = 'light', className = '' }) {
  const tones = {
    light: 'bg-pine/8 text-pine ring-1 ring-inset ring-pine/10',
    dark: 'bg-cream/8 text-marigold ring-1 ring-inset ring-sage/25',
    marigold: 'bg-marigold/15 text-marigold-deep ring-1 ring-inset ring-marigold/30',
    sage: 'bg-sage-mist text-pine-700',
  }
  return (
    <span
      className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tones[tone]} ${className}`}
    >
      <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} aria-hidden="true" />
    </span>
  )
}
