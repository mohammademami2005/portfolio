"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HambergerMenu } from "iconsax-react";
import { CloseCircle } from "iconsax-react";
const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About me",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Education",
    href: "#Education",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
export default function Header() {
  const [hash, setHash] = useState<string>("");
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  console.log(mobileNavVisible);
  return (
    <header className="fixed top-1 right-0 w-full h-15  flex justify-end lg:justify-center items-center z-50">
      <nav
        className={`absolute left-0  duration-500 transition-all w-screen h-screen  ${
          mobileNavVisible
            ? "top-0 opacity-100"
            : "top-[110vh] opacity-0 lg:opacity-100"
        } mt-[60px] lg:mt-0 lg:top-0 lg:left-0 lg:relative  lg:block lg:w-2/5 lg:h-[90%] lg:bg-white/10 lg:rounded-full backdrop-blur-md`}
      >
        <ul
          className={`w-full h-full rounded-full  flex flex-col lg:flex-row justify-center gap-5 lg:justify-evenly items-center    `}
        >
          {links.map((item, i) => {
            const delay = mobileNavVisible ? i * 150 : 0;
            return (
              <li
                key={i}
                onClick={() => setHash(item.href)}
                className={`w-[16%]  text-lg lg:text-[16px] text-center ${
                  hash === item.href ? "text-white scale-125" : "text-gray-400"
                } transform transition-all duration-500 lg:translate-y-0 ${
                  mobileNavVisible
                    ? "-translate-y-10 opacity-100"
                    : "sm:translate-y-10 lg:translate-y-0 opacity-0 lg:opacity-100"
                } `}
                style={{ transitionDelay: delay + "ms" }}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        className="lg:hidden cursor-pointer"
        onClick={() => setMobileNavVisible((prev) => !prev)}
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
