import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/sections/Hero'
import { Specialties } from '../components/sections/Specialties'
import { PizzaSection } from '../components/sections/PizzaSection'
import { RestaurantSplit } from '../components/sections/RestaurantSplit'
import { Story } from '../components/sections/Story'
import { Gallery } from '../components/sections/Gallery'
import { Reviews } from '../components/sections/Reviews'
import { Reservation } from '../components/sections/Reservation'
import { Contact } from '../components/sections/Contact'
import { siteInfo } from '../data/siteInfo'

function scrollToId(id: string) {
  if (id === 'home') return window.scrollTo({ top: 0 })
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export function Home() {
  const location = useLocation()

  // Handle navigation from another route (state.scrollTo) or a #hash on load.
  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    const hash = location.hash.replace('#', '')
    const id = target || hash
    if (id) {
      // small delay so the sections are laid out before scrolling
      const t = setTimeout(() => scrollToId(id), 100)
      return () => clearTimeout(t)
    }
  }, [location])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Le Volpi',
    servesCuisine: ['Pizza', 'Italiana', 'Pesce', 'Grigliata'],
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteInfo.address,
      addressLocality: siteInfo.city,
      addressCountry: 'IT',
    },
    telephone: siteInfo.phone,
    sameAs: [siteInfo.social.instagram, siteInfo.social.facebook],
  }

  return (
    <>
      <Helmet>
        <title>Le Volpi | Pizzeria e Ristorante</title>
        <meta
          name="description"
          content="Le Volpi è una pizzeria e ristorante italiano. Pizza cotta nel forno a legna, pesce alla griglia, carne e cucina tradizionale in un ambiente familiare e accogliente."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Hero />
      <Specialties />
      <PizzaSection />
      <RestaurantSplit />
      <Story />
      <Gallery />
      <Reviews />
      <Reservation />
      <Contact />
    </>
  )
}
