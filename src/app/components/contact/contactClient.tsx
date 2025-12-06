"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { DirectInbox, Send } from "iconsax-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactClient() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sec1Ref = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = document.getElementById("contact");
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current || !sec1Ref.current || !section) return;
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".selected-item");
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration:1,
          ease:'power3.inOut',
          scrollTrigger: {
            trigger: sec1Ref.current,
            start: "top 90%",
            end: "bottom 20%",
          },
        }
      );

      const formItem = gsap.utils.toArray('.form-selected-item')
      gsap.fromTo(
        formItem,
        {
          opacity: 0,
          x: 80,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          delay:1,
          duration:0.5,
          ease:'power3.inOut',
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 90%",
            end: "bottom 20%",
          },
        }
      );

      gsap.fromTo(
        imgRef.current,
        { scale: 0, opacity: 0, y: 0 },
        {
          scale: 1,
          opacity: 1,
          duration:2,
          stagger:0.2,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "bottom 10%",
          },
        }
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      {" "}
      <figure className="w-full flex justify-center items-center absolute top-0 left-1/2 -translate-1/2">
        <Image
          src={"/img/me-contact.png"}
          alt="mohammademami contact"
          width={500}
          height={500}
          ref={imgRef}
        />
      </figure>
      <div
        ref={containerRef}
        className="w-full h-screen flex flex-wrap justify-center items-center "
      >
        <div
          ref={sec1Ref}
          className="w-1/2 flex flex-col justify-start items-start *:text-start pl-[10%] gap-4"
        >
          <h3 className="text-3xl font-bold selected-item">
            Let's work together
          </h3>
          <p className="text-lg text-gray-300 selected-item">
            I’m available for full-time positions and freelance projects.
          </p>
          <p className="text-lg text-gray-300 selected-item">
            If you're looking for someone who cares about quality and detail,
            feel free to reach out.
          </p>
          <p className="text-lg text-gray-300 selected-item">
            I look forward to connecting with you soon.
          </p>
          <a
            href="mailto:emami20052008@gmail.com"
            className="bg-purple-800/50 rounded-xl flex justify-center items-center gap-3 p-4 selected-item"
          >
            <Send size="24" color="#d9e3f0" className="-rotate-45" />
            <span>emami20052008@gmail.com</span>
          </a>
        </div>
        <div className="w-1/2 h-screen flex justify-center items-center" ref={formRef}>
          <div className="w-[80%] h-[80%] rounded-2xl border border-gray-400 flex flex-wrap p-[5%] bg-white/10 backdrop-blur-xs">
            <div className="w-1/2  flex flex-col justify-center items-center">
              <label htmlFor="" className="w-full text-start pl-4 form-selected-item">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-10/12 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none form-selected-item"
              />
            </div>
            <div className="w-1/2  flex flex-col justify-center items-center">
              <label htmlFor="" className="w-full text-start pl-4 form-selected-item">
                Your Email
              </label>
              <input
                type="text"
                placeholder="John@gmail.com"
                className="w-10/12 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none form-selected-item"
              />
            </div>
            <div className="w-full  flex flex-col justify-center items-center">
              <label htmlFor="" className="w-full text-start pl-5 form-selected-item">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                className="w-11/12 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none form-selected-item"
              />
            </div>
            <div className="w-full  flex flex-col justify-center items-center">
              <label htmlFor="" className="w-full text-start pl-5 form-selected-item">
                Massage
              </label>
              <textarea
                placeholder="Hello, i'd like to discuss a project..."
                cols={10}
                rows={5}
                className="w-11/12 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none form-selected-item"
              ></textarea>
            </div>

            <button className="w-11/12 h-16 bg-purple-700 mx-auto rounded-2xl flex justify-center items-center gap-3 cursor-pointer form-selected-item hover:*:rotate-360 ">
              <Send size="24" color="#d9e3f0" className="-rotate-45 transform transition-all duration-200" />
              send massage
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
