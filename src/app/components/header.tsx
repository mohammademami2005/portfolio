"use client";
import React, { useEffect, useRef, useState } from "react";
import { HambergerMenu, CloseCircle } from "iconsax-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const links = [
  { name: "Home", href: "#home" },
  { name: "About me", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [hash, setHash] = useState("");
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const headerRef = useRef(null);


  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      ease: "bounce",
    });
  }, []);


  useEffect(() => {
    if (mobileNavVisible) {
      gsap.fromTo(
        "nav ul li",
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.09,
          duration: 0.55,
          ease: "power3.out",
        }
      );
    }
  }, [mobileNavVisible]);


  useEffect(() => {
    links.forEach((item) => {
      ScrollTrigger.create({
        trigger: item.href,
        start: "top center",
        end: "bottom center",
        onEnter: () => setHash(item.href),
        onEnterBack: () => setHash(item.href),
      });
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-1 right-0 w-full h-15 flex justify-end lg:justify-center items-center z-50"
    >
      {/* NAV */}
      <nav
        className={`absolute left-0 duration-500 transition-all w-screen h-screen ${
          mobileNavVisible
            ? "top-0 opacity-100"
            : "top-[110vh] opacity-0 lg:opacity-100"
        } mt-[60px] lg:mt-0 lg:top-0 lg:left-0 lg:relative lg:block lg:w-2/5 lg:h-[90%] lg:bg-white/10 lg:rounded-full backdrop-blur-md`}
      >
        <ul className="w-full h-full rounded-full flex flex-col lg:flex-row justify-center gap-5 lg:justify-evenly items-center">
          {links.map((item, i) => {
            const delay = mobileNavVisible ? i * 120 : 0;

            return (
              <li
                key={i}
                onClick={() => {
                  setHash(item.href);

                  gsap.to(window, {
                    duration: 1,
                    scrollTo: item.href,
                    ease: "power3.out",
                  });

                  setMobileNavVisible(false);
                }}
                style={{ transitionDelay: delay + "ms" }}
                className={`text-lg lg:text-[16px] w-[16%] text-center transform transition-all duration-500 cursor-pointer ${
                  hash === item.href ? "text-white scale-125" : "text-gray-400"
                } ${
                  mobileNavVisible
                    ? "-translate-y-10 opacity-100"
                    : "lg:translate-y-0 opacity-0 lg:opacity-100"
                }`}
              >
                <button>{item.name}</button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* MOBILE BUTTON */}
      <button
        className="lg:hidden cursor-pointer mr-5"
        onClick={() => setMobileNavVisible(!mobileNavVisible)}
      >
        {mobileNavVisible ? (
          <CloseCircle size="32" color="#d9e3f0" />
        ) : (
          <HambergerMenu size="32" color="#d9e3f0" />
        )}
      </button>
    </header>
  );
}
