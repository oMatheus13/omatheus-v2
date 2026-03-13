import { Suspense, useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import type { Group } from 'three'
import { gsap } from '@lib/gsap'
import useAssetAvailable from '@hooks/useAssetAvailable'
import LightLeak from '@components/ui/LightLeak/LightLeak'
import SplitTextHeading from '@components/ui/SplitTextHeading/SplitTextHeading'
import styles from './Umoya.module.css'

const VIGOTA_URL = '/models/umoya/vigota.glb'
const VIGOTA_ALT_URL = encodeURI('/models/umoya/Lajota EPS H8.glb')
const PINGADEIRA_URL = '/models/umoya/pingadeira.glb'

function RotatingModel({ url, position }: { url: string; position: [number, number, number] }) {
  const { scene } = useGLTF(url)
  const modelRef = useRef<Group | null>(null)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002
    }
  })

  return <primitive object={scene} ref={modelRef} position={position} />
}

export default function Umoya() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const leakRef = useRef<HTMLDivElement | null>(null)
  const hasVigotaAlt = useAssetAvailable(VIGOTA_ALT_URL)
  const hasVigotaDefault = useAssetAvailable(VIGOTA_URL)
  const hasVigota = hasVigotaAlt || hasVigotaDefault
  const vigotaUrl = hasVigotaAlt ? VIGOTA_ALT_URL : VIGOTA_URL
  const hasPingadeira = useAssetAvailable(PINGADEIRA_URL)

  useLayoutEffect(() => {
    if (!leakRef.current || !sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.to(leakRef.current, {
        y: 30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className={styles.umoya} ref={sectionRef}>
      <div className={styles.divider}>
        <p>Recomecar nao quer dizer que eu errei. E melhorar o que ja estava bom.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <SplitTextHeading as="h2">Umoya</SplitTextHeading>
          <p>
            O pai soltou uma ideia ao ar. Matheus nao recusou. Largou tudo. Foi
            construir com as maos - com concreto e com tudo que havia aprendido ate ali.
          </p>
          {/* TODO: confirmar URL com cliente */}
          <a
            className={styles.cta}
            href="https://umoya.omatheus.com"
            target="_blank"
            rel="noreferrer"
            data-cursor-size="48"
            data-cursor-color="#b97d52"
          >
            Conheca a Umoya &rarr;
          </a>
        </div>
        <div className={styles.models}>
          <LightLeak ref={leakRef} color="#b97d52" size={300} className={styles.leak} />
          {(hasVigota || hasPingadeira) && (
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
                <ambientLight intensity={0.4} />
                <pointLight position={[3, 3, 3]} intensity={1.4} color="#b97d52" />
                {hasVigota ? <RotatingModel url={vigotaUrl} position={[-1.2, 0, 0]} /> : null}
                {hasPingadeira ? (
                  <RotatingModel url={PINGADEIRA_URL} position={[1.4, 0, 0]} />
                ) : null}
              </Canvas>
            </Suspense>
          )}
        </div>
      </div>
    </section>
  )
}
