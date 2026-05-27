import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import GameplayGallery from './components/GameplayGallery'
import Distribute from './components/Distribute'
import Contact from './components/Contact'
import Team from './components/Team'
import Studio from './components/Studio'
import Awards from './components/Awards'
import Investment from './components/Investment'
import Footer from './components/Footer'
import VHSOverlay from './components/VHSOverlay'
import MouseGlow from './components/MouseGlow'
import Particles from './components/Particles'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = ['home', 'about', 'distribute', 'contact', 'team']
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      <VHSOverlay />
      <MouseGlow />
      <Particles />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <GameplayGallery />
        <Distribute />
        <Contact />
        <Team />
        <Studio />
        <Awards />
        <Investment />
      </main>
      <Footer />
    </div>
  )
}

export default App
