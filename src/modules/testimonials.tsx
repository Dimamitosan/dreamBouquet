import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import styles from './styles/testimonials.module.css'

const arr = [
  {
    name: 'Anna',
    testimonial:
      "The experience of working with these guys was fantastic. Couldn't have asked for a smoother transition",
  },
  {
    name: 'John',
    testimonial:
      'Absolutely love the service! Highly recommend it to everyone.',
  },
  {
    name: 'Sarah',
    testimonial:
      'A wonderful experience from start to finish. Would definitely use them again!',
  },
]

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + arr.length) % arr.length)
  }

  return (
    <div className={styles.testimonials__container}>
      <div className={styles.testimonials__content}>
        <p className={styles.text}>Testimonials</p>
        <div className={styles.cardsScroller}>
          <button className={styles.arrowButton} onClick={handlePrev}>
            <FontAwesomeIcon size="3x" icon={faChevronLeft} />
          </button>
          <div className={styles.cards}>
            {arr.map((testimonial, index) => {
              const isActive = index === currentIndex
              const isPrevious =
                index === (currentIndex - 1 + arr.length) % arr.length
              const isNext = index === (currentIndex + 1) % arr.length

              return (
                <div
                  className={`${styles.card} ${isActive ? styles.active : ''} ${
                    isPrevious ? styles.previous : ''
                  } ${isNext ? styles.next : ''}`}
                  key={index}
                >
                  <p className={styles.name}>{testimonial.name}</p>
                  <div className={styles.testimonial}>
                    {testimonial.testimonial}
                  </div>
                </div>
              )
            })}
          </div>
          <button className={styles.arrowButton} onClick={handleNext}>
            <FontAwesomeIcon size="3x" icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
