import { motion } from 'framer-motion'
import { ecosystem } from '../../data/journey'
import { fadeUp, stagger, inView } from '../../lib/motion'

// CUSTOMER ↔ 1FC ↔ HOSPITAL / INSURER / TPA.
// 1FC sits in the middle as the coordinating layer — the whole point of the
// business — so it gets the visual weight and the marigold ring.
export default function Ecosystem() {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className="relative"
    >
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1.15fr_auto_1fr]">
        {/* You */}
        <motion.div variants={fadeUp} className="flex">
          <Card title={ecosystem.left.label} sub={ecosystem.left.sub} />
        </motion.div>

        <Connector />

        {/* 1FC — the coordinating layer */}
        <motion.div variants={fadeUp} className="flex">
          <div className="relative flex w-full flex-col items-center justify-center rounded-[1.5rem] bg-pine px-6 py-8 text-center text-cream ring-1 ring-marigold/40 glow-marigold">
            <span className="eyebrow text-marigold">Coordinating layer</span>
            <p className="mt-2 font-display text-2xl font-semibold text-cream">
              {ecosystem.center.label}
            </p>
            <p className="mt-1 text-sm text-sage-mist/75">{ecosystem.center.sub}</p>
          </div>
        </motion.div>

        <Connector />

        {/* Formal ecosystem */}
        <motion.div variants={fadeUp} className="flex flex-col gap-3">
          {ecosystem.right.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.label}
                className="flex flex-1 items-center gap-3 rounded-2xl bg-paper px-5 py-4 ring-hair-ink"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sage-mist/60 text-pine-700">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="font-display text-lg font-semibold text-ink">{r.label}</span>
              </div>
            )
          })}
        </motion.div>
      </div>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-8 max-w-2xl text-center text-[0.95rem] leading-relaxed text-muted"
      >
        {ecosystem.note}
      </motion.p>
    </motion.div>
  )
}

function Card({ title, sub }) {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-[1.5rem] bg-paper px-6 py-8 text-center ring-hair-ink">
      <p className="font-display text-2xl font-semibold text-ink">{title}</p>
      <p className="mt-1 text-sm text-muted">{sub}</p>
    </div>
  )
}

// Directional connector — horizontal on desktop, vertical on mobile.
function Connector() {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center justify-center py-1 md:py-0"
      aria-hidden="true"
    >
      <span className="hidden h-px w-8 bg-gradient-to-r from-sage-dim/30 via-sage-dim to-sage-dim/30 md:block" />
      <span className="h-6 w-px bg-sage-dim/50 md:hidden" />
    </motion.div>
  )
}
