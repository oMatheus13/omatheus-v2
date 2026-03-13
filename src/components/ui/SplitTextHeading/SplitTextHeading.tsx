import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@lib/gsap'
import { SplitText } from 'gsap/SplitText'

type SplitTextHeadingProps = {
  as?: 'h1' | 'h2'
  className?: string
  children: string
}

export default function SplitTextHeading({ as = 'h2', className, children }: SplitTextHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const Component = as

  useLayoutEffect(() => {
    if (!headingRef.current) return
    const split = new SplitText(headingRef.current, { type: 'words' })
    const ctx = gsap.context(() => {
      gsap.fromTo(
        split.words,
        {
          opacity: 0,
          x: (index: number) => (index % 3 === 0 ? -60 : index % 3 === 2 ? 60 : 0),
          y: (index: number) => (index % 3 === 1 ? 40 : 0)
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%'
          }
        }
      )
    }, headingRef)

    return () => {
      split.revert()
      ctx.revert()
    }
  }, [])

  return (
    <Component ref={headingRef} className={className}>
      {children}
    </Component>
  )
}
