"use client";

import { ArrowRight, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FourWayArrowIcon from "./liIcons";
import Link from "next/link";
import GithubIcon from "../about/github";
import gsap from "gsap";
import { title } from "process";

interface Technology {
  name: string;
  src: string;
}

interface Data {
  name: string;
  id: string;
  description: string;
  ShortDeskription: string;
  color: string;
  background: string;
  feature: {
    // iconColorClassName: string;
    values: string[];
  };
  technology: Technology[];
  img: string;
  repository: string;
  link: string;
}

const data: Data[] = [
  {
    name: "QUENX Shop",
    id: "shop",
    description:
      "A modern, responsive online store with a clean and intuitive interface, providing a smooth and enjoyable shopping experience.Search and filter products, view images in full size, and manage your cart effortlessly for a seamless online shopping journey.",
    ShortDeskription:
      "A modern e-commerce platform with fast performance and a clean, minimal UI.",
    color: "#0CB1F2",
    background:
      "linear-gradient(0deg,rgba(12, 177, 242, 1) 0%, rgba(7, 25, 82, 1) 100%)",
    feature: {
      values: [
        "Product categories",
        "Search and filter by price and category",
        "Pages with readable slugs",
        "Light and dark theme with MUI ThemeProvider",
        "Cart management using zustand and persisted in Local Storage",
        "Data fetching and caching with react-query",
        "Meta tags, Open Graph, and logical page structure",
        "Combination of server-side and client-side rendering",
      ],
    },
    technology: [
      {
        name: "next",
        src: "/icons/next.svg",
      },
      {
        name: "react",
        src: "/icons/react.svg",
      },
      {
        name: "typescript",
        src: "/icons/typescript.svg",
      },
      {
        name: "material ui",
        src: "/icons/mui.svg",
      },
      {
        name: "zustand",
        src: "/icons/zustand.svg",
      },
      {
        name: "varcel",
        src: "/icons/vercel.svg",
      },
      {
        name: "tanstack",
        src: "/icons/tanstack.png",
      },
    ],
    img: "/screenshots/shop.png",
    repository: "https://github.com/mohammademami2005/shop",
    link: "https://shop.mohammademamiproject.ir/",
  },
  {
    name: "Admin Panel",
    id: "dashboard",
    description:
      "A streamlined admin dashboard designed for efficient management of application data, user activity, and system content.It focuses on clarity, smooth workflows, and a structure that remains maintainable as the project grows.Built with attention to UX and real-world use cases in mind.",
    ShortDeskription:
      "A clean and scalable admin panel for managing data, users, and content with an intuitive UI.",
    color: "#EC6EFA",
    background:
      "linear-gradient(0deg,rgba(236, 110, 250, 1) 0%, rgba(80, 7, 140, 1) 100%);",
    feature: {
      values: [
        "Create, edit, and delete users",
        "Role-based access control for admins, editors, and users",
        "Filter and search users and data tables",
        "Configurable app settings and preferences",
        "MUI theming with automatic mode switching",
        "React Query for data caching and revalidation",
        "Sortable, filterable, paginated MUI DataTables",
        "RESTful API layer with error handling",
        "Clean architecture with reusable UI elements",
      ],
    },
    technology: [
      {
        name: "next",
        src: "/icons/next.svg",
      },
      {
        name: "react",
        src: "/icons/react.svg",
      },
      {
        name: "typescript",
        src: "/icons/typescript.svg",
      },
      {
        name: "material ui",
        src: "/icons/mui.svg",
      },
      {
        name: "zustand",
        src: "/icons/zustand.svg",
      },
      {
        name: "varcel",
        src: "/icons/vercel.svg",
      },
      {
        name: "tanstack",
        src: "/icons/tanstack.png",
      },
      {
        name: "react-hook-form",
        src: "/icons/react-hook-form.svg",
      },
    ],
    img: "/screenshots/admin-panel.png",
    repository: "https://github.com/mohammademami2005/Admin-panel",
    link: "https://dashboard.mohammademamiproject.ir/",
  },
  {
    name: "Radio Javan",
    id: "musicPlayer",
    description:
      "A feature-rich music streaming application designed to provide seamless playback, efficient track search, and dynamic playlist management. It emphasizes a responsive, user-friendly interface, fast data fetching, and maintainable architecture, ensuring a delightful listening experience across devices while remaining scalable for future enhancements.",
    ShortDeskription:
      "A modern and responsive music player app for discovering, searching, and streaming tracks with a smooth and intuitive interface.",
    color: "#FC4747",
    background:
      "linear-gradient(0deg,rgba(252, 71, 71, 1) 0%, rgba(87, 3, 3, 1) 100%);",
    feature: {
      values: [
        "Play / Pause / Next / Previous / Shuffle / Repeat in musics",
        "Modern, animated, responsive interface",
        "Browse latest tracks, albums, and artists",
        "Search for tracks, albums, and artists",
        "Managed with Zustand + persistence",
        "React Query with caching & auto-refetch",
        "REST API using Axios",
        "REST API using Axios",
        "Fully optimized for mobile/tablet/desktop",
        "Clean architecture with reusable components",
      ],
    },
    technology: [
      {
        name: "next",
        src: "/icons/next.svg",
      },
      {
        name: "react",
        src: "/icons/react.svg",
      },
      {
        name: "typescript",
        src: "/icons/typescript.svg",
      },
      {
        name: "tailwind css",
        src: "/icons/tailwind.svg",
      },
      {
        name: "zustand",
        src: "/icons/zustand.svg",
      },
      {
        name: "varcel",
        src: "/icons/vercel.svg",
      },
      {
        name: "tanstack",
        src: "/icons/tanstack.png",
      },
    ],
    img: "/screenshots/radio-javan.png",
    repository: "https://github.com/mohammademami2005/radio-javan",
    link: "https://radio-javan.mohammademamiproject.ir/",
  },
  {
    name: "GTA VI",
    id: "parallax",
    description:
      "A feature-rich parallax web project built to deliver smooth multi-layer animations and interactive effects inspired by GTA loading screens. It emphasizes a clean and maintainable architecture, responsive design across devices, and high-performance animations, ensuring an engaging user experience while remaining scalable for future enhancements and additional interactive layers.",
    ShortDeskription:
      "A smooth and responsive parallax web experience inspired by GTA, featuring multi-layer animations, interactive scroll and mouse effects, and a clean, intuitive interface.",
    color: "#197DAF",
    background: "linear-gradient(180deg, #0f0c29, #302b63, #24243e);",
    feature: {
      values: [
        "Smooth GTA-style parallax animation",
        "No frameworks, lightweight & fast",
        "Super fast bundling & hot reload",
        "requestAnimationFrame + GPU-optimized layers",
        "Works on desktop/tablet/mobile",
        "Well-structured & easy to extend",
      ],
    },
    technology: [
      {
        name: "html",
        src: "/icons/html.svg",
      },
      {
        name: "vite",
        src: "/icons/vite.png",
      },
      {
        name: "JavaScript",
        src: "/icons/vanila.svg",
      },
      {
        name: "tailwind css",
        src: "/icons/tailwind.svg",
      },
      {
        name: "varcel",
        src: "/icons/vercel.svg",
      },
      {
        name: "css",
        src: "/icons/css.svg",
      },
    ],
    img: "/screenshots/gta.png",
    repository: "https://github.com/mohammademami2005/GTA-VI-Trailer",
    link: "https://gta-parallax.mohammademamiproject.ir/",
  },
  {
  name: "Weather App",
  id: "weather",
  description:"An advanced, responsive weather forecasting application providing real-time weather updates. Built with modern frontend architecture using Next.js, React, and Shadcn/ui for a professional, accessible, and fully responsive interface. The project focuses on high performance, full TypeScript type safety, scalable state management with Zustand, server-state handling with React Query, and precise schema validation with Zod to ensure accurate and consistent weather information for users.",
  ShortDeskription:
    "A modern and responsive weather app featuring real-time forecasts, full TypeScript safety, Zustand state management, and a sleek, intuitive interface.",
  color: "#99F2D1",
  background:' linear-gradient(180deg, hsla(164, 38%, 18%, 1) 0%, hsla(158, 77%, 77%, 1) 100%);',
  feature: {
    values: [
      "Real-time weather updates using Open-Meteo API",
      "Full TypeScript type safety",
      "Scalable global state management with Zustand",
      "Server-state management & caching with React Query",
      "Responsive and accessible UI with Tailwind CSS & Shadcn/ui",
      "Schema validation with Zod for consistent data",
      "Optimized for performance and maintainability",
    ],
  },
  technology: [
    {
      name: "Next.js",
      src: "/icons/next.svg",
    },
    {
      name: "React",
      src: "/icons/react.svg",
    },
    {
      name: "TypeScript",
      src: "/icons/typescript.svg",
    },
    {
      name: "Tailwind CSS",
      src: "/icons/tailwind.svg",
    },
    {
      name: "Shadcn/ui",
      src: "/icons/shadcn.svg",
    },
    {
      name: "Zustand",
      src: "/icons/zustand.svg",
    },
    {
      name: "Zod",
      src: "/icons/zod.svg",
    },
  ],
  img: "/screenshots/weather2.png",
  repository: "https://github.com/mohammademami2005/weather",
  link: "https://weather.mohammademamiproject.ir/",
}

];

export default function ShowProjects() {
  const [sectionId, setSectionId] = useState<string | undefined>();
  const [targetData, setTargetData] = useState<Data | undefined>(data[0]);

  // refs
  const featureUlRef = useRef<HTMLUListElement | null>(null);
  const sectionNameRef = useRef<HTMLHeadingElement | null>(null);
  const technologyRef = useRef<HTMLUListElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!sectionId) return;
    setTargetData(data.find((item) => item.id === sectionId));
  }, [sectionId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionId(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.8 }
    );

    data.forEach((section) => {
      const target = document.getElementById(section.id);
      if (target) observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const features = featureUlRef.current?.querySelectorAll("li");
    const technologies = technologyRef.current?.querySelectorAll("li");
    const tl = gsap.timeline({
      repeat: 0,
      yoyo: true,
      defaults: { duration: 0.1, ease: "sine" },
    });

    const tl2 = gsap.timeline({
      repeat: 0,
      yoyo: true,
      defaults: { duration: 0.3, ease: "back.inOut" },
    });

    features?.forEach((item, i) => {
      tl.fromTo(
        item,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.5 }
      );
    });

    technologies?.forEach((item) => {
      tl2.fromTo(
        item,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, stagger: 0.5 }
      );
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionNameRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, ease: "power1" }
      );

      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );
    });

    return () => {
      ctx.revert();
    };
  }, [targetData]);

  return (
    <div className="flex w-full h-full flex-wrap justify-center gap-7 pt-[10%] ">
      {/* projects  */}
      <div className="w-full lg:w-6/12 lg:h-[500vh]  flex flex-col justify-start gap-20 lg:gap-52  px-2 ">
        {data.map((section, i) => (
          <div key={i}>
            <Link
              id={section.id}
              target="_blank"
              href={section.link}
              className="w-full h-[50vh] lg:h-[70vh] cursor-pointer rounded-3xl bg-white/10 backdrop-blur-xs border border-gray-400 flex justify-center items-center"
            >
              <div
                className={`w-[96%] h-[96%] p-2 relative  rounded-2xl overflow-hidden pt-6`}
                style={{ background: section.background }}
              >
                <div className="hidden  lg:flex justify-around items-center">
                  <h4
                    className="text-xl  w-[70%] "
                    style={{ color: section.color }}
                  >
                    {section.ShortDeskription}
                  </h4>
                  <ArrowRight
                    size="32"
                    color="#d9e3f0"
                    className="hover:scale-125  transform transition-all duration-300"
                  />
                </div>
                <figure className="absolute -bottom-10 left-0 w-full h-[80%] lg:h-[65%] flex justify-center">
                  <Image
                    src={section.img}
                    alt={section.name}
                    width={200}
                    height={200}
                    className="w-[85%] h-full bg-cover transform transition-all duration-200 hover:rotate-6 hover:scale-110 rounded-2xl "
                  />
                </figure>
              </div>
            </Link>
            <div className="lg:hidden w-full  h-screen  flex flex-col justify-start gap-3 pl-[3%] py-5">
              <h4
                ref={sectionNameRef}
                className="text-2xl flex justify-start gap-5  items-center"
              >
                {section.name}{" "}
                <div
                  className={`w-8 h-1.5 rounded-full   absolute -left-10 flex top-3`}
                  style={{ backgroundColor: section.color }}
                ></div>
                <Link
                  href={
                    section
                      ? section.repository
                      : "https://github.com/mohammademami2005"
                  }
                  target="_blank"
                >
                  <GithubIcon
                    width={"30px"}
                    height={"30px"}
                    fill={section.color}
                  />
                </Link>
              </h4>
              <p ref={descriptionRef} className="text-gray-400 my-3">
                {section.description}
              </p>
              <ul ref={featureUlRef}>
                {section.feature.values.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-start items-center gap-3 mb-2 text-gray-300"
                  >
                    <FourWayArrowIcon
                      fill={section.color}
                      className={`size-5 `}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <ul
                ref={technologyRef}
                className=" flex flex-wrap  gap-2  items-center p-3 "
              >
                {section.technology.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className=" w-12 h-12 flex justify-center items-center p-2 group"
                    >
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                      <span className="hidden group-hover:flex p-2 justify-center items-center absolute -top-10 left-0 bg-white/10 rounded-2xl w-[150%]">
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
        <Link
          className="-translate-y-10 text-2xl capitalize text-gray-300 w-full flex justify-center lg:justify-end items-center gap-5 "
          href={"https://github.com/mohammademami2005"}
        >
          more projects . . .
          <GithubIcon fill="#fff" />
        </Link>
      </div>
      {/* sidebar  */}
      <div className="hidden w-full lg:w-[38%]  h-screen sticky top-14 lg:flex flex-col justify-start gap-3 pl-[3%] py-5">
        <h4
          ref={sectionNameRef}
          className="text-2xl flex justify-start gap-5  items-center"
        >
          {targetData?.name}{" "}
          <div
            className={`w-8 h-1.5 rounded-full   absolute -left-10 flex top-3`}
            style={{ backgroundColor: targetData?.color }}
          ></div>
          <Link
            href={
              targetData
                ? targetData.repository
                : "https://github.com/mohammademami2005"
            }
            target="_blank"
          >
            <GithubIcon
              width={"30px"}
              height={"30px"}
              fill={targetData?.color}
            />
          </Link>
        </h4>
        <p ref={descriptionRef} className="text-gray-400 my-3">
          {targetData?.description}
        </p>
        <ul ref={featureUlRef}>
          {targetData?.feature.values.map((item, i) => (
            <li
              key={i}
              className="flex justify-start items-center gap-3 mb-2 text-gray-300"
            >
              <FourWayArrowIcon fill={targetData.color} className={`size-5 `} />
              {item}
            </li>
          ))}
        </ul>
        <ul
          ref={technologyRef}
          className=" flex flex-wrap  gap-2  items-center p-3 "
        >
          {targetData?.technology.map((item, i) => {
            return (
              <li
                key={i}
                className=" w-12 h-12 flex justify-center items-center p-2 group"
              >
                <Image src={item.src} alt={item.name} width={50} height={50} />
                <span className="hidden group-hover:flex p-2 justify-center items-center absolute -top-10 left-0 bg-white/10 rounded-2xl w-[150%]">
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
