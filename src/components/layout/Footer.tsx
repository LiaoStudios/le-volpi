import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LogoBadge } from '../ui/LogoBadge'
import { siteInfo } from '../../data/siteInfo'

export function Footer() {
  return (
    <footer className="relative bg-ink texture-wood pt-24 pb-12 text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <LogoBadge className="h-12 w-12" />
              <span className="font-serif text-3xl font-bold uppercase">Le Volpi</span>
            </div>
            <p className="italic leading-relaxed text-cream/60">
              «Dalla terra alla tavola, con lo stesso amore di una volta.»
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gold">Navigazione</h4>
            <ul className="space-y-3 font-light text-cream/70">
              <li><Link to="/" className="transition hover:text-red">Home</Link></li>
              <li><Link to="/menu" className="transition hover:text-red">Menu</Link></li>
              <li><a href="/#storia" className="transition hover:text-red">La nostra storia</a></li>
              <li><a href="/#gallery" className="transition hover:text-red">Gallery</a></li>
              <li><a href="/#contatti" className="transition hover:text-red">Contatti</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gold">La cucina</h4>
            <ul className="space-y-3 font-light text-cream/70">
              <li><Link to="/menu" className="transition hover:text-red">Pizza</Link></li>
              <li><Link to="/menu" className="transition hover:text-red">Pesce</Link></li>
              <li><Link to="/menu" className="transition hover:text-red">Carne alla griglia</Link></li>
              <li><Link to="/menu" className="transition hover:text-red">Primi e tradizione</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gold">Contatti</h4>
            <ul className="space-y-4 font-light text-cream/70">
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-red" />{siteInfo.address}, {siteInfo.city}</li>
              <li className="flex items-center gap-3"><Phone size={18} className="shrink-0 text-red" /><a href={siteInfo.phoneHref} className="hover:text-red">{siteInfo.phone}</a></li>
              {siteInfo.email && (
                <li className="flex items-center gap-3"><Mail size={18} className="shrink-0 text-red" /><a href={`mailto:${siteInfo.email}`} className="hover:text-red">{siteInfo.email}</a></li>
              )}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href={siteInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 transition hover:bg-gold hover:text-ink">
                <Instagram size={18} />
              </a>
              <a href={siteInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 transition hover:bg-gold hover:text-ink">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/10 pt-8 text-center text-xs uppercase tracking-widest text-cream/40">
          © {new Date().getFullYear()} Le Volpi · Pizzeria &amp; Ristorante · Tutti i diritti riservati
        </div>
      </div>
    </footer>
  )
}
