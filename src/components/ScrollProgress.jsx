import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop || document.body.scrollTop
      const max = el.scrollHeight - el.clientHeight
      setPct(max > 0 ? (scrolled / max) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, zIndex: 9999,
      height: 2, width: `${pct}%`,
      background: 'linear-gradient(90deg, #f5a623, #ff4500)',
      transition: 'width 0.05s linear',
      pointerEvents: 'none',
    }} />
  )
}
