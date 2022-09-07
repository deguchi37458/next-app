import { useState } from 'react'
import Link from 'next/link'

import styles from './index.module.scss'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <button className={styles.btn} onClick={toggleNav}>MENU</button>
      <ul className={styles.lists}>
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