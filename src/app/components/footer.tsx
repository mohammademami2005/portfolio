import Link from "next/link";
import React from "react";
import GithubIcon from "./about/github";
import Linkedin from "./about/linkedintSvg";
import Image from "next/image";
import { Copyright, Instagram } from "iconsax-react";

export default function Footer() {
  return (
    <footer className="w-full h-[30vh] flex flex-col justify-between items-center">
      <div className="flex justify-center items-center gap-6 w-1/2 h-1/3 *:bg-white/5 *:w-14 *:h-14 *:hover:scale-150 *:transform *:transition-all *:duration-500 *:rounded-full *:flex *:justify-center *:items-center">
        <Link href="mailto:emami20052008@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 22 22"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
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
        >
          <Image
            src={"/img/linkedin-logo-svgrepo-com.svg"}
            alt="linkedin"
            width={18}
            height={18}
          />
        </Link>
        <Link
          href="https://www.instagram.com/mohammademami.dev"
          target="_blank"
        >
          <Instagram size="22" color="#d9e3f0" />
        </Link>
        <Link target="_blank" href="https://github.com/mohammademami2005">
          <GithubIcon fill="#fff" width={"22px"} height={"22px"} />
        </Link>
      </div>
      <div className=" w-1/2 h-1/3 flex justify-center items-center gap-4">
        {/* left  */}
        <span className=" w-20 h-px bg-linear-to-l from-purple-500 to-black"></span>
        {/* circle  */}
        <span className="w-2 h-2 rounded-full bg-purple-600"></span>
        {/* right  */}
        <span className="w-20 h-px bg-linear-to-r from-purple-500 to-black"></span>
      </div>
      <div className="w-1/2 h-1/3 flex justify-center items-center">
        <p className="flex justify-center items-center text-gray-500 gap-0.5">
          <Copyright size="20" color="#d9e3f0" />
          2025
          <strong className="text-purple-700 ">Mohammad Emami</strong>
          .
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
