import { Suspense, useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { gsap } from '@lib/gsap'
import useAssetAvailable from '@hooks/useAssetAvailable'
import LightLeak from '@components/ui/LightLeak/LightLeak'
import SplitTextHeading from '@components/ui/SplitTextHeading/SplitTextHeading'
import styles from './CIER.module.css'

const PILLAR_URL = '/models/cier/pilar.glb'

const pillars = [
  {
    id: 'C',
    name: 'Coragem',
    lines: ['Dizer sim antes de saber tudo.', 'Sempre foi assim.'],
    light: '#b97d52',
    leak: '#b97d52'
  },
  {
    id: 'I',
    name: 'Improviso',
    lines: ['Sem o material certo.', 'Com o que tinha.'],
    light: '#3d4f3c',
    leak: '#3d4f3c'
  },
  {
    id: 'E',
    name: 'Execucao',
    lines: ['Enquanto aprendia, ja fazia.', 'Sempre ao mesmo tempo.'],
    light: '#f0ebe0',
    leak: '#f0ebe0',
    leakOpacity: 0.06
  },
  {
    id: 'R',
    name: 'Recomeco',
    lines: ['Nao e fracasso.', 'E a proxima versao do que ja estava bom.'],
    light: '#e8e8f0',
    leak: '#e8e8f0'
  }
]

function PillarModel({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={1.1} position={[0, -1.4, 0]} />
}

function PillarPanel({
  letter,
  name,
  lines,
  light,
  leak,
  leakOpacity,
  hasPillar
}: {
  letter: string
  name: string
  lines: string[]
  light: string
  leak: string
  leakOpacity?: number
  hasPillar: boolean
}) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const modelRef = useRef<HTMLDivElement | null>(null)
  const leakRef = useRef<HTMLDivElement | null>(null)
  useLayoutEffect(() => {
    if (!panelRef.current) return
    const ctx = gsap.context(() => {
      if (modelRef.current) {
        gsap.to(modelRef.current, {
          y: 40,
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      }

      if (leakRef.current) {
        gsap.to(leakRef.current, {
          y: 30,
          scrollTrigger: {
            trigger: panelRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        })
      }
    }, panelRef)

    return () => ctx.revert()
  }, [hasPillar])

  return (
    <div className={styles.panel} ref={panelRef}>
      <LightLeak
        ref={leakRef}
        color={leak}
        size={500}
        className={styles.leak}
        style={{ opacity: leakOpacity ?? 0.12 }}
      />
      <div className={styles.letterBack}>{letter}</div>
      {hasPillar ? (
        <div className={styles.model} ref={modelRef}>
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
              <ambientLight intensity={0.3} />
              <pointLight position={[2, 3, 2]} intensity={1.2} color={light} />
              <PillarModel url={PILLAR_URL} />
            </Canvas>
          </Suspense>
        </div>
      ) : null}
      <div className={styles.letterFront}>{letter}</div>
      <div className={styles.text}>
        <SplitTextHeading as="h2" className={styles.name}>
          {name}
        </SplitTextHeading>
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )
}

export default function CIER() {
  const hasPillar = useAssetAvailable(PILLAR_URL)

  return (
    <section className={styles.cier}>
      {pillars.map((pillar) => (
        <PillarPanel
          key={pillar.id}
          letter={pillar.id}
          name={pillar.name}
          lines={pillar.lines}
          light={pillar.light}
          leak={pillar.leak}
          leakOpacity={pillar.leakOpacity}
          hasPillar={hasPillar}
        />
      ))}
      <div className={styles.ctaWrap}>
        <Link className={styles.cta} to="/sobre" data-cursor-size="48" data-cursor-color="#b97d52">
          entender o CIER &rarr;
        </Link>
      </div>
    </section>
  )
}
