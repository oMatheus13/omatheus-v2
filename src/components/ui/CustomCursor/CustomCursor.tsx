import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import styles from './CustomCursor.module.css'

const DEFAULT_SIZE = 24
const DEFAULT_COLOR = '#f0ebe0'

function setRingStyle(el: HTMLDivElement | null, size: number, color: string) {
  if (!el) return
  el.style.setProperty('--ring-size', `${size}px`)
  el.style.setProperty('--ring-color', color)
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const ringAnimRef = useRef<ReturnType<typeof animate> | null>(null)

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return

    const handleMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`
        dotRef.current.style.top = `${clientY}px`
      }

      if (ringRef.current) {
        ringAnimRef.current?.pause()
        ringAnimRef.current = animate(ringRef.current, {
          left: clientX,
          top: clientY,
          duration: 120,
          easing: 'easeOutQuad'
        })
      }
    }

    const handleOver = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        '[data-cursor-size], [data-cursor-color]'
      )
      const size = target?.dataset.cursorSize
      const color = target?.dataset.cursorColor
      if (!size && !color) return
      setRingStyle(ringRef.current, Number(size) || DEFAULT_SIZE, color || DEFAULT_COLOR)
    }

    const handleOut = (event: MouseEvent) => {
      const related = (event.relatedTarget as HTMLElement | null)?.closest<HTMLElement>(
        '[data-cursor-size], [data-cursor-color]'
      )
      if (related) return
      setRingStyle(ringRef.current, DEFAULT_SIZE, DEFAULT_COLOR)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [])

  return (
    <>
      <div className={styles.dot} ref={dotRef} />
      <div className={styles.ring} ref={ringRef} />
    </>
  )
}
