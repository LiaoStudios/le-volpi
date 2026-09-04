import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollLock } from '../../lib/useScrollLock'

export interface LightboxItem {
  src: string
  alt: string
}

interface Props {
  items: LightboxItem[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const open = index !== null
  useScrollLock(open)

  useEffect(() => {
    if (!open || index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % items.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, index, items.length, onClose, onNavigate])

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={onClose}
            aria-label="Chiudi"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-ink"
          >
            <X size={22} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index - 1 + items.length) % items.length) }}
            aria-label="Precedente"
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-ink md:left-8"
          >
            <ChevronLeft size={24} />
          </button>

          <motion.img
            key={items[index].src}
            src={items[index].src}
            alt={items[index].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); onNavigate((index + 1) % items.length) }}
            aria-label="Successiva"
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream/30 text-cream transition hover:bg-cream hover:text-ink md:right-8"
          >
            <ChevronRight size={24} />
          </button>

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-cream/70">
            {index + 1} / {items.length}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
