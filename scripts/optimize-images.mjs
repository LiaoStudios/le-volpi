// Optimizes the curated real photos of Le Volpi into public/images/*.
// Run with: npm run images
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const HOME = process.env.HOME
const GB = `${HOME}/Desktop/immagini sito/google-business`
const FB = `${HOME}/Desktop/immagini sito/facebook/levolpi`
const IG = `${HOME}/Desktop/immagini sito/instagram/levolpi`

const gb = (n) => `${GB}/levolpi-${String(n).padStart(2, '0')}.jpg`
const fb = (n) => `${FB}/levolpi_${String(n).padStart(2, '0')}.jpg`
const LOGO = `${IG}/241686023_4558544700871986_643433263389999256_n.jpg`
// High-res hero pizza created by the client (ChatGPT/Codex upscale).
const CODEX = `${GB}/Immagine Codex 2 set 2026, 15_22_55.png`

const OUT = path.resolve('public/images')

// Curated selection (source -> category/name). Chosen for resolution & subject.
const SELECTION = [
  // Facade / esterno
  { src: gb(1), cat: 'facade', name: 'facade-day' },
  { src: gb(23), cat: 'facade', name: 'facade-night' },
  // Interior / ambiente
  { src: gb(18), cat: 'interior', name: 'sala-legno' },
  { src: gb(21), cat: 'interior', name: 'sala-rossa' },
  { src: gb(37), cat: 'interior', name: 'veranda' },
  { src: fb(6), cat: 'interior', name: 'veranda-orto' },
  { src: fb(8), cat: 'interior', name: 'veranda-lunga' },
  // Brand — la volpe nel locale
  { src: fb(1), cat: 'brand', name: 'volpe-murale' },
  { src: fb(2), cat: 'brand', name: 'volpe-vetrata' },
  // Pizza
  { src: gb(5), cat: 'pizza', name: 'margherita' },
  { src: gb(7), cat: 'pizza', name: 'pizza-rucola' },
  { src: gb(10), cat: 'pizza', name: 'pizza-prosciutto' },
  { src: gb(22), cat: 'pizza', name: 'pizza-salame' },
  { src: gb(47), cat: 'pizza', name: 'pizza-verdure' },
  { src: gb(48), cat: 'pizza', name: 'pizza-gourmet' },
  { src: gb(50), cat: 'pizza', name: 'pizza-bufala' },
  { src: gb(51), cat: 'pizza', name: 'pizza-pomodoro' },
  // Pesce
  { src: gb(4), cat: 'fish', name: 'cozze' },
  { src: gb(9), cat: 'fish', name: 'antipasto-mare' },
  { src: gb(16), cat: 'fish', name: 'spaghetti-scampi' },
  { src: gb(36), cat: 'fish', name: 'grigliata-mare' },
  // Carne
  { src: gb(20), cat: 'meat', name: 'tagliata' },
  { src: gb(33), cat: 'meat', name: 'misto-griglia' },
  { src: gb(49), cat: 'meat', name: 'tartare' },
  // Primi / pasta
  { src: gb(40), cat: 'pasta', name: 'spaghetti-scoglio' },
  { src: gb(38), cat: 'pasta', name: 'tagliolini' },
  { src: gb(52), cat: 'pasta', name: 'ravioli-pesto' },
  // Antipasti
  { src: gb(42), cat: 'antipasti', name: 'bruschette' },
  { src: gb(43), cat: 'antipasti', name: 'buffet' },
  // Dessert
  { src: gb(12), cat: 'dessert', name: 'creme-caramel' },
  { src: gb(13), cat: 'dessert', name: 'cheesecake' },
  { src: gb(29), cat: 'dessert', name: 'semifreddo' },
  { src: gb(35), cat: 'dessert', name: 'crepe' },
]

async function run() {
  await mkdir(OUT, { recursive: true })
  const cats = [...new Set(SELECTION.map((s) => s.cat))]
  for (const c of cats) await mkdir(path.join(OUT, c), { recursive: true })

  let ok = 0
  let missing = 0
  for (const { src, cat, name } of SELECTION) {
    if (!existsSync(src)) {
      console.warn('MISSING:', src)
      missing++
      continue
    }
    const base = path.join(OUT, cat, name)
    // main (max 1600w) + small (max 800w) for srcset
    await sharp(src).rotate().resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80 }).toFile(`${base}.webp`)
    await sharp(src).rotate().resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 78 }).toFile(`${base}-sm.webp`)
    ok++
  }

  // Logo (transparent-ish square) + favicon + OG image
  if (existsSync(LOGO)) {
    await sharp(LOGO).resize({ width: 600 }).webp({ quality: 90 })
      .toFile(path.resolve('public/logo.webp'))
    await sharp(LOGO).resize(256, 256, { fit: 'contain', background: '#FBF7F0' })
      .png().toFile(path.resolve('public/favicon.png'))
  } else {
    console.warn('MISSING LOGO:', LOGO)
  }
  // Hero background (client's high-res pizza)
  if (existsSync(CODEX)) {
    await sharp(CODEX).resize({ width: 2000, withoutEnlargement: true }).webp({ quality: 82 })
      .toFile(path.resolve('public/images/pizza/hero-codex.webp'))
    await sharp(CODEX).resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 78 })
      .toFile(path.resolve('public/images/pizza/hero-codex-sm.webp'))
  }

  // OG image from the hero pizza
  const ogSrc = existsSync(CODEX) ? CODEX : gb(5)
  await sharp(ogSrc).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 })
    .toFile(path.resolve('public/og-image.jpg'))

  console.log(`Done. ${ok} images optimized, ${missing} missing.`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
