import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Container from './layout/Container'
import { NAV_LINKS } from '../data/site'
import wanyamLogo from '../assets/Logo/WANYAM-LOGO-GAME.png'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar({ activeId }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (id) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 bg-[#070707]/92 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-[4.5rem]">
        <button
          type="button"
          onClick={() => navigate('home')}
          className="flex items-center gap-3 border-0 bg-transparent p-0 cursor-pointer"
        >
          <img src={wanyamLogo} alt="WANYAM" className="h-8 w-auto md:h-9" />
          <span className="hidden sm:flex flex-col items-start leading-none">
            <span className="font-['Cinzel'] text-sm font-bold tracking-[0.32em] text-[#5c0a0a]">WANYAM</span>
            <span className="font-['Cinzel'] text-[10px] tracking-[0.22em] text-[#e8e4e4]">วันยาม</span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => navigate(link.id)}
              className={`relative border-0 bg-transparent p-0 font-['Outfit'] text-[11px] font-medium uppercase tracking-[0.22em] transition-colors cursor-pointer ${
                activeId === link.id ? 'text-[#8b1515]' : 'text-[#777] hover:text-[#e8e4e4]'
              }`}
            >
              {link.label}
              {activeId === link.id && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-[#6b0f0f]" />
              )}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="border-0 bg-transparent p-2 text-white md:hidden cursor-pointer"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/5 bg-[#070707]/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <Container className="flex flex-col items-center gap-5 py-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => navigate(link.id)}
                  className={`border-0 bg-transparent font-['Outfit'] text-xs uppercase tracking-[0.22em] cursor-pointer ${
                    activeId === link.id ? 'text-[#8b1515]' : 'text-[#777]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
