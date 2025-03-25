import React, { useState } from 'react'
import styles from './styles/portfolio.module.css'

import picture from '../pictures/41919.jpg'

const images = [
  { id: 1, src: picture, category: 'category1' },
  { id: 2, src: picture, category: 'category1' },
  { id: 3, src: picture, category: 'category1' },
  { id: 4, src: picture, category: 'category2' },
  { id: 5, src: picture, category: 'category3' },
  { id: 6, src: picture, category: 'category3' },
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
