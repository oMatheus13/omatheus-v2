import { useLayoutEffect } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { ScrollTrigger } from '@lib/gsap'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
}

export default function PageWrapper({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}
