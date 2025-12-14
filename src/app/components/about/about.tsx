// import React, { useEffect, useRef } from "react";
import TextSpan from "./textSpan";
import FlagText from "../FlagText";
import AboutImg from "./aboutImg";
import AboutLinks from "./AboutLinks";

export default function About() {
  return (
    <section className="w-full h-[200vh]  about bg-black" id="about">
      <div className="w-full h-[30vh]  flex justify-center items-center relative">
        <span className="capitalize w-[80%] lg:w-auto text-center  text-6xl lg:text-9xl absolute top-1/2 left-1/2 transform -translate-1/2 z-0 text-stone-700 font-extrabold opacity-50">
          ABOUT ME
          <span
            className="w-full h-full absolute top-0 left-0 "
            style={{
              background: "linear-gradient(to right, transparent 80% , black)",
            }}
          ></span>
        </span>
        <h2 className="relative w-full h-full">
          <FlagText
            text="About me "
            charDelay={0.1}
            className="text-3xl lg:text-6xl  font-bold absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[30%]  capitalize *:text-shadow-zinc-950 z-10"
          />
        </h2>
      </div>
      <div className="w-full h-5  flex justify-center items-center gap-5">
        {/* left  */}
        <span className="w-20 h-px bg-linear-to-l from-purple-500 to-black"></span>
        {/* circle  */}
        <span className="w-2 h-2 rounded-full bg-purple-600"></span>
        {/* right  */}
        <span className="w-20 h-px bg-linear-to-r from-purple-500 to-black"></span>
      </div>

      <div className="w-full h-[150vh] flex flex-wrap justify-evenly items-start">
        <AboutImg />
        <div className="w-full lg:w-1/2 h-full  flex flex-col *:text-center *:lg:text-start justify-start  gap-12 pt-[10%]">
          <h3 className="text-4xl lg:text-6xl">
            Hey! i'm{" "}
            <strong className="h3bg">
              MOHAMMAD
              <TextSpan />
            </strong>
          </h3>
          <p className="lg:w-3/4 text-lg lg:text-xl text-gray-400 px-[7%] lg:px-0 text-justify">
            I'm Mohammad Emami, a Frontend Developer passionate about crafting
            clean, responsive, and interactive web experiences. I specialize in
            HTML, CSS, JavaScript, TailwindCSS, MUI, React, and Next.js.
          </p>
          <p className="lg:w-3/4 text-lg lg:text-xl text-gray-400 text-justify px-[7%] lg:px-0">
            I’m always exploring new techniques and pushing the boundaries of
            what’s possible on the web. Whether it’s building smooth animations,
            responsive layouts, or modern interfaces, I aim to create websites
            that feel fast, aesthetic, and alive.
          </p>
          <div className="w-full h-50 flex flex-col justify-evenly items-center lg:items-start ">
            <h4 className="text-3xl">connect with me</h4>
            <AboutLinks />
          </div>
          <div className="bg-white backdrop-blur-2xl w-1/3 h-14 rounded-4xl mx-auto lg:mx-0">
            <a
              href="/mohammad-emami-resume.pdf"
              download={"mohammademami-resumeh"}
              className="flex justify-center items-center w-full h-full  transform transition-all duration-500 text-sm lg:text-lg hover:text-xl cursor-pointer h3bg font-bold"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
