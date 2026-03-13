import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { IOptions, RecursivePartial } from '@tsparticles/engine'
import { gsap } from '@lib/gsap'
import { SplitText } from 'gsap/SplitText'
import LightLeak from '@components/ui/LightLeak/LightLeak'
import styles from './Hero.module.css'

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const taglineRef = useRef<HTMLParagraphElement | null>(null)
  const particlesRef = useRef<HTMLDivElement | null>(null)
  const leakRef = useRef<HTMLDivElement | null>(null)

  const [particlesReady, setParticlesReady] = useState(false)

  const particlesOptions = useMemo<RecursivePartial<IOptions>>(
    () => ({
      particles: {
        number: { value: 60 },
        color: { value: '#f0ebe0' },
        opacity: { value: 0.15, random: true },
        size: { value: 1.5, random: true },
        move: {
          enable: true,
          speed: 0.4,
          direction: 'none',
          random: true,
          outModes: 'out'
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse'
          }
        },
        modes: {
          repulse: {
            distance: 80
          }
        }
      },
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      detectRetina: true
    }),
    []
  )

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setParticlesReady(true))
  }, [])

  useLayoutEffect(() => {
    let split: SplitText | null = null
    const ctx = gsap.context(() => {
      if (!titleRef.current || !taglineRef.current) return
      split = new SplitText(titleRef.current, { type: 'chars' })
      const tl = gsap.timeline()
      tl.fromTo(
        split.chars,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.04 }
      )
      tl.fromTo(
        taglineRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.out' }
      )

      if (particlesRef.current) {
        gsap.to(particlesRef.current, {
          opacity: 0,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '30% top',
            scrub: true
          }
        })
      }

      if (leakRef.current) {
        gsap.to(leakRef.current, {
          y: 30,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      }

    }, sectionRef)

    return () => {
      split?.revert()
      ctx.revert()
    }
  }, [])

  return (
    <section className={styles.hero} ref={sectionRef}>
      <div className={styles.particles} ref={particlesRef}>
        {particlesReady ? (
          <Particles id="hero-particles" options={particlesOptions} />
        ) : null}
      </div>
      <LightLeak
        ref={leakRef}
        color="#f0ebe0"
        size={400}
        className={styles.heroLeak}
      />
      <div className={styles.content}>
        <h1 className={styles.title} ref={titleRef}>
          MATHEUS FARIAS
        </h1>
        <p className={styles.tagline} ref={taglineRef}>
          Eu comeco, improviso, executo, erro e recomeco.
        </p>
      </div>
    </section>
  )
}
