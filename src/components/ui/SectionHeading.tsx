import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, inView } from '../../lib/motion'

interface Props {
  eyebrow?: string
  title: ReactNode
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, align = 'center', light = false, className = '' }: Props) {
  const items = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      className={`flex flex-col ${items} ${className}`}
    >
      {eyebrow && (
        <span className={`mb-3 text-xs font-bold uppercase tracking-[0.25em] ${light ? 'text-gold' : 'text-red'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-4xl leading-tight md:text-5xl lg:text-6xl ${light ? 'text-cream' : 'text-ink'}`}>
        {title}
      </h2>
      <span className={`mt-5 h-0.5 w-20 ${light ? 'bg-gold' : 'bg-red'}`} />
    </motion.div>
  )
}
