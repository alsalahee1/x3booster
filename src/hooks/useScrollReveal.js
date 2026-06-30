import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = (target) => {
      target.classList.add('revealed')
      // Cascade to all reveal children inside this element
      target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(child => {
        child.classList.add('revealed')
      })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal(el)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
