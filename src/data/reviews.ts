// Recensioni reali (Google, via restaurantguru.it). Struttura pronta per un
// eventuale collegamento automatico alle recensioni Google in futuro.
export interface Review {
  author: string
  rating: number
  text: string
  source?: 'Google' | 'Facebook' | 'TripAdvisor'
}

export const reviews: Review[] = [
  {
    author: 'Victoria Diviza',
    rating: 5,
    text: 'La pizza è davvero ottima: sottile, leggera e ben condita, con tante varianti tra cui scegliere. Ingredienti di qualità e impasto molto digeribile. Locale grande, accogliente e ben organizzato.',
    source: 'Google',
  },
  {
    author: 'Alessandro Bergamini',
    rating: 5,
    text: 'Ambiente molto piacevole, la pizza è molto buona. Si può scegliere tra diversi impasti e farine.',
    source: 'Google',
  },
  {
    author: 'Manuela',
    rating: 4,
    text: 'Si va alle Volpi per la pizza: sottile, croccante e gustosa, con la possibilità di chiederla “tirata”. Locale sempre pieno, meglio prenotare. Consigliatissimo.',
    source: 'Google',
  },
]

export const reviewSummary = { average: 4.4, count: 3280 }
