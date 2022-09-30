import styles from './index.module.scss'

import PassingBar from '@/components/Common/PassingBar'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.list}>
        <ul>
          <li><a href="">Twitter</a></li>
          <li><a href="">Instagram</a></li>
        </ul>
      </div>
    </footer>
  )
}