import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Handshake } from 'lucide-react'
import bgImage from '../assets/m7.jpg'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Investment() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 cta-bg" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(139,0,0,0.3)] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(139,0,0,0.3)] to-transparent" />
      </div>

      {/* Large background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Background image */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 1 }}
        >
          {/* Decorative line */}
          <div className="blood-line mb-8" />

          <p className="section-subtitle mb-6">Partner With Us</p>

          <h2 className="font-['Outfit'] font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
            "Join us in building the future of{' '}
            <span className="text-[#dc143c]">Thai horror games</span>."
          </h2>

          <p className="text-[#888] text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12">
            We invite publishers, investors, and partners to collaborate with ININ Studio
            and support WANYAM. Together, we can bring authentic Thai horror to the global stage
            and redefine the genre.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-blood flex items-center gap-3">
              <Mail size={18} />
              Contact Us
            </button>
            <button className="btn-ghost flex items-center gap-3">
              <Handshake size={18} />
              Partnership Inquiry
            </button>
          </div>

          {/* Decorative line */}
          <div className="blood-line mt-12" />
        </motion.div>
      </div>
    </section>
  )
}
