import styles from './Contato.module.css'

export default function Contato() {
  return (
    <section className={styles.contato}>
      <div className={styles.inner}>
        <p>Se algo aqui fez sentido pra voce - me fala.</p>
        {/* TODO: confirmar URL com cliente */}
        <a href="#" className={styles.link} data-cursor-size="48" data-cursor-color="#b97d52">
          chamar no WhatsApp
        </a>
      </div>
    </section>
  )
}
