import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, inView } from '../../lib/motion'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

/** Scroll-reveal wrapper: fades + slides up once when it enters the viewport. */
export function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
