import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import instagramIcon from '../assets/Contact/Logo_Instragram.png'
import facebookIcon from '../assets/Contact/Logo_Facebook.png'
import tiktokIcon from '../assets/Contact/Logo_Tiktok.png'
import discordIcon from '../assets/Contact/Logo_Discord.png'
import youtubeIcon from '../assets/Contact/Logo_Youtube.png'

const socials = [
  {
    name: 'Instagram',
    icon: instagramIcon,
    url: 'https://www.instagram.com/',
    color: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
  },
  {
    name: 'Facebook',
    icon: facebookIcon,
    url: 'https://www.facebook.com/',
    color: 'from-[#1877f2] to-[#1877f2]',
  },
  {
    name: 'TikTok',
    icon: tiktokIcon,
    url: 'https://www.tiktok.com/',
    color: 'from-[#00f2ea] to-[#ff0050]',
  },
  {
    name: 'Discord',
    icon: discordIcon,
    url: 'https://discord.com/',
    color: 'from-[#5865f2] to-[#5865f2]',
  },
  {
    name: 'YouTube',
    icon: youtubeIcon,
    url: 'https://www.youtube.com/',
    color: 'from-[#ff0000] to-[#cc0000]',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(139,0,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Stay Connected</p>
          <h2 className="section-title">Contact Us</h2>
          <div className="blood-line mt-6" />
          <p className="text-[#666] text-sm mt-6 max-w-md mx-auto">
            Follow us on social media for the latest updates, behind-the-scenes content, and community events.
          </p>
        </motion.div>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="social-icon-card">
                <img src={social.icon} alt={social.name} />
              </div>
              <span className="text-[10px] tracking-[2px] uppercase text-[#555] group-hover:text-[#dc143c] transition-colors font-['Inter']">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
