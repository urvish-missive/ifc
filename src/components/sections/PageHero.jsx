import { motion } from 'framer-motion'
import Container from '../ui/Container'
import { fadeUp, stagger, inView } from '../../lib/motion'

// Interior-page hero on the pine ground, so the transparent header always has a
// dark surface beneath it. A faint thread rail ties back to the signature.
export default function PageHero({ eyebrow, title, sub, children, align = 'left' }) {
  const centered = align === 'center'
  return (
    <section className="relative overflow-hidden bg-pine bg-weave pt-26 text-cream">
      {/* ambient thread */}
      <div
        className="pointer-events-none absolute left-8 top-26 h-full w-px thread-line opacity-60 sm:left-12"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-marigold/10 blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="show"
          className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}
        >
          {eyebrow && (
            <motion.span
              variants={fadeUp}
              className={`eyebrow inline-flex items-center gap-2 text-marigold ${centered ? 'justify-center' : ''
                }`}
            >
              <span className="h-px w-6 bg-marigold/60" />
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            variants={fadeUp}
            className="mt-5 text-display font-semibold !text-cream"
          >
            {title}
          </motion.h1>
          {sub && (
            <motion.p
              variants={fadeUp}
              className={`mt-6 text-lg leading-relaxed text-sage-mist/85 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
                }`}
            >
              {sub}
            </motion.p>
          )}
          {children && (
            <motion.div variants={fadeUp} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
