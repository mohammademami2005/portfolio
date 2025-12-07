import Image from "next/image";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer";

export default function Page() {
  return (
    <>
    <Header />
    <main >
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
    </>
  );
}
