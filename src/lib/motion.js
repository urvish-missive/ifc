// Shared Framer Motion variants. Components pair these with useReducedMotion()
// so that motion is an enhancement, never a requirement.

export const easeSoft = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSoft },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeSoft } },
}

export const stagger = (gap = 0.08, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
})

// Standard viewport trigger for whileInView usage.
export const inView = { once: true, amount: 0.3, margin: '0px 0px -10% 0px' }
