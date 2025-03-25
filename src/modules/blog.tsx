import styles from './styles/blog.module.css'

function Blog() {
  return (
    <div className={styles.blog__container}>
      <p className={styles.title}>Blog</p>
      <p className={styles.text}>
        There is no content here yet, but check back soon!
      </p>
    </div>
  )
}

export default Blog
