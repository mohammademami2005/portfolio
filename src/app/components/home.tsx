"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Copy, TickCircle } from "iconsax-react";
import { Check } from "iconsax-react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // states
  const [displayText, setDisplayText] = useState("");
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  // refs
  const text = `A creative and modern Front-End Developer`;
  const homeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subTitleRef = useRef<HTMLParagraphElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const copyBtnRef = useRef<HTMLButtonElement | null>(null);
  //   const imageRef = useRef<HTMLImageElement | null>(null);

  // gsap effects
  useEffect(() => {
    setMounted(true)
    const ctx = gsap.context(() => {
      // text Animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        subTitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.Out",
          delay: 0.5,
        }
      );

      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.8,
        }
      );
      gsap.fromTo(
        copyBtnRef.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.8,
        }
      );
    }, homeRef);

    return () => ctx.revert();
  }, []);

  //   h1 typing effect
  useEffect(() => {
    if (!titleRef.current) return;
    const chars = text.split("");
    let index = 0;
    const timeLine = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.8,
      onRepeat: () => setDisplayText(""),
    });

    chars.forEach((char) => {
      timeLine.to(
        {},
        {
          duration: 0.15,
          onComplete: () => {
            setDisplayText((prev) => prev + char);
          },
        }
      );
    });
    return () => {
      timeLine.kill;
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("emami20052008@gmail.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch (error) {
      console.log("error in copy !", error);
    }
  };

  return (
    <section
      ref={homeRef}
      className="w-full h-screen flex flex-col justify-center gap-10 items-center "
    >
      <h1
        ref={titleRef}
        className="text-4xl lg:text-6xl font-bold"
        
      >
        Hey, I'm Mohammad Emami
      </h1>
      <p ref={subTitleRef} className="text-lg lg:text-2xl  opacity-80" style={{ whiteSpace: "pre" }}>
        {mounted ?  displayText : text}
        <span className="blinkingCursor">|</span>
      </p>
      <div className="flex justify-between items-center  p-5 gap-8">
        <button
          ref={btnRef}
          className="px-5 lg:px-6 py-2 lg:py-3 rounded-xl bg-white text-black font-semibold hover:opacity-80 transition-all cursor-pointer"
        >
          let's connect
        </button>

        {copied ? (
          <button
            ref={copyBtnRef}
            className="flex justify-between items-center cursor-pointer w-64"
            onClick={handleCopy}
          >
            {" "}
            <TickCircle size="32" color="#d9e3f0" /> copied to clipbourd{" "}
          </button>
        ) : (
          <button
            ref={copyBtnRef}
            className="flex justify-between items-center  cursor-pointer w-64"
            onClick={handleCopy}
          >
            {" "}
            <Copy size="32" color="#fff" /> emami20052008@gmail.com{" "}
          </button>
        )}
      </div>
      {/* <img
        ref={imageRef}
        src="/img/i.jpg"
        alt="hero"
        className="w-[400px] rounded-xl mt-10 shadow-2xl"
      /> */}
    </section>
  );
}
