import styles from './styles/portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.portfolio__container}>
      <div className={styles.portfolio_text}>portfolio_text</div>
      <div className={styles.block}>
        <div className={styles.portfolio_buttons}>portfolio_buttons</div>
        <div className={styles.portfolio_photos}>portfolio_photos</div>
      </div>
    </div>
  )
}

export default Portfolio
