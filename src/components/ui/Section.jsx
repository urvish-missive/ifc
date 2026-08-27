// Consistent vertical rhythm + ground tones. Uses utility classes only, so no
// selector-specificity clashes between sections.
export default function Section({
  children,
  className = '',
  tone = 'light',
  weave = false,
  id,
}) {
  const grounds = {
    light: 'bg-paper text-body',
    parchment: 'bg-parchment text-body',
    sage: 'bg-sage-mist/40 text-body',
    dark: 'bg-pine text-cream',
    deep: 'bg-pine-900 text-cream',
  }
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 ${grounds[tone]} ${weave ? 'bg-weave' : ''} ${className}`}
    >
      {children}
    </section>
  )
}
