import { useRef, useEffect} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

import styles from './index.module.scss'

export default function PassingBar() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef<any>();
  useEffect (() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".passingBar"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".passingBar"),
          start: "bottom bottom",
          end: "bottom center",
          scrub: true,
          markers: true
        }
      }
    )
  }, [])
  useEffect (() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".passingText"),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: element.querySelector(".passingText"),
          start: "bottom bottom",
          end: "bottom center",
          scrub: true,
          markers: true
        }
      }
    )
  }, [])
  return (
    <>
    <div ref={ref}>
      <span className="passingBar">
        <span className="passingText">WORK</span>
      </span>
    </div>
    </>
  )
}