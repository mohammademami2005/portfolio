"use client";
import { Instagram } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";
import Linkedin from "./linkedintSvg";
import GithubIcon from "./github";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutLinks() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsmobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!divRef.current) return;

    const links = divRef.current.querySelectorAll("a");

    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { duration: 0.5, ease: "power1.inOut" },
    });
    links.forEach((link, i) => {
      tl.to(link, { x: 25, opacity: 1 }, i * 0.3);
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsmobile(true);
      } else {
        setIsmobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    gsap.to(target, { scale: 1.2, duration: 0.3, ease: "power2.out" });
  };

  const handleHoverOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    gsap.to(target, { scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      ref={divRef}
      className="flex justify-between items-center *:rounded-full *:bg-white/10 *:flex *:justify-center *:items-center *:w-12 *:h-12 *:mx-2 *:lg:w-16 *:lg:h-16 lg:w-[40%] "
    >
      <Link
        href="mailto:mohammademami.dev@gmail.com"
        onMouseOver={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 lg:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </Link>
      <Link
        href="https://www.linkedin.com/in/mohammademami2005"
        target="_blank"
        onMouseOver={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <Image
          src={"/img/linkedin-logo-svgrepo-com.svg"}
          alt="linkedin"
          width={isMobile ? 20 : 30}
          height={isMobile ? 20 : 30}
        />
      </Link>
      <Link
        href="https://www.instagram.com/mohammademami.dev"
        target="_blank"
        onMouseOver={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <Instagram size={isMobile ? '24':'32'} color="#d9e3f0" />
      </Link>
      <Link
        target="_blank"
        href="https://github.com/mohammademami2005"
        onMouseOver={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <GithubIcon fill="#fff" width={ isMobile ?'20px' :"30px"} height={isMobile ? '20px':"30px"} />
      </Link>
    </div>
  );
}
