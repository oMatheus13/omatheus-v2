import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from '@lib/gsap'
import styles from './Header.module.css'

const links = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Fragmentos', to: '/fragmentos' },
  { label: 'Ferramentas', to: '/ferramentas' },
  { label: 'Contato', to: '/contato' }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const overlayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useLayoutEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const ctx = gsap.context(() => {
      gsap.set(overlay, { clipPath: 'inset(0 100% 0 0)', pointerEvents: 'none' })
    }, overlay)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return
    const menuLinks = overlay.querySelectorAll(`.${styles.menuLink}`)

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const tl = gsap.timeline()
      tl.set(overlay, { pointerEvents: 'auto' })
      tl.to(overlay, {
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.6,
        ease: 'power3.inOut'
      })
      tl.fromTo(
        menuLinks,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
        '-=0.2'
      )
    } else {
      document.body.style.overflow = ''
      gsap.to(overlay, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.4,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.set(overlay, { pointerEvents: 'none' })
        }
      })
    }
  }, [isOpen])

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link className={styles.logo} to="/" data-cursor-size="48">
            MATHEUS FARIAS
          </Link>
          <button
            className={styles.menuButton}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            aria-controls="menu-overlay"
            onClick={() => setIsOpen(true)}
            data-cursor-size="48"
            data-cursor-color="#b97d52"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={styles.menuOverlay} id="menu-overlay" ref={overlayRef}>
        <button
          className={styles.closeButton}
          type="button"
          aria-label="Fechar menu"
          onClick={() => setIsOpen(false)}
          data-cursor-size="48"
          data-cursor-color="#b97d52"
        >
          <span />
          <span />
        </button>
        <nav className={styles.menuNav}>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={styles.menuLink}
              onClick={() => setIsOpen(false)}
              data-cursor-size="64"
              data-cursor-color="#b97d52"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
