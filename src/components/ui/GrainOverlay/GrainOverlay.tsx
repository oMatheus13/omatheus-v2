import { useEffect, useRef } from 'react'
import styles from './GrainOverlay.module.css'

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let animationFrame = 0

    const resize = () => {
      const scale = 0.5
      canvas.width = Math.floor(window.innerWidth * scale)
      canvas.height = Math.floor(window.innerHeight * scale)
    }

    const render = () => {
      frame += 1
      if (frame % 2 === 0) {
        const { width, height } = canvas
        const imageData = ctx.createImageData(width, height)
        const buffer = imageData.data
        for (let i = 0; i < buffer.length; i += 4) {
          const value = Math.random() * 255
          buffer[i] = value
          buffer[i + 1] = value
          buffer[i + 2] = value
          buffer[i + 3] = 255
        }
        ctx.putImageData(imageData, 0, 0)
      }
      animationFrame = requestAnimationFrame(render)
    }

    resize()
    render()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.grain} aria-hidden="true" />
}
