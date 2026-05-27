import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Modal from '../components/ui/Modal'
import { SCREENSHOTS } from '../data/site'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [paused, setPaused] = useState(false)

  const total = SCREENSHOTS.length
  const next = useMemo(() => () => setActiveIndex((i) => (i + 1) % total), [total])
  const prev = useMemo(() => () => setActiveIndex((i) => (i + total - 1) % total), [total])

  useEffect(() => {
    if (!viewerOpen) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [viewerOpen, next, prev])

  useEffect(() => {
    if (viewerOpen) return
    if (paused) return
    const id = window.setInterval(() => {
      next()
    }, 5200)
    return () => window.clearInterval(id)
  }, [paused, viewerOpen, next])

  const active = SCREENSHOTS[activeIndex]

  return (
    <Section id="gallery">
      <Container>
        <SectionHeader
          eyebrow="Media"
          title="Gameplay Gallery"
          description="Steam-style screenshot viewer. Select a thumbnail or open the full preview."
        />

        <div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-4 md:px-6">
            <p className="font-['Inter'] text-[10px] uppercase tracking-[0.22em] text-[#666]">
              Screenshots
            </p>
            <button
              type="button"
              onClick={() => setViewerOpen(true)}
              className="border-0 bg-transparent font-['Inter'] text-[10px] uppercase tracking-[0.18em] text-[#888] transition hover:text-[#6b0f0f] cursor-pointer"
            >
              Open viewer
            </button>
          </div>

          <div className="p-5 md:p-6">
            <button
              type="button"
              onClick={() => setViewerOpen(true)}
              className="group w-full overflow-hidden rounded-xl border border-white/[0.06] bg-black/40 p-0 cursor-zoom-in"
              aria-label="Open screenshot viewer"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="aspect-video"
                >
                  <img
                    src={active.src}
                    alt={active.alt}
                    className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                  />
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Floating controls */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-6 top-1/2 -translate-y-1/2 hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white shadow-[0_0_24px_rgba(92,10,10,0.10)] backdrop-blur-md transition-all duration-300 hover:border-[#6b0f0f]/40 hover:bg-black/60 hover:shadow-[0_0_28px_rgba(92,10,10,0.18)] md:flex"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-6 top-1/2 -translate-y-1/2 hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white shadow-[0_0_24px_rgba(92,10,10,0.10)] backdrop-blur-md transition-all duration-300 hover:border-[#6b0f0f]/40 hover:bg-black/60 hover:shadow-[0_0_28px_rgba(92,10,10,0.18)] md:flex"
              aria-label="Next screenshot"
            >
              <ChevronRight size={18} />
            </button>

            <div className="thumb-strip mt-4 flex gap-3 overflow-x-auto pb-1">
              {SCREENSHOTS.map((shot, index) => {
                const selected = index === activeIndex
                return (
                  <button
                    key={shot.alt}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`shrink-0 overflow-hidden rounded-lg border p-0 transition cursor-pointer ${
                      selected
                        ? 'border-[#6b0f0f]/50 shadow-[0_0_20px_rgba(107,15,15,0.12)]'
                        : 'border-white/10 hover:border-[#6b0f0f]/25'
                    }`}
                    aria-label={`View ${shot.alt}`}
                  >
                    <div className="aspect-video w-[140px] md:w-[160px]">
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        className="h-full w-full object-cover opacity-80 hover:opacity-100"
                        loading="lazy"
                      />
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </Container>

      <Modal
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        title={`Screenshot ${activeIndex + 1} / ${SCREENSHOTS.length}`}
      >
        <div className="overflow-hidden rounded-xl border border-white/[0.06]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex}
              src={active.src}
              alt={active.alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="aspect-video w-full object-cover"
            />
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={prev}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-['Inter'] text-[10px] uppercase tracking-[0.18em] text-[#bbb] transition hover:border-[#6b0f0f]/40 hover:bg-[#6b0f0f]/10"
          >
            <ChevronLeft size={14} />
            Prev
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-['Inter'] text-[10px] uppercase tracking-[0.18em] text-[#bbb] transition hover:border-[#6b0f0f]/40 hover:bg-[#6b0f0f]/10"
          >
            Next
            <ChevronRight size={14} />
          </button>
        </div>

        <div className="thumb-strip mt-4 flex gap-3 overflow-x-auto pb-1">
          {SCREENSHOTS.map((shot, index) => {
            const selected = index === activeIndex
            return (
              <button
                key={shot.alt}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 overflow-hidden rounded-lg border p-0 transition cursor-pointer ${
                  selected ? 'border-[#6b0f0f]/50' : 'border-white/10 hover:border-[#6b0f0f]/25'
                }`}
              >
                <div className="aspect-video w-[120px] md:w-[140px]">
                  <img src={shot.src} alt={shot.alt} className="h-full w-full object-cover" />
                </div>
              </button>
            )
          })}
        </div>

        <p className="mt-3 text-xs text-[#666]">
          Press <span className="text-[#888]">ESC</span> to close ·{' '}
          <span className="text-[#888]">←</span>/<span className="text-[#888]">→</span> to navigate
        </p>
      </Modal>
    </Section>
  )
}
