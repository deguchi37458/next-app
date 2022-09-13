import styles from './index.module.scss'
import Logo from '@/components/Common/Header/Logo'
import Burger from '@/components/Common/Header/Burger'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Logo />
        <Burger />
      </div>
    </header>
  )
}