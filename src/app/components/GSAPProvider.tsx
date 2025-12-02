"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function GSAPProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value:any) {
        return arguments.length
          ? lenis.scrollTo(value, { immediate: true })
          : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update(); // آپدیت ScrollTrigger هر فریم
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 4️⃣ Refresh بعد از resize یا تغییرات DOM
    ScrollTrigger.addEventListener("refresh", () => {
      // فقط کافی Lenis رو دوباره اجرا کنیم
      requestAnimationFrame(raf);
    });
  }, []);
}
