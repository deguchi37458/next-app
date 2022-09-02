import Link from 'next/link'

import styles from './index.module.scss'

export default function Nav() {
  return (
    <nav className={styles.globalNav}>
      <ul>
        <li>
        <Link href="/">
          <a>Top</a>
        </Link>
        </li>
        <li>
        <Link href="/about">
          <a>About</a>
        </Link>
        </li>
        <li>
        <Link href="/work">
          <a>Work</a>
        </Link>
        </li>
      </ul>
    </nav>
  )
}