import { motion, useReducedMotion } from 'framer-motion'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Marquee from '../ui/Marquee'
import CaseCard from '../signature/CaseCard'
import { fadeUp, stagger } from '../../lib/motion'
import { brand } from '../../data/site'
import { assurances } from '../../data/journey'

export default function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-pine bg-weave pt-26 text-cream">
      {/* ambient light + the continuous thread down the left */}
      <div className="pointer-events-none absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-pine-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-marigold/10 blur-[100px]" />
      <div
        className="pointer-events-none absolute left-8 top-[68px] h-full w-px thread-line sm:left-12"
        aria-hidden="true"
      />

      <Container wide className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-28">
          {/* Left — the thesis */}
          <motion.div variants={stagger(0.12)} initial="hidden" animate="show">
            <motion.span
              variants={fadeUp}
              className="eyebrow inline-flex items-center gap-2.5 rounded-full bg-white/5 px-3.5 py-1.5 text-marigold ring-1 ring-inset ring-sage/20"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-marigold pulse-node" />
              Service-first insurance
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-hero font-semibold !text-cream"
            >
              Insurance that stays
              <br className="hidden sm:block" /> with you{' '}
              <span className="relative whitespace-nowrap text-marigold">
                beyond the policy
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7 Q 80 2 150 6 T 298 4"
                    stroke="#E8A64C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className={reduce ? '' : 'thread-draw'}
                    style={{ '--dash': 320 }}
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-lg leading-relaxed text-sage-mist/85"
            >
              1FC Insure brings advisory, hospitalisation support, claim coordination and
              renewals into one dependable relationship — so someone is with you on the days
              insurance is hardest to use.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 font-display text-lg text-marigold/90">
              {brand.taglineHi}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Talk to an advisor
              </Button>
              <Button to="/how-it-works" variant="ghostDark" size="lg">
                See how it works
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — the product made concrete */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex justify-center lg:justify-end"
          >
            <CaseCard />
          </motion.div>
        </div>
      </Container>

      {/* assurances strip */}
      <div className="relative border-t border-sage/12 py-5">
        <Marquee items={assurances} />
      </div>
    </section>
  )
}
