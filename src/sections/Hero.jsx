import { motion } from 'framer-motion'
import { Heart, Play } from 'lucide-react'
import Button from '../components/ui/Button'
import heroVideo from '../assets/VDO/Intro.mp4'
import heroPoster from '../assets/Hero_FIX.png'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero({ onOpenTrailer }) {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden py-20 md:py-28">
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.28] saturate-[0.55] contrast-[1.08]"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-[#070707]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#070707_88%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(92,10,10,0.12)_0%,transparent_55%)]" />
      <div className="fog-layer opacity-50" />
      <div className="fog-layer fog-layer-2 opacity-35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 md:space-y-4"
        >
          <p className="font-['Inter'] text-[10px] uppercase tracking-[0.38em] text-[#666] md:text-[11px]">
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
          className="mx-auto mt-10 max-w-md text-sm italic leading-relaxed text-[#888] md:mt-12 md:max-w-lg md:text-base"
        >
          “Some houses should never be watched.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:mt-14 sm:flex-row md:mt-16"
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
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2.5"
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
