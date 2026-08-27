import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import IconBadge from '../components/ui/IconBadge'
import CtaBand from '../components/sections/CtaBand'
import { tools, toolsDisclaimer } from '../data/tools'
import { fadeUp, stagger, inView } from '../lib/motion'

export default function ToolsHub() {
  return (
    <>
      <PageHero
        eyebrow="Tools · Beta"
        title="Simple ways to think about your cover."
        sub="A small set of tools to help you reason about protection before you talk to anyone. They’re indicative — a starting point for a better conversation, not a quote."
      />

      <Section tone="light">
        <Container>
          <SectionHeading eyebrow="Available now" title="Two tools to get you started." />
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mt-14 grid gap-5 md:grid-cols-2"
          >
            {tools.map((t) => (
              <motion.div key={t.slug} variants={fadeUp}>
                <Link
                  to={t.to}
                  className="group flex h-full flex-col rounded-card bg-parchment p-7 ring-hair-ink transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(7,36,33,0.3)]"
                >
                  <div className="flex items-center justify-between">
                    <IconBadge icon={t.icon} tone="marigold" />
                    <span className="eyebrow rounded-full bg-pine/8 px-2.5 py-1 text-pine-600">
                      Beta
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{t.name}</h3>
                  <p className="mt-2.5 flex-1 text-[0.97rem] leading-relaxed text-body">
                    {t.blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-medium text-pine-700">
                    Open tool
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 flex items-start gap-3 rounded-2xl bg-sage-mist/40 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-pine-600" />
            <p className="text-[0.9rem] leading-relaxed text-muted">{toolsDisclaimer}</p>
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Prefer to just talk it through?"
        sub="A 1FC advisor can turn any of these into a clear, personal recommendation."
        secondary={{ label: 'Back to tools', to: '/tools' }}
      />
    </>
  )
}
