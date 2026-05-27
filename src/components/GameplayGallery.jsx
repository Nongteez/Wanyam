import { motion, useInView } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import { X } from 'lucide-react'

import g1 from '../assets/m1.jpg'
import g2 from '../assets/m2.jpg'
import g3 from '../assets/m3.jpg'
import g4 from '../assets/m4.jpg'
import g5 from '../assets/m5.jpg'
import g6 from '../assets/m6.jpg'
import g7 from '../assets/m7.jpg'
import g8 from '../assets/m8.jpg'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function GameplayGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })
  const [lightbox, setLightbox] = useState(null)

  const items = useMemo(
    () => [
      { src: g7, alt: 'WANYAM Gallery 1' },
      { src: g2, alt: 'WANYAM Gallery 2' },
      { src: g3, alt: 'WANYAM Gallery 3' },
      { src: g8, alt: 'WANYAM Gallery 4' },
      { src: g1, alt: 'WANYAM Gallery 5' },
      { src: g4, alt: 'WANYAM Gallery 6' },
      { src: g5, alt: 'WANYAM Gallery 7' },
      { src: g6, alt: 'WANYAM Gallery 8' },
    ],
    [],
  )

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-4">Surveillance Captures</p>
          <h2 className="section-title">Gameplay Gallery</h2>
          <div className="blood-line mt-6" />
          <p className="text-[#666] text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
            Fragments of what the house allowed to be seen. Every frame hides movement in the dark.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          {items.map((img, i) => (
            <motion.button
              key={img.alt}
              type="button"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.06 }}
              onClick={() => setLightbox(img.src)}
              className={[
                'gallery-image relative border border-[rgba(139,0,0,0.12)] bg-transparent p-0',
                i === 0 ? 'col-span-2 md:col-span-7 md:row-span-2 aspect-[16/10]' : '',
                i === 1 ? 'col-span-1 md:col-span-5 aspect-video' : '',
                i === 2 ? 'col-span-1 md:col-span-5 aspect-video' : '',
                i === 3 ? 'col-span-2 md:col-span-6 aspect-[16/10]' : '',
                i === 4 ? 'col-span-1 md:col-span-3 aspect-video' : '',
                i === 5 ? 'col-span-1 md:col-span-3 aspect-video' : '',
                i === 6 ? 'col-span-1 md:col-span-3 aspect-video' : '',
                i === 7 ? 'col-span-1 md:col-span-3 aspect-video' : '',
              ].join(' ')}
              aria-label={`Open ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
      </div>

      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gameplay screenshot"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white bg-transparent border-none cursor-pointer z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img src={lightbox} alt="Enlarged screenshot" />
        </motion.div>
      )}
    </section>
  )
}

