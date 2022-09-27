import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import styles from "./index.module.scss"

export default function Top(): JSX.Element {
  
  if (typeof window === 'object') {
    gsap.registerPlugin(ScrollTrigger);
    const els = document.querySelectorAll<HTMLElement>('.color')
    els.forEach(el => {
      let color = el.dataset.color;
      
      gsap.to('body', {
        backgroundColor: color,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play pause resume reset'
        }
      })
    })
  }

  return (
    <>
      <section className={`${styles.sec} color`} data-color="#a30130">
        <h1 className={styles.title}>
          <span>Hiroki Deguchi</span>
          <span>Portfolio</span>
          <span>2023</span>
        </h1>
      </section>
      <section className={`${styles.sec} color`} data-color="#266677">
        <h1 className={styles.title}>
          About
        </h1>
      </section>
      <section className={`${styles.sec} color`} data-color="#f6f7a7">
        <h1 className={styles.title}>
          Work
        </h1>
      </section>
    </>
  )
}