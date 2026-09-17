import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Images } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Lightbox } from '../ui/Lightbox'
import { gallery, galleryCategories, type GalleryFilter } from '../../data/gallery'

const INITIAL_COUNT = 8

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>('Tutte')
  const [active, setActive] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const items = useMemo(
    () => (filter === 'Tutte' ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  )

  const visible = showAll ? items : items.slice(0, INITIAL_COUNT)
  const hasMore = items.length > visible.length

  return (
    <section id="gallery" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 md:py-32">
      <SectionHeading eyebrow="Uno sguardo da noi" title="Gallery" className="mb-10" />

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {galleryCategories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setFilter(c)
              setShowAll(false)
            }}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              filter === c ? 'bg-red text-cream shadow-warm' : 'bg-white text-ink/70 hover:bg-beige'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="masonry">
        {visible.map((img, i) => (
          <motion.button
            key={img.src}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
            onClick={() => setActive(i)}
            className="group block w-full overflow-hidden rounded-2xl shadow-warm"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-beige"
          >
            <Images size={18} />
            Mostra tutte le foto ({items.length})
          </button>
        </div>
      )}

      <Lightbox items={items} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </section>
  )
}
