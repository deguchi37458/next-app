import { useRef, useEffect} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import styles from './index.module.scss'

export default function PassingBar( {children}: any ) {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef<any>();
  useEffect (() => {
    const el = ref.current;

    const elText = el.querySelector('.passingText')
    const elBar = el.querySelector('.bar')
    
    gsap.to(
      elText,
      2,
      {
        keyframes: {
          '0%':{
            opacity: 0,
          },
          '50%':{
            opacity: 0,
          },
          '100%':{
            opacity: 1,
          },
          ease: 'power2.out',
        },
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          markers: true,
        }
      }
    ),
    gsap.to(
      elBar,
      {
        keyframes: {
          '0%':{
            left: 0,
            width: 0
          },
          '50%':{
            left: 0,
            width: 100 + `%`
          },
          '51%':{
            left: 0,
            width: 100 + `%`
          },
          '100%':{
            left: 100 + `%`,
            width: 0
          },
          ease: 'power2.out',
        },
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          markers: true,
        }
      }
    )
  }, [])
  // useEffect (() => {
  //   const element = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".passingText"),
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: element.querySelector(".passingText"),
  //         start: "bottom bottom",
  //         end: "bottom center",
  //         scrub: true,
  //         markers: true
  //       }
  //     }
  //   )
  // }, [])
  return (
    <>
      <div ref={ref} className={`${styles.passingBar} passingBar`}>
        <span className={`${styles.bar} bar`}></span>
        <h2 className={`${styles.title} ${styles.passingText} passingText`}>{children}</h2>
      </div>
    </>
  )
}