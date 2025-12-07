"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function AboutImg() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        {
          scale:0.8,
        },
        {
          scale: 1,
          ease:'none',
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return ()=>{
        ctx.revert()
    }
  }, []);
  return (
    <figure className="lg:w-1/3 lg:h-[80%]" ref={imgRef}>
      <img
        className="lg:w-full lg:h-full  lg:bg-contain"
        src="/img/me2.png"
        alt=""
      />
    </figure>
  );
}
