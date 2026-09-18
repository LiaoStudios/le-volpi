import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { fadeUp, inView, stagger } from '../../lib/motion'
import { withBase } from '../../lib/paths'

const specialties = [
  { title: 'La nostra pizza', img: '/images/pizza/pizza-bufala.webp', text: 'Il nostro impasto, il nostro forno a legna, la nostra tradizione.' },
  { title: 'Pesce alla griglia', img: '/images/fish/grigliata-mare.webp', text: 'Pesce fresco e cotture semplici per esaltarne il sapore.' },
  { title: 'Griglia di carne', img: '/images/meat/misto-griglia.webp', text: 'Tagli selezionati e cotture alla brace.' },
  { title: 'Cucina italiana', img: '/images/pasta/ravioli-pesto.webp', text: 'Primi, secondi e piatti della tradizione fatti a mano.' },
]

export function Specialties() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading eyebrow="Le nostre specialità" title="Il cuore de Le Volpi" className="mb-16" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
      >
        {specialties.map((s) => (
          <motion.div key={s.title} variants={fadeUp} className="h-full">
            <Link to="/menu" className="card-organic group flex h-full flex-col overflow-hidden">
              <div className="h-56 overflow-hidden">
                <img
                  src={withBase(s.img)}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 text-center">
                <h3 className="mb-3 font-serif text-2xl italic">{s.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-ink/60">{s.text}</p>
                <span className="mt-auto text-xs font-bold uppercase tracking-widest text-red transition group-hover:text-red-deep">
                  Scopri di più →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
