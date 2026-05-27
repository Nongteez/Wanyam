import { motion } from 'framer-motion'
import { Play, Heart } from 'lucide-react'
import { useState } from 'react'
import heroVideo from '../assets/VDO/Intro.mp4'
import heroPoster from '../assets/Hero_FIX.png'

export default function Hero() {
  const [trailerOpen, setTrailerOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="hero-section">
      {/* Video Background */}
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay" />
      <div className="hero-vignette" />

      {/* Fog Layers */}
      <div className="fog-layer" />
      <div className="fog-layer fog-layer-2" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Title */}
          <h1 className="hero-title flicker-text text-white">
            WANYAM
          </h1>
          <p className="hero-title-thai font-['Outfit']">วันยาม</p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-8 text-[#888] text-sm md:text-base tracking-[4px] uppercase font-['Inter'] font-light italic"
        >
          "Some houses should never be watched."
        </motion.p>

        {/* Blood line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="blood-line mt-8"
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            className="btn-blood flex items-center gap-3"
            onClick={() => setTrailerOpen(true)}
          >
            <Play size={18} />
            Watch Trailer
          </button>
          <button
            className="btn-ghost flex items-center gap-3"
            onClick={() => scrollTo('distribute')}
          >
            <Heart size={18} />
            Wishlist Now
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[3px] uppercase text-[#555] font-['Inter']">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#dc143c] to-transparent"
        />
      </motion.div>

      {/* Trailer Modal */}
      {trailerOpen && (
        <motion.div
          className="fixed inset-0 z-[10001] bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setTrailerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Trailer"
        >
          <motion.div
            className="w-full max-w-5xl cursor-auto"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl border border-[rgba(139,0,0,0.25)] bg-[#070707] shadow-[0_0_80px_rgba(139,0,0,0.18)]">
              <video
                src={heroVideo}
                controls
                autoPlay
                className="w-full h-auto"
              />
            </div>
            <div className="mt-3 text-center">
              <button
                className="btn-ghost"
                onClick={() => setTrailerOpen(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
