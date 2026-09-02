const MASCOT_IMAGES = {
  hero: '/art/mascot-hero.webp',
  desk: '/art/mascot-hero.webp',
  human: '/art/mascot-human.webp',
  cta: '/art/mascot-cta.webp',
  trust: '/art/mascot-human.webp',
}

export default function MascotIllustration({ variant = 'hero', className = '' }) {
  const src = MASCOT_IMAGES[variant] || MASCOT_IMAGES.hero
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={`w-auto ${className}`}
      loading="lazy"
    />
  )
}
