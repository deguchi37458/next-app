import styles from './index.module.scss'
import Logo from '@/components/Common/Header/Logo'
import Nav from '@/components/Common/Header/Nav'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}