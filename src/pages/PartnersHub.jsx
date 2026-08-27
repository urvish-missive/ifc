import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import IconBadge from '../components/ui/IconBadge'
import Ecosystem from '../components/signature/Ecosystem'
import CtaBand from '../components/sections/CtaBand'
import { partnersIndex } from '../data/partners'
import { fadeUp, stagger, inView } from '../lib/motion'

export default function PartnersHub() {
  return (
    <>
      <PageHero
        eyebrow="Partners Hub"
        title="Better together — across the whole insurance ecosystem."
        sub="1FC works alongside hospitals, insurers and TPAs, agents and employers. Our role is to coordinate and assist — so the customer’s journey is smoother and every partner has a cleaner, clearer relationship."
      />

      {/* Partner cards */}
      <Section tone="light">
        <Container>
          <SectionHeading
            eyebrow="Who we partner with"
            title="Pick the relationship that fits you."
          />
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mt-14 grid gap-5 sm:grid-cols-2"
          >
            {partnersIndex.map((p) => (
              <motion.div key={p.slug} variants={fadeUp}>
                <Link
                  to={p.to}
                  className="group flex h-full flex-col rounded-card bg-parchment p-7 ring-hair-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(7,36,33,0.3)]"
                >
                  <div className="flex items-center justify-between">
                    <IconBadge icon={p.icon} tone="marigold" />
                    <ArrowRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-pine" />
                  </div>
                  <span className="eyebrow mt-5 text-pine-600">{p.audience}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {p.promise}
                  </h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-body">{p.line}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Ecosystem */}
      <Section tone="sage">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="The white space"
            title="Distribution + assistance + hospital-facing service."
            intro="Distributors lead on acquisition. TPAs lead on claims administration. 1FC operates at the intersection — and that is where partnerships create value."
          />
          <div className="mt-14">
            <Ecosystem />
          </div>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Partner with 1FC"
        title="Let’s build a better journey for the people we both serve."
        sub="Tell us about your organisation and how you’d like to work together."
        secondary={{ label: 'Explore partner pages', to: '/partners/hospitals' }}
      />
    </>
  )
}
