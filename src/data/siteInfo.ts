// Single source of truth for contact / hours / social.
// Dati reali da restaurantguru.it / Google (Ristorante Pizzeria Le Volpi, Bologna).
export const siteInfo = {
  name: 'Le Volpi',
  tagline: 'Pizzeria & Ristorante',

  phone: '+39 051 703484',
  phoneHref: 'tel:+39051703484',
  email: '',
  address: 'Via delle Fonti, 29a',
  city: 'Bologna',
  country: 'Italia',

  mapsEmbed: 'https://www.google.com/maps?q=Ristorante+Pizzeria+Le+Volpi+Via+delle+Fonti+29a+Bologna&output=embed',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Ristorante+Pizzeria+Le+Volpi+Via+delle+Fonti+29a+Bologna',

  hours: [
    { days: 'Lunedì', value: '12:00 – 14:00 · 18:30 – 23:30' },
    { days: 'Martedì', value: 'Chiuso' },
    { days: 'Mercoledì', value: '18:30 – 23:30' },
    { days: 'Giovedì', value: '12:00 – 14:00 · 18:30 – 23:30' },
    { days: 'Venerdì', value: '12:00 – 14:00 · 18:30 – 23:30' },
    { days: 'Sabato', value: '12:00 – 14:00 · 18:30 – 23:30' },
    { days: 'Domenica', value: '12:00 – 14:00 · 18:30 – 23:30' },
  ],

  // Sistema di prenotazione ufficiale del ristorante
  bookingUrl: 'https://ristorantepizzerialevolpibologna.plateform.app/welcome',

  social: {
    instagram: 'https://www.instagram.com/levolpi_bologna/',
    facebook: 'https://www.facebook.com/saveriocurci19/photos',
    google: 'https://www.google.com/search?q=Ristorante+Pizzeria+Le+Volpi+Bologna+Recensioni',
  },
} as const

export type SiteInfo = typeof siteInfo
