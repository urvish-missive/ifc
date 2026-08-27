import { motion } from 'framer-motion'
import { fadeUp, inView } from '../../lib/motion'

// Drop-in scroll reveal. Motion is enhancement only — content renders regardless.
export default function Reveal({ children, className = '', delay = 0, as = 'div' }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}
