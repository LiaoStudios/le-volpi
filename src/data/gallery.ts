export interface GalleryImage {
  src: string
  category: 'Pizza' | 'Cucina' | 'Pesce' | 'Carne' | 'Locale'
  alt: string
}

export const galleryCategories = ['Tutte', 'Pizza', 'Cucina', 'Pesce', 'Carne', 'Locale'] as const
export type GalleryFilter = (typeof galleryCategories)[number]

export const gallery: GalleryImage[] = [
  { src: '/images/pizza/margherita.webp', category: 'Pizza', alt: 'Pizza margherita con pomodorini' },
  { src: '/images/pizza/pizza-rucola.webp', category: 'Pizza', alt: 'Pizza con crudo e rucola' },
  { src: '/images/pizza/pizza-verdure.webp', category: 'Pizza', alt: 'Pizza con verdure grigliate e burrata' },
  { src: '/images/pizza/pizza-gourmet.webp', category: 'Pizza', alt: 'Pizza gourmet' },
  { src: '/images/pizza/pizza-prosciutto.webp', category: 'Pizza', alt: 'Pizza prosciutto' },
  { src: '/images/pizza/pizza-salame.webp', category: 'Pizza', alt: 'Pizza con salame' },

  { src: '/images/fish/grigliata-mare.webp', category: 'Pesce', alt: 'Grigliata di pesce fresco' },
  { src: '/images/fish/spaghetti-scampi.webp', category: 'Pesce', alt: 'Spaghetti agli scampi' },
  { src: '/images/fish/antipasto-mare.webp', category: 'Pesce', alt: 'Antipasto di mare' },
  { src: '/images/fish/cozze.webp', category: 'Pesce', alt: 'Cozze alla marinara' },

  { src: '/images/meat/tagliata.webp', category: 'Carne', alt: 'Tagliata di manzo' },
  { src: '/images/meat/tartare.webp', category: 'Carne', alt: 'Tartare di manzo' },
  { src: '/images/meat/misto-griglia.webp', category: 'Carne', alt: 'Misto alla griglia' },

  { src: '/images/pasta/ravioli-pesto.webp', category: 'Cucina', alt: 'Ravioli al pesto' },
  { src: '/images/pasta/tagliolini.webp', category: 'Cucina', alt: 'Tagliolini della casa' },
  { src: '/images/antipasti/bruschette.webp', category: 'Cucina', alt: 'Bruschette miste' },
  { src: '/images/dessert/cheesecake.webp', category: 'Cucina', alt: 'Cheesecake ai frutti di bosco' },
  { src: '/images/dessert/semifreddo.webp', category: 'Cucina', alt: 'Semifreddo' },

  { src: '/images/interior/sala-rossa.webp', category: 'Locale', alt: 'Sala dalle pareti rosse' },
  { src: '/images/interior/veranda.webp', category: 'Locale', alt: 'Veranda coperta' },
  { src: '/images/interior/veranda-orto.webp', category: 'Locale', alt: 'Veranda con vista sull’orto' },
  { src: '/images/facade/facade-day.webp', category: 'Locale', alt: 'Ingresso di Le Volpi' },
  { src: '/images/facade/facade-night.webp', category: 'Locale', alt: 'Le Volpi di sera' },
  { src: '/images/brand/volpe-murale.webp', category: 'Locale', alt: 'Murale della volpe nel locale' },
]
