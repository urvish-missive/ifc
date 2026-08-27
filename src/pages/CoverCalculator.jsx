import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Info, ArrowRight } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { toolsDisclaimer } from '../data/tools'

const cityTiers = [
  { id: 'metro', label: 'Metro (Tier 1)', base: 10 },
  { id: 'tier2', label: 'Tier 2 city', base: 7 },
  { id: 'tier3', label: 'Tier 3 / town', base: 5 },
]

const ageBands = [
  { id: 'under35', label: 'Under 35', load: 1 },
  { id: '35to45', label: '35 – 45', load: 1.2 },
  { id: '45to60', label: '45 – 60', load: 1.6 },
  { id: 'over60', label: 'Over 60', load: 2.2 },
]

function lakhs(n) {
  return `₹${n.toFixed(n % 1 === 0 ? 0 : 1)}L`
}

export default function CoverCalculator() {
  const [city, setCity] = useState('metro')
  const [ageBand, setAgeBand] = useState('35to45')
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(1)
  const [existing, setExisting] = useState('')

  const result = useMemo(() => {
    const base = cityTiers.find((c) => c.id === city).base
    const load = ageBands.find((a) => a.id === ageBand).load
    const familyFactor = 1 + Math.max(0, adults - 1) * 0.6 + children * 0.3
    const low = Math.round(base * load * familyFactor)
    const high = Math.round(low * 1.5)
    const existingNum = Number(existing) || 0
    const gap = Math.max(0, low - existingNum)
    return { low, high, gap, existingNum }
  }, [city, ageBand, adults, children, existing])

  return (
    <>
      <PageHero
        eyebrow="Tools · Beta"
        title="How much health cover might you need?"
        sub="Answer four quick questions for an indicative range. It’s a starting point — a 1FC advisor can turn it into a recommendation that fits your situation."
      />

      <Section tone="light">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            {/* Inputs */}
            <div className="rounded-[1.5rem] bg-parchment p-7 ring-hair-ink sm:p-9">
              <div className="space-y-8">
                <Field label="Where do you live?">
                  <SegGroup
                    options={cityTiers}
                    value={city}
                    onChange={setCity}
                  />
                </Field>

                <Field label="Age of the oldest member">
                  <SegGroup options={ageBands} value={ageBand} onChange={setAgeBand} />
                </Field>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Adults">
                    <Stepper value={adults} min={1} max={6} onChange={setAdults} />
                  </Field>
                  <Field label="Children">
                    <Stepper value={children} min={0} max={6} onChange={setChildren} />
                  </Field>
                </div>

                <Field label="Existing cover, if any (₹ lakh)" optional>
                  <input
                    type="number"
                    inputMode="numeric"
                    min="0"
                    value={existing}
                    onChange={(e) => setExisting(e.target.value)}
                    placeholder="e.g. 5"
                    className="w-full rounded-xl border border-ink/10 bg-paper px-4 py-3 text-ink outline-none transition-colors focus:border-marigold"
                  />
                </Field>
              </div>
            </div>

            {/* Result */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <motion.div
                key={`${result.low}-${result.high}`}
                initial={{ opacity: 0.6, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-[1.5rem] bg-pine p-7 text-cream sm:p-9"
              >
                <span className="eyebrow text-marigold">Indicative cover</span>
                <p className="mt-4 font-display text-5xl font-semibold !text-cream">
                  {lakhs(result.low)}
                  <span className="text-sage-mist/60"> – </span>
                  {lakhs(result.high)}
                </p>
                <p className="mt-3 text-[0.95rem] text-sage-mist/80">
                  A reasonable range to consider for your household, given city, age and family
                  size.
                </p>

                {result.existingNum > 0 && (
                  <div className="mt-6 rounded-2xl bg-white/[0.05] p-4">
                    {result.gap > 0 ? (
                      <p className="text-[0.95rem] text-cream">
                        You may have a gap of about{' '}
                        <span className="font-semibold text-marigold">{lakhs(result.gap)}</span> vs
                        the lower end of this range.
                      </p>
                    ) : (
                      <p className="text-[0.95rem] text-cream">
                        Your existing cover already meets the lower end of this range — nice.
                      </p>
                    )}
                  </div>
                )}

                <Button to="/contact" variant="primary" size="lg" showArrow className="mt-7 w-full">
                  Get a personal recommendation
                </Button>
              </motion.div>

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

function Field({ label, optional, children }) {
  return (
    <div>
      <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
        {label}
        {optional && <span className="font-normal text-muted">· optional</span>}
      </label>
      {children}
    </div>
  )
}

function SegGroup({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o.id === value
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              active
                ? 'bg-pine text-cream'
                : 'bg-paper text-body ring-1 ring-inset ring-ink/10 hover:ring-ink/25'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

function Stepper({ value, min, max, onChange }) {
  const set = (v) => onChange(Math.min(max, Math.max(min, v)))
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-paper p-1 ring-1 ring-inset ring-ink/10">
      <StepBtn label="Decrease" onClick={() => set(value - 1)} disabled={value <= min}>
        –
      </StepBtn>
      <span className="w-10 text-center font-display text-lg font-semibold text-ink">{value}</span>
      <StepBtn label="Increase" onClick={() => set(value + 1)} disabled={value >= max}>
        +
      </StepBtn>
    </div>
  )
}

function StepBtn({ children, onClick, disabled, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="grid h-9 w-9 place-items-center rounded-full text-lg font-semibold text-pine transition-colors hover:bg-sage-mist/60 disabled:opacity-30"
    >
      {children}
    </button>
  )
}
