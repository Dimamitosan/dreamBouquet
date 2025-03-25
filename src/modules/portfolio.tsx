import styles from './styles/portfolio.module.css'

import picture from '../pictures/41919.jpg'

function Portfolio() {
  return (
    <div className={styles.portfolio__container}>
      <div className={styles.portfolio_text}>Our portfolio</div>
      <div className={styles.block}>
        <div className={styles.portfolio_buttons}>
          <button className={styles.button}>All Categories</button>
          <div className={styles.pairOfButtons}>
            <button className={styles.button}>All Categories</button>
            <button className={styles.button}>All Categories</button>
          </div>

          <button className={styles.button}>All Categories</button>
        </div>
        <div className={styles.portfolio_photos}>
          <img src={picture} alt="" className={styles.responsive_image} />
          <img src={picture} alt="" className={styles.responsive_image} />
          <img src={picture} alt="" className={styles.responsive_image} />
          <img src={picture} alt="" className={styles.responsive_image} />
          <img src={picture} alt="" className={styles.responsive_image} />
          <img src={picture} alt="" className={styles.responsive_image} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
