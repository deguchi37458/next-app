import styles from './index.module.scss'

export default function Container({children}: any):JSX.Element {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}