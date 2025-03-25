import styles from './styles/contacts.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone,
  faMapLocationDot,
} from '@fortawesome/free-solid-svg-icons'

function Contacts() {
  return (
    <div className={styles.contacts__container}>
      <p className={styles.title}>Reach Out</p>
      <div className={styles.contact__row}>
        <div className={styles.block}>
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel: +12345678910">+12345678910</a>
        </div>
        <div className={styles.block}>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto: dreamBouquet@pochta.com">dreamBouquet@pochta.com</a>
        </div>
        <div className={styles.block}>
          <FontAwesomeIcon icon={faMapLocationDot} />
          <p>Moscow</p>
        </div>
      </div>
      <div className={styles.map}>dsasda</div>
    </div>
  )
}

export default Contacts
