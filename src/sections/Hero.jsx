import { motion } from 'framer-motion'
import { Heart, Play } from 'lucide-react'
import Button from '../components/ui/Button'
import heroVideo from '../assets/VDO/Intro.mp4'
import heroPoster from '../assets/Hero_FIX.png'
import wanyamLogo from '../assets/Logo/WANYAM-LOGO-GAME.png'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero({ onOpenTrailer }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[85svh] items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:min-h-[100svh] lg:px-0 lg:py-28"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.8] contrast-[1.05] saturate-[0.72]"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Layered cinematic overlays — lighter so footage stays visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,7,7,0.5)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(92,10,10,0.14)_0%,transparent_55%)]" />
      <div className="fog-layer opacity-25" />
      <div className="fog-layer fog-layer-2 opacity-15" />

      {/* Mobile hero branding — hidden on desktop (navbar handles branding) */}
      <button
        type="button"
        onClick={() => scrollTo('home')}
        aria-label="WANYAM home"
        className="absolute left-4 z-20 flex cursor-pointer items-center gap-2.5 border-0 bg-transparent p-0 md:hidden"
        style={{ top: 'calc(16px + env(safe-area-inset-top, 0px))' }}
      >
        <img
          src={wanyamLogo}
          alt=""
          className="h-auto w-11"
          style={{
            filter:
              'drop-shadow(0 2px 10px rgba(0,0,0,0.85)) drop-shadow(0 0 14px rgba(107,15,15,0.35))',
          }}
        />
        <span className="flex flex-col items-start justify-center leading-none">
          <span
            className="font-['Cinzel'] text-[13px] font-bold tracking-[0.22em] text-[#8b1515]"
            style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9), 0 0 12px rgba(107,15,15,0.35)' }}
          >
            WANYAM
          </span>
          <span
            className="mt-1 font-['Cinzel'] text-[10px] tracking-[0.18em] text-white/90"
            style={{ textShadow: '0 1px 5px rgba(0,0,0,0.85)' }}
          >
            วันยาม
          </span>
        </span>
      </button>

      <div className="relative z-10 mx-auto w-full max-w-7xl pt-14 text-center md:pt-0 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 md:space-y-4"
        >
          <p className="hero-eyebrow font-['Inter'] text-[10px] uppercase tracking-[0.38em] text-[#aaa] md:text-[11px]">
            ININ Studio presents
          </p>
          <h1 className="horror-title text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]">
            WANYAM
          </h1>
          <p className="horror-subtitle text-lg md:text-2xl lg:text-[1.75rem]">
            วันยาม
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="hero-tagline mx-auto mt-6 max-w-md text-sm italic leading-relaxed text-[#c4c0c0] sm:mt-8 md:mt-12 md:max-w-lg md:text-base"
        >
          “You came to watch the house. Something else is watching you.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-5 md:mt-16"
        >
          <Button type="button" onClick={onOpenTrailer}>
            <Play size={15} />
            Watch Trailer
          </Button>
          <Button type="button" variant="ghost" onClick={() => scrollTo('distribute')}>
            <Heart size={15} />
            Wishlist
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.9 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex lg:bottom-10"
      >
        <span className="text-[9px] uppercase tracking-[0.32em] text-[#555]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="block h-9 w-px bg-gradient-to-b from-[#6b0f0f] to-transparent"
        />
      </motion.div>
    </section>
  )
}
