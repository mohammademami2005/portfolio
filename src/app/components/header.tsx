"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HambergerMenu } from "iconsax-react";
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
  return (
    <header className="fixed top-0 right-0 lg:w-full h-15  lg:flex lg:justify-center lg:items-center">
      <nav className="hidden lg:block w-2/5 h-[90%] bg-black/10 rounded-full backdrop-blur-lg">
        <ul className="w-full h-full rounded-full flex justify-evenly items-center ">
          {links.map((item, i) => (
            <li
              key={i}
              onClick={() => setHash(item.href)}
              className={`w-[16%]  text-[16px] text-center ${
                hash === item.href ? "text-white scale-125" : "text-gray-400"
              } transform transition-all duration-500 `}
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <button>
        <HambergerMenu size="32" color="#d9e3f0"/>

      </button>
    </header>
  );
}
