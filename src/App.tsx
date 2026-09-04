import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { IntroAnimation } from './components/IntroAnimation'
import { Home } from './pages/Home'
import { MenuPage } from './pages/MenuPage'

// Each route element remounts on navigation, so a simple mount fade-in gives a
// page transition without depending on an exit animation to finish first
// (mode="wait" AnimatePresence can wedge if rAF is throttled mid-transition).
function Page({ children }: { children: ReactNode }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.main>
  )
}

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Page><Home /></Page>} />
      <Route path="/menu" element={<Page><MenuPage /></Page>} />
      <Route path="*" element={<Page><Home /></Page>} />
    </Routes>
  )
}

export default function App() {
  // The navbar logo stays hidden until the intro's flying badge lands on it,
  // so there is only ever ONE circle on screen during the hand-off.
  const [introDone, setIntroDone] = useState(false)
  return (
    <>
      <IntroAnimation onFinish={() => setIntroDone(true)} />
      <Navbar logoReady={introDone} />
      <AnimatedRoutes />
      <Footer />
    </>
  )
}
