import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import person1 from '../assets/Person/Person1.jpg'
import person2 from '../assets/Person/Person2.jpg'
import person3 from '../assets/Person/Person3.jpg'
import person4 from '../assets/Person/Person4.jpg'
import person5 from '../assets/Person/Person5.jpg'

const teamMembers = [
  {
    name: 'SATJAWAT WONSANTHIE',
    position: 'Chief Executive Officer',
    desc: 'Building the future of interactive storytelling.',
    image: person1,
    link: '#',
  },
  {
    name: 'APISIT KHAMPHONG',
    position: 'Creative Director',
    desc: 'Crafting immersive horror experiences from Thai folklore.',
    image: person2,
    link: '#',
  },
  {
    name: 'THANAPORN SIRILAK',
    position: 'Lead Developer',
    desc: 'Engineering the technical backbone of our horror worlds.',
    image: person3,
    link: '#',
  },
  {
    name: 'NATTAWUT PRASERTSRI',
    position: 'Art Director',
    desc: 'Designing the visual identity of fear and darkness.',
    image: person4,
    link: '#',
  },
  {
    name: 'KAMONPAT THONGBAI',
    position: 'Sound Designer',
    desc: 'Creating the auditory landscape of terror and suspense.',
    image: person5,
    link: '#',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">The Creators</p>
          <h2 className="section-title">Our Team</h2>
          <div className="blood-line mt-6" />
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="team-card"
            >
              <img
                src={member.image}
                alt={member.name}
                className="team-avatar"
                loading="lazy"
              />
              <h4 className="font-['Outfit'] font-bold text-white text-xs tracking-wide mb-1 uppercase">
                {member.name}
              </h4>
              <p className="text-[#dc143c] text-[10px] tracking-[2px] uppercase font-['Inter'] mb-3">
                {member.position}
              </p>
              <p className="text-[#666] text-xs leading-relaxed mb-5">
                {member.desc}
              </p>
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 border border-[rgba(139,0,0,0.3)] rounded-full text-[10px] tracking-[2px] uppercase text-[#888] no-underline font-['Inter'] transition-all duration-300 hover:border-[#dc143c] hover:text-[#dc143c] hover:shadow-[0_0_20px_rgba(220,20,60,0.2)]"
              >
                Connect
                <ArrowUpRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
