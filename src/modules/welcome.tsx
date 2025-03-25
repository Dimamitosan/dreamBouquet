import styles from './styles/welcome.module.css'
import gif from './styles/flowers_field.gif'

function Welcome() {
  return (
    <div className={styles.about__container}>
      {/* <img className={styles.img} src={gif} alt="" /> */}
      <div className={styles.block}>
        <div className={styles.about_name}>
          Dream <br /> Bouquet
        </div>
        <div className={styles.about_text}>You're in great hands.</div>
        <button className={styles.about_button}>Contact Us</button>
      </div>
    </div>
  )
}

export default Welcome
