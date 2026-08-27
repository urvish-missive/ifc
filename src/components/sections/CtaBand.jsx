import { motion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { fadeUp, stagger, inView } from '../../lib/motion'
import { brand } from '../../data/site'

// Shared closing call-to-action. Warm marigold panel on the pine ground so the
// single spark colour lands on the site's most important action.
export default function CtaBand({
  eyebrow = 'Talk to 1FC',
  title = 'When insurance gets hard, you should not be alone.',
  sub = brand.promiseLine,
  primary = { label: 'Talk to an advisor', to: '/contact' },
  secondary = { label: 'See how it works', to: '/how-it-works' },
}) {
  return (
    <section className="bg-pine px-5 py-20 sm:px-8 sm:py-24">
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-marigold px-6 py-14 sm:px-14 sm:py-16"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-marigold-soft/40 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-pine/10 blur-2xl" />
        <div className="relative max-w-2xl">
          <motion.span variants={fadeUp} className="eyebrow text-pine-800">
            {eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-title font-semibold !text-pine-900"
          >
            {title}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-pine-900/75">
            {sub}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Button to={primary.to} variant="pine" size="lg" showArrow>
              {primary.label}
            </Button>
            {secondary && (
              <Button
                to={secondary.to}
                size="lg"
                className="text-pine-900 ring-1 ring-inset ring-pine-900/25 hover:bg-pine-900/5"
              >
                {secondary.label}
              </Button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
