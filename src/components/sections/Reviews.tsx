import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { reviews, reviewSummary } from '../../data/reviews'
import { siteInfo } from '../../data/siteInfo'

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} fill={i < n ? 'currentColor' : 'none'} className={i < n ? '' : 'text-ink/20'} />
      ))}
    </div>
  )
}

export function Reviews() {
  const [i, setI] = useState(0)
  const go = (d: number) => setI((prev) => (prev + d + reviews.length) % reviews.length)
  const r = reviews[i]

  return (
    <section className="bg-beige texture-paper py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <SectionHeading eyebrow="Parlano di noi" title="Le recensioni dei nostri ospiti" className="mb-6" />

        <div className="mb-12 flex items-center justify-center gap-3">
          <Stars n={Math.round(reviewSummary.average)} />
          <span className="font-serif text-xl">{reviewSummary.average.toFixed(1)}</span>
          <span className="text-sm text-ink/50">· {reviewSummary.count}+ recensioni</span>
        </div>

        <div className="relative min-h-[240px] rounded-[2rem] bg-white p-8 shadow-warm md:p-12">
          <Quote className="mb-4 text-red/30" size={40} />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
            >
              <p className="font-serif text-xl italic leading-relaxed text-ink/85 md:text-2xl">«{r.text}»</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="block font-bold">{r.author}</span>
                  {r.source && <span className="text-sm text-ink/50">via {r.source}</span>}
                </div>
                <Stars n={r.rating} />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={() => go(-1)} aria-label="Recensione precedente" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition hover:bg-red hover:text-cream">
              <ChevronLeft size={20} />
            </button>
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Vai alla recensione ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${idx === i ? 'w-6 bg-red' : 'w-2.5 bg-ink/20'}`}
              />
            ))}
            <button onClick={() => go(1)} aria-label="Recensione successiva" className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 transition hover:bg-red hover:text-cream">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href={siteInfo.social.google} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest text-red hover:text-red-deep">
            Leggi tutte le recensioni su Google →
          </a>
        </div>
      </div>
    </section>
  )
}
