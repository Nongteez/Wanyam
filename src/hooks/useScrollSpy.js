import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId = sectionIds[0] ?? ''
        let bestRatio = 0

        for (const id of sectionIds) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }

        if (bestRatio > 0) {
          setActiveId(bestId)
          return
        }

        for (const id of sectionIds) {
          if ((ratios.get(id) ?? 0) > 0) {
            setActiveId(id)
            return
          }
        }
      },
      {
        root: null,
        rootMargin: '-10% 0px -40% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
