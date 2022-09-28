import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import PassingBar from "@/components/Common/PassingBar";

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
          toggleActions: 'play pause resume reset',
          scrub: true
        }
      })
    })
  }

  return (
    <>
      <section className={`${styles.sec} color`} data-color="#a30130">
        <PassingBar>Hiroki Deguchi</PassingBar>
      </section>
      <section className={`${styles.sec} color`} data-color="#266677">
        <PassingBar>About</PassingBar>
      </section>
      <section className={`${styles.sec} color`} data-color="#f6f7a7">
        <PassingBar>Work</PassingBar>
      </section>
    </>
  )
}