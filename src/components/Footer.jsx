import Container from './layout/Container'
import { NAV_LINKS, SOCIALS } from '../data/site'
import wanyamLogo from '../assets/Logo/WANYAM-LOGO-GAME.png'
import ininLogo from '../assets/Logo/YOLO-TEAM.png'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070707] py-14 md:py-16">
      <Container>
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 border-0 bg-transparent p-0 cursor-pointer"
          >
            <img src={wanyamLogo} alt="WANYAM" className="h-9 w-auto" />
            <div className="text-left leading-none">
              <p className="font-['Cinzel'] text-sm font-bold tracking-[0.28em] text-[#5c0a0a]">WANYAM</p>
              <p className="font-['Cinzel'] text-[10px] tracking-[0.18em] text-[#e8e4e4]">วันยาม</p>
            </div>
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="border-0 bg-transparent font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-[#666] transition hover:text-white cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] transition hover:border-[#6b0f0f]/25 hover:bg-[#6b0f0f]/10"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" className="h-5 w-5 object-contain opacity-75" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 md:flex-row">
          <div className="flex items-center gap-2">
            <img src={ininLogo} alt="ININ Studio" className="h-5 w-5 object-contain opacity-70" />
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#444]">
              © {new Date().getFullYear()} ININ Studio
            </p>
          </div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[#444]">WANYAM — วันยาม</p>
        </div>
      </Container>
    </footer>
  )
}
