import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../../lib/motion'

// A small labelled section header used across pages.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  dark = false,
  className = '',
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className={`flex flex-col ${alignCls} ${align === 'center' ? 'max-w-2xl' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={`eyebrow mb-4 inline-flex items-center gap-2 ${
            dark ? 'text-marigold' : 'text-pine-600'
          }`}
        >
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`text-display ${dark ? '!text-cream' : ''}`}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-lg leading-relaxed ${
            dark ? 'text-sage-mist/85' : 'text-body'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
