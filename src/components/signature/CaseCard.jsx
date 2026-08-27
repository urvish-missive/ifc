import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { easeSoft } from '../../lib/motion'

const steps = [
  { label: 'Advisory & policy', meta: 'Health', done: true },
  { label: '1FC ID + QR issued', meta: null, done: true },
  { label: 'Hospital coordination', meta: 'Network', done: true },
  { label: 'Documents collected', meta: '6 / 6', done: true },
  { label: 'Claim submitted', meta: 'In progress', done: false, active: true },
]

// A concrete embodiment of the proposition: a customer's case, still being
// looked after well after the policy was sold. Illustrative, not a live feed.
export default function CaseCard({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.9, ease: easeSoft, delay: 0.2 }}
      className={`w-full max-w-sm rounded-[1.75rem] bg-paper p-6 shadow-[0_40px_80px_-30px_rgba(7,36,33,0.65)] ring-1 ring-black/5 ${className}`}
    >
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-pine text-cream">
            <svg width="18" height="18" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path
                d="M5 22 H16 L19 22 L22 12 L26 29 L29 22 H35"
                stroke="#F4F1E6"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="leading-tight">
            <p className="eyebrow text-pine-600">1FC Case</p>
            <p className="font-mono text-sm font-medium text-ink">#IN-2481</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-marigold/15 px-3 py-1 text-xs font-semibold text-marigold-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-marigold" />
          Active
        </span>
      </div>

      <div className="my-5 h-px bg-ink/8" />

      {/* mini thread of steps */}
      <ol className="relative">
        {steps.map((s, i) => {
          const last = i === steps.length - 1
          return (
            <li key={s.label} className="relative flex gap-3.5 pb-4 last:pb-0">
              {!last && (
                <span
                  className="absolute left-[11px] top-6 h-[calc(100%-1rem)] w-px bg-ink/10"
                  aria-hidden="true"
                />
              )}
              <span
                className={`relative z-10 mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full ${
                  s.active
                    ? 'bg-marigold/20 ring-1 ring-marigold pulse-node'
                    : 'bg-pine text-cream'
                }`}
              >
                {s.active ? (
                  <span className="h-2 w-2 rounded-full bg-marigold" />
                ) : (
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                )}
              </span>
              <div className="flex flex-1 items-center justify-between">
                <span
                  className={`text-[0.95rem] ${
                    s.active ? 'font-semibold text-ink' : 'text-body'
                  }`}
                >
                  {s.label}
                </span>
                {s.meta && (
                  <span
                    className={`font-mono text-xs ${
                      s.active ? 'text-marigold-deep' : 'text-muted'
                    }`}
                  >
                    {s.meta}
                  </span>
                )}
              </div>
            </li>
          )
        })}
      </ol>

      <div className="mt-5 flex items-center gap-2.5 rounded-2xl bg-sage-mist/50 px-4 py-3">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-pine text-[0.7rem] font-semibold text-cream">
          1FC
        </span>
        <p className="text-[0.8rem] leading-tight text-pine-700">
          Coordinated by your 1FC team.
          <br />
          <span className="text-muted">Renewal reminder set · Mar 2027</span>
        </p>
      </div>
    </motion.div>
  )
}
