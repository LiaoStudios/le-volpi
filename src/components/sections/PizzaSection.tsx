import { motion, useScroll, useTransform } from 'framer-motion'
import { Flame } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../ui/Reveal'

export function PizzaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const ySmall = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])

  return (
    <section ref={ref} className="relative overflow-hidden bg-beige texture-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:px-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-red">
              <motion.span animate={{ scale: [1, 1.2, 1], rotate: [-4, 4, -4] }} transition={{ repeat: Infinity, duration: 1.6 }}>
                <Flame size={16} className="text-red" />
              </motion.span>
              Dal forno a legna
            </span>
            <h2 className="text-4xl leading-tight md:text-6xl">La nostra pizza</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-5 text-lg font-light leading-relaxed text-ink/75">
              <p>
                Farine macinate a pietra, una <strong className="font-semibold text-ink">lievitazione naturale</strong> di
                oltre 24 ore e la cottura nel forno a legna: così nasce ogni nostra pizza, dal bordo alto e croccante.
              </p>
              <p>
                Pomodoro, mozzarella fior di latte e ingredienti scelti da piccoli produttori. Semplicità e passione,
                come vuole la vera tradizione italiana.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/menu"
              className="mt-8 inline-flex rounded-full bg-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-warm transition hover:-translate-y-0.5 hover:bg-red-deep"
            >
              Scopri tutte le pizze
            </Link>
          </Reveal>
        </div>

        <div className="relative order-1 h-[420px] md:h-[520px] lg:order-2">
          <motion.div style={{ y }} className="absolute right-0 top-0 h-[85%] w-[78%] overflow-hidden rounded-[2.5rem] shadow-warm">
            <img src="/images/pizza/pizza-rucola.webp" alt="Pizza artigianale" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: ySmall }} className="absolute bottom-0 left-0 h-[45%] w-[48%] overflow-hidden rounded-[2rem] border-4 border-cream shadow-warm">
            <img src="/images/pizza/pizza-verdure.webp" alt="Pizza con verdure grigliate" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <div className="absolute -bottom-4 right-8 flex h-24 w-24 items-center justify-center rounded-full bg-bordeaux text-center text-xs font-bold uppercase leading-tight tracking-wide text-cream shadow-warm">
            Forno<br />a legna
          </div>
        </div>
      </div>
    </section>
  )
}
