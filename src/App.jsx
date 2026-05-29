import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VHSOverlay from './components/effects/VHSOverlay'
import FogOverlay from './components/effects/FogOverlay'
import Modal from './components/ui/Modal'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import Gallery from './sections/Gallery'
import Distribute from './sections/Distribute'
import Contact from './sections/Contact'
import Team from './sections/Team'
import Studio from './sections/Studio'
import Awards from './sections/Awards'
import Investment from './sections/Investment'
import { useScrollSpy } from './hooks/useScrollSpy'
import { NAV_LINKS } from './data/site'
import heroVideo from './assets/VDO/Intro.mp4'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function App() {
  const activeId = useScrollSpy(SECTION_IDS)
  const [trailerOpen, setTrailerOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#070707] pb-[88px] text-[#ddd8d8] lg:pb-0">
      <div className="ambient-glow fixed inset-0 z-0" aria-hidden="true" />
      <VHSOverlay />
      <FogOverlay />
      <Navbar activeId={activeId} />

      <main>
        <Hero onOpenTrailer={() => setTrailerOpen(true)} />
        <About />
        <Features />
        <Gallery />
        <Distribute />
        <Contact />
        <Team />
        <Studio />
        <Awards />
        <Investment />
      </main>

      <Footer />

      <Modal open={trailerOpen} onClose={() => setTrailerOpen(false)} title="WANYAM — Trailer">
        <video src={heroVideo} controls autoPlay className="aspect-video w-full rounded-xl bg-black" />
      </Modal>
    </div>
  )
}
