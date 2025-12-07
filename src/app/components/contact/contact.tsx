import React from "react";
import FlagText from "../FlagText";
import ContactClient from "./contactClient";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="mt-[60vh] relative bg-[url(/img/background1.jpg)] border-b border-b-gray-600" id="contact">
      <div className="w-full h-[30vh]  flex justify-center items-center relative">
        <span className="capitalize text-8xl lg:text-9xl absolute top-1/2 left-1/2 transform -translate-1/2 z-20 text-stone-300 font-extrabold opacity-50">
          CONTACT
          <span
            className="w-full h-full absolute top-0 left-0 z-20"
            style={{
              background: "linear-gradient(to right, transparent 80% , black)",
            }}
          ></span>
        </span>
        <h2 className="relative w-full h-full">
          <FlagText
            text="Contact"
            charDelay={0.1}
            className="text-5xl lg:text-6xl  font-bold absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[30%]  capitalize *:text-shadow-zinc-950 z-10"
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

      <ContactClient />

    </section>
  );
}
