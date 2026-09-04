import { Phone, MapPin, Clock, CalendarCheck, ArrowUpRight } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { siteInfo } from '../../data/siteInfo'

export function Reservation() {
  return (
    <section id="prenota" className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32">
      <Reveal>
        <div className="card-organic flex flex-col gap-12 p-8 md:flex-row md:gap-16 md:p-14">
          {/* Info */}
          <div className="md:w-1/2">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.25em] text-red">Prenotazioni</span>
            <h2 className="text-3xl leading-tight md:text-5xl">Ci vediamo a tavola?</h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-ink/70">
              Ti consigliamo di prenotare in anticipo per assicurarti il tuo tavolo, soprattutto nel fine settimana.
            </p>
            <div className="mt-10 space-y-5">
              <a href={siteInfo.phoneHref} className="group flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-red transition group-hover:bg-red group-hover:text-cream">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase text-ink/40">Telefono</span>
                  <span className="text-xl">{siteInfo.phone}</span>
                </span>
              </a>
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-red">
                  <MapPin size={20} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase text-ink/40">Indirizzo</span>
                  <span className="text-xl">{siteInfo.address}, {siteInfo.city}</span>
                </span>
              </div>
              <div className="flex items-center gap-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-red">
                  <Clock size={20} />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase text-ink/40">Aperti</span>
                  <span className="text-xl">Pranzo &amp; cena · su prenotazione</span>
                </span>
              </div>
            </div>
          </div>

          {/* Booking CTA → sistema di prenotazione ufficiale */}
          <div className="md:w-1/2">
            <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-ink texture-wood p-10 text-center text-cream">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red">
                <CalendarCheck size={30} />
              </span>
              <h3 className="mt-6 font-serif text-3xl">Prenota online</h3>
              <p className="mt-3 max-w-xs text-cream/70">
                Scegli data, orario e numero di persone in pochi secondi sul nostro sistema di prenotazione.
              </p>
              <a
                href={siteInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-red px-9 py-4 text-sm font-bold uppercase tracking-wider text-cream shadow-cta transition hover:-translate-y-0.5 hover:bg-red-deep"
              >
                Prenota un tavolo <ArrowUpRight size={18} />
              </a>
              <a href={siteInfo.phoneHref} className="mt-4 text-sm text-cream/60 underline-offset-4 hover:text-cream hover:underline">
                oppure chiamaci: {siteInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
