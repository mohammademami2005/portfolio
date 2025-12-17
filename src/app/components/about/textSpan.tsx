"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function TextSpan() {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const section = document.querySelector('.about');
    if (!section || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          gsap.fromTo(
            ref.current,
            { width: "0%" },
            {
              width: "100%",
              duration: 3,
              ease: "bounce.inOut",
            }
          );
        }
      },
      { threshold: 0.5 } 
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return <span ref={ref}></span>;
}
