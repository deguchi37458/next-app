import Link from 'next/link'

import styles from './index.module.scss'

import Burger from '@/components/Common/Header/Burger'

export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
        <Link href="/">
          <a >Top</a>
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
      <Burger />
    </nav>
  )
}