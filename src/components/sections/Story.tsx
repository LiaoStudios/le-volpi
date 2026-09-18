import { Reveal } from '../ui/Reveal'
import { LogoBadge } from '../ui/LogoBadge'
import { withBase } from '../../lib/paths'

export function Story() {
  return (
    <section id="storia" className="relative overflow-hidden bg-ink texture-wood py-24 text-cream md:py-32">
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-12 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-gold">La nostra storia</span>
          <h2 className="text-4xl leading-tight md:text-6xl">
            Una passione che portiamo in tavola ogni giorno.
          </h2>
          <div className="mt-8 space-y-6 text-lg font-light leading-relaxed text-cream/80">
            <p>
              Nel cuore de «Le Volpi» c'è il calore del forno e il rispetto per la terra. La nostra storia nasce
              dall'amore per la buona cucina e per l'accoglienza, quella vera, di casa.
            </p>
            <p>
              Coltiviamo il nostro orto e scegliamo prodotti di stagione da piccoli produttori. Ogni pizza che
              sforniamo e ogni piatto che serviamo raccontano la stessa semplicità genuina di sempre.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-5">
            <LogoBadge className="h-16 w-16 border-2 border-gold" />
            <div>
              <span className="block font-serif text-2xl">La famiglia Le Volpi</span>
              <span className="italic font-light text-gold">L'anima della cucina</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <img
              src={withBase('/images/interior/sala-legno.webp')}
              alt="La sala interna del ristorante Le Volpi"
              loading="lazy"
              className="relative z-20 aspect-[4/5] w-full rounded-[3rem] object-cover shadow-2xl"
            />
            <div className="absolute -left-6 -top-6 z-10 h-full w-full rounded-[3rem] border-2 border-gold/30" />
            {/* the real fox stained-glass window as a signature detail */}
            <div className="absolute -bottom-8 -right-6 z-30 h-32 w-32 overflow-hidden rounded-full border-4 border-cream shadow-warm">
              <img src={withBase('/images/brand/volpe-vetrata.webp')} alt="Vetrata della volpe" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
