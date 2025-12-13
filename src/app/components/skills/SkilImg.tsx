"use client";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const data = [
  {
    name: "HTML",
    icon: "/icons/html.svg",
  },
  {
    name: "Css",
    icon: "/icons/css.svg",
  },
  {
    name: "Javascript",
    icon: "/icons/vanila.svg",
  },
  {
    name: "Typescript",
    icon: "/icons/typescript.svg",
  },
  {
    name: "ReactJs",
    icon: "/icons/react.svg",
  },
  {
    name: "Next",
    icon: "/icons/next.svg",
  },
  {
    name: "Tailwind css",
    icon: "/icons/tailwind.svg",
  },
  {
    name: "Zustand",
    icon: "/icons/zustand.svg",
  },
  {
    name: "github",
    icon: "/icons/github.svg",
  },
  {
    name: "git",
    icon: "/icons/git.svg",
  },
  {
    name: "vercel",
    icon: "/icons/vercel.svg",
  },
  {
    name: "postman",
    icon: "/icons/postman.svg",
  },
  {
    name: "mui",
    icon: "/icons/mui.svg",
  },
  {
    name: "shad cn",
    icon: "/icons/shadcn.svg",
  },
  {
    name: "Progressive Web Apps",
    icon: "/icons/pwa.svg",
  },
  {
    name: "firebase",
    icon: "/icons/firebase.svg",
  },
  {
    name: "Gsap",
    icon: "/icons/gsap.svg",
  },
  {
    name: "Lenis",
    icon: "/icons/lenis.png",
  },
  {
    name: "Rest Api",
    icon: "/icons/rest-api.svg",
  },
  {
    name: "Web Pack",
    icon: "/icons/webpack.svg",
  },
  {
    name: "Vite",
    icon: "/icons/vite.svg",
  },
  {
    name: "React-hook-form",
    icon: "/icons/react-hook-form.svg",
  },
  {
    name: "zod",
    icon: "/icons/zod.svg",
  },
  {
    name: "vs Code",
    icon: "/icons/vscode.svg",
  },
];

export default function SkillClient() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".skill-item");

      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
          duration: 0.5,

          scrollTrigger: {
            trigger: targetRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, targetRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={targetRef} className="flex flex-col justify-between items-center">
      <div className="w-full lg:w-2/3 lg:h-[89vh]  flex  justify-center items-start lg:items-center pt-5">
        <div
          ref={containerRef}
          className=" flex flex-wrap w-full lg:w-[80%] h-[50vh]  lg:h-full justify-center gap-3 lg:gap-6"
        >
          {data.map((item, i) => {
            return (
              <div
                key={i}
                className="skill-item flex h-10  lg:h-14 px-5 justify-center items-center text-xs lg:text-lg gap-2 lg:gap-5 bg-white/10 backdrop-blur-sm rounded-2xl  group transform transition-all duration-300 hover:scale-110 hover:bg-white/15 hover:rotate-6  border border-gray-300 text-gray-200"
              >
                <Image
                  className="group-hover:rotate-360 transform transition-all duration-700"
                  src={item.icon}
                  alt={item.name}
                  width={30}
                  height={30}
                />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
