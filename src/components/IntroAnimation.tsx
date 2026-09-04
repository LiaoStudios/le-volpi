import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const END_AT = 9.0 // seconds of video where the logo has settled (rest is static)
const RATE = 1.3
const HARD_CAP_MS = 9000 // absolute fallback so the intro can NEVER get stuck

type Phase = 'play' | 'handoff' | 'gone'

interface Rect {
  x: number
  y: number
  size: number
}

function prefersReduced() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

// Where the logo sits at the END of the video, projected to screen pixels
// (video is 1280x720, object-contain; logo center ≈ 50% x / 19.6% y of frame).
function videoLogoRect(): Rect {
  const vw = window.innerWidth
  const vh = window.innerHeight
  const scale = Math.min(vw / 1280, vh / 720)
  const rh = 720 * scale
  const oy = (vh - rh) / 2
  return { x: vw / 2, y: oy + 0.196 * rh, size: Math.max(120, 0.3 * rh) }
}

// Where the navbar logo badge ("pallino") currently is.
function navLogoRect(): Rect {
  const el = document.querySelector('[data-navlogo]')
  if (el) {
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2, size: r.width }
  }
  return { x: window.innerWidth / 2, y: 48, size: 64 }
}

/**
 * Intro: the real Le Volpi fox video plays, then its logo keeps shrinking and
 * flies up into the navbar badge (the "pallino") while the white screen fades
 * to reveal the home — a seamless hand-off. Plays on every load (skipped with
 * reduced motion). Timer-driven teardown so it can never hang.
 */
export function IntroAnimation({ onFinish }: { onFinish?: () => void }) {
  const [phase, setPhase] = useState<Phase>(() =>
    typeof window !== 'undefined' && !prefersReduced() ? 'play' : 'gone',
  )
  const [from, setFrom] = useState<Rect | null>(null)
  const [to, setTo] = useState<Rect | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const handedOff = useRef(false)
  const finished = useRef(false)

  const finish = () => {
    if (finished.current) return
    finished.current = true
    setPhase('gone')
    onFinish?.()
  }

  // If the intro is skipped from the start (reduced motion), reveal the logo now.
  useEffect(() => {
    if (phase === 'gone') onFinish?.()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startHandoff = () => {
    if (handedOff.current) return
    handedOff.current = true
    setFrom(videoLogoRect())
    setTo(navLogoRect())
    setPhase('handoff')
  }

  useEffect(() => {
    if (phase !== 'play') return
    const v = videoRef.current
    const cap = window.setTimeout(startHandoff, HARD_CAP_MS)

    if (v) {
      v.playbackRate = RATE
      const tryPlay = () => v.play().catch(() => window.setTimeout(() => v.play().catch(startHandoff), 200))
      tryPlay()
      v.addEventListener('canplay', tryPlay, { once: true })
      const onTime = () => {
        if (v.currentTime >= END_AT) startHandoff()
      }
      v.addEventListener('timeupdate', onTime)
      v.addEventListener('ended', startHandoff)
      v.addEventListener('error', startHandoff)
      return () => {
        window.clearTimeout(cap)
        v.removeEventListener('timeupdate', onTime)
        v.removeEventListener('ended', startHandoff)
        v.removeEventListener('error', startHandoff)
      }
    }
    return () => window.clearTimeout(cap)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  if (phase === 'gone') return null

  return (
    <div className="fixed inset-0 z-[200]">
      {/* white backdrop — fades out during the hand-off to reveal the home */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'handoff' ? 0 : 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />

      {phase === 'play' && (
        <video
          ref={videoRef}
          src="/intro/fox-intro.mp4"
          muted
          playsInline
          autoPlay
          preload="auto"
          className="absolute inset-0 h-full w-full object-contain"
        />
      )}

      {phase === 'handoff' && from && to && (
        <motion.div
          className="absolute flex items-center justify-center rounded-full"
          style={{ x: '-50%', y: '-50%' }}
          initial={{ left: from.x, top: from.y, width: from.size, height: from.size, backgroundColor: 'rgba(251,247,240,0)' }}
          animate={{ left: to.x, top: to.y, width: to.size, height: to.size, backgroundColor: 'rgba(251,247,240,1)' }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          onAnimationComplete={finish}
        >
          <img src="/logo.webp" alt="Logo Le Volpi" className="h-[86%] w-[86%] rounded-full object-contain" />
        </motion.div>
      )}

      {phase === 'play' && (
        <button
          onClick={startHandoff}
          className="absolute bottom-6 right-6 z-10 rounded-full bg-ink/70 px-5 py-2 text-xs font-bold uppercase tracking-widest text-cream backdrop-blur transition hover:bg-ink"
        >
          Salta
        </button>
      )}
    </div>
  )
}
