import styles from "./index.module.scss"

export default function Top(): JSX.Element {
  return (
    <>
    <div className={styles.top}>
      <h1 className={styles.title}>
        <span>Hiroki Deguchi</span>
        <span>Portfolio</span>
        <span>2023</span>
      </h1>
    </div>
    </>
  )
}