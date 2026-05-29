import { useEffect, useState } from 'react'
import Container from '../layout/Container'
import { NAV_LINKS } from '../../data/site'
import { scrollToSection } from './scrollToSection'
import wanyamLogo from '../../assets/Logo/WANYAM-LOGO-GAME.png'

export default function DesktopNavbar({ activeId }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (id) => scrollToSection(id)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 hidden transition-all duration-300 lg:block ${
        scrolled ? 'border-b border-white/5 bg-[#070707]/92 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-[4.5rem]">
        <button
          type="button"
          onClick={() => navigate('home')}
          className="flex cursor-pointer items-center gap-3 border-0 bg-transparent p-0"
        >
          <img src={wanyamLogo} alt="WANYAM" className="h-8 w-auto md:h-9" />
          <span className="flex flex-col items-start leading-none">
            <span className="font-['Cinzel'] text-sm font-bold tracking-[0.32em] text-[#5c0a0a]">
              WANYAM
            </span>
            <span className="font-['Cinzel'] text-[10px] tracking-[0.22em] text-[#e8e4e4]">วันยาม</span>
          </span>
        </button>

        <nav className="flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => navigate(link.id)}
              className={`relative cursor-pointer border-0 bg-transparent p-0 font-['Outfit'] text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
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
      </Container>
    </header>
  )
}
