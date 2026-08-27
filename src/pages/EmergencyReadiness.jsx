import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info, RotateCcw, Check } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { toolsDisclaimer } from '../data/tools'

// Six yes/no readiness checks. Each maps to a concrete way 1FC helps if the
// answer is "not really" — turning a score into next steps.
const questions = [
  {
    q: 'Do you have active health insurance for your whole family?',
    help: 'A 1FC advisor can help you choose cover across health, life and general insurance.',
  },
  {
    q: 'Do you know who to call first if someone is hospitalised tonight?',
    help: 'With 1FC, you get a clear point of contact and your own customer identity.',
  },
  {
    q: 'Could you find your policy number and documents in five minutes?',
    help: 'Your 1FC profile and QR keep policy access and assistance one tap away.',
  },
  {
    q: 'Do you know whether your hospital supports cashless claims?',
    help: '1FC coordinates with hospitals, insurers and TPAs on documentation and status.',
  },
  {
    q: 'Have you kept your cover continuous — no lapsed renewals?',
    help: 'Renewal reminders and advisory from 1FC keep your cover continuous.',
  },
  {
    q: 'Would you feel confident handling a claim’s paperwork yourself?',
    help: '1FC builds the document checklist and follows up on the claim with you.',
  },
]

const bands = [
  {
    min: 5,
    label: 'Well prepared',
    tone: 'text-marigold',
    note: 'You’re in good shape. 1FC can be the safety net that keeps it that way.',
  },
  {
    min: 3,
    label: 'Partly ready',
    tone: 'text-marigold',
    note: 'A few gaps to close. Here’s where 1FC can step in.',
  },
  {
    min: 0,
    label: 'Worth a conversation',
    tone: 'text-marigold',
    note: 'A hospital day would be stressful right now. This is exactly what 1FC is built for.',
  },
]

export default function EmergencyReadiness() {
  // answers: array of true/false/undefined
  const [answers, setAnswers] = useState(Array(questions.length).fill(null))

  const answered = answers.filter((a) => a !== null).length
  const score = answers.filter((a) => a === true).length
  const done = answered === questions.length

  const band = useMemo(
    () => bands.find((b) => score >= b.min) ?? bands[bands.length - 1],
    [score],
  )
  const gaps = questions.filter((_, i) => answers[i] === false)

  const setAnswer = (i, val) =>
    setAnswers((prev) => prev.map((a, idx) => (idx === i ? val : a)))
  const reset = () => setAnswers(Array(questions.length).fill(null))

  return (
    <>
      <PageHero
        eyebrow="Tools · Beta"
        title="How ready are you for a hospital day?"
        sub="Six quick questions. No sign-up, no data stored — just an honest read on where you stand, and where 1FC can help."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            {/* Questions */}
            <div className="space-y-4">
              {/* progress */}
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-sage-mist/50">
                  <motion.div
                    className="h-full rounded-full bg-marigold"
                    animate={{ width: `${(answered / questions.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <span className="font-mono text-sm text-muted">
                  {answered}/{questions.length}
                </span>
              </div>

              {questions.map((item, i) => (
                <div key={i} className="rounded-card bg-parchment p-5 ring-hair-ink sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 font-mono text-sm text-pine-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <p className="text-[1.02rem] font-medium leading-snug text-ink">{item.q}</p>
                      <div className="mt-4 flex gap-2">
                        <Choice active={answers[i] === true} onClick={() => setAnswer(i, true)}>
                          Yes
                        </Choice>
                        <Choice
                          active={answers[i] === false}
                          tone="no"
                          onClick={() => setAnswer(i, false)}
                        >
                          Not really
                        </Choice>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Result */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="overflow-hidden rounded-[1.5rem] bg-pine p-7 text-cream sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-marigold">Your readiness</span>
                  {answered > 0 && (
                    <button
                      onClick={reset}
                      className="inline-flex items-center gap-1.5 text-xs text-sage-mist/70 transition-colors hover:text-cream"
                    >
                      <RotateCcw className="h-3.5 w-3.5" /> Reset
                    </button>
                  )}
                </div>

                <div className="mt-4 flex items-end gap-2">
                  <span className="font-display text-6xl font-semibold !text-cream">{score}</span>
                  <span className="pb-2 font-display text-2xl text-sage-mist/50">
                    / {questions.length}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={done ? band.label : 'pending'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {done ? (
                      <>
                        <p className={`mt-2 font-display text-2xl font-semibold ${band.tone}`}>
                          {band.label}
                        </p>
                        <p className="mt-2 text-[0.95rem] text-sage-mist/80">{band.note}</p>
                      </>
                    ) : (
                      <p className="mt-2 text-[0.95rem] text-sage-mist/70">
                        Answer all six to see your readiness and next steps.
                      </p>
                    )}
                  </motion.div>
                </AnimatePresence>

                {done && gaps.length > 0 && (
                  <div className="mt-6 border-t border-sage/15 pt-5">
                    <p className="eyebrow text-sage-dim">Where 1FC helps</p>
                    <ul className="mt-3 space-y-3">
                      {gaps.map((g, i) => (
                        <li key={i} className="flex gap-2.5 text-[0.9rem] text-sage-mist/85">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-marigold/20 text-marigold">
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {g.help}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button to="/contact" variant="primary" size="lg" showArrow className="mt-7 w-full">
                  Talk to a 1FC advisor
                </Button>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-sage-mist/40 p-4">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-pine-600" />
                <p className="text-[0.8rem] leading-relaxed text-muted">{toolsDisclaimer}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

function Choice({ children, active, tone = 'yes', onClick }) {
  const activeCls =
    tone === 'no' ? 'bg-ink text-cream' : 'bg-pine text-cream'
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
        active
          ? activeCls
          : 'bg-paper text-body ring-1 ring-inset ring-ink/10 hover:ring-ink/30'
      }`}
    >
      {children}
    </button>
  )
}
