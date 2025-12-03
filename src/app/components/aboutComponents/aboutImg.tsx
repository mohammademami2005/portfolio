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
    <figure className="w-1/3 h-full p-5" ref={imgRef}>
      <img
        className="w-full h-full bg-cover"
        src="/img/mohammademami1.png"
        alt=""
      />
    </figure>
  );
}
