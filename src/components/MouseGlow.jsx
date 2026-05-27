import { useState, useEffect } from 'react'

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 })

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      className="mouse-glow hidden md:block"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  )
}
