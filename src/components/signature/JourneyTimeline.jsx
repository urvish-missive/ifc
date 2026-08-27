import { motion } from 'framer-motion'
import { journeyStages } from '../../data/journey'
import { fadeUp, stagger, inView } from '../../lib/motion'

// The signature timeline. A single continuous thread runs down the spine and
// connects all seven stages; stages 4 and 5 (hospitalisation, claim) pulse in
// marigold — the moments where 1FC's value spikes. Designed for a dark ground.
export default function JourneyTimeline({ stages = journeyStages }) {
  return (
    <motion.ol
      variants={stagger(0.09)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className="relative"
    >
      {/* the continuous thread */}
      <div
        className="pointer-events-none absolute bottom-6 left-[27px] top-6 w-px thread-line"
        aria-hidden="true"
      />

      {stages.map((s) => {
        const Icon = s.icon
        return (
          <motion.li
            key={s.n}
            variants={fadeUp}
            className="relative flex gap-5 pb-10 last:pb-0 sm:gap-6"
          >
            {/* node on the thread */}
            <div className="relative z-10 flex w-14 shrink-0 justify-center">
              <span
                className={`grid h-14 w-14 place-items-center rounded-full ring-1 ring-inset transition-colors ${
                  s.pulse
                    ? 'bg-marigold/15 text-marigold ring-marigold/50 pulse-node'
                    : 'bg-pine-700 text-cream ring-sage/25'
                }`}
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
            </div>

            {/* content */}
            <div className="min-w-0 flex-1 pt-1.5">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="eyebrow text-sage-dim">
                  Stage {String(s.n).padStart(2, '0')}
                </span>
                {s.pulse && (
                  <span className="eyebrow rounded-full bg-marigold/15 px-2.5 py-0.5 !tracking-widest text-marigold">
                    When it matters
                  </span>
                )}
              </div>
              <h3 className="mt-1.5 font-display text-xl font-semibold !text-cream sm:text-2xl">
                {s.phase}
              </h3>
              <p className="mt-1 text-[0.97rem] text-sage-mist/70">{s.need}</p>
              <p className="mt-2 inline-flex items-center gap-2 text-[0.95rem] font-medium text-cream/90">
                <span className="text-marigold">1FC</span>
                <span className="h-px w-4 bg-sage/40" />
                {s.role}
              </p>
            </div>
          </motion.li>
        )
      })}
    </motion.ol>
  )
}
