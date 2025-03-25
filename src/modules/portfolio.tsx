import React, { useState } from 'react'
import styles from './styles/portfolio.module.css'

import picture1 from '../pictures/1921.jpg'
import picture2 from '../pictures/2044.jpg'
import picture3 from '../pictures/2077.jpg'
import picture4 from '../pictures/23571.jpg'
import picture5 from '../pictures/1503.jpg'
import picture6 from '../pictures/9143.jpg'

const images = [
  { id: 1, src: picture1, category: 'category1' },
  { id: 2, src: picture2, category: 'category1' },
  { id: 3, src: picture3, category: 'category1' },
  { id: 4, src: picture4, category: 'category2' },
  { id: 5, src: picture5, category: 'category3' },
  { id: 6, src: picture6, category: 'category3' },
]

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category)
  }

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((image) => image.category === selectedCategory)
  return (
    <div className={styles.portfolio__container}>
      <div className={styles.portfolio_text}>Our portfolio</div>

      <div className={styles.block}>
        <div className={styles.portfolio_buttons}>
          <button
            onClick={() => handleChangeCategory('all')}
            className={styles.button}
          >
            All Categories
          </button>
          <div className={styles.pairOfButtons}>
            <button
              onClick={() => handleChangeCategory('category1')}
              className={styles.button}
            >
              Categorie 2
            </button>
            <button
              onClick={() => handleChangeCategory('category2')}
              className={styles.button}
            >
              Categorie 3
            </button>
          </div>

          <button
            onClick={() => handleChangeCategory('category3')}
            className={styles.button}
          >
            Categorie 4
          </button>
        </div>

        <div className={styles.portfolio_photos}>
          {filteredImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={`Portfolio ${image.id}`}
              className={styles.responsive_image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
