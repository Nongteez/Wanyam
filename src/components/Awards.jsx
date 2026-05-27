import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Lightbulb, Trophy } from 'lucide-react'

const awards = [
  {
    icon: Lightbulb,
    title: 'Indie Game Development Grant',
    year: '2024',
    desc: 'Received funding support for innovative indie game development in the Thai gaming industry.',
    status: 'Awarded',
  },
  {
    icon: Award,
    title: 'Thailand Digital Innovation Support',
    year: '2025',
    desc: 'Selected for the national digital innovation program supporting Thai creative technology companies.',
    status: 'Selected',
  },
  {
    icon: Trophy,
    title: 'Horror Game Showcase Selection',
    year: '2025',
    desc: 'Featured in an international horror game showcase highlighting upcoming psychological horror titles.',
    status: 'Featured',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,0,0,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Recognition & Support</p>
          <h2 className="section-title">Awards & Funding</h2>
          <div className="blood-line mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="timeline-item"
            >
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(139,0,0,0.15)] flex items-center justify-center">
                    <award.icon className="w-5 h-5 text-[#dc143c]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h4 className="font-['Outfit'] font-semibold text-white text-sm">
                        {award.title}
                      </h4>
                      <span className="px-2 py-0.5 bg-[rgba(220,20,60,0.15)] text-[#dc143c] text-[9px] tracking-[1px] uppercase rounded-full font-['Inter']">
                        {award.status}
                      </span>
                    </div>
                    <p className="text-[#555] text-[10px] tracking-[2px] uppercase font-['Inter'] mb-2">
                      {award.year}
                    </p>
                    <p className="text-[#777] text-xs leading-relaxed">
                      {award.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
