import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gamepad2, Sparkles, Globe } from 'lucide-react'
import ininLogo from '../assets/Logo/YOLO-TEAM.png'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const stats = [
  { icon: Gamepad2, label: 'Games in Development', value: '2+' },
  { icon: Sparkles, label: 'Team Members', value: '10+' },
  { icon: Globe, label: 'Countries Reached', value: '15+' },
]

export default function Studio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(139,0,0,0.03)] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(139,0,0,0.2)] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Logo & Visual */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative mb-8">
              <img
                src={ininLogo}
                alt="ININ Studio"
                className="w-32 h-32 object-contain"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.15)_0%,transparent_70%)] blur-2xl" />
            </div>
            <div className="grid grid-cols-3 gap-6 w-full max-w-sm">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 text-[#dc143c] mx-auto mb-2" strokeWidth={1.5} />
                  <p className="font-['Outfit'] font-bold text-xl text-white">{stat.value}</p>
                  <p className="text-[#555] text-[9px] tracking-[1px] uppercase mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="section-subtitle mb-4">The Studio Behind WANYAM</p>
            <h2 className="font-['Outfit'] font-bold text-3xl md:text-4xl text-white mb-6">
              ININ <span className="text-[#dc143c]">Studio</span>
            </h2>
            <div className="blood-line !mx-0 mb-8" />
            <p className="text-[#999] leading-relaxed mb-6 text-sm md:text-base">
              ININ Studio is an independent game development studio focused on immersive storytelling,
              psychological horror, and Thai-inspired interactive experiences.
            </p>
            <p className="text-[#777] leading-relaxed text-sm">
              Founded with a passion for pushing the boundaries of interactive horror,
              our team combines cutting-edge technology with deep cultural narratives to
              create experiences that resonate on a primal level. Every game we craft is
              a journey into the unknown.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
