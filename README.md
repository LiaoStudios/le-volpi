# Le Volpi — Pizzeria & Ristorante

Sito web di Le Volpi, costruito con **Vite + React + TypeScript + Tailwind CSS + Framer Motion + lucide-react**.
Base visiva: design Superdesign "Le Volpi – Warm Rustic Modern", adattato alla palette
**arancione / beige / bianco + rosso-bordeaux** e ampliato con tutte le sezioni richieste.

## Avvio

```bash
npm install
npm run dev        # http://localhost:5173
```

Altri comandi:

```bash
npm run build      # build di produzione in dist/
npm run preview    # anteprima della build
npm run images     # ri-genera le foto ottimizzate in public/images/
```

## Struttura

- `src/pages/` — `Home.tsx` (tutte le sezioni) e `MenuPage.tsx` (menu interattivo su `/menu`)
- `src/components/sections/` — Hero, Specialties, PizzaSection, RestaurantSplit, Story, Gallery, Reviews, Reservation, Contact
- `src/components/layout/` — Navbar (trasparente→solida, hamburger mobile) e Footer
- `src/components/IntroAnimation.tsx` — intro animata della volpe (piena solo alla 1ª visita di sessione; saltata con `prefers-reduced-motion`)
- `src/data/` — **contenuti separati dal codice**, facili da modificare:
  - `menu.ts` — categorie e piatti del menu
  - `siteInfo.ts` — contatti, orari, social, mappa
  - `gallery.ts` — foto della gallery
  - `reviews.ts` — recensioni
- `scripts/optimize-images.mjs` — seleziona e ottimizza le foto reali (WebP responsive)

## Foto

Le foto reali del locale sono ottimizzate in `public/images/<categoria>/` a partire dalle cartelle
`~/Desktop/immagini sito/{google-business,facebook,instagram}`. Il **logo** reale (volpe arancione)
è in `public/logo.webp`; il favicon in `public/favicon.png`.
Per cambiare la selezione, modifica `SELECTION` in `scripts/optimize-images.mjs` e riesegui `npm run images`.

## ⚠️ Da completare (placeholder attuali)

1. **Contatti reali** in `src/data/siteInfo.ts`: indirizzo, telefono, email, orari, e il link/embed
   esatto di Google Maps (ora punta a una ricerca generica "Le Volpi Bologna").
2. **Menu reale** in `src/data/menu.ts`: nomi, descrizioni, prezzi e allergeni definitivi.
3. **Recensioni reali** in `src/data/reviews.ts` (struttura pronta per un futuro collegamento a Google).
4. Le **prenotazioni** puntano al sistema ufficiale esterno (`siteInfo.bookingUrl`):
   tutti i pulsanti "Prenota" aprono `https://ristorantepizzerialevolpibologna.plateform.app/welcome`.

## Note

- **Intro**: video della volpe in `public/intro/fox-intro.mp4` (una volta a sessione, con "Salta").
- **Logo** reale centrato nella navbar; sfondo hero = immagine ad alta risoluzione del cliente.
- Palette: **rosso-bordeaux** (primario) + beige/crema/bianco.
