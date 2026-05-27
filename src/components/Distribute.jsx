import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

const platforms = [
  {
    name: 'Steam',
    desc: 'Available on the world\'s largest PC gaming platform',
    url: 'https://store.steampowered.com/',
    logo: (
      <svg viewBox="0 0 256 259" className="w-16 h-16" fill="currentColor">
        <path d="M127.779 0C57.895 0 .684 55.048.049 124.388L69.08 152.9a36.063 36.063 0 0 1 20.39-6.29l.098-.003 30.547-44.27v-.622c0-26.514 21.574-48.089 48.088-48.089 26.515 0 48.09 21.575 48.09 48.09 0 26.546-21.575 48.12-48.09 48.12h-1.12l-43.56 31.088c-.063 0-.063.063-.063.126 0 19.962-16.209 36.171-36.171 36.171a36.291 36.291 0 0 1-35.606-29.44L2.68 161.065C17.242 216.148 67.726 256.32 127.78 256.32c70.756 0 128.131-57.377 128.131-128.16C255.912 57.378 198.535 0 127.779 0zM80.556 196.6l-14.629-6.04a27.065 27.065 0 0 0 14.208 13.39c13.144 5.445 28.264-.873 33.709-14.017 2.627-6.354 2.658-13.33.06-19.746a27.294 27.294 0 0 0-14.757-14.568c-6.23-2.564-12.776-2.69-18.752-1.005l15.147 6.26c9.694 4.012 14.302 15.116 10.29 24.81-4.012 9.695-15.116 14.303-24.811 10.29l.535-.374zm108.2-53.235c0-17.68-14.378-32.058-32.058-32.058-17.68 0-32.059 14.378-32.059 32.058s14.378 32.059 32.06 32.059c17.68 0 32.058-14.38 32.058-32.06zm-56.092.063c0-13.27 10.791-24.06 24.06-24.06 13.27 0 24.06 10.79 24.06 24.06 0 13.27-10.79 24.06-24.06 24.06-13.269 0-24.06-10.79-24.06-24.06z" />
      </svg>
    ),
  },
  {
    name: 'Epic Games',
    desc: 'Coming to the Epic Games Store',
    url: 'https://www.epicgames.com/',
    logo: (
      <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
        <path d="M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44c0 .252.006.507.034.756.075.76.456 1.26 1.188 1.518l8.71 3.117c.383.137.776.17 1.16.17h.312c.384 0 .777-.033 1.16-.17l8.71-3.116c.732-.259 1.114-.759 1.189-1.519.027-.249.033-.504.033-.756V1.879C24.156.506 23.65 0 22.279 0H3.537zm14.394 3.14c.673 0 .997.338.997.996v5.588c0 .341 0 .685-.043 1.026-.122 1.042-.672 1.58-1.714 1.58-.459 0-.876-.107-1.253-.32l-.12-.071V5.545c0-.188-.083-.282-.271-.282h-1.121c-.188 0-.282.094-.282.282v7.293c0 .188.094.282.282.282h.987c.16 0 .255-.058.347-.196l.25-.393c.494.459 1.162.716 1.857.714 1.621 0 2.547-1.078 2.69-2.688.03-.348.044-.697.044-1.046V4.136c0-.658-.333-.996-.996-.996h-7.963c-.663 0-.996.338-.996.996v11.08c0 .659.333.997.996.997h7.963c.475 0 .842-.19.994-.592l.18-.471c.066-.17.147-.239.333-.239h1.01c.188 0 .282.094.282.282v1.2c0 .93-.47 1.4-1.4 1.4H9.187c-.93 0-1.4-.47-1.4-1.4V4.14c0-.93.47-1.4 1.4-1.4l8.744.001zM7.72 4.858c.188 0 .282.094.282.282v10.514c0 .188-.094.282-.282.282H6.698c-.188 0-.282-.094-.282-.282V5.14c0-.188.094-.282.282-.282H7.72z" />
      </svg>
    ),
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Distribute() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="distribute" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,0,0,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Get The Game</p>
          <h2 className="section-title">Available On</h2>
          <div className="blood-line mt-6" />
        </motion.div>

        {/* Platform Cards */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {platforms.map((platform, i) => (
            <motion.a
              key={i}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              className="platform-card group no-underline"
            >
              <div className="text-[#888] group-hover:text-[#dc143c] transition-colors duration-500 mb-6">
                {platform.logo}
              </div>
              <h3 className="font-['Outfit'] font-bold text-xl text-white mb-2 tracking-wide">
                {platform.name}
              </h3>
              <p className="text-[#666] text-sm mb-6">
                {platform.desc}
              </p>
              <div className="flex items-center justify-center gap-2 text-[#888] group-hover:text-[#dc143c] transition-colors text-xs tracking-[2px] uppercase">
                <span>Visit Store</span>
                <ExternalLink size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
