"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export default function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    });
    function raf(time:number){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, []);
  return null;
}
