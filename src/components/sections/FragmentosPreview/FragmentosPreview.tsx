import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from '@lib/gsap'
import SplitTextHeading from '@components/ui/SplitTextHeading/SplitTextHeading'
import { fragmentos } from '@data/fragmentos'
import styles from './FragmentosPreview.module.css'

export default function FragmentosPreview() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current) return
    const ctx = gsap.context(() => {
      const track = trackRef.current
      if (!track) return
      const getScrollWidth = () => track.scrollWidth
      const getDistance = () => Math.max(0, getScrollWidth() - window.innerWidth)
      if (getDistance() === 0) return
      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${getScrollWidth()}`
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const ordered = [...fragmentos].sort(
    (a, b) => Number(Boolean(b.destaque)) - Number(Boolean(a.destaque))
  )
  const preview = ordered.slice(0, 3)

  return (
    <section className={styles.fragmentos} ref={sectionRef}>
      <div className={styles.header}>
        <SplitTextHeading as="h2" className={styles.title}>
          Fragmentos
        </SplitTextHeading>
        <p className={styles.subtitle}>
          Cada fase virou cicatriz. Cada cicatriz virou prova.
        </p>
      </div>
      <div className={styles.track} ref={trackRef}>
        {preview.map((fragmento) => (
          <Link
            key={fragmento.id}
            to={`/fragmentos/${fragmento.slug}`}
            className={`${styles.card} ${fragmento.destaque ? styles.featured : ''}`}
            data-cursor-size="48"
            data-cursor-color="#b97d52"
          >
            <div className={styles.thumbnail}>
              <motion.img
                src={fragmento.thumbnail}
                alt={fragmento.titulo}
                layoutId={`fragmento-${fragmento.slug}`}
                loading="lazy"
              />
            </div>
            <div className={styles.meta}>
              <span>{fragmento.categoria}</span>
              <span>{fragmento.ano}</span>
            </div>
            <h3 className={styles.cardTitle}>{fragmento.titulo}</h3>
          </Link>
        ))}
      </div>
      <div className={styles.footer}>
        <Link to="/fragmentos" className={styles.cta} data-cursor-size="48" data-cursor-color="#b97d52">
          Ver todos &rarr;
        </Link>
      </div>
    </section>
  )
}
