import { motion } from 'framer-motion'
import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import JourneyTimeline from '../components/signature/JourneyTimeline'
import Ecosystem from '../components/signature/Ecosystem'
import CtaBand from '../components/sections/CtaBand'
import { fadeUp, stagger, inView } from '../lib/motion'

// The three named user journeys from the BRD (§6).
const flows = [
  {
    key: 'POSP',
    title: 'The service journey',
    caption: 'From first conversation to renewal',
    steps: [
      'Lead',
      'Advisory',
      'Quote',
      'Policy purchase',
      'Onboarding',
      'Ongoing service',
      'Hospitalisation / request',
      'Claim assistance',
      'Follow-up',
      'Renewal',
    ],
  },
  {
    key: 'Claim',
    title: 'The claim assistance journey',
    caption: 'What happens when a claim begins',
    steps: [
      'Intimation',
      '1FC case created',
      'Document checklist',
      'Hospital coordination',
      'Insurer / TPA submission',
      'Status tracking',
      'Customer updates',
      'Closure',
    ],
  },
  {
    key: 'Renewal',
    title: 'The renewal journey',
    caption: 'Keeping cover continuous',
    steps: [
      'Policy data capture',
      'Renewal trigger',
      'Customer notification',
      'Advisor follow-up',
      'Quote / options',
      'Renewal',
      'Updated record',
    ],
  },
]

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A single thread from advice to renewal."
        sub="1FC Insure connects advisory, service, hospitalisation support, claims and renewals into one relationship. Here is how that plays out — stage by stage, and journey by journey."
      />

      {/* Stage timeline */}
      <Section tone="dark" weave>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                dark
                eyebrow="Seven stages"
                title="The relationship, stage by stage."
                intro="Each stage pairs what you experience with what 1FC does. The thread pulses at hospitalisation and the claim — the moments that matter most."
              />
            </div>
            <JourneyTimeline />
          </div>
        </Container>
      </Section>

      {/* Named journeys */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="The journeys"
            title="Three flows, one continuous relationship."
            intro="Under the hood, 1FC runs a few well-defined journeys so nothing falls through the cracks."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {flows.map((flow) => (
              <Reveal key={flow.key} className="flex">
                <div className="flex w-full flex-col rounded-card bg-parchment p-6 ring-hair-ink">
                  <span className="eyebrow text-pine-600">{flow.caption}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {flow.title}
                  </h3>
                  <ol className="relative mt-6 space-y-0">
                    {flow.steps.map((step, i) => {
                      const last = i === flow.steps.length - 1
                      return (
                        <li key={step} className="relative flex gap-3 pb-4 last:pb-0">
                          {!last && (
                            <span
                              className="absolute left-[9px] top-5 h-full w-px bg-sage-dim/30"
                              aria-hidden="true"
                            />
                          )}
                          <span className="relative z-10 mt-1 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-pine text-[0.6rem] font-semibold text-cream">
                            {i + 1}
                          </span>
                          <span className="text-[0.95rem] text-body">{step}</span>
                        </li>
                      )
                    })}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Ecosystem */}
      <Section tone="sage">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Who's involved"
            title="A coordinating layer between you and the system."
          />
          <div className="mt-14">
            <Ecosystem />
          </div>
        </Container>
      </Section>

      <CtaBand
        title="See the relationship in action."
        sub="Tell us a little about what you need, and a 1FC advisor will walk you through it."
      />
    </>
  )
}
