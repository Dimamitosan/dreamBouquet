import styles from './styles/testimonials.module.css'
import gif from './styles/flowers_field.gif'

function Testimonials() {
  return (
    <div className={styles.testimonials}>
      {/* <img className={styles.img} src={gif} alt="" /> */}
      <div className={styles.portfolio_text}>portfolio_text</div>
      <div className={styles.portfolio_buttons}>portfolio_buttons</div>
      <div className={styles.portfolio_photos}>portfolio_photos</div>
    </div>
  )
}

export default Testimonials
