import styles from './index.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Footer
      <div className={styles.list}>
        <ul>
          <li><a href="">Twitter</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </div>
    </footer>
  )
}