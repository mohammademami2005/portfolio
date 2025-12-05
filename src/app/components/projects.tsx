import React from "react";
import FlagText from "./new";
import ShowProjects from "./projectsComponents.tsx/projects";

export default function Projects() {
  return (
    <section>
      <div className="w-full h-[30vh]  flex justify-center items-center relative">
        <span className="capitalize text-9xl absolute top-1/2 left-1/2 transform -translate-1/2 z-0 text-stone-700 font-extrabold opacity-50">
          PROJECTS
          <span
            className="w-full h-full absolute top-0 left-0 "
            style={{
              background: "linear-gradient(to right, transparent 80% , black)",
            }}
          ></span>
        </span>
        <h2 className="relative w-full h-full">
          <FlagText
            text="Projects "
            charDelay={0.1}
            className="text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[30%]  capitalize *:text-shadow-zinc-950 z-10"
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
      <ShowProjects />
    </section>
  );
}
