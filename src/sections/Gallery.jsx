import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Container from '../components/layout/Container'
import Section from '../components/layout/Section'
import SectionHeader from '../components/layout/SectionHeader'
import Modal from '../components/ui/Modal'
import { SCREENSHOTS } from '../data/site'

const SWIPE_THRESHOLD = 48

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef(null)

  const total = SCREENSHOTS.length
  const next = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total])
  const prev = useCallback(() => setActiveIndex((i) => (i + total - 1) % total), [total])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    touchStartX.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    if (delta > 0) next()
    else prev()
  }

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

  const thumbButtons = useMemo(
    () =>
      SCREENSHOTS.map((shot, index) => {
        const selected = index === activeIndex
        return (
          <button
            key={shot.alt}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`shrink-0 snap-center overflow-hidden rounded-lg border p-0 transition cursor-pointer ${
              selected
                ? 'border-[#6b0f0f]/50 shadow-[0_0_20px_rgba(107,15,15,0.12)]'
                : 'border-white/10 hover:border-[#6b0f0f]/25'
            }`}
            aria-label={`View ${shot.alt}`}
            aria-current={selected ? 'true' : undefined}
          >
            <div className="aspect-video w-[108px] sm:w-[140px] md:w-[160px]">
              <img
                src={shot.src}
                alt={shot.alt}
                className="h-full w-full object-cover opacity-80 hover:opacity-100"
                loading="lazy"
                draggable={false}
              />
            </div>
          </button>
        )
      }),
    [activeIndex],
  )

  return (
    <Section id="gallery">
      <Container>
        <SectionHeader
          eyebrow="Media"
          title="Gameplay Gallery"
          description="Steam-style screenshot viewer. Select a thumbnail or open the full preview."
        />

        <div
          className="relative -mx-4 overflow-hidden rounded-none border-y border-white/10 bg-[#0c0c0c] sm:mx-0 sm:rounded-2xl sm:border"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex items-center justify-between border-b border-white/5 px-4 py-3 sm:px-5 sm:py-4 md:px-6">
            <p className="font-['Inter'] text-[10px] uppercase tracking-[0.22em] text-[#666]">
              Screenshots
            </p>
            <button
              type="button"
              onClick={() => setViewerOpen(true)}
              className="cursor-pointer border-0 bg-transparent font-['Inter'] text-[10px] uppercase tracking-[0.18em] text-[#888] transition hover:text-[#6b0f0f]"
            >
              Open viewer
            </button>
          </div>

          <div className="p-4 sm:p-5 md:p-6">
            <div className="relative">
              <button
                type="button"
                onClick={() => setViewerOpen(true)}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="group w-full touch-pan-y overflow-hidden rounded-xl border border-white/[0.06] bg-black/40 p-0 cursor-zoom-in"
                aria-label="Open screenshot viewer"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22 }}
                    className="aspect-video"
                  >
                    <img
                      src={active.src}
                      alt={active.alt}
                      className="h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </button>

              <button
                type="button"
                onClick={prev}
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white shadow-[0_0_20px_rgba(92,10,10,0.12)] backdrop-blur-md transition-all duration-300 hover:border-[#6b0f0f]/40 hover:bg-black/70 sm:left-4 md:left-6 md:h-11 md:w-11"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white shadow-[0_0_20px_rgba(92,10,10,0.12)] backdrop-blur-md transition-all duration-300 hover:border-[#6b0f0f]/40 hover:bg-black/70 sm:right-4 md:right-6 md:h-11 md:w-11"
                aria-label="Next screenshot"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <p className="mt-3 text-center font-['Inter'] text-[10px] uppercase tracking-[0.18em] text-[#555] md:hidden">
              Swipe to browse · Tap to expand
            </p>

            <div className="thumb-strip -mx-1 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-1 pb-2 [-webkit-overflow-scrolling:touch]">
              {thumbButtons}
            </div>
          </div>
        </div>
      </Container>

      <Modal
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        title={`Screenshot ${activeIndex + 1} / ${SCREENSHOTS.length}`}
      >
        <div
          className="overflow-hidden rounded-xl border border-white/[0.06]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
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
              draggable={false}
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

        <div className="thumb-strip mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-1 [-webkit-overflow-scrolling:touch]">
          {SCREENSHOTS.map((shot, index) => {
            const selected = index === activeIndex
            return (
              <button
                key={shot.alt}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`shrink-0 snap-center overflow-hidden rounded-lg border p-0 transition cursor-pointer ${
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
