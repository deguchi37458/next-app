import { useState } from 'react'
import Link from 'next/link'

import styles from './index.module.scss'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)
  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <>
    <div className={(navIsOpen ? styles.open : styles.close)}>
      <button className={styles.btn} onClick={toggleNav}>
        <span></span>
        <span></span>
      </button>
      <ul className={styles.drawer}>
        <li>
          <Link href="/">
            <a onClick={closeNav}>Top</a>
          </Link>
          </li>
          <li>
          <Link href="/about">
            <a onClick={closeNav}>About</a>
          </Link>
          </li>
          <li>
          <Link href="/work">
            <a onClick={closeNav}>Work</a>
          </Link>
        </li>
      </ul>
    </div>
    </>
  )
}