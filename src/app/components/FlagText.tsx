"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

interface WaveTextProps {
  text: string;
  className?: string;
  // سرعت موج / دامنه ها
  waveAmplitude?: number; // px
  waveDuration?: number; // s for one full cycle
  charDelay?: number; // stagger delay between chars
}

export default function FlagText({
  text,
  className = "",
  waveAmplitude = 50,
  waveDuration = 1.6,
  charDelay = 0.03,
}: WaveTextProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const lenisRef = useRef<Lenis | null>(null);
  const waveTlRef = useRef<gsap.core.Timeline | null>(null);

  // split text into characters and render spans
  const chars = Array.from(text);

  useEffect(() => {
    // create Lenis once
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // gentle ease
        smoothWheel: true,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    const ctx = gsap.context(() => {
      // ensure all char spans are inline-block so transform works
      charsRef.current.forEach((el) => {
        if (el) {
          el.style.display = "inline-block";
          el.style.willChange = "transform, opacity";
          el.style.whiteSpace = "pre"; // preserve spaces
        }
      });

      // cleanup any existing timeline
      waveTlRef.current?.kill();



        // small continuous subtle shake for all chars (not too intense)
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(charsRef.current, {
          x: () => gsap.utils.random(-4, 4),
          rotation: () => gsap.utils.random(-2, 2),
          duration: 0.08,
          ease: "rough({strength: 1, points: 20, template: linear, taper: none, randomize: true})",
          stagger: {
            each: charDelay,
            from: "random",
          },
        });
        waveTlRef.current = tl;
   

      // Play animation only when element is visible -> use IntersectionObserver
      const el = containerRef.current;
      let io: IntersectionObserver | null = null;
      if (el) {
        io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (waveTlRef.current) {
                if (entry.isIntersecting) waveTlRef.current.play();
                else waveTlRef.current.pause();
              }
            });
          },
          { threshold: 0.1 }
        );
        io.observe(el);
      }

      // Hover effect for shake mode: intensify on hover
      if (containerRef.current) {
        const root = containerRef.current;
        const hoverIn = () => {
          waveTlRef.current?.timeScale(3); // speed up
        };
        const hoverOut = () => {
          waveTlRef.current?.timeScale(1);
        };
        root.addEventListener("mouseenter", hoverIn);
        root.addEventListener("mouseleave", hoverOut);

        // cleanup listeners later
        return () => {
          root.removeEventListener("mouseenter", hoverIn);
          root.removeEventListener("mouseleave", hoverOut);
        };
      }

      // cleanup function for gsap.context done below
    }, containerRef);

    return () => {
      // tear down
      waveTlRef.current?.kill();
      waveTlRef.current = null;
      gsap.context(() => {}, containerRef); // safe
      if (lenisRef.current) {
        // don't destroy lenis globally — apps may reuse it
        // optionally: lenisRef.current.destroy();
        // lenisRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ waveAmplitude, waveDuration, charDelay, text]);

  return (
    <div
      ref={containerRef}
      className={`inline-block overflow-visible ${className}`}
      aria-label={text}
    >
      {chars.map((ch, i) => (
        <span
          // preserve spaces visually
          key={i}
          ref={(el) => {
            if (el) charsRef.current[i] = el;
          }}
          style={{
            display: "inline-block",
            transformOrigin: "50% 50%",
            // small initial opacity for nicer entrance
            opacity: 1,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </div>
  );
}
