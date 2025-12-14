"use client";
import React, { useEffect, useRef } from "react";
import FlagText from "../FlagText";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Education() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".lists1");
      const items2 = gsap.utils.toArray(".lists2");
      const images = gsap.utils.toArray(".images");
      gsap.fromTo(
        items,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "circ.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "bottom 10%",
          },
        }
      );
      gsap.fromTo(
        items2,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "circ.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "bottom 10%",
          },
        }
      );
      gsap.fromTo(
        images,
        {  opacity: 0 },
        {
          opacity: 1,
          duration:5,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 10%",
          },
        }
      );
    }, sectionRef);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="w-full h-[270vh] lg:h-[260vh]  relative mt-[30%]  bg-[url(/img/background1.jpg)] "
      id="education"
    >
      <div className="w-full h-[30vh]  flex justify-center items-center relative">
        <span className="uppercase w-[80%] lg:w-auto text-center  text-6xl lg:text-9xl absolute top-1/2 left-1/2 transform -translate-1/2 z-10 text-stone-300 font-extrabold opacity-50">
          Education
          <span
            className="w-full h-full absolute top-0 left-0 "
            style={{
              background: "linear-gradient(to right, transparent 80% , black)",
            }}
          ></span>
        </span>
        <h2 className="relative w-full h-full">
          <FlagText
            text="Education "
            charDelay={0.1}
            className="text-3xl lg:text-6xl  font-bold absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[30%]  capitalize *:text-shadow-zinc-950 z-20"
          />
        </h2>
      </div>
      <figure className="lg:w-1/4  absolute top-30 lg:top-20 left-1/2 -translate-1/2 z-0">
        <Image
          className="lg:w-full lg:h-full  lg:bg-contain"
          src="/img/me2.png"
          alt=""
          width={300}
          height={300}
        />
      </figure>
      <div className="w-full h-5  flex justify-center items-center gap-5 absolute top-[12%] lg:top-[23%] left-1/2 -translate-1/2">
        {/* left  */}
        <span className="w-30 h-px bg-linear-to-l from-purple-500 to-black"></span>
        {/* circle  */}
        <span className="w-2 h-2 rounded-full bg-purple-600"></span>
        {/* right  */}
        <span className="w-30 h-px bg-linear-to-r from-purple-500 to-black"></span>
      </div>
      <div className="py-[10%] px-[5%] lg:py-[5%] flex flex-wrap justify-between h-[200vh] overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col justify-evenly items-center ">
          <h3 className="lists1 text-2xl ">Programming & Web Design</h3>
          <h4 className="lists1 w-[70%] text-center">
            Free Higher Education Institute (Approved by Ministry of Science,
            Research and Technology of Iran) 2025
          </h4>
          <p className="lists1"> July 2025 – August 2025</p>
          <ul className="list-disc space-y-4 lg:space-y-8 *:mx-5">
            <li className="lists1">
              Successfully completed a certified course in Programming and Web
              Design
            </li>
            <li className="lists1">
              Officially recognized and verifiable through the Ministry of
              Science (HEIS)
            </li>
            <li className="lists1">
              Certificate issued by the Ministry of Science, Research and
              Technology
            </li>
          </ul>
          <Link href="/Certificate.pdf" target="_blank">
            <figure>
              <Image
                className="images"
                src="/img/Certificate-vezarate-ulume.png"
                alt="parnian "
                width={400}
                height={400}
              />
            </figure>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-evenly items-center ">
          <h3 className="text-2xl lists2">Front-End Web Development</h3>
          <h4 className="lists2">Parnian EDU Group - tehran</h4>
          <p className="lists2"> March 2025 – October 2025</p>
          <ul className="list-disc space-y-4 lg:space-y-8 *:mx-5">
            <li className="lists2">
              Completed an intensive front-end development program (150+ hours)
            </li>
            <li className="lists2">
              Covered HTML, CSS, JavaScript, and modern front-end practices
            </li>
            <li className="lists2">
              Hands-on project-based learning with focus on real-world
              applications
            </li>
          </ul>
          <Link href="/img/Certificate-parnian.jpg" target="_blank">
            <figure>
              <Image
                className="images"
                src="/img/Certificate-parnian.jpg"
                alt="parnian "
                width={400}
                height={400}
              />
            </figure>
          </Link>
        </div>
      </div>
    </section>
  );
}
