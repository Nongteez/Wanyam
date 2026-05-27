import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Brain, Ghost, Wind, BookOpen, X } from 'lucide-react'
import m1 from '../assets/m1.jpg'
import m2 from '../assets/m2.jpg'
import m3 from '../assets/m3.jpg'
import m4 from '../assets/m4.jpg'
import m5 from '../assets/m5.jpg'
import m6 from '../assets/m6.jpg'

const features = [
  {
    icon: Brain,
    title: 'Psychological Horror',
    desc: 'Deep psychological terror that lingers in your mind long after you stop playing.',
  },
  {
    icon: Ghost,
    title: 'Thai Paranormal Folklore',
    desc: 'Authentic Thai supernatural legends and cultural horror brought to life.',
  },
  {
    icon: Wind,
    title: 'Immersive Atmosphere',
    desc: 'Meticulously crafted soundscapes and visuals that pull you into the darkness.',
  },
  {
    icon: BookOpen,
    title: 'Story-Driven Gameplay',
    desc: 'A gripping narrative that unfolds through exploration and discovery.',
  },
]

const screenshots = [
  { src: m1, alt: 'WANYAM Screenshot 1' },
  { src: m2, alt: 'WANYAM Screenshot 2' },
  { src: m3, alt: 'WANYAM Screenshot 3' },
  { src: m4, alt: 'WANYAM Screenshot 4' },
  { src: m5, alt: 'WANYAM Screenshot 5' },
  { src: m6, alt: 'WANYAM Screenshot 6' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Discover the Terror</p>
          <h2 className="section-title">About The Game</h2>
          <div className="blood-line mt-6" />
        </motion.div>

        {/* Main Content: Images + Description */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Screenshot Gallery */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-3"
          >
            {screenshots.map((img, i) => (
              <div
                key={i}
                className="gallery-image aspect-video"
                onClick={() => setLightbox(img.src)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </motion.div>

          {/* Right: Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-['Outfit'] text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              A Night Guard's Descent<br />
              <span className="text-[#dc143c]">Into Darkness</span>
            </h3>
            <p className="text-[#999] leading-relaxed mb-6 text-sm md:text-base">
              WANYAM is a Thai psychological horror game where players become a night guard
              watching over an abandoned traditional Thai wooden house hiding terrifying
              secrets and paranormal entities.
            </p>
            <p className="text-[#777] leading-relaxed mb-6 text-sm md:text-base">
              Every creak of the wooden floor, every flicker of your flashlight, and every
              shadow that moves in the corner of your vision brings you closer to uncovering
              the dark truth buried within these ancient walls. The house remembers everything—
              and it does not want you here.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <div className="h-[1px] w-12 bg-[#dc143c]" />
              <span className="text-[10px] tracking-[3px] uppercase text-[#666] font-['Inter']">
                Coming Soon
              </span>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="feature-card"
            >
              <feature.icon className="feature-icon" strokeWidth={1.5} />
              <h4 className="font-['Outfit'] font-semibold text-white text-sm tracking-wide mb-2">
                {feature.title}
              </h4>
              <p className="text-[#777] text-xs leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
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
