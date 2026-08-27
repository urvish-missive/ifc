import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import PageHero from '../components/sections/PageHero'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import IconBadge from '../components/ui/IconBadge'
import CtaBand from '../components/sections/CtaBand'
import { partnerPages, partnersIndex } from '../data/partners'
import { fadeUp, stagger, inView } from '../lib/motion'

// One data-driven template renders all four partner audiences — guaranteeing a
// consistent structure and look across Hospitals / Insurers / Agents / Employers.
export default function PartnerDetail() {
  const { slug } = useParams()
  const data = partnerPages[slug]
  if (!data) return <Navigate to="/partners" replace />

  const others = partnersIndex.filter((p) => p.slug !== slug)

  return (
    <>
      <PageHero eyebrow={data.hero.eyebrow} title={data.hero.title} sub={data.hero.sub} />

      {/* Value props */}
      <Section tone="light">
        <Container>
          <SectionHeading eyebrow="What we bring" title="Why partner with 1FC." />
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mt-14 grid gap-5 sm:grid-cols-2"
          >
            {data.valueProps.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="flex gap-4 rounded-card bg-parchment p-6 ring-hair-ink"
              >
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-marigold/20 text-marigold-deep">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-body">{v.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* How it works — four steps on the thread */}
      <Section tone="dark" weave>
        <Container>
          <SectionHeading dark eyebrow="How the partnership works" title="Four steps, one thread." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.how.map((h, i) => (
              <Reveal key={h.step} delay={i * 0.05}>
                <div className="relative rounded-card border border-sage/15 bg-white/[0.03] p-6">
                  <span className="font-mono text-sm text-marigold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold !text-cream">{h.step}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-sage-mist/75">{h.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Other partners */}
      <Section tone="light">
        <Container>
          <SectionHeading eyebrow="Other partners" title="Explore other relationships." />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={p.to}
                className="group flex items-center justify-between rounded-2xl bg-parchment px-5 py-4 ring-hair-ink transition-colors hover:bg-sage-mist/50"
              >
                <span className="flex items-center gap-3">
                  <IconBadge icon={p.icon} tone="sage" className="!h-10 !w-10" />
                  <span className="font-display font-semibold text-ink">{p.audience}</span>
                </span>
                <ArrowRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand eyebrow="Partner with 1FC" title={data.ctaLine + '.'} />
    </>
  )
}
