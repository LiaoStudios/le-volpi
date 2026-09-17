import { motion } from 'framer-motion'
import { UtensilsCrossed, CalendarHeart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LogoBadge } from '../ui/LogoBadge'
import { siteInfo } from '../../data/siteInfo'

export function Hero() {
  return (
    <section id="home" className="relative flex h-[100svh] min-h-[600px] items-center justify-center overflow-hidden bg-cream">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/pizza/hero-codex.webp"
          alt="Pizza appena sfornata nel forno a legna"
          className="h-full w-full object-cover object-[center_30%]"
        />
        {/* overall darken for legibility */}
        <div className="absolute inset-0 bg-ink/45" />
        {/* focused scrim behind the title */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(65% 55% at 50% 42%, rgba(36,26,21,0.6), rgba(36,26,21,0) 72%)' }}
        />
        {/* bottom fade: blends seamlessly into the cream section below */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-cream via-cream/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/30 bg-ink/20 px-5 py-2 text-sm italic text-cream backdrop-blur-sm"
        >
          <LogoBadge className="h-6 w-6" />
          Autentica pizzeria & trattoria italiana
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-script leading-[0.95] text-cream drop-shadow-[0_3px_24px_rgba(0,0,0,0.65)] text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          La pizza è la<br />nostra passione
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mt-6 max-w-xl text-lg font-light text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
        >
          Tradizione italiana, ingredienti scelti e il calore della cucina di casa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            to="/menu"
            className="btn-organic inline-flex items-center gap-2 bg-red px-10 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-cta"
          >
            <UtensilsCrossed size={18} /> Scopri il Menu
          </Link>
          <a
            href={siteInfo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-organic inline-flex items-center gap-2 border border-cream/40 bg-cream/10 px-10 py-4 text-sm font-bold uppercase tracking-wider text-cream backdrop-blur-md hover:bg-cream/20"
          >
            <CalendarHeart size={18} /> Prenota un tavolo
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scorri</span>
      </motion.div>
    </section>
  )
}
