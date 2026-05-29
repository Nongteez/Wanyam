import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 max-w-2xl sm:mb-12 md:mb-20 ${alignClass}`}
    >
      {eyebrow && (
        <p className="font-['Inter'] text-[11px] font-medium uppercase tracking-[0.28em] text-[#666]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 font-['Cinzel'] text-3xl font-bold tracking-wide text-[#e8e4e4] md:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      <div
        className={`blood-line mt-6 w-16 ${align === 'center' ? 'mx-auto' : ''}`}
      />
      {description && (
        <p className="mt-6 text-sm leading-relaxed text-[#888] md:text-[15px]">{description}</p>
      )}
    </motion.header>
  )
}
