import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import CtaBand from '../components/sections/CtaBand'
import { brand } from '../data/site'
import { management, teamGroups, personality, whyBuilding } from '../data/team'
import { fadeUp, stagger, inView } from '../lib/motion'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About 1FC Insure"
        title="Built around the part that comes after the sale."
        sub="1FC Insure is an insurance broking and customer-assistance model that connects distribution with practical post-sale support — advisory, service, hospitalisation coordination, claims and renewals, under one relationship."
      />

      {/* Story */}
      <Section tone="light">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <span className="eyebrow text-pine-600">Our story</span>
              <h2 className="mt-4 text-title">Insurance should not go quiet after you buy.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-lg leading-relaxed text-body">
                <p>
                  Insurance is easy to talk about when everything is normal. The real test begins
                  when a customer is admitted to a hospital, a claim needs to be filed, documents
                  are requested, or a renewal is approaching.
                </p>
                <p>
                  1FC Insure is being built around this gap. The objective is not only to help
                  customers buy insurance, but to build a service relationship that continues
                  after the sale — a clear point of contact, better coordination during
                  hospitalisation, and visibility across claims and renewals.
                </p>
                <p className="font-display text-xl italic text-ink">{brand.positioning}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Why we're building it */}
      <Section tone="parchment">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Why we’re building it"
              title="Service-led, not transaction-led."
            />
            <motion.ul
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="space-y-4"
            >
              {whyBuilding.map((w) => (
                <motion.li key={w} variants={fadeUp} className="flex gap-3.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-marigold/20 text-marigold-deep">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[1.05rem] leading-relaxed text-body">{w}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Container>
      </Section>

      {/* Personality */}
      <Section tone="dark" weave>
        <Container>
          <SectionHeading
            dark
            align="center"
            eyebrow="Brand & product personality"
            title="How 1FC shows up."
          />
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3"
          >
            {personality.map((p) => (
              <motion.span
                key={p}
                variants={fadeUp}
                className="rounded-full border border-sage/25 bg-white/[0.03] px-5 py-2.5 text-[0.95rem] font-medium text-cream"
              >
                {p}
              </motion.span>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Management */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Management"
            title="The people accountable for the promise."
            intro="Leadership details are being finalised and will be published here."
          />
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {management.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-card bg-parchment p-6 text-center ring-hair-ink"
              >
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-pine font-display text-lg font-semibold text-cream">
                  {m.initials}
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-ink">{m.name}</p>
                <p className="mt-0.5 text-sm text-muted">{m.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Team */}
      <Section tone="parchment">
        <Container>
          <SectionHeading
            eyebrow="The team"
            title="One relationship, backed by four functions."
          />
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {teamGroups.map((t) => (
              <motion.div
                key={t.title}
                variants={fadeUp}
                className="rounded-card bg-paper p-6 ring-hair-ink"
              >
                <h3 className="font-display text-lg font-semibold text-ink">{t.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-body">{t.blurb}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <CtaBand title="Want to work with us, or for us?" />
    </>
  )
}
