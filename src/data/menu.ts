// Dati del menu, separati dal frontend per una facile modifica.
// TODO(cliente): sostituire con il menu reale (nomi, descrizioni, prezzi, allergeni).

export interface MenuItem {
  name: string
  description?: string
  price: string
  allergens?: string[]
  image?: string
  tag?: 'novità' | 'specialità' | 'vegetariano'
}

export interface MenuGroup {
  /** sottocategoria opzionale, es. Classiche / Speciali / Gourmet per le pizze */
  label?: string
  items: MenuItem[]
}

export interface MenuCategory {
  id: string
  title: string
  blurb?: string
  groups: MenuGroup[]
}

export const menu: MenuCategory[] = [
  {
    id: 'pizze',
    title: 'Pizze',
    blurb: 'Impasto a lievitazione naturale, cotto nel forno a legna.',
    groups: [
      {
        label: 'Classiche',
        items: [
          { name: 'Margherita', description: 'Pomodoro San Marzano, fior di latte, basilico.', price: '€7,00', image: '/images/pizza/margherita.webp' },
          { name: 'Marinara', description: 'Pomodoro, aglio, origano, olio EVO.', price: '€6,00' },
          { name: 'Diavola', description: 'Pomodoro, mozzarella, salame piccante.', price: '€9,00', image: '/images/pizza/pizza-salame.webp' },
          { name: 'Prosciutto e funghi', description: 'Pomodoro, mozzarella, prosciutto cotto, funghi.', price: '€9,50', image: '/images/pizza/pizza-prosciutto.webp' },
        ],
      },
      {
        label: 'Speciali',
        items: [
          { name: 'Le Volpi', description: 'Pomodoro, fior di latte, prosciutto, funghi, olive e basilico.', price: '€12,00', tag: 'specialità' },
          { name: 'Bufala e crudo', description: 'Mozzarella di bufala, prosciutto crudo, rucola, grana.', price: '€12,50', image: '/images/pizza/pizza-rucola.webp' },
          { name: 'Boscaiola', description: 'Mozzarella, funghi porcini, salsiccia, pomodorini.', price: '€11,50' },
        ],
      },
      {
        label: 'Gourmet',
        items: [
          { name: 'Orto & Burrata', description: 'Zucchine e melanzane grigliate, burrata, menta.', price: '€13,00', image: '/images/pizza/pizza-verdure.webp', tag: 'vegetariano' },
          { name: 'Mare', description: 'Fior di latte, gamberi, zucchine, scorza di limone.', price: '€14,00', image: '/images/pizza/pizza-gourmet.webp' },
        ],
      },
    ],
  },
  {
    id: 'antipasti',
    title: 'Antipasti',
    groups: [
      {
        items: [
          { name: 'Bruschette miste', description: 'Pane croccante, pomodoro, olio EVO.', price: '€6,00', image: '/images/antipasti/bruschette.webp' },
          { name: 'Antipasto di mare', description: 'Selezione di crudo e cotto di pesce fresco.', price: '€16,00', image: '/images/fish/antipasto-mare.webp' },
          { name: 'Cozze alla marinara', description: 'Cozze, pomodorini, prezzemolo, crostini.', price: '€10,00', image: '/images/fish/cozze.webp' },
        ],
      },
    ],
  },
  {
    id: 'primi',
    title: 'Primi',
    groups: [
      {
        items: [
          { name: 'Tagliolini allo scoglio', description: 'Pasta fresca, frutti di mare, pomodorino.', price: '€15,00', image: '/images/fish/spaghetti-scampi.webp' },
          { name: 'Ravioli al pesto', description: 'Ravioli fatti in casa, pesto fresco.', price: '€11,00', image: '/images/pasta/ravioli-pesto.webp' },
          { name: 'Tagliatelle del giorno', description: 'Chiedi la proposta dello chef.', price: '€12,00', image: '/images/pasta/tagliolini.webp' },
        ],
      },
    ],
  },
  {
    id: 'pesce',
    title: 'Pesce',
    groups: [
      {
        items: [
          { name: 'Grigliata di pesce', description: 'Pescato del giorno alla griglia, olio EVO e limone.', price: '€22,00', image: '/images/fish/grigliata-mare.webp', tag: 'specialità' },
          { name: 'Frittura mista', description: 'Calamari, gamberi e verdure in pastella.', price: '€16,00' },
        ],
      },
    ],
  },
  {
    id: 'griglia',
    title: 'Griglia',
    groups: [
      {
        items: [
          { name: 'Tagliata di scottona', description: 'Frollatura 30 giorni, rucola e grana.', price: '€18,00', image: '/images/meat/tagliata.webp', tag: 'specialità' },
          { name: 'Grigliata mista di carne', description: 'Tagli selezionati alla brace.', price: '€20,00', image: '/images/meat/misto-griglia.webp' },
          { name: 'Tartare di manzo', description: 'Battuta al coltello, condita al momento.', price: '€14,00', image: '/images/meat/tartare.webp' },
        ],
      },
    ],
  },
  {
    id: 'contorni',
    title: 'Contorni',
    groups: [
      {
        items: [
          { name: 'Patate al forno', price: '€4,00' },
          { name: 'Verdure grigliate', price: '€5,00' },
          { name: 'Insalata mista', price: '€4,00' },
        ],
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert',
    groups: [
      {
        items: [
          { name: 'Tiramisù della casa', price: '€5,00' },
          { name: 'Cheesecake ai frutti di bosco', price: '€5,50', image: '/images/dessert/cheesecake.webp' },
          { name: 'Crème caramel', price: '€4,50', image: '/images/dessert/creme-caramel.webp' },
          { name: 'Semifreddo', price: '€5,00', image: '/images/dessert/semifreddo.webp' },
        ],
      },
    ],
  },
  {
    id: 'bevande',
    title: 'Bevande',
    groups: [
      {
        label: 'Vini & birre',
        items: [
          { name: 'Vino della casa (½ l)', price: '€6,00' },
          { name: 'Vino in bottiglia', description: 'Carta dei vini disponibile in sala.', price: 'da €12,00' },
          { name: 'Birra media', price: '€4,50' },
        ],
      },
      {
        label: 'Analcoliche',
        items: [
          { name: 'Acqua (½ l / 1 l)', price: '€1,50 / €2,50' },
          { name: 'Bibite', price: '€3,00' },
          { name: 'Caffè', price: '€1,50' },
        ],
      },
    ],
  },
]
