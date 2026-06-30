import { useEffect, useRef, useState } from 'react'

export function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const num = parseFloat(target.replace(/[^0-9.]/g, ''))
        const suffix = target.replace(/[0-9.]/g, '')
        const steps = 60
        const increment = num / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= num) { current = num; clearInterval(timer) }
          setCount(suffix === '%' || suffix === '×' || suffix === '°'
            ? Math.round(current) + suffix
            : Math.round(current))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, count }
}
