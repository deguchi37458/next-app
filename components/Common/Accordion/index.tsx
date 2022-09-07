import {useState, useRef, CSSProperties} from 'react'

import styles from './index.module.scss'

export default function Accordion({heading, children}:any ):JSX.Element {
  const [textIsOpen, setTextIsOpen] = useState(false)
  const toggleText = () => {
    setTextIsOpen((prev) => !prev)
  }

  const refText = useRef<any>({scrollHeight: 0})

  return (
    <>
      <div className={textIsOpen ? styles.open : styles.close}>
        <h3 className={styles.heading}>
          <button onClick={toggleText}>
            {heading}
          </button>
        </h3>
        <div
          className={styles.text}
          ref={refText} 
          style={{
            '--text-height':`${refText.current.scrollHeight}px`
          }}
        >
          <div className={styles.textInner}>{children}</div>
        </div>
      </div>
    </>
  )
}