import { Suspense, useLayoutEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import type { Group } from 'three'
import { gsap } from '@lib/gsap'
import useAssetAvailable from '@hooks/useAssetAvailable'
import styles from './Origem.module.css'

type OrigemItem = {
  id: string
  text: string
  align: 'left' | 'right' | 'center'
  model?: string
}

const origemItems: OrigemItem[] = [
  {
    id: 'palitos',
    text:
      'Antes dos 10 anos, catava palitos de picole do chao na saida da escola pra fazer experimentos que via na internet. Nao tinha os materiais - entao ia atras.',
    align: 'left',
    model: '/models/historia/palitos.glb'
  },
  {
    id: 'bolo-tear',
    text:
      'Vendia bolo no pote, biscoito, sacole. Aprendeu croche com a filha da vizinha. Fez cachecois no tear de pregos e vendeu. Nunca esperou ter tudo pra comecar.',
    align: 'right',
    model: '/models/historia/tear.glb'
  },
  {
    id: 'blender',
    text:
      'Aos 13, criou canal no YouTube, aprendeu a editar video e render no Blender - tudo na raca, num PC tao antigo que nem tem no Google. Fez uma render que levou 12 horas pra processar. Ficou olhando o progresso a noite toda.',
    align: 'left',
    model: '/models/historia/relogio.glb'
  },
  {
    id: 'notebook',
    text:
      'O notebook veio depois - trocou o celular por ele. Em 7 dias a tela ficou toda verde. Trabalhou assim por mais de um ano usando AnyDesk no celular pra ver as cores. Foi nesse periodo que aprendeu Illustrator, criou marcas, fez o trabalho de uma editora inteira sozinho.',
    align: 'right',
    model: '/models/historia/notebook.glb'
  },
  {
    id: 'virada',
    text:
      'Cada fase alimentou a proxima. O croche ensinou paciencia. O Blender ensinou forma. O Illustrator ensinou identidade. Os livros ensinaram narrativa. O codigo ensinou estrutura. Nenhuma foi em vao - porque tudo isso chegou ao mesmo tempo numa manha em que meu pai soltou uma ideia ao ar.',
    align: 'center'
  }
]

function FloatingModel({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const modelRef = useRef<Group | null>(null)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003
      modelRef.current.rotation.x += 0.001
    }
  })

  return <primitive object={scene} ref={modelRef} scale={1} />
}

function OrigemBlock({ item, index }: { item: OrigemItem; index: number }) {
  const hasModel = useAssetAvailable(item.model)
  const showModel = Boolean(item.model && hasModel)
  const alignClass =
    item.align === 'left' ? styles.left : item.align === 'right' ? styles.right : ''
  const blockRef = useRef<HTMLDivElement | null>(null)
  const modelRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const x = item.align === 'left' ? -60 : item.align === 'right' ? 60 : 0
      const y = item.align === 'center' ? 40 : 0

      if (blockRef.current) {
        gsap.fromTo(
          blockRef.current,
          { opacity: 0, x, y },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: blockRef.current,
              start: 'top 80%'
            }
          }
        )
      }

      if (showModel && modelRef.current) {
        gsap.fromTo(
          modelRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: modelRef.current,
              start: 'top 80%'
            }
          }
        )
      }
    }, blockRef)

    return () => ctx.revert()
  }, [item.align, showModel])

  return (
    <div
      className={`${styles.block} ${alignClass} ${item.align === 'center' ? styles.pivot : ''} ${
        showModel ? '' : styles.noModel
      }`}
      ref={blockRef}
      style={{ marginTop: index === 0 ? 0 : index % 2 === 0 ? 120 : 80 }}
    >
      <div className={styles.text}>
        <p>{item.text}</p>
      </div>
      {item.align !== 'center' && showModel ? (
        <div className={styles.model} ref={modelRef}>
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]}>
              <ambientLight intensity={0.4} />
              <pointLight position={[2, 2, 2]} intensity={1} color="#b97d52" />
              <FloatingModel url={item.model as string} />
            </Canvas>
          </Suspense>
        </div>
      ) : null}
      {item.align !== 'center' ? <span className={styles.connector} /> : null}
    </div>
  )
}

export default function Origem() {
  return (
    <section className={styles.origem}>
      <div className={styles.inner}>
        {origemItems.map((item, index) => (
          <OrigemBlock key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}
