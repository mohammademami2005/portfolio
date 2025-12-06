import Image from "next/image";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Page() {
  return (
    <>
    <Header />
    <main className="w-full h-[1000vh] bg-[url(/img/background1.jpg)] bg-contain ">
      <Home />
      <About />
      <Projects />
      <Skills />
    </main>
    </>
  );
}
