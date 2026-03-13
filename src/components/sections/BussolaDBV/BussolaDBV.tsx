import SplitTextHeading from '@components/ui/SplitTextHeading/SplitTextHeading'
import styles from './BussolaDBV.module.css'

export default function BussolaDBV() {
  return (
    <section className={styles.bussola}>
      <div className={styles.card}>
        <span className={styles.badge}>sem fins lucrativos</span>
        <SplitTextHeading as="h2" className={styles.title}>
          Bussola DBV
        </SplitTextHeading>
        <p className={styles.description}>
          Uma plataforma feita por um Desbravador pra quem vive os ideais do clube. Classes,
          especialidades, comunidade - tudo num so lugar.
        </p>
        <a
          className={styles.cta}
          href="https://bussola.omatheus.com"
          target="_blank"
          rel="noreferrer"
          data-cursor-size="48"
          data-cursor-color="#b97d52"
        >
          Conhecer &rarr;
        </a>
      </div>
    </section>
  )
}
